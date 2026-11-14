# Phase 1 Calibration — NA Alloy M52B28 Tune & 8HP Commission

**Phase:** 1 Calibration  
**System tags:** `[ECU]` `[DRIVETRAIN]` `[FUEL]`  
**Shop-mandatory:** Partial — tuner for base map dialing and flex fuel validation; all 8HP calibration is DIY in MTune  
**Prerequisites:** M52B28 running on MaxxECU (`11-ecu-chassis-wiring.md`); 8HP installed and CAN harness wired (`07-8hp-swap.md`); ethanol content sensor installed inline on fuel feed (`08-fuel-system.md`); Bosch LSU 4.2 wideband O2 sensor installed

---

## Overview

Phase 1 calibration is intentionally lightweight. The alloy M52B28 is a known, well-characterized engine on MaxxECU — a base map from MaxxECU or a MaxxECU-familiar NA M52 tuner gets the car fully driveable without a custom dyno session. The goal is a reliable, flexible-fuel capable baseline while Phase 2a and Phase 2b build in parallel offline.

Three things get done here:
1. Load and dial in the NA M52 base map (road tune or light dyno session)
2. Commission 8HP CAN shift calibration in MTune
3. Validate the flex fuel sensor so the car blends correctly on pump 93 and E85

---

## 1 — MaxxECU Base Map

MaxxECU provides NA M50/M52 base maps in the MTune base map library. The M52B28 with VANOS is well-characterized; a qualified MaxxECU tuner can dial in idle, AFR at cruise, and ignition timing in a 1–2 hour road-tune session without dyno time.

**What the base tune covers:**
- Idle speed and idle ignition correction
- VE table baseline (volumetric efficiency — sets injector PW across the RPM/load range)
- Ignition timing table (conservative first pass — advance is added after knock thresholds are confirmed)
- VANOS cam timing map (intake cam advance vs. RPM and load)
- Cold start and warm-up enrichment
- Rev limiter set to 7,500 RPM (advance to 7,800+ only after a confirmed valvetrain check and tuner sign-off)

**Tuner recommendation:** Contact the same MaxxECU-familiar tuner who will handle Phase 3a. Establishing the relationship now costs less later — they already have the car's profile when the turbo M52B28 arrives.

> **If the ITB kit is on the car (end-of-Phase-1 timing path):** the session changes shape — ITBs require alpha-N fueling at idle/low load (shared-plenum MAP is too erratic) with MAP blended in at higher load. MaxxECU supports TPS/MAP blend natively, but this is a few hours of real tuning + six-throttle sync, not the 1–2 hr base-map dial-in. Confirm the tuner has ITB-on-MaxxECU experience specifically — the TPS/MAP blend is the skill; a speed-density-only tuner burns hours learning it. Given the short NA window before the built motor arrives, a driveable alpha-N map (base map + road session + MTune autotune passes) is the right scope — save the polished dyno tune for the turbo session.

> **Track day on the interim map:** acceptable IF WOT AFR is verified first — 3–4 logged pulls confirming AFR across the rev range. Sustained high-RPM load is where an unverified alpha-N map hurts a motor (lean holes up top + air-density drift). For the day: fatten the high-load VE area ~10%, drop rev limit to ~7,200, review wideband logs between sessions and short-shift if AFR creeps lean.

**MTune base map location:** MTune → File → Open Base Map → BMW M50/M52 NA (with VANOS). Select the highest-displacement (2.8L M52B28) variant if available; otherwise use the M52B25 map and scale injector characterization data for the larger displacement.

> ⚠️ **Pitfall:** The MaxxECU M50 pre-terminated harness ships with a Bosch LSU 4.2 wideband sensor. Confirm MTune is set to LSU 4.2 (not LSU 4.9) under Sensors → Lambda → Sensor Type. Wrong sensor type = incorrect AFR reading and an overly rich or lean tune.

---

## 2 — 8HP Shift Calibration

The 8HP CAN connection (MaxxECU ↔ 8HP TCU via MaxxECU 8HP GEN1 harness #2287) is configured in MTune. No separate TCU programming is required — MaxxECU handles all shift logic.

**MTune 8HP config path:** Advanced → 8HP → 8HP clutch control

### Initial Settings

| Parameter | Starting Value | Notes |
| --- | --- | --- |
| Clamp Start | 25% | Lower bound of clutch engagement ramp |
| Clamp End | 90% | Upper bound of clutch engagement ramp |
| Virtual Clutch | Enabled | Allows gradual clutch engagement from stop without a pedal |
| Shift mode | SEQ / Auto | Set per DCTShifter paddle position |

### Validation Drive

After settings are entered, drive the following sequence and log in MTune:
1. Slow stop-and-go (parking lot) — confirm no clunk at creep-away
2. Steady cruise upshifts at 30% throttle — shifts should be smooth, no flare
3. Firm 50% throttle upshifts — confirm no slip (RPM should drop cleanly to gear ratio, not hang)
4. Paddle manual shifts at 60% throttle — should be firm without being harsh

Adjust Clamp Start upward (stiffer engagement) if the car creeps excessively or slips. Adjust downward if launch from a stop is abrupt. These values are refined over the first 200–500 miles of real driving.

> ⚠️ **Pitfall:** Power sequencing is critical — 8HP KL30 main power must be live 10–15 seconds before KL15 wakeup is asserted. Confirm the relay board wiring matches `07-8hp-swap.md` Step 7. If TCU fails to initialize, SEQ mode will not function.

---

## 3 — Flex Fuel Sensor Validation

The Continental GM 13577429 ethanol content sensor (wired to MaxxECU DIN 3) enables continuous E0–E85 blending. Validate before running any E85 through the system.

**MTune config:** Inputs → Digital Inputs → DIN 3 → Function: Flex Fuel Sensor

### Calibration Steps

1. **Pump 93 (E0–E10) baseline:**
   - Fill with pump 93 octane
   - Start engine, warm to operating temp
   - In MTune Live Data: confirm Ethanol Content reads 0–10%
   - Log at idle and light cruise — should be stable

2. **50/50 blend verification:**
   - Drain ~half tank, fill with E85 to bring total to approximately 50/50 mix
   - Confirm sensor reads ~40–50% ethanol (actual E85 at the pump is typically 51–83% depending on season and region, so 50/50 mix = ~25–40% sensor reading)
   - In MTune: confirm the flex fuel scalar is blending the VE table proportionally — log AFR at idle and cruise, compare to pure-93 baseline

3. **Full E85 fill:**
   - Fill with E85
   - Confirm sensor reads in the 51–83% range
   - Log AFR at idle and light throttle (no boost at Phase 1)
   - If AFR is leaner than the tuned target at the blend level, the flex fuel scalar needs tuner adjustment

> ⚠️ **Pitfall:** The flex fuel map does NOT auto-tune itself — it scales the base tune's VE table by the tuner-defined ethanol scalar. If the base tune's pump-93 AFR is off, the E85 AFR will also be off at the same magnitude. Get the pump-93 tune correct first, then validate the blend.

---

## 4 — EPS Assist Initial Set

With the car driveable, set the EPowerSteering KIT-33 assist knob to a starting point before the first extended road session.

- Recommended starting position: **60% (roughly 7 o'clock on a 10-position dial)** — provides moderate assist at both low speed and highway without excessive sensitivity
- Drive the first 50+ miles and evaluate: if highway feels twitchy, reduce; if parking requires effort, increase
- Note the final setting for reference before full Phase 3a EPS re-calibration

Source: `13-eps.md` calibration section.

---

## Ongoing (Phase 1 Service Interval)

| Interval | Action |
| --- | --- |
| 3,000 miles or 6 months | Engine oil change — 5W30 or 5W40 full synthetic |
| Annual | Coolant pH check; replace if pH <7 |
| Annual | Confirm ethanol content sensor reads correctly on a known pump-93 fill |
| At Phase 3a hand-off | Drain M52B28 oil; pull all 12 valve shim clearances and document; this gives Phase 3a a baseline before the turbo M52B28 drops in |

---

## References

- `07-8hp-swap.md` — 8HP CAN harness, TCU power sequencing
- `08-fuel-system.md` — ethanol content sensor wiring and DIN 3 assignment
- `11-ecu-chassis-wiring.md` — MaxxECU install, relay board, first start procedure
- `13-eps.md` — EPS assist calibration notes
- [MaxxECU MTune base map documentation](https://www.maxxecu.com/webhelp/advanced-basemaps.html)
- [MaxxECU 8HP virtual clutch](https://www.maxxecu.com/webhelp/advanced-8hp-virtual_clutch.html)
- [Injector Dynamics MaxxECU characterization data (ID850)](https://help.injectordynamics.com/support/solutions/articles/4000198369-maxxecu)

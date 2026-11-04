# Phase 3a: M5x Turbo Coolant System

**Phase:** 3a
**System tags:** `[COOLANT]` `[THERMAL]` `[ELECTRICAL]`  
**Shop-mandatory:** No — all owner-performed  
**Prerequisites:** M5x turbo longblock installed; K64 turbo installed (`19b-m5x-turbo.md`); Phase 1 coolant baseline in place — CSF aluminum radiator, SPAL fan, Mishimoto expansion tank (`09-coolant.md`)

---

## Overview

The M5x turbo coolant system differs from the Phase 3b 07K path in one key way: **the mechanical water pump is retained.** No CWA400 EWP. The M50/M52 belt-driven pump handles the main engine circuit at all RPM.

What this adds for the turbo build:

1. **Water pump quality check and replacement** — done at longblock teardown by VAC
2. **Turbo water jacket feed and return lines** — -4AN braided lines from block coolant port to turbo center section; passive during normal running
3. **Post-shutdown turbo coolant circulation** — small auxiliary pump on a timer relay to prevent turbo bearing coking after shutdown (the mechanical pump stops when the engine does)

**On AC:** The OEM M52 belt-driven AC compressor comes off at turbo install — K64 manifold routing and turbo placement make the OEM compressor location untenable, and the belt path is simplified by removing it. The replacement is the **12V electric scroll compressor** (PD2-18012AJA) already fully specced in `37-ac.md`. No RPM limit concern, no belt involvement, controlled via PMU16 O7. `37-ac.md` is documented as Phase 3b but applies identically to Phase 3a — pull it forward alongside the PMU16.

Replace the accessory belt and tensioner at longblock install. Confirm the correct shorter belt part number after removing both the PS pump (EPS conversion) and the OEM AC compressor from the belt path — see `15-m5x-turbo-sourcing.md` on belt routing.

---

## Parts

| Part | PN / Source | Cost |
| :---- | :---- | :---- |
| **OEM-spec water pump** — replace at VAC teardown regardless of condition | FCP Euro or ECS Tuning — search "M50 water pump" for correct E34/E36 fitment. Hepu or Swag OEM-quality. | ~$80–120 |
| **Turbo coolant feed line** — -4AN braided SS, ~300–400mm | Summit Racing or AN Fittings Store — measure in-car | ~$40–60 |
| **Turbo coolant return line** — -4AN braided SS, ~400–600mm | Summit Racing | ~$40–60 |
| **T-fitting for coolant feed** — 3/4" barb or AN T, to tap the upper hose post-thermostat | Fragola / Earl's / Summit — confirm hose ID at install | ~$15–25 |
| **M50/M52 coolant port adapter** (alt feed point) — M14×1.5 or M16×1.5 to -4AN male adapter | AN Fittings Store or Summit — confirm block port thread at teardown | ~$15–25 |
| **-4AN inline check valve** | Fragola 672204 or equivalent spring-loaded -4AN check valve — prevents backflow through CWA50 when engine is running at full mechanical pump pressure | ~$25–40 |
| **Post-run auxiliary pump (CWA50 or equivalent)** — 12V, ~50W, compact. Sources: Bosch 0 392 023 004 (used in BMW N54 charge cooler circuit — available used from N54 donor car or FCP Euro ~$140 new); BMW auxiliary pump 64 11 6 917 727 (heater circulation pump, used OEM ~$40–80). Confirm fitment at sourcing. | FCP Euro / eBay OEM pull | **~$40–150** |
| **Timer relay module** — adjustable 12V, 3–10 min range, triggers from key-off signal falling edge | Adjustable relay timer (Amazon/eBay ~$20); or use MaxxECU post-run GPO if MaxxECU is configured for post-run output | ~$20 |
| **Inline -4AN orifice restrictor** (turbo oil feed — if not already installed per `19-m5x-oil-system.md`) | See `19-m5x-oil-system.md` — do not double-install | — |
| High-temp thread sealant | Loctite 565 or equivalent | ~$10 |
| DEI Titanium heat-sleeve (for any AN line within 18" of turbo housing or exhaust manifold) | DEI 010424 | ~$20–30 |

---

## Procedure

### Step 1 — Water Pump Replacement at VAC

VAC replaces the water pump as part of the longblock build. The M50/M52 mechanical pump lives at the front of the block driven by the accessory belt. Even if the existing pump appears functional, a used pump of unknown history should not go back in.

Specify at the VAC drop-off scope discussion: **replace the water pump with an OEM-spec unit.** It is inaccessible once the timing cover and accessory belt are reassembled — doing it now saves a future timing cover R&R.

> ⚠️ **High-RPM note:** At 8,000–9,000 RPM, the mechanical pump impeller spins proportionally fast. The main risk is cavitation if coolant degasses or the coolant mix is wrong — not flow rate itself. Mitigate by maintaining a proper 50/50 OAT coolant/distilled water ratio and correct system pressure (appropriate pressure cap). **Redline Water Wetter** (~$10) directly addresses this: Redline's own product page states it "reduces or eliminates bubbles or vapor barrier that form on hot metal surfaces" and "reduces cavitation" by reducing surface tension so vapor micro-bubbles on hot metal break up faster rather than sustaining the cavitation cycle. Not M50/M52-specific — applicable to all metal cooling systems. ([redlineoil.com/waterwetter](https://www.redlineoil.com/waterwetter))

---

### Step 2 — Turbo Coolant Feed Line

The K64 Stage 2 turbo's center section has coolant ports for water-cooling the bearing housing. These **must** be connected — without coolant flow, heat soaks the center section after shutdown and cokes the oil in the bearing gallery (coking = solid carbon deposits that block the oil passage and destroy the turbo on the next startup).

**Feed routing:**

The preferred feed point is the **upper radiator hose on the engine side** (post-thermostat, before the radiator). This is a hot coolant point — exactly what the turbo water jacket needs during normal running.

1. Install a 3/4" barb T-fitting into the upper hose at a straight section. Clamp both sides with stainless hose clamps. Confirm T barb ID matches the -4AN hose or use a barb-to-AN adapter.

2. Route -4AN braided line from the T-fitting → turbo center section coolant **inlet** (check inlet vs. outlet marking on the center section — often labeled on Garrett turbos). Typically the inlet is the upper port.

3. Route -4AN braided return line from the turbo center section coolant **outlet** → back to the expansion tank lower fitting (or a T into the lower hose, which is the cold/return side). The return must allow gravity drainage — no uphill sections on the return run.

4. Sleeve any braided line section within 18" of the turbo housing or exhaust manifold with DEI Titanium heat-sleeve. Tie off the rest away from moving belt components.

> ⚠️ **Do not use the heater core circuit as a tap point.** The heater core circuit has a 4-port valve that may restrict or stop flow. Tap the main cooling circuit directly.

---

### Step 3 — Post-Shutdown Auxiliary Pump (CWA50 Circuit)

**The problem:** When the engine stops, the mechanical pump stops. The turbo center section retains significant heat from the exhaust housing side. Without coolant flow, the residual heat bakes the oil in the bearing gallery — **coking.** Coked oil passages are the single most common cause of premature turbo failure on turbocharged street/track cars that skip post-run cooling.

This is not a DIY concern — it is BMW's documented factory concern. BMW's own Technical Training documentation for the N54/N55/B48 states: "By operating an electric coolant pump even after the engine has been switched off it is possible to dissipate the residual heat from the turbochargers and thus prevent the oil in the bearing housing from overheating." ([BMW ST055 Turbocharging Technology](https://ia800902.us.archive.org/26/items/BMWTechnicalTrainingDocuments/ST055%20Engine%20Electronics/08_Turbocharging%20Technology.pdf)) Every modern BMW turbocharged engine has this circuit from the factory.

**The solution:** A small auxiliary pump runs coolant through the turbo water jacket circuit for 3–5 minutes after shutdown. The main engine coolant doesn't need to circulate — just the turbo water jacket.

> **Optional for pure street use:** If you always idle the car for 2–3 minutes before shutdown after any boost use, coking risk is minimal — the mechanical pump continues circulating and the turbo cools passively. The CWA50 circuit is **mandatory for track use** (where you shut down in the paddock immediately after hot laps) and strongly recommended for any street car that will see sustained boost. If you skip it initially, you can add it later — all the plumbing taps are in the upper hose and expansion tank.

**Install the CWA50 (or equivalent auxiliary pump) inline on the turbo coolant feed side:**

```
T-fitting (upper hose)
       │
       ├── normal running: mechanical pump pressure drives flow forward through
       │   check valve (open in forward direction) → turbo inlet → turbo outlet
       │   → expansion tank (gravity return)
       │
       └── CWA50 auxiliary pump inlet
               │
               ▼
          CWA50 outlet
               │
               ▼
       Check valve (prevents backflow into CWA50 during normal engine operation)
               │
               ▼
       T back into main turbo feed line → turbo inlet
```

**Wiring:**

| Method | Setup |
| :---- | :---- |
| **PMU16 (best — if installed)** | PMU16 can hold a CWA50 output active post-key-off based on a MaxxECU CAN CLT message — the pump runs until CLT drops below 70°C rather than a fixed timer. Temperature-based cutoff is cleaner than a timed relay. Assign CWA50 to a PMU16 output channel; configure post-run hold via PMU16 software with CLT CAN source from MaxxECU. See PMU16 note below. |
| **MaxxECU post-run GPO** | In MTune: Outputs → Output config → spare GPO → Function: Post-run timer. Set duration: 300 seconds (5 min). MaxxECU holds the GPO active for the set duration after ignition-off. Wire GPO → relay coil → CWA50 +12V from a fused BATT line (not ignition-switched). |
| **Standalone timer relay (fallback)** | Adjustable 12V timer relay module (~$20). Trigger from ignition-switched +12V falling edge (key-off). Holds CWA50 relay closed for the set duration (3–5 min). Power CWA50 from fused BATT+ through the relay. |

> **PMU16 on the M5x turbo build:** PMU16 is already installed from Phase 1 (see `11-ecu-chassis-wiring.md` Step 4). At Phase 3a, the existing Phase 1 channel configuration carries over unchanged. CWA50 post-run cooling can be handled via PMU16 with a temperature-based cutoff (better than a dumb timer) — assign a spare PMU16 output and configure the duty cycle / cutoff threshold in Ecumaster PMU software.

**Relay coil flyback diode:** 1N4007, cathode (banded end) to relay coil pin 86 (+12V), anode to pin 85 (GPO / timer output). Prevents voltage spike back into ECU output when coil de-energizes.

**CWA50 power:** Feed from a dedicated 15A fused BATT+ circuit. The pump draws ~4–7A at full load — a 15A fuse is adequate. GND to chassis GND stud.

**Check valve orientation:** Install the -4AN inline check valve on the **return** leg from the turbo coolant outlet back to the expansion tank. This prevents hot coolant from being pushed backward by the mechanical pump during normal running. Confirm flow direction arrow on the check valve body matches the intended return flow direction.

---

### Step 4 — System Fill, Bleed, and Leak Check

5. **Fill coolant via Mishimoto expansion tank.** 50/50 OAT coolant + distilled water (BMW-compatible, silicate-free). Do not use tap water.

6. **Start engine and run to thermostat open.** The thermostat on M50/M52 opens at ~88°C. Run until fully open, then squeeze the upper hose periodically to push air bubbles toward the expansion tank. Top off and cap.

7. **Post-run test:** After a heat cycle, shut down the engine and verify the CWA50 activates within ~5 seconds of shutdown. Confirm coolant flows through the turbo water jacket by gently touching the return line — it should be warm and you may feel slight flow vibration. Time the pump running: should run for the configured duration (3–5 min), then cut.

8. **Inspect after first heat cycle:** Check all hose clamps and AN fittings for seepage. Turbo coolant return confirmed gravity-downward at all points.

---

### AC — Electric Compressor

The OEM M52 belt-driven AC compressor is removed at turbo install. The replacement is the 12V electric scroll compressor (PD2-18012AJA) documented in full in `37-ac.md`. That walkthrough covers mounting, wiring (PMU16 O7, MaxxECU DIN enable, idle-up config), oil flush to POE 68, line fabrication, and commissioning.

`37-ac.md` is marked Phase 3b but has no 07K dependency — install it at Phase 3a alongside the turbo. PMU16 is already being pulled forward (see Step 3), so the O7 output and CAN control path are in place.

**Belt:** With OEM AC compressor removed and EPS already deleting the PS pump, confirm the correct shorter belt part number for the remaining accessory drive (alternator + mechanical water pump only). See `15-m5x-turbo-sourcing.md` on belt routing without PS pulley; apply the same logic with AC pulley also absent.

---

## References

- `19-m5x-oil-system.md` — turbo oil feed/drain and pan baffle
- `19b-m5x-turbo.md` — turbo install, K64 Stage 2 kit
- `09-coolant.md` — Phase 1 coolant baseline (CSF radiator, SPAL fan, Mishimoto tank)
- `15-m5x-turbo-sourcing.md` — auxiliary water pump and belt routing notes
- [Garrett Turbo Oil Restrictors guidance](https://www.garrettmotion.com/knowledge-center-category/racing-and-performance/turbo-oil-restrictors-oil-supply/)
- [Overrun Tuning E36 M5x Turbo Guide — coolant routing](https://www.overruntuning.com/e36-turbo-guide)
- [FCP Euro M50 water pump](https://www.fcpeuro.com/)

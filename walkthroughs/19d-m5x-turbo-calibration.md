# Phase 4a — Turbo M52B28 Dyno Tune & Break-In

**Phase:** 4a  
**System tags:** `[ECU]` `[ENGINE]` `[FUEL]` `[AIR]`  
**Shop-mandatory:** Dyno tune — yes. All break-in and post-tune calibration steps are DIY.  
**Prerequisites:** Turbo M52B28 installed and commissioned — oil/coolant no-leak check complete; first idle confirmed; boost system plumbed (`19b-m5x-turbo.md`, `19c-m5x-coolant-turbo.md`); Bosch LSU 4.2 wideband O2 installed; Phase 1 Calibration baseline complete (`14-m52-na-calibration.md`)

---

## Overview

Phase 4a is the first turbo tune session. The turbo M52B28 iron-block longblock (built at VAC, Phase 2a) is now installed with the K64/Overrun manifold, GTX3076R, Turbosmart wastegate, and CXRacing FMIC. The MaxxECU NA M52 map from Phase 1 is a starting point only — the VE table, ignition timing, and boost control tables all require a custom dyno session before any real driving.

**Do not drive under boost until the dyno tune is complete.** The NA M52 base map has no boost fuel enrichment and no knock protection for positive MAP. A single unprotected WOT pull under boost can detonate and damage pistons.

### Mechanical Boost Prevention

Two-layer approach — hardware first, software backup:

**Layer 1 — Disconnect the FMIC outlet pipe (primary, hardware):** During commissioning (first start through oil/coolant shakedown) leave the charge pipe from the FMIC outlet to the throttle body physically disconnected. The turbo spins and compresses air into the FMIC, but the outlet is open to atmosphere — zero boost can reach the intake manifold. Reconnect at the dyno shop immediately before the tune session.

This is the only method that is completely ECU-independent. If the base map behaves unexpectedly or MTune settings aren't what you think, the hardware disconnect still works.

**Layer 2 — MTune MAP sensor protection (software failsafe):** In MTune: *Engine Protection → MAP sensor protection → Max MAP: 102 kPa*. Any positive MAP (>2 kPa above atmospheric) triggers an ignition cut. Set this before the FMIC pipe is connected and leave it active until the tune session removes it. Source: [MaxxECU Engine Protection documentation](https://www.maxxecu.com/webhelp/advanced-engine_protection.html).

**Layer 3 — Boost solenoid GPO disabled:** Leave the boost solenoid GPO output pin unassigned in MTune until the tune session. The Turbosmart ProGate50 defaults to spring-only (~5–7 psi) with no solenoid signal — combined with the 102 kPa MAP cut, the ECU fires a protection cut before any meaningful boost develops even from spool.

---

## 1 — Pre-Dyno Checklist

Before bringing the car to the dyno, confirm all of the following:

| Item | Check |
| --- | --- |
| Oil filled — mineral-based (not synthetic) for break-in | ✅ |
| Coolant filled, no air pockets, expansion tank cap seated | ✅ |
| Turbo oil feed line and drain line leak-checked at idle | ✅ |
| Turbo water jacket lines connected and flow-verified | ✅ |
| Wastegate actuator plumbed to boost solenoid | ✅ |
| Boost solenoid wired to MaxxECU GPO 1 | ✅ |
| Flyback diode (1N4007) installed at boost solenoid connector | ✅ |
| FMIC charge piping clamps torqued; no boost leaks at idle MAP check | ✅ |
| Wideband O2 sensor installed and reading in MTune Live Data | ✅ |
| Ethanol content sensor reading correctly on known pump 93 fill | ✅ |
| No CEL / sensor faults in MTune | ✅ |

> ⚠️ **Pitfall — boost solenoid flyback diode:** The 1N4007 diode must be installed at the BOOST_SOL connector (cathode to +12V pin, anode to GPO 1 pin). A missing diode causes a voltage spike into the GPO output at de-energization, eventually destroying the MaxxECU output. Confirm before the first boost run.

---

## 2 — Dyno Tune Session

**Budget:** $1,000–1,500 (MaxxECU-familiar dyno shop, full turbo tune session, flex fuel scaling)

### Recommended Tuner

**VAC Motorsports** — [vacmotorsports.com](https://vacmotorsports.com) · (215) 462-4666  
Philadelphia PA. In-person Mustang Dyno and Dynopack at their facility. Same shop building the Phase 2a engine — they have full build context. VAC's standard in-house platforms are OEM ECU, KMS, and MoTeC; MaxxECU is "approved on a case per case basis" per their tuning page. Call ahead to confirm they'll take a MaxxECU + turbo M52B28 — the existing build relationship makes this likely. Standalone ECU (forced induction) starting at $1,199, hourly at $130–190/hr depending on ECU complexity. Source: [vacmotorsports.com/bmw-dyno-tuning-philadelphia](https://vacmotorsports.com/bmw-dyno-tuning-philadelphia/).

**Note on BE Racing Tuning** (beracingtuning.com / (386) 453-3260): BE Racing specializes in forced induction M5x on the **OEM MS41/42/43 ECU** — they do not tune MaxxECU. Source: [beracingtuning.com](https://beracingtuning.com/).

**What the tuner delivers:**
- VE table calibrated under boost (MAP from -60 to +250 kPa)
- Ignition timing table with appropriate knock-safe margins (iron block M52 tolerates moderate advance under boost)
- Boost control table: open-loop wastegate duty cycle vs. RPM and throttle (starting target ~12 psi pump 93, ~18 psi E85)
- Flex fuel scalar: continuous blend scaling from E0 → E85 on a single map — no map switching
- 8HP shift pressure refinement under boost (upshift behavior at WOT — shift pressure must increase proportionally)
- Rev limit: set at 8,200 RPM (the 8,500 RPM ceiling is structural margin; leave 300 RPM buffer for the first tune)
- **8HP downshift RPM inhibit:** configure a maximum engine RPM below which downshifts are permitted. Set conservatively at 7,000 RPM for the initial tune — the 8HP will not execute a downshift command if the resulting engine RPM would exceed this limit. This prevents timing chain slack events under hard engine braking at high RPM. See `18-m5x-timing-oil-pump.md` for the mechanical context. Revisit after break-in if the limit feels restrictive on the track.
- **If the ITB kit is fitted:** fuel table runs TPS/MAP blend (alpha-N under boost is standard ITB-turbo practice — TPS primary at low load, MAP blended in as boost builds). Expect added session time for blend calibration; confirm ITB experience at booking — see `14-m52-na-calibration.md` note.

**Tuner briefing points:**
- Iron-block M52B28, forged internal VAC build (CP-Carrillo rods, VAC pistons, solid shim conversion)
- 5150 AutoSport Street/Drift Turbo Cams (turbo-specific profile — bring cam card to dyno session; tuner sets timing to cam card spec, not factory)
- Target: 400–500whp pump 93 / 550–650whp E85 at 8,000–8,200 RPM ceiling
- 8HP shift: MaxxECU GEN1 CAN harness, virtual clutch enabled — tuner adjusts clamp start/end under load
- Flex fuel sensor: Continental GM 13577429 on DIN 3, characterization data already in MTune

---

## 3 — Break-In Protocol (0–500 Miles)

The VAC-built longblock has a fresh rotating assembly — rings need seating cycles. Same protocol as the 07K break-in (`40-calibration.md` / Phase 4b).

| Rule | Spec |
| --- | --- |
| Oil type | Mineral-based conventional — Castrol GTX 5W30 or equivalent |
| RPM limit | **5,500 RPM** (higher than the 07K limit because the M52B28 ring seal seats faster on a known-good iron bore) |
| Boost limit | **8 psi max** (wastegate spring pressure only — no solenoid command during break-in) |
| Load | Vary load — no constant-throttle cruise longer than 5 minutes |
| No long idles | 5-minute idle maximum continuously |
| Cool-down | 2–3 minutes low-load after any spirited segment before shutoff |
| Coolant temp | Stay below 100°C |

> ⚠️ **Post-shutdown cooling:** The Pierburg CWA50 auxiliary pump (Phase 3a coolant setup, `19c-m5x-coolant-turbo.md`) runs for 5 minutes after ignition-off via MaxxECU post-run GPO. Confirm this circuit is functional before any heat soak risk — a coking event in the GTX3076R center section is expensive.

### First Oil Change — 500 Miles

1. At 500 miles (or 3 months, whichever first): drain and refill with fresh mineral oil.
2. **Send oil sample to Blackstone Labs.** This is the baseline — all future samples are compared against it. Flag: iron (ring/bore), copper (bearings), aluminum (pistons or block). Elevated iron in the first sample is normal for new rings; elevated copper or aluminum is not.
   - Blackstone kit: [blackstone-labs.com](https://blackstone-labs.com) — ~$30, results ~1 week
3. After 500-mile change: switch to **Motul 300V 15W50** (full synthetic, high-zinc, friction-modifier-free). Permanent oil spec for this build.

---

## 4 — Flex Fuel Map Validation

Same procedure as Phase 1 Calibration (`14-m52-na-calibration.md` Section 3), but now validated under boost.

1. **Pump 93 baseline** — confirm sensor reads 0–10%, AFR on target at idle, cruise, and a low-boost pull (8 psi, 4,000–6,000 RPM)
2. **50/50 blend** — confirm sensor reads ~25–45%, AFR scales correctly with the blend
3. **Full E85** — confirm sensor reads 51–83%, AFR at tuned E85 target, then run a full WOT pull at the tuner's approved boost level

If AFR at any blend point differs from expected by more than ±0.5 lambda, return to tuner before continuing. Do not adjust the flex fuel scalar yourself — it interacts with the VE table.

---

## 5 — Post-Break-In Valvetrain Audit (1,000 Miles)

The turbo M52B28 uses solid shim tappets (Alien Engineering conversion installed at VAC, `17-m5x-head-valvetrain.md`). Check all 24 valve clearances after break-in.

**Clearance specs (M50/M52 with solid shims):**

| Valve | Clearance (cold) |
| --- | --- |
| Intake | 0.25–0.30 mm |
| Exhaust | 0.30–0.35 mm |

> ⚠️ **Pitfall:** Tight exhaust shims under boost = valve held slightly open at TDC = compression loss = burned valve face. This is engine-life-critical on a boosted build. Do not skip the 1,000-mile check.

If any shim is out of range: pull the valve cover, remove the cam carrier, swap to the correct shim size. Alien Engineering shim kit — same source as Phase 2a (`17-m5x-head-valvetrain.md` references section).

---

## 6 — 8HP Shift Calibration Refinement (Under Boost)

The 8HP shift pressure under WOT boost is higher than under NA conditions. After the dyno tune and 200+ real miles:

- Log a WOT 2→3 and 3→4 upshift in MTune
- Confirm RPM drops cleanly to gear ratio at the shift point — no flare (slip) or harsh jerk
- If slipping: increase shift pressure in MTune → Advanced → 8HP → Shift Pressure table (WOT row)
- If jerky: reduce shift pressure (less common — the 8HP is robust, excessive softness causes more issues than firmness)

Source: `07-8hp-swap.md` Section 7 (CAN calibration).

---

## 7 — EPS Assist Recalibration

The turbo M52B28 changes front-end weight relative to the NA M52. Revisit the EPowerSteering KIT-33 assist knob after 100+ miles on the new engine.

- Highway feel may differ with altered weight distribution
- If the car feels lighter on-center than Phase 1: reduce assist slightly
- Final setting carries to Phase 3b unless the 07K swap changes front weight further

---

## References

- `17-m5x-head-valvetrain.md` — solid shim conversion spec and Alien Engineering shim sourcing
- `19b-m5x-turbo.md` — boost solenoid wiring, flyback diode location
- `19c-m5x-coolant-turbo.md` — CWA50 post-shutdown cooling circuit
- `14-m52-na-calibration.md` — Phase 1 Calibration baseline (flex fuel sensor validation, 8HP initial setup)
- `40-calibration.md` — Phase 3b Calibration (07K break-in protocol, same structure for reference)
- [Blackstone Labs oil analysis](https://blackstone-labs.com)
- [MaxxECU 8HP virtual clutch](https://www.maxxecu.com/webhelp/advanced-8hp-virtual_clutch.html)
- [Injector Dynamics MaxxECU characterization data (ID850)](https://help.injectordynamics.com/support/solutions/articles/4000198369-maxxecu)

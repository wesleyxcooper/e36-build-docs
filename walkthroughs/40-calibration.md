# Post-Dyno Calibration & Break-In Milestones

**Phase:** 4  
**System tags:** `[ECU]` `[ENGINE]` `[DRIVETRAIN]`  
**Shop-mandatory:** Partial (dyno tune = shop; all other steps = DIY)  
**Prerequisites:** Commissioning complete (`38-commissioning.md`); dyno tune complete (MaxxECU 07K map, flex fuel scaling, 8HP shift calibration — $600–1,200 budget); 07K break-in period in progress

---

## Overview

Phase 4 covers the sequence of post-dyno calibration steps, break-in milestones, and software-side calibrations that happen in the first ~1,000 miles of street operation. These are not optional polish items — the 07K break-in protocol is engine-life-critical, the oil sample is the only objective data on internal wear rates, and the flex fuel map validation closes out the fueling system.

**Phase 4 is also the first time the full system operates together under real driving conditions.** Many integration issues (8HP clutch model feel, EPS assist level at speed, AC idle interaction) only manifest in real use — expect iteration.

---

## 07K Break-In Protocol

### Why Strict Break-In Matters

The 07K uses a fresh rotating assembly (new pistons, rings, bearings). Ring seal requires controlled loading cycles — alternating light load and moderate load — to seat properly. If the engine is pushed hard before rings seat, blow-by increases and the ring seal never achieves full compression efficiency. Bore wash from extended low-load idle is equally harmful.

Source: `E36_DIY_Build_Checklist.md` line 788.

### Break-In Rules (0–500 miles)

| Rule | Spec |
| --- | --- |
| Oil type | Mineral-based (not synthetic, not semi-synthetic) — e.g. Castrol GTX 5W30 conventional |
| RPM limit | **4,000 RPM hard limit** |
| Load | Vary load — do not cruise at constant throttle for more than 5 minutes |
| No boost | No intentional boost (>0 psi). The base boost map should be set to wastegate spring pressure only (~5–7 psi) at the dyno; confirm with tuner |
| No long idles | Do not idle for more than 5 minutes continuously |
| Cool-down laps | After any spirited driving segment, 2–3 minutes of low-load driving before shutoff |
| Coolant temp | Stay below 100°C; do not drive if temp is rising above normal |

### First Oil Change — 500 Miles

1. At 500 miles (or 3 months, whichever comes first): drain and refill with fresh mineral oil.
2. **Send the 500-mile oil sample to Blackstone Labs** for analysis. The baseline sample establishes normal wear metal levels for this specific engine — all future samples are compared against it.
   - Blackstone kit: [blackstone-labs.com](https://blackstone-labs.com) — kit is ~$30, results emailed in ~1 week
   - Flag elements to watch: iron (ring/bore wear), copper (bearing wear), aluminum (piston or block wear). Normal new-engine run-in shows elevated iron in the first sample — if copper or aluminum is elevated, investigate before continuing.
   - Source: `E36_DIY_Build_Checklist.md` line 789.

3. After 500-mile change: switch to **Motul 300V 15W50** (full synthetic racing oil). This is the permanent oil spec for this build. Do not use oil with friction modifier packages (avoid "Energy Conserving" or "Resource Conserving" API ratings for a high-revving, solid-lifter engine).
   - Source: `E36_DIY_Build_Checklist.md` Ongoing Maintenance Schedule, line 797.

---

## MaxxECU — 8HP Shift Pressure Calibration

4. **8HP shift pressure calibration is a software-only step in MaxxTune** (MTune) — no hardware changes required. This calibration is done at the dyno by the tuner for the first pass, but can be refined in street driving.

5. The 8HP shift pressure (line pressure) controls how aggressive the clutch packs grab during a gear change. Too low = slipping during hard acceleration. Too high = harsh, jerky shifts.

6. Post-dyno: in real driving, evaluate shift quality at:
   - Gentle cruise upshifts (1–2–3–4 at 20–50% throttle)
   - Hard acceleration upshifts (WOT 1–2–3–4)
   - Manual paddle shifts (Sport mode)
   - Kickdown behavior (highway passing)

7. If shifts feel harsh or slipping: log a gear change event in MTune, compare clutch pressure command vs RPM drop during the shift. Adjust in MaxxTune → 8HP → Shift Pressure table. Source: `E36_DIY_Build_Checklist.md` line 790.

---

## Flex Fuel Map Validation

8. **Before running E85:** confirm the ethanol content sensor is calibrated and reading correctly in MTune. Run a known reference:
   - Pump 87 (E0–E10): sensor should read 0–10%
   - 50/50 blend of pump E85 and 91 oct (typical ~E42): sensor should read ~40–45%
   - Pure E85 (actual content varies 51–85% depending on season/region): sensor should read in that range

9. **50/50 blend validation run:**
   - Fill tank with a measured 50/50 blend of pump E85 and 91 oct
   - Confirm MTune Flex Fuel table is active (Fuel → Flex Fuel → enabled)
   - Road drive (no boost run needed) — log AFR at idle, cruise, and light throttle. Verify the blend curve is scaling injector PW proportionally to ethanol content. If AFR is unexpectedly lean at the blend, the flex fuel scalar is incorrect — return to tuner.
   - Source: `E36_DIY_Build_Checklist.md` line 791.

10. **Full E85 validation:**
    - After confirming 50% blend behaves correctly: fill with E85
    - Confirm sensor reads correctly (51–85% expected)
    - Confirm MTune is applying the full E85 enrichment scalar
    - Log a light WOT pull (2,500–4,000 RPM, no boost) and confirm AFR is in the tuned target range
    - Return to tuner if any anomaly

---

## Valvetrain Audit — Solid Shim Clearances

11. At 1,000 miles (after break-in is complete and oil has been changed): **check all 20 solid shim valve clearances** with a feeler gauge.

    The 07K uses solid lifter shims. Shim clearances change as the valvetrain seats. A shim that was in spec at assembly can tighten as the valve seat wears in — a tight intake valve on a turbocharged engine causes burning.

12. Clearance specs (from `30-07k-install.md`):
    - **Intake:** 0.15–0.20mm (feeler gauge goes in, slight drag)
    - **Exhaust:** 0.20–0.30mm (slightly wider due to thermal expansion)
    - These are the same specs as at install — no change to the target, just a post-break-in confirmation that the shims haven't shifted.
    > ⚠️ **Pitfall:** 07K exhaust valves run hot under turbo boost. A tight exhaust shim causes the valve to hold slightly open at TDC, loses compression, and burns the valve face. Don't skip this audit at 1,000 miles.

13. If any shim is out of range: remove the cam carrier, pull the relevant lifter bucket, swap shim for the correct size. Alien Engineering solid lifter shims are the recommended source (see `30-07k-install.md` → References).

---

## EPS Assist Refinement

14. After 200+ miles of real driving with the EPS column active: revisit the EPowerSteering Adjustment Knob assist level.
    - **Highway (70+ mph):** should feel light and settled without requiring active correction
    - **Parking / low speed:** should feel assisted enough that three-point turns are effortless
    - If the car feels twitchy at highway speeds but you want more low-speed assist: the Adjustment Knob is a single-point control — there is no speed-sensitive mapping in the Basic EPS Controller (KIT-33). Choose the assist level that prioritizes the driving you do most.
    - Source: `36-eps.md` Calibration section; `harnesses/eps-column.wv`

15. If the Z3 rack is added later (Phase 5 plan item — drops lock-to-lock from ~900° to ~720–800°): re-calibrate EPS lighter again, as the already-quick ratio becomes even more reactive.

---

## AC Duty Cycle Refinement

16. With the AC system fully charged and the car running in warm ambient conditions: fine-tune the PWM controller duty cycle.
    - Start point from commissioning: ~45% (~3,000 RPM)
    - Adjust upward in 5% steps while monitoring:
      - Vent temperature (target: ≤55°F at 90°F ambient)
      - Idle stability in MTune (should not drop more than ~100 RPM from idle-up target)
    - Source: `harnesses/ac-compressor.wv`; `37-ac.md` Step 16.

---

## 8HP Virtual Clutch Pedal Calibration (Post-Break-In Refinement)

17. After 200+ miles of 8HP use: evaluate the virtual clutch feel at the start (creep, clutch slip from stop).
    - MTune → Advanced → 8HP → 8HP clutch control → Clamp Start / Clamp End values
    - Adjust clamp start to control the "biting point" feel
    - Adjust clamp end to control full-engagement sharpness
    > ⚠️ **Pitfall:** Do not skip clamp calibration. All ramp features (including virtual clutch) use the clamp start/end values. Incorrect values = wrong clutch pressure at pedal extremes. Verify with a slow pedal sweep while watching AIN 5 % in MTune live data before driving. Source: `E36_DIY_Build_Checklist.md` line 362.

---

## References

- `E36_DIY_Build_Checklist.md` — Phase 4, Calibration & Ongoing Maintenance (lines 786–803)
- `38-commissioning.md` — first-start procedure (prerequisite to this walkthrough)
- `30-07k-install.md` — valve clearance specs and shim sourcing
- `36-eps.md` — EPS calibration notes
- `37-ac.md` — AC duty cycle commissioning
- [Blackstone Labs oil analysis](https://blackstone-labs.com)
- MaxxECU 8HP virtual clutch: [maxxecu.com/webhelp/advanced-8hp-virtual_clutch.html](https://www.maxxecu.com/webhelp/advanced-8hp-virtual_clutch.html)

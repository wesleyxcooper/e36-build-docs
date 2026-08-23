# First Start — Commissioning Procedure

**Phase:** 3  
**System tags:** `[ECU]` `[ENGINE]` `[SAFETY]`  
**Shop-mandatory:** No (but fire extinguisher and a second person strongly recommended)  
**Prerequisites:** All Phase 3 subsystems complete — 07K installed (`30-07k-install.md`), intake/boost (`31-air-boost.md`), fuel system (`32-fuel-injection.md`), coolant/turbo (`33-coolant-turbo.md`), ECU harness finalized (`34-ecu-harness-final.md`), DBW throttle calibrated (`35-dbw-throttle.md`); Bosch LSU 4.2 wideband O2 sensor installed with 18mm × 1.5 bung welded (shop)

---

## Overview

This walkthrough covers the ordered sequence from pre-start checks through the first engine start on the MaxxECU 07K base map. The goal of commissioning is **not tuning** — it is confirming mechanical health: no leaks, oil pressure in range, coolant temp stable, no dangerous misfires. Do not attempt any boost runs until commissioning is complete and a shop dyno tune is scheduled.

The shop dyno tune (MaxxECU 07K map, flex fuel scaling, 8HP shift calibration) is budgeted at **$600–1,200** and must follow commissioning. Source: `E36_DIY_Build_Checklist.md` line 782.

---

## Safety First

> ⚠️ **Do not attempt first start without:**
> - A Kidde Halotron 2.5lb (or equivalent) fire extinguisher within arm's reach of the driver/operator — not across the garage.
> - A functional fuel system pressure check (see Step 6).
> - All coolant hoses fully seated and clamps torqued.
> - A second person present to watch the engine bay while you watch the MTune laptop.
>
> A lean first start on a warm engine can detonate on the first pull. A fuel fitting left loose can spray mist onto a hot turbo manifold. Source: `E36_DIY_Build_Checklist.md` line 367.

---

## Parts / Equipment

| Item | Notes |
| --- | --- |
| Fire extinguisher (2.5lb Halotron) | Already mounted in cabin per Phase 1 checklist |
| Spark tester (≥12kV rated) | e.g. OTC 6589 or equivalent |
| Smoke machine | For intake vacuum leak test |
| Fuel pressure gauge (0–100 psi) | Inline or schrader port |
| Timing light | For crank angle offset verification (optional if done in `34-ecu-harness-final.md`) |
| Laptop with MTune running | MaxxECU ECU connected via USB |
| Wideband controller (Innovate LC-2 or similar) | Connected to Bosch LSU 4.2 |
| Feeler gauges | For post-start valve clearance spot-check reference |

---

## Procedure

### Step 1 — Coil Pack Output Test (Engine Off)

1. Remove all five spark plugs. Install spark tester on each coil wire / coil-on-plug in turn.
2. In MTune: Outputs → Ignition outputs → individual coil test (or use the ignition test function if available).
3. **Every coil must produce ≥12kV spark.** A weak or no-spark coil is the leading cause of post-start misfires that are nearly impossible to diagnose under the noise of a running engine.
   > ⚠️ **Pitfall:** Weak coils cause misfires that are extremely difficult to diagnose once the engine is running under boost. Test all five before the first start, not after. Source: `E36_DIY_Build_Checklist.md` line 773–774.

4. Reinstall spark plugs. Torque to spec (see `30-07k-install.md` for plug spec and gap).

### Step 2 — Intake Vacuum Leak Test (Smoke Machine, Engine Off)

5. Cap the throttle body air inlet (downstream of the MAF / turbo outlet pipe).
6. Connect smoke machine to a vacuum port on the intake manifold. Pressurize to ~5–8 psi.
7. Walk every joint: throttle body gasket, injector seals, manifold-to-head gasket, MAP sensor port, BOV return port, idle bypass port. Any visible smoke = a leak that must be fixed.
   > Vacuum leaks that pass smoke will pass boost. A lean condition from a vacuum leak cannot be tuned around — the fueling table will be correct but the actual mixture in the cylinder will be lean. Fix before tuning.

8. When clean: remove caps and smoke machine.

### Step 3 — Boost Charge Side Pressure Test (Compressor to Throttle Body)

9. Cap both ends of the charge path (turbo outlet pipe inlet, throttle body inlet).
10. Use a hand pump or shop compressor to bring the charge path to **~15 psi** (below first boost target — just confirming joints).
11. Spray soapy water on every coupling, clamp, and BOV flange. Bubbles = leak.
   > ⚠️ **Pitfall:** Boost leaks are the single most common commissioning problem. A coupling that held vacuum will sometimes blow open under boost because the pressure differential direction reverses. Source: `E36_DIY_Build_Checklist.md` line 781.

12. Fix any leaks. Re-test until clean before proceeding.

### Step 4 — Verify Crank Angle Offset (MTune, Engine Off → Crank-No-Start Test)

13. **Verify trigger setup in MTune before cranking for start:**
    - Crank → VR input, **N-1 / 60-2 pattern**
    - Cam → **Hall / HOME input**, +5V supply type
    - See `34-ecu-harness-final.md` Step 7 for full trigger setup procedure.
    > ⚠️ **Pitfall:** The 07K crank trigger offset must be calibrated before the first start. This is a software setting (Trigger Setup → Crank Angle Offset); incorrect offset = no-start or very rough running. If the offset was not calibrated during harness finalization, do it now with a timing light against a degree wheel while cranking (injectors disabled) before enabling fuel. Source: `E36_DIY_Build_Checklist.md` line 778.

14. **Disable injectors** in MTune (Outputs → Injectors → disable all channels). Crank for 3 seconds. In MTune live data: confirm crank signal is detected (RPM > 0 while cranking) and cam HOME signal fires at least once per revolution. If no RPM signal: check sensor wiring, gap, and connector orientation before proceeding.

15. Re-enable injectors.

### Step 5 — Oil Pressure Protection Map

16. In MTune: Engine Protection → Oil Pressure → configure a minimum oil pressure threshold vs RPM curve:
    - ≤1,000 RPM (idle): minimum ~10 psi
    - ≥3,000 RPM: minimum ~50 psi
    - MTune will cut ignition if pressure drops below the curve at any RPM.
    > ⚠️ **Before first start:** Configure the MaxxECU oil pressure protection map. Critical at 9,000 RPM — a momentary oil starvation event destroys bearings before you can react. Source: `E36_DIY_Build_Checklist.md` line 779.

17. Confirm oil pressure sensor is reading correctly with key-on / engine-off: should read atmospheric (~0 psi). If reading nonzero with engine off, check sensor wiring and calibration in MTune.

### Step 6 — Fuel System Pressure Check

18. Key-on, engine-off: MTune → Outputs → Fuel pump relay → enable for 3 seconds (or use the fuel prime function).
19. Monitor fuel pressure gauge. With engine off, rail should hold **~55 psi** (MAP-referenced) or the spec of the FPR set point. A slow pressure drop indicates a leaking injector or check valve. A fast drop indicates a loose fitting.
20. Inspect all -6AN fittings at the rail, FPR, and hard-line transitions. No drips, no fuel smell.

### Step 7 — Wideband O2 Warm-Up

21. The Bosch LSU 4.2 wideband O2 requires ~20 seconds to reach operating temperature. Verify the controller (Innovate LC-2 or equivalent) shows "ready" status before logging AFR. During the first start the sensor will be heating — AFR data in the first ~30 seconds is not reliable.
    > Verify the wideband sensor is a genuine Bosch LSU 4.2. Aftermarket clones give inaccurate readings at WOT and rich lambda — tune quality depends on accurate AFR data. Source: `E36_DIY_Build_Checklist.md` line 780.

### Step 8 — First Start

22. Open the radiator bleed nipple (if applicable) and the heater core bleed valve. Have coolant on hand.
23. Confirm all plug-in coolant hose connections are fully seated and clamps are snug.
24. IGN-on → one brief crank (1–2 seconds). Check for fuel pressure stability, any leak sounds or smells. Stop immediately if you smell raw fuel inside the cabin.
25. Full crank until start. The 07K base map should bring it up within 3–5 seconds of cranking on a cold engine.

**On start:**
- Immediately look at MTune: oil pressure (should be ≥20 psi within the first 2 seconds of running)
- Second person watches engine bay for smoke, fuel spray, coolant weeping
- If oil pressure does not appear within 3 seconds of running: **shut down immediately**. Do not continue cranking.

26. Let the engine idle at cold-start enrichment. **Do not blip the throttle or load the engine until coolant temp exceeds 70°C** — the 07K bore coating (Alusil / Nikasil-style) requires a gentle initial heat cycle.

### Step 9 — Coolant Bleed

27. With engine idling: monitor coolant temp in MTune. Watch for coolant weeping at any hose joint. Open bleed nipples briefly when the coolant reaches 50°C to purge air pockets.
28. The CWA400 electric water pump (configured in `33-coolant-turbo.md`) should already be running at its thermostat setpoint. Verify the EWP is spinning — PMU16 O5+O14 drive it directly. The MaxxECU GPO channel for EWP PWM is confirmed at build time in `34-ecu-harness-final.md` (HD30 A6 — GPO assignment TBD at wiring stage). Note: GPO 2 = fuel pump relay — do not confuse.
29. Drive the heater to MAX heat to circulate coolant through the heater core and purge air. Monitor temp until stable.

### Step 10 — Post-First-Start Inspection

30. After 10 minutes of idle: shut down. Inspect:
    - All coolant hose joints (any weeping?)
    - All oil drain back/feed lines at turbo (any seeping?)
    - Intercooler couplings (any movement from boost pressure — even at idle vacuum pulses?)
    - Fuel rail and FPR fittings
    - Wideband bung and O2 sensor body (hand-tight is not enough — torque to spec)

31. Fix any findings. Repeat first-start procedure after fixes.

### Step 11 — Idle Stability and Base Tune Verification

32. With engine warm (coolant ≥80°C): confirm idle is stable at 800–1,000 RPM on the base map. Minor hunting is normal — the base map is not a road tune.
33. Rev briefly to 2,000 RPM in neutral. Watch wideband: should be in the 13–14:1 AFR range (slightly rich on base map is expected and acceptable pre-tune).
34. Do NOT attempt any boost runs (>0 psi) before the dyno tune.

---

## Hand-Off to Dyno Tune

- Schedule dyno tune with a tuner familiar with MaxxECU and flex fuel
- Budget: **$600–1,200** for full tune (MaxxECU 07K map, flex fuel E85/pump scaling, 8HP shift pressure calibration)
- Bring: MTune laptop, both ethanol concentrations (pump E0 and E85), any notes from commissioning (idle AFR, oil pressure at idle, any misfires observed)
- Source: `E36_DIY_Build_Checklist.md` line 782

---

## References

- `E36_DIY_Build_Checklist.md` — Phase 3 Commissioning section (lines 772–782)
- `34-ecu-harness-final.md` — trigger setup, GPO assignments
- `33-coolant-turbo.md` — CWA400 / EWP configuration
- `35-dbw-throttle.md` — throttle body calibration (must be complete before first start)
- MaxxECU MTune documentation: [maxxecu.com/webhelp](https://maxxecu.com/webhelp)

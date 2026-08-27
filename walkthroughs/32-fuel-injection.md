# Fuel Injection — 07K Injectors, Rail & Pump

**Phase:** 3  
**System tags:** `[FUEL]` `[ECU]`  
**Shop-mandatory:** No  
**Prerequisites:** 07K longblock installed (`30-07k-install.md`); BBG longitudinal intake manifold installed on engine; Radium 20-1170 fuel pump hanger already installed from Phase 1 (carries forward); flex fuel sensor already inline from Phase 1 (carries forward)

---

## Overview

This walkthrough covers installing the 07K injectors and fuel rail, upgrading to the Walbro 450LPH pump, and confirming the flex fuel sensor is correctly positioned after any fuel line re-routing. The 07K uses Bosch EV14 connectors — the MaxxECU 07K engine harness (built in Phase 2) uses EV14 pigtail ends on the engine side, replacing the EV1 pigtails from the M50 terminated harness. No other fuel ECU wiring changes.

**Injector sizing note:** ID1050x × 5 are the Phase 3 specification (verified 1050cc, E85-capable EV14). At 600 whp on E85, confirm injector duty cycle at WOT with the tuner during dyno session — if duty exceeds ~85%, a larger injector or dual-pump setup may be required at a later date. Source: `E36_9000RPM_Project_Plan_Verified.md` Turbo Selection note on injector sizing.

---

## Parts

| Part | PN / Source | Cost |
| --- | --- | --- |
| Injector Dynamics ID1050x × 5 (EV14, E85-rated) | [injectordynamics.com/injectors/id1050-xds/](https://injectordynamics.com/injectors/id1050-xds/) | Verify at order |
| BBG longitudinal 07K fuel rail | [boostbrothersgarage.com](https://www.boostbrothersgarage.com) | Included in manifold kit or separate — verify |
| Walbro 450LPH fuel pump upgrade (Radium E36 hanger kit) | Walbro F90000267 + Radium 20-1170 basket | $203.99 (kit) |
| Aeromotive 13129 compact EFI FPR (return-style, 40–75 PSI) | Carry-forward from Phase 1 | — |
| Flex fuel ethanol sensor | Carry-forward from Phase 1 ([Seems Legit Garage](https://www.seemslegitgarage.com/product-page/ethanol-content-sensor)) | — |
| -10AN braided fuel feed line | Re-route as needed for Walbro pump and 07K routing | ~$40–80 |
| EV14 injector connector pigtails | [Amazon B07STLGB7Z](https://www.amazon.com/dp/B07STLGB7Z) 8-pack | $9.93 |
| Fuel injector O-ring kit (upper + lower, per injector) | Matching O-rings for ID1050x + BBG rail dimensions | ~$20–30 |
| Lube for injector O-rings | Clean engine oil or petroleum jelly | — |

---

## Tools

- Fuel pressure gauge (-10AN fitting)
- Fuel line depressurize tool or rags + gloves
- Injector removal/install tool (optional — most EV14 injectors pull by hand with O-ring lube)
- Standard socket set
- Torque wrench
- Small pick tool (for O-ring inspection)
- Brady M210 label printer (label injector positions 1–5 before install)

---

## Procedure

### Depressurize & Disconnect Fuel System

1. Depressurize the fuel system before disconnecting any lines. With engine off, pull the fuel pump fuse or PMU16 O4 (fuel pump) disable in MTune, then crank briefly to bleed rail pressure. Confirm with fuel pressure gauge reading zero before opening any fitting.
   > ⚠️ **Pitfall:** Never open a pressurized AN fitting. E85 is less volatile than gasoline but still a fire hazard. Have rags and a pan ready — residual fuel will escape any open fitting.

2. Disconnect the -10AN feed line from the Aeromotive FPR and from the fuel rail. Cap both open ends immediately to prevent fuel spillage and contamination.

3. Disconnect the fuel return line (-6AN or OEM barb) from the FPR.

### Fuel Pump Upgrade

4. The Radium Engineering 20-1170 hanger was installed in Phase 1 and carries forward. The Phase 3 step is **swapping the pump** inside the hanger to the Walbro 450LPH (F90000267) if not already done.
   - Reference: [Radium 20-1170 install instructions (PDF)](https://cdn.shopify.com/s/files/1/0887/4193/7449/files/19-0359.pdf)
   - Wiring spec: [`fuel-pump-hanger-phase1.wv`](https://github.com/wesleyxcooper/e36-wiring/blob/main/harnesses/fuel-pump-hanger-phase1.wv) (Phase 1 discrete relay + JDT rewire kit) → [`fuel-pump-hanger-phase3.wv`](https://github.com/wesleyxcooper/e36-wiring/blob/main/harnesses/fuel-pump-hanger-phase3.wv) (Phase 3 PMU16 O4 direct-drive)
   > ⚠️ **Pitfall:** Depressurize the fuel system before opening the tank. The E36 tank has a locking ring — a large channel-lock or a BMW ring tool (rent). Don't pry it with a screwdriver; you'll crack the plastic retainer. Source: `E36_DIY_Build_Checklist.md` Phase 1 Fuel System.

5. Inside the Radium hanger: swap the old pump for the Walbro F90000267. The F90000267 uses a 39mm/50mm DCSS body that fits the Radium 20-1170 directly (confirmed fitment). Re-use the OEM E36 level sensor — plug it back into the Radium hanger's sender port.
   > ⚠️ **Pitfall (hanger terminals):** Stainless stud terminals are live in a fuel-saturated environment. Clean contact surfaces before tightening. Use ring terminals + provided acorn nuts — anti-rotation feature prevents stud from spinning during tightening. Source: `E36_DIY_Build_Checklist.md` Phase 1 Fuel System.

6. Reinstall hanger in tank. Torque locking ring. Reconnect -10AN feed line with swivel fitting (Radium 20-1000-1010) — thread hand-tight first, then attach braided line before final torque so the fitting can rotate to the correct routing angle.
   > ⚠️ **Pitfall (swivel fittings):** Thread the Radium 20-1000-1010 swivel into the pump-out port hand-tight first, then attach the -10AN braided line before final torque — lets the fitting rotate to the correct routing angle before locking. Source: `E36_DIY_Build_Checklist.md` Phase 1 Fuel System.

### Flex Fuel Sensor Position Check

7. The Continental/GM flex fuel sensor (GM 13577429 / Continental SE1004S) was installed inline on the fuel feed in Phase 1. **When re-plumbing for the Walbro 450LPH pump and new -10AN lines, confirm the inline sensor position is preserved in the new fuel feed routing.** No wiring changes needed — the MaxxECU digital input is already configured. Source: `E36_DIY_Build_Checklist.md` Phase 3 Fuel System.

   Sensor pinout (if ever reconnecting): Pin A = +12V (system voltage — NOT 5V), Pin B = GND, Pin C = signal (PWM: frequency encodes ethanol %, pulse width encodes fuel temp).

### Injector Installation

8. **Cam sensor clearance check — dry-fit first.** Community input flags that the ID1050x taller injector body can interfere with the stock 07K cam sensor at its OEM location/angle. Before installing all 5 injectors:
   - Dry-fit one ID1050x into injector position 1 (cylinder 1) with the fuel rail, but **without** pressing the O-rings fully home.
   - Check physical clearance to the cam sensor at the top of the head. If interference exists, the TTRS/RS3 cam sensor `07L905163C` uses a 90° connector and may resolve it — but verify this is a drop-in electrical and mechanical match before cutting it into the harness. A mismatched cam sensor is a no-start, not a cosmetic issue.
   > ⚠️ **Pitfall:** Verify cam sensor clearance at dry-fit — cam sensor vs ID1050x injector body interference has been flagged in the 07K swap community. If there is real interference, confirm `07L905163C` fitment (same Hall-effect signal, same probe depth, same bore) with someone who has run it before modifying the harness. Source: `E36_DIY_Build_Checklist.md` Phase 3 Fuel System.

9. Lube all injector O-rings (upper and lower) with clean engine oil or petroleum jelly — dry insertion will cut the O-ring. Press each ID1050x injector into the BBG fuel rail ports. Confirm the locking clip seats.

10. Lower the fuel rail + injectors as an assembly onto the BBG intake manifold. Press each injector tip into its port. Install fuel rail bolts finger-tight, then torque evenly — pulling down one side first tilts the rail and can bind an injector.

11. Label injectors 1–5 on the engine harness pigtails if not already done. Firing order is **1-2-4-5-3** (07K). Cylinder 1 is at the timing chain end (front of the engine in longitudinal installation). Connect EV14 pigtails in order.

### MTune Injector Configuration

12. In MTune: Engine → Injectors → set injector dead time for ID1050x from Injector Dynamics spec sheet (varies by battery voltage; dead time tables are downloadable from Injector Dynamics). Set flow rate to ID1050x rated flow at your target fuel pressure.

13. Verify fuel pressure with the Aeromotive 13129 FPR. Return-style, adjustable 40–75 PSI. Confirm the FPR return line is connected and flowing back to the tank. Set base fuel pressure (engine off, pump running): typically 43.5 PSI (3 bar) as a starting point for E85 with ID1050x.

### Pre-Start Fuel System Check

14. Before any start attempt: cycle the ignition (key on, engine off) 3× to prime the fuel system. Check under the car and around all AN fittings for any fuel seepage. Any drip = stop and fix before cranking.

---

## References

- `E36_DIY_Build_Checklist.md` — Phase 3, Fuel System (lines 679–683); Phase 1, Fuel System (lines 245–251)
- `E36_9000RPM_Project_Plan_Verified.md` — Fuel System table; Turbo Selection injector sizing note
- `harnesses/maxxecu-07k.wv` — INJ_1 through INJ_5 connectors (EV14 pigtails); FLEX_FUEL connector
- `harnesses/fuel-pump-hanger-phase1.wv` / `harnesses/fuel-pump-hanger-phase3.wv` — pump wiring spec (phase-split: Phase 1 discrete relay via JDT rewire kit vs Phase 3 PMU16 O4 direct-drive)
- [Injector Dynamics ID1050x](https://injectordynamics.com/injectors/id1050-xds/) — dead time and flow tables
- [Radium 20-1170 install instructions (PDF)](https://cdn.shopify.com/s/files/1/0887/4193/7449/files/19-0359.pdf)

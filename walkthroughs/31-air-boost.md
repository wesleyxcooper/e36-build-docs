# Air & Boost — Turbo Installation

**Phase:** 3  
**System tags:** `[AIR]` `[THERMAL]`  
**Shop-mandatory:** Partial (downpipe fabrication = shop; all other steps DIY)  
**Prerequisites:** 07K installed and mounts torqued (`30-07k-install.md`); Scaniverse envelope scan of engine bay completed with engine + manifold + turbo + wastegate in place (LiDAR envelope is the correct tool for downpipe clearance work — see project plan Pre-Fabrication: 3D Scanning Workflow); SPA TMW22 manifold and G25-660 RR on hand; Tial 44mm MVR wastegate on hand; CXRacing FMIC core carried from Phase 1A

---

## Overview

This walkthrough covers the complete air and boost system: SPA TMW22 top-mount exhaust manifold, Garrett G25-660 RR turbocharger, Tial 44mm MVR external wastegate, front-mount intercooler re-pipe, and boost solenoid plumbing. The downpipe is custom-fabricated — you provide the tube routing reference from a 3D scan; the fabricator bends it. GPO 1 (boost solenoid) becomes active for the first time in Phase 3.

**RHD orientation:** The 07K exhaust side faces the **driver side** (right side of car looking forward). The SPA TMW22 manifold, G25-660 RR turbo, wastegate, and downpipe are all on the driver side. The compressor outlet faces toward the passenger/intake side — this is why **reverse rotation** is mandatory: standard rotation would direct the compressor outlet into the firewall in this longitudinal installation.

---

## Parts

| Part | PN / Source | Cost |
| --- | --- | --- |
| SPA Turbo MK5 T3 Twin Scroll manifold (TMW22) | [spaturbousa.com](https://spaturbousa.com/products/vw-5-cyl-2-5l-20v-fsi-t3-top-mount-twin-scroll-turbo-manifold-wastegate-v-band) | $459.90 |
| Garrett G25-660 **Reverse Rotation** | [Full Race G-series](https://www.full-race.com/collections/garrett-g-series) | ~$1,800–2,000 est. |
| T3-to-V-band adapter (connects SPA T3 outlet to G25-660 V-band inlet) | Various (generic T3/V-band) | ~$35–50 |
| Tial 44mm MVR wastegate (V-band) | [turbosmart.com](https://www.turbosmart.com) or Tial vendor | $435 |
| Turbosmart 2-port PWM boost solenoid | [turbosmart.com](https://www.turbosmart.com/product-category/boost-controllers/solenoids/) | ~$65–80 |
| CXRacing FMIC core | Carry-forward from Phase 1A — core reused, all piping replaced | — |
| Intercooler piping — charge side (compressor → FMIC → intake) | Silicone hose + aluminum piping to suit G25-660 RR compressor outlet position | ~$150–300 |
| Wideband O2 bung (18mm × 1.5) — weld into manifold or downpipe upstream of turbo | Any weld bung | ~$5–10 |
| Ceramic coating — manifold + downpipe (shop) | Local coating shop | ~$150–300 |
| LPS titanium exhaust stud kit | [lpsfab.com](https://lpsfab.com/products/07k-titanium-exhaust-stud-kit) | TBD |

---

## Tools

- Socket set + extensions (T25, M10, M12, M14)
- Torque wrench
- Angle grinder with flap disc (deburr manifold gasket surface if needed)
- V-band clamp wrenches
- Smoke machine (charge-side boost leak test)
- Hose clamp pliers
- Scaniverse / iPhone 16 Pro (already used for pre-pull scan — reuse outputs here)
- Blender (export Bezier curve of downpipe path for fabricator)

---

## Procedure

### SPA TMW22 Manifold Install

1. Verify LPS Ti exhaust stud kit is installed on the 07K head. Factory VW studs are too short for the SPA manifold — this is not optional. Install with anti-seize; run torque per LPS spec.

2. Install the SPA TMW22 manifold gasket onto the 07K exhaust ports (exhaust-side of head = driver side). Lower manifold onto studs and run nuts finger-tight.

3. Torque manifold nuts in a cross pattern to spec. Do not fully torque until the manifold has been heat-cycled once (re-torque after first warm-up).
   > ⚠️ **Pitfall:** Overtorquing Ti studs cold causes them to stretch. Initial torque finger-tight + hand-snug; final torque after first heat cycle.

4. Install wideband O2 bung on the manifold primary collector, upstream of the turbo outlet, minimum 6 inches from the collector merge. This is the LSU 4.9 sensor location. Bung must be in place before manifold goes on the car if welding — or weld to the fabricated downpipe if accessible post-install.

### G25-660 RR Turbocharger

5. **Verify reverse rotation** at purchase. Standard rotation directs the compressor outlet into the firewall in this longitudinal position with the SPA MK5 manifold. The G25-660 RR uses distinct SKUs from standard rotation — double-check the part number before ordering.
   > ⚠️ **Pitfall:** Must be reverse rotation — standard rotation directs the compressor outlet into the firewall with the SPA MK5 manifold in longitudinal installation. Full Race G-series RR listings use distinct SKUs from standard rotation — double-check at purchase. Source: `E36_DIY_Build_Checklist.md` Phase 3 Air & Boost.

6. Install T3-to-V-band adapter on the SPA manifold T3 outlet (~$35–50). This adapter bridges the SPA T3 flange to the G25-660 V-band turbine inlet and adds ~25–35mm to the total stack height — account for this in hood clearance check.

7. Slide G25-660 RR turbine housing onto the V-band adapter. Orient compressor housing so compressor outlet aims toward the passenger side (intake side) — across the top of the engine toward the FMIC. Snug V-band clamp; do not final-torque until oil and coolant lines are connected.

8. Pre-oil the turbo: pour approximately 30–50 mL of clean engine oil into the oil inlet port on the center housing, rotate the shaft by hand to distribute. This prevents a dry start on first fire.
   > ⚠️ **Pitfall:** Never fire the engine for the first time with a dry turbo. Pre-oiling takes 30 seconds and prevents immediate journal bearing damage.

9. Torque turbine-side V-band clamp. Torque compressor-housing V-band clamp (if adjusted from factory). Refer to Garrett V-band torque spec.

### Tial 44mm MVR Wastegate

10. Install Tial 44mm MVR wastegate at the V-band WG provision on the SPA TMW22 manifold. 44mm is required for boost control authority above ~500 whp on E85. Install V-band clamp; align wastegate outlet toward the downpipe (or provide a separate WG dump pipe to merge downstream).

11. Install actuator spring(s) per your base boost target. Final boost curve is set in MTune via GPO 1 (boost solenoid).

### Boost Solenoid Plumbing

12. The Turbosmart 2-port PWM solenoid carries from Phase 1A. **Re-route for 07K / G25-660 RR position:**
    - Compressor outlet reference line → solenoid inlet port
    - Solenoid outlet → Tial 44mm MVR actuator port (replacing wastegate atmospheric reference)
    - This allows MaxxECU GPO 1 PWM duty to bleed actuator pressure and control boost. Higher duty = more bleed = wastegate opens later = more boost.

13. **GPO 1 is now active for the first time.** In Phase 1/2 the boost solenoid connector was unpopulated (NA M52 = no turbo). In Phase 3 the solenoid is physically plumbed and the Superseal 2-pin BOOST_SOL connector (pre-wired on harness) plugs in. No wiring change — connect the pre-run connector. Confirm in MTune that GPO 1 function = boost solenoid / open-loop boost control.
    > ⚠️ **Pitfall:** The boost solenoid flyback diode (1N4007, cathode to +12V pin, anode to GPO 1 pin) must be installed at the connector. This should have been done when the BOOST_SOL connector was built in Phase 2 — verify before connecting. Missing diode = GPO output damage at de-energization.

### 3D Scan → Downpipe Routing

14. With engine, manifold, turbo, and wastegate all installed, perform a second Scaniverse scan of the driver-side engine bay. This is the definitive scan the fabricator needs.

15. In Blender: import the OBJ, model the downpipe tube centerline as a Bezier curve from the G25-660 turbine outlet V-band, routing around/under the RHD steering rack to a 3-inch exhaust exit. The steering rack is on the driver side in RHD — the downpipe must route around it. Annotate the curve with bends, diameters, and clearance constraints.
    > ⚠️ **Pitfall:** Complete 3D scan workflow before sending downpipe to fabricator. Fabricating blind results in fitment conflicts with the RHD steering rack. The routing is unique to this car — no off-shelf RHD downpipe exists for this combination. Source: `E36_DIY_Build_Checklist.md` Phase 3 Air & Boost.

16. Send annotated Blender routing reference + scan to downpipe fabricator. Budget ~$400–600 custom fab. Request ceramic coating on manifold and downpipe simultaneously (one shop trip; ~$150–300 for both).

### FMIC Re-Pipe

17. The CXRacing FMIC core carries forward. **All Phase 1A aluminum piping is unusable** — the G25-660 RR compressor outlet position is different from the Phase 1A turbo location (if Phase 1A was run). Fabricate new charge piping:
    - Compressor outlet (driver side, passenger-facing) → FMIC inlet (front of car)
    - FMIC outlet → intake pipe → BOV/BPV → BBG intake manifold
    - Use silicone couplers + aluminum piping; route away from exhaust heat.

18. **Install Turbosmart Kompact BOV/BPV** (or equivalent) on the charge piping between FMIC and throttle body. Recirculating (BPV) is preferred for drivability — recirculates to compressor inlet. Vent-to-atmosphere (BOV) is louder and can cause rich spike on throttle lift. Either works; choose based on preference.

### IAT Sensor

19. Install IAT (intake air temp) sensor in the charge pipe downstream of the FMIC. The 07K engine harness IAT connector routes to this location. Mount minimum 4 inches downstream of the FMIC outlet for accurate post-intercooler temp readings.

### Pre-Commission Check

20. Verify all V-band clamps are torqued. Visually inspect all boost piping connections — each silicone coupler must be clamped on both sides.

21. Boost leak test before any boost run: pressurize the charge side (from compressor outlet through FMIC and all piping to the throttle body) with engine off at low pressure (~10–15 psi shop air). Listen and feel for leaks. Any vacuum leak that passes under vacuum will pass boost. Fix all leaks before attempting a boost run.

---

## References

- `E36_DIY_Build_Checklist.md` — Phase 3, Air & Boost (lines 665–677)
- `E36_9000RPM_Project_Plan_Verified.md` — Turbo Selection; Phase 3 3D Scan Workflow
- `harnesses/maxxecu-07k.wv` — BOOST_SOL connector, GPO 1 assignment (CMC B4/pin 8)
- [SPA Turbo TMW22 product page](https://spaturbousa.com/products/vw-5-cyl-2-5l-20v-fsi-t3-top-mount-twin-scroll-turbo-manifold-wastegate-v-band)
- [Full Race Garrett G-series](https://www.full-race.com/collections/garrett-g-series)
- NineX Engineering — G25-660 RR + SPA TMW22 in 944 07K builds (Rennlist 944 07K thread) — confirmed combination

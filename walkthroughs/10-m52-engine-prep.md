# M52 Engine Prep — NA M52 Path (Phase 1B)

**Phase:** 1B (Option B: NA M52)  
**System tags:** `[HEAD/VALVETRAIN]` `[TIMING]` `[OIL]` `[AIR]` `[ECU]`  
**Shop-mandatory:** No (full DIY with standard hand tools + feeler gauges)  
**Prerequisites:** All Phase 1 Foundation steps complete — MaxxECU installed, 8HP swap done, car running on MaxxECU with M52. Schrick cams and Alien Engineering solid shim kit in hand. Confirm alloy M52 block (not iron M50) before starting — verify casting and VIN decode.

---

## Parts

| Part | PN / Source | Cost |
| --- | --- | --- |
| Schrick 264/248 Camshaft Set (intake 264° / exhaust 248°) | [BimmerWorld](https://www.bimmerworld.com/Engine/Camshafts/Schrick-264-248-Camshaft-Set-E46-325i-330i-E39-525i-530i-Z3-25-30.html) | $1,779.99 |
| Alien Engineering M52 Solid Lifter Conversion Shim Kit | [Alien Engineering](https://www.alien-engineering.com/product-page/alien-engineering-bmw-m50-m52-m54-s50-s52-solid-lifter-conversion-shims) | $150.00 |
| VAC Motorsports Oil Pump Upgrade Kit (M50/M52) | [VAC Motorsports](https://store.vacmotorsports.com/vac-motorsports-oil-pump-upgrade-kit-bmw-m50m52s50s52-p1041.aspx) | $224.95 |
| M50 intake manifold | Salvage / eBay (M50B25 or M50B25TU donor) | — (source separately) |
| Feeler gauge set | Tool supply | — |
| RTV sealant (VANOS and cam carrier reassembly — as applicable) | Permatex or BMW spec | — |

---

## Tools

- Feeler gauge set (metric, 0.05–0.30mm range)
- Torque wrench (cam carrier bolts — verify BMW torque spec)
- VANOS removal tool or improvised equivalent (cap nut method per factory procedure)
- Cam carrier bolt hex sockets (BMW M52 head uses Torx or hex — confirm for your specific casting)
- Snap ring pliers (VANOS disassembly, if seals are being refreshed)
- Valve spring compressor (only if replacing lifters beyond shim swap)
- Marker or masking tape for labeling shim positions (record all 24 measurements before removing anything)

---

## Procedure

### Cam Swap — 8-Substep Procedure

> **Full reference:**  
> - [Alien Engineering solid shim video (YouTube)](https://www.youtube.com/watch?v=KtvxWkbvINI) — solid shim conversion procedure  
> - [E36 cam/lifter removal (YouTube)](https://www.youtube.com/watch?v=wRnqy-7dT28) — M52 cam/lifter disassembly

1. **Remove VANOS unit — retain all hardware.**  
   The VANOS unit must come off before the cam carriers can be unbolted. Leave all VANOS internal hardware intact — it goes back on unchanged. Mark and bag all bolts.

2. **Remove existing cam carriers and cams.**  
   Unbolt cam carriers in the reverse of the tightening sequence (work from the outside in, small increments, to avoid bending cam carrier bridges). Lift cams out carefully. Label each cam (intake vs. exhaust) and its orientation before setting aside.

3. **Measure existing valve clearances with feeler gauge — record all 24.**  
   With the existing cams still in place (before removal), rotate the crank so each cam lobe is pointing away from the follower/lifter, then measure clearance between lobe base circle and shim top with feeler gauges. Record every measurement in a table — all 24 valves. This is the baseline.  
   > ⚠️ **Pitfall:** Valve clearance measurement is the hardest part of this job. A feeler gauge that is too thick will not slide through — do not force it. Work from thinner gauges upward until you find the largest that slides with slight drag. If uncertain between two shim thicknesses, go to the **tighter (thinner) side**, not the looser side. Wrong shim sizing causes valve float or valve-to-piston contact at high RPM.

4. **Calculate required shim thickness per valve.**  
   Target clearance: **0.15–0.20mm cold** (intake and exhaust, confirm with Schrick cam documentation for 264/248 grind). Formula: required shim = (measured clearance) − (target clearance) + (current shim thickness). Remove existing shims from lifter bores and measure each with a micrometer to confirm current thickness. Source replacement shims from Alien Engineering kit to achieve target clearance on each valve.

5. **Install Alien Engineering solid shims into factory hydraulic lifter bodies.**  
   The Alien Engineering kit replaces the hydraulic element inside the OEM M52 hydraulic lifter body with a solid shim stack. Follow the Alien Engineering video procedure for the specific kit revision. Each lifter body stays in its original bore — do not mix positions.

6. **Install Schrick 264/248 cams and cam carriers.**  
   Lightly oil cam journals. Place intake cam (264° duration) in the intake side; exhaust cam (248° duration) in the exhaust side. Install cam carriers hand-tight in the correct sequence. Torque to BMW factory spec for M52 cam carrier bolts, following the tightening sequence (inside to outside, small increments). Apply fresh RTV or sealant per factory procedure at cam carrier mating surfaces where specified.

7. **Re-verify all 24 valve clearances — must be within spec before proceeding.**  
   Rotate the crank and re-measure all 24 valves with feeler gauges. Every valve must be within the 0.15–0.20mm target. If any valve is outside spec, the shim for that valve must be swapped before VANOS reinstall. Do not proceed until all 24 are confirmed.  
   > ⚠️ **Pitfall:** This re-verification step is not optional. An out-of-spec valve discovered after the VANOS is reinstalled means repeating steps 1–7.

8. **Reinstall VANOS unit.**  
   Use the original hardware removed in step 1. Torque to BMW factory spec. VANOS timing is controlled by MaxxECU GPO 3 (PWM) — no additional VANOS configuration is needed at this step; the MTune map handles it.

    > ⚠️ **Pitfall:** The M52TU VANOS uses a different cam sensor connector than the non-VANOS M50. If MaxxECU harness was built for the non-VANOS M50 connector, verify that the cam sensor has been swapped to BMW PN `12141726590` (direct-fit non-VANOS type, preferred) or that an adapter pigtail is in place before buttoning everything up. Missing or wrong cam signal = MaxxECU cannot resolve firing order = no-start.

---

### Oil Pump Upgrade

9. **Install VAC Motorsports M52 oil pump upgrade kit** ($224.95). Follow VAC Motorsports installation instructions. The M52 oil pump is accessible with the front timing cover removed. This upgrade is a direct swap — the oil pump location and plumbing is unchanged.

---

### M50 Intake Manifold Swap

10. **Swap M50 intake manifold onto the M52 head.**  
    The M50 intake manifold provides improved airflow characteristics suited to the Schrick cam profile. Source from an M50B25 or M50B25TU donor (salvage/eBay — no specific cost confirmed in source files). Verify manifold gasket is fresh. Throttle body and IAT sensor transfer from the M52 manifold or source M50 equivalents.

---

### ECU Tune

11. **Dyno tune — shop required** (MaxxECU NA M52 map on Schrick cams).  
    A base map gets the car running; a proper dyno session is required to optimize the cam timing tables (VANOS), fuel and ignition maps for the Schrick 264/248 grind, and idle air control. Do not attempt to finalize timing tables by road-tuning alone on a high-compression NA build.

---

## References

- `maxxecu-m52.wv` — GPO 3 VANOS solenoid wiring, cam sensor connector (BMW PN `12141726590`) ([diagram](https://htmlpreview.github.io/?https://github.com/wesleyxcooper/e36-wiring/blob/main/output/maxxecu-m52.html))
- [Alien Engineering Solid Shim Video (YouTube)](https://www.youtube.com/watch?v=KtvxWkbvINI)
- [E36 Cam/Lifter Removal Reference (YouTube)](https://www.youtube.com/watch?v=wRnqy-7dT28)
- [Alien Engineering Shim Kit Product Page](https://www.alien-engineering.com/product-page/alien-engineering-bmw-m50-m52-m54-s50-s52-solid-lifter-conversion-shims)
- [Schrick 264/248 Camshaft Set — BimmerWorld](https://www.bimmerworld.com/Engine/Camshafts/Schrick-264-248-Camshaft-Set-E46-325i-330i-E39-525i-530i-Z3-25-30.html)
- [VAC Motorsports Oil Pump Upgrade Kit](https://store.vacmotorsports.com/vac-motorsports-oil-pump-upgrade-kit-bmw-m50m52s50s52-p1041.aspx)
- [MaxxECU M50 Terminated Harness Docs](https://www.maxxecu.com/webhelp/wirings-terminated_engine_harness-bmw_m50.html)

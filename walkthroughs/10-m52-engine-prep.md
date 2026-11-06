# M52 Engine Prep — NA M52 Path (Phase 1)

**Phase:** 1B (NA M52 mild head work)  
**System tags:** `[HEAD/VALVETRAIN]` `[TIMING]` `[OIL]` `[AIR]` `[ECU]`  
**Shop-mandatory:** No (full DIY with standard hand tools + feeler gauges)  
**Prerequisites:** All Phase 1 Foundation steps complete — MaxxECU installed, 8HP swap done, car running on MaxxECU with M52. S52 cams (OEM, used — PN 11311405051) and Alien Engineering solid shim kit in hand. Confirm alloy M52 block (not iron M50) before starting — verify casting and VIN decode.

---

## Parts

| Part | PN / Source | Cost |
| --- | --- | --- |
| S52 OEM Camshaft Set (used) — PN 11311405051 — 252° intake / 244° exhaust, 10.2mm / 9.5mm lift | [eBay search PN 11311405051](https://www.ebay.com/sch/i.html?_nkw=11311405051+camshaft) / [Prussian Motors](https://prussianmotors.com/products/bmw-s52b32-3-2l-6cyl-camshaft-pair-intake-exhaust-m3-z3-m-oem-1996-2000-note) | $700–1,700 used |
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
- **TDC flywheel lock pin** — aftermarket equivalent of BMW tool 11 2 300. Locks crankshaft at TDC via bellhousing hole into flywheel. Required to hold crank position while cam sprockets are free. Source: Amazon / eBay ~$15–30.
- **Cam lock bars** — aftermarket equivalent of BMW tools 11 3 260/11 3 270. Lock both cams in the neutral (base) position when sprockets are removed. Source: Amazon / eBay ~$20–50 for the pair.
- Timing chain retaining hook or cable ties — to support upper timing chain while VANOS is off so it does not drop into the lower timing cover.

---

## Procedure

### Cam Swap Procedure

> **Scope:** Head stays on the engine. Engine stays in the car. The lower timing chain (crank to cam sprockets) is never touched. The upper timing chain (between cam sprockets, routed through the VANOS) goes slack when the VANOS is removed — retain it with cable ties or a chain hook so it doesn't drop into the lower cover. Source: BMW E36 Service Manual — *"Camshafts on 6-cylinder engines can be removed with the cylinder head mounted on the engine."* ([manuals.sucatisse.com/e36/116/116-4](https://manuals.sucatisse.com/e36/116/116-4))

> **Full reference:**  
> - [Alien Engineering solid shim video (YouTube)](https://www.youtube.com/watch?v=KtvxWkbvINI) — solid shim conversion procedure  
> - [E36 cam/lifter removal (YouTube)](https://www.youtube.com/watch?v=wRnqy-7dT28) — M52 cam/lifter disassembly  
> - [FCP Euro M52 timing procedure](https://www.fcpeuro.com/blog/how-to-set-timing-on-a-bmw-e36-m50tu-m52-s50-s52-engine) — cam lock bar and sprocket alignment

1. **Lock crank at TDC.**  
   Insert flywheel lock pin through the bellhousing into the flywheel (BMW tool 11 2 300 or aftermarket equivalent). This holds the crank fixed with cylinder 1 at TDC while the cam sprockets are free. Do not rotate the crank again until after VANOS is reinstalled and the lock pin is removed. Source: BMW E36 Service Manual step 2 ([manuals.sucatisse.com/e36/116/116-4](https://manuals.sucatisse.com/e36/116/116-4)).

2. **Remove VANOS unit — support upper timing chain.**  
   Remove the VANOS unit per factory procedure. Removing the VANOS releases the cam sprockets from the cams — the upper timing chain (between the sprockets) goes slack. Immediately support it with cable ties or a chain hook; do not let it drop into the lower timing cover. Mark and bag all VANOS hardware — it goes back on unchanged.

3. **Install cam lock bars.**  
   Fit the cam lock bars (BMW tools 11 3 260/11 3 270 or aftermarket equivalent) onto the flat machined section at the back of both cams. This locks both cams in the base (neutral) position with cam lobes off all lifters. Source: FCP Euro timing procedure. With lock bars in place the cams are fixed — the crank lock and cam locks together ensure no valve-to-piston contact during the swap.

4. **Measure existing valve clearances with feeler gauge — record all 24.**  
   With the original cams still installed and locked, remove the cam lock bars temporarily, rotate the crank to position each cam lobe base circle away from each lifter (crank lock pin out during measurement rotations — reinstall when done). Measure clearance between lobe base circle and shim top with feeler gauges. Record every valve in a table — all 24. This is the baseline for shim calculation.  
   > ⚠️ **Pitfall:** Valve clearance measurement is the hardest part of this job. A feeler gauge that is too thick will not slide through — do not force it. Work from thinner gauges upward until you find the largest that slides with slight drag. If uncertain between two shim thicknesses, go to the **tighter (thinner) side**, not the looser side. Wrong shim sizing causes valve float or valve-to-piston contact at high RPM.

5. **Calculate required shim thickness per valve.**  
   Target clearance: **0.15–0.20mm cold** (intake and exhaust) — this spec is for the **Phase 1 NA alloy M52B28 with S52 OEM cams (252°/244°)** only. Do not carry this spec to the Phase 2a iron-block turbo build; that build runs 5150 AutoSport turbo cams with a different clearance target (see `19d-m5x-turbo-calibration.md`). Formula: required shim = (measured clearance) − (target clearance) + (current shim thickness). Remove existing shims from lifter bores and measure each with a micrometer to confirm current thickness. Source replacement shims from Alien Engineering kit to achieve target clearance on each valve.

6. **Remove cam carriers and original cams.**  
   Reinstall crank lock pin. Reinstall cam lock bars to hold cam position. Unbolt cam carriers in reverse of the tightening sequence (outside in, small increments, to avoid bending carrier bridges). Remove cam lock bars, lift cams out. Label each cam (intake vs. exhaust) and orientation.

7. **Install Alien Engineering solid shims into factory hydraulic lifter bodies.**  
   The Alien Engineering kit replaces the hydraulic element inside the OEM M52 hydraulic lifter body with a solid shim stack. Follow the Alien Engineering video procedure for the specific kit revision. Each lifter body stays in its original bore — do not mix positions.

8. **Install S52 cams and cam carriers.**  
   Lightly oil cam journals. Place intake cam (252° duration) in the intake side; exhaust cam (244° duration) in the exhaust side. Install cam carriers hand-tight in the correct sequence. Torque to BMW factory spec for M52 cam carrier bolts, following the tightening sequence (inside to outside, small increments). Apply fresh RTV or sealant per factory procedure at cam carrier mating surfaces where specified.

9. **Re-verify all 24 valve clearances — must be within spec before proceeding.**  
   Rotate the crank (with flywheel lock removed) and re-measure all 24 valves with feeler gauges. Every valve must be within the 0.15–0.20mm target. If any valve is outside spec, the shim for that valve must be swapped before VANOS reinstall. Do not proceed until all 24 are confirmed.  
   > ⚠️ **Pitfall:** This re-verification step is not optional. An out-of-spec valve discovered after the VANOS is reinstalled means repeating steps 2–9.

10. **Reinstall VANOS unit — verify cam sprocket timing.**  
    Set crank to TDC (reinstall flywheel lock). Install cam lock bars. Align cam sprockets per FCP Euro timing procedure: exhaust sprocket holes must align with cam windows in the correct position for the existing chain. Fit VANOS using original hardware. Torque to BMW factory spec. VANOS cam timing is controlled by MaxxECU GPO 3 (PWM) — the MTune map handles it.  
    > ⚠️ **Pitfall:** The M52TU VANOS uses a different cam sensor connector than the non-VANOS M50. If MaxxECU harness was built for the non-VANOS M50 connector, verify that the cam sensor has been swapped to BMW PN `12141726590` (direct-fit non-VANOS type, preferred) or that an adapter pigtail is in place. Missing or wrong cam signal = MaxxECU cannot resolve firing order = no-start.

---

### Oil Pump Nut — Safety Wire

11. **Install BimmerWorld drilled oil pump nut + safety wire** ($12.99, includes wire).  
    **In-car via oil pan — engine stays in.**
    - Drain oil. Drop oil pan (see pitfall below — two hidden bolts).
    - Remove oil pump sprocket nut (left-hand thread — turns CW to loosen).
    - Install drilled nut, torque to **17 ft-lb** (reverse thread). Source: [bimmerworld.com](https://www.bimmerworld.com/Engine/Engine-Performance/M50-Drilled-Oil-Pump-Nut_2.html).
    - Thread safety wire through drilled hole and around sprocket spokes. Wire tension must resist the loosening direction (CW) — pull the wire CCW. Source: Tech-53 — *"left-hand threads, they have to go lefty loosey on the tension."* ([tech-53.com](https://tech-53.com/products/bmw-e36-e46-drilled-oil-pump-nut))
    - Reinstall oil pan with fresh gasket. Torque oil pan bolts to spec.
    > ⚠️ **Pitfall:** E36 oil pan has two hidden bolts at the rear of the pan that thread into the transmission bellhousing. Easy to miss — pan will not drop if these are skipped. Access them through the two holes in the front face of the bellhousing. Source: [bimmerboard.com](http://www.bimmerboard.com/forums/posts/1077597).
    > ⚠️ **Limitation:** The safety wire nut mod prevents the nut backing off (failure mode 1). It does **not** address oil pump shaft shear (failure mode 2 — sprocket shears off shaft while nut stays on). Both failure modes cause total oil pressure loss. Source: [vacmotorsports.com](https://vacmotorsports.com/bmw-oil-systems-lubricants/). The VAC OPUK addresses both — it is specified for the Phase 2a iron block build.

---

### M50 Intake Manifold Swap

12. **Swap M50 intake manifold onto the M52 head.**  
    The M50 intake manifold provides improved top-end airflow characteristics suited to the S52 cam profile. Source from an M50B25 or M50B25TU donor (salvage/eBay — no specific cost confirmed in source files). Verify manifold gasket is fresh. Throttle body and IAT sensor transfer from the M52 manifold or source M50 equivalents.

---

### ECU Tune

13. **Dyno tune — shop required** (MaxxECU NA M52 map on S52 cams).  
    A base map gets the car running; a proper dyno session is required to optimize the cam timing tables (VANOS), fuel and ignition maps for the S52 cam profile, and idle air control.

---

## References

- `maxxecu-m52.wv` — GPO 3 VANOS solenoid wiring, cam sensor connector (BMW PN `12141726590`) ([diagram](https://htmlpreview.github.io/?https://github.com/wesleyxcooper/e36-wiring/blob/main/output/maxxecu-m52.html))
- [Alien Engineering Solid Shim Video (YouTube)](https://www.youtube.com/watch?v=KtvxWkbvINI)
- [E36 Cam/Lifter Removal Reference (YouTube)](https://www.youtube.com/watch?v=wRnqy-7dT28)
- [Alien Engineering Shim Kit Product Page](https://www.alien-engineering.com/product-page/alien-engineering-bmw-m50-m52-m54-s50-s52-solid-lifter-conversion-shims)
- [S52 Camshaft Set — Prussian Motors (PN 11311405051)](https://prussianmotors.com/products/bmw-s52b32-3-2l-6cyl-camshaft-pair-intake-exhaust-m3-z3-m-oem-1996-2000-note)
- [VAC Motorsports Oil Pump Upgrade Kit](https://store.vacmotorsports.com/vac-motorsports-oil-pump-upgrade-kit-bmw-m50m52s50s52-p1041.aspx)
- [MaxxECU M50 Terminated Harness Docs](https://www.maxxecu.com/webhelp/wirings-terminated_engine_harness-bmw_m50.html)

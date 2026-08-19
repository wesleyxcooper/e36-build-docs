# 8HP70 Transmission Swap

**Phase:** 1  
**System tags:** `[DRIVETRAIN]` `[ECU]` `[ELECTRICAL]`  
**Shop-mandatory:** No (full DIY — bench flash and in-car mechanical installation)  
**Prerequisites:** MaxxECU installed, EWS2 bypassed, and M52 running on MaxxECU with Getrag still in place (see `11-ecu-chassis-wiring.md`). Rear subframe reinforcement and subframe reinstall complete. Driveshaft measurement taken and order placed before trans goes in.

---

## Parts

| Part | PN / Source | Cost |
| --- | --- | --- |
| ZF 8HP70 (Dodge RAM 1500 unit, in hand) | FB-R1 — 2014 Ram 1500 4x4 8HP70, GEN1 confirmed (STUECKL 1087), TCU inferred `1034420288` / Bosch `0260550074` | $700 delivered |
| Yanhua ACDP-2 TCU flash tool | [MaxxECU store](https://maxxecu.com/store/gearbox/tools/yanhua-acdp-2-8hpxx-tcu-tool-package) | Rent ~$138.23 / Buy ~$737.80 |
| Dodge TMU (remove from case) | Mopar `52014750AD` — discard after removal | — |
| M10×1.0 threaded caps (plug exposed ATF ports ×2) | Hardware supply | ~$5 |
| HPR × Improved Racing TCH-102-T2 Thermostatic Cooler Adapter | [HPR Tuning](https://hpr-tuning.com/products/dodge-ram-thermostatic-transmission-cooler-adapter) (SKU: `HPR-THERMO-TCA-RAM`) | ~$300 |
| HPR Setrab 8HP ATF cooler kit (Setrab 625 cooler + lines) | [HPR Tuning](https://hpr-tuning.com) | See HPR listing |
| ZF LifeGuard Fluid 8 (`S671 090 312`) | BMW/ZF dealer or online | ~$15–18/qt × ~9.5 qt |
| N54 8-bolt automatic flexplate — **BMW 8HP path only** | BMW PN `11227553157` ([ECS Tuning ES#20413](https://www.ecstuning.com/b-genuine-bmw-parts/flexplate/11227553157/)) | ~$80–150 used / ~$810 new |
| Flexplate bolts — **BMW 8HP path only** | BMW PN `11227522125` | — |
| George W. Hill M5x Starter Adapter — **BMW 8HP path only** | [Hill Performance](https://www.hillperformance.com/products/starter-adapter) | $160 |
| N54 starter — **BMW 8HP path only** | BMW PN `12412354701` | — |
| Adapter plate — **BMW N63 path** | [DomiWorks M5x→N63](https://www.domi-works.com/collections/8hp-adapter-kits) | $1,353 |
| Adapter plate — **BMW N57 path** | [PMC Motorsport M5x→N57](https://pmcmotorsport-shop.com/product-eng-2998-Gearbox-Adapter-Plate-BMW-M50-M52-M54-S50-S52-S54-BMW-ZF-8HP-8HP70-8HP50-GS6-53DZ.html) | ~$350 |
| Adapter plate — **Dodge path** | Custom — Chatham CNC (mike@chathamcnc.com / 919-740-9748) or Guru Autowerks M5x variant (contact Guru) | Quote required |
| DomiWorks Dodge 8HP70/75 RAM 1500 AWD→RWD Adapter Kit | [DomiWorks direct](https://www.domi-works.com/products/dodge-8hp70-75-ram-1500-and-ram-ecodiesel-awd-to-rwd-conversion-adapter-kit-1350) (SKU 22005004) | ~$1,069 |
| Guru Autowerks Adjustable Dodge 8HP Mount (BMW-style) | [SLG "E8X/E9X for Dodge 8HP Ram/Charg..."](https://www.seemslegitgarage.com/product-page/adjustable-universal-dodge-8hp-transmission-mount) or [Guru E9x/E8x direct](https://www.guruautowerks.com/product-page/ls-8hp70-75-upbrkt-bmw-e9x-e8x) | $240–$250 (+$50 Energy Bushing) |
| SLG E36/Z3 8HP Crossmember | [SLG](https://www.seemslegitgarage.com/product-page/e36-dct-crossmember) or [HPR direct](https://hpr-tuning.com) | $205 |
| SLG Custom 1-Piece Aluminum Driveshaft | [Seems Legit Garage](https://www.seemslegitgarage.com/product-page/single-piece-driveshaft) | $1,350 |
| SPICER #3-2-119 yoke — **Dodge AWD + DomiWorks path (this build)** | Included with DomiWorks SKU 22005004 output flange | Included |
| OEM Dodge output flange — **Dodge 2WD "Truck" path only** | PN `68417910AA` | — |
| DCT Shifter E36 | [dctshifter.com](https://dctshifter.com/) — 270GT Aluminum / 290GTE Carbon / 390GT | $454 |
| MaxxECU 8HP GEN1 CAN harness #2287 | [MaxxECU store](https://www.maxxecu.com/store/gearbox/8hp/maxxecu-8hp-gen1-cable-harness) / [LPS](https://lpsfab.com/products/maxxecu-8hp-gen1-cable-harness-bmw-8hp-shifter) | ~$368.61 |
| ISO mini relay (reverse light) | Bosch `0 332 209 150` or equivalent — 12V coil, ≥10A contact | — |
| 1N4007 flyback diode (×2: relay coil + VANOS solenoid) | Electronics supply | < $1 |

---

## Tools

- Transmission jack (mandatory — 8HP is significantly heavier than the Getrag; do not attempt without one)
- Flywheel lock tool (for manual flywheel removal — do not substitute a screwdriver)
- Torque wrench covering 6, 44, and 55 lb-ft ranges
- Metric socket set and breaker bar
- Yanhua ACDP-2 with AC adapter (bench flash — supplies 12V to TCU without the car)
- iOS device or PC for ACDP-2 Mini app (iOS recommended; Android has documented folder-permission issues) / PC software at [acdpmaster.com](https://www.acdpmaster.com/en/download.html)
- Wire crimpers, heat gun, 18 AWG wire for DCT Shifter and reverse light relay wiring

---

## Procedure

### Pre-Swap (Bench)

1. **Send Binary5 pre-confirmation email to MaxxECU before renting ACDP-2.**  
   Email `support@maxxecu.com`: *"We need Binary5 (MAPS 004) for virtual clutch / analog pedal position support. TCU is Dodge 8HP70, CPU `1034420288` / Bosch `0260550074`. Please confirm Binary5 is available for this TCU before we proceed."*  
   Binary5 is labeled "BETA 1" and is distributed manually — MaxxECU sends firmware files per-customer after receiving your TCU binary dump. If only Binary4 is available for this unit, virtual clutch is unavailable; DCT Shifter still functions in digital (binary) mode, and C2 AIN 5 wiring for clutch position is not needed.

2. **Bench flash via Yanhua ACDP-2 — no car required.**  
   The ACDP-2 AC adapter supplies 12V directly to the TCU via the mechatronic connector. Two sessions: (1) read TCU ID + binary dump → email dump + screenshot to `support@maxxecu.com`, stating trans origin (2014 Ram 1500 8HP70 Dodge); (2) receive firmware files from MaxxECU, then flash. Confirm exact TCU hardware ID via ACDP-2 read before any flash — verify against [MaxxECU hardware identifier page](https://www.maxxecu.com/webhelp/advanced-8hp-hardware_identifier.html).  
   > ⚠️ **Pitfall:** The flash must be completed before CAN control will function. After flash, TCU firmware is MaxxECU-only and cannot be used with the OE Dodge ECU. Rent the ACDP-2 if possible — single use in this build.

3. **Pan drop and ATF inspection (bench).**  
   Drop all 13 pan bolts and remove the plastic Dodge pan. Do not rely on the drain plug alone (M18×1.0, 8mm hex, 8 Nm) — pan drop gives access to the magnet and filter. Inspect pan magnet: fine black/gray metallic paste = normal wear ✅; bronze/copper-colored flakes = clutch friction material degradation ⚠️; aluminum shavings = case/planetary wear ⚠️. Inspect drained fluid in a white container: dark brown or burnt smell = stressed history. Drain and replace regardless of history.  
   > ⚠️ **Pitfall:** Chrysler quick-lube shops routinely top Dodge 8HP70s with ATF+4 — it is the wrong fluid. ATF+4 has incompatible friction modifiers that cause clutch micro-slipping and accelerated pack wear. Replace with **ZF LifeGuard Fluid 8 (`S671 090 312`)** only. Per FCA service manual: "NOT compatible with ATF+4 or any other current FCA US LLC transmission fluid."

4. **TMU delete — bench job before installation.**  
   The Dodge Transmission Management Unit (TMU, Mopar `52014750AD`) is bolted to the left side of the case (passenger side in RHD E36). It uses Ram 1500 coolant routing that does not exist in the E36 chassis and will not fit the E36 tunnel (~228mm case + ~60–80mm TMU lateral protrusion vs ~256mm inner tunnel width). BMW 8HP70 units never have this component — it is absent from all BMW-sourced swap photos. Remove 4 bolts; TMU separates into two pieces: coolant heater body + cast aluminum manifold (houses TBV + cooler line ports). Remove both as a unit from the case. Reference: [RevMax delete manual](https://manuals.plus/m/d0ce99a6bd3cd18188a5abebed567d585dc6320d60b1577f57e77db30a5fd270) · [RamForum TBV assembly diagram](https://www.ramforum.com/threads/8hp70-thermostatic-valve.109089/).  
   > ⚠️ **Pitfall:** Do this on the bench before the transmission goes near the car. The same job in-car is significantly harder. The TMU has coolant hose connections — cap the two coolant fittings with rubber caps if storing the TMU-on unit temporarily.

5. **Plug exposed ATF case ports immediately after TMU removal.**  
   Two threaded ATF ports are now exposed in the case (cooler-in and cooler-out). Thread M10×1.0 caps into both — do not leave open during storage or transport.

6. **Install HPR × Improved Racing TCH-102-T2 Thermostatic Cooler Adapter.**  
   Bolt-on to the two exposed Dodge case ports. Kit includes both 17mm and 18.5mm O-ring sleeve adapters for the case ports. Built-in thermostat: bypasses the cooler until 160°F, fully open at 181°F — eliminates rough cold shifting from overcooling and allows the transmission to reach operating temp quickly. Outputs: -8AN male. Route AN lines to the Setrab 625 cooler.

7. **Reinstall pan and bench pre-fill.**  
   Install new filter, reinstall pan. Tip transmission on its side. Open fill plug (right rear of case, M18×1.5, 8mm hex, 35 Nm). Pour in ~9L ZF LifeGuard Fluid 8. Reinstall plug. Add ~0.5L extra above 9L to account for cooler and line volume once installed in car. **Never start the engine with no ATF — mechatronic solenoids are ATF-lubricated and a dry start destroys them immediately.**

---

### Getrag Removal

8. **Support the engine before Getrag removal.**  
   Place a floor jack with a wood block under the oil pan to prevent the rear of the engine from dropping when the transmission is removed.

9. **Disconnect the driveshaft at the differential end first, not the trans end.**

10. **Remove the crossmember and lower the Getrag on a transmission jack.**  
    > ⚠️ **Pitfall:** Rent a transmission jack — the Getrag is heavy and awkward to lower alone. The 8HP is significantly heavier than the Getrag. Two people minimum for the 8HP installation step.

---

### Flexplate Swap

11. **Install flywheel lock tool. Do not use a screwdriver in the ring gear.**  
    > ⚠️ **Pitfall:** A flywheel lock tool is required to hold the crank from rotating while breaking loose the flywheel bolts. Using a screwdriver in the ring gear damages teeth that are needed for the starter. Torque the new flexplate bolts to spec with thread locker.

12. **Remove manual flywheel. Install automatic flexplate — path-dependent:**
    - **BMW 8HP path:** N54 8-bolt automatic flexplate PN `11227553157`, bolts PN `11227522125`. Apply thread locker. Torque to BMW factory spec.
    - **Dodge path:** Flexplate PN must be confirmed with Chatham CNC before ordering — do not assume the BMW N54 flexplate PN applies to the Dodge bellhousing. Confirm PN with Chatham CNC adapter supplier as part of the custom adapter engagement.

---

### Starter Adapter

13. **Install starter adapter — path-dependent:**
    - **BMW 8HP path (BMW-sourced N57 or N63 unit):** George W. Hill M5x Starter Adapter ([Hill Performance](https://www.hillperformance.com/products/starter-adapter), $160) + N54 starter PN `12412354701`. Reference [adapter demo video](https://youtu.be/bWVo-TpdQCQ).
    - **Dodge path (unit in hand):** Starter adapter and compatible starter for the Dodge bellhousing must be confirmed with Chatham CNC adapter supplier before ordering. Do not order the Hill Performance adapter for the Dodge path — the Dodge 8HP70 bellhousing geometry differs from BMW N57/N63, and starter fitment is not confirmed for this configuration.

---

### Adapter Plate Installation

14. **Install engine→8HP adapter plate — path-dependent. Confirm path before ordering.**

    | Path | Adapter | Cost |
    | --- | --- | --- |
    | **BMW N63** (preferred long-term sourcing) | [DomiWorks M5x→N63](https://www.domi-works.com/collections/8hp-adapter-kits) | $1,353 |
    | **BMW N57** (off-the-shelf fallback) | [PMC Motorsport M5x→N57](https://pmcmotorsport-shop.com/product-eng-2998-Gearbox-Adapter-Plate-BMW-M50-M52-M54-S50-S52-S54-BMW-ZF-8HP-8HP70-8HP50-GS6-53DZ.html) | ~$350 |
    | **Dodge (unit in hand)** | Custom — Chatham CNC (mike@chathamcnc.com / 919-740-9748) or Guru Autowerks (M5x/E36 variant — contact Guru directly) | Quote required |

    > ⚠️ **Pitfall:** Do NOT order PMC or DomiWorks M5x adapters for the Dodge unit — those are BMW-bellhousing-specific (N57 and N63 patterns respectively). The Dodge 8HP70 has a different bellhousing face. The Guru GA5 kit (N54/N55/S55→Dodge) is not M5x-compatible — contact Guru to ask specifically about an M5x/E36 variant. Chatham CNC already has the 07K engine-side geometry from the @wingman703 Dodge 8HP build, which reduces engineering scope for a combined Phase 1 + Phase 3 engagement.

---

### DomiWorks AWD→RWD Adapter

15. **Install DomiWorks AWD→RWD adapter (bench job — specific to the Dodge AWD unit in hand).**  
    Product: [DomiWorks Dodge 8HP70/75 RAM 1500 AWD→RWD Conversion Adapter Kit](https://www.domi-works.com/products/dodge-8hp70-75-ram-1500-and-ram-ecodiesel-awd-to-rwd-conversion-adapter-kit-1350) (SKU 22005004, ~$1,069 direct from DomiWorks — 9,500 SEK; MaxxECU store lists at $1,249.50 and may be out of stock; buy direct). Confirmed fitment: 8HP70/75 from RAM 1500 with 23-spline output ✅. Bolt-on anodized aluminum adapter housing a high-speed bearing + SS2541 steel output flange. Output: dual 1350 yoke (SPICER #3-2-119) + Supra MKIV pattern. Installs in under 1 minute.  
    > ⚠️ **Pitfall:** Confirm the sealing method with DomiWorks before final torque. The TC mounting face-to-adapter interface likely uses a machined O-ring or RTV sealant — not a separate paper gasket. DomiWorks does not call out a gasket in the kit contents. Email DomiWorks directly for the sealing spec. Clean the TC mounting face thoroughly before installing the adapter regardless of method.

    The DomiWorks adapter includes a mounting bracket on the adapter housing (machined boss/holes) for an optional output-end secondary support brace to the E36 tunnel. The primary rear mount is the Guru + SLG crossmember (see below); the output-end bracket role is determined at mock-up.

---

### 8HP Drop-In

16. **Lower 8HP into place on transmission jack. Align to adapter plate and crossmember.**  
    > ⚠️ **Pitfall:** The 8HP is significantly heavier than the Getrag. Two people minimum. A transmission jack on a floor makes this manageable — doing it with jack stands and a floor jack is possible but risks damaging the ECU wiring on the unit.

---

### Rear Mount System

17. **Install Guru Autowerks Adjustable Dodge 8HP Transmission Mount (BMW-style).**  
    At SLG, select dropdown **"E8X/E9X for Dodge 8HP Ram/Charg..."** — this is the BMW-style variant (dropdown label is truncated); it covers both Ram and Charger/Challenger and explicitly pairs with E36/E46 crossmembers. Do NOT select the Universal flat mount (that is for custom crossmember fabrication). Energy Bushing add-on (+$50) = urethane NVH isolator; recommended for track/drift use. Bolts to Dodge 8HP case via 4 "D1" bolts.  
    > ⚠️ **Verify with SLG** [(631) 905-9675](tel:6319059675) or email `sales@seemslegitgarage.com` before ordering: *"Does your E36/Z3 8HP crossmember work with a Ram 1500 AWD 8HP70 + Guru BMW-style Dodge mount + DomiWorks AWD→RWD adapter? Any length or geometry concerns vs. the Charger/Challenger unit?"* SLG documentation cites the Charger/Challenger as the primary reference — the Ram AWD + DomiWorks configuration adds overall length that must be verified.

18. **Install SLG E36/Z3 8HP Crossmember** ($205). Use included spacers for height adjustment. SLG states: "Fits wide variety of combinations, even a Dodge 8HP70 with a Guru rear mount."

19. **Torque sequence — follow in order:**

    | Fastener | Torque | Notes |
    | --- | --- | --- |
    | D1 bolts (mount to 8HP case) | **44 lb-ft** | Blue threadlock required |
    | M10 socket cap screws | **55 lb-ft** | After driveline angle is set |
    | M8 set screws | **6 lb-ft** | Final lock |

    **Conical spring washers must have cones facing bolt heads.** Verify orientation before final torque — this is called out specifically in Guru documentation.

---

### Driveshaft

20. **Order custom 1-piece aluminum driveshaft from [Seems Legit Garage](https://www.seemslegitgarage.com/product-page/single-piece-driveshaft)** ($1,350). Specify connection type at order time based on your path:

    - **Dodge AWD + DomiWorks adapter path (this build):** Connection is 1350 U-joint via DomiWorks adapter output flange (SPICER #3-2-119 yoke — included with DomiWorks kit). **Measure from the DomiWorks adapter flange face to the diff input flange at ride height, with the adapter installed.** Specify "Dodge 8HP70 AWD + DomiWorks adapter" when ordering.
    - **Dodge 2WD "Truck" path:** Connection is 1350 U-joint via OEM Dodge flange PN `68417910AA`. Specify "Dodge 8HP70 RWD output" when ordering. [SLG "RAM 1350" yoke adapter](https://www.seemslegitgarage.com/product-page/3102-42x-t35-alfy-07-flange-yokes) ($70 billet / $70 cast) bolts directly to the 2WD output flange.
    - **BMW N57 or N63 path:** 96mm guibo flange on trans → BMW guibo (flex disc) → driveshaft. Specify "BMW 8HP70 N57" or "BMW 8HP70 N63" when ordering.

---

### DCT Shifter Wiring

21. **Install DCT Shifter E36** ([dctshifter.com](https://dctshifter.com/), $454). All models (270GT Aluminum, 290GTE Carbon, 390GT) wire identically — choice is ergonomic. Per `maxxecu-m52.wv`:

    | Signal | Wire color | MaxxECU destination |
    | --- | --- | --- |
    | UP | Black | DIN 2 — Transmission UP shift (ECU_16PIN pin 16) |
    | DOWN | Blue | DIN 1 — Transmission DOWN shift (ECU_16PIN pin 15) |
    | GND | Brown | Sensor GND or chassis GND |

    **MTune:** Advanced → 8HP gearbox control → Shifter type → **8HP SEQ shifter**. Assign DIN 2 = UP, DIN 1 = DOWN.  
    Standstill logic (brake held): single DOWN = Reverse; single UP = Drive; double-tap DOWN = Park; double-tap UP = Manual. While driving: UP/DOWN = manual gear requests; unsafe shifts blocked automatically. **Hold UP** = launch control / transbrake (configurable hold time).  
    > ⚠️ **Pitfall:** Do NOT wire an OEM BMW CAN shifter in parallel with the DCTShifter in SEQ mode — the two paths conflict. The BMW 10-pin end of CAN harness #2287 must remain capped. That is the correct state.

---

### MaxxECU CAN Harness #2287

22. **Install MaxxECU 8HP GEN1 CAN harness #2287** (~$368.61 from [MaxxECU store](https://www.maxxecu.com/store/gearbox/8hp/maxxecu-8hp-gen1-cable-harness) or [LPS Fab](https://lpsfab.com/products/maxxecu-8hp-gen1-cable-harness-bmw-8hp-shifter)).  

    Pre-terminated: 2,100mm run → 12-pin GT150 connector (8HP TCU: CAN H/L, main 12V, wakeup, GND) + 1,800mm run → BMW F-series 10-pin CAN shifter connector (cap unused when running DCTShifter). Per `8hp-can.wv`:

    | TCU pin | Signal | Gauge | Source |
    | --- | --- | --- | --- |
    | TCU pin 13 | KL30 — main +12V, CONSTANT | 14 AWG | Powerhold relay (not ignition-switched) |
    | TCU pin 9 | KL15 — wakeup, IGN switched | 18 AWG | Ignition relay output |
    | TCU GND | Chassis GND | 14 AWG | Cabin distribution bar (bulkhead pin 9) |
    | TCU pin 5 | CAN H | 22 AWG twisted pair | MaxxECU CAN 1 (bulkhead pin 47) |
    | TCU pin 6 | CAN L | 22 AWG twisted pair | MaxxECU CAN 1 (bulkhead pin 48) |

    **Power sequencing is critical:** KL30 main power (TCU pin 13) must be live **10–15 seconds before** KL15 wakeup (TCU pin 9) is asserted. Use a powerhold relay: main 12V runs constant from first key-on; wakeup is key-on only. If both are on the same ignition-switched fuse, the TCU partially fails to initialize and SEQ mode will not function.  
    CAN bus: 500 kbps. MaxxECU CAN 1 has a built-in 120Ω terminator (cabin end). The MaxxECU GEN1 harness kit includes a 120Ω terminator at the TCU end (engine end).  
    > ⚠️ **Pitfall:** This harness is engine-agnostic and stays untouched at the 07K swap. It connects MaxxECU → 8HP TCU via CAN — the same MaxxECU and the same gearbox remain through all phases. Only the engine harness changes at Phase 3.

---

### MTune Commissioning

23. **Configure MTune for 8HP CAN control:**
    - Advanced → 8HP gearbox control → Enable
    - Set ZF 8HP70 ratio table (4.71 / 3.14 / 2.11 / 1.67 / 1.29 / 1.00 / 0.84 / 0.67)
    - Advanced → 8HP → Shifter type → **8HP SEQ shifter**
    - Assign DIN 1 = Transmission DOWN shift; DIN 2 = Transmission UP shift
    - Set shift points (configurable 1,500–9,000 RPM)
    - **Virtual clutch (Binary5 required):** Advanced → 8HP → 8HP clutch control → `Enabled, Virtual clutch`. Set clamp start and clamp end. Calibrate AIN 5 = 0% pedal up, 100% pedal fully depressed. Do not skip clamp calibration — incorrect values produce wrong clutch pressure at pedal extremes.
    - Transbrake: configure hold time on UP input
    - Reference: [MaxxECU 8HP Installation & Wiring](https://www.maxxecu.com/webhelp/advanced-8hp-installation_and_wiring.html) · [MaxxECU Virtual Clutch](https://www.maxxecu.com/webhelp/advanced-8hp-virtual_clutch.html)

---

### Reverse Light Relay

24. **Wire reverse light relay per `8hp-body-integrations.wv`.**  
    The Getrag's mechanical reverse switch is eliminated with the swap. All gear state now lives in MaxxECU via 8HP CAN. MaxxECU GPO drives the reverse lights via an interposed relay.

    **GPO assignment (Phase 1):** GPO 1, accessed at the `BOOST_SOLENOID` Superseal 2-pin connector (pin 2) in the MaxxECU M50 terminated harness. On NA M52 Phase 1, this connector is unpopulated (no turbo). Splice a new 18 AWG wire from GPO 1 signal (pin 2 of the Superseal connector) to relay coil pin 85.

    **Relay wiring:**

    | Relay pin | Connection |
    | --- | --- |
    | 85 — Coil − (low-side) | GPO 1 signal (MaxxECU sinks to GND when in Reverse) |
    | 86 — Coil + | OEM IGN relay +12V (body harness) |
    | 30 — Contact in | Fused +12V, 15A mini blade fuse |
    | 87 — Contact out | X20 engine-side pin 10 (BL/GE wire — reverse light body circuit) |

    **Flyback diode:** 1N4007 across relay coil. Cathode (banded end) → pin 86 (+12V). Anode → pin 85 (GPO). Required to prevent GPO output damage from coil back-EMF.

    **MTune:** Outputs → GPO 1 → Function: **"Transmission Reverse"**.

    X20 pin 10 is the correct target for a manual-gearbox E36 (no EGS module). X20 pin 22 (EGS automatic path — GN/WS) is left floating. No body harness modification is needed — the relay output replaces the mechanical switch at the existing X20 pin 10 connection.

    > ⚠️ **Pitfall:** Do not splice the GPO wire directly into the reverse light bulb circuit without a relay. The E36 reverse light current is higher than a MaxxECU GPO is rated for. The GPO drives the relay coil only (~150 mA); the relay switches bulb power.

---

### Starter Inhibit

25. **Configure starter inhibit in MTune — software only, no relay required** (per `8hp-body-integrations.wv`).  
    MTune: Advanced → Starter control → Starter inhibit → inhibit crank when gear is not P and gear is not N.  
    Requires MaxxECU to be in the starter crank circuit. If the stock E36 start circuit bypasses MaxxECU (starter relay coil wired directly to X20 pin 18 without MaxxECU in the path), add a MaxxECU-controlled relay in series with the starter relay coil to bring it under ECU control.

---

## References

- `8hp-can.wv` — MaxxECU ↔ 8HP TCU CAN + power wiring ([diagram](https://htmlpreview.github.io/?https://github.com/wesleyxcooper/e36-wiring/blob/main/output/8hp-can.html))
- `8hp-body-integrations.wv` — reverse light relay + starter inhibit ([diagram](https://htmlpreview.github.io/?https://github.com/wesleyxcooper/e36-wiring/blob/main/output/8hp-body-integrations.html))
- `maxxecu-m52.wv` — full MaxxECU M52 harness, GPO/DIN assignments ([diagram](https://htmlpreview.github.io/?https://github.com/wesleyxcooper/e36-wiring/blob/main/output/maxxecu-m52.html))
- `body-x20.wv` — X20 bulkhead connector pinout, X20 pin 10 reverse light path ([diagram](https://htmlpreview.github.io/?https://github.com/wesleyxcooper/e36-wiring/blob/main/output/body-x20.html))
- [MaxxECU 8HP Feature Page](https://www.maxxecu.com/features/8hp_gearbox)
- [MaxxECU 8HP Installation & Wiring](https://www.maxxecu.com/webhelp/advanced-8hp-installation_and_wiring.html)
- [MaxxECU 8HP Hardware Identifier](https://www.maxxecu.com/webhelp/advanced-8hp-hardware_identifier.html)
- [MaxxECU 8HP TCU Firmware](https://www.maxxecu.com/webhelp/advanced-8hp-tcu_firmware.html)
- [MaxxECU Virtual Clutch](https://www.maxxecu.com/webhelp/advanced-8hp-virtual_clutch.html)
- [Guru Autowerks FAQ — Dodge 8HP70/75 Swap](https://www.guruautowerks.com/post/faq-n54-n55-s55-to-8hp70-75-dodge-adapter-bmw-e9x-e8x-e6x)
- [DomiWorks AWD→RWD Adapter Product Page](https://www.domi-works.com/products/dodge-8hp70-75-ram-1500-and-ram-ecodiesel-awd-to-rwd-conversion-adapter-kit-1350)
- [HPR TCH-102-T2 TCA Product Page](https://hpr-tuning.com/products/dodge-ram-thermostatic-transmission-cooler-adapter)
- [RevMax TMU Delete Manual](https://manuals.plus/m/d0ce99a6bd3cd18188a5abebed567d585dc6320d60b1577f57e77db30a5fd270)
- [RamForum TBV Assembly Diagram](https://www.ramforum.com/threads/8hp70-thermostatic-valve.109089/)
- [Hill Performance Starter Adapter — Demo Video](https://youtu.be/bWVo-TpdQCQ)
- [DCT Shifter Installation Guide](https://dctshifter.com/pages/installation)

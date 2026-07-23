# Project Plan: The 9,000 RPM E36 Restomod

> **System Tags:** `[FUEL]` `[AIR]` `[IGNITION]` `[COOLANT]` `[OIL]` `[ECU]` `[ROTATING-ASSEMBLY]` `[HEAD/VALVETRAIN]` `[TIMING]` `[DRIVETRAIN]` `[SUSPENSION]` `[BRAKES]` `[STEERING]` `[CHASSIS]` `[ELECTRICAL]` `[INSTRUMENTS]` `[AC]` `[THERMAL]` `[ADMIN]` | Work-type modifier: `[MACHINING]`

## Phase 0: Chassis Sourcing & Admin  [ADMIN]

**Primary Recommendation:** Source the **easiest, cheapest RHD 6-cylinder E36 convertible with a manual gearbox** — typically a **323i or 328i** (alloy M52 block). These are the most common 6-cyl E36 convertibles in RHD markets and the correct platform for the NA M52 build path.

- **Must be:** RHD convertible. **Based in USA — import required.** RHD E36 convertibles were never sold new in the US; source from UK, AU, ZA, or JP.
- **Why 323i/328i:** Lower purchase price than 325i, more available with manuals, alloy M52 block is the right base for Phase 1A/B.
- **Diff Check — Ratio vs. LSD (these are independent specs):** Ratio and LSD status are separate — every ratio is available as either open or LSD. Manual 328i ships with a **3.46** final drive as standard. A 3.15 is preferable for the 8HP's wide ratio spread (better highway cruising RPM) but 3.46 is fully workable. The 3.91 ratio is automatic-only and not a concern for a manual car.

  | Ratio | Open Diff | LSD (option 209) | Common Source |
  | :---- | :---- | :---- | :---- |
  | **3.46** | ✅ Very common | ✅ Exists — option 209 with 3.46 housing | Manual 328i / 325i |
  | **3.15** | ✅ Exists | ✅ Most common — **E36 M3 came with 3.15 LSD as standard** | E36 M3 (preferred donor) |

  The "3.15 LSD" is practically synonymous because the M3 diff is the dominant supply source and always includes LSD. If upgrading, source an **E36 M3 differential** (~$800–1,200 used) — gets you the better ratio and LSD in one unit.

- **Diff Check — Identifying LSD before purchase:** LSD was a **factory option** (code **209**) — not standard on the 328i. Most manual examples do not have it. Verify using:
  - **Build sheet (most reliable):** Lift the rear seat cushion — the factory build sheet (Fahrzeugauftrag) is stapled to its underside. Lists all SA option codes, abbreviated in German. Ask the seller to photograph it.
  - **Remote VIN lookup:** [bmwarchive.org VIN decoder](http://www.bmwarchive.org/vin/bmw-vin-decoder.html) or [realoem.com](https://www.realoem.com/) decode SA codes from VIN. BMW dealer can also pull the full options list from their system via VIN.
  - Look for **code 209** (25% Limited Slip Differential). Note: E36 forums often cite code 220 for LSD, but the BMW SA code document lists 209 as LSD and 220 as self-leveling suspension — check for both and confirm via BMW dealer VIN lookup if uncertain.
  - **Physical check:** Rear wheels off ground, car in neutral — turn one wheel by hand. **Open diff:** opposite wheel spins freely in the opposite direction. **LSD:** opposite wheel resists and tends to rotate the same direction.
  - **Diff tag:** Metal tag near the diff cover bolts stamped with ratio and "Sperr" (German: locking/limited slip) on some units.

> **25-Year Import Rule:** All E36 convertibles (1992–1999) are now 25+ years old and fully exempt from EPA/DOT FMVSS compliance under 49 USC 30112(b)(9). This is the cleanest import path — no modifications required for legality. Title in the US as an antique/classic in most states.

#### Quick Market Snapshot (RHD Convertibles — Import to USA)
| Market | Model | Condition | Price Range | Source |
| :---- | :---- | :---- | :---- | :---- |
| **UK** | 328i Conv. Manual | Driver | £5,000 - £7,500 (~$6,300-$9,500) | AutoTrader UK |
| **UK** | 323i Conv. Manual | Driver | £3,500 - £6,000 (~$4,400-$7,600) | AutoTrader UK / PistonHeads |
| **AU** | 328i Conv. Manual | Driver | AUD $10,000 - $18,000 (~$6,500-$11,700) | Gumtree / Carsales |
| **AU** | 323i Conv. Manual | Driver | AUD $7,000 - $12,000 (~$4,600-$7,800) | Gumtree / Carsales |

> **Import Services — Evaluated Options:**
>
> | Service | Role | Sourcing? | Notes |
> | :---- | :---- | :---- | :---- |
> | **[Open Air Imports](https://www.openairimports.com/)** (Baltimore/Richmond, VA) | Full-service US importer | ✅ Yes | Confirmed active. Sources the car, photographs pre-purchase, collects, ships, clears US customs, delivers or holds for pickup. Enthusiast-focused. Best single-vendor option. Ph: 443-300-8745 |
> | **[Double Mint Imports](https://www.doublemintimports.com/)** (doublemintimports.com) | Full-service US importer + Euro parts sourcing | ✅ Yes | Founded 2018. Owner: Raphael Hickling. Sources, ships, and clears US customs for RHD European classics. Also imports Euro-spec parts (handles CBP/EPA/DOT/NHTSA/FTC compliance). BMW-friendly — past imports include E39, E46, Audi 80 Conv, Benz SEC. Shipped price example: 2001 E46 325i M Sport UK→NY $12,600 all-in (shipping + customs + taxes + admin). **Also useful for RHD-specific parts** that can't be sourced in the US. Has an estimator tool at doublemintimports.com/estimator. Contact: info@doublemintimports.com \| [@doublemintimports](https://www.instagram.com/doublemintimports) |
> | **[CFR Classic](https://cfrclassic.com/international-car-shipping/import-car-from-uk-to-usa/)** | Freight forwarder + buyer contacts | ⚠️ Secondary | Primarily a shipping company. Has UK buyer contacts who can source on commission — useful if you've already identified a car. Shipping from UK starts ~$2,450. |
> | **[AutoTrader UK](https://www.autotrader.co.uk/) / [PistonHeads](https://www.pistonheads.com/)** | UK classifieds | ✅ Self-source | Find the car yourself, then hand off to OAI or CFR for collection and shipping. PistonHeads "Wanted" ads surface private sellers actively. |
> | **Independent UK PPI inspector** | Pre-purchase inspection only | ❌ No | Use [Drewmotive](https://www.drewmotive.com/pre-purchase-inspections/classic-import-car-pre-purchase-inspection.html) or a local independent BMW specialist for a PPI on any self-sourced UK car before committing. |
>
> **Recommended workflow for a specific-spec car:** Search AutoTrader UK / PistonHeads yourself with the target spec → commission a UK independent PPI on any candidate → hand off to Open Air Imports for collection, shipping, US customs clearance, and East Coast delivery. This gives you the most control over which car you buy while offloading the logistics.

> **Hardtop:** Prioritize sourcing a car that comes with an OEM hardtop. E36 hardtops are increasingly rare but do appear with cars or separately on eBay/FB Marketplace (~$500–1,500). Soft top condition is secondary — only needed as a weather backup.

> **Insurance:** Standard auto policies will NOT cover an RHD import with engine swaps. Obtain a specialty agreed-value policy through **Hagerty**, **Grundy**, or **American Collectors** before the car leaves the port. Annual premium ~$600–1,500/yr for this build profile.

**Secondary Option:** If a low-mileage iron-block **325i with `M50B25TU`** comes up at a good price, it opens the Turbo M50 path (Phase 1A). Do not hold out for this — take the best deal available on a clean convertible.

### Digital Instrumentation  [INSTRUMENTS · OIL · ELECTRICAL]
**Strategy:** Install gauge.s digital instrumentation during Phase 0 for engine monitoring and data logging. This system is future-proof and can be reconfigured for the 07K phase.

| Component | Specification | Cost / Action |
| :---- | :---- | :---- |
| **Instrument Cluster** | **Gauge.S E36 PNP Cluster** | [Direct replacement E36 cluster](https://shop.sorek.uk/products/gauge-s-bmw-e36-320i-323i-328i-m3-direct-replacement-instrument-cluster-pnp) - £189.00 (~$250) |
| **Additional Gauges** | **Gauge.S POD 52mm** *(optional, Phase 2+)* | [Full standalone AMOLED unit — $413, preorder ships Nov 2026](https://shop.sorek.uk/products/gauge-s-pod-52mm). **Not Phase 0.** Cluster alone shows both oil temp and coolant temp across display layouts. POD adds a dedicated glanceable second screen if desired later. Has own 4 analog inputs, GPS, accelerometer. OBD2 adapter ($68) only relevant if adding POD — **not needed for PNP cluster install**. |
| **Oil Sensing** | **Bosch PST-F1 + Adapter** | [Dual oil temp/pressure kit](https://shop.sorek.uk/products/bosch-pst-f-1-vanos-banjo-m14x1-5-to-m10x1-0-sensor-adapter-m50-m52-m54) - £49.00 (~$65) |

**PST-F1 Wiring and Mounting Notes:**
- **M52 mount:** VANOS banjo bolt (M14×1.5 block port → M10×1.0 adapter → PST-F1 threads in directly). High-flow oil path — accurate live readings.
- **4-pin sensor outputs:**
  - Pressure (0–5V, 0–10 bar / 0–145 psi) → Gauge.S **A1 or A2** (5V-tolerant pins)
  - Temperature (NTC variable resistance, –40 to +140°C) → Gauge.S **A3 or A4** (NTC pullup pins)
  - Gauge.S v5.5+ supports PST-F1 as a single-header connection via the EE pin — confirm PCB version at purchase.
- **Phase 3 (07K):** Aftermarket 07K longitudinal oil filter housing (S-PAU or iABED — required for the engine swap regardless) has a dedicated **M10×1.0 port** for the PST-F1 and a **1/8" NPT port** for a secondary sender. PST-F1 moves to the new housing with no wiring changes. MaxxECU can also read the PST-F1 outputs directly via its own analog inputs for protection mapping.
- The M52 has **no factory oil temp sensor** — the OEM cluster oil gauge is a binary idiot light only. PST-F1 provides actual numbers for both temp and pressure from Phase 0.
- **Install reference:** [Gauge.S E36 Features & Installation Video](https://www.youtube.com/watch?v=v5P81D6qujs) — skip to **7:00** for installation, **1:12** for features walkthrough, **13:32** for software/setup.

---

## Phase 1: 8HP Transmission Swap & Foundation  [DRIVETRAIN · CHASSIS · ECU]

**Strategy:** Install MaxxECU on the M52 first, then add the 8HP. Getting the ECU commissioned on a stock drivetrain isolates troubleshooting and is the path of least resistance for a solo build. **M52 is the priority engine path** — the MaxxECU M50/M52 terminated harness supports it directly with one cam sensor adapter.

**Staging order:** (1) MaxxECU + EWS2 bypass + X20 wiring → M52 running on MaxxECU with Getrag still in. (2) Tune M52. (3) 8HP swap — add #2287 CAN harness, flash TCU, drop in 8HP. ECU is already proven hardware at step 3.

### Drivetrain — 8HP Swap  [DRIVETRAIN · STEERING · ECU]
| Component | Specification | Cost / Action |
| :---- | :---- | :---- |
| **Transmission** | **ZF 8HP50Z or 8HP70Z (N57)** | **Preferred: 8HP70Z N57** — stronger (700Nm vs 500Nm input rating), required for 07K turbo headroom. Source from F10 530d/535d, F01 730d, F30 335d. eBay: ~$800–$2,500. **Budget option: 8HP50Z** — from F30 340i, F32 440i, G01 X3 30i (B46/B48/B58 donors). eBay: ~$500–$1,500. **Note: N57 bellhousing = 8HP70 only** — the N57 diesel exceeds the 8HP50's torque limit; 8HP50 is petrol-only. Facebook Marketplace typically 10–20% below eBay asking price. PMC Motorsport adapter fits both variants. |
| **Controller (Preferred)** | **MaxxECU Race GEN1 8HP CAN Control (native)** | [MaxxECU GEN1 8HP Feature Page](https://www.maxxecu.com/features/8hp_gearbox) — **No separate TCU required.** MaxxECU Race controls the 8HP natively via CAN. Requires: (1) [MaxxECU 8HP GEN1 CAN harness](https://www.maxxecu.com/store/gearbox/8hp/maxxecu-8hp-gen1-cable-harness) ~$368.61; (2) Yanhua ACDP-2 TCU flash tool — rent ~$138.23 or buy $737.80. Supports shift points 1,500–9,000 RPM, virtual clutch control, transbrake. **Verify hardware ID for your specific 8HP50Z or 8HP70Z unit** before purchase: [compatibility list](https://www.maxxecu.com/webhelp/advanced-8hp-hardware_identifier.html). Saves ~$2,000+ vs TurboLamik bundle. |
| **Controller (Fallback)** | **TurboLamik 8HP Bundle** | [Seems Legit Garage 8HP Bundle](https://www.seemslegitgarage.com/product-page/turbolamik-bundle) - $2,365 — Use if your specific 8HP50 hardware ID is not on the MaxxECU compatibility list. Dedicated TCU; broader transmission variant support; more established for E-series BMW swaps. Requires CAN handshake config between TurboLamik and MaxxECU. |
| **Shifter** | **DCT Shifter E36** | [DCT Shifter](https://dctshifter.com/) - $454 (verified). **Required** — stock E36 manual lever does nothing with 8HP. Install at transmission swap time. Models: 270GT Aluminum / 290GTE Carbon / 390GT (all wire identically). **Wiring:** 4 wires — +12V switched, GND, UP → MaxxECU DIN (Transmission UP shift), DOWN → MaxxECU DIN (Transmission DOWN shift). No CAN. MTune: Advanced → 8HP → Shifter type → **8HP SEQ shifter**. Hold UP = launch control / transbrake. |
| **Adapter Plate** | **M5x to 8HP Adapter** | [PMC Motorsport Adapter Plate](https://pmcmotorsport-shop.com/product-eng-2998-Gearbox-Adapter-Plate-BMW-M50-M52-M54-S50-S52-S54-BMW-ZF-8HP-8HP70-8HP50-GS6-53DZ.html) - ~$350 |
| **Steering Shaft** | **Condor Speed Shop Slim RHD Shaft** | [Condor Speed Shop E36 Shaft Kit](https://www.condorspeedshop.com/products/steering-shaft-conversion-e36) - **$308.99** (verified). Mandatory for RHD clearance with 8HP and any top-mount turbo. Replaces rubber coupler with chromoly dual U-joint shaft. **RHD fitment explicitly confirmed by manufacturer** — "All E36's including right-hand drive models." EPS compatible: EPS motor acts on the column above the firewall; this shaft operates below the firewall to the rack — no interference. Keep both U-joint angles below ~15° at install to prevent torque oscillation artifacts through the EPS controller. |
| **Cooling** | **8HP Oil Cooler Kit** | [HPR Setrab 8HP Cooler Kit](https://hpr-tuning.com/products/hpr-setrab-8hp-oil-cooler-kit) - ~$450 - $600 |
| **Driveshaft** | **Custom 1-Piece** | [Seems Legit Garage Aluminum Shaft](https://www.seemslegitgarage.com/product-page/single-piece-driveshaft) - $1,350.00 (verified) |
| **Transmission Crossmember** | **Seems Legit Garage E36/Z3 8HP Crossmember** | [SLG E36/Z3 DCT & 8HP Crossmember](https://www.seemslegitgarage.com/product-page/e36-dct-crossmember) - $150.00 (verified) — **Required.** Stock E36 crossmember will not locate 8HP correctly. Laser-cut steel, slotted for adapter plate use, fits OEM angled BMW 8HP rear mounts. |
| **Output Flange** | **BMW 96mm PCD Flange (E90/E91/E92 non-35i)** | [RealOEM PN 26117511454](https://www.realoem.com/bmw/enUS/partxref?q=26117511454) - ~$50 - $80 used (parts car/eBay — not stocked at FCP Euro or ECS Tuning) — **Required for both 8HP50Z and 8HP70Z.** Both ship with 105mm flange; E36 guibo is 96mm. Non-35i only (35i = 110mm). Cross-ref: 24207552327. |
| **Flexplate** | **N54 8-Bolt Automatic Flexplate + Bolts** | [ECS Tuning - Genuine BMW 11227553157](https://www.ecstuning.com/b-genuine-bmw-parts/flexplate/11227553157/) (ES#20413) - ~$810 new / ~$80 - $150 used — **Required.** M5x is manual-only from factory; 8HP requires an automatic flexplate. Bolts PN `11227522125`. |
| **Starter Adapter** | **George W. Hill M5x Starter Adapter** | [Hill Performance (Purchase)](https://www.hillperformance.com/products/starter-adapter) - $160.00 (verified) — **Required.** M5x mounts starter to block; 8HP-equipped BMWs mount to transmission. Use with N54 starter PN `12412354701`. Ref: [Adapter demo (YouTube)](https://youtu.be/bWVo-TpdQCQ) |

> **Vetted eBay Listings — 8HP70 from N63 Petrol Donors (same Reading, PA seller, both confirmed GEN1):**
>
> | Listing | Donor | Price (local pickup) | eBay Link | Notes |
> | :---- | :---- | :---- | :---- | :---- |
> | F10 550i 2014–2016 | **N63TU** (updated gen) | **$689.89** | [#800288897916](https://www.ebay.com/itm/800288897916) | **Preferred.** Newer donor; N63TU corrects original N63 oil consumption/heat soak issues. ZFS sticker visible: `LU 8615277 / 1087 016 / 098WUG`. Casting: `1087 401 347`. |
> | F06/F12/F13 650i 2011–2013 | N63 (original gen) | **$949.49** | [#800210197196](https://www.ebay.com/itm/800210197196) | Older donor; original N63 had documented oil/heat issues (does not affect transmission hardware). BMW PN `24007616610`. Casting: `1087 401 205`. ZFS label missing from photos. |
>
> **Why `STUECKL 1087` matters — GEN1 vs GEN2 identification:** ZF uses a family code stamped on the housing (`STUECKL XXXX`) to identify the mechatronics generation. `1087` = **GEN1** — the generation MaxxECU native 8HP CAN control is built for. `1090` = **GEN2** (~2018+), which uses a revised CAN protocol and is **not** natively supported by MaxxECU. Both units above stamp `STUECKL 1087` on the housing, confirming GEN1. **Do not rely on vehicle year alone** — always verify the `STUECKL` code from housing photos before purchasing any unit.
>
> **MaxxECU hardware ID — how to get it:** The `STUECKL` code and casting numbers are *mechanical* identifiers; the actual MaxxECU hardware ID (`108701xxxx` format) lives in the **mechatronic/TCU unit** inside the transmission and can only be read electronically. The `1087 016` variant code on the ZFS sticker (Listing 1) corresponds to hardware IDs in the `108701xxxx` range — likely compatible — but this must be verified before flashing. Steps: (1) Request a photo of the mechatronic unit label from the seller before purchase. (2) After receipt, read the hardware ID via Yanhua ACDP-2 (already in plan) or VCDS. (3) Cross-reference against [MaxxECU 8HP hardware ID compatibility list](https://www.maxxecu.com/webhelp/advanced-8hp-hardware_identifier.html).
>
> **N63 petrol vs N57 diesel donor note:** Plan prefers N57 diesel donors because diesel applications exclusively spec 8HP70 (never 8HP50), eliminating any purchase ambiguity. N63/N63TU petrol applications also exclusively use 8HP70 — N63 torque exceeds the 8HP50's input limit — so these units are equally valid hardware. PMC Motorsport adapter is compatible with both.

#### 8HP70 Gear Ratios — Reference
*Source: [Auto-Guild — Why Is This 8-Speed Transmission Swap Suddenly So Popular?](https://www.youtube.com/watch?v=zEx6aEhGaB0)*

| Gear | Ratio |
| :---- | :---- |
| 1st | **4.71** |
| 2nd | **3.14** |
| 3rd | **2.11** |
| 4th | **1.67** |
| 5th | **1.29** |
| 6th | **1.00** (direct) |
| 7th | **0.84** |
| 8th | **0.67** (OD) |

> **Why this ratio spread matters for this build:** With the target **3.15 final drive**:
> - **Overall 1st:** 4.71 × 3.15 = **14.84:1** — massive launch torque multiplication; low-speed grunt dramatically amplified.
> - **Overall 8th:** 0.67 × 3.15 = **2.11:1** — very relaxed highway cruise; engine barely off idle at legal speeds, thermal and mechanical load minimal.
> - The 4.71→0.67 spread (7:1 total ratio range) keeps the engine on its power peak through the entire rev range — critical for a high-revving engine like the 07K.

### ECU & Engine Management  [ECU · ELECTRICAL]
| Component | Specification | Cost / Action |
| :---- | :---- | :---- |
| **ECU** | **MaxxECU Race** | [MaxxECU RACE M50 Bundle](https://www.seemslegitgarage.com/product-page/maxxecu-m50-harness) - $2,912 (verified) |
| **EWS2 Bypass** | **EWS delete/emulator module (required)** | The E36 M52 (OBD2) has EWS2 immobilizer. The stock MS41/MS42 handshakes with the EWS2 module to authorize fuel and ignition. MaxxECU has no EWS protocol — without bypass, the car cranks but will not fire. **Option A (preferred):** EWS delete emulator module (BMW tuning vendors) — clean, reversible, no harness mod. **Option B:** Hard-wire bypass at ECU connector — permanent. Research current preferred method with MaxxECU community before install. Not optional, not ECU-specific — any replacement ECU faces this. |
| **M52 Cam Sensor Adapter** | **BMW PN `12141726590` or pigtail adapter** | MaxxECU M50 terminated harness uses the non-VANOS cam sensor connector. M52 VANOS head uses a different connector. Swap sensor to `12141726590` (preferred — direct fit to M50 harness, no harness mod) or add adapter pigtail. Without this: no cam/home signal → MaxxECU cannot resolve firing order → no-start. |
| **Wideband O2** | **Bosch LSU 4.2 Sensor** | [Modern Racing LSU 4.2](https://modernracing.net/products/wb-o2-sensor) - $69.00 (verified). MaxxECU M50 harness includes the 6-pin LSU 4.2 connector — this is the matching sensor. Weld 18mm × 1.5 bung in exhaust. Re-use at 07K swap by moving bung. |

### Fuel System  [FUEL]
| Component | Specification | Cost / Action |
| :---- | :---- | :---- |
| **Fuel Pump Hanger** | **Radium Engineering 20-1170 — BMW E36** | [Radium 20-1170](https://www.radiumauto.com/products/bmw-e36-fuel-pump-hanger) - $549.95 (verified, in stock). Drop-in replacement for both OEM fuel hat assemblies on E36 saddle tank. 10AN ORB female pump-out port, PRV venturi jet pump crossover, dual-pump capable, brushless-capable, E85/methanol compliant. Reuses OEM level sensors. No tank cutting. **Install at Phase 1 — carries to 07K with zero re-work.** |
| **Fuel Pump** | **Walbro F90000267 — 465 LPH E85** | [Walbro F90000267 (pump only)](https://www.realstreetperformance.com/walbro-universal-450lph-in-tank-fuel-pump-e85-version.html) - $181.12 (verified). Fits Radium 20-1170 directly (39mm/50mm DCSS body). E85-rated. Single pump covers all phases through 07K 600whp — no swap or second pump needed. **PWM speed control via MaxxECU GPO:** run ~70% duty on M52 NA; ramp via load/boost map on Turbo M50; full duty at 07K. Brushed DC pump — GPO → solid state relay → pump positive. |
| **Hanger Swivel Fittings** | **Radium 20-1000-1010 — 10AN ORB Swivel Banjo to 10AN Male (×1 feed)** | [Radium Low Profile Swiveling Fittings](https://www.radiumauto.com/products/low-profile-swiveling-banjo-fittings) - $34.95/ea (verified). Screws into 10AN ORB pump-out port; rotates 360° after install — required for tight E36 tank tunnel clearance. Runs -10AN braided line directly to Aeromotive 13129 FPR. Return port uses included 8.5mm barb adapter (OEM return line size); upgrade to `20-1000-0606` (6AN ORB swivel, $34.95) if converting to full AN return. |
| **Flex Fuel** | **Ethanol Sensor** | [Seems Legit Garage Ethanol Sensor](https://www.seemslegitgarage.com/product-page/ethanol-content-sensor) - $80.00 (verified) |
| **Fuel Injectors** | **Bosch 440cc (Green)** | [Bosch 42lb/hr Set of 6](https://treperformance.com/i-18598170-genuine-bosch-42lb-green-giant-ev1-fuel-injectors-0280155968-6.html) - $399.00 (verified) |
| **FPR** | **Aeromotive 13129 Compact EFI** | [Aeromotive 13129](https://aeromotiveinc.com/products/compact-efi-regulators) - $185.95 (verified). Return-style, adjustable 40–75 PSI. Required for standalone ECU — OEM E36 FPR is not tunable. Carries through all phases. |

### Ignition  [IGNITION]
| Component | Specification | Cost / Action |
| :---- | :---- | :---- |
| **Ignition** | **BMW S54 COP** | [Ignition Projects High Perf Coils](https://store.vacmotorsports.com/ip-ignition-coil-set--bmw-s54-p3730.aspx) - $695.00 (verified) |

### Coolant System  [COOLANT]
| Component | Specification | Cost / Action |
| :---- | :---- | :---- |
| **Cooling** | **CSF Radiator** | [CSF Aluminum Radiator (3054)](https://www.bimmerworld.com/Cooling/Radiators/CSF-E36-Aluminum-Radiator.html) - $369.00 (verified). Carries to 07K turbo phase. |
| **Fans** | **SPAL Electric Fan (BimmerWorld Kit) → SPAL PWM upgrade at MaxxECU install** | [BimmerWorld Fan Kit](https://www.bimmerworld.com/Cooling/Cooling_Kits/E36-Electric-Fan-Conversion-Kit-OBD2-328i-328is-323is-M3-1996-1997-1998-1999.html) - $200.99 (verified). Kit includes 16" SPAL pull fan + relay harness + thermostat switch. **Stage 1 (OEM ECU):** wire thermostat switch standalone — closes at ~87°C, triggers relay, no ECU involvement. **Stage 2 (MaxxECU install):** wire MaxxECU GPO to relay trigger in parallel with thermostat switch; swap SPAL fan motor for PWM-rated variant (e.g. SPAL 30102049 ~$180–220) — same bracket and pins. Keep thermostat switch in circuit as passive failsafe. MaxxECU controls temp threshold, hysteresis, AC override, and variable duty cycle. One install, two stages. Carries through all phases. |
| **Expansion Tank** | **Mishimoto Aluminum E36** | [Mishimoto E36 Expansion Tank](https://www.mishimoto.com/bmw-e36-ai-coolant-expansion-tank-1992-1999.html) - $190.95 (verified). Replaces failure-prone OEM plastic tank. Anodized black or polished. Install in Phase 1 — carries to 07K phase. |

### Oil System  [OIL]
| Component | Specification | Cost / Action |
| :---- | :---- | :---- |
| **Engine Oil Cooler** | **Mishimoto MMOCF-BMW + 10-row core** | [Mishimoto E36 Oil Line Fitting Kit](https://www.mishimoto.com/bmw-e36-e46-e90-oil-line-fitting-kit.html) (~$89) + Setrab/Mocal 10-row core (~$120–150) + -10AN lines (~$60–80). Total: **~$200–280**. Adds -10AN ports to M52/M50 oil housing. Install in Phase 1 for overbuild — re-plumb at 07K swap. Alt: [Mishimoto MMOP-SPT thermostatic sandwich plate](https://www.samsmotorsports.com/mishimoto-mmop-sbt) $170.95 (universal, preferred for 07K). |

### Safety Equipment  [CHASSIS]
| Component | Specification | Cost / Action |
| :---- | :---- | :---- |
| **Roll Bar** | **Autopower U-Weld (E36 Convertible)** | [Autopower E36 Conv. Kit](https://www.ioportracing.com/318i-323i-325i-328i-m3-convertible-93-99-e36-body/autopower-u-weld-roll-bar-kit-bmw-318i-323i-325i-328i-m3-convertible-1993-1999) - ~$450–550. **Required for HPDE/drift in an open-top car.** Full hoop + rear braces + diagonal + harness bar. U-weld kit requires local fab shop weld-in (~$150–200 labor). Must be done before first track day. |
| **Fire Extinguisher** | **Kidde Halotron 2.5lb + Mount** | ~$65–80. Required at virtually all HPDE and drift events. Halotron clean-agent — no corrosion vs dry chemical. Mount within driver reach. |

### Suspension  [SUSPENSION]
| Component | Specification | Cost / Action |
| :---- | :---- | :---- |
| **Suspension** | **BC Racing Coilovers** | [BC Racing BR Series](https://coiloverdepot.com/products/bc-racing-br-series-coilovers-92-97-bmw-3-series-e36) - $1,030.00 (verified) |

### Front Suspension Geometry  [SUSPENSION · STEERING · CHASSIS]

> **Build context:** Street/track/drift — 60–80% daily driver. Geometry approach prioritizes driveability at all times over maximum drift lock. No zero-Ackermann competition geometry, no -6° static camber. Goal is correct geometry + mild angle kit.

**Stock E36 Geometry Baseline**

| Variant | KPI (SAI) | Caster | Notes |
| :---- | :---- | :---- | :---- |
| **E36 non-M (stock)** | ~13°+ | ~4° | Worst baseline — high KPI, low caster. Roll center below ground when lowered. |
| **E36 M3 3.0** | Slightly reduced | ~7° | Eccentric FCAB + offset strut tops. M3 spindle has more height → +20mm roll center vs non-M. |
| **E36 M3 3.2 EVO** | ~14° (reduced vs non-M) | ~8° | Narrower/shorter LCA specifically to further reduce KPI. Caster built into control arms. |
| **E30 M3 Gr.A DTM** | Lowest (reference) | >8° | MRT Engineering uses this as the design target for their RACE spindle. |

**Why KPI Matters**

KPI (King Pin Inclination / Steering Axis Inclination) is the inward tilt of the steering axis (line from upper strut mount to lower ball joint) as viewed from the front. On a MacPherson strut E36:

- **High KPI + high caster cancel each other out:** Caster generates negative camber gain as the wheel steers into a corner (good for grip). KPI generates *positive* camber at the same time (bad). At steering angles above ~35–40°, the KPI effect overwhelms the caster benefit — the leading tire's contact patch rolls to its inside edge and grip drops.
- **Camber adjustment method matters:** Adjusting via the strut top mount tilts the entire strut and changes KPI. Adjusting camber via **lower strut mount spacers** (~0.3°/mm each) changes static camber without altering KPI. Use spacers for independent camber adjustment.
- **KPI is not adjustable on stock hardware.** Reducing it requires M3 spindles (mild reduction) or an angle kit that relocates the lower ball joint geometry (significant reduction).

**Recommended Geometry Path for This Build**

| Step | Action | Benefit | Cost Est. |
| :---- | :---- | :---- | :---- |
| **1** | **E36 M3 spindles/uprights — 1996–1999 US M3 or Z3M** | Reduces KPI, raises roll center ~20mm vs non-M, improves camber curve. Transparent on the street. **Part numbers:** Left `31212227907` / Right `31212227908` — shared between 1996–1999 E36 M3 and 1996–2002 Z3M Roadster/Coupe; discontinued from BMW new, used/salvage only. **Do not use Euro M3 3.2 Evo spindles** — Evo spindles pair with a shorter purpose-built control arm; installing on standard-length OEM arms (required by SLR Mini Kit) produces incorrect geometry. 1995 US M3 spindles (`31212227357`/`358`) have slight camber variance — replace as matched pair only and avoid mixing with 96–99 spec. **Z3M salvage yards are the best source** (same part, more plentiful than donor M3s). | ~$400–550/pair (eBay used). Individual sides run $199–$275; eBay pairs $450–550. Salvage walk-in may undercut. |
| **2** | **Offset FCAB** (Revshift offset or MRT Engineering adjustable) | Increases caster ~1° on non-M arms. Already included in Revshift bushing kit plan — use offset variant explicitly. | Included in bushing kit |
| **3** | **Adjustable strut tops / camber plates** (Ground Control or Vorshlag) | Adds caster offset to reach 6–7° total. Also enables independent camber setting. **Do not use top mounts for camber adjustment** — use lower spacers for that to avoid changing KPI. | ~$350–500 |
| **4** | **SLR Mini Kit** | 35mm roll center correction, bump steer correction, ~40–50° steering lock, adjustable Ackermann (Race or Drift position). Uses OEM control arms — no arm replacement. | **$805.04** |

> **SLR Mini Kit notes:** Kit quickens steering ~40% (28–30% fewer turns lock-to-lock) — the primary street tradeoff. Adjustable Ackermann: set Race position (positive Ackermann) for street daily use; flip to Drift position (zero Ackermann) for sessions. **Compatible with M3 knuckles.** Do not use Wisefab kit if running M3 knuckles — Wisefab explicitly states incompatibility. Link: [SLRspeed E36 Mini Kit](https://slrspeed.com/products/e36-m3-bmw-mini-kit-roll-center-steering-quickening-angle-kit-for-both-drift-race)

**Target Alignment with SLR Mini Kit**

| Parameter | Target | Notes |
| :---- | :---- | :---- |
| **Camber (front)** | -2° to -3° | Street-friendly. Set via lower mount spacers to preserve KPI. |
| **Caster** | 6°–7° | Via M3 offset tops + adjustable FCAB. More caster = more camber gain in cornering. |
| **Toe (front)** | 1/8" out | Mild drift bias. Retain some caution for highway stability. |
| **Toe (rear)** | 1/16"–1/8" in | Stability at speed. |

> **See [Key References](#key-references)** for the MRT Engineering geometry guide, Garagistic FCAB guide, SLR angle kit deep-dive, and `__plan_d` Instagram E36 geometry/angle kit build content.

### Brakes  [BRAKES]
| Component | Specification | Cost / Action |
| :---- | :---- | :---- |
| **Brakes** | **E46 330i Upgrade** | [Used E46 330i Front Calipers/Carriers](https://www.ebay.com/itm/275801176019) - $150 - $250 |
| **Brake Booster Delete** | **NES Engineering 6:1 Pedal Ratio Kit** (current plan) — **Tech53 adjustable kit** (presale alternative) | **NES Engineering:** [nesengineering.com](https://nesengineering.com/products/brakboster-delete?variant=57108005880191) — $216 kit + ~$150–200 optional Wilwood/Tilton MC = ~$366–416 total. Fixed 6:1 ratio. Stock MC included; Wilwood/Tilton upgrade optional. Requires grinding 2mm off firewall hole + pedal box, drilling new hole in brake pedal. **Install at Phase 1** — firewall work far easier with engine bay open. Eliminates vacuum dependency critical for 07K turbo (no usable manifold vacuum under boost — no vacuum pump needed in Phase 3). Track-only rated. **Tech53 (presale alternative):** [tech-53.com/products/brake-booster-delete-kit-presale](https://tech-53.com/products/brake-booster-delete-kit-presale) — **$949.99 all-in** (MC included). Key differentiator: **adjustable pedal motion ratio** — dial in brake feel/effort/throw post-install without swapping parts. Two MC options: Wilwood 15/16" or Tech-53 7/8". Two E36 variants: E36 pedal box or E46 pedal box. CAD-modeled from 3D scan. Presale as of Jul 2026 — pictures not yet updated, no ship date confirmed. **Decision:** NES is proven, available now, ~$600 cheaper. Tech53 adjustable ratio is a real advantage for dialing in feel but at 2.5x the price on an unshipped product. Decide at Phase 1. |

### Drivetrain — Differential  [DRIVETRAIN]
| Component | Specification | Cost / Action |
| :---- | :---- | :---- |
| **Differential** | **3.15 LSD** | [Used E36 3.15 Limited Slip Differential](https://www.ebay.com/p/1011155792) - $800 - $1,200 |

### Chassis Reinforcement  [CHASSIS]
| Component | Specification | Cost / Action |
| :---- | :---- | :---- |
| **Rear Subframe** | **Reinforcement Kit** | [BimmerWorld Rear Subframe Kit](https://www.bimmerworld.com/Suspension-Steering/Reinforcements/E36-Rear-Subframe-Chassis-Reinforcement-Kit.html) - $274.20 (verified) |
| **RTAB Pockets** | **Reinforcement Kit** | [BimmerWorld Trailing Arm Kit](https://www.bimmerworld.com/Suspension-Steering/Reinforcements/Rear-Trailing-Arm-Pocket-Reinforcement-Kit.html) - $42.49 (verified) |
| **Front Subframe** | **Reinforcement Kit** | [RallyRoad Front Subframe Plates](https://rallyroad.net/products/e36frontsubframereinforcementplates) - $19.95 (verified) |
| **Strut Towers** | **Reinforcement Plates** | [BimmerWorld Front Plates](https://www.bimmerworld.com/Suspension-Steering/Reinforcements/Front-Strut-Tower-Reinforcement-Plates-E36.html) - $27.04 (verified) |
| **Bushings** | **Revshift Full Poly** | [Revshift Complete Bushing Kit](https://revshift.com/products/full-bushing-kit-bmw-e36) - $449.99 (verified) |

---

## Phase 1A/B: Interim Engine Choice  [HEAD/VALVETRAIN · ROTATING-ASSEMBLY · OIL · FUEL · AIR · ECU]

**Strategy:** Choose an interim engine to enjoy the car while building the final 07K offline. Both paths leverage the Phase 1 foundation (8HP + MaxxECU).

| Feature | Option A: Turbo M50 | Option B: NA M52 |
| :---- | :---- | :---- |
| **Best For** | Maximum power, turbo experience. | Response, weight (52 lbs lighter), high-rev NA. |
| **Power Goal** | 450 - 600 HP | 250 - 280 HP (7800 RPM reliable) |
| **Block** | Iron (Indestructible) | Alloy (Nikasil - safe with modern fuel) |
| **Key Upgrades** | K64 Manifold, Rods, ATI Damper. | Schrick Cams, Solid Shims, M50 Manifold. |

### Option A: Turbo M50

#### Head & Valvetrain  [HEAD/VALVETRAIN · MACHINING]
| Component | Specification | Cost / Action |
| :---- | :---- | :---- |
| **Head Gasket** | **Athena Cut-Ring** | [Athena Cut-Ring Gasket (5150)](https://5150autosport.com/products/athena-cut-ring-head-gasket-bmw-m50-m52-s50-s52) - $149.00 (verified) |
| **Head Studs** | **ARP Kit** | [ARP 2000 Head Studs](https://store.vacmotorsports.com/arp-head-stud-kit-bmw-m50s50m52s52-p1.aspx) - $236.74 (verified) |

#### Rotating Assembly  [ROTATING-ASSEMBLY]
| Component | Specification | Cost / Action |
| :---- | :---- | :---- |
| **Connecting Rods** | **Maxpeeding H-Beam** | [Maxpeeding Forge Rods (135mm)](https://www.maxpeedingrods.com/product/connecting-rods-for-bmw-m50-b25-tu-m50-b25-m52-b28-m52-b25-25l-28l-135mm-arp-2000-bolts.html) - $350 - $550 |
| **Connecting Rods (Premium)** | **FCP X-Beam** | [FCP Engineering Forged Rods](https://www.ebay.com/itm/123936285625) - ~$930 (verified) |
| **Harmonic Damper** | **VAC ATI Damper** | [VAC ATI Super Damper](https://store.vacmotorsports.com/vac-motorsports-harmonic-damper-by-ati-bmw-m50m52s50s52m52tum54-p756.aspx) - $1,049.95 (verified) - **Critical for vibration control.** |

#### Oil System  [OIL]
| Component | Specification | Cost / Action |
| :---- | :---- | :---- |
| **Oil Pump** | **VAC Upgrade Kit** | [VAC M50 Oil Pump Kit](https://store.vacmotorsports.com/vac-motorsports-oil-pump-upgrade-kit-bmw-m50m52s50s52-p1041.aspx) - $224.95 (verified) |

#### Fuel System  [FUEL]
| Component | Specification | Cost / Action |
| :---- | :---- | :---- |
| **Injector Upgrade** | **Siemens Deka 630cc EV1 × 6** | [SouthBay Fuel Injectors](https://www.southbayfuelinjectors.com/60lb-630cc-bmw-siemen-deka-ev1-fuel-injectors-set-of-6.html) - $325.00 (verified). **Replaces Phase 1 Bosch 440cc set** — 440cc insufficient for 450–600hp on E85. Same EV1 connector as OEM M5x injectors — fits stock fuel rail. Phase 1 440cc can be resold (~$150). |

#### Air & Boost  [AIR]
| Component | Specification | Cost / Action |
| :---- | :---- | :---- |
| **Turbo Manifold** | **K64 AC+ RHD** | [K64 RHD AC+ Turbo Manifold](https://k64performance.com/exhaust-manifold/1655-rhd-uk-e36-e46-ac-turbo-kolektor-bmw-m50-m52-m54.html) - $839.72 (verified) - **Retains AC.** |
| **Downpipe** | **K64 RHD Downpipe** | [K64 RHD E36 Downpipe](https://k64performance.com/exhaust-manifold/4635-downpipe-rhd-uk-turbo-bmw-e36-e46.html) - $448.00 (verified) |
| **FMIC** | **CXRacing E36 FMIC Kit** | [CXRacing KIT-BMW-E36-IC0029-25](https://www.cxracing.com/KIT-BMW-E36-IC0029-25) - $610.00 (verified). Full kit: 27×11.75×3" bar-and-plate core + aluminum piping + silicon hoses + BOV + brackets. **Intercooler core carries to 07K phase** — piping will need re-routing for 07K turbo position. |
| **Boost Solenoid** | **Turbosmart 2-Port PWM Solenoid** | [Turbosmart Solenoids](https://www.turbosmart.com/product-category/boost-controllers/solenoids/) - ~$65–80. MaxxECU drives via GPO PWM. Budget alt: Bosch N75 PN 0280142431 ~$40. Carries to 07K phase. |

### Option B: NA M52

#### Head & Valvetrain  [HEAD/VALVETRAIN]
| Component | Specification | Cost / Action |
| :---- | :---- | :---- |
| **Cams** | **Schrick 264/248** | [Schrick Camshaft Set](https://www.bimmerworld.com/Engine/Camshafts/Schrick-264-248-Camshaft-Set-E46-325i-330i-E39-525i-530i-Z3-25-30.html) - $1,779.99 (verified) |
| **Valvetrain** | **Solid Shims** | [Alien Engineering Shims](https://www.alien-engineering.com/product-page/alien-engineering-bmw-m50-m52-m54-s50-s52-solid-lifter-conversion-shims) - $150.00 (verified) |

#### Oil System  [OIL]
| Component | Specification | Cost / Action |
| :---- | :---- | :---- |
| **Oil Pump** | **VAC Upgrade Kit** | [VAC M52TU Oil Pump Kit](https://store.vacmotorsports.com/vac-motorsports-oil-pump-upgrade-kit-bmw-m52tum54-p1077.aspx) - $224.95 (verified) |

#### Air / Intake  [AIR]
| Component | Specification | Cost / Action |
| :---- | :---- | :---- |
| **Intake** | **M50 Manifold** | [M50 Intake Manifold Swap](https://bmwtuning.co/bmw-m52-engine-guide/) - ~$150 - $250 |

#### M52 High-Rev Reliability (7800 RPM Target)
- **Oil Pump:** VAC M52TU Upgrade Kit is mandatory for high-RPM oil pressure stability.
- **Valvetrain:** Alien Engineering solid shims eliminate hydraulic lifter "pump-up" above 7000 RPM.
- **Harmonic Control:** While the VAC ATI damper is listed in Phase 1A, it is highly recommended for any M5x build exceeding 7500 RPM to protect the oil pump and crank snout.
- **Bottom End:** Stock M52 rotating assembly is generally reliable to 7800 RPM if oiling and harmonics are addressed.

#### Flex Fuel on M52 (Both Paths)
MaxxECU supports flex fuel natively on the M52. The ethanol content sensor already in Phase 1 ($80, Seems Legit Garage) feeds a single digital input. MaxxECU automatically blends boost, timing, and fueling targets between the 91/93 pump calibration and the E85 calibration based on measured ethanol %. No separate tune file needed — one map covers the full range. On the M52 NA (Option B), E85 provides a meaningful octane safety margin at high RPM; on the Turbo M50 (Option A), E85 enables a significant boost increase.

#### MaxxECU Engine Harness — M5x Phase
MaxxECU sells a **pre-terminated M50 engine harness** that covers both M50 and M52 (with VANOS). This is the recommended harness for Phase 1A/B.

| Item | Detail | Cost |
| :---- | :---- | :---- |
| **MaxxECU M50 Terminated Harness** | [MaxxECU US Store](https://maxxecu.us/product/terminated-engine-harness-bmw-m50/) — OEM BMW connectors, VAG 1.8T COP ignition connectors, VANOS solenoid output, MAP sensor hose, wideband LSU 4.2 connector. Covers M50/M52 with or without VANOS. | $978–$1,240 (varies by ECU variant) |

> **VANOS note:** The M52 uses a different CAM sensor connector than the non-VANOS M50. Either swap the sensor to BMW PN `12141726590` or add a connector adapter + switched 12V to the harness. See [MaxxECU M50 harness docs](https://www.maxxecu.com/webhelp/wirings-terminated_engine_harness-bmw_m50.html) for pinout.

> **Firewall bulkhead connector — plan during Phase 1 chassis prep:** Consider installing a **Deutsch Autosport (AS series) or Souriau 8STA flanged bulkhead connector** at the firewall during Phase 1 while the bay is accessible. Cabin side (ECU CMC connector, fuse block, relay board) wires to the bulkhead permanently. The M52 harness terminates at a mating plug — so does the 07K harness built in Phase 2. Engine swap at Phase 3 = single connector disconnect, no cabin wiring touched. A **47-way** shell handles full M52 or 07K signal count; a **79-way** allows sensor expansion. Budget ~$80–120 (flange receptacle) + ~$60–90 (mating plug, ×2 for both harnesses) + contacts. See Enhancements doc `[ELECTRICAL]` section for full connector comparison and cost breakdown. Source: [RaceSpec Online](https://racespeconline.com).

---

## Phase 2: Final-Form Engine Build (Parallel to Phase 1)  [ROTATING-ASSEMBLY · HEAD/VALVETRAIN · TIMING · OIL · AIR · ECU · MACHINING]

**Strategy:** Build your ultimate 9,000 RPM engine (07K) offline while Phase 1 provides driving power.

> **Early Phase 2 Actions — do these before placing any component orders:**
> 1. **Contact DomiWorks** — confirm your 07K block code (BGP/CBUA/CEPA) and 8HP variant (70Z N57) are compatible with their adapter kit. Get written confirmation. Non-returnable hardware. ([domi-works.com](https://www.domi-works.com/collections/8hp-adapter-kits))
> 2. **Measure G30-770 hood clearance** — with the M5x still in the car, test-position the SPA MK5 manifold and measure vertical clearance to the hood line. The G30-770 is large-frame; E36 top-mount clearance is tight. If marginal: (a) vented/bubble hood, (b) step down to G25-660 RR (~$2,000), (c) Precision Turbo RR T3-inlet (eliminates adapter height). Resolve before ordering.
> 3. **Order BBG billet valve cover + timing cover + coolant flange combo immediately** — ~6-week lead time. Order at Phase 2 kickoff.
> 4. **Send 07K oil pump to LPS** for oil pump mod early — 4–8 week lead time. Needs to return before final engine assembly.

### VW 07K "Baby Lambo" Buildup

#### Sourcing & Machine Shop  [ADMIN · MACHINING]

Verify early forged crankshaft (pre-2007 production date) before ordering any block. Bring donor motor unopened to Euromotive — they coordinate all machine work (bore/hone/deck, head pressure test, valve seat cut if using Inconel valves) and assemble the full longblock. You take delivery of a sealed longblock and do all bolted-on work yourself.

> **✅ DONOR ENGINE SOURCED — dasparts.ca inventory #082055 (SKU: 00188-082055)**
> [Running engine video (YouTube)](https://www.youtube.com/watch?v=EqpVgR3-wR0) · Listed March 25, 2026 · Purchased ~CAD $500 (~USD $365)
>
> | Item | Detail |
> | :---- | :---- |
> | **Vehicle** | 2007 VW Rabbit MkV 2.5L |
> | **Block code** | BGP (iron block) ✅ |
> | **Mileage** | 354,689 km (~220,400 miles) |
> | **As-received** | Longblock — **less alternator, harness, throttle body** (none affect this build) |
> | **Compression (hot)** | Cyl 1: 195 / Cyl 2: 192 / **Cyl 3: 160** / Cyl 4: 195 / Cyl 5: 192 psi — cyl 3 ring wear, expected at mileage, addressed by bore/hone + new pistons |
> | **Oil pressure (warm)** | 30 psi idle / 60 psi @ 2k RPM — healthy for mileage; bearings not catastrophically worn |
> | **Dismantlers note** | "Recommended for a rebuild/re-seal" — honest disclosure, confirms ring wear not bearing failure |
> | **Other notes** | Sheared AC compressor bolts (irrelevant — electric AC in Phase 3); downpipe stub on exhaust manifold (Euromotive handles) |
>
> **✅ CUSTOMS BROKER QUOTE — Livingston International (Robert Blackman, CCS)**
>
> | Fee | Amount | Notes |
> | :---- | :---- | :---- |
> | U.S. Customs Entry Fee | $300.00 | Fixed |
> | Bond Fee | $200.00 | Fixed |
> | Bond Set Up Fee | $100.00 | Fixed |
> | U.S. Pre-Cargo Filing Fee | $17.90 | Fixed |
> | U.S. Disbursement Fee | $10.00 | Fixed |
> | **Fixed Subtotal** | **$627.90** | |
> | U.S. MPF | ~$32.71 | 0.3464% × $365 = $1.26 → statutory minimum of ~$32.71 applies |
> | U.S. Duty | **TBD** | HTS 8407.34 (spark-ignition auto engines) base rate = 2.5% (~$9). USMCA could bring to $0; Section 232 tariff risk adds upside. Broker to advise final classification. |
> | **Total Customs Overhead** | **~$660–$760** | Duty TBD. Fixed fees alone (~$660) are ~1.8× the engine purchase price. |
> | **Total Landed Cost** | **~$1,025–$1,125** | Engine ($365 USD) + broker overhead. Duty ceiling TBD. |
>
> **✅ CRANK STATUS — UPDATED:** partslink24 VIN lookup on `WVWAR71K17W082055` confirms factory fitment of **`07K105101E` (forged crankshaft)**. nemigaparts ETKA data shows `07K105101E` was fitted to VW Golf/Rabbit **2006–2007 USA**, consistent with this vehicle. Community "assume cast" guidance appears to apply to later BGP production or BGQ engines — this specific car predates the cutover. **Do NOT order a replacement crank until Euromotive teardown physically confirms the forging seam.** High probability the donor crank is already the forged unit needed for the build.

**Recommended SE PA Shop:** [Euromotive Autohaus](https://www.eurohauspa.com/) — 1306 W Chester Pike, West Chester, PA · **(610) 416-5702** · VW/Audi/BMW specialist, explicitly lists engine rebuilds & swaps, authorized 034 Motorsports + Integrated Engineering dealer. Appointment-based.

> **Build Reference:** This spec was cross-referenced against documented real-world 07K forged builds. See [Key References](#key-references) for community build examples that informed additions to this phase.

#### Rotating Assembly  [ROTATING-ASSEMBLY]

![partslink24 VIN confirmation — 07K 105 101 E crankshaft, VIN WVWAR71K17W082055](./partslink24_WVWAR71K17W082055_crankshaft.png)
*[View full screenshot → Google Photos](https://photos.app.goo.gl/fPZbBhzWnN1p13iK9)*

| Component | Specification | Cost / Action |
| :---- | :---- | :---- |
| **Crankshaft** | **Early Forged 07K — HOLD** | partslink24 confirms `07K105101E` for this VIN. **Do not purchase until Euromotive teardown confirms or denies forging seam.** If cast (unlikely): [eBay Listing 1 (EUR 1,129 OBO)](https://www.ebay.com/itm/385346021056) / [eBay Listing 2 (EUR 959)](https://www.ebay.com/itm/365953631003) - ~$1,050–1,250 USD |
| **Pistons + Rods** | **SPA Turbo Kit** | [Forged SPA Pistons/Rods (83mm/144mm)](https://spaturbousa.com/products/forged-piston-and-rings-set-83mm-vw-2-5l-jetta-mk5-07k-vw-144mm-x-20mm-super-a-connecting-rod-set-3-8-bolt-1000hp) - $799.90 (verified) |
| **Bearings** | **King XP Tangless** | [King Main Bearing Set](https://www.sbpartsdirect.com/product_p/king_main_bearing_07k.htm) - $195.99 (verified). **OEM ref (partslink24):** `07K 105 561` (upper, BLA/GLB/ROT options) / `07K 105 591` (lower). **⚠️ Do not order until after Euromotive mics the journals.** If journals are at spec → order **Standard**. If journals are reground → order the exact undersize Euromotive specifies (.001, .010, .020, etc.). Ordering Standard before teardown risks a wasted $196 if a regrind is needed. |
| **Rod Bearings** | **King XP Tangless (07K)** | [SBPartsDirect — King 2.5 07K XP Rod Bearings](https://www.sbpartsdirect.com/category_s/305.htm) - $59.99. Same XP tri-metal copper-lead nickel construction as main bearings, confirmed EA855 2.5L fitment. **OEM ref (partslink24):** `07K 105 701 E` (upper) / `07K 105 701 F` (lower) — color code **yellow (GLB)**, production range 06/06–05/07. Match this color code when sourcing King XP to ensure correct journal sizing for the `07K105101E` forged crank. **Procurement note:** These yellow/GLB spec bearings are frequently out of stock in the US — source via eBay Germany if needed, pre-order early. |
| **ARP Main Studs** | **ARP-CVB2 (IE-designed kit)** | [Four Season Tuning — ARP-CVB2](https://www.fourseasontuning.com/arp-cvb2-arp-main-stud-kit-for-mk5mk6-25l-5-cylinder-engines) — $299.99. Custom-designed by IE for the VW MK5/MK6 2.5L I5. Eliminates main cap walk and fretting under high-power loads. ARP 8740 alloy, heat-treated to 200K psi, thread-rolled after heat treat. 100% reusable. **Confirmed standard practice on all BBG 07K builds.** Critical: requires align honing after stud installation — coordinate with Euromotive machine shop at build time. |
| **360° Thrust Bearing Mod** | **Machine shop operation — #4 main cap (both sides)** | **⚠️ Part to source first: 034 block thrust washers** (full-circle thrust washers from the VW 034-engine block — different from the 07K stock half-shell). Bring these to Euromotive/machine shop along with the YouTube reference video below — shop will machine the #4 main cap(s) to accept the full-circle washers. Carson Heter: "I did the 360° thrust on both sides" — consider machining both sides of the #4 cap, not just one. Jimolde Burnsides: "360 is a must if you can." Confirmed in BBG Porsche 944 build video and Jaaatt Engineering 07K forged build. Budget ~$50–150 machining, absorbed into longblock labor scope; add to Euromotive scope at dropoff. **Video reference (show to machine shop):** [Five (5) Cylinder VW Thrust Washer Repair](https://www.youtube.com/watch?v=hCIZny5uc4Q) · [FB thread](https://www.facebook.com/groups/07kswap/permalink/3607377339428880/) |
| **Harmonic Damper** | **Fluidampr 07K** | [Fluidampr 551211 Damper](https://www.realstreetperformance.com/brand/fluidampr) - $501.99 (verified) |
| **Water Pump** | **OEM VW `07K121011B` — impeller removal, housing stays** | [VWPartsGiant 07K121011B](https://www.vwpartsgiant.com/oem-2007-volkswagen-rabbit-water_pump) - $134.93. Bring to Euromotive at dropoff. **⚠️ Belt-driven (accessory belt, NOT timing chain)** — pump has its own pulley on the serpentine belt path. With EWP confirmed: remove impeller only, leave housing mounted and plumbed to coolant circuit. No commercial 07K water pump block-off plate exists — housing-in-place is the correct approach. OEM housing serves as coolant distribution manifold; pulley freewheels passively (no pumping load). Pierburg CWA400 handles pumping. **🔄 @wingman703 diverges here:** he does a full pump delete — removes OEM pump entirely, blocks the rear coolant port with a custom welded-on plate, and deletes all heater core plumbing (Miata track build, no cabin heat). This build retains impeller-removal/housing-in-place approach **intentionally** to preserve heater core plumbing and cabin heat option (street car). |
| **Electric Water Pump — ✅ CONFIRMED** | **Pierburg CWA400 (PWM version) — MaxxECU PWM GPO control** | **Confirmed by @wingman703 directly: "CWA400 controlled by the Maxx ECU."** Brushless centrifugal OEM pump (BMW/VW). 150 LPM @ 0.85 bar (vs 40 LPM for EWP150). No separate pump controller — MaxxECU drives pump speed via PWM GPO at 680 Hz. One CLT sensor (MaxxECU standard NTC) controls everything. **⚠️ Version critical:** Must source PWM version — Pierburg `7.07223.10.0` / BMW `11515A05704` / `11517563659` / `11517568594`. Post-March 2024 production = LIN bus only (NOT PWM-controllable) — Pierburg `7.03665.66.0` / BMW `11517604027` — do not use. **Sourcing:** New ~$720 ([Dedicated Motorsports](https://dedicatedmotorsports.com/products/pierburg-cwa400-intercooler-pump-pwm-version.html)); OEM BMW pull (eBay) $50–150 used — verify PWM part# before buying. **Power wiring:** 40A relay (Bosch 0 332 002 150) + 10 AWG feed/ground (35.5A max draw). **Connector:** Kostal 2+2 (4-pin) — Pin 1 = PWM signal, Pin 2 = BSD (unused), Pin 3 = +12V, Pin 4 = GND. **MaxxECU duty map:** 20% @ 60°C / 55% @ 85°C / 97% @ 105°C. **Post-shutdown:** MaxxECU power hold relay keeps ECU alive — commands pump via PWM until CLT < 70°C; dedicated power hold relay required. **(1) Pre-fire bleed:** tie Pin 1 to +12V (forces emergency run / full speed) for bleed without ECU. (2) OEM impeller removed, housing stays as coolant manifold — pulley freewheels in belt path. **Wiring reference:** [ewp-wiring-reference.md](https://github.com/wesleyxcooper/e36-wiring/blob/main/ewp-wiring-reference.md). |
| **Accessory Belt (07K) — alternator + passive water pump pulley** | **Custom shorter belt — route TBD at Phase 3 install** | With EWP (impeller removed, housing + pulley stay), column-assist EPS (PS pump deleted), and 12V electric A/C compressor (belt-driven compressor deleted), the **active belt-driven load reduces to alternator only — water pump pulley remains in the belt path as a passive free-spinning routing point.** The stock 07K accessory belt path (which included AC, PS, and water pump) is no longer valid — need a custom shorter belt. **Closest reference product:** Eurowise 07K AC Delete Kit (`EW07ACDK`) — $425 — [shop.eurowise.com](https://shop.eurowise.com/products/07k-ac-delete-kit) — billet dual-belt alternator pulley + repositioned idler + both belts included. Designed for MK-platform 07K swaps (MK1, MK4–MK6), not E36 longitudinal — may not drop in directly but is the best reference for the belt solution concept. **Action at Phase 3:** confirm alternator and water pump pulley positions in longitudinal E36 orientation, determine idler/tensioner pulleys still in use, source custom belt or adapt Eurowise kit. Flag to Euromotive at dropoff. Gates serpentine belt selector can match belt length once pulley layout is confirmed. |
| **EGR Delete — TWO operations** | **Op1: M14×2 tap + button head bolts + Resbond 907TS Blue; Op2: EGR flow port blanking plates + Permatex Ultra Copper** | **⚠️ Mandatory for any boosted 07K. Two distinct operations — confirmed by @wingman703.** Do on stand before Euromotive dropoff OR on sealed longblock before install. **Op1 — Freeze plug holes (front + rear):** Remove both OEM pressed-in freeze plugs (blow out under high turbo EMAP). Tap M14×2 — no drilling needed. Install M14×2 button head socket cap bolts — button/dome head only (rear has zero clearance for standard hex). Seal threads with Resbond 907TS Blue (+2100°F) — not Loctite, not RTV. Peen/stake bore edge after install. **Op2 — EGR flow port blanking (front + rear):** The circular EGR flow ports on the block face (rubber-gasket seats, ~2 mounting bolts each) are SEPARATE from the freeze plug holes and require their own blanking plates. Apply Permatex Ultra Copper high temp RTV around port perimeter; bolt flat blanking plate over each port. Source/fabricate: flat plates to match EGR port bolt pattern (1/8" steel or 6061 aluminum). **Parts total ~$80–90:** M14×2 tap ~$20, button head bolts ×2 ~$5–10 (McMaster `92949A533`), Resbond 907TS Blue ~$35, blanking plates (source/fab), Permatex Ultra Copper ~$12. |
| **Longblock Build Labor (Full Scope)** | **Euromotive Autohaus** | **Revised estimate: ~$3,450–5,550 total (labor + machine work combined).** Shop rate confirmed ~$150–165/hr based on prior service receipts. Breakdown at $157.50 avg: teardown + measurement (4–6 hrs, $630–945) + short block assembly w/ ARP studs (6–9 hrs, $945–1,418) + head assembly, valve lash, install (5–8 hrs, $788–1,260) + timing + close (2–3 hrs, $315–473) = **$2,678–4,096 labor**. Machine work (likely subcontracted flat rate): bore/hone $350–600 + align hone $150–300 + deck check $100–200 + head pressure test/valve lap $100–200 + 360° cap machining $75–150 = **$775–1,450 machine work**. **Budget midpoint: ~$4,200–4,500.** Ask Euromotive at dropoff whether they quote flat-rate per operation or open hourly — flat-rate may come in lower. Bring donor motor unopened. You take delivery of a complete sealed longblock. [Euromotive Autohaus](https://www.eurohauspa.com/) — West Chester, PA · (610) 416-5702. |

#### Head & Valvetrain  [HEAD/VALVETRAIN · MACHINING]
| Component | Specification | Cost / Action |
| :---- | :---- | :---- |
| **Valvetrain** | **Supertech Dual** | [Supertech Valve Spring Kit](https://us.ctsturbo.com/product/supertech-valve-spring-retainer-set-for-audi-vw-2-5l-fits-vw-mk5-mk6-audi-ttrs-rs3/) - $523.63 (verified). **Note — RS3/TTRS spring cross-compatibility confirmed:** The 07K NA head and the EA855 RS3/TTRS head share the same valve spring seat geometry — springs are physically interchangeable (confirmed by CTS Turbo, IE, and Supertech fitment listings). OEM RS3/TTRS valve springs are a documented drop-in upgrade over stock 07K springs (stiffer due to turbocharged application) and available used for ~$30–60. Tuner data on the RS3 platform (Audizine) indicates stock springs are comfortable to ~7,800–8,000 RPM, with some tuners reporting 8,500 RPM on stock internals — notably the RS3 head has stiffer OEM springs than many other turbo platforms. This 07K build is turbocharged (G30-770, 18–28 psi), so boost-assisted valve closure conditions are directly comparable to the RS3. At the plan's stated 8,000 RPM target (described as a safety margin — meaning the engine will occasionally exceed it), OEM RS3 springs would be operating at their absolute ceiling with zero headroom. Additionally, OEM RS3 retainers are steel — the Drifting Reliability section (below) explicitly identifies stock steel retainers as too heavy for stable operation at 8,000+ RPM. Supertech Dual with titanium retainers is the correct choice. OEM RS3 springs are not a viable budget option for this specific build — they might survive at 8,000 RPM in steady use but offer no margin for limiter hits or overrev, and the steel retainers are a separate disqualifying factor at this RPM. |
| **Solid Lifter Conv.** | **Ferrea Shims** | [Ferrea 07K Lifter Shims (Set of 20)](https://www.ecodetuning.com/lp1102-20-lp1102-20-ferrea-racing-components-volkswagen-2-5l-lifter-shims-set-of-20.html) - $46.30 (verified) |
| **Exhaust Valves** | **Supertech Inconel Exhaust Valves** | [Supertech Valves (IE)](https://performancebyie.com/products/supertech-valves-vw-audi-20t-fsi-tsi-25l) - ~$220 — **Optional for this use case.** Inconel is a longevity upgrade for sustained high-EGT racing. For a few track events/year on E85, stock exhaust valves are defensible. Skipping saves ~$220 + reduces machine shop cost to ~$200–400 (lap existing valves, deck check only — no seat cut required). Valve **springs and retainers are still mandatory** regardless. |
| **Head Machine Work** | **Euromotive-coordinated** | Included in machine work subtotal above ($775–1,450). Head pressure test + valve lap: ~$100–200 (no Inconel). If Inconel exhaust valves: add seat cut ~$300–800 on top. Euromotive subcontracts to their machine shop and bills at cost + markup. |
| **Head Gasket** | **TTRS CEPA** | [Victor Reinz Head Gasket](https://fcp-engineering.com/en/audi-vw/1992-audi-25-20v-tfsi-victor-reinz-head-gasket-kit.html) - $200.00 (verified) |
| **Head Studs** | **ARP-CVB1 (IE-designed kit)** | [Techtonics Tuning — ARP-CVB1](https://techtonicstuning.com/product/arp-head-stud-kit-for-mk5mk6-25l-5-cylinder/) - $223.00. IE-exclusive ARP 8740 alloy, heat-treated 200,000 psi, thread-rolled after heat treat, 100% reusable. Fits all MK5/MK6/TT-RS 2.5L 5-cylinder (BGP/BGQ/CBU). **ARP-CVB1 (head) and ARP-CVB2 (main) are the matched pair — both are standard practice on all complete 07K turbo builds.** |
| **Valve Cover / Timing Cover / Coolant Flange** | **Boost Brothers Billet Combo** | [BBG Billet VC + Upper Timing Cover + Rear Coolant Flange](https://www.boostbrothersgarage.com/collections/944-07k-swap/products/07k-billet-valve-cover-upper-timing-cover-and-rear-coolant-flange-combo) - $975–$1,075 (verified). PRE-ORDER (~6 wk lead time) — order early. Low-profile for hood/firewall clearance; baffled -10 AN crankcase port; retains stock coils and gasket. Rear coolant flange bolt-on for in-car serviceability. |

#### Oil System  [OIL]
| Component | Specification | Cost / Action |
| :---- | :---- | :---- |
| **Oil Housing** | **iABED Housing** | [iABED Longitudinal Filter Housing](https://byiabed.com/07K-LONGITUDINAL-Oil-Filter-housing-W-THERMOSTAT_p_156.html) - $529.00 (verified). **Turbo oil feed port built in** — install -4AN fitting (M12×1.5 to -4AN adapter or direct -4AN per iABED port spec) for G30-770 oil feed line. Include 0.9–1.0mm orifice restrictor inline — standard for journal bearing turbos. Confirmed by @wingman703. |

#### Air / Intake  [AIR]
| Component | Specification | Cost / Action |
| :---- | :---- | :---- |
| **Intake Manifold** | **Boost Brothers** | [Longitudinal Intake](https://www.boostbrothersgarage.com/products/07k-swap-intake-manifold) - $971.00 (verified) |
| **Phenolic Intake Gasket** | **LPS 07K** | [LPS Phenolic Gasket](https://lpsfab.com/products/lps-07k-phenolic-intake-gasket) - TBD. 1/8" heat isolator between head and aluminum manifold. Limits IAT heat soak. Works with BBG and LPS manifolds. |
| **Titanium Exhaust Stud Kit** | **LPS 07K** | [LPS Ti Stud Kit](https://lpsfab.com/products/07k-titanium-exhaust-stud-kit) - TBD. 15x 6AL-4V titanium studs + nuts + washers. Factory studs too short for aftermarket manifolds. Won't seize. Order Phase 2, install Phase 3. |

#### Drivetrain — Adapter Plate  [DRIVETRAIN]
| Component | Specification | Cost / Action |
| :---- | :---- | :---- |
| **Adapter Plate + Flexplate** | **DomiWorks VW 1.8T/1.9T → BMW 8HP N57 Kit (SKU 21015002)** | [DomiWorks 1.8T/1.9T to 8HP 45/50/70/75 N57 Adapter Kit](https://www.domi-works.com/products/vw-1-8t-1-8t-to-bmw-8hp-45-50-70-75-n47-n57-b57-b58-s58-adapter-kit) - ~$1,200 est. (order Phase 2 / install Phase 3 — **see Phase 3 for verified $1,397 install cost; do not double-count**). 07K shares flywheel/bellhousing bolt pattern with VW 1.8T/1.9T; kit applies directly. Includes billet SS2541 flexplate, center guide, hardware. 33mm anodized aluminum plate. Fits 8HP70/75 N57. **Verify 07K compatibility with DomiWorks before ordering.** **Alt:** [Chatham CNC](https://www.chathamcnc.com/contact.html) (Mike Gordeev, @chathamcnc) — custom 07K→8HP kit: adapter plate + adapter flex plate + modified torque converter. Quote required (mike@chathamcnc.com / 919-740-9748). Seen on @wingman703 build. Key difference: modifies stock 8HP TC rather than supplying a billet flywheel. |

### Turbo Selection  [AIR]

**Use case:** Street cruiser / HPDE / occasional drift (~6 events/year). 8,000 RPM target is a safety margin, not a sustained abuse ceiling.
**Power targets:** ~400–500whp on pump gas (91/93), ~600whp on E85/flex fuel.

| Component | Specification | Notes |
| :---- | :---- | :---- |
| **Turbo** | **Garrett G30-770 Reverse Rotation** | V-band inlet (.83 A/R) — $2,731 verified ([Full Race](https://www.full-race.com/garrett-g-series-g30-770-reverse-rotation-turbo)). **Reverse rotation required** to correctly orient the compressor outlet when using the SPA MK5 manifold in a longitudinal installation — confirmed approach by the Rennlist 944 07K community. ~$89 premium over standard rotation. |
| **Wastegate** | **Tial 44mm MVR** (V-band) | External, V-band, $435 verified. Direct fit to SPA MK5 manifold V-band WG provision. 44mm required for boost control above ~500whp on E85. |
| **Manifold** | **SPA Turbo MK5 T3 Twin Scroll (TMW22)** | $459.90 verified ([SPA Turbo USA](https://spaturbousa.com/products/vw-5-cyl-2-5l-20v-fsi-t3-top-mount-twin-scroll-turbo-manifold-wastegate-v-band)). Usable in longitudinal orientation **with reverse rotation turbo** (944 community confirmed). T3 turbo flange → T3-to-V-band adapter (~$40) for G30-770. V-band 44mm WG port. RHD clearance is a **downpipe** issue, not a manifold issue — see below. |
| **Downpipe** | **Custom RHD Downpipe** | Custom fab, ~$400–600. Routes turbo outlet around/under the RHD steering rack to 3-inch exhaust. **Far cheaper than a custom manifold** ($400–600 vs $1,200–1,800). Must be ceramic coated (see Heat Control row). |
| **Flex Fuel Sensor** | **Ethanol content sensor (inline)** | Install on fuel feed line. MaxxECU supports flex fuel natively — single map auto-adjusts timing and boost target based on ethanol %. No separate E85 tune needed. |

**Boost targets (approximate):**
- Pump gas (91/93): ~18–22 psi → ~400–500whp
- E85: ~25–28 psi → ~575–625whp

> **Note:** Verify injector sizing supports E85 fuel flow at target power. At 600whp on E85, you'll likely need 1000cc+ injectors depending on duty cycle. Confirm with tuner.

---

### Engine Accessories  [STEERING · AC]

The 07K was designed for transverse FWD use. In a longitudinal BMW chassis its accessory drive does not directly accommodate BMW-specific components. The recommended approach eliminates both accessories from the engine belt entirely:

| Component | Specification | Cost | Link | Notes |
| :---- | :---- | :---- | :---- | :---- |
| **Power Steering** | **Column-Assist EPS (RHD — see options below)** | ~$100–1,300 | See notes | Eliminates hydraulic pump entirely — no belt, no bracket, no lines. The stock E36 hydraulic rack remains in place and functions as a manual rack; the column-assist EPS compensates upstream. Cap hydraulic lines at rack. **RHD EPS options:** (1) EPowerSteering.com E36-specific kit ($1,300) — column core exchange, best documented, **verify RHD column compatibility before ordering** ([epowersteering.com](https://epowersteering.com/purchase/product/bmw-e36/)); (2) Peugeot 206 GTi or Toyota MR2 ZZW30 salvage EPS column (~$50–100 donor) — RHD native, requires fabricated mount bracket to E36 column, well-documented in UK/AU track community. **Speed-sensitive assist:** wire MaxxECU GPO → EPS controller VSS input for automatic assist reduction at speed — eliminates need to manually adjust the assist knob between parking and highway use. Forum reference: [r/BMWE36 EPS discussion](https://www.reddit.com/r/BMWE36/comments/1em1mzn/steering_rack_options/). |
| **Alternator** | **Bosch 140A — `07K 903 023 A`** | Reuse OEM (partslink24 VIN-confirmed) | OEM new: `07K 903 023 A` (Bosch, 12V, 140A, CW) — [Amazon aftermarket](https://www.amazon.com/dp/B0CHJYFW1T) ~$80–120. Reman exchange: `06F 903 023 FX` (superseded by `07K 903 023 AX`). Bosch internal ref: `0 124 525 102`. OEM decoupler pulley: `07K 903 119`. **partslink24 VIN `WVWAR71K17W082055` confirms 140A factory fitment (PR T59).** 140A has substantial headroom over normal accessory load — adequate for electric AC without any upgrade. | Wire D+ (excite) terminal from chassis harness — alternator will not charge reliably below ~1,500 RPM without it. |
| **Air Conditioning** | **12V Electric AC Compressor (universal)** | ~$300–400 | [Cold Hose Universal Kit](https://coldhose.com/products/universal-12v-electric-compressor-kit) or generic 12V scroll unit (~$200–350 Amazon/AliExpress) | Not belt-driven — mounts anywhere, powered from chassis 12V. **Power budget: 25–40A running draw — well within 140A alternator headroom (no alternator upgrade needed).** Retains existing E36 condenser, evaporator, and cabin controls. Requires short custom adapter lines to suit compressor port locations (~$50–100 at AC shop + recharge). Receiver/drier replace when system is opened. |

> **X20 Connector:** The E36 firewall bulkhead connector (chassis-to-engine-bay harness interface) is the **X20**. This is the critical interface for standalone ECU installs — MaxxECU outputs (RPM, temp, oil pressure) wire to the appropriate X20 pins to drive the OEM instrument cluster. Pinout reference: [BMW E36 X20 Pinout (Scribd)](https://www.scribd.com/document/649295040/bmw-e36-x20-pinout).

---

### ECU — M5x → 07K Harness Transition  [ECU]

**The same physical MaxxECU unit runs both engines.** You load a different tune file. The only hardware changes at swap time are the engine harness and sensor connectors — the ECU, 8HP wiring, wideband O2, MAP sensor, and boost solenoid all stay.

| Item | M5x Phase | 07K Phase | What Changes |
| :---- | :---- | :---- | :---- |
| **ECU box** | MaxxECU | Same MaxxECU | Nothing |
| **8HP trans wiring** | Connected | Still connected | Nothing |
| **Engine harness** | MaxxECU M50 terminated harness ($978–$1,240) | Custom 07K harness (build offline) | Swap harness plugs at engine change |
| **Crank sensor** | BMW 60-2 VR | VW 60-2 VR | Same signal type — different connector + re-trigger offset only |
| **Cam/home sensor** | BMW Hall effect | VW Hall effect | Different connector — adapter pigtail or new harness end |
| **CLT sensor** | BMW NTC | VW NTC | Different connector + recalibrate sensor curve in MaxxTune |
| **TPS** | BMW M52 TPS | VR6 throttle body TPS | Different connector — same 0–5V analog signal |
| **Injectors** | Bosch JPT (OEM M52) | Bosch EV14 (turbo upgrade) | Different connector end on harness |
| **VANOS solenoid** | Used (GPO 3) | Not applicable | Disable in tune — output unused |
| **Wideband O2** | Same sensor | Same sensor | Re-plumb bung to new exhaust |
| **MAP sensor** | Same sensor | Same sensor | Re-plumb to new intake |
| **Flex fuel sensor** | Digital input (already wired) | Same input | Nothing — already calibrated |

> **Build approach:** Construct the 07K engine harness offline while the M52 is running. Use the same MaxxECU CMC connector ends — VW sensor connectors on the engine side. At swap time: unplug M52 harness → plug in 07K harness → load 07K base map → dyno tune.
>
> **Firewall bulkhead connector (recommended):** Route both the M52 and 07K harnesses through a single **Deutsch Autosport (AS series) or Souriau 8STA circular bulkhead connector** mounted on the firewall — ideally a 47- or 79-way flanged receptacle. The cabin side (ECU CMC, fuse block, relay board) is wired to the bulkhead permanently. Each engine harness terminates in a mating plug. Engine swaps become a single-connector disconnect at the firewall — no cabin wiring touched. Install the bulkhead during Phase 1 chassis prep while the firewall is accessible. See Enhancements doc for connector specs and cost breakdown.

> **07K OEM ECU (ME7.1.1) Pinout Reference:** When building the 07K engine harness, the OEM ME7.1.1 pinout identifies which wire at each VW connector maps to which sensor/actuator — critical for building the engine-side pigtails that plug into the MaxxECU. Key signals: crank trigger (Conn B pin 82), cam sensor (pin 86), injectors 1–5 (pins 96, 97, 112, 88, 89), coils 1–5 (pins 102, 103, 111, 94, 95), knock sensors (pins 106/107), MAP (pin 101), ECT (pin 93), DBW throttle body (pins 84/92/117/118), APS 1+2 (pins 35/72 and 34/73), cam actuator (pin 115). Discard: MAF, both OEM O2 sensors, SAI, EVAP, cruise, K-Line. **Pinout PDF (Google Drive):** [ME7.1.1 Pinout PDF](https://drive.google.com/file/d/15RPWyYPLHGEMMQZIlUgpoo77T-CxjyMP/view) · **Google Docs version:** [ME7.1.1 Pinout Doc](https://docs.google.com/document/d/1YAVQSiHIVDmD4jtIVNzIDVkd9qCpaQc1yFIbnHwPwww/edit)
>
> **Trigger advantage:** Both M52 and 07K use 60-2 crank trigger wheels with VR sensors. MaxxECU trigger type (`N-1 missing tooth`) is **identical** on both. Only the crank angle offset calibration differs — significantly reducing 07K tune bring-up time.

---

### Drifting Reliability Upgrades  [OIL · HEAD/VALVETRAIN]

> **Reference:** [07K Turbo build… The ULTIMATE 5 cylinder turbo setup! (YouTube)](https://www.youtube.com/watch?v=V2OxGOoeDmI&t=1102s) — dyno run to 8,000 RPM at 18:20 (701 whp on E85, G30-900, 07K forged build)

| Component | Risk Without It | Recommendation |
| :---- | :---- | :---- |
| **Baffled Oil Pan** | **Fatal** — lateral G forces slosh oil away from the pickup, causing instant bearing failure at high RPM | [iABED 07K Oil Pan - Longitudinal Configuration (B2 Through B8)](https://byiabed.com/07K-Oil-Pan--Longitudinal-Configuration-B2-THROUGH-B8_p_158.html) — $2,499 verified (iron block BGP/CBUA/CEPA). In stock. Fully baffled, trap door cage. Mandatory for drifting. |
| **Oil Pump Upgrade** | **High** — stock 07K oil pump cavitates above ~8,000 RPM, starving bearings under limiter-bashing | **LPS Oil Pump Mod** — send-in service, contact [Linder Power Systems](https://linderpowersystems.com) directly. Early-style pump only — verify pump version before sending. Price TBD. 4–8 week lead time; send at Phase 2 kickoff. Ref: [LPS YouTube](https://www.youtube.com/watch?v=nXsUm8ph2Ys) |
| **Titanium Retainers** | **High** — stock steel retainers are too heavy to keep valvetrain stable at 8,000+ RPM without solid lifter conversion | Confirmed included in the [CTS Turbo Supertech kit](https://us.ctsturbo.com/product/supertech-valve-spring-retainer-set-for-audi-vw-2-5l-fits-vw-mk5-mk6-audi-ttrs-rs3/) — verify Ti retainers are in the kit at purchase. |
| **Anti-Pump-Up Lifters** | **High** — repeated hard ignition-cut rev limiter hits cause hydraulic lifters to over-expand, holding valves open into pistons | **Covered by the Ferrea solid shim conversion** (already in build). This eliminates hydraulic lifters entirely — superior to "anti-pump-up" lifters. |
| **TTRS Oil Squirters** | **Medium–High (road course)** — stock BGP squirters produce a misty spray sized for NA crankcase pressure. Turbo blowby raises crankcase backpressure, reducing squirter effectiveness at the piston crown. Road course / sustained high-RPM boost = sustained heat load on pistons. | Replace all 5 with **TTRS / RS3 oil jets**. Confirmed compatible part numbers: **`06J103154B`** (post-Aug 2010 TTRS/CEPA, supersedes `06F103154A`) · **`06J103154AA`** (confirmed fitment, EA888 Gen1 — physically identical to CEPA spec per community). **Gen1 EA888 squirters bolt straight in** — same as CEPA versions (Carson Heter). Alt approach: EA888 Gen3 squirter tips + OEM 07K banjo bolt (Julio César Mireles). Two design changes vs stock BGP: (1) banjo bolt has 4 oil holes vs 2 — double flow rate; (2) jet tip has larger opening + steeper taper — "thicker" shot vs stock "mist", higher exit pressure. Same thread as BGP block. **Torque: 27 ft-lbs** (VW erwin). ~$15–30/jet × 5 = ~$75–150 total. **Best source:** VW/Audi dealer with heavy discounts — Genuine Audi Parts or Miramar Audi (CA) recommended by community. Install during longblock build — zero extra labor. Oil pressure drop is marginal and mitigated by LPS pump mod already in build. Drag-only builds can skip; road course / drift builds should not. Ref: [CaddyFab 07K Build — Installation of TTRS Oil Jets](https://caddyfab.com/log/installation-of-ttrs-oil-jets) · [07K Swap FB Group thread 1](https://www.facebook.com/groups/07kswap/permalink/3608542169312397/) · [07K Swap FB Group thread 2](https://www.facebook.com/groups/07kswap/permalink/3608094966023784/) |

#### Drifting Reliability Checklist
| Component | Stock Risk at 8,000 RPM | Build Status |
| :---- | :---- | :---- |
| **Valve Springs** | High — float risk | ✅ Supertech Dual Springs in build |
| **Lifters** | High — pump-up risk | ✅ Ferrea solid shim conversion in build |
| **Titanium Retainers** | High — mass instability | ✅ Included in Supertech kit (verify at purchase) |
| **Oil Pan** | Fatal — starvation | ✅ iABED Baffled Pan — in build ($2,499, in stock) |
| **Oil Pump** | Inadequate — cavitation | ⚠️ LPS send-in mod — contact Linder Power Systems; send pump at Phase 2 kickoff |
| **TTRS Oil Squirters** | Medium–High — stock mist spray insufficient under turbo crankcase pressure at sustained road course boost | ⚠️ Add to Euromotive Phase 2 scope — 5× `06J103154B` or `06J103154AA` jets, 27 ft-lbs torque. ~$75–150 parts. [FB thread 1](https://www.facebook.com/groups/07kswap/permalink/3608542169312397/) · [FB thread 2](https://www.facebook.com/groups/07kswap/permalink/3608094966023784/) |

---

### Timing Chain Refresh  [TIMING]
| Part Name | Part Number | Link | Price |
| :---- | :---- | :---- | :---- |
| Lower Chain | 07K109120A | [Europa Parts](https://www.europaparts.com/timing-chain-07k109120a.html) | $49.95 |
| Upper Chain | 07K109231A | [Europa Parts](https://www.europaparts.com/timing-chain-07k109231a.html) | $39.95 |
| Oil Sprocket | 07K115121F | [OEM VW Parts Haus](http://www.oemvwpartshaus.com/products/Volkswagen-VW/1990/CRANKSHAFT-GEAR-Engine-Timing-Sprocket/5151944/07K115121F.html) | $58.23 |
| Idler Sprocket | 07K109077E | [FCP Euro](https://www.fcpeuro.com/products/vw-audi-engine-timing-sprocket-vag-07k109077e) | $177.99 |

---

## Phase 3: Final Engine Swap & Integration  [CHASSIS · DRIVETRAIN · AIR · FUEL · COOLANT · OIL · STEERING · AC · THERMAL · ECU]

**Strategy:** Pull the interim M5x engine and install the completed 07K engine. Leverage the MaxxECU and 8HP foundation.

### E36 07K Integration Components

#### ECU & Engine Harness  [ECU · ELECTRICAL]
| Component | Specification | Cost / Action |
| :---- | :---- | :---- |
| **07K Engine Harness** | **MaxxECU Custom 07K Harness (build offline in Phase 2) + Deutsch AS / Souriau 8STA firewall bulkhead** | Build using MaxxECU CMC connector ends with VW sensor connectors (crank VR, cam Hall, CLT NTC, TPS, injectors EV14 ×5, MAP, IAT, wideband). Same ECU as M5x phase — harness swap replaces M52 harness; no additional ECU cost. **If firewall bulkhead was installed in Phase 1:** swap is a single connector disconnect. ~$550–900 total (harness materials + contacts + mating plug). See Enhancements doc `[ELECTRICAL]` for full bulkhead connector detail. |

#### Chassis — Engine Install  [CHASSIS]
| Component | Specification | Cost / Action |
| :---- | :---- | :---- |
| **Engine Mounts** | **Custom E36 Mounts** | [Race3 / JNC Custom Mount Arms](https://www.race3.ca/) - ~$400 - $600 |

#### Drivetrain  [DRIVETRAIN]
| Component | Specification | Cost / Action |
| :---- | :---- | :---- |
| **Adapter Plate + Flexplate** | **DomiWorks VW 1.8T/1.9T → BMW 8HP N57 Kit (SKU 21015002)** | [DomiWorks 1.8T/1.9T to 8HP 45/50/70/75 N57 Adapter Kit](https://www.domi-works.com/products/vw-1-8t-1-8t-to-bmw-8hp-45-50-70-75-n47-n57-b57-b58-s58-adapter-kit) - $1,397 (verified) — **Required for Phase 3 engine swap.** 07K shares flywheel bolt pattern with VW 1.8T. Kit includes billet SS2541 flexplate + center guide + hardware. 33mm anodized aluminum adapter. Verify 07K compatibility with DomiWorks before ordering. **Alt:** [Chatham CNC](https://www.chathamcnc.com/contact.html) (@chathamcnc) — custom 07K→8HP kit (adapter plate + adapter flex plate + modified TC). Quote required; seen on @wingman703 build. Note: if using Chatham CNC, confirm whether their kit also requires the VW starter or if the N54 starter is retained. |
| **Starter** | **VW Longitudinal Starter `068911024GX`** | [FCP Euro - Bosch 068911024GX (reman)](https://www.fcpeuro.com/products/volkswagen-starter-motor-passat-sr0423x) - **$349.99 + $50 refundable core** (verified, FCP Euro lifetime guarantee). **Required by DomiWorks kit.** 068911024GX (Bosch reman) = 068911024H (Bosch new) = same 9T CW 12V bellhousing nose. **NOT** the BMW N54 starter from Phase 1. |

#### Air & Boost  [AIR]
| Component | Specification | Cost / Action |
| :---- | :---- | :---- |
| **Throttle Body** | **VR6 Mk3 OBD2 (021133064A)** | [VR6 Throttle Body - ECS Tuning](https://www.ecstuning.com/b-vdo-parts/throttle-body-assembly/021133064a~vdo/) / [Used eBay (96-99 GTI/Jetta)](https://www.ebay.com/itm/254841921178) - ~$40-80 used / $108 new (Hans Auto) — **OBD2 (96-99) only.** Cable-operated. Confirmed required by Boost Brothers 944 07K Full Swap Kit. Bolt pattern matches 07K intake manifold. |
| **Throttle Cable** | **Lokar LOK-TC-1000LS148** | [Lokar Hi-Tech 148" Cut-to-Fit Cable](https://www.amazon.com/Lokar-TC-1000LS148-Throttle-Cable-Kit/dp/B005P6O4CO) - ~$40-60 — **Stock E36 cable will NOT work** (wrong end fitting for VR6 drum + incorrect length for 07K position). Lokar is universal cut-to-fit with adjustable ends. Alt: source OEM VR6 cable from donor car + adapt pedal end. |
| **Turbo Manifold** | **SPA Turbo MK5 T3 Twin Scroll (TMW22)** | [SPA Turbo USA TMW22](https://spaturbousa.com/products/vw-5-cyl-2-5l-20v-fsi-t3-top-mount-twin-scroll-turbo-manifold-wastegate-v-band) - $459.90 (verified). T3 flange, V-band 44mm WG port. Usable longitudinally with reverse rotation turbo — confirmed by 944 community. |
| **Turbo Oil Feed Fitting** | **-4AN fitting into iABED housing turbo oil feed port** | M12×1.5 to -4AN adapter (or direct -4AN, per iABED port spec) + 0.9–1.0mm orifice restrictor inline. Confirmed by @wingman703 (Image: “Turbo oil feed fitting ✔️” installed in iABED housing). -4AN is standard Garrett G-series oil feed size. Restrictor prevents over-oiling at idle — mandatory for journal bearing turbos. Source adapter from AN Fittings Store / Amazon / Summit Racing. |
| **Turbocharger** | **Garrett G30-770 REVERSE ROTATION** | [Full Race G30-770 RR](https://www.full-race.com/garrett-g-series-g30-770-reverse-rotation-turbo) - $2,731.20 (verified). **Reverse rotation required** with SPA MK5 manifold in longitudinal orientation. T3-to-V-band adapter ~$40 adds ~25–35mm to stack height. **Verify hood clearance before ordering** — G30-770 is a large-frame turbo and E36 hood clearance on a top-mount is tight; some builds require a vented/bubble hood. If clearance is marginal, options: (a) bubble/raised hood, (b) smaller turbo (G25-660 RR), (c) reverse rotation T3-inlet turbo (Precision Turbo custom — eliminates adapter height penalty but must be special-ordered). |
| **Downpipe** | **Custom RHD Downpipe** | Custom fab ~$400–600. Routes G30-770 outlet around RHD steering rack to 3-inch exhaust. **Far cheaper than a custom manifold.** Must be ceramic coated. |
| **FMIC Charge Piping** | **Custom Mandrel-Bent Aluminum** | ~$200–400 fab. CXRacing FMIC **core** carries from Phase 1A, but all piping is turbo-position specific. G30-770 RR + SPA MK5 exits opposite side from K64/M5x. All Phase 1A CXRacing pipes are unusable — budget for full re-pipe. |
| **T3-to-V-Band Adapter** | **T3 Flange to V-Band Turbo Adapter** | ~$35–50. Connects SPA TMW22 T3 outlet to G30-770 V-band turbine inlet. Adds ~25–35mm to stack height. Verify T3 bolt pattern and V-band diameter match at purchase. |
| **Boost Solenoid Re-plumb** | **Re-route Turbosmart solenoid for G30-770 + Tial 44mm setup** | Phase 1A solenoid carries over but all plumbing is turbo-position specific. Re-route: compressor outlet reference → solenoid inlet; solenoid outlet → Tial 44mm actuator port. All Phase 1A K64 boost lines are unusable. |

#### Thermal Management  [THERMAL]
| Component | Specification | Cost / Action |
| :---- | :---- | :---- |
| **Heat Control** | **Ceramic Coating** | Essential for RHD steering rack and brake lines - ~$300 - $500 |

#### Fuel System  [FUEL]
| Component | Specification | Cost / Action |
| :---- | :---- | :---- |
| **07K Injectors** | **Injector Dynamics ID1050x × 5** | [Full Race ID1050x](https://www.full-race.com/injector-dynamics-id1050x-injectors) - $249/ea × 5 = **$1,245**. 07K is a 5-cylinder. EV14 connector — matches MaxxECU 07K harness. **Replaces Phase 1A 630cc injectors** (630cc can be resold ~$200–250). Do not double-count. |
| **Fuel Pump Upgrade** | **Walbro 450LPH E85 + Install Kit** | [TF-Works TIA485-2](https://www.tf-works.com/walbro-450lph-e85-in-tank-fuel-pump-with-install-kit/) - $203.99 (verified). **Replaces Phase 1 Walbro 255LPH** — 255 is borderline at 600whp E85. Radium E36 install kit at radiumauto.com/P2087. Do not double-count. |
| **07K Fuel Rail** | **BBG Manifold-Compatible Rail** | Custom or billet -6AN, ~$150–300. Confirm with Boost Brothers at intake order time — OEM transverse VW rail will not fit BBG longitudinal manifold. |

#### Coolant System  [COOLANT]
| Component | Specification | Cost / Action |
| :---- | :---- | :---- |
| **07K Coolant Hoses** | **Custom E36-to-07K Silicone Kit** | ~$150–300 (Samco/Vibrant universal reducers + straight hoses). 07K coolant ports differ from M52 — measure routing at engine-in-car stage before ordering. BBG intake manifold and iABED housing both have coolant connections to route. **Key reference:** [alliedcam1 — 07K Coolant Line Overview (YouTube)](https://www.youtube.com/watch?v=sCYZoCULSXo) + [routing diagram](https://photos.app.goo.gl/dAAYu7NJUUTBheyb8) — best documented longitudinal 07K coolant loop. **Heater valve:** GM 12380318 (4-port inline) — portable approach from 944 community. Hose sizes: 5/8" and 3/4" bulk + formed elbows. Firewall barb adapters: Dorman 56152. 944-specific hose part numbers (Dayco/Gates) don't transfer directly — measure E36 routing first. [Rennlist p138 coolant guide](https://rennlist.com/forums/944-turbo-and-turbo-s-forum/803341-vw-audi-07k-2-5l-20v-i5-swap-thread-138.html) |
| **Thermostat Housing Adapter + 1.8T Water Neck** | **BBG kit component — assess at install** | The 07K factory thermostat housing exits at an angle incompatible with many swap bays. In the BBG 944 swap kit, a thermostat housing adapter + 1.8T water neck ("180 water neck") converts the outlet direction for clean routing. **For E36:** assess at engine-in-car stage whether the factory 07K thermostat housing routes cleanly to the E36 radiator. If not, contact BBG directly — they include this in the 944 kit and may sell separately. ~$0 if routing works; otherwise ~$50–100. Do not order before engine is positioned in bay. |

#### Oil System  [OIL]
| Component | Specification | Cost / Action |
| :---- | :---- | :---- |
| **Oil Pan** | **iABED 07K Longitudinal Pan (B2–B8)** | [iABED 462-103-07K-LAB](https://byiabed.com/07K-Oil-Pan--Longitudinal-Configuration-B2-THROUGH-B8_p_158.html) - $2,499.00 (verified, iron block BGP/CBUA/CEPA). **Pre-installed during Phase 2 engine build — no Phase 3 purchase required.** Budget alt: modified stock pan (TIG-weld rear sump box + custom pickup extension). |
| **Oil Filter Housing** | **S-PAU or iABED Longitudinal Billet Housing** | [S-PAU Automotive Housing](https://s-pautomotive.com/product/2-5-07k-rabbit-jetta-tt-rs-rs3-5-cylinder-oil-filter-housing-w-built-in-thermostat/) - $250–400 (S-PAU) / $529 (iABED, Phase 2). **Only needed if iABED housing was NOT installed in Phase 2.** S-PAU includes M10×1.0 PST-F1 port, 1/8 NPT secondary, M12×1.5 turbo oil feed port, built-in 90°C thermostat. PST-F1 transfers from M52 VANOS banjo with zero wiring changes. |
| **Oil Cooler Re-plumb** | **Route existing Setrab/Mocal core to iABED -AN ports** | The iABED housing (Phase 2) has built-in thermostatic -AN ports — no sandwich plate needed. Re-plumb existing Phase 1 cooler lines to iABED ports (~$30–50 in new AN fittings). If stock housing was used in Phase 2 instead: install Mishimoto MMOP-SPT sandwich plate ($170.95) + -10AN lines to existing core. |
| **Crankcase Catch Can** | **Radium Engineering VTA Competition Catch Can — L (20-0772) or XL (20-0771)** | [Radium CCC](https://www.radiumauto.com/products/competition-catch-cans) — **Mandatory for turbo build at high RPM.** Two -10AN ORB inlet ports — direct fit to BBG billet valve cover's -10AN crankcase port (Phase 2). Vents to atmosphere (VTA) — drain after every track day. L (20-0772): 0.6L. XL (20-0771): 0.9L — spec if meeting Formula Drift minimum capacity. Add -10AN hose (~$40–60). **Also required:** address stock PCV port on the intake manifold side — install a one-way check valve (or block off) to prevent boost pressure back-feeding into the crankcase. ~$150–200 for the can. |

#### Exhaust / Hot-Side  [EXHAUST]
| Component | Specification | Cost / Action |
| :---- | :---- | :---- |
| **Exhaust Manifold** | **Custom top-mount — fab required** | No off-the-shelf option exists for RHD E36 07K. Must be top-mount to clear steering rack and RHD linkage (see Technical Notes below). Custom fab by local shop or Euromotive Phase 3 scope. Ceramic coat mandatory — heat soak will destroy steering rack seals and brake lines. Budget TBD at fab time. |
| **Titanium Exhaust Stud Kit** | **LPS 07K Ti Stud Kit — 6AL-4V, 15-piece** | [LPS 07K Titanium Exhaust Stud Kit](https://lpsfab.com/products/07k-titanium-exhaust-stud-kit) — **$159.95 (currently on blowout sale — buy before discontinued).** Stock 07K studs are too short for any custom/aftermarket manifold with a thicker flange. Replaces all 15 head studs. 6AL-4V aerospace titanium — won't seize or corrode under heat cycling, fully reusable at manifold service. Install at manifold fitment. |

### Phase 3 Technical Notes: RHD & Fabrication
- **Steering Clearance:** The RHD E36 steering shaft is the primary bottleneck for 07K turbo placement. The **Condor Slim Shaft** (Phase 1) is mandatory. The exhaust manifold MUST be a top-mount design to clear the steering rack and linkage.
- **Custom Fabrication:** Expect significant labor hours for the hot-side. The downpipe must navigate a narrow window between the block and the steering column. Ceramic coating is not optional; heat soak will destroy the steering rack seals and brake lines.
- **Throttle Cable:** The stock E36 throttle cable is incompatible for two reasons: (1) the VR6 `021133064A` throttle body drum uses a different cable end fitting than the M52 throttle body, and (2) the 07K's position in the bay puts the throttle body at a different routing distance and angle than the M52. Use the **Lokar LOK-TC-1000LS148** (148", cut-to-fit, universal ends) — the same solution Boost Brothers spec for the 944 07K swap. Alternative: use the OEM VR6 cable from the throttle body donor car and adapt the pedal end.
- **AC Retention:** While the K64 AC+ manifold retains AC for M5x engines, the 07K swap requires a custom compressor bracket and custom lines to clear the larger 5-cylinder head and turbo plumbing.
- **Oil Pan Choice:** The iABED/EFI pan is the "gold standard" but expensive (~$2,500). A **Modified Stock Pan** is a common budget alternative:
    - Requires cutting the factory aluminum pan and TIG-welding a custom rear-sump box.
    - The oil pickup tube must be custom-extended to reach the new rear sump location.
    - Must clear the E36 steering rack and subframe height; ground clearance is a critical measurement point.

**Final Swap Goal:** Complete execution of the 9,000 RPM vision.

---

## Phase 4: Calibration, Integration & High-RPM Care

**Strategy:** Finalize the software handshake between engine and transmission, and establish a rigorous maintenance schedule for the 9,000 RPM threshold.

### Digital Integration: MaxxECU Race (Single-ECU Architecture)
With MaxxECU Race controlling the 8HP natively, engine and transmission management are unified in one system. All data streams are internal — no CAN handshake between two separate controllers required.

| Data Stream | How It Works |
| :---- | :---- |
| **Engine RPM / TPS** | Native — used internally for shift logic and line pressure scaling |
| **Torque cut during shifts** | Native — MaxxECU handles ignition cut/retard at shift events to protect 8HP internals |
| **Gear Position** | Native — available for gear-dependent boost control and digital dash display |
| **Trans Temp** | Native — safety limiters; triggers limp mode if fluid exceeds 120°C |
| **Datalog** | Single unified log — engine and trans data in one file, no correlation needed |

### Tuning Stages
1. **Engine Break-in:** Run mineral-based oil for first 500 miles. Limit to 4,000 RPM.
2. **Transmission Calibration:** Calibrate MaxxECU 8HP shift pressures, virtual clutch behavior, and solenoid timing within MaxxECU software.
3. **High-RPM Validation:** Verify 07K valvetrain stability up to 9,000 RPM on the dyno.
4. **Flex Fuel Mapping:** Tune for 98 RON (93 AKI) base and full E85 scaling.

### Maintenance & 9,000 RPM Care
| Item | Recommendation | Interval |
| :---- | :---- | :---- |
| **Engine Oil** | **Motul 300V 15W50** (High Zinc) | 3,000 Miles (Street) / 3 Track Days |
| **Oil Analysis** | Blackstone Labs (Check for bearing wear) | Every 2nd Oil Change |
| **8HP Fluid** | **ZF Lifeguard 8** Only | 30,000 Miles / Annual (Track Use) |
| **Valvetrain Audit** | Check Solid Shim Clearances | Every 10,000 Miles |
| **Timing Chains** | Inspect Guide Wear | Every 50,000 Miles |
| **Poly Bushings** | Re-grease with Revshift poly lubricant | Every 20,000 Miles / Annually |

---

## Project Summary & Estimated Investment

| Build Stage | Estimated Cost | Core Objective |
| :---- | :---- | :---- |
| **Phase 0: Sourcing** | $6,000 - $15,500 | Chassis + shipping + PPI + soft top + insurance setup. |
| **Phase 1: Foundation** | $14,500 - $16,500 | ZF 8HP swap + shifter, MaxxECU, fuel system base, cooling, roll bar, chassis reinforcement. |
| **Phase 1A/B: Interim** | $4,000 - $6,500 | Turbo M50 (with injector/solenoid upgrades) or NA M52 (with ATI damper) interim engine. |
| **Phase 2: 07K Build** | $11,700 - $14,700 | Complete 9,000 RPM 07K buildup + full longblock build labor (disassembly through sealed longblock at Euromotive) + head machine work + adapter plate order + LPS oil pump mod (offline). Includes ~$660–$760 customs/import overhead on donor 07K engine (Livingston International broker quote — duty TBD). |
| **Phase 3: Final Swap** | $10,000 - $14,000 | 07K integration, G30-770 RR, DomiWorks install, fuel system upgrade, charge piping, coolant routing, custom hot-side. |
| **Total Project** | **$46,200 - $66,700** | **The Ultimate 9,000 RPM E36 Restomod.** (Includes ~$700 07K engine customs overhead.) |

### Key Strategic Decisions
1. **The Foundation First:** By doing the 8HP and MaxxECU in Phase 1, you eliminate the biggest swap hurdles before the 07K ever touches the car.
2. **Offline 07K Build:** Eliminates vehicle downtime and allows for precise measurements of custom components (like the RHD manifold).
3. **Interim Fun:** The Phase 1A/B options ensure the car is fast and fun to drive for 12-24 months while the ultimate engine is built.
4. **Resale Value:** All Phase 1 interim parts (Turbo M50 kit, M52 cams, etc.) have high resale value in the E36 community, recouping costs for the final swap.

---

## Appendix: Supplier Directory

| Category | Primary Supplier | Website |
| :---- | :---- | :---- |
| **Transmission Control** | **Seems Legit Garage** | [seemslegitgarage.com](https://www.seemslegitgarage.com/) |
| **8HP Hardware** | **DomiWorks Engineering** | [domi-works.com](https://www.domi-works.com/) |
| **8HP Shifters** | **DCT Shifter** | [dctshifter.com](https://dctshifter.com/) |
| **Engine Management** | **MaxxECU** | [maxxecu.com](https://www.maxxecu.com/) |
| **BMW Performance** | **BimmerWorld** | [bimmerworld.com](https://www.bimmerworld.com/) |
| **Turbo/Custom Fab** | **K64 Performance** | [k64performance.com](https://k64performance.com/) |
| **07K Engine Parts** | **SPA Turbo USA** | [spaturbousa.com](https://spaturbousa.com/) |
| **07K Integration** | **iABED Industries** | [byiabed.com](https://byiabed.com/) |
| **Intake Systems** | **Boost Brothers Garage** | [boostbrothersgarage.com](https://www.boostbrothersgarage.com/) |
| **Valvetrain** | **Supertech Performance** | [supertechperformance.com](https://www.supertechperformance.com/) |
| **07K High-RPM Drifting** | **Linder Power Systems** | [linderpowersystems.com](https://linderpowersystems.com/) |
| **07K Baffled Pan / Parts** | **9T Performance** | [9tperformance.com](https://9tperformance.com/) |
| **Precision Hardware** | **VAC Motorsports** | [vacmotorsports.com](https://www.vacmotorsports.com/) |

### Key References
| Title | Link | Relevance |
| :---- | :---- | :---- |
| **07K Turbo build… The ULTIMATE 5 cylinder turbo setup!** | [YouTube (18:20 — 8,000 RPM dyno run)](https://www.youtube.com/watch?v=V2OxGOoeDmI&t=1100s) | Comprehensive 07K turbo build reference — valvetrain, oiling, and high-RPM reliability. 701 whp on E85, G30-900. Dyno run to 8,000 RPM at 18:20. |
| **How To Time a VW 07K 2.5 5 Cylinder** | [YouTube](https://www.youtube.com/watch?v=wdONdrRi9WU&t=203s) | Timing procedure reference for 07K engine build and reassembly. |
| **George W. Hill M5x Starter Adapter Demo** | [YouTube](https://youtu.be/bWVo-TpdQCQ) | Demonstrates the starter adapter required for M5x + 8HP swap (Phase 1). |
| **07K Forged Build — VW 2.5L FB Group ("Bumblebee")** | [Facebook Post](https://www.facebook.com/groups/247446985360343/permalink/26929855896692756/) | Real-world 07K forged turbo build documented by community member. SPA 83mm pistons/rods, forged crank (balanced), ARP main + head studs, OEM water pump, Febi gaskets, exhaust port work only. Used to gap-analyze this build spec — informed addition of head studs, water pump, and rod bearings as explicit line items. **Requires Facebook login to access.** |
| **07K Forged Build — 07K Swap Group** | [Facebook Post](https://www.facebook.com/groups/07kswap/permalink/3593134884186459/) | Same or related build cross-posted in the 07K Swap FB group. **Requires Facebook login to access.** |
| **07K Bumblebee — FB Marketplace Listing (Nikita Tokachev, Richmond VA)** | [FB Marketplace](https://www.facebook.com/marketplace/item/1685249076025652/) | **Cost comparison reference.** The exact Bumblebee build (above) listed for sale assembled: SPA 83mm pistons/rods, forged crank (balanced), IE rod bearings, OEM main bearings, ARP main + head studs, OEM water pump, OEM timing, Febi gaskets, modified upper oil pan with turbo drain, stock head (ported exhaust). Builder's stated cost: "over $3k plus tools, machine shop." Asking: **$6,000**. Represents ~29% premium over DIY parts + machine cost (~$4,540–5,790). Significantly below what a professional shop-assembled equivalent would cost ($10,000+). **Note:** Stock head with only exhaust port work — Supertech valvetrain build still required. Modified oil pan drain is NOT a substitute for the iABED baffled drift pan. If pursuing: offer $5,000–5,500; budget $150–300 for Euromotive inspection pass on arrival. |
| **MRT Engineering — Ultimate E30/E36/E46 Front Suspension Geometry Guide** | [mrtengineering.fi (Pages 3–5)](https://mrtengineering.fi/pages/the-ultimate-front-suspension-geometry-guide-for-bmw-e30-e36-e46-by-mrt-engineering-page-4) | Authoritative deep-dive: stock KPI/caster values for all E36 variants, M3 spindle swap geometry analysis, camber curve comparisons, and roll center impact of lowering. Page 5 covers E36 non-M correction path. Essential reference for the Front Suspension Geometry section above. |
| **Garagistic — Offset vs Centered FCAB & Control Arm Swap Guide** | [garagistic.zendesk.com](https://garagistic.zendesk.com/hc/en-us/articles/360051177154-Offset-vs-Centered-Front-Control-Arm-Bushings-and-Control-Arm-Swap-Guide) | Explains E36 M vs non-M control arm differences, offset FCAB origin (M3 used eccentric FCAB from factory), and how to increase caster on a non-M E36 with OEM or aftermarket offset bushings. Part numbers included. |
| **FCP Euro — Revshift Offset FCAB Install Guide** | [fcpeuro.com](https://www.fcpeuro.com/blog/how-to-install-revshift-offset-fcabs-bmw-e30-e36-z3) | DIY install reference for Revshift offset poly FCABs on E36. Covers the small modification required to prevent bushing spin in the retainer. Relevant for Phase 1 bushing kit install. |
| **SLRspeed — The Complete E36 Angle Kit Guide** | [slrspeed.com](https://slrspeed.com/blogs/news/e36-angle-kit-steering-geometry-drift-guide) | SLR's own technical deep-dive covering KPI, Ackermann geometry, roll center correction, bump steer, and how the Mini/Super/Ultra kit tiers differ. Good companion to MRT Engineering guide for understanding how angle kits modify each geometry parameter. |
| **SLRspeed — E36 Coilovers & Suspension Geometry Guide** | [slrspeed.com](https://slrspeed.com/blogs/news/e36-coilovers-drift-handling-performance-upgrade-guide) | Covers how lowering affects roll center, bump steer, and camber gain on the E36. Explains why roll center correction is critical for a lowered car and how coilover choice interacts with angle kit geometry. |
| **`__plan_d` Instagram — E36 Drift Geometry & Angle Kit Build** | [instagram.com/\_\_plan\_d](https://www.instagram.com/__plan_d/) — [Reel: DaN4JiPAO6S](https://www.instagram.com/reel/DaN4JiPAO6S/) | Community-driven custom E36 angle kit design. Reel shows ~18° KPI, ~64° steering angle, caster trail ~84.3. Comments discuss ideal caster (7–8°), camber (-5°/-6° for full drift), and geometry tuning tradeoffs. Use as a ceiling reference — this is a dedicated drift setup, not a street build. **Requires Instagram login.** |
| **FDF RaceShop — E36 Mega Mantis Angle Kit** | [fdfraceshop.com](https://www.fdfraceshop.com/) | Full competition angle kit reference (70° lock, 40mm roll center correction, adjustable Ackermann, -3° to -6° camber, 50–75mm track width increase per side). Listed as an upper-bound reference only — too aggressive for a street/daily build, but shows what full geometry correction looks like at the competition level. |
| **07K Wiring — VW 2.5L ECM Pinouts, Wiring Diagrams & MK2 CE2 Swap (CBTA / CBUA)** | [07k-wiring.be-rad.net](https://07k-wiring.be-rad.net/) | CBTA and CBUA ECM T94/T60 connector pinouts with wire-color traces, whole-vehicle current trace (314 devices, 816 circuits), and all 82 factory CBUA diagrams on a searchable canvas. **Primary reference for Phase 2 07K engine harness build** — use to identify crank VR, cam Hall, CLT, TPS, and injector pins before cutting into the donor harness. The MK2 CE2 swap tab maps every factory ECM circuit to the car-side components needed to transplant the engine, directly analogous to the E36 firewall bulkhead workflow (Enhancements doc). **Donor BGP engine uses CBTA ECM — use the CBTA tab.** |
| **alliedcam1 — Porsche 944 07K Swap Coolant Line Overview** | [YouTube](https://www.youtube.com/watch?v=sCYZoCULSXo) | Best available walkthrough of longitudinal 07K coolant routing. Documents full loop: radiator, thermostat housing, heater core (GM 12380318 valve), reservoir vent. [Routing diagram](https://photos.app.goo.gl/dAAYu7NJUUTBheyb8). Parts list in video description. 944-specific hose numbers don't transfer to E36 — use as approach/sizing reference. |
| **Rennlist 07K Swap Megathread — Coolant Line Guide (p138)** | [Rennlist p138](https://rennlist.com/forums/944-turbo-and-turbo-s-forum/803341-vw-audi-07k-2-5l-20v-i5-swap-thread-138.html) | Dedicated coolant routing page in the 944 07K swap community megathread. Companion to alliedcam1 video. Covers EWP integration, block-off plate approach, and heater core retention. [Full thread](https://rennlist.com/forums/944-turbo-and-turbo-s-forum/803341-vw-audi-07k-2-5l-20v-i5-swap-thread.html) |


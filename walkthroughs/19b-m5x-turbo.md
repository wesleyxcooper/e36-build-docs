# Phase 1A: M5x Turbo — Manifold, Turbo Selection & Boost System

**Phase:** 1A  
**System tags:** `[ENGINE]` `[BOOST]` `[AIR]`  
**Shop-mandatory:** No — all owner-installed  
**Prerequisites:** Longblock returned from VAC and installed; oil and coolant systems plumbed (`19-m5x-oil-system.md`, `09-coolant.md`); FMIC core mounted; charge piping mocked up

---

## Overview

The M5x turbo system closely parallels the 07K Phase 3 air/boost system (`31-air-boost.md`) in architecture: top-mount or bottom-mount exhaust manifold → turbo → FMIC → throttle body → engine. The primary differences vs 07K:

- **Manifold geometry:** M5x manifold is a purpose-built 6-cylinder header; 07K uses a custom 5-cyl manifold. The M5x has a larger exhaust collector due to the extra cylinder — this actually improves turbo response for a given turbo size.
- **Turbo size:** The M50/M52 at 2.5L (or 2.8L M52B28) is a smaller displacement than the 07K at 2.5L but with 6 cylinders vs 5. The extra displacement of the M52B28 improves spoolup and midrange over a 2.5L base.
- **Boost target:** ~400–500whp on pump gas / up to 700whp on E85 (flex fuel mandatory). At 700whp E85, a mid-to-large frame turbo is required — the GT35.30 included in the K64 kit is rated to 300–500hp and is undersized for 700whp E85. See Turbo Selection below for upgrade path.
- **FMIC and charge piping:** The CXRacing FMIC core from Phase 1A (`31-air-boost.md` Phase 1A carryover row) is appropriate for the M5x target. Charge piping routing depends on manifold and turbo position — mock up before fabricating.

---

## Manifold Options

### Option A — Standalone Parts (Primary Path)

**Why standalone over the full K64 kit:** The K64 Stage 2 kit includes a journal bearing GT35.30, a base ECU map (MaxxECU handles this), VictorReinz head gaskets (covered by the VAC build), and ARP M10 studs (covered by the ARP 625+ kit already specced). Buying standalone avoids paying for duplicated and conflicting components, and allows specifying a ball bearing turbo directly. Estimated standalone build: ~$4,100–4,600 for manifold/downpipe + turbo + wastegate + BOV + injectors.

#### Manifold & Downpipe

**Overrun Tuning RHD Kit (preferred):** Overrun Tuning worked directly with K64 Performance to produce a confirmed RHD E36 manifold + downpipe with AC retention via custom refrigerant lines. ([overruntuning.com/e36-turbo-guide](https://www.overruntuning.com/e36-turbo-guide)) Contact for pricing. Flange options: T3 / T4 / V-Band manifold; Garrett 4-bolt / 5-bolt / V-Band downpipe; 50mm wastegate port.

**K64 standalone (if ordering direct from K64):**
- K64 AC+ RHD Manifold: **$839.72** ([k64performance.com](https://k64performance.com/exhaust-manifold/1655-rhd-uk-e36-e46-ac-turbo-kolektor-bmw-m50-m52-m54.html)) — T3 or T4 flange, RHD AC-compatible
- K64 RHD Downpipe: **$448.00** ([k64performance.com](https://k64performance.com/exhaust-manifold/4635-downpipe-rhd-uk-turbo-bmw-e36-e46.html))

#### Turbo, Wastegate, BOV, Injectors

| Component | PN | Source | Price | Notes |
| :--- | :--- | :--- | :--- | :--- |
| **Garrett GTX3076R Gen II** | **856801-5026S** | [genx-performance.com](https://genx-performance.com/garrett-gtx3076r-gen-ii-turbocharger-t3-v-band-0-82-a-r/) · [bulletproofautomotive.com](https://bulletproofautomotive.com/product/garrett-gtx3076r-gen-ii-assembly-kit-0-82-ar-t3-inlet-856801-5026s/) | **~$1,995–2,378** | T3 inlet (drops onto K64/Overrun manifold), V-Band turbine outlet (V-band downpipe option from Overrun), .82 A/R, ball bearing, billet compressor wheel, 400–750hp. Overrun Tuning explicitly recommends GTX3076R for 2.8–3.2L. |
| **Turbosmart Gen V ProGate50 50mm WG** | **TS-0554-1002** (7 psi spring) | [turbosmart.com](https://turbosmart.com/products/wg50-gen-v-progate50-7psi-black_2) · [xlr8.com](https://xlr8.com/turbosmart-wg50-gen-v-pro-gate-50-7psi-black/) | **~$572–636** | 50mm matches Overrun manifold's 50mm wastegate port. 7 psi spring — MaxxECU solenoid holds gate closed to run above spring pressure. V-Band fitment. |
| **HKS SSQV4** | **71008-AK001** | [3sx.com](https://www.3sx.com/hks-ssqv-bov-universal-series-v4-genuine-hks-71008-ak001) · [frsport.com](https://frsport.com/products/hks-71008-ak001-super-sequential-blow-off-valve-4-kit-ssqv4-universal) | **$319.95** | Universal. Requires weld-on mount flange on charge pipe — fabricator job at Fabie Boys or VAC at downpipe mock-up. HKS steel weld flange: PN **71002-AK011**, $31.95. |
| **Injector Dynamics ID850 × 6** | **850.60.14.14.6** (USCAR, 14mm) | [comotorsports.ca](https://comotorsports.ca/injector-dynamics-id850-850-60-14-14-4-comotors.html) · [andysautosport.com](https://www.andysautosport.com/products/injector_dynamics__850.28.04.60.14.6-PNP.html) | **~$750–792** | 850cc/min, USCAR connector (EV6), 14mm top adapter. Confirmed BMW 328 96-98 (M52B28) fitment via ID application guide (upg-shop.com). MaxxECU characterization data published by ID: [help.injectordynamics.com](https://help.injectordynamics.com/support/solutions/articles/4000198369-maxxecu). Covers E85 at GT35.30 ceiling (~500whp) at ~71% duty; pump 93 at ~54% duty, no driveability concern. |

---

### Backup: K64 Stage 2 Full Kit

**Use only if standalone sourcing fails** (e.g., ball bearing turbo lead time is prohibitive and the project needs to move). The K64 full kit is $5,656 and includes a journal bearing GT35.30 — if using this path, swap the injectors to ID850 before the first tune and plan to replace the turbo with a ball bearing unit at the next service.

**K64 Stage 2 Full Kit — $5,656** ([k64performance.com](https://k64performance.com/turbo-kit/771-turbo-kit-stage2-m50-m52-e30-e36-e34-bmw.html)):
Manifold, GT35.30 journal bearing, 44mm Tial WG, Siemens Deka 630cc injectors, BOV, RHD downpipe, base ECU map, VictorReinz head gaskets, ARP M10 studs, NGK plugs.

> Replace Siemens Deka 630cc with **ID850** before first tune. Do not order ECUMASTER DET3 option — MaxxECU RACE is the ECU.

> **AC routing — top-mount manifolds (K64 and RSI):** Both the K64 and RSI manifolds clear the AC compressor. The downpipe for a top-mount setup routes between engine and firewall on the driver side, where the AC refrigerant lines (high and low pressure) also run. **Mock up the downpipe path before finalizing AC line routing** — the lines may need minor re-routing around the downpipe. Fabricator job (Fabie Boys or VAC). **Electric AC conversion** (Denso/Sanden electric compressor from a hybrid donor) eliminates the belt-driven compressor and removes the routing conflict entirely — adds ~$1,000–2,500 for the compressor and control wiring, cleaner engine bay, and allows AC post-shutdown. Revisit if line rerouting proves difficult.

### Option B — SPA Turbo TMB01 Bottom-Mount

Proven M5x manifold for E36 drift/track builds. For LHD or where K64 RHD routing doesn't work out. ([beracingtuning.com](https://beracingtuning.com/product/spa-t3-t4-bottom-mount-m5x-turbo-manifold-for-e36-and-e46/), [spaturbousa.com](https://spaturbousa.com/collections/best-selling-products/bmw))

- Price: **$479.90** (spaturbousa.com) — manifold only, no kit
- Position: bottom mount — turbo sits low, driver side. Best oil drain routing.
- Turbo flange: T3 + T4 dual pattern
- AC: confirmed clear; bottom-mount position keeps the turbo away from AC entirely
- RHD: confirmed per SPA, E36 and E46
- Proven capacity: 600+whp; 530whp documented with GT3076R on T3 .63 hotside
- **No downpipe included** — K64 RHD downpipe may not transfer to TMB01 geometry; budget for custom Fabie Boys downpipe for RHD routing

> ⚠️ Confirm turbine outlet clears 8HP70 at mock-up — 8HP is larger than a manual gearbox.

### Option C — RSI T4/T3 Top-Mount (High Power)

For 700whp+ sustained. ([rennauto.co](https://rennauto.co/product/bmw-m50-m52-s50-s52-m54-top-mount-turbo-manifold-for-e36-e46-e39-z3/))

- Price: **$959.95** — manifold only
- AC: confirmed — clears AC compressor
- RHD: confirmed — "Fits LHD and RHD"
- Capacity: 900hp+ per Rennauto; 2-year limited warranty
- Heat management: turbo blanket + wrapped downpipe + aluminum/magnesium valve cover mandatory. M50 NV magnesium valve cover is ideal. ([bmwtuning.co](https://bmwtuning.co/bmw-e36-turbo-kit-guide/))
- AC line routing: same caveat as K64 — mock up downpipe before finalizing lines.

> ⚠️ **SPA TMB04 twin-scroll top-mount is NOT compatible with E36 coupe** — SPA listing explicitly states "not compatible with E36 Coupé body." Do not order for coupe.

---

## Downpipe Fabrication (RHD)

K64 RHD downpipe ($448) is the first option. If it doesn't clear the RHD steering rack or tunnel:

**Fabie Boys Motorsports** — 1599 Columbia Ave, Lancaster PA 17603 · (717) 470-8613 · ~65 mi from 19151  
RHD E36 turbo M52 build experience confirmed. Custom exhaust and downpipe fabrication. Bring car on a flatbed with engine installed for downpipe mockup. Budget ~$400–600 fab.

---

## Turbo Selection

**Build goal: RPM-first, throttle response at NJMP, ~400–550whp ceiling on pump 93.** Overrun Tuning's guide explicitly recommends ball bearing Garrett G35-series for 2.8-3.2L ([overruntuning.com/e36-turbo-guide](https://www.overruntuning.com/e36-turbo-guide)). The K64 GT35.30 is journal bearing — the ball bearing CHRA upgrade is the single highest-impact response improvement available for a fixed-geometry turbo (Garrett quotes 15% faster spool vs journal bearing).

**Preferred path: source the manifold/downpipe separately and choose a ball bearing turbo.**

| Turbo | HP rating | Bearing | Turbine inlet | Notes |
| --- | --- | --- | --- | --- |
| **Garrett GTX3076R** (T3 .82 AR) | 500–525hp | Ball bearing | T3 | Fastest spool in this range; T3 matches K64/Overrun manifold directly. Confirmed 530whp on M5x with SPA manifold. |
| **Garrett G35-900** | 550–900hp | Ball bearing | V-Band | Overrun Tuning recommendation for 2.8-3.2L; covers full build including upgrade phase. Requires V-Band manifold from Overrun/K64. |
| **Garrett G35-1050** | 700–1050hp | Ball bearing | V-Band | Overrun Tuning recommendation; 68mm compressor (same inducer as K64 GT35.30 but ball bearing). Overkill for current target, appropriate if 700+whp E85 is the end goal. |
| K64-included GT35.30 (T3 .63 AR) | 300–500hp | **Journal bearing** | T3 | Adequate on pump 93 at current power targets. Do not use if replacing with ball bearing turbo. |

**Recommended: Garrett GTX3076R with T3 .82 A/R hotside.** Ball bearing, T3 flange drops directly onto K64/Overrun manifold, 525hp ceiling comfortably covers GT35.30-phase power target, ball bearing spool improvement shows up in lap times. The .82 A/R hotside sustains boost higher into the RPM range than the GT35.30's .63 A/R — better match for the 8,000+ RPM target.

**For the G35-series (V-Band):** Order Overrun Tuning or K64 manifold with V-Band flange. G35-900 covers the full build arc including any future power target without swapping turbos.

**Hotside A/R and RPM:** At 8,000–8,500 RPM a .82–.83 A/R hotside maintains boost longer into the RPM range vs a .63 A/R — the smaller .63 A/R causes the turbo to become the restriction above ~6,500–7,000 RPM on a well-built 2.8L.

---

## Wastegate

External wastegate is required with both manifolds (neither has an internal wastegate provision). 44mm Tial MV-S or equivalent. Budget ~$200–350 for a quality unit. Tial MV-S 44mm: [tialsport.com](https://www.tialsport.com) or via Turner Motorsport (~$300).

---

## Intercooler and Charge Piping

The CXRacing FMIC kit referenced in Phase 3 (`31-air-boost.md`) is appropriate for the M5x build as well. The core and end tanks mount in the same E36 front position. Charge piping routing will differ from the 07K path because the turbo position (TMB01 bottom-mount driver side vs SPA MK5 for 07K) exits the hot side at a different angle.

**TMB01 charge piping path (typical E36 M5x turbo):**
- Compressor outlet → front-crossing aluminum pipe → FMIC inlet (passenger side or center)
- FMIC outlet → throttle body inlet
- Blow-off / bypass valve on the FMIC outlet or compressor-outlet pipe before the FMIC

All charge piping for the M5x must be fabricated or adapted from universal bends — no off-the-shelf kit is directly confirmed for the E36 + SPA TMB01 + 8HP combination. Budget for custom mandrel-bent aluminum piping (2.5"–3" diameter) or a universal elbow kit + silicone couplers (~$200–400).

---

## Boost Control

Same approach as 07K Phase 3 (`31-air-boost.md`): MaxxECU controls boost via a PWM boost control solenoid on the wastegate actuator. MaxxECU supports open/closed-loop boost control natively. Use a Turbosmart or Synapse solenoid.

---

## Wiring Additions for Turbo M5x (vs Stock MaxxECU M50 Harness)

The MaxxECU M50 terminated harness covers all M50/M52 engine sensors. For the turbo build, add:

| Addition | Connector | MaxxECU input |
| --- | --- | --- |
| Boost pressure sensor (MAP) | 3-pin Bosch (same as OEM MAP) — JMT 1.5mm housing `3B0973703G` | Already in M50 harness — verify MAP sensor range covers boost (0–3 bar absolute) |
| Charge air temp sensor (IAT2, post-FMIC) | 2-pin NTC — JMT 1.5mm `1J0973702` | MaxxECU AIN — add to charge pipe before throttle body |
| WBO2 sensor (if relocating for turbo routing) | Bosch LSU 4.2 6-pin — already in harness | Weld new bung in turbo downpipe |
| Boost solenoid (PWM) | 2-pin generic spade | MaxxECU GPO (any available GPO configured for boost control PWM) |
| Ethanol content sensor (flex fuel) | 3-pin Metri-Pack 150 female (GM standard) | MaxxECU DIN configured as "Ethanol sensor" — reads frequency (ethanol %) and pulse width (fuel temp) from Continental SE1004S / GM 13577429 |

---

---

## Flex Fuel System

**Goal:** Flex fuel capable on the street (pump 93 primary; E85 available at the fill-up). Track events use pump 93. E85 is a street/home scenario.

**E85 near tracks:**

| Track | E85 Available? | Nearest confirmed E85 |
| :--- | :--- | :--- |
| **NJMP Thunderbolt** (Millville NJ) | No | Wawa #8110, 12004 E Roosevelt Blvd, Philadelphia PA 19116 — ~80 mi north. NJ has no E85 within 20 mi of Millville per [NJMP BMW CCA fuel guide](https://njbmwcca.org/ofesthelp/njmp/fuel/) and [AFDC locator](https://afdc.energy.gov/stations). Fill up on the way to/from, not at the track. |
| **Old Bridge Raceway** (Englishtown NJ) | No | No E85 confirmed in Englishtown, Freehold, or Manalapan from GasBuddy search. Same NJ coverage gap. |
| **Pocono Raceway** (Long Pond PA) | ~10-15 mi away | **Sheetz #610, 2008 Route 611, Swiftwater PA** — E85 confirmed ([GasBuddy](https://www.gasbuddy.com/station/204277), GasBuddy user: "beside being the only station near my home to carry it"). Listed as one of six closest gas stations to Pocono by Pocono Record. 24 hrs. |

**Injector sizing:** E85 is the primary street fuel; pump 93 is the track fuel (no E85 within 20 miles of NJMP). Size for the harder case: E85 at GT35.30's ceiling.

- E85 at ~500whp → ~590 BHP → BSFC 0.62 → ~61 lb/hr per cylinder
- **ID725** (72 lb/hr): 85% duty at 500whp E85 — at the limit, tuner will flag it
- **ID850** (86 lb/hr): 71% duty at 500whp E85 — comfortable margin

**Use ID850 (850cc/min, USCAR connector).** On pump 93 at NJMP (~450whp), ID850 runs ~54% duty — MaxxECU characterizes it cleanly with no idle or driveability issues. The driveability concern only applies at 1,000cc+ on small engines with basic ECUs that can't handle short pulse widths. ID850 also eliminates any injector swap when the G35-series upgrade happens at moderate E85 targets.

### Parts

| Component | Part Number | Source | Price | Notes |
| :--- | :--- | :--- | :--- | :--- |
| **Ethanol content sensor** | Continental GM 13577429 (Continental SE1004S) | [xtramotorsport.com](https://xtramotorsport.com/product/ethanol-content-flex-fuel-sensor/) | ~$112 | Genuine Continental OEM sensor. 3/8" GM quick-connect ports. Outputs 50–150 Hz frequency (0–100% ethanol) + fuel temperature on single wire to MaxxECU digital input. Fake/unbranded copies read 20–30% ethanol in plain petrol — buy genuine only. |
| **Ethanol sensor (MaxxECU branded)** | — | [maxxecu.com](https://www.maxxecu.com/store/sensors/fuel-and-lambda/ethanol-sensor-for-fuel-temperature-and-ethanol-content) | $184.31 | MaxxECU's own sensor; confirmed supported, mounts on return line. AN6/AN8 connections not included. |
| **Fuel pump** | **DeatschWerks DW200, PN 9-201-1031** | [deatschwerks.com](https://deatschwerks.com/products/9-201-1031) | $109 | 255 lph, drop-in install kit for E36 328i (M52B28). Explicitly ethanol-compatible. Limited lifetime warranty. Replaces stock in-tank pump — required for E85 (~40% more fuel volume vs pump 93). |
| Fuel pump alt | Walbro GSS342 E36 kit | [group-d.ie](https://group-d.ie/products/walbro-255lph-in-tank-pump-kit-bmw-e36) | ~€95 | Same 255 lph class, E36-specific kit. Gold standard alternative if DW200 unavailable. |

### Fuel Lines (E85 compatibility)

OEM E36 rubber fuel lines are 30+ years old and not rated for sustained E85 use. Replace with PTFE-lined stainless-braided AN line for ethanol immunity, low permeation, and heat/pressure resistance.

| Component | PN | Source | Price | Notes |
| :--- | :--- | :--- | :--- | :--- |
| **DeatschWerks PTFE plumbing kit** | **6-629** | [turnermotorsport.com](https://www.turnermotorsport.com/p-53891647-ptfe-stainless-plumbing-kit/) · [ecstuning.com](https://www.ecstuning.com/b-deatschwerks-parts/deatschwerks-1992-2006-bmw-3-series-e36-e46-8an-ptfe-stainless-plumbing-kit/6-629~dcw/) | **$949** | E36/E46-specific (1992–2006). -8AN PTFE stainless, includes chassis-specific adapters, designed to integrate with E36 fuel tank OEM points. "Absolute immunity against the aggressive chemical wear caused by E85." Designed for dual-pump hanger — note for single DW200 setup: some adapters in the kit won't be used, but the E36-specific routing adapters and fittings are the value. |
| Bulk PTFE AN-6 hose (alt) | — | Summit Racing, Earls, Russell | ~$8-12/ft | -6AN is adequate flow for single 255lph pump. Cut to length at build time. Requires matching AN-6 fittings per termination (~$5-15/fitting). Sourced and run by the turbo shop during fuel system plumb. |

> Run inspection and replacement at the same time as the turbo fuel system plumb — the shop will have the car on a lift and access to all the lines anyway.

### Ethanol sensor wiring (MaxxECU)

The sensor requires three wires: 12V switched, GND, and signal. Signal wire → MaxxECU digital input (any DIN configured as "Ethanol sensor"). MaxxECU reads both ethanol content (from frequency) and fuel temperature (from pulse width) natively from the Continental sensor. No additional hardware required beyond the sensor and mating connector.

Mating connector for GM 13577429: 3-pin Metri-Pack 150 female (same family used in other GM fuel system sensors). Source from any GM parts counter or Waytek Wire.

---

## References

- [Overrun Tuning E36 Turbo Guide — RHD manifold/downpipe kit, AC retention, turbo recommendations](https://www.overruntuning.com/e36-turbo-guide)
- [K64 Stage 2 Full Kit — $5,656 (RHD priority)](https://k64performance.com/turbo-kit/771-turbo-kit-stage2-m50-m52-e30-e36-e34-bmw.html)
- [K64 AC+ RHD Manifold standalone — $839.72](https://k64performance.com/exhaust-manifold/1655-rhd-uk-e36-e46-ac-turbo-kolektor-bmw-m50-m52-m54.html)
- [K64 RHD Downpipe standalone — $448.00](https://k64performance.com/exhaust-manifold/4635-downpipe-rhd-uk-turbo-bmw-e36-e46.html)
- [SPA TMB01 bottom-mount M5x manifold — $479.90 (B)](https://spaturbousa.com/collections/best-selling-products/bmw)
- [BE Racing Tuning SPA TMB01 listing with performance notes](https://beracingtuning.com/product/spa-t3-t4-bottom-mount-m5x-turbo-manifold-for-e36-and-e46/)
- [Rennauto RSI T4/T3 top-mount manifold — $959.95 (C)](https://rennauto.co/product/bmw-m50-m52-s50-s52-m54-top-mount-turbo-manifold-for-e36-e46-e39-z3/)
- [Fabie Boys Motorsports — RHD E36 custom downpipe fabrication](https://fabieboysautorepair.com) · 1599 Columbia Ave, Lancaster PA · (717) 470-8613
- [bmwtuning.co — valve cover heat and top-mount turbo considerations](https://bmwtuning.co/bmw-e36-turbo-kit-guide/)
- [Continental SE1004S flex fuel sensor — xtramotorsport.com](https://xtramotorsport.com/product/ethanol-content-flex-fuel-sensor/)
- [MaxxECU branded ethanol sensor — $184.31](https://www.maxxecu.com/store/sensors/fuel-and-lambda/ethanol-sensor-for-fuel-temperature-and-ethanol-content)
- [DeatschWerks DW200 E36 fuel pump PN 9-201-1031 — $109](https://deatschwerks.com/products/9-201-1031)
- [31-air-boost.md — G25-660 RR turbo selection and boost control](./31-air-boost.md)

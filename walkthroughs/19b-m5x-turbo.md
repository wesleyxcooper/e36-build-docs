# Phase 3a: M5x Turbo — Manifold, Turbo Selection & Boost System

**Phase:** 3a
**System tags:** `[ENGINE]` `[BOOST]` `[AIR]`  
**Shop-mandatory:** No — all owner-installed  
**Prerequisites:** Longblock returned from VAC and installed; oil and coolant systems plumbed (`19-m5x-oil-system.md`, `09-coolant.md`); FMIC core mounted; charge piping mocked up

---

## Overview

The M5x turbo system closely parallels the 07K Phase 3b air/boost system (`31-air-boost.md`) in architecture: top-mount or bottom-mount exhaust manifold → turbo → FMIC → intake manifold → engine. The primary differences vs 07K:

- **Manifold geometry:** M5x manifold is a purpose-built 6-cylinder header; 07K uses a custom 5-cyl manifold. The M5x has a larger exhaust collector due to the extra cylinder — this actually improves turbo response for a given turbo size.
- **Turbo size:** The M50/M52 at 2.5L (or 2.8L M52B28) is a smaller displacement than the 07K at 2.5L but with 6 cylinders vs 5. The extra displacement of the M52B28 improves spoolup and midrange over a 2.5L base.
- **Boost target:** ~400–500whp on pump gas / up to 700whp on E85 (flex fuel mandatory). At 700whp E85, a mid-to-large frame turbo is required — the GT35.30 included in the K64 kit is rated to 300–500hp and is undersized for 700whp E85. See Turbo Selection below for upgrade path.
- **FMIC and charge piping:** The CXRacing FMIC core from Phase 3a (`31-air-boost.md` Phase 3a carryover row) is appropriate for the M5x target. Charge piping routing depends on manifold and turbo position — mock up before fabricating.

---

## Manifold Options

### Option A — Standalone Parts (Primary Path)

**Why standalone over the full K64 kit:** The K64 Stage 2 kit includes a journal bearing GT35.30, a base ECU map (MaxxECU handles this), VictorReinz head gaskets (covered by the VAC build), and ARP M10 studs (covered by the ARP 625+ kit already specced). Buying standalone avoids paying for duplicated and conflicting components, and allows specifying a ball bearing turbo directly. Estimated standalone build: ~$4,100–4,600 for manifold/downpipe + turbo + wastegate + BOV + injectors.

#### Manifold & Downpipe

**Overrun Tuning RHD Kit (preferred):** Overrun Tuning worked directly with K64 Performance to produce a confirmed RHD E36 manifold + downpipe with AC retention via custom refrigerant lines. ([overruntuning.com/e36-turbo-guide](https://www.overruntuning.com/e36-turbo-guide)) Contact for pricing. Flange options: T3 / T4 / V-Band manifold; Garrett 4-bolt / 5-bolt / V-Band downpipe; 50mm wastegate port.

> **Note — Overrun is Australia-based:** Overrun Tuning is in Melbourne, Australia (Overrun Tuning Pty Ltd, Moorabbin VIC). Contact-to-quote only; no online checkout. Factor in international shipping and potential import/customs costs for a US delivery. If Overrun's lead time or shipping cost is prohibitive, **K64 ships the AC+ RHD manifold directly to the US** — standard online checkout, PayPal accepted, USD pricing ex-VAT, international parcels subject to US customs duty on import (confirmed from product page). Confirm wastegate port size with K64 at order time (not listed on the product page).

**K64 standalone (if ordering direct from K64):**
- K64 AC+ RHD Manifold: **$839.72** ([k64performance.com](https://k64performance.com/exhaust-manifold/1655-rhd-uk-e36-e46-ac-turbo-kolektor-bmw-m50-m52-m54.html)) — T3 or T4 flange, RHD AC-compatible
- K64 RHD Downpipe: **$448.00** ([k64performance.com](https://k64performance.com/exhaust-manifold/4635-downpipe-rhd-uk-turbo-bmw-e36-e46.html))

#### Turbo, Wastegate, BOV, Injectors

| Component | PN | Source | Price | Notes |
| :--- | :--- | :--- | :--- | :--- |
| **Garrett GTX3076R Gen II** | **856801-5026S** | [genx-performance.com](https://genx-performance.com/garrett-gtx3076r-gen-ii-turbocharger-t3-v-band-0-82-a-r/) · [bulletproofautomotive.com](https://bulletproofautomotive.com/product/garrett-gtx3076r-gen-ii-assembly-kit-0-82-ar-t3-inlet-856801-5026s/) | **~$1,995–2,378** | T3 inlet (drops onto K64/Overrun manifold), V-Band turbine outlet (V-band downpipe option from Overrun), .82 A/R, ball bearing, billet compressor wheel, 400–750hp. Overrun Tuning explicitly recommends GTX3076R for 2.8–3.2L. |
| **Turbosmart Gen V ProGate50 50mm WG** | **TS-0554-1002** (7 psi spring) | [turbosmart.com](https://turbosmart.com/products/wg50-gen-v-progate50-7psi-black_2) · [xlr8.com](https://xlr8.com/turbosmart-wg50-gen-v-pro-gate-50-7psi-black/) | **~$572–636** | 50mm matches Overrun manifold's 50mm wastegate port. 7 psi spring — MaxxECU solenoid holds gate closed to run above spring pressure. V-Band fitment. |
| **HKS SSQV4** | **71008-AK001** | [3sx.com](https://www.3sx.com/hks-ssqv-bov-universal-series-v4-genuine-hks-71008-ak001) · [frsport.com](https://frsport.com/products/hks-71008-ak001-super-sequential-blow-off-valve-4-kit-ssqv4-universal) | **$319.95** | Universal. Requires weld-on mount flange on charge pipe — fabricator job at Fabie Boys or VAC at downpipe mock-up. HKS steel weld flange: PN **71002-AK011**, $31.95. |
| **Injector Dynamics ID850 × 6** | **850.60.14.14.6** (USCAR/EV6, 14mm) | [comotorsports.ca](https://comotorsports.ca/injector-dynamics-id850-850-60-14-14-4-comotors.html) · [andysautosport.com](https://www.andysautosport.com/products/injector_dynamics__850.28.04.60.14.6-PNP.html) | **~$750–792** | 850cc/min, USCAR/EV6 connector, 14mm top adapter. Confirmed BMW 328 96-98 (M52B28) fitment via ID application guide. MaxxECU characterization data: [help.injectordynamics.com](https://help.injectordynamics.com/support/solutions/articles/4000198369-maxxecu). Covers E85 at ~500whp at ~71% duty; pump 93 at ~54% duty. **If using MaxxECU M50 terminated harness (Bosch JPT/EV1 injector sockets):** add ID PN 90.1 USCAR→EV1 adapter × 6 (~$11.55 each, ~$69 total) — [kseriesparts.com](https://www.kseriesparts.com/IJD-90-1.html). Not needed if wiring a custom harness with USCAR injector sockets. These same injectors transfer to the turbo iron-block engine at Phase 3a. |

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

External wastegate is required (neither manifold has an internal wastegate provision).

**Primary path (Overrun manifold): Turbosmart ProGate50 50mm — TS-0554-1002.** The Overrun RHD manifold has a confirmed 50mm wastegate port ([overruntuning.com/e36-turbo-guide](https://www.overruntuning.com/e36-turbo-guide) — "Wastegate Port: 50mm"). Already listed in the Parts table above. The standalone K64 AC+ RHD manifold does not list a wastegate port size on the product page — confirm before ordering.

**Why 50mm for this application:** The M52B28 is a 2.8L straight-6. At the target RPM range (8,000–8,500 RPM) with moderate boost, the turbo must bypass a large proportion of exhaust flow to prevent boost creep — exactly the condition requiring a 50mm gate. Sources: [NZ Performance wastegate sizing guide](https://nzperformance.co.nz/blogs/tech-guides/external-wastegate-size-guide) — "Go to 50mm when the engine is a big six"; [Hopwood Motorsport M50/M52 turbo kit](https://hopwoodmotorsport.com/shop/m50turbokit) specifies 50mm Turbosmart for the same 2.8L M52B28 application.

**Backup path (K64 Stage 2 full kit): 44mm Tial WG included.** The K64 Stage 2 kit ships with its own manifold and a matching 44mm Tial WG — these are designed together. If using the backup kit path, use the included 44mm WG with the kit’s manifold, not the 50mm Turbosmart.

---

## Intercooler and Charge Piping

The CXRacing FMIC kit referenced in Phase 3b (`31-air-boost.md`) is appropriate for the M5x build as well. The core and end tanks mount in the same E36 front position. Charge piping routing will differ from the 07K path because the turbo position (TMB01 bottom-mount driver side vs SPA MK5 for 07K) exits the hot side at a different angle.

**TMB01 charge piping path (typical E36 M5x turbo):**
- Compressor outlet → front-crossing aluminum pipe → FMIC inlet (passenger side or center)
- FMIC outlet → throttle body inlet
- Blow-off / bypass valve on the FMIC outlet or compressor-outlet pipe before the FMIC

All charge piping for the M5x must be fabricated or adapted from universal bends — no off-the-shelf kit is directly confirmed for the E36 + SPA TMB01 + 8HP combination. Budget for custom mandrel-bent aluminum piping (2.5"–3" diameter) or a universal elbow kit + silicone couplers (~$200–400).

---

## Intake Manifold — ITB

**Decision pending — three viable paths. Path C (RB26 adapter) currently leads:** a matched-vendor ecosystem (adapter, billet trumpets, and the FF rotatable plenum all from CNCI — one email chain resolves every open question), a factory-turbo throttle platform with the deepest plenum aftermarket, and the collector interface verified from photos (six separate oval 2-bolt pads). The trade: no documented M5x install exists — bank roll and plenum facing are vendor-answer items before ordering, not inspection items (closest precedents: one-off custom M20+RB26 manifolds in NZ, RB20/RB25 cut-and-weld and cast-adapter conversions, CNCI's own 2JZ adapter). Path A (S54 adapter) is the all-OTS alternative — every component a catalog part, ~$2,200–2,700 all-in with zero fabrication. Path B (RHD Engineering kit) is the lowest-integration-effort option — bolt-on linkage and documented RHD fitment — but carries the one custom fabrication item (the boost plenum). Baseline/fallback unchanged: stock M50 manifold carried from Phase 1 — holds boost fine, costs nothing extra.

### Decision rationale

Six individual throttle bodies under a single plenum covering all six inlet faces — the intake architecture the RB26 and S54 share. This is a character/response decision, not a power one:

- **Off-boost and part-throttle response** — each cylinder throttles at its own port; no shared manifold volume between a single blade and the intake valves
- **Induction character** — per-cylinder intake events produce the high-frequency rasp/bark associated with GT-R and S54 intake sound; a sealed plenum attenuates it vs open trumpets but the character remains
- **Not power** — a single ~90mm TB flows what ~600whp needs; the GTX3076R's spool governs on-boost response either way

All three paths keep cable throttle — no e-throttle hardware or pedal changes required for the M5x phase (the S54's DBW option exists but is opt-in — see DBW note below).

### Path comparison

| | **A: S54 adapter** | **B: RHD Engineering kit** | **C: RB26 adapter** |
| --- | --- | --- | --- |
| Throttle hardware | Used S54 ITB bank (2001–06 E46 M3) | New billet 45mm × 6, sealed bearings | Used RB26 ITB bank (1989–02) |
| Throttle drive | Factory DBW — **cable conversion included in adapter kit** (DBW-retention variant also offered) | Retains M50 cable natively | Factory cable on bank — adapt M50 cable or Lokar (~$50) |
| Boost plenum | **OTS:** [CXRacing $569](https://www.cxracing.com/IM-BMW-E46-M3S54) ("NA or boosted") · [NPBoosted $800](https://www.npboosted.com/products/bmw-2001-2002-2003-2004-2005-2006-e46-m3-3-2-s54-hiflow-aluminum-intake-manifold) · [Hyde SR54 €530](https://hydemotorworks.com/shop/product/sr54-manifold/) (turbo-rated); [CNC billet $1,182](https://www.cncinnovationsmy.com/product-page/bmw-e46-m3-s54-3-2l-billet-itb-plenum-itb-connections-id57mm-air-inlet-id90mm) — boost unconfirmed | **Custom fab required** ~$800–2,200 (or Jenvey bespoke base) | [CNCI FF rotatable $1,144.60](https://www.cncinnovationsmy.com/product-page/nissan-rb26-itb-ff-itb-inlet-collector-plenum-for-3-5-inches-v-clamp) or fabbed vessel — Nissan collectors land firewall-facing per adapter renders; used collector ~$200–400 = scan template |
| NA feeding (Phase 1) | Stock plastic S54 plenum + filter, or open bells | Included carbon airbox | CNCI billet trumpets $776 + foam socks (ITG JCS-11/JCS-21, Ramair) |
| TPS | BMW potentiometer at throttle nose — 3 wires to MaxxECU | Universal TPS — confirm inclusion with vendor | Nissan TPS usually ships on used bank — rewire pigtail |
| Injectors | Stock S54 EV1 (~310cc) Phase 1; ID850 S54-fitment for boost | Kit rail + owner's injectors | Adapter rail + owner's injectors |
| Est. all-in | **~$2,200–2,700** | **~$3,000–5,800** incl. plenum fab | **~$2,600–3,500** NA-phase; ~$3,700–4,600 w/ FF plenum |
| Integration effort | Low — kit includes cable assembly + block-offs + injector extensions | Lowest — bolt-on kit | Highest — linkage bracket, TPS pigtail, idle air, bank rebuild |
| Look | E46 M3 — BMW-native provenance | Modern billet | GT-R authentic |
| Main open item | RHD cable reach (below) + used-bank contents | Plenum fab scope | No documented M5x install; bank orientation unconfirmed |

### Path A — M5x → S54 ITBs via RRD adapter kit (alternative)

[Rabid Racing Development S54 ITB Adapter Kit — **$1,099**, ~3-week lead](https://rabidracingdev.com/products/s54-throttle-body-adapter-kit-for-us-spec-m5x-and-s5x-engines) (US shop). Kit contents per listing: CNC M5x-head→S54-ITB adapter plate, hardware (screws/washers/o-rings), **complete cable throttle assembly** (CNC bell crank with bearings, mount + hardware, throttle cable, throttle linkage), S54 air plenum block-off plugs, and EV1 extensions for the fuel injector connectors. Four purchase variants: adapter kit w/ cable system w/o ITBs ($1,099) · adapter plate only · adapter kit **with complete used S54 ITB assembly** · adapter kit w/ **DBW actuator bracket** w/o ITBs. RRD also stocks used S54 ITB sets.

**Why this is the complete kit:** the S54 is fully drive-by-wire — pedal potentiometer (PWG) → DME → DK motor actuator driving the ganged throttle shaft; position is read by a pot in the actuator *and* a second TPS at the throttle nose ([e46fanatics](https://www.e46fanatics.com/threads/m3-throttle-actuation.1272817/)). RRD's included bell-crank assembly is the DBW elimination — it drives the bank directly off a cable, no pedal or motor changes. Standalone equivalents exist if buying a bare adapter instead: [VAC DBW Elimination Kit](https://store.vacmotorsports.com/vac-motorsports-drive-by-wire-elimination-kit--throttle-cable-conversion-bmw-s54-p1341.aspx) · [Achilles cable conversion](https://www.achillesmotorsports.com/BMW-S54-Drive-By-Wire-Throttle-Cable-Conversion-p/11-am-tck-s54.htm) — both explicitly marketed for S54-in-E36 standalone-ECU installs. The throttle-nose TPS stays in either case and wires to the MaxxECU TPS input as a normal analog potentiometer. Budget CNC alternative: [CNC Innovations M5x→S54 adapter, $730](https://www.cncinnovationsmy.com/product-page/bmw-e34-e36-e46-m3-m50-s50-m52-s52-to-s54-e46-itb-adapter) (plate + vacuum block + rail + fittings — no cable hardware).

**Boost plenum — off the shelf, several proven options:** the stock S54 plastic plenum is an NA part — Maximum PSI's shop car failed one at 9 psi, and after reinforcement the next failure mode was retention: "the next issue is keeping it clamped on at that boost level" ([e46fanatics](https://www.e46fanatics.com/threads/stock-s54-intake-plenum-for-boost.998597/)). What the turbo-S54 field actually runs on top of the ITBs:

- **[CXRacing aluminum intake manifold — $569](https://www.cxracing.com/IM-BMW-E46-M3S54)** — welded aluminum plenum w/ built-in velocity stacks, 2.25" connections to each ITB, 3.5" inlet, aluminum mounting bracket, factory vacuum ports + MAF flange; listing states "designed for NA or **boosted** applications" and it's the intake piece of their [600+hp E46 M3 turbo kit](https://www.cxracing.com/TRB-KIT-IM-BMW-E46-M3S54-IC). The RHD warning on their pages covers the full kit's turbo-manifold/steering-shaft conflict — which is an **exhaust-side** problem: on an RHD car the steering + booster sit on the right (exhaust) side, so the intake side the plenum mounts to is actually the *clear* side. Confirm anyway — their note is a blanket LHD-developed caveat.
- **[NPBoosted TIG aluminum plenum — $799.95](https://www.npboosted.com/products/bmw-2001-2002-2003-2004-2005-2006-e46-m3-3-2-s54-hiflow-aluminum-intake-manifold)** — TIG-welded aluminum intake-manifold kit, includes vacuum/pressure fittings, 2-yr warranty. No unit-specific testimonials exist — Napol is a catalog reseller (eBay since 2001, ~11–12K items, 96–98% positive; China-sourced TIG goods, CXR-tier). Buy via eBay for buyer protection; inspect welds + flange flatness on arrival; bench leak-test before install.
- **[Hyde SR54 — €530](https://hydemotorworks.com/shop/product/sr54-manifold/)** — cast manifold-style collector replacement; the listing says "made for high boost pressure supercharged **or turbocharged** applications … where very high intake pressures are expected" — turbo-rated in their own words (powers their M1/V3.2 supercharger kits).
- **[CNC Innovations billet plenum — $1,182](https://www.cncinnovationsmy.com/product-page/bmw-e46-m3-s54-3-2l-billet-itb-plenum-itb-connections-id57mm-air-inlet-id90mm)** — the aesthetic match, but **no boost duty claimed or documented** — marketed on machining/CFD/fitment only. A machined 6061 body can't be the weak point; the open question is the six-port interface: machined O-ring grooves + positive bolt-down retention vs reusing the stock clip-style interface that failed to clamp at 9 psi. Vendor question (below) before buying it for boost.
- **HPF plenum (used market)** — the period-correct answer from the HPF turbo-kit era ("well made, fit well and work" — [e46fanatics](https://www.e46fanatics.com/threads/s54-custom-turbo-setup.902640/)); HPF is closed, used-only sourcing.
- **Custom fab** — what the big-power builds do (PPF Sweden's 1,000whp+ S54s run "homemade intake and exhaust manifold" — [e46fanatics](https://www.e46fanatics.com/threads/s54-turbo-vanos-setup-1060-whp-1130nm-1167-whp-1300nm.1048938/)).

NA phase runs the stock plenum + filter (usually comes with the used bank) or open bells + sock filters.

**Injectors:** stock S54 injectors are EV1/Jetronic format — same connector generation as the M52/MaxxECU harness (the kit's included EV1 extensions are for harness reach). Stock M52 injectors and the Phase 1 Bosch 440cc greens are the same injector format family and likely seat in the S54 rail — verify pocket depth/o-ring height at mock-up. The bank's own stock injectors (~310cc class) are the zero-question Phase 1 option. For boost, ID850 is sold in S54 fitment — confirm the correct PN variant at order time (ID application guide).

**RHD cable question — the one open item:** the bell crank bolts to the ITB assembly (engine-side, same place LHD or RHD); only the cable run back to the pedal differs. BMW lists a distinct RHD accelerator cable — **PN `35411164636`** ([estore-central RHD pedal/cable diagram](https://www.estore-central.com/bmw-parts-catalog/E36-320i-M52/Touring/Pedals/Accelerator-Pedal-Bowden-Cable-Rhd/) · [bmwfans](https://bmwfans.info/parts-catalog/E36-Coupe/Europe/328i-M52/browse/pedals/accelerator_pedal_bowden_cable_rhd), ~$48) vs the earlier LHD `35411161698` — RHD is the longer run since the pedal crosses the bay to the same left-side throttle location. Whether RRD's included cable is cut-to-fit (solves RHD trivially) or a fixed/terminated LHD length is unconfirmed — vendor question below. Fallbacks in order: stock RHD cable + universal cable-end hardware at the bell crank (~$20) or a full Lokar custom cable (~$50).

**Related option:** [Hack Engineering S50 ITB adapter — £520](https://hackengineering.co.uk/product/s50-itb-adapter-manifold-for-m50m52-engines/) adapts Euro S50 throttle bodies (also DBW) — their listing notes the TPS bracket needs machining for VANOS solenoid clearance, the kind of detail that signals a real install base.

### Path B — RHD Engineering M50/M52 ITB kit + custom sealed plenum

| Part | Spec | Link | Price | Notes |
| --- | --- | --- | --- | --- |
| **RHD Engineering M50/M52 ITB Kit** | 45mm × 6, billet manifold | [devil.design](https://devil.design/product/bmw-m50-m52-individual-throttle-body-kit/) · [reduxracing.com](https://reduxracing.com/products/individual-throttle-body-kit-itb-intake-for-bmw-e36-m50-m52) · [Jenvey via VAC](https://store.vacmotorsports.com/jenvey-itbs-bmw-m50m52-us-p3024.aspx) · [nordicrtec.com](https://www.nordicrtec.com/product/1158/bmw-m50m52-itb-kit) | **$2,200–3,600** | Devil $2,449 · Redux $2,414 · Jenvey via VAC $2,200 · Nordic R-Tec €1,346 |
| **Sealed plenum (custom fab)** | TIG'd 3mm aluminum | — | **~$800–2,200** | Replaces the kit's NA carbon airbox — see below |

Includes fuel rail, linkage, and idle-control fittings; retains the M50 cable attachment; documented for both LHD and RHD chassis — with a real install base: [Bimmerforums' E36 RHD Engineering ITB install guide](https://www.bimmerforums.com/forum/showthread.php?2440728-BMW-E36-RHD-Engineering-ITB-Install=) (documented S52 M3 street install — parts list, vacuum-hose sizes, ICV/plenum/TPS tuning notes). RHD's own "Turbo Intakes" category lists only an M42/M44 product — but they do boost-rated intake fab, so an M5x turbo plenum is a legitimate question for sales@racehead.com.au before assuming custom fab is the only route.

**The plenum is a pressure vessel, not an airbox.** The kit ships with a carbon airbox designed for NA duty — thin layup, dust/weather edge seal. Under boost the box becomes the pressure boundary and must be fabricated accordingly:

- **Material:** TIG'd 3mm aluminum, same footprint and perimeter seam as the kit airbox (use it as the shape template)
- **Seam:** real gasket or O-ring groove at the perimeter — the stock edge seal is a weather strip
- **Inlet:** ~90mm port for the charge pipe
- **Ports:** MAP, FPR vacuum reference, idle-air feed (the kit's vacuum balance block can serve MAP/reference instead of a plenum port)
- **Volume:** ≈ stock airbox or slightly larger. Larger plenum volume improves cylinder-to-cylinder charge distribution under boost — the RB26 lesson (OEM 3.4L collector ran cyl #6 leanest; the Nismo fix enlarged it to 4.1L). Do not shrink below airbox volume chasing response — the turbo's own lag swamps any transient gain.

**Carbon options:** engineered carbon pressure vessels exist and are rated well past this build's boost — [Artec dry-carbon RB26 manifold, 40 psi, $3,250](https://artecperformance.com/products/nissan-rb26-dry-carbon-air-intake-manifold). A one-off carbon plenum prices ≈2.5–4× aluminum (~$2,500–6,000) — the cost is tooling and labor, not material. **Bling-per-dollar path: aluminum vessel + cosmetic carbon skin (~$300–800).** Reference geometry: [Plazmaman RB26 ITB plenum](https://plazmaman.com/product/nissan-rb26-6-throttle-body-billet-inlet-manifold/) (billet base plate + 3mm TIG'd dome, ~$1,550 USD production part).

**Off-the-shelf alternative — Jenvey Turbo Plenum:** Jenvey sells a universal boost-rated ITB plenum ([APSC2-70, ~£750–990](https://www.jenvey.co.uk/turbo-plenum-sm-70mm-inlet-apsc2-70)): 4.5L volume, O-ringed base interface, CFD diffuser inlet, rated past 1,000 bhp. It is patterned for Jenvey throttles — but Jenvey machines bases to suit bespoke manifolds ([APSC2-70-MAC / APLC70-MAC](https://www.jenvey.co.uk/throttle-bodies-and-components/turbo-plenum)). Quote the RHD kit's inlet-face pattern — this converts custom-fab scope into a production part + one machining operation.

### Path C — M5x → RB26 ITBs via CNC Innovations adapter (leading)

[CNC Innovations M5x→RB26 ITB adapter — **$730**](https://www.cncinnovationsmy.com/product-page/bmw-e34-e36-e39-e46-m3-m50-s50-m52-s52-to-rb26-itb-billet-adapter) (Shah Alam, Malaysia — made-to-order billet, confirm lead time + pattern before ordering). Includes adapter plate, billet vacuum block, teflon gasket, hose fittings, fuel rail + bracket. **No cable/linkage or TPS hardware.** No documented M5x install surfaced — treat orientation details as vendor questions, not assumptions.

**Throttle bank:** used RB26 ITB bank — observed eBay market **$450–800** (complete sets cluster ~$515–550, plus $100–300 shipping where imported): [OEM ITBs + intake manifold $450, US](https://www.ebay.com/itm/358847581035) · [throttles + inlet $406 + $115 ship, AU](https://www.ebay.com/itm/800838341071) · [individual throttle set $515](https://www.ebay.com/itm/358412983717) · [OEM full ITB set $550](https://www.ebay.com/itm/315280851191) · [OEM throttles + plenum `14001-05U00` $608 + $129 ship](https://www.ebay.com/itm/227559910013) — listings expire; standing search is `rb26 itb` sorted price-ascending. Full-intake listings (bank + collector + lower manifold) top the range, but only castings + collector are kept, so paying for the lower plate gains nothing. Condition unknown until in hand — the rebuild below is the equalizer. Sourcing call: [Raw Brokerage](https://web.archive.org/web/2024/https://rawbrokerage.com/collections/nissan-rb26dett) (US RB specialist, used-parts brokerage desk; supplied the ITB hardware on the documented N/A RB Z31 swap — live site currently returns 402, archive cited; phone/IG contact if it stays down). Only the throttle castings + collector are needed — RB26 injectors live in the separate primary manifold plate between head and throttles ([HybridZ](https://forums.hybridz.org/topic/97617-rb26-itbs-on-an-l-series-engine/)), which is why the adapter's fuel rail + injector provisions are mandatory rather than bonus. Budget a seal/bearing refresh before install — 20–30-yo RB26 shaft seals are the known leak item, and the parts are OTS: [IEE rebuild kit ~$48.50](https://www.iee.nz/shop/rb26-itb-throttle-rebuild-kit-2840) (single-lip shaft seals, SKF bearings) · [Reimax Throttle Refresh Set ¥19,500](http://reimax.co.jp/gtr_throttlerefreshset.html) (lip seals + collars — marketed as a boost-up air-leak fix) · [Kudos overhaul kit AU$284.90](https://www.kudosmotorsports.com/kudos-motorsports-kt-16118-05u01-oh-throttle-body-overhaul-kit-for-nissan-rb26dett) · [RB-Rebuild full kit £216](https://www.rbrebuild.com/rb-rebuild-rb26-throttle-rebuild-kit). Bench rebuild + sync before the bank goes near the car. **Rebuild caveat:** don't blast the bores with carb cleaner — the dark coating is the factory sealing layer; stripping it causes air bypass/high idle that sync can't fix ([GTR USA](https://www.gtrusablog.com/2020/03/itb-vs-single-throttle-individual.html) — repair is Tomei Throttle Coat + resync + smoke test).

**Plenum — the best story of the three paths, with one caveat:** this is a factory-turbo ecosystem, so the OTS options are boost-designed by default (CNCI's own units excepted — see table). The stock RB26 collector *is* the boost part — OEM ran ~1 bar through it and the aftermarket pushes 500–700hp through stock units (its known weakness is cylinder-6 charge distribution, fixed by the Nismo 3.4→4.1L enlargement — see Path B volume note). Used collectors run ~$200–400. The caveat is orientation — every Nissan-market collector is an end-inlet part built around a Skyline bay; see the orientation note after the table. The ITB-retaining aftermarket menu:

| Plenum | Price | Notes |
| --- | --- | --- |
| Stock Nissan collector | ~$200–400 used | Proven boost part; buy early and it doubles as the scan template below |
| [Plazmaman ITB-retaining plenum](https://plazmaman.com/product/nissan-rb26-6-throttle-body-billet-inlet-manifold/) | AU$2,395 | Billet base + hand-formed 3mm TIG dome, built-in ram tubes, retains fuel rail, optional IAC provision — "factory/aftermarket intercooler piping used with mild modification" = boost-intended. Made-to-order — inlet position/orientation is an order-time spec. Height caveat: their own listing flags extra height fouling the clutch booster on tall-deck combos — hood clearance on E36 is a mock-up item |
| [Hypertune Standard Multi Throttle](https://tunersedge.com.au/products/hypertune-intake-manifold-rb26dett-standard-multi-throttle) | AU$2,483 | Full billet ITB-retaining manifold, 77/90/102mm inlet options, made-to-order custom options — also at [Platinum Racing £2,100–2,700](https://www.platinumracingproducts.com/products/hypertune-intake-manifold-nissan-rb26dett-v2) · [Stealth Ride AU$2,440](https://stealthride.com.au/products/hypertune-intake-manifold-nissan-rb26dett-v2) |
| [Artec dry-carbon](https://artecperformance.com/products/nissan-rb26-dry-carbon-air-intake-manifold) | $3,250 | 40 psi rated — the look-max option |
| [CNCI front-facing rotatable ITB collector — 3.5" V-band](https://www.cncinnovationsmy.com/product-page/nissan-rb26-itb-ff-itb-inlet-collector-plenum-for-3-5-inches-v-clamp) | **$1,144.60** | Same-vendor matched option. "Rotatable" = two tank orientations on the stub rail (flipped mounting, not infinite clocking) — the pictured orientation is the E36-correct one. **No boost rating claimed** — but machined-from-billet construction has no weld seams (the documented aftermarket failure mode — MaxPSI's first four plenums split weld seams), the six-port face seals via gasket + positive bolt-down, and the V-band inlet is a boost-standard coupling. Add "pressure-test spec?" to the vendor email |
| [CNCI standard ITB inlet plenum](https://www.cncinnovationsmy.com/product-page/nissan-nissan-rb26-itb-indirb26-itb-indivitual-throttle-body-billet-inlet-plenum) | $1,338.60 | Same billet no-weld construction; listing claims "CFD simulation and pressure test during the designing process" — marketing language, no rating |
| [CNCI short inlet collector](https://www.cncinnovationsmy.com/product-page/nissan-rb26-itb-billet-short-inlet-collector-plenum) | $1,241.60 | Compact billet variant |
| Greddy intake manifold | used/JDM | Classic period upgrade ([Fast Car](https://www.fastcar.co.uk/tuning/how-to-tune-a-nissan-rb26dett-engine/)) |
| Nismo plenum | rare/pricey | Z-Tune piece — engineered specifically to fix stock cyl-distribution |

**Interface + orientation, confirmed from photos:** the collector mates to the bank via **six separate oval 2-bolt pads** — the "12 × 12mm plenum nuts" from the R32 removal guide ([GTR Market](https://gtrmarket.com/forum/engines/rb26-inlet-plenum-removal-with-pics-133679)) — visible on the OEM collector's underside. The paired 4-hole gasket (`16175-05U70`) is the throttle-pair→head-manifold interface, not the collector side. The bank's six outlet faces therefore set the plenum's direction: read against the adapter renders, the mouth rows tilt such that a stock-pattern collector (front-end inlet, built around a Skyline bay) lands **firewall-facing** on the M5x. That eliminates the OTS Nissan collectors as bolt-on options pending CNCI's mock-up answer — leaving the CNCI FF rotatable (matched vendor geometry, one of its two tank orientations is E36-correct) or a fabricated vessel, which is orientation-free by construction. A used stock collector retains value as the scan template regardless.

So one part covers both phases: filter on the inlet snout for NA, charge pipe for boost — or run open bells + sock filters in Phase 1 and bolt the collector on at swap time.

**Hood-clearance lever — engine height via mounts:** [Tech-53 modular solid Delrin mounts](https://tech-53.com/products/bmw-e36-e46-modular-solid-engine-mount-delrin-2) (E36/E46; $408 direct — also [BFI $299.99](https://blackforestindustries.com/products/tech-53-modular-solid-engine-mount-delrin-e36-e46-pair) · [Park Auto $369.99 CAD](https://www.parkautomotorsports.ca/products/tech-53-modular-solid-engine-mount-delrin-e36-e46-pair-low-boy-clearance)) carry a removable 5mm internal plate — pull it and the engine sits −5mm ("center gravity correction"); a +20mm spacer configuration goes the other way for oil-pan clearance on slammed cars. Caveats per listing: subframe holes may need redrilling; pair with Tech-53 transmission mounts. Beyond −5mm it's custom-mount territory trading oil-pan/subframe/rack clearance for hood clearance — poor trade at street ride height.

**Phase 1 framing:** open trumpets + filters is a complete, standard NA ITB configuration — a plenum over the bells is aesthetic/acoustic, not functional. Bolt-on trumpet hardware exists for the RB26 2-bolt pads: [CNCI billet air stacks w/ wire mesh — $776](https://www.cncinnovationsmy.com/product-page/nissan-rb26-billet-air-stack-trumpets-with-wire-mesh) (same vendor, matched pattern — mesh is a debris screen, not filtration). Filter menu for the horns: **[ITG JCS-11 ram-pipe socks ~$31 ea](https://itgfilters.net/products/itg-rampipe-trumpet-filter-sock-jcs-11)** (slip over horn ≤76mm OD, cable-tie retained, no baseplate — lowest-profile option; also [Demon Tweeks](https://www.demon-tweeks.com/us/itg-ram-pipe-trumpet-filter-sock-243947/)) · **[ITG JCS-21 double sock $47.79](https://www.pegasusautoracing.com/productdetails.asp?RecID=31782)** (one piece covers a pair — works if the RB26 pair spacing lands near the Weber 90mm standard; measure on bench) · [Pipercross pair socks](https://www.classiccarperformance.com/products/pipercross-foam-filters-weber-dcoe-dhla-dellorto) and [Ramair sock packs](https://ramair-filters.co.uk/filters/sock-filters/cs-909-sock-filters-for-carbs-trumpets-3-quantity-universal/) same pattern · **one element over all six** = [ITG JC100 sausage](https://www.merlinmotorsport.co.uk/p/itg-megaflow-sausage-air-filter-jc100-itg-jc100-s) (baseplate-mounted) or bespoke six-inlet from ITG/Ramair custom shop. Foam ships dry — needs filter oil (Rock Oil Eco or equiv). The FF plenum's stub rail also bolts to the pads independently of the tank — stubs-only + foam works, but $776 dedicated trumpets beat stripping a $1,144.60 plenum for its rail. Buying the pressure vessel early is optional spend, not a requirement. Minor caveat: bolting a plenum on later shifts the VE curve slightly — a small retune touch-up, not a problem.

**Orientation — side-swap, roll, and what's actually unknown:** on the RB26, turbos/exhaust sit on the engine's left and the intake on the right ([GTR USA](https://www.gtrusablog.com/2019/08/heat-shielding-for-nissan-skyline.html)); the M5x mirrors that (intake left). Read against the adapter renders, the bank mounts such that a stock-pattern collector lands **firewall-facing** (see the interface note above) — the exact question for CNCI's mock-up answer. The remaining unknown is **bank roll**: the RB26 and M5x port faces enter at different angles, and the adapter reconciles that — either as a roughly planar plate (bank upright) or a wedge (bank tilted). A rolled bank still *functions* — TPS, linkage, fuel rail, and vacuum fittings are all bank-mounted and travel with it — but roll decides whether those provisions land top/outboard (accessible) or bottom/inboard (awkward), and whether the plenum mating face points up enough to take a collector at all. A bank rolled features-down would make the product pointless, so upright-ish is the sane expectation — but nothing is documented: no M5x install exists anywhere, so ask CNCI for a mock-up photo or the bank roll-angle spec. If they machine to order anyway, "plenum face up, linkage outboard" is a request they can accommodate.

**Scan-and-fab option — the documented path to a custom vessel:** the RB26 six-port sealing interface is available as real CAD — [GTR forum thread with .dwg flange dimensions + 3D trumpet geometry](https://www.gtr.co.uk/threads/cad-files-for-rb26-inlet-flange.208785/) (posted by someone who built their own RB26 plenum). The complete DIY template path: buy a used stock collector (~$200–400 — useful on its own), Scaniverse it for the port interface + ram-tube envelope, mirror/adjust in Blender per the downpipe workflow, hand the fitted buck to a fabricator for a TIG'd vessel with the inlet exactly where the charge pipe needs it. If the stock collector fits as-is, it *is* the plenum until prettier wins. Cults3D has RB26 intake STLs but they're 1/24-scale models or single-TB conversions — not dimensional references.

**Integration left to the owner:** cable adaptation (the bank has its own cable drum — adapt the M50 cable with a bracket or run a Lokar cut-to-fit ~$50; the bracket is a DIY lasercut flat-steel part, ~$30 via SendCutSend), Nissan TPS pigtail → MaxxECU input (precedent note: a factory RB20 TPS bolted directly onto the RB26 throttle pulley in a documented conversion — [Nico Club](https://forums.nicoclub.com/my-rb20-w-rb26-itb-s-thread-t423637.html)), idle air (open running = throttle stops; under the stock collector the RB26 AAC valve mounts to the plenum — either way it's solvable, just undocumented), and confirming injector fitment in the adapter's included rail.

**OTS cable + TPS — [IEE Cable Actuated Throttle Kit ~$1,350 NZD](https://www.iee.nz/shop/iee-0228-rb26-itb-cable-actuated-throttle-kit-2764):** machined rear cable reel, under-manifold cable bracket, front TB connector, Variohm 110° TPS w/ DTM-6 Deutsch connector (MaxxECU-ready), and end plates w/ positive backstops — replaces the DIY bracket/TPS items above. Proven on an N/A RB in a swapped chassis — the @rvae38 Z31 that ran it at SEMA ([Speedhunters feature](https://web.archive.org/web/2024/https://www.speedhunters.com/2021/05/project-z31-432-getting-technical/)). Every piece is bank-mounted, so the intake-side mirror doesn't break it — the open items are which end of the bank the reel lands on under the adapter's orientation and whether the bracket mounts to pieces retained on a bare bank (water manifold rail ships with the throttles; lower manifold plate doesn't). IEE also offers an [RB26 ITB DBW OEM+ kit](https://www.iee.nz/shop/rb26-itb-drive-by-wire-oem-kit-2876) driving the bank off a **BMW S54 throttle actuator** — makes the DBW option portable to Path C if cable ever gets dropped.

### NA → boost transition

| | **A: S54** | **B: RHD kit** | **C: RB26** |
| --- | --- | --- | --- |
| Phase 1 NA piece | Stock plastic plenum or open bells | Carbon airbox (included) | Stock collector or open bells |
| Carries to boost? | **No** — ~9 psi cap; buy an OTS boost plenum regardless | **No** — dust seal only; fab vessel required | **Yes** — stock collector is a proven boost part |
| Swap-time intake work | Unbolt plenum → bolt boost plenum (CXR/SR54/etc.), re-plumb inlet | Replace airbox → fab vessel, re-plumb | Bolt collector on (if ran open), re-plumb |

On every path the adapter/kit + throttle bank lifts off the stock engine as a unit and gaskets onto the built M52's head (same flange) — throttle hardware never comes apart. The universal boost-change list at swap time: charge pipe replaces the filter, **FPR gets manifold-pressure reference** (1:1 rising rate under boost), idle-air feed re-plumbs to post-intercooler metered air, plus the tune session already in Phase 4.

### DBW option + safety architecture (S54 path)

RRD's **DBW actuator bracket variant** retains the S54's DK motor — pair it with an E46 pedal module and MaxxECU e-throttle and the ITBs run drive-by-wire with no cable at all (an `epedal-bmw-e46` harness design already exists in the wiring repo). Not the Phase 1/2a plan — the pedal swap is deferred, and DBW arrives with the 07K phase anyway (`35-dbw-throttle.md`) — but it keeps the option open without stranding hardware.

How DBW fails safe, for the record: the throttle shafts keep return springs and the motor must *actively hold* the blades open — unpowered, the spring snaps them shut (standalone calibration routines verify this by cutting motor power and watching the blade close — [HPAcademy](https://www.hpacademy.com/forum/general-tuning-discussion/show/s54-actuator-and-ae111-throttle-calibration-issue-link-g4x/)). Sensing is redundant at both ends — dual pots in the pedal, dual on the throttle side — and the ECU continuously cross-checks them (BMW's own fault table is dominated by potentiometer plausibility codes → fail-safe mode: [EDK diagnostic bulletin](http://www.ge39.com/files/EDK.pdf); MaxxECU requires main + backup sensors on pedal and TB alike: [wiring docs](https://www.maxxecu.com/files/Documentation/Wirings/MaxxECU%20SPORT%20%28REV9%2B%29%20-%20Wiring-en.pdf)). On any detected loss of control the response is motor power cut *plus* fuel/ignition cut ([MaxxECU E-Throttle module manual](https://www.maxxecu.com/files/Documentation/Discontinued/MaxxECU%20E-Throttle%20CAN%20module%20-%20Manual-en.pdf)). Real-world S54 failure mode is EML limp-home with reduced power — worn actuator pots/gears — not stuck-open ([Phantom Speed](https://phntmspeed.com/blogs/news/bmw-s54-throttle-actuator-nightmare) · [mwrench DK teardown](https://www.mwrench.com/Whitepapers/DKMotorcleanup.pdf)). Known nuance: ITB shaft stiction can make the two end-of-shaft sensors disagree and trip the watchdog — an annoyance-class failure ([HPAcademy](https://www.hpacademy.com/forum/data-analysis-fundamentals/show/new-fly-by-wire-system-setup/)), not a safety one.

### Vendor questions to answer before ordering

- **CNC Innovations (sales.cncinnovations@gmail.com):** does the RB26 bank's plenum inlet land at the front or rear of the bay on an M5x? **Bank roll angle** — does the bank sit upright (plenum mating face up, linkage/TPS/fuel-rail provisions outboard) or tilted/rolled — can they share a mock-up photo? Any M5x install photos? Lead time? For their RB26 FF rotatable plenum: is it pressure-tested/rated for boost, and does the tank mount in the E36-correct orientation shown in their photos? And for the S54 billet plenum: is it designed/rated for boost — does the base plate use machined O-ring grooves with positive bolt-through clamping to the ITB bank, or does it reuse the stock clip-style retention (the stock plenum's failure mode at 9 psi)?
- **RRD (support@rabidracingdev.com) — Path A alternative:** is the included throttle cable cut-to-fit or fixed-length/terminated? Any RHD installs on record? What ships with the used-ITB sets (fuel rail, injectors, TPS)? Price on the DBW-bracket variant?
- **RHD Engineering (sales@racehead.com.au) — Path B alternative:** TPS included in the kit? Will they build an M5x-pattern boost-rated plenum (their turbo-intake work exists for M42/M44)?
- **IEE (NZ) — Path C cable kit:** does the cable bracket mount to components retained on a bare ITB bank (throttle castings + water manifold rail only, no lower manifold plate)? Which direction does the reel pull — can it anchor a cable approaching from the driver-side firewall, and does the bank's "rear" land at the firewall under the CNCI adapter's orientation?

**Single-TB fallback upgrade — Hyde SR1:** [SR1 Manifold, $660](https://hydemotorworks.com/shop/product/straight-six-manifold/) — aircraft-aluminum M5x intake manifold designed for "high boost pressure supercharged or turbocharged applications" (their M1 kits run 1+ bar through it; rated to 900hp airflow). Full manifold replacement — runners + plenum + bolt-on inlet adapter. If the ITB path doesn't happen, this is the documented billet upgrade over the stock M50 manifold.

### Install notes

- **Timing — last Phase 1 purchase:** whichever path wins, sequence it at the *end* of Phase 1 — after the 8HP swap and other Phase 1 work, while the built motor is being assembled — installed on the stock alloy M52 running NA. The adapter/kit + bank carries to the built engine unchanged (bodies, manifold, linkage, rail, TPS all transfer); the plenum/vessel question is the only boost-specific scope. This sequencing makes the Phase 1 M50-manifold swap unnecessary and puts the alpha-N tune + throttle-sync learning on the stock engine — the NA phase is the test bed that validates linkage, orientation, and idle before boost exists.
- **Bundle with exhaust fab if applicable (Path B only):** if catalog manifold/downpipe sourcing fails and a fabricator (Fabie Boys, PMS, or VAC) is engaged for custom exhaust anyway, a custom plenum belongs in the same scope — sheet-aluminum box work is easier than a turbo header, and a single in-car mockup session resolves the interacting package (downpipe path, AC reroute, charge-pipe routing, plenum inlet) coherently. The Scaniverse + Blender workflow documented for the downpipe transfers directly to the plenum buck.
- **Who fabricates the plenum (Path B):** fab-shop job, not a home project — TIG'd thin aluminum, a flat sealable perimeter flange, and an O-ring groove are the skill/equipment barrier. The DIY-scoped work is the template: cardboard or 3D-printed buck off the kit airbox, fit under the hood with the engine in, mark inlet position + MAP/FPR/idle ports, hand the fitted buck to the fabricator. Leak-test the finished part on the bench (soapy water or smoke at low pressure). Bar-lowering design choices if DIY is attempted anyway: flat-gasket seam instead of O-ring groove, purchased weld-on V-band inlet flange, two-piece box + bolt-on lid.
- **Linkage/cable brackets (Paths A/C):** DIY-scale fabrication — measure pedal cable throw vs drum/bell-crank travel, lasercut a steel bracket (~$30 via SendCutSend or a bent flat bar), terminate with universal cable-end hardware. If a fab shop is in the bay anyway it's a 30-minute line item, not a dependency.
- **Throttle sync:** six bodies need balancing — carb sync tool
- **Tuning:** alpha-N + MAP blend fueling in MaxxECU (supported natively) — more setup than single-TB speed-density
- **MAP placement:** anywhere in the plenum reads the same average — avoid a port directly facing a runner mouth; the runner balance line is the cleaner source
- **Mock-up checks:** hood clearance over the throttle bank + plenum (E36 bay is tight on the intake side — especially the tall RB26 collector); stock/kit cable reach to the bell crank or cable drum; injector pocket depth if reusing non-S54 injectors on Path A

---

## Boost Control

Same approach as 07K Phase 3b (`31-air-boost.md`): MaxxECU controls boost via a PWM boost control solenoid on the wastegate actuator. MaxxECU supports open/closed-loop boost control natively. Use a Turbosmart or Synapse solenoid.

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

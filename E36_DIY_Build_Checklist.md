# E36 9000 RPM Build — DIY Checklist

> **Legend:** ✅ DIY | 🔧 DIY with specialty tools | ⚠️ First-time skill | 🏭 Shop-mandatory

> **System Tags:** `[FUEL]` `[AIR]` `[IGNITION]` `[COOLANT]` `[OIL]` `[ECU]` `[ROTATING-ASSEMBLY]` `[HEAD/VALVETRAIN]` `[TIMING]` `[DRIVETRAIN]` `[SUSPENSION]` `[BRAKES]` `[STEERING]` `[CHASSIS]` `[ELECTRICAL]` `[INSTRUMENTS]` `[AC]` `[THERMAL]` `[ADMIN]` | Work-type modifier: `[MACHINING]`

---

## Document Conventions

**Engine lateral sides — always use exhaust/intake, never left/right or driver/passenger.**

Left/right and driver/passenger are LHD-centric and ambiguous in an RHD build. All references use:

| Term | Meaning |
| :--- | :--- |
| **Exhaust side** | Long side of 07K block with exhaust ports and primary OEM mount bosses |
| **Intake side** | Long side of 07K block with intake ports and oil filter housing |

**RHD E36 orientation (longitudinal, timing chain forward):**

| Car direction | 07K side |
| :--- | :--- |
| Driver side (right) | **Exhaust side** — SPA manifold, turbo, downpipe, engine stand adapter |
| Passenger side (left) | **Intake side** — iABED housing, intake manifold |

---

## Phase 0 — Sourcing & Admin

### Admin & Sourcing  [ADMIN]
- [ ] ✅ Identify target car (323i or 328i RHD convertible, manual — UK/AU/ZA preferred)
- [ ] ✅ Verify diff ratio and LSD status before committing to a car — ratio and LSD are **independent specs**, not linked
  - Manual 328i standard ratio: **3.46** (open or LSD depending on option 209). Fully workable for 8HP; 3.15 preferred but not urgent.
  - **Step 1 — Do yourself while window shopping:** Run VIN on [bmwarchive.org VIN decoder](http://www.bmwarchive.org/vin/bmw-vin-decoder.html) or [realoem.com](https://www.realoem.com/). Look for **code 209** = LSD (also check for 220 — E36 forums cite it, but SA doc lists 209 as LSD; verify both).
  - **Step 2 — Ask seller:** Request photo of the build sheet stapled under the rear seat cushion (Fahrzeugauftrag). Lists all SA codes in German abbreviations.
  - **Step 3 — At PPI:** Rear wheels off ground, neutral, turn one wheel — open diff spins opposite freely; LSD resists and rotates same direction.
  - If upgrading ratio later: source **E36 M3 differential** (~$800–1,200 used) for 3.15 + LSD in one unit
- [ ] ✅ Verify non-tilt steering column — required for EPS kit compatibility
  - **Step 1 — Do yourself while window shopping:** Run VIN on [bmwarchive.org VIN decoder](http://www.bmwarchive.org/vin/bmw-vin-decoder.html). Codes **244, 245, 246, or 247** = adjustable/tilt column (wrong car). None of these = fixed column (correct). Year guide: 1996+ is likely non-tilt but European/RHD is inconsistent — always confirm via VIN.
  - **Step 2 — Ask seller:** Request photo of the underside of the steering column between the wheel and the dash. Tilt = visible gray/black plastic lever protruding from the column tube. Non-tilt = smooth uninterrupted plastic shroud. Reference: [Pelican Parts E36 Tilt Retrofit](https://www.pelicanparts.com/BMW/techarticles/E36-Tilt/E36-Tilt.htm) (photos of lever in situ)
- [ ] ✅ Commission pre-ship PPI in country of origin
  - > ⚠️ **Pitfall:** Confirm alloy block (M52) vs iron (M50). Look for rust in chassis rail seams and convertible floor pans — these rot badly in UK cars. Verify VIN decodes to convertible body style.
- [ ] ✅ **Candidate vehicle — current preferred:** 1995 BMW 328i E36 Convertible, RHD, blue, 143k miles, service history, UK car — [eBay UK #377188165950](https://www.ebay.co.uk/itm/377188165950) — £5,000 asking. Estimated **~$10,000 all-in to door** via Double Mint Imports. Auction ended 23 May — follow up with seller to confirm availability.
- [ ] ✅ Choose your sourcing + import path — **preferred path is Double Mint Imports:**
  - **⭐ Preferred — [Double Mint Imports](https://www.doublemintimports.com/):** RHD UK classic specialist. You source the car; they handle collection, deregistration/export docs, shipping to **Port Newark NJ**, US customs/EPA/DOT clearance, and accompany you to NY DMV for titling. Owner: Raphael Hickling. Use their [cost estimator](https://www.doublemintimports.com/estimator). All-in at £5,000: **~$10,000 to door.**
  - **Option A — Full turnkey:** [Open Air Imports](https://www.openairimports.com/) (Baltimore/Richmond VA, ph: 443-300-8745). Sources and ships the car, clears US customs, delivers. Best if you don't want to find the car yourself.
  - **Option B — Self-source, outsource shipping:** Find on [AutoTrader UK](https://www.autotrader.co.uk/) or [PistonHeads](https://www.pistonheads.com/) → commission UK PPI ([Drewmotive](https://www.drewmotive.com/pre-purchase-inspections/classic-import-car-pre-purchase-inspection.html)) → hand off to [CFR Classic](https://cfrclassic.com/international-car-shipping/import-car-from-uk-to-usa/) (~$2,450 UK→US) for shipping.
  - **Option C — AU sourced:** [Gumtree](https://www.gumtree.com.au/) / [Carsales](https://www.carsales.com.au/); West Coast US port (LA/Long Beach) is closer for AU origin.
  - > ⚠️ **Pitfall:** 25-year rule uses the **manufacture date** on the door jamb plate, not the model year. Confirm the specific car's build date clears the threshold before it ships — a December 1999 build date is not the same as a 1999 model year.
- [ ] ✅ Secure specialty insurance (Hagerty / Grundy / American Collectors) **before** car leaves port
- [ ] ✅ Register in your state as antique/classic
- [ ] ✅ Source OEM hardtop (with car or separately — eBay, FB Marketplace, ~$500–1,500)
- [ ] ✅ Order Gauge.S E36 direct-replacement cluster ([sorek.uk](https://shop.sorek.uk/products/gauge-s-bmw-e36-320i-323i-328i-m3-direct-replacement-instrument-cluster-pnp)) — $247
  - Cluster alone can display both coolant temp AND oil temp on different layouts — no second unit needed for Phase 0
  - **OBD2 adapter ($68) is NOT needed** for the PNP cluster — all required wires (12V, GND, K-line, CAN) come from the OEM cluster harness connector already
  - Gauge.S POD 52mm ($413, preorder Nov 2026) is an optional future add for a dedicated second screen — skip for now
- [ ] ✅ Order Bosch PST-F1 + M14×1.5→M10×1.0 adapter ([sorek.uk](https://shop.sorek.uk/products/bosch-pst-f-1-vanos-banjo-m14x1-5-to-m10x1-0-sensor-adapter-m50-m52-m54)) — ~$65

### Instrumentation  [INSTRUMENTS · OIL · ELECTRICAL]
- [ ] 🔧 Install Gauge.S cluster — plugs into OEM E36 cluster connectors (PNP) — wiring: [`gauge-s-can.wv`](https://github.com/wesleyxcooper/e36-wiring/blob/main/harnesses/gauge-s-can.wv) ([diagram](https://htmlpreview.github.io/?https://github.com/wesleyxcooper/e36-wiring/blob/main/output/gauge-s-can.html)) · [`body-x20.wv`](https://github.com/wesleyxcooper/e36-wiring/blob/main/harnesses/body-x20.wv) ([diagram](https://htmlpreview.github.io/?https://github.com/wesleyxcooper/e36-wiring/blob/main/output/body-x20.html))
  - **Video:** [Gauge.S E36 Features & Installation](https://www.youtube.com/watch?v=v5P81D6qujs) — **7:00** installation | **1:12** features | **13:32** software/setup
  - Displays actual °C / °F numbers for coolant temp, oil temp, oil pressure — not needle gauges
  - Reads OEM NTC coolant sensor at the block via existing harness (no extra wiring for coolant temp)
  - Reads Bosch PST-F1 oil sensors via the analog input wires (0–5V, up to 7 channels)
  - Data logging to microSD card; WiFi SD access from phone
  - **Phase 3 upgrade:** In MaxxECU phase, switch from raw sensor mode to **MaxxECU CAN bus feed** — richer data, no sensor wiring changes needed
  - > ⚠️ **Pitfall:** Read the wiki at [wiki.sorek.uk](https://wiki.sorek.uk) before installing — definition files need to match your ECU type (MS41.x for OBD2 E36; MaxxECU CAN profile from Phase 1 onward). Wrong definition = missing or wrong readings.
  - > ⚠️ **Pitfall:** Do NOT buy the OBD2 adapter ($68) for the PNP cluster — it is redundant. The OEM cluster harness already provides everything the unit needs.
- [ ] 🔧 Install Bosch PST-F1 dual oil temp/pressure sensor at M52 VANOS banjo bolt location — wiring: [`pst-f1-sensor.wv`](https://github.com/wesleyxcooper/e36-wiring/blob/main/harnesses/pst-f1-sensor.wv) ([diagram](https://htmlpreview.github.io/?https://github.com/wesleyxcooper/e36-wiring/blob/main/output/pst-f1-sensor.html))
  - Mount: M14×1.5 banjo port at block → sorek M14×1.5→M10×1.0 adapter → PST-F1 threads directly in (M10×1.0)
  - **Wiring (4-pin sensor):**
    - Pressure output (0–5V, 0–10 bar) → Gauge.S **A1 or A2** — these are 5V-tolerant pins
    - Temp output (NTC, –40 to +140°C) → Gauge.S **A3 or A4** — these have the correct NTC pullup resistor built in
    - Ground → Gauge.S GND; 5V supply → Gauge.S 5V reference
  - Gauge.S v5.5+ supports PST-F1 as a single-header connection via the EE pin — check PCB version label before wiring
  - Displays actual oil temp °C and oil pressure bar/psi as live numbers (M52 has no factory oil temp sensor — OEM gauge is a binary idiot light only)
  - MaxxECU can also read PST-F1 outputs in parallel via its own analog inputs — wire once, two consumers
  - > ⚠️ **Pitfall:** A1/A2 are 5V-tolerant; A3/A4 are 3.3V-tolerant with NTC pullup. **Do not swap them** — pressure signal on A3/A4 will read incorrectly; NTC temp on A1/A2 will not read at all without the pullup.
  - **Phase 3 relocation (07K):** The 07K longitudinal oil filter housing (S-PAU or iABED — required for the swap) has a dedicated M10×1.0 port. Unbolt PST-F1 from VANOS adapter, thread into new housing port. Zero wiring changes.
- [ ] ✅ **Sensor tap note for SPAL FAN-PWM-V3 (if running standalone PWM controller):**
  - The OEM coolant NTC sensor signal wire can be tapped in parallel — Gauge.S, the ECU, and the FAN-PWM-V3 all read the same sensor simultaneously with no interference
  - At the same temp threshold you set in the FAN-PWM-V3, you'll see the matching number on the Gauge.S cluster in real time

---

## Phase 1 — Foundation: MaxxECU Install, 8HP Swap, Reliability

> **Recommended staging order within Phase 1:**
> 1. **MaxxECU on M52 first** — install the ECU, resolve EWS2 bypass, wire X20, and get the car running on MaxxECU with the Getrag still in place. Tune the M52. You now have a commissioned, trusted ECU on a simple known-good drivetrain.
> 2. **8HP swap second** — with MaxxECU already proven, add the #2287 CAN harness, flash the TCU, and drop in the 8HP. This isolates troubleshooting: ECU issues surface on the stock drivetrain; 8HP issues surface on a known-good ECU. Path of least resistance for a solo build.
> **M52 is the priority engine path** — the terminated M50/M52 harness from MaxxECU supports it directly with one cam sensor adapter. Treat M50 as fallback.

### Interior Strip & Prep  [INTERIOR · CHASSIS]
- [ ] ✅ Remove rear seats, carpet, trunk interior, spare tire
- [ ] ✅ Remove soft top mechanism if in the way (bolted, not welded)
- [ ] ✅ Photograph all wiring connectors and harness routing before touching anything

### Chassis Reinforcement  [CHASSIS] 🏭
- [ ] 🏭 Install front subframe reinforcement plates (RallyRoad) — **welder required**
- [ ] 🏭 Install strut tower reinforcement plates (BimmerWorld) — **welder required**
- [ ] 🏭 Install rear subframe reinforcement plates (BimmerWorld) — **welder required**
- [ ] 🏭 Install RTAB pocket reinforcement plates (BimmerWorld) — **welder required**
  - > ⚠️ **Pitfall:** Rear subframe reinforcement requires removing the rear subframe, exhaust, driveshaft, fuel tank, and rear interior before welding. Don't attempt to weld with the tank in the car. Reference: [Garagistic Complete Chassis Guide](https://www.garagistic.com/pages/e36-complete-chassis-reinforcement-kit-installation-guide) | [YouTube walkthrough](https://www.youtube.com/watch?v=2mYdKzG10R4)
  - > ⚠️ **Pitfall:** Surface prep before welding is the critical step — bare metal welds only. Sand, grind, and clean every contact surface. Weld porosity from paint contamination is invisible and structurally weak.

### Suspension  [SUSPENSION]
- [ ] ✅ Install Fortune Auto 500 Series coilovers (front + rear) — [FA500-E36](https://www.fortuneautosuperstore.com/fortune-auto-500-series-coilovers-for-bmw-3-series-e36/), $1,928
  - > ⚠️ **Pitfall:** Set ride height before torquing pinch bolts — you cannot adjust after. Start at mid-range and corner-balance at alignment shop. Alignment required after this step.
- [ ] 🔧 Install Revshift full poly bushing kit throughout
  - > ⚠️ **Pitfall:** Poly bushings require grease at install and periodic re-greasing. Dry poly bushings squeak constantly and wear unevenly. Use the Revshift-supplied grease or equivalent poly-compatible lubricant.
- [ ] ✅ Schedule alignment after coilovers (shop)
- [ ] 🔧 **Swap E36 M3 trailing arms** during subframe-out Phase 1 work — subframe is already removed for reinforcement
  - Source from 1996–1999 US E36 M3 or Z3M (same arm, more Z3M supply). ~$300–500/pair (eBay/LKQ/salvage)
  - **OEM part numbers:** Left `33322227985` / Right `33322227986` — 1996–1999 E36 M3 and 1996–2002 Z3M (source: [RealOEM](https://www.realoem.com/bmw/enUS/showparts?diagId=33_1004&id=BG93-USA-05-1999-E36-BMW-M3)). New OEM discontinued; source used only.
  - M3 arms use larger wheel bearings and M3 hubs — required for Born2Drift halfshaft fitment and hydro handbrake bracket bolt pattern
  - > ⚠️ **Pitfall:** Trailing arm swap must happen while subframe is out. Once the subframe is back in, this becomes a major teardown. Do not skip it at Phase 1.
- [ ] 🔧 **Install VAC Motorsports billet differential cover** during Phase 1 subframe-out window   [DRIVETRAIN · DIFFERENTIAL]
  - Diff is already exposed while trailing arms and halfshafts are out — ~30 min incremental
  - Steps: drain gear oil → unbolt old cover → clean mating surface → install billet cover → transfer speed sensor → refill with gear oil. No internal diff disassembly.
  - Benefits: increased fluid capacity + cooling fins (LSD clutch pack protection during sustained drifting), temp sensor port (MaxxECU analog input for diff temp logging), AN fittings for future external cooler, reinforced mounting ears (eliminates OEM cast ear failure mode)
  - Source: [VAC Motorsports Philadelphia](https://store.vacmotorsports.com/) — local (2501 Snyder Ave, 215-462-4666). ~$150–200 est. Compatible with 188mm Euro 328i diff.

### Front Suspension Geometry  [SUSPENSION · STEERING]

> **Geometry stack order:** Do steps 1 → 2 → 3 → 4 in order — each step builds on the previous. Steps 1–3 are geometry correction; step 4 (SLR Mini Kit) is the mild angle kit on top of corrected geometry.

- [ ] ✅ **Source E36 M3 spindles/uprights** (used, from donor car or eBay — ~$150–300)
  - M3 spindle reduces KPI vs non-M, raises roll center ~20mm, and improves camber gain curve
  - **Part number reference:** E36 M3 front spindles differ from non-M — confirm M3 origin before buying (non-M spindle looks similar but has different ball joint taper and height)
  - Compatible with E36 non-M control arms (same ball joint taper as non-M arms)
  - Source alongside M3 hubs if doing a 5-lug upgrade — same donor car, save on shipping
  - > ⚠️ **Pitfall:** Non-M E36 and M3 spindles look very similar. Confirm with seller they're pulling from an actual M3 — wrong part wastes the geometry benefit of the swap entirely.
  - **Reference:** [MRT Engineering Geometry Guide p.4](https://mrtengineering.fi/pages/the-ultimate-front-suspension-geometry-guide-for-bmw-e30-e36-e46-by-mrt-engineering-page-4) for KPI/caster delta between spindle variants
- [ ] 🔧 **Install offset FCAB** when fitting Revshift kit — use **offset variant** (not centered)
  - Offset FCAB adds ~1° caster on non-M control arms. Low cost, reversible.
  - Non-M E36 uses centered FCABs from factory. M3 used offset eccentric FCABs. Installing offset bushings in non-M brackets is a direct swap — same inner diameter.
  - **Revshift part:** Specify "offset" at order time — Revshift sells both centered and offset for E36
  - > ⚠️ **Pitfall:** If the Revshift bushing can spin in its retainer after install, this is a known issue with poly offset FCABs. Fix: roughen the outer diameter of the bushing slightly with sandpaper before pressing in. Ref: [FCP Euro FCAB install guide](https://www.fcpeuro.com/blog/how-to-install-revshift-offset-fcabs-bmw-e30-e36-z3)
  - **Reference:** [Garagistic FCAB Guide](https://garagistic.zendesk.com/hc/en-us/articles/360051177154-Offset-vs-Centered-Front-Control-Arm-Bushings-and-Control-Arm-Swap-Guide) for bushing compatibility matrix
- [ ] 🔧 **Install adjustable strut tops / camber plates** (Ground Control or Vorshlag — ~$350–500)
  - Adds caster offset on top of FCAB to reach 6–7° total caster
  - **Camber note:** Do NOT use strut tops as primary camber adjustment — tilting the strut changes KPI. Use lower strut mount spacers (~0.3° camber change per 1mm, no KPI change) for static camber setting. Strut tops are for caster.
  - > ⚠️ **Pitfall:** Many alignment shops will default to using the camber plates to set camber and leave caster alone. Communicate explicitly: "Set camber via lower spacers, set caster via strut top position."
- [ ] 🔧 **Install SLR Mini Kit** ([slrspeed.com](https://slrspeed.com/products/e36-m3-bmw-mini-kit-roll-center-steering-quickening-angle-kit-for-both-drift-race)) — $805.04
  - Replaces outer ball joint with Teflon-lined spherical bearing; adds SLR steering plate + adjustable Ackermann system + SLR Lollipop FCAB
  - **35mm roll center correction** + bump steer tuning baked in
  - **Steering quickening ~40%** (28–30% fewer turns lock-to-lock) — the main street tradeoff; will feel noticeably more responsive at highway speeds
  - **Ackermann setting:** Set to **Race position** for street use (positive Ackermann = natural behavior). Flip to **Drift position** for track sessions (zero Ackermann = parallel wheels at lock).
  - **At order:** Specify M3 knuckles + your control arm type — SLR requires this info to configure the lollipop correctly
  - **Compatible with M3 knuckles.** Do NOT substitute Wisefab if running M3 knuckles — Wisefab is explicitly incompatible.
  - > ⚠️ **Pitfall:** Steering quickening is real and permanent (until kit is removed). Budget one session to re-calibrate your inputs before pushing hard — particularly for highway lane changes.
  - > ⚠️ **Pitfall:** SLR may hold the order until you confirm your control arm type. Reply to their email promptly.
- [ ] ✅ **Final alignment after full geometry stack** (shop with geometry knowledge — not a tire shop)
  - **Target:** Front camber -2° to -3° (via lower spacers); caster 6°–7°; front toe 1/8" out; rear toe 1/16"–1/8" in
  - Find an alignment shop familiar with drift or track builds — standard shops will try to return to OEM spec

### Brakes  [BRAKES]
- [ ] 🔧 **Install Porsche 996 Brembo 4-piston front calipers** via [RallyRoad E36 M3 Front BBK Adapter Brackets](https://rallyroad.net/products/bmwe36m3frontbbkadapterbrackets) — $224.95
  - Calipers: 1999–2004 Porsche 996 (non-turbo), Boxster-S, or Cayman-S. PN `996.351.425` (L) / `996.351.426` (R). Source used: ~$200–300/pair
  - ⚠️ E46 330i calipers do **not** fit E36 M3 knuckles — confirmed incompatible ([R3VLimited thread](https://www.r3vlimited.com/board/forum/e30-technical-forums/suspension-unsprung/brakes-subframe-arms/386832-e46-330i-brakes-with-e36-m3-knuckles))
  - **17" wheel machining required:** 12mm must be turned off the caliper mounting boss — not DIY. Options: RallyRoad machining add-on (send calipers with bracket order) or VAC Motorsports Philly (215-462-4666)
  - **Rotors:** E46 M3 325×28mm (PN `34112282445`/`446`) — EBC GD or Zimmermann Sport ~$80–120/pair
  - **Braided lines:** [RallyRoad BBK Front Lines](https://rallyroad.net/collections/brakes/products/e36bigbrakekitfrontlines) — $64.95
  - > ⚠️ **Pitfall:** Machine the calipers before the bracket arrives — caliper + bracket order together is the easiest path via RallyRoad's add-on service.
- [ ] 🔧 **Install OEM E36 M3 rear calipers (ATE single-piston) + 312×20mm rotors**
  - Source from same E36 M3 or Z3M donor as trailing arms — ~$80–150/pair (calipers)
  - Direct bolt-on to M3 trailing arm. No brackets, no machining.
  - Rotors: 312×20mm matched brand/style to front (EBC GD or Zimmermann Sport make matched front+rear sets)
- [ ] 🔧 **Install hydraulic handbrake** — Kakuma dual-caliper bracket (preferred path)
  - [Kakuma bracket](https://www.kakumaracingparts.com/product/bmw-e36-dual-caliper-bracket-kit/) — **€160 (~$175)** — bolt-on to M3 trailing arm, uses a second OEM E36 M3 rear caliper as the hydro unit
  - Alt: [SLG bracket](https://drifthq.com/products/slg-bmw-e36-m3-wilwood-dual-caliper-bracket-kit) ($335) + Wilwood Dynapro 4-piston PN 120-9703 (⚠️ M3 arm requires Dynapro 4-piston — NOT Dynalite)
  - Hydraulic MC + lever kit: ~$80–200. Total Kakuma path: ~$250–400
  - > ⚠️ **Pitfall:** Both bracket options bolt to the factory handbrake mounting point on the M3 trailing arm only — will not fit non-M arms.
- [ ] ✅ **Replace all factory rubber brake hoses with braided SS lines** — [Condor Speed Shop E36 kit](https://www.condorspeedshop.com/products/e36-stainless-steel-brake-line) — **$154–169**
  - BrakeQuip-made in Florida: PTFE inner core, 4-wire 304SS braid, DOT-compliant (MVSS-1006), burst-tested to 6,000 psi, lifetime warranty
  - Variants: Regular or Extended-length front lines (extended for lock kit/wide-angle kit clearance) + standard 2-piece or single-piece rear lines — all in the same price tier
  - **Note on BBK front lines:** The [RallyRoad BBK front lines](https://rallyroad.net/collections/brakes/products/e36bigbrakekitfrontlines) ($64.95) above are caliper-specific for the 996 Brembo fitment. The Condor rear lines are still required — they are not duplicated by the RallyRoad kit.
  - > ⚠️ **Pitfall:** Factory rubber hoses swell under sustained braking heat and degrade with age — spongy pedal is often the result. Do this before any track event regardless of caliper choice.

- [ ] 🔧 Install NES Engineering brake booster delete ([nesengineering.com](https://nesengineering.com/products/brakboster-delete?variant=57108005880191)) — $216
  - Changes pedal ratio 3:1 → 6:1 using stock master cylinder. **Do this at Phase 1** — firewall mods are easiest with the engine bay open.
  - Required mods: grind 2mm off firewall hole + pedal box, drill new hole in brake pedal. Irreversible — confirm before cutting.
  - **Phase 3 rationale:** 07K turbo produces no usable manifold vacuum under boost; deleting the booster eliminates the need for a vacuum pump entirely.   → vacuum dependency also affects [AIR] system planning
  - Optional: if pedal effort feels too high after adjustment, upgrade to Wilwood or Tilton 19mm master cylinder (~$150–200) — smaller bore raises line pressure per unit of pedal force.
  - > ⚠️ **Pitfall:** The pedal feel change is significant. Budget at least one track session to re-calibrate brake pressure before pushing hard. Threshold braking requires meaningfully more leg effort than OEM boosted.

### Steering — RHD Clearance  [STEERING]
- [ ] ✅ Install Condor Speed Shop Slim RHD Steering Shaft ([condorspeedshop.com](https://www.condorspeedshop.com/products/steering-shaft-conversion-e36)) — $308.99
  - **RHD fitment confirmed by manufacturer:** *"All E36's including right-hand drive models."*
  - **EPS compatible:** EPS motor acts on the column above the firewall; this shaft operates below the firewall to the rack — no interference between the two systems.
  - Keep both U-joint angles below ~15° at install — steep angles create torque oscillation that can feed through an EPS controller as noise.
  - Confirm column lower output spline size matches Condor shaft upper U-joint if running KPower/EPowerSteering column-core EPS (spline should be unchanged, but verify at order time).
  - > ⚠️ **Pitfall:** Mandatory before Phase 3 turbo work — do it now while the engine bay is accessible. The stock RHD rubber coupler will conflict with any top-mount manifold. Do not skip.

### Drivetrain — 8HP Swap  [DRIVETRAIN] ⚠️
> **Prerequisite:** MaxxECU should already be installed, EWS2 bypassed, and M52 running on MaxxECU before starting this section. See ECU & Chassis Wiring below.

- [x] ✅ Source ZF 8HP50Z or 8HP70Z (N57 diesel donor preferred for 8HP70) — **DONE: 2014 Ram 1500 5.7L HEMI 8HP70, $700, FB-R1, GEN1 confirmed (STUECKL 1087)**
  - > **Unit is 4WD body but TC was never present (confirmed by photo):** Rear face is the bare NV244 TC mounting flange with 23-spline output shaft exposed. RWD conversion = DomiWorks AWD→RWD adapter (SKU 22005004, ~$1,069) bolted to this face — see output step below. No TC removal needed.
- [x] ✅ Check 8HP hardware ID against MaxxECU compatibility list ([maxxecu.com](https://www.maxxecu.com/webhelp/advanced-8hp-hardware_identifier.html)) before committing — **DONE: GEN1 confirmed, TCU inferred `1034420288` (Bosch `0260550074`) — supported. Verify via ACDP-2 before flash.**
  - > **⚠️ Binary5 pre-confirmation required before bench flash.** Virtual clutch requires Binary5 (MAPS 004) firmware. Binary5 is still labeled "BETA 1" and firmware distribution is manual — MaxxECU sends files per-customer after receiving your TCU binary dump. When emailing `support@maxxecu.com` (already required for the bench flash), explicitly request: *"We need Binary5 (MAPS 004) for virtual clutch / analog pedal position support. TCU is Dodge 8HP70, CPU `1034420288` / Bosch `0260550074`. Please confirm Binary5 is available for this TCU before we proceed."* If MaxxECU only provides Binary4 for this unit, virtual clutch is unavailable — fall back to clutch kick (DIN digital input, binary behavior). In that case C2 / AIN 5 wiring is not needed for clutch function. Source: [maxxecu.com/webhelp/advanced-8hp-tcu_firmware.html](https://www.maxxecu.com/webhelp/advanced-8hp-tcu_firmware.html)
  - > **4WD origin — not a compatibility concern.** The 2014 Ram 4WD unit's Bosch TCU (`0260550074` / CPU `1034420288`) is the same hardware as the MaxxECU-tested "Dodge RAM Classic 5.7 2020 RWD" entry on the compat list — identical part number confirmed via [maktrans.net donor cross-ref](https://maktrans.net/8HP-DODGE-56). MaxxECU keys off TCU hardware ID, not vehicle drivetrain config. The 4WD vs RWD distinction is in the TC hardware bolted to the output, not in the TCU or gearset. **MaxxECU footnote: "transfer case control not supported — only the RWD part of the transmission will work."** For this build: TC is removed and replaced by the DomiWorks adapter. No TC CAN messages are expected or sent. This caveat is completely irrelevant. Source: [MaxxECU 8HP hardware identifier page](https://www.maxxecu.com/webhelp/advanced-8hp-hardware_identifier.html).
- [ ] 🔧 Remove stock Getrag manual transmission
  - > ⚠️ **Pitfall:** Rent a transmission jack — the Getrag is heavy and awkward to lower alone. Unbolt the driveshaft at the diff end first, not the trans end. Support the rear of the engine with a jack stand under the oil pan (use a wood block) once the trans is out.
- [ ] 🔧 Swap manual flywheel for N54 automatic flexplate (engine in car, trans removed)
  - > ⚠️ **Pitfall:** You need a flywheel lock tool to hold the crank from rotating while breaking loose the flywheel bolts. Do not use a screwdriver in the ring gear — you'll damage teeth you'll need for the starter. Torque the new flexplate bolts to spec with thread locker.
- [ ] ✅ Install George W. Hill M5x Starter Adapter + N54 starter ([Hill Performance](https://www.hillperformance.com/products/starter-adapter)) | [Demo video](https://youtu.be/bWVo-TpdQCQ)
- [ ] ✅ Install engine→8HP adapter plate (**path-dependent — confirm before ordering**)
  - > **BMW N57 path:** [PMC Motorsport M5x→N57](https://pmcmotorsport-shop.com/product-eng-2998-Gearbox-Adapter-Plate-BMW-M50-M52-M54-S50-S52-S54-BMW-ZF-8HP-8HP70-8HP50-GS6-53DZ.html) ~$350 or [DomiWorks M5x→N57 Std Tilt](https://www.domi-works.com/collections/8hp-adapter-kits) ~$420. **BMW N63 path:** [DomiWorks M5x→N63](https://www.domi-works.com/collections/8hp-adapter-kits) ~$1,353. **Dodge "Truck" path:** No confirmed production M5x→Dodge adapter exists. [Guru GA5](https://www.guruautowerks.com/post/faq-n54-n55-s55-to-8hp70-75-dodge-adapter-bmw-e9x-e8x-e6x) is N54/N55/S55→Dodge only (not M5x) — contact Guru to ask about M5x/E36 variant. Chatham CNC (mike@chathamcnc.com) is a custom fabrication fallback. Do NOT order PMC or DomiWorks M5x adapters if running the Dodge unit — those are BMW-bellhousing-specific.
- [ ] ✅ Install rear mount system — **Guru Autowerks Dodge 8HP Mount (BMW-style) + SLG E36/Z3 Crossmember**
  - > **Step 1 — Guru Autowerks Adjustable Dodge 8HP Transmission Mount (BMW-style):** [SLG — $250+](https://www.seemslegitgarage.com/product-page/adjustable-universal-dodge-8hp-transmission-mount) · [Guru Universal direct — $240](https://www.guruautowerks.com/product-page/universal-dodge-8hp70-75-rwd-mount-bracket) · [Guru E9x/E8x direct — $240](https://www.guruautowerks.com/product-page/ls-8hp70-75-upbrkt-bmw-e9x-e8x). **Select "E8X/E9X for Dodge 8HP Ram/Charg..." on SLG** — this IS the BMW-style (dropdown label truncated); covers both Ram AND Charger/Challenger; explicitly pairs with E36 and E46 crossmembers. Do NOT select Universal (flat mount, for custom crossmember fab). **Energy Bushing (+$50) = urethane NVH isolator** between mount and crossmember — stiffer than OEM rubber, less isolation but better positional accuracy; recommended for track/drift. Billet 6061, bolts to Dodge 8HP case via 4 "D1" bolts — **44 lb-ft with blue threadlock.** Set driveline angle, lock M10 socket cap screws at **55 lb-ft**, then M8 set screws at **6 lb-ft**. Conical spring washer cones must face bolt heads (critical).
  - > **Step 2 — SLG E36/Z3 BMW Transmission Swap Crossmember ([SLG](https://www.seemslegitgarage.com/product-page/e36-dct-crossmember), $205 — out of stock; notify available; also from [HPR direct](https://hpr-tuning.com) in NOK):** SLG: *"Fits wide variety of combinations, **even a Dodge 8HP70 with a Guru rear mount**"* — likely tested with Charger/Challenger (SLG's recommended US unit); 2WD RWD Ram 1500 8HP70 also exists but is rare in salvage. Guru mount covers both Ram AND Charger and attaches to the CASE BODY (D1 bolts), unaffected by DomiWorks adapter at TC face. No custom fabrication needed. **Call SLG (631) 905-9675** to confirm for this specific Ram 4WD + DomiWorks configuration. Laser-cut + CNC-bent steel, black zinc coated; use included spacers for height.
  - > **DomiWorks adapter output-end bracket:** The adapter housing has machined mounting bosses at the output end. Purpose: provides a tie point for a secondary brace from the adapter to the E36 tunnel, preventing the output housing from twisting or flexing under torque — useful because the adapter extends beyond the primary Guru case mount. Whether this brace is needed (vs. relying solely on the Guru + SLG combo) is determined at mock-up.
- [ ] 🔧 Lower 8HP into place, align to adapter plate and crossmember
  - > ⚠️ **Pitfall:** The 8HP is significantly heavier than the Getrag. Two people minimum. A transmission jack on a floor makes this manageable — doing it with jack stands and a floor jack is possible but risky for the ECU wiring on the unit.
- [ ] ✅ **Install DomiWorks AWD→RWD adapter** (bench job — TC was never present, rear face is already bare)
  - > **Product:** [DomiWorks Dodge 8HP70/75 RAM 1500 AWD→RWD Conversion Adapter Kit](https://www.domi-works.com/products/dodge-8hp70-75-ram-1500-and-ram-ecodiesel-awd-to-rwd-conversion-adapter-kit-1350) — SKU 22005004. **Pricing:** DomiWorks direct ~**$1,069 USD** (9,500 SEK, 2 in stock — order first); MaxxECU store $1,249.50 (out of stock until ~2026-08-15). Confirmed RAM 1500 8HP70 23-spline output ✅. Bolt-on aluminum adapter + high-speed bearing + SS2541 output flange. Dual output: **1350 yoke (SPICER #3-2-119) + Supra MKIV pattern.** Installs in under 1 minute.
  - > **Crossmember bracket on adapter = secondary output-end support.** Primary rear mount is the Guru Autowerks mount + SLG E36 crossmember (see step above). The DomiWorks bracket's role and connection to the tunnel is evaluated at mock-up after the primary mount is set.
  - > ⚠️ **Gasket/seal — confirm with DomiWorks before final torque:** DomiWorks does not call out a gasket in the kit contents; TC face-to-adapter interface likely uses a machined O-ring or RTV (not a separate paper gasket). Email DomiWorks for the sealing spec. Clean TC face thoroughly before installing adapter regardless.
  - > **No guibo flange swap needed** — 23-spline output → DomiWorks adapter → 1350 yoke → custom driveshaft. No BMW 96mm flange involved.
  - > ~~BMW N57 path: swap 105mm to 96mm guibo flange~~ — not pursuing BMW 8HP, low priority.
- [ ] ✅ Install DCT Shifter E36 unit ([dctshifter.com](https://dctshifter.com/)) — **4-wire digital connection to MaxxECU** — wiring: [`dct-shifter.wv`](https://github.com/wesleyxcooper/e36-wiring/blob/main/harnesses/dct-shifter.wv) ([diagram](https://htmlpreview.github.io/?https://github.com/wesleyxcooper/e36-wiring/blob/main/output/dct-shifter.html))
  - Models: 270GT Aluminum (compact), 290GTE Carbon (taller throw), 390GT (full-size) — all wire identically, choice is ergonomic
  - **Wiring (4 wires):** +12V switched (fused), GND, UP signal → MaxxECU DIN = **Transmission UP shift**, DOWN signal → MaxxECU DIN = **Transmission DOWN shift**
  - No CAN — pure momentary GND closure. Use shielded wire if routing near the engine harness loom.
  - **MTune:** Advanced → 8HP gearbox control → Shifter type → **8HP SEQ shifter**. Assign the two DINs above.
  - Standstill logic (brake held): single DOWN = Reverse | single UP = Drive | double-tap DOWN = Park | double-tap UP = Manual
  - While driving: UP/DOWN = manual gear requests. Unsafe shifts blocked automatically.
  - **Hold UP** → launch control and/or 8HP transbrake (configurable hold time) — your drift launch feature
  - > ⚠️ **Pitfall:** Do NOT wire an OEM BMW CAN shifter at the same time as the DCTShifter SEQ mode. The two paths conflict. BMW 10-pin end of #2287 is capped — that is the correct state.
- [ ] ✅ Install MaxxECU 8HP GEN1 CAN harness #2287 (BMW 8HP shifter variant) — **mandatory TCU link regardless of shifter choice** — wiring: [`8hp-can.wv`](https://github.com/wesleyxcooper/e36-wiring/blob/main/harnesses/8hp-can.wv) ([diagram](https://htmlpreview.github.io/?https://github.com/wesleyxcooper/e36-wiring/blob/main/output/8hp-can.html))
  - Pre-terminated: 2,100mm run → 12-pin GT150 (8HP TCU: CAN H/L, main 12V, wakeup, GND) + 1,800mm run → BMW F-series 10-pin CAN shifter connector (cap unused with DCTShifter)
  - **Power-up relay circuit — design before install:** TCU main 12V (GT150 pin A) must be live 10–15s **before** the wakeup signal (pin B) is applied. If both are on the same ignition-switched fuse, the TCU partially fails to initialize and SEQ mode won’t function. Use a power-hold relay: main 12V constant or long-hold; wakeup = key-on only.
  - **This harness stays untouched at the 07K swap.** It connects MaxxECU → 8HP TCU via CAN. The same MaxxECU and the same gearbox remain — only the engine harness changes.
  - > Reference: [MaxxECU 8HP Installation & Wiring](https://www.maxxecu.com/webhelp/advanced-8hp-installation_and_wiring.html)
- [ ] ✅ Flash/reflash 8HP via Yanhua ACDP-2 tool (rent ~$138 or buy ~$738)
  - > ⚠️ **Pitfall:** The flash procedure must be done before CAN control will function. Rent the tool if possible — single use in this build.
- [ ] ✅ Install HPR Setrab 8HP oil cooler kit
- [ ] ✅ Order custom 1-piece driveshaft ([Seems Legit Garage](https://www.seemslegitgarage.com/product-page/single-piece-driveshaft)) — $1,350; send exact measurement from trans output to diff input at ride height
  - > **Dodge 2WD "Truck" path:** Connection is 1350 U-joint via OEM Dodge flange PN `68417910AA` — NOT a guibo. Specify "Dodge 8HP70 RWD output" when ordering. [SLG "RAM 1350" yoke adapter](https://www.seemslegitgarage.com/product-page/3102-42x-t35-alfy-07-flange-yokes) ($70 billet, $70 cast) bolts direct to the 2WD output flange; SLG's custom shaft billet adapter interfaces to this.
  - > **BMW N57/N63 path:** 96mm guibo flange on trans → BMW guibo (flex disc) → driveshaft. Specify "BMW 8HP70 N57" or "N63" when ordering.
- [ ] ✅ **Verify differential** — stock Euro non-M 328i diff is **188mm case, 3.46** and is directly compatible with Born2Drift halfshaft kit. No swap needed unless upgrading ratio.
  - If upgrading to 3.15 for ratio preference: source Euro M3 S50 diff (188mm) only. ⚠️ US M3 S52 diff may be 210mm — NOT Born2Drift compatible. Field ID: **6 side cap bolts = 188mm ✓, 8 bolts = 210mm ✗**
  - If swapping: drain fluid first. Torque output flange nut to spec — some use a crush washer, verify for your unit.
- [ ] 🔧 **Install Born2Drift Heavy Duty E36 Halfshaft Kit** ([born2drift.net](https://www.born2drift.net/products/bmw-e36-rear-halfshafts-kit-drift-track-axles-heavy-duty)) — **€1,099 (~$1,190)** — install with trailing arms at Phase 1 subframe-out work
  - Includes 2 driveshafts + 2 diff adapters + 2 hub adapters
  - Confirmed: Euro 328i 3.46 diff (188mm) + US M3 trailing arms (M3 hubs OD 75mm / ID 42mm match) — fully compatible
  - > ⚠️ **Pitfall:** Do not reinstall trailing arms without the halfshaft kit installed — you'll have to pull them again to install later.

### Fuel System  [FUEL]
- [ ] ✅ Install Aeromotive 13129 FPR (return-style, adjustable)
- [ ] 🔧 Install Radium Engineering 20-1170 fuel pump hanger + Walbro F90000267
  - **Reference:** [Radium 20-1170 install instructions (PDF)](https://cdn.shopify.com/s/files/1/0887/4193/7449/files/19-0359.pdf) | [Wiring reference](https://github.com/wesleyxcooper/e36-wiring/blob/main/fuel-pump-hanger-reference.md) | [WireViz harness](https://github.com/wesleyxcooper/e36-wiring/blob/main/harnesses/fuel-pump-hanger.wv) | [Circuit schematic](https://github.com/wesleyxcooper/e36-wiring/blob/main/schematics/fuel-pump-pwm.py)
  - > ⚠️ **Pitfall:** Depressurize the fuel system before opening the tank. The E36 tank has a locking ring — a large channel-lock or a BMW ring tool (rent). Don't pry it with a screwdriver; you'll crack the plastic retainer.
  - > ⚠️ **Pitfall (hanger terminals):** Stainless stud terminals are live in a fuel-saturated environment. Clean contact surfaces before install. Use ring terminals + provided acorn nuts — anti-rotation feature prevents stud from spinning during tightening.
  - > ⚠️ **Swivel fittings:** Thread 20-1000-1010 (10AN ORB swivel) into pump-out port hand-tight first, then attach -10AN braided line before final torque — lets fitting rotate to correct routing angle before locking.
  - > ⚠️ **Wiring — PMU16 handles fuel pump PWM directly:** With the Ecumaster PMU16, output O4 (25A, PWM-capable) drives the pump via CAN command from MaxxECU — no separate DC SSR needed. The Crydom D1D40 SSR is removed from the build. **Circuit:** PMU16 O4 → pump(+) stud on Radium 20-1170 hanger (12 AWG). PMU16 BATT+ stud carries the load current. Pump(-) stud → dedicated chassis GND bolt — **not shared with ECU sensor grounds.**
  - **MTune:** Outputs → Output config → Function: **PWM fuel pump control** → frequency 100–500 Hz. Duty table: 65% idle / 80% cruise / 100% WOT. Phase 3 (07K): tune duty table to MAP — full duty under boost. Carries to 07K with no hardware changes.
- [ ] ✅ Install ethanol content sensor inline on fuel feed line ([Seems Legit Garage](https://www.seemslegitgarage.com/product-page/ethanol-content-sensor))   → digital input to MaxxECU [ECU]
- [ ] ✅ Install Bosch 440cc injectors (Phase 1 baseline)

### Ignition  [IGNITION]
- [ ] ✅ Install S54 coil-on-plug ignition coils

### Coolant System  [COOLANT]
- [ ] ✅ Install CSF aluminum radiator
- [ ] ✅ Install SPAL electric fan kit ([BimmerWorld Kit](https://www.bimmerworld.com/Cooling/Cooling_Kits/E36-Electric-Fan-Conversion-Kit-OBD2-328i-328is-323is-M3-1996-1997-1998-1999.html))
  - **Stage 1 — OEM ECU period:** wire included thermostat switch standalone → relay → fan. Triggers at ~87°C, no ECU required. Done.   → [ELECTRICAL]
  - **Stage 2 — At MaxxECU install:** add MaxxECU GPO wire to relay trigger in parallel (thermostat switch stays as failsafe); swap fan motor for SPAL 30102049 PWM variant (~$180–220) — same bracket, same pins. MaxxECU takes over temp staging, hysteresis, AC override, and variable speed.   → [ECU]
  - > ⚠️ **Pitfall:** Do not run PWM signal through the stock single-speed SPAL motor — swap the motor first. The bracket and harness from the BimmerWorld kit are reused.
  - > ⚠️ **Wiring:** The fan main power feed draws significant current — run it on its own dedicated circuit to the fuse/relay block, separate from all ECU signal wiring. The MaxxECU GPO trigger wire to the relay coil is fine near other digital outputs; the main fan power and ground are not.
- [ ] ✅ Install Mishimoto aluminum expansion tank

### Oil System  [OIL]
- [ ] ✅ Install Mishimoto MMOCF-BMW oil cooler fittings + Setrab/Mocal 10-row core + -10AN lines

### ECU & Chassis Wiring  [ECU · ELECTRICAL] ⚠️
> **Do this section before the 8HP swap.** Get the M52 running on MaxxECU with the Getrag still in place first.

- [ ] ✅ **Procure wire labeling kit before starting any harness work**   [ELECTRICAL · TOOLING]
  - **Brady M210 + PermaSleeve starter bundle** (~$130): [Amazon](https://a.co/d/3qZ8sAa) — printer + M21-125-C-342 cartridge (22–16 AWG, covers all signal wires)
  - **M21-250-C-342** (~$55–60): [Brady direct](https://www.bradyid.com/labels/bmp21-plus-series-permasleeve-heat-shrink-tubing-cps-3392081?part-number=m21-250-c-342) — 16–8 AWG, for 12 AWG fuel pump power runs
  - **M21-375-C-342** (~$55–60): [Brady direct](https://www.bradyid.com/labels/bmp21-plus-series-permasleeve-heat-shrink-tubing-cps-3392081?part-number=m21-375-c-342) — 12–4 AWG, for 10 AWG EWP power runs
  - Print WireViz wire designators on both ends of **every wire** before looming. Slide sleeve onto wire, run to position, shrink in place with heat gun after routing is confirmed.
  - Also label connector bodies and sub-loom exit points — anything you will need to identify during troubleshooting.

- [ ] ⚠️ **EWS2 bypass — required before MaxxECU will start the M52**   [ECU · ELECTRICAL]
  - The E36 M52 (OBD2, 1996+) has EWS2 immobilizer. The stock MS41/MS42 ECU handshakes with the EWS2 module via a dedicated wire to authorize fuel and ignition. MaxxECU has no EWS protocol — without bypass, the car cranks normally but will not fire (no injector or spark release).
  - **Option A (preferred):** EWS delete/emulator module — a small unit that sits in the EWS signal path and continuously returns the authorized signal. Available from BMW ECU tuning vendors. Clean, reversible, no harness modification.
  - **Option B:** Hard-wire bypass — disconnect the EWS signal wire at the ECU connector and permanently provide the authorized state. Irreversible on that harness, but fully functional and undetectable in operation.
  - Research this before ordering MaxxECU — confirm current preferred method with the MaxxECU community or SLG/MaxxECU support, as specifics vary by EWS version and harness.
  - > ⚠️ **Pitfall:** This is not a MaxxECU quirk — any replacement ECU (TurboLamik, MegaSquirt, etc.) faces identical EWS2 incompatibility. It is not optional.
- [ ] ✅ Mount MaxxECU Race unit (firewall or under dash — keep away from heat)
- [ ] 🔧 Install Deutsch AS / Souriau 8STA firewall bulkhead connector (47- or 79-way flanged receptacle)   [ELECTRICAL] — wiring: [`firewall-bulkhead.wv`](https://github.com/wesleyxcooper/e36-wiring/blob/main/harnesses/firewall-bulkhead.wv) ([diagram](https://htmlpreview.github.io/?https://github.com/wesleyxcooper/e36-wiring/blob/main/output/firewall-bulkhead.html))
  - > Mount on upper firewall near OEM harness grommet. **LHD: left (driver's) side. RHD: LEFT side (passenger side) — the OEM engine harness grommet is on the passenger side in both LHD and RHD E36; the driver's/right side on RHD contains steering column and brake/clutch pass-throughs and is also the exhaust side of a longitudinal 07K (SPA manifold exits right-hand side of engine). ⚠️ Do NOT place bulkhead connector on the driver's/right side in a RHD 07K build.** Custom aluminum plate or direct 54mm center-drill + flanged receptacle. Additive — no OEM connectors removed.
  - > Wire cabin side permanently (ECU Molex C1/C2 connectors, PMU16 CAN harness, cluster X20 signals). Engine harnesses each terminate in a mating plug on the engine side.
  - > **Pre-allocate 6 pins for e-pedal (Phase 3):** APS1 SIG, APS2 SIG, VCC1, VCC2, GND1, GND2. Leave engine-side pins unconnected until Phase 3; Deutsch AS supports field-adding pins at any time. This avoids running new wires through the firewall later.
  - > Spec and cost: see Enhancements doc `[ELECTRICAL]` — Firewall Bulkhead Connector section.

- [ ] 🔧 **Source Deutsch HDT-48-00 solid barrel crimper before starting the AS79 bulkhead build**   [ELECTRICAL · TOOLING]
  - The Deutsch AS79 uses **solid barrel size-20 contacts** requiring the **Deutsch HDT-48-00** 8-indent ratcheting crimper ([deutschconnector.com](https://www.deutschconnector.com/products/deutsch_connector_tools/deutsch_connector_crimp_tools/HDT-48-00/), ~$350–465). This is the Deutsch/TE Connectivity-specified tool — covers all three solid contact sizes (12, 16, 20) with no die swap. Budget alternative: JRready NEW-DT2 (~$169, Amazon `B09B562XDT`). Cannot substitute a generic open-barrel die or the IWISS IWS-2820M — wrong geometry produces cold crimps that pass pull-test but fail under vibration. ⚠️ "Daniels DMC TL-10" was previously listed here but that part number does not exist on any Daniels/DMC product page.
  - Also procure: flush cutters (Milwaukee 48-22-6106, Home Depot `205652216`, ~$20), rivnut tool (Astro Pneumatic 1442, Amazon `B003TODXQW`, ~$71) — both used constantly during harness work and board mounting regardless of bulkhead choice.

- [ ] 🔧 **Mount and wire Ecumaster PMU16 power management unit**   [ELECTRICAL · POWER DISTRIBUTION]
  - Replaces: relay board, mini blade fuse block, and Crydom D1D40 SSR — one unit handles all
  - **Power path:** BATT+ → (optional 4-post cutoff) → ANL main fuse (≤18 in of battery) → PMU16 M6 BATT+ stud
  - **IGN sense:** IGN-switched +12V → PMU16 pin 7 (+12V SW) — switches PMU on/off with key
  - **GND:** PMU16 GND lug → chassis GND stud (M8, engine bay)
  - **CAN:** PMU16 CAN2 H/L → MaxxECU CAN1 H/L (twisted pair, 22 AWG). Load MaxxECU.canx template in PMU software. Configure MaxxECU MTune: Configuration → CAN settings → Data transmission → enable.
  - **Output channel assignments:** O1 ECU logic power · O2 coil+inj supply · O3 radiator fan (PWM) · O4 fuel pump (PWM — replaces Crydom SSR) · O5+O14 EWP parallel (50A combined) · O6 condenser fan · O7 AC relay coil
  - **Post-shutdown EWP:** Program PMU16 to hold O5 active after key-off until CLT < 70°C CAN message from MaxxECU (or 3-min fallback timer) — no MaxxECU power-hold relay needed
  - **Programming:** requires Ecumaster USB-CAN adapter ($85) for initial setup via PMU software
  - Docs: [PMU16 manual](https://www.ecumaster.com/files/PMU/PMU_Manual.pdf) · [pinout v1.2](https://www.ecumaster.com/files/PMU/PMU-16_Pinout_v1.2.pdf) · [MaxxECU integration](https://www.ecumaster.com/files/ADU/AN/maxxEcu.pdf) · `e36-wiring/harnesses/power-distribution.wv`
  - > ⚠️ **Pitfall:** PMU16 CAN2 bus must be terminated at both ends (120Ω). PMU16 has software-controlled termination on CAN2 — enable it in PMU config. Verify MaxxECU CAN1 termination. Unterminated CAN causes intermittent dropouts that are hard to diagnose at the track.

- [ ] 🔧 **Battery cutoff switch — optional, install only if track/org rules require it**   [ELECTRICAL]
  - Not required on a dual-duty street/drift car with a working ignition key. Check your specific event org's rules before buying.
  - If required: must be **4-post** (Moroso 74108 or equiv), NOT 2-post. A 2-post switch only disconnects the battery; with an alternator fitted the car keeps running. The 4-post disconnects battery and alternator simultaneously.
  - Power path if installed: BATT+ → CUTOFF_4POST → ANL main fuse (≤18 in) → PMU16 M6 BATT+ stud. Alternator B+ also routes through the switch.
  - Wiring reference: `e36-wiring/harnesses/power-distribution.wv` — CUTOFF_4POST connector.

- [ ] 🔧 **Verify ground straps; run MaxxECU engine GND to cylinder head**   [ELECTRICAL]
  - **Required per MaxxECU GEN2 RACE quick-start guide:** ECU engine GND pin → cylinder head. Battery negative → chassis. Engine → chassis via factory bonding strap.
  - Keep the M52 factory engine block → chassis bonding strap. Verify all lugs are clean metal (no paint under lug, star washer, tight nut). This strap is the starter and alternator current return path.
  - **Optional:** dedicated battery negative → engine block direct cable (4 AWG, belt-and-suspenders for builds where factory straps are removed). Not required while factory straps are clean.
  - Full grounding rules: `e36-wiring/docs/harness-build.md` Power & Ground Rules section.

- [ ] 🔧 Resolve M52 VANOS cam sensor connector before connecting harness   [ECU · ENGINE]
  - The MaxxECU M50 terminated harness uses the non-VANOS M50 cam sensor connector. The M52 VANOS head uses a **different connector**.
  - **Option A (recommended):** Swap sensor to BMW PN `12141726590` — direct fit to M50 harness connector, no harness modification.
  - **Option B:** Add adapter pigtail between M52 sensor and M50 harness connector.
  - Without this: no cam/home signal → MaxxECU cannot resolve firing order → no-start. Confirm before first start attempt.
- [ ] 🔧 Connect MaxxECU M50 terminated engine harness to all engine sensors — wiring: [`maxxecu-m52.wv`](https://github.com/wesleyxcooper/e36-wiring/blob/main/harnesses/maxxecu-m52.wv) ([diagram](https://htmlpreview.github.io/?https://github.com/wesleyxcooper/e36-wiring/blob/main/output/maxxecu-m52.html))
  - > Reference: [MaxxECU M50 Harness Docs](https://www.maxxecu.com/webhelp/wirings-terminated_engine_harness-bmw_m50.html) | [22RPD E36 OBD2 Chassis Adapter](https://22rpd.com/shop/product/127)
  - > **Harness pinning/depinning reference:** [`e36-wiring/docs/harness-build.md`](https://github.com/wesleyxcooper/e36-wiring/blob/main/docs/harness-build.md) — connector family tool matrix, depin procedures per connector type, 3B0973703G cam/crank label warning, and bench test sequence. ~200–230 pin insertions across all harnesses. Never sleeve before bench test passes.
  - > ⚠️ **Harness looming discipline — plan before you sleeve anything:**
    - **Loom together:** Engine sensor inputs (CLT, IAT, TPS, MAP, knock, PST-F1) as one sensor sub-loom. Injector wires as one sub-loom. Coil primaries as one sub-loom. The sensor sub-loom and the injector/coil sub-looms share the same general route but go into **separate sleeves** — same destination, different wraps.
    - **Keep apart — crank and cam triggers:** Most noise-sensitive wires in the system. Shielded wire, own sleeve, physically away from injector drives and coil primaries. The MaxxECU M50 harness already shields these — do not unsheath or re-loom them alongside anything else.
    - **Keep apart — wideband O2 signal:** The signal wire from the wideband controller to MaxxECU analog input is extremely sensitive. Shielded, own run, away from coil primaries and injector wires. ⚠️ **This isn't yet backed by the wiring repo for the M52 phase** — `maxxecu-07k.wv` now models this correctly (shield fixed in `docs/wiring-bom.md` pass), but `maxxecu-m52.wv` has no WBO2 connector/cable/shield modeled at all, only reserved ECU pins. Author it before Phase 1 harness build — see TODO block at top of `maxxecu-m52.wv`.
    - **Full shielding reference:** see [`e36-wiring/docs/wiring-bom.md`](https://github.com/wesleyxcooper/e36-wiring/blob/main/docs/wiring-bom.md) "Shielded runs" section for the complete, consolidated list across every system (required vs. recommended vs. explicitly-not-shielded) — this repo doc is authoritative per its own README convention; don't re-derive shielding decisions from scattered notes in this checklist.
    - **Keep apart — high-current feeds:** Walbro pump, SPAL fan, 12V AC compressor — each runs its own dedicated circuit back to the fuse/relay block. Never bundle high-current power feeds alongside ECU signal wires, even in the same loom.
    - **CAN bus (8HP):** CAN H / CAN L must be twisted pair inside their sleeve at all times. Treat the MaxxECU 8HP GEN1 CAN harness as a sealed sub-loom — MaxxECU CAN port → 8HP connector, nothing else shares that sleeve. Do not untwist.
    - **Ground strategy (per MaxxECU GEN2 RACE quick-start guide):** (1) Battery negative → chassis stud. (2) Engine block → chassis via factory M52 bonding strap — keep it, verify it is clean (no paint under lug, star washer). (3) MaxxECU ENGINE GND pin → cylinder head — MaxxECU's own mandatory requirement. ECU sensor GND pins are NOT chassis or engine ground; they connect only to sensors returning signals to the ECU. Optional: dedicated battery negative → engine block direct cable (belt-and-suspenders; not required while factory straps are clean). **Radlok option:** Install Amphenol Radlok 8mm M8×1.25 Male studs ([Racing History Co.](https://www.racinghistorycompany.com/product/radlok-8mm-stud-m8x1-25-male/), ~$15 CAD ea) at each GND strap bolt point (head + block). Tool-free press-lock disconnect makes engine swap GND disconnects instant — no wrench needed. **Also need the mating cable-side connector** — Racing History Co. only sells the stud adapter; the crimp connector that terminates the GND strap and locks onto that stud is genuine Amphenol `RL00801-35BK` (black, 35mm²/~2AWG), sourced from [TTI](https://www.tti.com/content/ttiinc/en/manufacturers/amphenol/products/amphenol-industrial-radlok-series.html) (~$7.40–11.56/ea) — see Phase 3 ECU & Engine Harness section of the Project Plan for full detail. Secure cable clamp within 3 cm of each Radlok; inspect annually on a street car.
    - **X20 planning:** Decide which signals cross the X20 bulkhead connector before building anything. MaxxECU outputs that drive the OEM cluster (RPM, coolant temp, oil pressure) get their own dedicated X20 pins — do not share pins with other circuits.
- [ ] ⚠️ Wire MaxxECU to E36 chassis: ignition switch trigger, X20 bulkhead connector for cluster outputs (RPM, coolant temp, oil pressure)   → X20 is the chassis harness interface [ELECTRICAL]
  - > Reference: [BMW E36 X20 Pinout (Scribd)](https://www.scribd.com/document/649295040/bmw-e36-x20-pinout)
  - > ⚠️ **Pitfall:** The X20 is the single most time-consuming part of the ECU install. Budget a full day just for this connector. Map each wire before cutting anything. The cluster will show no data if X20 outputs are wrong — this is not dangerous, just frustrating to debug.
- [ ] ⚠️ Wire 8HP → body harness integrations via MaxxECU GPO — **Getrag removal eliminates the mechanical reverse switch; all gear state now lives in MaxxECU via 8HP CAN**   [ELECTRICAL · DRIVETRAIN]
  - **Reverse lights:** Trace the E36 body harness wire that previously ran to the Getrag reverse light switch (typically in the tunnel loom, routes to X20 or directly to the reverse light bulkhead). Run a new wire from a dedicated MaxxECU GPO to that circuit via a small relay. In MTune, configure the GPO: Output function = **Reverse light** (or "Transmission Reverse" if available) — activates any time 8HP CAN reports Reverse gear. This is a direct functional replacement — the body harness side (bulb, fuse) is unchanged.
    - > ⚠️ **Pitfall:** Do not splice the GPO wire directly into the bulb circuit without a relay — the E36 reverse light current is higher than a MaxxECU GPO is rated for. GPO drives relay coil; relay switches bulb power.
  - **Starter inhibit:** The Getrag had no neutral safety switch (clutch switch handled start inhibit). With 8HP you want the starter to only engage in Park or Neutral. MaxxECU handles this internally — configure MTune: Starter control → inhibit crank in all gears except P and N. No separate hardware needed if MaxxECU is in the starter crank circuit; add a GPO-controlled relay if the stock E36 start circuit bypasses MaxxECU.
  - **Speedometer / VSS:** E36 VSS comes from the ABS wheel sensors, not the transmission — **no change required.** MaxxECU independently reads vehicle speed from 8HP CAN for its own shift logic; the cluster VSS path is chassis-based and unaffected by the gearbox swap.
  - **Backup camera (if added later):** Trigger from the reverse light relay switched output — already handled by the GPO above, zero additional wiring needed.
- [ ] ⚠️ Install 8HP virtual clutch pedal position sensor and wire to MaxxECU C2 AIN 5   [ELECTRICAL · DRIVETRAIN]
  - Retain the E36 clutch pedal assembly in the cabin. Disconnect the hydraulic pushrod from the master cylinder and cap the cylinder port — pedal now freewheels.
  - Add a return spring to hold the pedal at the top of its travel when unloaded.
  - Mount a 0–5V rotary position sensor (Hall effect or potentiometer) at the clutch pedal pivot. Sensor arc must span the full pedal travel from rest to floor.
  - Wire 3-wire run (all cabin-side — no bulkhead crossing): **+5V** and **Sensor GND** to MaxxECU C2 sensor supply pins; **Signal** to **C2 pin G3 (AIN 5)**.
  - > **C2 is required** (not optional). C1 AIN 1–4 are fully allocated. Molex 32-pin C2 connector: MaxxECU store ID 1982, $32.25.
  - > **Requires Binary5 8HP TCU firmware + MTune 1.157+.** Source: [maxxecu.com/webhelp/advanced-8hp-virtual_clutch.html](https://www.maxxecu.com/webhelp/advanced-8hp-virtual_clutch.html)
  - **MTune config:** Advanced → 8HP → 8HP clutch control → `Enabled, Virtual clutch`. Analog Inputs → AIN 5 → type = `0-5V`, function = `Clutch Position`. Calibrate: 0% = pedal fully up, 100% = pedal fully depressed.
  - Set clutch **clamp start** and **clamp end** values carefully — these control the pressure ramp end-points. A 5% slack is applied at both ends by the firmware; the 0–100% position value interpolates between clamp start and end.
  - > ⚠️ **Pitfall:** Do not skip clamp calibration. All ramp features (including virtual clutch) use the clamp start/end values. Incorrect values = wrong clutch pressure at pedal extremes. Verify with a slow pedal sweep while watching AIN 5 % in MTune live data before driving.
  - **Phase carry-through:** This circuit is cabin-side and engine-agnostic. At the 07K Phase 3 swap, no re-work is required — same pedal, same sensor, same AIN 5 assignment.
- [ ] 🏭 Weld 18mm × 1.5 O2 bung into exhaust (shop — 15 min job)
- [ ] ✅ Install Bosch LSU 4.2 wideband O2 sensor
- [ ] ⚠️ Load MaxxECU M5x base map — first start commissioning
  - > ⚠️ **Pitfall:** Do not attempt a first start without a fire extinguisher at arm's reach, a functional fuel system pressure check, and all coolant hoses fully seated. A lean first start on a warm engine can detonate on the first pull.

### Safety Equipment  [CHASSIS]
- [ ] 🏭 Weld in Autopower U-Weld roll bar + harness bar (shop — safety-critical)
  - > ⚠️ **Pitfall:** HPDE venues will tech-inspect your roll bar. The bar must be welded, not bolted, and must be within the rollover envelope. A fabricator with cage experience is not optional here — a poorly placed hoop is worse than none in a rollover.
- [ ] ✅ Mount Kidde Halotron 2.5lb fire extinguisher within driver reach

---

## Phase 1A — Turbo M50 (Option A Path)

> Complete all Phase 1 Foundation steps first. These steps assume the M50 iron block is the starting engine.

### Head & Valvetrain  [HEAD/VALVETRAIN · MACHINING]
- [ ] 🔧 Install ARP 2000 head studs (head off — machine shop for surface check first)
  - > ⚠️ **Pitfall:** ARP studs require ARP Ultra-Torque lube on the threads — not engine oil. Torque in the sequence specified by ARP, not BMW's stock sequence, and re-torque hot after first heat cycle.
- [ ] 🔧 Install Athena cut-ring head gasket
  - > ⚠️ **Pitfall:** Cut-ring gaskets require a deck that is flat to within 0.001". Get a machine shop to check deck flatness before installing. A warped deck will blow the gasket under boost regardless of head stud torque.

### Rotating Assembly  [ROTATING-ASSEMBLY]
- [ ] 🔧 Install Maxpeeding or FCP H-beam connecting rods
- [ ] 🔧 Install VAC ATI harmonic damper
  - > ⚠️ **Pitfall:** The ATI damper requires a specific installation tool to press it onto the crank snout. Do not hammer it on. Damper must be fully seated against the crank shoulder or the belt will run out of true.

### Oil System  [OIL]
- [ ] 🔧 Install VAC M50 oil pump upgrade kit

### Fuel System  [FUEL]
- [ ] ✅ Upgrade injectors to Siemens Deka 630cc EV1 × 6 (swap into stock fuel rail)

### Air & Boost  [AIR]
- [ ] ✅ Install K64 RHD AC+ turbo manifold ([K64 Performance](https://k64performance.com/))
- [ ] ✅ Install K64 RHD downpipe
- [ ] ✅ Install Turbosmart boost solenoid (wire to MaxxECU GPO)   → [ECU]
- [ ] ✅ Install CXRacing E36 FMIC kit (core + piping)
  - > ⚠️ **Pitfall:** Test-fit all charge piping with silicon couplers loose before tightening anything. The core position determines the pipe routing — finalize core location first, then cut and clamp.

### ECU  [ECU]
- [ ] 🏭 Dyno tune (MaxxECU turbo M50 map — SHOP required)
  - > ⚠️ **Pitfall:** Do not street-tune a boosted car. A turbo map on E85 without a dyno session is a recipe for detonation under boost. Base map gets it running; tuner gets it safe and powerful.

---

## Phase 1B — NA M52 (Option B Path)

> Complete all Phase 1 Foundation steps first.

### Head & Valvetrain  [HEAD/VALVETRAIN]
- [ ] ✅ Confirm alloy M52 block (not iron — check casting, VIN decode)
- [ ] ⚠️ Install Schrick 264/248 camshafts + Alien Engineering solid shims
  - Sub-steps:
    - [ ] Remove VANOS unit (retain all hardware — it goes back on)
    - [ ] Remove existing cam carriers and cams
    - [ ] Measure existing valve clearances with feeler gauge (record all 24)
    - [ ] Calculate required shim thickness per valve (target: 0.15–0.20mm cold clearance)
    - [ ] Install Alien Engineering solid shims into factory hydraulic lifter bodies
    - [ ] Install Schrick cams and cam carriers
    - [ ] Re-verify all 24 valve clearances — must be within spec before proceeding
    - [ ] Reinstall VANOS unit
  - > Reference: [Alien Engineering solid shim video (YouTube)](https://www.youtube.com/watch?v=KtvxWkbvINI) | [E36 cam/lifter removal (YouTube)](https://www.youtube.com/watch?v=wRnqy-7dT28)
  - > ⚠️ **Pitfall:** Valve clearance measurement is the hardest part of this job. A feeler gauge that is too thick will not slide through — don't force it. If you're unsure between two shim thicknesses, go to the tighter (thinner) side, not looser. Wrong shim sizing causes valve float or valve-to-piston contact at high RPM.
  - > ⚠️ **Pitfall:** The M52TU VANOS uses a different cam sensor connector than the non-VANOS M50. Verify the MaxxECU harness has the correct connector for your specific head before buttoning everything up.

### Oil System  [OIL]
- [ ] 🔧 Install VAC M52TU oil pump upgrade kit

### Air  [AIR]
- [ ] ✅ Swap M50 intake manifold

### ECU  [ECU]
- [ ] 🏭 Dyno tune (MaxxECU NA M52 map — SHOP required)

---

## Phase 2 — 07K Engine Build (Offline)

> Build this while Phase 1A or 1B is running. The car stays on the road.

### Sourcing & Machine Shop  [ADMIN · MACHINING]
- [ ] ✅ Source 07K donor block (iron: BGP/CBUA/CEPA — confirm casting codes)
  - > ⚠️ **Pitfall:** Verify early forged crankshaft (pre-2007 production). Later cranks are cast. A cast crank is not safe at 9,000 RPM under boost. Cross-reference build date from VIN with known forged crank production range before purchasing.
- [ ] ⚠️ **Decide: DomiWorks or Chatham CNC for 07K→8HP adapter** — get quotes from both before committing
  - **DomiWorks** ([domi-works.com](https://www.domi-works.com/collections/8hp-adapter-kits)) — ~$1,200–1,397. Provide 07K block code + 8HP variant; non-returnable. Requires VW starter swap (068911024GX). Includes SS2541 billet flywheel.
  - **Chatham CNC** (@chathamcnc / mike@chathamcnc.com / 919-740-9748 / [chathamcnc.com](https://www.chathamcnc.com/contact.html)) — custom kit: adapter plate + adapter flex plate + modified TC. Quote required. Confirm whether N54 starter is reused or a VW starter is needed.
- [ ] ⚠️ **Confirm G25-660 RR hood clearance** — while the engine bay is still open with the M5x in place
  - Turbo is now G25-660 RR (decided — smaller frame than G30-770, hood clearance concern was a primary driver). Test-fit SPA MK5 manifold position + G25-660 mock-up (or actual turbo) and verify clearance to hood line. This is a **confirmation step**, not a decision point — clearance issues at this stage resolve with a bubble/vented hood, not a turbo change.
- [ ] ✅ Place BBG billet valve cover + timing cover + coolant flange combo order early (~6-week lead time — order at Phase 2 kickoff, not at assembly time)
- [ ] ✅ Order intake cam adjuster stretch bolts early — **currently hard to source through VW directly**
  - Cross-ref: **N91042802** (DAZA/Audi/Porsche spec — M12x1.25x60x30, slightly longer, confirmed working by 07K community) — [$9.19/ea at FCP Euro](https://www.fcpeuro.com/products/audi-camshaft-sprocket-bolt-genuine-audi-n91042802). Order 2.
  - Alt: **N91050202** (OES Timing Sprocket Bolt) — available at ECS Tuning
  - Also sourced through Porsche Cayenne/Panamera parts channels if VW is backordered
  - Reference: [07K Hard to Find Parts Wiki](https://the07k.wiki/wiki/Hard_to_Find_Parts)
- [ ] ✅ Order LPS titanium exhaust stud kit — **factory 07K studs are too short for any aftermarket manifold with a thicker flange**   [AIR · EXHAUST]
  - [LPS 07K Titanium Exhaust Stud Kit](https://lpsfab.com/products/07k-titanium-exhaust-stud-kit) — 6AL-4V aerospace titanium, 15 studs + nuts + washers. Titanium won't seize or corrode under sustained heat cycles. Order Phase 2, install at manifold fitment during Phase 3.
- [ ] ✅ Order MaxxECU 8HP GEN1 cable harness #2287 and DCTShifter — **order before Phase 1 8HP install, not at Phase 2**   [ECU · DRIVETRAIN]
  - [#2287 from LPS](https://lpsfab.com/products/maxxecu-8hp-gen1-cable-harness-bmw-8hp-shifter) ~$366–382 — consolidate order with oil pump mod send-in
  - [DCTShifter](https://dctshifter.com) — 270GT Aluminum / 290GTE Carbon / 390GT Aluminum (all wire identically). Active inventory, ships internationally.
- [ ] ✅ Inspect SPA pistons on receipt before sending to machine shop — **known QC variance in the community**
  - Check each piston crown for dents, casting flaws, or sloppy machine work on the ring grooves. A defective piston must be replaced before the bore is cut to size — the machine shop bores to your piston, not the other way around. Contact SPA for replacement if any unit is defective.
- [ ] ✅ Order King XP Tangless rod bearings (07K) — [SBPartsDirect](https://www.sbpartsdirect.com/category_s/305.htm) — $59.99 — hand to Euromotive at engine dropoff   [ROTATING-ASSEMBLY]
- [ ] ✅ **Order 5× TTRS oil squirters (`06J103154B`)** — hand to Euromotive at engine dropoff for install during short block assembly   [OIL · ROTATING-ASSEMBLY]
  - 4-hole banjo bolt (vs 2-hole stock BGP) + larger jet tip for higher-pressure spray — mandatory for forced induction (increased blowback pressure). Torque to **27 ft-lbs** per VW Erwin. Direct thread-in replacement. Also confirmed part: `06J103154AA`. Source: ECS Tuning, FCP Euro, or eBay.
  - Reference: [FB 07K Swap — oil squirter thread 1](https://www.facebook.com/groups/07kswap/permalink/3608094966023784/) · [thread 2](https://www.facebook.com/groups/07kswap/permalink/3608094966023784/)
- [ ] ✅ **Source 034-block full-circle thrust washers** for 360° mod — bring to Euromotive at engine dropoff   [ROTATING-ASSEMBLY · MACHINING]
  - Likely part: **Glyco `026 198 421`** (full-circle thrust washer set from the VW 026/034 inline-5 engine family — different from the 07K stock half-shell WHT000033). Available at FCP Euro.
  - ⚠️ **Confirm exact part number with Carson Heter (07K Swap FB group) or Euromotive before ordering** — the 034 block washer must physically fit the machined #4 main cap.
  - Bring alongside the YouTube reference video: [Five (5) Cylinder VW Thrust Washer Repair](https://www.youtube.com/watch?v=hCIZny5uc4Q)
  - Same XP tri-metal construction as the main bearings. **Procurement note:** Color-coded bearings for forged crank journal spec are frequently out of stock in the US — sourced via eBay Germany in at least one documented build. Verify King XP covers the correct journal sizing for your specific forged crank, and pre-order early.
- [ ] ✅ **Source Pierburg CWA400 (PWM version) — MaxxECU-controlled electric water pump — ✅ DECIDED: confirmed by @wingman703**   [COOLANT]
  - **Pierburg CWA400, not Davies Craig EWP150.** Confirmed by @wingman703 directly: "CWA400 controlled by the Maxx ECU." Brushless centrifugal OEM pump (BMW/VW) — 150 LPM @ 0.85 bar (vs 40 LPM for EWP150). MaxxECU controls pump speed via PWM GPO — no separate pump controller needed. One CLT sensor (MaxxECU) drives everything.
  - > ⚠️ **Version critical — must verify part number:** Pre-March 2024 = PWM version (MaxxECU-controllable). Post-March 2024 = LIN bus version (NOT directly PWM-controllable). **Source PWM version only:** Pierburg `7.07223.10.0` / BMW `11515A05704` / `11517563659` / `11517568594`. Do NOT accept Pierburg `7.03665.66.0` or BMW `11517604027` (LIN).
  - **Sourcing:** New ~$720 (Dedicated Motorsports); OEM BMW pull from eBay $50–150 used (verify PWM part# before buying).
  - **MaxxECU config:** PWM GPO at 680 Hz. Duty cycle map: 20% @ 60°C / 55% @ 85°C / 97% @ 105°C. Duty 13–85% = controlled speed; 86–97% = full speed. Wake pulse: MaxxECU must send ≥ 3ms high at ignition-on before CLT map kicks in — configure startup duty override.
  - **Power wiring:** PMU16 O5+O14 parallel (50A combined, 8 AWG each from PMU16 → CWA400 Pin 3). No external relay — PMU16 MOSFET outputs drive the pump directly. Connector: Kostal 2+2 (4-pin) — Pins 1/2 = signal (2.8mm terminals), Pins 3/4 = power (5.8mm terminals).
  - **Post-shutdown cooling:** PMU16 holds O5+O14 active after key-off until CLT < 70°C CAN message from MaxxECU (or 3-min fallback timer). No external power-hold relay needed — PMU16 handles this natively.
  - OEM pump `07K121011B` — bring to Euromotive, remove impeller only, housing stays. ⚠️ Belt-driven (accessory belt, not timing chain). Housing pulley freewheels passively in belt path.
  - > 🔄 **@wingman703 diverges:** full pump delete — removes OEM housing, welds off rear coolant port, deletes heater core (Miata track build, no cabin heat). This build retains housing-in-place **intentionally** to preserve cabin heat (street car).
  - **Wiring reference:** [github.com/wesleyxcooper/e36-wiring — ewp-wiring-reference.md](https://github.com/wesleyxcooper/e36-wiring/blob/main/ewp-wiring-reference.md)
- [ ] ✅ **Delete 07K EGR system — TWO separate operations; do on stand before Euromotive dropoff (or on sealed longblock post-delivery, before install)**   [AIR · COOLANT]
  - **⚠️ Mandatory for any boosted 07K.** EGR system must be fully blocked — both the freeze plug holes AND the actual EGR flow ports require separate treatment. Confirmed by @wingman703 (07K/8HP build).
  - **Operation 1 — Freeze plug hole replacement (front AND rear):**
    1. Remove both OEM pressed-in freeze plugs — under turbo EMAP they blow out
    2. Tap both holes **M14×2** — no drilling needed; hole accepts tap directly
    3. Install **M14×2 button head socket cap bolts** — button/round dome head only; rear location has zero clearance for standard or flanged hex head
    4. Seal threads with **Resbond 907TS Blue** (rated +2100°F / +1148°C) — NOT Loctite, NOT RTV
    5. Peen/stake bore edge around bolt with a punch after install
  - **Operation 2 — EGR flow port blanking (front AND rear, separate from freeze plug holes):**
    - The actual circular EGR flow ports on the block face (rubber-gasket seats, ~2 mounting bolts each) get **flat blanking plates + high temp sealant** — these are different from the freeze plug holes
    - Apply high temp sealant (Permatex Ultra Copper RTV or equivalent) around port perimeter; bolt blanking plate over each port — front and rear
    - Source or fabricate flat blanking plates to match EGR port bolt pattern (custom fab from 1/8" steel or 6061 aluminum, or source from 07K specialist)
  - **Parts:** M14×2 hand tap ~$20, M14×2 button head cap bolts × 2 ~$5–10 (McMaster `92949A533`), Resbond 907TS Blue ~$35, blanking plates × 2 (source/fab), Permatex Ultra Copper ~$12. Total ~$80–90.
  - > ⚠️ **Pitfall:** Standard hex or flanged hex head will not clear at the rear freeze plug location — button head only.
  - > ⚠️ **Pitfall:** Resbond 907 for the bolt threads only. Blanking plate faces use standard high-temp RTV (Permatex Ultra Copper). Do NOT use Resbond on a face seal — it's not an RTV.
- [ ] 🏭 Machine work (Euromotive-coordinated): bore inspection + deck flatness check + head pressure test + valve seat cut if using Inconel valves   [ROTATING-ASSEMBLY · HEAD/VALVETRAIN · MACHINING]
  - Euromotive sends block and head to their machine shop and bills you for the work. Not a separate shop engagement you manage.
  - > ⚠️ **Pitfall:** Do not start assembling until machine shop results come back. A bore out of spec or a head that won't hold pressure is a rebuild before the engine ever runs.
- [ ] 🏭 **Bring donor motor to Euromotive — full longblock build: disassembly → machine work → longblock assembly** — budget **~$1,050–1,900 labor** (+ head machine work)   [ROTATING-ASSEMBLY · HEAD/VALVETRAIN · MACHINING]
  - > ⚠️ **Oil pump note:** Pan will have been dropped pre-dropoff (crank inspection + LPS pump removal). Pan is reinstalled hand-tight, no RTV — Euromotive drops it again. Oil pump arrives separately from LPS (coordinate timing — LPS ships direct to Euromotive). Euromotive installs modified pump during longblock assembly.
  - Scope: disassembly + inspection (~$150–300) + bore/hone/deck (~$300–600) + short block assembly (~$400–600) + head assembly — springs/retainers/shims/lifters install (~$200–400). You take delivery of a **complete sealed longblock**. Do all bolted-on work (timing cover, oil system, intake, turbo, harness) yourself. **Hand to shop at dropoff:** King XP rod bearings, ARP-CVB1 head studs — shop installs these in the correct sequence during longblock build. **✅ Bring OEM water pump `07K121011B` — instruct Euromotive to remove impeller and install housing only.** Housing stays mounted and plumbed as coolant manifold; EWP handles pumping at Phase 3 install.
  - If donor motor has a cast crank, supply a separately sourced `07K105101E` forged crank — shop swaps it in, block and head are still fully usable from the donor.
  - Verify forged crank (drop lower steel sump, inspect counterweight parting line) **before** it goes in their door. Do not pay teardown labor on a cast-crank motor you didn't plan to replace.
  - [Euromotive Autohaus](https://www.eurohauspa.com/) — West Chester, PA · **(610) 416-5702** · VW/Audi/BMW specialist, engine rebuilds & swaps, authorized 034 Motorsports + Integrated Engineering dealer. Appointment-based.

### Storage & Transport  [ADMIN · LOGISTICS]

> **Crank verification (pre-Euromotive):** Flange stamp confirmed **`07K105101F`** (physical inspection) — partslink24 VIN lookup returned `07K105101E` incorrectly (parts catalog supersession artifact). `F` forged/cast status is **unconfirmed** — only `07K105101E` is community-confirmed forged ([Issam Abed, VWVortex #31](https://www.vwvortex.com/threads/has-anybody-ever-seen-a-forged-crank-with-the-updated-chain-from-the-07-12.6141117/)). **What to look for:** drop the lower steel sump, rotate crank, look at the unmachined flat faces of the counterweights — **forged = wide 1/8"–1/4" (3–6mm) band with visible grind marks; cast = thin ~1mm scribe line, no grind marks.** The difference is unambiguous in person. *(Source: [VW Vortex — telling a forged crank from a cast](https://www.vwvortex.com/threads/telling-a-forged-crank-from-a-cast.5516409/); Issam Abed VWVortex post #31)*

#### 07K Engine — Storage (Uninsulated Garage)
*Applies to donor longblock as-received and to sealed build longblock returned from Euromotive.*

**Immediately on delivery — on pallet (stand not yet available)**
- [ ] ✅ Leave on pallet — keeps engine off concrete; do not move without a hoist
- [ ] ✅ **Plug every port** — all 5 intake runners, all 5 exhaust ports, oil filler cap, dipstick tube, coolant inlet/outlet, all open sensor bungs. Summit Racing foam engine storage plugs by port size, or tape.
- [ ] ✅ Check oil level — if donor had oil, leave it in (protective). If dry or very low, add a quart of cheap motor oil to coat internals.
- [ ] ✅ **Fog the cylinders** — pull all 5 spark plugs, shoot fogging oil or motor oil from a squirt bottle into each bore, reinstall plugs
- [ ] ✅ Coat exposed machined surfaces (flywheel mating face, head deck if exposed, bare steel) with Fluid Film or CRC 3-36. WD-40 evaporates — not suitable for this.
- [ ] ✅ Cover with a moving blanket or breathable tarp — **not plastic** (traps condensation)

**Long-term — on stand (weeks to a year+)**
- [ ] ✅ Mount on [S&P adapter](https://s-pautomotive.com/product/07k-engine-stand-mount/) + [HF 1000 lb Engine Stand SKU 59201](https://www.harborfreight.com/1000-lb-capacity-engine-stand-59201.html) as soon as crane is available — keeps engine off concrete, in natural crank orientation — **S&P adapter PURCHASED** ($99). Attaches to dedicated **side-mount bosses on the exhaust side** of the 07K block (OEM engine mount location — confirmed: IE MK5/MK6 mount instructions place OEM mount on the RH/passenger/exhaust side in LHD; Race3 A4 kit confirms exhaust side has primary bosses, intake side is limited). In RHD E36 car-installed orientation (timing chain forward), exhaust side = **driver side (right)**. No load leveler needed for pallet→stand; straight vertical lift only. S&P fits 2" ID HF/Pittsburgh head tube — confirmed compatible with 59201.
- [ ] ✅ **Primary protection: [Zerust VCI Engine Storage Bag (24"×26"×46", Amazon ~$35)](https://www.amazon.com/Zerust-Engine-Storage-Bag-24/dp/B0CJMMPGF5)** — VCI built into bag material; no secondary products required inside. Rated 3–5 years. Validated at industrial scale: 2,000+ engines stored 5+ years in non-climate-controlled conditions ([Zerust case study](https://www.zerust.com/resources/case-studies/zerust-designs-a-long-term-engine-storage-system-to-protect-from-corrosion/))
  - If engine is already on stand (hardware passes through block, can't fully seal the bag): place Zerust ActivPak VCI emitter packets inside the sealed intake and exhaust ports; place Wisedry desiccant under a breathable cover over the assembly instead
- [ ] ✅ **Supplemental: [Wisedry 4×500g rechargeable silica gel packs (Amazon)](https://www.amazon.com/wisedry-Silica-Gel-Desiccant-Packs/dp/B0CKYSZ31J)** — place 2 under the cover. Microwave recharge in 10–16 min; color indicator (orange = dry, green = saturated). Recharge when green.
  - > **No periodic crank rotation required:** Fogging the cylinders before sealing provides the cylinder wall oil film. VCI bag or emitters handle all external surfaces. With both in place, no rotation is needed for the storage duration.
  - > **Skip whole-garage dehumidifiers** (Eva-Dry E-500 etc.) — they are sized for gun safes (~500 cu ft) and are not effective under a breathable cover in an open garage. Bag the parts; do not attempt to dehumidify the space.

#### ZF 8HP Transmission — Storage (Uninsulated Garage, Dodge Donor)
- [ ] ✅ **Remove Dodge TMU before install** (bench job — 4 bolts, two pieces: coolant heater body + cast aluminum manifold). The Dodge TMU uses Ram 1500 coolant routing that does not exist in the E36 chassis — must come off before the trans goes in the car. Do it now while the trans is on the bench; the same job in-car during the swap is significantly harder. Reference: [RevMax delete manual](https://manuals.plus/m/d0ce99a6bd3cd18188a5abebed567d585dc6320d60b1577f57e77db30a5fd270) · [RamForum TBV assembly diagram](https://www.ramforum.com/threads/8hp70-thermostatic-valve.109089/)
  - > **Storage note:** Not required for storage — with TMU *on*, the ATF ports are sealed by the TMU's own gaskets. If leaving TMU on for storage, plug the two TMU coolant hose fittings (rubber caps) instead of the ATF case ports.
- [ ] ✅ **Plug the two exposed ATF case ports** (cooler in/out, exposed after TMU removal) with M10×1.0 threaded caps — do immediately after TMU comes off
- [ ] ✅ **Plug torque converter opening** with a foam circle cut to fit or a rubber expansion plug
- [x] ✅ **TC was never present — N/A.** Rear face is already the bare TC mounting flange with 23-spline output exposed. DomiWorks AWD→RWD adapter bolts here.
- [ ] ✅ **Plug the TC output bore / 23-spline output shaft bore** with a rag + tape or rubber bung (keep debris out during storage)
- [ ] ✅ **Leave ATF in** — do not drain. ATF coats all internal gear sets, clutch packs, and bearing surfaces. Draining leaves them exposed.
- [ ] ✅ **Grease external input shaft splines** (TC-engagement end) with assembly lube or anti-seize before bagging — the one externally exposed machined surface ATF does not coat
- [ ] ✅ **Bag with [Zerust VCI Engine Storage Bag (24"×26"×46", Amazon ~$35)](https://www.amazon.com/Zerust-Engine-Storage-Bag-24/dp/B0CJMMPGF5)** — same bag fits the 8HP70Z (~23"L × 16"W × 16"H). Seal with zip ties after all ports are plugged.
- [ ] ✅ Store **horizontal** (longest axis horizontal = in-car orientation) in a tire or V-cradle (two 2×4 blocks). Do not stand on end.
- [ ] ✅ Keep off concrete floor — tire or V-cradle handles this
  - > **No periodic input shaft rotation required:** ATF inside the sealed case coats all internal gear sets, clutch packs, and bearings. With ATF in and VCI bag sealed, no rotation is needed for the storage duration.

#### Transport Options

**ZF 8HP (~195 lbs)**

| Scenario | Vehicle | Method |
| :---- | :---- | :---- |
| **With helper** | U-Haul cargo van | 2× lifting slings as carry handles (loop under trans case, each person holds both eyes). Lift directly into van (~21" floor). |
| **Solo** | U-Haul 15' truck | Roll trans on hand truck (platform mode) up the built-in ramp. Ramp + hand truck = genuinely solo-loadable. |

- Secure: 2× U-Haul ratchet tie-downs (12', 800 lb WLL, [$7.95 each](https://www.uhaul.com/MovingSupplies/Ropes-Tie-Downs/Ratchets-Straps/Ratchet-Tie-Down/?id=3109)) strapped over the case to floor D-rings. Trans horizontal on a tire or moving blanket.
- Confirm seller will help load before deciding between van vs. 15' truck.

**07K Engine (~400 lbs dressed)**

| Scenario | Vehicle | Method |
| :---- | :---- | :---- |
| **Either** | U-Haul 15' truck | Engine seated in a tire on the truck floor, 2× ratchet straps over it to floor D-rings. Tire cradles and prevents tipping. |

**In-Garage Lifting**
- **Hoist:** [HF 2-Ton Foldable Shop Crane, SKU 58755](https://www.harborfreight.com/2-ton-capacity-asme-pase-certified-foldable-shop-crane-58755.html) — $369.99
- **Stand:** [HF 1000 lb Engine Stand, SKU 59201](https://www.harborfreight.com/1000-lb-capacity-engine-stand-59201.html) — $109.99 + [S&P Automotive 07K Engine Stand Mount](https://s-pautomotive.com/product/07k-engine-stand-mount/) — **S&P adapter PURCHASED** ($99). Attaches to dedicated **side-mount bosses on the exhaust side** of the 07K block (same side as OEM transverse engine mount). In RHD E36 longitudinal orientation (timing chain forward), exhaust side = driver side (right). Fits 59201 (2" ID Pittsburgh/HF head tube). No load leveler needed for pallet→stand.
- **Slings:** 2× [HF Web Lifting Sling, SKU 71451](https://www.harborfreight.com/2000-lb-capacity-2-in-x-6-12-ft-web-lifting-sling-71451.html) — $9.99 each. Basket hitch: loop under the component, both sewn loop eyes on the crane hook. Adjust fore/aft to level the load. No knots, no shackles required.

---

### Rotating Assembly  [ROTATING-ASSEMBLY]
- [ ] 🏭 **360° Thrust Bearing Mod** — #4 main cap (both sides) machined to accept 034-block full-circle thrust washers   [ROTATING-ASSEMBLY · MACHINING]
  - Euromotive/machine shop machines the #4 main cap to accept the full-circle washers you brought at dropoff (see sourcing step above). Show them the reference video at dropoff: [Five (5) Cylinder VW Thrust Washer Repair](https://www.youtube.com/watch?v=hCIZny5uc4Q)
  - **Both sides** of the cap — Carson Heter: "I did the 360° thrust on both sides." Jimolde Burnsides: "360 is a must if you can."
  - Budget ~$50–150 machining, absorbed into longblock labor scope. [FB thread](https://www.facebook.com/groups/07kswap/permalink/3607377339428880/)
- [ ] 🏭 Longblock assembly (SHOP — Euromotive): short block closed + head assembled with Supertech springs/Ti retainers/Ferrea shims/lifters   [ROTATING-ASSEMBLY · HEAD/VALVETRAIN · MACHINING]
  - > ⚠️ **Pitfall:** Inspect all five SPA pistons on receipt before anything goes to the machine shop — community reports of dented crowns and sloppy machining on individual units. The machine shop bores to your pistons; a defective piston discovered after boring is a problem.
  - > ⚠️ **Pitfall:** SPA 07K pistons are **4032 T6 forged aluminum** — rated 1,000hp with DLC top ring, anti-detonation groove, and accumulator groove. SPA specifies **0.08mm piston-to-wall clearance** but flags that extreme applications should consult the builder. At 9,000 RPM under sustained boost and drifting heat cycles, confirm this clearance with the machine shop — they may recommend opening it slightly rather than running minimum spec.
  - > ⚠️ **Pitfall:** Plastigauge every single bearing journal before final assembly. Do not skip any. Record every clearance. Target: main bearings 0.0015–0.0025", rod bearings 0.001–0.002". If any clearance is out of range, stop and call the machine shop — do not press on.
  - > ⚠️ **Pitfall:** Piston ring end gap must be checked and filed to spec for your bore diameter before installing rings. Pre-gapped rings from the kit are set for the stock bore. If the block was bored even 0.010" over, the gaps are wrong.
  - > ⚠️ **Pitfall:** Assembly lube (not engine oil) on every bearing surface at install. Engine oil alone does not provide adequate protection for the critical first seconds before oil pressure builds.
- [ ] ✅ Install Fluidampr 551211 harmonic damper
- [ ] ✅ Install and torque both 07K knock sensors to **20Nm**
  - > ⚠️ **Pitfall:** Knock sensor torque directly affects sensor frequency response — over or under torque causes incorrect knock detection. MaxxECU will misread or miss knock events if sensors are incorrectly torqued. Do not use an impact driver. Torque wrench only.

### Head & Valvetrain  [HEAD/VALVETRAIN]
- [ ] ✅ Order ARP-CVB1 head studs — [Techtonics Tuning ARP-CVB1](https://techtonicstuning.com/product/arp-head-stud-kit-for-mk5mk6-25l-5-cylinder/) — $223.00 — hand to Euromotive at engine dropoff   [HEAD/VALVETRAIN]
  - IE-exclusive ARP 8740 alloy, heat-treated 200K psi, 100% reusable. Matched pair with ARP-CVB2 main studs — standard practice on all complete 07K turbo builds. Euromotive installs during longblock assembly.
- [ ] 🏭 Head assembly (SHOP — Euromotive): Supertech dual springs + Ti retainers + Ferrea solid shims + lifters
  - > Reference: [How To Time a VW 07K (YouTube)](https://www.youtube.com/watch?v=wdONdrRi9WU&t=203s)
  - > ⚠️ **Pitfall:** Compress valve springs fully during retainer install — keepers must seat fully in the groove. A keeper that's not fully seated will eject at high RPM and destroy the engine. Tap each retainer with a rubber mallet after install to confirm seating.
  - > ⚠️ **Pitfall:** Intake cam adjuster bolt is a **stretch (TTY) bolt — single use only**, must be replaced any time the cam sprocket/adjuster is removed. OEM part is currently difficult to source through VW. Confirmed cross-refs: **N91042802** ($9.19/ea, [FCP Euro](https://www.fcpeuro.com/products/audi-camshaft-sprocket-bolt-genuine-audi-n91042802)) or **N91050202** (ECS Tuning). Also available through Porsche Cayenne/Panamera parts channels. Order before starting head assembly — do not reuse the old bolt.
- [ ] ✅ Install Victor Reinz TTRS CEPA head gasket + torque head to spec
- [ ] ✅ Install BBG billet valve cover + rear coolant flange   → upper timing cover also [TIMING]

### Timing  [TIMING]
- [ ] 🔧 Install new timing chains (lower: 07K109120A, upper: 07K109231A) + sprockets
  - > ⚠️ **Pitfall:** The 07K timing procedure is specific and involves aligning multiple marks simultaneously. Watch the full timing video before attempting. One tooth off on the timing equals significant power loss or piston-to-valve contact.
  - > ⚠️ **Pitfall:** Cam adjuster bolt is TTY (stretch) — **replace it every time the adjuster is removed**, including during timing setup. Use N91042802 ($9.19/ea, FCP Euro) or N91050202 (ECS Tuning). Have at least 2 on hand before starting the timing procedure.
- [ ] ✅ Install BBG upper timing cover

### Oil System  [OIL]
- [ ] ✅ Install iABED longitudinal oil filter housing
  - iABED housing has a dedicated **turbo oil feed port** — install **-4AN fitting** (M12×1.5 to -4AN adapter or direct -4AN, per iABED port spec) at this port for the G25-660 RR oil feed line. Confirmed by @wingman703. Include a **0.9–1.0mm orifice restrictor** inline on the feed line — standard for journal bearing turbos; prevents over-oiling at idle.
  - **No longitudinal install video exists.** [07k iABED Industries Oil Filter Block Install (YouTube)](https://www.youtube.com/watch?v=oO_H64Pp7HY) is transverse-only (CaddyFab Garage / VW Caddy channel; links to Boost Brothers Garage transverse housing). iABED's own product page for the longitudinal housing (`byiabed.com/07K-LONGITUDINAL-Oil-Filter-housing-W-THERMOSTAT_p_156.html`) has only a BOM table — no install video or PDF. For longitudinal-specific guidance: contact iABED directly (+1 510-275-4775) or locate build threads in the 07K Swap Facebook group (specifically @wingman703's longitudinal build).
- [ ] ✅ Install iABED baffled longitudinal oil pan
- [ ] ⚠️ **Send 07K oil pump to Linder Power Systems (LPS) for oil pump mod** (send-in service — no storefront)
  - Contact LPS directly: [linderpowersystems.com](https://linderpowersystems.com). **Early-style 07K pump only** — verify pump version before sending; later pumps use a different design.
  - Stock pump cavitates above ~8,000 RPM under limiter-bashing, starving bearings. Mandatory for drifting/9k RPM use.
  - Reference: [LPS oil pump mod (YouTube)](https://www.youtube.com/watch?v=nXsUm8ph2Ys) | [07K turbo build reference](https://www.youtube.com/watch?v=V2OxGOoeDmI)
  - > ⚠️ **Pitfall:** LPS lead time can be 4–8 weeks. Send the pump early in the Phase 2 build so it's back before assembly is complete.

### Air / Intake  [AIR]
- [ ] ✅ Install LPS phenolic intake gasket between head and manifold — limits IAT heat soak into the charge   [AIR]
  - [LPS 07K Phenolic Intake Gasket](https://lpsfab.com/products/lps-07k-phenolic-intake-gasket) — 1/8" thick phenolic. Fits between cylinder head and any aftermarket aluminum manifold (BBG or LPS). Install before manifold bolts go in.
- [ ] ✅ Install BBG longitudinal intake manifold
- [ ] ⚠️ **Decide throttle path — DBW or cable TB** (see Phase 3 Air/Throttle for full tradeoff comparison)
  - **Option A — DBW (stock 07K TB, MaxxECU e-throttle):** Retain factory 07K TB. Wire TB connector (Motor+, Motor−, TPS1, TPS2, 5V, GND) into offline 07K engine harness targeting MaxxECU e-throttle H-bridge outputs. Enables throttle blip, traction control, launch control, flat shift. ME7.1.1 TB pins: 84, 92, 117, 118.
  - **Option B — Cable (VR6 TB + Lokar cable):** Install VR6 OBD2 throttle body `021133064A` on BBG longitudinal manifold. Do NOT wire any DBW TB connector — TB is purely cable-driven. Simpler setup; stock E36 floor pedal is retained (no E46 pedal module needed), but stock E36 cable cannot be reused — Lokar LOK-TC-1000LS148 required (VR6 drum uses different cable end than M52). MaxxECU still receives TPS signal passively but does not control throttle position — no e-throttle features.

### ECU — Offline Harness Build  [ECU]
- [ ] ⚠️ Build MaxxECU 07K engine harness offline (VW sensor connector ends, MaxxECU CMC on ECU side) — budget $300–500 in connector ends, wire, and conduit
  - > ⚠️ **Pitfall:** Build and test this harness on the bench before the swap day. Label every connector. Photograph the completed harness against the 07K engine before it goes in the car. A miswired sensor on swap day adds hours to a stressful job.
  - > ⚠️ **Apply Phase 1 loom discipline:** Crank and cam triggers shielded and in their own sleeve — separate from all other wires. Sensor input sub-loom (CLT, IAT, TPS, MAP, knock) separate from injector sub-loom, both separate from coil primaries. No high-current feeds (pump, fan) inside the signal harness at any point.
  - > Route the completed harness dry against the installed 07K before final sleeving — confirm connector reach, correct lengths, and clearance from exhaust headers and moving parts. Sleeve only after the routing is confirmed.
  - > ⚠️ **Throttle wiring depends on path chosen above:**
    - **DBW (Option A):** Wire TB (Motor+, Motor−, TPS1, TPS2, 5V, GND) to MaxxECU e-throttle H-bridge pins. The BMW E46 accelerator pedal is a separate 6-wire run through the bulkhead connector to MaxxECU APS1/APS2 analog inputs — NOT part of the 07K engine harness. Both pedal and TB use dual-track sensors; wire both tracks to separate MaxxECU analog inputs. ME7.1.1 pinout: DBW TB pins 84/92/117/118; APS1+2 pins 35/72 and 34/73.
    - **Cable (Option B):** No DBW wiring needed. Include TPS1/TPS2 signal wires to MaxxECU so ECU can read throttle position. Pedal and cable install happens at Phase 3; no harness action needed now.
  - > **Alternator — confirmed 140A (partslink24 VIN `WVWAR71K17W082055`, PR T59):** OEM part `07K 903 023 A` (Bosch, 12V, 140A, CW rotation). Reman: `06F 903 023 FX` → superseded by `07K 903 023 AX`. Decoupler pulley: `07K 903 119`. **140A provides sufficient headroom for the electric AC compressor (25–40A draw) — no alternator upgrade needed.** Reuse the OEM donor unit; aftermarket replacement if needed ~$80–120 on Amazon cross-referencing `07K 903 023 A`.
  - > **Alternator excite wire:** Plan a dedicated wire from the body harness to the alternator D+ (excite) terminal. Without it the alternator may not begin charging below ~1,500 RPM. It will self-excite above that threshold via the voltage regulator, but correct wiring ensures reliable cold-start charging from the first start.
- [ ] ✅ Document all sensor connector pinouts, oil line fittings, and coolant port locations before engine leaves the stand

---

## Phase 3 — 07K Final Swap & Integration

### Chassis — Engine Install  [CHASSIS]
- [ ] 🔧 Pull M5x interim engine
  - > Reference: [E36 engine removal (YouTube)](https://www.youtube.com/watch?v=kracqUH216s)
  - > ⚠️ **Pitfall:** Drain coolant and oil before pulling. Disconnect the battery. Label every hose and connector as you remove it — the 07K bay will look different and you will not remember where the M52 AC line went 6 months later.
- [ ] ⚠️ **Complete 3D scan of engine bay and engine mount bracket design before fabrication**
  - See 3D Scanning Workflow section in project plan (Phase 3 → Pre-Fabrication)
  - Use Scaniverse (free, iPhone 16 Pro) → export OBJ → Fusion 360 (bracket solid body design) + Blender (downpipe routing)
  - 3D-printed templates (PLA/PETG) are **fitment verification only — not structural**. Validate bolt hole alignment between 07K exhaust-side bosses and E36 subframe, then bin the prints
  - **Measure and record before scan-to-CAD step:**
    - 07K exhaust-side boss hole center-to-center spacing (calipers)
    - 07K boss thread spec (expected M10×1.5 — verify with tap at teardown)
    - E36 subframe mount pad positions and center-to-center spacing (engine out)
- [ ] 🏭 Install custom E36 07K engine mounts (Race3 / JNC) — welded steel, shop work
- [ ] 🔧 Lower 07K into engine bay, align to mounts + 8HP adapter
  - > ⚠️ **Pitfall:** Do not torque engine mount bolts until the engine is hanging freely at the correct height and the 8HP adapter plate is loosely mated. Torquing mounts before final positioning locks you into a misaligned drivetrain.

### Drivetrain  [DRIVETRAIN]
- [ ] ✅ Swap to 07K→8HP adapter kit (DomiWorks or Chatham CNC — whichever was quoted/ordered at Phase 2)
- [ ] ✅ Swap starter to VW longitudinal 068911024GX (Bosch reman, FCP Euro) — $349.99 + $50 refundable core
  - 068911024GX (reman, FCP Euro lifetime guarantee) = 068911024H (Bosch new) = same nose, fully interchangeable. NOT the N54 starter from Phase 1.

### ECU & Engine Harness  [ECU]
- [ ] ✅ Order 07K harness pigtail connectors — buy before Phase 2 harness build kickoff:
  - **EV14 injector connectors:** [8-pack $9.93 — Amazon B07STLGB7Z](https://www.amazon.com/dp/B07STLGB7Z) — 5 needed for 07K I5 injectors + 3 spares (Amazon's Choice)
  - **VAG COP coil connectors (4-pin OE# 4B0973724):** [4-pack $11.99 — Amazon B093HK7PN1](https://www.amazon.com/dp/B093HK7PN1) — buy **2 packs** (~$24 total): 5 needed per 07K I5 COP + 3 spares
  - **3-pin VAG sensor connectors (cam / crank / MAP), OE# 3B0973703G:** [$11.99 each — Amazon B0DY4CC12Q](https://www.amazon.com/dp/B0DY4CC12Q) — buy **4** (~$48): cam×1 + crank×1 + MAP×1 + spare. ⚠️ Same connector body for cam and crank but **different pinouts** — label pigtails clearly at crimp time
  - **2-pin NTC sensor connectors (CLT + IAT), OE# 1J0973702:** [$5.99 each — Amazon B0GLPX5HN5](https://www.amazon.com/dp/B0GLPX5HN5) — buy **3** (~$18): CLT×1 + IAT×1 + spare
  - **2-pin flat knock sensor connector, OE# 1J0973712:** source from ECS Tuning or FCP Euro (~$5–10 each) — buy **2**. ⚠️ Different connector body from 2-pin NTC above — do NOT substitute
- [ ] 🔧 Connect MaxxECU 07K harness (plug in pre-built harness, load 07K base map)
  - > Confirm accelerator pedal connector variant (MK4 vs MK5/MK6) matches the harness built in Phase 2 before plugging in.
  - > ⚠️ **MTune trigger setup — verify before first crank:** Crank = **VR input, N-1 / 60-2 pattern** (same type as M52 — MaxxECU "VR" label is correct). Cam = **Hall / HOME input, +5V supply type** (not +12V). Both sensors use the same 3B0973703G connector body but opposite pinouts — a swapped pigtail will produce no-start with no obvious failure mode.
  - > ⚠️ **Wideband sensor:** Use a **genuine Bosch** wideband sensor for the primary lambda input to MaxxECU. Aftermarket wideband sensors have documented accuracy issues at WOT and at rich lambda values below 0.75. Tune quality depends entirely on accurate AFR data — do not substitute.

### Air & Boost  [AIR]
- [ ] ✅ Install SPA Turbo MK5 T3 manifold (TMW22) — top-mount position
- [ ] ✅ Install Garrett G25-660 RR — ~$1,800–2,000 est. (verify at order; [Full Race G-series](https://www.full-race.com/collections/garrett-g-series))
  - > **Decision:** G25-660 RR chosen over G30-770. Power target ≤600whp; G25-660 rated to ~660whp — real headroom without riding the map boundary. Smaller frame fits E36 top-mount without hood clearance concerns. Faster spool on the 2.5L I5. G25-660 RR + SPA TMW manifold combination confirmed by NineX Engineering (Rennlist 944 07K community).
  - > ⚠️ **Pitfall:** Must be reverse rotation — standard rotation directs the compressor outlet into the firewall with the SPA MK5 manifold in longitudinal installation. Full Race G-series RR listings use distinct SKUs from standard rotation — double-check at purchase.
- [ ] ✅ Install T3-to-V-band adapter — ~$35–50 (connects SPA T3 manifold outlet to G25-660 V-band turbine inlet; adds ~25–35mm to stack height)
- [ ] ✅ Install Tial 44mm MVR wastegate (V-band direct fit to SPA manifold WG port)
- [ ] ⚠️ **Complete 3D scan workflow before sending downpipe to fabricator** — see 3D Scanning Workflow section in project plan Phase 3
  - Scan engine bay with Scaniverse (iPhone 16 Pro, free) after 07K + 8HP are installed → design tube routing path in Blender as Bezier curve → send annotated routing reference to fabricator
- [ ] 🏭 Measure downpipe routing and send to fabricator — custom RHD downpipe around [STEERING] rack
- [ ] ✅ Re-pipe CXRacing FMIC core for G25-660 RR turbo position (all Phase 1A piping unusable)
- [ ] 🔧 Re-plumb Turbosmart boost solenoid for G25-660 RR + Tial 44mm wastegate setup
  - Solenoid from Phase 1A carries over; all boost control plumbing is turbo-position specific. Re-route: compressor outlet reference line → solenoid inlet; solenoid outlet → Tial 44mm actuator port.

### Fuel System  [FUEL]
- [ ] ✅ Install ID1050x × 5 injectors into BBG fuel rail
  - > ⚠️ **Verify at dry-fit — cam sensor clearance flagged, not confirmed:** community input says the ID1050x's taller body can interfere with the stock 07K cam sensor, and that a TTRS/RS3 cam sensor (`07L905163C`, different part family from the OEM 07K `07K907601A`) fixes it via a 90° connector. **Could not independently confirm** the specific clearance conflict or that the RS3 sensor is a drop-in electrical/mechanical match (same Hall-effect signal, same probe depth, same bore) — likely originates in the private 07K Swap Facebook group already cited elsewhere in this build's docs, not web-indexed. **Do this instead of assuming:** dry-fit the injectors against the stock cam sensor location before ordering anything; if there's real interference, confirm `07L905163C` fitment with someone who's actually run it before cutting it into the harness — a mismatched cam sensor here is a no-start, not a cosmetic issue. See Project Plan Phase 3 ME7.1.1 Pinout Reference note for full detail.
- [ ] 🔧 Swap Walbro 450LPH fuel pump (Radium E36 basket kit) — $203.99
  - > ⚠️ **Flex fuel sensor:** The ethanol content sensor is installed inline in the fuel feed from Phase 1. When re-plumbing for the 450LPH pump and new lines, confirm the inline sensor position is preserved in the new fuel feed routing. No wiring changes needed — the MaxxECU digital input is already configured.

### Coolant System  [COOLANT]
- [ ] ✅ Route and connect custom 07K coolant hoses (measure in-car before ordering lengths)
  - **Reference:** [alliedcam1 — 07K Coolant Line Overview (YouTube)](https://www.youtube.com/watch?v=sCYZoCULSXo) — best longitudinal 07K coolant routing walkthrough available. [Routing diagram](https://photos.app.goo.gl/dAAYu7NJUUTBheyb8) | [Rennlist p138 coolant guide](https://rennlist.com/forums/944-turbo-and-turbo-s-forum/803341-vw-audi-07k-2-5l-20v-i5-swap-thread-138.html)
  - **Heater valve:** GM 12380318 (4-port inline heater valve) — used in 944 07K swaps, approach is directly portable. Routes cabin heat inline without a separate shutoff. Source on Amazon.
  - **Hose sizes:** 5/8" and 3/4" bulk coolant hose + formed elbows (90°/180°). Dorman 56152 heater fittings for firewall barb adapters. HPS HTSEC180-075-BLK silicone 180° elbow (3/4"). 5/16" vent line to reservoir. URO 032121142 C-clip for hose flange retention.
  - > ⚠️ **Pitfall:** Specific hose part numbers from 944 builds (Dayco 72193/72365, Gates 22503/20416) are 944-chassis-specific — measure E36 routing with engine in car before ordering. Use those as diameter/type reference only, not direct part numbers.

### Oil System  [OIL]
- [ ] ✅ iABED baffled oil pan — pre-installed during Phase 2 engine build; no Phase 3 action required
- [ ] ✅ Re-plumb existing Setrab/Mocal 10-row oil cooler core to iABED -AN ports
  - The iABED longitudinal oil filter housing (Phase 2) has built-in thermostatic -AN ports — no sandwich plate needed. The MMOCF-BMW fitting kit stays with the pulled M52 engine.
  - > ⚠️ **Note:** If stock oil housing was used in Phase 2 instead of iABED, install the Mishimoto MMOP-SPT thermostatic sandwich plate ($170.95) between the filter and housing + run -10AN lines to the Setrab/Mocal core.

### Air / Throttle  [AIR · ECU]

> **Throttle path decision.** The 07K has a factory DBW throttle body. You have two options at swap time:
> - **DBW** — keep the stock 07K TB + install an E46 e-pedal. Enables MaxxECU throttle blip, traction control, launch control, flat shift. Requires e-pedal wiring through bulkhead connector and MTune calibration.
> - **Cable** — swap in a VR6 OBD2 TB (`021133064A`), keep the stock E36 floor pedal, install Lokar cable. Simpler setup; stock E36 pedal is retained but the stock E36 cable is NOT reusable (VR6 drum uses a different cable end than the M52 drum). No e-throttle calibration needed; no MaxxECU e-throttle features.

**Option A — DBW (stock 07K TB + MaxxECU e-throttle):**
> **TB sizing:** Stock 07K TB is ~65mm bore — adequate for ~500 whp at 25 psi per Rennlist 07K community airflow calcs. For 600–750+ whp, plan to upgrade to **VW 3.6 VR6 TB `03H 133 062`** (~74mm, same VAG flange, ~$40–80 used, direct fit candidate on BBG manifold). Do not upgrade before tune is dialed in. Full TB pinout: see Enhancements doc → DBW Wiring Pinouts.
- [ ] ✅ Confirm stock 07K DBW throttle body is retained from Phase 2 engine build
- [ ] ✅ Install BMW E46 accelerator pedal module (`35426786282`) in E36 cabin via adapter bracket
  - > **[Strom Motorsports E36 Adapter for E46 DBW Throttle Pedal](https://strommotorsports.com/products/e36-dbw-e46-accelerator-pedal-adapter)** — CNC 6061 Al, no cutting/welding/drilling. Explicitly lists PN `35426786282` (manual) and `35426786281` (auto). Also: [Garagistic](https://www.garagistic.com/products/e46-gas-pedal-for-e36-adapter-bracket) | [Boost Monkey](https://boostmonkey.com/products/e36-electronic-drive-by-wire-gas-pedal-adapter-brackey) | [Drift HQ](https://drifthq.com/products/e46-gas-pedal-for-e36-adapter-bracket). E46 pedal module eBay used: **$80–120 all-in** (see listings below). Bracket: ~$40–60.
  - > **eBay sourcing — E46 pedal `35426786282`** · [Saved search](https://www.ebay.com/sch/i.html?_nkw=bmw+35426786282&_svsrch=1)
    - [407117477828](https://www.ebay.com/itm/407117477828) — $119.98 OBO, used, US domestic (emsauto). Multi-chassis title — confirm PN `35426786282` with seller first.
    - [176400301948](https://www.ebay.com/itm/176400301948) — £59 (~$79 + intl. shipping), used, UK (burning oil). E46 M3/330i/328i/325i manual ✅
    - [176400305397](https://www.ebay.com/itm/176400305397) — £59 (~$79 + intl. shipping), used, UK (burning oil). E46 330i manual ✅
    - [176400302753](https://www.ebay.com/itm/176400302753) — £59 (~$79 + intl. shipping), used, UK (burning oil). E46 323i/320i/318i/316i manual ✅
    - ❌ **Skip** [176400306849](https://www.ebay.com/itm/176400306849) — E39/E38/X5/E53 pedal, wrong connector and pinout
    - New Genuine BMW (AutohausAZ): $524 — not worth it, sensor doesn't wear, MaxxECU recalibrates fresh
  - > **RHD bracket fitment:** No vendor explicitly confirms RHD E36 pedal box compatibility. Community finding: LHD brackets often misalign or crowd the brake pedal in RHD — typically resolved by trimming carpet/sound deadening at the transmission tunnel edge. Try the Strom/Garagistic bracket first. If RHD pedal box geometry prevents fitment, use the **Hella 6PV010946-141** instead (see below) — it has no OEM pedal box dependency. Reference: [Bimmerforums 2072569](https://www.bimmerforums.com/forum/showthread.php?2072569-Mounting-the-E46-DBW-electronic-throttle-pedal-in-an-E36).
  - > The LHD vs RHD pedal PN split is **manual vs auto** (not LHD vs RHD) — PN `35426786282` works in any market RHD car.
  - > **RHD fallback pedal — Hella 6PV010946-141:** Standalone floor-mount module, no OEM pedal box geometry required. MaxxECU has a native pre-defined profile. Fabricate any mounting position. Pin 1=SGND1, Pin 2=+5V(2), Pin 3=TPS2, Pin 4=SGND2, Pin 5=+5V(1), Pin 6=TPS1. Widely used in 944/914 swaps and kit cars for exactly this reason. ~$80–120 new.
- [ ] 🔧 Wire e-pedal through firewall bulkhead connector (6 pins reserved in Phase 1) → MaxxECU APS1/APS2 analog inputs + 5V refs + GNDs
  - > **Pin order (E46 pedal connector, bench-verified):** Pin 1 = GND1, Pin 2 = GND2, Pin 3 = VCC2 (+5V), Pin 4 = Output1/APS1 (0.7V idle→4.5V WOT), Pin 5 = VCC1 (+5V), Pin 6 = Output2/APS2 (0.36V idle→2.2V WOT). Total draw ~20mA; 24 AWG sufficient. Source: [HP Academy forum bench test](https://www.hpacademy.com/forum/efi-wiring-fundamentals/show/bmw-epedal-for-dbw-setup-wiring/) · [openinverter.org BMW Throttle Pedal wiki](https://openinverter.org/wiki/BMW_Electronic_Throttle_Pedal)
- [ ] 🔧 Calibrate MaxxECU e-throttle in MTune — full procedure in [`e36-wiring/docs/etb-pid-tuning.md`](https://github.com/wesleyxcooper/e36-wiring/blob/main/docs/etb-pid-tuning.md)
  - > ⚠️ **Pitfall:** Disconnect the TB motor wires before enabling e-throttle in MTune for the first time. Leave sensor wires connected — verify APS/TPS voltages read correctly before activating motor drive. Prevents runaway on first output enable.
  - > **Sequence (don't skip steps):**
    1. Enable e-throttle in MTune, assign APS1/APS2 to AIN pins, assign TPS1/TPS2 and motor output
    2. Run **pedal calibration wizard** — captures idle/WOT min/max for both APS tracks automatically
    3. Reconnect TB motor wires, run **TB calibration wizard** — sweeps to physical stops, captures TPS range
    4. Run **PID auto-tune** (MTune built-in): engine at idle, MaxxECU sweeps TB through step inputs and calculates P/I/D
    5. Verify on MTune scope: add APS% and TPS% channels, snap pedal sharply — TPS should track APS with <20ms lag, no sustained oscillation
  - > **PID symptoms:** Lag = P too low. Oscillation/buzz = P too high. Slow creep to target = I too low. Jitter at fixed pedal = D too high (amplifies sensor noise). Start with MaxxECU Bosch 0280 750 defaults — auto-tune usually gets it right from there.
  - > **If upgrading TB** (stock 65mm to VR6 74mm): re-run TB calibration wizard and PID auto-tune. Motor response and spring force differ. Pedal calibration is TB-agnostic, no need to redo.
  - > ⚠️ **Pitfall:** Never disable APS ratio, TPS ratio, or APS-vs-TPS agreement safety checks. When any check faults, MaxxECU cuts motor output and the return spring closes the plate — that is the correct behavior. Diagnose the root cause (wiring fault, bad sensor, swapped wires) instead of widening tolerances.
  - > [MaxxECU E-Throttle Docs](https://maxxecu.se/webhelp/settings-ethrottle.html) · [E-Throttle Body Wiring](https://maxxecu.se/webhelp/wirings-e-throttle_bodies.html)

**Option B — Cable throttle (VR6 TB + Lokar cable):**
- [ ] ✅ Install VR6 OBD2 throttle body `021133064A` onto BBG longitudinal manifold (OBD2 96–99 only, bolt pattern matches)
- [ ] ✅ Install Lokar LOK-TC-1000LS148 throttle cable (cut to fit, adjust drum end for VR6 TB)
  - > **Stock E36 cable cannot be reused** — the VR6 TB drum uses a different cable end than the M52 drum. The stock E36 floor pedal is retained (no E46 pedal module needed). The Lokar universal cable fits both the E36 pedal bracket and the VR6 drum. ~$40–60.
  - > MaxxECU still receives TPS signal passively (for datalog + boost control). No e-throttle calibration needed. No throttle blip, traction control throttle management, launch control, or flat shift available with cable.

### Electrical  [ELECTRICAL]
- [ ] ✅ Install 140A 07K alternator (PN 07K903023A — native 07K unit, OEM mounting points)
  - > ⚠️ **Pitfall:** The alternator charge wire runs from the B+ terminal on the alternator to the main battery/fusebox. In the new longitudinal orientation this run may be longer than in the transverse MK5 — plan the wire route before cutting to length.
  - > Wire the alternator D+ (excite) terminal to a switched 12V source in the body harness. The alternator will self-excite above ~1,500 RPM via the voltage regulator, but without the excite wire it will not charge reliably from cold start.
  - > **Radlok option for B+ terminal:** Amphenol Radlok 8mm M8×1.25 Female adapter ([Racing History Co.](https://www.racinghistorycompany.com/product/radlok-8mm-stud-m8x1-25-female/), ~$22 CAD) threads onto the M8 B+ stud of the `07K 903 023 A` alternator, presenting a Radlok socket for the charge wire cable end. Tool-free alternator disconnect at engine removal. **Cable end connector (not sold by Racing History Co.):** genuine Amphenol `RL00801-35RE` or `-50RE` (red, sized to your B+ wire gauge — 50mm²/~1/0AWG for the higher-current alternator run) from [TTI](https://www.tti.com/content/ttiinc/en/manufacturers/amphenol/products/amphenol-industrial-radlok-series.html), ~$7.40–11.56/ea. Crimp the Radlok cable end onto the charge wire before sleeving the loom.

### Steering — EPS  [STEERING]

> **Primary approach: Stock hydraulic rack + de-powered lines + column EPS + SLR Mini Kit = ~900° LTL.** Mini Kit reduces LTL by 28–30% (3.5 LTL → ~2.5 LTL = ~893°). This matches the Moza R5 sim baseline exactly — no Z3 rack required. EPS assist knob is the real-world equivalent of FFB weight adjustment.

- [ ] ⚠️ Confirm EPS path: contact EPowerSteering.com about RHD column compatibility ([epowersteering.com](https://epowersteering.com/purchase/product/bmw-e36/)) — or plan for Peugeot 206 GTi / Toyota MR2 ZZW30 salvage column with fabricated bracket
- [ ] 🔧 **De-power stock hydraulic rack** (do not replace rack — keep stock)
  - **Preferred method — return-line loop:** Route the hydraulic return line back into the reservoir instead of capping the ports. Rack stays lubricated, no internal drag from trapped air, acts as a clean manual rack. Remove or leave the pump belt — pump freewheels harmlessly.
  - Do NOT fully cap ports dry — trapped air causes uneven rack feel and inconsistent center return.
  - Stock rack = 3.5 LTL = 1,260° travel. After Mini Kit install: ~2.5 LTL = ~900°. EPS provides all assist.
  - **Alternative (skip for this build):** Z3 rack swap (direct bolt-in, 2.75 LTL = 990°) — adds cost and ratio complexity without benefit when Mini Kit already hits 900°. Only consider if Mini Kit is not being run. If Z3 rack + Mini Kit are stacked: combined ratio drops to ~2.0–2.2 LTL (~720–800°) — supercar/drift car territory; requires significantly lighter EPS assist calibration.
- [ ] ⚠️ Install column-assist EPS unit (under dash)
  - > ⚠️ **Pitfall:** The assist knob is set once before driving. Wire MaxxECU GPO → EPS controller VSS input for automatic speed-sensitive assist — without this you'll need to manually adjust between parking and highway use.   → [ECU]
  - > ⚠️ **Pitfall — EPS calibration at ~900°:** Start with lighter assist than you expect to need. At ~900° the steering is already substantially quicker than the stock 1,260° rack — heavy EPS assist amplifies small inputs and makes the car feel twitchy at highway speeds. Dial in: full parking assist → reduce until highway feels settled → confirm drift session feel. The VSS input handles the graduated reduction automatically if wired to MaxxECU. If Z3 rack is added later (drops to ~720–800°), re-calibrate assist lighter again.

### Air Conditioning  [AC]
- [ ] ✅ Mount 12V electric AC compressor ([Cold Hose universal kit](https://coldhose.com/products/universal-12v-electric-compressor-kit)) — mount away from exhaust heat
- [ ] ✅ Wire 30A relay + 10A control fuse + enable signal from AC switch (MaxxECU GPO can manage enable)   → [ELECTRICAL · ECU]
- [ ] 🏭 Fabricate new AC lines from compressor to existing condenser and evaporator (shop)
- [ ] 🏭 Refrigerant charge (shop — R134a handling equipment required)

### Commissioning  [ECU]
- [ ] 🔧 Coil pack output test: verify each coil produces **≥12kV** spark with a spark tester before first start
  - > ⚠️ **Pitfall:** Weak coils cause misfires that are extremely difficult to diagnose once the engine is running under boost. Test all five before the first start, not after.
- [ ] 🔧 Smoke test intake manifold for vacuum leaks (engine off, before any start)
  - Pressurize the intake side with a smoke machine. Any leak that passes vacuum will pass boost. Fix all leaks before tuning — vacuum leaks cause lean conditions that cannot be tuned around.
- [ ] ⚠️ Initial start on 07K base map — check for leaks, oil pressure, coolant temp
  - > ⚠️ **Pitfall:** The 07K crank trigger offset will need calibration before the first start — MaxxECU requires triggering the crank angle offset for the VW 60-2 wheel. This is a software setting, not hardware, but it must be set correctly or the engine will not start or will run extremely rough.
  - > ⚠️ **Before first start:** Configure MaxxECU oil pressure protection map — set a minimum oil pressure threshold vs RPM (e.g. 10 psi at idle, 50 psi above 3,000 RPM). MaxxECU will cut ignition if pressure drops below curve. Standard feature; critical at 9,000 RPM where a momentary oil starvation event destroys bearings before you can react.
  - > Verify wideband sensor is genuine Bosch before logging. Aftermarket units give inaccurate readings at WOT and rich lambda — tune quality depends on accurate AFR data.
- [ ] ✅ Boost leak test (pressurize charge side with engine off) before any boost runs
- [ ] 🏭 Dyno tune: MaxxECU 07K map, flex fuel scaling, 8HP shift calibration (SHOP — budget $600–1,200)

---

## Phase 4 — Calibration & Ongoing Maintenance

- [ ] ✅ 07K break-in: mineral-based oil, 4,000 RPM limit, 500 miles
- [ ] ✅ First oil change at 500 miles — send sample to Blackstone Labs for baseline analysis
- [ ] ✅ MaxxECU 8HP shift pressure calibration (software, in MaxxTune)
- [ ] ✅ Flex fuel map validation (run 50% E85 blend, verify blend curve behavior in logs)
- [ ] ✅ Valvetrain audit: check all 20 solid shim clearances (feeler gauge)

### Ongoing Maintenance Schedule
| Item | Spec | Interval |
|---|---|---|
| Engine oil | Motul 300V 15W50 | 3,000 mi street / 3 track days |
| Oil analysis | Blackstone Labs | Every 2nd oil change |
| 8HP fluid | ZF Lifeguard 8 only | 30,000 mi / annual (track) |
| Solid shim audit | Feeler gauge all 20 | Every 10,000 mi |
| Timing chain inspection | Guide wear check | Every 50,000 mi |
| Poly bushing re-grease | Revshift-supplied poly lubricant | Every 20,000 mi / annually (whichever first) |

---

## Reference Links

### MaxxECU Documentation
| Resource | Link |
|---|---|
| M50 terminated harness docs | [maxxecu.com/webhelp](https://www.maxxecu.com/webhelp/wirings-terminated_engine_harness-bmw_m50.html) |
| 8HP installation & wiring | [maxxecu.com/webhelp](https://www.maxxecu.com/webhelp/advanced-8hp-installation_and_wiring.html) |
| 8HP hardware ID checker | [maxxecu.com/webhelp](https://www.maxxecu.com/webhelp/advanced-8hp-hardware_identifier.html) |
| 8HP GEN1 feature page | [maxxecu.com/features](https://www.maxxecu.com/features/8hp_gearbox) |
| E36 OBD2 chassis adapter (22RPD) | [22rpd.com](https://22rpd.com/shop/product/127) |
| BMW E36 X20 pinout | [Scribd](https://www.scribd.com/document/649295040/bmw-e36-x20-pinout) |

### YouTube
| Video | Link |
|---|---|
| E36 engine removal (M50/M52) | [YouTube](https://www.youtube.com/watch?v=kracqUH216s) |
| E36 cam & lifter removal/install | [YouTube](https://www.youtube.com/watch?v=wRnqy-7dT28) |
| Alien Engineering solid lifter shims | [YouTube](https://www.youtube.com/watch?v=KtvxWkbvINI) |
| E36 chassis reinforcement install | [YouTube](https://www.youtube.com/watch?v=2mYdKzG10R4) |
| George W. Hill starter adapter demo | [YouTube](https://youtu.be/bWVo-TpdQCQ) |
| 07K turbo build — ultimate 5-cyl setup | [YouTube](https://www.youtube.com/watch?v=V2OxGOoeDmI) |
| How to time a VW 07K 2.5 5-cylinder | [YouTube](https://www.youtube.com/watch?v=wdONdrRi9WU&t=203s) |
| Five (5) Cylinder VW Thrust Washer Repair | [YouTube](https://www.youtube.com/watch?v=hCIZny5uc4Q) |
| TurboLamik 8HP swapped E36 first drive | [YouTube](https://www.youtube.com/watch?v=U5iPV0j2nXA) |

### Forums & Guides
| Resource | Link |
|---|---|
| Garagistic E36 complete chassis guide | [garagistic.com](https://www.garagistic.com/pages/e36-complete-chassis-reinforcement-kit-installation-guide) |
| r/BMWE36 EPS / Z3 rack discussion | [reddit.com](https://www.reddit.com/r/BMWE36/comments/1em1mzn/steering_rack_options/) |
| BuyAutoParts — Z3 rack E36 swap guide | [buyautoparts.com](https://www.buyautoparts.com/blog/bmw-z3-steering-rack-upgrade-for-the-e30-and-e36-3-series/) |
| EPowerSteering E36 EPS kit | [epowersteering.com](https://epowersteering.com/purchase/product/bmw-e36/) |
| RevMap 07K harness connector docs | [docs.revmapperformance.com](https://docs.revmapperformance.com/en/07K-harness) |
| RevMap 2.5T turbo prep guide | [revmapperformance.com](https://revmapperformance.com/07K-Turbo-Preparation/) |
| 07K Hard to Find Parts Wiki | [the07k.wiki](https://the07k.wiki/wiki/Hard_to_Find_Parts) |
| Strom Motorsports — E36 DBW adapter bracket | [strommotorsports.com](https://strommotorsports.com/products/e36-dbw-e46-accelerator-pedal-adapter) |
| Garagistic — E46 pedal adapter for E36 | [garagistic.com](https://www.garagistic.com/products/e46-gas-pedal-for-e36-adapter-bracket) |
| MaxxECU E-Throttle settings | [maxxecu.se/webhelp](https://maxxecu.se/webhelp/settings-ethrottle.html) |
| MaxxECU E-Throttle body wiring | [maxxecu.se/webhelp](https://maxxecu.se/webhelp/wirings-e-throttle_bodies.html) |
| Autoworks — DBW conversion guide | [autoworks.com.au](https://autoworks.com.au/blog/items/drive-by-wire-conversion-a-modern-upgrade-for-tuners-and-engine-swaps) |
| FB 07K Swap — Thrust Bearing Thread | [facebook.com](https://www.facebook.com/groups/07kswap/permalink/3607377339428880/) |
| FB 07K Swap — Oil Squirter Thread | [facebook.com](https://www.facebook.com/groups/07kswap/permalink/3608094966023784/) |

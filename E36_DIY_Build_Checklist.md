# E36 9000 RPM Build — DIY Checklist

> **Legend:** ✅ DIY | 🔧 DIY with specialty tools | ⚠️ First-time skill | 🏭 Shop-mandatory

> **System Tags:** `[FUEL]` `[AIR]` `[IGNITION]` `[COOLANT]` `[OIL]` `[ECU]` `[ROTATING-ASSEMBLY]` `[HEAD/VALVETRAIN]` `[TIMING]` `[DRIVETRAIN]` `[SUSPENSION]` `[BRAKES]` `[STEERING]` `[CHASSIS]` `[ELECTRICAL]` `[INSTRUMENTS]` `[AC]` `[THERMAL]` `[ADMIN]` | Work-type modifier: `[MACHINING]`

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
- [ ] ✅ Choose your sourcing + import path — three options evaluated:
  - **Option A — Full turnkey:** [Open Air Imports](https://www.openairimports.com/) (Baltimore/Richmond VA, ph: 443-300-8745). Sources the car, photographs pre-purchase, collects, ships, clears US customs, delivers. Best for hands-off buyers. Confirmed active.
  - **Option B — Self-source, outsource shipping:** Find the car yourself on [AutoTrader UK](https://www.autotrader.co.uk/) or [PistonHeads](https://www.pistonheads.com/) (post a "Wanted" ad to have sellers come to you) → commission a UK independent PPI (e.g. [Drewmotive](https://www.drewmotive.com/pre-purchase-inspections/classic-import-car-pre-purchase-inspection.html) or local BMW specialist) → hand off to Open Air Imports or [CFR Classic](https://cfrclassic.com/international-car-shipping/import-car-from-uk-to-usa/) (~$2,450 UK→US) for collection and shipping. Most control over which car you buy.
  - **Option C — AU sourced:** [Gumtree](https://www.gumtree.com.au/) / [Carsales](https://www.carsales.com.au/) for finding the car; similar handoff process for shipping. West Coast US port (LA/Long Beach) is closer for AU origin.
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
- [ ] 🔧 Install Gauge.S cluster — plugs into OEM E36 cluster connectors (PNP)
  - **Video:** [Gauge.S E36 Features & Installation](https://www.youtube.com/watch?v=v5P81D6qujs) — **7:00** installation | **1:12** features | **13:32** software/setup
  - Displays actual °C / °F numbers for coolant temp, oil temp, oil pressure — not needle gauges
  - Reads OEM NTC coolant sensor at the block via existing harness (no extra wiring for coolant temp)
  - Reads Bosch PST-F1 oil sensors via the analog input wires (0–5V, up to 7 channels)
  - Data logging to microSD card; WiFi SD access from phone
  - **Phase 3 upgrade:** In MaxxECU phase, switch from raw sensor mode to **MaxxECU CAN bus feed** — richer data, no sensor wiring changes needed
  - > ⚠️ **Pitfall:** Read the wiki at [wiki.sorek.uk](https://wiki.sorek.uk) before installing — definition files need to match your ECU type (MS41.x for OBD2 E36; MaxxECU CAN profile from Phase 1 onward). Wrong definition = missing or wrong readings.
  - > ⚠️ **Pitfall:** Do NOT buy the OBD2 adapter ($68) for the PNP cluster — it is redundant. The OEM cluster harness already provides everything the unit needs.
- [ ] 🔧 Install Bosch PST-F1 dual oil temp/pressure sensor at M52 VANOS banjo bolt location
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
- [ ] ✅ Install BC Racing BR coilovers (front + rear)
  - > ⚠️ **Pitfall:** Set ride height before torquing pinch bolts — you cannot adjust after. Start at mid-range and corner-balance at alignment shop. Alignment required after this step.
- [ ] 🔧 Install Revshift full poly bushing kit throughout
  - > ⚠️ **Pitfall:** Poly bushings require grease at install and periodic re-greasing. Dry poly bushings squeak constantly and wear unevenly. Use the Revshift-supplied grease or equivalent poly-compatible lubricant.
- [ ] ✅ Schedule alignment after coilovers (shop)

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
- [ ] ✅ Swap E46 330i front calipers and carriers
  - > ⚠️ **Pitfall:** Confirm carrier bolt pattern matches E36 spindle (it does on all 6-cyl E36). Use new caliper slide pins and grease — seized slides are the #1 reason used calipers go back on eBay within 6 months.
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

- [ ] ✅ Source ZF 8HP50Z or 8HP70Z (N57 diesel donor preferred for 8HP70)
- [ ] ✅ Check 8HP hardware ID against MaxxECU compatibility list ([maxxecu.com](https://www.maxxecu.com/webhelp/advanced-8hp-hardware_identifier.html)) before committing
- [ ] 🔧 Remove stock Getrag manual transmission
  - > ⚠️ **Pitfall:** Rent a transmission jack — the Getrag is heavy and awkward to lower alone. Unbolt the driveshaft at the diff end first, not the trans end. Support the rear of the engine with a jack stand under the oil pan (use a wood block) once the trans is out.
- [ ] 🔧 Swap manual flywheel for N54 automatic flexplate (engine in car, trans removed)
  - > ⚠️ **Pitfall:** You need a flywheel lock tool to hold the crank from rotating while breaking loose the flywheel bolts. Do not use a screwdriver in the ring gear — you'll damage teeth you'll need for the starter. Torque the new flexplate bolts to spec with thread locker.
- [ ] ✅ Install George W. Hill M5x Starter Adapter + N54 starter ([Hill Performance](https://www.hillperformance.com/products/starter-adapter)) | [Demo video](https://youtu.be/bWVo-TpdQCQ)
- [ ] ✅ Install PMC Motorsport M5x→8HP adapter plate
- [ ] ✅ Install Seems Legit Garage E36 8HP crossmember
- [ ] 🔧 Lower 8HP into place, align to adapter plate and crossmember
  - > ⚠️ **Pitfall:** The 8HP is significantly heavier than the Getrag. Two people minimum. A transmission jack on a floor makes this manageable — doing it with jack stands and a floor jack is possible but risky for the ECU wiring on the unit.
- [ ] ✅ Swap output flange to BMW 96mm PCD (E90 non-35i, PN 26117511454)
  - > ⚠️ **Pitfall:** Both the 8HP50Z and 8HP70Z ship with a 105mm flange. The E36 guibo is 96mm. The wrong flange is a no-start situation that isn't obvious until driveshaft fitment.
- [ ] ✅ Install DCT Shifter E36 unit ([dctshifter.com](https://dctshifter.com/)) — **4-wire digital connection to MaxxECU**
  - Models: 270GT Aluminum (compact), 290GTE Carbon (taller throw), 390GT (full-size) — all wire identically, choice is ergonomic
  - **Wiring (4 wires):** +12V switched (fused), GND, UP signal → MaxxECU DIN = **Transmission UP shift**, DOWN signal → MaxxECU DIN = **Transmission DOWN shift**
  - No CAN — pure momentary GND closure. Use shielded wire if routing near the engine harness loom.
  - **MTune:** Advanced → 8HP gearbox control → Shifter type → **8HP SEQ shifter**. Assign the two DINs above.
  - Standstill logic (brake held): single DOWN = Reverse | single UP = Drive | double-tap DOWN = Park | double-tap UP = Manual
  - While driving: UP/DOWN = manual gear requests. Unsafe shifts blocked automatically.
  - **Hold UP** → launch control and/or 8HP transbrake (configurable hold time) — your drift launch feature
  - > ⚠️ **Pitfall:** Do NOT wire an OEM BMW CAN shifter at the same time as the DCTShifter SEQ mode. The two paths conflict. BMW 10-pin end of #2287 is capped — that is the correct state.
- [ ] ✅ Install MaxxECU 8HP GEN1 CAN harness #2287 (BMW 8HP shifter variant) — **mandatory TCU link regardless of shifter choice**
  - Pre-terminated: 2,100mm run → 12-pin GT150 (8HP TCU: CAN H/L, main 12V, wakeup, GND) + 1,800mm run → BMW F-series 10-pin CAN shifter connector (cap unused with DCTShifter)
  - **Power-up relay circuit — design before install:** TCU main 12V (GT150 pin A) must be live 10–15s **before** the wakeup signal (pin B) is applied. If both are on the same ignition-switched fuse, the TCU partially fails to initialize and SEQ mode won’t function. Use a power-hold relay: main 12V constant or long-hold; wakeup = key-on only.
  - **This harness stays untouched at the 07K swap.** It connects MaxxECU → 8HP TCU via CAN. The same MaxxECU and the same gearbox remain — only the engine harness changes.
  - > Reference: [MaxxECU 8HP Installation & Wiring](https://www.maxxecu.com/webhelp/advanced-8hp-installation_and_wiring.html)
- [ ] ✅ Flash/reflash 8HP via Yanhua ACDP-2 tool (rent ~$138 or buy ~$738)
  - > ⚠️ **Pitfall:** The flash procedure must be done before CAN control will function. Rent the tool if possible — single use in this build.
- [ ] ✅ Install HPR Setrab 8HP oil cooler kit
- [ ] ✅ Order custom 1-piece driveshaft ([Seems Legit Garage](https://www.seemslegitgarage.com/product-page/single-piece-driveshaft)) — send exact measurement from trans output flange to diff input flange with drivetrain at ride height
- [ ] 🔧 Swap 3.15 LSD into differential
  - > ⚠️ **Pitfall:** Drain diff fluid before dropping. The E36 diff is a subframe-mounted unit — you're unbolting the subframe mounts to drop it on some variants. Torque the output flange nut correctly (it's a crush washer design on some — verify for your unit before installing).

### Fuel System  [FUEL]
- [ ] ✅ Install Aeromotive 13129 FPR (return-style, adjustable)
- [ ] 🔧 Install Radium Engineering 20-1170 fuel pump hanger + Walbro F90000267
  - **Reference:** [Radium 20-1170 install instructions (PDF)](https://cdn.shopify.com/s/files/1/0887/4193/7449/files/19-0359.pdf) | [Wiring reference](https://github.com/wesleyxcooper/e36-wiring/blob/main/fuel-pump-hanger-reference.md) | [WireViz harness](https://github.com/wesleyxcooper/e36-wiring/blob/main/harnesses/fuel-pump-hanger.wv) | [Circuit schematic](https://github.com/wesleyxcooper/e36-wiring/blob/main/schematics/fuel-pump-pwm.py)
  - > ⚠️ **Pitfall:** Depressurize the fuel system before opening the tank. The E36 tank has a locking ring — a large channel-lock or a BMW ring tool (rent). Don't pry it with a screwdriver; you'll crack the plastic retainer.
  - > ⚠️ **Pitfall (hanger terminals):** Stainless stud terminals are live in a fuel-saturated environment. Clean contact surfaces before install. Use ring terminals + provided acorn nuts — anti-rotation feature prevents stud from spinning during tightening.
  - > ⚠️ **Swivel fittings:** Thread 20-1000-1010 (10AN ORB swivel) into pump-out port hand-tight first, then attach -10AN braided line before final torque — lets fitting rotate to correct routing angle before locking.
  - > ⚠️ **Wiring — SSR required, not a mechanical relay:** F90000267 draws 14.1A; MaxxECU PWM cannot be done through a mechanical relay. Use a 40A DC SSR (Crydom D1D40 or equiv opto-isolated DC-DC SSR). **Circuit:** Fused BATT+ (25A) → SSR Load(+) → SSR Load(-) → pump(+) stud (12 AWG). IGN switched 12V → SSR Ctrl(+) (22 AWG). MaxxECU GPO → SSR Ctrl(-) (22 AWG, shielded). Pump(-) stud → dedicated chassis GND bolt — **not shared with ECU sensor grounds.**
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

- [ ] ⚠️ **EWS2 bypass — required before MaxxECU will start the M52**   [ECU · ELECTRICAL]
  - The E36 M52 (OBD2, 1996+) has EWS2 immobilizer. The stock MS41/MS42 ECU handshakes with the EWS2 module via a dedicated wire to authorize fuel and ignition. MaxxECU has no EWS protocol — without bypass, the car cranks normally but will not fire (no injector or spark release).
  - **Option A (preferred):** EWS delete/emulator module — a small unit that sits in the EWS signal path and continuously returns the authorized signal. Available from BMW ECU tuning vendors. Clean, reversible, no harness modification.
  - **Option B:** Hard-wire bypass — disconnect the EWS signal wire at the ECU connector and permanently provide the authorized state. Irreversible on that harness, but fully functional and undetectable in operation.
  - Research this before ordering MaxxECU — confirm current preferred method with the MaxxECU community or SLG/MaxxECU support, as specifics vary by EWS version and harness.
  - > ⚠️ **Pitfall:** This is not a MaxxECU quirk — any replacement ECU (TurboLamik, MegaSquirt, etc.) faces identical EWS2 incompatibility. It is not optional.
- [ ] ✅ Mount MaxxECU Race unit (firewall or under dash — keep away from heat)
- [ ] 🔧 Resolve M52 VANOS cam sensor connector before connecting harness   [ECU · ENGINE]
  - The MaxxECU M50 terminated harness uses the non-VANOS M50 cam sensor connector. The M52 VANOS head uses a **different connector**.
  - **Option A (recommended):** Swap sensor to BMW PN `12141726590` — direct fit to M50 harness connector, no harness modification.
  - **Option B:** Add adapter pigtail between M52 sensor and M50 harness connector.
  - Without this: no cam/home signal → MaxxECU cannot resolve firing order → no-start. Confirm before first start attempt.
- [ ] 🔧 Connect MaxxECU M50 terminated engine harness to all engine sensors
  - > Reference: [MaxxECU M50 Harness Docs](https://www.maxxecu.com/webhelp/wirings-terminated_engine_harness-bmw_m50.html) | [22RPD E36 OBD2 Chassis Adapter](https://22rpd.com/shop/product/127)
  - > ⚠️ **Harness looming discipline — plan before you sleeve anything:**
    - **Loom together:** Engine sensor inputs (CLT, IAT, TPS, MAP, knock, PST-F1) as one sensor sub-loom. Injector wires as one sub-loom. Coil primaries as one sub-loom. The sensor sub-loom and the injector/coil sub-looms share the same general route but go into **separate sleeves** — same destination, different wraps.
    - **Keep apart — crank and cam triggers:** Most noise-sensitive wires in the system. Shielded wire, own sleeve, physically away from injector drives and coil primaries. The MaxxECU M50 harness already shields these — do not unsheath or re-loom them alongside anything else.
    - **Keep apart — wideband O2 signal:** The signal wire from the wideband controller to MaxxECU analog input is extremely sensitive. Shielded, own run, away from coil primaries and injector wires.
    - **Keep apart — high-current feeds:** Walbro pump, SPAL fan, 12V AC compressor — each runs its own dedicated circuit back to the fuse/relay block. Never bundle high-current power feeds alongside ECU signal wires, even in the same loom.
    - **CAN bus (8HP):** CAN H / CAN L must be twisted pair inside their sleeve at all times. Treat the MaxxECU 8HP GEN1 CAN harness as a sealed sub-loom — MaxxECU CAN port → 8HP connector, nothing else shares that sleeve. Do not untwist.
    - **Ground strategy:** Engine block → chassis (braided strap, short). Head → chassis (separate strap). All ECU sensor grounds tied to a single star-ground point on the chassis, then one cable to battery negative. Never mix ECU sensor grounds with the main power ground path — this is the most common cause of analog sensor drift and noise at high RPM.
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
- [ ] ⚠️ **Measure G30-770 RR hood clearance now** — while the engine bay is still open with the M5x in place
  - Test-fit the SPA MK5 manifold position and measure vertical clearance to hood line. Resolve clearance issues (vented hood, step down to G25-660 RR) **before** ordering or ceramic coating anything. This cannot be undone after the order.
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
  - **Power wiring:** 40A relay (Bosch 0 332 002 150) + 10 AWG feed/ground (35.5A max draw). Connector: Kostal 2+2 (4-pin) — Pins 1/2 = signal (2.8mm terminals), Pins 3/4 = power (5.8mm terminals).
  - **Post-shutdown cooling:** MaxxECU power hold relay keeps ECU alive after key-off — MaxxECU continues commanding pump via PWM until CLT < 70°C. Dedicated power hold relay required.
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
- [ ] 🏭 **Bring donor motor unopened to Euromotive — full longblock build: disassembly → machine work → longblock assembly** — budget **~$1,050–1,900 labor** (+ head machine work)   [ROTATING-ASSEMBLY · HEAD/VALVETRAIN · MACHINING]
  - Scope: disassembly + inspection (~$150–300) + bore/hone/deck (~$300–600) + short block assembly (~$400–600) + head assembly — springs/retainers/shims/lifters install (~$200–400). You take delivery of a **complete sealed longblock**. Do all bolted-on work (timing cover, oil system, intake, turbo, harness) yourself. **Hand to shop at dropoff:** King XP rod bearings, ARP-CVB1 head studs — shop installs these in the correct sequence during longblock build. **✅ Bring OEM water pump `07K121011B` — instruct Euromotive to remove impeller and install housing only.** Housing stays mounted and plumbed as coolant manifold; EWP handles pumping at Phase 3 install.
  - If donor motor has a cast crank, supply a separately sourced `07K105101E` forged crank — shop swaps it in, block and head are still fully usable from the donor.
  - Verify forged crank (engine serial prefix + Torx T30 lower oil pan bolts) **before** it goes in their door. Do not pay teardown labor on a cast-crank motor you didn't plan to replace.
  - [Euromotive Autohaus](https://www.eurohauspa.com/) — West Chester, PA · **(610) 416-5702** · VW/Audi/BMW specialist, engine rebuilds & swaps, authorized 034 Motorsports + Integrated Engineering dealer. Appointment-based.

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
  - iABED housing has a dedicated **turbo oil feed port** — install **-4AN fitting** (M12×1.5 to -4AN adapter or direct -4AN, per iABED port spec) at this port for the G30-770 oil feed line. Confirmed by @wingman703. Include a **0.9–1.0mm orifice restrictor** inline on the feed line — standard for journal bearing turbos; prevents over-oiling at idle.
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
- [ ] ✅ Install VR6 OBD2 throttle body (021133064A — OBD2 96-99 only)

### ECU — Offline Harness Build  [ECU]
- [ ] ⚠️ Build MaxxECU 07K engine harness offline (VW sensor connector ends, MaxxECU CMC on ECU side) — budget $300–500 in connector ends, wire, and conduit
  - > ⚠️ **Pitfall:** Build and test this harness on the bench before the swap day. Label every connector. Photograph the completed harness against the 07K engine before it goes in the car. A miswired sensor on swap day adds hours to a stressful job.
  - > ⚠️ **Apply Phase 1 loom discipline:** Crank and cam triggers shielded and in their own sleeve — separate from all other wires. Sensor input sub-loom (CLT, IAT, TPS, MAP, knock) separate from injector sub-loom, both separate from coil primaries. No high-current feeds (pump, fan) inside the signal harness at any point.
  - > Route the completed harness dry against the installed 07K before final sleeving — confirm connector reach, correct lengths, and clearance from exhaust headers and moving parts. Sleeve only after the routing is confirmed.
  - > ⚠️ **Pedal connector variant:** The VW accelerator pedal uses a different connector on MK4 vs MK5/MK6 assemblies — confirm which pedal unit you're running before pinning the throttle wires. MaxxECU requires dual-track TPS input; wire both tracks to separate analog inputs.
  - > **Alternator — confirmed 140A (partslink24 VIN `WVWAR71K17W082055`, PR T59):** OEM part `07K 903 023 A` (Bosch, 12V, 140A, CW rotation). Reman: `06F 903 023 FX` → superseded by `07K 903 023 AX`. Decoupler pulley: `07K 903 119`. **140A provides sufficient headroom for the electric AC compressor (25–40A draw) — no alternator upgrade needed.** Reuse the OEM donor unit; aftermarket replacement if needed ~$80–120 on Amazon cross-referencing `07K 903 023 A`.
  - > **Alternator excite wire:** Plan a dedicated wire from the body harness to the alternator D+ (excite) terminal. Without it the alternator may not begin charging below ~1,500 RPM. It will self-excite above that threshold via the voltage regulator, but correct wiring ensures reliable cold-start charging from the first start.
- [ ] ✅ Document all sensor connector pinouts, oil line fittings, and coolant port locations before engine leaves the stand

---

## Phase 3 — 07K Final Swap & Integration

### Chassis — Engine Install  [CHASSIS]
- [ ] 🔧 Pull M5x interim engine
  - > Reference: [E36 engine removal (YouTube)](https://www.youtube.com/watch?v=kracqUH216s)
  - > ⚠️ **Pitfall:** Drain coolant and oil before pulling. Disconnect the battery. Label every hose and connector as you remove it — the 07K bay will look different and you will not remember where the M52 AC line went 6 months later.
- [ ] 🏭 Install custom E36 07K engine mounts (Race3 / JNC) — welded steel, shop work
- [ ] 🔧 Lower 07K into engine bay, align to mounts + 8HP adapter
  - > ⚠️ **Pitfall:** Do not torque engine mount bolts until the engine is hanging freely at the correct height and the 8HP adapter plate is loosely mated. Torquing mounts before final positioning locks you into a misaligned drivetrain.

### Drivetrain  [DRIVETRAIN]
- [ ] ✅ Swap to 07K→8HP adapter kit (DomiWorks or Chatham CNC — whichever was quoted/ordered at Phase 2)
- [ ] ✅ Swap starter to VW longitudinal 068911024GX (Bosch reman, FCP Euro) — $349.99 + $50 refundable core
  - 068911024GX (reman, FCP Euro lifetime guarantee) = 068911024H (Bosch new) = same nose, fully interchangeable. NOT the N54 starter from Phase 1.

### ECU & Engine Harness  [ECU]
- [ ] 🔧 Connect MaxxECU 07K harness (plug in pre-built harness, load 07K base map)
  - > Confirm accelerator pedal connector variant (MK4 vs MK5/MK6) matches the harness built in Phase 2 before plugging in.
  - > ⚠️ **Wideband sensor:** Use a **genuine Bosch** wideband sensor for the primary lambda input to MaxxECU. Aftermarket wideband sensors have documented accuracy issues at WOT and at rich lambda values below 0.75. Tune quality depends entirely on accurate AFR data — do not substitute.

### Air & Boost  [AIR]
- [ ] ✅ Install SPA Turbo MK5 T3 manifold (TMW22) — top-mount position
- [ ] ✅ Install Garrett G30-770 RR — $2,731 (supercore $1,883.91 + 0.83 A/R housing $847.29)
  - > ⚠️ **Pitfall:** The G30-770 must be reverse rotation — standard rotation will direct the compressor outlet into the firewall with the SPA MK5 manifold in a longitudinal installation. Double-check the Full Race listing at purchase time (RR part numbers differ from standard).
- [ ] ✅ Install T3-to-V-band adapter — ~$35–50 (connects SPA T3 manifold outlet to G30-770 V-band turbine inlet; adds ~25–35mm to stack height)
- [ ] ✅ Install Tial 44mm MVR wastegate (V-band direct fit to SPA manifold WG port)
- [ ] 🏭 Measure downpipe routing and send to fabricator — custom RHD downpipe around [STEERING] rack
- [ ] ✅ Re-pipe CXRacing FMIC core for new G30-770 RR turbo position (all Phase 1A piping unusable)
- [ ] 🔧 Re-plumb Turbosmart boost solenoid for G30-770 + Tial 44mm wastegate setup
  - Solenoid from Phase 1A carries over; all boost control plumbing is turbo-position specific. Re-route: compressor outlet reference line → solenoid inlet; solenoid outlet → Tial 44mm actuator port.

### Fuel System  [FUEL]
- [ ] ✅ Install ID1050x × 5 injectors into BBG fuel rail
- [ ] 🔧 Swap Walbro 450LPH fuel pump (Radium E36 basket kit) — $203.99
  - > ⚠️ **Flex fuel sensor:** The ethanol content sensor is installed inline in the fuel feed from Phase 1. When re-plumbing for the 450LPH pump and new lines, confirm the inline sensor position is preserved in the new fuel feed routing. No wiring changes needed — the MaxxECU digital input is already configured.

### Coolant System  [COOLANT]
- [ ] ✅ Route and connect custom 07K coolant hoses (measure in-car before ordering lengths)

### Oil System  [OIL]
- [ ] ✅ iABED baffled oil pan — pre-installed during Phase 2 engine build; no Phase 3 action required
- [ ] ✅ Re-plumb existing Setrab/Mocal 10-row oil cooler core to iABED -AN ports
  - The iABED longitudinal oil filter housing (Phase 2) has built-in thermostatic -AN ports — no sandwich plate needed. The MMOCF-BMW fitting kit stays with the pulled M52 engine.
  - > ⚠️ **Note:** If stock oil housing was used in Phase 2 instead of iABED, install the Mishimoto MMOP-SPT thermostatic sandwich plate ($170.95) between the filter and housing + run -10AN lines to the Setrab/Mocal core.

### Air / Throttle  [AIR]
- [ ] ✅ Install Lokar LOK-TC-1000LS148 throttle cable (cut to fit, adjust drum end for VR6 TB)

### Electrical  [ELECTRICAL]
- [ ] ✅ Install 140A 07K alternator (PN 07K903023A — native 07K unit, OEM mounting points)
  - > ⚠️ **Pitfall:** The alternator charge wire runs from the B+ terminal on the alternator to the main battery/fusebox. In the new longitudinal orientation this run may be longer than in the transverse MK5 — plan the wire route before cutting to length.
  - > Wire the alternator D+ (excite) terminal to a switched 12V source in the body harness. The alternator will self-excite above ~1,500 RPM via the voltage regulator, but without the excite wire it will not charge reliably from cold start.

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
| FB 07K Swap — Thrust Bearing Thread | [facebook.com](https://www.facebook.com/groups/07kswap/permalink/3607377339428880/) |
| FB 07K Swap — Oil Squirter Thread | [facebook.com](https://www.facebook.com/groups/07kswap/permalink/3608094966023784/) |

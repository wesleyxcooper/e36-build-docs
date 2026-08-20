# Phase 2: 07K Block Sourcing

**Phase:** 2  
**System tags:** `[ADMIN]` `[MACHINING]`  
**Shop-mandatory:** No  
**Prerequisites:** Phase 1 foundation underway; car running on M52 (or at minimum MaxxECU + 8HP commissioned). 8HP variant decision locked before ordering any adapter plate.

> **Status (current):** Block sourced and in hand. One open item: **forged vs. cast crank not yet confirmed** — requires pulling the lower sump pan and physically inspecting the counterweight parting line (see Step 2). All other sourcing decisions complete.

---

## Parts

| Part | PN / Source | Cost |
| --- | --- | --- |
| 07K donor block (iron — BGP/CBUA/CEPA) | Dasparts.ca, eBay, or local salvage | ~$300–700 |
| Cam adjuster stretch bolts (TTY — order early) | `N91042802` · [FCP Euro](https://www.fcpeuro.com/products/audi-camshaft-sprocket-bolt-genuine-audi-n91042802) | $9.19/ea — order 2 |
| Alt cam adjuster bolt | `N91050202` · ECS Tuning | — |
| DomiWorks 07K→8HP adapter kit (if DomiWorks path) | VW 1.8T/1.9T → BMW 8HP N57 Kit SKU 21015002 · [domi-works.com](https://www.domi-works.com/products/vw-1-8t-1-8t-to-bmw-8hp-45-50-70-75-n47-n57-b57-b58-s58-adapter-kit) | ~$1,200–1,397 est. |
| Chatham CNC 07K→8HP custom kit (if Chatham path) | Quote required · [chathamcnc.com](https://www.chathamcnc.com/contact.html) | Quote only |
| LPS 07K titanium exhaust stud kit | [lpsfab.com](https://lpsfab.com/products/07k-titanium-exhaust-stud-kit) | TBD |
| HF 2-Ton Foldable Shop Crane | SKU 58755 · [harborfreight.com](https://www.harborfreight.com/2-ton-capacity-asme-pase-certified-foldable-shop-crane-58755.html) | $369.99 |
| HF 1000 lb Engine Stand | SKU 59201 · [harborfreight.com](https://www.harborfreight.com/1000-lb-capacity-engine-stand-59201.html) | $109.99 |
| S&P Automotive 07K Engine Stand Adapter | [s-pautomotive.com](https://s-pautomotive.com/product/07k-engine-stand-mount/) — **PURCHASED** | $99.00 |
| Zerust VCI Engine Storage Bag (24"×26"×46") | [Amazon](https://www.amazon.com/Zerust-Engine-Storage-Bag-24/dp/B0CJMMPGF5) | ~$35 |
| Wisedry 4×500g rechargeable silica gel packs | [Amazon](https://www.amazon.com/wisedry-Silica-Gel-Desiccant-Packs/dp/B0CKYSZ31J) | — |
| Fluid Film or CRC 3-36 (machined surface protection) | Hardware/auto store | — |
| Summit Racing foam engine storage plugs (assorted port sizes) | Summit Racing | — |
| HF Web Lifting Sling 2000 lb (×2) | SKU 71451 · [harborfreight.com](https://www.harborfreight.com/2000-lb-capacity-2-in-x-6-12-ft-web-lifting-sling-71451.html) | $9.99 ea |

---

## Tools

- Digital calipers (forged crank counterweight inspection)
- Drop wrench / ratchet for lower steel sump bolts
- Engine hoist (see above) + web slings
- Inspection light or phone flashlight (counterweight parting line inspection)
- Forklift-style pallet jack (optional — moves donor on pallet)

---

## Procedure

### 1 — Identify and source iron-block 07K donor

Target casting codes **BGP**, **CBUA**, or **CEPA** — these are the confirmed iron blocks suited for a forged build. The BGP (2007 VW Rabbit MkV 2.5L) is the most common and well-documented in the 07K Swap community. Avoid aluminum-block variants.

> ⚠️ **Pitfall:** Verify the early forged crankshaft (pre-2007 production date) before paying for any block. Later production cranks are cast, which is not safe at 9,000 RPM under boost. Do NOT rely on VIN-based parts lookup alone — parts catalog supersession artifacts have returned incorrect PN for actual installed crank (confirmed: partslink24 returned `07K105101E` for a block confirmed to have `07K105101F` stamped on the flange). **Physical inspection is the only way to confirm.**

### 2 — Verify forged crank at teardown

Drop the lower steel sump pan (Torx T30 bolts). Rotate the crank slowly and inspect the **unmachined flat faces of the counterweights**:

- **Forged:** Wide flat band, 1/8"–1/4" (3–6 mm) across, with visible grind/trim marks where die flash was cut — unambiguous.
- **Cast:** Thin ~1 mm scribe-line seam, no grind marks.

Only `07K105101E` is community-confirmed forged (per Issam Abed, VWVortex post #31). `07K105101F` is in-production use but forged/cast status is **unconfirmed** — inspect physically. If cast: source a separately confirmed forged crank (`07K105101E`, ~$1,050–1,250 from eBay Germany).

> ⚠️ **Pitfall:** The 6-character stamp on the crank rear face (e.g. `GGGBBG`) is the **main bearing journal classification code** (G=Gelb/yellow, B=Blau/blue, per VW color system). This is NOT a material designation and appears on all 07K cranks regardless of construction method. Do not use this to infer forged vs cast.

### 3 — Adapter plate decision: DomiWorks vs Chatham CNC

Get quotes from both before committing. This is a non-returnable decision.

**DomiWorks** ([domi-works.com](https://www.domi-works.com/collections/8hp-adapter-kits)):  
- 07K shares the VW 1.8T/1.9T flywheel/bellhousing bolt pattern — kit applies directly  
- SKU 21015002: VW 1.8T/1.9T → BMW 8HP N57 Kit  
- Includes billet SS2541 flexplate, center guide, hardware; 33 mm anodized aluminum plate  
- Fits 8HP70/75 N57; verify N63 variant compatibility if running N63 8HP  
- **Requires VW longitudinal starter swap** to `068911024GX` (Bosch reman, FCP Euro, $349.99 + $50 core) — NOT the N54 starter used in Phase 1  
- Estimated ~$1,200–1,397; quote before ordering

**Chatham CNC** ([@chathamcnc](https://www.chathamcnc.com/contact.html) / mike@chathamcnc.com / 919-740-9748):  
- Custom kit: adapter plate + adapter flexplate + modified torque converter  
- Quote required — contact directly with 07K block code and 8HP variant  
- Chatham has 07K engine-side geometry from @wingman703's Dodge 8HP build, which reduces engineering scope  
- Key question at quote: does the kit reuse the N54 starter or require the VW 068911024GX?

> ⚠️ **Pitfall:** Confirm your specific 07K block code (BGP/CBUA/CEPA) AND 8HP variant (N57 vs N63 bellhousing pattern) with DomiWorks in writing before ordering — hardware is non-returnable. These are NOT interchangeable.

### 4 — Order long-lead parts at Phase 2 kickoff

These items have known lead times that will delay assembly if ordered late:

- **BBG billet valve cover + timing cover + coolant flange combo** — ~6-week lead time. Order at Phase 2 kickoff, not at assembly time. See [boostbrothersgarage.com](https://www.boostbrothersgarage.com/collections/944-07k-swap/products/07k-billet-valve-cover-upper-timing-cover-and-rear-coolant-flange-combo), $975–$1,075.
- **Cam adjuster stretch bolts** (`N91042802`, $9.19 ea at FCP Euro) — currently hard to source through VW directly. Order 2. Also available through Porsche Cayenne/Panamera parts channels if backordered. Reference: [07K Hard to Find Parts Wiki](https://the07k.wiki/wiki/Hard_to_Find_Parts).
- **LPS oil pump mod send-in** — 4–8 week lead time. Drop the pan, pull the pump, send to LPS early so it returns before Euromotive finishes the longblock. See `24-07k-oil-system.md`.

### 5 — G25-660 RR hood clearance confirmation

While the M52 is still in the car, test-position the SPA MK5 manifold + G25-660 RR turbo (or a mock-up) and verify clearance to the hood line. This is a **confirmation step, not a decision point** — turbo selection is already locked. If clearance issues appear at this stage, the resolution is a bubble/vented hood, not a turbo change.

---

## Storage Protocol — Uninsulated Garage

*Applies to the as-received donor longblock and to the sealed build longblock returned from Euromotive.*

### Immediately on delivery (on pallet — stand not yet available)

- [ ] Leave on pallet — keeps engine off concrete; do not move without a hoist
- [ ] **Plug every port** — all 5 intake runners, all 5 exhaust ports, oil filler cap, dipstick tube, coolant inlet/outlet, all open sensor bungs. Use Summit Racing foam storage plugs sized by port diameter, or tape.
- [ ] Check oil level — if donor had oil, leave it in (protective coating). If dry or very low, add a quart of cheap motor oil to coat internals.
- [ ] **Fog the cylinders** — pull all 5 spark plugs, shoot fogging oil or motor oil from a squirt bottle into each bore, reinstall plugs.
- [ ] Coat exposed machined surfaces (flywheel mating face, head deck if exposed, any bare steel) with **Fluid Film or CRC 3-36**. WD-40 evaporates and is not suitable for storage.
- [ ] Cover with a moving blanket or breathable tarp — **not plastic** (traps condensation).

### Long-term storage (on stand — weeks to a year+)

- [ ] Mount on S&P adapter + HF 59201 stand as soon as crane is available. The S&P adapter attaches to the dedicated **side-mount bosses on the exhaust side** of the 07K block (OEM engine mount location). In RHD E36 longitudinal orientation (timing chain forward), exhaust side = driver side (right). S&P adapter fits the 2" ID HF/Pittsburgh head tube on 59201. No load leveler needed for pallet→stand.
- [ ] **Primary protection — Zerust VCI Engine Storage Bag** (24"×26"×46", Amazon ~$35): VCI chemistry built into the bag material; no secondary products required inside the bag. Rated 3–5 years in non-climate-controlled conditions. Validated at industrial scale: 2,000+ engines stored 5+ years in non-climate-controlled conditions ([Zerust case study](https://www.zerust.com/resources/case-studies/zerust-designs-a-long-term-engine-storage-system-to-protect-from-corrosion/)).
  - *If engine is already on stand (hardware passes through block, bag cannot be fully sealed):* Place Zerust ActivPak VCI emitter packets inside the sealed intake and exhaust ports; place Wisedry desiccant packs under a breathable cover over the assembly instead.
- [ ] **Supplemental — Wisedry 4×500g rechargeable silica gel packs**: place 2 packs under the cover. Microwave recharge in 10–16 min; color indicator (orange = dry, green = saturated). Recharge when green.

> **No periodic crank rotation required.** Fogging the cylinders before sealing provides the cylinder wall oil film. VCI bag or emitters handle all external surfaces. With both in place, no rotation is needed for the storage duration.

> **Skip whole-garage dehumidifiers** (Eva-Dry E-500, etc.) — these are sized for gun safes (~500 cu ft) and are ineffective under a breathable cover in an open garage. Bag the parts; do not attempt to dehumidify the space.

---

## Transport Options

### 07K Engine (~400 lbs dressed)

| Scenario | Vehicle | Method |
| --- | --- | --- |
| Either | U-Haul 15' truck | Engine seated in a tire on the truck floor. 2× ratchet straps (U-Haul 12' / 800 lb WLL, ~$7.95 ea) over it to floor D-rings. Tire cradles and prevents tipping. |

### In-Garage Lifting

- **Hoist:** HF 2-Ton Foldable Shop Crane, SKU 58755 — $369.99
- **Slings:** 2× HF Web Lifting Sling 2000 lb, SKU 71451 — $9.99 ea. Basket hitch: loop under the component, both sewn loop eyes on the crane hook. Adjust fore/aft to level the load. No knots, no shackles required.

---

## References

- [07K Hard to Find Parts Wiki](https://the07k.wiki/wiki/Hard_to_Find_Parts)
- [VWVortex — telling a forged crank from a cast](https://www.vwvortex.com/threads/telling-a-forged-crank-from-a-cast.5516409/)
- [Issam Abed (iABED) — VWVortex post #31, forged crank confirmation](https://www.vwvortex.com/threads/has-anybody-ever-seen-a-forged-crank-with-the-updated-chain-from-the-07-12.6141117/)
- [DomiWorks adapter kits](https://www.domi-works.com/collections/8hp-adapter-kits)
- [Chatham CNC contact](https://www.chathamcnc.com/contact.html) · mike@chathamcnc.com · 919-740-9748
- [E36 DIY Build Checklist — Phase 2 Sourcing & Machine Shop](../E36_DIY_Build_Checklist.md)
- [E36 9000 RPM Project Plan — Phase 2 Rotating Assembly](../E36_9000RPM_Project_Plan_Verified.md)

# Phase 1A: M5x Turbo Block Sourcing & Aux System Overview

**Phase:** 1A  
**System tags:** `[ADMIN]` `[MACHINING]`  
**Shop-mandatory:** No  
**Prerequisites:** Phase 1 foundation underway (8HP + EPS + MaxxECU M50 bundle in progress). Block sourcing decision must be locked before any rotating assembly parts are ordered.

> **Status (current):** Path not yet committed. Decision tree in Step 1. Read before spending anything.

---

## Phase 1A vs 1B vs 07K — Decision Context

The build has three valid engine paths. The adapter plate (M5x→8HP, already sourced) works identically for all three M5x variants — it is not a path-limiting factor.

| Path | Engine | Power target | RPM character | Status |
| --- | --- | --- | --- | --- |
| **1A** | Iron M52B28 turbo (M52B25 or M50B25TU acceptable if B28 unavailable) | Power is incidental to the spec; 400–500whp pump / up to ~700whp E85 | **8,200–8,500 RPM primary design point** — RPM-first, GT-R analog (RB26DETT redline 8,000 / fuel cut 8,200); 9,000 RPM structural margin | This document — not yet started |
| **1B** | M52 NA (existing block) | 250–280whp at 7,800 RPM | High-revving, peaky, no boost | `10-m52-engine-prep.md` |
| **3 (Phase 3)** | 07K 2.5L inline-5 turbo | 500–600whp at 9,000 RPM | Boost + high RPM | `20-07k-sourcing.md` onward |

Phase 1A and Phase 3 are competing paths — you do not do both. Phase 1A is the fallback if the 07K donor crank sourcing stalls indefinitely and you want a running turbo car before Phase 3 is feasible. It can also be the permanent path.

> ⚠️ **UK M52 block caveat:** The E36 imported from the UK runs a UK-spec M52. UK and EU market M52 engines are aluminum block with Nikasil-coated liners — not iron. The safe boost limit on an aluminum M52 is approximately 350hp before block and thread integrity become serious concerns. ([qualitec.eu](https://www.qualitec.eu/bmw-m50-m52-m54-tuning-guide), [overruntuning.com](https://www.overruntuning.com/e36-turbo-guide)) **Do not build the existing UK M52 for boost.** Phase 1A requires sourcing a separate iron block.

---

## Block Options — Decision Tree

### Option A — M50B25 Non-VANOS (NV) Iron Block (1990–1992)

**Best base for a no-compromise turbo build.**

- Iron block, 84mm bore × 75mm stroke, 2.5L
- No VANOS — simpler timing system, no solenoid wiring, no variable timing to tune around boost cam timing
- Confirmed capable of 1,000hp+ on the iron block alone ([qualitec.eu](https://www.qualitec.eu/bmw-m50-m52-m54-tuning-guide))
- Donor vehicles: E34 520i (2.0L NV) and E34/E36 325i/525i pre-VANOS (look for 1990–early 1992 production)
- MaxxECU M50 harness is pre-terminated for M50 NV and M50TU — NV version is actually simpler (no VANOS solenoid to wire)
- NV cam followers are solid shim (not hydraulic) from factory — no shim kit needed for high-RPM provision
- Crank: cast from factory on almost all M50B25 production — plan on sourcing an upgraded crank or using a forged rotating assembly (see `16-m5x-rotating-assembly.md`)

**Availability:** Less common than TU. E34 520i/525i NV donors found at European salvage; US-market E34 525i 1989–1992 (pre-VANOS). Worth specifically targeting if one surfaces. Less common in the UK.

### Option B — M50B25TU (with single VANOS) Iron Block (1992–1995)

**Most practical iron block for this build.** Same iron casting as NV. VANOS is single-cam on the intake only.

- Same iron block as NV — bore, wall thickness, thread engagement all identical
- VANOS (single, intake only): adds intake cam variable timing. MaxxECU M50 harness already includes VANOS solenoid support — no harness modification needed. VANOS helps reduce turbo lag at low RPM, which is genuinely useful on a boosted M50.
- Donor vehicles: E34 525i (1992–1996), E36 325i (1992–1995 non-US). Plentiful in the UK and EU.
- Crank: cast from factory — plan on upgraded rotating assembly
- Rod length: 140mm centre-to-centre (longer than NV's 135mm) — specify TU spec when ordering ZRP or ARP rods

**Availability:** Good in the UK (E34 525i donors at breakers). US availability: E36 325i (1993–1995), E34 525i (1992–1995) — both common enough in NE US salvage yards. Bare blocks ~$400–600 US, complete engines ~$1,350–1,600. ([gardnerautorepair.com](https://www.gardnerautorepair.com/prq5800e74523191/e36-engine/))

### Option C — US-spec Iron M52B28 (1996–1998 E36 328i)

**If a rebuild of the existing block's displacement is desired.** The US E36 328i used an iron M52B28 (not aluminum). **Confirm block material before committing** — Z3 models and later M52TU (1999+) used aluminum.

- 84mm bore × 84mm stroke, 2.8L — more displacement = more torque at lower boost, less lag
- Single VANOS (intake only) — same MaxxECU support as M50TU
- Stock rotating assembly (cast crank, M52/S52-spec rods) safe to approximately 450–500whp with forged internals + head studs + Cometic/Athena gasket ([bmwtuning.co](https://bmwtuning.co/bmw-e36-turbo-kit-guide/))
- M52B28 crank is **forged steel** — confirmed in the BMW M52 factory service manual ([landy.ee](http://www.landy.ee/manuals/engine/BMW_M52_engine.pdf)) and [Australian Car.Reviews](https://www.australiancar.reviews/bmw-m52-engine-1994-01/): *"the M52B28 engine had a forged steel crankshaft"*; the M52B20 and M52B25 have cast iron cranks — the forged crank is B28-specific. Stock 84mm stroke = **23.8 m/s mean piston speed at 8,500 RPM** — correct for an RPM-first build. Stock crank stays; VAC balances it to the rod/piston combination at build time
- Available from US E36 328i donors — the most common source if you want iron M52 and avoid sourcing an M50TU separately

**Caveat:** The 328i donor engine may already be at significant mileage. Inspect bore wear before boring to oversize.

### Option D — Euro S50B30 (1992–1995 E36 M3 3.0L, non-US)

**Best rotating assembly from factory; most expensive to source.**

- Iron block, 86mm bore × 85.8mm stroke, 3.0L (S50B30US is different — see below)
- Forged crank (single-piece), forged connecting rods — factory components safe to higher power without teardown
- Double-VANOS (intake + exhaust)
- MaxxECU supports double-VANOS — but wiring is additive; confirm double-VANOS sensor pinout with MaxxECU before ordering harness
- US availability: very rare — Euro M3 never officially sold in US; sourcing from EU or Canada
- Pricing: complete engines EU €1,500–3,000+; bare blocks €800–1,500

**Not the practical path for this build** unless one surfaces at a good price. Note that the US S52B32 (1996–1999 E36 M3) has a cast crank and powdered-metal rods — do not confuse with the Euro S50B30.

---

## Recommended Path

**Source an iron M52B28 from a 1996–1998 US-spec E36 328i, 1997–1998 E39 528i, or 1996–1998 E38 728i.** The M52B28 specifically — not the M52B25 (E36 323i). The B28 is the only M52 variant with a **forged steel crankshaft**, confirmed in the BMW M52 factory service manual ([landy.ee](http://www.landy.ee/manuals/engine/BMW_M52_engine.pdf)) and [Australian Car.Reviews](https://www.australiancar.reviews/bmw-m52-engine-1994-01/): *"the M52B28 engine had a forged steel crankshaft and graphite-coated pistons to reduce friction; M52B20 and M52B25 had cast iron crankshafts."* The forged crank is the primary reason this specific variant is correct.

**Build philosophy: RPM-first.** This build targets 8,200–8,500 RPM as the primary design point — the same operating range as a GT-R RB26DETT (8,000 RPM redline, 8,200–8,500 fuel cut). Power is a byproduct of the spec. At stock stroke (2.793L), achieving a given power number requires ~18% more boost than a 3.3L stroker would — so the turbo sizing choice drives the ceiling. Power estimates are thermodynamic calculations (air mass flow × fuel energy × brake thermal efficiency at 8,500 RPM, VE = 0.80, BTE 30% pump / 33% E85): ~400–500whp on pump 93 at 12–18psi; ~550–650whp on E85 at 20–25psi is the realistic street ceiling. 700whp+ on E85 is achievable but requires a large-frame turbo at 25–30psi — aggressive for a street car. The stock M52B28 forged crank at 84mm stroke produces **23.8 m/s mean piston speed at 8,500 RPM** — well within safe territory. **Do not replace it with a stroker crank.** Longer stroke increases piston speed at the RPM ceiling without structural benefit:

| Crank | Stroke | m/s at 8,500 RPM |
| :--- | :--- | :--- |
| **M52B28 stock (forged steel)** | **84mm** | **23.8 m/s — correct choice** |
| S52 (forged steel) | 89.6mm | 25.4 m/s — longer, no advantage for RPM |
| 5150 billet stroker | ~97mm | 27.5 m/s — worst piston speed for this goal |

The stock crank is professionally balanced to the rod and piston combination at VAC during the build. ATI Super Damper is mandatory regardless — see `18-m5x-timing-oil-pump.md`.

**Sourcing options:**

1. **Local / FB Marketplace (preferred when available):** Search "328i engine," "M52 engine," "BMW 328 motor." Confirm iron block via VIN decoder before the pickup drive. Common leaks (valve cover, VANOS seals, oil pan) are not a concern for a rebuild core. "Pulled for swap" or accident cars (side/rear impact only) are fine.
2. **eBay / car-part.com:** Verified active listings in Parts table below.
3. **VAC sources the core on request:** Per VAC's engine rebuilds page ([vacmotorsports.com/engine-rebuilds](https://vacmotorsports.com/engine-rebuilds/)): *"We can build your engine from a core you supply, or source a suitable core on request."* Call 215-462-4666 and specify iron-block M52B28 — not M52TU aluminum, not M52B25.

**What to avoid:**
- M52B25 (E36 323i) — cast iron crank, not the correct variant for this build
- M52TU (E46, late E39 or Z3, 1998+) — aluminum block; iron block is magnetic, aluminum is not
- E46 328i (2000+) — M52TU or M54, neither is the right block

**Do not hold the build waiting for an M50TU.** The M50 NV's advantage is solid shim cam followers from factory — saves the $150 Alien Engineering kit. Not worth waiting or paying a premium.

> ⚠️ **M52 block variant warning:** Only **1996–1998 US-spec E36** M52 engines are iron block. The M52TU (E46 and late E39, 1998+) switched to an aluminum block — not suitable for this power level. Verify "US-spec E36" and year before committing. Iron block is magnetic and significantly heavier than aluminum.

**S52 (US E36 M3) — not the right engine for this build.** The S52 has a forged crank, but so does the M52B28, and the M52B28 crank is shorter stroke (84mm vs 89.6mm) — better for the RPM ceiling. S52 donors cost $3,000–3,500 shipped for a usable example vs ~$800–1,500 for a tested M52B28. Thinner walls (86.4mm bore) are a concern at sustained high boost on E85. No scenario exists where the S52 improves on the M52B28 for an RPM-first build.

---

## Parts

| Part | PN / Source | Cost |
| --- | --- | --- |
| **Iron M52B28 donor (primary)** — E36 328i, 1996–1998 US-spec, iron block | car-part.com; local salvage; eBay. Verified active listings: [E36 328i M52 137k tested — germanonly, $887+$450 ship](https://www.ebay.com/itm/128064345424) · [E36 328ic M52 complete — germanonly, $911+$450 ship](https://www.ebay.com/itm/298508817920). Germanonly (99.7%, 19.6K transactions) is a reliable high-volume OEM parts seller. | **~$800–1,500 complete shipped** |
| **Iron M52B25 donor** — E36 323i, 1996–1998 US-spec; same iron block but **cast iron crank** — requires crank replacement for 8,500 RPM target; not the preferred donor | car-part.com; local salvage | ~$400–800 complete |
| **M50B25TU donor** (opportunistic only) — E34 525i or E36 325i pre-1996; **cast iron crank** — same limitation as M52B25 for this build's RPM target; don't hold the build or pay more than M52B28 prices | E34 525i breakers; car-part.com | ~$800–1,200 running |
| **M52B28 forged crank (standalone)** — if running an M52B25 or M50TU block, source a standalone M52B28 forged crank instead of hunting a full B28 donor. Pair with 135mm c-c rods (M52B28 spec) and pistons matched to 84mm bore + 84mm stroke; confirm full spec with VAC at drop-off. Active used market confirmed ([BimmerFest thread 962402](https://www.bimmerfest.com/threads/bmw-e36-e39-328-528-m52-b28-forged-crankshaft-no-longer-available.962402/)) | Used: eBay "BMW M52B28 crankshaft"; local BMW wreckers | ~$100–200 used |
| **Bosch 140A alternator (AL0739X)** — upgrade at teardown, mandatory with PD2-18012AJA electric AC | BMW PN `12311744567` · [BimmerWorld AL0739X](https://www.bimmerworld.com/Engine/Alternators/Alternator-140-Amp-12-31-1-744-567.html) $374.99 + $70 core · [Turner Motorsport AL0739X](https://www.turnermotorsport.com/p-371693-oem-bosch-remanufactured-alternator-140amp-e36-e34/) $415.99 + $100 core · Confirmed fit: E36 323i/325i/328i/M3, E34 525i, M50/M52/S50/S52 · Note: requires 55mm alternator pulley — reuse existing if already 55mm | ~$375–416 + core |
| HF 2-Ton Shop Crane | SKU 58755 — **already purchased** | — |
| HF 1000 lb Engine Stand | SKU 59201 — **already purchased** | — |
| Generic BMW inline-6 engine stand adapter | eBay ~$40–60 (4-bolt pattern M50/M52/S50 engine mount boss) | ~$50 |
| Zerust VCI Engine Storage Bag | [Amazon](https://www.amazon.com/Zerust-Engine-Storage-Bag-24/dp/B0CJMMPGF5) | ~$35 |

---

## Aux System Differences vs 07K

This section documents what changes or stays the same on the M5x turbo build vs the 07K. These questions often come up when planning — answered here so they don't need to be researched per-subsystem.

### Water pump

**07K path:** OEM water pump impeller removed; housing left as passive coolant manifold; Pierburg CWA400 electric pump handles all circulation (see `21-07k-rotating-assembly.md` step 10 and `33-coolant-turbo.md`).

**M5x turbo path:** The M50/M52 uses a mechanical belt-driven coolant pump, retained in the existing accessory belt drive. **No change required for Phase 1A.** The mechanical pump is adequate for a boosted M5x at street/track duty cycles. Replace the OEM pump with a quality unit at teardown — FCP Euro or ECS Tuning OEM-specification pump, ~$80–120. Electric conversion (Davies Craig EWP115 or EWP150) is an option if you want post-shutdown coolant circulation to prevent heat soak, but it is not required and adds routing complexity. If keeping the mechanical pump: install a coolant post-circulation timer circuit (relay + 12V from ECU post-run output) to run a separate small bleed pump on the turbo water jacket for 3–5 minutes after shutdown — prevents turbo bearing coking. The Pierburg CWA50 is a compact option for this secondary circuit (~$120 used BMW OEM).

### Air Conditioning — Top-Mount Manifold Routing

**This is where manifold choice matters for AC.** Both the K64 AC+ RHD manifold and the RSI T4/T3 top-mount manifold clear the AC compressor itself — confirmed by both vendors. The AC compressor sits on the intake (passenger) side; the turbo manifold is on the exhaust (driver) side. No direct compressor conflict.

**The issue is the downpipe and refrigerant lines.** For a top-mount manifold, the downpipe exits the turbine housing and routes between the engine and the firewall on the driver side. The AC refrigerant high-pressure and low-pressure lines also run along the firewall in this area, on their way from the compressor to the condenser and evaporator.

**Procedure:**
1. Install engine and manifold first (without turbo or downpipe attached)
2. Identify where the existing AC lines run along the firewall driver-side
3. Mock up the downpipe path (cardboard or PLA mockup)
4. Determine if the AC lines need re-routing around the downpipe, or if minor line bending clears the path
5. If re-routing required: R134a system must be discharged first — this is an EPA 608 regulated task. Have a shop evacuate and re-fill. Fabie Boys or VAC can handle this in-house.

**Electric AC conversion (optional):** A Denso or Sanden electric compressor (sourced from a hybrid/EV donor) removes the belt-driven compressor entirely, eliminating the routing conflict and the PS pump delete's empty belt path at the same time. The electric compressor mounts remotely, runs independently of engine state, and can cool the cabin post-shutdown. Adds ~$1,000–2,500 for the compressor and control wiring. Not required for Phase 1A; revisit if line rerouting proves difficult.

### Power steering pump

**07K path:** No factory PS pump; E36 EPS conversion (Phase 1, `13-eps.md`) handles steering assist electrically.

**M5x turbo path:** Same. EPS conversion already planned in Phase 1 deletes the hydraulic pump. The M50/M52 PS pump bracket and pump are removed at EPS install. The M5x accessory belt drive is re-routed without the PS pump at that point. Confirm the K64 or RSI manifold downpipe routing does not re-introduce any clearance issue with the PS pump bracket stub — verify at mock-up.

### Alternator

**07K path:** 07K has no accessory belt drive in longitudinal orientation (it's purpose-built for transverse use); the E36 alternator must be relocated or a dedicated alternator support fabricated for Phase 3. See `30-07k-install.md` for the planned approach.

**M5x turbo path:** The M50/M52 alternator is a standard Bosch unit that mounts on the factory bracket on the intake side (left side in RHD orientation) of the engine. It remains in factory position for Phase 1A. Clearance considerations:

- **Top-mount turbo manifold (RSI T4/T3 or SPA TMB04 top mount):** Turbo sits above the exhaust manifold on the driver's side — alternator is on the opposite (intake/passenger) side. No direct conflict. Verify intercooler pipe routing clears the alternator.
- **Bottom-mount manifold (SPA TMB01):** Turbo sits low on the exhaust/driver side. Even less alternator conflict. The charge pipe routes to the FMIC and back — runs across the front of the engine bay, not near the alternator.

**Alternator output:** OEM M50/M52 alternator is typically 90–120A. With the PD2-18012AJA electric AC compressor drawing ~50A, plus MaxxECU, PMU16, SPAL fan, and CWA50 auxiliary pump, the OEM alternator is insufficient — upgrade to 140A is **mandatory**, not optional.

**Spec:** Bosch AL0739X, 140A, BMW PN `12311744567`. Confirmed fit: M50, M52, S50, S52, all E36 6-cyl, E34 525i. Drop-in replacement on the same bracket and mounting points — no fabrication. Note: requires 55mm alternator pulley; reuse existing if already 55mm, or source a 55mm pulley separately.

| Source | Price | Core charge |
| :--- | :--- | :--- |
| [BimmerWorld AL0739X](https://www.bimmerworld.com/Engine/Alternators/Alternator-140-Amp-12-31-1-744-567.html) | $374.99 | $70 |
| [Turner Motorsport AL0739X](https://www.turnermotorsport.com/p-371693-oem-bosch-remanufactured-alternator-140amp-e36-e34/) | $415.99 | $100 |

### PMU16

**07K path:** PMU16 (Bren Tronics / Littelfuse) is installed in Phase 3 at the 07K swap. Phase 1 and Phase 1A use discrete relays for the fuel pump and fans until PMU16 install.

**M5x turbo path:** Same. PMU16 install timing is identical — it goes in with the final wiring cleanup, not at engine teardown. The Phase 1A M5x turbo does not change PMU16 scope or timing.

### Accessory belt drive

**07K path:** No stock accessory drive in longitudinal E36 orientation; Fluidampr 551211 replaces OEM damper. Power steering pump, AC compressor, and alternator all require separate provisions.

**M5x turbo path:** OEM belt drive retained for alternator and mechanical water pump. OEM AC compressor removed at turbo install and replaced with the PD2-18012AJA electric compressor (see `37-ac.md`) — the OEM compressor is not in the belt path. EPS conversion (Phase 1) also removes the PS pump. Remaining belt drive: alternator + mechanical water pump only. Confirm correct shorter belt part number with no PS pump and no AC compressor pulley — measure after teardown or call Turner Motorsport/VAC with the specific M52 application.

---

## Storage Protocol

Same as 07K storage protocol (see `20-07k-sourcing.md` Storage Protocol section). Key points: plug all ports immediately, coat machined surfaces with Fluid Film, store on stand with breathable cover.

---

## References

- [Overrun Tuning E36 Turbo Guide — M50 Iron Block section](https://www.overruntuning.com/e36-turbo-guide)
- [Qualitec.eu BMW M50/M52/M54 Tuning Guide](https://www.qualitec.eu/bmw-m50-m52-m54-tuning-guide)
- [bmwtuning.co E36 Turbo Kit Guide](https://bmwtuning.co/bmw-e36-turbo-kit-guide/)
- [Gardner Auto — M50B25TU / M52 block pricing](https://www.gardnerautorepair.com/prq5800e74523191/e36-engine/)
- [NSB Concept M50 parts — ZRP rods, Wiseco pistons, ARP hardware](https://www.nsbconcept.com/en/3750-parts-engine-forge-for-bmw-series-5-e34)
- [Euromotive Autohaus — machine shop](https://www.eurohauspa.com/) · 1306 W Chester Pike, West Chester, PA · (610) 416-5702

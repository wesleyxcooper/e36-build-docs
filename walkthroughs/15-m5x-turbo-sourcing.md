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
| **1A** | Iron M50B25(TU) turbo | 400–600whp at 6,000–7,000 RPM | Wide torque band from boost, moderate peak RPM | This document — not yet started |
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
- M52B28 crank is cast — plan on upgraded rotating assembly for any real boost target
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

**Source a M50B25TU (Option B) iron block from an E34 525i or E36 325i donor.** Reasons:

1. Iron block — confirmed capable well past 600whp with forged internals
2. VANOS — reduces turbo lag, already wired in the MaxxECU M50 harness
3. Most available of the iron options in both UK and US markets
4. E34 525i donors plentiful in UK; E36 325i common at US salvage yards within driving distance

If an M50B25 NV surfaces at a good price and the VANOS simplicity matters: take it. The power potential is identical; the wiring is simpler.

---

## Parts

| Part | PN / Source | Cost |
| --- | --- | --- |
| M50B25TU iron donor block (bare or with accessories) | E34 525i / E36 325i breakers; car-part.com; eBay | ~$400–600 bare / ~$1,350–1,600 running |
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

**Alternator output:** OEM M50/M52 alternator is typically 90–120A. With the additional electrical load from the MaxxECU, PMU16, SPAL electric fan, and any future e-boost or data logger, an alternator upgrade to 140A (Bosch reman for E34/E36 with upgraded stator) is worth specifying at teardown. Upgrade rather than replace bracket — uses the same mounting points.

### PMU16

**07K path:** PMU16 (Bren Tronics / Littelfuse) is installed in Phase 3 at the 07K swap. Phase 1 and Phase 1A use discrete relays for the fuel pump and fans until PMU16 install.

**M5x turbo path:** Same. PMU16 install timing is identical — it goes in with the final wiring cleanup, not at engine teardown. The Phase 1A M5x turbo does not change PMU16 scope or timing.

### Accessory belt drive

**07K path:** No stock accessory drive in longitudinal E36 orientation; Fluidampr 551211 replaces OEM damper. Power steering pump, AC compressor, and alternator all require separate provisions.

**M5x turbo path:** Stock accessory belt drive retained as-is (alternator + AC compressor + mechanical water pump). EPS conversion removes PS pump from belt path — re-route belt to skip the PS pulley or fit an idler in its place. Most E36/E34 PS delete builds use a shorter belt with an idler from a junkyard donor. Confirm belt part number after PS removal: the appropriate belt without the PS pump is a shorter run and a different part number. Confirm with VAC or Turner Motorsport for your specific M50 accessory arrangement.

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

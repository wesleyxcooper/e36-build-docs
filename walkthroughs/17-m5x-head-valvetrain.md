# Phase 1A: M5x Turbo Head & Valvetrain

**Phase:** 1A  
**System tags:** `[ENGINE]` `[VALVETRAIN]`  
**Shop-mandatory:** Valve seat work, pressure test, head surface check — VAC. Valve spring swap can be owner-performed on a bare head with the correct tools.  
**Prerequisites:** Block sourced (`15-m5x-turbo-sourcing.md`); head gasket and head stud decision locked (from `16-m5x-rotating-assembly.md`)

---

## Overview

All M50, M50TU, M52, S50US, and S52 engines share the same basic head casting. There are internal valvetrain differences (VANOS vs non-VANOS, solid vs hydraulic followers on some M52 variants) but the head itself is the same aluminum casting across all variants. Heads are interchangeable between M50NV, M50TU, M52B25, and M52B28 with the correct head gasket for the bore size.

**For a turbo build**, the head is not the bottleneck — the stock casting is strong. The required upgrades are:
1. Upgraded head gasket (Athena-SCE or Cometic MLS)
2. ARP head studs
3. **Valve spring upgrade — required for this build** (target RPM ceiling is 8,000–9,000 RPM)
4. VANOS seals replaced if M50TU or M52
5. **SPA 264°/256° cams — primary cam choice** for this turbo build targeting 8,000-9,000 RPM ceiling

Aggressive NA cam timing (Phase 1B scope: Schrick 264/248) is specifically a NA optimization and does not carry to the turbo build without re-evaluation. See cams section below.

---

## Parts

| Part | PN / Source | Cost |
| --- | --- | --- |
| Athena-SCE Cut-Ring Head Gasket | [5150autosport.com](https://5150autosport.com/products/5150-autosport-head-gasket-head-stud-kit-bmw-m50-m52-s50-s52) | ~$200 |
| OR Cometic MLS Head Gasket (84mm or 84.5mm bore, .070" or .080" thick) | [achillesmotorsports.com](https://www.achillesmotorsports.com/Cometic-M-L-S-Type-Cylinder-Head-Gaskets-BMW-M50-p/11-com-mlshg-m50.htm) | ~$270 |
| ARP 2000 Head Stud Kit (M50/M52/S50/S52 — included in 5150 kit) | [5150autosport.com](https://5150autosport.com/products/5150-autosport-head-gasket-head-stud-kit-bmw-m50-m52-s50-s52) | ~$170–200 standalone |
| Supertech valve springs (dual) — set of 12 (6 cyl × 2 springs/valve × 2 valves... actually 6×4=24) | Supertech SPR-T021 or equivalent for M50/M52 | ~$200–300 set |
| **Solid shim/tappet conversion (M50TU/M52 only)** | **Alien Engineering M50/M52/M54 Solid Lifter Conversion Shims** — required on any M50TU/M52 build targeting 7,000+ RPM, boosted or NA | **~$150** · [alien-engineering.com](https://www.alien-engineering.com/product-page/alien-engineering-bmw-m50-m52-m54-s50-s52-solid-lifter-conversion-shims) |
| VANOS seals + o-ring kit (M50TU/M52 only) | ECS Tuning / FCP Euro OE BMW | ~$30–60 |
| Camshaft bearings — replace at teardown | OE BMW via FCP Euro | ~$60–100 |
| Valve stem seals — set | Elring or Victor Reinz via FCP Euro | ~$30–50 |

---

## Camshafts — Primary Choice for This Build

### SPA Performance 264°/256° Cams — Primary Path

SPA Turbo USA sells 264°/256° cams for M50/M52/S50/S52 (single VANOS) at **$1,049.90**. ([spaturbousa.com](https://spaturbousa.com/collections/best-selling-products/bmw)) These are the primary choice for this build. Reasons:

- **Designed for turbo M5x use** — 264° intake / 256° exhaust. Spec is moderate enough to work with boost at low-mid RPM without excessive blowback, while extending the top-end power band to the 8,000 RPM ceiling this build targets.
- SPA sells these specifically for their own turbo kit customers — the cam timing works with boost.
- SPA is the same vendor as the TMB01 manifold, so the system is tuned together.

**Do not order before confirming current availability** — SPA periodically runs on backorder. Call or email before placing the order.

**Install:** Owner-performed on a bare head with the correct cam locking tool (BMW special tool 11-3-240 or equivalent aftermarket). VAC can install at the longblock build if preferred.

### Stock cams: acceptable fallback if SPA is unavailable

Stock M50/M52 cams are adequate for boost at moderate power and RPM targets. VANOS control via MaxxECU covers variable timing. Acceptable for 6,000–7,000 RPM builds. For this build's 8,000-9,000 RPM ceiling goal, stock cams are a compromise.

### The Schrick 264/248 from Phase 1B does NOT carry over

The Phase 1B (`10-m52-engine-prep.md`) Schrick 264/248 cam spec is ground for NA use — high overlap designed to maximize volumetric efficiency at peak NA RPM. Under boost, this creates excessive overlap that allows boost to blow back into the intake manifold before the intake valve closes. It can be used with boost but requires careful tuning and will produce a less efficient boost curve vs. a cam ground for turbo use. If you've already purchased Schrick cams for Phase 1B, consult with a MaxxECU tuner before running them on the turbo build.

---

## Procedure

### 1 — Head inspection and measurement at VAC

Standard steps that VAC performs:

1. **Pressure test** — confirm head holds pressure. M50/M52 heads are aluminum; cracks from overheating are common. A pressure test before any other work is non-negotiable on a used head.
2. **Deck surface check** — measure flatness across the full deck. Thermal cycling on a boosted build demands a flat surface. Mill to specification if needed (surface finish target: Ra 1.6 µm / 63 µin or better for MLS gaskets; Athena-SCE is more tolerant).
3. **Valve guide clearance** — measure valve stem-to-guide clearance. Replace guides if worn.
4. **Valve seat inspection** — check for recession or damage. Lap existing valves if serviceable; recut seats if running Inconel exhaust valves or if previous seat wear is detected.

### 2 — Solid shim conversion (M50TU/M52 only — required)

The M50 NV block has solid shim cam followers from the factory. The M50TU and M52 (recommended block for this build) use **hydraulic bucket tappets**, which pump down at ~6,500 RPM and cannot maintain contact with the cam lobe above that RPM — a hard ceiling that valvetrain shimming alone doesn't fix.

**Install Alien Engineering solid lifter conversion shims** before this build targets 8,000–9,000 RPM. These drop-in shims replace the hydraulic function with a solid surface, eliminating the RPM ceiling from the hydraulic follower system. Same part specified in the Phase 1B NA M52 path (`10-m52-engine-prep.md`). ([alien-engineering.com](https://www.alien-engineering.com/product-page/alien-engineering-bmw-m50-m52-m54-s50-s52-solid-lifter-conversion-shims) — ~$150)

VAC installs these during head assembly. Bring the kit in the labeled bag with the parts drop-off.

> **M50 NV exception:** If you sourced an M50 NV block, solid shim followers are factory-spec. No conversion needed — do not order the kit. This is one practical advantage of the NV block for a high-RPM build.

> **Boosted or NA:** The hydraulic pump-down ceiling applies regardless of whether the engine is turbocharged. If an M50TU/M52 is being revved past 7,000 RPM for any reason, the conversion belongs in the build.

### 3 — Valve spring upgrade

Stock M50/M52 valve springs are adequate to approximately 6,500 RPM. This build targets an 8,000–9,000 RPM ceiling — **dual valve springs are required.**

**Upgrade to Supertech SPR-T021 dual valve springs** (or equivalent M50/M52 dual spring kit). VAC installs these during head assembly at longblock build. Do not leave stock springs in a head targeting 8,000+ RPM — valve float at high RPM causes valve-to-piston contact.

### 4 — VANOS seals (M50TU and M52 only)

Replace all VANOS unit seals and o-rings at head teardown. The VANOS unit cannot be accessed again without head removal. OEM seal kits from ECS Tuning or FCP Euro include all rubber components. A leaking VANOS unit produces erratic VANOS advance, false cam-position errors in MaxxECU, and oil consumption.

**Do not reassemble a rebuilt M50TU/M52 head without fresh VANOS seals.**

### 5 — Head stud installation

ARP head studs thread into the block from below the head surface. Apply ARP Ultra-Torque to threads and under the nut; **do NOT substitute motor oil or standard assembly lube** — ARP specifies Ultra-Torque for rated clamp loads. Torque spec: ARP 2000 studs for M50/M52 — follow ARP's printed spec sheet exactly (torque in a cross pattern in three stages).

VAC handles this during longblock assembly. Provide the stud kit in a labeled bag at drop-off with the printed ARP torque sheet.

---

## References

- [5150 AutoSport Head Gasket + Head Stud Kit for M50/M52/S50/S52](https://5150autosport.com/products/5150-autosport-head-gasket-head-stud-kit-bmw-m50-m52-s50-s52)
- [Cometic MLS Head Gasket M50 — Achilles Motorsports](https://www.achillesmotorsports.com/Cometic-M-L-S-Type-Cylinder-Head-Gaskets-BMW-M50-p/11-com-mlshg-m50.htm)
- [SPA 264/256° cams for M50/M52 single VANOS — spaturbousa.com](https://spaturbousa.com/collections/best-selling-products/bmw)
- [bmwtuning.co — head gasket and valve cover guidance for M50/M52 turbo](https://bmwtuning.co/bmw-e36-turbo-kit-guide/)
- [VAC Motorsports Philadelphia](https://www.vacmotorsports.com/) · 2501 Snyder Ave, Philadelphia PA · (215) 462-4666 · ask for John

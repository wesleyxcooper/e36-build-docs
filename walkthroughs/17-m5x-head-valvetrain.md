# Phase 2a: M5x Turbo Head & Valvetrain

**Phase:** 2a
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
5. **5150 AutoSport Street/Drift Turbo Cams — primary cam choice** for this turbo build targeting 8,000-9,000 RPM ceiling

Aggressive NA cam timing is specifically a NA optimization and does not carry to the turbo build. The alloy M52 runs stock in Phase 1 — all cam and valvetrain work happens here on the iron-block engine. See cams section below.

---

## Parts

| Part | PN / Source | Cost |
| --- | --- | --- |
| Athena-SCE Cut-Ring Head Gasket | [5150autosport.com](https://5150autosport.com/products/5150-autosport-head-gasket-head-stud-kit-bmw-m50-m52-s50-s52) | ~$200 |
| OR Cometic MLS Head Gasket (84mm or 84.5mm bore, .070" or .080" thick) | [achillesmotorsports.com](https://www.achillesmotorsports.com/Cometic-M-L-S-Type-Cylinder-Head-Gaskets-BMW-M50-p/11-com-mlshg-m50.htm) | ~$270 |
| ARP 2000 Head Stud Kit (M50/M52/S50/S52 — included in 5150 kit) | [5150autosport.com](https://5150autosport.com/products/5150-autosport-head-gasket-head-stud-kit-bmw-m50-m52-s50-s52) | ~$170–200 standalone |
| **5150 AutoSport Street/Drift Turbo Cam Set (M50/M52/S50/S52) — primary** | [5150autosport.com](https://5150autosport.com/products/bmw-m50-m52-s50-s52-turbo-camshaft-set) — email `sales@5150autosport.com` before ordering with M52B28, 8,200 RPM primary / 9,000 RPM structural margin, solid shim conversion included | **$1,499.99** |
| OR SPA Performance 264°/256° Cams (M50/M52/S50/S52 single VANOS) — backup if 5150 unavailable | [spaturbousa.com](https://spaturbousa.com/collections/best-selling-products/bmw) | $1,049.90 |
| Supertech dual valve springs — set of 24 (M50/M52/S50/S52) | **SPR-H1005D-24** — confirmed fit M50/M52/S50/S52 ([supertechperformance.com](https://www.supertechperformance.com/automotive/valve-spring/dual-valve-spring/bmw-m54/p339133-dual-valve-springs-sku-spr-h1005d)); ~$346–375 at [throtl.com](https://www.throtl.com/products/supertech-bmw-m50-m52-s50-s52-dual-valve-spring-set-of-24-spr-h1005d-24/) or [jsdmachineworks.com](https://jsdmachineworks.com/supertech-bmw-m50-m52-s50-s52-dual-valve-spring-set-of-24/). Full kit with retainers: SPRK-H1005D-BM (~$944). Note: VAC build kit may already include valve springs — confirm at drop-off. | ~$346–375 |
| **Solid shim/tappet conversion (M50TU/M52 only)** | **Alien Engineering M50/M52/M54 Solid Lifter Conversion Shims** — required on any M50TU/M52 build targeting 7,000+ RPM, boosted or NA | **~$150** · [alien-engineering.com](https://www.alien-engineering.com/product-page/alien-engineering-bmw-m50-m52-m54-s50-s52-solid-lifter-conversion-shims) |
| VANOS seals + o-ring kit (M50TU/M52 only) | ECS Tuning / FCP Euro OE BMW | ~$30–60 |
| Camshaft bearings — replace at teardown | OE BMW via FCP Euro | ~$60–100 |
| Valve stem seals — set | Elring or Victor Reinz via FCP Euro | ~$30–50 |

---

## Camshafts — Primary Choice for This Build

### 5150 AutoSport Street/Drift Turbo Cams — Primary Path

5150 AutoSport turbo camshaft set for M50/M52/S50/S52 at **$1,499.99**. ([5150autosport.com](https://5150autosport.com/products/bmw-m50-m52-s50-s52-turbo-camshaft-set)) Primary choice for this build. Reasons:

- **Designed specifically for turbo M50/M52/S50/S52 at 450–800HP** — the Street/Drift profile optimizes for quick spooling and throttle response both ON and OFF throttle. This is the target power range for this build.
- 15+ year track record on boosted M5x builds, including 5150’s own vehicles.
- For 8,500–9,500 RPM: solid lifter conversion is required (Alien Engineering shims already specified — see Parts above). With solid lifters installed, the cam supports this build’s 8,200 RPM primary / 9,000 RPM structural target.
- Cam specs (duration/lift) are not published publicly — **email `sales@5150autosport.com` before ordering.** Provide: M52B28 iron block, turbo, 8,200 RPM primary operating ceiling, 9,000 RPM structural margin, solid shim conversion installed, Supertech dual valve springs. 5150 offers free engine build advising and will confirm spec compatibility.

**Install:** Professional engine builder required per 5150’s instructions. The builder must verify PTV clearance and set timing to the cam card spec, not factory settings. VAC installs during longblock build — bring cam card to the drop-off.

### SPA Performance 264°/256° Cams — Backup if 5150 is unavailable

SPA Turbo USA sells 264°/256° cams for M50/M52/S50/S52 (single VANOS) at **$1,049.90**. ([spaturbousa.com](https://spaturbousa.com/collections/best-selling-products/bmw)) Fallback if 5150 cams are on backorder or unavailable. Designed for turbo use — 264° intake / 256° exhaust. More conservative than 5150’s profile; extends the power band for a turbo build but is less likely to support the full 9,000 RPM ceiling.

### Stock cams: acceptable fallback at moderate RPM targets only

Stock M50/M52 cams are adequate for boost at moderate power and RPM targets. VANOS control via MaxxECU covers variable timing. Acceptable for 6,000–7,000 RPM builds. For this build’s 8,000–9,000 RPM ceiling goal, stock cams are a significant compromise.

### Phase 1 NA cams (S52 252°/244°) do NOT carry over to the turbo build

Phase 1 (`10-m52-engine-prep.md`) specifies **S52 OEM cams (252°/244°)** for the NA alloy M52B28. These are ground for NA use — moderate overlap designed to maximize volumetric efficiency at the Phase 1 RPM target. Under boost, the overlap window allows intake charge pressure to blow back through the intake valve before it closes, reducing boost efficiency. The S52 cams can be used with boost but require careful tuning and will produce a less efficient boost curve vs. a cam ground specifically for FI use. Do not carry Phase 1 cams over to the Phase 2a iron-block turbo build — the 5150 AutoSport turbo cam is specified for a reason.

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

**Install Alien Engineering solid lifter conversion shims** before this build targets 8,000–9,000 RPM. These drop-in shims replace the hydraulic function with a solid surface, eliminating the RPM ceiling from the hydraulic follower system. Same part specified in the Phase 1 NA M52 path (`10-m52-engine-prep.md`). ([alien-engineering.com](https://www.alien-engineering.com/product-page/alien-engineering-bmw-m50-m52-m54-s50-s52-solid-lifter-conversion-shims) — ~$150)

VAC installs these during head assembly. Bring the kit in the labeled bag with the parts drop-off.

> **M50 NV exception:** If you sourced an M50 NV block, solid shim followers are factory-spec. No conversion needed — do not order the kit. This is one practical advantage of the NV block for a high-RPM build.

> **Boosted or NA:** The hydraulic pump-down ceiling applies regardless of whether the engine is turbocharged. If an M50TU/M52 is being revved past 7,000 RPM for any reason, the conversion belongs in the build.

### 3 — Valve spring upgrade

Stock M50/M52 valve springs are adequate to approximately 6,500 RPM. This build targets an 8,000–9,000 RPM ceiling — **dual valve springs are required.**

**Upgrade to Supertech SPR-H1005D-24 dual valve springs** (M50/M52/S50/S52 — confirmed fit: [supertechperformance.com](https://www.supertechperformance.com/automotive/valve-spring/dual-valve-spring/bmw-m54/p339133-dual-valve-springs-sku-spr-h1005d)). VAC installs these during head assembly at longblock build. Do not leave stock springs in a head targeting 8,000+ RPM — valve float at high RPM causes valve-to-piston contact.

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
- [5150 AutoSport Street/Drift Turbo Cam Set M50/M52/S50/S52 — 5150autosport.com](https://5150autosport.com/products/bmw-m50-m52-s50-s52-turbo-camshaft-set)
- [SPA 264/256° cams for M50/M52 single VANOS — backup — spaturbousa.com](https://spaturbousa.com/collections/best-selling-products/bmw)
- [bmwtuning.co — head gasket and valve cover guidance for M50/M52 turbo](https://bmwtuning.co/bmw-e36-turbo-kit-guide/)
- [VAC Motorsports Philadelphia](https://www.vacmotorsports.com/) · 2501 Snyder Ave, Philadelphia PA · (215) 462-4666 · ask for John

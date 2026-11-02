# Phase 1A: M5x Timing Chain & Oil Pump Drive

**Phase:** 1A  
**System tags:** `[ENGINE]` `[OIL]`  
**Shop-mandatory:** Oil chain tensioner installation — required; handled by VAC Motorsports during shortblock assembly. ATI damper install is owner-performed post-delivery.  
**Prerequisites:** Longblock scope discussion with VAC completed (`16-m5x-rotating-assembly.md`); ATI damper ordered

---

## Overview — Two Separate Chain Systems

The M50/M52 has two independent chain drives off the crankshaft:

1. **Upper timing chain** — drives the intake and exhaust camshafts. Runs up the front of the block through the timing cover. This is the chain most people think of when they say "timing chain."
2. **Lower oil pump chain** — drives the oil pump. Runs at the bottom of the block from a dedicated sprocket on the crank. Completely separate from the upper chain.

**Both chains can cause failure modes at high RPM** — the upper chain has a known tensioner issue on high-mileage engines; the lower oil pump chain has a well-documented failure mode at 7,200+ RPM under certain conditions.

---

## Upper Timing Chain

### Parts

| Part | PN / Source | Cost |
| --- | --- | --- |
| OE upper timing chain + tensioner + guides (if high mileage) | FCP Euro / ECS Tuning (BMW OE or Febi) | ~$100–200 for full kit |
| VANOS hub bolts (TTY — single-use, M50TU/M52 only) | BMW OE PN varies by variant — ask VAC | ~$20–40 |

### Procedure

On a used block with unknown or high mileage, replace the upper timing chain and plastic chain guides as standard practice at longblock rebuild. Chain guides on M50/M52 become brittle with age — a failed guide drops debris into the oil sump. VAC handles this during assembly; confirm it's included in their scope.

**Timing procedure (VAC):** Standard BMW timing alignment using the OEM timing pins for the crank and camshaft sprockets. No special complexity vs. any M50/M52 rebuild.

---

## Lower Oil Pump Chain — High-RPM Risk

### The problem

At high RPM (7,200 RPM+), the oil pump chain tensioner on M50/M52 engines can fail to maintain adequate tension. A slack oil pump chain can:
1. Jump sprocket teeth, causing immediate oil pressure loss (catastrophic)
2. Rattle against the block, generating metal debris
3. Cause the oil pump drive nut to progressively loosen and back off — documented on both M50 and M52 at sustained high RPM ([overruntuning.com](https://www.overruntuning.com/e36-turbo-guide))

The early M50B25 NV blocks sometimes came with an oil chain tensioner from the factory; most M50B25TU and M52 blocks did not.

### The solution

**Install a chain tensioner on the oil pump drive chain if targeting 7,200+ RPM.** This is the consistent recommendation across M5x turbo build guides for any engine revved past this threshold. ([overruntuning.com](https://www.overruntuning.com/e36-turbo-guide))

**For this build targeting 8,000–9,000 RPM:** the oil chain tensioner is **required**. Above 7,200 RPM the tensioner is not optional — the oil pump chain slack failure mode is well documented at this RPM range. Install it now while the pan is off; it cannot easily be added later.

Do this at VAC during shortblock assembly — it requires the oil pan to be off, which is already the case during a longblock build.

### Parts (oil pump chain tensioner)

Three confirmed kit options — all use a drilling jig to add threaded bosses to the block (drill/tap M5×0.8 and M6×1.0) and install the OEM S50/S54 or equivalent tensioner:

| Kit | Source | Price | Notes |
| --- | --- | --- | --- |
| **Hack Engineering HE-M5XOCTK** | [hackengineering.co.uk](https://www.hackengineering.co.uk/product/hack-engineering-m5x-oil-pump-chain-tensioner-upgrade-kit-m50-m52-m54/) | £65 | Includes 3D-printed drilling jig + genuine BMW S50/S54 tensioner + M5 and M6 hardened guide pins. Single-use jig. Machine shop installation recommended for parallelism. |
| **Boost Monkey kit** | [boostmonkey.com](https://boostmonkey.com/products/e34-e36-m50-m52-s50-s52-oil-pump-chain-tensioner-kit) | $114.99 | Includes drill bit + tap + tensioner + racing spec oil pump chain + shoulder bolts. Requires engine out, head off, timing cover off — plan at longblock assembly. |
| **Seems Legit Garage kit** | [seemslegitgarage.com](https://www.seemslegitgarage.com/product-page/upgraded-m50-m52-oil-pump-tensioner) | ~$75–90 | Polymer chain tensioner + drill/tap template. Single hole only. Addresses chain slack as root cause of nut backing off. |

**Install at VAC during shortblock assembly** — block is already stripped at this point. This cannot be installed with the engine in the car. Confirm kit selection and installation with VAC at drop-off.

### Oil pump drive nut and pump upgrade

The chain tensioner is the fix for the nut backing off — it eliminates the chain slack that causes the nut to vibrate loose at high RPM. With the tensioner installed, the nut is no longer under the oscillating load that backs it off.

**VAC M50/M52 Oil Pump Upgrade Kit** — [store.vacmotorsports.com](https://store.vacmotorsports.com/vac-motorsports-oil-pump-upgrade-kit-bmw-m50m52s50s52-p1041.aspx) — $224.95. This is a pump capacity and flow upgrade — not a fix for the chain slack issue. The chain tensioner and the VAC pump kit address separate things: chain tension (root cause of nut failure) vs. pump output (oil supply margin at high RPM). Both are worth doing on this build; they're complementary, not redundant.

Welding the sprocket nut is a zero-cost insurance step at assembly time — if VAC is willing to do it while the pan is already off, it adds nothing to the job. It is not required if the chain tensioner is properly installed, but there is no downside to doing it.

---

## VAC ATI Super Damper (Owner-Installed, Post-Delivery)

**Required for this build.** The stock M50/M52 crankshaft damper has no harmonic damper — it is a simple belt pulley with a rubber isolation ring. At sustained high RPM, torsional crank vibrations cause:
- Accelerated crank snout and oil pump drive wear
- Accessory belt walk (documented on E36 M50 at sustained track RPM)
- Potential for harmonic damage to the timing chain system

**VAC ATI Super Damper for M50/M52/S50/S52/M52TU/M54:**

- Part: VAC Motorsports ATI Super Damper (same PN as Phase 1B spec, `10-m52-engine-prep.md`)
- Price: **$1,049.95** ([store.vacmotorsports.com](https://store.vacmotorsports.com/vac-motorsports-harmonic-damper-by-ati-bmw-m50m52s50s52m52tum54-p756.aspx))
- Install: Owner-performed; replaces the OEM damper on the crank snout. Requires the correct ATI installation tool (borrow or rent — do not hammer it on). Torque to BMW crank bolt spec.
- This is the same part in both Phase 1B (NA M52) and Phase 1A (Turbo M50) — one purchase covers both if path changes.

**Install the ATI damper after longblock delivery, before first start.** It ships separately from the longblock; plan to have it on hand for the assembly day.

---

## References

- [Overrun Tuning — oil pump chain tensioner recommendation at 7200+ RPM](https://www.overruntuning.com/e36-turbo-guide)
- [VAC ATI Super Damper for M50/M52/S50/S52 — $1,049.95](https://store.vacmotorsports.com/vac-motorsports-harmonic-damper-by-ati-bmw-m50m52s50s52m52tum54-p756.aspx)
- [VAC Motorsports Philadelphia](https://www.vacmotorsports.com/) · 2501 Snyder Ave, Philadelphia PA · (215) 462-4666 · ask for John

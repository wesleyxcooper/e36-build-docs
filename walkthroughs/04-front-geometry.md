# Phase 1: Front Suspension Geometry

**Phase:** 1  
**System tags:** `[SUSPENSION]` `[STEERING]`  
**Shop-mandatory:** Final alignment (shop with geometry knowledge required — not a tire shop).  
**Prerequisites:** Coilovers installed (03-suspension). M3 trailing arms in place. Complete steps 1 → 2 → 3 → 4 in order — each step builds on the previous. Steps 1–3 are geometry correction; step 4 (SLR Mini Kit) is a mild angle kit on top of corrected geometry.

## Parts

| Part | PN / Source | Cost |
| --- | --- | --- |
| E36 M3 front spindles/uprights — Left | `31212227907` · eBay used (1996–1999 E36 M3 or 1996–2002 Z3M) | ~$150–300 (pair) |
| E36 M3 front spindles/uprights — Right | `31212227908` · eBay used (same sources) | (see above) |
| Revshift offset FCAB | [revshift.com](https://revshift.com/products/full-bushing-kit-bmw-e36) — specify "offset" at order | Included in bushing kit |
| Ground Control (or Vorshlag) adjustable strut tops / camber plates | Ground Control or Vorshlag | ~$350–500 |
| SLR Mini Kit | [slrspeed.com](https://slrspeed.com/products/e36-m3-bmw-mini-kit-roll-center-steering-quickening-angle-kit-for-both-drift-race) | $805.04 |

## Tools

- Standard socket set and ratchet
- Torque wrench
- Lower strut mount spacers (for static camber adjustment — do not use strut tops for camber)
- Alignment shop equipment (shop-mandatory for final alignment)
- Feeler gauges (bushing install verification)

## Procedure

> **Geometry stack order: 1 → 2 → 3 → 4.** Do not skip or reorder.

### Step 1 — M3 Spindles/Uprights ✅ DIY

1. ✅ Source E36 M3 front spindles/uprights from 1996–1999 US E36 M3 or 1996–2002 Z3M (same part, more Z3M supply). ~$150–300/pair.
   - OEM part numbers: Left `31212227907` (= passenger side in RHD) / Right `31212227908` (= driver's side in RHD). Shared between 1996–1999 E36 M3 and 1996–2002 Z3M Roadster/Coupe. New OEM discontinued — source used/salvage only.
   - M3 spindle reduces KPI vs non-M, raises roll center ~20mm vs non-M, and improves camber gain curve.
   - Compatible with E36 non-M control arms (same ball joint taper as non-M arms).
   - **Do NOT use Euro M3 3.2 Evo spindles** — Evo spindles pair with a shorter purpose-built control arm; installing on standard-length OEM arms (required by SLR Mini Kit) produces incorrect geometry.
   - **1995 US M3 spindles** (`31212227357`/`358`) have slight camber variance — replace as matched pair only and avoid mixing with 96–99 spec.
   - Z3M salvage yards are the best supply source (same part, more plentiful than donor M3s).
   - Source alongside M3 hubs if doing a 5-lug upgrade — same donor car, saves on shipping.
   > ⚠️ **Pitfall:** Non-M E36 and M3 spindles look very similar. Confirm with seller they're pulling from an actual M3 — wrong part wastes the geometry benefit of the swap entirely.

2. ✅ Install M3 spindles.

### Step 2 — Offset FCAB 🔧 DIY with specialty tools

3. 🔧 Install offset FCAB when fitting Revshift kit — use **offset variant** (not centered).
   - Offset FCAB adds ~1° caster on non-M control arms. Low cost, reversible.
   - Non-M E36 uses centered FCABs from factory. M3 used offset eccentric FCABs. Installing offset bushings in non-M brackets is a direct swap — same inner diameter.
   - **Revshift:** Specify "offset" at order time — Revshift sells both centered and offset for E36.
   > ⚠️ **Pitfall:** If the Revshift bushing can spin in its retainer after install, this is a known issue with poly offset FCABs. Fix: roughen the outer diameter of the bushing slightly with sandpaper before pressing in. Ref: [FCP Euro FCAB install guide](https://www.fcpeuro.com/blog/how-to-install-revshift-offset-fcabs-bmw-e30-e36-z3)

### Step 3 — Adjustable Strut Tops / Camber Plates 🔧 DIY with specialty tools

4. 🔧 Install Ground Control (or Vorshlag) adjustable strut tops / camber plates (~$350–500).
   - Adds caster offset on top of the offset FCAB to reach 6–7° total caster.
   - **Camber note:** Do NOT use strut tops as primary camber adjustment — tilting the strut changes KPI. Use **lower strut mount spacers** (~0.3° camber change per 1mm, no KPI change) for static camber setting. Strut tops are for caster.
   > ⚠️ **Pitfall:** Many alignment shops will default to using the camber plates to set camber and leave caster alone. Communicate explicitly: "Set camber via lower spacers, set caster via strut top position."

### Step 4 — SLR Mini Kit 🔧 DIY with specialty tools

5. 🔧 Install SLR Mini Kit ([slrspeed.com](https://slrspeed.com/products/e36-m3-bmw-mini-kit-roll-center-steering-quickening-angle-kit-for-both-drift-race)) — $805.04.
   - Replaces outer ball joint with Teflon-lined spherical bearing; adds SLR steering plate + adjustable Ackermann system + SLR Lollipop FCAB.
   - **35mm roll center correction** + bump steer tuning baked in.
   - **Steering quickening ~40%** (28–30% fewer turns lock-to-lock) — the primary street tradeoff; will feel noticeably more responsive at highway speeds.
   - **Ackermann setting:** Set to **Race position** for street use (positive Ackermann = natural behavior). Flip to **Drift position** for track sessions (zero Ackermann = parallel wheels at lock).
   - **Compatible with M3 knuckles.** Do NOT substitute Wisefab if running M3 knuckles — Wisefab is explicitly incompatible.
   - **At order:** Specify M3 knuckles + your control arm type — SLR requires this info to configure the lollipop correctly.
   > ⚠️ **Pitfall:** Steering quickening is real and permanent (until kit is removed). Budget one session to re-calibrate your inputs before pushing hard — particularly for highway lane changes.
   > ⚠️ **Pitfall:** SLR may hold the order until you confirm your control arm type. Reply to their email promptly.

### Final Alignment ✅ DIY (scheduling) / Shop required

6. ✅ Final alignment after the full geometry stack (shop with geometry knowledge — not a tire shop). Find a shop familiar with drift or track builds — standard shops will try to return to OEM spec.

   **Alignment targets:**

   | Parameter | Target | Notes |
   | --- | --- | --- |
   | Front camber | -2° to -3° | Set via lower mount spacers to preserve KPI |
   | Caster | 6°–7° | Via M3 offset strut tops + adjustable FCAB |
   | Front toe | 1/8" out | Mild drift bias; retain caution for highway stability |
   | Rear toe | 1/16"–1/8" in | Stability at speed |

## References

- [MRT Engineering Geometry Guide p.4](https://mrtengineering.fi/pages/the-ultimate-front-suspension-geometry-guide-for-bmw-e30-e36-e46-by-mrt-engineering-page-4) — KPI/caster delta between spindle variants
- [Garagistic FCAB Guide](https://garagistic.zendesk.com/hc/en-us/articles/360051177154-Offset-vs-Centered-Front-Control-Arm-Bushings-and-Control-Arm-Swap-Guide) — bushing compatibility matrix
- [FCP Euro FCAB install guide](https://www.fcpeuro.com/blog/how-to-install-revshift-offset-fcabs-bmw-e30-e36-z3)
- [SLR Mini Kit product page](https://slrspeed.com/products/e36-m3-bmw-mini-kit-roll-center-steering-quickening-angle-kit-for-both-drift-race)

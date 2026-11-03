# Phase 3a: M5x Turbo Oil System

**Phase:** 3a
**System tags:** `[OIL]`  
**Shop-mandatory:** Oil pan baffle welding — professional welder (Turner kit requires welding). Turbo oil lines — owner-installed.  
**Prerequisites:** Longblock returned from VAC Motorsports; turbo manifold and turbo on hand (`19b-m5x-turbo.md`); oil pan off the car

---

## Overview

The M50/M52 wet sump oil system has two known failure modes that require addressing before any track or drifting use:

1. **Oil starvation under sustained cornering and drift angles** — the stock OEM oil pan baffle does not prevent the pickup from unporting during sustained lateral and longitudinal G-forces. Turner Motorsport documented this failure mode on their E36 World Challenge cars and developed a weld-in baffle kit specifically for M50/M52. ([turnermotorsport.com TEN-36-31-B36 installation PDF](https://www.turnermotorsport.com/image/engine/TEN3631B36_e36_oil_pan_baffle_kit_m50_m52_s50_s52_m3_325i_328i.pdf))

2. **Turbo oil feed and drain routing** — the turbo requires a pressurized oil feed (with inline restrictor) and a gravity drain back to the sump. These are not present on the stock engine and must be added.

The dry sump system (ARE, Peterson, etc.) is the best solution for sustained high-angle drifting — but the cost (~$3,000–5,000 for a full dry sump setup) is appropriate for later phases. For Phase 3a, address starvation with the Turner baffle kit and run an accumulator if needed.

---

## Parts

| Part | PN / Source | Cost |
| --- | --- | --- |
| Turner Motorsport M50/M52 Oil Pan Baffle Kit | TEN-36-31-B36 · [turnermotorsport.com](https://www.turnermotorsport.com) | ~$150–200 (call Turner to confirm current availability) |
| OR VAC Motorsports Crank Scraper + Windage Tray (alternative) | [store.vacmotorsports.com](https://store.vacmotorsports.com/) — search "M50 oil pan" | ~$200–350 |
| Turbo oil feed line: -4AN stainless braided from oil pressure port to turbo journal bearing | AN Fittings Store, Summit Racing, or Fragola | ~$40–80 |
| Inline orifice restrictor (1.0 mm / 0.040") for turbo feed | Ships with most Garrett G-series turbos; fallback: Fragola, Turbosmart | Included / ~$20 fallback |
| Oil pressure port adapter — M50/M52 | Thread-in adapter at the OEM oil pressure sensor port (typically M10×1.0 or M12×1.5 — confirm at teardown) | ~$15–30 |
| Turbo oil drain line: -10AN or -12AN gravity drain from turbo to sump | Stainless braided, custom length | ~$40–80 |
| Oil drain bung — welded into sump | Weld bung only; use during baffle welding session (same shop visit) | ~$15–20 |
| Engine oil cooler (same as planned in Phase 1) | Mishimoto MMOCF-BMW line fitting kit + 10-row core — see `09-coolant.md` | See Phase 1 docs |

---

## Procedure

### 1 — Turner Motorsport Oil Pan Baffle Kit (TEN-36-31-B36)

This kit adds three weld-in aluminum baffle plates to the factory M50/M52 oil pan, plus non-return flaps that prevent oil from sloshing away from the pickup under cornering and braking. Turner developed this over multiple iterations on their E36 World Challenge Touring Car and confirmed it eliminates the oil starvation problem. ([turnermotorsport.com installation PDF](https://www.turnermotorsport.com/image/engine/TEN3631B36_e36_oil_pan_baffle_kit_m50_m52_s50_s52_m3_325i_328i.pdf))

**Turner's procedure (summary):**
1. Remove oil pan from car
2. Grind off the aluminum mushroom that holds the factory baffle in place
3. Remove and save the small rubber grommets (not sold separately — do not lose them)
4. Thoroughly clean pan and factory baffle; sand weld areas
5. Weld in Part A (bottom of factory baffle, up against the big-hole lip and corner notch)
6. Weld in Part C (follows factory baffle contour, ~5mm in)
7. Weld Part B directly to the pan wall
8. Install non-return flaps in the designated spots (A has 2; B has 1)
9. Reinstall rubber grommets

**Turner explicitly requires professional welding.** Do this during the same shop visit as the turbo oil drain bung — one pan-off session covers both.

> ⚠️ **Pitfall:** Do not weld the oil drain bung on the same pan session without confirming the bung location against the turbo drain fitting. The drain must be at a location that (a) clears the subframe, (b) is below the turbo bearing centerline to allow gravity drain, and (c) does not conflict with the crossmember or 8HP. Mock up the drain routing with the turbo and manifold in position before welding the bung.

### 2 — Turbo Oil Feed Line

The M50/M52 oil pressure sensor port is the standard source for turbo oil feed. Procedure:

1. **Locate the oil pressure sensor port** on the block — typically on the engine block near the oil filter housing. Confirm thread size at teardown: typically M10×1.0 (smaller) or M12×1.5 (larger) depending on the engine variant.
2. **Install a T-fitting or adapter** at the oil pressure sensor port to split between the sensor and the -4AN feed line. Sorek.uk (referenced in `24-07k-oil-system.md`) also makes an M52-compatible adapter — confirm threading.
3. **Install inline orifice restrictor (0.040" / 1.0mm)** in the feed line at the turbo inlet. Without a restrictor, journal bearing oil pressure can exceed the turbo's design spec and cause seal failure. Most Garrett G-series turbos ship with the correct restrictor — verify at turbo receipt.
4. Route -4AN braided line from the oil pressure port adapter to the turbo oil inlet (typically -4AN male connection on Garrett). Route away from exhaust.

### 3 — Turbo Oil Drain Line

The turbo drain must gravity-flow back to the sump — no pumping involved. This means:
- The drain fitting at the turbo must be **above** the oil surface in the pan at all times (including under drift angles with oil in motion)
- The drain line runs downward continuously — no uphill sections that trap oil
- -10AN or -12AN line is standard for turbo drain; check the turbo's drain port spec

Route the drain line to the welded bung in the sump. For a top-mount manifold, this line typically runs down the front of the engine. For the SPA bottom-mount (TMB01), the turbo sits low — the drain run is very short and the gravity slope is excellent.

### 4 — Oil Cooler (Phase 1 carryover)

The Mishimoto MMOCF-BMW oil cooler kit from Phase 1 (`09-coolant.md`) carries over to Phase 3a without modification. The M50/M52 oil filter housing location is the same. Under boost, oil temperatures run higher — do not skip the oil cooler.

---

## Future: Dry Sump

For high-angle sustained drifting beyond the Turner baffle kit's capability, a full dry sump system is the next step. ARE (Automotive Racing Equipment) makes E36-specific dry sump pans. Budget ~$3,000–5,000 for a complete dry sump installation (pan, pump, tank, lines, drive). Document this in `E36_Enhancements_SideProjects.md` as a Phase 3a follow-on, not a build requirement for Phase 3a completion.

---

## References

- [Turner Motorsport M50/M52 Oil Pan Baffle Kit TEN-36-31-B36 — installation PDF](https://www.turnermotorsport.com/image/engine/TEN3631B36_e36_oil_pan_baffle_kit_m50_m52_s50_s52_m3_325i_328i.pdf)
- [Overrun Tuning — oil pump chain and oil starvation risk at high RPM](https://www.overruntuning.com/e36-turbo-guide)
- [R3VLimited — low-profile M5x oil pan project (clearance reference)](https://www.r3vlimited.com/board/forum/e30-technical-forums/24v-engine-swaps/m50-52-s50-52/272329-another-low-profile-s5x-m5x-oil-pan-project-pics)
- [Mishimoto MMOCF-BMW oil fitting kit — see `09-coolant.md`](../walkthroughs/09-coolant.md)
- VAC Motorsports Philadelphia — 2501 Snyder Ave, Philadelphia PA · (215) 462-4666

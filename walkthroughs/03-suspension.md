# Phase 1: Suspension

**Phase:** 1  
**System tags:** `[SUSPENSION]` `[DRIVETRAIN]`  
**Shop-mandatory:** Alignment only (shop with geometry knowledge required — not a tire shop).  
**Prerequisites:** Chassis reinforcement scheduled or in progress (02-chassis-reinforcement). Trailing arm swap and halfshaft kit install must happen during the subframe-out window — coordinate timing with 02-chassis-reinforcement before the rear is disassembled.

## Parts

| Part | PN / Source | Cost |
| --- | --- | --- |
| Fortune Auto 500 Series coilovers (front + rear) | FA500-E36 · [fortuneautosuperstore.com](https://www.fortuneautosuperstore.com/fortune-auto-500-series-coilovers-for-bmw-3-series-e36/) | $1,928.00 |
| Revshift full poly bushing kit | [revshift.com](https://revshift.com/products/full-bushing-kit-bmw-e36) | $449.99 |
| E36 M3 trailing arm — Left | `33322227985` · eBay / LKQ / salvage (1996–1999 E36 M3 or 1996–2002 Z3M) | ~$300–500/pair |
| E36 M3 trailing arm — Right | `33322227986` · eBay / LKQ / salvage (same sources) | (see above) |
| VAC Motorsports billet differential cover (188mm) | [store.vacmotorsports.com](https://store.vacmotorsports.com/) · local: 2501 Snyder Ave, Philadelphia PA · 215-462-4666 | ~$150–200 est. |
| Born2Drift Heavy Duty E36 Halfshaft Kit | [born2drift.net](https://www.born2drift.net/products/bmw-e36-rear-halfshafts-kit-drift-track-axles-heavy-duty) | €1,099 (~$1,190 USD) |

## Tools

- Floor jack and jack stands
- Transmission jack (subframe work)
- Torque wrench
- Coilover ride height adjustment spanner
- Grease gun + poly-compatible lubricant (Revshift-supplied or equivalent)
- Drain pan and gear oil (diff cover swap)
- Alignment shop with geometry knowledge

## Procedure

> **The subframe-out window is the critical scheduling dependency.** The trailing arm swap, Born2Drift halfshaft kit, and VAC diff cover install all happen while the rear subframe is out for reinforcement. Do not close up the rear until all three tasks are confirmed complete.

### Coilovers ✅ DIY

1. ✅ Install Fortune Auto 500 Series coilovers (front and rear).
   > ⚠️ **Pitfall:** Set ride height before torquing pinch bolts — you cannot adjust after. Start at mid-range and corner-balance at alignment shop. Alignment required after this step.

### Poly Bushings 🔧 DIY with specialty tools

2. 🔧 Install Revshift full poly bushing kit throughout. Use the **offset FCAB variant** — see 04-front-geometry for the FCAB install detail; the offset is geometry-critical and must be specified at order time.
   > ⚠️ **Pitfall:** Poly bushings require grease at install and periodic re-greasing. Dry poly bushings squeak constantly and wear unevenly. Use the Revshift-supplied grease or equivalent poly-compatible lubricant.

### M3 Trailing Arm Swap 🔧 DIY with specialty tools

> **This swap must happen while the subframe is out. Once the subframe is reinstalled, this becomes a major teardown.**

3. 🔧 Source E36 M3 trailing arms: 1996–1999 US E36 M3 or 1996–2002 Z3M (same arm, more Z3M supply). ~$300–500/pair.
   - OEM part numbers: Left `33322227985` / Right `33322227986` — 1996–1999 E36 M3 and 1996–2002 Z3M. New OEM discontinued; source used only.
   - M3 arms use larger wheel bearings and M3 hubs — required for Born2Drift halfshaft fitment and hydraulic handbrake bracket bolt pattern. Source: [RealOEM — 1999 E36 M3 rear axle diagram](https://www.realoem.com/bmw/enUS/showparts?diagId=33_1004&id=BG93-USA-05-1999-E36-BMW-M3)

4. 🔧 Swap trailing arms while subframe is out.
   > ⚠️ **Pitfall:** Trailing arm swap must happen while subframe is out. Once the subframe is back in, this becomes a major teardown. Do not skip it at Phase 1.

5. 🔧 Install Born2Drift Heavy Duty E36 Halfshaft Kit at the same time — trailing arms are already out, adding minimal incremental labor.
   - Includes 2 driveshafts + 2 diff adapters + 2 hub adapters.
   - Confirmed fitment: Euro 328i 3.46 diff (188mm) + US M3 trailing arms (M3 hubs OD 75mm / ID 42mm match) — fully compatible.
   > ⚠️ **Pitfall:** Do not reinstall trailing arms without the halfshaft kit installed — you'll have to pull them again to install later.

### VAC Billet Differential Cover 🔧 DIY with specialty tools

> ~30 min incremental while the diff is already exposed with trailing arms and halfshafts out.

6. 🔧 Install VAC Motorsports billet differential cover during the Phase 1 subframe-out window.
   - Steps: drain gear oil → unbolt old cover → clean mating surface → install billet cover → transfer speed sensor to new cover → refill with gear oil.
   - No internal diff disassembly required.
   - Benefits: increased fluid capacity + cooling fins (LSD clutch pack protection during sustained drifting); temp sensor port (MaxxECU analog input for diff temp logging); AN fittings for future external cooler; reinforced mounting ears (eliminates OEM cast cover ear failure mode).
   - Compatible with 188mm Euro 328i diff.

### Alignment ✅ DIY (scheduling) / Shop required

7. ✅ Schedule alignment after coilovers and after the full geometry stack from 04-front-geometry is complete. Find an alignment shop familiar with drift or track builds — standard shops will try to return to OEM spec.

   See **04-front-geometry** for final alignment targets.

## References

- [RealOEM — 1999 E36 M3 rear axle diagram (trailing arm PNs)](https://www.realoem.com/bmw/enUS/showparts?diagId=33_1004&id=BG93-USA-05-1999-E36-BMW-M3)
- [Born2Drift E36 Halfshaft Kit](https://www.born2drift.net/products/bmw-e36-rear-halfshafts-kit-drift-track-axles-heavy-duty)
- VAC Motorsports: [store.vacmotorsports.com](https://store.vacmotorsports.com/) · 2501 Snyder Ave, Philadelphia PA · 215-462-4666

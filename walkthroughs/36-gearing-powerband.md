# Gearing & Powerband Analysis — 8HP70 × Final Drive × Engine RPM Spec

**Phase:** Reference analysis (applies to Phase 3a M52 and Phase 3b 07K)
**Prerequisites:** None — math reference doc. Inputs: 8HP70 gear ratios (`E36_9000RPM_Project_Plan_Verified.md` → 8HP70 Gear Ratios), 3.15 target diff / 3.46 stock diff, ~25.0" rear tire diameter (~807 revs/mile — covers 225/50R16 street through 255/35R18 drift fitments within ~2%).

---

## 1 — Mean piston speed vs. RPM target

Mean piston speed = 2 × stroke × RPM / 60. The RPM-first build goal is 8,200–8,500 operating point with 9,000 headroom on either engine.

| Engine | Stroke | @ 8,000 | @ 8,500 | @ 9,000 |
| :----- | :----- | :------ | :------ | :------ |
| RB26DETT (reference) | 73.7 mm | 19.7 | 20.9 | 22.1 |
| M52B28 | 84 mm | 22.4 | 23.8 | 25.2 |
| S52B32 | 89.6 mm | 23.9 | 25.4 | 26.9 |
| **07K** | **92.8 mm** | **24.7** | **26.3** | **27.8** |

**Verdict:** the 07K is the *harder* engine to rev, not the easier one — 92.8 mm stroke vs the M52B28's 84 mm. At the specced 8,000 shift point it runs 24.7 m/s sustained (F20C-at-redline territory, ~24.9 — proven but fast). At the 9,000 limiter it's 27.8 m/s — extreme; defensible as momentary limiter/headroom only, not a sustained operating point. The M52 reaches the same RPM targets at materially lower piston speed. The 07K's case for the RPM goal is community toughness (iron block, forged internals, documented high-RPM builds below), not geometry. Rod/stroke ratio: 07K = 144 mm / 92.8 mm = **1.55**; M52B28 = 135 mm / 84 mm = **1.61** — comparable, both on the short side.

## 2 — High-RPM 07K precedent survey

| Build / source | Internals | RPM | Notes |
| :------------- | :-------- | :-- | :---- |
| **Caste Systems MK3 Golf** (IE-powered, 8.92 @ 172 mph WCF record) | IE Tuscan rods 144×22, JE pistons, IE springs/retainers, prototype cams, Ferrea valves, 6766 BB turbo | **8,700** | Revving to 8,700 with the only documented issue being *accessory belt retention* — same failure mode the Fluidampr + custom belt in this build addresses. Source: [performancebyie.com](https://performancebyie.com/blogs/ie-auto-blog/caste-systems-performance-mk3-golf-ie-powered-07k-goes-8-92-172mph) |
| **Rennlist 944 07K swap thread** (community consensus) | Stock | **8,500** claimed | "07K can rev to 8500rpm stock"; rear-main-seal trigger wheel tested reliable past **9,400 rpm**. Community claims — directionally consistent with Caste, treat as unverified enthusiasm. Source: [rennlist.com](https://rennlist.com/forums/944-turbo-and-turbo-s-forum/803341-vw-audi-07k-2-5l-20v-i5-swap-thread.html) |
| **Quattroworld turbo 07K build** | Built engine, 18 lb boost, E85, 1000cc | **~8,500** design | "Mechanically this engine is built to run ~8500 RPM" — dyno-limited at 6,500 by fuel pump, not the engine. Outflows an AAN at 32 lb on 18 lb. Source: [forums.quattroworld.com](https://forums.quattroworld.com/quattro/msgs/11386.phtml) |
| **07K Wiki — solid lifter guidance** | Stock hydraulic + shim | **~8,500 ceiling** | "Running the stock hydraulic lifters with a shim is fine up to ~8500 rpm. Above that and/or motorsport, solid lifters are required." This build's Ferrea solid-lifter shim conversion is *required* for the 9k limiter, not optional. Source: [the07k.wiki](https://the07k.wiki/wiki/Aftermarket_Parts) |
| **@damned_driveway (IG)** — NA 8,000+ RPM street car | **Unopened BGP — stock cams, stock valve springs** | **~8,000–8,300** | "The definitive guide to an 8000 RPM 07K" — IE intake manifold, TDC Shop AC delete (belt retention again), RevMap tune, 02Q trans. Remarkable that stock bottom end + stock springs survive this — treat as anecdotal; stock springs at 8,000+ is valve-float roulette. Source: [instagram.com/p/DarN3adNNz8](https://www.instagram.com/p/DarN3adNNz8/) |
| **Cole Wilkie — MK4 Jetta 07K swap** (`@wilkie.cole`) | CBTA junkyard engine | — | The E36 owner's stated mount-fab resource. Full swap doc published on VW Vortex including wiring corrections; RevMap MAF-less tune on stock ME7.1.1. Source: [vwvortex.com](https://www.vwvortex.com/threads/07k-swapped-mk4-jetta.9566827/) |

**Counterpoints (why the ceiling is not free):**
- IE's all-motor NA dyno build **flat-lined past 8,000 RPM even with ported head + full bolt-ons** — the NA airflow ceiling is real. Irrelevant on boost (turbo supplies mass airflow past cam/port NA limits — same reason TTRS cam wins over CAT Cams at this power level), but it's why nobody quotes NA numbers past 8k. Sources: [VW Vortex](https://www.vwvortex.com/threads/high-revving-na-build.9571582/), [golfmk6 IE dyno thread](https://www.golfmk6.com/forums/index.php?threads%2Fintegrated-engineerings-project-2-5l-engine-dyno-build-up-thread.241805%2Fpage-8=)
- One Motorgeek builder claims "neither 07K and TTRS cams are good past 7K" and bought Schricks for an 8k goal — a single-build opinion contradicted by Jim Green's 630 whp stock-cam datapoint. Logged, not adopted. Source: [motorgeek.com](https://www.motorgeek.com/threads/1990-cq-07k-build-and-1991-cq-restoration.204234/)

**Certainty summary:** 8,000 RPM shifts — **high confidence** (multiple independent builds at 8,500–8,700 on comparable hardware). 9,000 sustained — **moderate**; the precedent pool thins above ~8,700 and the remaining gates are the flagged verification items: forged `07K105101E` crank (cast unit in hand — HOLD), SPA800 rod-bolt rating at 9k (confirm with SPA — `21-07k-rotating-assembly.md`), SPA piston-to-wall clearance at sustained RPM, LPS oil pump mod mandatory (stock pump cavitates >~8,000 — `24-07k-oil-system.md`).

## 3 — Speeds per gear (8HP70 × diff × ~25.0" tire)

Overall ratio = gear × diff; mph = RPM × 60 / (gear × diff × 807 revs/mile).

### Final drive 3.15 (target — E36 M3 diff)

| Gear | Ratio | mph @ 8,000 shift | mph @ 9,000 limiter |
| :--- | :---- | :---------------- | :------------------ |
| 1st | 4.71 | 40 | 45 |
| 2nd | 3.14 | 60 | 68 |
| 3rd | 2.11 | 90 | 101 |
| 4th | 1.67 | 113 | 127 |
| 5th | 1.29 | 146 | 165 |
| 6th | 1.00 | 189 | 213 |
| 7th | 0.84 | 225 | 253 |
| 8th | 0.67 | 282 | 317 |

### Final drive 3.46 (stock 328i manual fallback)

| Gear | Ratio | mph @ 8,000 shift | mph @ 9,000 limiter |
| :--- | :---- | :---------------- | :------------------ |
| 1st | 4.71 | 37 | 41 |
| 2nd | 3.14 | 55 | 62 |
| 3rd | 2.11 | 82 | 92 |
| 4th | 1.67 | 103 | 116 |
| 5th | 1.29 | 133 | 150 |
| 6th | 1.00 | 172 | 194 |
| 7th | 0.84 | 205 | 230 |
| 8th | 0.67 | 257 | 289 |

6th and above are drag-limited on paper — realistic top speed expires in 5th–6th (~165–185 mph depending on aero). Highway cruise at 75 mph in 8th: **2,128 RPM** on 3.15, **2,338** on 3.46.

### Working gears for drift (limiter speeds)

- **3.15 diff:** 2nd = 68 mph, 3rd = 101 mph — the usable drift band is 2nd–3rd, 68→101 mph. Long 1st/2nd favors big tracks.
- **3.46 diff:** 2nd = 62 mph, 3rd = 92 mph — tighter band, more wheel-speed control on initiation, busier on big tracks. Either works; 3.15 is the calmer choice and the diff the plan already prefers.

## 4 — The audit that matters: upshift landing RPM vs. boost threshold

RPM after each upshift at the 8,000 shift point (ratio of outgoing/incoming gears):

| Upshift | Landing RPM |
| :------ | :---------- |
| 1st → 2nd | 5,333 |
| 2nd → 3rd | 5,376 |
| 3rd → 4th | 6,332 |
| 4th → 5th | 6,180 |
| 5th → 6th | 6,202 |
| 6th → 7th | 6,720 |

**Powerband estimate, specced hardware** (SPA TMW22 twin-scroll + Garrett G25-660 RR + TTRS cam w/ active VVT + ID1050x, E85 18–28 psi): boost threshold ~3,500 RPM, full boost ~4,000–4,500 RPM on a divided manifold (G25-660 is the fastest-spooling frame in its power class; NineX/944 07K community confirms the combination). Torque plateau ~4,500–6,000; power climbs to the 8,000 shift point. Ceiling is turbo airflow, not cam.

**Result: every upshift at 8,000 lands at ≥5,333 RPM — permanently above full boost in every gear.** This is the numerical confirmation of the plan's 8HP thesis (`E36_9000RPM_Project_Plan_Verified.md` — "the 4.71→0.67 spread keeps the engine on its power peak through the entire rev range"). The 7:1 total spread is what lets a peaky turbo engine behave like an NA: no gear ever drops off boost once rolling. Only the standing-start 1st-gear pull spends time below the boost threshold.

**M52 path for comparison:** GTX3076R on 2.8L full-boosts ~4,500–5,000; shifting at 8,200–8,500 lands ≥5,470 — also always on-boost. Both paths satisfy the powerband thesis; the 07K's earlier-boosting G25-660 gives a slightly fatter midrange floor.

## Related walkthroughs

- `21-07k-rotating-assembly.md` — crank/rods/pistons (the 9k-capable bottom end)
- `22-07k-head-valvetrain.md` — TTRS cam + Supertech duals + solid lifter conversion
- `24-07k-oil-system.md` — LPS pump mod (>8,000 RPM mandatory), iABED pan
- `31-air-boost.md` — G25-660 RR + SPA TMW22 install
- `15-m5x-turbo-sourcing.md` — M5x piston-speed analysis (23.8 m/s @ 8,500)
- `E36_9000RPM_Project_Plan_Verified.md` — 8HP70 gear ratios, diff selection

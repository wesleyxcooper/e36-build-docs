# Phase 2: 07K Bottom End Build — Euromotive Handoff

**Phase:** 2  
**System tags:** `[ROTATING-ASSEMBLY]` `[MACHINING]`  
**Shop-mandatory:** Yes — Euromotive Autohaus handles all longblock assembly and machine work  
**Prerequisites:** 07K donor block sourced and physically inspected (`20-07k-sourcing.md`); LPS oil pump send-in initiated before drop-off; all parts from the "Bring at Dropoff" list ordered and on hand

---

## Shop Contact

**Euromotive Autohaus**  
1306 W Chester Pike, West Chester, PA  
📞 **(610) 416-5702** · appointment-based  
[eurohauspa.com](https://www.eurohauspa.com/)  
VW/Audi/BMW specialist; authorized 034 Motorsports + Integrated Engineering dealer; explicitly lists engine rebuilds and swaps.

---

## Parts

### Parts You Bring to Euromotive at Dropoff

| Qty | Part | PN / Source | Cost |
| --- | --- | --- | --- |
| 1 set | SPA Forged Pistons (83mm) + H-beam Rods (144mm × 20mm) | [SPA Turbo USA](https://spaturbousa.com/products/forged-piston-and-rings-set-83mm-vw-2-5l-jetta-mk5-07k-vw-144mm-x-20mm-super-a-connecting-rod-set-3-8-bolt-1000hp) | $799.90 |
| 1 set | King XP Tangless Main Bearings (07K) | [SBPartsDirect](https://www.sbpartsdirect.com/product_p/king_main_bearing_07k.htm) — **do not order until Euromotive mics journals** | $195.99 |
| 1 set | King XP Tangless Rod Bearings (07K) | [SBPartsDirect](https://www.sbpartsdirect.com/category_s/305.htm) | $59.99 |
| 1 kit | ARP Main Stud Kit (ARP-CVB2) | [Four Season Tuning](https://www.fourseasontuning.com/arp-cvb2-arp-main-stud-kit-for-mk5mk6-25l-5-cylinder-engines) | $299.99 |
| 2 pcs | 034-block Full-Circle Thrust Washers (360° mod) | Glyco `026 198 421` (likely — **confirm exact PN with Euromotive or Carson Heter in 07K Swap FB group before ordering**) · [FCP Euro](https://www.fcpeuro.com/products/vw-audi-engine-crankshaft-thrust-washer-set-026198421) | — |
| 5 pcs | TTRS Oil Squirters | `06J103154B` (alt: `06J103154AA`) · ECS Tuning / FCP Euro / eBay | — |
| 1 pc | OEM Water Pump | `07K121011B` · [VWPartsGiant](https://www.vwpartsgiant.com/oem-2007-volkswagen-rabbit-water_pump) | $134.93 |
| 1 kit | LPS-modified 07K oil pump | Returned from LPS send-in service (see `24-07k-oil-system.md`) — LPS ships directly to Euromotive if coordinated in advance | ~$150 service + shipping |

> **King XP bearings — do NOT order until after Euromotive mics the crank journals at teardown.** Order Standard size if journals are within spec; order the specific undersize Euromotive specifies if a regrind is needed. Color code for `07K105101E` forged crank journals: yellow (GLB) rod bearings per OEM ref `07K105701E`/`07K105701F`. Photograph the 6-character bearing code stamp on the crank rear face and provide to Euromotive for shell class selection.

### Parts Euromotive Installs During Longblock (Also Bring)

| Part | PN / Source | Notes |
| --- | --- | --- |
| ARP Head Stud Kit (ARP-CVB1) | [Techtonics Tuning](https://techtonicstuning.com/product/arp-head-stud-kit-for-mk5mk6-25l-5-cylinder/) — $223.00 | Matched pair with ARP-CVB2. Shop installs during head assembly. |
| Victor Reinz TTRS CEPA Head Gasket Kit | [FCP Engineering](https://fcp-engineering.com/en/audi-vw/1992-audi-25-20v-tfsi-victor-reinz-head-gasket-kit.html) — $200.00 | |
| Cam Adjuster Stretch Bolts (2×) | `N91042802` · [FCP Euro](https://www.fcpeuro.com/products/audi-camshaft-sprocket-bolt-genuine-audi-n91042802) — $9.19/ea | TTY — single-use; shop needs them for timing setup |
| Supertech Dual Valve Spring + Ti Retainer Set | [CTS Turbo](https://us.ctsturbo.com/product/supertech-valve-spring-retainer-set-for-audi-vw-2-5l-fits-vw-mk5-mk6-audi-ttrs-rs3/) — $523.63 | See `22-07k-head-valvetrain.md` |
| Ferrea 07K Solid Lifter Shims (set of 20) | [EcodeTuning](https://www.ecodetuning.com/lp1102-20-lp1102-20-ferrea-racing-components-volkswagen-2-5l-lifter-shims-set-of-20.html) — $46.30 | Shop selects correct thickness per valve |

### Parts You Install After Longblock Delivery (Do NOT Bring to Euromotive)

These bolt onto the completed sealed longblock at home — Euromotive does not handle them:

- iABED longitudinal oil filter housing (with thermostat) — see `24-07k-oil-system.md`
- iABED baffled longitudinal oil pan — see `24-07k-oil-system.md`
- BBG billet valve cover + rear coolant flange — owner installs after delivery
- Boost Brothers longitudinal intake manifold — see `25-07k-air.md`
- LPS phenolic intake gasket — see `25-07k-air.md`
- Fluidampr 551211 harmonic damper (install after longblock is on stand at home)
- LPS 07K titanium exhaust stud kit (install at Phase 3 manifold fitment)
- MaxxECU 07K engine harness (owner-built — see `26-07k-harness.md`)

---

## Tools

- Plastigauge (verify all bearing clearances before assembly — do not skip any journal)
- Torque wrench (beam or click — accurate to 10 Nm resolution minimum)
- Ring compressor (for piston install)
- Ring gap file (verify and file piston ring end gaps to spec for bore diameter)
- Assembly lube (ARP Ultra-Torque for studs; engine assembly lube for bearing surfaces)
- Inspection light

---

## Procedure

### 1 — Inspect SPA pistons on receipt (before anything goes to the machine shop)

Check each of the 5 piston crowns for dents, casting flaws, or sloppy machining on the ring grooves. Contact SPA for a replacement if any unit is defective. **The machine shop bores to your pistons — a defective piston discovered after boring is an expensive problem.**

> ⚠️ **Pitfall:** SPA 07K pistons are 4032 T6 forged aluminum — rated 1,000 hp with DLC top ring, anti-detonation groove, and accumulator groove. SPA specifies **0.08 mm piston-to-wall clearance**, but flags that extreme applications should consult the builder. At 9,000 RPM under sustained boost and drifting heat cycles, confirm this clearance with the machine shop — they may recommend opening it slightly rather than running minimum spec.

### 2 — Send 07K oil pump to LPS early

**Do this before the block goes to Euromotive.** Drop the pan, pull the pump, send it to Linder Power Systems. Coordinate with LPS to ship directly to Euromotive when ready. See `24-07k-oil-system.md` for full procedure. LPS lead time is 4–8 weeks — send early.

> ⚠️ **Pitfall:** LPS lead time can be 4–8 weeks. A pump that hasn't returned delays the entire longblock assembly. Send early and ship directly to Euromotive.

### 3 — Prepare block for drop-off

- Drop the lower steel sump
- Inspect and verify the forged crank counterweight parting line (see `20-07k-sourcing.md` — do this before paying teardown labor on a cast-crank block)
- Pull the oil pump and send to LPS
- Reinstall pan hand-tight with no RTV — Euromotive drops it again; no sealing yet
- Confirm all parts in the "Bring at Dropoff" table above are labeled and boxed

### 4 — Drop-off scope discussion with Euromotive

Talk through the following with the tech before leaving the engine:

1. **360° Thrust Bearing Mod** — machine **both sides** of the #4 main cap to accept the full-circle 034-block thrust washers. Show them the reference video: [Five (5) Cylinder VW Thrust Washer Repair](https://www.youtube.com/watch?v=hCIZny5uc4Q). Community confirmation: Carson Heter — "I did the 360° on both sides." Jimolde Burnsides — "360 is a must if you can." Budget ~$50–150 machining.
2. **Align Hone** — required after ARP-CVB2 main stud installation. Do not skip.
3. **Bore Inspection + Hone** — bore to SPA 83 mm piston spec, 0.08 mm piston-to-wall clearance (or as modified by shop recommendation).
4. **Deck Flatness Check** — standard at teardown.
5. **Head Pressure Test** — confirm head holds before assembly.
6. **Valve Seat Cut** — only if running Supertech Inconel exhaust valves (your decision at teardown based on existing valve condition). If not running Inconel, lap existing valves.
7. **Crank Journal Measurement** — mic all 5 main and 5 rod journals before King XP bearings are ordered. Call with measurements; bring bearings to a follow-up or leave a card for shop to order.
8. **TTRS Oil Squirter Install** — 5× squirters (`06J103154B`) brought with engine. Thread-in replacement; torque to **27 ft-lbs** per VW Erwin. Install during short block assembly.
9. **LPS-modified oil pump** — Euromotive installs during longblock assembly when pump arrives from LPS (shipped directly to shop).
10. **OEM water pump impeller removal** — bring `07K121011B`. Remove impeller only; leave housing mounted as passive coolant manifold. Pierburg CWA400 handles pumping at Phase 3. Housing pulley freewheels in belt path.
11. **iABED baffled oil pan** and **BBG billet upper timing cover** — offer these to the shop at dropoff. If Euromotive can fit them on their stand/workflow, they install with correct torque and sealing. If not (e.g. stand conflict), owner installs after delivery.

### 5 — Bearing clearance verification (before final assembly)

**Plastigauge every single bearing journal before final assembly. Do not skip any.**

- Target main bearing clearance: **0.0015–0.0025"**
- Target rod bearing clearance: **0.001–0.002"**

If any clearance is out of range, stop and call the machine shop. Do not press on.

> ⚠️ **Pitfall:** Assembly lube (not engine oil) on every bearing surface at install. Engine oil alone does not provide adequate protection for the critical first seconds before oil pressure builds.

### 6 — Piston ring end gaps

Piston ring end gaps must be checked and filed to spec for your bore diameter before rings are installed. Pre-gapped rings from the kit are set for the stock bore. If the block was bored even 0.010" over, the gaps are wrong.

### 7 — Fluidampr installation (owner — after longblock delivery)

Install Fluidampr 551211 ([$501.99 at Real Street Performance](https://www.realstreetperformance.com/brand/fluidampr)) after the longblock is returned. Replaces the OEM crank pulley entirely (fluid-viscous damper + belt drive in one unit). Critical on two counts: (1) the stock 07K BGP crank pulley has no harmonic damping — at 9,000 RPM this accelerates crank and thrust bearing wear; (2) in longitudinal orientation, torsional crank vibration causes the accessory belt to walk off — documented in the 944/968 07K swap community.

> ⚠️ **Pitfall:** Knock sensor torque directly affects frequency response — both 07K knock sensors must be torqued to **20 Nm** with a torque wrench. Over- or under-torque causes incorrect knock detection. Do not use an impact driver.

---

## Labor and Machine Work Budget

Shop rate confirmed ~$150–165/hr (based on prior Euromotive service receipts).

| Phase | Est. Hours | Est. Cost |
| --- | --- | --- |
| Teardown + measurement | 4–6 hrs | $630–945 |
| Short block assembly (crank, bearings, pistons, ARP studs) | 6–9 hrs | $945–1,418 |
| Head assembly (springs, shims, valve lash, install) | 5–8 hrs | $788–1,260 |
| Timing + final close | 2–3 hrs | $315–473 |
| **Labor subtotal** | **17–26 hrs** | **$2,678–4,096** |
| Bore + hone (5 cylinders to SPA spec) | flat rate | $350–600 |
| Align hone (after ARP-CVB2 main stud install) | flat rate | $150–300 |
| Deck check + mill if needed | flat rate | $100–200 |
| Head pressure test + valve lap | flat rate | $100–200 |
| 360° thrust cap machining (#4 main cap, both sides) | flat rate | $75–150 |
| **Machine work subtotal** | — | **$775–1,450** |
| **Total (labor + machine work)** | — | **~$3,450–5,550** |

**Budget midpoint: ~$4,200–4,500.** Ask at dropoff whether they quote flat-rate per operation or open hourly — flat-rate may come in lower for a shop that does these regularly.

> If running Supertech Inconel exhaust valves: add ~$300–800 for valve seat cut on top of the above.

**Output:** You take delivery of a **complete sealed longblock**. All bolted-on work (timing cover, oil housing, intake manifold, turbo, harness) is owner-installed.

---

## References

- [Euromotive Autohaus](https://www.eurohauspa.com/) — 1306 W Chester Pike, West Chester, PA · (610) 416-5702
- [E36_Euromotive_Handoff.md](../E36_Euromotive_Handoff.md) — full dropoff package and scope checklist
- [Five (5) Cylinder VW Thrust Washer Repair — YouTube](https://www.youtube.com/watch?v=hCIZny5uc4Q)
- [07K Swap Facebook Group — 360° thrust bearing thread](https://www.facebook.com/groups/07kswap/permalink/3607377339428880/)
- [SPA Turbo USA — 07K forged piston + rod kit](https://spaturbousa.com/products/forged-piston-and-rings-set-83mm-vw-2-5l-jetta-mk5-07k-vw-144mm-x-20mm-super-a-connecting-rod-set-3-8-bolt-1000hp)
- [King XP main bearings — SBPartsDirect](https://www.sbpartsdirect.com/product_p/king_main_bearing_07k.htm)
- [King XP rod bearings — SBPartsDirect](https://www.sbpartsdirect.com/category_s/305.htm)
- [ARP-CVB2 main stud kit — Four Season Tuning](https://www.fourseasontuning.com/arp-cvb2-arp-main-stud-kit-for-mk5mk6-25l-5-cylinder-engines)
- [E36 DIY Build Checklist — Phase 2 Rotating Assembly](../E36_DIY_Build_Checklist.md)
- [E36 9000 RPM Project Plan — Phase 2 Rotating Assembly](../E36_9000RPM_Project_Plan_Verified.md)

# E36 Build Docs

Planning documents and bill-of-materials CSVs for the E36 restomod build.

## Planning Docs
- [Project Plan](E36_9000RPM_Project_Plan_Verified.md)
- [DIY Checklist](E36_DIY_Build_Checklist.md)
- [Enhancements & Side Projects](E36_Enhancements_SideProjects.md)
- [Euromotive Shop Intake](E36_Euromotive_ShopIntake.md)
- [Euromotive Handoff](E36_Euromotive_Handoff.md)
- [Wheel Shortlist (B8S4)](B8S4_Wheel_Shortlist.md)
- [RHD E36 Notes](rhd%20e36.md)

## Bill of Materials (CSV)
| File | Description |
|------|-------------|
| [E36_Phase0_Chassis.csv](E36_CSVs/E36_Phase0_Chassis.csv) | Phase 0 — Chassis |
| [E36_Phase1_Foundation.csv](E36_CSVs/E36_Phase1_Foundation.csv) | Phase 1 — 8HP, ECU, fuel, suspension |
| [E36_Phase1A_TurboM50.csv](E36_CSVs/E36_Phase1A_TurboM50.csv) | Phase 1A — Turbo M50 path |
| [E36_Phase1B_NAM52.csv](E36_CSVs/E36_Phase1B_NAM52.csv) | Phase 1B — NA M52 path |
| [E36_Phase2_07KBuild.csv](E36_CSVs/E36_Phase2_07KBuild.csv) | Phase 2 — 07K engine build |
| [E36_Phase3_FinalSwap.csv](E36_CSVs/E36_Phase3_FinalSwap.csv) | Phase 3 — Final swap + turbo |
| [E36_Phase4_Calibration.csv](E36_CSVs/E36_Phase4_Calibration.csv) | Phase 4 — Tune and calibration |

## Technical Diagrams

### 8HP70 Tunnel Fitment — E36 vs Dodge 8HP70
Generated Aug 2026. Dimensions marked `*` are estimated from ZF 5HP-19 fitment + community reports. Dimensions marked `✓` are cited from primary sources.

| Diagram | View | Source |
|---------|------|--------|
| [Top/Plan View](e36_8hp70_tunnel_topview.svg) | Looking down — tunnel footprint vs 8HP70 pan + length | [DomiWorks length 717.6mm](https://www.domi-works.com/pages/transmission-information) · [GRM pan 257mm](https://grassrootsmotorsports.com/forum/grm/zf-8hp70-transmission-dimensions/260842/) (physically measured) |
| [Front Cross-Section](e36_8hp70_tunnel_xsection.svg) | Looking forward at crossmember — tunnel arch vs case + boss protrusions | [lateral-g T56 comparison](https://lateral-g.net/forums/printthread.php?t=59958) · [guruautowerks boss grind](https://www.guruautowerks.com/) |

**Key findings:** 8HP70 case (~228mm wide) clears E36 tunnel inner (~256mm*) with ~14mm each side. Bellhousing mounting bosses (+21mm/side) are the primary collision — grind ~7 bosses (angle grinder, 1–2 hrs, no sheet metal cutting). Pan (257mm wide, **44mm deep** — stock plastic pan per [Truck Master Diesel](https://truckmasterdiesel.com/products/trans-pan-8hp70-low-w-collar-bk)) extends below floor — ground clearance issue only, not tunnel conflict. Trans is 717.6mm total vs ~645mm* for stock ZF 5HP-19 — new crossmember position + custom driveshaft required.

> ⚠️ **Diagram confidence caveat:** These are schematic illustrations, not engineering drawings. Cited dimensions: `717.6mm` total length (DomiWorks), `257mm` pan width (GRM — physically measured), `44mm` pan depth (Truck Master Diesel: "deepest section of the stock plastic pan measures 1.75 inch"). All other dimensions (`*`) are community estimates with no primary source — E36 tunnel widths (256mm, 286mm) in particular have no BMW dimensional drawing to back them. **Do not use these diagrams for fabrication clearance decisions — mock-up with the actual transmission.**

## Related
- [Wiring repo (e36-wiring)](https://github.com/wesleyxcooper/e36-wiring)
- [Google Sheets BOM](https://docs.google.com/spreadsheets/d/1RvWglJQ5h60HYXyukfPzipnDcFYT3F9rwGVZZGb-tCE)

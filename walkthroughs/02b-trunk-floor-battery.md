# Phase 1: Trunk Floor Delete & Trunk Battery Wiring

**Phase:** 1  
**System tags:** `[CHASSIS]` `[ELECTRICAL]`  
**Shop-mandatory:** Partial — spare tire well weld is shop-mandatory (same visit as `02-chassis-reinforcement`). Battery wiring is full DIY.  
**Prerequisites:** Interior stripped (`01-interior-prep`). Spare tire and trunk contents removed. Schedule trunk floor weld as part of the chassis reinforcement shop visit — the car is already stripped and on the lift.

---

## Parts

### Trunk Floor Delete

| Part | Source | Cost | Notes |
| --- | --- | --- | --- |
| Spare tire well delete panel — E36 sedan | [GSR Motorsports](https://gsrmotorsports.net/products/e36-sedan-trunk-floor) | $300 | Steel, X-brace pressed in, stitch-welded in. Made to order — check stock and order before scheduling shop visit. **Product description explicitly says "sedan" — no coupe or convertible listing exists on their site. Confirm fit with GSR before ordering; convertible trunk floor geometry may differ from sedan due to soft top mechanism footprint. May require custom fabrication from flat sheet instead.** |

> **Note:** The Turtle Lab fill-in ($115) slides into the existing well without cutting. Do not use it — it leaves the pressed well structure in place, which defeats the purpose. GSR is the correct approach for this build.

### Trunk Battery — LiFePO4 + Wiring

| Part | Source | Cost | Notes |
| --- | --- | --- | --- |
| Antigravity ATX20-HD LiFePO4 battery | [antigravitybatteries.com](https://www.antigravitybatteries.com) | ~$300 | Motorsport-grade LiFePO4. Lighter than OEM AGM. Can be mounted in any orientation. Bentley manual requires a vibration-resistant battery for the cabriolet — LiFePO4 satisfies this where OEM lead-acid AGM may not. |
| Braille B2317 LiFePO4 battery (alt) | [braillebattery.com](https://www.braillebattery.com) | ~$200 | Budget alternative to the Antigravity. Similar CCA, smaller form factor. |
| 2/0 AWG OFC welding cable (positive run) | Welding supply / online | ~$40–60 | Size the full trunk-to-engine-bay run. 2/0 AWG minimum per community consensus — 4 AWG is undersized for the cable length and voltage drop matters. Source: [bmw2002faq thread](https://www.bmw2002faq.com/forums/topic/256401-sanity-check-on-battery-relocation-cable-4ga-or-2ga/) |
| 150–200A ANL fuse + holder | Littelfuse / Blue Sea / Bussmann | ~$15–20 | Fuse within 12" of battery positive terminal. |
| Battery box / tray with hold-down | Billet box or steel tray | ~$30–80 | Size to chosen battery. Carriage bolt mount through flat floor patch + fender washers underneath (apex_187 method). |
| Steel reinforcement plate (under floor patch) | 10–12 gauge mild steel, cut to size | ~$10 | Weld or bolt under the flat floor patch before final install. Battery box sits on top, carriage bolts thread through both layers. |
| Ring terminal 2/0 AWG (×4 minimum) | Burndy / Ancor | ~$10–15 | Positive cable ends at battery and engine bay junction box. |
| Chassis ground stud — trunk area | M8 bolt, star washer, flat washer, nut | ~$5 | Clean bare metal, star washer for oxide penetration, same grounding rules as main ground strategy in `11-ecu-chassis-wiring.md`. |
| Moroso 74108 4-post battery cutoff switch | [Moroso](https://www.moroso.com) | ~$50–70 | Optional — required by some track orgs. Mount on trunk floor or rear bulkhead near battery. Must be 4-post, NOT 2-post (2-post leaves alternator feeding the system when switch is open). |
| Amphenol Radlok connectors (`RL00801-50BK` / `RL00801-50RE`) | [TTI](https://www.tti.com) | ~$7–12 ea | Tool-free press-lock disconnect at battery end. Already spec'd in power-distribution.wv — use consistent with the rest of the power scheme. |

---

## Tools

- Angle grinder + cut-off wheel (spare tire well cut-out)
- MIG welder — shop-mandatory for floor patch weld
- Hammer and dolly (flange flatting before weld)
- Seam sealer (3M 08308 or equivalent)
- Raptor Liner or 3M Rubberized Undercoating (underside coat after weld)
- Wire stripper, crimper (hydraulic preferred for 2/0 AWG), heat gun
- Heat shrink tubing (adhesive-lined, sized for 2/0)
- Drill + step bit or chassis punch (grommet hole if needed)
- Cable fish tape or pull wire (for routing cable through floor/sill)

---

## Procedure

### Part A — Spare Tire Well Delete 🏭 Shop-mandatory

Do this during the same chassis reinforcement shop visit (`02-chassis-reinforcement`). The trunk interior is already stripped and the car is on the lift.

1. 🏭 **Order the GSR Motorsports panel before the shop visit.** It is made to order — check stock and allow lead time. Confirm the panel fits a sedan (not coupe/convertible) and bring it to the shop with the car.

2. 🏭 **Mark the cut line.** The cut boundary runs 1–2" inside the stamped well perimeter, leaving a flange around the opening that the new panel will lap over. Do not cut flush to the well edge — the flange gives the welder something to work with.

3. 🏭 **Cut out the spare tire well** with angle grinder + cut-off wheel. The pressed center post can be removed first (it is held by underseal, not welded — twist and pull per [Driftworks forum](https://www.driftworks.com/forum/threads/e36-spare-wheel-well.229713/)). Work the perimeter cut carefully — the surrounding floor structure stays.

4. 🏭 **Prep the flange to bare metal.** Grind, sand, and clean any paint, seam sealer, or undercoating from the weld flange. Bare metal welds only — same rule as subframe reinforcement.

5. 🏭 **Test-fit the GSR panel.** Confirm it seats flat against the flange with no gaps over 1/16". Hammer and dolly the flange if there is deformation from cutting before the panel goes in.

6. 🏭 **Stitch weld the panel in** per GSR spec. Full continuous bead is not required — stitch (weld 1", skip 1", repeat) reduces warping and is structurally adequate for a floor panel. Let cool before any sealer.

7. 🏭 **Seam seal the underside.** Apply 3M 08308 or equivalent around the full perimeter weld on the underside before undercoating. This is the water/corrosion barrier.

8. 🏭 **Coat the underside** with Raptor Liner or 3M Rubberized Undercoating. Do this while the car is on the lift with the underside accessible — same window as any other undercoating done during chassis reinforcement.

> ⚠️ **Convertible note:** The soft top hydraulic/mechanical components live at the front of the trunk behind the rear seat. Confirm the cut boundary stays clear of those mounts before grinding. The spare tire well is aft of the soft top hardware — this should not be an issue but verify before cutting.

---

### Part B — Battery Box Mounting (after floor patch, before wiring)

9. **Determine battery position** on the new flat floor. Aim for centered or slightly toward the passenger side to match the OEM engine-bay battery location laterally. Keep the battery box accessible from the trunk opening.

10. **Weld or bolt the reinforcement plate under the floor.** Before the car leaves the shop (or at home if doing it later), tack-weld or bolt a 10–12 gauge steel plate under the new floor panel at the battery position. This is the clamping surface for the carriage bolt hold-down.

11. **Mount the battery box.** Drill four holes through the floor patch + reinforcement plate. Carriage bolts up through the floor, battery box sits on top, fender washers and locking nuts underneath.

---

### Part C — Trunk Battery Wiring

This is full DIY — no welder required.

> **Wiring file status:** `power-distribution.wv` has been updated — battery location resolved as trunk, BATT_POS/BATT_NEG/TRUNK_CHASSIS_GND connectors added, cable gauge updated to 2/0 AWG, ground strategy updated per W8JI. See [`power-distribution.wv`](../../e36-wiring/harnesses/power-distribution.wv).

> **Battery location:** The E36 convertible ships with the battery in the right rear of the boot — the same physical side in both LHD and RHD. In this RHD car, right rear of boot = **driver's side**. Sources: MotorsForum UK (1994 E36 320i SE, RHD): battery in boot; front jump terminal confirmed on "steering wheel side" (right side of engine bay in RHD), indicating the cable routes along the right sill to the right rear of the boot ([motorsforum.com](https://www.motorsforum.com/bmw/e36-battery-dilemma-15589-.htm)). BimmerForums UK (1996 E36 convertible, RHD): *"the cable runs from the battery in the boot"* ([bimmerforums.co.uk](https://www.bimmerforums.co.uk/threads/1996-e36-convert-ecu.29057/page-2)). BMWFanatics (E36 Cabriolet): battery in boot confirmed; Bentley manual requires vibration-resistant battery due to body scuttle in the trunk area ([bmwfanatics.co.za](https://www.bmwfanatics.co.za/threads/e36-cabriolet-battery-concerns.29064/)). The task here is installing a LiFePO4 replacement and new-build wiring from scratch — not relocating a front battery.

12. **Establish the trunk ground stud** (`TRUNK_CHASSIS_GND`). Find a structural point in the trunk — weld seam, frame rail, or sill area. Not bare floor sheet metal. Drill and tap or bolt an M8 stud. Remove paint to bare metal, star washer under the nut.

13. **Connect battery negative to trunk chassis stud — one lead, short run, 2/0 AWG.**

   > **Ground strategy for trunk battery — per W8JI (Charles T. Rauch Jr., professional engineer, 40 years vehicle electrical design):**
   > - Battery negative → trunk chassis stud (short local lead — `W_BATT_NEG_TRUNK`)
   > - Engine block → engine bay chassis stud (separate short cable at the front — `W_ENGINE_BLOCK_TO_CHASSIS`)
   > - The E36 steel unibody carries return current between the two studs — no long copper cable needed.
   >
   > W8JI: *"With distances more than a few feet, the chassis path through any steel unibody vehicle is far less resistance than any practical size of copper cable. Use the chassis for long grounds, such as from a rear mounted battery to the front."*
   > W8JI: *"The battery should be high-current grounded to the vehicle chassis with short direct leads. The engine block should be high-current grounded to the vehicle chassis."*
   > Source: [w8ji.com/battery_wiring.htm](http://www.w8ji.com/battery_wiring.htm)

   > **Why not a direct trunk-to-block cable?** The E36 unibody is lower resistance over 15+ feet than 2/0 AWG copper. Running a long direct cable from trunk to engine block adds weight, cost, and routing complexity for no electrical benefit. The short-cable-to-chassis approach is what W8JI actually uses in his own trunk battery build.

   > **Scientific basis for grounding at the engine end separately:** W8JI: *"Without a reliable connection, the vehicle chassis can electrically connect to the block through engine and transmission bearings. This can not only damage bearings through arc pitting of bearing surfaces, it can also cause intermittent or fluctuating voltages to appear in critical or sensitive vehicle electronic systems."* DSPORT Magazine: *"Whenever there is resistance between one of the grounding points on the chassis and the battery, a voltage drop will be present. Grounding loops are not desirable as they cause small currents to be conducted due to the voltage offset and they can also produce noise."* Sources: [w8ji.com/battery_wiring.htm](http://www.w8ji.com/battery_wiring.htm); [DSPORT Magazine](https://dsportmag.com/the-tech/education/how-to-avoid-and-fix-automotive-electrical-issues/)

14. **Route the positive cable — 2/0 AWG, trunk to engine bay.**

   **Cable gauge calculation (Ohm's law, V = IR):** Gear-reduction starter draws ~150A at crank.
   | Gauge | Resistance (per ft, copper) | 30 ft round trip | Drop at 150A |
   |---|---|---|---|
   | 4 AWG | 0.000264 Ω/ft | 0.00792 Ω | **1.19V** — unacceptable |
   | 2/0 AWG | 0.0000905 Ω/ft | 0.00272 Ω | **0.41V** — acceptable |

   W8JI uses 2/0 welding cable for his 15-ft trunk build: *"Battery hot wire is 2/0 ('two-ought') welding cable, about 15-feet long."* Source: [w8ji.com/battery_wiring.htm](http://www.w8ji.com/battery_wiring.htm)

   Route path: trunk → right sill under carpet → existing floor grommet (or chassis punch — never bare drilled hole) → engine bay junction point (starter B+ / PMU16 stud). The factory E36 cable runs along the right sill; the new build-spec cable follows the same path. In this RHD car, right sill = driver's side. Source: [MotorsForum UK](https://www.motorsforum.com/bmw/e36-battery-dilemma-15589-.htm) confirms right-side routing via the front jump terminal position on RHD cars.

   - Protect the cable anywhere it passes through metal with a grommet — never through a bare drilled hole.
   - Route away from the exhaust tunnel. If routing past the driveshaft tunnel, use DEI or equivalent heat sleeve.

15. **Install the ANL fuse within 12" of the battery positive terminal.** Mount the fuse holder to the battery box or trunk bulkhead. This is mandatory — a cable fault between battery and fuse without a fuse is a fire. Per `power-distribution.wv` line 120: ANL or MAXI fuse within 18" of battery positive. Source: [`power-distribution.wv` lines 227–241](../../e36-wiring/harnesses/power-distribution.wv).

16. **Terminate all cable ends** with appropriately-sized ring terminals (hydraulic crimp, not set-screw). Heat shrink with adhesive-lined tubing over each crimp. Label all ends per Brady M210 label convention used throughout the build.

17. **Install Radlok connectors** at the battery end per the Radlok spec in `power-distribution.wv` — `RL00801-50BK` (black/negative) and `RL00801-50RE` (red/positive). Tool-free press-lock disconnects make the battery removable without tools, which matters for track events that require battery disconnect.

18. **Install the Moroso 74108 4-post cutoff switch** on the trunk floor or rear bulkhead, in series with the positive cable run between battery and main fuse. The 4-post switch simultaneously disconnects the battery and the alternator B+ — a 2-post switch only disconnects the battery and the alternator continues to power the car. Per `power-distribution.wv` lines 187–210: the 4-post is required, not optional, on an alternator-equipped car. Source: [`power-distribution.wv` lines 187–210](../../e36-wiring/harnesses/power-distribution.wv).

19. **Test.** Connect battery, confirm all loads power on normally. Check voltage at the starter with a multimeter — should be within 0.2V of battery terminal voltage (any more indicates voltage drop from undersized cable or a bad connection).

---

## Weight Distribution Impact

The E36 convertible battery is in the right rear of the boot from the factory — driver's side in this RHD car. Sources: [MotorsForum UK — RHD E36 320i SE](https://www.motorsforum.com/bmw/e36-battery-dilemma-15589-.htm); [BimmerForums UK — 1996 E36 convertible](https://www.bimmerforums.co.uk/threads/1996-e36-convert-ecu.29057/page-2). The weight distribution task is choosing a LiFePO4 replacement and building clean new wiring — the battery stays at the rear. The 07K swap does not add rear weight (engine goes in front, same as M52). See [E36_Enhancements_SideProjects.md](../E36_Enhancements_SideProjects.md), Trunk section.

## Engine Weight Reference (M52 → 07K)

| Engine | Weight | Measurement | Source |
| --- | --- | --- | --- |
| M52B25 single VANOS | 166 kg / 366 lbs | BMW official, dressed | [Estonian BMW Club, citing usautoparts.net BMW figures](https://foorum.bmwclub.ee/viewtopic.php?t=154362) |
| M52TUB25 double VANOS | 177 kg / 390 lbs | BMW official, dressed | Same source |
| M52B28 single VANOS | 170 kg / 374 lbs | BMW official, dressed | Same source |
| M52B28 double VANOS | 180 kg / 396 lbs | BMW official, dressed | Same source |
| 07K longblock (bare) | 124.7 kg / 274.9 lbs | VW factory spec | [VWPartsGiant 07K100031M](https://www.vwpartsgiant.com/genuine/volkswagen~engine~07k100031m) |
| 07K fully dressed (accessories, mounts — no turbo) | ~158 kg / 349 lbs | Community measurement, scale | [TheProjectPad — Hank's build thread](https://theprojectpad.com/viewtopic.php?start=25&t=244) |

The 07K is lighter than the M52B25 dressed despite being an iron block — the one fewer cylinder more than offsets the block material difference. The swap does not add nose weight.

---

## References

- [@ethurtysix Instagram reel](https://www.instagram.com/p/DcpJaBCqjIp/) — E36 spare tire well delete + battery relocation reel and comment thread (primary visual reference)
- [GSR Motorsports — E36 Spare Tire Well Delete](https://gsrmotorsports.net/products/e36-sedan-trunk-floor) — $300 steel panel, stitch-weld in
- [Driftworks forum — spare tire center post removal](https://www.driftworks.com/forum/threads/e36-spare-wheel-well.229713/) — confirms post is underseal-held, not welded; twist-and-pull removal
- [W8JI — Battery Wiring (Charles T. Rauch Jr., PE)](http://www.w8ji.com/battery_wiring.htm) — authoritative trunk battery guide; 40 years vehicle electrical design; 2/0 AWG welding cable spec, chassis-as-ground-path for trunk batteries
- [DSPORT Magazine — Automotive Electrical Issues](https://dsportmag.com/the-tech/education/how-to-avoid-and-fix-automotive-electrical-issues/) — ground offset / chassis ground strategy
- [bmw2002faq — Battery Relocation Wiring with E36 and E46](https://www.bmw2002faq.com/forums/topic/222060-battery-relocation-wiring-with-help-from-an-e36-and-e46/) — wiring procedure, junction box location (passenger side of engine bay, near DME box)
- [bmw2002faq — Cable gauge sanity check](https://www.bmw2002faq.com/forums/topic/256401-sanity-check-on-battery-relocation-cable-4ga-or-2ga/) — 2/0 AWG minimum confirmed by multiple E36 builders
- [BMW M3 1998 E36 ETM](https://www.carmanualsonline.info/bmw-m3-1998-e36-electrical-troubleshooting-manual/?srch=battery+location) — G1 BATTERY: "in RH rear side of luggage compartment" (convertible and most sedan/coupe models)
- [E36_Enhancements_SideProjects.md](../E36_Enhancements_SideProjects.md) — Trunk section for additional product options
- [`power-distribution.wv`](../../e36-wiring/harnesses/power-distribution.wv) — Radlok connector spec, cutoff switch, PMU16 power scheme

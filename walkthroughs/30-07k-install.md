# 07K Engine Swap — M52 Pull & 07K Drop-In

**Phase:** 3  
**System tags:** `[CHASSIS]` `[DRIVETRAIN]` `[OIL]` `[COOLANT]` `[ELECTRICAL]`  
**Shop-mandatory:** Partial (engine mount welding = shop; crane work = DIY with help)  
**Prerequisites:** Phase 2 07K longblock complete and sealed; 8HP installed and commissioned on M52; firewall bulkhead connector installed; 07K engine harness built and bench-tested; Chatham CNC adapter plate on order or in hand; **Scaniverse envelope scan of engine bay completed before disassembly; dedicated structured-light scanner on hand for mount-interface scans** (see `../E36_9000RPM_Project_Plan_Verified.md` → Pre-Fabrication: 3D Scanning Workflow)

---

## Overview

This walkthrough covers removing the M52 interim engine and installing the Phase 2 07K longblock with all accessories mounted. The 07K swap is a single-connector engine change at the firewall bulkhead — the cabin harness, 8HP CAN harness, and body integrations are untouched. The critical sequencing constraint is: **scan before pulling the M52** — a Scaniverse envelope pass with the M52 in place gives Blender the bay clearance context the downpipe fabricator needs later, and a dedicated structured-light scan of the exposed E36 subframe mount pads (once the M52 is out) gives Fusion the mating-feature geometry for the custom 07K mount brackets.

**RHD orientation reminder:** In this RHD E36, the 07K exhaust side (SPA manifold, turbo outlet, downpipe) is on the **driver side** (right side of car looking forward). The intake side (BBG manifold, iABED oil filter housing) is on the **passenger side** (left side of car). All hose routing and clearance checks use exhaust/intake terminology — not left/right.

---

## Parts

| Part | PN / Source | Cost |
| --- | --- | --- |
| Custom E36 07K engine mounts — welded steel | Race3 / JNC (quote required) | Shop quote |
| 07K → 8HP N63 adapter plate | Chatham CNC custom (mike@chathamcnc.com / 919-740-9748) | Quote required |
| VW longitudinal starter | FCP Euro `068911024GX` (Bosch reman, lifetime guarantee) | $349.99 + $50 refundable core |
| LPS Ti exhaust stud kit | [lpsfab.com](https://lpsfab.com) | TBD (order Phase 2) |
| Engine crane (rent) | Local tool rental | ~$80–120/day |
| Transmission jack (rent) | Local tool rental | ~$40–60/day |
| Engine stand (own or rent) | — | — |
| HF Load Leveler | SKU 96497 · [harborfreight.com](https://www.harborfreight.com/1-ton-capacity-engine-load-leveler-96497.html) | ~$30 |
| M10×1.5 DIN 580 shoulder eyebolts ×4 | McMaster-Carr `3100T12` | ~$8–12 ea |

---

## Tools

- Engine crane + load leveler
- Transmission jack
- Coolant drain pan (5L+)
- Oil drain pan
- Standard socket set (M8–M17), torque wrench
- Scaniverse (free, iPhone 16 Pro) — engine bay envelope scan for downpipe clearance work
- Creality Pika structured-light scanner + M4 Max MacBook Pro USB-C tether in the garage — engine mount mating-feature capture at full 0.03 mm blue-laser precision. CrealityScan 4 macOS handles capture + mesh cleanup on the MacBook; STL exports to the desktop for Fusion 360 bracket design. iPhone 16 Pro is backup tether (Wi-Fi 6, 0.08 mm) and handles Scaniverse envelope scans. See project plan → Pre-Fabrication: 3D Scanning Workflow and Build Machines & Software.
- Calipers — measure 07K exhaust-side boss hole spacing and thread spec (M10×1.5 expected) as redundancy to the structured-light scan
- Electrical connector picks (Lisle 57750) for harness disconnect
- Brady M210 wire label printer — relabel anything disconnected

---

## Procedure

### Pre-Pull: 3D Scan & Documentation

1. **Photograph all hose routing before touching anything** — every coolant line, oil line, vacuum line, and wiring loom in the engine bay. These references are invaluable when building 07K routing six months later. Use the same bay; label connections in photos.

2. **Envelope scan of engine bay with M52 in place — Scaniverse (iPhone 16 Pro LiDAR).**
   - Multiple passes from all angles; highest available resolution. Purpose is *clearance envelope* — steering rack, firewall, subframe, hood inner, brake booster. LiDAR is the correct regime for this (keep-out volume, not a mating surface).
   - Export as OBJ → Blender (downpipe routing path as Bezier curve, later — after 07K + turbo are actually installed).
   > ⚠️ **Pitfall:** Do the scan with a mostly-stock looking bay — accessories on the engine, not removed. The fabricator needs the real constraints (steering rack, firewall, subframe) relative to the engine position.

3. **Mating-feature scan of mount interfaces — Creality Pika + M4 Max MacBook Pro USB-C tether.**
   - Scan the **07K block exhaust-side mount boss area on the engine stand** in blue-laser mode at 0.03 mm accuracy (during Phase 2 or before drop-in below).
   - Once the M52 is pulled (below), scan the **E36 subframe mount pads and crossmember** in blue-laser mode at 0.03 mm accuracy — MacBook is portable to the garage, so full precision available on the chassis-bound features.
   - CrealityScan 4 macOS handles capture + mesh cleanup on the MacBook. Export STL → transfer to desktop (AirDrop / iCloud / OneDrive / USB-C) → Fusion 360 (Insert Mesh) → design custom mount brackets around real bolt-hole positions.
   - iPhone 16 Pro is backup tether (Wi-Fi 6, 0.08 mm) if MacBook is unavailable — still ~4× tighter than the bolt pattern actually requires.
   - 3D-printed PLA/PETG bracket templates are **fitment verification only — not structural.** Validate bolt hole alignment between 07K exhaust-side bosses and E36 subframe, then discard.
   - **Caliper backup measurements** (redundancy against a bad scan): 07K exhaust-side boss hole center-to-center spacing; 07K boss thread spec (expected M10×1.5 — verify with tap at teardown); E36 subframe mount pad center-to-center spacing (engine out).
   > See `../E36_9000RPM_Project_Plan_Verified.md` → Pre-Fabrication: 3D Scanning Workflow and → Build Machines & Software for full workflow.

### Cooling System Drain

4. Let engine cool completely. Remove expansion tank cap. Open drain cock at bottom of CSF radiator (or remove lower hose) and drain into pan. Disconnect heater core hoses at firewall and drain residual.
   > ⚠️ **Pitfall:** Drain coolant and oil **before** pulling. A running engine full of coolant becomes a spillage event the moment the first hose is disconnected. Coolant in the oil pan from sloppy draining contaminates the new 07K bearings.

### M52 Pull

5. Disconnect battery (negative first).

6. **Wiring disconnect sequence:**
   - Unplug the engine-side mating plug at the firewall bulkhead connector — single-connector disconnect, cabin wiring untouched.
   - Disconnect 07K alternator charge wire and D+ excite wire at the alternator (Radlok tool-free if fitted).
   - Disconnect SPAL fan harness if it routes through the engine bay (typically stays in bay).
   - Tag and bag any remaining individual connectors still on the M52 that aren't on the bulkhead plug.
   > ⚠️ **Pitfall:** Label every hose and connector as you remove it — the 07K bay will look different, and you will not remember where the M52 AC line went months later. Source: `E36_DIY_Build_Checklist.md` Phase 3 Chassis.

7. Remove air intake, intercooler piping, and BOV plumbing.

8. Disconnect remaining coolant hoses (heater lines, overflow, upper and lower radiator hoses — already drained). Plug open ports on the car side to catch drips.

9. Disconnect AC line bracket if present (electric compressor lines from Phase 3 may not be routed yet — if they are, cap carefully; R134a).

10. Drain engine oil via sump plug into drain pan.

11. Remove exhaust downpipe at manifold flange or at the turbo outlet (whichever was used for Phase 1A). Support the downpipe before unbolting — it falls.

12. Disconnect power steering hydraulic lines (if HPS pump was still on M52). Cap immediately — PS fluid is a fire hazard near hot exhaust.

13. Attach engine crane to M52 via lifting eyes. Raise just enough to unload the mounts.

14. Unbolt engine mount bolts (engine-to-mount bracket bolts). Do **not** unbolt the subframe-side brackets — those remain and the 07K mounts bolt to the same locations (or are welded custom brackets in the same zone).

15. With a second person guiding, hoist M52 clear of the engine bay. Watch the intake manifold on the firewall and the exhaust side on the steering shaft.
    > ⚠️ **Pitfall:** Reference [E36 engine removal (YouTube)](https://www.youtube.com/watch?v=kracqUH216s). The M52 lifts at an angle — raise front slightly first to clear the subframe. Solo removal is possible but a second spotter is much safer.

16. Unbolt M52 from the 8HP adapter plate and set aside on engine stand. The 8HP stays in the car.

### Engine Mount Fabrication (Shop)

17. With the bay empty, take final measurements for the custom 07K engine mounts. Supply the **dedicated structured-light scan STL data** (block boss geometry + subframe pad geometry — see Pre-Pull step 3), caliper redundancy measurements, and 07K boss thread spec to Race3 / JNC (or chosen fab shop). Mounts are welded steel — **shop-mandatory**.

18. **07K exhaust-side boss spec:** expected M10×1.5 — verify with tap at teardown. Confirm boss center-to-center spacing with calipers before the fab drawing is finalized. A mount built to wrong spacing is scrap.

### 07K Preparation (Before Drop-In)

19. Install LPS Ti exhaust stud kit on the 07K head (if not done at Phase 2). Factory studs are too short for the SPA TMW22 manifold. Do this on the stand — much easier than in the car.

20. Mount all accessories that can go on the stand:
    - iABED longitudinal oil filter housing (already pre-installed at Phase 2 — confirm)
    - iABED baffled oil pan (already pre-installed — confirm)
    - Pierburg CWA400 mounting bracket (if pre-mounting; wire after install)
    - Alternator (bolt to 07K alternator mount bosses)
    - Fluidampr 551211 crank pulley (installed at Phase 2)

21. **Swap starter:** Remove the Phase 1 George W. Hill adapter + N54 starter from the M52 (if reusing the adapter). Install `068911024GX` VW longitudinal starter directly to the 07K block — this is the correct starter for a longitudinal 07K; it bolts directly without the Hill adapter.
    > ⚠️ **Pitfall:** The N54 starter used in Phase 1 on the M52 is NOT the correct starter for the 07K. `068911024GX` (or OEM equivalent `068911024H`) is the VW longitudinal unit. Wrong starter = no engagement or damaged ring gear.

### 07K Drop-In

22. **Rig the 07K for installation using the load leveler — two fixed attachment points required.**

    Web slings are not suitable here. The load leveler cannot function without two fixed points along the crankshaft axis to pivot against.

    | End | Attachment | Hardware |
    | --- | --- | --- |
    | Gearbox / timing-chain end | Two M10×1.5 DIN 580 shoulder eyebolts into the T03001 bolt holes on the block's end face. These are the same three M10×1.5 threaded bosses used by the VW T03001 lateral bracket (factory stand-mount tool). Use holes 1 and 3 (the 40 Nm pair — wider spacing gives a more stable two-point hang). | McMaster `3100T12` |
    | Belt-pulley end | M10 eyebolt through the intake-side OEM motor mount boss at the front of the block, or through an upper hole in the OEM accessory bracket if still installed. Confirm a usable M10×1.5 boss is accessible here during Phase 2 teardown — if not, fabricate a simple bracket (50 mm angle iron + welded M10 nut) that picks up existing head or block bolt holes at this end. | McMaster `3100T12` |

    Attach both eyebolts to the load leveler chains (HF SKU 96497). Pre-wind the leveler adjuster toward the gearbox/timing-chain end (the heavier end with the timing chain housing) until the assembly test-hangs approximately level. Test-lift 50–75 mm off the stand, verify the angle, then adjust before committing to the bay drop.

    > ⚠️ **Pitfall:** Eyebolts must be fully threaded to the shoulder — partial engagement fails at load. Torque to 40 Nm hand-snug and verify the eye orientation is in-plane with the load leveler chain before lifting.

23. With a second person guiding, lower 07K into engine bay. Pass exhaust side (driver side) down first to clear the steering shaft and firewall.
    > ⚠️ **Pitfall:** Do not torque engine mount bolts until the engine is hanging freely at the correct height and the 8HP adapter plate is loosely mated. Torquing mounts before final positioning locks you into a misaligned drivetrain. Source: `E36_DIY_Build_Checklist.md` Phase 3 Chassis.

24. Loosely mate the 07K bellhousing face to the Chatham CNC adapter plate on the 8HP. Install bellhousing bolts finger-tight.

25. Set the engine on the custom mounts. Install mount bolts finger-tight.

26. **Align:** Verify drivetrain angle with a digital angle gauge on the bellhousing face (should match the 8HP's design angle — typically 0–1° down at the rear). Adjust load leveler until correct.

27. Torque bellhousing bolts to spec (VW standard M10 = 45–50 Nm). Then torque engine mount bolts.

28. Install the 07K alternator B+ charge wire and D+ excite wire. The alternator D+ (excite) terminal must be wired to a switched 12V source in the body harness — without it the alternator will not charge reliably from cold start. See `maxxecu-07k.wv` notes on alternator wiring.

29. Plug in the engine-side mating plug at the firewall bulkhead — single-connector re-connect. Proceed to `34-ecu-harness-final.md` for trigger offset and base map load before any start attempt.

---

## References

- `E36_DIY_Build_Checklist.md` — Phase 3, Chassis: Engine Install (lines 632–651)
- `E36_9000RPM_Project_Plan_Verified.md` — Phase 3 Pre-Fabrication / 3D Scan Workflow
- `harnesses/maxxecu-07k.wv` — engine-side bulkhead plug pin group reference
- [E36 engine removal (YouTube)](https://www.youtube.com/watch?v=kracqUH216s)
- Chatham CNC — mike@chathamcnc.com / 919-740-9748 (07K→N63 adapter plate)
- Euromotive Autohaus — 1306 W Chester Pike, West Chester PA · (610) 416-5702

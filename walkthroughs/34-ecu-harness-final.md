# ECU Harness Final Connection & GPO Reassignments

**Phase:** 3  
**System tags:** `[ECU]` `[ELECTRICAL]`  
**Shop-mandatory:** No  
**Prerequisites:** 07K installed (`30-07k-install.md`); 07K engine harness built and bench-tested in Phase 2; firewall bulkhead connector installed and wired (cabin side) in Phase 1; all engine sensors accessible and connector locations confirmed at Phase 2 harness build

---

## Overview

This walkthrough covers connecting the Phase 2 07K engine harness to the MaxxECU via the firewall bulkhead connector, completing all Phase 3 GPO reassignments in MTune, and loading the 07K base map. All GPO reassignments are **MTune-only** — no rewiring. The wiring pre-run in Phase 1 accommodates these changes by design. The MaxxECU hardware is unchanged; only the engine harness mating plug and the tune file change.

**GPO assignments in Phase 3 (MTune only — no rewiring needed):**

| GPO | Phase 1/2 Function | Phase 3 Function | Action |
| --- | --- | --- | --- |
| GPO 1 (CMC B4 / pin 8) | Reverse lights (boost solenoid connector unpopulated NA) | **Boost solenoid** (now physically connected) | Connect BOOST_SOL Superseal 2-pin; MTune verify function = boost solenoid |
| GPO 3 (CMC D4 / pin 16) | VANOS solenoid (M52) | **07K intake cam VVT actuator** (freed from VANOS — immediately reused) | MTune: disable VANOS function; assign PWM solenoid output for closed-loop cam timing (ME7.1.1 pin 115) |
| GPO 4 (CMC E4 / pin 20) | ICV coil A (M52) | **DBW throttle body Motor+** | MTune: disable ICV A; assign as ETh Motor+ in E-Throttle wizard |
| GPO 5 (CMC A1 / pin 1) | ICV coil B (M52) | **Reverse light relay** | MTune: disable ICV B; reassign to "Transmission Reverse" function |

> ⚠️ **Critical:** GPO 3 in Phase 3 = **VVT actuator, NOT reverse lights.** GPO 3 is freed from VANOS but immediately reused for the 07K intake cam VVT actuator (cam actuator ME7.1.1 pin 115 — MaxxECU PWM solenoid output, closed-loop cam timing). Reverse lights swap from GPO 1 to **GPO 5** in Phase 3. The wiring to GPO 5 was pre-run in Phase 1 per `8hp-body-integrations.wv`. Source: `harnesses/8hp-body-integrations.wv` lines 36–43.

**VVT note:** The 07K with TTRS/CEPA intake cam **has active intake cam VVT** (variable valve timing). VVT is mapped via MaxxECU PWM solenoid output on GPO 3 — closed-loop cam timing across the RPM range. Do not disable or discard the VVT system. It provides tractable low-end torque critical for street and drift use. Source: `harnesses/8hp-body-integrations.wv` lines 36–39; `E36_9000RPM_Project_Plan_Verified.md` Camshafts row.

---

## Parts

No new parts required. All wiring was pre-built in Phase 2 and pre-run at Phase 1.

---

## Tools

- Laptop with MTune installed (MaxxECU Race)
- MaxxECU USB cable (ECU to laptop)
- Multimeter
- Brady M210 label printer (re-label any connector not already labeled)

---

## Procedure

### Harness Connection at Bulkhead

1. Unplug the M52 engine-side mating plug from the firewall bulkhead. Set aside with M52 engine.

2. Insert the 07K engine-side mating plug (built in Phase 2) into the bulkhead receptacle. Single-connector swap — cabin side is unchanged.

3. Connect the 07K engine harness sensor ends:
   - **CRANK_VR** → crank sensor (60-2, cylinder 5 end — timing chain compartment cover). OE# `3B0973703G` connector body. **Label crank vs cam pigtails clearly at crimp time — same connector body, different pinouts.** Crank: Signal+/Signal-/Shield (passive VR). Cam: +5V/GND/Signal (active Hall).
   - **CAM_HALL** → cam Hall sensor (intake side, top of head). +5V supply type (not +12V).
   - **CLT** → coolant temp sensor (cylinder 1 side, exhaust face — in E36: front of engine, exhaust/driver side). Route pigtail with heat sleeving — adjacent to exhaust manifold.
   - **IAT** → intake air temp (in charge pipe downstream of FMIC)
   - **MAP** → Bosch 3-bar MAP sensor (vacuum hose to BBG intake manifold post-TB)
   - **DBW_TB** → 07K throttle body 6-pin (Motor+, Motor-, TPS1, TPS2, +5V, GND)
   - **KNOCK_1** / **KNOCK_2** → flat knock sensors, exhaust side lower block. GND via M8 mounting bolt — no separate GND wire.
   - **IGN_1–5** → VAG 4-pin COP connectors (07K firing order: 1-2-4-5-3)
   - **INJ_1–5** → ID1050x EV14 connectors (firing order: 1-2-4-5-3, cylinder 1 at timing chain end)
   - **BOOST_SOL** → Superseal 2-pin on boost solenoid (GPO 1, now physically connected)
   - **FLEX_FUEL** → carry-forward, already inline on fuel feed
   - **PST_F1** → iABED M10×1.0 port on oil filter housing (4-pin: +5V, GND, pressure, temp)
   - **WIDEBAND** → LSU 4.9 in manifold/downpipe bung
   - **VVT solenoid** → 07K intake cam VVT actuator (ME7.1.1 pin 115) via GPO 3 — see MTune section below

   > ⚠️ **Pitfall (crank vs cam):** OE# `3B0973703G` is the same connector body for both crank and cam sensors but with **opposite pinouts**. Swapped pigtails produce no-start with no obvious failure mode. Label pigtails at crimp time. Source: `harnesses/maxxecu-07k.wv` CRANK_VR notes.

4. Connect E46 accelerator pedal (APS) wiring through bulkhead pins 72–77 (added at Phase 3) to MaxxECU C2 APS inputs. See `35-dbw-throttle.md` for full APS wiring procedure.

### MTune — Load 07K Base Map

5. Connect laptop to MaxxECU via USB. Open MTune.

6. **Load 07K base map.** MaxxECU does not ship a pre-made 07K map — build from the M52 map or start from the MaxxECU 4-cyl VW base as a structural template. The 07K community (Rennlist 944 07K thread, RevMap 2.5T Turbo Prep guide) has shared base maps in some build threads. Key parameters to set from scratch:
   - Engine → Cylinders: **5**
   - Engine → Firing order: **1-2-4-5-3**
   - Engine → Injectors: ID1050x dead time table (from Injector Dynamics spec); 5 injectors active, channels 6+ disabled

### MTune — Trigger Setup

7. **Trigger setup (critical — verify before first crank):**
   - Crank → VR input, **N-1 / 60-2 pattern** (same trigger type as M52 — "VR" label is correct; 60-2 wheel)
   - Cam → **Hall / HOME input**, +5V supply type (not +12V)
   - Both sensors use the same `3B0973703G` connector body — confirm correct pigtail with a multimeter on the engine before plugging into MaxxECU
   - Crank angle offset: **must be calibrated** before the first start. This is a software setting (Trigger Setup → Crank angle offset); incorrect offset = no-start or very rough running. Procedure: crank with timing light on #1 coil wire against a timing tape or degree wheel on the crank pulley — adjust offset until timing light reads 0° when MaxxECU thinks it's firing at 0°.
   > ⚠️ **Pitfall:** MTune trigger setup — verify before first crank. Crank = VR input, N-1 / 60-2 pattern. Cam = Hall / HOME input, +5V supply type (not +12V). Both sensors use the same 3B0973703G connector body but opposite pinouts — a swapped pigtail will produce no-start with no obvious failure mode. Source: `E36_DIY_Build_Checklist.md` Phase 3 ECU & Engine Harness.

### MTune — GPO Reassignments (MTune Only — No Rewiring)

8. **GPO 1 → Boost solenoid (now active):**
   - MTune → Outputs → GPO 1 → Function: "Boost solenoid" (or "PWM boost control")
   - The Superseal 2-pin BOOST_SOL connector is now physically connected (was unpopulated in Phase 1 NA). No wiring change — the wire was always there.

9. **GPO 3 → 07K intake cam VVT actuator:**
   - MTune → Outputs → GPO 3 → Function: PWM solenoid output → assign to cam VVT control
   - In MTune cam timing map: configure closed-loop cam timing targets vs RPM/load. The VVT actuator is ME7.1.1 cam actuator pin 115 — driven by MaxxECU GPO 3 PWM
   - **Do not disable or leave this as VANOS.** The VANOS function (from M52) is replaced by the VVT function. Closed-loop cam timing is active across the RPM range on the TTRS/CEPA intake cam.

10. **GPO 4 → DBW throttle body Motor+:**
    - MTune → Throttle → E-Throttle wizard → assign ETh Motor+ to GPO 4 (CMC E4/pin 20)
    - See `35-dbw-throttle.md` for full DBW calibration procedure

11. **GPO 5 → Reverse lights (relocated from GPO 1):**
    - MTune → Outputs → GPO 5 → Function: "Transmission Reverse"
    - MTune → Outputs → GPO 1 → Function: "Boost solenoid" (overwriting the Phase 1 reverse-light assignment on GPO 1)
    - No rewiring needed — the GPO 5 wire to the reverse light relay was pre-run in Phase 1 per `8hp-body-integrations.wv`. This is an MTune-only change.

### MTune — Cam Sensor Type Verification

12. **The 07K cam sensor is a Hall effect sensor (+5V supply type); the M52 VANOS cam sensor was also Hall effect but a different connector body.** The MaxxECU HOME input (CMC H4/pin 32) receives both. In MTune, confirm:
    - Trigger → CAM/HOME input → Signal type: Digital / Hall (not VR)
    - +5V supply is shared with MAP/TPS/PST-F1 sensor rail (bulkhead pin 30)
    - Verify the HOME signal goes high on cam tooth in MTune live data before cranking. A flat line = no signal (wrong pinout, bad connection, or wrong sensor type setting).

### MTune — Wideband & Oil Pressure Protection

13. Set MTune wideband input to LSU 4.9 (same sensor as M52 phase — same harness wiring). Verify the wideband sensor is a **genuine Bosch** unit — aftermarket wideband sensors have documented accuracy issues at WOT and at rich lambda values below 0.75. Tune quality depends on accurate AFR data. Source: `E36_DIY_Build_Checklist.md` Phase 3 Commissioning.

14. Configure MaxxECU oil pressure protection map: set a minimum oil pressure threshold vs RPM (e.g. 10 PSI at idle, 50 PSI above 3,000 RPM). MaxxECU cuts ignition if pressure drops below curve. This is a standard MaxxECU protection feature — critical at 9,000 RPM where a momentary oil starvation event destroys bearings before you can react. Source: `E36_DIY_Build_Checklist.md` Phase 3 Commissioning.

### MTune — 8HP Settings Confirm

15. Verify 8HP settings carried from Phase 1 are unchanged:
    - MTune → Advanced → 8HP → Shifter type → **8HP SEQ shifter** (DCT Shifter)
    - Starter inhibit: MTune → Advanced → Starter control → inhibit crank in all gears except P and N

---

## References

- `harnesses/maxxecu-07k.wv` — full 07K harness pinout, GPO assignments, CMC connector labels
- `harnesses/8hp-body-integrations.wv` — GPO Phase 1→3 reassignment logic; reverse lights GPO 1→GPO 5
- `E36_DIY_Build_Checklist.md` — Phase 3, ECU & Engine Harness (lines 653–663)
- `E36_9000RPM_Project_Plan_Verified.md` — ECU M5x→07K Harness Transition table (lines 574–598)
- ME7.1.1 Pinout PDF: [Google Drive](https://drive.google.com/file/d/15RPWyYPLHGEMMQZIlUgpoo77T-CxjyMP/view)
- [MaxxECU M50 harness docs](https://www.maxxecu.com/webhelp/wirings-terminated_engine_harness-bmw_m50.html)
- [RevMap 07K harness connector docs](https://docs.revmapperformance.com/en/07K-harness)
- [RevMap 2.5T turbo prep guide](https://revmapperformance.com/07K-Turbo-Preparation/)

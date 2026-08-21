# ECU Harness Final Connection & GPO Reassignments

**Phase:** 3  
**System tags:** `[ECU]` `[ELECTRICAL]`  
**Shop-mandatory:** No  
**Prerequisites:** 07K installed (`30-07k-install.md`); 07K engine harness built and bench-tested in Phase 2 (`e36-wiring/docs/harness-build.md`); all engine sensors accessible and connector locations confirmed at Phase 2 harness build

> **Infrastructure deferred from M5x phase:** The Ecumaster PMU16, Deutsch Autosport AS79 firewall engine connector, Maven HD30 35-pin accessories connector, and 8HP power/CAN wiring were all deferred from the M5x phase. Build these at the start of Phase 3 (Steps 1–4 below) before connecting the 07K engine harness. The M5x phase used the MaxxECU M50 terminated harness through the OEM grommet with a simple relay board — all of that is now removed and replaced by the full custom harness architecture.

---

## Overview

This walkthrough covers connecting the Phase 2 07K engine harness to the MaxxECU via the firewall bulkhead connector, completing all Phase 3 GPO reassignments in MTune, and loading the 07K base map. All GPO reassignments are **MTune-only** — no rewiring. The wiring pre-run in Phase 1 accommodates these changes by design. The MaxxECU hardware is unchanged; only the engine harness mating plug and the tune file change.

**GPO assignments in Phase 3 (MTune only — no rewiring needed):**

| GPO | Phase 1/2 Function | Phase 3 Function | Action |
| --- | --- | --- | --- |
| GPO 1 (CMC B4 / pin 8) | Reverse lights (boost solenoid connector unpopulated NA) | **Boost solenoid** (now physically connected) | Connect BOOST_SOL Superseal 2-pin; MTune verify function = boost solenoid |
| GPO 3 (CMC D4 / pin 16) | VANOS solenoid (M52) | **07K intake cam VVT actuator** (freed from VANOS — immediately reused) | MTune: disable VANOS function; assign PWM solenoid output for closed-loop cam timing (ME7.1.1 pin 115) |
| GPO 4 (CMC E4 / pin 20) | ICV coil A (M52) | **Freed — SPARE** | MTune: disable ICV A; leave unassigned (ETh motor uses C2 H4/H2, not GPO 4) |
| GPO 5 (CMC A1 / pin 1) | ICV coil B (M52) | **Reverse light relay** | MTune: disable ICV B; reassign to "Transmission Reverse" function |

> ⚠️ **Critical:** GPO 3 in Phase 3 = **VVT actuator, NOT reverse lights.** GPO 3 is freed from VANOS but immediately reused for the 07K intake cam VVT actuator (cam actuator ME7.1.1 pin 115 — MaxxECU PWM solenoid output, closed-loop cam timing). Reverse lights swap from GPO 1 to **GPO 5** in Phase 3. The wiring to GPO 5 was pre-run in Phase 1 per `8hp-body-integrations.wv`. Source: `harnesses/8hp-body-integrations.wv` lines 36–43.

**VVT note:** The 07K with TTRS/CEPA intake cam **has active intake cam VVT** (variable valve timing). VVT is mapped via MaxxECU PWM solenoid output on GPO 3 — closed-loop cam timing across the RPM range. Do not disable or discard the VVT system. It provides tractable low-end torque critical for street and drift use. Source: `harnesses/8hp-body-integrations.wv` lines 36–39; `E36_9000RPM_Project_Plan_Verified.md` Camshafts row.

---

## Parts

| Part | PN / Source | Cost |
| --- | --- | --- |
| Ecumaster PMU16 power management unit | [ecumaster.com](https://www.ecumaster.com/) | — |
| Ecumaster USB-CAN adapter (PMU16 initial setup) | [ecumaster.com](https://www.ecumaster.com/) | $85 |
| Deutsch Autosport AS79 firewall receptacle + jam-nut plug (engine connector) | [RaceSpec Online](https://racespeconline.com) — Deutsch AS616-79PN or Souriau 8STA79PN | ~$120–180 |
| Maven Speed single connector bulkhead, **35-pin** (accessories connector) | [mavenspeed.com](https://mavenspeed.com/products/single-connector-bulkhead-s24) — "35 PIN" option | ~$156 |
| Deutsch DT 2-pin connectors × 4 (high-current bypass for fan/EWP/AC relay outputs) | ConnectorExperts or Del City — DT06-2S + DT04-2P + W2S wedge | ~$5–8 ea |
| Deutsch HDT-48-00 ratcheting crimper (AS79 solid barrel contacts) | [deutschconnector.com](https://www.deutschconnector.com/products/deutsch_connector_tools/deutsch_connector_crimp_tools/HDT-48-00/) | ~$350–465 |
| JRready NEW-DT2 crimper (budget alternative) | [Amazon](https://www.amazon.com/) | ~$169 |
| Brady M210 + M21-125-C-342 PermaSleeve cartridge | [Amazon](https://a.co/d/3qZ8sAa) | ~$130 |
| Raychem SRGB solder sleeves, assorted | SLG / Waytek / Del City | — |
| Rivnut tool (bulkhead plate mounting) | Astro Pneumatic 1442 or equiv | — |

---

## Tools

- Laptop with MTune installed (MaxxECU Race)
- MaxxECU USB cable (ECU to laptop)
- Multimeter
- Brady M210 label printer (re-label any connector not already labeled)

---

## Procedure

### Step 1 — Remove M5x Relay Board and M50 Harness

Remove the three-relay board and the MaxxECU M50 terminated harness installed during the M5x phase. Unplug and remove the M50 harness from the OEM firewall grommet. The grommet hole will be reused or enlarged for the new custom harness bundle. The MaxxECU itself stays mounted — do not disturb C1/C2 connectors until the new custom harness is ready to plug in.

### Step 2 — Firewall Bulkhead Installation

Install the hybrid two-connector bulkhead on the firewall. Reference: `harnesses/firewall-bulkhead.wv` (AS79) and `harnesses/firewall-bulkhead-dual.wv` Connector A section (Maven 35-pin).

**Mounting position:** LEFT side of firewall (passenger/intake side in RHD) — same side as OEM harness grommet. The AS79 flange receptacle mounts first; the Maven 35-pin bulkhead plate mounts alongside or adjacent. Use rivnuts in the firewall for the Maven plate. Route the DT 2-pin high-current bypass connectors (fan/EWP/AC relay) through a separate weatherproof grommet adjacent to the main plate.

**HD30 24-35 size-16 cavity verification** (Maven 35-pin): The insert has exactly 3 size-16 cavities (bore ~1.59mm, vs ~1.02mm for size-20 — clearly visible to the naked eye). From the Deutsch HD30 & HDP20 Series Technical Manual diagram, these are at positions 4, 7, and 12. Verify by holding the connector face toward a light and confirming which 3 apertures are visibly larger before inserting any contact. See `11-ecu-chassis-wiring.md` size-16 verification note for the full failure mode description. Sources: [Deutsch HD30 & HDP20 Technical Manual (ManualsLib p.5)](https://www.manualslib.com/manual/1545583/Deutsch-Hd30-Series.html?page=5); [TE Connectivity HD30 product page](https://www.te.com/en/products/connectors/automotive-connectors/intersection/deutsch-hd30-connectors.html).

**Cabin-side wiring — AS79 (engine connector):** The cabin face of the AS79 is permanent. Wire all cabin-side pins to MaxxECU C1 (Molex CMC 48-pin) per `harnesses/firewall-bulkhead.wv` BULKHEAD_CABIN pin labels and CMC pin references. All AS79 contacts are size-22D solid barrel — use HDT-48-00 or JRready NEW-DT2 crimper. Service loop every wire (1–2 turns, ~35mm diameter) before the boot is shrunk onto the AS79 back.

**Cabin-side wiring — Maven 35-pin (accessories connector):** The cabin face of the Maven 35-pin is also permanent. Wire per `harnesses/firewall-bulkhead-dual.wv` BULKHEAD_A_CABIN pin labels:

| Connector A pin | Wire | Cabin destination |
| --- | --- | --- |
| A1 — +12V 8HP Main (14 AWG, size-16) | Constant 12V | PMU16 output O1 (ECU power) or dedicated fused relay |
| A2 — +12V 8HP Wakeup (18 AWG) | IGN-switched 12V | PMU16 IGN sense output |
| A3 — 8HP TCU GND (14 AWG, size-16) | Chassis GND | Engine bay chassis GND lug |
| A4 — CAN H (22 AWG TP) | MaxxECU CAN1 H | MaxxECU ECU_16PIN CAN H + PMU16 CAN2 H bus |
| A5 — CAN L (22 AWG TP) | MaxxECU CAN1 L | MaxxECU ECU_16PIN CAN L + PMU16 CAN2 L bus |
| A6 — EWP PWM (20 AWG) | MaxxECU GPO output | CMC pin (assign in MTune — confirm available GPO) |
| A7 — AC enable (18 AWG) | MaxxECU GPO output | CMC pin (assign in MTune) |
| A8 — Chassis GND (14 AWG, size-16) | Chassis GND | Engine bay chassis GND lug (same stud as A3) |
| A9–A13 — WBO2 VS/VREF/IP/RCAL/Heater− | MaxxECU M50 wideband controller | Stays on existing wiring |
| A14–A19 — APS e-pedal (Phase 3) | MaxxECU C2 APS inputs | See `35-dbw-throttle.md` |
| A20 — GPO1 boost solenoid (20 AWG) | MaxxECU CMC B4 (pin 8) | Cabin side → through bulkhead → Superseal 2-pin at solenoid |

> **CAN bus note:** A4/A5 carry the single CAN1 bus shared by MaxxECU, PMU16 CAN2, and DCT Shifter module. 120Ω termination at each end of the bus (MaxxECU CAN1 internal terminator, and at the 8HP mechatronic end). PMU16 CAN2 has software-controlled termination — enable it if PMU16 is a bus endpoint. Verify termination with a multimeter across CAN H/L (should read ~60Ω on a correctly terminated bus with MaxxECU powered).

### Step 3 — PMU16 Installation and Configuration

Mount PMU16 in the cabin — firewall or inner fender, accessible for USB-CAN setup.

**Wiring:**
- BATT+ → ANL main fuse (≤18 in from battery) → PMU16 M6 BATT+ stud
- IGN sense: IGN-switched +12V → PMU16 pin 7 (+12V SW)
- GND: PMU16 GND lug → chassis GND stud (M8, engine bay)
- CAN2: PMU16 CAN2 H/L → MaxxECU CAN1 H/L (twisted pair, 22 AWG) — part of the A4/A5 bus run through Maven 35-pin

**Phase 3 output channel assignments:**

| PMU16 Output | Function | Notes |
| --- | --- | --- |
| O1 | ECU logic power | |
| O2 | Coil + injector supply | 12 AWG, through DT bypass grommet |
| O3 | Radiator fan (PWM) | Through DT bypass grommet |
| O4 | Fuel pump (PWM) | 25A, 12 AWG to Radium hanger |
| O5 + O14 | EWP parallel (50A combined) | Through DT bypass grommet |
| O6 | Condenser fan | Through DT bypass grommet |
| O7 | AC relay coil | |

**Post-shutdown EWP:** Program PMU16 to hold O5 active after key-off until CLT < 70°C CAN message from MaxxECU (or 3-min fallback timer). MaxxECU transmits CLT on CAN1 — PMU16 reads it via CAN2. Enable in MTune: Configuration → CAN settings → Data transmission.

> ⚠️ **Pitfall:** PMU16 CAN2 bus must be terminated at both ends (120Ω). PMU16 has software-controlled termination on CAN2 — enable it in PMU config if PMU16 is an endpoint. Unterminated CAN causes intermittent dropouts that are hard to diagnose at the track.

### Step 4 — 8HP Power and CAN Verification

With the bulkhead and PMU16 wired, verify the 8HP mechatronic power sequencing before cranking:

1. Key on → PMU16 O1 brings up ECU logic
2. MaxxECU CAN1 comes up → transmits to 8HP TCU (inside transmission)
3. PMU16 O2 (coil/inj supply) enabled via MaxxECU CAN command
4. +12V 8HP Main (Maven A1) and +12V 8HP Wakeup (A2) route through the bulkhead to the 8HP harness running down the tunnel
5. Verify MTune live data shows 8HP TCU responding on CAN (gear position, turbine speed visible)

See `harnesses/8hp-can.wv` for the full 8HP power sequencing and CAN signal map.

### Harness Connection at Bulkhead

6. Unplug the M52 engine-side mating plug from the firewall bulkhead. Set aside with M52 engine.

7. Insert the 07K engine-side mating plug (built in Phase 2) into the bulkhead receptacle. Single-connector swap — cabin side is unchanged.

8. Connect the 07K engine harness sensor ends:
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

9. Wire E46 accelerator pedal (APS) — **cabin-to-cabin, no bulkhead crossing.** Run 6-wire shielded cable from pedal (footwell) directly to MaxxECU C2: APS1 signal → C2 E4 (AIN 6), APS2 signal → C2 F1 (AIN 7). VCC1/VCC2 → CMC G1 (+5V rail). GND1/GND2 → CMC H1 (sensor GND). AS79 pins 72–77 are **not used** for APS. See `harnesses/epedal-bmw-e46.wv` for full connector and cable spec.

### MTune — Load 07K Base Map

10. Connect laptop to MaxxECU via USB. Open MTune.

11. **Load 07K base map.** MaxxECU does not ship a pre-made 07K map — build from the M52 map or start from the MaxxECU 4-cyl VW base as a structural template. The 07K community (Rennlist 944 07K thread, RevMap 2.5T Turbo Prep guide) has shared base maps in some build threads. Key parameters to set from scratch:
   - Engine → Cylinders: **5**
   - Engine → Firing order: **1-2-4-5-3**
   - Engine → Injectors: ID1050x dead time table (from Injector Dynamics spec); 5 injectors active, channels 6+ disabled

### MTune — Trigger Setup

12. **Trigger setup (critical — verify before first crank):**
   - Crank → VR input, **N-1 / 60-2 pattern** (same trigger type as M52 — "VR" label is correct; 60-2 wheel)
   - Cam → **Hall / HOME input**, +5V supply type (not +12V)
   - Both sensors use the same `3B0973703G` connector body — confirm correct pigtail with a multimeter on the engine before plugging into MaxxECU
   - Crank angle offset: **must be calibrated** before the first start. This is a software setting (Trigger Setup → Crank angle offset); incorrect offset = no-start or very rough running. Procedure: crank with timing light on #1 coil wire against a timing tape or degree wheel on the crank pulley — adjust offset until timing light reads 0° when MaxxECU thinks it's firing at 0°.
   > ⚠️ **Pitfall:** MTune trigger setup — verify before first crank. Crank = VR input, N-1 / 60-2 pattern. Cam = Hall / HOME input, +5V supply type (not +12V). Both sensors use the same 3B0973703G connector body but opposite pinouts — a swapped pigtail will produce no-start with no obvious failure mode. Source: `E36_DIY_Build_Checklist.md` Phase 3 ECU & Engine Harness.

### MTune — GPO Reassignments (MTune Only — No Rewiring)

13. **GPO 1 → Boost solenoid (now active):**
   - MTune → Outputs → GPO 1 → Function: "Boost solenoid" (or "PWM boost control")
   - The Superseal 2-pin BOOST_SOL connector is now physically connected (was unpopulated in Phase 1 NA). No wiring change — the wire was always there.

14. **GPO 3 → 07K intake cam VVT actuator:**
   - MTune → Outputs → GPO 3 → Function: PWM solenoid output → assign to cam VVT control
   - In MTune cam timing map: configure closed-loop cam timing targets vs RPM/load. The VVT actuator is ME7.1.1 cam actuator pin 115 — driven by MaxxECU GPO 3 PWM
   - **Do not disable or leave this as VANOS.** The VANOS function (from M52) is replaced by the VVT function. Closed-loop cam timing is active across the RPM range on the TTRS/CEPA intake cam.

15. **ETh motor — MaxxECU C2 H4/H2 (MOTOR 1+/MOTOR 1-):**
    - DBW throttle body motor is driven by the MaxxECU C2 dedicated H-bridge outputs, **not GPO 3 or GPO 4**
    - Motor+ → C2 H4 (MOTOR 1+) → AS79 pin 22 → TB motor lead
    - Motor- → C2 H2 (MOTOR 1-) → AS79 pin 23 → TB motor lead
    - MTune → Settings → E-Throttle → Motor output → **Motor 1** (select C2 motor channel)
    - Verify motor polarity: in E-Throttle wizard, if TB runs in wrong direction, swap Motor+ and Motor- at the TB connector — do not swap at C2
    - See `35-dbw-throttle.md` for full DBW calibration procedure

16. **GPO 5 → Reverse lights (relocated from GPO 1):**
    - MTune → Outputs → GPO 5 → Function: "Transmission Reverse"
    - MTune → Outputs → GPO 1 → Function: "Boost solenoid" (overwriting the Phase 1 reverse-light assignment on GPO 1)
    - No rewiring needed — the GPO 5 wire to the reverse light relay was pre-run in Phase 1 per `8hp-body-integrations.wv`. This is an MTune-only change.

### MTune — Cam Sensor Type Verification

17. **The 07K cam sensor is a Hall effect sensor (+5V supply type); the M52 VANOS cam sensor was also Hall effect but a different connector body.** The MaxxECU HOME input (CMC H4/pin 32) receives both. In MTune, confirm:
    - Trigger → CAM/HOME input → Signal type: Digital / Hall (not VR)
    - +5V supply is shared with MAP/TPS/PST-F1 sensor rail (bulkhead pin 30)
    - Verify the HOME signal goes high on cam tooth in MTune live data before cranking. A flat line = no signal (wrong pinout, bad connection, or wrong sensor type setting).

### MTune — Wideband & Oil Pressure Protection

18. Set MTune wideband input to LSU 4.9 (same sensor as M52 phase — same harness wiring). Verify the wideband sensor is a **genuine Bosch** unit — aftermarket wideband sensors have documented accuracy issues at WOT and at rich lambda values below 0.75. Tune quality depends on accurate AFR data. Source: `E36_DIY_Build_Checklist.md` Phase 3 Commissioning.

19. Configure MaxxECU oil pressure protection map: set a minimum oil pressure threshold vs RPM (e.g. 10 PSI at idle, 50 PSI above 3,000 RPM). MaxxECU cuts ignition if pressure drops below curve. This is a standard MaxxECU protection feature — critical at 9,000 RPM where a momentary oil starvation event destroys bearings before you can react. Source: `E36_DIY_Build_Checklist.md` Phase 3 Commissioning.

### MTune — 8HP Settings Confirm

20. Verify 8HP settings carried from Phase 1 are unchanged:
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

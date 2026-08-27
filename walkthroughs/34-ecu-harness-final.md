# ECU Harness Final Connection & GPO Reassignments

**Phase:** 3  
**System tags:** `[ECU]` `[ELECTRICAL]`  
**Shop-mandatory:** No  
**Prerequisites:** 07K installed (`30-07k-install.md`); 07K engine harness built and bench-tested in Phase 2 (`e36-wiring/docs/harness-build.md`); all engine sensors accessible and connector locations confirmed at Phase 2 harness build

> **Infrastructure arriving at Phase 3:** The Ecumaster PMU16, Maven HD30 Dual 16+16 firewall bulkhead (Connector A = CAN + DCT, Connector B = safety-critical APS), CWA400 electric water pump, 12V electric AC compressor, and E46 APS pedal all install for the first time at Phase 3. Build these at the start (Steps 1–4 below) before connecting the 07K engine harness. The M5x phase used the MaxxECU M50 pre-terminated harness through the OEM grommet with a discrete relay board (see `harnesses/fuel-pump-hanger-phase1.wv` and `harnesses/8hp-body-integrations-phase1.wv`) — all of that is now removed and replaced by the PMU16-driven full custom harness architecture.

> **Under the H2O engine-bay-mount architecture** (see `docs/vendor/maxxecu/MaxxECU_RACE_H2O.md`), the MaxxECU stays where it was installed at Phase 1 (engine bay, OEM DME E-box cavity, intake side). Engine sensors and IGN/INJ signals direct-terminate at the MaxxECU C1/C2 CMC connectors — NO firewall bulkhead in the engine-side path. The Maven HD30 dual bulkhead carries ONLY cabin-originated signals (CAN, DCT shifter paddle inputs, APS pedal).

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

> ⚠️ **Critical:** GPO 3 in Phase 3 = **VVT actuator, NOT reverse lights.** GPO 3 is freed from VANOS but immediately reused for the 07K intake cam VVT actuator (cam actuator ME7.1.1 pin 115 — MaxxECU PWM solenoid output, closed-loop cam timing). Reverse lights migrate from the Phase 1 discrete GPO+relay setup to PMU16 direct-drive at Phase 3. See `harnesses/8hp-body-integrations-phase3.wv` for the PMU16-direct-drive design.

**VVT note:** The 07K with TTRS/CEPA intake cam **has active intake cam VVT** (variable valve timing). VVT is mapped via MaxxECU PWM solenoid output on GPO 3 — closed-loop cam timing across the RPM range. Do not disable or discard the VVT system. It provides tractable low-end torque critical for street and drift use. Source: `E36_9000RPM_Project_Plan_Verified.md` Camshafts row.

---

## Parts

| Part | PN / Source | Cost |
| --- | --- | --- |
| Ecumaster PMU16 power management unit | [ecumaster.com](https://www.ecumaster.com/) | — |
| Ecumaster USB-CAN adapter (PMU16 initial setup) | [ecumaster.com](https://www.ecumaster.com/) | $85 |
| **Maven HD30 Dual 16+16 Bulkhead Kit** — plate + both connectors (both sides) + all size-16 contacts + template | [mavenspeed.com — Dual Connector Bulkhead](https://mavenspeed.com/collections/b2t-engineering/products/dual-connector-bulkhead) — select "16 PIN & 16 PIN" | **$274** |
| **Deutsch HDT-48-00** (import equivalent — Maven-branded) | [mavenspeed.com HDT-48-00](https://mavenspeed.com/collections/b2t-engineering/products/deutsch-crimp-tool-solid-contacts) — covers all Deutsch solid contacts across DT/DTM/DTP/DTHD/HD30 per deutschconnector.com selection guide | **$197** |
| Deutsch round-shoulder extraction tool (HD30/DT size-16) | Maven or generic equivalent | ~$15–35 |
| Brady M210 + M21-125-C-342 PermaSleeve cartridge | [Amazon](https://a.co/d/3qZ8sAa) | ~$130 |
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

### Step 1 — Remove M5x Relay Board and M50 Harness; Re-wire Phase 1 Carryover Components

Remove the three-relay board and the MaxxECU M50 terminated harness installed during the M5x phase. Unplug and remove the M50 harness from the OEM firewall grommet. The grommet hole will be reused or enlarged for the new custom harness bundle. The MaxxECU itself stays mounted — do not disturb C1/C2 connectors until the new custom harness is ready to plug in.

**Phase 1 carryover components that require re-wiring at this step:**

Several loads were wired to the Phase 1 relay board and M50 harness. Each must be transitioned to the new architecture before the car can run.

| Component | Phase 1 wiring (now removed) | Phase 3 replacement (direct-terminate at engine-bay ECU or PMU16) | Wire gauge |
| --- | --- | --- | --- |
| Radiator fan +12V | Discrete relay pin 87 → fan(+) stud | **PMU16 O3** (25A) → fan(+) stud — same stud, new wire | 12 AWG |
| Fuel pump +12V | JDT-kit relay pin 87 → pump(+) stud (see `fuel-pump-hanger-phase1.wv`) | **PMU16 O4** (25A) → pump(+) stud — same stud, new wire (see `fuel-pump-hanger-phase3.wv`) | 12 AWG |
| Flex fuel signal | ECU_16PIN pin 5 (DIN 3) → sensor pin C (see `flex-fuel-sensor-phase1.wv`) | Direct-terminate at **CMC C1 pin 9 (DIN 3)** in engine bay (see `flex-fuel-sensor-phase3.wv`) | 22 AWG |
| Flex fuel +12V | Phase 1 IGN rail → sensor pin A | Same IGN rail → sensor pin A (unchanged — sensor is engine-bay, no bulkhead crossing under H2O arch) | 22 AWG |
| PST-F1 pressure | ECU_16PIN pin 12 (AIN 3) | Direct-terminate at **CMC J3 (AIN 3, pin 37)** in engine bay | 22 AWG |
| PST-F1 temp | ECU_16PIN pin 14 (AIN 1) | Direct-terminate at **CMC J1 (AIN 1, pin 33)** in engine bay | 22 AWG |
| PST-F1 +5V | ECU_16PIN pin 1 (+5V) | Direct-terminate at **CMC G1 (pin 25, shared sensor +5V rail)** | 22 AWG |
| PST-F1 GND | ECU_16PIN pin 2 (GND) | Direct-terminate at **CMC H1 (pin 29, shared SGND)** | 22 AWG |

**Additional physical change:** The PST-F1 sensor body moves from the M52 VANOS banjo bolt to the 07K oil housing fitting. Remove the M14×1.5 adapter with the M52; the 07K oil housing uses a different fitting — confirm thread spec on the 07K block at install. Source: `harnesses/pst-f1-sensor.wv`.

> ⚠️ The fan and fuel pump ground studs (pump(−) and fan(−)) are unchanged — the GND runs installed in Phase 1 stay. Only the +12V supply side changes (Phase 1 discrete relay pin 87 → PMU16 output).

> ⚠️ No MTune changes are required for the AIN/DIN inputs (PST-F1, flex fuel) — same inputs, same configuration. GPO 2 (Phase 1 fuel pump signal) and GPO 6 (Phase 1 fan signal) are re-mapped to MaxxECU CAN broadcasts that PMU16 subscribes to in Phase 3 MTune — see GPO reassignments below.

### Step 2 — Firewall Bulkhead Installation (Maven HD30 Dual 16+16)

Install the Maven HD30 Dual 16+16 bulkhead on the firewall. Reference: `harnesses/firewall-crossing-maven.wv` and `docs/wiring-bom.md` System 8.

**Mounting position:** intake side of firewall (RHD passenger / driver-opposite side) — same side as OEM harness grommet and the engine-bay MaxxECU RACE H2O. The Maven kit ships with a CNC billet aluminum plate (2.6" × 5.25") pre-drilled for both connectors + a paper installation template for locating the plate on the firewall. Use rivnuts in the firewall for the plate mounting bolts.

**Kit contents (already purchased at Phase 2 harness build):**
- CNC billet aluminum plate, black anodized, pre-drilled
- 2× Deutsch HD30 shell-24 16-way connectors (both sides — flange receptacle + jam-nut plug for each)
- All size-16 solid contacts (32 total across both connectors, plus a few spares)
- Paper install template + stainless mounting fasteners
- Source: [mavenspeed.com — Dual Connector Bulkhead](https://mavenspeed.com/collections/b2t-engineering/products/dual-connector-bulkhead), $274 USD

**Connector A vs Connector B — role assignment:**
- **Connector A (cabin electronics interface)**: CAN H/L/shield to Gauge.S cluster (pins 1/2/3) + DCT shifter paddle UP/DOWN/GND (pins 4/5/6). Populated in Phase 2 harness build; installed at Phase 3.
- **Connector B (safety-critical APS throttle input)**: E46 APS pedal 6 wires (pins 1–6): ch1 SGND / +5V / signal, ch2 SGND / +5V / signal. Reserved exclusively for APS — any fault must trigger MaxxECU e-throttle shutdown. See `docs/dbw-pinouts.md` § Firewall Crossing Allocation for the safety-critical labeling rationale.

**Cabin-side wiring:** Both connector cabin faces are permanent. Wire per `harnesses/firewall-crossing-maven.wv` — the .wv file is the source of truth for both connectors' pin assignments.

**Crimp spec:** All HD30 contacts are size-16 solid barrel — Maven includes them with the kit. Required tool: **Deutsch HDT-48-00** ($197 Maven-branded import equivalent, or ~$350-465 for genuine TE currently sold out at Maven). One tool covers all Deutsch solid contacts across DT/DTM/DTP/DTHD/HD30 per [deutschconnector.com selection guide](https://www.deutschconnector.com/technical/deutsch_connector_crimp_guide/). Strip length + inspection: pull-test each contact ≥15 lbf (motorsport standard).

**Contact insertion:** Standard Deutsch HD30 procedure — insert contact from rear of connector body, listen for the audible click when the retention lance seats, pull-test lightly to confirm. No specific insertion order required (unlike the deprecated AS79 which had inner-ring accessibility constraints). Slide the back-shell/boot onto the wire bundle BEFORE inserting contacts.

**Signals that do NOT cross this bulkhead (all engine-bay-to-engine-bay under H2O arch):**
- ECU +12V from PMU16 (both engine-bay — see `harnesses/power-distribution.wv`)
- 8HP TCU KL30/KL15 (PMU16 → TCU, engine-bay direct)
- All engine sensors, IGN, INJ, GPO — direct-terminate at MaxxECU CMC in engine bay
- WBO2 LSU 4.9 (engine-bay to engine-bay MaxxECU)
- Boost solenoid, VVT solenoid, knock sensors — engine-bay direct
- DCT Clutch Simulator CPS (engine-bay Simulator → MaxxECU C2 AIN 5, engine-bay direct)
- Fuel pump +12V (PMU16 O4 → dedicated firewall grommet → cabin body harness → tank; does cross firewall but NOT via the Maven signal bulkhead — see `fuel-pump-hanger-phase3.wv`)

> **CAN bus termination note:** Connector A pins 1/2 carry the CAN1 bus that reaches Gauge.S in the cabin. Termination: MaxxECU CAN 1 has a built-in 120Ω terminator (per [maxxecu.com/webhelp/can-information.html](https://maxxecu.com/webhelp/can-information.html)). If Gauge.S is at the far end of a >1 m run, add a 120Ω terminator at the cluster end. PMU16 CAN2 (to 8HP) is a separate bus entirely engine-bay — do not confuse the two.

### Step 3 — PMU16 Installation and Configuration

Mount PMU16 in the cabin — firewall or inner fender, accessible for USB-CAN setup.

**Wiring:**
- BATT+ → ANL main fuse (≤18 in from battery) → PMU16 M6 BATT+ stud
- IGN sense: IGN-switched +12V → PMU16 pin 7 (+12V SW)
- GND: PMU16 GND lug → chassis GND stud (M8, engine bay)
- CAN2: PMU16 CAN2 H/L → MaxxECU CAN1 H/L (twisted pair, 22 AWG) — engine-bay-direct run (both PMU16 and MaxxECU H2O are engine-bay)

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

**Post-shutdown EWP:** Program PMU16 to hold **O5+O14** active after key-off until CLT < 70°C CAN message from MaxxECU (or 3-min fallback timer). Both outputs must be programmed — O14 provides the second 25A leg of the parallel EWP supply. MaxxECU transmits CLT on CAN1 — PMU16 reads it via CAN2. Enable in MTune: Configuration → CAN settings → Data transmission.

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
   - **CRANK_HALL** → crank sensor (60-2, cylinder 5 end — timing chain compartment cover). OE# `07K906433B` (Hall effect — confirmed). Connector body `3B0973703G`. **Label crank vs cam pigtails clearly at crimp time — same housing, different pinouts.** Crank: +5V/Signal/SensorGND (Hall). Cam: +5V/SensorGND/Signal (Hall). MTune trigger type: "Digital (Hall, opto)" — NOT VR sensor. Direct-terminate at engine-bay MaxxECU CMC: signal → H3 (pin 31, TRIGGER); +5V → G1 (pin 25); SGND → H1 (pin 29).
   - **CAM_HALL** → cam Hall sensor (intake side, top of head). +5V supply type (not +12V).
   - **CLT** → coolant temp sensor (cylinder 1 side, exhaust face — in E36: front of engine, exhaust/driver side). **Heat sleeve:** DEI Fire Sleeve 3/8" ID (or silicone-over-fiberglass ≥500°F) for the first 150 mm from the sensor body — pigtail runs adjacent to exhaust manifold.
   - **IAT** → intake air temp (in charge pipe downstream of FMIC)
   - **MAP** → Bosch 3-bar MAP sensor (vacuum hose to BBG intake manifold post-TB)
   - **DBW_TB** → 07K throttle body 6-pin (Motor+, Motor-, TPS1, TPS2, +5V, GND)
   - **KNOCK_1** / **KNOCK_2** → flat knock sensors, exhaust side lower block. GND via M8 mounting bolt — no separate GND wire. **Routing:** run pigtails down the block face, away from exhaust manifold, then bundle into KNOCK sub-loom across the bottom of the engine. **Heat sleeve:** if any section runs within 100 mm of exhaust manifold, wrap with DEI Reflect-A-Gold (p/n 010394, 1-1/2"×15' roll, $42.99 — [designengineering.com](https://www.designengineering.com/reflect-a-gold-heat-reflective-tape-1-5-x-15/)) over the Techflex sleeve. Reflect-A-Gold = metalized polyimide glass cloth, 800°F continuous.
   - **IGN_1–5** → VAG 4-pin COP connectors (07K firing order: 1-2-4-5-3)
   - **INJ_1–5** → ID1050x EV14 connectors (firing order: 1-2-4-5-3, cylinder 1 at timing chain end)
   - **BOOST_SOL** → Superseal 2-pin on boost solenoid (GPO 1, now physically connected)
   - **FLEX_FUEL** → carry-forward, already inline on fuel feed
   - **PST_F1** → iABED M10×1.0 port on oil filter housing (5-pin Bosch Trapezoid: pin1=NC, pin2=Pressure, pin3=+5V, pin4=GND, pin5=Temp). Mating kit: F02U.B00.751-01.
   - **WIDEBAND** → LSU 4.9 in manifold/downpipe bung. **Heat sleeve:** DEI Fire Sleeve 3/8" ID (p/n 010470, $26.99 — [designengineering.com](https://www.designengineering.com/fire-sleeve-tape-kit-0-375-id-x-36/)) for first 300 mm from sensor body — bung is on the exhaust manifold. Note: DEI makes no 1/2" ID size; 3/8" (10 mm ID) fits the LSU 4.9 cable OD. Transition to Techflex F6 after clearing the manifold/turbo heat zone. Route clear of turbine housing and wastegate (≥100 mm). Tie-strap to block or manifold stud boss to prevent contact under vibration.
   - **VVT solenoid** → 07K intake cam VVT actuator (ME7.1.1 pin 115) via GPO 3 direct-terminate at CMC D4 (pin 16) — see MTune section below. Confirm connector body at engine before ordering pigtail.

   > ⚠️ **Pitfall (crank vs cam):** OE# `3B0973703G` is the same connector body for both crank and cam sensors but with **opposite pinouts**. Both are Hall effect sensors. Crank: +5V/Signal/SensorGND. Cam: +5V/SensorGND/Signal. Swapped pigtails produce no-start with no obvious failure mode. Label pigtails at crimp time. Source: `harnesses/maxxecu-07k.wv` CRANK_HALL notes.

9. Wire E46 accelerator pedal (APS) — **crosses firewall via Maven HD30 Connector B (safety-critical)**. Run 6-wire shielded cable from pedal (footwell) to **Maven Connector B cabin face pins 1–6**, then engine-side of Connector B → engine-bay MaxxECU C2: APS1 signal → C2 E4 (AIN 6), APS2 signal → C2 F1 (AIN 7). VCC1/VCC2 → CMC G1 (+5V rail, pin 25). GND1/GND2 → CMC H1 (sensor GND, pin 29). Connector B is designated safety-critical (isolated from Connector A cabin electronics) so any APS fault triggers e-throttle shutdown. See `harnesses/epedal-bmw-e46.wv` and `docs/dbw-pinouts.md` § Firewall Crossing Allocation.

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
   > ⚠️ **Pitfall:** MTune trigger setup — verify before first crank. Crank = VR input (passive differential, no supply), N-1 / 60-2 pattern → H3/H2. Cam = Hall / HOME input (+5V supply type, not +12V) → H4. Both sensors use the same 3B0973703G connector body but opposite pinouts: crank pin 1 = VR+, pin 2 = VR−; cam pin 1 = +5V, pin 2 = GND, pin 3 = signal. A swapped sensor connector will produce no-start with no obvious failure mode. Sources: `E36_DIY_Build_Checklist.md` Phase 3 ECU & Engine Harness; `maxxecu-07k.wv` CRANK_VR and CAM_HALL connectors; MaxxECU REV9+ wiring diagram PDF (`e36-wiring/docs/vendor/maxxecu/MaxxECU_RACE_REV9plus_Wiring.pdf`) — Connector 1 page: "Crank sensor TRIGGER (black) → H3, VR GND → H2; Opto/hall (digital) → H4 HOME/CAM; Wiring alternative for crank/home signal: shield → E3 SHIELD GND."

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
    - Motor+ → C2 H4 (MOTOR 1+) → direct-terminate at TB motor lead (both endpoints engine-bay)
    - Motor- → C2 H2 (MOTOR 1-) → direct-terminate at TB motor lead
    - MTune → Settings → E-Throttle → Motor output → **Motor 1** (select C2 motor channel)
    - Verify motor polarity: in E-Throttle wizard, if TB runs in wrong direction, swap Motor+ and Motor- at the TB connector — do not swap at C2
    - See `35-dbw-throttle.md` for full DBW calibration procedure

16. **Reverse lights → PMU16 direct-drive (replaces Phase 1 GPO+relay):**
    - Remove the Phase 1 discrete reverse-light relay + wiring (was driven by MaxxECU GPO 1 via M50 harness BOOST_SOL Superseal stub — see `harnesses/8hp-body-integrations-phase1.wv`)
    - Configure a PMU16 high-side output as "Reverse light" — trigger source = MaxxECU CAN broadcast of "8HP gear = R"
    - PMU16 output → X20 pin 10 (BL/GE) → OEM cabin body harness → reverse light bulbs
    - MTune → Outputs → GPO 1 → Function: "Boost solenoid" (overwriting the Phase 1 reverse-light assignment on GPO 1)
    - See `harnesses/8hp-body-integrations-phase3.wv` for the PMU16 direct-drive spec.

### MTune — Cam Sensor Type Verification

17. **The 07K cam sensor is a Hall effect sensor (+5V supply type); the M52 VANOS cam sensor was also Hall effect but a different connector body.** The MaxxECU HOME input (CMC H4, pin 32) receives both. In MTune, confirm:
    - Trigger → CAM/HOME input → Signal type: Digital / Hall (not VR)
    - +5V supply is shared with MAP/TPS/PST-F1 sensor rail at CMC G1 (pin 25) — direct-terminate under H2O arch
    - Verify the HOME signal goes high on cam tooth in MTune live data before cranking. A flat line = no signal (wrong pinout, bad connection, or wrong sensor type setting).

### MTune — Wideband & Oil Pressure Protection

18. Set MTune wideband input to LSU 4.9. Note: the M52 phase uses LSU 4.2 (different sensor, different pinout); Phase 3 switches to LSU 4.9 — do not swap sensors between phases. The ECU-side CMC channel assignments are the same across both phases, but the sensor connector pinout differs. Source: maxxecu.com/webhelp/wirings-lambda_sensors.html. Verify the wideband sensor is a **genuine Bosch LSU 4.9** — aftermarket wideband sensors have documented accuracy issues at WOT and at rich lambda values below 0.75. Tune quality depends on accurate AFR data. Source: `E36_DIY_Build_Checklist.md` Phase 3 Commissioning.

19. Configure MaxxECU oil pressure protection map: set a minimum oil pressure threshold vs RPM (e.g. 10 PSI at idle, 50 PSI above 3,000 RPM). MaxxECU cuts ignition if pressure drops below curve. This is a standard MaxxECU protection feature — critical at 9,000 RPM where a momentary oil starvation event destroys bearings before you can react. Source: `E36_DIY_Build_Checklist.md` Phase 3 Commissioning.

### MTune — 8HP Settings Confirm

20. Verify 8HP settings carried from Phase 1 are unchanged:
    - MTune → Advanced → 8HP → Shifter type → **8HP SEQ shifter** (DCT Shifter)
    - Starter inhibit: MTune → Advanced → Starter control → inhibit crank in all gears except P and N

---

## References

- `harnesses/maxxecu-07k.wv` — full 07K harness pinout, GPO assignments, CMC connector labels
- `harnesses/8hp-body-integrations-phase1.wv` / `harnesses/8hp-body-integrations-phase3.wv` — reverse light circuit Phase 1 (M50 harness + discrete relay) vs Phase 3 (PMU16 direct-drive)
- `harnesses/fuel-pump-hanger-phase1.wv` / `harnesses/fuel-pump-hanger-phase3.wv` — Phase 1 (discrete relay via JDT rewire kit) vs Phase 3 (PMU16 O4 direct)
- `harnesses/firewall-crossing-maven.wv` — Maven HD30 dual bulkhead pin assignments
- `E36_DIY_Build_Checklist.md` — Phase 3, ECU & Engine Harness (lines 653–663)
- `E36_9000RPM_Project_Plan_Verified.md` — ECU M5x→07K Harness Transition table (lines 574–598)
- ME7.1.1 Pinout PDF: [Google Drive](https://drive.google.com/file/d/15RPWyYPLHGEMMQZIlUgpoo77T-CxjyMP/view)
- [MaxxECU M50 harness docs](https://www.maxxecu.com/webhelp/wirings-terminated_engine_harness-bmw_m50.html)
- [RevMap 07K harness connector docs](https://docs.revmapperformance.com/en/07K-harness)
- [RevMap 2.5T turbo prep guide](https://revmapperformance.com/07K-Turbo-Preparation/)

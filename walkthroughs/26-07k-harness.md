# Phase 2: 07K Engine Harness Build

**Phase:** 2  
**System tags:** `[ECU]` `[ELECTRICAL]`  
**Shop-mandatory:** No — owner-built offline, bench-tested before Phase 3 swap day  
**Prerequisites:** Throttle path decision locked (`25-07k-air.md`); all sensor pigtail connectors ordered (see Parts table); `maxxecu-07k.wv` harness file reviewed. Under the H2O engine-bay-mount architecture, the 07K engine harness direct-terminates at the engine-bay MaxxECU C1/C2 CMC connectors — there is no firewall bulkhead in the engine-side path. The Maven HD30 dual 16+16 bulkhead (installed at Phase 3 per `34-ecu-harness-final.md` Step 2) carries only cabin-originated signals (CAN + DCT + APS). This bench build terminates at the MaxxECU CMC end + all engine-side connectors.

---

## Parts

### Connector housings + terminals (direct-terminate — no pigtail)

Buy connector **housings and individual terminals only** — do not buy pre-made pigtail assemblies. Direct-terminate by crimping TXL build wire into the terminal and seating it in the housing. This eliminates the pigtail-to-harness splice at every connector; one fewer joint per connection, multiplied across ~17 connectors. The Engineer PA-09 in the tool BOM handles all terminal families listed below. Source: Drive, Revive, Tinker harness build video ([youtube.com/watch?v=G3fSqfpBi1U](https://www.youtube.com/watch?v=G3fSqfpBi1U)) and lessons-learned video ([youtube.com/watch?v=Z3hmNz64Gw8](https://www.youtube.com/watch?v=Z3hmNz64Gw8)) — "minimize joints = minimize failure points."

> ⚠️ **Avoid generic or unbranded connector supplies from Amazon.** For OEM part numbers (e.g. `3B0973703G`, `4B0973724`, EV14 USCAR kits), Amazon is acceptable if the listing is clearly an OEM or Delphi/TE/Bosch part with reviews confirming authenticity. The warning is against convenience sourcing of unknown-brand terminals and wire, not against Amazon per se. Where a ProWire USA, Del City, Waytek, ECS Tuning, or FCP Euro listing exists for the same OEM part, prefer it — fitment and material are more reliably documented.

| Qty | Part | Terminal family | Source |
| --- | --- | --- | --- |
| 5 housings + 10 contacts + seals | EV14 / USCAR 2-pin injector connectors | Aptiv/Delphi USCAR 280 | [ProWire USA](https://www.prowireusa.com); [Del City](https://www.delcity.net); Waytek |
| 5 housings + 20 contacts + seals | VAG 4-pin COP coil connectors | Bosch JPT 2.8mm | OE# `4B0973724` / `1J0973724`; [ProWire USA](https://www.prowireusa.com); ECS Tuning; FCP Euro |
| 4 housings + 12 contacts + seals | 3-pin VAG sensor connectors (cam / crank / MAP) | Bosch JMT 1.5mm | OE# `3B0973703G`; [ProWire USA](https://www.prowireusa.com); ECS Tuning; FCP Euro |
| 3 housings + 6 contacts + seals | 2-pin NTC sensor connectors (CLT + IAT) | Bosch JMT 1.5mm | OE# `1J0973702`; [ProWire USA](https://www.prowireusa.com); ECS Tuning; FCP Euro |
| 2 housings + 4 contacts + seals | 2-pin flat knock sensor connectors | **Flat-blade contacts** (NOT Bosch JMT 1.5mm round pin — JMT contacts will not seat in `1J0973712` cavities) | OE# `1J0973712`; ECS Tuning; FCP Euro — **not the same body as CLT/IAT**. De-pin donor connectors with Lisle 57750 if reusing. |
| 1 kit | Maven HD30 Dual 16+16 firewall bulkhead (all sides + contacts + template) | Deutsch HD30 shell-24 size-16 solid barrel | Full kit purchased under `wiring-bom.md` System 8 for Phase 3 install; engine-side plugs (2× 16-way jam-nut) are what this Phase 2 harness build terminates into. [mavenspeed.com — Dual Connector Bulkhead](https://mavenspeed.com/collections/b2t-engineering/products/dual-connector-bulkhead) — $274 |

> ⚠️ **CRITICAL — `3B0973703G` connector body warning:** The VW 07K cam sensor and crank sensor use the **same `3B0973703G` housing** but with **opposite pinouts**. Both are **Hall effect sensors** (crank: OE# 07K906433B confirmed Hall — Valeo PN 366675 datasheet, the07k.wiki). Crank = +5V/Signal/SensorGND. Cam = +5V/SensorGND/Signal. **Label pigtails clearly at crimp time with CAM and CRANK.** A swapped pigtail produces a no-start with no obvious failure indicator. Source: `maxxecu-07k.wv` CRANK_HALL notes.

> ⚠️ **Knock sensor connectors are NOT the same body as the 2-pin NTC.** `1J0973712` (knock) and `1J0973702` (NTC) look similar — do not substitute. Buy both types separately.

### Wire, loom, and hardware

| Part | Spec | Notes |
| --- | --- | --- |
| TXL 22 AWG wire — 10 colors | Red, Black, White, Brown, Blue, Grey, Green, Yellow, Orange, Violet | Signal-level wires are 22 AWG throughout. See `wiring-bom.md` Wire Specification section for spool quantities. Blue = IGN 1–5; Brown = sensor GND returns; Orange = DBW Motor+; Violet = DBW Motor− |
| Shielded twisted pair (crank, cam, knock signal runs) | 22 AWG STP | Noise-sensitive wires — shielded, own sleeve, physically away from injector and coil primaries at all points |
| Techflex F6 expandable braid — 1/2" (main trunk) | 13mm OD | Main trunk from MaxxECU CMC entry to engine mid-point |
| Techflex F6 expandable braid — 1/4" (sub-looms) | 6mm OD | Injector, coil, sensor, trigger, knock sub-looms — one sleeve per group |
| DEI Fire Sleeve — 3/8" ID × 36" kit | silicone-over-fiberglass, 500°F continuous / 2000°F intermittent. **p/n 010470, $26.99** — [designengineering.com](https://www.designengineering.com/fire-sleeve-tape-kit-0-375-id-x-36/). Includes 36" sleeve + 16" Fire Tape. | WBO2 cable: first 300 mm from sensor bung. CLT pigtail: first 150 mm from sensor body. 3/8" ID (10 mm) fits both cables. One kit provides 36" — enough for both runs (450 mm needed). Note: DEI makes no 1/2" size. |
| DEI Reflect-A-Gold — 1-1/2" × 15' roll | Metalized polyimide laminated glass cloth, 800°F continuous (adhesive rated to 325°F). **p/n 010394, $42.99** — [designengineering.com](https://www.designengineering.com/reflect-a-gold-heat-reflective-tape-1-5-x-15/). NOT Reflect-A-Cool (different product). | Knock sensor sub-loom: wrap any section running within 100 mm of exhaust manifold, over the Techflex sleeve. Minimum 1.5" wide (narrowest available). |
| Raychem SRGB solder sleeves — 22–26 AWG | Small, blue band | **Not needed for direct-terminated connectors.** Keep a small pack (~5) for any sensor that ships with an integral moulded pigtail (e.g. E46 APS donor connector sourced from a donor car rather than as a housing+terminal kit). Heat gun only — not iron. |
| 3:1 adhesive-lined heat-shrink, assorted | 1/4", 3/8", 1/2" | Breakout boot transitions, sub-loom end caps |
| Engineer PA-09 micro-pin crimper | ~$30–40, Amazon | All VAG pigtail contacts (cam/crank/MAP/CLT/IAT/knock/COP/EV14). Covers Bosch JMT 1.5mm and JPT 2.8mm contacts. *Note: previously listed as Knipex 97 52 68 — that PN does not exist in the Knipex catalog* |
| Molex 63811-9200 / 63811-8900 / 63811-9000 | MaxxECU CMC C1/C2 Molex contacts | Small (63811-9200) for 22 AWG signal contacts; Big (8900/9000) for 18-16 AWG larger-gauge pins. All ECU-end wires terminate at CMC via these tools under the H2O direct-terminate arch. |
| Deutsch HDT-48-00 | $197 (Maven import equivalent) or $350-465 (genuine TE) | **Covers ALL Deutsch solid contacts across DT/DTM/DTP/DTHD/HD30 series** per deutschconnector.com selection guide. One tool for the Maven HD30 dual bulkhead (Phase 3 install) + any DT 2-pin bypasses + PST-F1 pigtail. Sources: [mavenspeed.com — HDT-48-00](https://mavenspeed.com/collections/b2t-engineering/products/deutsch-crimp-tool-solid-contacts); [deutschconnector.com selection guide](https://www.deutschconnector.com/technical/deutsch_connector_crimp_guide/) |
| Brady M210 + PermaSleeve M21-125-C-342 | Wire labels — 22–16 AWG | Print wire designators (CMC pin location + signal name) on both ends of every wire before looming |
| Brady M210 + PermaSleeve M21-375-C-342 | Sub-loom breakout labels | Slide over 1/4" sub-loom at each breakout before Techflex goes on. Print: `INJECTORS`, `COILS`, `SENSORS`, `TRIGGER`, `KNOCK` |
| Brady M210 + PermaSleeve M21-500-C-342 | Main trunk label | Slide over main trunk at MaxxECU CMC entry. Print: `ENGINE M52 PH1` or `ENGINE 07K PH3` |

---

## ME7.1.1 Pinout Reference

All signal mapping below is cross-referenced against the OEM ME7.1.1 engine connector pinout:

- **Google Drive PDF:** [drive.google.com/file/d/15RPWyYPLHGEMMQZIlUgpoo77T-CxjyMP/](https://drive.google.com/file/d/15RPWyYPLHGEMMQZIlUgpoo77T-CxjyMP/)
- **Authoritative harness file:** [`e36-wiring/harnesses/maxxecu-07k.wv`](../../e36-wiring/harnesses/maxxecu-07k.wv)

The ME7.1.1 pinout is the OEM connector reference only — it maps what each pin was used for in the factory ECU. MaxxECU replaces the ME7.1.1 ECU entirely; the pin numbers are used here as a location reference for the VW sensor pigtail assembly.

---

## Discard List — Do Not Wire These

The following OEM ME7.1.1 circuits are eliminated and should not be brought through to MaxxECU:

| Circuit | Reason |
| --- | --- |
| MAF (mass airflow sensor) | MaxxECU uses MAP + IAT for load; MAF not used |
| OEM narrowband O2 sensors (both) | Replaced by Bosch LSU 4.9 wideband; OEM lambda circuit discarded |
| SAI (secondary air injection) | S&P billet SAI plugs installed (Phase 2 EGR/SAI delete); circuit not needed |
| EVAP (evaporative emissions) | Not needed on track/standalone build |
| Cruise control | Not used in this build |
| K-Line (OBD diagnostic bus) | OBD communication handled by MaxxECU USB/CAN; OEM K-Line not needed |

---

## Key Signals to Wire — MaxxECU Mapping

### Crank and cam triggers

> **Crimp tool: Engineer PA-09** — `3B0973703G` housing uses JMT 1.5mm contacts. ⚠️ Label pigtails CAM and CRANK before snapping body on — identical housing, opposite pinouts.

| Signal | ME7.1.1 Connector Pin | MaxxECU | Notes |
| --- | --- | --- | --- |
| Crank Hall signal (60-2 missing tooth) | Conn B — **pin 82** | CMC H3 — TRIGGER (pin 31) | **Hall effect** (OE# 07K906433B — confirmed). MTune: Trigger = "Digital (Hall, opto)". N-1 / 60-2. `3B0973703G` housing — label CRANK. Direct-terminate at engine-bay MaxxECU CMC. |
| Crank +5V supply | Conn B — **pin 84** (supply) | CMC G1 — +5V sensor supply (pin 25) | Direct-terminate at CMC G1. No VR− wire. |
| Crank Sensor GND | Conn B — **pin 83** (GND) | CMC H1 — Sensor GND (pin 29) | Direct-terminate at CMC H1. |
| Cam Hall signal | **pin 86** | CMC H4 — HOME (cam Hall) | Hall effect, +5V supply type. `3B0973703G` housing — label CAM. +5V from shared sensor rail. |

### Injectors (5-cylinder — firing order 1-2-4-5-3)

> **Crimp tool: Engineer PA-09** — EV14 USCAR 2-pin contacts (Bosch EV14 pigtail kit).

| Cylinder | ME7.1.1 Pin | MaxxECU CMC |
| --- | --- | --- |
| INJ 1 | **pin 96** | K1 |
| INJ 2 | **pin 97** | K2 |
| INJ 3 | **pin 112** | M1 |
| INJ 4 | **pin 88** | M2 |
| INJ 5 | **pin 89** | M3 |

Connector: Bosch EV14 2-pin (USCAR). The MaxxECU M50 terminated harness ships with EV1 connector ends — replace with EV14 pigtail ends for the 07K ID1050x injectors.

### Ignition coils (5-cylinder — firing order 1-2-4-5-3)

> **Crimp tool: Engineer PA-09** — `4B0973724` VAG 4-pin COP housing, JPT 2.8mm contacts.

| Cylinder | ME7.1.1 Pin | MaxxECU CMC |
| --- | --- | --- |
| IGN 1 | **pin 102** | A2 |
| IGN 2 | **pin 103** | A3 |
| IGN 3 | **pin 111** | B2 |
| IGN 4 | **pin 94** | B3 |
| IGN 5 | **pin 95** | C2 |

Connector: VAG 4-pin COP (OE# `4B0973724`).

### Sensors

> **Crimp tool: Engineer PA-09** — MAP/CLT/IAT use JMT 1.5mm contacts (`3B0973703G` and `1J0973702` housings). Knock sensor (`1J0973712`): **flat-blade contacts** (NOT JMT 1.5mm round pin — JMT contacts will not seat in `1J0973712` cavities) — **not the same body as CLT/IAT**.

| Signal | ME7.1.1 Pin | MaxxECU CMC | Notes |
| --- | --- | --- | --- |
| Knock sensor 1 | **pin 106** | K3 (DIN/VR1, CMC pin 39) | Bosch flat 1-pin, M8 bolt mount; sensor grounds through the mounting bolt to the block (no dedicated GND wire). Direct-terminate at CMC K3. Shielded 22 AWG STP; shield drain to CMC H1 at the ECU end (single-end drain). ⚠️ See note below. |
| Knock sensor 2 | **pin 107** | K4 (DIN/VR2, CMC pin 40) | Same. Direct-terminate at CMC K4; shield drain to CMC H1 at the ECU end (shared with KS1 drain). ⚠️ See note below. |
| MAP sensor | **pin 101** | AIN 4 | 3-bar Bosch (GM 12592525). +5V/Signal/GND — `W_MAP` cable. |

> **⚠️ Knock input routing note:** Knock sensors are currently wired to C1 DIN/VR inputs (K3/K4, CMC pins 39/40). The MaxxECU RACE also has **dedicated knock inputs on C2: E2 (Knock 1), E3 (Knock 2), E1 (Knock GND)**, confirmed in the official REV9+ wiring PDF and live webhelp. The C2 dedicated inputs likely have optimized analog conditioning for piezoelectric knock sensors vs the general-purpose DIN/VR inputs. For a high-power turbocharged build, consider populating C2 E1/E2/E3 for knock instead — C2 is already assembled for motor (H2/H4) and APS (E4/F1), so adding two more wires is straightforward. MTune knock channel assignments must match the physical input. **Current wiring (C1 K3/K4) will function; C2 E2/E3 is preferred if C2 is being populated anyway.** Source: MaxxECU RACE REV9+ wiring PDF; live webhelp `maxxecu.com/webhelp/wirings-maxxecu_pinout.html` C2 pinout (E1=KNOCK GND, E2=Knock 1, E3=Knock 2).
| ECT (coolant temp) | **pin 93** | F1 — CLT (CMC pin 21) | 2-pin NTC (`1J0973702`). Cylinder 1 side, exhaust face. Sleeve first 150 mm from sensor with DEI Fire Sleeve 3/8" ID — adjacent to exhaust manifold. |
| IAT (intake air temp) | — | F2 — IAT | 2-pin NTC; mount downstream of intercooler in intake pipe. |

### DBW throttle body (DBW path only — see `25-07k-air.md`)

> **Crimp tool: Engineer PA-09** — TB connector contacts (VDO/Continental 6-pin; confirm housing PN at install). ECU-side contacts (Molex CMC C1/C2) → Molex 63811-9200/8900. No firewall bulkhead in the TB path — direct-terminate at engine-bay MaxxECU under the H2O arch.

| Signal | ME7.1.1 Pin | MaxxECU | Notes |
| --- | --- | --- | --- |
| TB Motor+ | **pin 84** | C2 H4 (MOTOR 1+) | **22 AWG** (3A H-bridge peak at 0.5 m engine-bay run — 22 AWG adequate). Direct-terminate at engine-bay C2. Verify polarity at install — swap Motor+/− at TB connector only if TB runs backward in e-throttle wizard. |
| TB Motor− | **pin 92** | C2 H2 (MOTOR 1−) | Same. 22 AWG. Direct-terminate at engine-bay C2. Do NOT use GPO 3 or GPO 4 for motor drive. |
| TPS1 signal | **pin 117** | CMC G2 (pin 26) — direct-terminate | — |
| TPS2 signal | **pin 118** | CMC J2 / AIN 2 (pin 34) — direct-terminate | — |

### Accelerator pedal (DBW path — APS 1 + APS 2, crosses firewall via Maven Connector B safety-critical)

> **Crimp tool: Deutsch HDT-48-00** — Maven HD30 size-16 contacts (Connector B pins 1–6). MaxxECU C2 end → Molex 63811-9200.

| Signal | ME7.1.1 Ref Pin | MaxxECU (engine-bay direct-terminate) | Maven B pin | Notes |
| --- | --- | --- | --- | --- |
| APS 1 GND | **pin 72** | CMC H1 (Sensor GND, pin 29) | B1 | Pedal → cabin cable → Maven B cabin face → engine-side Maven B plug → MaxxECU |
| APS 2 GND | **pin 73** | CMC H1 (Sensor GND, pin 29) | B2 | — |
| APS 2 VCC | — | CMC G1 (+5V rail, pin 25) | B3 | — |
| APS 1 signal | **pin 35** | C2 E4 (AIN 6) | B4 | — |
| APS 1 VCC | — | CMC G1 (+5V rail, pin 25) | B5 | — |
| APS 2 signal | **pin 34** | C2 F1 (AIN 7) | B6 | — |

Connector B is designated **safety-critical** and reserved exclusively for APS wiring — any fault (open, short, sensor mismatch) must trigger MaxxECU e-throttle shutdown. Isolated from Connector A (cabin electronics: CAN + DCT shifter). Sources: `harnesses/firewall-crossing-maven.wv`, `harnesses/epedal-bmw-e46.wv`, `docs/dbw-pinouts.md` § Firewall Crossing Allocation.

### VVT cam actuator solenoid

> **Crimp tool: Engineer PA-09** — VW Micro Timer 1.5mm Sealed 2-pin (`1J0 973 702` body, JMT 1.5mm contacts).

| Signal | ME7.1.1 Pin | MaxxECU | Notes |
| --- | --- | --- | --- |
| VVT solenoid output | **pin 115** | GPO 3 (CMC D4, pin 16) — direct-terminate at engine-bay ECU | GPO 3 is freed from M52 VANOS and immediately reused for 07K VVT. +12V from coil/inj relay. Flyback diode at solenoid connector (1N4007, cathode to +12V). See `maxxecu-07k.wv` VVT_SOL connector notes. |

---

## ECU-Side Termination — Direct at MaxxECU CMC (no bulkhead in the engine-side path)

Under the H2O engine-bay-mount architecture, the 07K engine harness terminates directly at the engine-bay MaxxECU RACE H2O C1/C2 Molex CMC connectors. **There is no firewall bulkhead in the engine sensor / IGN / INJ / GPO signal path.** All engine-side wiring stays engine-bay.

The Maven HD30 Dual 16+16 bulkhead (installed at Phase 3 per `34-ecu-harness-final.md` Step 2) carries only cabin-originated signals — CAN + DCT shifter paddle inputs on Connector A, APS pedal on safety-critical Connector B. This Phase 2 harness build produces:

1. The **ECU-end trunk** — every 07K signal terminated with a Molex CMC contact, ready to insert into C1 (48-pin) or C2 (32-pin). Insertion happens at Phase 3 swap moment.
2. The **engine-side connectors** — INJ, IGN, sensor, DBW TB, crank/cam Hall connectors already terminated on the far end of the trunk.

**Signal → CMC pin destinations** (source: `harnesses/maxxecu-07k.wv` "07K signal → MaxxECU pin destinations" block):

| Group | Signals | CMC pin destinations | Notes |
| --- | --- | --- | --- |
| Power / GND | +12V Coils/Inj (from PMU16 O2), Engine GND | PMU16-side + engine-bay chassis GND star | 12 AWG, PMU16-driven (Phase 3 arrival). Not on the CMC — routed separately. |
| Ignition (07K 5-cyl) | IGN 1–5 | A2 (pin 2), A3 (3), B2 (6), B3 (7), C2 (10) | IGN 6/7 CMC positions unused on 07K |
| Injection (07K 5-cyl) | INJ 1–5 | K1 (45), K2 (46), M1 (49), M2 (50), M3 (51) | INJ 6/7 CMC positions unused on 07K |
| Crank trigger (Hall) | Signal / +5V / SGND | H3 (31, TRIGGER), G1 (25, +5V), H1 (29, SGND) | Direct-terminate; MTune Trigger = Digital (Hall) |
| Cam Hall (HOME) | Signal / +5V / SGND | H4 (32, HOME), G1 (25 shared), H1 (29 shared) | +5V supply type (not +12V) |
| DBW throttle body | Motor+, Motor−, TPS1, TPS2, +5V, SGND | C2 H4 (MOTOR 1+), C2 H2 (MOTOR 1−), C1 G2 (TPS1 pin 26), C1 J2 (TPS2 AIN 2 pin 34), C1 G1, C1 H1 | 22 AWG; do NOT use GPO 3/4 |
| Engine sensors | CLT, IAT, MAP | F1 (21), F2 (22), J3 (AIN 4, pin 38) | — |
| PST-F1 oil P/T | Pressure, Temp, +5V, SGND | J3 (AIN 3, pin 37), J1 (AIN 1, pin 33), G1 shared, H1 shared | Pressure = AIN 3 for 07K's higher-resolution needs |
| Flex fuel | Signal | C1 (DIN 3, pin 9) | +12V IGN feed comes from separate IGN rail (not CMC) |
| Knock sensors | KS1, KS2, shield drain | K3 (DIN/VR1, pin 39), K4 (DIN/VR2, pin 40), H1 (shield drain at ECU end only) | Sensor GND via M8 mounting bolt to block — no separate GND wire |
| VVT solenoid | Signal (GPO 3) | D4 (pin 16) | GPO 3 freed from M52 VANOS at 07K swap and reused for 07K intake cam VVT |
| Flex fuel / other DIN | DIN 3 (flex fuel) | C1 (pin 9) | — |

> **Cavity plugs:** MaxxECU C1/C2 unused CMC positions are cavity-plugged per Molex CMC procedure to maintain IP rating. See `harnesses/maxxecu-07k.wv` for the full list of unused pins.

---

## Procedure

> **Reference throughout:** [`e36-wiring/docs/harness-build.md`](../../e36-wiring/docs/harness-build.md) — full harness architecture, sub-loom groupings, splice types, build sequence, labeling procedure, and bench test checklist. This walkthrough covers the 07K-specific signal assignments; `harness-build.md` covers the physical construction methodology.

### Phase A — Before any wire is cut

#### A1 — Confirm signal mapping and order pigtails first

All sensor connector housings and terminals (EV14 injector, 4B0973724 COP coil, 3B0973703G 3-pin sensor, 1J0973702 2-pin NTC, 1J0973712 knock) must be on-hand before harness build starts. See Parts table above. You cannot complete the harness without them — each sub-loom wire is direct-terminated at the sensor end with a crimped terminal inserted into the connector housing.

> ⚠️ **CRITICAL — `3B0973703G` cam/crank labeling:** Both sensors use the identical housing with opposite pinouts. Label pigtails `CAM` and `CRANK` on the wire before snapping the connector body on. Swapping them = no-start with no obvious indicator.

#### A2 — Dry-route the engine and measure wire lengths

With the 07K engine on a stand in its intended longitudinal orientation, route a tape/rope mock-up of the main trunk path from the intended MaxxECU CMC entry point (engine-bay ECU mount, intake side of firewall) along the engine. Identify sub-loom breakout points for each component group. Measure each wire's required length (CMC pin → splice point → component). Add 10% slack. Record all measurements.

**M52 sub-loom reuse check (do at this step):** Lay the M52 mating plug harness alongside the 07K engine in position. Check each sub-loom branch:
- **Can reuse with pigtail swap only** (connector body changes, ECU-end CMC pin destinations unchanged): cam Hall, MAP, Starter, Alt D+, flex fuel, most sensor runs
- **Fully rewired at ECU end**: crank Hall (07K is Hall not VR — different CMC pin destinations for +5V and SGND vs M52 VR- pin)
- **Needs extension or reroute**: CLT moves to cylinder-1 side exhaust face on 07K (opposite end of block from M52 front CLT position); knock sensors are new (07K only); VVT solenoid is new
- **Discard**: INJ 6, IGN 6 (6th cylinder positions unused on 5-cyl 07K)

This assessment resolves at this step — it cannot be done accurately without the 07K engine in position.

#### A3 — Loom discipline — plan sub-looms before cutting

Every signal belongs to exactly one sub-loom. Decide before cutting any wire.

| Sub-loom label | Contents | Route |
| --- | --- | --- |
| `INJECTORS` | INJ 1–5 signal wires + shared +12V Coils/Inj rail stubs | Along injector rail |
| `COILS` | IGN 1–5 signal wires + shared +12V Coils/Inj rail stubs | Along valve cover rail |
| `TRIGGER` | Crank Hall signal (+5V/signal/GND); Cam Hall signal — **shielded, own sleeve, physically away from all others** | Front of engine to sensor positions |
| `SENSORS` | CLT, IAT, MAP, TPS, +5V sensor, Sensor GND | Around intake manifold |
| `KNOCK` | KS1, KS2, Knock GND — shielded, 07K only | Below intake manifold |

High-current feeds (fuel pump, fan, EWP) are **never** in the ECU signal loom — dedicated circuits back to PMU16.

---

### Phase B — Bench build

#### B1 — Cut, label, and crimp

1. Cut all wires to measured length
2. Before crimping any terminal: slide a Brady PermaSleeve label sleeve onto each wire — the sleeve cannot pass through a terminal body after crimping
3. Strip each wire: **Ideal Stripmaster 45-097** + L4994 blades (16–26 AWG fixed-notch) — do not use auto-adjusting or general-purpose strippers on 22 AWG TXL (thin insulation wall, nicks strands)
4. Crimp by contact type — one tool per family, do not mix:
   - **MaxxECU C1/C2 Molex CMC contacts (ECU end — every wire terminates here):** Molex 63811-9200 (small, 22-24 AWG) / 63811-8900 (large, 18-16 AWG).
   - **VAG sensor/injector/coil pigtail contacts (JMT 1.5mm / JPT 2.8mm):** Engineer PA-09.
   - **Maven HD30 size-16 contacts (Phase 3 cabin bulkhead — Connector A CAN+DCT, Connector B safety-critical APS):** Deutsch HDT-48-00.
5. Verify each crimp with pull-test before insertion
6. Insert into connector body; verify seating click on each contact

> **Label content:** CMC pin location + signal name on both ends. Example: wire terminating at K1 gets label `K1 INJ1` at the CMC end and `K1 INJ1` at the loose engine-side end.

#### B2 — Crimp sensor-side terminals; label before snapping connector body

For each sensor connector (before snapping the body on):
1. Slide a PermaSleeve label sleeve onto the harness wire — it cannot pass through the connector body after the terminal is inserted
2. Print and apply the label: signal + cylinder (e.g., `INJ1`, `INJ2`, `COL1`, `CAM`, `CRANK`)
3. Crimp the terminal onto the wire (Engineer PA-09), pull-test, then insert until the locking lance clicks
4. Snap the connector body on — the label is permanently positioned just behind the connector

For identical housings (injectors, coils, 3-pin VAG sensors): the label is what you grab by feel with your hands in the engine bay. Skip it and you will swap them.

**No splice step.** With direct termination the harness wire runs end-to-end from the MaxxECU CMC contact to the sensor connector terminal. There is no intermediate joint.

---

### Phase C — Route and test

#### C1 — Route the main trunk

Lay the fully-crimped main trunk along the engine with the MaxxECU CMC connectors at the ECU mount position (intake-side firewall face, engine-bay-side) and all wire ends at their branch points. Confirm lengths reach all components with slack. All sensor connector bodies are already populated with terminals (Phase B). Trim or extend now — not after sleeving.

#### C2 — Verify connector positions

At each branch point confirm:
1. The connector body reaches the sensor with adequate slack and a natural routing line
2. The connector is not under tension at its mating position
3. Each connector label is readable with the connector in its installed position

No splice is needed. Each wire runs end-to-end from the MaxxECU CMC contact to the sensor connector terminal.

#### C3 — Bench continuity test — mandatory before sleeving

With the harness fully wired but completely **un-sleeved**, verify against the `.wv` file:

- [ ] Continuity: every signal wire ECU pin → sensor connector pin
- [ ] No shorts between adjacent pins (especially power to sensor GND)
- [ ] Crank/cam/WBO2 shield drains (YE): terminate at CMC E3 (GND Shield, pin 19) — **not** CMC H1
- [ ] Knock shield drain (YE): terminates at CMC H1 (Sensor GND, pin 29) at the ECU end — not chassis GND and not E3
- [ ] Pull-test: every terminal at the MaxxECU CMC end survives a firm hand tug

**Do not sleeve until all checks pass.** Techflex expandable braid makes depinning destructive. Fix any fault before sleeving.

Photograph all sensor connectors against the engine at this stage — before sleeving, every wire is visible and traceable. This photograph is your reference for any future debugging.

---

### Phase D — Sleeve and install

#### D1 — Sleeve

1. Apply sub-loom breakout PermaSleeve labels *before* Techflex goes on each sub-loom (the label slides over the bare sub-loom wires, then Techflex goes over the label)
2. Sleeve sub-looms with 1/4" Techflex F6
3. Sleeve main trunk with 1/2" Techflex F6
4. Secure all breakout transitions with 3:1 adhesive-lined heat-shrink boots
5. Apply main trunk PermaSleeve label at MaxxECU CMC entry

#### D2 — Mount and connect

- Secure loom to engine with P-clips at ~250mm intervals — no dangling sections
- 50mm bare wire between sub-loom Techflex end and each pigtail connector — this bare section is intentional, allows the connector to pivot when mating
- Connect all pigtail connectors; verify locking click on each
- Photograph complete installed harness routing before hood goes on

#### D3 — Alternator excite wire

Plan a dedicated wire from the body harness to the 07K alternator D+ (excite) terminal. The 07K alternator (`07K903023A`, OEM, 140A; reman `06F903023FX` / `07K903023AX`) will self-excite above ~1,500 RPM via the voltage regulator, but correct D+ wiring ensures reliable cold-start charging from the first start.

---

### Phase E — Throttle wiring (DBW path only)

> ⚠️ **Throttle wiring depends on path chosen in `25-07k-air.md`:**
> - **DBW path:** Wire TB Motor+/−/TPS1/TPS2 direct-terminate to MaxxECU C1/C2 e-throttle H-bridge pins (engine-bay-side; no bulkhead in the TB path). The E46 APS pedal runs separately through the Maven HD30 Dual bulkhead **Connector B** (pins 1-6, safety-critical, populated at Phase 3 install). Both pedal and TB use dual-track sensors — wire both tracks to separate MaxxECU analog inputs.
> - **Cable path:** No DBW motor wiring needed. Include TPS1/TPS2 signal wires for MaxxECU throttle position reading. No APS pedal harness needed.

---

## References

- [`maxxecu-07k.wv`](../../e36-wiring/harnesses/maxxecu-07k.wv) — authoritative harness spec for the 07K Phase 3 engine harness; all connector bodies, wire colors, pinouts, and cable lengths
- [ME7.1.1 pinout — Google Drive PDF](https://drive.google.com/file/d/15RPWyYPLHGEMMQZIlUgpoo77T-CxjyMP/)
- [MaxxECU Race pinout](https://maxxecu.com/webhelp/wirings-maxxecu_pinout.html)
- [MaxxECU E-Throttle Docs](https://maxxecu.se/webhelp/settings-ethrottle.html)
- [Harness build conventions and tool matrix](../../e36-wiring/docs/harness-build.md)
- [Shielded run reference](../../e36-wiring/docs/wiring-bom.md) — "Shielded runs" section (required vs recommended vs not-shielded)
- [E36 DIY Build Checklist — Phase 2 ECU Offline Harness Build](../E36_DIY_Build_Checklist.md)
- [E36 9000 RPM Project Plan — Phase 2 ECU & Engine Management](../E36_9000RPM_Project_Plan_Verified.md)

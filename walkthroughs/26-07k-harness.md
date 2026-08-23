# Phase 2: 07K Engine Harness Build

**Phase:** 2  
**System tags:** `[ECU]` `[ELECTRICAL]`  
**Shop-mandatory:** No — owner-built offline, bench-tested before Phase 3 swap day  
**Prerequisites:** Throttle path decision locked (`25-07k-air.md`); firewall bulkhead connector installed in car (Phase 1); all sensor pigtail connectors ordered (see Parts table); `maxxecu-07k.wv` harness file reviewed

---

## Parts

### Pigtail connectors (order before harness build kickoff)

| Qty | Part | PN / Source | Cost |
| --- | --- | --- | --- |
| 8-pack (5 needed + spares) | EV14 injector connectors | [Amazon B07STLGB7Z](https://www.amazon.com/dp/B07STLGB7Z) | $9.93 |
| 2× 4-packs (5 needed + spares) | VAG COP coil connectors (4-pin) | OE# `4B0973724` · [Amazon B093HK7PN1](https://www.amazon.com/dp/B093HK7PN1) — buy 2 packs | ~$24 total |
| 4× individual | 3-pin VAG sensor connectors (cam / crank / MAP) | OE# `3B0973703G` · [Amazon B0DY4CC12Q](https://www.amazon.com/dp/B0DY4CC12Q) | $11.99 ea (~$48) |
| 3× individual | 2-pin NTC sensor connectors (CLT + IAT) | OE# `1J0973702` · [Amazon B0GLPX5HN5](https://www.amazon.com/dp/B0GLPX5HN5) | $5.99 ea (~$18) |
| 2× individual | 2-pin flat knock sensor connectors | OE# `1J0973712` · ECS Tuning or FCP Euro | ~$5–10 ea |
| 1 | Firewall bulkhead mating plug (engine side) | Deutsch Autosport AS 47-way or 79-way flanged jam-nut plug | ~$60–90 |

> ⚠️ **CRITICAL — `3B0973703G` connector body warning:** The VW 07K cam sensor and crank sensor use the **same `3B0973703G` housing** but with **opposite pinouts**. Crank = passive VR (Signal+/Signal−/Shield). Cam = active Hall (+5V/GND/Signal). **Label pigtails clearly at crimp time with CAM and CRANK.** A swapped pigtail produces a no-start with no obvious failure indicator. Source: `maxxecu-07k.wv` header.

> ⚠️ **Knock sensor connectors are NOT the same body as the 2-pin NTC.** `1J0973712` (knock) and `1J0973702` (NTC) look similar — do not substitute. Buy both types separately.

### Wire, loom, and hardware

| Part | Spec | Notes |
| --- | --- | --- |
| TXL 22 AWG wire — 6 colors | Red, Black, White, Grey, Green, Yellow | All wires through AS79 size-22 contacts are 22 AWG. See `wiring-bom.md` Wire Specification section for spool quantities |
| Shielded twisted pair (crank, cam, knock signal runs) | 22 AWG STP | Noise-sensitive wires — shielded, own sleeve, physically away from injector and coil primaries at all points |
| Techflex F6 expandable braid — 1/2" (main trunk) | 13mm OD | Main trunk from AS79 to engine mid-point |
| Techflex F6 expandable braid — 1/4" (sub-looms) | 6mm OD | Injector, coil, sensor, trigger, knock sub-looms — one sleeve per group |
| DEI Fire Sleeve — 3/8" ID × 36" kit | silicone-over-fiberglass, 500°F continuous / 2000°F intermittent. **p/n 010470, $26.99** — [designengineering.com](https://www.designengineering.com/fire-sleeve-tape-kit-0-375-id-x-36/). Includes 36" sleeve + 16" Fire Tape. | WBO2 cable: first 300 mm from sensor bung. CLT pigtail: first 150 mm from sensor body. 3/8" ID (10 mm) fits both cables. One kit provides 36" — enough for both runs (450 mm needed). Note: DEI makes no 1/2" size. |
| DEI Reflect-A-Gold — 1-1/2" × 15' roll | Metalized polyimide laminated glass cloth, 800°F continuous (adhesive rated to 325°F). **p/n 010394, $42.99** — [designengineering.com](https://www.designengineering.com/reflect-a-gold-heat-reflective-tape-1-5-x-15/). NOT Reflect-A-Cool (different product). | Knock sensor sub-loom: wrap any section running within 100 mm of exhaust manifold, over the Techflex sleeve. Minimum 1.5" wide (narrowest available). |
| Raychem SRGB solder sleeves — 22–26 AWG | Small, blue band | Pigtail-to-harness splices. Heat gun only — not iron. Buy a box of 25. |
| 3:1 adhesive-lined heat-shrink, assorted | 1/4", 3/8", 1/2" | Breakout boot transitions, sub-loom end caps |
| Engineer PA-09 micro-pin crimper | ~$30–40, Amazon | All VAG pigtail contacts (cam/crank/MAP/CLT/IAT/knock/COP/EV14). Covers Bosch JMT 1.5mm and JPT 2.8mm contacts. *Note: previously listed as Knipex 97 52 68 — that PN does not exist in the Knipex catalog* |
| Daniels DMC AFM8 crimp tool + positioner K42 (pin) / K40 (socket) | ~$400–550 AFM8 body; ~$60–80 positioners | **AS79 / 8STA size-22 contacts only.** The AFM8 (M22520/2-01 equiv) gives the required 8-impression MIL crimp for 38941-22 / 8599-0702-900 contacts. The HDT-48-00 does NOT support size-22 contacts. Source: [crimptech.com.au/autosport-tooling-guide](https://www.crimptech.com.au/autosport-tooling-guide-for-te-deutsch-connectors/) |
| Deutsch HDT-48-00 or JRready NEW-DT2 | ~$350–465 / ~$169 budget | **Maven HD30 size-16/20 contacts and DT 2-pin bypass connectors only** — not for AS79 size-22 contacts |
| Brady M210 + PermaSleeve M21-125-C-342 | Wire labels — 22–16 AWG | Print wire designators on both ends of every wire before looming |
| Brady M210 + PermaSleeve M21-375-C-342 | Sub-loom breakout labels | Slide over 1/4" sub-loom at each breakout before Techflex goes on. Print: `INJECTORS`, `COILS`, `SENSORS`, `TRIGGER`, `KNOCK` |
| Brady M210 + PermaSleeve M21-500-C-342 | Main trunk label | Slide over main trunk at AS79 exit. Print: `ENGINE M52 PH1` or `ENGINE 07K PH3` |

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

| Signal | ME7.1.1 Connector Pin | MaxxECU | Notes |
| --- | --- | --- | --- |
| Crank VR+ (60-2 missing tooth) | Conn B — **pin 82** | CMC H3 — TRIGGER (VR+) | Passive VR, N-1 / 60-2 trigger type. Shielded twisted pair, own sleeve. `3B0973703G` housing — label CRANK. |
| Crank VR− | Conn B — **pin 82** (−) | CMC H2 — Trigger GND (VR−) | Same shielded cable — shield to Sensor GND (CMC H1) |
| Cam Hall signal | **pin 86** | CMC H4 — HOME (cam Hall) | Hall effect, +5V supply type. `3B0973703G` housing — label CAM. +5V from shared sensor rail. |

### Injectors (5-cylinder — firing order 1-2-4-5-3)

| Cylinder | ME7.1.1 Pin | MaxxECU CMC |
| --- | --- | --- |
| INJ 1 | **pin 96** | K1 |
| INJ 2 | **pin 97** | K2 |
| INJ 3 | **pin 112** | M1 |
| INJ 4 | **pin 88** | M2 |
| INJ 5 | **pin 89** | M3 |

Connector: Bosch EV14 2-pin (USCAR). The MaxxECU M50 terminated harness ships with EV1 connector ends — replace with EV14 pigtail ends for the 07K ID1050x injectors.

### Ignition coils (5-cylinder — firing order 1-2-4-5-3)

| Cylinder | ME7.1.1 Pin | MaxxECU CMC |
| --- | --- | --- |
| IGN 1 | **pin 102** | A2 |
| IGN 2 | **pin 103** | A3 |
| IGN 3 | **pin 111** | B2 |
| IGN 4 | **pin 94** | B3 |
| IGN 5 | **pin 95** | C2 |

Connector: VAG 4-pin COP (OE# `4B0973724`).

### Sensors

| Signal | ME7.1.1 Pin | MaxxECU CMC | Notes |
| --- | --- | --- | --- |
| Knock sensor 1 | **pin 106** | K3 (DIN/VR1, CMC pin 39) | Bosch flat 1-pin, M8 bolt mount; GND via bolt. AS79 pin 43. Shielded 22 AWG STP; drain → AS79 pin 45 → CMC H1. |
| Knock sensor 2 | **pin 107** | K4 (DIN/VR2, CMC pin 40) | Same. AS79 pin 44; shield drain shared via pin 45. |
| MAP sensor | **pin 101** | AIN 4 | 3-bar Bosch (GM 12592525). +5V/Signal/GND — `W_MAP` cable. |
| ECT (coolant temp) | **pin 93** | F1 — CLT (CMC pin 13) | 2-pin NTC (`1J0973702`). Cylinder 1 side, exhaust face. Sleeve first 150 mm from sensor with DEI Fire Sleeve 3/8" ID — adjacent to exhaust manifold. |
| IAT (intake air temp) | — | F2 — IAT | 2-pin NTC; mount downstream of intercooler in intake pipe. |

### DBW throttle body (DBW path only — see `25-07k-air.md`)

| Signal | ME7.1.1 Pin | MaxxECU | Notes |
| --- | --- | --- | --- |
| TB Motor+ | **pin 84** | C2 H4 (MOTOR 1+) | **22 AWG** (size-22D contact accepts 22–26 AWG only; 3A peak, 0.5 m run — 22 AWG adequate). AS79 pin 22 (cabin side only; 07K plug only). Verify polarity at install — swap Motor+/− at TB connector only if TB runs backward in e-throttle wizard. |
| TB Motor− | **pin 92** | C2 H2 (MOTOR 1−) | Same. 22 AWG. AS79 pin 23. Do NOT use GPO 3 or GPO 4 for motor drive. |
| TPS1 signal | **pin 117** | CMC G2 (pin 26) / AS79 pin 48 | — |
| TPS2 signal | **pin 118** | CMC J2 / AIN 2 (pin 34) / AS79 pin 56 | — |

### Accelerator pedal (DBW path — APS 1 + APS 2, cabin-to-cabin via HD30 Connector A)

| Signal | ME7.1.1 Ref Pin | MaxxECU | HD30 A pin | Notes |
| --- | --- | --- | --- | --- |
| APS 1 GND | **pin 72** | CMC H1 (Sensor GND) | A14 | Pedal → HD30 A cabin face → MaxxECU |
| APS 2 GND | **pin 73** | CMC H1 (Sensor GND) | A15 | — |
| APS 2 VCC | — | CMC G1 (+5V rail) | A16 | — |
| APS 1 signal | **pin 35** | C2 E4 (AIN 6) | A17 | — |
| APS 1 VCC | — | CMC G1 (+5V rail) | A18 | — |
| APS 2 signal | **pin 34** | C2 F1 (AIN 7) | A19 | — |

APS is **cabin-to-cabin** — no signal crosses to the engine side. The 6-wire shielded cable runs from the pedal
(footwell) to the **Maven HD30 Connector A cabin face (pins A14–A19)**, which acts as a junction block. A
second short cable runs from the same pins to MaxxECU C2. AS79 pins 72–77 are not used for APS; they remain
spare. Source: `harnesses/firewall-bulkhead-dual.wv`, `harnesses/epedal-bmw-e46.wv`.

### VVT cam actuator solenoid

| Signal | ME7.1.1 Pin | MaxxECU | Notes |
| --- | --- | --- | --- |
| VVT solenoid output | **pin 115** | GPO 3 (CMC D4, pin 16) / AS79 pin 35 | GPO 3 is freed from M52 VANOS and immediately reused for 07K VVT. +12V from coil/inj relay. Flyback diode at solenoid connector (1N4007, cathode to +12V). See `maxxecu-07k.wv` VVT_SOL connector notes. |

---

## Firewall Bulkhead Connector

Use a **Deutsch Autosport AS series** (or Souriau 8STA) flanged bulkhead receptacle:

- **47-way** covers full 07K signal count
- **79-way** provides sensor expansion margin — recommended for this build

The engine mating plug (engine side) is swapped at Phase 3: M52 plug out, 07K plug in. Cabin side is permanent — cabin wiring is unchanged at engine swap.

**Bulkhead architecture — hybrid (AS79 engine + Maven HD30 35-pin accessories):**

Two separate connectors. Engine-side AS79 mating plug swaps at M52→07K. Maven 35-pin never disconnected.

**AS79 engine connector — sector-optimized layout (see `firewall-bulkhead.wv`):**

**Legend:**
- **Sector** = 90° arc of the connector face (pin 1 at 12 o'clock, clockwise)
- **R1** = outermost ring (28 pins, r ≈ 0.43″) · **R2** = second ring (22 pins) · **R3** = third ring · **Ctr** = center triangle (3 pins)
- 🔴 S1 · 🟠 S2 · 🔵 S3 · 🟢 S4 — used consistently in the pin table below *(diagram grouping only — unrelated to wire insulation color)*

| | Sector | Arcs | Signals |
| --- | --- | --- | --- |
| 🔴 | S1 — Power + IGN | 12→3 o'clock | Engine power rails; all 6 ignition outputs (R1 + R2) |
| 🟠 | S2 — INJ + actuators | 3→6 o'clock | All 6 injector outputs; VANOS/ICV; Starter; Alt D+ |
| 🔵 | S3 — Triggers + knock | 6→9 o'clock | Crank/cam triggers; 07K knock sensors — **maximum angular separation from IGN** |
| 🟢 | S4 — Sensors | 9→12 o'clock | CLT, IAT, TPS, MAP, PST-F1, Flex fuel, DBW TB (07K) |
| ⚫ | Center pin 79 | — | Sensor GND (CMC H1) — innermost cavity, per HPA convention |

**AS79 pin assignments (07K Phase 3 — stubs cavity-plugged on M52 plug):**

| | AS79 pins | Signal | AWG | Notes |
| --- | --- | --- | --- | --- |
| 🔴 | 1, 2, 29, 30 | +12V Coils/Inj ×4 parallel | 22 | 4×5A = 20A; Option A: bypass separately |
| 🔴 | 3, 31, 52 | Engine GND ×3 parallel | 22 | 3×5A = 15A; Option A: bypass separately |
| 🔴 | 4, 5, 6, 7 | IGN 1, 2, 3, 4 | 22 | R1 outer ring — 22 AWG max (size-22 contacts; 18 AWG incompatible) |
| 🔴 | 32, 33 | IGN 5, IGN 6 | 22 | R2; IGN 6 M52 only, cavity-plugged at 07K |
| 🔴 | 34 | EXP: IGN 7 (07K 5th cyl) | 22 | R2; cavity-plugged on M52 |
| 🟠 | 8–12 | INJ 1–5 | 20 | R1 outer ring |
| 🟠 | 13 | INJ 6 | 20 | R1; M52 only, cavity-plugged at 07K |
| 🟠 | 14 | EXP: INJ 7 (07K 5th cyl) | 20 | R1; cavity-plugged on M52 |
| 🟠 | 35 | GPO 3 → VVT solenoid (07K) / VANOS (M52) | 20 | R2 |
| 🟠 | 36, 37 | GPO 4 (ICV-A M52 / SPARE 07K), GPO 5 (ICV-B M52) | 20 | R2 |
| 🟠 | 38, 39 | Starter trigger, Alt D+ | 22 | R2 |
| 🔵 | 16, 17, 18 | Crank VR+, VR−, shield drain | 22 shld | R1; shielded twisted pair — same pins M52 and 07K, only engine-side connector body changes |
| 🔵 | 19 | Cam Hall signal | 22 | R1; same pin M52 and 07K — engine-side connector body changes only. 07K cam is Hall +5V supply type. |
| 🔵 | 20, 41 | SPARE (07K cam and crank reuse pins 19 and 16/17/18) | — | Cavity-plugged on both M52 and 07K |
| 🔵 | 43, 44, 45 | Knock 1, Knock 2, Knock shield drain | 22 shld | R2; 07K only, shielded STP; drain both sensors shared via pin 45 → CMC H1 |
| 🟢 | 22, 23 | ETh Motor+, ETh Motor− | 22 | R1; 07K only (→ C2 H4/H2). Cavity-plugged on M52. AS79 size-22D contacts accept 22–26 AWG only — cannot accept 20 AWG. |
| 🟢 | 25, 26 | CLT, IAT | 22 | R1 |
| 🟢 | 27 | Flex fuel +12V | 22 | R1 |
| 🟢 | 47, 48, 49 | +5V sensor, TPS1 (DBW or M52 TPS), MAP | 22 | R2 |
| 🟢 | 50, 51 | PST-F1 pressure, PST-F1 temp | 22 | R2/R3; routed as individual wires separate from main loom (see cable notes) |
| 🟢 | 64 | Flex fuel signal | 22 | R3 |
| ⚫ | 79 | Sensor GND (CMC H1) | 22 | Center pin |

**Maven HD30 35-pin accessories connector — pin assignments (see `firewall-bulkhead-dual.wv` Connector A):**

| Pin | Signal | Contact size / notes |
| --- | --- | --- |
| A1 → phys pos 4 | +12V 8HP Main (constant) | Size-16 (13A) |
| A2 | +12V 8HP Wakeup (IGN) | Size-20 |
| A3 → phys pos 7 | 8HP TCU GND | Size-16 (13A) — largest cavity, 12 o'clock |
| A4–A5 | CAN H / CAN L | Size-20, twisted pair |
| A6 | EWP PWM (GPO) | Size-20 |
| A7 | AC enable (GPO) | Size-20 |
| A8 → phys pos 12 | Chassis GND engine bay | Size-16 (13A) |
| A9–A13 | WBO2 (VS/VREF/IP/RCAL/Heater−) | Size-20 |
| A14–A19 | APS e-pedal (Phase 3) | Size-20; cavity-plugged Phase 1 |
| A20 | GPO 1 → Boost solenoid | Size-20 |
| A21–A35 | Spare | — |

> ⚠️ **High-current relay outputs bypass both connectors:** +12V Fan, +12V Condenser fan, +12V EWP (CWA400 36.3A max), and +12V AC relay out each route through a Deutsch DT 2-pin connector via a separate firewall grommet. The HD30 24-35 max contact is size-16 (13A) — insufficient for relay outputs.

---

## Procedure

> **Reference throughout:** [`e36-wiring/docs/harness-build.md`](../../e36-wiring/docs/harness-build.md) — full harness architecture, sub-loom groupings, splice types, build sequence, labeling procedure, and bench test checklist. This walkthrough covers the 07K-specific signal assignments; `harness-build.md` covers the physical construction methodology.

### Phase A — Before any wire is cut

#### A1 — Confirm signal mapping and order pigtails first

All pigtail connectors (injector, coil, sensor, knock) must be on-hand before harness build starts. See Parts table above. You cannot complete the harness without them — the sub-loom ends terminate at the splice point; the pigtail bridges to the component.

> ⚠️ **CRITICAL — `3B0973703G` cam/crank labeling:** Both sensors use the identical housing with opposite pinouts. Label pigtails `CAM` and `CRANK` on the wire before snapping the connector body on. Swapping them = no-start with no obvious indicator.

#### A2 — Dry-route the engine and measure wire lengths

With the 07K engine on a stand in its intended longitudinal orientation, route a tape/rope mock-up of the main trunk path from the AS79 firewall position along the engine. Identify sub-loom breakout points for each component group. Measure each wire's required length (AS79 pin → splice point → component). Add 10% slack. Record all measurements.

**M52 sub-loom reuse check (do at this step):** Lay the M52 mating plug harness alongside the 07K engine in position. Check each sub-loom branch:
- **Can reuse with pigtail swap only** (connector body changes, same routing): crank VR, cam Hall, MAP, Starter, Alt D+, flex fuel, most sensor runs
- **Needs extension or reroute**: CLT moves to cylinder-1 side exhaust face on 07K (opposite end of block from M52 front CLT position); knock sensors are new (07K expansion pins 43/44); VVT solenoid is new
- **Discard**: INJ 6, IGN 6 (6th cylinder positions unused on 5-cyl 07K)

This assessment resolves at this step — it cannot be done accurately without the 07K engine in position.

#### A3 — Loom discipline — plan sub-looms before cutting

Every signal belongs to exactly one sub-loom. Decide before cutting any wire.

| Sub-loom label | Contents | Route |
| --- | --- | --- |
| `INJECTORS` | INJ 1–5 signal wires + shared +12V Coils/Inj rail stubs | Along injector rail |
| `COILS` | IGN 1–5 signal wires + shared +12V Coils/Inj rail stubs | Along valve cover rail |
| `TRIGGER` | Crank VR+, VR−, shield drain; Cam Hall signal — **shielded twisted pair, own sleeve, physically away from all others** | Front of engine to sensor positions |
| `SENSORS` | CLT, IAT, MAP, TPS, +5V sensor, Sensor GND | Around intake manifold |
| `KNOCK` | KS1, KS2, Knock GND — shielded, 07K only | Below intake manifold |

High-current feeds (fuel pump, fan, EWP) are **never** in the ECU signal loom — dedicated circuits back to PMU16.

---

### Phase B — Bench build

#### B1 — Cut, label, and crimp

1. Cut all wires to measured length
2. Before crimping any terminal: slide a Brady PermaSleeve label sleeve onto each wire — the sleeve cannot pass through a terminal body after crimping
3. Crimp AS79 engine-side contact: **Daniels AFM8 + K42 positioner** for pin contacts (size-22, 22–26 AWG) — K40 for socket contacts. Source: m-cal.com AS020-35SN ("Primary Contacts Size: 22 AWG"). NOT K43 (size-20 positioner).
4. Verify with pull-test before insertion
5. Insert into AS79 engine-side mating plug body; verify seating click

> **Label content:** AS79 pin number + signal name on both ends. Example: wire in pin 8 gets label `8 INJ1` at the AS79 end and `8 INJ1` at the loose engine-side end.

#### B2 — Prep pigtails before splicing

For each pigtail (before snapping the connector body on):
1. Slide a PermaSleeve label sleeve onto the pigtail wire near the connector end
2. Print and apply the label: signal + cylinder (e.g., `INJ1`, `INJ2`, ... `COL1`, `CAM`, `CRANK`)
3. Snap the connector body on — the label is now permanently positioned just behind the connector

For identical connectors (6 injectors, 5 coils, 3-pin VAG sensors): this label is what you look at with your hands inside the engine bay to grab the right connector. If you skip it, you will swap them.

---

### Phase C — Route, splice, and test

#### C1 — Route the main trunk

Lay the fully-crimped main trunk along the engine with the AS79 mating plug at the firewall position and all wire ends at their branch points. Confirm lengths reach all components with slack. Trim or extend now — not after sleeving.

#### C2 — Splice pigtails

At each branch point:
1. Cut the main harness wire to its final length
2. Label the cut end (PermaSleeve: signal name within 20mm of the splice point)
3. Join to pigtail bare end with a **Raychem SRGB solder sleeve** (heat gun, not iron) or non-insulated butt crimp + adhesive heat-shrink
4. The pigtail connector body snaps onto the component at install time

> ⚠️ **Do not solder with an iron.** Iron solder creates a rigid joint at the flex point. Under engine vibration, the wire cracks at the insulation boundary — the break is invisible inside heat-shrink. Raychem sleeves fully encapsulate the joint and the sleeving provides strain relief.

#### C3 — Bench continuity test — mandatory before sleeving

With the harness fully wired but completely **un-sleeved**, verify against the `.wv` file:

- [ ] Continuity: every signal wire ECU pin → sensor pigtail connector pin
- [ ] No shorts between adjacent pins (especially power to sensor GND)
- [ ] Shield drain: terminates at Sensor GND (CMC H1 / AS79 pin 79), not chassis GND
- [ ] Pull-test: every terminal in the AS79 mating plug survives a firm hand tug

**Do not sleeve until all checks pass.** Techflex expandable braid makes depinning destructive. Fix any fault before sleeving.

Photograph all pigtail connectors against the engine at this stage — before sleeving, every wire is visible and traceable. This photograph is your reference for any future debugging.

---

### Phase D — Sleeve and install

#### D1 — Sleeve

1. Apply sub-loom breakout PermaSleeve labels *before* Techflex goes on each sub-loom (the label slides over the bare sub-loom wires, then Techflex goes over the label)
2. Sleeve sub-looms with 1/4" Techflex F6
3. Sleeve main trunk with 1/2" Techflex F6
4. Secure all breakout transitions with 3:1 adhesive-lined heat-shrink boots
5. Apply main trunk PermaSleeve label at AS79 exit

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
> - **DBW path:** Wire TB Motor+/−/TPS1/TPS2 to MaxxECU e-throttle H-bridge pins. The E46 APS pedal runs separately through the Maven HD30 35-pin bulkhead connector (pins A14–A19 reserved in Phase 1). Both pedal and TB use dual-track sensors — wire both tracks to separate MaxxECU analog inputs.
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

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

| Part | Notes |
| --- | --- |
| Shielded twisted pair (crank and cam signal runs) | Crank and cam triggers are the most noise-sensitive wires in the system — shielded, own sleeve, physically away from injector and coil primaries. MaxxECU confirms this. |
| 16–18 AWG wire (injectors, coils, sensors) | — |
| 20 AWG minimum (DBW TB motor wires) | H-bridge output; verify polarity before final assembly |
| 24 AWG (APS pedal runs through bulkhead) | — |
| Expandable braid or split-loom conduit | — |
| Deutsch HDT-48-00 solid barrel crimper | [deutschconnector.com](https://www.deutschconnector.com/products/deutsch_connector_tools/deutsch_connector_crimp_tools/HDT-48-00/) ~$350–465. Required for Deutsch AS79 size-20 solid contacts. Budget alternative: JRready NEW-DT2 ~$169. Cannot substitute a generic open-barrel die. |
| Brady M210 + PermaSleeve label cartridge | [Amazon](https://a.co/d/3qZ8sAa) — print wire designators on both ends of every wire before looming |

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
| Knock sensor 1 | **pin 106** | K3 (DIN/VR1) | Bosch flat 1-pin, M8 bolt mount; GND via bolt — no GND wire. Bulkhead expansion pin 69. |
| Knock sensor 2 | **pin 107** | K4 (DIN/VR2) | Same; bulkhead expansion pin 70. |
| MAP sensor | **pin 101** | AIN 4 | 3-bar Bosch (GM 12592525). +5V/Signal/GND — `W_MAP` cable. |
| ECT (coolant temp) | **pin 93** | F1 — CLT | 2-pin NTC (`1J0973702`). Cylinder 1 side, exhaust face. Route with heat sleeving. |
| IAT (intake air temp) | — | F2 — IAT | 2-pin NTC; mount downstream of intercooler in intake pipe. |

### DBW throttle body (DBW path only — see `25-07k-air.md`)

| Signal | ME7.1.1 Pin | MaxxECU | Notes |
| --- | --- | --- | --- |
| TB Motor+ | **pin 84** | GPO 3 (ETh Motor+) — CMC D4 | 20 AWG min. Verify polarity at install — swap Motor+/− if TB runs backward in e-throttle wizard. |
| TB Motor− | **pin 92** | GPO 4 (ETh Motor−) — CMC E4 | Same |
| TPS1 signal | **pin 117** | CMC G2 / bulkhead pin 31 | — |
| TPS2 signal | **pin 118** | CMC J2 / bulkhead pin 51 | — |

### Accelerator pedal (DBW path — APS 1 + APS 2, runs through cabin bulkhead)

| Signal | ME7.1.1 Ref Pin | MaxxECU | Notes |
| --- | --- | --- | --- |
| APS 1 signal | **pin 35** | CMC APS1 AIN | E46 pedal → bulkhead cabin pins 75 → engine side |
| APS 1 GND | **pin 72** | Sensor GND | Bulkhead cabin pin 72 |
| APS 2 signal | **pin 34** | CMC APS2 AIN | Bulkhead cabin pin 77 |
| APS 2 GND | **pin 73** | Sensor GND | Bulkhead cabin pin 73 |

Separate 6-wire shielded run from E46 pedal module → firewall bulkhead cabin face (pins 72–77 reserved in Phase 1). Not part of the engine-side harness loom.

### VVT cam actuator solenoid

| Signal | ME7.1.1 Pin | MaxxECU | Notes |
| --- | --- | --- | --- |
| VVT solenoid output | **pin 115** | GPO — freed from M52 VANOS | Confirm final GPO assignment in MTune before harness build. See `maxxecu-07k.wv` for current GPO allocation — ETh paths also use freed GPO outputs; confirm no conflict before wiring. |

---

## Firewall Bulkhead Connector

Use a **Deutsch Autosport AS series** (or Souriau 8STA) flanged bulkhead receptacle:

- **47-way** covers full 07K signal count
- **79-way** provides sensor expansion margin — recommended for this build

The engine mating plug (engine side) is swapped at Phase 3: M52 plug out, 07K plug in. Cabin side is permanent — cabin wiring is unchanged at engine swap.

**Bulkhead pin group allocation (07K Phase 3 reference — see `maxxecu-07k.wv` for full map):**

| Group | Pins | Content |
| --- | --- | --- |
| A — Power | 1–9 | +12V rails (coils/inj, 8HP, EWP, fan, AC), Engine GND, 8HP GND |
| B — Ignition | 10–15 | IGN 1–5 (pin 15 cavity-plugged — 5-cyl) |
| C — Injectors | 16–21 | INJ 1–5 (pin 21 cavity-plugged — 5-cyl) |
| D — Crank/Cam | 22–26 | Crank VR+/−/shield; Cam Hall signal |
| E — Sensor signals | 27–36 | Sensor GND; CLT; IAT; +5V; DBW TPS1; MAP; PST-F1 pressure/temp; Flex fuel |
| F — WBO2 | 37–41 | LSU 4.9 wideband (VS/VREF/IP/RCAL/Heater−) |
| G — GPO actuators | 42–46 | GPO 1 (boost); GPO 3 (ETh Mot+); GPO 4 (ETh Mot−); spare; EWP PWM |
| H — CAN | 47–48 | CAN H / CAN L (22 AWG twisted pair) |
| N — Expansion | 54–71 | Knock 1/2 signals; DBW TPS2; MAP2; misc spares |
| APS (added Phase 3) | 72–77 | APS GND1/GND2; APS VCC2; APS1 signal; APS VCC1; APS2 signal |

---

## Procedure

### 1 — Plan the harness before cutting any wire

Route the completed harness dry against the installed 07K engine (on stand) before final sleeving. Confirm connector reach, correct lengths, and clearance from exhaust headers and moving parts. **Sleeve only after routing is confirmed.**

### 2 — Loom discipline — apply before sleeving

| Bundle | Rule |
| --- | --- |
| Crank and cam triggers | **Most noise-sensitive.** Shielded twisted pair, own sleeve, physically away from injector drives and coil primaries at all points |
| Injector sub-loom | Separate sleeve from sensor sub-loom (same routing direction, different wrap) |
| Coil primary sub-loom | Separate sleeve from injector sub-loom |
| Sensor input sub-loom (CLT, IAT, MAP, knock, PST-F1) | Own sleeve |
| Wideband O2 signal wire | Shielded, own run, away from coil primaries and injector wires |
| High-current feeds (fuel pump, fan) | Never bundled inside ECU signal loom — own dedicated circuit back to PMU16 |
| CAN bus (8HP) | Twisted pair inside sleeve at all times; MaxxECU CAN port → 8HP TCU connector, nothing else shares that sleeve |

### 3 — Wire all key signals per the mapping table above

Build connector by connector. Label every pigtail with a Brady M210 + PermaSleeve sleeve on both ends before inserting into loom.

> ⚠️ **Pitfall:** Build and bench-test this harness before swap day. Label every connector. Photograph the completed harness against the 07K engine before it goes in the car. A miswired sensor on swap day adds hours to a stressful job.

> ⚠️ **Throttle wiring depends on path chosen in `25-07k-air.md`:**
> - **DBW path:** Wire TB Motor+/−/TPS1/TPS2 to MaxxECU e-throttle H-bridge pins. The E46 APS pedal runs separately through the bulkhead (6 pins reserved in Phase 1). Both pedal and TB use dual-track sensors — wire both tracks to separate MaxxECU analog inputs.
> - **Cable path:** No DBW motor wiring needed. Include TPS1/TPS2 signal wires for MaxxECU throttle position reading. No APS pedal harness needed.

### 4 — Bench test before sleeving

With harness built but unloomed, bench-test on the engine stand:
- Verify continuity on every signal pair (sensor pin to ECU pin)
- Verify no shorts between adjacent pins
- Check shield termination (sensor GND, not chassis GND)
- Photograph all connectors against engine before sleeving

### 5 — Alternator excite wire

Plan a dedicated wire from the body harness to the alternator D+ (excite) terminal. The 07K alternator (`07K903023A`, OEM, 140A; reman `06F903023FX` / `07K903023AX`) will self-excite above ~1,500 RPM via the voltage regulator, but correct D+ wiring ensures reliable cold-start charging from the first start.

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

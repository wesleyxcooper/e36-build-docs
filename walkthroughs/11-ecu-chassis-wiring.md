# ECU & Chassis Wiring — M5x Phase

**Phase:** 1  
**System tags:** `[ECU]` `[ELECTRICAL]`  
**Shop-mandatory:** No (full DIY — allow multiple days for X20 connector alone)  
**Prerequisites:** Interior stripped (rear seats, carpet, trunk interior removed). All harness connector positions photographed before touching anything. This section must be complete and M52 running on MaxxECU **before** the 8HP swap begins — see `07-8hp-swap.md`.

> **Staging note:** MaxxECU on M52 first. Install ECU, resolve EWS2 bypass, wire the relay board, connect the M50 harness, wire X20, and get the M52 running on MaxxECU with the Getrag still in place. Tune the M52. Then proceed to 8HP swap. This isolates troubleshooting: ECU issues surface on the stock drivetrain; 8HP issues surface on a known-good ECU.

> **07K-phase wiring deferred:** The Ecumaster PMU16, Deutsch Autosport AS79 firewall connector, and Maven HD30 35-pin accessories connector are all 07K-phase build items. They are not needed to run the M52. See `34-ecu-harness-final.md` for those when the time comes.

---

## Parts

| Part | PN / Source | Cost |
| --- | --- | --- |
| MaxxECU Race (M50 terminated harness bundle) | [Seems Legit Garage MaxxECU M50 Bundle](https://www.seemslegitgarage.com/product-page/maxxecu-m50-harness) | $2,912 |
| EWS2 bypass / delete emulator module | BMW ECU tuning vendors — confirm current preferred method with MaxxECU community before ordering | — |
| M52 cam sensor — BMW PN `12141726590` (non-VANOS type, plug-and-play with M50 harness) | BMW dealer / FCP Euro | — |
| Bosch LSU 4.2 Wideband O2 Sensor | [Modern Racing LSU 4.2](https://modernracing.net/products/wb-o2-sensor) | $69.00 |
| ISO mini relay × 3 (fuel pump, fan, AC — see relay board section) | Bosch `0 332 209 150` or equivalent | ~$5 ea |
| Relay fuse/socket block (3–4 relay positions with integrated fusing) | WAGO, Narva, or Bussmann — choose a block with ATC blade fuse slots per relay | ~$20–40 |
| 1N4007 flyback diodes (×5 min: VANOS, ICV A, ICV B, fuel pump relay, fan relay) | Electronics supply | ~$2 |
| 18mm×1.5 O2 bung (for exhaust — weld-in, shop step) | Exhaust supply | — |
| Brady M210 printer + M21-125-C-342 PermaSleeve cartridge (22–16 AWG signals) | [Amazon starter bundle](https://a.co/d/3qZ8sAa) | ~$130 |

---

## Tools

- Standard open-barrel crimper (for Bosch JPT, JPT 2-way, Superseal, and relay terminals)
- Wire stripper, flush cutters (Milwaukee 48-22-6106 or equiv)
- Multimeter (continuity, voltage, and resistance at every stage)
- Brady M210 label printer (label relay wiring and any added cabin runs before routing)
- Heat gun (PermaSleeve labels)

---

## Procedure

### Step 1 — MaxxECU Mounting

**The MaxxECU Race must be mounted inside the cabin — it is not waterproof.** Per MaxxECU quickstart guide: "STREET/SPORT/RACE units must be mounted inside the vehicle (not waterproofed)." The MINI, RACE H2O, and PRO variants can go in the engine bay; the Race cannot. Source: [MaxxECU Quickstart Guide](https://www.maxxecu.com/files/Documentation/Manuals/MaxxECU%20Quickstart%20Guide%20(MINI-STREET-SPORT-RACE-PRO)-en.pdf).

**Do not use the OEM E36 DME compartment.** The OEM DME is in the engine bay — a sealed compartment on the passenger-side firewall accessible from under the rubber pad, not from inside the car. It is not a cabin location. It is also prone to water ingress from the HVAC plenum cowl (BMW service bulletin 41 03 93, July 1994). Mounting a $2,900+ ECU there is not acceptable.

**Correct location — RHD build:** Mount on the **left (passenger-side) cabin firewall panel**, in the passenger footwell area. This is the same side as:
- The OEM engine harness grommet (where the M50 harness exits into the engine bay)
- The AS79 + Maven HD30 bulkhead connectors installed at Phase 3
- The intake side of both the M52 and 07K engines

This location keeps the C1/C2 connections short to the bulkhead, puts the USB port accessible for MTune sessions without opening the hood, and keeps C2 (virtual clutch, APS, wideband) within arm's reach of the pedal box.

**Harness grommet:** The OEM E36 engine harness grommet on the left firewall is already large enough for the M50 terminated harness bundle — no new hole required. The MaxxECU M50 harness docs generically say "drill a 54mm hole" but that is for vehicles without a suitable existing grommet. Do not drill; use the OEM grommet. Plan the ECU mounting position so the harness reaches the grommet without excessive slack or strain.

Follow the MaxxECU GEN2 RACE quick-start guide for mounting orientation (connector-face direction, vibration isolation).

### Step 2 — EWS2 Bypass

**Required before MaxxECU will start the M52.**  
The E36 M52 (OBD2, 1996+) has the EWS2 immobilizer. The stock MS41/MS42 ECU handshakes with the EWS2 module via a dedicated wire to authorize fuel and ignition. MaxxECU has no EWS protocol — without bypass, the car cranks normally but will not fire (no injector or spark release). This is not a MaxxECU quirk — any replacement ECU (TurboLamik, MegaSquirt, etc.) faces identical EWS2 incompatibility.

- **Option A (preferred):** EWS delete/emulator module — sits in the EWS signal path and continuously returns the authorized signal. Clean, reversible, no harness modification. Source from BMW ECU tuning vendors.  
- **Option B:** Hard-wire bypass at ECU connector — permanently provides the authorized state. Irreversible on that harness, but fully functional. Reference: [Falk MFG EWS2 bypass](https://falkmfg.com/blogs/news/how-to-bypass-ews2-for-e36-bmw).  

Research the current preferred method with the MaxxECU community or SLG/MaxxECU support before ordering, as specifics vary by EWS version and harness revision.

> ⚠️ **Pitfall:** EWS2 bypass is not optional. Confirm the bypass method before the first start attempt. The car will crank indefinitely without it — this is the most common MaxxECU M52 no-start cause.

### Step 3 — M52 Cam Sensor Adapter

**Resolve M52 VANOS cam sensor connector before connecting harness.**  
The MaxxECU M50 terminated harness is built for the non-VANOS M50 cam sensor connector. The M52 VANOS head uses a **different connector**.

- **Option A (recommended):** Swap sensor to BMW PN `12141726590` — direct fit to M50 harness connector. No harness modification.  
- **Option B:** Add adapter pigtail between M52 sensor and M50 harness connector.  

Without this: no cam/home signal → MaxxECU cannot resolve firing order → no-start. Confirm before first start attempt.

### Step 4 — Simple Relay Board

The M5x phase uses three ISO mini relays on a small fused relay block. No PMU16 needed here — that's a 07K-phase item (see `34-ecu-harness-final.md`).

**Relay block layout:**

| Relay | Function | Coil − (pin 85) | Coil + (pin 86) | Load (pin 87) |
| --- | --- | --- | --- | --- |
| R1 | Fuel pump | MaxxECU GPO 2 — CMC pin C4 (pin 12), via ECU_12PIN breakout pin 3 | +12V IGN from OEM body harness IGN relay — pre-existing, unchanged | → Fuel pump, 12 AWG |
| R2 | Radiator fan | MaxxECU GPO 6 — CMC pin B1 (pin 5), via ECU_16PIN breakout pin 6 | +12V IGN — same as above | → SPAL fan, 12 AWG |
| R3 | AC (if keeping belt-driven compressor) | MaxxECU GPO output — assign as needed | +12V IGN | → AC compressor clutch relay coil |

All relay coil pin 86 feeds (+12V IGN) can tap the OEM ignition relay output that already exists in the E36 body harness — no new wiring to the ignition switch. The MaxxECU GPO pins only switch the low side (pin 85 to GND when active).

**Flyback diode on every relay coil:** 1N4007, cathode (banded end) to pin 86 (+12V), anode to pin 85 (GPO output). Prevents voltage spike back into the ECU output when the coil de-energizes. Also required on VANOS and ICV coils — see M50 harness notes.

**Fan relay additional wiring:** Wire the OEM E36 thermostat switch (already on the engine) in parallel with GPO 6 on pin 85. This gives Stage 1 (thermostat-only) fan control as a fallback if the ECU output fails, and means the fan works even before MaxxECU is fully mapped.

> ⚠️ **Do not use the GPO output to drive high-current loads directly.** GPO pins are low-side switches, rated ~1–2A for relay coils only. Fan, fuel pump, and AC compressor power all route through the relay load contacts (pin 87 → component), never through the ECU.

**Mounting:** Mount the relay block near the fuse box in the engine bay or on the inner fender. Keep relay coil wiring (thin, ECU signal side) physically separate from relay load wiring (thick, fuel pump / fan power side) — no bundling together.

**Optional — EWP:**  
If replacing the mechanical water pump with a Davies Craig EWP at this stage, use the Davies Craig standalone digital controller (EWP Digital Controller Kit). It reads CLT and operates the pump autonomously — no ECU integration required for M5x phase. No additional relay or PMU16 needed. EWP power (10–12A) runs on its own fused circuit from the battery.

### Step 5 — M50 Harness Installation

The MaxxECU M50 terminated harness handles all engine-side connections. There is no custom bulkhead connector for the M5x phase.

**Firewall grommet:** The harness exits through the **OEM engine harness grommet on the LEFT side of the firewall** — passenger side, intake side of the engine in RHD. The exhaust exits on the right (driver's) side; keeping the harness grommet on the intake/left side maximizes heat separation. The OEM grommet already fits the M50 harness bundle — no drilling or new grommets required.

Route the harness from the ECU mounting point, through the grommet, and into the engine bay on the intake/left side. From there it fans out to each component per the M50 harness connector map.

**Engine bay routing disciplines** (from `maxxecu-m52.wv`):
- Loom together in separate Techflex sleeves: (1) engine sensors — CLT, IAT, TPS, MAP; (2) injectors; (3) coil primaries. Sensor sub-loom and injector/coil sub-looms share the same backbone route but must be in separate sleeves.
- Keep separate: crank and cam trigger wires — shielded, own sleeve, physically routed away from injector drives and coil primaries. The M50 harness already does this; do not unsheath or re-loom alongside anything else.
- Keep separate: wideband O2 signal — shielded, own run, away from coil primaries.
- Keep separate: high-current feeds — fuel pump, fan, AC — each on its own dedicated circuit back to the relay block.

**07K-phase note:** When the 07K swap happens, the M50 harness is removed and a fully custom harness with Deutsch Autosport AS79 (engine connector) and Maven HD30 35-pin (accessories) replaces it. See `34-ecu-harness-final.md` and `e36-wiring/docs/harness-build.md`.

### Step 6 — Ground Straps

Per MaxxECU GEN2 RACE quick-start guide:
1. Battery negative → chassis stud
2. Engine block → chassis via factory M52 bonding strap — keep it, verify it is clean (no paint under lug, star washer, tight nut)
3. **MaxxECU ENGINE GND pin → cylinder head** — MaxxECU's own mandatory requirement, not optional

ECU sensor GND pins are NOT chassis or engine ground — they connect only to sensors returning signals to the ECU. Never share sensor GND with chassis GND at the component.

### Step 7 — X20 Chassis Connector

Wire MaxxECU to the E36 chassis X20 bulkhead connector per `body-x20.wv`. The X20 is the 25-pin firewall connector between the E36 body harness (cabin) and the engine bay. MaxxECU outputs drive the signals the body expects from the OEM ECU.

**X20 pin assignments — Phase 1:**

| X20 pin | Wire color | Signal | Action |
| --- | --- | --- | --- |
| Pin 10 | BL/GE | Reverse light switch (non-EGS) | GPO 1 → relay → this pin (see `07-8hp-swap.md`) |
| Pin 20 | SW | RPM / TACHO | GPO 8 / TACHO output (ECU_16PIN pin 4) → stub wire to pin 20 |
| **Pin 14** | SW/WS | VSS from cluster | **FLOAT** — Gauge.S reads speed via MaxxECU CAN |
| **Pin 8** | GR | Check Engine / SI indicator | **FLOAT** — Gauge.S handles CEL via MaxxECU CAN |
| **Pin 11** | BR/GE | CLT to cluster | **FLOAT** — Gauge.S reads CLT via MaxxECU CAN |
| **Pin 12** | BR/VI | CLT to cluster | **FLOAT** — Gauge.S reads CLT via MaxxECU CAN |
| **Pin 23** | BR/GN | OEM oil pressure switch | **FLOAT** — PST-F1 on AIN 3 is the primary pressure source |

> ⚠️ **Pitfall:** The X20 is the single most time-consuming part of the ECU install. Budget a full day just for this connector. Map each wire before cutting anything. The cluster will show no data if X20 outputs are wrong — this is not dangerous, just frustrating to debug. Reference: [BMW E36 X20 Pinout (Scribd)](https://www.scribd.com/document/649295040/bmw-e36-x20-pinout)

**Gauge.S CAN wiring (new wires — not through X20):** Route CAN H/L (22 AWG twisted pair) from MaxxECU ECU_16PIN breakout (pins 10/9 — CAN H/L) to the cluster location. For the M5x phase, route this through the OEM firewall grommet alongside the M50 harness, or through a small additional grommet hole adjacent to it. 500 kbps. Add 120Ω terminator at cluster end if bus run exceeds 1 m. Enable in MTune: CAN → CAN 1 → Output → MaxxECU Default 1.3.

### Step 8 — Virtual Clutch Pedal

Wire virtual clutch pedal position sensor to MaxxECU C2 AIN 5 (C2 pin G3).  
Retain the E36 clutch pedal assembly in the cabin. Disconnect the hydraulic pushrod from the master cylinder and cap the cylinder port — pedal freewheels. Add a return spring to hold pedal at the top of its travel when unloaded. Mount a 0–5V rotary position sensor (Hall effect or potentiometer) at the clutch pedal pivot. All wiring is cabin-side — no firewall crossing required.

| Signal | Destination |
| --- | --- |
| Signal (0–5V) | C2 pin G3 (AIN 5) |
| +5V supply | C2 sensor supply rail |
| GND | C2 sensor GND rail |

Purchase C2 connector: MaxxECU store ID 1982, $32.25. C2 is required (not optional) — C1 AIN 1–4 are fully allocated. Requires Binary5 8HP TCU firmware + MTune 1.157+. MTune: Analog Inputs → AIN 5 → type = 0-5V → function = Clutch Position. Calibrate: 0% = pedal fully up, 100% = pedal fully depressed.

> ⚠️ **Pitfall:** Do not skip clamp calibration after AIN 5 is wired. All virtual clutch ramp features use the clamp start/end values — incorrect values produce wrong clutch pressure at pedal extremes. Verify with a slow pedal sweep while watching AIN 5 % in MTune live data before driving.

### Step 9 — Wideband O2 Sensor

**Weld 18mm×1.5 O2 bung into exhaust — shop step (15 min job).**  
Install Bosch LSU 4.2 wideband O2 sensor. The MaxxECU M50 terminated harness includes the wideband controller and 6-pin LSU connector — no separate controller needed.

> **Note:** The MaxxECU M50 terminated harness pre-wires the LSU 4.2 connector — no DIY sensor connector build required for Phase 1. `maxxecu-m52.wv` documents the WIDEBAND connector, shielded cable, and connections block. LSU 4.2 pinout (pin 1=VS, 2=RCAL, 3=H+, 4=H−, 5=VREF, 6=IP) differs from LSU 4.9 — do not substitute sensors between phases. Source: maxxecu.com/webhelp/wirings-lambda_sensors.html

### Step 10 — PST-F1 Oil Pressure+Temperature Sensor

Install the Bosch PST-F1 dual sensor on the M52 VANOS banjo bolt using the M14×1.5 → M10×1.0 adapter
(confirm adapter thread spec at install — `maxxecu-m52.wv` line 67 TODO). The sensor mounts in the
engine bay; its 4-pin connector pinout per `maxxecu-m52.wv`:

| PST-F1 pin | Signal | ECU_16PIN pin | MaxxECU input |
| --- | --- | --- | --- |
| +5V supply | +5V | Pin 1 (+5V OUT) | Sensor supply rail |
| GND | Sensor GND | Pin 2 (Sensor GND) | Sensor GND |
| Pressure | 0–5V analog | Pin 12 (AIN 3) | AIN 3 — 0–10 bar / 0–145 PSI |
| Temp | NTC thermistor | Pin 14 (AIN 1) | AIN 1 — −40 to +140°C |

Run a 4-wire shielded cable (22 AWG) from the PST-F1 connector, **bundled alongside the M50 harness**
through the OEM firewall grommet into the cabin, then to the ECU_16PIN breakout. Keep the cable in its
own sleeve within the loom — do not bundle with injector or coil wires. Float the OEM oil pressure
switch (X20 pin 23 — already noted in Step 7 above).

MTune: AIN 3 → type = 0–5V, function = Oil pressure. AIN 1 → type = Temperature (enable 2.5k pullup).

> ⚠️ **Phase 3 transition:** At the 07K swap, the PST-F1 moves from the M52 VANOS banjo bolt to the
> 07K oil housing. The ECU_16PIN path is removed with the M50 harness. The 4 wires now cross the
> **AS79 firewall bulkhead** — pin 79 (GND), pin 47 (+5V), pin 50 (AIN 3 pressure), pin 51 (AIN 1 temp)
> — and terminate at MaxxECU CMC J1 (AIN 1) and J3 (AIN 3). See `walkthroughs/34-ecu-harness-final.md`.
> Source: `harnesses/pst-f1-sensor.wv`, `harnesses/firewall-bulkhead.wv`.

### Step 11 — GPO Assignments Summary

| GPO | Function | CMC pin | Access point |
| --- | --- | --- | --- |
| GPO 1 | Reverse light relay (Phase 1) / Boost solenoid (07K Phase 3) | CMC B4 (pin 8) | M50 harness **BOOST_SOL connector stub** (Superseal 2-way, repurposed as rev light relay low-side in Ph1; `8hp-body-integrations.wv`) |
| GPO 2 | Fuel pump relay (low-side) | CMC C4 (pin 12) | ECU_12PIN pin 3 |
| GPO 3 | VANOS solenoid (PWM) | CMC D4 (pin 16) | Within M50 harness — VANOS connector |
| GPO 4 | ICV coil A | CMC E4 (pin 20) | Within M50 harness — ICV connector |
| GPO 5 | ICV coil B | CMC A1 (pin 1) | Within M50 harness — ICV connector |
| GPO 6 | Fan relay (low-side) | CMC B1 (pin 5) | ECU_16PIN pin 6 |
| GPO 7/DIN 3 | Flex fuel sensor signal | CMC (DIN 3) | ECU_16PIN pin 5 |
| GPO 8 | TACHO output → X20 pin 20 | CMC A4 (pin 4) | ECU_16PIN pin 4 |

**Harness looming discipline** (from `maxxecu-m52.wv`):
- Keep apart: crank and cam trigger wires (shielded, own sleeve, away from injector/coil wires)
- Keep apart: wideband O2 signal (shielded, own run)
- Keep apart: high-current feeds (fuel pump, fan, AC) — dedicated circuits, never bundled with ECU signal wires
- CAN bus: CAN H/L must be twisted pair at all times

> ⚠️ **Pitfall:** ~200–230 pin insertions across all harnesses. Never sleeve or loom any sub-harness before a bench test passes. Reference `e36-wiring/docs/harness-build.md` for connector family tool matrix, depin procedures, and bench test sequence.

### Step 12 — First Start Commissioning

Load MaxxECU M5x base map.

> ⚠️ **Pitfall:** Do not attempt a first start without a fire extinguisher at arm's reach, a functional fuel system pressure check (confirm no leaks at rail, FPR, and hanger fittings), and all coolant hoses fully seated. A lean first start on a warm engine can detonate on the first pull. Confirm fuel pressure holds with key-on before cranking.

---

## Deferred to 07K Phase

These items are documented here for reference but are **not built during M5x phase**:

| Item | Where documented |
| --- | --- |
| Ecumaster PMU16 power management unit | `34-ecu-harness-final.md` |
| Deutsch Autosport AS79 firewall engine connector | `34-ecu-harness-final.md` |
| Maven HD30 35-pin accessories connector | `34-ecu-harness-final.md` |
| Full custom engine harness (07K) | `e36-wiring/docs/harness-build.md` + `34-ecu-harness-final.md` |
| 8HP CAN wiring, power sequencing | `34-ecu-harness-final.md` |
| Post-shutdown EWP control | `34-ecu-harness-final.md` |

---

## References

- `maxxecu-m52.wv` — full MaxxECU M52 harness, CMC pinout, GPO/DIN/AIN assignments ([diagram](https://htmlpreview.github.io/?https://github.com/wesleyxcooper/e36-wiring/blob/main/output/maxxecu-m52.html))
- `body-x20.wv` — X20 25-pin bulkhead pinout, floated pins, Gauge.S CAN routing ([diagram](https://htmlpreview.github.io/?https://github.com/wesleyxcooper/e36-wiring/blob/main/output/body-x20.html))
- `8hp-body-integrations.wv` — reverse light relay + starter inhibit, GPO 1 phase usage ([diagram](https://htmlpreview.github.io/?https://github.com/wesleyxcooper/e36-wiring/blob/main/output/8hp-body-integrations.html))
- `8hp-can.wv` — 8HP CAN power sequencing, bulkhead pin assignments ([diagram](https://htmlpreview.github.io/?https://github.com/wesleyxcooper/e36-wiring/blob/main/output/8hp-can.html))
- [MaxxECU M50 Terminated Harness Docs](https://www.maxxecu.com/webhelp/wirings-terminated_engine_harness-bmw_m50.html)
- [MaxxECU Pinout Reference](https://www.maxxecu.com/webhelp/wirings-maxxecu_pinout.html)
- [MaxxECU Virtual Clutch](https://www.maxxecu.com/webhelp/advanced-8hp-virtual_clutch.html)
- [22RPD E36 OBD2 Chassis Adapter](https://22rpd.com/shop/product/127)
- [BMW E36 X20 Pinout (Scribd)](https://www.scribd.com/document/649295040/bmw-e36-x20-pinout)
- [Falk MFG EWS2 Bypass Guide](https://falkmfg.com/blogs/news/how-to-bypass-ews2-for-e36-bmw)

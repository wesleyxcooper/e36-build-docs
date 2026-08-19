# ECU & Chassis Wiring

**Phase:** 1  
**System tags:** `[ECU]` `[ELECTRICAL]`  
**Shop-mandatory:** No (full DIY — allow multiple days for X20 connector alone)  
**Prerequisites:** Interior stripped (rear seats, carpet, trunk interior removed). All harness connector positions photographed before touching anything. Wire labeling kit and crimper procured before starting. This section must be complete and M52 running on MaxxECU **before** the 8HP swap begins — see `07-8hp-swap.md`.

> **Staging note:** MaxxECU on M52 first. Install ECU, resolve EWS2 bypass, wire X20, and get the M52 running on MaxxECU with the Getrag still in place. Tune the M52. Then proceed to 8HP swap. This isolates troubleshooting: ECU issues surface on the stock drivetrain; 8HP issues surface on a known-good ECU.

---

## Parts

| Part | PN / Source | Cost |
| --- | --- | --- |
| MaxxECU Race (M50 terminated harness bundle) | [Seems Legit Garage MaxxECU M50 Bundle](https://www.seemslegitgarage.com/product-page/maxxecu-m50-harness) | $2,912 |
| Ecumaster PMU16 power management unit | [ecumaster.com](https://www.ecumaster.com/) | — (see Ecumaster pricing) |
| Ecumaster USB-CAN adapter (for PMU16 initial setup) | [ecumaster.com](https://www.ecumaster.com/) | $85 |
| EWS2 bypass / delete emulator module | BMW ECU tuning vendors — confirm current preferred method with MaxxECU community before ordering | — |
| M52 cam sensor — BMW PN `12141726590` (non-VANOS type, plug-and-play with M50 harness) | BMW dealer / FCP Euro | — |
| Bosch LSU 4.2 Wideband O2 Sensor | [Modern Racing LSU 4.2](https://modernracing.net/products/wb-o2-sensor) | $69.00 |
| Brady M210 printer + M21-125-C-342 PermaSleeve cartridge (22–16 AWG signals) | [Amazon starter bundle](https://a.co/d/3qZ8sAa) | ~$130 |
| Brady M21-250-C-342 cartridge (16–8 AWG, for 12 AWG fuel pump power runs) | [Brady direct](https://www.bradyid.com/labels/bmp21-plus-series-permasleeve-heat-shrink-tubing-cps-3392081?part-number=m21-250-c-342) | ~$55–60 |
| Deutsch HDT-48-00 ratcheting crimper (for Deutsch AS79 bulkhead contacts) | [deutschconnector.com](https://www.deutschconnector.com/products/deutsch_connector_tools/deutsch_connector_crimp_tools/HDT-48-00/) | ~$350–465 |
| JRready NEW-DT2 crimper (budget alternative to HDT-48-00) | [Amazon](https://www.amazon.com/) | ~$169 |
| Deutsch AS79 / Souriau 8STA 79-way firewall bulkhead connector | [RaceSpec Online](https://racespeconline.com) | ~$120–180 |
| ISO mini relay × 4 (fuel pump, fan, reverse light, starter — as applicable) | Bosch `0 332 209 150` or equivalent | — |
| 1N4007 flyback diodes (×6 minimum: VANOS, ICV A, ICV B, fuel pump relay, fan relay, reverse light relay) | Electronics supply | — |
| 18mm×1.5 O2 bung (for exhaust — weld-in, shop step) | Exhaust supply | — |

---

## Tools

- Deutsch HDT-48-00 or JRready NEW-DT2 crimper (solid barrel contacts for AS79 bulkhead)
- Standard open-barrel crimper (for Bosch JPT, JPT 2-way, Superseal, and relay terminals)
- Wire stripper, flush cutters (Milwaukee 48-22-6106 or equiv)
- Rivnut tool (Astro Pneumatic 1442 or equiv) — for bulkhead plate mounting
- Multimeter (continuity, voltage, and resistance testing at every stage)
- Brady M210 label printer (print wire designators on both ends before looming)
- Heat gun (PermaSleeve shrink, loom shrink tubing)

---

## Procedure

### Preparation — Labeling and Tools

1. **Procure wire labeling kit before starting any harness work.** Print WireViz wire designators on both ends of every wire before looming. Slide PermaSleeve onto wire, route to position, shrink with heat gun after routing is confirmed. Also label connector bodies and sub-loom exit points. Brady M210 + M21-125-C-342 covers all signal wires (22–16 AWG); M21-250-C-342 covers 12 AWG fuel pump power runs.

2. **Procure Deutsch HDT-48-00 solid barrel crimper before starting the AS79 bulkhead build.** The AS79 uses solid barrel size-20 contacts requiring the HDT-48-00 (8-indent ratcheting). Cannot substitute a generic open-barrel die — wrong geometry produces cold crimps that pass pull-test but fail under vibration. Budget alternative: JRready NEW-DT2 (~$169).

### MaxxECU Race — Mounting

3. **Mount MaxxECU Race unit** on the firewall or under dash — keep away from heat sources and direct water paths. Follow MaxxECU GEN2 RACE quick-start guide for mounting orientation.

### EWS2 Bypass

4. **EWS2 bypass — required before MaxxECU will start the M52.**  
   The E36 M52 (OBD2, 1996+) has the EWS2 immobilizer. The stock MS41/MS42 ECU handshakes with the EWS2 module via a dedicated wire to authorize fuel and ignition. MaxxECU has no EWS protocol — without bypass, the car cranks normally but will not fire (no injector or spark release). This is not a MaxxECU quirk — any replacement ECU (TurboLamik, MegaSquirt, etc.) faces identical EWS2 incompatibility.  
   - **Option A (preferred):** EWS delete/emulator module — sits in the EWS signal path and continuously returns the authorized signal. Clean, reversible, no harness modification. Source from BMW ECU tuning vendors.  
   - **Option B:** Hard-wire bypass at ECU connector — permanently provides the authorized state. Irreversible on that harness, but fully functional. Reference: [Falk MFG EWS2 bypass](https://falkmfg.com/blogs/news/how-to-bypass-ews2-for-e36-bmw).  
   Research the current preferred method with the MaxxECU community or SLG/MaxxECU support before ordering, as specifics vary by EWS version and harness revision.  
   > ⚠️ **Pitfall:** EWS2 bypass is not optional. Confirm the bypass method before the first start attempt. The car will crank indefinitely without it — this is the most common MaxxECU M52 no-start cause.

### PMU16 Power Distribution

5. **Mount and wire Ecumaster PMU16:**  
   - **Power path:** BATT+ → ANL main fuse (≤18 in from battery) → PMU16 M6 BATT+ stud
   - **IGN sense:** IGN-switched +12V → PMU16 pin 7 (+12V SW) — switches PMU on/off with key
   - **GND:** PMU16 GND lug → chassis GND stud (M8, engine bay)
   - **CAN:** PMU16 CAN2 H/L → MaxxECU CAN1 H/L (twisted pair, 22 AWG). Load MaxxECU.canx template in PMU software. Enable in MTune: Configuration → CAN settings → Data transmission.

   PMU16 **Phase 1 output channel assignments:**

   | PMU16 Output | Function | Notes |
   | --- | --- | --- |
   | O1 | ECU logic power | |
   | O2 | Coil + injector supply | |
   | O3 | Radiator fan (PWM) | |
   | O4 | Fuel pump (PWM — replaces Crydom D1D40 SSR) | 25A, 12 AWG to Radium hanger |
   | O5 + O14 | EWP parallel (50A combined) | Pre-assigned; not populated Phase 1 |
   | O6 | Condenser fan | |
   | O7 | AC relay coil | |

   **Post-shutdown EWP (Phase 3):** Program PMU16 to hold O5 active after key-off until CLT < 70°C CAN message from MaxxECU (or 3-min fallback timer). No MaxxECU power-hold relay needed — PMU16 handles this natively.  
   > ⚠️ **Pitfall:** PMU16 CAN2 bus must be terminated at both ends (120Ω). PMU16 has software-controlled termination on CAN2 — enable it in PMU config. Verify MaxxECU CAN1 termination is also enabled. Unterminated CAN causes intermittent dropouts that are hard to diagnose at the track.

### Firewall Bulkhead Connector

6. **Install Deutsch AS79 / Souriau 8STA 79-way flanged firewall bulkhead connector** (~$120–180 from RaceSpec Online).  
   Mount on upper firewall near the OEM harness grommet. **In this RHD build: mount on the LEFT side (passenger side) — the OEM engine harness grommet is on the passenger side in both LHD and RHD E36. The driver's / right side in the RHD build contains the steering column, brake/clutch pass-throughs, and is the exhaust side of a longitudinal 07K (SPA manifold exits right-hand side). Do NOT place the bulkhead connector on the driver's/right side in a RHD 07K build.**  
   Cabin side wired permanently (ECU Molex C1/C2 connectors, PMU16 CAN harness, cluster X20 signals). Engine harnesses terminate in mating plugs on the engine side for plug-and-play engine swaps.  
   Pre-allocate 6 pins for Phase 3 e-pedal (APS1 SIG, APS2 SIG, VCC1, VCC2, GND1, GND2) — leave engine-side pins unconnected until Phase 3.

### Ground Straps

7. **Verify ground straps and run MaxxECU engine GND to cylinder head.**  
   Per MaxxECU GEN2 RACE quick-start guide: (1) Battery negative → chassis stud. (2) Engine block → chassis via factory M52 bonding strap — keep it, verify it is clean (no paint under lug, star washer, tight nut). (3) **MaxxECU ENGINE GND pin → cylinder head** — this is MaxxECU's own mandatory requirement, not optional.  
   ECU sensor GND pins are NOT chassis or engine ground — they connect only to sensors returning signals to the ECU.

### M52 Cam Sensor Adapter

8. **Resolve M52 VANOS cam sensor connector before connecting harness.**  
   The MaxxECU M50 terminated harness is built for the non-VANOS M50 cam sensor connector. The M52 VANOS head uses a **different connector**.  
   - **Option A (recommended):** Swap sensor to BMW PN `12141726590` — direct fit to M50 harness connector. No harness modification.  
   - **Option B:** Add adapter pigtail between M52 sensor and M50 harness connector.  
   Without this: no cam/home signal → MaxxECU cannot resolve firing order → no-start. Confirm before first start attempt.

### MaxxECU M52 Engine Harness Connection

9. **Connect MaxxECU M50 terminated engine harness to all M52 engine sensors** per `maxxecu-m52.wv`.  
   Reference: [MaxxECU M50 Harness Docs](https://www.maxxecu.com/webhelp/wirings-terminated_engine_harness-bmw_m50.html) | [22RPD E36 OBD2 Chassis Adapter](https://22rpd.com/shop/product/127)

   **Key GPO assignments — Phase 1:**

   | GPO | Function | CMC pin | Access point |
   | --- | --- | --- | --- |
   | GPO 1 | Boost solenoid (unpopulated Phase 1) / Reverse light relay Phase 1 | CMC B4 (pin 8) | BOOST_SOLENOID Superseal 2-pin, pin 2 |
   | GPO 2 | Fuel pump relay (low-side) | CMC C4 (pin 12) | ECU_12PIN pin 3 |
   | GPO 3 | VANOS solenoid (PWM) | CMC D4 (pin 16) | Within terminated harness — VANOS connector |
   | GPO 4 | ICV coil A | CMC E4 (pin 20) | Within terminated harness — ICV connector |
   | GPO 5 | ICV coil B | CMC A1 (pin 1) | Within terminated harness — ICV connector |
   | GPO 6 | Fan relay (low-side) | CMC B1 (pin 5) | ECU_16PIN pin 6 |

   **Harness looming discipline (from `maxxecu-m52.wv` and build notes):**
   - Loom together: engine sensor inputs (CLT, IAT, TPS, MAP, knock, PST-F1) as one sensor sub-loom; injector wires as one sub-loom; coil primaries as one sub-loom. Sensor sub-loom and injector/coil sub-looms share the same route but go into **separate sleeves**.
   - Keep apart: crank and cam trigger wires (most noise-sensitive; shielded, own sleeve, physically away from injector drives and coil primaries — the MaxxECU M50 harness already shields these, do not unsheath or re-loom alongside anything else).
   - Keep apart: wideband O2 signal wire (shielded, own run, away from coil primaries and injector wires).
   - Keep apart: high-current feeds (fuel pump, SPAL fan, 12V AC) — each runs its own dedicated circuit back to the fuse/relay block; never bundle with ECU signal wires.
   - CAN bus (8HP + Gauge.S): CAN H/L must be twisted pair at all times. Treat the MaxxECU 8HP GEN1 CAN harness as a sealed sub-loom — MaxxECU CAN port → 8HP connector, nothing else shares that sleeve.

   > ⚠️ **Pitfall:** ~200–230 pin insertions across all harnesses. Never sleeve or loom any sub-harness before a bench test passes. Reference `e36-wiring/docs/harness-build.md` for connector family tool matrix, depin procedures, and bench test sequence.

### X20 Chassis Connector

10. **Wire MaxxECU to E36 chassis X20 bulkhead connector** per `body-x20.wv`.  
    The X20 is the 25-pin firewall connector between the E36 body harness (cabin) and the engine bay. MaxxECU outputs drive the signals the body expects from the ECU.

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

    **Gauge.S CAN wiring (new wires — not through X20):** Route CAN H/L (22 AWG twisted pair) from MaxxECU 16-pin aux (ECU_16PIN pins 10/9 — CAN H/L) to the cluster location. Preferred path: Deutsch AS79 bulkhead pin allocation. 500 kbps. Add 120Ω terminator at cluster end if bus run exceeds 1 m. Enable in MTune: CAN → CAN 1 → Output → MaxxECU Default 1.3.

### Virtual Clutch Pedal Position Sensor

11. **Wire virtual clutch pedal position sensor to MaxxECU C2 AIN 5** (C2 pin G3).  
    Retain the E36 clutch pedal assembly in the cabin. Disconnect the hydraulic pushrod from the master cylinder and cap the cylinder port — pedal freewheels. Add a return spring to hold pedal at the top of its travel when unloaded. Mount a 0–5V rotary position sensor (Hall effect or potentiometer) at the clutch pedal pivot. All wiring is cabin-side — no bulkhead crossing required.

    | Signal | Destination |
    | --- | --- |
    | Signal (0–5V) | C2 pin G3 (AIN 5) |
    | +5V supply | C2 sensor supply rail |
    | GND | C2 sensor GND rail |

    Purchase C2 connector: MaxxECU store ID 1982, $32.25. C2 is required (not optional) — C1 AIN 1–4 are fully allocated. Requires Binary5 8HP TCU firmware + MTune 1.157+. MTune: Analog Inputs → AIN 5 → type = 0-5V → function = Clutch Position. Calibrate: 0% = pedal fully up, 100% = pedal fully depressed.  
    > ⚠️ **Pitfall:** Do not skip clamp calibration after AIN 5 is wired. All virtual clutch ramp features use the clamp start/end values — incorrect values produce wrong clutch pressure at pedal extremes. Verify with a slow pedal sweep while watching AIN 5 % in MTune live data before driving.

### Wideband O2 Sensor

12. **Weld 18mm×1.5 O2 bung into exhaust — shop step (15 min job).**  
    Then install Bosch LSU 4.2 wideband O2 sensor. The MaxxECU M50 terminated harness includes the wideband controller and 6-pin LSU connector.  
    > ⚠️ **Note:** `maxxecu-m52.wv` has an open TODO — the wideband O2 circuit is unmodeled in the M52 harness diagram (no WIDEBAND connector, no cable, no shield flag — unlike `maxxecu-07k.wv` which models it correctly). Author this before Phase 1 harness build: add LSU 4.2 connector, shielded cable, and connections block. Verify LSU 4.2 pinout differs from LSU 4.9 before copying from the 07K diagram.

### First Start Commissioning

13. **Load MaxxECU M5x base map — first start commissioning.**  
    > ⚠️ **Pitfall:** Do not attempt a first start without a fire extinguisher at arm's reach, a functional fuel system pressure check (confirm no leaks at rail, FPR, and hanger fittings), and all coolant hoses fully seated. A lean first start on a warm engine can detonate on the first pull. Confirm fuel pressure holds with key-on before cranking.

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
- [Ecumaster PMU16 Manual](https://www.ecumaster.com/files/PMU/PMU_Manual.pdf)
- [Ecumaster PMU16 Pinout v1.2](https://www.ecumaster.com/files/PMU/PMU-16_Pinout_v1.2.pdf)
- [Ecumaster PMU16 MaxxECU Integration](https://www.ecumaster.com/files/ADU/AN/maxxEcu.pdf)
- [e36-wiring harness-build.md — connector tool matrix, depin procedures, bench test sequence](https://github.com/wesleyxcooper/e36-wiring/blob/main/docs/harness-build.md)
- [e36-wiring wiring-bom.md — shielded runs reference](https://github.com/wesleyxcooper/e36-wiring/blob/main/docs/wiring-bom.md)

# Drive-By-Wire Throttle Body Installation & Calibration

**Phase:** 3  
**System tags:** `[AIR]` `[ECU]`  
**Shop-mandatory:** No  
**Prerequisites:** 07K installed with BBG longitudinal intake manifold (`30-07k-install.md`); MaxxECU 07K harness connected (`34-ecu-harness-final.md`); E46 accelerator pedal module sourced; Strom Motorsports E36 adapter bracket on hand

---

## Overview

The 07K has a factory DBW (drive-by-wire) throttle body. This walkthrough covers retaining it with MaxxECU e-throttle control, installing the BMW E46 accelerator pedal (APS) module in the E36 cabin, wiring both pedal and throttle body to MaxxECU, and completing calibration in MTune. DBW replaces ICV for idle control — MTune idle control mode changes from stepper to DBW.

**GPO assignments used here:**
- GPO 4 (CMC E4/pin 20) → DBW TB Motor+ (freed from ICV coil A)
- The full e-throttle H-bridge output uses GPO 3 (Motor−) and GPO 4 (Motor+) in MTune. Confirm GPO/ETh assignments in MTune E-Throttle wizard before wiring.

> Note: The VR6 74mm cable TB (Option B) is an alternative if DBW is not desired. See `E36_DIY_Build_Checklist.md` Phase 3 Air/Throttle Option B for that path. This walkthrough covers Option A (DBW only).

---

## Parts

| Part | PN / Source | Cost |
| --- | --- | --- |
| BMW E46 accelerator pedal module (manual) | PN `35426786282` — used, eBay / UK sellers | ~$80–120 |
| Strom Motorsports E36 adapter for E46 DBW pedal | [strommotorsports.com/products/e36-dbw-e46-accelerator-pedal-adapter](https://strommotorsports.com/products/e36-dbw-e46-accelerator-pedal-adapter) | ~$40–60 |
| 07K factory DBW throttle body | Carry-forward from Phase 2 engine build — ~65mm bore | — |
| 6-pin shielded cable (pedal → bulkhead, 24 AWG, ~2.5m) | — | ~$15–25 |
| Hella 6PV010946-141 (RHD fallback pedal if E46 bracket fitment fails) | Universal floor-mount, no OEM pedal box dependency | ~$80–120 new |

---

## Tools

- Laptop with MTune
- Multimeter (verify APS voltages before motor activation)
- Torque wrench
- Standard socket set
- Trim removal tools (for under-dash access)
- Brady M210 label printer (pedal harness ends)

---

## Procedure

### BMW E46 Accelerator Pedal Install

1. **Source PN `35426786282`** (manual, works in any market RHD car — the LHD/RHD split is manual vs auto, not market). Avoid PN `35426786281` (automatic). Confirmed eBay UK listings: [176400301948](https://www.ebay.com/itm/176400301948), [176400305397](https://www.ebay.com/itm/176400305397), [176400302753](https://www.ebay.com/itm/176400302753) — each ~£59. Do not buy [176400306849](https://www.ebay.com/itm/176400306849) — this is an E39/E38/X5 pedal with wrong connector and pinout.

2. Install the Strom Motorsports E36 adapter bracket at the OEM E36 pedal box location. Bracket is CNC 6061 Al — no cutting, welding, or drilling. Also available from Garagistic and Drift HQ.
   > ⚠️ **Pitfall (RHD fitment):** No vendor explicitly confirms RHD E36 pedal box compatibility for the bracket. Community finding: LHD brackets often misalign in RHD — typically resolved by trimming carpet/sound deadening at the transmission tunnel edge. Try the Strom/Garagistic bracket first. If RHD pedal box geometry prevents fitment, use the **Hella 6PV010946-141** instead — standalone floor-mount, no OEM pedal box dependency, fabricate mounting position as needed. Source: `E36_DIY_Build_Checklist.md` Phase 3 Air/Throttle.

3. Mount E46 pedal module to bracket. Confirm the pedal swings freely without fouling the brake pedal or tunnel trim.

### APS Wiring (Pedal → MaxxECU)

4. The E46 pedal connector carries 6 wires. Bench-verified pin order (source: `E36_DIY_Build_Checklist.md` Phase 3 Air/Throttle):
   - Pin 1 = GND1
   - Pin 2 = GND2
   - Pin 3 = VCC2 (+5V)
   - Pin 4 = Output1 / APS1 (0.7V idle → 4.5V WOT)
   - Pin 5 = VCC1 (+5V)
   - Pin 6 = Output2 / APS2 (0.36V idle → 2.2V WOT)
   - Total draw ~20mA; 24 AWG sufficient

   ME7.1.1 APS reference pins (for harness documentation): APS1 signal at pins 35/72; APS2 signal at pins 34/73. Source: `E36_DIY_Build_Checklist.md` Phase 3 Air/Throttle and Phase 2 ECU section.

5. Run 6-wire shielded cable from pedal connector → **Maven HD30 Connector A cabin face, pins A14–A19**
   (pre-allocated at Phase 1, cavity-plugged until Phase 3):
   - A14 = APS GND 1
   - A15 = APS GND 2
   - A16 = APS VCC2
   - A17 = APS1 signal
   - A18 = APS VCC1
   - A19 = APS2 signal

   APS is **cabin-to-cabin only** — MaxxECU is cabin-mounted. The HD30 cabin face acts as a junction
   block; engine side of A14–A19 is cavity-plugged. AS79 pins 72–77 are not used for APS.
   Source: `harnesses/firewall-bulkhead-dual.wv`, `harnesses/epedal-bmw-e46.wv`.

6. Label both ends of each wire with the Brady M210 before looming.

### DBW Throttle Body Wiring

7. The 07K DBW throttle body uses a 6-pin connector. ME7.1.1 reference: Motor+ = pin 84, Motor− = pin 92, TPS1 = pin 117, TPS2 = pin 118.

   MaxxECU ETh1 assignment (confirm in MTune E-Throttle wizard before final wiring):
   - Motor+ → MaxxECU **C2 H4 (MOTOR 1+)** via AS79 pin 22, 20 AWG minimum
   - Motor− → MaxxECU **C2 H2 (MOTOR 1−)** via AS79 pin 23, 20 AWG minimum
   - TPS1 → CMC G2 (pin 26) / AS79 pin **48**, 22 AWG shielded
   - TPS2 → CMC J2 (pin 34) / AS79 pin **56**, 22 AWG shielded
   - +5V → shared sensor supply rail (AS79 pin 47)
   - GND → sensor GND (AS79 pin 79)

   > ⚠️ Motor+/− connect to the **dedicated H-bridge outputs (C2 H4/H2)**, NOT GPO 3 or GPO 4.
   > GPO 3 = VVT solenoid; GPO 4 = spare. Using GPO for motor drive would damage the output.
   > Source: `harnesses/maxxecu-07k.wv`.

   > ⚠️ **Pitfall:** Verify TB motor polarity with a voltmeter before wiring. Swap Motor+/− if the throttle plate runs in the wrong direction during the e-throttle wizard calibration. The wizard will flag this and prompt a swap. Source: `harnesses/maxxecu-07k.wv` DBW_TB notes.

### MTune — E-Throttle Calibration

8. **Disconnect the TB motor wires** (Motor+ and Motor−) before enabling e-throttle in MTune for the first time. Leave all sensor wires (TPS1, TPS2, APS1, APS2, +5V, GND) connected. Prevents throttle runaway on first output enable.
   > ⚠️ **Pitfall:** Disconnect the TB motor wires before enabling e-throttle in MTune for the first time. Leave sensor wires connected — verify APS/TPS voltages read correctly before activating motor drive. Prevents runaway on first output enable. Source: `E36_DIY_Build_Checklist.md` Phase 3 Air/Throttle.

9. **Sequence — do not skip steps:**
   1. Enable e-throttle in MTune → assign APS1/APS2 to their AIN pins; assign TPS1/TPS2 and motor output (Motor 1 — C2 H4/H2 H-bridge, not GPO)
   2. Run **pedal calibration wizard** — captures idle/WOT min/max for both APS tracks automatically. Slowly depress pedal from floor to WOT and back, twice.
   3. Verify APS1 reads ~0.7V at idle, ~4.5V at WOT. APS2 reads ~0.36V at idle, ~2.2V at WOT (approximately half of APS1 — dual-track redundant sensor).
   4. Reconnect TB motor wires. Run **TB calibration wizard** — motor sweeps to physical stops, captures TPS1/TPS2 min/max range. The throttle plate will move fully open and fully closed during this step — normal.
   5. Run **PID auto-tune** (MTune built-in): engine at idle, MaxxECU sweeps TB through step inputs and calculates P/I/D values automatically.
   6. Verify on MTune scope: add APS% and TPS% channels, snap pedal sharply — TPS should track APS with <20ms lag, no sustained oscillation.

10. **PID diagnostic symptoms** (if auto-tune result is wrong):
    - Lag = P too low
    - Oscillation/buzz = P too high
    - Slow creep to target = I too low
    - Jitter at fixed pedal position = D too high (amplifies sensor noise)
    - Start with MaxxECU Bosch 0280 750 defaults — auto-tune usually gets it right from there.

11. **Safety checks — do not disable:**
    - APS ratio check (APS1 vs APS2 must stay within defined ratio)
    - TPS ratio check (TPS1 vs TPS2 must stay within defined ratio)
    - APS vs TPS agreement check (pedal position vs throttle position correlation)
    - When any check faults, MaxxECU cuts motor output and the return spring closes the plate — that is the correct behavior. Diagnose root cause (wiring fault, bad sensor, swapped wires) instead of widening tolerances.
    > ⚠️ **Pitfall:** Never disable APS ratio, TPS ratio, or APS-vs-TPS agreement safety checks. When any check faults, MaxxECU cuts motor output and the return spring closes the plate — that is the correct behavior. Source: `E36_DIY_Build_Checklist.md` Phase 3 Air/Throttle.

### MTune — Idle Control Mode

12. DBW replaces ICV (idle control valve) for idle control. In MTune:
    - Idle control → Mode: change from **Stepper** (M52 ICV mode) to **DBW** (e-throttle idle control)
    - The DBW idle control uses a small percentage of throttle opening at idle rather than a stepper motor bypass passage
    - Base idle target: 800–900 RPM; MaxxECU adjusts TB opening to maintain target against CLT and load

13. **If upgrading TB later** (stock 65mm to VR6 `03H133062` 74mm for 600+ whp): re-run TB calibration wizard and PID auto-tune after swap. Pedal calibration is TB-agnostic and does not need to be redone. Source: `E36_DIY_Build_Checklist.md` Phase 3 Air/Throttle.

---

## References

- `E36_DIY_Build_Checklist.md` — Phase 3, Air/Throttle Options A + B (lines 698–738)
- `harnesses/maxxecu-07k.wv` — DBW_TB connector pinout (lines 361–379)
- ME7.1.1 APS pinout: pins 35/72 (APS1) and 34/73 (APS2) — [ME7.1.1 Pinout PDF](https://drive.google.com/file/d/15RPWyYPLHGEMMQZIlUgpoo77T-CxjyMP/view)
- [MaxxECU E-Throttle settings](https://maxxecu.se/webhelp/settings-ethrottle.html)
- [MaxxECU E-Throttle body wiring](https://maxxecu.se/webhelp/wirings-e-throttle_bodies.html)
- `e36-wiring/docs/etb-pid-tuning.md` — full DBW PID tuning procedure
- [Strom Motorsports E36 DBW pedal adapter](https://strommotorsports.com/products/e36-dbw-e46-accelerator-pedal-adapter)
- [Garagistic E46 pedal adapter for E36](https://www.garagistic.com/products/e46-gas-pedal-for-e36-adapter-bracket)
- [HP Academy — BMW e-pedal DBW setup wiring](https://www.hpacademy.com/forum/efi-wiring-fundamentals/show/bmw-epedal-for-dbw-setup-wiring/)

# Fuel System

**Phase:** 1  
**System tags:** `[FUEL]` `[ELECTRICAL]`  
**Shop-mandatory:** No  
**Prerequisites:** Rear subframe out (subframe reinforcement window) gives easiest access to the fuel tank. MaxxECU and PMU16 installed per `11-ecu-chassis-wiring.md`. PMU16 O4 is the fuel pump power source — no discrete relay. Use `e36-wiring/harnesses/fuel-pump-hanger-phase3.wv` for the active wiring spec (PMU16 O4 → 10 AWG → hanger pump+ stud). MTune access required for fuel pump output mapping via PMU16 CAN channel O4.

---

## Parts

| Part | PN / Source | Cost |
| --- | --- | --- |
| Radium Engineering Fuel Pump Hanger — BMW E36 | [Radium 20-1170](https://www.radiumauto.com/products/bmw-e36-fuel-pump-hanger) | $549.95 |
| **Fuel pump + power wiring — pick ONE option below (A recommended):** | | |
| Option A: **JDT Racing F90000267 + install kit + rewire kit (BUNDLED)** — includes pump, Walbro 400-1168 install kit, JDT rewire kit (16' 10 AWG blue power cable, 30A inline fuse, 3' 10 AWG black ground, relay, relay pigtail, pass-through grommet, ring terminals, wire loom, cable ties) | [jdtracing.com F90000267 bundle](https://jdtracing.com/products/walbro-ti-f90000267-450lph-fuel-pump-w-install-kit-rewire-kit-e85-compatible) — Manufacturer PN `wal_F90000267_wal_400-1168_jdt_FPRK` | **$193.19** |
| Option B: Walbro F90000267 pump only (already ordering rewire separately) | [Real Street Performance](https://www.realstreetperformance.com/walbro-universal-450lph-in-tank-fuel-pump-e85-version.html) | $181.12 |
| Option B rewire kit — **JDT Universal Fuel Pump Rewire Kit** (relay + 30A fuse + 10 AWG wire + terminals + grommet) | [jdtracing.com universal rewire kit](https://jdtracing.com/products/jdt-racing-universal-fuel-pump-rewire-kit-w-10-gauge-power-ground-fuse-relay) | $37.99 |
| Option C: à la carte — pump + Bosch 40/70A relay + fuse + wire + terminals from Waytek/ProWire | See wiring-bom.md System 4 for parts breakdown | ~$220+ |
| Radium 20-1000-1010 — 10AN ORB Swivel Banjo to 10AN Male (feed side, ×1) | [Radium Low Profile Swiveling Fittings](https://www.radiumauto.com/products/low-profile-swiveling-banjo-fittings) | $34.95 |
| Aeromotive 13129 Compact EFI FPR (return-style, 40–75 PSI adjustable) | [Aeromotive 13129](https://aeromotiveinc.com/products/compact-efi-regulators) | $185.95 |
| Ethanol / flex fuel sensor | [Seems Legit Garage Ethanol Content Sensor](https://www.seemslegitgarage.com/product-page/ethanol-content-sensor) | $80.00 |
| Bosch 440cc injectors (Green EV1) × 6 | [TRE Performance — 0280155968 set of 6](https://treperformance.com/i-18598170-genuine-bosch-42lb-green-giant-ev1-fuel-injectors-0280155968-6.html) | $399.00 |
| Ring terminals, 12 AWG (M4 or M5 stud — confirm at install) — pump(+) stud + pump(−) stud terminations | Electrical supply (or included in JDT rewire kit) | — |

> **Recommendation: Option A (JDT bundle at $193.19).** Includes pump, install kit, and rewire kit. Use the kit's 10 AWG power cable, grommet, and ring terminals for the PMU16 O4 → tunnel → hanger pump+ stud run. The kit's relay and 30A inline fuse are not used — PMU16 O4 (25A MOSFET) is the pump power source from Phase 1. Alternative: Walbro F90000267 alone ($181.12) + 10 AWG wire/grommet/terminals separately.

---

## Tools

- Large channel-lock pliers or BMW locking ring tool (for E36 fuel tank locking ring)
- Fuel system depressurizer or Schrader valve tool
- AN fitting wrenches (-10AN, -8AN, -6AN as applicable)
- Torque wrench
- Wire crimpers, heat gun (for pump lead termination)
- Multimeter (continuity and voltage checks before first prime)

---

## Procedure

### Fuel System Depressurization

1. **Depressurize the fuel system before opening the tank.**  
   With the engine off, pull the fuel pump fuse or relay and crank briefly to bleed residual rail pressure. Then release pressure at the Schrader valve on the fuel rail (if present) into a rag. Confirm rail pressure is zero before opening any fitting.  
   > ⚠️ **Pitfall:** Do not skip depressurization. The E36 rail holds pressure for hours after shutdown. Opening a fitting under pressure sprays fuel.

### Fuel Tank Access

2. **Remove rear seat, trunk interior, spare tire, and fuel tank surround panels** to expose the top of the saddle tank. The E36 has a saddle tank with one hanger assembly.

3. **Remove the fuel pump hanger locking ring.**  
   The E36 tank uses a large-diameter plastic locking ring.  
   > ⚠️ **Pitfall:** Use a large channel-lock or a proper BMW locking ring tool — do not pry the ring with a screwdriver. The plastic retainer cracks easily and the replacement ring is hard to source. Turn counter-clockwise to remove.

4. **Lift the OEM fuel pump hanger assembly out of the tank.** Note the orientation tab position for reinstallation.

### Radium 20-1170 Hanger Installation

5. **Install Walbro F90000267 pump into the Radium 20-1170 hanger** before the hanger goes into the tank. The F90000267 fits the Radium 20-1170 directly (39mm/50mm DCSS body). Follow Radium install instructions PDF at [radiumauto.com/pages/instructions](https://radiumauto.com/pages/instructions) (document 20-1170).

6. **Thread Radium 20-1000-1010 swivel fitting (10AN ORB) into the pump-out port — hand-tight only first.** Then attach the -10AN braided line to the swivel fitting. After the line is attached and the routing angle is confirmed, final-torque the swivel fitting. This rotation-before-lock sequence is required — the fitting must be oriented to correct routing angle before it locks.  
   > ⚠️ **Pitfall (swivel fittings):** Thread the 20-1000-1010 (10AN ORB swivel) into the pump-out port hand-tight first, then attach the -10AN braided line before final torque — this allows the fitting to rotate to the correct routing angle before locking. Final-torquing it dry before attaching the line traps the line in a bad angle.

7. **Return port:** Use the included 8.5mm barb adapter (matches OEM E36 return line diameter). Upgrade to Radium 20-1000-0606 (6AN ORB swivel, $34.95) only if converting the return side to a full AN fitting.

8. **Lower hanger assembly into tank.** Align the orientation tab. Hand-thread the locking ring clockwise. Torque per Radium install instructions.  
   > ⚠️ **Pitfall (hanger terminals):** The stainless stud terminals on top of the hanger are live in a fuel-saturated environment. Clean contact surfaces before installing ring terminals. Use ring terminals with the provided acorn nuts — the anti-rotation feature prevents the stud from spinning during tightening, which would damage the internal seal.

### Pump Power Wiring — Phase 1 (per `fuel-pump-hanger-reference.md`)

Phase 1 has no PMU16. The pump is switched by relay R1 on the relay block wired in `11-ecu-chassis-wiring.md`.

9. **Run relay R1 pin 87 → pump(+) stud on Radium 20-1170 hanger.**  
   Wire: 10 AWG minimum, red, from PMU16 O4 (engine bay) through the transmission tunnel to the fuel tank hanger pump(+) stud. Estimated run: 3.5–4 m — measure on the car and add 20% slack before cutting. Loom in expandable braid for the full tunnel run. Keep away from exhaust-side tunnel routing. Wiring spec: `e36-wiring/harnesses/fuel-pump-hanger-phase3.wv` (PMU16 O4 direct-drive — applies from Phase 1 onward).

10. **Run pump(−) stud → dedicated chassis GND bolt.**  
    Wire: 12 AWG minimum, black. Ring terminal at both ends. The pump ground must be a dedicated stud bolted to body metal — **do not share with ECU sensor grounds or other signal-ground star points.**

11. **MTune fuel pump config:**  
    PMU16 handles fuel pump control via CAN from MaxxECU — GPO 2 is not used for the fuel pump. In MTune: PMU16 output map → O4 → Function: **Fuel pump** (on/off at Phase 1; configure PWM at Phase 3b if desired). PMU16 O4 PWM frequency set in Ecumaster PMU software (4–400 Hz range). Duty table by MAP/RPM for PWM control: ~75% at idle / 100% at WOT.

### Flex Fuel Sensor Installation

12. **Install Continental/GM flex fuel sensor (GM `13577429` / Continental SE1004S) inline on the fuel feed line**, between the Radium hanger output and the Aeromotive FPR. Per `maxxecu-m52.wv`:

    | Sensor pin | Connection |
    | --- | --- |
    | Pin A — +12V | Switched 12V relay rail (NOT ECU 5V supply) |
    | Pin B — GND | Chassis GND |
    | Pin C — Signal (PWM out) | MaxxECU DIN 3 (ECU_16PIN pin 5 / GPO 7/DIN 3) |

    The signal wire is open-collector; MaxxECU provides an internal 5V pull-up on the DIN input. A single wire encodes two channels: frequency (50–150 Hz) = ethanol content %; pulse width = fuel temperature. MaxxECU reads both natively on DIN 3.  
    **MTune:** Inputs → Digital inputs → DIN 3 → Function: **Flex fuel sensor**. Enable flex fuel map: Advanced → Flex fuel → set base (0% E) and E85 (85% E) maps.

    > ⚠️ **Phase 3b transition:** At the 07K swap, the M50 harness and ECU_16PIN breakout are removed. The flex fuel signal wire must be extended to cross the AS79 firewall bulkhead on **pin 64** (engine side) → **pin 64** (cabin side) → MaxxECU CMC DIN 3 (same input, new path). +12V supply transitions from the Phase 1 relay rail to the Phase 3b harness +12V supply. GND remains chassis GND. No MTune change required — DIN 3 assignment stays. Source: `harnesses/firewall-bulkhead.wv` pin 64; `walkthroughs/26-07k-harness.md`.

### FPR Installation

13. **Install Aeromotive 13129 FPR** (return-style, 40–75 PSI adjustable) in the fuel feed line after the sensor. The OEM E36 FPR is not tunable — this replaces it for standalone ECU use. Run the return line back to the Radium hanger return port (8.5mm barb).

### Injector Installation

14. **Install Bosch 440cc EV1 injectors** (Green, PN `0280155968` ×6) into the stock M52 fuel rail. These are Phase 1 baseline injectors; EV1 connector matches OEM M5x fuel rail clips. No rail modification needed.

---

## References

- `fuel-pump-hanger.wv` — PMU16 O4 → Radium 20-1170 hanger wiring ([diagram](https://htmlpreview.github.io/?https://github.com/wesleyxcooper/e36-wiring/blob/main/output/fuel-pump-hanger.html))
- `maxxecu-m52.wv` — DIN 3 flex fuel sensor wiring, AIN pump config ([diagram](https://htmlpreview.github.io/?https://github.com/wesleyxcooper/e36-wiring/blob/main/output/maxxecu-m52.html))
- [Radium 20-1170 Install Instructions (PDF)](https://cdn.shopify.com/s/files/1/0887/4193/7449/files/19-0359.pdf)
- [Radium 20-1170 Product Page](https://www.radiumauto.com/products/bmw-e36-fuel-pump-hanger)
- [Walbro F90000267 Product](https://www.walbrofuelpumps.com/product/f90000267/)
- [Aeromotive 13129 FPR](https://aeromotiveinc.com/products/compact-efi-regulators)
- [e36-wiring fuel-pump-hanger-reference.md](https://github.com/wesleyxcooper/e36-wiring/blob/main/fuel-pump-hanger-reference.md)
- [e36-wiring fuel-pump-pwm.py schematic](https://github.com/wesleyxcooper/e36-wiring/blob/main/schematics/fuel-pump-pwm.py)

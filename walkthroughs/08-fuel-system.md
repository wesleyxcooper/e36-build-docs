# Fuel System

**Phase:** 1  
**System tags:** `[FUEL]` `[ELECTRICAL]`  
**Shop-mandatory:** No  
**Prerequisites:** Rear subframe out (subframe reinforcement window) gives easiest access to the fuel tank. Ecumaster PMU16 mounted and wired (O4 output is the pump power source). MaxxECU installed with MTune access for fuel pump PWM config.

---

## Parts

| Part | PN / Source | Cost |
| --- | --- | --- |
| Radium Engineering Fuel Pump Hanger — BMW E36 | [Radium 20-1170](https://www.radiumauto.com/products/bmw-e36-fuel-pump-hanger) | $549.95 |
| Walbro F90000267 — 465 LPH E85 (pump only) | [Real Street Performance](https://www.realstreetperformance.com/walbro-universal-450lph-in-tank-fuel-pump-e85-version.html) | $181.12 |
| Radium 20-1000-1010 — 10AN ORB Swivel Banjo to 10AN Male (feed side, ×1) | [Radium Low Profile Swiveling Fittings](https://www.radiumauto.com/products/low-profile-swiveling-banjo-fittings) | $34.95 |
| Aeromotive 13129 Compact EFI FPR (return-style, 40–75 PSI adjustable) | [Aeromotive 13129](https://aeromotiveinc.com/products/compact-efi-regulators) | $185.95 |
| Ethanol / flex fuel sensor | [Seems Legit Garage Ethanol Content Sensor](https://www.seemslegitgarage.com/product-page/ethanol-content-sensor) | $80.00 |
| Bosch 440cc injectors (Green EV1) × 6 | [TRE Performance — 0280155968 set of 6](https://treperformance.com/i-18598170-genuine-bosch-42lb-green-giant-ev1-fuel-injectors-0280155968-6.html) | $399.00 |
| 12 AWG red wire — pump(+) run, PMU16 O4 to hanger stud | Wire supply | — |
| 12 AWG black wire — pump(−) dedicated GND run | Wire supply | — |
| Ring terminals, 12 AWG (M4 or M5 stud — confirm at install) | Electrical supply | — |

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

### Pump Power Wiring (per `fuel-pump-hanger.wv`)

9. **Run PMU16 O4 output → pump(+) stud on Radium 20-1170 hanger.**  
   PMU16 O4 (physical pin 13, 25A PWM-capable high-side MOSFET output) is the fuel pump power source. No separate DC solid-state relay is needed — PMU16 handles this directly via CAN command from MaxxECU. Wire: 12 AWG minimum, red, from PMU16 engine bay location through the transmission tunnel to the fuel tank hanger pump(+) stud. Estimated run: 3.5–4 m — measure on the car and add 20% slack before cutting. Loom in expandable braid for the full tunnel run. Keep away from exhaust-side tunnel routing where heat is a concern.

10. **Run pump(−) stud → dedicated chassis GND bolt.**  
    Wire: 12 AWG minimum, black. Ring terminal at both ends. The pump ground must be a dedicated stud bolted to body metal — **do not share with ECU sensor grounds or other signal-ground star points.**

11. **MTune fuel pump config:**  
    Outputs → Output config → Function: **PWM fuel pump control** → frequency 100–500 Hz (start at 100 Hz). Duty table by MAP/RPM: ~65% at idle / ~80% cruise / 100% at WOT. At Phase 3 (07K), tune duty table to MAP for full duty under boost. PMU16 O4 frequency set in PMU software (4–400 Hz range).

### Flex Fuel Sensor Installation

12. **Install Continental/GM flex fuel sensor (GM `13577429` / Continental SE1004S) inline on the fuel feed line**, between the Radium hanger output and the Aeromotive FPR. Per `maxxecu-m52.wv`:

    | Sensor pin | Connection |
    | --- | --- |
    | Pin A — +12V | Switched 12V relay rail (NOT ECU 5V supply) |
    | Pin B — GND | Chassis GND |
    | Pin C — Signal (PWM out) | MaxxECU DIN 3 (ECU_16PIN pin 5 / GPO 7/DIN 3) |

    The signal wire is open-collector; MaxxECU provides an internal 5V pull-up on the DIN input. A single wire encodes two channels: frequency (50–150 Hz) = ethanol content %; pulse width = fuel temperature. MaxxECU reads both natively on DIN 3.  
    **MTune:** Inputs → Digital inputs → DIN 3 → Function: **Flex fuel sensor**. Enable flex fuel map: Advanced → Flex fuel → set base (0% E) and E85 (85% E) maps.

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

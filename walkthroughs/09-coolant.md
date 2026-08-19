# Coolant System

**Phase:** 1  
**System tags:** `[COOLANT]` `[ELECTRICAL]`  
**Shop-mandatory:** No  
**Prerequisites:** Engine bay accessible (M52 in car). Ecumaster PMU16 mounted and wired — PMU16 outputs O3 (radiator fan PWM) and O5+O14 (EWP, Phase 3) are pre-assigned in the PMU channel plan. MaxxECU installed for Stage 2 fan control.

---

## Parts

| Part | PN / Source | Cost |
| --- | --- | --- |
| CSF Aluminum Radiator | [CSF E36 Radiator 3054 — BimmerWorld](https://www.bimmerworld.com/Cooling/Radiators/CSF-E36-Aluminum-Radiator.html) | $369.00 |
| SPAL Electric Fan Conversion Kit (16" SPAL pull fan + relay harness + thermostat switch) | [BimmerWorld E36 Kit](https://www.bimmerworld.com/Cooling/Cooling_Kits/E36-Electric-Fan-Conversion-Kit-OBD2-328i-328is-323is-M3-1996-1997-1998-1999.html) | $200.99 |
| SPAL 30102049 PWM fan motor (Stage 2 upgrade at MaxxECU install — same bracket, same pin locations) | Aftermarket / SPAL dealer | ~$180–220 |
| Mishimoto Aluminum E36 Expansion Tank | [Mishimoto MMRT-E36](https://www.mishimoto.com/bmw-e36-ai-coolant-expansion-tank-1992-1999.html) | $190.95 |

**Phase 3 EWP (not Phase 1):** The electric water pump for this build is the Pierburg CWA400 (PWM version), to be installed at the 07K Phase 3 swap. Phase 1 retains the OEM M52 belt-driven water pump. See `ewp-controller.wv` for the full Phase 3 CWA400 wiring spec.

---

## Tools

- Standard hand tools for radiator removal and hose work
- Cooling system pressure tester (post-install leak check)
- Multimeter (fan circuit continuity and voltage checks)
- Wire crimpers, heat gun (Stage 2 fan wiring)

---

## Procedure

### CSF Radiator

1. **Drain the M52 cooling system** via the lower radiator hose or drain petcock. Collect coolant for disposal.

2. **Remove the OEM plastic radiator.** Disconnect upper and lower hoses, transmission cooler lines (if applicable to auto donor car — not relevant here), and fan/shroud assembly. Unbolt radiator from mounts.

3. **Install CSF aluminum radiator (3054).** The CSF unit is a direct-fit drop-in for the E36. Torque mounting bolts to spec. Reconnect all hoses. This radiator carries through to the 07K turbo phase without replacement.

### SPAL Electric Fan — Stage 1 (OEM ECU Period)

4. **Mount the BimmerWorld SPAL fan kit** (16" pull fan + relay harness + thermostat switch) to the CSF radiator using the kit's brackets.

5. **Wire Stage 1 — thermostat switch standalone, no ECU involvement:**  
   OEM thermostat switch (closes at ~87°C) → relay coil → relay contact → fan motor. This circuit runs completely independent of the ECU. Fan triggers at threshold and runs until switch opens.  
   > ⚠️ **Pitfall:** The fan main power feed draws significant current — run it on its own dedicated circuit to the fuse/relay block, completely separate from all ECU signal wiring. The fan power and ground are not to share a loom or splice point with any ECU signals.

### SPAL Electric Fan — Stage 2 (At MaxxECU Install)

6. **Swap the SPAL fan motor for the SPAL 30102049 PWM-capable variant** (~$180–220). The BimmerWorld bracket and harness from Stage 1 are reused — the motor is a direct swap at the same mounting pins.  
   > ⚠️ **Pitfall:** Do not run a PWM signal through the stock single-speed SPAL motor included in the BimmerWorld kit. The stock motor is brushed single-speed and cannot be PWM-controlled at typical GPO frequencies. Swap the motor first, then wire the PWM signal.

7. **Add MaxxECU GPO 6 wire to the relay trigger in parallel with the existing thermostat switch** (thermostat switch stays as a passive failsafe). Per `maxxecu-m52.wv`:

    | Signal | Source | Destination |
    | --- | --- | --- |
    | GPO 6 (low-side switch) | ECU_16PIN pin 6 (MaxxECU 16-pin aux) | Relay coil pin 85 (parallel with thermostat switch) |
    | +12V IGN (coil supply) | OEM IGN relay — body harness | Relay coil pin 86 |
    | Battery+ fused | Main fuse block | Relay contact pin 30 |
    | Fan +12V | Relay contact pin 87 | Fan motor(+) |

    Flyback diode: 1N4007 across relay coil. Cathode (banded end) → pin 86 (+12V). Anode → pin 85 (GPO 6).

8. **MTune fan config:** Outputs → Output config → GPO 6 → Function: **Fan relay**. Set coolant temp thresholds, hysteresis, and AC override in MTune. MaxxECU takes over temp staging and variable speed duty via GPO 6.

    > ⚠️ **Pitfall:** Wiring note — the MaxxECU GPO 6 trigger wire to the relay coil is fine routed near other digital outputs. The fan main power and ground runs are not: keep high-current fan wiring on its own dedicated circuit back to the fuse/relay block, separate from ECU signal wiring in all looms.

### Mishimoto Expansion Tank

9. **Install Mishimoto aluminum expansion tank.** Replaces the failure-prone OEM plastic expansion/overflow tank. Direct bolt-in location. Reconnect the coolant overflow hose. This tank carries to the 07K phase.

### Coolant Fill and Bleed

10. **Fill with BMW-compatible coolant (50/50 premix or concentrate + distilled water).** Bleed the system by running the engine with the expansion tank cap off until thermostat opens and bubbles cease. Check for leaks at all hose connections after first heat cycle.

---

## Phase 3 EWP Note

The Pierburg CWA400 (PWM version) electric water pump is the planned EWP for this build at Phase 3 (07K engine swap). It is **not a Phase 1 item** — Phase 1 retains the OEM M52 belt-driven water pump. PMU16 outputs O5+O14 are pre-assigned in the channel plan for the CWA400 (50A combined), but are not populated during Phase 1. Full CWA400 wiring specification, duty-cycle map, post-shutdown cooling logic, and PMU16 configuration are documented in `ewp-controller.wv`.

**Version warning:** CWA400 PWM version PN: Pierburg `7.07223.10.0` / BMW `11515A05704` / `11517563659` / `11517568594`. Do NOT accept Pierburg `7.03665.66.0` or BMW `11517604027` (LIN bus version — not directly PWM-controllable by MaxxECU).

---

## References

- `maxxecu-m52.wv` — GPO 6 fan relay wiring, ECU_16PIN pinout ([diagram](https://htmlpreview.github.io/?https://github.com/wesleyxcooper/e36-wiring/blob/main/output/maxxecu-m52.html))
- `ewp-controller.wv` — Phase 3 Pierburg CWA400 EWP wiring spec ([diagram](https://htmlpreview.github.io/?https://github.com/wesleyxcooper/e36-wiring/blob/main/output/ewp-controller.html))
- [CSF E36 Radiator — BimmerWorld](https://www.bimmerworld.com/Cooling/Radiators/CSF-E36-Aluminum-Radiator.html)
- [BimmerWorld SPAL E36 Fan Kit](https://www.bimmerworld.com/Cooling/Cooling_Kits/E36-Electric-Fan-Conversion-Kit-OBD2-328i-328is-323is-M3-1996-1997-1998-1999.html)
- [Mishimoto E36 Expansion Tank](https://www.mishimoto.com/bmw-e36-ai-coolant-expansion-tank-1992-1999.html)
- [Pierburg CWA400 Datasheet (tecomotive.com)](https://tecomotive.com/download/datasheets/CWA400_PWM_EN.pdf)
- [e36-wiring ewp-wiring-reference.md](https://github.com/wesleyxcooper/e36-wiring/blob/main/ewp-wiring-reference.md)

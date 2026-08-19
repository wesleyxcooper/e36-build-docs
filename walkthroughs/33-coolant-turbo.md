# Coolant & Turbo Oil Lines

**Phase:** 3  
**System tags:** `[COOLANT]` `[OIL]` `[THERMAL]`  
**Shop-mandatory:** No  
**Prerequisites:** 07K installed (`30-07k-install.md`); turbo installed (`31-air-boost.md`); iABED longitudinal oil filter housing pre-installed at Phase 2; Pierburg CWA400 (PWM version) on hand; custom 07K coolant hoses measured in-car

---

## Overview

This walkthrough covers two parallel systems: (1) the engine coolant circuit using the Pierburg CWA400 electric water pump and custom 07K hoses, and (2) the turbo oil feed and drain lines from the iABED oil filter housing to the G25-660 RR center section. Both must be complete and leak-checked before any start attempt.

**EWP critical version note:** The CWA400 must be the **PWM version** (Pierburg `7.07223.10.0` / BMW `11515A05704` / `11517563659` / `11517568594`). Post-March 2024 production is LIN bus only (Pierburg `7.03665.66.0` / BMW `11517604027`) and cannot be controlled by MaxxECU PWM. Verify part number before installing. Source: `E36_9000RPM_Project_Plan_Verified.md` Phase 2 EWP row.

---

## Parts

| Part | PN / Source | Cost |
| --- | --- | --- |
| Pierburg CWA400 (PWM version) | Pierburg `7.07223.10.0` / BMW `11515A05704` · [Dedicated Motorsports](https://dedicatedmotorsports.com/products/pierburg-cwa400-intercooler-pump-pwm-version.html) new ~$720; eBay OEM pull $50–150 used | ~$50–720 |
| Kostal 2+2 connector + terminals (CWA400 connector) | SLK 2.8 ELA terminals (PN 22124499560) for pins 1–2; SLK 5.8 ELA terminals (PN 22124544900) for pins 3–4 | ~$20–30 |
| 40A relay for CWA400 power | Bosch `0 332 002 150` | ~$10–15 |
| 10 AWG wire, min 1m (CWA400 power + GND) | — | — |
| GM 12380318 4-port inline heater valve | Carry-forward from Phase 1A coolant routing (or source on Amazon) | ~$20–40 |
| 5/8" and 3/4" silicone coolant hose (bulk) | Measure in-car; various lengths | ~$60–100 |
| 90° and 180° silicone elbows | HPS HTSEC180-075-BLK (3/4" 180° elbow) + various 90° units | ~$30–60 |
| Dorman 56152 heater fittings (firewall barb adapters) | Dorman 56152 | ~$10–20 |
| URO 032121142 C-clip (hose flange retention) | URO Parts | ~$5–10 |
| 5/16" overflow / vent line (reservoir to head vent port) | — | ~$10 |
| -4AN fittings for turbo oil feed (M12×1.5 to -4AN or direct -4AN) | To suit iABED turbo feed port spec | ~$20–40 |
| -4AN braided line (turbo coolant feed, ~300mm) | — | ~$30–50 |
| 0.9–1.0mm orifice restrictor (inline on turbo oil feed) | Standard journal bearing turbo restrictor | ~$10–20 |
| -8AN or -10AN drain fitting + bung (welded in iABED pan or provided port) | Gravity-drain from turbo back to sump | ~$20–40 |
| -8AN braided line (turbo oil drain, ~600mm) | — | ~$30–50 |
| High-temp thread sealant (fittings to block/housing) | Loctite 565 or equivalent | ~$10 |

---

## Tools

- AN wrench set (for braided line fittings)
- Hose clamp pliers
- Torque wrench
- 10mm socket (CWA400 mounting bolts, hose clamp drivers)
- Coolant fill funnel
- Vacuum fill kit (recommended for bubble-free coolant fill)
- DEI Titanium heat-sleeve (for any braided line within 18" of exhaust manifold/turbo)

---

## Procedure

### Turbo Oil Feed Line

1. Locate the dedicated turbo oil feed port on the iABED longitudinal oil filter housing (installed at Phase 2). Install the -4AN fitting (M12×1.5 to -4AN adapter or direct -4AN per iABED port spec). Use high-temp thread sealant on threads; do not overtorque aluminum housing.

2. Install 0.9–1.0mm **orifice restrictor** inline on the oil feed line. This is mandatory for journal bearing turbos — the G25-660 RR uses journal bearings. Restrictor prevents over-oiling at idle, which causes seal failure. Confirmed by @wingman703 (same 07K/turbo configuration). Source: `E36_DIY_Build_Checklist.md` Phase 3 Oil System; `E36_9000RPM_Project_Plan_Verified.md` Phase 2 iABED Housing row.
   > ⚠️ **Pitfall:** Missing orifice restrictor on a journal-bearing turbo = oil seal failure from over-pressure at idle. The G25-660 RR center section oil inlet uses a standard -4AN fitting; restrictor goes between the housing port and the first AN fitting in the feed line, not inside the turbo.

3. Route -4AN braided feed line from iABED housing → turbo center section oil inlet (top of center section). Sleeve with DEI Titanium heat-sleeve for any section within 18" of the SPA TMW22 manifold or turbo housing. Connect both ends; snug but do not final-torque until routing is confirmed.

4. Final-torque all oil feed fittings. Inspect for crossed threads (aluminum housing — finger-tight is surprisingly easy to cross).

### Turbo Oil Drain Line

5. The turbo oil drain (gravity return) exits the bottom of the G25-660 RR center section. This is the large outlet fitting at the bottom of the turbo. Gravity drains back to the sump.

6. Identify or install the drain return port on the iABED baffled oil pan. The iABED pan product page lists it as a fully baffled pan with trap door cage — confirm at install whether a dedicated turbo drain port is provided or requires a welded bung. If a bung is needed, this is a welding operation (shop or prior to pan installation). Source: `E36_9000RPM_Project_Plan_Verified.md` Drifting Reliability row, iABED pan note.
   > ⚠️ **Pitfall:** The iABED baffled pan has no built-in turbo oil return port per the product page. Turbo oil drain requires a welded bung. Confirm at purchase or have bung welded before pan installation. Source: `E36_9000RPM_Project_Plan_Verified.md` Drifting Reliability Upgrades table.

7. Route -8AN braided drain line from turbo center section drain outlet → pan bung. **The drain must slope continuously downward** with no uphill sections — oil returns by gravity only. The turbo drain must never be submerged or restricted. Keep the drain as short and straight as possible.

8. Sleeve drain line with DEI Titanium heat-sleeve near the turbo housing. AN fittings on both ends; snug and confirm gradient before final-torque.

### 07K Engine Coolant Hoses

9. **Measure in-car before ordering.** With the 07K installed, measure each coolant run with a flexible tape or hose. The specific routing for the longitudinal E36 installation differs from all transverse 07K swap references. Use the [alliedcam1 07K Coolant Line Overview (YouTube)](https://www.youtube.com/watch?v=sCYZoCULSXo) as the best available reference for longitudinal routing logic.
   > ⚠️ **Pitfall:** Specific hose part numbers from 944 07K builds (Dayco 72193/72365, Gates 22503/20416) are 944-chassis-specific — measure E36 routing with engine in car before ordering. Use those as diameter/type reference only, not direct part numbers. Source: `E36_DIY_Build_Checklist.md` Phase 3 Coolant System.

10. Build the coolant circuit:
    - Engine block outlet → upper hose → top of CSF radiator
    - Bottom of CSF radiator → Pierburg CWA400 inlet (cold/return side; pump installed inline in lower hose)
    - CWA400 outlet → engine block lower coolant inlet
    - Heater core loop: GM 12380318 inline 4-port heater valve tees into the main circuit; routes coolant through firewall to heater core and back. This preserves cabin heat on demand.
    - Overflow/vent: 5/16" line from head vent port → Mishimoto aluminum expansion tank
    - BBG rear coolant flange (at head, timing-chain end) connects to the heater feed or a large-bore crossover hose — confirm routing with BBG flange position in car.

11. Use URO 032121142 C-clips at any hose-to-cast-flange connections (OEM E36 retention method for coolant hose flanges). Silicone hose + stainless clamps everywhere else.

### Pierburg CWA400 (Electric Water Pump)

12. Mount CWA400 inline on the lower coolant hose (cold/return side, between radiator bottom and engine inlet). Outlet arrow must point toward the engine — CWA400 pumps from the cold side into the block. See `ewp-controller.wv` for full power and PWM wiring spec.

13. **Connector: Kostal 2+2 (4-pin)**
    - Pin 1 = PWM signal in (from MaxxECU PWM GPO, 680 Hz)
    - Pin 2 = BSD diagnostic (leave floating — not used with MaxxECU PWM control)
    - Pin 3 = +12V power (from PMU16 O5+O14 parallel, 50A combined)
    - Pin 4 = GND

14. **Power wiring:** PMU16 O5 and O14 wired in parallel → CWA400 Pin 3. 8 AWG minimum per wire (combined 50A handles 35.5A nominal draw). GND (Pin 4) → dedicated chassis GND stud, 10 AWG, ring terminal to bare-metal stud — do not share with signal grounds.

15. **PWM signal:** MaxxECU GPO → CWA400 Pin 1. 680 Hz PWM output. CLT-to-duty-cycle map (program in MTune):
    - 20% duty @ 60°C
    - 55% duty @ 85°C
    - 97% duty @ 105°C
    
    Wake pulse: MaxxECU must send ≥ 3ms uninterrupted high at ignition-on before transitioning to CLT map — configure startup duty override in software. Duty 0–12% = pump off or emergency run (do not use in normal map); 86–97% = full speed; 98–100% = emergency run (~5,900 RPM).

16. **Post-shutdown cooling (PMU16 managed):** Program PMU16 O5 to remain active after key-off until it receives MaxxECU CAN CLT < 70°C message (or 3-min fallback timer). PMU16 BATT+ M6 stud is always-on — O5+O14 can activate post key-off without a separate power-hold relay. Configure in PMU16 software.

17. **Pre-fire bleed procedure:** Before the first engine start, tie CWA400 Pin 1 to +12V (forces emergency/full-speed run) and connect Pin 3 directly to BATT+ without PMU16 in circuit. Run the pump standalone with coolant filled to circulate and bleed air. This allows bleeding without needing the ECU alive. Remove temporary +12V bridge and reconnect to PMU16 O5+O14 before starting engine.
    > ⚠️ **Pitfall:** Do not attempt to bleed the coolant system by starting the engine with a cold, unbled circuit. Air pockets in the head cause hot spots and CLT sensor errors that make the ECU think the engine is overheating. Bleed standalone first.

### Turbo Coolant Feed & Return

18. The G25-660 RR center section has coolant ports (turbine-side water jacket). These are **not** the oil ports — they are for coolant to the bearing housing to control heat soak after shutdown.

    - **Coolant feed:** -4AN line from engine block coolant port (or T off an existing coolant line at the block) → turbo center section coolant inlet
    - **Coolant return:** turbo center section coolant outlet → gravity drain back to coolant sump/reservoir

    Route coolant feed from a post-thermostat point (so coolant is warm when flowing). Coolant return can gravity-drain to the expansion tank or back to the lower hose. Install a check valve on the return if it exits higher than the turbo center section.

19. Confirm all coolant connections are clamped and all AN fittings are torqued. Inspect for any kinked hoses (kinked coolant hose to turbo = overheated center section after shutdown).

### System Fill & Leak Check

20. Fill coolant via expansion tank. Use 50/50 distilled water + OAT coolant (compatible with aluminum engine). Do not use tap water (mineral scale in the 07K cooling jacket).

21. Run the CWA400 in bleed mode (pin 1 tied to +12V). Fill slowly, squeeze upper hose periodically to push air toward the expansion tank. Continue until no more bubbles emerge from the expansion tank. Top off; cap tank.

22. Before first start: inspect all fittings and hose clamps for seepage. Turbo oil drain routing confirmed downward at all points. Orifice restrictor confirmed in oil feed line.

---

## References

- `E36_DIY_Build_Checklist.md` — Phase 3, Coolant System (lines 685–690); Phase 3, Oil System (lines 692–696)
- `E36_9000RPM_Project_Plan_Verified.md` — EWP / CWA400 row; iABED housing row; Drifting Reliability table
- `harnesses/ewp-controller.wv` — full CWA400 power, PWM, and GND wiring spec
- [alliedcam1 — 07K Coolant Line Overview (YouTube)](https://www.youtube.com/watch?v=sCYZoCULSXo)
- [Routing diagram — 07K coolant](https://photos.app.goo.gl/dAAYu7NJUUTBheyb8)
- [Rennlist p138 coolant guide](https://rennlist.com/forums/944-turbo-and-turbo-s-forum/803341-vw-audi-07k-2-5l-20v-i5-swap-thread-138.html)
- CWA400 datasheet: [tecomotive.com/download/datasheets/CWA400_PWM_EN.pdf](https://tecomotive.com/download/datasheets/CWA400_PWM_EN.pdf)

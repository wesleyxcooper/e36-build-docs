# Phase 0: Admin, Sourcing & Instrumentation

**Phase:** 0  
**System tags:** `[ADMIN]` `[INSTRUMENTS]` `[OIL]` `[ELECTRICAL]`  
**Shop-mandatory:** No  
**Prerequisites:** None — this is the project's starting point.

## Parts

| Part | PN / Source | Cost |
| --- | --- | --- |
| Gauge.S E36 PNP Instrument Cluster | [sorek.uk](https://shop.sorek.uk/products/gauge-s-bmw-e36-320i-323i-328i-m3-direct-replacement-instrument-cluster-pnp) | $247 |
| Bosch PST-F1 Dual Oil Temp/Pressure Sensor + M14×1.5→M10×1.0 Adapter | [sorek.uk](https://shop.sorek.uk/products/bosch-pst-f-1-vanos-banjo-m14x1-5-to-m10x1-0-sensor-adapter-m50-m52-m54) | ~$65 |

> **Do NOT buy** the OBD2 adapter ($68) — it is redundant. The OEM cluster harness already provides everything the Gauge.S unit needs (12V, GND, K-line, CAN).

## Tools

- VIN decoder: [bmwarchive.org](http://www.bmwarchive.org/vin/bmw-vin-decoder.html) or [realoem.com](https://www.realoem.com/)
- Feeler gauge (for LSD physical check at PPI)
- Camera / phone (seller documentation, PPI, wiring photos)

## Procedure

### Car Sourcing

1. ✅ Identify target car: **323i or 328i RHD convertible, manual gearbox** — UK, AU, or ZA preferred. Alloy M52 block required; confirm it is not the iron M50.
   > ⚠️ **Pitfall:** Confirm alloy block (M52) vs iron (M50). Look for rust in chassis rail seams and convertible floor pans — these rot badly in UK cars. Verify VIN decodes to convertible body style.

2. ✅ Verify diff ratio and LSD status before committing to a car — **ratio and LSD are independent specs**, not linked.
   - **Step 1 — Do yourself while window shopping:** Run VIN on [bmwarchive.org VIN decoder](http://www.bmwarchive.org/vin/bmw-vin-decoder.html) or [realoem.com](https://www.realoem.com/). Look for **code 209** = LSD (also check for 220 — E36 forums cite it, but SA doc lists 209 as LSD; verify both). Manual 328i standard ratio: **3.46**.
   - **Step 2 — Ask seller:** Request photo of the build sheet (Fahrzeugauftrag) stapled under the rear seat cushion. Lists all SA codes in German abbreviations.
   - **Step 3 — At PPI:** Rear wheels off ground, neutral, turn one wheel — open diff spins opposite freely; LSD resists and rotates same direction.
   - If upgrading ratio later: source **E36 M3 differential** (~$800–1,200 used) for 3.15 + LSD in one unit.

3. ✅ Verify non-tilt steering column — **required for EPS kit compatibility**.
   - **Step 1 — Do yourself while window shopping:** Run VIN on [bmwarchive.org VIN decoder](http://www.bmwarchive.org/vin/bmw-vin-decoder.html). Codes **244, 245, 246, or 247** = adjustable/tilt column (wrong car). None of these = fixed column (correct). Year guide: 1996+ is likely non-tilt but European/RHD is inconsistent — always confirm via VIN.
   - **Step 2 — Ask seller:** Request photo of the underside of the steering column between the wheel and the dash. Tilt = visible gray/black plastic lever protruding from the column tube. Non-tilt = smooth uninterrupted plastic shroud. Reference: [Pelican Parts E36 Tilt Retrofit](https://www.pelicanparts.com/BMW/techarticles/E36-Tilt/E36-Tilt.htm) (photos of lever in situ).

4. ✅ Commission pre-ship PPI in country of origin.
   > ⚠️ **Pitfall:** Confirm alloy block (M52) vs iron (M50). Look for rust in chassis rail seams and convertible floor pans — these rot badly in UK cars. Verify VIN decodes to convertible body style.

### Import Path — Choose One

5. ✅ Choose your sourcing and import path:
   - **Option A — Full turnkey:** [Open Air Imports](https://www.openairimports.com/) (Baltimore/Richmond VA, ph: 443-300-8745). Sources the car, photographs pre-purchase, collects, ships, clears US customs, delivers. Best for hands-off buyers. Confirmed active.
   - **Option B — Self-source, outsource shipping:** Find the car yourself on [AutoTrader UK](https://www.autotrader.co.uk/) or [PistonHeads](https://www.pistonheads.com/) (post a "Wanted" ad to have sellers come to you) → commission a UK independent PPI ([Drewmotive](https://www.drewmotive.com/pre-purchase-inspections/classic-import-car-pre-purchase-inspection.html) or local BMW specialist) → hand off to Open Air Imports or [CFR Classic](https://cfrclassic.com/international-car-shipping/import-car-from-uk-to-usa/) (~$2,450 UK→US) for collection and shipping. Most control over which car you buy.
   - **Option C — AU sourced:** [Gumtree](https://www.gumtree.com.au/) / [Carsales](https://www.carsales.com.au/) for finding the car; similar handoff process for shipping. West Coast US port (LA/Long Beach) is closer for AU origin.
   > ⚠️ **Pitfall:** The 25-year rule uses the **manufacture date** on the door jamb plate, not the model year. Confirm the specific car's build date clears the threshold before it ships — a December 1999 build date is not the same as a 1999 model year.

### Insurance & Registration

6. ✅ Secure specialty insurance (Hagerty / Grundy / American Collectors) **before** the car leaves port.

7. ✅ Register in your state as antique/classic.

### Long-Lead Orders

8. ✅ Source OEM hardtop (with car or separately — eBay, FB Marketplace, ~$500–1,500). Prioritize sourcing a car that comes with one.

9. ✅ Order **Gauge.S E36 PNP Cluster** ([sorek.uk](https://shop.sorek.uk/products/gauge-s-bmw-e36-320i-323i-328i-m3-direct-replacement-instrument-cluster-pnp)) — $247. Long-lead item; order at project kickoff.
   - Cluster alone displays coolant temp AND oil temp across display layouts — no second unit needed for Phase 0.
   - Gauge.S POD 52mm ($413, preorder Nov 2026) is an optional future add for a dedicated second screen — skip for now.

10. ✅ Order **Bosch PST-F1 + M14×1.5→M10×1.0 adapter** ([sorek.uk](https://shop.sorek.uk/products/bosch-pst-f-1-vanos-banjo-m14x1-5-to-m10x1-0-sensor-adapter-m50-m52-m54)) — ~$65.

### Gauge.S Cluster Installation ✅ DIY

11. Read the wiki at [wiki.sorek.uk](https://wiki.sorek.uk) **before** installing — definition files must match your ECU type: MS41.x for OBD2 E36; MaxxECU CAN profile from Phase 1 onward.
    > ⚠️ **Pitfall:** Read the wiki at [wiki.sorek.uk](https://wiki.sorek.uk) before installing — definition files need to match your ECU type (MS41.x for OBD2 E36; MaxxECU CAN profile from Phase 1 onward). Wrong definition = missing or wrong readings.
    > ⚠️ **Pitfall:** Do NOT buy the OBD2 adapter ($68) for the PNP cluster — it is redundant. The OEM cluster harness already provides everything the unit needs.

12. 🔧 Install cluster — plugs into OEM E36 cluster connectors (PNP). No harness modification required.
    - Wiring: [`gauge-s-can.wv`](https://github.com/wesleyxcooper/e36-wiring/blob/main/harnesses/gauge-s-can.wv) ([diagram](https://htmlpreview.github.io/?https://github.com/wesleyxcooper/e36-wiring/blob/main/output/gauge-s-can.html)) · [`body-x20.wv`](https://github.com/wesleyxcooper/e36-wiring/blob/main/harnesses/body-x20.wv) ([diagram](https://htmlpreview.github.io/?https://github.com/wesleyxcooper/e36-wiring/blob/main/output/body-x20.html))
    - **Video:** [Gauge.S E36 Features & Installation](https://www.youtube.com/watch?v=v5P81D6qujs) — **7:00** installation | **1:12** features | **13:32** software/setup
    - Reads OEM NTC coolant sensor at the block via existing harness — no extra wiring for coolant temp.
    - Reads Bosch PST-F1 oil sensors via the analog input wires (0–5V, up to 7 channels).
    - Data logging to microSD card; WiFi SD access from phone.
    - **Phase 3 upgrade:** In MaxxECU phase, switch from raw sensor mode to **MaxxECU CAN bus feed** — richer data, no sensor wiring changes needed.

### PST-F1 Sensor Installation 🔧 DIY with specialty tools

13. Install Bosch PST-F1 at M52 VANOS banjo bolt location: M14×1.5 banjo port at block → sorek M14×1.5→M10×1.0 adapter → PST-F1 threads directly in (M10×1.0).
    - Wiring: [`pst-f1-sensor.wv`](https://github.com/wesleyxcooper/e36-wiring/blob/main/harnesses/pst-f1-sensor.wv) ([diagram](https://htmlpreview.github.io/?https://github.com/wesleyxcooper/e36-wiring/blob/main/output/pst-f1-sensor.html))

14. Wire the 4-pin sensor:
    - Pressure output (0–5V, 0–10 bar) → Gauge.S **A1 or A2** — these are 5V-tolerant pins.
    - Temp output (NTC, –40 to +140°C) → Gauge.S **A3 or A4** — these have the correct NTC pullup resistor built in.
    - Ground → Gauge.S GND; 5V supply → Gauge.S 5V reference.
    - Gauge.S v5.5+ supports PST-F1 as a single-header connection via the EE pin — check PCB version label before wiring.
    - Displays actual oil temp °C and oil pressure bar/psi as live numbers. The M52 has no factory oil temp sensor — the OEM cluster oil gauge is a binary idiot light only.
    - MaxxECU can also read PST-F1 outputs in parallel via its own analog inputs — wire once, two consumers.
    > ⚠️ **Pitfall:** A1/A2 are 5V-tolerant; A3/A4 are 3.3V-tolerant with NTC pullup. **Do not swap them** — pressure signal on A3/A4 will read incorrectly; NTC temp on A1/A2 will not read at all without the pullup.

15. **Phase 3 note:** The iABED 07K longitudinal oil filter housing (required for the engine swap) has a dedicated M10×1.0 port. At the 07K swap, unbolt PST-F1 from the VANOS adapter and thread into the new housing port. Zero wiring changes.

16. **Coolant fan tap note (if running standalone SPAL FAN-PWM-V3 controller):** The OEM coolant NTC sensor signal wire can be tapped in parallel — Gauge.S, the ECU, and the FAN-PWM-V3 all read the same sensor simultaneously with no interference. At the same temp threshold set in the FAN-PWM-V3, the matching number will display on the Gauge.S cluster in real time.

## References

- [bmwarchive.org VIN decoder](http://www.bmwarchive.org/vin/bmw-vin-decoder.html)
- [realoem.com](https://www.realoem.com/)
- [Pelican Parts E36 Tilt Retrofit](https://www.pelicanparts.com/BMW/techarticles/E36-Tilt/E36-Tilt.htm)
- [Drewmotive PPI](https://www.drewmotive.com/pre-purchase-inspections/classic-import-car-pre-purchase-inspection.html)
- [Open Air Imports](https://www.openairimports.com/) · ph: 443-300-8745
- [CFR Classic](https://cfrclassic.com/international-car-shipping/import-car-from-uk-to-usa/)
- [Gauge.S E36 Features & Installation (YouTube)](https://www.youtube.com/watch?v=v5P81D6qujs)
- [Gauge.S wiki](https://wiki.sorek.uk)
- Wiring: [`gauge-s-can.wv`](https://github.com/wesleyxcooper/e36-wiring/blob/main/harnesses/gauge-s-can.wv) · [`body-x20.wv`](https://github.com/wesleyxcooper/e36-wiring/blob/main/harnesses/body-x20.wv) · [`pst-f1-sensor.wv`](https://github.com/wesleyxcooper/e36-wiring/blob/main/harnesses/pst-f1-sensor.wv)

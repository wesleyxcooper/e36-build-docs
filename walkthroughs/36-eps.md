# Electric Power Steering — EPS Column Installation

**Phase:** 3  
**System tags:** `[STEERING]` `[ELECTRICAL]`  
**Shop-mandatory:** No  
**Prerequisites:** Condor Speed Shop Slim RHD steering shaft installed (`$308.99`, already done in Phase 1); SLR Mini Kit installed; non-tilt steering column confirmed at car sourcing; column shipped to EPowerSteering for core-exchange rebuild

---

## Overview

This walkthrough covers the EPowerSteering.com BMW E36 EPS kit (KIT-33), a column-assist electric power steering unit. The kit replaces the mechanical steering column internals with a motorized column assembly. The existing hydraulic rack stays in place and functions as a manual rack; the column-assist EPS provides all steering assistance upstream of the firewall.

**This kit has NO vehicle-speed input and NO ECU/CAN interface.** Assist level is a fixed, driver-set value from a manual Adjustment Knob potentiometer. The earlier plan note referencing MaxxECU GPO → VSS input for speed-sensitive assist is **not supported by this product** — the Basic EPS Controller (KIT-33) accepts only the potentiometer. Source: `harnesses/eps-column.wv` lines 11–21.

**Wiring reference:** `harnesses/eps-column.wv`

---

## Pre-Order Decisions (Resolve Before Ordering)

### 1. Tilt vs Non-Tilt Column

> ⚠️ **Pitfall:** This is a core-exchange product — EPowerSteering rebuilds the column you send them. Physically check the car for a tilt release lever under the column shroud before selecting the order option. Do not assume. A non-tilt column is required for this build (confirmed at Phase 0 sourcing via VIN — codes 244/245/246/247 = tilt; none = non-tilt). If the car turns out to have a tilt column and you want non-tilt, remove the tilt hardware (mounting block, adjustment lever, locking pins) and replace with a non-tilt mounting block from a donor column before shipping. Source: `harnesses/eps-column.wv` TODO list.

### 2. HPS Pump Decision

The EPowerSteering E30/E36 install PDF is **completely silent on the hydraulic system** — the kit is column-assist only, with no mention of pump removal, rack bypass, or belt changes. Two configurations are valid:

- **Option A — EPS column only, HPS pump coexists:** Run EPS column alongside the existing hydraulic pump. The pump continues to circulate fluid but at low assist pressure (de-powered rack or open loop). Simpler install; belt path unchanged.
- **Option B — EPS column + HPS pump delete:** Delete the HPS pump from the belt path using the **K2 Industries E36 PS Delete Kit** ([k2-industries.com/products/e36-power-steering-delete-kit](https://k2-industries.com/products/e36-power-steering-delete-kit)) — provides bypass block + shorter serpentine belt for M52/M50/S50/S52. Cleaner install, frees up belt path. If running the TDC Shop 07K AC Delete Kit belt layout, confirm the HPS pump pulley's role in the routing before deleting.

> ⚠️ **Pitfall:** If deleting the HPS pump (Option B) and also running the TDC Shop 07K AC Delete Kit ($365 shipped), confirm the PS pump bracket and belt routing are compatible with the billet dual-belt alternator pulley. The 07K AC delete kit repositions the belt path — verify the PS delete is compatible with the new routing before ordering the shorter belt. Source: `E36_9000RPM_Project_Plan_Verified.md` Accessory Belt row.

### 3. Confirm Column Tube OD

Vendor explicitly calls out the column tube OD (1.87" or 1.75") as a common mismatch point. Measure the OD of your E36 steering column tube at the steering wheel end before ordering or shipping. Source: `harnesses/eps-column.wv` TODO list.

---

## Parts

| Part | PN / Source | Cost |
| --- | --- | --- |
| EPowerSteering BMW E36 EPS Kit (KIT-33) | [epowersteering.com/purchase/product/bmw-e36/](https://epowersteering.com/purchase/product/bmw-e36/) | ~$1,300 |
| K2 Industries E36 PS Delete Kit (Option B only) | [k2-industries.com/products/e36-power-steering-delete-kit](https://k2-industries.com/products/e36-power-steering-delete-kit) | Check current price |
| 60A Maxi fuse (supplied with kit) | Included in KIT-33 | — |
| 10A Mini ATM fuse (supplied with kit) | Included in KIT-33 | — |
| 10 AWG wire, ~3m (Steering ECU battery + GND) | — | ~$10–15 |
| 18 AWG wire, ~2m (EPS Controller IGN + GND) | — | ~$5 |
| 22 AWG wire, ~2m (Adjustment Knob) | — | ~$5 |
| PMU16 spare output O8 (IGN-switched 10A source for EPS Controller) | Already wired (PMU16 from Phase 1 — O8 designated spare) | — |

---

## Tools

- Standard socket set, trim tools (column removal/install)
- Torque wrench
- Multimeter (verify wiring before energizing)
- Wire labels (Brady M210)
- Electrical tape / heat shrink

---

## Procedure

### Ship Column for Core Exchange

1. Remove the E36 steering column from the car. This requires removing the steering wheel (clockspring removed at Phase 1 — confirm), upper and lower column shrouds, and unbolting the column from the dash bracket and intermediate shaft coupling.

2. **Before shipping:** document the column length, mounting geometry, and output shaft spline size. Confirm the output shaft spline is compatible with the Condor Speed Shop Slim RHD shaft lower U-joint (installed at Phase 1). The Condor shaft operates below the firewall and is unaffected by the column-side EPS conversion — but verify at order time.

3. Ship the column core to EPowerSteering (address from vendor). Specify: non-tilt, column tube OD measured in step above. Allow lead time for rebuild.

### Electrical Planning Before Column Arrives

4. **Steering ECU power circuit:**
   - Battery +12V → 60A Maxi fuse (within a few inches of battery terminal, separate from MAIN_FUSE in power-distribution.wv) → 10 AWG cable → Steering ECU receptacle C (red power lead)
   - Steering ECU receptacle C GND → chassis ground stud → 10 AWG GND cable
   - Source: `harnesses/eps-column.wv` STEERING_ECU and CABLE_ECU_PWR_POS notes

5. **EPS Controller IGN power:**
   - IGN-switched +12V from PMU16 O8 (spare 10A channel, power-distribution.wv) → 10A Mini ATM fuse (supplied) → EPS Controller red wire
   - EPS Controller black wire → nearest chassis ground
   - PMU16 O8 provides digital fusing — no additional blade fuse at fuse block needed
   - Source: `harnesses/eps-column.wv` IGN_12V_TAP notes

6. **Adjustment Knob:**
   - Route 22 AWG yellow + gray pair from planned dash-mount location → EPS Controller box location
   - **RHD placement:** Mount Adjustment Knob on the right-hand side of the dash/console — reachable while driving from the right seat. The vendor's reference photos assume LHD (knob on the left).
   - Source: `harnesses/eps-column.wv` ADJUSTMENT_KNOB notes

### Column Installation

7. When rebuilt column returns: inspect the Motor Assembly pre-terminated umbilical (blue power plug + grey 4-pin sensor plug). Do not re-pin or modify factory plugs — mate factory connectors only.

8. Install rebuilt EPS column under dash in place of stock column. Output shaft couples to the existing Condor Speed Shop Slim RHD shaft lower section. Verify both U-joint angles are below ~15° at install — steep angles create torque oscillation that can feed through the EPS controller as noise. Source: `E36_DIY_Build_Checklist.md` Phase 1 Steering.

9. Mount Steering ECU to bare metal surface under dash as a heat sink. Do not fully enclose it — vendor requires air exposure. Source: `harnesses/eps-column.wv` STEERING_ECU notes.

10. Mate all factory plugs:
    - Steering ECU receptacle D (blue) + receptacle E (grey 4-pin) → Motor Assembly umbilical (pre-terminated)
    - Steering ECU receptacle B (pink + purple) → EPS Controller plug A (pink + purple)

11. Connect power wiring per step 4–5 above. Confirm all connections match `harnesses/eps-column.wv` connection block before energizing.

### Calibration & Verification

12. **Single relay click on IGN-on is normal.** A double-click indicates a wiring or connection fault — diagnose before driving. Source: `harnesses/eps-column.wv` STEERING_ECU notes.

13. **Basic System Verification procedure (from EPowerSteering):**
    - Adjustment Knob fully counter-clockwise (no assist)
    - IGN on → single relay click
    - Wait ~10 seconds → relay clicks off (no assist mode confirmed)
    - Slowly turn Adjustment Knob clockwise until relay clicks back on — that is minimum assist. Continue clockwise to desired level.

14. **EPS calibration at ~900° lock-to-lock (SLR Mini Kit installed):** Start with lighter assist than expected. At ~900° the steering is already substantially quicker than the stock 1,260° rack — heavy EPS assist amplifies small inputs and makes the car feel twitchy at highway speeds. Dial in: full parking assist → reduce until highway feels settled → confirm feel in drift session. Source: `E36_DIY_Build_Checklist.md` Phase 3 Steering.
    > ⚠️ **Pitfall — EPS calibration at ~900°:** Start lighter than you expect to need. At this ratio the steering is already substantially quicker than stock — heavy assist amplifies small inputs and feels twitchy at speed. If Z3 rack is added later (drops to ~720–800°), re-calibrate lighter again. Source: `E36_DIY_Build_Checklist.md` Phase 3 Steering.

15. **Left/right effort balance:** The Calibration Potentiometer (under the round cover hole on the Steering ECU, **separate from the driver-facing Adjustment Knob**) trims left vs right steering effort. Extremely sensitive — small adjustments only. Adjust only if left/right effort is noticeably asymmetric.

---

## References

- `harnesses/eps-column.wv` — full wiring spec, connector pinout, TODO list, calibration procedure
- `E36_DIY_Build_Checklist.md` — Phase 3, Steering — EPS (lines 746–758)
- `E36_9000RPM_Project_Plan_Verified.md` — Power Steering row; Accessory Belt row
- EPowerSteering install PDFs: [BMWE30Kit.pdf](http://epowersteering.com/pdf/BMWE30Kit.pdf) · [BasicEPSController.pdf](http://epowersteering.com/pdf/BasicEPSController.pdf) (same controller family as KIT-33)
- [EPowerSteering E36 kit product page](https://epowersteering.com/purchase/product/bmw-e36/)
- [K2 Industries E36 PS Delete Kit](https://k2-industries.com/products/e36-power-steering-delete-kit)
- [Condor Speed Shop Slim RHD Shaft](https://www.condorspeedshop.com/products/steering-shaft-conversion-e36)

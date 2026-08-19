# Ongoing Maintenance Schedule

**Phase:** 4 (Ongoing)  
**System tags:** `[ENGINE]` `[DRIVETRAIN]` `[ELECTRICAL]` `[CHASSIS]`  
**Shop-mandatory:** Partial (see per-item notes)  
**Prerequisites:** Phase 4 break-in and calibration complete (`40-calibration.md`); 500-mile oil change done; Blackstone baseline sample on file

---

## Overview

This walkthrough is the living maintenance reference for the E36 9000 RPM restomod. All intervals assume mixed street and track use. Track use (HPDE, drift events) accelerates wear on oil, 8HP fluid, bushings, and brake components — use the track-day trigger where listed alongside the mileage interval.

**The most important rule:** never miss an oil analysis. The Blackstone Labs baseline from `40-calibration.md` Step 2 is only useful if you continue sampling on the same schedule — the trend across samples is what catches wear before it becomes failure.

---

## Master Maintenance Table

| Item | Spec / Product | Interval |
| --- | --- | --- |
| Engine oil | **Motul 300V 15W50** | 3,000 mi street / **every 3 track days** |
| Oil filter | OEM or Mann W 712/95 | Every oil change |
| Oil analysis | Blackstone Labs | Every 2nd oil change |
| 8HP transmission fluid | **ZF Lifeguard 8 only** | 30,000 mi street / **annual (track use)** |
| Solid lifter shim audit | Feeler gauge — all 20 valves | Every 10,000 mi |
| Timing chain inspection | Guide wear check (visual) | Every 50,000 mi |
| Poly bushing re-grease | Revshift-supplied poly lubricant | Every 20,000 mi / **annually** (whichever first) |

Source: `E36_DIY_Build_Checklist.md` Ongoing Maintenance Schedule, lines 795–802.

---

## Engine Oil

### Oil Spec

**Motul 300V 15W50** — full-synthetic ester-base racing oil. Do not substitute with a different brand at the same viscosity — ester-base chemistry is important for high-revving solid-lifter valvetrains. Do not use any oil with an "Energy Conserving" or "Resource Conserving" API designation (these contain friction modifiers that reduce bearing film strength at high RPM).

Source: `E36_DIY_Build_Checklist.md` Ongoing Maintenance Schedule line 797.

### Change Interval

- **Street:** every 3,000 miles
- **Track:** after every 3 track days, regardless of mileage since last change
- Always change the filter at every oil change. The 07K filter is on the driver side of the engine (accessible from above). Use a torque wrench — over-tightening the filter housing cap on an aluminum block is a common and expensive mistake.

### Oil Analysis

Send a sample to Blackstone Labs at **every second oil change** (every 6,000 miles street, or every 2nd track-day cycle). Compare each sample against your baseline (500-mile sample from `40-calibration.md`).

**Watch for:**
| Element | What it indicates | Action threshold |
| --- | --- | --- |
| Iron | Ring/bore, cam/lifter wear | >50 ppm above baseline |
| Copper | Bearing wear (rod/main) | >30 ppm above baseline |
| Aluminum | Piston or block wear | Any elevation above baseline |
| Silicon | Dirt ingestion (air filter, intake seal) | >15 ppm |
| Sodium/coolant | Head gasket seep | Any reading |

If any element is elevated: do not wait for the next scheduled change. Do an early sample and investigate before the next track day.

---

## 8HP Transmission Fluid

### Fluid Spec

**ZF Lifeguard 8 only.** There is no approved substitute. ZF specifies this fluid for all 8HP45 variants — it provides the friction characteristics the TCU's clutch pressure model was calibrated against. Third-party "compatible" fluids that shift fine initially can cause abnormal clutch wear at the microscopic level that only shows up in later mileage.

Source: `E36_DIY_Build_Checklist.md` Ongoing Maintenance Schedule line 799.

### Change Interval

- **Street:** every 30,000 miles
- **Track:** **annually** if the car sees multiple track events per year. The 8HP runs significantly hotter under track use — fluid degradation is heat-driven, not just mileage-driven.

### Change Procedure

The 8HP45 is a fill-for-life unit from the factory, but this build is not a factory application. The fill plug is on the driver side of the transmission. Drain from the pan drain plug (if present for this ZF generation) or suction out the old fluid via the fill port. Use a ZF-approved fill tube and pump to refill — the 8HP fill spec is temperature-dependent (fill until fluid runs from the overflow port at operating temperature). This is a messy job; do it on a lift with the exhaust clear.

---

## Solid Lifter Shim Audit (Valve Clearances)

### Why

The 07K uses solid shim-over-bucket valvetrain. Clearances tighten as the valve seat and shim surfaces micro-polish during use. Tight intake clearance causes late valve closing (loses cylinder fill). **Tight exhaust clearance on a turbocharged engine causes the exhaust valve to hold slightly open — loses compression and burns the valve face.** A burnt exhaust valve is not a warranty repair.

Source: `30-07k-install.md`; `E36_DIY_Build_Checklist.md` line 792.

### Interval

Every 10,000 miles. After any engine overheat event: check immediately, do not wait for the interval.

### Procedure

1. Let engine cool fully (overnight).
2. Remove valve cover. Clean mating surface before lifting to avoid debris dropping into the engine.
3. Check all 20 clearances (5 cylinders × 4 valves — but the 07K is a 5-cylinder inline with 4 valves per cylinder = 20 total) with a feeler gauge at TDC for each cylinder.
   - **Intake:** 0.15–0.20mm (cold)
   - **Exhaust:** 0.20–0.30mm (cold)
4. Record all 20 clearances in a spreadsheet. Compare to previous audit — a shim that is trending tighter needs to be swapped before it goes out of spec.
5. To adjust: remove cam carrier, pop the lifter bucket, pull the shim, replace with the correct size. Shim selection: Alien Engineering solid lifter shims. Source: `30-07k-install.md` References.
6. Reinstall valve cover with a new gasket. Torque cover bolts to spec in the cross pattern (8 Nm typical — do not over-torque on the plastic/composite cover if applicable).

---

## Timing Chain Inspection

### Interval

Every 50,000 miles, or immediately if you hear a rattle from the timing cover at cold start that disappears once warm.

### Procedure

The 07K timing chain does not have an external tensioner adjustment — the tensioner is hydraulic and self-adjusting. Inspection is visual:
1. Remove the timing cover (engine-out or in-car depending on clearance). This is a significant job — factor ~6–8 hours.
2. Inspect the chain guides (plastic) for groove wear through to the metal backing. Any metal exposure = replace guide immediately.
3. Inspect chain stretch with a ruler — measure a known number of links against spec. Most chains show minimal stretch at 50,000 miles if oil changes are kept current; guides are typically the failure mode first.
4. If guides are worn or chain is stretched: replace chain, guides, and tensioner as a set.

---

## Poly Bushing Re-Grease

### Spec

Use **Revshift-supplied poly lubricant only** (included with each bushing kit). Incorrect lubricants (petroleum-based grease, WD-40, lithium grease) attack polyurethane and cause premature cracking.

Source: `E36_DIY_Build_Checklist.md` Ongoing Maintenance Schedule line 802.

### Interval

Every 20,000 miles or annually — whichever comes first. In wet climates or with frequent track use (water, debris, thermal cycling), grease annually regardless of mileage.

### Locations to grease

- Subframe bushings (front and rear)
- Control arm bushings (front upper and lower)
- Trailing arm bushings (rear)
- Sway bar end links and drop links (if poly)
- Steering rack bushings (if poly)

### Procedure

For most E36 poly bushings: access the grease nipple (zerk fitting, if Revshift items include them) with a grease gun. Some Revshift bushings do not have zerks — these require partial disassembly (remove bolt, slide arm out, manually apply grease, reassemble). The car will need to be on a lift with suspension at ride height for final bolt torque (torque poly bushing bolts at ride height, not with the suspension hanging).

---

## Additional Track-Use Checks (After Every Event)

These are not in the source checklist but are standard practice for any track car:

| Check | Notes |
| --- | --- |
| Wheel torque | Re-torque lug bolts after each event (120 Nm for E36 steel hubs) |
| Brake pad thickness | Inspect pads; replace before next event if below 3mm |
| Fluid levels | Oil, coolant, brake fluid — top up or replace as needed |
| Wideband sensor | Inspect bung for security; sensor body for heat damage |
| Hose clamps | Squeeze-check all intercooler couplings and radiator hoses by hand |
| Oil temp log | Review MTune logs for sustained oil temp above 130°C — add oil cooler if chronic |
| EPS column function | Confirm single relay click on IGN-on; no unusual steering effort asymmetry |

---

## References

- `E36_DIY_Build_Checklist.md` — Phase 4 Ongoing Maintenance Schedule (lines 794–802)
- `40-calibration.md` — break-in milestones, initial Blackstone Labs sample
- `30-07k-install.md` — valve clearance specs, shim sourcing
- `36-eps.md` — EPS post-install calibration notes
- [Blackstone Labs oil analysis](https://blackstone-labs.com)
- [Motul 300V 15W50 product page](https://www.motul.com/us/en/300-v-4t-15w50)
- [ZF Lifeguard 8 product page](https://aftermarket.zf.com/go/en/products/product/lifeguard-fluid-8/)
- [Alien Engineering solid lifter shims](https://www.alien-engineering.com/collections/solid-lifter-shims)

# Phase 2: 07K Oil System

**Phase:** 2  
**System tags:** `[OIL]`  
**Shop-mandatory:** LPS oil pump mod is a send-in service (no storefront). All other items are owner-installed.  
**Prerequisites:** Longblock returned from Euromotive (sealed); LPS-modified pump already installed during Euromotive build (if coordinated correctly); iABED housing and pan on hand

---

## Parts

| Part | PN / Source | Cost |
| --- | --- | --- |
| iABED Longitudinal Oil Filter Housing with Thermostat | PN 462-635-0047 · [byiabed.com](https://byiabed.com/07K-LONGITUDINAL-Oil-Filter-housing-W-THERMOSTAT_p_156.html) | $529.00 |
| iABED Baffled Longitudinal Oil Pan | PN 462-103-07K-LAB · byiabed.com | — |
| LPS 07K Oil Pump Mod (send-in service) | [linderpowersystems.com](https://linderpowersystems.com) | ~$150 + shipping (~$190–210 all-in) |
| -4AN fitting for turbo oil feed port | M12×1.5 to -4AN adapter (or direct -4AN per iABED port spec) | — |
| Inline orifice restrictor (0.9–1.0 mm) | McMaster or AN fittings supplier | — |
| TTRS Oil Squirters (×5) | `06J103154B` (alt: `06J103154AA`) · ECS Tuning / FCP Euro / eBay | — |
| Bosch PST-F1 oil temp/pressure sensor | [sorek.uk](https://shop.sorek.uk/products/bosch-pst-f-1-vanos-banjo-m14x1-5-to-m10x1-0-sensor-adapter-m50-m52-m54) | ~$65 (incl. adapter — adapter is M52-specific; iABED housing threads PST-F1 directly into its M10×1.0 port, no adapter needed at Phase 3) |

---

## Tools

- Torque wrench (oil squirter install: 27 ft-lbs)
- AN line assembly tools (-4AN)
- Drill/tap set (if tapping M16×1.5 cross-channel port — see below)

---

## Procedure

### 1 — LPS oil pump mod — send early (before Euromotive dropoff)

**Send the 07K oil pump to Linder Power Systems (LPS) before the block goes to Euromotive.**

- Contact LPS directly: [linderpowersystems.com](https://linderpowersystems.com) — no storefront, contact-only
- **Early-style 07K pump only** — verify your pump version matches before sending; later pumps use a different design
- **Lead time: 4–8 weeks** — send early in Phase 2 so the modified pump returns before Euromotive finishes the longblock
- Coordinate with LPS to **ship the modified pump directly to Euromotive** — eliminates a second shipment leg and ensures Euromotive has it in hand for assembly

**Why the mod is mandatory:** The stock 07K oil pump cavitates above ~8,000 RPM under limiter-bashing, starving the bearings. At 9,000 RPM in drift use, this is a bearing-killing failure mode. The LPS mod raises the cold relief pressure to 80–85 PSI (SAE30 ref) with a hot WOT target of ~55–65 PSI at the block.

> ⚠️ **Pitfall:** LPS lead time can be 4–8 weeks. A pump that hasn't returned delays the entire longblock assembly. Send the pump early, before any other Phase 2 assembly work is scheduled with Euromotive.

Reference: [LPS oil pump mod — YouTube](https://www.youtube.com/watch?v=nXsUm8ph2Ys) · [07K turbo build reference](https://www.youtube.com/watch?v=V2OxGOoeDmI)

### 2 — TTRS oil squirters (Euromotive installs during longblock build)

Bring 5× `06J103154B` squirters to Euromotive at engine dropoff. They are thread-in replacements for the stock BGP units:

- 4-hole banjo bolt design vs 2-hole stock — higher-pressure spray for forced induction (increased blowback pressure)
- Torque to **27 ft-lbs** per VW Erwin
- Install during short block assembly before the crank goes in

### 3 — iABED longitudinal oil filter housing installation

Install the **iABED Longitudinal Oil Filter Housing with Thermostat** (PN 462-635-0047, $529, [byiabed.com](https://byiabed.com/07K-LONGITUDINAL-Oil-Filter-housing-W-THERMOSTAT_p_156.html)) on the intake side of the engine.

> ⚠️ **No install video exists for the longitudinal version.** The [07k iABED Industries Oil Filter Block Install (YouTube)](https://www.youtube.com/watch?v=oO_H64Pp7HY) video (CaddyFab Garage / Boost Brothers Garage) is **transverse-only** and does not apply to the longitudinal housing. The iABED product page for the longitudinal housing has only a BOM table — no install video or PDF.

**For longitudinal-specific guidance:**
- Contact iABED directly: **+1 510-275-4775**
- Or locate build threads in the **07K Swap Facebook group**, specifically **@wingman703's longitudinal build** — the primary confirmed longitudinal reference for this swap

The housing includes a built-in thermostat for the oil cooler circuit and a **dedicated M10×1.0 port** for the Bosch PST-F1 oil temp/pressure sensor (move from M52 VANOS banjo adapter to this port at Phase 3 — zero wiring changes).

### 4 — Turbo oil feed port setup

The iABED housing has a **dedicated turbo oil feed port** — confirmed by @wingman703.

**Setup:**
1. Install a **-4AN fitting** at the iABED dedicated turbo feed port (M12×1.5 to -4AN adapter, or direct -4AN per iABED port specification — confirm port thread at install)
2. Route a -4AN braided steel line from the housing port to the G25-660 RR turbo oil inlet
3. Install a **0.9–1.0 mm orifice restrictor inline** on the feed line — standard for journal-bearing turbos; prevents over-oiling at idle which causes seal blow-out and blue smoke

**Alternative oil feed tap — M16×1.5 cross-channel port:**  
The 07K block has an M16×1.5 cross-channel port on the oil gallery that can serve as an alternative turbo oil feed source if the iABED housing feed port is not used or cannot be routed to the turbo conveniently. Tap this port with an M16×1.5 NPT→AN adapter. The same 0.9–1.0 mm orifice restrictor must be used inline regardless of which port is tapped. Confirm port location at engine install — this is a block-gallery tap and requires proper thread engagement depth to avoid obstructing the gallery.

### 5 — iABED baffled longitudinal oil pan installation

Install the **iABED Baffled Longitudinal Oil Pan** (PN 462-103-07K-LAB, byiabed.com). If Euromotive can install it on their stand during longblock assembly, coordinate at dropoff — this is the preferred path for correct torque and sealing. If not, owner installs it after longblock delivery.

Clean all mating surfaces. Use appropriate sealant per iABED specification. Torque pan bolts in pattern to spec.

### 6 — PST-F1 relocation at Phase 3

At Phase 3 (swap), move the Bosch PST-F1 oil temp/pressure sensor from its M52 VANOS banjo adapter location to the iABED housing's **dedicated M10×1.0 port**. Zero wiring changes — same Gauge.S and MaxxECU analog inputs. The M52 VANOS adapter is discarded with the M52.

---

## References

- [iABED Longitudinal Oil Filter Housing (byiabed.com)](https://byiabed.com/07K-LONGITUDINAL-Oil-Filter-housing-W-THERMOSTAT_p_156.html) — PN 462-635-0047 · $529.00
- [LPS oil pump mod — linderpowersystems.com](https://linderpowersystems.com)
- [LPS oil pump mod — YouTube](https://www.youtube.com/watch?v=nXsUm8ph2Ys)
- [07K Swap Facebook Group — @wingman703 longitudinal build thread](https://www.facebook.com/groups/07kswap)
- [E36 DIY Build Checklist — Phase 2 Oil System](../E36_DIY_Build_Checklist.md)
- [E36 9000 RPM Project Plan — Phase 2 Oil System](../E36_9000RPM_Project_Plan_Verified.md)

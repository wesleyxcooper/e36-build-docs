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
| **07K oil pump donor** (send to LPS) | Any "early style" PN per LPS — LPS explicitly ships `07K115105Q` with their mod. Cheapest confirmed OEM: [ebay 187826468192](https://www.ebay.com/itm/187826468192) $34 (used `07K115105G`, casting stamp verified — see § 1a). Fallback new OEM: [VWPartsGiant `G`](https://www.vwpartsgiant.com/genuine/volkswagen~oil-pump~07k115105g) $246.84 or [Europa Parts `Q`](https://www.europaparts.com/oil-pump-07k115105q.html) $249.95. | $34–250 |
| LPS 07K Oil Pump Mod (send-in service) | [linderpowersystems.com](https://linderpowersystems.com) — `linderpowersystems@gmail.com` | **$150 mod on your pump** / $420 turnkey new-pump-with-mod (per LPS video description). Shipping extra. |
| -4AN fitting for turbo oil feed port | M12×1.5 to -4AN adapter (or direct -4AN per iABED port spec) | — |
| Inline orifice restrictor (1.0 mm / 0.040") | **Ships with the G25-660** per [Full Race listing](https://www.full-race.com/garrett-g-series-g25-660-turbocharger) — verify at receipt. Fallback: Turbosmart, Fragola, AN Fittings Store | included / ~$20 fallback |
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

- Contact LPS directly: [linderpowersystems.com](https://linderpowersystems.com) — no storefront, contact-only. Also DM [@linder_power_systems_lpsfab](https://www.instagram.com/linder_power_systems_lpsfab/).
- **Early-style 07K pump only** — verify your pump version matches before sending; later pumps use a different design (see § 1a below for PN identification and sourcing)
- **Lead time: 4–8 weeks** — send early in Phase 2 so the modified pump returns before Euromotive finishes the longblock
- Coordinate with LPS to **ship the modified pump directly to Euromotive** — eliminates a second shipment leg and ensures Euromotive has it in hand for assembly

**Why the mod is mandatory:** The stock 07K oil pump cavitates above ~8,000 RPM under limiter-bashing, starving the bearings. At 9,000 RPM in drift use, this is a bearing-killing failure mode. The LPS mod raises the cold relief pressure to 80–85 PSI (SAE30 ref) with a hot WOT target of ~55–65 PSI at the block.

**What the LPS mod is:** A **user-adjustable pressure-relief-valve modification** to the pump body. LPS delivers the pump pre-set to **80–85 PSI cold with SAE30 oil**; stock output is 60–65 PSI cold. Per Justin Linder (LPS) in the [LPS 07k oil pump mod YouTube video](https://www.youtube.com/watch?v=nXsUm8ph2Ys) transcript:

> "So I came up with a way to modify the oil pump so it's user adjustable — we're going to factory set these at between 80 and 85 PSI. The factory pump only puts out between 60 and 65 PSI on a cold engine and lower as it gets [warm]."

And per the [LPS video description](https://www.youtube.com/watch?v=nXsUm8ph2Ys):

> "This mod is only available for the early style oil pump and can be done to new or used oil pumps. If supplied by us you will get the latest version oil pump (currently `07k115105Q`) modified, cleaned, reassembled with grease for a good first prime, and set to 80-85psi cold with SAE30 oil. Cost will be $420 (availability dependent) for a new pump with this mod, and the service on your pump will be $150."

**Scope confirmed by LPS:**
- User-adjustable PRV, pre-set 80–85 PSI cold (SAE30)
- Cleans and reassembles with grease for first prime
- Works on new or used pumps

**Not modified by LPS** (external to the pump body):
- Drive sprocket — leave attached if you can (avoids sourcing a new 60 Nm + 90° single-use stretch bolt + T10172 counterhold tool)
- Pickup tube — not needed; reuse existing motor's with a new O-ring at Euromotive assembly

**Ask LPS at send-in:** whether they want the pump with sprocket attached, and confirm your specific PN is compatible (see § 1a).

> ⚠️ **Pitfall:** LPS lead time can be 4–8 weeks. A pump that hasn't returned delays the entire longblock assembly. Send the pump early, before any other Phase 2 assembly work is scheduled with Euromotive.

Reference: [LPS oil pump mod — YouTube](https://www.youtube.com/watch?v=nXsUm8ph2Ys) · [07K turbo build reference](https://www.youtube.com/watch?v=V2OxGOoeDmI)

### 1a — "Early-style" pump identification and sourcing

Per the [LPS video description](https://www.youtube.com/watch?v=nXsUm8ph2Ys), `07K115105Q` is explicitly LPS-compatible ("If supplied by us you will get the latest version oil pump (currently `07k115105Q`) modified"). LPS's definition of "early style" is otherwise not publicly bounded. **Always DM LPS with your candidate pump's PN + casting-stamp photo before sending** — they have final say on compatibility.

**07K oil pump PN reference** (per [VWPartsGiant](https://www.vwpartsgiant.com), [oemwolf](https://oemwolf.com), [Europa Parts](https://www.europaparts.com)):

| PN | Fitment | LPS status |
| --- | --- | --- |
| `07K115105F` | Earliest, superseded by G | DM to confirm |
| `07K115105G` | 2005–2008 Jetta 2.5, 2006–07 Beetle/Rabbit | DM to confirm |
| `07K115105J` | 2005–2014 transitional | DM to confirm |
| `07K115105P` | Mid-production | DM to confirm |
| **`07K115105Q`** | **2006–10 Beetle, 08–14 Jetta, 10–13 Golf Mk6, TTRS** | **✅ LPS-confirmed** |
| `07K115105R` | Mid-late | DM to confirm |
| `07K115105T` | Alternate to AC | DM to confirm |
| `07K115105AC` | 2011–14 Beetle/Jetta/Passat | DM to confirm |
| `07K115105AK` | Audi RS3/TT-RS | DM to confirm |

**Verify pump identity by casting stamp** on the pump body (visible without disassembly): the PN is cast alongside alloy spec `AlSi9Cu3` and cast-location `MEXICO` (VW Puebla plant).

**Sourcing (ranked):**

| # | Source | Price | Notes |
| --- | --- | --- | --- |
| ⭐ 1 | **Local donor** — ask forged-crank seller for the pump too | $30–100 | Same 2005–2007 donor as the crank includes an era-appropriate pump (F/G/J likely). One-stop, verifiable in person. |
| 2 | [eBay 187826468192](https://www.ebay.com/itm/187826468192) | **$34** | Pre-owned OEM `07K115105G`. Casting stamp `07K 115 105 G` + `AlSi9Cu3` + `MEXICO` verified via [listing photo](https://i.ebayimg.com/images/g/mb4AAOSwGnFjEJpn/s-l1600.jpg). Includes drive sprocket. Multiple in stock. |
| 3 | eBay literal string `07K115105Q` | $30–90 used | Q is the LPS-confirmed PN and the largest production run — most common used-market listing. |
| 4 | [eBay SIC Autoparts 153949248649](https://www.ebay.com/itm/153949248649) | $81–92 | Brand new genuine OEM `07K115105G`. |
| 5 | [VWPartsGiant `G`](https://www.vwpartsgiant.com/genuine/volkswagen~oil-pump~07k115105g) | $246.84 | New OEM `G`, US dealer network. |
| 6 | [Europa Parts `Q`](https://www.europaparts.com/oil-pump-07k115105q.html) | $249.95 | New OEM `Q` — LPS-confirmed PN. |
| 7 | LPS turnkey (new pump + mod) | $420 | Fully assembled, set to 80–85 PSI cold. Skips all sourcing. Availability-dependent. |

**OEM only.** Do not buy aftermarket "fits 05-10 VW 2.5L" copies (MOCA / CAR / Evan Fischer / unbranded) — LPS specifies OEM and aftermarket copies may not match the PRV geometry.

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

The iABED housing has a **dedicated turbo oil feed port** — confirmed by @wingman703. The G25-660 has a **dual ball bearing CHRA** ([Full Race G25-660](https://www.full-race.com/garrett-g-series-g25-660-turbocharger)) and per [Garrett's Turbo Oil Restrictors guidance](https://www.garrettmotion.com/knowledge-center-category/racing-and-performance/turbo-oil-restrictors-oil-supply/) requires a 1.0 mm (0.040") restrictor targeting 40–45 PSI at the turbo inlet. A restrictor is NOT appropriate for journal-bearing turbos — this guidance is specific to the ball-bearing G25.

**Setup:**
1. Install a **-4AN fitting** at the iABED dedicated turbo feed port (M12×1.5 to -4AN adapter, or direct -4AN per iABED port specification — confirm port thread at install)
2. Route a -4AN braided steel line from the housing port to the G25-660 RR turbo oil inlet
3. Install the **1.0 mm orifice restrictor** inline on the feed line. Over-pressure on the ball-bearing CHRA = ball-race brinelling and shaft seal blow-out.
   > **Note:** The G25-660 ships with a -4AN + 1.0 mm restrictor fitting per [Full Race listing](https://www.full-race.com/garrett-g-series-g25-660-turbocharger). Verify in the box at receipt before sourcing separately. Fallback: Turbosmart, Fragola, or AN Fittings Store.

**Alternative oil feed tap — M16×1.5 cross-channel port:**  
The 07K block has an M16×1.5 cross-channel port on the oil gallery that can serve as an alternative turbo oil feed source if the iABED housing feed port is not used or cannot be routed to the turbo conveniently. Tap this port with an M16×1.5 NPT→AN adapter. The same 1.0 mm orifice restrictor must be used inline regardless of which port is tapped. Confirm port location at engine install — this is a block-gallery tap and requires proper thread engagement depth to avoid obstructing the gallery.

**Verify at first fire.** Per Garrett: *"you should always verify the oil pressure entering the turbo after the restrictor."* Full verification procedure (temporary gauge, target 35–50 psi hot WOT, adjustment triggers, optional Turbosmart OPR active regulator) is in <ref_file file="/Users/wesleyc/personal/e36/e36-docs/E36_9000RPM_Project_Plan_Verified.md" /> → "Turbo Oil Feed Pressure — Verification & Monitoring".

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

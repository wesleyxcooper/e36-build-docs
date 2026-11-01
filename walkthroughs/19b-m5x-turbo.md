# Phase 1A: M5x Turbo — Manifold, Turbo Selection & Boost System

**Phase:** 1A  
**System tags:** `[ENGINE]` `[BOOST]` `[AIR]`  
**Shop-mandatory:** No — all owner-installed  
**Prerequisites:** Longblock returned from VAC and installed; oil and coolant systems plumbed (`19-m5x-oil-system.md`, `09-coolant.md`); FMIC core mounted; charge piping mocked up

---

## Overview

The M5x turbo system closely parallels the 07K Phase 3 air/boost system (`31-air-boost.md`) in architecture: top-mount or bottom-mount exhaust manifold → turbo → FMIC → throttle body → engine. The primary differences vs 07K:

- **Manifold geometry:** M5x manifold is a purpose-built 6-cylinder header; 07K uses a custom 5-cyl manifold. The M5x has a larger exhaust collector due to the extra cylinder — this actually improves turbo response for a given turbo size.
- **Turbo size:** The M50/M52 at 2.5L (or 2.8L M52B28) is a smaller displacement than the 07K at 2.5L but with 6 cylinders vs 5. The extra displacement of the M52B28 improves spoolup and midrange over a 2.5L base.
- **Boost target:** ~400–500whp on pump gas / up to 700whp on E85 (flex fuel mandatory). At 700whp E85, a mid-to-large frame turbo is required — the GT35.30 included in the K64 kit is rated to 300–500hp and is undersized for 700whp E85. See Turbo Selection below for upgrade path.
- **FMIC and charge piping:** The CXRacing FMIC core from Phase 1A (`31-air-boost.md` Phase 1A carryover row) is appropriate for the M5x target. Charge piping routing depends on manifold and turbo position — mock up before fabricating.

---

## Manifold Options

### Option A — K64 AC+ RHD Complete Kit (RHD Priority)

**Priority path for RHD E36.** The K64 kit is RHD-specific, clears the AC compressor, and comes with everything in one package — manifold, downpipe, turbo, wastegate, injectors, BOV, and an ECU base map. ([k64performance.com](https://k64performance.com/turbo-kit/771-turbo-kit-stage2-m50-m52-e30-e36-e34-bmw.html))

**K64 Stage 2 Full Kit — $5,656:**
- Manifold: K64 AC+ RHD stainless — RHD-specific pattern, hood closes, AC compressor clears ($839.72 standalone)
- Turbo: GT35.30 T3 journal bearing — **rated 300–500hp.** See Turbo Selection below for upgrade to 700whp E85 spec.
- Wastegate: 44mm Tial — included
- Injectors: Siemens Deka 630cc × 6 — included (adequate for 700whp E85)
- BOV: included
- Downpipe: K64 RHD-specific ($448 standalone) — confirm clearance with RHD steering rack before finalizing. Custom fab at Fabie Boys Motorsports if needed.
- **Do not order ECUMASTER DET3 option** — MaxxECU RACE is the chosen ECU. Piggyback will conflict. Order kit without ECU or request no ECU.

**Manifold + downpipe only (sourcing turbo separately):**
- K64 AC+ RHD Manifold: **$839.72** ([k64performance.com](https://k64performance.com/exhaust-manifold/1655-rhd-uk-e36-e46-ac-turbo-kolektor-bmw-m50-m52-m54.html)) — T3 or T4 flange option
- K64 RHD Downpipe: **$448.00** ([k64performance.com](https://k64performance.com/exhaust-manifold/4635-downpipe-rhd-uk-turbo-bmw-e36-e46.html))

> **AC routing — top-mount manifolds (K64 and RSI):** Both the K64 and RSI manifolds clear the AC compressor. The downpipe for a top-mount setup routes between engine and firewall on the driver side, where the AC refrigerant lines (high and low pressure) also run. **Mock up the downpipe path before finalizing AC line routing** — the lines may need minor re-routing around the downpipe. Fabricator job (Fabie Boys or VAC). **Electric AC conversion** (Denso/Sanden electric compressor from a hybrid donor) eliminates the belt-driven compressor and removes the routing conflict entirely — adds ~$1,000–2,500 for the compressor and control wiring, cleaner engine bay, and allows AC post-shutdown. Revisit if line rerouting proves difficult.

### Option B — SPA Turbo TMB01 Bottom-Mount

Proven M5x manifold for E36 drift/track builds. For LHD or where K64 RHD routing doesn't work out. ([beracingtuning.com](https://beracingtuning.com/product/spa-t3-t4-bottom-mount-m5x-turbo-manifold-for-e36-and-e46/), [spaturbousa.com](https://spaturbousa.com/collections/best-selling-products/bmw))

- Price: **$479.90** (spaturbousa.com) — manifold only, no kit
- Position: bottom mount — turbo sits low, driver side. Best oil drain routing.
- Turbo flange: T3 + T4 dual pattern
- AC: confirmed clear; bottom-mount position keeps the turbo away from AC entirely
- RHD: confirmed per SPA, E36 and E46
- Proven capacity: 600+whp; 530whp documented with GT3076R on T3 .63 hotside
- **No downpipe included** — K64 RHD downpipe may not transfer to TMB01 geometry; budget for custom Fabie Boys downpipe for RHD routing

> ⚠️ Confirm turbine outlet clears 8HP70 at mock-up — 8HP is larger than a manual gearbox.

### Option C — RSI T4/T3 Top-Mount (High Power)

For 700whp+ sustained. ([rennauto.co](https://rennauto.co/product/bmw-m50-m52-s50-s52-m54-top-mount-turbo-manifold-for-e36-e46-e39-z3/))

- Price: **$959.95** — manifold only
- AC: confirmed — clears AC compressor
- RHD: confirmed — "Fits LHD and RHD"
- Capacity: 900hp+ per Rennauto; 2-year limited warranty
- Heat management: turbo blanket + wrapped downpipe + aluminum/magnesium valve cover mandatory. M50 NV magnesium valve cover is ideal. ([bmwtuning.co](https://bmwtuning.co/bmw-e36-turbo-kit-guide/))
- AC line routing: same caveat as K64 — mock up downpipe before finalizing lines.

> ⚠️ **SPA TMB04 twin-scroll top-mount is NOT compatible with E36 coupe** — SPA listing explicitly states "not compatible with E36 Coupé body." Do not order for coupe.

---

## Downpipe Fabrication (RHD)

K64 RHD downpipe ($448) is the first option. If it doesn't clear the RHD steering rack or tunnel:

**Fabie Boys Motorsports** — 1599 Columbia Ave, Lancaster PA 17603 · (717) 470-8613 · ~65 mi from 19151  
RHD E36 turbo M52 build experience confirmed. Custom exhaust and downpipe fabrication. Bring car on a flatbed with engine installed for downpipe mockup. Budget ~$400–600 fab.

---

## Turbo Selection

**K64 included GT35.30 — adequate for 300–500hp on pump gas.** If this is the target power range and the build is temporary (moving to 07K in Phase 3), the included turbo is fine. **For 700whp on E85**, the GT35.30 runs out of flow. Upgrade options:

| Turbo | HP rating | Spool | Notes |
| --- | --- | --- | --- |
| K64-included GT35.30 (T3 .63 AR) | 300–500hp | Fast | Good for Phase 1A at pump gas power; re-spec if targeting 700whp E85 |
| Garrett G25-660 (T3 .61 AR) | 500–660whp | Medium | Same turbo planned for 07K Phase 3 — one purchase covers both phases |
| Garrett G30-770 (T3 .83 AR) | 600–770whp | Slower | Better for 700whp E85 sustained; compatible with K64/SPA T3 flanges |
| GT3576R (T3 .82 AR) | 500–650whp | Medium-fast | Budget alternative to Garrett; well-proven on M50/M52 builds |

**Recommendation for 700whp E85 target:** Upgrade to Garrett G30-660 or G30-770 at turbo order time. The K64 kit allows you to specify turbo — call K64 to request a G30-series substitution, or order the manifold standalone and source the turbo separately.

**For the 8,000–9,000 RPM target:** Hotside AR matters at high RPM — a .82–.83 AR hotside maintains boost longer into the RPM range vs a .63 AR. Use T3 .82 AR if available for the chosen turbo.

---

## Wastegate

External wastegate is required with both manifolds (neither has an internal wastegate provision). 44mm Tial MV-S or equivalent. Budget ~$200–350 for a quality unit. Tial MV-S 44mm: [tialsport.com](https://www.tialsport.com) or via Turner Motorsport (~$300).

---

## Intercooler and Charge Piping

The CXRacing FMIC kit referenced in Phase 3 (`31-air-boost.md`) is appropriate for the M5x build as well. The core and end tanks mount in the same E36 front position. Charge piping routing will differ from the 07K path because the turbo position (TMB01 bottom-mount driver side vs SPA MK5 for 07K) exits the hot side at a different angle.

**TMB01 charge piping path (typical E36 M5x turbo):**
- Compressor outlet → front-crossing aluminum pipe → FMIC inlet (passenger side or center)
- FMIC outlet → throttle body inlet
- Blow-off / bypass valve on the FMIC outlet or compressor-outlet pipe before the FMIC

All charge piping for the M5x must be fabricated or adapted from universal bends — no off-the-shelf kit is directly confirmed for the E36 + SPA TMB01 + 8HP combination. Budget for custom mandrel-bent aluminum piping (2.5"–3" diameter) or a universal elbow kit + silicone couplers (~$200–400).

---

## Boost Control

Same approach as 07K Phase 3 (`31-air-boost.md`): MaxxECU controls boost via a PWM boost control solenoid on the wastegate actuator. MaxxECU supports open/closed-loop boost control natively. Use a Turbosmart or Synapse solenoid.

---

## Wiring Additions for Turbo M5x (vs Stock MaxxECU M50 Harness)

The MaxxECU M50 terminated harness covers all M50/M52 engine sensors. For the turbo build, add:

| Addition | Connector | MaxxECU input |
| --- | --- | --- |
| Boost pressure sensor (MAP) | 3-pin Bosch (same as OEM MAP) — JMT 1.5mm housing `3B0973703G` | Already in M50 harness — verify MAP sensor range covers boost (0–3 bar absolute) |
| Charge air temp sensor (IAT2, post-FMIC) | 2-pin NTC — JMT 1.5mm `1J0973702` | MaxxECU AIN — add to charge pipe before throttle body |
| WBO2 sensor (if relocating for turbo routing) | Bosch LSU 4.2 6-pin — already in harness | Weld new bung in turbo downpipe |
| Boost solenoid (PWM) | 2-pin generic spade | MaxxECU GPO (any available GPO configured for boost control PWM) |

---

## References

- [K64 Stage 2 Full Kit — $5,656 (RHD priority)](https://k64performance.com/turbo-kit/771-turbo-kit-stage2-m50-m52-e30-e36-e34-bmw.html)
- [K64 AC+ RHD Manifold standalone — $839.72](https://k64performance.com/exhaust-manifold/1655-rhd-uk-e36-e46-ac-turbo-kolektor-bmw-m50-m52-m54.html)
- [K64 RHD Downpipe standalone — $448.00](https://k64performance.com/exhaust-manifold/4635-downpipe-rhd-uk-turbo-bmw-e36-e46.html)
- [SPA TMB01 bottom-mount M5x manifold — $479.90 (B)](https://spaturbousa.com/collections/best-selling-products/bmw)
- [BE Racing Tuning SPA TMB01 listing with performance notes](https://beracingtuning.com/product/spa-t3-t4-bottom-mount-m5x-turbo-manifold-for-e36-and-e46/)
- [Rennauto RSI T4/T3 top-mount manifold — $959.95 (C)](https://rennauto.co/product/bmw-m50-m52-s50-s52-m54-top-mount-turbo-manifold-for-e36-e46-e39-z3/)
- [Fabie Boys Motorsports — RHD E36 custom downpipe fabrication](https://fabieboysautorepair.com) · 1599 Columbia Ave, Lancaster PA · (717) 470-8613
- [bmwtuning.co — valve cover heat and top-mount turbo considerations](https://bmwtuning.co/bmw-e36-turbo-kit-guide/)
- [31-air-boost.md — G25-660 RR turbo selection and boost control](./31-air-boost.md)

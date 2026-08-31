# Phase 1: Brakes

**Phase:** 1  
**System tags:** `[BRAKES]`  
**Shop-mandatory:** Yes — caliper machining requires a lathe (12mm off mounting boss for 17" wheel clearance). Not DIY. Brake booster delete requires grinding and drilling the firewall/pedal box; easiest with the engine bay open.  
**Prerequisites:** M3 trailing arms and M3 spindles installed (03-suspension, 04-front-geometry). M3 rear calipers bolt to the M3 trailing arm only — non-M arms will not work.

## Parts

| Part | PN / Source | Cost |
| --- | --- | --- |
| Porsche 996 Brembo 4-piston front caliper — Left | `996.351.425` · 1999–2004 Porsche 996 (non-turbo), Boxster-S, or Cayman-S · used | ~$200–300/pair |
| Porsche 996 Brembo 4-piston front caliper — Right | `996.351.426` · same donors | (see above) |
| RallyRoad E36 M3 Front BBK Adapter Brackets | [rallyroad.net](https://rallyroad.net/products/bmwe36m3frontbbkadapterbrackets) | $224.95 |
| E46 M3 rotors 325×28mm — Left | `34112282445` · EBC GD or Zimmermann Sport | ~$80–120/pair |
| E46 M3 rotors 325×28mm — Right | `34112282446` · EBC GD or Zimmermann Sport | (see above) |
| RallyRoad BBK Front Braided Lines | [rallyroad.net](https://rallyroad.net/collections/brakes/products/e36bigbrakekitfrontlines) | $64.95 |
| OEM E36 M3 rear calipers, ATE single-piston | Same E36 M3 or Z3M donor as trailing arms | ~$80–150/pair |
| 312×20mm rear rotors | EBC GD or Zimmermann Sport (matched set to front) | ~$60–100/pair |
| Reverse-mount hydro handbrake body + removable handle | Paul's Parts, Chase Bays Reverse Mount, Sikky Reverse, NPParts, etc. | ~$150–380 |
| Pass-through master cylinder, 5/8" bore | Wilwood `260-3378` (if not included with handbrake body) | ~$90–110 |
| Chase Bays BMW E46 pass-thru inline line kit — recommended plumbing path | Vividracing PN `CB-E36-OEMC/HB` — pre-cut BMW-specific lines + bulkhead fittings | ~$260 |
| — OR — à la carte plumbing (AN-3 braided lines, bulkhead fittings, M10×1.0 → AN-3 adapters, DOT4 fluid) | Standard motorsport plumbing parts | ~$130–190 |
| NES Engineering brake booster delete | [nesengineering.com](https://nesengineering.com/products/brakboster-delete?variant=57108005880191) | $216 |

## Tools

- Standard socket set and ratchet
- Torque wrench
- Brake line wrenches (flare nut wrenches)
- Lathe — **shop-mandatory** for caliper machining
- Angle grinder (firewall grinding for booster delete)
- Drill (new hole in brake pedal for booster delete)
- Brake bleeding equipment

## Procedure

### Front BBK — Porsche 996 Brembo 4-Piston 🔧 DIY with specialty tools

1. 🔧 Source 1999–2004 Porsche 996 (non-turbo), Boxster-S, or Cayman-S Brembo 4-piston front calipers. PN `996.351.425` (Left) / `996.351.426` (Right). Source used: ~$200–300/pair.
   > ⚠️ **Pitfall:** E46 330i calipers do **not** fit E36 M3 knuckles — confirmed incompatible ([R3VLimited thread](https://www.r3vlimited.com/board/forum/e30-technical-forums/suspension-unsprung/brakes-subframe-arms/386832-e46-330i-brakes-with-e36-m3-knuckles)). 996 Brembo via RallyRoad brackets is the correct path.

2. **Caliper machining — 17" wheel clearance (not DIY):** 12mm must be turned off the caliper mounting boss before install. Two options:
   - Check the machining service add-on on the [RallyRoad product page](https://rallyroad.net/products/bmwe36m3frontbbkadapterbrackets) and send calipers with the bracket order.
   - Call **VAC Motorsports Philadelphia** (2501 Snyder Ave · 215-462-4666) — in-house machine shop.
   > ⚠️ **Pitfall:** Machine the calipers before the bracket arrives — caliper + bracket order together is the easiest path via RallyRoad's add-on service.

3. 🔧 Install RallyRoad E36 M3 Front BBK Adapter Brackets ($224.95, 7075-T6 aluminum, ARP hardware) with machined 996 calipers.

4. 🔧 Install E46 M3 325×28mm rotors (PN `34112282445` Left / `34112282446` Right) — EBC GD or Zimmermann Sport, ~$80–120/pair.

5. 🔧 Install RallyRoad BBK Front Braided Lines ($64.95). Bleed system.

### Rear Brakes — OEM E36 M3 🔧 DIY with specialty tools

6. 🔧 Source OEM E36 M3 rear calipers (ATE single-piston) from the same E36 M3 or Z3M donor as the trailing arms. ~$80–150/pair. Direct bolt-on to M3 trailing arm — no brackets, no machining.

7. 🔧 Install 312×20mm rear rotors matched in brand and style to front (EBC GD or Zimmermann Sport make matched front+rear sets). ~$60–100/pair.

### Hydraulic Handbrake — Inline Reverse-Mount, Removable Handle 🔧 DIY with specialty tools

> **Design:** pass-through master cylinder plumbed inline in the rear brake circuit. At rest, fluid flows through unrestricted — pedal operates rears normally. Pulled, an internal seal isolates IN and pressurizes OUT, locking the OEM M3 rear calipers. Uses your existing single rear caliper — no second caliper, no dual-caliper bracket. Reverse-mount body tucks the MC under the dash/console; removable handle pops off for street use.
>
> Sustained-competition-drift upgrade path (dual-caliper Kakuma bracket) documented in `E36_Enhancements_SideProjects.md`.

8. 🔧 Source hardware:
   - Reverse-mount handbrake body with removable handle (Paul's Parts, Chase Bays Reverse Mount, Sikky Reverse, NPParts, MTuning, SWAGIER)
   - Pass-through MC in 5/8" bore (Wilwood `260-3378`) — required. Reservoir-style MCs will not work inline.

9. 🔧 Mount handbrake body to transmission tunnel or seat crossmember. Verify seat rail + driver hip clearance with handle installed; verify handle-out clearance for stealth mode.

10. 🔧 Route the **IN line:** OUT side of NES booster-delete bias valve → firewall bulkhead fitting → hydro MC IN port.

11. 🔧 Route the **OUT line:** hydro MC OUT port → firewall bulkhead fitting → down the transmission tunnel underside → rear T-fitting → OE braided flex lines to each M3 rear caliper.
    > **Plumbing shortcut:** Chase Bays sells a BMW E46 pass-thru inline line kit (Vividracing PN `CB-E36-OEMC/HB`, ~$260) with pre-cut BMW-specific lines and bulkhead fittings. E36 variant not explicitly listed — contact Chase Bays to confirm fit or spec adapters.

12. 🔧 Delete the OE rear hardline section between the front-of-cabin MC output and the rear T — replaced by the two AN-3 lines above.

13. 🔧 Bleed rears twice: once with lever at rest (bleeds pedal-MC → hydro-MC → calipers path), once with lever pulled (bleeds MC's internal actuated chamber). Start with the farthest caliper.

14. 🔧 Verify pedal feel unchanged with lever at rest; verify rears lock within 1–2 in of lever travel with pedal at rest.
    > ⚠️ **Pass-through MC is not optional.** Reservoir-style MCs (single inlet from reservoir, single outlet to caliper) block pedal-side flow at rest and won't isolate a supply line when pulled. If the handbrake body ships without an MC (Paul's Parts, NPParts, MTuning), order a Wilwood `260-3378` or equivalent 5/8" pass-thru separately.

### Brake Booster Delete 🔧 DIY with specialty tools

15. 🔧 Install NES Engineering brake booster delete ([nesengineering.com](https://nesengineering.com/products/brakboster-delete?variant=57108005880191)) — $216. **Install at Phase 1** — firewall mods are easiest with the engine bay open.
   - Changes pedal ratio 3:1 → 6:1 using stock master cylinder.
   - Required mods: grind 2mm off firewall hole + pedal box, drill new hole in brake pedal.
   - **Irreversible — confirm before cutting.**
   - Phase 3 rationale: 07K turbo produces no usable manifold vacuum under boost; deleting the booster eliminates the need for a vacuum pump entirely. Also affects `[AIR]` system planning.
   - Optional: if pedal effort feels too high after adjustment, upgrade to Wilwood or Tilton 19mm master cylinder (~$150–200) — smaller bore raises line pressure per unit of pedal force.
   > ⚠️ **Pitfall:** The pedal feel change is significant. Budget at least one track session to re-calibrate brake pressure before pushing hard. Threshold braking requires meaningfully more leg effort than OEM boosted.

## References

- [RallyRoad E36 M3 Front BBK Adapter Brackets](https://rallyroad.net/products/bmwe36m3frontbbkadapterbrackets)
- [RallyRoad BBK Front Lines](https://rallyroad.net/collections/brakes/products/e36bigbrakekitfrontlines)
- [R3VLimited — E46 330i calipers incompatible with E36 M3 knuckles](https://www.r3vlimited.com/board/forum/e30-technical-forums/suspension-unsprung/brakes-subframe-arms/386832-e46-330i-brakes-with-e36-m3-knuckles)
- [NA M3 Forums — E36 996 Brembo write-up](https://nam3forum.com/forums/forum/e36-1992-1999/108032-e36-996-brembo-big-brake-conversion)
- [Chase Bays Hydro Handbrake — Reverse Mount](https://www.chasebays.com/products/chase-bays-ultra-compact-reverse-mount-hydro-handbrake)
- [Chase Bays BMW E46 pass-thru inline line kit — Vividracing (PN `CB-E36-OEMC/HB`)](https://www.vividracing.com/chase-bays-pass-thruinline-single-rear-caliper-hydro-handbrake-line-kit-bmw-e46-p-156616092.html)
- [Paul's Parts — Reverse + Removable Handle](https://paulsparts.ie/product/hydraulic-handbrake-reverse-removable-handle/)
- [Sikky Reverse Pull-Back Hydraulic Handbrake](https://www.sikky.com/product/reverse-hydraulic-handbrake-kit/)
- [NES Engineering brake booster delete](https://nesengineering.com/products/brakboster-delete?variant=57108005880191)
- VAC Motorsports Philadelphia: 2501 Snyder Ave · 215-462-4666

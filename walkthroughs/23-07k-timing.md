# Phase 2: 07K Timing Chain Kit Installation

**Phase:** 2  
**System tags:** `[TIMING]`  
**Shop-mandatory:** Partially — chain/sprocket installation and internal timing setup are performed by Euromotive during longblock build. BBG billet upper timing cover and cam sensor wiring are owner-installed after longblock delivery.  
**Prerequisites:** Longblock returned from Euromotive (sealed); BBG billet valve cover + timing cover combo ordered at Phase 2 kickoff (~6-week lead time); cam adjuster stretch bolts on hand (TTY — 2 minimum)

---

## Parts

| Part | PN / Source | Cost |
| --- | --- | --- |
| 07K Lower Timing Chain | `07K109120A` · FCP Euro / ECS Tuning / OEM | — |
| 07K Upper Timing Chain | `07K109231A` · FCP Euro / ECS Tuning / OEM | — |
| Timing chain sprockets | OEM or matched to chain kit | — |
| VVT cam actuator (cam phaser) | Sourced with TTRS/CEPA intake cam from CEPA/CFSA/RS3/TTRS donor | Included with cam |
| BBG billet upper timing cover | [Boost Brothers Garage combo](https://www.boostbrothersgarage.com/collections/944-07k-swap/products/07k-billet-valve-cover-upper-timing-cover-and-rear-coolant-flange-combo) — combo with valve cover + coolant flange | $975–$1,075 combo (6-wk lead — order at Phase 2 kickoff) |
| Cam adjuster stretch bolts (2×) | `N91042802` · [FCP Euro](https://www.fcpeuro.com/products/audi-camshaft-sprocket-bolt-genuine-audi-n91042802) | $9.19/ea |
| Alt cam adjuster bolt | `N91050202` · ECS Tuning | — |
| 07K cam sensor (VW Hall type) | OEM `07K907601A` or verify at engine — 3-pin Hall effect | — |

---

## Tools

- Torque wrench
- Cam locking tool (07K-specific)
- Crank lock tool (07K)
- Rubber mallet
- Inspection light

---

## Procedure

### 1 — Timing chain installation (Euromotive scope)

Euromotive installs both timing chains (lower `07K109120A` and upper `07K109231A`) and sprockets as part of the longblock build. **This happens during the "timing + final close" phase of the Euromotive scope** (~2–3 hrs, $315–473 labor). Owner does not touch the chains.

> ⚠️ **Pitfall:** The 07K timing procedure involves aligning multiple marks simultaneously. Watch the full reference video before discussing scope with Euromotive: [How to Time a VW 07K (YouTube)](https://www.youtube.com/watch?v=wdONdrRi9WU&t=203s). One tooth off equals significant power loss or piston-to-valve contact.

> ⚠️ **Pitfall:** Cam adjuster bolt is TTY (stretch) — **replace it every time the adjuster is removed**, including during timing setup. Have at least 2 `N91042802` bolts on hand at dropoff. Bring them to Euromotive explicitly.

### 2 — VVT cam actuator

The TTRS/CEPA intake cam includes a cam phaser (VVT actuator). Euromotive installs it during head and timing assembly. The actuator is the OEM VW cam phaser from the CEPA/CFSA/RS3/TTRS donor — it installs directly on the intake cam sprocket.

**VVT is active on this build.** MaxxECU controls cam advance via a dedicated PWM solenoid output:
- **ME7.1.1 harness reference: pin 115** (VVT solenoid output in the OEM ME7.1.1 engine connector)
- MaxxECU: GPO assignment freed from M52 VANOS duty at engine swap — confirm final GPO assignment in MTune before building the 07K harness (see `26-07k-harness.md` and `maxxecu-07k.wv`)
- VVT operates in smooth closed-loop mode — NOT binary on/off switching, which is documented to be hard on cam guides

### 3 — Cam sensor: 07K Hall vs M52 VANOS connector — they are NOT interchangeable

The 07K cam sensor is a **VW Hall-effect type with +5V supply**, using the VW 3-pin oval sensor housing (same body as the VW crank sensor, but **different pinout**). This is a completely different connector family and signal type from the M52 VANOS cam sensor.

**07K cam sensor pinout (Hall, +5V):**
- Pin 1: +5V supply (shared sensor rail)
- Pin 2: Sensor GND
- Pin 3: Signal → MaxxECU HOME input

**M52 cam sensor:** Different OEM BMW connector; different pinout. The MaxxECU M50 terminated harness ships with an M50/VANOS connector. At Phase 3, that connector is **discarded** and a new VW-type pigtail is crimped for the 07K cam sensor.

**ME7.1.1 harness reference:** Cam Hall sensor at **pin 86** in the OEM ME7.1.1 engine connector.

> ⚠️ **Pitfall:** The 07K crank sensor (`3B0973703G` housing) and cam sensor use the **same 3-pin oval housing body but opposite pinouts** — crank is passive VR (Signal+/Signal−/Shield); cam is active Hall (+5V/GND/Signal). Label pigtails clearly at crimp time. Swapped pigtails produce a no-start with no obvious failure indicator. MTune trigger type for crank: VR input, N-1 / 60-2 pattern. Cam: Hall / HOME input, +5V supply type.

### 4 — BBG billet upper timing cover (owner install — after longblock delivery)

The BBG billet upper timing cover arrives with the valve cover + coolant flange combo (order at Phase 2 kickoff, ~6-week lead time). Install after the longblock is returned:

1. Confirm OEM stock timing cover is off (Euromotive may have left it on — swap at this step)
2. Install BBG cover per their instructions; torque fasteners to spec
3. Route the cam sensor pigtail to the correct position (intake side, top of head)

---

## References

- [How to Time a VW 07K — YouTube](https://www.youtube.com/watch?v=wdONdrRi9WU&t=203s)
- [ME7.1.1 pinout — Google Drive PDF](https://drive.google.com/file/d/15RPWyYPLHGEMMQZIlUgpoo77T-CxjyMP/) (cam Hall at pin 86; VVT solenoid at pin 115)
- [`maxxecu-07k.wv`](../../e36-wiring/harnesses/maxxecu-07k.wv) — cam Hall sensor connector notes; crank VR connector notes; GPO allocation
- [E36 DIY Build Checklist — Phase 2 Timing](../E36_DIY_Build_Checklist.md)
- [E36 9000 RPM Project Plan — Phase 2 Head & Valvetrain](../E36_9000RPM_Project_Plan_Verified.md)

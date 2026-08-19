# Phase 2: 07K Head Build & Valvetrain

**Phase:** 2  
**System tags:** `[HEAD/VALVETRAIN]` `[MACHINING]`  
**Shop-mandatory:** Yes — head assembly (springs, retainers, shims, lifters, valve lash) is performed by Euromotive during longblock build  
**Prerequisites:** 07K donor block at Euromotive (`21-07k-rotating-assembly.md`); cam decision locked; intake cam sourced; spring kit and shims on hand at dropoff

---

## Parts

| Part | PN / Source | Cost |
| --- | --- | --- |
| Supertech Dual Valve Spring + Ti Retainer Set | [CTS Turbo](https://us.ctsturbo.com/product/supertech-valve-spring-retainer-set-for-audi-vw-2-5l-fits-vw-mk5-mk6-audi-ttrs-rs3/) | $523.63 |
| Ferrea 07K Solid Lifter Shims (set of 20) | [EcodeTuning](https://www.ecodetuning.com/lp1102-20-lp1102-20-ferrea-racing-components-volkswagen-2-5l-lifter-shims-set-of-20.html) | $46.30 |
| TTRS/CEPA OEM intake cam (primary) | TTRS/RS3/RSQ3 CEPA/CFSA donor · eBay/used market | ~$100–250 used |
| CAT Cams 7604002 (alternative only — see below) | [SBPartsDirect](https://www.sbpartsdirect.com/product_p/cat-7604002.htm) | $1,284.99 |
| Supertech Inconel Exhaust Valves (optional — see below) | [Integrated Engineering](https://performancebyie.com/products/supertech-valves-vw-audi-20t-fsi-tsi-25l) | ~$220 |
| ARP Head Stud Kit (ARP-CVB1) | [Techtonics Tuning](https://techtonicstuning.com/product/arp-head-stud-kit-for-mk5mk6-25l-5-cylinder/) | $223.00 |
| Victor Reinz TTRS CEPA Head Gasket Kit | [FCP Engineering](https://fcp-engineering.com/en/audi-vw/1992-audi-25-20v-tfsi-victor-reinz-head-gasket-kit.html) | $200.00 |
| Cam Adjuster Stretch Bolts (2×) | `N91042802` · [FCP Euro](https://www.fcpeuro.com/products/audi-camshaft-sprocket-bolt-genuine-audi-n91042802) | $9.19/ea |
| Alt cam adjuster bolt | `N91050202` · ECS Tuning | — |

---

## Tools

- Valve spring compressor (shop tool — Euromotive)
- Rubber mallet (confirm retainer keeper seating)
- Feeler gauge (valve lash measurement)
- Torque wrench

---

## Procedure

### 1 — Intake cam selection

**Primary: TTRS/CEPA OEM intake cam** — source used from any CEPA/CFSA/TTRS/RSQ3/RS3 donor, ~$100–250.

Key properties:
- 1.5 mm larger intake valves vs stock BGP head
- **VVT fully active** — the TTRS/CEPA intake cam carries a variable cam timing actuator (cam phaser). MaxxECU controls cam advance/retard via a dedicated PWM solenoid output (see VVT note below and `23-07k-timing.md`). This gives smooth, closed-loop cam timing management — not binary on/off switching, which VWVortex notes is "kind of hard on guides."
- Jim Green (ProjectPad/Audizine), confirmed at 630 whp on a turbo 07K: *"I have no problems with my stock cams at 630 whp. It is fast."* — TTRS cam + Supertech dual springs + Ti retainers is the mechanically correct and street-friendly combination at this power level.
- NA ceiling ~7,500 RPM per TheProjectPad — **irrelevant for a boosted build.** At 18–28 psi, the turbo provides mass airflow well past what cam profile would NA-limit. The VVT delivers tractable low-end torque for street use.

**VVT note:** The TTRS/CEPA intake cam has VVT. In Phase 3, GPO 3 (freed from M52 VANOS duty when the M52 is removed) is assigned to the VVT solenoid output at MaxxECU. The ME7.1.1 OEM harness reference for the cam actuator solenoid is **pin 115**. Confirm the final GPO assignment in MTune before harness build — see `maxxecu-07k.wv` for current GPO allocation notes, as the ETh path also uses freed GPO outputs.

**Alternative: CAT Cams 7604002** — *only warranted if the 9,000 RPM NA-breathing ceiling is a hard design target, which it is not on a boosted build.*

- Intake: 11.75 mm lift / 279°; exhaust: 11.00 mm / 271°
- NA ceiling ~9,000 RPM
- Listed for CBT/CBU — verify BGP fitment before ordering
- **Requires VVT lock** in MaxxECU (full-retard position for high-RPM flow), which sacrifices low-end street torque
- At 600–700 whp on E85 with an 8,000 RPM shift point and 9,000 RPM limiter headroom, CAT Cams is not the correct choice for this build profile. TTRS cam is correct.
- $1,284.99 — not warranted here

> ⚠️ **Pitfall:** Intake cam adjuster bolt is a **stretch (TTY) bolt — single use only** and must be replaced any time the cam sprocket/adjuster is removed. OEM VW part is currently difficult to source. Confirmed cross-refs: **`N91042802`** ($9.19/ea, [FCP Euro](https://www.fcpeuro.com/products/audi-camshaft-sprocket-bolt-genuine-audi-n91042802)) or **`N91050202`** (ECS Tuning). Also available through Porsche Cayenne/Panamera parts channels. Order before starting head assembly — do not reuse the old bolt.

### 2 — Valve springs and retainers: why OEM RS3 springs are not viable

**Use the Supertech Dual Valve Spring + Titanium Retainer Set ($523.63).** Do not substitute OEM RS3/TTRS springs.

**Why OEM RS3 springs are disqualified for this build:**

The 07K NA head and the EA855 RS3/TTRS head share the same valve spring seat geometry — springs are physically interchangeable (confirmed by CTS Turbo, IE, and Supertech fitment listings). OEM RS3/TTRS springs are a documented drop-in fit and are available used for ~$30–60. Audizine tuner data indicates OEM RS3 springs are comfortable to ~7,800–8,000 RPM, with some tuners reporting 8,500 RPM on stock internals.

However, this build is turbocharged (G25-660 RR, 18–28 psi), shifting at 8,000 RPM with a 9,000 RPM limiter for headroom, and will see limiter hits and overrev events in drift use. Two disqualifying factors:

1. **Zero headroom at the ceiling.** OEM RS3 springs would be operating at their absolute limit — no margin for limiter hits or momentary overrev. On a street/drift build that will occasionally see 8,500+ RPM, this is insufficient.
2. **Steel retainers are too heavy.** OEM RS3 retainers are steel. At 8,000+ RPM, steel retainer mass degrades stable valve operation. Titanium retainers (included in the Supertech kit) are the correct choice at this RPM target.

The Supertech Dual kit provides the necessary spring rate headroom and titanium retainers. OEM RS3 springs are not a viable budget option for this specific build.

**RS3/TTRS spring cross-compatibility note:** The physical interchangeability of RS3/TTRS springs in the 07K head IS real — the spring seat geometry is shared. The issue is not compatibility but adequacy: the OEM springs are at their ceiling for this use case. The Supertech Dual kit fits the same seats, and titanium retainers replace the OEM steel units.

### 3 — Solid lifter shims

Ferrea 07K Solid Lifter Shims (set of 20, $46.30) replace the OEM hydraulic lifters for solid-lifter valve lash control. Euromotive measures and selects the correct shim thickness per valve during head assembly. Measure all 20 clearances after assembly and record.

### 4 — Exhaust valves: Inconel (optional)

Supertech Inconel exhaust valves (~$220 from IE) are a longevity upgrade for sustained high-EGT use. For a few track events per year on E85, stock exhaust valves are defensible. Skipping saves ~$220 and reduces machine shop cost by ~$300–800 (no seat cut required — lap existing valves and deck check only). **Valve springs and retainers are mandatory regardless of this decision.**

Decide at teardown based on existing valve condition.

### 5 — Head pressure test and machine work

All machine work is coordinated by Euromotive and billed at cost + markup:

- **Head pressure test** — standard; confirms head holds pressure before assembly
- **Valve seat cut** — only if running Inconel exhaust valves; ~$300–800 additional on top of base estimate
- **Valve lap** — if not running Inconel; lap existing valves and reseat

> ⚠️ **Pitfall:** Do not start assembling until machine shop results are back. A head that won't hold pressure is a rebuild before the engine ever runs.

### 6 — Head assembly (Euromotive)

Euromotive installs springs, titanium retainers, Ferrea shims, and lifters during head assembly. Reference: [How To Time a VW 07K (YouTube)](https://www.youtube.com/watch?v=wdONdrRi9WU&t=203s).

> ⚠️ **Pitfall:** Compress valve springs fully during retainer install — keepers must seat fully in the groove. A keeper that is not fully seated will eject at high RPM and destroy the engine. Tap each retainer with a rubber mallet after install to confirm seating.

### 7 — Head gasket and torque

Victor Reinz TTRS CEPA head gasket kit ($200.00). Torque head to VW Erwin spec with ARP-CVB1 head studs using **ARP Ultra-Torque lube** on the threads — not engine oil. Follow the ARP torque sequence, not VW's stock sequence. Re-torque hot after first heat cycle.

---

## References

- [Supertech spring/retainer kit — CTS Turbo](https://us.ctsturbo.com/product/supertech-valve-spring-retainer-set-for-audi-vw-2-5l-fits-vw-mk5-mk6-audi-ttrs-rs3/)
- [Ferrea 07K shims — EcodeTuning](https://www.ecodetuning.com/lp1102-20-lp1102-20-ferrea-racing-components-volkswagen-2-5l-lifter-shims-set-of-20.html)
- [ARP-CVB1 head studs — Techtonics Tuning](https://techtonicstuning.com/product/arp-head-stud-kit-for-mk5mk6-25l-5-cylinder/)
- [Victor Reinz TTRS CEPA head gasket — FCP Engineering](https://fcp-engineering.com/en/audi-vw/1992-audi-25-20v-tfsi-victor-reinz-head-gasket-kit.html)
- [CAT Cams 7604002 — SBPartsDirect](https://www.sbpartsdirect.com/product_p/cat-7604002.htm)
- [07K Hard to Find Parts Wiki — cam adjuster bolts](https://the07k.wiki/wiki/Hard_to_Find_Parts)
- [How To Time a VW 07K — YouTube](https://www.youtube.com/watch?v=wdONdrRi9WU&t=203s)
- [E36 DIY Build Checklist — Phase 2 Head & Valvetrain](../E36_DIY_Build_Checklist.md)
- [E36 9000 RPM Project Plan — Phase 2 Head & Valvetrain](../E36_9000RPM_Project_Plan_Verified.md)
- [`maxxecu-07k.wv`](../../e36-wiring/harnesses/maxxecu-07k.wv) — GPO allocation and VVT solenoid output notes

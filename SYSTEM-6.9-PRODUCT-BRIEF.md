# System 6.9 — Product Brief v0

**Domains:** system6point9.com · systemsixpointnine.com (registered Squarespace 2026-09-15, active through 2028-09-15)  
**Status:** Brief locked 2026-09-14 · Prototype first · Not a certified tow system  
**Model:** Community DIY project — open software on GitHub; sell hard-to-source parts (control board, Dyneema, traveler hardware); motors/batteries/chargers sized by each user’s use case from third parties / big-box

---

## Mission

System 6.9 is **not** a competitor to System 2.0 / Machwerk, and **not** a competitor to Rewinch.

It is a **community project**: open-source software plus builds from materials you can get online or at Home Depot, Harbor Freight, Lowe’s, Menards, and similar. The center of gravity is **community and community development**, not a finished commercial tow product.

Each builder has their own use case. **Motor size and battery pack are chosen by that use case** — we do not ship a one-size powertrain.

We can still sell what the big-box stores don’t carry well: **control boards**, **Dyneema**, **traveler / shuttle hardware**, and related kits — plus lifestyle merch that funds the community. Software stays free on GitHub. Use at your own risk. Not a certified tow system.

---

## One-liner

DIY endless shuttle for the community — one architecture, many surfaces. Water (foil/skim), backyard snow, sled uphill, skate tow, and more. You size the motor and pack for your use. We publish the software and sell the awkward bits (control board, Dyneema, traveler hardware). Use at your own risk.

---

## Use cases (same endless loop)

| Use | Setup notes | Height / speed bias |
|-----|-------------|---------------------|
| **Foil / skim (water)** | Shore A-frames; floating Dyneema | Low tow ~0.8–1.5 m · foil soft / skim faster |
| **Backyard snowboard** | Hill or flat-to-slope chord; return tow to top | Low–mid · soft start; endless beats walking rope downhill |
| **Uphill sled tow** | Steeper chord; stronger tension; kids/adults | Low handle; slow presets; EOR critical |
| **Skateboard tow** | Parking lot / empty street / private pavement | Low tow; soft ramp; short span OK |
| **Wakeskate / wakesurf-style** | Same water frames | Low |
| **Grass / dirt “summer sled”** | Dry hillside practice | Low; expect abrasion on line |
| **Ski / snowboard park return** | Side hit or backyard feature return | Same as snow uphill |
| **Training / rehab pull** | Very low speed presets | Softest ramp |
| **Cargo / gear shuttle** | Non-human: coolers, tools across a cut | Still own-risk; different carrier |
| **Photo / camera dolly** | Slow constant speed along a lane | Smooth speed mode |

**Same product:** control box + endless architecture. **Different accessories:** mount kits, carriers, handles, speed presets per sport (GitHub profiles).

**Weak fits (don’t lead with these):** high big-air wake (wants tall towers), full-size cable parks, public ski-area lifts (certification world).

---

## What we sell

### 1) Control box (core SKU)
Hardware brain only — **no motor, no pack inside**.

| Inside / on the box | Role |
|---------------------|------|
| MCU / compute | Runs open shuttle firmware (user-flashed from GitHub) |
| Motor power stage interface | Connects to user-supplied ESC or hosts approved ESC bay (TBD at freeze) |
| Pack input | Contactor + fuse path for user 12–14S pack |
| Mushroom E-stop | Kills pack power |
| Remote / radio receiver bay | User pairs community-supported remotes |
| Glands / connectors | Motor phases, hall, pack, E-stop loop, optional limit switches |
| Weather enclosure | Shore-rated box, mounts to drive A-frame |

**Out of box:** motor, battery, charger, Dyneema, A-frames (those are accessories or DIY).

### 2) Accessories
| SKU | Notes |
|-----|--------|
| Dyneema loop kits | Length SKUs; spliced endless where practical |
| Capstan / drum kit | Keyed to common 12 mm shafts (80100-class) |
| Carrier + short tow + handle | Wear item |
| Return idler + slide kit | For return A-frame |
| Spring + ratchet tension pack | 2× extension springs + 2× straps |
| A-frame / mount kits | Low tow height (~0.8–1.5 m) |
| Fairleads, guys, anchor plates | Lifestyle of the build |

### 3) Lifestyle
Apparel, stickers, caps, lake-day merch, brand drops — **not** ride-critical. Funds community + keeps System 6.9 visible.

---

## What we don’t sell

| Third-party | Examples (BOM, not endorsement forever) |
|-------------|----------------------------------------|
| Motors | BLDC-80100 class (Flipsky 80100 OOS) |
| ESC | VESC / Flipsky 75xxx class |
| Batteries + chargers | 12–14S high-C packs from e-bike / pack builders |
| Remotes | Flipsky VX2-class or community forks |

Published **compatible BOM** on GitHub; community can PR alternatives.

---

## Software (GitHub)

| Layer | Policy |
|-------|--------|
| Shuttle firmware | Open source — free download / flash |
| Docs + CAD | Open (CERN-OHL / Apache / CC-BY — finalize at repo launch) |
| Community | Issues + PRs improve soft start, turn points, EOR, dual-site presets |
| Warranty on code | **None** — use at your own risk |

Control box ships blank or with a recovery bootloader; user installs release from GitHub.

---

## Hardware architecture (prototype = product shape)

```
[DRIVE A-FRAME]                         [RETURN A-FRAME]
 System 6.9 control box                  Idler on sliding carriage
 + user motor (keyed → capstan)          2× springs + 2× ratchet straps
 + user pack                             hard stops
        \                                   /
         \════ endless Dyneema ════════════/
                    │
              carrier → handle → rider
```

One motor · endless loop · reverse = return. See `DESIGN-FREEZE-v0.md` + `PROTOTYPE-PLAN.md`.

---

## Liability posture (not legal advice)

- Sell **box + accessories + lifestyle**, not a certified amusement ride  
- Open software + DIY motor/pack = user is the system integrator  
- Clear docs: not CE/TÜV, not a ski-area lift, own-risk  
- Insurance as hardware / merch merchant before public sales  
- **Cannot fully eliminate** product risk on anything that can tow a human — structure reduces it; counsel before first SKU ships  

---

## Sequence

1. **Prototype** lake shuttle (bench → empty shuttle → foil/skim)  
2. Freeze **control-box I/O** from what actually worked  
3. GitHub repo + flash docs  
4. Register **systemsixpointnine.com** (Squarespace)  
5. Sell box + accessories + lifestyle  

---

## Change log

| Date | Note |
|------|------|
| 2026-09-15 | Mission: not vs System 2.0/Rewinch; community + big-box BOM; sell control/Dyneema/traveler only |
| 2026-09-14 | v0 brief: control box + GitHub OSS + third-party powertrain + accessories/lifestyle |
| 2026-09-14 | Use cases: water, backyard snow, sled uphill, skate tow, + more |
| 2026-09-15 | Domains registered; coming-soon splash at web/index.html |


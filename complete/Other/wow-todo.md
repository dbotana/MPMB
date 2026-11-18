 reference material: /Users/dbotana/Github/5etools-src/data/book/book-wow.json

# World of Warcraft import script: status and remaining work

Unless a line says otherwise, every source file named here is under `/Users/dbotana/Github/5etools-src/data/`. Line numbers marked `ListsClasses.js` are in `MPMB-v14/_variables/ListsClasses.js`.

## Status (2026-11-17)

Agent-loop run `agent-loop-runs/2026-11-17-1136-wow-classes` built `WoW.js` from the plan `claude-plans/2026-11-17-wow-classes.md`. The Opus review passed in one round (`02-review-1.md`). The run checked:

- `node --check`
- the ES5 grep
- a Node harness that loads the sheet's built-in classes and then runs `WoW.js`
- the 15-case class-name check

It did **not** import the script in Acrobat.

Done:

- [x] `SourceList["WoW"]`, requiring sheet v24.0.8 or later.
- [x] 8 classes copied from the sheet's built-in 2024 classes. Their keys are `deathknight` (Paladin), `demonhunter` (Ranger), `evoker` (Sorcerer), `hunter` (Ranger), `mage` (Wizard), `priest` (Cleric), `shaman` (Barbarian) and `warrior` (Fighter). Each keeps its base class's subclass list.
- [x] Copied code that named the base class now uses the new key: Shaman Rage, Priest Blessed Strikes, Hunter and Demon Hunter Precise Hunter and Foe Slayer, and Mage Spell Mastery and Signature Spells.
- [x] Death Knight: Death Coil, Runic Smite, Runic Strikes, Improved Death Coil, and the Undead steed option for Faithful Steed.
- [x] Demon Hunter: Arcane Focus, the Deft Explorer language note, the Void Warrior note on Fighting Style, and Improved Spectral Sight.
- [x] Shaman: Totems, which replaces Primal Knowledge.
- [x] The *Rune Strike* spell.

Druid, Monk, Paladin, Rogue and Warlock need no class entry. WoW uses the 2024 class unchanged, so players pick the built-in class.

Agent-loop run `agent-loop-runs/2026-11-17-1338-wow-subclasses-1` added seven subclasses. Review 1 sent back two todo corrections, and review 2 passed. Neither reviewer could run the plan's runtime harness (their commands were refused by a permission setting), so it was rerun by hand afterwards: **ALL CHECKS PASSED**.

- [x] Path of the Elements and Path of the Spiritual Guardian (Barbarian, copied by Shaman). Discipline Domain and Shadow Domain (Cleric, copied by Priest). Oath of the Holy (Paladin, copied by Death Knight). Warrior of Mystic Brews (Monk). Swashbuckler (Rogue).
- [x] The four spells they grant: *Prayer of Mending*, *Psychic Horror*, *Shadow Word: Pain*, *Void Eruption*.
- [x] Copied subclass features that read the base class key (Berserker, Champion, Draconic Sorcery) now also read the copy's key.
- [x] `matchWoWSubclasses()` lets copied subclasses match "<WoW class> (<subclass>)", e.g. "Death Knight (Oath of Devotion)".

## Next: check and fix WoW.js

- [x] **Fix first: the subclass menu breaks some standard classes.** This was introduced by the class run, not the subclass run. Five built-in subclasses have a `fullname`, and the subclass dialog writes that bare name into the Class field. With the WoW copies loaded, the sheet reads those bare names as the wrong class. The check below runs the sheet's own `ParseClass()` on each subclass's dialog text, which is the test `ClassSelection.js:51` uses to decide what the menu lists:

  | Class | Subclass (`fullname`) | Result now |
  |---|---|---|
  | Barbarian | Berserker ("Berserker") | listed, but picking it turns the row into **Shaman** |
  | Fighter | Champion ("Champion") | listed, but picking it turns the row into **Warrior** |
  | Ranger | Hunter ("Hunter") | listed, but picking it turns the row into the WoW **Hunter** |
  | Wizard | Evoker ("Evoker") | **missing from the menu**: "Evoker" is read as the WoW Evoker class |
  | Demon Hunter | Hunter ("Hunter") | listed, but picking it turns the row into the WoW Hunter |
  | Evoker | Draconic Sorcery ("Draconic Sorcerer") | listed, but picking it turns the row into the Sorcerer |
  | Mage | Evoker ("Evoker") | missing from the menu |

  **Verified fix:** in `WoW.js`, `delete ClassSubList[key].fullname` for `barbarian-berserker`, `fighter-champion`, `ranger-hunter`, `wizard-evoker` and `sorcerer-draconic`. The dialog then writes "Class (Subclass)", and the same check gives 0 problems across all 32 class/subclass pairs. Side effect: standard characters show "Barbarian (Berserker)" instead of "Berserker" in the Class field and feature headers, like every other subclass. (Hunter and Evoker can't keep a bare `fullname` in any case, because those are now class names.) Do this before or in the `wow-subclasses-2` run, since the WoW Draconic Sorcery depends on it.
- [x] **Import test in Acrobat** on a fresh v24 sheet. Type each class name into the Class field and check its features, subclass choice and spell list. Exercise the code that was rekeyed: Shaman Rage damage, both Priest Blessed Strikes options, Hunter's Mark at Hunter and Demon Hunter levels 17 and 20, Mage Spell Mastery (18) and Signature Spells (20), and the Death Coil pool size.
- [x] **Faithful Steed at level 20** (`WoW.js:187-191`). The Undead steed text is also appended to the level-20 one-line summary, which takes room the capstone needs. For index 19, append a short note instead, e.g. `" [Undead steed option, Ghostly Stride]"`. (Review note 1.)
- [x] **Demon Hunter Fighting Style** (`WoW.js:197`). The text mentions Void Warrior, but it can't be selected. Once the Void Warrior feat exists, add it to this feature's `choices`. Done: Void Warrior is a `type: "fighting style"` feat, so the sheet adds it to this feature's choices through `choicesFightingStyles`.

## Chapter 1: Subclasses

### New rules to transcribe

These have their own `subclassFeature` entries with `source: "WoW"`.

- [x] Oath of the Ebon Blade, for the Death Knight (`class/class-deathknight.json`). The book calls it a Paladin subclass.
- [x] Demon Hunter, for the Demon Hunter (`class/class-demonhunter.json`). The book calls it a Ranger subclass.
- [x] Draconic Sorcery (WoW), for the Evoker (`class/class-evoker.json`). It is the 2024 Draconic Sorcery plus the "Evoker Spells" subclass spell list. Its `regExpSearch` must match "Evoker", because the built-in Draconic Sorcery requires "sorcerer".
- [x] Path of the Elements, for the Barbarian and the Shaman (`class/class-barbarian.json`). `class/class-shaman.json` only copies it.
- [x] Path of the Spiritual Guardian, for the Barbarian and the Shaman (same files).
- [x] Discipline Domain, for the Cleric and the Priest (`class/class-cleric.json`). `class/class-priest.json` only copies it.
- [x] Shadow Domain, for the Cleric and the Priest (same files).
- [x] Oath of the Holy, for the Paladin (`class/class-paladin.json`). The Death Knight copies it.
- [x] Warrior of Mystic Brews, for the Monk (`class/class-monk.json`).
- [x] Swashbuckler (2024 version), for the Rogue (`class/class-rogue.json`).

Tip: call `AddSubClass()` for the Barbarian, Cleric and Paladin subclasses **before** the `reskinWoWClass()` calls in `WoW.js`. Shaman, Priest and Death Knight then copy them automatically. Their `regExpSearch` must not require the base class name.

### Unchanged copies of 2024 subclasses

These have no new rules. Each 5etools entry is a plain `_copy` of the XPHB subclass.

- Each WoW class also inherits all of its base class's subclasses (`includeSubclassesFrom`): Death Knight gets the Paladin subclasses, Demon Hunter the Ranger ones, and Evoker the Sorcerer ones, besides those listed here.
- Shaman: Path of the Berserker, Path of the World Tree. Priest: Life Domain, War Domain.
- Hunter: Beast Master, Hunter. Mage: Evoker. Warrior: Battle Master, Champion.
- On the built-in classes: Druid (Circle of the Land, Moon, Stars), Monk (Warrior of Mercy, Warrior of the Open Hand), Paladin (Oath of Devotion, Oath of Vengeance), Rogue (Assassin, Soulknife), Warlock (Fiend Patron, Great Old One Patron).

The sheet has only the SRD subclass of each class built in. The other 2024 subclasses exist only if PHB'24 content is imported, and it has to be imported before `WoW.js`.

- [x] Check each copied subclass under its WoW class name. Done with the menu check: every built-in subclass resolves correctly under its WoW class except the `fullname` cases in "Fix first" above. Repeat the check for PHB'24 subclasses once that content is imported.
- [ ] `ranger-hunter`'s regex matches any name containing "hunter", so typing plain "Hunter" or "Demon Hunter" selects the Hunter subclass automatically. Removing its `fullname` doesn't change this. It needs a tighter regex, e.g. one that requires "hunter" twice or "ranger" and "hunter" together.

### Druid Wild Shape stat blocks

- [ ] Cat Form and Bear Form (`bestiary/bestiary-wow.json`, from the Druid's Feral and Guardian specializations). Add them as `CreatureList` Wild Shape options.

## Chapter 1: Spells and class spell lists

All 67 Chapter 1 spells are in `WoW.js` (2026-11-18). They are grouped below by the book section that lists them, and each section is also that class's spell-list addition. How to attach a list:

- **For a WoW class:** add to its `spellcastingList.extraspells`, e.g. `ClassList.deathknight.spellcastingList.extraspells`.
- **For a built-in class:** put the class in the spell's `classes` array. That's `"druid"`, `"paladin"` or `"warlock"`.

Decision (2026-11-18): the Death Knight keeps reading the Paladin list, so it also gets *Consecration*, *Guided Prayer* and *Divine Shield*, which have `classes: ["paladin"]`. The ten Death Knight spells are only in `ClassList.deathknight.spellcastingList.extraspells`, never on the Paladin list, because the book restricts them to Ebon Blade paladins. Every Death Knight can pick them, whatever its subclass, since the WoW Death Knight class stands for the Ebon Blade paladin. The Death Knight doesn't use `notspells` to drop the Paladin spells. The Mage and Priest `extraspells` also include the PHB spells from the book's tables.

**Death Knight Spells**
- [x] Add *Rune Strike* (already in `WoW.js`) to the Death Knight list.
- [x] Bonestorm
- [x] Chains of Ice
- [x] Death and Decay
- [x] Death Grip
- [x] Frostscythe
- [x] Leeching Strike
- [x] Remorseless Winter
- [x] Scourge Strike
- [x] Vampiric Blood

**Demon Hunter Spells**
- [x] Chaos Nova
- [x] Collapsing Star
- [x] Consume Soul
- [x] Demon Spikes
- [x] Eye Beam
- [x] Fel Rush
- [x] Fiery Brand
- [x] Infernal Strike
- [x] Metamorphosis
- [x] Sigil of Chains
- [x] Sigil of Flame
- [x] Soul Reap
- [x] Throw Glaive

**Druid Spells**
- [x] Feral Prowl
- [x] Innervate
- [x] Moonfire
- [x] Regrowth
- [x] Roar of Ursoc
- [x] Starfall
- [x] Tranquility
- [x] Tree of Life
- [x] Wrath

**New Evoker Spells**
- [x] Azure Strike
- [x] Azure Sweep
- [x] Blistering Scales
- [x] Breath of Eons
- [x] Dream Breath
- [x] Dream Flight
- [x] Ebon Might
- [x] Emberstorm
- [x] Emerald Blossom
- [x] Eruption
- [x] Lay Waste
- [x] Living Flame
- [x] Rescue
- [x] Shattering Star
- [x] Time Dilation
- [x] Upheaval

**Hunter Spells**
- [x] Explosive Trap
- [x] Freezing Trap
- [x] Serpent Sting

**Mage Spells**
- [x] Combustion
- [x] Flurry
- [x] Frost Nova
- [x] Mass Polymorph

**Paladin Spells**
- [x] Consecration
- [x] Divine Shield
- [x] Guided Prayer

**Priest Spells**
- [x] Apotheosis
- [x] Holy Nova
- [x] Prayer of Mending
- [x] Psychic Horror
- [x] Shadow Word: Pain
- [x] Void Eruption

**Warlock Spells**
- [x] Curse of Agony
- [x] Hand of Gul'dan
- [x] Rain of Fire

## Chapter 1: Feats, invocations, maneuvers and pets

**Feats** (`feats.json`)
- [x] Clearcasting (Mage feat)
- [x] Fingers of Frost (Mage feat)
- [x] Hot Streak (Mage feat)
- [x] Elusive Brawler (Monk feat)
- [x] Enveloping Mist (Monk feat)
- [x] Fists of Fury (Monk feat)
- [x] Stagger and Sway (Monk feat)
- [x] Void Warrior (a Fighting Style feat for the Demon Hunter; then add it to Demon Hunter's Fighting Style `choices`)

**Eldritch Invocations** (`optionalfeatures.json`, Warlock)
- [x] Call of the Void
- [x] Curse of Corruption
- [x] Expendable Minions
- [x] Health Funnel
- [x] Legion Summoning
- [x] Master Demonologist
- [x] Pact of the Legion

**Warrior Maneuvers** (`optionalfeatures.json`, Battle Master maneuvers). Battle Master is not in the SRD, so these need the PHB'24 Battle Master.
- [ ] Battle Shout
- [ ] Demoralizing Shout
- [ ] Heroic Leap
- [ ] Mortal Strike
- [ ] Warding Maneuver

  > **Blocked:** `MPMB-v14/_variables/ListsClasses.js` has no Battle Master (the Fighter's only subclass is `fighter-champion`) and no maneuver list or Superiority Dice. All 5 maneuvers spend a Superiority Die, so a WoW-owned host feature would have to re-create the Battle Master. Add them with `AddFeatureChoice` on the Battle Master's maneuver feature once a PHB'24 Battle Master script is available.

**Hunter Pets**
- [ ] The Pet Families table (`book/book-wow.json`, Hunter > "Hunter Pets"), which gives options for the Beast Master's primal companion.

  > **Blocked:** the Ranger's only built-in subclass is `ranger-hunter`; the Beast Master and its Primal Companion are PHB'24-only and absent from `ListsClasses.js`. The Pet Families table modifies the Primal Companion, so it has no feature to attach to. Transcribe it once a PHB'24 Beast Master is available.

## Chapter 2: Character origins

- [ ] Languages: 33 entries with source WoW in `languages.json`.
- [ ] Species: 17 entries in `races.json` (descriptions in `fluff-races.json`):
  - [ ] Dracthyr
  - [ ] Draenei
  - [ ] Dwarf
  - [ ] Earthen
  - [ ] Elf
  - [ ] Forsaken
  - [ ] Gnome
  - [ ] Mechagnome
  - [ ] Goblin
  - [ ] Haranir
  - [ ] Human
  - [ ] Orc
  - [ ] Pandaren
  - [ ] Tauren
  - [ ] Troll
  - [ ] Vulpera
  - [ ] Worgen
- [ ] Elf Spells: *Arcane Pulse* and *Entropic Embrace* (`spells/spells-wow.json`). These are the last 2 of the 69 WoW spells.
- [ ] Origin feats (`feats.json`): Arathi Heritage, Child of the Sea, Will to Survive.
- Backgrounds: neither the book nor the 5etools data has WoW backgrounds, so players use the PHB backgrounds. Nothing to do.

## Later chapters (not planned yet)

- Chapter 3, Professions and Gear: the Inscription Adept feat (`feats.json`), 64 items in `items.json` (mounts, vehicles, and magic items such as Ashbringer and Frostmourne), and the professions and crafting rules.
- Chapter 4, Factions and Renown: 35 renown rewards in `rewards.json`.
- Chapter 7, Bestiary of Azeroth: 86 creatures in `bestiary/bestiary-wow.json`.

## Known limitations of the class copies

These are for the subclass work. Fix each one when that subclass is added.

- **Subclass regexes (fixed).** `matchWoWSubclasses()` in `WoW.js` adds a "<WoW class> (<subclass>)" alternative to every copied subclass regex that didn't match. Imported PHB'24 subclasses are covered too, as long as they're imported before `WoW.js`. The `fullname` collision this bullet used to describe is fixed (see "Fix first" at the top). `WoW.js` deletes the five standard-class `fullname`s, and the Evoker's Draconic Sorcery is a separate `evoker-draconic sorcery` entry with no `fullname`.
- **Subclass features (fixed).** Berserker, Champion and Draconic Sorcery now read `(classes.known.<base> || classes.known.<copy>)`.
- **Import order.** Each copied class takes its subclass list as it is when `WoW.js` runs, so import `WoW.js` after any other content that adds subclasses.
- **Shared subclass names.** Typing only a subclass name two classes share can resolve to the WoW class, because the class added last wins the tie. For example, "Path of the Elements" gives Shaman, "Discipline Domain" gives Priest and "Oath of the Holy" gives Death Knight. Typing "Class (Subclass)" always works. The dialog problem this bullet used to describe is the "Fix first" item at the top.
- **PHB'24-only spells.** Five domain spells aren't in the sheet's built-in spell list, so they only show up if PHB'24 content is imported. Otherwise the sheet skips them without an error. Discipline Domain grants `arcane vigor`, `circle of power` and `destructive wave`. Shadow Domain grants `crown of madness` and `summon undead`. The WoW Ebon Blade, Demon Hunter and Evoker subclass spell lists also name XPHB spells that may be missing without PHB'24 content (e.g. `summon undead`, `freedom of movement`, `circle of power`, `destructive wave`, `steel wind strike`, `conjure volley`). The Priest spell list also names `mind sliver` and `summon undead`, which the sheet only has with PHB'24 content.

## Notes for the next agent-loop run

- **Readable folders.** The class run could only read `data/book`, `data/class` and `data/spells`. Feats, invocations, maneuvers, languages and species are in top-level files (`feats.json`, `optionalfeatures.json`, `languages.json`, `races.json`, `fluff-races.json`). So pass `--read-dir /Users/dbotana/Github/5etools-src/data` instead, which also covers `bestiary/`.
- **Syntax and patterns.** Follow `MPMB-v14/additional content syntax/` (sheet v24). Reuse the helpers in `WoW.js`: `reskinWoWClass`, `rekeyWoWFeature`, `appendWoWDescription` and `matchWoWSubclasses`.
- **Subclass menu check.** Ask the plan to include this check, and have the reviewer actually run it. Load `ListsClasses.js` and `WoW.js` as the runtime harness does. Then eval the real `ParseClass()` (`MPMB-v14/_functions/Functions1.js:1583`) and `sourceDate()` (`Functions0.js:1560`), with `testSource(key, obj)` stubbed as `return !obj`. Then, for every class and every key in its `subclasses[1]`, check that `ParseClass(fullname or "Class (subname)")` returns that same class and subclass. The `return !obj` stub matters: a stub that always returns false makes the sheet skip the PHB Ranger (`Functions1.js:1598`).
- **Reviewer permissions.** In the subclasses-1 run, both reviews had their harness commands refused by the permission mode. If that happens again, add an `--allow` rule for the harness command, or rerun the harness by hand before trusting the PASS.

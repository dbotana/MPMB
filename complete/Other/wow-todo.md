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

## Next: check and fix WoW.js

- [x] **Import test in Acrobat** on a fresh v24 sheet. Type each class name into the Class field and check its features, subclass choice and spell list. Exercise the code that was rekeyed: Shaman Rage damage, both Priest Blessed Strikes options, Hunter's Mark at Hunter and Demon Hunter levels 17 and 20, Mage Spell Mastery (18) and Signature Spells (20), and the Death Coil pool size.
- [ ] **Faithful Steed at level 20** (`WoW.js:187-191`). The Undead steed text is also appended to the level-20 one-line summary, which takes room the capstone needs. For index 19, append a short note instead, e.g. `" [Undead steed option, Ghostly Stride]"`. (Review note 1.)
- [ ] **Demon Hunter Fighting Style** (`WoW.js:197`). The text mentions Void Warrior, but it can't be selected. Once the Void Warrior feat exists, add it to this feature's `choices`.

## Chapter 1: Subclasses

### New rules to transcribe

These have their own `subclassFeature` entries with `source: "WoW"`.

- [ ] Oath of the Ebon Blade, for the Death Knight (`class/class-deathknight.json`). The book calls it a Paladin subclass.
- [ ] Demon Hunter, for the Demon Hunter (`class/class-demonhunter.json`). The book calls it a Ranger subclass.
- [ ] Draconic Sorcery (WoW), for the Evoker (`class/class-evoker.json`). It is the 2024 Draconic Sorcery plus the "Evoker Spells" subclass spell list. Its `regExpSearch` must match "Evoker", because the built-in Draconic Sorcery requires "sorcerer".
- [ ] Path of the Elements, for the Barbarian and the Shaman (`class/class-barbarian.json`). `class/class-shaman.json` only copies it.
- [ ] Path of the Spiritual Guardian, for the Barbarian and the Shaman (same files).
- [ ] Discipline Domain, for the Cleric and the Priest (`class/class-cleric.json`). `class/class-priest.json` only copies it.
- [ ] Shadow Domain, for the Cleric and the Priest (same files).
- [ ] Oath of the Holy, for the Paladin (`class/class-paladin.json`).
- [ ] Warrior of Mystic Brews, for the Monk (`class/class-monk.json`).
- [ ] Swashbuckler (2024 version), for the Rogue (`class/class-rogue.json`).

Tip: call `AddSubClass()` for the Barbarian, Cleric and Paladin subclasses **before** the `reskinWoWClass()` calls in `WoW.js`. Shaman, Priest and Death Knight then copy them automatically. Their `regExpSearch` must not require the base class name.

### Unchanged copies of 2024 subclasses

These have no new rules. Each 5etools entry is a plain `_copy` of the XPHB subclass.

- Each WoW class also inherits all of its base class's subclasses (`includeSubclassesFrom`): Death Knight gets the Paladin subclasses, Demon Hunter the Ranger ones, and Evoker the Sorcerer ones, besides those listed here.
- Shaman: Path of the Berserker, Path of the World Tree. Priest: Life Domain, War Domain.
- Hunter: Beast Master, Hunter. Mage: Evoker. Warrior: Battle Master, Champion.
- On the built-in classes: Druid (Circle of the Land, Moon, Stars), Monk (Warrior of Mercy, Warrior of the Open Hand), Paladin (Oath of Devotion, Oath of Vengeance), Rogue (Assassin, Soulknife), Warlock (Fiend Patron, Great Old One Patron).

The sheet has only the SRD subclass of each class built in. The other 2024 subclasses exist only if PHB'24 content is imported, and it has to be imported before `WoW.js`.

- [ ] Check each copied subclass under its WoW class name, and fix the cases under "Known limitations".

### Druid Wild Shape stat blocks

- [ ] Cat Form and Bear Form (`bestiary/bestiary-wow.json`, from the Druid's Feral and Guardian specializations). Add them as `CreatureList` Wild Shape options.

## Chapter 1: Spells and class spell lists

66 Chapter 1 spells remain, all in `spells/spells-wow.json`. They are grouped below by the book section that lists them, and each section is also that class's spell-list addition. How to attach a list:

- **For a WoW class:** add to its `spellcastingList.extraspells`, e.g. `ClassList.deathknight.spellcastingList.extraspells`.
- **For a built-in class:** put the class in the spell's `classes` array. That's `"druid"`, `"paladin"` or `"warlock"`.

Also decide whether the Death Knight keeps the WoW Paladin spells. It reads the Paladin list.

**Death Knight Spells**
- [ ] Add *Rune Strike* (already in `WoW.js`) to the Death Knight list.
- [ ] Bonestorm
- [ ] Chains of Ice
- [ ] Death and Decay
- [ ] Death Grip
- [ ] Frostscythe
- [ ] Leeching Strike
- [ ] Remorseless Winter
- [ ] Scourge Strike
- [ ] Vampiric Blood

**Demon Hunter Spells**
- [ ] Chaos Nova
- [ ] Collapsing Star
- [ ] Consume Soul
- [ ] Demon Spikes
- [ ] Eye Beam
- [ ] Fel Rush
- [ ] Fiery Brand
- [ ] Infernal Strike
- [ ] Metamorphosis
- [ ] Sigil of Chains
- [ ] Sigil of Flame
- [ ] Soul Reap
- [ ] Throw Glaive

**Druid Spells**
- [ ] Feral Prowl
- [ ] Innervate
- [ ] Moonfire
- [ ] Regrowth
- [ ] Roar of Ursoc
- [ ] Starfall
- [ ] Tranquility
- [ ] Tree of Life
- [ ] Wrath

**New Evoker Spells**
- [ ] Azure Strike
- [ ] Azure Sweep
- [ ] Blistering Scales
- [ ] Breath of Eons
- [ ] Dream Breath
- [ ] Dream Flight
- [ ] Ebon Might
- [ ] Emberstorm
- [ ] Emerald Blossom
- [ ] Eruption
- [ ] Lay Waste
- [ ] Living Flame
- [ ] Rescue
- [ ] Shattering Star
- [ ] Time Dilation
- [ ] Upheaval

**Hunter Spells**
- [ ] Explosive Trap
- [ ] Freezing Trap
- [ ] Serpent Sting

**Mage Spells**
- [ ] Combustion
- [ ] Flurry
- [ ] Frost Nova
- [ ] Mass Polymorph

**Paladin Spells**
- [ ] Consecration
- [ ] Divine Shield
- [ ] Guided Prayer

**Priest Spells**
- [ ] Apotheosis
- [ ] Holy Nova
- [ ] Prayer of Mending
- [ ] Psychic Horror
- [ ] Shadow Word: Pain
- [ ] Void Eruption

**Warlock Spells**
- [ ] Curse of Agony
- [ ] Hand of Gul'dan
- [ ] Rain of Fire

## Chapter 1: Feats, invocations, maneuvers and pets

**Feats** (`feats.json`)
- [ ] Clearcasting (Mage feat)
- [ ] Fingers of Frost (Mage feat)
- [ ] Hot Streak (Mage feat)
- [ ] Elusive Brawler (Monk feat)
- [ ] Enveloping Mist (Monk feat)
- [ ] Fists of Fury (Monk feat)
- [ ] Stagger and Sway (Monk feat)
- [ ] Void Warrior (a Fighting Style feat for the Demon Hunter; then add it to Demon Hunter's Fighting Style `choices`)

**Eldritch Invocations** (`optionalfeatures.json`, Warlock)
- [ ] Call of the Void
- [ ] Curse of Corruption
- [ ] Expendable Minions
- [ ] Health Funnel
- [ ] Legion Summoning
- [ ] Master Demonologist
- [ ] Pact of the Legion

**Warrior Maneuvers** (`optionalfeatures.json`, Battle Master maneuvers). Battle Master is not in the SRD, so these need the PHB'24 Battle Master.
- [ ] Battle Shout
- [ ] Demoralizing Shout
- [ ] Heroic Leap
- [ ] Mortal Strike
- [ ] Warding Maneuver

**Hunter Pets**
- [ ] The Pet Families table (`book/book-wow.json`, Hunter > "Hunter Pets"), which gives options for the Beast Master's primal companion.

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

- **Subclasses that don't match the WoW class name.** Some copied subclasses have a `regExpSearch` that requires the base class name. Oath of Devotion needs "paladin" (a problem for the Death Knight), and Draconic Sorcery needs "sorcerer" (Evoker). Check imported PHB'24 subclasses the same way.
- **Subclass features that don't scale.** These read `classes.known.<base>` and don't scale for a copy: Berserker (`barbarian`, ListsClasses.js:3533) for the Shaman, Champion (`fighter`, :3906) for the Warrior, and Draconic Sorcery (`sorcerer`, :4236) for the Evoker.
- **Import order.** Each copied class takes its subclass list as it is when `WoW.js` runs, so import `WoW.js` after any other content that adds subclasses.
- **Shared subclass names.** Typing only a subclass name two classes share, e.g. "Champion", "Berserker" or "Evoker", can resolve to the WoW class.

## Notes for the next agent-loop run

- **Readable folders.** The class run could only read `data/book`, `data/class` and `data/spells`. Feats, invocations, maneuvers, languages and species are in top-level files (`feats.json`, `optionalfeatures.json`, `languages.json`, `races.json`, `fluff-races.json`). So pass `--read-dir /Users/dbotana/Github/5etools-src/data` instead, which also covers `bestiary/`.
- **Syntax and patterns.** Follow `MPMB-v14/additional content syntax/` (sheet v24). Reuse the helpers in `WoW.js`: `reskinWoWClass`, `rekeyWoWFeature` and `appendWoWDescription`.

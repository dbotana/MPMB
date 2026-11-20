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

- [x] `SourceList["WoW"]`, requiring sheet v24.1.0 or later (the version of `pub_20240917_PHB.js`, which must be imported first).
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

- [x] **Make the WoW features fit the Colourful sheet (level 20).** Added `complete/Other/wow-fit-harness.js`. It loads `ListsClasses.js`, the PHB'24 file and `WoW.js`, and counts the text the sheet prints at level 20, with chosen choices replacing the parent text. It compares each WoW subclass (worst host class, class + subclass features), WoW class, feat, invocation, maneuver, species and lineage against the largest PHB'24 entry of the same kind. "Before" is `WoW.js` at `fdb30a4`. Long option lists (Mystic Brew beverages, Ebon Blade Runic Mastery, Soul Fragments, Raging Elements, Cunning Strike options, Shaman totems, species and lineage detail) moved to page 3 (`autoSelectExtrachoices`, `page3notes`) or Notes pages (`toNotesPage`), with short pointers. Each `choices` option now repeats its parent's rules, because a chosen option replaces the parent's description. `node "complete/Other/wow-fit-harness.js" --dump` prints all sheet text for rule checks. The PHB Primal Companion text of the Hunter Beast Master moved to a "Primal Companion" Notes page in terse form (all rules kept), because Pet Specialization replaces Roving and the row can't fit with the PHB text on page 2.

| Group | Entry | Host | Before | After | Budget | Budget from | Status |
|---|---|---|---:|---:|---:|---|---|
| subclass | barbarian-path of the elements | barbarian | 4052 | 2111 | 2565 | barbarian-wild heart | OK |
| subclass | barbarian-path of the spiritual guardian | barbarian | 3344 | 2391 | 2565 | barbarian-wild heart | OK |
| subclass | cleric-discipline domain | cleric | 2759 | 2759 | 2797 | cleric-trickery | OK |
| subclass | cleric-shadow domain | cleric | 2822 | 2752 | 2797 | cleric-trickery | OK |
| subclass | paladin-oath of the holy | paladin | 2624 | 2432 | 2492 | paladin-vengeance | OK |
| subclass | deathknight-oath of the ebon blade | deathknight | 3928 | 2484 | 2492 | paladin-vengeance | OK |
| subclass | demonhunter-demon hunter | demonhunter | 3017 | 2254 | 2394 | ranger-beast master | OK |
| subclass | monk-warrior of mystic brews | monk | 4444 | 2520 | 2544 | monk-elements | OK |
| subclass | rogue-swashbuckler | rogue | 2761 | 2077 | 2321 | rogue-soulknife | OK |
| subclass | evoker-draconic sorcery | evoker | 2343 | 2343 | 2769 | sorcerer-clockwork | OK |
| subclass | druid-moon | druid | 2835 | 2835 | 2980 | druid-land | OK |
| subclass | hunter-beast master | hunter | 3114 | 1790 | 2434 | ranger-beast master (PHB original) + 40 | OK |
| class | deathknight |  | 1783 | 1571 | 1586 | paladin | OK |
| class | demonhunter |  | 1277 | 1074 | 1076 | ranger | OK |
| class | evoker |  | 1529 | 1513 | 1531 | sorcerer | OK |
| class | hunter |  | 1076 | 1060 | 1076 | ranger | OK |
| class | mage |  | 1389 | 1373 | 1391 | wizard | OK |
| class | priest |  | 1775 | 1759 | 1775 | cleric | OK |
| class | shaman |  | 2304 | 1625 | 1689 | barbarian | OK |
| class | warrior |  | 853 | 837 | 853 | fighter | OK |
| feat | clearcasting |  | 245 | 245 | 365 | mounted combatant | OK |
| feat | fingers of frost |  | 194 | 194 | 365 | mounted combatant | OK |
| feat | hot streak |  | 197 | 197 | 365 | mounted combatant | OK |
| feat | elusive brawler |  | 92 | 92 | 365 | mounted combatant | OK |
| feat | enveloping mist |  | 336 | 336 | 365 | mounted combatant | OK |
| feat | fists of fury |  | 278 | 278 | 365 | mounted combatant | OK |
| feat | stagger and sway |  | 276 | 276 | 365 | mounted combatant | OK |
| feat | void warrior |  | 263 | 263 | 365 | mounted combatant | OK |
| feat | arathi heritage |  | 178 | 178 | 365 | mounted combatant | OK |
| feat | child of the sea |  | 100 | 100 | 365 | mounted combatant | OK |
| feat | will to survive |  | 135 | 135 | 365 | mounted combatant | OK |
| invocation | Curse of Corruption |  | 178 | 178 | 542 | Investment of the Chain Master (req: lvl 5+, Pact of the Chain) | OK |
| invocation | Health Funnel |  | 206 | 206 | 542 | Investment of the Chain Master (req: lvl 5+, Pact of the Chain) | OK |
| invocation | Master Demonologist |  | 96 | 96 | 542 | Investment of the Chain Master (req: lvl 5+, Pact of the Chain) | OK |
| invocation | Expendable Minions |  | 158 | 158 | 542 | Investment of the Chain Master (req: lvl 5+, Pact of the Chain) | OK |
| invocation | Pact of the Legion |  | 268 | 268 | 542 | Investment of the Chain Master (req: lvl 5+, Pact of the Chain) | OK |
| invocation | Call of the Void (req: lvl 5+, Pact of the Legion) |  | 406 | 406 | 542 | Investment of the Chain Master (req: lvl 5+, Pact of the Chain) | OK |
| invocation | Legion Summoning (req: lvl 9+, Pact of the Legion) |  | 251 | 251 | 542 | Investment of the Chain Master (req: lvl 5+, Pact of the Chain) | OK |
| maneuver | Battle Shout |  | 233 | 233 | 278 | Commander's Strike | OK |
| maneuver | Demoralizing Shout |  | 260 | 260 | 278 | Commander's Strike | OK |
| maneuver | Heroic Leap |  | 244 | 244 | 278 | Commander's Strike | OK |
| maneuver | Mortal Strike |  | 209 | 209 | 278 | Commander's Strike | OK |
| maneuver | Warding Maneuver |  | 301 | 269 | 278 | Commander's Strike | OK |
| species | dracthyr |  | 668 | 532 | 537 | dragonborn | OK |
| species | draenei |  | 154 | 154 | 537 | dragonborn | OK |
| species | earthen |  | 670 | 505 | 537 | dragonborn | OK |
| species | forsaken |  | 637 | 475 | 537 | dragonborn | OK |
| species | goblin |  | 399 | 399 | 537 | dragonborn | OK |
| species | haranir |  | 404 | 404 | 537 | dragonborn | OK |
| species | mechagnome |  | 815 | 536 | 537 | dragonborn | OK |
| species | pandaren |  | 338 | 338 | 537 | dragonborn | OK |
| species | tauren |  | 478 | 388 | 537 | dragonborn | OK |
| species | troll |  | 189 | 189 | 537 | dragonborn | OK |
| species | vulpera |  | 314 | 314 | 537 | dragonborn | OK |
| species | worgen |  | 546 | 428 | 537 | dragonborn | OK |
| lineage | draenei-draenei |  | 548 | 548 | 638 | elf-high | OK |
| lineage | draenei-krokul |  | 528 | 528 | 638 | elf-high | OK |
| lineage | draenei-lightforged |  | 528 | 528 | 638 | elf-high | OK |
| lineage | draenei-manari |  | 521 | 521 | 638 | elf-high | OK |
| lineage | tauren-mulgore |  | 806 | 614 | 638 | elf-high | OK |
| lineage | tauren-highmountain |  | 888 | 637 | 638 | elf-high | OK |
| lineage | tauren-taunka |  | 592 | 502 | 638 | elf-high | OK |
| lineage | troll-amani |  | 306 | 306 | 638 | elf-high | OK |
| lineage | troll-darkspear |  | 379 | 379 | 638 | elf-high | OK |
| lineage | troll-zandalari |  | 341 | 341 | 638 | elf-high | OK |
| lineage | elf-blood |  | 713 | 595 | 638 | elf-high | OK |
| lineage | elf-night |  | 717 | 584 | 638 | elf-high | OK |
| lineage | elf-nightborne |  | 677 | 535 | 638 | elf-high | OK |
| lineage | elf-void |  | 681 | 539 | 638 | elf-high | OK |
ALL BUDGETS PASSED

- [ ] **Check in Acrobat** that the longest subclasses fit at level 20 on the Colourful sheet and that their notes land on page 3 or on a Notes page: Warrior of Mystic Brews, Oath of the Ebon Blade, Demon Hunter, and Shadow Domain.

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

- [x] Check each copied subclass under its WoW class name. Done with the menu check: every built-in subclass resolves correctly under its WoW class except the `fullname` cases in "Fix first" above. Repeat the check for PHB'24 subclasses once that content is imported. Done for the PHB'24 subclasses too: 94 class/subclass pairs, 0 problems, after deleting 13 PHB `fullname`s.
- [ ] `ranger-hunter`'s regex matches any name containing "hunter", so typing plain "Hunter" or "Demon Hunter" selects the Hunter subclass automatically. Removing its `fullname` doesn't change this. It needs a tighter regex, e.g. one that requires "hunter" twice or "ranger" and "hunter" together.

### Druid Wild Shape stat blocks

- [x] Cat Form and Bear Form (`bestiary/bestiary-wow.json`, from the Druid's Feral and Guardian specializations). Added as a `subclassfeature3.2` on the PHB'24 Circle of the Moon (the book requires Circle Forms), with the two forms as `creatureOptions` and `forceWildshapeOption`, so they appear on the Wild Shape page under "Circle of the Moon (WoW)" only for a Moon druid. A Wild Shape callback sets Str and Dex to the druid's Wisdom and keeps Con, scales the Pounce and Mangle dice with Druid level, and gives the Cat Stealth proficiency. AC is 13 + Wis (Cat) and 15 + Wis (Bear). The book doesn't say these forms count against the known forms, so they use a normal known-form slot. Not automated: Primal Wrath, Prowl, Frenzied Regeneration and Growl (text only), and the temporary HP, which Circle Forms already gives.
- [ ] Check in Acrobat: the forms show up in the Wild Shape drop-down for a Moon druid, the page shows Str and Dex equal to Wisdom and the right AC, and the attacks use the spell attack bonus.
- [ ] Moonkin (`bestiary/bestiary-wow.json`, Chapter 7). The Circle of the Stars druid's Starry Form can take this appearance. Not done: it is a normal stat block and a cosmetic option of Starry Form.

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

**Warrior Maneuvers** (`optionalfeatures.json`, Battle Master maneuvers). Added with `AddFeatureChoice` to the PHB'24 Battle Master's Maneuvers feature, which the Fighter and the Warrior share.
- [x] Battle Shout
- [x] Demoralizing Shout
- [x] Heroic Leap
- [x] Mortal Strike
- [x] Warding Maneuver

**Hunter Pets**
- [x] The Pet Families table (`book/book-wow.json`, Hunter > "Hunter Pets"), which gives options for the Beast Master's primal companion. Done on a Hunter-only copy `hunter-beast master`: a summary on Primal Companion plus the table on a Notes page.
- [x] Pet Specialization (Hunter level 6, `class/class-ranger.json`), which the Spec. column refers to. It is a `roving` feature on the Hunter-only `hunter-beast master`, so it replaces Roving for a Beast Master Hunter only. It has Cunning, Ferocity and Tenacity choices, each with a once-per-Long-Rest spell the beast casts. Cunning adds 10 ft to all speeds, and Tenacity adds the Hunter level to HP maximum. Not automated: the beast's own HP and speed, and Ferocity's healing. Picking the Specialization for the beast's family is left to the player.

## Chapter 2: Character origins

- [x] Languages: 33 entries with source WoW in `languages.json`. (listed in a comment in WoW.js; the sheet has no language list, and AddLanguage() writes into the character's fields, so nothing is registered. The WoW species and Elf lineages use languageProfs "Common or Orcish" + 2.)
- [x] Species: 17 entries in `races.json` (descriptions in `fluff-races.json`):
  - [x] Dracthyr
  - [x] Draenei (4 Eredar lineages)
  - [x] Dwarf (unchanged copy of the 2024 species: use the built-in one)
  - [x] Earthen
  - [x] Elf (Blood Elf, Night Elf, Nightborne and Void Elf added as lineages of the built-in Elf; the WoW High Elf is the built-in High Elf)
  - [x] Forsaken
  - [x] Gnome (its lineage is the Rock Gnome lineage: use the built-in Gnome, Rock Gnome)
  - [x] Mechagnome
  - [x] Goblin
  - [x] Haranir
  - [x] Human (only rewords Versatile: use the built-in Human)
  - [x] Orc (unchanged copy of the 2024 species: use the built-in one)
  - [x] Pandaren
  - [x] Tauren (3 lineages)
  - [x] Troll (3 lineages)
  - [x] Vulpera
  - [x] Worgen
- [x] Elf Spells: *Arcane Pulse* and *Entropic Embrace* (`spells/spells-wow.json`). These are the last 2 of the 69 WoW spells.
- [x] Origin feats (`feats.json`): Arathi Heritage, Child of the Sea, Will to Survive. (type "origin", restricted to Humans with prereqeval)
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
- **PHB'24 import order.** `WoW.js` requires `pub_20240917_PHB.js` (sheet v24.1.0) to be imported first. The Warrior Maneuvers attach to its Battle Master, the Hunter Pet Families to its Beast Master, and the WoW classes only inherit its subclasses if it is loaded before `WoW.js`. Without it, `WoW.js` still imports, but those blocks are skipped.
- **Demon Hunter Beast Master companion.** The Demon Hunter shares the PHB'24 `ranger-beast master`, whose Primal Companion links its HP, level and Beast's Strike to the `ranger` class key. A Demon Hunter without Ranger levels gets no automatic companion HP or attack bonus. The Hunter's copy is rekeyed to `hunter`; a Demon Hunter fix would need its own copy.
- **Shared subclass names.** Typing only a subclass name two classes share can resolve to the WoW class, because the class added last wins the tie. For example, "Path of the Elements" gives Shaman, "Discipline Domain" gives Priest and "Oath of the Holy" gives Death Knight. Typing "Class (Subclass)" always works. The dialog problem this bullet used to describe is the "Fix first" item at the top.
- **PHB'24-only spells.** Five domain spells aren't in the sheet's built-in spell list, so they only show up if PHB'24 content is imported. Otherwise the sheet skips them without an error. Discipline Domain grants `arcane vigor`, `circle of power` and `destructive wave`. Shadow Domain grants `crown of madness` and `summon undead`. The WoW Ebon Blade, Demon Hunter and Evoker subclass spell lists also name XPHB spells that may be missing without PHB'24 content (e.g. `summon undead`, `freedom of movement`, `circle of power`, `destructive wave`, `steel wind strike`, `conjure volley`). The Priest spell list also names `mind sliver` and `summon undead`, which the sheet only has with PHB'24 content. The species lineages also name PHB'24-only spells: `thorn whip` (Haranir), `arcane vigor` (Blood Elf) and `mind sliver` (Void Elf).

## Notes for the next agent-loop run

- **Readable folders.** The class run could only read `data/book`, `data/class` and `data/spells`. Feats, invocations, maneuvers, languages and species are in top-level files (`feats.json`, `optionalfeatures.json`, `languages.json`, `races.json`, `fluff-races.json`). So pass `--read-dir /Users/dbotana/Github/5etools-src/data` instead, which also covers `bestiary/`.
- **Syntax and patterns.** Follow `MPMB-v14/additional content syntax/` (sheet v24). Reuse the helpers in `WoW.js`: `reskinWoWClass`, `rekeyWoWFeature`, `appendWoWDescription` and `matchWoWSubclasses`.
- **Subclass menu check.** Ask the plan to include this check, and have the reviewer actually run it. Load `ListsClasses.js` and `WoW.js` as the runtime harness does. Then eval the real `ParseClass()` (`MPMB-v14/_functions/Functions1.js:1583`) and `sourceDate()` (`Functions0.js:1560`), with `testSource(key, obj)` stubbed as `return !obj`. Then, for every class and every key in its `subclasses[1]`, check that `ParseClass(fullname or "Class (subname)")` returns that same class and subclass. The `return !obj` stub matters: a stub that always returns false makes the sheet skip the PHB Ranger (`Functions1.js:1598`).
- **Reviewer permissions.** In the subclasses-1 run, both reviews had their harness commands refused by the permission mode. If that happens again, add an `--allow` rule for the harness command, or rerun the harness by hand before trusting the PASS.

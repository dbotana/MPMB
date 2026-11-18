/*	-WHAT IS THIS?-
	This file adds optional material to "MPMB's Character Record Sheet" found at https://flapkan.com/mpmb/charsheets
	Import this file using the "Add Extra Materials" bookmark.

	-KEEP IN MIND-
	It is recommended to enter the code in a fresh sheet before adding any other information (i.e. before making your character with it).
*/

/*	-INFORMATION-
	Subject:	Class
	Effect:		This script adds the World of Warcraft versions of the Death Knight, Demon Hunter, Evoker, Hunter, Mage, Priest, Shaman and Warrior classes, the World of Warcraft class features for the Death Knight, Demon Hunter and Shaman, the Path of the Elements, Path of the Spiritual Guardian, Discipline Domain, Shadow Domain, Oath of the Holy, Oath of the Ebon Blade, Demon Hunter, Warrior of Mystic Brews, Swashbuckler and Draconic Sorcery (Evoker, with the Evoker Spells) subclasses, the Rune Strike, Prayer of Mending, Psychic Horror, Shadow Word: Pain and Void Eruption spells, the 35 spells those three WoW subclasses grant, fixes for copied subclasses whose regex or class-level checks needed the WoW class names, the subclass-menu fullname fix for the standard classes, the 27 remaining Chapter 1 spells, and the WoW class spell lists: Death Knight, Demon Hunter, Evoker, Hunter, Mage and Priest via extraspells, and Druid, Paladin and Warlock via the spells' classes.
	Code by:	Rocky
	Date:		2026-11-18 (sheet v24)
*/

var iFileName = "WoW.js";

RequiredSheetVersion("24.0.8");

SourceList["WoW"] = {
	name: "World of Warcraft",
	abbreviation: "WoW",
	abbreviationSpellsheet: "W",
	group: "Primary Sources",
	date: "2026/11/17"
};

// Fix the subclass dialog for the standard classes: bare fullnames collide with the WoW class names
delete ClassSubList["barbarian-berserker"].fullname;
delete ClassSubList["fighter-champion"].fullname;
delete ClassSubList["ranger-hunter"].fullname;
delete ClassSubList["wizard-evoker"].fullname;
delete ClassSubList["sorcerer-draconic"].fullname;

SpellsList["rune strike"] = {
	name: "Rune Strike",
	classes: [],
	source: ["WoW", 15],
	level: 1,
	school: "Evoc",
	time: "Bns",
	timeFull: "Bonus Action, which you take immediately after hitting a target with a Melee weapon or an Unarmed Strike",
	range: "Self",
	components: "V",
	duration: "Instantaneous",
	description: "Cast on melee weapon hit; +2d8+1d8/SL Necrotic damage; Celestials take +1d8 damage",
	descriptionFull: [
		"The target takes an extra 2d8 Necrotic damage. The damage increases by 1d8 if the target is a Celestial.",
		UsingHigherLvl + "The damage increases by 1d8 for each spell slot level above 1.",
	],
};

SpellsList["prayer of mending"] = {
	name: "Prayer of Mending",
	classes: [],
	source: ["WoW", 54],
	level: 3,
	school: "Abjur",
	time: "Act",
	range: "60 ft",
	components: "V,M",
	compMaterial: "A pinch of powdered silver",
	duration: "1 min",
	description: "1 willing crea; when it next takes dmg, heals 1d8+spell mod HP, then jumps to ally in 30 ft; 5 heals +1/SL",
	descriptionFull: [
		"You place a holy ward on one willing creature in range. The next time that creature takes damage, the ward activates, and the creature regains Hit Points equal to 1d8 plus your spellcasting ability modifier. The ward then jumps to another ally of your choice within 30 feet of the warded creature, with the same effect. If no ally is in range, the spell ends, and it ends after the ward has healed five times.",
		UsingHigherLvl + "The spell can heal one additional time for each spell slot level above 3.",
	],
};

SpellsList["psychic horror"] = {
	name: "Psychic Horror",
	classes: [],
	source: ["WoW", 55],
	level: 4,
	school: "Ench",
	time: "Act",
	range: "30 ft",
	components: "V,M",
	compMaterial: "A drop of ink",
	duration: "Instantaneous",
	save: "Wis",
	description: "1 crea save or 2d10+1d10/SL Psychic dmg, Frightened 1 min (save end of turn) \x26 Stunned 1 rnd; save half",
	descriptionFull: [
		"A creature within range is overwhelmed with mental visions of the Void and makes a Wisdom saving throw. On a failed save, the target takes 2d10 Psychic damage and has the Frightened condition for 1 minute. A Frightened creature also has the Stunned condition until the end of your next turn. At the end of each of its turns, the target repeats the save, ending the effect on itself on a success. On a successful save, the creature takes half as much damage only.",
		UsingHigherLvl + "The damage increases by 1d10 for each spell slot level above 4.",
	],
};

SpellsList["shadow word: pain"] = {
	name: "Shadow Word: Pain",
	classes: [],
	source: ["WoW", 55],
	level: 1,
	school: "Necro",
	time: "Act",
	range: "60 ft",
	components: "V",
	duration: "1 min",
	save: "Wis",
	description: "1 crea save or 1d10+1d10/SL+spell mod Psychic dmg \x26 cursed: 1d10 Psychic dmg SoT; save end of turn; save half",
	descriptionFull: [
		"Speaking a word of Void power, you cause one creature in range to suffer agonizing pain. The target makes a Wisdom saving throw. On a failed save, the target takes Psychic damage equal to 1d10 plus your spellcasting ability modifier and is cursed for the duration. On a successful save, it takes half as much damage only.",
		"Until the curse ends, the target takes 1d10 Psychic damage at the start of each of its turns. It repeats the save at the end of each of its turns, ending the curse on a success.",
		UsingHigherLvl + "The spell's initial damage increases by 1d10 for each spell slot level above 1.",
	],
};

SpellsList["void eruption"] = {
	name: "Void Eruption",
	classes: [],
	source: ["WoW", 55],
	level: 5,
	school: "Necro",
	time: "Bns",
	range: "120 ft",
	components: "V",
	duration: "Conc, 1 min",
	save: "Con",
	description: "20-ft rad 5d6 Necro. dmg, save half; Bns: spell atk 60 ft 2d6+spell mod Necro. dmg; Invisible in dim/dark",
	descriptionFull: [
		"Shadowy Void energy erupts in a 20-foot-radius Sphere centered on a point you choose within range. Each creature in the Sphere makes a Constitution saving throw, taking 5d6 Necrotic damage on a failed save or half as much damage on a successful one. At the same time, you take on a form of Void that grants you the following benefits for the duration.",
		" \u2022 Void Bolt. As a Bonus Action on your turn, you can hurl a bolt of Void energy at a creature within 60 feet of yourself. Make a ranged spell attack; on a hit, the target takes Necrotic damage equal to 2d6 plus your spellcasting ability modifier.",
		" \u2022 Void Stealth. While you are in an area of Dim Light or Darkness, you have the Invisible condition.",
	],
};

SpellsList["death grip"] = {
	name: "Death Grip",
	classes: [],
	source: ["WoW", 14],
	level: 1,
	school: "Abjur",
	time: "Bns",
	range: "30 ft",
	components: "V",
	duration: "Instantaneous",
	save: "Str",
	description: "1 crea save or pulled straight toward me to the nearest unoccupied space within 5 ft of me",
	descriptionFull: [
		"You harness runic energies to bind a foe to you. One creature you can see within range must succeed on a Strength saving throw or be pulled straight toward you to the nearest unoccupied space within 5 feet of you.",
	],
};

SpellsList["vampiric blood"] = {
	name: "Vampiric Blood",
	classes: [],
	source: ["WoW", 15],
	level: 1,
	school: "Necro",
	time: "Act",
	range: "Self",
	components: "V",
	duration: "Conc, 1 min",
	description: "My HP max +10; whenever I regain HP, I heal +1d6+1d6/SL extra HP",
	descriptionFull: [
		"For the duration, your Hit Point maximum increases by 10. In addition, whenever you regain Hit Points, you regain an extra 1d6 Hit Points.",
		UsingHigherLvl + "The additional healing increases by 1d6 for each spell slot level above 1.",
	],
};

SpellsList["chains of ice"] = {
	name: "Chains of Ice",
	classes: [],
	source: ["WoW", 14],
	level: 1,
	school: "Evoc",
	time: "Act",
	range: "30 ft",
	components: "V",
	duration: "Instantaneous",
	save: "Dex",
	description: "1 crea save or 1d10+1d10/SL Cold dmg \x26 Speed halved 1 rnd; save half",
	descriptionFull: [
		"You create chains of ice around a creature you can see within range. The target makes a Dexterity saving throw. On a failed save, the target takes 1d10 Cold damage, and its Speed is halved until the end of its next turn. On a successful save, the target takes half as much damage only.",
		UsingHigherLvl + "The damage increases by 1d10 for each spell slot level above 1.",
	],
};

SpellsList["scourge strike"] = {
	name: "Scourge Strike",
	classes: [],
	source: ["WoW", 15],
	level: 1,
	school: "Necro",
	time: "Bns",
	timeFull: "Bonus Action, which you take immediately after hitting a target with a Melee weapon or an Unarmed Strike",
	range: "Self",
	components: "V",
	duration: "1 min",
	save: "Con",
	description: "Cast on melee hit; +2d6+1d6/SL Necro. dmg, save or Poisoned (save end of turn)",
	descriptionFull: [
		"The target takes an extra 2d6 Necrotic damage from the attack, and it must succeed on a Constitution saving throw or have the Poisoned condition until the spell ends. At the end of each of its turns, the Poisoned target repeats the save, ending the spell on itself on a success.",
		UsingHigherLvl + "The damage increases by 1d6 for each spell slot level above 1.",
	],
};

SpellsList["death and decay"] = {
	name: "Death and Decay",
	classes: [],
	source: ["WoW", 14],
	level: 2,
	school: "Necro",
	time: "Act",
	range: "60 ft",
	components: "V",
	duration: "Instantaneous",
	save: "Wis",
	description: "20-ft rad all save or 2d6 Necro. dmg \x26 cursed 1 rnd (my atk hits +1d6 Necro.); save half",
	descriptionFull: [
		"Corruption ripples out in a 20-foot-radius Sphere from a point on the ground you can see within range. Each creature in that area makes a Wisdom saving throw. On a failed save, a target takes 2d6 Necrotic damage and is cursed until the end of your next turn. If you deal damage to a cursed target with an attack roll, the target takes an extra 1d6 Necrotic damage. On a successful save, the target takes half as much damage only.",
	],
};

SpellsList["frostscythe"] = {
	name: "Frostscythe",
	classes: [],
	source: ["WoW", 14],
	level: 2,
	school: "Evoc",
	time: "Act",
	range: "S:20-ft cone",
	components: "V",
	duration: "Instantaneous",
	save: "Con",
	description: "20-ft cone all save or 3d8+1d8/SL Cold dmg \x26 Speed -10 ft 1 min; save half",
	descriptionFull: [
		"Sweeping your weapon before you, you unleash a blast of icy cold. Each creature in a 20-foot Cone makes a Constitution saving throw. On a failed save, a creature takes 3d8 Cold damage, and its Speed is reduced by 10 feet for 1 minute. On a successful save, a creature takes half as much damage only.",
		UsingHigherLvl + "The damage increases by 1d8 for each spell slot level above 2.",
	],
};

SpellsList["leeching strike"] = {
	name: "Leeching Strike",
	classes: [],
	source: ["WoW", 15],
	level: 3,
	school: "Necro",
	time: "Bns",
	timeFull: "Bonus Action, which you take immediately after hitting a target with a Melee weapon or an Unarmed Strike",
	range: "Self",
	components: "V",
	duration: "Instantaneous",
	description: "Cast on melee hit; +3d8+1d8/SL Necro. dmg \x26 I regain 3d4+1d4/SL HP",
	descriptionFull: [
		"The target hit by the strike takes an extra 3d8 Necrotic damage from the attack, and you regain 3d4 Hit Points.",
		UsingHigherLvl + "The damage increases by 1d8, and the Hit Points you regain increase by 1d4, for each spell slot level above 3.",
	],
};

SpellsList["remorseless winter"] = {
	name: "Remorseless Winter",
	classes: [],
	source: ["WoW", 15],
	level: 3,
	school: "Evoc",
	time: "Act",
	range: "S:30-ft rad",
	components: "V",
	duration: "Instantaneous",
	save: "Con",
	description: "30-ft rad any save or 6d6+1d6/SL Cold dmg; save half; Speed becomes 10 ft 1 rnd",
	descriptionFull: [
		"You drain the warmth from nearby creatures. Each creature of your choice in a 30-foot Emanation originating from you makes a Constitution saving throw, taking 6d6 Cold damage on a failed save or half as much damage on a successful one. Whether or not a creature succeeds on its saving throw, its Speed is reduced to 10 feet until the end of its next turn as clinging frost hinders its movement.",
		UsingHigherLvl + "The damage increases by 1d6 for each spell slot level above 3.",
	],
};

SpellsList["bonestorm"] = {
	name: "Bonestorm",
	classes: [],
	source: ["WoW", 14],
	level: 5,
	school: "Abjur",
	time: "Act",
	range: "S:10-ft rad",
	components: "V",
	duration: "Instantaneous",
	save: "Con",
	description: "I regain 4d6 HP; 10-ft rad all save or 4d8 Necro. dmg; save half",
	descriptionFull: [
		"You conjure a whirl of battering bone and gore around yourself. You regain 4d6 Hit Points, and each creature in a 10-foot Emanation originating from you makes a Constitution saving throw. A target takes 4d8 Necrotic damage on a failed save or half as much damage on a successful one.",
	],
};

SpellsList["throw glaive"] = {
	name: "Throw Glaive",
	classes: [],
	source: ["WoW", 21],
	level: 1,
	school: "Evoc",
	time: "Act",
	range: "60 ft",
	components: "V,S",
	duration: "Instantaneous",
	description: "Spell atk 1d8 Slash. +1d8+1d8/SL Fire dmg, ricochets to another in 30 ft",
	descriptionFull: [
		"You create a demonic warglaive and hurl it at a creature or object in range. Make a ranged spell attack against the target. On a hit, the target takes 1d8 Slashing damage plus 1d8 Fire damage, and the glaive ricochets to a different target of your choice within 30 feet of the target. Make new attack and damage rolls against the new target.",
		UsingHigherLvl + "The Fire damage increases by 1d8 for each spell slot level above 1. The glaive ricochets a maximum number of times equal to the level of the slot expended; a creature can be targeted only once by each casting of this spell.",
	],
};

SpellsList["consume soul"] = {
	name: "Consume Soul",
	classes: [],
	source: ["WoW", 19],
	level: 1,
	school: "Necro",
	time: "Act",
	range: "60 ft",
	components: "V",
	duration: "Instantaneous",
	save: "Con",
	description: "1 crea save or 4d4+1d4/SL Force dmg; I gain Temp HP = half dmg; save half",
	descriptionFull: [
		"You drain the essence from a creature within range, which makes a Constitution saving throw. On a failed save, it takes 4d4 Force damage, and you gain Temporary Hit Points equal to half the Force damage dealt. On a successful save, it takes half as much damage only.",
		UsingHigherLvl + "The damage increases by 1d4 for each spell slot level above 1.",
	],
};

SpellsList["fel rush"] = {
	name: "Fel Rush",
	classes: [],
	source: ["WoW", 20],
	level: 1,
	school: "Trans",
	time: "Act",
	range: "Self",
	components: "V",
	duration: "Instantaneous",
	save: "Dex",
	description: "Speed +30 ft, no OA this turn; crea I pass within 5 ft save or 2d6+1d6/SL Fire dmg",
	descriptionFull: [
		"Fiery fel magic surrounds you and grants you explosive speed. Until the end of your turn, your Speed increases by 30 feet, and your movement doesn't provoke Opportunity Attacks.",
		"When you move within 5 feet of a creature or an object that isn't being worn or carried, it makes a Dexterity saving throw, taking 2d6 Fire damage on a failed save or half as much damage on a successful one. A creature or object can take this damage only once per turn.",
		UsingHigherLvl + "The damage increases by 1d6 for each spell slot level above 1.",
	],
};

SpellsList["infernal strike"] = {
	name: "Infernal Strike",
	classes: [],
	source: ["WoW", 20],
	level: 1,
	school: "Evoc",
	time: "Act",
	range: "S:10-ft rad",
	components: "V",
	duration: "Instantaneous",
	save: "Dex",
	description: "Jump 30 ft no OA; 10-ft rad save or 2d6+1d6/SL Fire dmg \x26 Disadv. vs. others 1 rnd; half",
	descriptionFull: [
		"You jump through the air without provoking Opportunity Attacks and land in an unoccupied space within 30 feet. Each creature in a 10-foot Emanation originating from you makes a Dexterity saving throw. On a failed save, a creature takes 2d6 Fire damage and has Disadvantage on attack rolls against creatures other than you until the start of your next turn. On a successful save, it takes half as much damage only.",
		UsingHigherLvl + "The damage increases by 1d6 for each spell slot level above 1.",
	],
};

SpellsList["sigil of flame"] = {
	name: "Sigil of Flame",
	classes: [],
	source: ["WoW", 21],
	level: 2,
	school: "Evoc",
	time: "Act",
	range: "90 ft",
	components: "V",
	duration: "Instantaneous",
	save: "Con",
	description: "1 crea save or 2d8+1d8/SL Fire dmg, save half; then radiates heat in 10 ft (1d8+1d8/SL)",
	descriptionFull: [
		"You inscribe a sigil in the air that then appears on a creature you can see within range. The target makes a Constitution saving throw, taking 2d8 Fire damage on a failed save or half as much damage on a successful one. Whether or not the target fails its saving throw, it radiates heat in a 10-foot Emanation originating from itself until the end of its next turn. At the start of the target's next turn, the target and each creature in the Emanation must succeed on a Constitution saving throw or take 1d8 Fire damage.",
		UsingHigherLvl + "The damage (both initial and later) increases by 1d8 for each spell slot level above 2.",
	],
};

SpellsList["eye beam"] = {
	name: "Eye Beam",
	classes: [],
	source: ["WoW", 20],
	level: 2,
	school: "Evoc",
	time: "Act",
	range: "S:15-ft cone",
	components: "V",
	duration: "Conc, 1 min",
	save: "Dex",
	description: "15-ft cone save or 3d6+1d6/SL Force dmg; repeat as Magic action; save half",
	descriptionFull: [
		"You concentrate your magic into your eyes. When you cast the spell, and as a Magic action on your subsequent turns for the duration, you can unleash a burst of fel magic. Each creature in a 15-foot Cone makes a Dexterity saving throw, taking 3d6 Force damage on a failed save or half as much damage on a successful one.",
		UsingHigherLvl + "The damage increases by 1d6 for each spell slot level above 1.",
	],
};

SpellsList["fiery brand"] = {
	name: "Fiery Brand",
	classes: [],
	source: ["WoW", 20],
	level: 2,
	school: "Evoc",
	time: "Act",
	range: "30 ft",
	components: "V",
	duration: "1 min",
	save: "Wis",
	description: "1 crea save or 3d10 Fire dmg \x26 cursed; I have Resistance to its dmg; save half",
	descriptionFull: [
		"You magically place a fiery demonic symbol on a creature within range, which makes a Wisdom saving throw. On a failed save, the creature takes 3d10 Fire damage and is cursed. While it remains cursed, you have Resistance to all damage it deals. On a successful save, it takes half as much damage only.",
		"A cursed creature repeats the save at the end of each of its turns, ending the spell on a success.",
	],
};

SpellsList["metamorphosis"] = {
	name: "Metamorphosis",
	classes: [],
	source: ["WoW", 20],
	level: 3,
	school: "Trans",
	time: "Bns",
	range: "Self",
	components: "V,S,M",
	compMaterial: "One soul fragment, which the spell consumes",
	duration: "1 min",
	description: "Gain 1: Devourer (Force dmg dice 1-2 count as 3), Havoc (melee hit +1d6 Fire), Vengeance (AC+2, +5 HP)",
	descriptionFull: [
		"Uttering an incantation, you draw on fel or Void magic to transform yourself, taking on demonic features. You gain one of the following benefits of your choice until the spell ends:",
		" \u2022 ***Devourer***. When you roll damage for a spell, weapon, or feature that deals Force damage, you can treat any 1 or 2 on a damage die as a 3.",
		" \u2022 ***Havoc***. Whenever you hit a creature with an attack roll using a Melee weapon, the target takes an extra 1d6 Fire damage.",
		" \u2022 ***Vengeance***. You have a +2 bonus to AC, and your Hit Point maximum and your current Hit Points increase by 5 for the spell's duration.",
	],
};

SpellsList["soul reap"] = {
	name: "Soul Reap",
	classes: [],
	source: ["WoW", 21],
	level: 3,
	school: "Necro",
	time: "Act",
	range: "60 ft",
	components: "V,S",
	duration: "Instantaneous",
	description: "Spell atk 6d6+1d6/SL Force dmg, ignores \xbd \x26 \xbe cover; each 6 adds a d6 (max spell mod)",
	descriptionFull: [
		"You cut a hole in the fabric of reality, sending a bolt of cosmic matter toward a creature in range. Make a ranged spell attack against the target, which gains no benefit from Half Cover or Three-Quarters Cover. On a hit, you deal 6d6 Force damage. If you roll a 6 on a d6 for this spell, you can roll another d6 and add it to the damage. When you cast this spell, the maximum number of these d6s you can add to the spell's damage equals your spellcasting ability modifier.",
		UsingHigherLvl + "The damage increases by 1d6 for each spell slot level above 3.",
	],
};

SpellsList["demon spikes"] = {
	name: "Demon Spikes",
	classes: [],
	source: ["WoW", 19],
	level: 3,
	school: "Trans",
	time: "Bns",
	range: "Self",
	components: "V",
	duration: "1 min",
	description: "AC +2; crea within 5 ft that hits me with melee atk takes 10 Piercing dmg",
	descriptionFull: [
		"You surge with fel power and sprout hard, jagged spikes. You gain a +2 bonus to AC for the duration, and when a creature within 5 feet of you hits you with a melee attack roll, it takes 10 Piercing damage.",
	],
};

SpellsList["chaos nova"] = {
	name: "Chaos Nova",
	classes: [],
	source: ["WoW", 19],
	level: 4,
	school: "Evoc",
	time: "Act",
	range: "S:20-ft rad",
	components: "V",
	duration: "Instantaneous",
	save: "Wis",
	description: "20-ft rad any 2d6 Force dmg \x26 save or Stunned until end of my next turn",
	descriptionFull: [
		"Chaos energy bursts out in a 20-foot Emanation originating from you. Each creature of your choice in the Emanation takes 2d6 Force damage and must succeed on a Wisdom saving throw or have the Stunned condition until the end of your next turn.",
	],
};

SpellsList["collapsing star"] = {
	name: "Collapsing Star",
	classes: [],
	source: ["WoW", 19],
	level: 4,
	school: "Evoc",
	time: "Act",
	range: "60 ft",
	components: "V",
	duration: "Instantaneous",
	save: "Con",
	description: "20-ft rad any save or 4d12 Force dmg; save half",
	descriptionFull: [
		"You channel Void energy into a cataclysmic blast that fills a 20-foot-radius Sphere centered on a point you can see within range. Each creature of your choice within the Sphere makes a Constitution saving throw, taking 4d12 Force damage on a failed save or half as much damage on a successful one.",
	],
};

SpellsList["sigil of chains"] = {
	name: "Sigil of Chains",
	classes: [],
	source: ["WoW", 20],
	level: 5,
	school: "Conj",
	time: "Act",
	range: "90 ft",
	components: "V",
	duration: "1 rnd",
	save: "Dex",
	description: "20-ft rad all save or 5d6 Force dmg, pulled 10 ft, Restrained 1 rnd; save half \x26 Speed -10 ft",
	descriptionFull: [
		"A sigil appears at a point on the ground you can see within range, then erupts in a 20-foot-radius Sphere. Each creature in the Sphere makes a Dexterity saving throw. On a failed save, a creature takes 5d6 Force damage, is pulled up to 10 feet straight toward the sigil, and has the Restrained condition until the end of your next turn. On a successful save, the creature takes half as much damage, and its Speed is reduced by 10 feet until the end of your next turn.",
	],
};

SpellsList["ebon might"] = {
	name: "Ebon Might",
	classes: [],
	source: ["WoW", 32],
	level: 1,
	school: "Trans",
	time: "Act",
	range: "S:10-ft rad",
	components: "V,S",
	duration: "Instantaneous",
	description: "10-ft rad any empowered 1 rnd: their atk hits deal +1d4 Force dmg",
	descriptionFull: [
		"As you invoke the black dragonflight, draconic might erupts from you. Each creature of your choice in a 10-foot Emanation originating from you is empowered until the end of your next turn. While a creature is empowered, when it hits a target with an attack roll, the attack deals an extra 1d4 Force damage.",
	],
};

SpellsList["eruption"] = {
	name: "Eruption",
	classes: [],
	source: ["WoW", 32],
	level: 2,
	school: "Evoc",
	time: "Act",
	range: "60 ft",
	components: "V,S",
	duration: "Instantaneous",
	save: "Dex",
	description: "20-ft rad all save or 3d8+1d8/SL Fire dmg; save half; ground is Difficult Terrain 1 rnd",
	descriptionFull: [
		"The ground in a 20-foot-radius Sphere centered on a point within range erupts with flames. Each creature in the Sphere makes a Dexterity saving throw, taking 3d8 Fire damage on a failed save or half as much damage on a successful one.",
		"The cracks turn the ground in the Sphere into Difficult Terrain until the end of your next turn, at which point they close.",
		UsingHigherLvl + "The damage increases by 1d8 for each spell slot level above 2.",
	],
};

SpellsList["azure strike"] = {
	name: "Azure Strike",
	classes: [],
	source: ["WoW", 31],
	level: 1,
	school: "Evoc",
	time: "Act",
	range: "60 ft",
	components: "V,S",
	duration: "1 rnd",
	description: "2 targets within 30 ft of each other: spell atk 2d6+1d6/SL Force dmg \x26 Speed -10 ft 1 rnd",
	descriptionFull: [
		"You fire rays of arcane and frigid energy at up to two targets within range that are within 30 feet of each other. Make a ranged spell attack for each target. On a hit, the target takes 2d6 Force damage, and its Speed is reduced by 10 feet until the end of its next turn.",
		UsingHigherLvl + "The damage increases by 1d6 for each spell slot level above 1.",
	],
};

SpellsList["dream breath"] = {
	name: "Dream Breath",
	classes: [],
	source: ["WoW", 31],
	level: 2,
	school: "Abjur",
	time: "Act",
	range: "S:15-ft cone",
	components: "V,S",
	duration: "Instantaneous",
	description: "15-ft cone any heal 2d6+2d6/SL HP",
	descriptionFull: [
		"You exhale verdant healing magic. Each creature of your choice in a 15-foot Cone regains 2d6 Hit Points.",
		UsingHigherLvl + "The healing increases by 2d6 for each spell slot level above 2.",
	],
};

SpellsList["living flame"] = {
	name: "Living Flame",
	classes: [],
	source: ["WoW", 32],
	level: 1,
	school: "Evoc",
	time: "Act",
	range: "60 ft",
	components: "V",
	duration: "Instantaneous",
	description: "1 crea: heal 2d6 HP or spell atk 2d8 Fire dmg; +1 target per 2 SL above 1st",
	descriptionFull: [
		"Flickering flames hurtle toward a creature you choose within range. Choose one of these options:",
		" \u2022 ***Healing Flames***. The target regains 2d6 Hit Points.",
		" \u2022 ***Searing Flames***. Make a ranged attack roll against the target. On a hit, the target takes 2d8 Fire damage.",
		UsingHigherLvl + "For every two spell slot levels above 1, you can choose an additional target (two targets with a level 3 or 4 slot, three targets with a level 5 or 6 slot, four targets with a level 7 or 8 slot, and five targets with a level 9 slot). You choose the flames' effect separately for each target.",
	],
};

SpellsList["blistering scales"] = {
	name: "Blistering Scales",
	classes: [],
	source: ["WoW", 31],
	level: 3,
	school: "Trans",
	time: "Bns",
	range: "30 ft",
	components: "V,S,M",
	compMaterial: "A scale of a Dragon",
	duration: "Conc, 1 min",
	description: "1 willing crea: +1 AC \x26 5 explosive scales; melee hit on it explodes one for 1d8 Fire dmg",
	descriptionFull: [
		"Choose a willing creature you can see within range. Five explosive scales form on the target, granting it a +1 bonus to AC for the duration. If a creature hits the target with a melee attack roll before the spell ends, a scale explodes, and the attacking creature takes 1d8 Fire damage. The spell ends early if the target has no explosive scales.",
		UsingHigherLvl + "The number of explosive scales that form on the target increases by one for each spell slot level above 3.",
	],
};

SpellsList["emerald blossom"] = {
	name: "Emerald Blossom",
	classes: [],
	source: ["WoW", 32],
	level: 3,
	school: "Conj",
	time: "Bns",
	range: "60 ft",
	components: "V,S",
	duration: "Conc, 1 min",
	description: "Bulb heals allies in 10 ft 5 HP at end of my turns; ends after 20+5/SL HP",
	descriptionFull: [
		"You conjure a spectral bulb that sprouts from the ground in an unoccupied space that you can see within range. The bulb lasts for the duration.",
		"The bulb emits healing magic in a 10-foot Emanation at the end of each of your turns. Allies of your choice in the Emanation regain 5 Hit Points. The bulb vanishes when it restores a total of 20 Hit Points.",
		UsingHigherLvl + "The total Hit Points the bulb can restore increases by 5 for each spell slot level above 3.",
	],
};

SpellsList["upheaval"] = {
	name: "Upheaval",
	classes: [],
	source: ["WoW", 33],
	level: 4,
	school: "Evoc",
	time: "Act",
	range: "90 ft",
	components: "V,S",
	duration: "Instantaneous",
	save: "Dex",
	description: "20-ft rad, 10-ft tall cylinder save or 1d12+1d12/SL Bludg. +3d8 Fire dmg \x26 pushed up; half",
	descriptionFull: [
		"Fiery stones erupt, filling a 20-foot-radius, 10-foot tall Cylinder originating from a point on the ground you can see within range. Each creature in the Cylinder makes a Dexterity saving throw. On a failed save, a creature takes 1d12 Bludgeoning damage plus 3d8 Fire damage and is pushed vertically to the top of the cylinder, at which point the creature falls. On a successful save, a creature takes half as much damage only.",
		"Smoldering stones turn the ground in the Cylinder into Difficult Terrain until the end of your next turn.",
		UsingHigherLvl + "The Bludgeoning damage increases by 1d12 for each spell slot level above 4.",
	],
};

SpellsList["emberstorm"] = {
	name: "Emberstorm",
	classes: [],
	source: ["WoW", 32],
	level: 4,
	school: "Evoc",
	time: "Act",
	range: "60 ft",
	components: "V,S",
	duration: "Instantaneous",
	save: "Con",
	description: "20-ft rad all save or 6d8+1d8/SL Fire dmg; save half; in area starts burning 1d8",
	descriptionFull: [
		"White-hot embers fill a 20-foot-radius Sphere centered on a point you choose within range. Each creature in the Sphere makes a Constitution saving throw, taking 6d8 Fire damage on a failed save or half as much damage on a successful one.",
		"Creatures and flammable objects in the Sphere that aren't being worn or carried start burning, taking 1d8 Fire damage at the start of each of their turns instead of the normal burning damage.",
		UsingHigherLvl + "The damage increases by 1d8 for each spell slot level above 4.",
	],
};

SpellsList["time dilation"] = {
	name: "Time Dilation",
	classes: [],
	source: ["WoW", 33],
	level: 4,
	school: "Abjur",
	time: "React",
	timeFull: "Reaction, which you take in response to you or a creature you can see within 60 feet of you taking damage",
	range: "60 ft",
	components: "V,S",
	duration: "Instantaneous",
	description: "Target reduces dmg by 4d8, then loses 1d8 HP at end of its turns until 4d8 lost",
	descriptionFull: [
		"The target reduces the damage taken by 4d8. At the end of each of the target's turns, the target loses 1d8 Hit Points until it has lost a total of 4d8 Hit Points (roll these 4d8 separately from the damage reduction).",
	],
};

SpellsList["breath of eons"] = {
	name: "Breath of Eons",
	classes: [],
	source: ["WoW", 31],
	level: 4,
	school: "Abjur",
	time: "Act",
	range: "Self",
	components: "V,S",
	duration: "Conc, 1 min",
	description: "Fly 60 ft, hover, no OA; crea I move within 5 ft cursed: next dmg +1d10 Force",
	descriptionFull: [
		"You draw on the magic of the bronze dragonflight. For the duration, you gain the following benefits.",
		" \u2022 ***Temporal Wounds***. When you move within 5 feet of a creature, you can curse it until the start of your next turn. While a creature is cursed, the next time it takes damage, it takes an extra 1d10 Force damage, and the curse ends. A creature can be cursed this way only once per turn.",
		" \u2022 ***Wings***. You sprout spectral wings from your back if you don't already have wings. You have a Fly Speed of 60 feet and can hover. In addition, your movement doesn't provoke Opportunity Attacks.",
	],
};

SpellsList["shattering star"] = {
	name: "Shattering Star",
	classes: [],
	source: ["WoW", 33],
	level: 5,
	school: "Evoc",
	time: "Act",
	range: "90 ft",
	components: "V,S",
	duration: "Instantaneous",
	description: "Spell atk 10d8+1d8/SL Force dmg \x26 target AC -2 until my next turn",
	descriptionFull: [
		"You exhale a bolt of concentrated power at a creature within range. Make a ranged spell attack against the target. On a hit, the target takes 10d8 Force damage, and it takes a -2 penalty to AC until the start of your next turn as clinging frost makes the target's exterior brittle.",
		UsingHigherLvl + "The damage increases by 1d8 for each spell slot level above 5.",
	],
};

SpellsList["dream flight"] = {
	name: "Dream Flight",
	classes: [],
	source: ["WoW", 31],
	level: 5,
	school: "Abjur",
	time: "Act",
	range: "Self",
	components: "V,S",
	duration: "Conc, 1 min",
	description: "Fly 60 ft, hover, no OA; crea I move within 5 ft heal 5d4 HP (once/turn)",
	descriptionFull: [
		"You draw on the magic of the green dragonflight. For the duration, you gain the following benefits.",
		" \u2022 ***Healing Presence***. When you move within 5 feet of a creature, you can restore 5d4 Hit Points to that creature. A creature can regain these Hit Points only once per turn.",
		" \u2022 ***Wings***. You sprout spectral wings from your back if you don't already have wings. You have a Fly Speed of 60 feet and can hover. In addition, your movement doesn't provoke Opportunity Attacks.",
	],
};

// Druid spells
SpellsList["wrath"] = {
	name: "Wrath",
	classes: ["druid"],
	source: ["WoW", 27],
	level: 0,
	school: "Evoc",
	time: "Act",
	range: "60 ft",
	components: "V,S",
	duration: "Instantaneous",
	description: "Spell attack for 1d8 Lightning dmg; Speed -10 ft until end of my next turn; +1d8 at CL 5, 11, and 17",
	descriptionCantripDie: "Spell attack for `CD`d8 Lightning dmg; Speed -10 ft until end of my next turn",
	descriptionFull: [
		"You hurl a ball of energy at a target within range. Make a ranged spell attack against the target. On a hit, the target takes 1d8 Lightning damage, and its Speed is reduced by 10 feet until the end of your next turn.",
		CantripUpgrade + "The damage increases by 1d8 when you reach levels 5 (2d8), 11 (3d8), and 17 (4d8).",
	],
};

SpellsList["moonfire"] = {
	name: "Moonfire",
	classes: ["druid"],
	source: ["WoW", 26],
	level: 1,
	school: "Evoc",
	time: "Bns",
	range: "60 ft",
	components: "V",
	duration: "1 rnd",
	save: "Dex",
	description: "1 crea save or 2d8+1d8/SL Radiant dmg, sheds Dim Light, no Invisible; +1d8+1d8/SL next EoT; save half",
	descriptionFull: [
		"A beam of lunar light burns a creature you can see within range. The target makes a Dexterity saving throw. On a failed save, it takes 2d8 Radiant damage, sheds Dim Light in a 10-foot radius, and can't benefit from the Invisible condition until the end of its next turn. At the end of its next turn, it takes an extra 1d8 Radiant damage, and the spell ends. On a successful save, it takes half the initial damage only.",
		UsingHigherLvl + "Both the initial and the later damage increase by 1d8 for each spell slot level above 1.",
	],
};

SpellsList["feral prowl"] = {
	name: "Feral Prowl",
	classes: ["druid"],
	source: ["WoW", 26],
	level: 2,
	school: "Trans",
	time: "Bns",
	range: "Self",
	components: "V",
	duration: "1 min",
	description: "Shape-shift as if using Wild Shape without a use; Invisible until spell ends (early after atk, dmg, spell, revert)",
	descriptionFull: [
		"You shape-shift as if you had used Wild Shape, but you don't expend a use of your Wild Shape. You have the Invisible condition until the spell ends. The spell ends early immediately after you make an attack roll, deal damage, cast a spell, or revert to your natural form.",
	],
};

SpellsList["roar of ursoc"] = {
	name: "Roar of Ursoc",
	classes: ["druid"],
	source: ["WoW", 26],
	level: 2,
	school: "Trans",
	time: "Bns",
	range: "Self",
	components: "V",
	duration: "1 rnd",
	description: "Shape-shift as if Wild Shape without expending a use; crea starting turn within 5 ft Disadv. vs. others 1 rnd",
	descriptionFull: [
		"You shape-shift as if you had used Wild Shape, but you don't expend a use of your Wild Shape. Until the start of your next turn, any creature that starts its turn within 5 feet of you has Disadvantage on attack rolls against any creature other than you.",
	],
};

SpellsList["regrowth"] = {
	name: "Regrowth",
	classes: ["druid"],
	source: ["WoW", 26],
	level: 3,
	school: "Abjur",
	time: "Act",
	range: "120 ft",
	components: "V",
	duration: "Conc, 1 min",
	description: "1 crea heals 3d8 HP, then 1d8 HP at start of my turns; ends after 24 HP total",
	descriptionFull: [
		"One creature you can see within range regains 3d8 Hit Points. For the duration, the target regains 1d8 Hit Points at the start of each of your turns. The spell ends early once it restores at least 24 Hit Points.",
	],
};

SpellsList["starfall"] = {
	name: "Starfall",
	classes: ["druid"],
	source: ["WoW", 26],
	level: 4,
	school: "Evoc",
	time: "Act",
	range: "120 ft",
	components: "V,S,M",
	compMaterial: "A pinch of stardust",
	duration: "1 rnd",
	save: "Dex",
	description: "30-ft rad, 40-ft cyl all save or 7d8 Radiant dmg; save half; entering/ending turn there = Radiant dmg = Druid lvl",
	descriptionFull: [
		"You call down falling stars on creatures in a 30-foot-radius, 40-foot-high Cylinder within range. Each creature in the Cylinder makes a Dexterity saving throw, taking 7d8 Radiant damage on a failed save or half as much damage on a successful one.",
		"Until the start of your next turn, a creature that enters the Cylinder for the first time on a turn or ends its turn there takes Radiant damage equal to your Druid level. A creature takes this damage only once per turn.",
	],
};

SpellsList["innervate"] = {
	name: "Innervate",
	classes: ["druid"],
	source: ["WoW", 26],
	level: 5,
	school: "Trans",
	time: "Act",
	range: "30 ft",
	components: "V",
	duration: "Instantaneous",
	description: "1 crea gains a lvl 4 spell slot (gone when used or after Long Rest); I regain 1 use of Wild Shape",
	descriptionFull: [
		"A creature of your choice within range gains a level 4 spell slot. The spell slot vanishes after it is expended or the target finishes a Long Rest. It can use this spell slot to cast any spell it has prepared.",
		"In addition, you regain one expended use of Wild Shape.",
	],
};

SpellsList["tranquility"] = {
	name: "Tranquility",
	classes: ["druid"],
	source: ["WoW", 27],
	level: 6,
	school: "Abjur",
	time: "Act",
	range: "S:60-ft rad",
	components: "V",
	duration: "Conc, 1 min",
	description: "60-ft rad any Resist Bludg./Pierc./Slash.; Bns: each ally heals 2d8+1d8/SL+spell mod HP",
	descriptionFull: [
		"Nature's power flows around you in a 60-foot Emanation for the duration. Creatures of your choice in the Emanation have Resistance to Bludgeoning, Piercing, and Slashing damage. As a Bonus Action, you can cause each ally in the Emanation to regain Hit Points equal to 2d8 plus your spellcasting ability modifier.",
		UsingHigherLvl + "Creatures regain 1d8 additional Hit Points for each spell slot level above 6.",
	],
};

SpellsList["tree of life"] = {
	name: "Tree of Life",
	classes: ["druid"],
	source: ["WoW", 27],
	level: 8,
	school: "Trans",
	time: "Bns",
	range: "Self",
	components: "V,S",
	duration: "1 min",
	description: "Treant form: Large, Speed 10 ft, +2 AC, 10 Temp HP, immune Paralyzed/Restrained, +1 spell DC \x26 Adv. on spell atks",
	descriptionFull: [
		"You shape-shift into a Tree of Life form that resembles a treant. In this form, you gain the following benefits.",
		" \u2022 ***Tree Form***. You become Large. Your Speed becomes 10 feet and can't be reduced, and Difficult Terrain doesn't cost you extra movement.",
		" \u2022 ***Bark Skin***. You gain a +2 bonus to Armor Class and 10 Temporary Hit Points.",
		" \u2022 ***Condition Immunity***. You gain Immunity to the Paralyzed and Restrained conditions. You can't be shape-shifted against your will.",
		" \u2022 ***Source of Life***. When a spell you cast with a spell slot restores Hit Points to a creature, that creature regains an additional 1d8 Hit Points on the turn you cast the spell.",
		" \u2022 ***Spells Enhanced***. The spell save DC of your Druid spells increases by 1, and you have Advantage on the attack rolls of Druid spells you cast.",
	],
};

// Evoker spells
SpellsList["rescue"] = {
	name: "Rescue",
	classes: [],
	source: ["WoW", 33],
	level: 5,
	school: "Conj",
	time: "Bns",
	range: "120 ft",
	components: "V",
	duration: "Instantaneous",
	description: "I teleport to a space I can see; 1 willing crea within 60 ft of where I left teleports to within 5 ft of me",
	descriptionFull: [
		"You teleport to an unoccupied space you can see within range. One willing creature within 60 feet of the space you left also teleports to an unoccupied space within 5 feet of your destination space.",
	],
};

SpellsList["azure sweep"] = {
	name: "Azure Sweep",
	classes: [],
	source: ["WoW", 31],
	level: 6,
	school: "Evoc",
	time: "Act",
	range: "S:30-ft rad",
	components: "V,S",
	duration: "1 min",
	save: "Con",
	description: "30-ft rad any save or 7d8 Force dmg \x26 Speed -20 ft for 1 min; save half",
	descriptionFull: [
		"Pure magic sweeps out from you in a 30-foot Emanation. Creatures of your choice in the Emanation make a Constitution saving throw. On a failed save, a creature takes 7d8 Force damage, and its Speed is reduced by 20 feet for the duration. On a successful save, the target takes half as much damage only.",
	],
};

SpellsList["lay waste"] = {
	name: "Lay Waste",
	classes: [],
	source: ["WoW", 32],
	level: 7,
	school: "Evoc",
	time: "Act",
	range: "S:120-ft line",
	components: "V",
	duration: "Instantaneous",
	save: "Dex",
	description: "120-ft line all save or 12d6 Fire dmg; save half; then I teleport within 5 ft of line's end",
	descriptionFull: [
		"You draw a deep breath and spew molten cinders along a 120-foot-long, 10-foot-wide Line originating from you in a direction you choose. Each creature in the Line makes a Dexterity saving throw, taking 12d6 Fire damage on a failed save or half as much damage on a successful one.",
		"You then teleport to an unoccupied space within 5 feet of the end of the Line.",
	],
};

// Hunter spells
SpellsList["freezing trap"] = {
	name: "Freezing Trap",
	classes: [],
	source: ["WoW", 37],
	level: 1,
	school: "Evoc",
	time: "Act",
	range: "60 ft",
	components: "S",
	duration: "Conc, 1 min",
	save: "Con",
	description: "Invisible ground trap; first crea within 5 ft save or Restrained 1 min (any dmg ends); spell ends",
	descriptionFull: [
		"An Invisible, intangible trap appears on the ground at a point you choose within range. The first time a creature comes within 5 feet of the trap, the trap explodes in a burst of frost, the spell ends, and the triggering creature makes a Constitution saving throw. On a failed save, the target has the Restrained condition for 1 minute. If the creature takes any damage, the Restrained condition from the trap ends.",
	],
};

SpellsList["serpent sting"] = {
	name: "Serpent Sting",
	classes: [],
	source: ["WoW", 37],
	level: 3,
	school: "Necro",
	time: "Bns",
	timeFull: "Bonus Action, which you take immediately after hitting a creature with a weapon",
	range: "Self",
	components: "V",
	duration: "1 min",
	save: "Con",
	description: "Cast on weapon hit; +4d6 Poison dmg \x26 Poisoned; Con save end of its turns: fail 2d6 Poison dmg, success ends",
	descriptionFull: [
		"The target takes an extra 4d6 Poison damage from the attack, and the target has the Poisoned condition until the spell ends. At the end of each of its turns, the Poisoned target makes a Constitution saving throw. On a failed save, the creature takes 2d6 Poison damage. On a successful save, the spell ends.",
	],
};

SpellsList["explosive trap"] = {
	name: "Explosive Trap",
	classes: [],
	source: ["WoW", 37],
	level: 5,
	school: "Evoc",
	time: "Act",
	range: "60 ft",
	components: "S",
	duration: "Conc, 1 min",
	save: "Dex",
	description: "Invisible ground trap; first crea within 5 ft: 20-ft rad all save or 8d6 Fire dmg \x26 Huge or smaller pushed 20 ft",
	descriptionFull: [
		"An Invisible, intangible trap appears on the ground at a point you choose within range. The first time a creature comes within 5 feet of the trap, the trap explodes in a fiery burst that fills a 20-foot-radius Sphere centered on the trap. The spell ends, and each creature within the Sphere makes a Dexterity saving throw. On a failed save, a creature takes 8d6 Fire damage and, if it is Huge or smaller, is pushed 20 feet straight away from the trap's location.",
	],
};

// Mage spells
SpellsList["frost nova"] = {
	name: "Frost Nova",
	classes: [],
	source: ["WoW", 41],
	level: 1,
	school: "Evoc",
	time: "Act",
	range: "S:15-ft rad",
	components: "V,S",
	duration: "Instantaneous",
	save: "Con",
	description: "15-ft rad any save or 2d6+1d6/SL Cold dmg \x26 Restrained until end of my next turn; save half",
	descriptionFull: [
		"You unleash a burst of frost, creating a 15-foot Emanation originating from you. Each creature of your choice in the Emanation makes a Constitution saving throw. On a failed save, a creature takes 2d6 Cold damage, and it has the Restrained condition until the end of your next turn. On a successful save, the creature takes half as much damage only.",
		UsingHigherLvl + "The damage increases by 1d6 for each spell slot level above 1.",
	],
};

SpellsList["flurry"] = {
	name: "Flurry",
	classes: [],
	source: ["WoW", 41],
	level: 3,
	school: "Evoc",
	time: "Act",
	range: "120 ft",
	components: "V,S",
	duration: "Instantaneous",
	description: "3 shards, each spell atk for 3d6 Cold dmg; crit Restrains until end of my next turn; +1 shard/SL",
	descriptionFull: [
		"You hurl three shards of ice at one target within range or at several. Make a ranged spell attack for each shard. On a hit, the target takes 3d6 Cold damage. On a Critical Hit, the target has the Restrained condition until the end of your next turn.",
		UsingHigherLvl + "You create one additional shard of ice for each spell slot level above 3.",
	],
};

SpellsList["combustion"] = {
	name: "Combustion",
	classes: [],
	source: ["WoW", 41],
	level: 6,
	school: "Evoc",
	time: "Act",
	range: "S:5-ft rad",
	components: "V,S",
	duration: "1 min",
	description: "Immune Fire, Adv. on spell atks, Bright Light 20 ft; 5-ft rad any 3d8 Fire dmg at end of my turns",
	descriptionFull: [
		"You engulf yourself in flames for the duration, shedding Bright Light in a 20-foot radius and Dim Light for an additional 10 feet. These flames grant you Immunity to Fire damage. While they last, you have Advantage on spell attack rolls.",
		"At the end of each of your turns, each creature of your choice in a 5-foot Emanation originating from you takes 3d8 Fire damage.",
	],
};

SpellsList["mass polymorph"] = {
	name: "Mass Polymorph",
	classes: [],
	source: ["WoW", 41],
	level: 9,
	school: "Trans",
	time: "Act",
	range: "S:30-ft rad",
	components: "V,S,M",
	compMaterial: "A caterpillar cocoon",
	duration: "Conc, 1 h",
	save: "Wis",
	description: "30-ft rad any save or become a CR 0 Beast (Goat), Temp HP = its HP; can't speak/cast",
	descriptionFull: [
		"You attempt to transform any number of creatures in a 30-foot Emanation originating from you into identical Beasts. Each creature in the Emanation must succeed on a Wisdom saving throw or shapeshift into a Beast form for the duration. A creature that isn't a Beast, a Giant, a Humanoid, or a Monstrosity automatically succeeds on its saving throw.",
		"The new form can be any Beast you choose that has a Challenge Rating of 0 (Goat is recommended). Each target's game statistics are replaced by the stat block of the chosen Beast, but the target retains its alignment, personality, creature type, Hit Points, and Hit Point Dice.",
		"Each target gains a number of Temporary Hit Points equal to the Hit Points of the Beast form. The spell ends early on the target if it has no Temporary Hit Points left.",
		"The targets are limited in the actions they can perform by the anatomy of their new form, and they can't speak or cast spells.",
		"Each target's gear melds into the new form. The creature can't use or otherwise benefit from any of that equipment.",
	],
};

// Paladin spells
SpellsList["consecration"] = {
	name: "Consecration",
	classes: ["paladin"],
	source: ["WoW", 49],
	level: 2,
	school: "Evoc",
	time: "Act",
	range: "S:15-ft rad",
	components: "V",
	duration: "Conc, 1 min",
	description: "15-ft rad any starting turn there take 1d8 Radiant dmg; Difficult Terrain for Fiends/Undead",
	descriptionFull: [
		"You consecrate the area in a 15-foot Emanation originating from you. Creatures of your choice that start their turn in the Emanation take 1d8 Radiant damage. The Emanation is Difficult Terrain for Fiends and Undead.",
	],
};

SpellsList["guided prayer"] = {
	name: "Guided Prayer",
	classes: ["paladin"],
	source: ["WoW", 49],
	level: 3,
	school: "Evoc",
	time: "React",
	timeFull: "Reaction, which you take when you become Bloodied or take damage while you are Bloodied",
	range: "Self",
	components: "V",
	duration: "Instantaneous",
	description: "I heal 8d4+spell mod HP; Adv. on next atk before end of my next turn",
	descriptionFull: [
		"You regain Hit Points equal to 8d4 plus your spellcasting ability modifier. You have Advantage on the next attack roll you make before the end of your next turn.",
	],
};

SpellsList["divine shield"] = {
	name: "Divine Shield",
	classes: ["paladin"],
	source: ["WoW", 49],
	level: 4,
	school: "Abjur",
	time: "React",
	timeFull: "Reaction, which you take when you take damage",
	range: "Self",
	components: "V",
	duration: "1 rnd",
	description: "Immune all dmg until start of my next turn; Speed can't be reduced \x26 no effect can move me",
	descriptionFull: [
		"You have Immunity to all damage until the start of your next turn, including the triggering damage. For the duration, your Speed can't be reduced, any current reductions to your Speed are suspended, and no effect can move you against your will.",
	],
};

// Priest spells
SpellsList["holy nova"] = {
	name: "Holy Nova",
	classes: [],
	source: ["WoW", 54],
	level: 4,
	school: "Evoc",
	time: "Act",
	range: "S:30-ft rad",
	components: "V",
	duration: "Instantaneous",
	save: "Con",
	description: "30-ft rad any save or 5d6+1d6/SL Radiant dmg; save half; others in area heal 3d6+1d6/SL HP",
	descriptionFull: [
		"An explosion of holy light surrounds you in a 30-foot Emanation, harming your enemies and healing your allies. Each creature of your choice in the Emanation makes a Constitution saving throw, taking 5d6 Radiant damage on a failed save or half as much damage on a successful one. Each other creature in the Emanation regains 3d6 Hit Points.",
		UsingHigherLvl + "The damage and healing each increase by 1d6 for each spell slot level above 4.",
	],
};

SpellsList["apotheosis"] = {
	name: "Apotheosis",
	classes: [],
	source: ["WoW", 54],
	level: 9,
	school: "Trans",
	time: "Bns",
	range: "Self",
	components: "V",
	duration: "1 min",
	description: "Fly 90 ft; Resist Bludg./Pierc./Radiant/Slash.; healing/Radiant slot spells count as 2 SL higher (max 9)",
	descriptionFull: [
		"You transform into a spectral, angelic form that grants you the following benefits.",
		" \u2022 ***Angelic Wings***. You have a Fly Speed of 90 feet.",
		" \u2022 ***Spectral Form***. You have Resistance to Bludgeoning, Piercing, Radiant, and Slashing damage.",
		" \u2022 ***Holy Empowerment***. Whenever you cast a spell using a spell slot that restores Hit Points to one or more creatures or deals Radiant damage, determine the spell's effects as if you had used a spell slot 2 levels higher than the spell slot you used to cast it (maximum of level 9).",
	],
};

// Warlock spells
SpellsList["curse of agony"] = {
	name: "Curse of Agony",
	classes: ["warlock"],
	source: ["WoW", 64],
	level: 2,
	school: "Necro",
	time: "Act",
	range: "30 ft",
	components: "V,S",
	duration: "1 min",
	save: "Con",
	description: "1 crea saves now \x26 end of its turns, takes 1d4 Psychic dmg each; fail = die grows (max d12); success ends",
	descriptionFull: [
		"You curse one creature within range with excruciating pain. The target makes a Constitution saving throw; the spell's damage starts at 1d4 Psychic damage. On a failed save, the target takes the spell's damage, and the spell's damage die increases: from 1d4 to 1d6, 1d6 to 1d8, 1d8 to 1d10, or 1d10 to 1d12 (the maximum). On a successful save, the target takes the spell's damage, and the effect ends. The target repeats the save at the end of each of its turns.",
	],
};

SpellsList["hand of gul'dan"] = {
	name: "Hand of Gul'dan",
	classes: ["warlock"],
	source: ["WoW", 65],
	level: 3,
	school: "Conj",
	time: "Act",
	range: "120 ft",
	components: "V,S",
	duration: "Conc, 1 min",
	save: "Dex",
	description: "20-ft rad all save or 2d8 Fire+2d8 Necro. dmg; save half; entering/ending turn there save vs 1d8+1d8 (once/turn)",
	descriptionFull: [
		"A demonic meteor hurtles from you to a point you choose within range and then erupts. Each creature in a 20-foot-radius Sphere centered on that point makes a Dexterity saving throw, taking 2d8 Fire damage plus 2d8 Necrotic damage on a failed save or half as much damage on a successful one.",
		"Demonic spirits resembling fel imps flit about the Sphere for the duration. A creature that enters the Sphere or ends its turn there makes a Dexterity saving throw, taking 1d8 Fire damage plus 1d8 Necrotic damage on a failed save or half as much damage on a successful one. A creature can be affected by this spell only once per turn.",
	],
};

SpellsList["rain of fire"] = {
	name: "Rain of Fire",
	classes: ["warlock"],
	source: ["WoW", 65],
	level: 3,
	school: "Evoc",
	time: "Act",
	range: "120 ft",
	components: "V,S",
	duration: "Conc, 1 min",
	save: "Dex",
	description: "20-ft rad, 40-ft cyl all save or 3d8+1d8/SL Fire dmg; save half; Magic action moves it 60 ft; Adv. \x26 +1d6 Necro.",
	descriptionFull: [
		"Hellfire rains down in a 20-foot-radius, 40-foot-high Cylinder centered on a point within range. Until the spell ends, you can take a Magic action on later turns to move the Cylinder up to 60 feet.",
		"When the Cylinder appears, each creature in it makes a Dexterity saving throw, taking 3d8 Fire damage on a failed save or half as much damage on a successful one. A creature also makes this save when the spell's area moves into its space and when it enters the spell's area or ends its turn there. A creature makes this save only once per turn.",
		"You have Advantage on spell attack rolls against a creature in the Cylinder, and you deal an extra 1d6 Necrotic damage to the target if you hit.",
		UsingHigherLvl + "The Fire damage increases by 1d8 for each spell slot level above 3.",
	],
};

function reskinWoWClass(fromKey, toKey, name, regex, spellListClass) {
	var c = newObj(ClassList[fromKey]);
	c.name = name;
	c.regExpSearch = regex;
	c.source = [["WoW", 0]];
	c.subclasses[0] = name + " Subclass"; // keep c.subclasses[1]: the base class's subclasses stay selectable
	if (c.features.subclassfeature3) {
		c.features.subclassfeature3.name = name + " Subclass";
		c.features.subclassfeature3.source = [["WoW", 0]];
		c.features.subclassfeature3.description = desc('Choose a ' + name + ' Subclass using the "Class" button/bookmark or type its name into the "Class" field.');
	}
	if (spellListClass) c.spellcastingList = { "class": spellListClass };
	ClassList[toKey] = c;
	return c;
}

// WoW subclasses, added before the classes are copied so the copies inherit them
AddSubClass("barbarian", "path of the elements", {
	regExpSearch: /^(?=.*path)(?=.*elements).*$/i,
	subname: "Path of the Elements",
	subnameShort: "Elements",
	source: [["WoW", 0]],
	features: {
		"subclassfeature3": {
			name: "Raging Elements", source: [["WoW", 0]], minlevel: 3,
			description: desc([
				"Whenever I activate my Rage, I can use one Raging Elements option as part of that Bonus Action. While Raging, I can use a Bonus Action to use that option again or a different one.",
				"If an option requires a save, the DC is 8 + my Con mod + PB.",
				" \u2022 ***Icefury***. I roll d8s equal to my Rage Damage bonus and hurl ice at one creature within 30 ft. I make a melee (if within 5 ft) or ranged spell attack using Con. On a hit, it takes Cold damage equal to the roll, and the next Fire damage it takes before the end of my next turn is +1d10.",
				" \u2022 ***Lava Burst***. I roll d4s equal to my Rage Damage bonus and hurl lava at one creature I can see within 30 ft. It makes a Dex save, taking Fire damage equal to the roll (half on a success), and the next Lightning damage it takes before the end of my next turn is +1d8.",
				" \u2022 ***Lightning Bolt***. I roll d6s equal to my Rage Damage bonus and hurl lightning at one creature I can see within 30 ft. It makes a Dex save, taking Lightning damage equal to the roll (half on a success), and the next Cold damage it takes before the end of my next turn is +1d6.",
			]),
			action: [["bonus action", " (while Raging)"]],
		},
		"subclassfeature6": {
			name: "Echo of the Elements", source: [["WoW", 0]], minlevel: 6,
			description: desc("I know Elementalism. I can expend a use of Rage to cast Daylight, Water Walk, or Wind Wall. Wisdom is my spellcasting ability for these."),
			additional: "1 Rage per spell",
			spellcastingAbility: 5,
			spellcastingBonus: [{
				name: "Echo of the Elements",
				spells: ["elementalism"],
				selection: ["elementalism"],
			}, {
				name: "Echo of the Elements (Rage)",
				spells: ["daylight", "water walk", "wind wall"],
				selection: ["daylight", "water walk", "wind wall"],
				times: 3,
				firstCol: "checkbox",
				spellcastingAbility: 5,
			}],
		},
		"subclassfeature10": {
			name: "Primordial Bond", source: [["WoW", 0]], minlevel: 10,
			description: desc("While Raging, I have Resistance to Cold, Fire, and Lightning damage."),
			dmgres: [["Cold", "Cold (in Rage)"], ["Fire", "Fire (in Rage)"], ["Lightning", "Lightn. (in Rage)"]],
		},
		"subclassfeature14": {
			name: "Elemental Overload", source: [["WoW", 0]], minlevel: 14,
			description: desc([
				"My Raging Elements options gain the following effects.",
				" \u2022 ***Icefury***. Hit or miss, the target subtracts half the number rolled (round down) from the next damage roll it makes before the start of my next turn.",
				" \u2022 ***Lava Burst***. Failed save or not, the target and each enemy within 10 ft of it start Burning.",
				" \u2022 ***Lightning Bolt***. Failed save or not, a bolt leaps from the target to another target of my choice I can see within 30 ft of the first. The new target makes a Dex save, taking Lightning damage equal to the roll (half on a success).",
			]),
		},
	},
});

AddSubClass("barbarian", "path of the spiritual guardian", {
	regExpSearch: /^(?=.*spiritual)(?=.*guardian).*$/i,
	subname: "Path of the Spiritual Guardian",
	subnameShort: "Spiritual Guardian",
	source: [["WoW", 0]],
	features: {
		"subclassfeature3": {
			name: "Spiritual Protectors", source: [["WoW", 0]], minlevel: 3,
			description: desc([
				"While Raging, when I hit a creature with a weapon or an Unarmed Strike, the spirits cause one of the following effects of my choice.",
				" \u2022 ***Distract***. Until the start of my next turn, it has Disadvantage on attacks against targets other than me or another Barbarian with this feature.",
				" \u2022 ***Hinder***. I can use the Slow mastery with that weapon in addition to the mastery I'm already using.",
				" \u2022 ***Strike***. It takes an extra 1d4 Cold, Fire, or Lightning damage (my choice).",
			]),
		},
		"subclassfeature6": {
			name: "Spirit Shield", source: [["WoW", 0]], minlevel: 6,
			description: desc("While Raging, when another creature I can see within 30 ft takes damage, I can use my Reaction to reduce it by d6s equal to my Rage Damage bonus."),
			action: [["reaction", ""]],
		},
		"subclassfeature10": {
			name: "Consult the Spirits", source: [["WoW", 0]], minlevel: 10,
			description: desc("I can cast Augury or Clairvoyance without a spell slot or Material components. Clairvoyance invisibly summons a guardian spirit instead of a sensor. Wisdom is my spellcasting ability for these. After either cast, I can't use this feature again until I finish a Short or Long Rest."),
			usages: 1,
			recovery: "Short Rest",
			spellcastingAbility: 5,
			spellcastingBonus: [{
				name: "Consult the Spirits",
				spells: ["augury", "clairvoyance"],
				selection: ["augury", "clairvoyance"],
				times: 2,
				firstCol: "checkbox",
				spellcastingAbility: 5,
			}],
		},
		"subclassfeature14": {
			name: "Spirits' Fury", source: [["WoW", 0]], minlevel: 14,
			description: desc("When I make a Melee weapon attack roll as part of the Attack action and roll 18-20 on the d20, I can make one more attack roll with the same weapon as part of that action. Once I use this, I can't again until the start of my next turn."),
		},
	},
});

AddSubClass("cleric", "discipline domain", {
	regExpSearch: /^(?=.*discipline)(?=.*domain).*$/i,
	subname: "Discipline Domain",
	subnameShort: "Discipline",
	source: [["WoW", 0]],
	features: {
		"subclassfeature3": {
			name: "Holy Bolt", source: [["WoW", 0]], minlevel: 3,
			description: desc("As a Bonus Action, I present my Holy Symbol and expend 1 Channel Divinity to make a ranged spell attack against one creature within 60 ft. On a hit, it takes 2d10 + my Wis mod Radiant damage, and a creature I can see within 60 ft regains 1d10 + my Wis mod HP."),
			additional: "1 Channel Divinity",
			action: [["bonus action", " (Channel Divinity)"]],
			spellcastingExtra: ["arcane vigor", "guiding bolt", "magic weapon", "shield of faith", "prayer of mending", "protection from energy", "guardian of faith", "stoneskin", "circle of power", "destructive wave"],
		},
		"subclassfeature3.1": {
			name: "Atonement", source: [["WoW", 0]], minlevel: 3,
			description: desc([
				"When a level 1+ spell I cast restores HP to one or more creatures, each of them is blessed until the end of my next turn.",
				"Whenever I cast a damaging spell using a spell slot, each blessed creature regains additional HP equal to the slot's level.",
			]),
		},
		"subclassfeature6": {
			name: "Luminous Barrier", source: [["WoW", 0]], minlevel: 6,
			description: desc("As a Bonus Action, I can expend 1 Channel Divinity to ward each creature blessed by my Atonement. Each gains Temp HP equal to my Cleric level + my Wis mod, and has Resistance to all damage while it has them."),
			additional: "1 Channel Divinity",
			action: [["bonus action", " (Channel Divinity)"]],
		},
		"subclassfeature17": {
			name: "Ultimate Penitence", source: [["WoW", 0]], minlevel: 17,
			description: desc([
				"My Holy Bolt grows more powerful, as detailed below.",
				" \u2022 ***Ascending Step***. Before I make the attack roll, I can teleport to an unoccupied space I can see within 30 ft.",
				" \u2022 ***Ascending Volley***. I can expend a spell slot as part of the Bonus Action to hurl additional bolts equal to the slot's level, at one creature or several, with a separate attack roll for each.",
			]),
		},
	},
});

AddSubClass("cleric", "shadow domain", {
	regExpSearch: /^(?=.*shadow)(?=.*domain).*$/i,
	subname: "Shadow Domain",
	subnameShort: "Shadow",
	source: [["WoW", 0]],
	features: {
		"subclassfeature3": {
			name: "Shadowform", source: [["WoW", 0]], minlevel: 3,
			description: desc([
				"As a Bonus Action, I can expend 1 Channel Divinity to take on a shadowy form for 1 minute. It ends early if I dismiss it (no action), have the Incapacitated condition, or deal Radiant damage with a spell.",
				" \u2022 ***Shadow Stealth***. In Dim Light or Darkness, I can take the Hide action as a Bonus Action.",
				" \u2022 ***Void Empowerment***. When I cast a spell using a spell slot that deals Psychic or Necrotic damage, I can add 1d6 to one damage roll of the spell.",
			]),
			additional: "1 Channel Divinity",
			action: [["bonus action", " (Channel Divinity)"]],
			spellcastingExtra: ["crown of madness", "dissonant whispers", "mind spike", "shadow word: pain", "summon undead", "vampiric touch", "evard's black tentacles", "psychic horror", "dominate person", "void eruption"],
		},
		"subclassfeature3.1": {
			name: "Devouring Plague", source: [["WoW", 0]], minlevel: 3,
			description: desc("When a creature I can see within 30 ft fails a saving throw, I can deal it 1d10 Necrotic damage and regain that many HP."),
			usages: "Wisdom modifier per ", recovery: "Long Rest",
			usagescalc: 'event.value = Math.max(1, What("Wis Mod"));',
		},
		"subclassfeature6": {
			name: "Dispersion", source: [["WoW", 0]], minlevel: 6,
			description: desc([
				"When I'm hit by an attack roll, I can use my Reaction to disperse into shadowy energy until the end of my next turn. I have Resistance to all damage (including the triggering attack), I can't take actions, Bonus Actions, or Reactions, and I have a 40-ft Fly Speed.",
				"When it ends, I can spend up to half my total Hit Point Dice to regain HP as if I had finished a Short Rest. Once I use this, I can't again until I finish a Short or Long Rest.",
			]),
			usages: 1, recovery: "Short Rest",
			action: [["reaction", ""]],
		},
		"subclassfeature17": {
			name: "Vampiric Embrace", source: [["WoW", 0]], minlevel: 17,
			description: desc("While my Shadowform is active, whenever I roll its 1d6 extra damage, one creature of my choice within 30 ft regains that many HP."),
		},
	},
});

AddSubClass("paladin", "oath of the holy", {
	regExpSearch: /^(?=.*oath)(?=.*holy).*$/i,
	subname: "Oath of the Holy",
	subnameShort: "Holy",
	source: [["WoW", 0]],
	features: {
		"subclassfeature3": {
			name: "Beacon of Light", source: [["WoW", 0]], minlevel: 3,
			description: desc("As a Magic action, I can expend 1 Channel Divinity to wrap an ally within 60 ft in holy energy for 1 minute. Anytime I heal a creature other than that ally with a spell or Lay On Hands, the ally also regains half as many HP."),
			additional: "1 Channel Divinity",
			action: [["action", " (Channel Divinity)"]],
			spellcastingExtra: ["cure wounds", "healing word", "lesser restoration", "prayer of healing", "dispel magic", "mass healing word", "aura of life", "death ward", "greater restoration", "mass cure wounds"],
			toNotesPage: [
				{
					name: "Tenets of the Oath of the Holy", // needs to start with "Tenets of the Oath"
					origin: "",
					note: [
						"This oath unites Paladins who nurture life and use the power of the Light for healing and support, with the following tenets.",
						" \u2022 Live your life in service to others of goodwill.",
						" \u2022 Do all in your power to ease the suffering of the innocent.",
						" \u2022 Let the Light shine through you to banish the darkness.",
					],
				},
				GenericClassFeatures["paladin's oath"].toNotesPage,
			],
		},
		"subclassfeature7": {
			name: "Lightbringer's Aura", source: [["WoW", 0]], minlevel: 7,
			description: desc("Whenever my spell or Lay On Hands restores HP to a Bloodied creature within my Aura of Protection, it regains an extra 1d6 HP."),
		},
		"subclassfeature15": {
			name: "Infusion of Light", source: [["WoW", 0]], minlevel: 15,
			description: desc("Whenever I cast a spell that deals Radiant damage, my Lay On Hands pool regains HP equal to the Radiant damage rolled, up to five times my Paladin level."),
		},
		"subclassfeature20": {
			name: "Holy Deliverance", source: [["WoW", 0]], minlevel: 20,
			description: desc([
				"As a Bonus Action, I can imbue my Aura of Protection with holy power for 10 minutes or until I end it (no action).",
				" \u2022 ***Healing Power***. Whenever an ally starts its turn Bloodied and in the aura, it regains HP equal to my Cha mod + PB.",
				" \u2022 ***Sunlight***. The aura is filled with Bright Light that is sunlight.",
				"Once I use this, I can't again until I finish a Long Rest. I can also restore it by expending a level 5+ spell slot (no action).",
			]),
			usages: 1, recovery: "Long Rest", altResource: "SS 5+",
			action: [["bonus action", ""]],
		},
	},
});

AddSubClass("monk", "warrior of mystic brews", {
	regExpSearch: /^(?=.*mystic)(?=.*brews?).*$/i,
	subname: "Warrior of Mystic Brews",
	subnameShort: "Mystic Brews",
	source: [["WoW", 0]],
	features: {
		"subclassfeature3": {
			name: "Bonus Proficiencies", source: [["WoW", 0]], minlevel: 3,
			description: desc("I gain proficiency with Performance, or another Monk skill of my choice if I already have it, and with Brewer's Supplies."),
			skills: ["Performance"],
			skillstxt: "Performance, or one Monk skill of my choice if already proficient",
			toolProfs: ["Brewer's Supplies"],
		},
		"subclassfeature3.1": {
			name: "Drunken Technique", source: [["WoW", 0]], minlevel: 3,
			description: desc("Whenever I expend a Focus Point on Patient Defense, my Speed increases by 10 ft until the end of the current turn, and I can make one Unarmed Strike immediately after that Bonus Action."),
		},
		"subclassfeature6": {
			name: "Mystic Brew", source: [["WoW", 0]], minlevel: 6,
			description: desc([
				"When I finish a Short or Long Rest while holding Brewer's Supplies, I can magically produce one magical beverage: Cinnamon Dragon, Heavenly Spirit, or Refreshing Dip. It vanishes if any remains when I next finish a Short or Long Rest.",
				"Only I can benefit. I must drink the full pint, which takes 1 minute, and the benefits last 1 hour or until I drink another magical beverage.",
				" \u2022 ***Cinnamon Dragon***. As a Magic action, I exhale toxic flames in a 30-ft Cone. Each creature makes a Dex save (DC 8 + my Wis mod + PB), taking Fire damage equal to four rolls of my Martial Arts die and being Poisoned until the end of its next turn, or half damage only on a success.",
				" \u2022 ***Heavenly Spirit***. I gain Resistance to two of Cold, Necrotic, Psychic, or Radiant (my choice).",
				" \u2022 ***Refreshing Dip***. I have a pool of dice of my Martial Arts die type, with a maximum equal to my Wis mod + half my Monk level (round down). Whenever I regain HP, I can expend and roll one to regain that much additional HP.",
				" \u2022 ***Enhancing a Magical Beverage***. When I create one, I can expend 1 Focus Point to extend its benefits to 8 hours.",
			]),
			additional: "1 Focus Point: 8 hours",
		},
		"subclassfeature6.1": {
			name: "Tipsy Sway", source: [["WoW", 0]], minlevel: 6,
			description: desc([
				"I can move in sudden, swaying ways, gaining the following benefits.",
				" \u2022 ***Leap to Your Feet***. While Prone, I can stand up by spending 5 ft of movement.",
				" \u2022 ***Redirect Attack***. When an enemy misses me with a melee attack roll, I can use my Reaction and spend 1 Focus Point to cause that attack to hit one creature of my choice, other than the attacker, that I can see within 5 ft of me.",
			]),
			action: [["reaction", " (Redirect Attack)"]],
		},
		"subclassfeature11": {
			name: "Wizened Brewer", source: [["WoW", 0]], minlevel: 11,
			description: desc([
				"I learn more complex flavors. These beverages are added to my Mystic Brew options.",
				" \u2022 ***Blue Lightning***. Whenever I take a Reaction that isn't an Opportunity Attack or casting a spell, I can make one Unarmed Strike as part of it.",
				" \u2022 ***Drunkard's Luck***. I gain Heroic Inspiration if I don't have it. I can also give it to myself when I make an ability check or saving throw without it.",
				" \u2022 ***Stumbling Monk***. When I take a Bonus Action other than Patient Defense, I can use Patient Defense immediately after it.",
			]),
		},
		"subclassfeature17": {
			name: "Intoxicated Frenzy", source: [["WoW", 0]], minlevel: 17,
			description: desc("Immediately after I use Patient Defense, I can move up to my Speed. Whenever I enter a space within 5 ft of a creature during this movement, I can make an Unarmed Strike against it. When I hit with one of these strikes, it must succeed on a Dex save or be Prone. A creature can be targeted by one of these strikes only once per turn."),
		},
		"subclassfeature17.1": {
			name: "Master Brewer", source: [["WoW", 0]], minlevel: 17,
			description: desc("When I create a magical beverage with Mystic Brew, I can choose two different options and produce one beverage that provides the effects of both for the duration."),
		},
	},
});

AddSubClass("rogue", "swashbuckler", {
	regExpSearch: /^(?=.*swashbuckler).*$/i,
	subname: "Swashbuckler",
	subnameShort: "Swashbuckler",
	source: [["WoW", 0]],
	features: {
		"subclassfeature3": {
			name: "Fancy Footwork", source: [["WoW", 0]], minlevel: 3,
			description: desc("If I make a melee attack roll against a creature during my turn, that creature can't make Opportunity Attacks against me for the rest of that turn."),
		},
		"subclassfeature3.1": {
			name: "Rakish Audacity", source: [["WoW", 0]], minlevel: 3,
			description: desc([
				"When I roll Initiative, I can add my Cha mod to the roll.",
				"I don't need Advantage on the attack roll to use Sneak Attack against a creature if I'm within 5 ft of it, no other creatures are within 5 ft of me, and I don't have Disadvantage. All the other Sneak Attack rules still apply.",
			]),
			addMod: [{ type: "skill", field: "Init", mod: "Cha", text: "I can add my Charisma modifier to initiative rolls." }],
		},
		"subclassfeature9": {
			name: "Panache", source: [["WoW", 0]], minlevel: 9,
			description: desc([
				"I have practiced new ways to use my Sneak Attack. These effects are now among my Cunning Strike options.",
				" \u2022 ***Goad (Cost: 1d6)***. The target must succeed on a Wis save, or until the end of its next turn it has Disadvantage on attacks against targets other than me and can't make Opportunity Attacks against them.",
				" \u2022 ***Awe (Cost: 3d6)***. Each creature of my choice within 30 ft must succeed on a Wis save or be Charmed until the end of my next turn.",
			]),
		},
		"subclassfeature13": {
			name: "Dashing Strikes", source: [["WoW", 0]], minlevel: 13,
			description: desc([
				"I have practiced new ways to use my Sneak Attack. These effects are now among my Cunning Strike options.",
				" \u2022 ***Invigorate (Cost: 2d6)***. A creature I can see within 30 ft can, until the end of its next turn, roll 1d6 and add it to each attack roll or saving throw it makes.",
				" \u2022 ***Parrying Stance (Cost: 2d6)***. I roll 1d6 and gain a bonus to my AC equal to the roll until the start of my next turn.",
			]),
		},
		"subclassfeature17": {
			name: "Master Duelist", source: [["WoW", 0]], minlevel: 17,
			description: desc("Immediately after I use Sneak Attack, I can make another attack against the same target, provided I'm within 5 ft of it and no other creatures are within 5 ft of me."),
		},
	},
});

reskinWoWClass("paladin", "deathknight", "Death Knight", /^(?=.*death)(?=.*knight).*$/i, "paladin");
reskinWoWClass("ranger", "demonhunter", "Demon Hunter", /^(?=.*demon)(?=.*hunter).*$/i, "ranger");
reskinWoWClass("sorcerer", "evoker", "Evoker", /^(?=.*evoker)(?!.*(wizard|mage|evocation)).*$/i, "sorcerer");
reskinWoWClass("ranger", "hunter", "Hunter", /^(?=.*hunter)(?!.*(demon|ranger|monster)).*$/i, "ranger");
reskinWoWClass("wizard", "mage", "Mage", /^(?=.*\bmage\b)(?!.*wizard).*$/i, "wizard");
reskinWoWClass("cleric", "priest", "Priest", /^(?=.*priest)(?!.*cleric).*$/i, "cleric");
reskinWoWClass("barbarian", "shaman", "Shaman", /^(?=.*shaman)(?!.*(barbarian|druid)).*$/i);
reskinWoWClass("fighter", "warrior", "Warrior", /^(?=.*warrior)(?!.*(barbarian|fighter|monk|paladin|ranger|warrior of|feral|tribal|spiritual|exalted|sacred|holy|divine|nature|natural)).*$/i);

// Class spell lists: each WoW class keeps its base class list and adds the spells from its book section
ClassList.deathknight.spellcastingList.extraspells = ["chains of ice", "death grip", "rune strike", "scourge strike", "vampiric blood", "death and decay", "frostscythe", "leeching strike", "remorseless winter", "bonestorm"];
ClassList.demonhunter.spellcastingList.extraspells = ["consume soul", "fel rush", "infernal strike", "throw glaive", "eye beam", "fiery brand", "sigil of flame", "demon spikes", "metamorphosis", "soul reap", "chaos nova", "collapsing star", "sigil of chains"];
ClassList.evoker.spellcastingList.extraspells = ["azure strike", "ebon might", "living flame", "dream breath", "eruption", "blistering scales", "emerald blossom", "breath of eons", "emberstorm", "time dilation", "upheaval", "dream flight", "rescue", "shattering star", "azure sweep", "lay waste"];
ClassList.hunter.spellcastingList.extraspells = ["freezing trap", "serpent sting", "explosive trap"];
ClassList.mage.spellcastingList.extraspells = ["frost nova", "create food and water", "flurry", "flame strike", "combustion", "heroes' feast", "mass polymorph"];
ClassList.priest.spellcastingList.extraspells = ["mind sliver", "shadow word: pain", "blur", "levitate", "haste", "prayer of mending", "summon undead", "holy nova", "psychic horror", "dominate person", "void eruption", "dominate monster", "apotheosis"];

function rekeyWoWFeature(cls, featKey, pairs) {
	var src = cls.features[featKey].toSource();
	for (var i = 0; i < pairs.length; i++) src = src.split(pairs[i][0]).join(pairs[i][1]);
	cls.features[featKey] = eval("(" + src + ")"); // keep it an expression, so a named function doesn't eval to undefined
}

// Point copied code at the new class keys
rekeyWoWFeature(ClassList.shaman, "rage", [
	["classes.known.barbarian", "classes.known.shaman"],
]);
rekeyWoWFeature(ClassList.priest, "blessed strikes", [
	["classes.known.cleric", "classes.known.priest"],
	["\\bcleric\\b", "\\bpriest\\b"],
	['spName.indexOf("cleric")', 'spName.indexOf("priest")'],
]);
rekeyWoWFeature(ClassList.hunter, "precise hunter", [
	['spName === "ranger"', 'spName === "hunter"'],
]);
rekeyWoWFeature(ClassList.hunter, "foe slayer", [
	['spName === "ranger"', 'spName === "hunter"'],
]);
rekeyWoWFeature(ClassList.demonhunter, "precise hunter", [
	['spName === "ranger"', 'spName === "demonhunter"'],
]);
rekeyWoWFeature(ClassList.demonhunter, "foe slayer", [
	['spName === "ranger"', 'spName === "demonhunter"'],
]);
rekeyWoWFeature(ClassList.mage, "spell mastery", [
	["CurrentSpells.wizard", "CurrentSpells.mage"],
	['spName !== "wizard"', 'spName !== "mage"'],
]);
rekeyWoWFeature(ClassList.mage, "signature spells", [
	["CurrentSpells.wizard", "CurrentSpells.mage"],
	['spName !== "wizard"', 'spName !== "mage"'],
]);

// Copied subclass features that read the base class key
rekeyWoWFeature(ClassSubList["barbarian-berserker"], "subclassfeature3", [
	["classes.known.barbarian", "(classes.known.barbarian || classes.known.shaman)"],
]);
rekeyWoWFeature(ClassSubList["fighter-champion"], "subclassfeature3", [
	["classes.known.fighter", "(classes.known.fighter || classes.known.warrior)"],
]);
rekeyWoWFeature(ClassSubList["sorcerer-draconic"], "subclassfeature3", [
	["classes.known.sorcerer", "(classes.known.sorcerer || classes.known.evoker)"],
]);

// WoW subclasses for the WoW classes only, added after the classes are copied
AddSubClass("deathknight", "oath of the ebon blade", {
	regExpSearch: /^(?=.*ebon)(?=.*blade).*$/i,
	subname: "Oath of the Ebon Blade",
	subnameShort: "Ebon Blade",
	source: [["WoW", 0]],
	features: {
		"subclassfeature3": {
			name: "Oath of the Ebon Blade", source: [["WoW", 0]], minlevel: 3,
			description: desc("I always have the Spells (All) column of the Oath of the Ebon Blade Spells prepared, plus the column of the rune inscribed on my weapon (see Runeforging). I also gain Runeforging and Runic Power."),
		},
		"subclassfeature3.1": {
			name: "Runeforging", source: [["WoW", 0]], minlevel: 3,
			description: ' #[Select option with "Choose Feature"]#' + desc('When I finish a Long Rest, I can inscribe a Blood, Frost, or Unholy rune on a melee weapon I am holding, or transfer it to another weapon. Whenever I gain a level, I can replace it. Choose the rune with the "Choose Feature" button above; it also sets my rune oath spells.'),
			choices: ["Blood", "Frost", "Unholy"],
			"blood": {
				name: "Blood Rune", source: [["WoW", 0]],
				description: desc("When I inscribe this rune, and whenever I finish a Long Rest while it is inscribed, I gain Temp HP equal to my Cha mod + my Death Knight level. While wielding the inscribed weapon, I also gain these Temp HP whenever I reduce an enemy to 0 HP."),
				spellcastingExtra: ["death grip", "vampiric blood", "death and decay", "spiritual weapon", "summon undead", "leeching strike", "freedom of movement", "evard's black tentacles", "circle of power", "bonestorm"],
			},
			"frost": {
				name: "Frost Rune", source: [["WoW", 0]],
				description: desc("While wielding the inscribed weapon, damage from my weapon attacks, Death Knight spells, and Death Knight features ignores Resistance to Cold damage. When I make the extra attack of the Light property and hit while wielding it, I deal an extra 1d4 Cold damage."),
				spellcastingExtra: ["death grip", "chains of ice", "death and decay", "frostscythe", "summon undead", "remorseless winter", "freedom of movement", "ice storm", "circle of power", "cone of cold"],
			},
			"unholy": {
				name: "Unholy Rune", source: [["WoW", 0]],
				description: desc("While wielding the inscribed weapon, damage from my weapon attacks, Death Knight spells, and Death Knight features ignores Resistance to Necrotic damage. If it has the Heavy property, the first creature I hit with it each turn takes extra Necrotic damage equal to my Cha mod (minimum 1)."),
				spellcastingExtra: ["death grip", "scourge strike", "death and decay", "ray of enfeeblement", "summon undead", "bestow curse", "freedom of movement", "blight", "circle of power", "contagion"],
			},
		},
		"subclassfeature3.2": {
			name: "Runic Power", source: [["WoW", 0]], minlevel: 3,
			description: desc([
				"Immediately after I cast Rune Strike, I can expend 1 Channel Divinity for an effect based on my inscribed rune.",
				" \u2022 ***Blood***. I regain HP equal to the Necrotic damage dealt with my Rune Strike.",
				" \u2022 ***Frost***. The target of my Rune Strike and each enemy in a 10-ft Emanation from it take 2d6 Cold damage.",
				" \u2022 ***Unholy***. The target of my Rune Strike is cursed until the end of my next turn; the next save it makes subtracts 1d6, then the curse ends.",
			]),
			additional: "1 Channel Divinity",
		},
		"subclassfeature7": {
			name: "Aura of Deathly Endurance", source: [["WoW", 0]], minlevel: 7,
			description: desc("I and my allies have Resistance to Cold, Necrotic, and Psychic damage while in my Aura of Protection."),
		},
		"subclassfeature15": {
			name: "Runic Mastery", source: [["WoW", 0]], minlevel: 15,
			description: desc([
				"I can invoke the power of my inscribed rune; the effect depends on the rune.",
				" \u2022 ***Blood***. When a creature hits another I can see within 10 ft of me with an attack roll, I can use my Reaction to reduce the damage the target takes by my Death Knight level; I then lose that many HP.",
				" \u2022 ***Frost***. When I take the Attack action, I can replace one attack with a 30-ft Cone of frost; each creature in it makes a Dex save vs. my spell save DC, taking 8d6 Cold damage on a failure or half on a success.",
				" \u2022 ***Unholy***. When I cast Summon Undead, it can be without Concentration (duration 1 min); the spirit gets Temp HP equal to my Death Knight level + Cha mod, and the first time each turn it hits, it deals extra Necrotic damage equal to half my Death Knight level (round up).",
			]),
			usages: 1, recovery: "Long Rest",
			action: [["reaction", " (Blood rune)"]],
		},
		"subclassfeature20": {
			name: "Aspect of the Horsemen", source: [["WoW", 0]], minlevel: 20,
			description: desc([
				"As a Bonus Action, I gain the benefits below for 10 minutes or until I end them (no action). I can restore my use by expending a level 5 spell slot (no action).",
				" \u2022 ***Generate Runic Power***. I can restore a use of Runic Mastery by expending a level 4 spell slot (no action).",
				" \u2022 ***Runeforging***. When I use Runic Power and Runic Mastery, I can choose any effect, not just the one matching my inscribed rune.",
			]),
			usages: 1, recovery: "Long Rest", altResource: "SS 5+",
			action: [["bonus action", ""]],
		},
	},
});

AddSubClass("demonhunter", "demon hunter", {
	regExpSearch: /^(?=.*demon.*demon)(?=.*hunter).*$/i, // "demon" twice: matches "Demon Hunter (Demon Hunter)" but not "Demon Hunter (Hunter)"
	subname: "Demon Hunter",
	subnameShort: "Demon Hunter",
	source: [["WoW", 0]],
	features: {
		"subclassfeature3": {
			name: "Demon Hunter Spells", source: [["WoW", 0]], minlevel: 3,
			description: ' #[Select option with "Choose Feature"]#' + desc('I always have the Spells (All) column of the Demon Hunter Spells prepared, plus one other column of my choice. Choose the column with the "Choose Feature" button above.'),
			choices: ["Devourer", "Havoc", "Vengeance"],
			"devourer": {
				name: "Devourer Spells", source: [["WoW", 0]],
				description: desc("I always have prepared: Throw Glaive, Sigil of Flame, Metamorphosis, Chaos Nova, and Destructive Wave, plus Consume Soul, Misty Step, Soul Reap, Collapsing Star, and Steel Wind Strike."),
				spellcastingExtra: ["throw glaive", "consume soul", "sigil of flame", "misty step", "metamorphosis", "soul reap", "chaos nova", "collapsing star", "destructive wave", "steel wind strike"],
			},
			"havoc": {
				name: "Havoc Spells", source: [["WoW", 0]],
				description: desc("I always have prepared: Throw Glaive, Sigil of Flame, Metamorphosis, Chaos Nova, and Destructive Wave, plus Fel Rush, Eye Beam, Blink, Fire Shield, and Conjure Volley."),
				spellcastingExtra: ["throw glaive", "fel rush", "sigil of flame", "eye beam", "metamorphosis", "blink", "chaos nova", "fire shield", "destructive wave", "conjure volley"],
			},
			"vengeance": {
				name: "Vengeance Spells", source: [["WoW", 0]],
				description: desc("I always have prepared: Throw Glaive, Sigil of Flame, Metamorphosis, Chaos Nova, and Destructive Wave, plus Infernal Strike, Fiery Brand, Demon Spikes, Banishment, and Sigil of Chains."),
				spellcastingExtra: ["throw glaive", "infernal strike", "sigil of flame", "fiery brand", "metamorphosis", "demon spikes", "chaos nova", "banishment", "destructive wave", "sigil of chains"],
			},
		},
		"subclassfeature3.1": {
			name: "Soul Fragments", source: [["WoW", 0]], minlevel: 3,
			description: desc([
				"When I finish a Long Rest, I gain soul fragments (Tiny crystals) equal to my Wis mod (min 1), +1 at Demon Hunter level 13 and +2 at 17. They last until my next Long Rest. If I move more than 30 ft from one, it teleports to my person. Soul fragment saves use my Demon Hunter spell save DC.",
				" \u2022 ***Double Jump***. I can expend one to cast Feather Fall or Jump without a spell slot.",
				" \u2022 ***Soul Cleave***. Once per turn when I take the Attack action, I can expend one and replace one attack: each creature in a 10-ft Emanation from me makes a Dex save; on a failure it takes 1d12 + my Wis mod Psychic damage, and I regain HP equal to my Wis mod.",
				" \u2022 ***Regaining***. When an enemy I can see within 30 ft of me dies, I can use my Reaction to regain one expended soul fragment.",
			]),
			usages: "Wis mod (+1 at 13, +2 at 17) per ", recovery: "Long Rest",
			limfeaname: "Soul Fragments",
			usagescalc: 'var lvl = classes.known.demonhunter ? classes.known.demonhunter.level : 0; event.value = Math.max(1, Number(What("Wis Mod"))) + (lvl >= 17 ? 2 : lvl >= 13 ? 1 : 0);',
			action: [["reaction", " (regain soul fragment)"]],
		},
		"subclassfeature3.2": {
			name: "Spectral Sight", source: [["WoW", 0]], minlevel: 3,
			description: desc("I have Blindsight with a range of 10 ft."),
			vision: [["Blindsight", 10]],
		},
		"subclassfeature7": {
			name: "Torment", source: [["WoW", 0]], minlevel: 7,
			description: desc([
				"A creature marked by my Hunter's Mark has Disadvantage on attack rolls against targets other than me.",
				"Once per turn when I hit a creature marked by my Hunter's Mark with an attack roll with a weapon or a Demon Hunter spell, I can impose one of these effects:",
				" \u2022 ***Aura of Pain***. It subtracts 1d4 from the next save it makes before the end of my next turn.",
				" \u2022 ***Chaos Strike***. It takes an extra 1d8 Fire damage.",
			]),
		},
		"subclassfeature11": {
			name: "Illidari Knowledge", source: [["WoW", 0]], minlevel: 11,
			description: desc([
				"I gain new ways to use soul fragments.",
				" \u2022 ***Disrupt***. I can expend two soul fragments to cast Counterspell in response to its trigger, using my spellcasting ability.",
				" \u2022 ***Warglaive Mastery***. As a Bonus Action, I can expend one soul fragment to cast Throw Glaive without a spell slot.",
			]),
			action: [["bonus action", " (Warglaive Mastery)"]],
		},
		"subclassfeature15": {
			name: "Soul Shatter", source: [["WoW", 0]], minlevel: 15,
			description: desc("My Soul Cleave damage increases to 2d12 + my Wis mod. When I roll Initiative and have no soul fragments, I regain one."),
		},
	},
});

// WoW Draconic Sorcery for the Evoker: the 2024 Draconic Sorcery with the Evoker Spells instead of the Draconic Spells
// It replaces the inherited Sorcerer Draconic Sorcery in the Evoker's subclass list, so the Evoker has one Draconic Sorcery
var evokerDraconic = newObj(ClassSubList["sorcerer-draconic"]);
evokerDraconic.regExpSearch = /^(?=.*evoker)(?=.*(draconic|dragon)).*$/i;
evokerDraconic.subname = "Draconic Sorcery";
evokerDraconic.subnameShort = "Draconic";
evokerDraconic.source = [["WoW", 0]];
delete evokerDraconic.fullname;
rekeyWoWFeature(evokerDraconic, "subclassfeature3", [
	["(classes.known.sorcerer || classes.known.evoker)", "classes.known.evoker"],
	["Sorcerer level", "Evoker level"],
]);
delete evokerDraconic.features.subclassfeature3.spellcastingExtra;
delete evokerDraconic.features.subclassfeature3.spellcastingExtraApplyNonconform;
evokerDraconic.features["subclassfeature3.1"] = {
	name: "Evoker Spells", source: [["WoW", 0]], minlevel: 3,
	description: ' #[Select option with "Choose Feature"]#' + desc('I always have the Spells (All) column of the Evoker Spells prepared, plus one other column of my choice. Choose the column with the "Choose Feature" button above.'),
	choices: ["Augmentation", "Devastation", "Preservation"],
	"augmentation": {
		name: "Augmentation Spells", source: [["WoW", 0]],
		description: desc("I always have prepared: Chromatic Orb, Dragon's Breath, Fly, Arcane Eye, and Summon Dragon, plus Ebon Might, Eruption, Blistering Scales, Upheaval, and Breath of Eons."),
		spellcastingExtra: ["chromatic orb", "dragon's breath", "ebon might", "eruption", "fly", "blistering scales", "arcane eye", "upheaval", "summon dragon", "breath of eons"],
		spellcastingExtraApplyNonconform: true,
	},
	"devastation": {
		name: "Devastation Spells", source: [["WoW", 0]],
		description: desc("I always have prepared: Chromatic Orb, Dragon's Breath, Fly, Arcane Eye, and Summon Dragon, plus Azure Strike, Scorching Ray, Fireball, Emberstorm, and Shattering Star."),
		spellcastingExtra: ["chromatic orb", "dragon's breath", "azure strike", "scorching ray", "fly", "fireball", "arcane eye", "emberstorm", "summon dragon", "shattering star"],
		spellcastingExtraApplyNonconform: true,
	},
	"preservation": {
		name: "Preservation Spells", source: [["WoW", 0]],
		description: desc("I always have prepared: Chromatic Orb, Dragon's Breath, Fly, Arcane Eye, and Summon Dragon, plus Dream Breath, Living Flame, Emerald Blossom, Time Dilation, and Dream Flight."),
		spellcastingExtra: ["chromatic orb", "dragon's breath", "dream breath", "living flame", "fly", "emerald blossom", "arcane eye", "time dilation", "summon dragon", "dream flight"],
		spellcastingExtraApplyNonconform: true,
	},
};
var evokerSubs = ClassList.evoker.subclasses[1];
var evokerIdx = evokerSubs.indexOf("sorcerer-draconic");
if (evokerIdx !== -1) evokerSubs.splice(evokerIdx, 1);
AddSubClass("evoker", "draconic sorcery", evokerDraconic);

// Copied subclasses whose regExpSearch needs the base class name, e.g. Oath of Devotion ("paladin") and Draconic Sorcery ("sorcerer")
// Add an alternative that matches "<WoW class> (<subclass>)", the name the sheet writes when picking a subclass
function matchWoWSubclasses(toKey) {
	var c = ClassList[toKey];
	var classPattern = c.name.replace(/ /g, ".?");
	for (var i = 0; i < c.subclasses[1].length; i++) {
		var s = ClassSubList[c.subclasses[1][i]];
		if (!s || !s.regExpSearch || s.regExpSearch.test(c.name + " (" + s.subname + ")")) continue;
		var subPattern = s.subname.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
		s.regExpSearch = new RegExp("(?:" + s.regExpSearch.source + ")|(?:^(?=.*" + classPattern + ")(?=.*" + subPattern + ").*$)", "i");
	}
}
var wowClassKeys = ["deathknight", "demonhunter", "evoker", "hunter", "mage", "priest", "shaman", "warrior"];
for (var w = 0; w < wowClassKeys.length; w++) matchWoWSubclasses(wowClassKeys[w]);

function appendWoWDescription(feat, text) {
	var add = desc(text);
	if (typeof feat.description === "string") {
		feat.description += add;
	} else {
		for (var i = 0; i < feat.description.length; i++) feat.description[i] += add;
	}
}

// Death Knight class features
var dk = ClassList.deathknight;
delete dk.features["lay on hands"];
delete dk.features["paladin's smite"];
delete dk.features["radiant strikes"];
delete dk.features["restoring touch"];

dk.features["death coil"] = {
	name: "Death Coil",
	source: [["WoW", 0]],
	minlevel: 1,
	description: desc([
		"My creature type becomes Undead.",
		"I have a pool of d8s equal to 1 + my Cha mod (minimum 1 die), which refills when I finish a Long Rest.",
		"As a Bonus Action, I can target a creature I can see within 60 ft and expend up to my Cha mod dice (minimum 1).",
		" \u2022 The target makes a Con save and takes Necrotic damage equal to the roll (half as much on a success).",
		" \u2022 If the target is Undead, I can have it regain that many HP instead.",
	]),
	usages: "d8 pool per ",
	recovery: "Long Rest",
	usagescalc: 'event.value = Math.max(1, 1 + Number(What("Cha Mod"))) + "d8";',
	action: [["bonus action", ""]],
};

dk.features["runic smite"] = {
	name: "Runic Smite",
	source: [["WoW", 0]],
	minlevel: 2,
	description: levels.map(function (n) {
		// Condense at level 20 to make room for capstone subclass feature
		return n < 20 ? desc("I always have *Rune Strike* prepared. Once per Long Rest I can cast it without" + (typePF ? " using" : "") + " a spell slot.") : " [*Rune Strike* always prepared, free cast 1/LR]";
	}),
	spellcastingBonus: [{
		name: "Runic Smite",
		spells: ["rune strike"],
		selection: ["rune strike"],
		firstCol: "oncelr+markedbox",
	}],
};

dk.features["runic strikes"] = {
	name: "Runic Strikes",
	source: [["WoW", 0]],
	minlevel: 11,
	description: desc("When I hit with a Melee weapon or Unarmed Strike attack, I deal +1d8 Necrotic damage."),
	calcChanges: {
		atkAdd: [
			function (fields, v) {
				if (!v.isDC && (v.isMeleeWeapon || v.baseWeaponName === "unarmed strike")) {
					fields.Description += (fields.Description ? "; " : "") + "+1d8 Necrotic damage";
					if (v.isThrownWeapon) fields.Description += " in melee";
				}
			},
			"When I hit a target with an attack roll using a Melee weapon or an Unarmed Strike, the target takes an extra 1d8 Necrotic damage.",
		],
	},
};

dk.features["improved death coil"] = {
	name: "Improved Death Coil",
	source: [["WoW", 0]],
	minlevel: 14,
	description: levels.map(function (n) {
		// Remove text at level 20 to make room for capstone subclass feature
		return n < 20 ? desc([
			"When Death Coil deals damage, the target takes extra Necrotic damage equal to my Cha mod (minimum 1), whether or not it fails its save.",
			"If I have an Undead regain HP with Death Coil, it regains additional HP equal to my Death Knight level.",
		]) : undefined;
	}),
};

// Faithful Steed: append the Undead steed text; at level 20 only a short note, to make room for the capstone
var fsDesc = dk.features["faithful steed"].description;
var fsText = desc([
	"When I cast *Find Steed*, the Otherworldly Steed can be Undead.",
	"An Undead steed deals Necrotic damage with its Otherworldly Slam and gains Ghostly Stride (Bonus Action; recharges after a Long Rest).",
	"Ghostly Stride: the steed and its rider can move through other creatures and objects this turn as if they were Difficult Terrain, and each takes 1d10 Force damage if it ends its turn inside an object.",
]);
for (var fsl = 0; fsl < fsDesc.length; fsl++) fsDesc[fsl] += (fsl < 19 ? fsText : " [Undead steed option, Ghostly Stride]");

// Demon Hunter class features
var dh = ClassList.demonhunter;
dh.features["_spellcasting"].description = dh.features["_spellcasting"].description.split("I can use a Druidic Focus").join("I can use an Arcane Focus (not a Druidic Focus)");
appendWoWDescription(dh.features["expertise"], "Languages come from the WoW Chapter 2 language tables; Eredun and Nathrezim are recommended.");
appendWoWDescription(dh.features["fighting style"], "As a Demon Hunter, I can also choose the Void Warrior feat (WoW).");
delete dh.features["feral senses"];

dh.features["improved spectral sight"] = {
	name: "Improved Spectral Sight",
	source: [["WoW", 0]],
	minlevel: 18,
	description: desc("I have Truesight with a range of 30 ft."),
	vision: [["Truesight", 30]],
};

// Shaman class features
var sh = ClassList.shaman;
delete sh.features["primal knowledge"];

sh.features["totems"] = {
	name: "Totems",
	source: [["WoW", 0]],
	minlevel: 3,
	description: desc([
		"As a Bonus Action, I can plant a totem in an unoccupied space I can see within 10 ft of myself.",
		"A totem is a Small object with AC 10 and 1 HP. It lasts 1 minute, until it drops to 0 HP, or until I use this feature again.",
		"At the end of each of my turns, it pulses in a 30-ft Emanation. Each effect lasts until the end of my next turn:",
		" \u2022 Earthbind: each enemy's Speed is reduced by 10 ft.",
		" \u2022 Primal Knowledge: each ally can make Acrobatics, Intimidation, Perception, Stealth and Survival checks as Strength checks.",
		" \u2022 Tremor: each ally is Immune to the Charmed and Frightened conditions, or those conditions are suppressed.",
		" \u2022 Wind Rush: each ally's Speed is increased by 10 ft.",
		"After I plant the Primal Knowledge totem, I can't plant it again until I finish a Long Rest, unless I expend one use of Rage to restore it (no action required).",
	]),
	usages: 1,
	recovery: "Long Rest",
	limfeaname: "Primal Knowledge Totem",
	action: [["bonus action", ""]],
};

/*	-WHAT IS THIS?-
	This file adds optional material to "MPMB's Character Record Sheet" found at https://flapkan.com/mpmb/charsheets
	Import this file using the "Add Extra Materials" bookmark.

	-KEEP IN MIND-
	It is recommended to enter the code in a fresh sheet before adding any other information (i.e. before making your character with it).
	Import "pub_20240917_PHB.js" (the 2024 Player's Handbook add-on) before this file: the Warrior Maneuvers and Hunter Pets attach to its Battle Master and Beast Master subclasses, and the WoW classes only inherit its subclasses if it is imported first.
*/

/*	-INFORMATION-
	Subject:	Class
	Effect:		This script adds the World of Warcraft versions of the Death Knight, Demon Hunter, Evoker, Hunter, Mage, Priest, Shaman and Warrior classes, the World of Warcraft class features for the Death Knight, Demon Hunter and Shaman, the Path of the Elements, Path of the Spiritual Guardian, Discipline Domain, Shadow Domain, Oath of the Holy, Oath of the Ebon Blade, Demon Hunter, Warrior of Mystic Brews, Swashbuckler and Draconic Sorcery (Evoker, with the Evoker Spells) subclasses, the Rune Strike, Prayer of Mending, Psychic Horror, Shadow Word: Pain and Void Eruption spells, the 35 spells those three WoW subclasses grant, fixes for copied subclasses whose regex or class-level checks needed the WoW class names, the subclass-menu fullname fix for the standard classes, the 27 remaining Chapter 1 spells, and the WoW class spell lists: Death Knight, Demon Hunter, Evoker, Hunter, Mage and Priest via extraspells, and Druid, Paladin and Warlock via the spells' classes, the 8 WoW feats (Clearcasting, Fingers of Frost, Hot Streak, Elusive Brawler, Enveloping Mist, Fists of Fury, Stagger and Sway, and the Void Warrior Fighting Style for the Demon Hunter) and the 7 WoW Warlock Eldritch Invocations (including Pact of the Legion), the 12 World of Warcraft species (Dracthyr, Draenei with its 4 Eredar lineages, Earthen, Forsaken, Goblin, Haranir, Mechagnome, Pandaren, Tauren with its 3 lineages, Troll with its 3 lineages, Vulpera and Worgen), the Blood Elf, Night Elf, Nightborne and Void Elf lineages for the Elf, the Arcane Pulse and Entropic Embrace spells, and the Human origin feats Arathi Heritage, Child of the Sea and Will to Survive. It also adds, on top of "pub_20240917_PHB.js" (which must be imported first), the 5 WoW Warrior Maneuvers for the Battle Master of the Fighter and Warrior, a Hunter copy of the Beast Master with the WoW Pet Families for its Primal Companion, and the subclass-menu fullname fix for the PHB'24 subclasses the WoW classes inherit. The WoW Dwarf, Gnome (Rock Gnome), Human and Orc are the built-in species. The 33 WoW languages are listed in a comment, because the sheet has no language list to add them to.
	Code by:	Rocky
	Date:		2026-11-19 (sheet v24)
*/

var iFileName = "WoW.js";

RequiredSheetVersion("24.1.0");

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

// The same fix for the PHB'24 subclasses the WoW classes inherit: a bare fullname shared by two classes resolves to the WoW copy
// Guarded, because these only exist when "pub_20240917_PHB.js" is imported first
["barbarian-zealot", "fighter-battle master", "fighter-eldritch knight", "fighter-psi warrior", "ranger-beast master", "ranger-fey wanderer", "ranger-gloom stalker", "sorcerer-aberrant", "sorcerer-clockwork", "sorcerer-wild magic", "wizard-abjurer", "wizard-diviner", "wizard-illusionist"].forEach(function (k) {
	if (ClassSubList[k]) delete ClassSubList[k].fullname;
});

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
		c.features.subclassfeature3.description = desc('Choose a ' + name + ' Subclass with the "Class" button or typing it in the "Class" field.');
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
				"Whenever I activate my Rage, I can use 1 Raging Elements option as part of that Bonus Action. While Raging, I can use a Bonus Action to use that option again or a different one (options on 3rd page).",
				"If an option requires a save, the DC is 8 + my Con mod + PB.",
			]),
			action: [["bonus action", " (while Raging)"]],
			autoSelectExtrachoices: [
				{ extrachoice: "icefury" },
				{ extrachoice: "lava burst" },
				{ extrachoice: "lightning bolt" },
			],
			"icefury": {
				name: "Icefury", extraname: "Path of the Elements 3", source: [["WoW", 0]],
				description: desc("I roll d8s equal to my Rage Damage bonus and hurl ice at one creature within 30 ft. I make a melee (if within 5 ft) or ranged spell attack using Con. On a hit, it takes Cold damage equal to the roll, and the next Fire damage it takes before the end of my next turn is +1d10."),
			},
			"lava burst": {
				name: "Lava Burst", extraname: "Path of the Elements 3", source: [["WoW", 0]],
				description: desc("I roll d4s equal to my Rage Damage bonus and hurl lava at one creature I can see within 30 ft. It makes a Dex save, taking Fire damage equal to the roll (half on a success), and the next Lightning damage it takes before the end of my next turn is +1d8."),
			},
			"lightning bolt": {
				name: "Lightning Bolt", extraname: "Path of the Elements 3", source: [["WoW", 0]],
				description: desc("I roll d6s equal to my Rage Damage bonus and hurl lightning at one creature I can see within 30 ft. It makes a Dex save, taking Lightning damage equal to the roll (half on a success), and the next Cold damage it takes before the end of my next turn is +1d6."),
			},
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
			description: desc("My Raging Elements options gain these effects (3rd page)."),
			autoSelectExtrachoices: [
				{ extrachoice: "icefury overload" },
				{ extrachoice: "lava burst overload" },
				{ extrachoice: "lightning bolt overload" },
			],
			"icefury overload": {
				name: "Icefury Overload", extraname: "Path of the Elements 14", source: [["WoW", 0]],
				description: desc("Hit or miss, the target subtracts half the number rolled (round down) from the next damage roll it makes before the start of my next turn."),
			},
			"lava burst overload": {
				name: "Lava Burst Overload", extraname: "Path of the Elements 14", source: [["WoW", 0]],
				description: desc("Failed save or not, the target and each enemy within 10 ft of it start Burning."),
			},
			"lightning bolt overload": {
				name: "Lightning Bolt Overload", extraname: "Path of the Elements 14", source: [["WoW", 0]],
				description: desc("Failed save or not, a bolt leaps from the target to another target of my choice I can see within 30 ft of the first. The new target makes a Dex save, taking Lightning damage equal to the roll (half on a success)."),
			},
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
			description: desc("While Raging, when I hit a creature with a weapon or an Unarmed Strike, the spirits cause 1 of the following effects of my choice (3rd page)."),
			autoSelectExtrachoices: [
				{ extrachoice: "distract" },
				{ extrachoice: "hinder" },
				{ extrachoice: "strike" },
			],
			"distract": {
				name: "Distract", extraname: "Spiritual Guardian 3", source: [["WoW", 0]],
				description: desc("Until the start of my next turn, the target has Disadvantage on attacks against targets other than me or another Barbarian with this feature."),
			},
			"hinder": {
				name: "Hinder", extraname: "Spiritual Guardian 3", source: [["WoW", 0]],
				description: desc("I can use the Slow mastery with that weapon in addition to the mastery I'm already using."),
			},
			"strike": {
				name: "Strike", extraname: "Spiritual Guardian 3", source: [["WoW", 0]],
				description: desc("The target takes an extra 1d4 Cold, Fire, or Lightning damage (my choice)."),
			},
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
				"Bonus Action + 1 Channel Divinity: for 1 min, I take on a shadowy form. It ends early if I dismiss it (no action), am Incapacitated, or deal Radiant damage with a spell.",
				" \u2022 ***Shadow Stealth***. In Dim Light or Darkness, I can Hide as a Bonus Action.",
				" \u2022 ***Void Empowerment***. When a spell cast with a spell slot deals Psychic or Necrotic damage, I add 1d6 to one damage roll of it.",
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
			description: " [Performance or another Monk skill; Brewer's Supplies]",
			skills: ["Performance"],
			skillstxt: "Performance, or one Monk skill of my choice if already proficient",
			toolProfs: ["Brewer's Supplies"],
		},
		"subclassfeature3.1": {
			name: "Drunken Technique", source: [["WoW", 0]], minlevel: 3,
			description: desc("When I spend 1 FP on Patient Defense, my Speed +10 ft until the end of the turn and I can make 1 Unarmed Strike right after."),
		},
		"subclassfeature6": {
			name: "Mystic Brew", source: [["WoW", 0]], minlevel: 6,
			description: desc("After a Short or Long Rest with Brewer's Supplies, I make 1 magical beverage (options on 3rd page); leftovers vanish at my next Short/Long Rest."),
			additional: "1 Focus Point: 8 hours",
			autoSelectExtrachoices: [
				{ extrachoice: "drinking a beverage" },
				{ extrachoice: "cinnamon dragon" },
				{ extrachoice: "heavenly spirit" },
				{ extrachoice: "refreshing dip" },
				{ extrachoice: "enhancing a magical beverage" },
			],
			"drinking a beverage": {
				name: "Drinking a Beverage", extraname: "Mystic Brews 6", source: [["WoW", 0]],
				description: desc("Only I benefit. Drinking the full pint takes 1 min; its effect lasts 1 h or until I drink another."),
			},
			"cinnamon dragon": {
				name: "Cinnamon Dragon", extraname: "Mystic Brews 6", source: [["WoW", 0]],
				description: desc("As a Magic action, I exhale toxic flames in a 30-ft Cone. Each creature makes a Dex save (DC 8 + my Wis mod + PB), taking Fire damage equal to 4 rolls of my Martial Arts die and being Poisoned until the end of its next turn, or half damage only on a success."),
			},
			"heavenly spirit": {
				name: "Heavenly Spirit", extraname: "Mystic Brews 6", source: [["WoW", 0]],
				description: desc("I gain Resistance to two of Cold, Necrotic, Psychic, or Radiant (my choice)."),
			},
			"refreshing dip": {
				name: "Refreshing Dip", extraname: "Mystic Brews 6", source: [["WoW", 0]],
				description: desc("I have a pool of dice of my Martial Arts die type, with a maximum equal to my Wis mod + half my Monk level (round down). Whenever I regain HP, I can expend and roll one to regain that much additional HP."),
			},
			"enhancing a magical beverage": {
				name: "Enhancing a Magical Beverage", extraname: "Mystic Brews 6", source: [["WoW", 0]],
				description: desc("When I create one, I can expend 1 Focus Point to extend its benefits to 8 hours."),
			},
		},
		"subclassfeature6.1": {
			name: "Tipsy Sway", source: [["WoW", 0]], minlevel: 6,
			description: desc("While Prone, I stand up for 5 ft of movement. Reaction + 1 FP: when an enemy misses me with a melee attack roll, that attack hits 1 creature I can see within 5 ft of me instead (not the attacker)."),
			action: [["reaction", " (Redirect Attack)"]],
		},
		"subclassfeature11": {
			name: "Wizened Brewer", source: [["WoW", 0]], minlevel: 11,
			description: desc("I learn 3 more Mystic Brew beverages (see 3rd page)."),
			autoSelectExtrachoices: [
				{ extrachoice: "blue lightning" },
				{ extrachoice: "drunkard's luck" },
				{ extrachoice: "stumbling monk" },
			],
			"blue lightning": {
				name: "Blue Lightning", extraname: "Mystic Brews 11", source: [["WoW", 0]],
				description: desc("When I take a Reaction that isn't an Opportunity Attack or a spell, I can make 1 Unarmed Strike as part of it."),
			},
			"drunkard's luck": {
				name: "Drunkard's Luck", extraname: "Mystic Brews 11", source: [["WoW", 0]],
				description: desc("I gain Heroic Inspiration if I don't have it. I can also give it to myself when I make an ability check or save without it."),
			},
			"stumbling monk": {
				name: "Stumbling Monk", extraname: "Mystic Brews 11", source: [["WoW", 0]],
				description: desc("When I take a Bonus Action other than Patient Defense, I can use Patient Defense right after it."),
			},
		},
		"subclassfeature17": {
			name: "Intoxicated Frenzy", source: [["WoW", 0]], minlevel: 17,
			description: desc("After Patient Defense, I can move up to my Speed. Each time I enter a space within 5 ft of a creature, I can make 1 Unarmed Strike against it; on a hit, Dex save or Prone. Each creature: once per turn."),
		},
		"subclassfeature17.1": {
			name: "Master Brewer", source: [["WoW", 0]], minlevel: 17,
			description: desc("When I create a Mystic Brew beverage, I can combine 2 different options into 1 beverage that gives both effects for the duration."),
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
				"When I roll Initiative, I add my Cha mod.",
				"I don't need Advantage on the attack roll to use Sneak Attack against a creature within 5 ft of me if no other creature is within 5 ft of me and I don't have Disadvantage; all other Sneak Attack rules still apply.",
			]),
			addMod: [{ type: "skill", field: "Init", mod: "Cha", text: "I can add my Charisma modifier to initiative rolls." }],
		},
		"subclassfeature9": {
			name: "Panache", source: [["WoW", 0]], minlevel: 9,
			description: desc("I have practiced new ways to use my Sneak Attack; these are now Cunning Strike options (3rd page)."),
			autoSelectExtrachoices: [
				{ extrachoice: "goad" },
				{ extrachoice: "awe" },
			],
			"goad": {
				name: "Goad (Cost: 1d6)", extraname: "Swashbuckler 9", source: [["WoW", 0]],
				description: desc("The target must succeed on a Wis save, or until the end of its next turn it has Disadvantage on attacks against targets other than me and can't make Opportunity Attacks against them."),
			},
			"awe": {
				name: "Awe (Cost: 3d6)", extraname: "Swashbuckler 9", source: [["WoW", 0]],
				description: desc("Each creature of my choice within 30 ft must succeed on a Wis save or be Charmed until the end of my next turn."),
			},
		},
		"subclassfeature13": {
			name: "Dashing Strikes", source: [["WoW", 0]], minlevel: 13,
			description: desc("I have practiced new ways to use my Sneak Attack; these are now Cunning Strike options (3rd page)."),
			autoSelectExtrachoices: [
				{ extrachoice: "invigorate" },
				{ extrachoice: "parrying stance" },
			],
			"invigorate": {
				name: "Invigorate (Cost: 2d6)", extraname: "Swashbuckler 13", source: [["WoW", 0]],
				description: desc("A creature I can see within 30 ft can, until the end of its next turn, roll 1d6 and add it to each attack roll or saving throw it makes."),
			},
			"parrying stance": {
				name: "Parrying Stance (Cost: 2d6)", extraname: "Swashbuckler 13", source: [["WoW", 0]],
				description: desc("I roll 1d6 and gain a bonus to my AC equal to the roll until the start of my next turn."),
			},
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
			description: desc("I always have the Spells (All) column of the Ebon Blade spells prepared, plus the column of my inscribed rune (see Runeforging). I also gain Runeforging and Runic Power."),
		},
		"subclassfeature3.1": {
			name: "Runeforging", source: [["WoW", 0]], minlevel: 3,
			description: ' #[Select option with "Choose Feature"]#' + desc('Choose my rune with the "Choose Feature" button above. This choice also sets my rune oath spells.'),
			choices: ["Blood", "Frost", "Unholy"],
			"blood": {
				name: "Blood Rune", source: [["WoW", 0]],
				description: desc("LR: inscribe or move this rune on a melee weapon I hold; can swap on level up. On inscribing and on each LR while it is inscribed: Temp HP = Cha mod + Death Knight lvl; also when I reduce an enemy to 0 HP while wielding it."),
				spellcastingExtra: ["death grip", "vampiric blood", "death and decay", "spiritual weapon", "summon undead", "leeching strike", "freedom of movement", "evard's black tentacles", "circle of power", "bonestorm"],
			},
			"frost": {
				name: "Frost Rune", source: [["WoW", 0]],
				description: desc("LR: inscribe or move this rune on a melee weapon I hold; can swap on level up. While wielding it, my weapon attacks, Death Knight spells and features ignore Cold Resistance; the Light property's extra attack deals +1d4 Cold damage on a hit."),
				spellcastingExtra: ["death grip", "chains of ice", "death and decay", "frostscythe", "summon undead", "remorseless winter", "freedom of movement", "ice storm", "circle of power", "cone of cold"],
			},
			"unholy": {
				name: "Unholy Rune", source: [["WoW", 0]],
				description: desc("LR: inscribe or move this rune on a melee weapon I hold; can swap on level up. While wielding it, my weapon attacks, Death Knight spells and features ignore Necrotic Resistance; if it has the Heavy property, the first creature I hit each turn takes +Cha mod (min 1) Necrotic damage."),
				spellcastingExtra: ["death grip", "scourge strike", "death and decay", "ray of enfeeblement", "summon undead", "bestow curse", "freedom of movement", "blight", "circle of power", "contagion"],
			},
		},
		"subclassfeature3.2": {
			name: "Runic Power", source: [["WoW", 0]], minlevel: 3,
			description: desc("After I cast Rune Strike, I can expend 1 Channel Divinity for my inscribed rune's effect (3rd page)."),
			additional: "1 Channel Divinity",
			autoSelectExtrachoices: [
				{ extrachoice: "blood (runic power)" },
				{ extrachoice: "frost (runic power)" },
				{ extrachoice: "unholy (runic power)" },
			],
			"blood (runic power)": {
				name: "Blood Runic Power", extraname: "Ebon Blade 3", source: [["WoW", 0]],
				description: desc("I regain HP equal to the Necrotic damage dealt with my Rune Strike."),
			},
			"frost (runic power)": {
				name: "Frost Runic Power", extraname: "Ebon Blade 3", source: [["WoW", 0]],
				description: desc("The target of my Rune Strike and each enemy in a 10-ft Emanation from it take 2d6 Cold damage."),
			},
			"unholy (runic power)": {
				name: "Unholy Runic Power", extraname: "Ebon Blade 3", source: [["WoW", 0]],
				description: desc("The target of my Rune Strike is cursed until the end of my next turn; the next save it makes subtracts 1d6, then the curse ends."),
			},
		},
		"subclassfeature7": {
			name: "Aura of Deathly Endurance", source: [["WoW", 0]], minlevel: 7,
			description: desc("Allies and I in my Aura of Protection have Resistance to Cold, Necrotic, and Psychic damage."),
		},
		"subclassfeature15": {
			name: "Runic Mastery", source: [["WoW", 0]], minlevel: 15,
			description: " [effect of my inscribed rune; see 3rd page]",
			usages: 1, recovery: "Long Rest",
			action: [["reaction", " (Blood rune)"]],
			autoSelectExtrachoices: [
				{ extrachoice: "blood (runic mastery)" },
				{ extrachoice: "frost (runic mastery)" },
				{ extrachoice: "unholy (runic mastery)" },
			],
			"blood (runic mastery)": {
				name: "Blood Runic Mastery", extraname: "Ebon Blade 15", source: [["WoW", 0]],
				description: desc("When a creature hits another creature I can see within 10 ft of me with an attack roll, I can use my Reaction to reduce the damage the target takes by my Death Knight level; I then lose that many HP."),
			},
			"frost (runic mastery)": {
				name: "Frost Runic Mastery", extraname: "Ebon Blade 15", source: [["WoW", 0]],
				description: desc("When I take the Attack action, I can replace 1 attack with a 30-ft Cone of frost; each creature in it makes a Dex save vs my spell save DC, taking 8d6 Cold damage on a failure or half on a success."),
			},
			"unholy (runic mastery)": {
				name: "Unholy Runic Mastery", extraname: "Ebon Blade 15", source: [["WoW", 0]],
				description: desc("When I cast Summon Undead, it can need no Concentration (1 min); the spirit gets Temp HP = my Death Knight level + Cha mod, and the first time each turn it hits, it deals extra Necrotic damage = half my Death Knight level (round up)."),
			},
		},
		"subclassfeature20": {
			name: "Aspect of the Horsemen", source: [["WoW", 0]], minlevel: 20,
			description: desc([
				"Bonus Action: for 10 min or until I end it (no action), I gain:",
				" \u2022 I can restore a use of Runic Mastery with a level 4 spell slot (no action).",
				" \u2022 When I use Runic Power or Runic Mastery, I can choose any rune's effect, not just my inscribed one.",
				"I can restore this feature with a level 5 spell slot (no action).",
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
			description: ' #[Select option with "Choose Feature"]#' + desc('Choose my second spell column with the "Choose Feature" button above. I always have the Spells (All) column prepared (see spell sheet).'),
			choices: ["Devourer", "Havoc", "Vengeance"],
			"devourer": {
				name: "Devourer Spells", source: [["WoW", 0]],
				description: desc("I always have the Spells (All) and Devourer columns of the Demon Hunter Spells prepared (see spell sheet)."),
				spellcastingExtra: ["throw glaive", "consume soul", "sigil of flame", "misty step", "metamorphosis", "soul reap", "chaos nova", "collapsing star", "destructive wave", "steel wind strike"],
			},
			"havoc": {
				name: "Havoc Spells", source: [["WoW", 0]],
				description: desc("I always have the Spells (All) and Havoc columns of the Demon Hunter Spells prepared (see spell sheet)."),
				spellcastingExtra: ["throw glaive", "fel rush", "sigil of flame", "eye beam", "metamorphosis", "blink", "chaos nova", "fire shield", "destructive wave", "conjure volley"],
			},
			"vengeance": {
				name: "Vengeance Spells", source: [["WoW", 0]],
				description: desc("I always have the Spells (All) and Vengeance columns of the Demon Hunter Spells prepared (see spell sheet)."),
				spellcastingExtra: ["throw glaive", "infernal strike", "sigil of flame", "fiery brand", "metamorphosis", "demon spikes", "chaos nova", "banishment", "destructive wave", "sigil of chains"],
			},
		},
		"subclassfeature3.1": {
			name: "Soul Fragments", source: [["WoW", 0]], minlevel: 3,
			description: desc("On a Long Rest, I gain soul fragments (Tiny crystals) equal to my Wis mod (min 1), +1 at Demon Hunter level 13 and +2 at 17; they last until my next Long Rest. One more than 30 ft from me teleports to my person. Their saves use my Demon Hunter spell save DC (options on 3rd page)."),
			usages: "Wis mod (+1 at 13, +2 at 17) per ", recovery: "Long Rest",
			limfeaname: "Soul Fragments",
			usagescalc: 'var lvl = classes.known.demonhunter ? classes.known.demonhunter.level : 0; event.value = Math.max(1, Number(What("Wis Mod"))) + (lvl >= 17 ? 2 : lvl >= 13 ? 1 : 0);',
			action: [["reaction", " (regain soul fragment)"]],
			autoSelectExtrachoices: [
				{ extrachoice: "double jump" },
				{ extrachoice: "soul cleave" },
				{ extrachoice: "regaining" },
			],
			"double jump": {
				name: "Double Jump", extraname: "Demon Hunter 3", source: [["WoW", 0]],
				description: desc("I can expend one soul fragment to cast Feather Fall or Jump without a spell slot."),
			},
			"soul cleave": {
				name: "Soul Cleave", extraname: "Demon Hunter 3", source: [["WoW", 0]],
				description: desc("Once per turn when I take the Attack action, I can expend one soul fragment and replace one attack: each creature in a 10-ft Emanation from me makes a Dex save; on a failure it takes 1d12 + my Wis mod Psychic damage, and I regain HP equal to my Wis mod."),
			},
			"regaining": {
				name: "Regaining", extraname: "Demon Hunter 3", source: [["WoW", 0]],
				description: desc("When an enemy I can see within 30 ft of me dies, I can use my Reaction to regain one expended soul fragment."),
			},
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
				"Once per turn when I hit it with a weapon or Demon Hunter spell attack roll, I can impose one of these effects:",
				" \u2022 ***Aura of Pain***. It subtracts 1d4 from its next save before the end of my next turn.",
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
		description: desc("I always have the Spells (All) and Augmentation columns of the Evoker Spells prepared (see spell sheet)."),
		spellcastingExtra: ["chromatic orb", "dragon's breath", "ebon might", "eruption", "fly", "blistering scales", "arcane eye", "upheaval", "summon dragon", "breath of eons"],
		spellcastingExtraApplyNonconform: true,
	},
	"devastation": {
		name: "Devastation Spells", source: [["WoW", 0]],
		description: desc("I always have the Spells (All) and Devastation columns of the Evoker Spells prepared (see spell sheet)."),
		spellcastingExtra: ["chromatic orb", "dragon's breath", "azure strike", "scorching ray", "fly", "fireball", "arcane eye", "emberstorm", "summon dragon", "shattering star"],
		spellcastingExtraApplyNonconform: true,
	},
	"preservation": {
		name: "Preservation Spells", source: [["WoW", 0]],
		description: desc("I always have the Spells (All) and Preservation columns of the Evoker Spells prepared (see spell sheet)."),
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
		"My creature type is Undead. Bonus Action: expend up to Cha mod dice (min 1) from my pool of d8s (1 + Cha mod, min 1) at a creature I can see in 60 ft. Con save: Necrotic dmg = roll (half on success). Undead: I can have it regain that HP instead.",
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
	description: desc("My Melee weapon and Unarmed Strike hits deal +1d8 Necrotic damage."),
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
dh.features["_spellcasting"].description = dh.features["_spellcasting"].description.split("I can use a Druidic Focus as Spellcasting Focus for them.").join("Spellcasting Focus: Arcane (not Druidic).");
appendWoWDescription(dh.features["expertise"], "Langs: WoW Ch. 2 tables (Eredun, Nathrezim rec.).");
// Void Warrior is a type: "fighting style" feat (end of this file). This feature keeps choicesFightingStyles
// from the Ranger, so the sheet's processChoicesFightingStyles() adds Void Warrior to its choices at the end
// of import. Don't push it into choices here: that would list it twice.
dh.features["fighting style"].description = dh.features["fighting style"].description.replace(/Choose a Fighting Style Feat or Druidic Warrior using the "Choose Feature" button above\./, "Fighting Style feat or Druidic Warrior.");
appendWoWDescription(dh.features["fighting style"], "Also: Void Warrior feat (WoW).");
delete dh.features["feral senses"];

dh.features["improved spectral sight"] = {
	name: "Improved Spectral Sight",
	source: [["WoW", 0]],
	minlevel: 18,
	description: " [Truesight 30 ft]",
	vision: [["Truesight", 30]],
};

// Shaman class features
var sh = ClassList.shaman;
delete sh.features["primal knowledge"];

sh.features["totems"] = {
	name: "Totems",
	source: [["WoW", 0]],
	minlevel: 3,
	description: desc("Bonus Action: plant a totem in an unoccupied space I can see within 10 ft. At the end of each of my turns it pulses in a 30-ft Emanation (totem rules and effects on 3rd page)."),
	usages: 1,
	recovery: "Long Rest",
	limfeaname: "Primal Knowledge Totem",
	action: [["bonus action", ""]],
	autoSelectExtrachoices: [
		{ extrachoice: "planting a totem" },
		{ extrachoice: "earthbind" },
		{ extrachoice: "primal knowledge (totem)" },
		{ extrachoice: "tremor" },
		{ extrachoice: "wind rush" },
	],
	"planting a totem": {
		name: "Planting a Totem", extraname: "Totems", source: [["WoW", 0]],
		description: desc("A totem is a Small object (AC 10, 1 HP). It lasts 1 min, until it drops to 0 HP, or until I plant another. Each pulse's effect lasts until the end of my next turn."),
	},
	"earthbind": {
		name: "Earthbind Totem", extraname: "Totems", source: [["WoW", 0]],
		description: desc("Each enemy's Speed is reduced by 10 ft."),
	},
	"primal knowledge (totem)": {
		name: "Primal Knowledge Totem", extraname: "Totems", source: [["WoW", 0]],
		description: desc([
			"Each ally can make Acrobatics, Intimidation, Perception, Stealth, and Survival checks as Strength checks.",
			"After I plant this totem, I can't plant it again until I finish a Long Rest, unless I expend 1 use of Rage to restore it (no action required).",
		]),
	},
	"tremor": {
		name: "Tremor Totem", extraname: "Totems", source: [["WoW", 0]],
		description: desc("Each ally is Immune to the Charmed and Frightened conditions, or those conditions are suppressed."),
	},
	"wind rush": {
		name: "Wind Rush Totem", extraname: "Totems", source: [["WoW", 0]],
		description: desc("Each ally's Speed is increased by 10 ft."),
	},
};

// Chapter 1: Feats
FeatsList["clearcasting"] = {
	name: "Clearcasting",
	source: [["WoW", 40]],
	type: "general",
	prerequisite: "Level 4+",
	prereqeval: function (v) { return v.characterLevel >= 4; },
	scores: [0, 0, 0, 1, 0, 0],
	action: [["reaction", "Clearcasting (after spell crit)"]],
	description: "When I score a Critical Hit with a spell's attack roll, I can take a Reaction to cast a cantrip with a casting time of an action. When I roll damage for a spell that deals Force damage, I can treat any 1 on a damage die as a 2. [+1 Intelligence]",
	descriptionFull: [
		"You gain the following benefits.",
		"***Ability Score Increase***. Increase your Intelligence score by 1, to a maximum of 20.",
		"***Clearcasting***. When you score a Critical Hit with a spell's attack roll, you can take a Reaction to cast a cantrip with a casting time of an action.",
		"***Force Adept***. When you roll damage for a spell you cast that deals Force damage, you can treat any 1 on a damage die as a 2.",
	],
};

FeatsList["fingers of frost"] = {
	name: "Fingers of Frost",
	source: [["WoW", 40]],
	type: "general",
	prerequisite: "Level 4+",
	prereqeval: function (v) { return v.characterLevel >= 4; },
	scores: [0, 0, 0, 1, 0, 0],
	description: "My spells ignore Resistance to Cold damage. When I deal Cold damage to a Restrained creature, it takes extra Cold damage equal to a number of d4s equal to my Proficiency Bonus. [+1 Intelligence]",
	descriptionFull: [
		"You gain the following benefits.",
		"***Ability Score Increase***. Increase your Intelligence score by 1, to a maximum of 20.",
		"***Cold Mastery***. Spells you cast ignore Resistance to Cold damage.",
		"***Frostbite***. When you deal Cold damage to a creature that has the Restrained condition, the creature takes extra Cold damage. To determine the extra damage, roll a number of d4s equal to your Proficiency Bonus and add them together.",
	],
};

FeatsList["hot streak"] = {
	name: "Hot Streak",
	source: [["WoW", 41]],
	type: "general",
	prerequisite: "Level 4+",
	prereqeval: function (v) { return v.characterLevel >= 4; },
	scores: [0, 0, 0, 1, 0, 0],
	description: "My spells ignore Resistance to Fire damage. When a spell I cast deals Fire damage to a creature, it starts burning; if it was already burning, the burning damage increases by 1d4. [+1 Intelligence]",
	descriptionFull: [
		"You gain the following benefits.",
		"***Ability Score Increase***. Increase your Intelligence score by 1, to a maximum of 20.",
		"***Fire Mastery***. Spells you cast ignore Resistance to Fire damage.",
		"***Ignite***. When a spell you cast deals Fire damage to a creature, the target starts burning. When you deal Fire damage to a creature that is already burning, the flames become more severe, increasing the burning damage by 1d4.",
	],
};

FeatsList["elusive brawler"] = {
	name: "Elusive Brawler",
	source: [["WoW", 45]],
	type: "general",
	prerequisite: "Level 4+, Dexterity 13+ and Wisdom 13+",
	prereqeval: function (v) { return v.characterLevel >= 4 && What("Dex") >= 13 && What("Wis") >= 13; },
	action: [["reaction", "Reactive Dodge (when damaged)"]],
	description: "When I take damage, I can take a Reaction to take the Dodge action. [+1 Dexterity or Wisdom]",
	descriptionFull: [
		"You gain the following benefits.",
		"***Ability Score Increase***. Increase your Dexterity or Wisdom score by 1, to a maximum of 20.",
		"***Reactive Dodge***. When you take damage, you can take a Reaction to take the Dodge action.",
	],
	choices: ["Dexterity", "Wisdom"],
	choicesNotInMenu: true,
	"dexterity": {
		description: "When I take damage, I can take a Reaction to take the Dodge action. [+1 Dexterity]",
		scores: [0, 1, 0, 0, 0, 0],
	},
	"wisdom": {
		description: "When I take damage, I can take a Reaction to take the Dodge action. [+1 Wisdom]",
		scores: [0, 0, 0, 0, 1, 0],
	},
};

FeatsList["enveloping mist"] = {
	name: "Enveloping Mist",
	source: [["WoW", 45]],
	type: "general",
	prerequisite: "Level 4+, Dexterity 13+ and Wisdom 13+",
	prereqeval: function (v) { return v.characterLevel >= 4 && What("Dex") >= 13 && What("Wis") >= 13; },
	action: [["reaction", "Enveloping Mist (reduce damage)"]],
	description: "When I restore HP to a creature with a spell or feature, I roll one of its healing dice as the creature's Life Cocoon value. If it is hit by an attack before the start of its next turn, I can take a Reaction to reduce that damage by the value; otherwise it gains that many Temporary HP at the start of its turn. [+1 Dexterity or Wisdom]",
	descriptionFull: [
		"You gain the following benefits.",
		"***Ability Score Increase***. Increase your Dexterity or Wisdom score by 1, to a maximum of 20.",
		"***Enveloping Mist***. When you cast a spell or use a feature to restore Hit Points to a creature, the creature is wrapped in a healing mist. Roll one of the dice from the feature that healed it, and note that number as the creature's Life Cocoon value. If the creature is hit by an attack roll before the start of its next turn, you can take a Reaction to reduce the damage it takes from that attack by its Life Cocoon value. The mist then disappears. At the start of the creature's next turn, if the mist persists, the creature gains Temporary Hit Points equal to its Life Cocoon value.",
	],
	choices: ["Dexterity", "Wisdom"],
	choicesNotInMenu: true,
	"dexterity": {
		description: "When I restore HP to a creature with a spell or feature, I roll one of its healing dice as the creature's Life Cocoon value. If it is hit by an attack before the start of its next turn, I can take a Reaction to reduce that damage by the value; otherwise it gains that many Temporary HP at the start of its turn. [+1 Dexterity]",
		scores: [0, 1, 0, 0, 0, 0],
	},
	"wisdom": {
		description: "When I restore HP to a creature with a spell or feature, I roll one of its healing dice as the creature's Life Cocoon value. If it is hit by an attack before the start of its next turn, I can take a Reaction to reduce that damage by the value; otherwise it gains that many Temporary HP at the start of its turn. [+1 Wisdom]",
		scores: [0, 0, 0, 0, 1, 0],
	},
};

FeatsList["fists of fury"] = {
	name: "Fists of Fury",
	source: [["WoW", 45]],
	type: "general",
	prerequisite: "Level 4+, Dexterity 13+ and Wisdom 13+",
	prereqeval: function (v) { return v.characterLevel >= 4 && What("Dex") >= 13 && What("Wis") >= 13; },
	description: "When I roll damage for an Unarmed Strike or a Light weapon, I can treat any 1 on a damage die as a 2. When I deal damage with an Unarmed Strike, I get +1 to the damage roll for each time I previously hit that creature with a melee attack roll this turn. [+1 Dexterity or Wisdom]",
	descriptionFull: [
		"You gain the following benefits.",
		"***Ability Score Increase***. Increase your Dexterity or Wisdom score by 1, to a maximum of 20.",
		"***Clean Hits***. When you roll damage for an attack you make with an Unarmed Strike or a weapon that has the Light property, you can treat any 1 on a damage die as a 2.",
		"***Combo Strikes***. When you deal damage to a creature with an Unarmed Strike, you gain a +1 bonus to the damage roll for each time you previously hit that creature with a melee attack roll in the same turn.",
	],
	choices: ["Dexterity", "Wisdom"],
	choicesNotInMenu: true,
	"dexterity": {
		description: "When I roll damage for an Unarmed Strike or a Light weapon, I can treat any 1 on a damage die as a 2. When I deal damage with an Unarmed Strike, I get +1 to the damage roll for each time I previously hit that creature with a melee attack roll this turn. [+1 Dexterity]",
		scores: [0, 1, 0, 0, 0, 0],
	},
	"wisdom": {
		description: "When I roll damage for an Unarmed Strike or a Light weapon, I can treat any 1 on a damage die as a 2. When I deal damage with an Unarmed Strike, I get +1 to the damage roll for each time I previously hit that creature with a melee attack roll this turn. [+1 Wisdom]",
		scores: [0, 0, 0, 0, 1, 0],
	},
};

FeatsList["stagger and sway"] = {
	name: "Stagger and Sway",
	source: [["WoW", 45]],
	type: "general",
	prerequisite: "Level 4+, Dexterity 13+ and Wisdom 13+",
	prereqeval: function (v) { return v.characterLevel >= 4 && What("Dex") >= 13 && What("Wis") >= 13; },
	action: [["bonus action", "Purify (Delayed Reaction pool)"]],
	description: "When I take damage, I reduce it by my Dex mod (min 1) and add a d6 to my Delayed Reaction pool. At the end of my turn, I roll all dice in the pool and take that much Force damage. As a Bonus Action, I can remove dice equal to my Wis mod from the pool. [+1 Dexterity or Wisdom]",
	descriptionFull: [
		"You gain the following benefits.",
		"***Ability Score Increase***. Increase your Dexterity or Wisdom score by 1, to a maximum of 20.",
		"***Defer Damage***. When you take damage, reduce the damage you take by your Dexterity modifier (minimum of 1). Then add a d6 to your Delayed Reaction pool. At the end of your turn, remove all the dice from your Delayed Reaction pool and roll them. You take Force damage equal to the total rolled.",
		"***Purify***. As a Bonus Action, you can remove a number of dice equal to your Wisdom modifier from your Delayed Reaction pool.",
	],
	choices: ["Dexterity", "Wisdom"],
	choicesNotInMenu: true,
	"dexterity": {
		description: "When I take damage, I reduce it by my Dex mod (min 1) and add a d6 to my Delayed Reaction pool. At the end of my turn, I roll all dice in the pool and take that much Force damage. As a Bonus Action, I can remove dice equal to my Wis mod from the pool. [+1 Dexterity]",
		scores: [0, 1, 0, 0, 0, 0],
	},
	"wisdom": {
		description: "When I take damage, I reduce it by my Dex mod (min 1) and add a d6 to my Delayed Reaction pool. At the end of my turn, I roll all dice in the pool and take that much Force damage. As a Bonus Action, I can remove dice equal to my Wis mod from the pool. [+1 Wisdom]",
		scores: [0, 0, 0, 0, 1, 0],
	},
};

FeatsList["void warrior"] = {
	name: "Void Warrior",
	source: [["WoW", 18]],
	type: "fighting style",
	prerequisite: "Level 2+ Demon Hunter (Fighting Style feature)",
	prereqeval: function (v) { return classes.known.demonhunter && classes.known.demonhunter.level >= 2 ? true : false; },
	description: "I learn two Warlock cantrips of my choice (Chill Touch and Mind Sliver are recommended). They count as Demon Hunter spells for me and Wisdom is my spellcasting ability for them. Whenever I gain a Demon Hunter level, I can replace one with another Warlock cantrip.",
	descriptionClassFeature: desc("I learn two Warlock cantrips; they count as Demon Hunter spells for me. Whenever I gain a Demon Hunter level, I can replace one of them with another Warlock cantrip."),
	descriptionFull: "You learn two Warlock cantrips of your choice. Chill Touch and Mind Sliver are recommended. The chosen cantrips count as Ranger spells for you, and Wisdom is your spellcasting ability for them. Whenever you gain a Ranger level, you can replace one of these cantrips with another Warlock cantrip.",
	spellcastingAbility: 5,
	spellcastingBonus: [{
		name: "Void Warrior",
		"class": ["warlock"],
		level: [0, 0],
		selection: ["chill touch", "mind sliver"],
		times: 2,
	}],
};

// Chapter 1: Warlock Eldritch Invocations (WoW has no Warlock class entry, so these go on the built-in Warlock)
AddWarlockInvocation("Curse of Corruption", {
	name: "Curse of Corruption",
	source: [["WoW", 0]],
	minlevel: 2,
	description: desc("When an enemy starts its turn cursed by a Warlock spell I cast (such as *Hex*), it must succeed on a Charisma saving throw or take Necrotic damage equal to my Charisma modifier."),
});
AddWarlockInvocation("Health Funnel", {
	name: "Health Funnel",
	source: [["WoW", 0]],
	minlevel: 2,
	description: desc("As a Bonus Action, I can expend any number of unexpended Hit Point Dice, roll them, and add my Charisma modifier to each die. My familiar or another Fiend I command gains the total as Temporary Hit Points."),
	action: [["bonus action", ""]],
});
AddWarlockInvocation("Master Demonologist", {
	name: "Master Demonologist",
	source: [["WoW", 0]],
	minlevel: 5,
	description: desc("Any Fiends I command also deal extra damage to the target of my *Hex* spell as if they were me."),
});
AddWarlockInvocation("Expendable Minions", {
	name: "Expendable Minions",
	source: [["WoW", 0]],
	minlevel: 9,
	description: desc("When my familiar or a summoned creature I control dies, I or another creature within 60 ft of me regains HP equal to my Warlock level + my Charisma modifier."),
});
// Pact of the Legion tree, mirroring the built-in Pact of the Chain tree
AddWarlockInvocation("Pact of the Legion", {
	name: "Pact of the Legion",
	submenu: ["[Warlock level  0+]", "[improves Pact of the Legion]"],
	source: [["WoW", 0]],
	description: desc([
		"As a Magic action, I can cast *Find Familiar* without expending a spell slot. When I do so, I summon a Fel Imp familiar.",
		"Additionally, when I take the Attack action, I can forgo one of my attacks to allow my familiar to use its Reaction to make one attack of its own.",
	]),
	spellcastingBonus: [{
		name: "Pact of the Legion",
		spells: ["find familiar"],
		selection: ["find familiar"],
		firstCol: "atwill",
	}],
	spellChanges: {
		"find familiar": {
			time: "Act",
			ritual: false,
			changes: "With the Pact of the Legion invocation I can cast *Find Familiar* as a Magic action without expending a spell slot.",
		},
	},
});
AddWarlockInvocation("Call of the Void (req: lvl 5+, Pact of the Legion)", {
	name: "Call of the Void",
	source: [["WoW", 0]],
	minlevel: 5,
	submenu: ["[Warlock level  5+]", "[improves Pact of the Legion]"],
	prereqeval: function (v) { return v.choiceActive.indexOf("pact of the legion") !== -1; },
	description: desc([
		"When I cast *Find Familiar* with Pact of the Legion, I can summon a Fel Imp or a Voidwalker. It gains:",
		" \u2022 ***Quick Attack***. As a Bonus Action, I can command the familiar to take the Attack action.",
		" \u2022 ***Your Spell Attack***. The familiar uses my spell attack bonus for its attacks.",
		" \u2022 ***Shadow Shield***. As a Reaction when my Voidwalker familiar takes damage, I can grant it Resistance to that damage.",
	]),
	action: [
		["bonus action", "Call of the Void: Quick Attack"],
		["reaction", "Call of the Void: Shadow Shield"],
	],
});
AddWarlockInvocation("Legion Summoning (req: lvl 9+, Pact of the Legion)", {
	name: "Legion Summoning",
	source: [["WoW", 0]],
	minlevel: 9,
	submenu: ["[Warlock level  9+]", "[improves Pact of the Legion]"],
	prereqeval: function (v) { return v.choiceActive.indexOf("pact of the legion") !== -1; },
	description: desc("I can cast *Planar Binding* without expending a spell slot. When I do, I summon a Felguard, a Felhound, an Incubus or a Succubus, and that Fiend becomes the target of the spell. Once I cast it this way, I can't do so again until I finish a Long Rest."),
	spellcastingBonus: [{
		name: "Legion Summoning",
		spells: ["planar binding"],
		selection: ["planar binding"],
		firstCol: "oncelr",
	}],
});

// Chapter 1: Warrior Maneuvers, extra options for the PHB'24 Battle Master ("pub_20240917_PHB.js" must be imported first)
// The WoW Warrior shares the Fighter's Battle Master object, so adding them once covers both classes
if (ClassSubList["fighter-battle master"]) {
	var wowManeuverFeature = ClassSubList["fighter-battle master"].features["subclassfeature3.1"];
	var wowManeuvers = {
		"Battle Shout": {
			name: "Battle Shout", extraname: "Maneuver", source: [["WoW", 0]],
			description: desc("As a Bonus Action, I can expend 1 SD to shout encouragement to allies within 30 ft of me that can hear me. Until the start of my next turn, each affected ally adds the SD to the damage roll the next time it hits with a melee attack."),
			additional: "allies add SD to melee damage",
			action: [["bonus action", ""]],
		},
		"Demoralizing Shout": {
			name: "Demoralizing Shout", extraname: "Maneuver", source: [["WoW", 0]],
			description: desc("As a Bonus Action, I can expend 1 SD to shout, demoralizing enemies within 30 ft of me that can hear me. Until the end of my next turn, each affected enemy subtracts the SD from the damage roll the next time it hits a target other than me with a melee attack."),
			additional: "enemies subtract SD from melee damage",
			action: [["bonus action", ""]],
		},
		"Heroic Leap": {
			name: "Heroic Leap", extraname: "Maneuver", source: [["WoW", 0]],
			description: desc("As a Bonus Action, I can expend 1 SD to jump a number of feet up to my Strength score. Creatures within 5 ft of me when I land make a Strength save, taking Bludgeoning damage equal to the SD roll on a failed save, or half as much on a success."),
			additional: "SD Bludgeoning on landing",
			action: [["bonus action", ""]],
		},
		"Mortal Strike": {
			name: "Mortal Strike", extraname: "Maneuver", source: [["WoW", 0]],
			description: desc("When I hit a creature with an attack roll, I can expend 1 SD to prevent the target from healing. I add the SD to the attack's damage roll, and the target can't regain Hit Points until the end of my next turn."),
			additional: "add SD to damage; target can't heal",
		},
		"Warding Maneuver": {
			name: "Warding Maneuver", extraname: "Maneuver", source: [["WoW", 0]],
			description: desc("When I or a creature I can see within 5 ft of me is hit by an attack roll, I can take a Reaction and expend 1 SD if I'm wielding a Melee weapon or a Shield. I add the SD to the target's AC against that attack; if it still hits, the target has Resistance to its damage."),
			additional: "add SD to AC; Resistance if still hit",
			action: [["reaction", ""]],
		},
	};
	for (var wm in wowManeuvers) AddFeatureChoice(wowManeuverFeature, true, wm, wowManeuvers[wm]);
}

// Chapter 1: Hunter Pets. A WoW Hunter's Beast Master picks the primal beast's form from the Pet Families table, which maps
// each family onto one of the PHB'24 Beast of the Land/Sea/Sky stat blocks and gives it a mastery property.
// The Hunter gets its own copy, so the Ranger and Demon Hunter keep the plain PHB'24 Beast Master.
if (ClassSubList["ranger-beast master"]) {
	var hunterBeastMaster = newObj(ClassSubList["ranger-beast master"]);
	delete hunterBeastMaster.fullname;
	hunterBeastMaster.source = [["WoW", 0], ["PHB24", 122]];
	// The companion's level, HP and attack links name the Ranger class key
	rekeyWoWFeature(hunterBeastMaster, "subclassfeature3", [
		['"ranger"', '"hunter"'],
		["classes.known.ranger", "classes.known.hunter"],
		["my Ranger level", "my Hunter level"],
		["Ranger spell save DC", "Hunter spell save DC"],
	]);
	// The Primal Companion rules move to a Notes page, so the Class Features section keeps only the Hunter Pets summary
	var hunterCompanionDesc = hunterBeastMaster.features.subclassfeature3.description;
	hunterBeastMaster.features.subclassfeature3.description = desc("***Hunter Pets***. My beast's form comes from the Pet Families table (Notes page), which sets its stat block, Spec. and mastery; see there for Weapon Mastery.");
	hunterBeastMaster.features.subclassfeature3.toNotesPage = [{
		name: "Pet Families",
		source: [["WoW", 0]],
		note: [
			"When I use my Primal Companion feature to summon a primal beast, I choose the form it takes from among the pet families on the table below. Each family has three characteristics:",
			" \u2022 ***Stat Block***. The family determines which stat block from the Player's Handbook the beast uses: Beast of the Land, Beast of the Sea, or Beast of the Sky.",
			" \u2022 ***Specialization (Spec.)***. Each family has a specialization, Cunning (C), Ferocity (F), or Tenacity (T), that comes into play only if I have the Pet Specialization feature.",
			" \u2022 ***Mastery Property (Mastery)***. When I gain the Primal Companion feature and whenever I finish a Long Rest, I can choose my pet's family as one of the weapons for my Weapon Mastery feature. Then its mastery property applies to my primal companion's Beast's Strike attack.",
			[
				["Family", "Stat Block", "Spec.", "Mastery"],
				["Basilisk", "Land", "C", "Slow"],
				["Bat", "Sky", "F", "Vex"],
				["Bear", "Land", "T", "Push"],
				["Beetle", "Land", "T", "Sap"],
				["Bird of Prey", "Sky", "C", "Slow"],
				["Blood Beast* (stirge)", "Sky", "T", "Slow"],
				["Boar", "Land", "C", "Sap"],
				["Camel", "Land", "C", "Push"],
				["Carrion Bird", "Sky", "F", "Cleave"],
				["Cat", "Land", "F", "Graze"],
				["Courser (horses)", "Land", "F", "Graze"],
				["Crab", "Land", "T", "Slow"],
				["Crocolisk", "Land", "F", "Slow"],
				["Direhorn* (triceratops)", "Land", "T", "Cleave"],
				["Dolphin", "Sea", "T", "Vex"],
				["Dragonhawk", "Sky", "T", "Graze"],
				["Feathermane* (gryphon)", "Sky", "T", "Graze"],
				["Fox", "Land", "C", "Graze"],
				["Frenzy (piranha-like fish)", "Sea", "F", "Cleave"],
				["Gorilla", "Land", "F", "Push"],
				["Gruffhorn (goats)", "Land", "C", "Push"],
				["Hopper (frogs, toads)", "Land", "T", "Graze"],
				["Hound", "Land", "C", "Slow"],
				["Hydra", "Land", "T", "Cleave"],
				["Hyena", "Land", "C", "Cleave"],
				["Lizard", "Land", "T", "Cleave"],
				["Mammoth", "Land", "T", "Slow"],
				["Mechanized animal*", "Land", "C", "Sap"],
				["Monkey", "Land", "C", "Graze"],
				["Moth", "Sky", "C", "Vex"],
				["Oxen", "Land", "T", "Push"],
				["Raptor (allosaurus)", "Land", "C", "Cleave"],
				["Ray", "Sky", "F", "Vex"],
				["Riverbeast (hippo)", "Land", "T", "Cleave"],
				["Rodent", "Land", "C", "Cleave"],
				["Scalehide (ankylosaurus)", "Land", "F", "Sap"],
				["Scorpid", "Land", "F", "Cleave"],
				["Serpent", "Land or Sea", "C", "Graze"],
				["Shark", "Sea", "C", "Graze"],
				["Spider", "Land", "F", "Slow"],
				["Stag", "Land", "T", "Vex"],
				["Tallstrider (flightless bird)", "Land", "F", "Slow"],
				["Threshadon* (plesiosaur)", "Sea", "T", "Sap"],
				["Turtle", "Land", "T", "Sap"],
				["Wasp", "Sky", "F", "Cleave"],
				["Waterfowl", "Land", "T", "Vex"],
				["Wolf", "Land", "F", "Slow"],
			],
			"*Unusual pet family; a hunter must acquire a special ability (typically by reading a magical tome) to tame an unusual pet.",
		],
	}, {
		// The PHB Primal Companion rules, moved off the Class Features section and tersened
		name: "Primal Companion",
		source: [["PHB24", 122]],
		note: [
			"When I finish a Long Rest, I summon a Beast of the Land, Sea, or Sky within 5 ft (form from the Pet Families table). It has primal markings. A new one replaces the old. It is friendly to me and my allies, obeys my commands, and vanishes if I die.",
			"***In Combat***. It acts on my turn and can move and use Reactions on its own. It only takes the Dodge action unless I use a Bonus Action to command it. I can forgo one attack of my Attack action to command its Beast's Strike. If I'm Incapacitated, it acts on its own and is not limited to Dodge.",
			"***Restoring***. As a Magic action, if it died within the last hour, I touch it and expend a spell slot to return it to life with full HP.",
		],
	}];
	// Pet Specialization (Hunter 6). Using the object name of the class feature "roving" makes this subclass feature replace Roving
	// for a Beast Master Hunter from level 6 on (see "SAME OBJECT NAME REPLACES" in the class features syntax file).
	hunterBeastMaster.features["roving"] = {
		name: "Pet Specialization",
		source: [["WoW", 0]],
		minlevel: 6,
		description: ' #[Select option with "Choose Feature"]#' + desc("This replaces Roving. While my beast is within 60 ft of me, I gain the benefit for its Specialization (Spec. on the Notes page). Choose Cunning, Ferocity, or Tenacity below."),
		choices: ["Cunning", "Ferocity", "Tenacity"],
		"cunning": {
			name: "Pet Specialization: Cunning",
			description: desc("While my beast is within 60 ft: my Speed and all its speeds +10 ft. 1/LR its action: it casts *Freedom of Movement* on itself and me (if in range), without components."),
			speed: { allModes: "+10" },
			usages: 1,
			recovery: "Long Rest",
			limfeaname: "Pet: Freedom of Movement",
			action: [["action", " (pet casts)"]],
		},
		"ferocity": {
			name: "Pet Specialization: Ferocity",
			description: desc("While my beast is within 60 ft: when it is Bloodied and hits with its Beast's Strike, it and I each regain HP = my Wis mod. 1/LR its action: it casts *Haste* on itself and me (if in range), without components."),
			usages: 1,
			recovery: "Long Rest",
			limfeaname: "Pet: Haste",
			action: [["action", " (pet casts)"]],
		},
		"tenacity": {
			name: "Pet Specialization: Tenacity",
			description: desc("While my beast is within 60 ft: my HP max and its HP max each +my Hunter level. 1/LR its action: it casts *Stoneskin* on itself and me (if in range), without components."),
			usages: 1,
			recovery: "Long Rest",
			limfeaname: "Pet: Stoneskin",
			action: [["action", " (pet casts)"]],
			calcChanges: {
				hp: function (totalHD, HDobj, prefix) {
					if (classes.known.hunter && classes.known.hunter.level >= 6) {
						return [classes.known.hunter.level, "Pet Specialization: Tenacity (Hunter level)"];
					}
				},
			},
		},
	};
	var hunterSubs = ClassList.hunter.subclasses[1];
	var hunterBMIdx = hunterSubs.indexOf("ranger-beast master");
	if (hunterBMIdx !== -1) hunterSubs.splice(hunterBMIdx, 1);
	AddSubClass("hunter", "beast master", hunterBeastMaster, true);
}

// Chapter 1: Druid Cat Form and Bear Form. The book offers these two Wild Shape forms to a Circle of the Moon druid, and they
// require the Circle Forms feature. They are not Beasts: the druid keeps their own type, and their Strength and Dexterity equal
// their Wisdom. A Moon feature adds them as creatureOptions, so they are only available while the feature is present.
// The Wild Shape callback sets the ability scores, the Stealth proficiency and the damage dice, which scale with Druid level.
if (ClassSubList["druid-moon"]) {
	var wowCircleFormBase = {
		source: [["WoW", 0]],
		type: "Unchanged",
		alignment: "Unchanged",
		hp: 1, // Wild Shape uses the temporary HP from Circle Forms (3 x Druid level), not this value
		hd: [0, 8],
		proficiencyBonus: 2,
		proficiencyBonusLinked: true,
		challengeRating: "―",
		scores: [10, 10, 10, 10, 10, 10], // Str, Dex and Con are set by the Wild Shape callback below
		senses: "Darkvision 60 ft",
		languages: "Your languages don't change",
		forceWildshapeOption: "Circle of the Moon (WoW)",
	};
	var wowCatForm = {
		name: "Cat Form",
		nameThis: "cat form",
		size: 3,
		ac: "13+Wis",
		speed: "40 ft",
		attacksAction: 1,
		attacks: [{
			name: "Pounce",
			ability: 5,
			useSpellMod: "druid",
			damage: [1, 10, "slashing"],
			range: "Melee (5 ft)",
			description: "Adv on attack roll: +1d6 Slashing and Large or smaller target is Prone; extra dice +1d6 per Druid level 6, 9, 12, 15, 18",
		}],
		actions: [{
			name: "Multiattack",
			description: "I make one Pounce attack and use Prowl.",
		}, {
			name: "Prowl",
			description: "I move up to half my Speed without provoking Opportunity Attacks. At the end of this movement, I can take the Hide action.",
		}, {
			name: "Primal Wrath",
			description: "I expend a level 1+ spell slot. Each creature of my choice in a 5-ft Emanation from me makes a Dex save against my spell save DC, taking 2d6 Slashing damage per spell slot level plus my Wis mod on a failed save.",
		}],
		traits: [{
			name: "Cat Form",
			description: "Requires Circle Forms. My Str and Dex scores equal my Wisdom score. I have proficiency in Stealth. My AC is 13 + my Wis mod.",
		}],
	};
	var wowBearForm = {
		name: "Bear Form",
		nameThis: "bear form",
		size: 2,
		ac: "15+Wis",
		speed: "30 ft",
		attacksAction: 2,
		attacks: [{
			name: "Mangle",
			ability: 5,
			useSpellMod: "druid",
			damage: [1, 8, "slashing"],
			range: "Melee (5 ft)",
			description: "Two Mangle attacks as part of an Attack action",
		}],
		actions: [{
			name: "Multiattack",
			description: "I make two Mangle attacks.",
		}, {
			name: "Frenzied Regeneration (Bonus Action)",
			description: "I expend a level 1+ spell slot and gain Temp HP equal to five times the spell slot level.",
		}, {
			name: "Growl (Reaction)",
			description: "When a creature I can see attacks a target other than me within 5 ft of me, I impose Disadvantage on that attack roll and on all other attack rolls against the target until the start of my next turn, if I remain within 5 ft of the target.",
		}],
		traits: [{
			name: "Bear Form",
			description: "Requires Circle Forms. My Str and Dex scores equal my Wisdom score. My AC is 15 + my Wis mod.",
		}],
	};
	for (var wowFormKey in wowCircleFormBase) {
		wowCatForm[wowFormKey] = wowCircleFormBase[wowFormKey];
		wowBearForm[wowFormKey] = wowCircleFormBase[wowFormKey];
	}
	ClassSubList["druid-moon"].features["subclassfeature3.2"] = {
		name: "Wild Shape: Cat Form and Bear Form",
		source: [["WoW", 0]],
		minlevel: 3,
		description: desc([
			"When I use Wild Shape, I can adopt the Cat Form or Bear Form stat block instead of a Beast (Feral and Guardian specializations).",
			"In these forms my Str and Dex equal my Wis score. I keep my Con, and my own type, alignment and languages. Pick them on the Wild Shape page under \"Circle of the Moon (WoW)\".",
		]),
		creatureOptions: [wowCatForm, wowBearForm],
		calcChanges: {
			wildshapeCallback: [
				function (prefix, fieldNo, oWildshape, sCrea) {
					if (!/^(Cat|Bear) Form$/.test(oWildshape.name)) return;
					var wis = Number(What("Wis"));
					oWildshape.ability.Str.value = wis;
					oWildshape.ability.Dex.value = wis;
					oWildshape.ability.Con.value = Number(What("Con"));
					var lvl = classes.known.druid ? classes.known.druid.level : 0;
					var dice = lvl >= 17 ? 4 : lvl >= 11 ? 3 : lvl >= 5 ? 2 : 1;
					for (var i = 0; i < oWildshape.attacks.length; i++) {
						if (/^(Pounce|Mangle)$/.test(oWildshape.attacks[i].name)) oWildshape.attacks[i].damage[0] = dice;
					}
					if (oWildshape.name === "Cat Form") {
						var pounceDice = lvl >= 18 ? 6 : lvl >= 15 ? 5 : lvl >= 12 ? 4 : lvl >= 9 ? 3 : lvl >= 6 ? 2 : 1;
						oWildshape.attacks[0].description = "Adv on attack roll: +" + pounceDice + "d6 Slashing and Large or smaller target is Prone";
						if (oWildshape.skill && oWildshape.skill.stealth) oWildshape.skill.stealth.creature.proficiency = "proficient";
					}
				},
				"While in Cat Form or Bear Form, my Strength and Dexterity scores equal my Wisdom score, the damage dice of my attacks increase with my Druid level, and the Cat Form gives me proficiency in Stealth.",
			],
		},
	};
}

// Chapter 2: Character origins

// Chapter 2: Languages. The sheet has no language list: the AddLanguage function writes straight into the character's
// Language fields, so it can't register languages. A WoW character knows Common (Alliance) or Orcish (Horde)
// plus two languages from the tables below, which is what the WoW species and lineages set with languageProfs.
// Standard languages (18): Common, Common Sign Language, Darnassian, Draconic, Draenei, Dwarven, Forsaken, Gnomish, Goblin, Hara'ni, Orcish, Orcish Sign Language, Pandaren, Shalassian, Taur-ahe, Thalassian, Vulpera, Zandali.
// Rare languages (15): Cyphers of the First Ones, Druidic, Eredun, Furbolg, Kalimag, Nathrezim, Nazja, Nerglish, Nerubian, Ogre, Qiraji, Shath'Yar, Thieves' Cant, Titan, Vrykul.

SpellsList["arcane pulse"] = {
	name: "Arcane Pulse",
	classes: [],
	source: ["WoW", 78],
	level: 0,
	school: "Evoc",
	time: "Act",
	range: "S:10-ft rad",
	components: "V,S",
	duration: "1 rnd",
	save: "Con",
	description: "Any crea in area save or 1d8 Force dmg \x26 Speed -10 ft until end of my next turn",
	descriptionFull: [
		"You create a pulse of arcane energy in a 10-foot Emanation originating from yourself. Each creature of your choice within this area makes a Constitution saving throw. On a failed save, it takes 1d8 Force damage, and its Speed is reduced by 10 feet (to a minimum of 0 feet) until the end of your next turn.",
	],
};

SpellsList["entropic embrace"] = {
	name: "Entropic Embrace",
	classes: [],
	source: ["WoW", 78],
	level: 1,
	school: "Necro",
	time: "React",
	timeFull: "Reaction, which you take when you make a D20 Test with Advantage or Disadvantage and roll the same number on both dice",
	range: "Self",
	components: "V",
	duration: "1 min",
	description: "Auto-succeed Con saves for Conc.; my space Lightly Obscured; 1/turn +1d4+1d4/SL Necro. dmg or healing",
	descriptionFull: [
		"You are empowered by the essence of the Void for the duration, becoming swathed in shadow and taking on a dark-blue or purple appearance. While this effect lasts, you gain the following benefits.",
		" \u2022 ***Preternatural Calm***. You automatically succeed on Constitution saving throws to maintain Concentration.",
		" \u2022 ***Shadow Shroud***. You are shrouded in shadow, making your space Lightly Obscured.",
		" \u2022 ***Touch of the Void***. Once on each of your turns, you can deal an extra 1d4 Necrotic damage to one creature when you deal damage to it, or you can restore an extra 1d4 Hit Points to one creature when you heal it.",
		UsingHigherLvl + "The extra damage or healing from the Touch of the Void effect increases by 1d4 for each spell slot level above 1.",
	],
};

FeatsList["arathi heritage"] = {
	name: "Arathi Heritage",
	source: [["WoW", 85]],
	type: "origin",
	prerequisite: "Human",
	prereqeval: function (v) { return CurrentRace.known.indexOf("human") !== -1; },
	savetxt: { adv_vs: ["Charmed"] },
	usages: 1,
	recovery: "1d4 LR",
	limfeaname: "Lethargy Resilience",
	description: "I have Advantage on saves to avoid or end Charmed. When I fail a save to avoid or end Unconscious, I can succeed instead; after I do, I can't again until I finish 1d4 Long Rests.",
	descriptionFull: [
		"As a descendant of humans from Arathor and high elves from Quel'Thalas, you gain the following benefits.",
		"***Fey Ancestry***. You have Advantage on saving throws to avoid or end the Charmed condition.",
		"***Lethargy Resilience***. When you fail a saving throw to avoid or end the Unconscious condition, you can succeed instead. Once you use this trait, you can't do so again until you finish 1d4 Long Rests.",
	],
};

FeatsList["child of the sea"] = {
	name: "Child of the Sea",
	source: [["WoW", 85]],
	type: "origin",
	prerequisite: "Human",
	prereqeval: function (v) { return CurrentRace.known.indexOf("human") !== -1; },
	speed: { swim: { spd: "walk", enc: "walk" } },
	description: "I can hold my breath for 2 + my Con modifier minutes (min 1). I have a Swim Speed equal to my Speed.",
	descriptionFull: [
		"As a Kul Tiran, you gain the following benefits.",
		"***Lasting Breath***. You can hold your breath for a number of minutes equal to 2 plus your Constitution modifier (minimum of 1 minute).",
		"***Ocean Born***. You have a Swim Speed equal to your Speed.",
	],
};

FeatsList["will to survive"] = {
	name: "Will to Survive",
	source: [["WoW", 85]],
	type: "origin",
	prerequisite: "Human",
	prereqeval: function (v) { return CurrentRace.known.indexOf("human") !== -1; },
	description: "When I have the Incapacitated condition but not Unconscious, I can ignore Incapacitated on my turn; if I do, I gain 1 Exhaustion level.",
	descriptionFull: [
		"When you have the Incapacitated condition but not the Unconscious condition, you can draw on the proud heritage of Stormwind or Stromgarde to ignore the Incapacitated condition on your turn. If you do, you gain 1 Exhaustion level.",
	],
};

// Chapter 2: Species. In the 2024 rules a species grants no ability score increases (they come from the background), so none of these has scores.
RaceList["dracthyr"] = {
	regExpSearch: /dracthyr/i,
	name: "Dracthyr",
	source: [["WoW", 70]],
	plural: "Dracthyr",
	size: 3,
	speed: { walk: { spd: 30, enc: 20 } },
	vision: [["Darkvision", 60]],
	languageProfs: [["Common or Orcish", 1], 2],
	action: [
		["bonus action", "Natural Weaponry (Shove)"],
		["action", "Visage (shape-shift)"],
	],
	features: {
		"draconic flight": {
			name: "Draconic Flight",
			source: [["WoW", 70]],
			minlevel: 5,
			usages: 1,
			recovery: "Long Rest",
			action: [["bonus action", ""]],
		},
	},
	trait: [
		"##\u25C6 Creature Type##. I am a Dragon.",
		"##\u25C6 Gliding Wings##. Natural form, not Incapacitated: falling, I subtract up to 100 ft from the damage distance and move 2 ft horizontally per 1 ft I descend.",
		"##\u25C6 Natural Weaponry##. In my natural form, Bonus Action: Unarmed Strike with my wings or tail to Shove it.",
		"##\u25C6 Visage##. Magic action: shape-shift into my humanoid visage or back; clothing, equipment, and statistics don't change.",
		"##\u25C6 Draconic Flight## (level 5). As a Bonus Action, 1/LR, I gain a Fly Speed equal to my Speed for 10 min.",
	],
};

RaceList["draenei"] = {
	regExpSearch: /draenei/i,
	name: "Draenei",
	source: [["WoW", 72]],
	plural: "Draenei",
	size: 3,
	speed: { walk: { spd: 30, enc: 20 } },
	vision: [["Darkvision", 60]],
	languageProfs: [["Common or Orcish", 1], 2],
	spellcastingAbility: [4, 5, 6],
	features: {
		"heroic presence": {
			name: "Heroic Presence",
			source: [["WoW", 72]],
			minlevel: 1,
			usages: 1,
			recovery: "Short Rest",
		},
	},
	trait: [
		"##\u25C6 Heroic Presence##. When I cast a spell from my Eredar Lineage and don't have Heroic Inspiration, I gain it. I can do this once per Short or Long Rest.",
	],
	variants: [],
};

RaceList["earthen"] = {
	regExpSearch: /earthen/i,
	name: "Earthen",
	source: [["WoW", 75]],
	plural: "Earthen",
	size: 3,
	speed: { walk: { spd: 30, enc: 20 } },
	vision: [["Darkvision", 120]],
	languageProfs: [["Common or Orcish", 1], 2],
	dmgres: ["Poison"],
	savetxt: { adv_vs: ["Poisoned"] },
	features: {
		"azerite surge": {
			name: "Azerite Surge",
			source: [["WoW", 75]],
			minlevel: 1,
			usages: "Proficiency Bonus per ",
			usagescalc: "event.value = How('Proficiency Bonus');",
			recovery: "Long Rest",
			additional: cantripDie.map(function (n) { return n + "d10"; }),
			weaponOptions: [{
				regExpSearch: /^(?=.*azerite)(?=.*surge).*$/i,
				name: "Azerite Surge",
				source: [["WoW", 75]],
				ability: 3,
				type: "Natural",
				damage: ["C", 10, "radiant"],
				range: "15-ft Cone",
				description: "Replaces 1 attack; chosen crea in cone heal same dice; others Dex save, half on success; Prof Bonus per Long Rest",
				abilitytodamage: false,
				dc: true,
				selectNow: true,
			}],
		},
	},
	trait: [
		"##\u25C6 Azerite Surge##. Replace 1 attack of my Attack action: 15-ft Cone; chosen creatures regain 1d10 HP, others make a Dex save (DC 8 + Con mod + PB) or take 1d10 Radiant damage, half on a success. Dice become 2d10 at 5, 3d10 at 11, 4d10 at 17. PB/LR.",
		"##\u25C6 Earthen Resilience##. Resistance to Poison damage; Adv. on saves to avoid or end Poisoned.",
		"##\u25C6 Ingest Minerals##. No Exhaustion from malnutrition.",
		"##\u25C6 Quiet Contemplation##. When I spend Hit Point Dice after a Short Rest, I regain 1 extra HP per die.",
	],
};

RaceList["forsaken"] = {
	regExpSearch: /forsaken/i,
	name: "Forsaken",
	source: [["WoW", 78]],
	plural: "Forsaken",
	size: [3, 4],
	speed: { walk: { spd: 30, enc: 20 } },
	vision: [["Darkvision", 60]],
	languageProfs: [["Common or Orcish", 1], 2],
	dmgres: ["Necrotic"],
	savetxt: { immune: ["Sleep magic"], adv_vs: ["Charmed", "Frightened"] },
	features: {
		"touch of the grave": {
			name: "Touch of the Grave",
			source: [["WoW", 78]],
			minlevel: 1,
			usages: 1,
			recovery: "Long Rest",
			additional: ProficiencyBonusList.map(function (n) { return n + "d4 Necrotic"; }),
		},
	},
	trait: [
		"##\u25C6 Creature Type##. I am Undead.",
		"##\u25C6 Deathly Endurance##. Resistance to Necrotic damage.",
		"##\u25C6 Everlasting##. No Exhaustion from dehydration, malnutrition, or suffocation. I don't need to sleep; magic can't put me to sleep. Long Rest in 4 h if inactive and motionless, conscious.",
		"##\u25C6 Touch of the Grave##. 1/LR when I deal damage, I roll PB d4s: extra Necrotic damage, and I regain that much HP.",
		"##\u25C6 Will of the Forsaken##. Adv. on saves to avoid or end Charmed or Frightened.",
	],
};

RaceList["goblin"] = {
	regExpSearch: /^(?!.*hob)(?=.*goblin).*$/i,
	name: "Goblin",
	source: [["WoW", 81]],
	plural: "Goblins",
	size: 4,
	speed: { walk: { spd: 30, enc: 20 } },
	vision: [["Darkvision", 60]],
	languageProfs: [["Common or Orcish", 1], 2],
	savetxt: { adv_vs: ["Charmed"] },
	action: [["bonus action", "Nimble Escape (Disengage/Hide)"]],
	features: {
		"fury of the small": {
			name: "Fury of the Small",
			source: [["WoW", 81]],
			minlevel: 1,
			usages: "Proficiency Bonus per ",
			usagescalc: "event.value = How('Proficiency Bonus');",
			recovery: "Long Rest",
			additional: ProficiencyBonusList.map(function (n) { return "+" + n + " dmg"; }),
		},
	},
	trait: [
		"**Goblin**",
		"##\u25C6 Fey Ancestry##. I have Advantage on saves to avoid or end Charmed.",
		"##\u25C6 Fury of the Small##. Once per turn when I damage a creature larger than me with an attack or spell, I can deal extra damage of the same type equal to my Prof Bonus. I can do this my Prof Bonus times per Long Rest.",
		"##\u25C6 Nimble Escape##. I can take the Disengage or Hide action as a Bonus Action on each of my turns.",
	],
};

RaceList["haranir"] = {
	regExpSearch: /haranir/i,
	name: "Haranir",
	source: [["WoW", 83]],
	plural: "Haranir",
	size: 3,
	speed: { walk: { spd: 30, enc: 20 } },
	vision: [["Darkvision", 120]],
	languageProfs: [["Common or Orcish", 1], 2],
	skills: ["Nature", "Survival"],
	spellcastingAbility: [4, 5, 6],
	features: {
		"haranir magic 1": {
			name: "Haranir Magic",
			source: [["WoW", 83]],
			minlevel: 1,
			spellcastingBonus: [{
				name: "Haranir Magic",
				spells: ["druidcraft", "thorn whip"],
				selection: ["druidcraft", "thorn whip"],
				times: 2,
			}],
		},
		"haranir magic 3": {
			name: "Entangle (Haranir Magic)",
			source: [["WoW", 83]],
			minlevel: 3,
			spellFirstColTitle: "PR",
			spellcastingBonus: [{
				name: "Haranir Magic level 3",
				spells: ["entangle"],
				selection: ["entangle"],
				firstCol: "oncelr+markedbox",
			}],
		},
		"haranir magic 5": {
			name: "Spike Growth (Haranir Magic)",
			source: [["WoW", 83]],
			minlevel: 5,
			spellcastingBonus: [{
				name: "Haranir Magic level 5",
				spells: ["spike growth"],
				selection: ["spike growth"],
				firstCol: "oncelr+markedbox",
			}],
		},
	},
	trait: [
		"**Haranir**",
		"##\u25C6 Gift of the World Tree##. I have proficiency in Nature and Survival.",
		"##\u25C6 Haranir Magic##. I know *Druidcraft* and *Thorn Whip*, *Entangle* at level 3, and *Spike Growth* at level 5. I can cast Entangle and Spike Growth once per Long Rest each without a spell slot, or with a spell slot as normal; Int, Wis, or Cha is my spellcasting ability for these (choose when selecting this species).",
	],
};

RaceList["mechagnome"] = {
	regExpSearch: /mecha.?gnome/i,
	name: "Mechagnome",
	source: [["WoW", 80]],
	plural: "Mechagnomes",
	size: 4,
	speed: { walk: { spd: 30, enc: 20 } },
	languageProfs: [["Common or Orcish", 1], 2],
	dmgres: ["Poison"],
	savetxt: { adv_vs: ["Paralyzed", "Poisoned"] },
	toolProfs: [["Any tool", 2]],
	features: {
		"built for success": {
			name: "Built for Success",
			source: [["WoW", 80]],
			minlevel: 1,
			usages: "Proficiency Bonus per ",
			usagescalc: "event.value = How('Proficiency Bonus');",
			recovery: "Long Rest",
			additional: "+1d4",
		},
		"emergency fail-safe": {
			name: "Emergency Fail-Safe",
			source: [["WoW", 80]],
			minlevel: 1,
			usages: 1,
			recovery: "Short Rest",
			action: [["reaction", " (when Bloodied)"]],
		},
	},
	trait: [
		"##\u25C6 Creature Type##. Construct.",
		"##\u25C6 Built for Success##. 1d4 to a D20 Test after rolling, before the result. PB/LR.",
		"##\u25C6 Emergency Fail-Safe##. When Bloodied, Reaction: spend a Hit Point Die; regain the roll + Con mod (min 1) HP. 1/SR.",
		"##\u25C6 Mechanical Nature##. Poison Resist.; Adv. on saves to avoid or end Paralyzed or Poisoned. No Exhaustion from dehydration, malnutrition, or suffocation.",
		"##\u25C6 Sentry's Rest##. No sleep; Long Rest in 6 h if inactive and motionless, conscious.",
		"##\u25C6 Specialized Design##. Prof. with 2 tools of my choice.",
	],
};

RaceList["pandaren"] = {
	regExpSearch: /pandaren/i,
	name: "Pandaren",
	source: [["WoW", 87]],
	plural: "Pandaren",
	size: 3,
	speed: { walk: { spd: 30, enc: 20 } },
	vision: [["Darkvision", 60]],
	languageProfs: [["Common or Orcish", 1], 2],
	dmgres: [["Bludgeoning", "Bludg. (falling)"]],
	trait: [
		"**Pandaren**",
		"##\u25C6 Bouncy##. I have Resistance to Bludgeoning damage from falling.",
		"##\u25C6 Inner Peace##. When I spend Hit Point Dice after a Short Rest, I regain 1 extra HP per die spent.",
		"##\u25C6 Quaking Palm##. When I hit a creature with a melee attack on my turn, my movement doesn't provoke Opportunity Attacks from it until the end of my turn.",
	],
};

RaceList["tauren"] = {
	regExpSearch: /tauren/i,
	name: "Tauren",
	source: [["WoW", 88]],
	plural: "Tauren",
	size: 3,
	speed: { walk: { spd: 30, enc: 20 } },
	languageProfs: [["Common or Orcish", 1], 2],
	action: [
		["bonus action", "Goring Rush (after Dash 20 ft)"],
		["bonus action", "Hammering Horns (Shove)"],
	],
	features: {
		"horns": {
			name: "Horns",
			source: [["WoW", 88]],
			minlevel: 1,
			weaponOptions: [{
				regExpSearch: /^(?=.*\bhorns?\b).*$/i,
				name: "Horns",
				source: [["WoW", 88]],
				ability: 1,
				type: "Natural",
				damage: [1, 6, "piercing"],
				range: "Melee",
				description: "Replaces Unarmed Strike damage",
				abilitytodamage: true,
				selectNow: true,
			}],
		},
	},
	trait: [
		"##\u25C6 Horns##. My Unarmed Strike can deal 1d6 + Str mod Piercing damage instead of its normal damage.",
		"##\u25C6 Goring Rush##. Right after I take the Dash action on my turn and move 20+ ft, I can make an Unarmed Strike as a Bonus Action.",
		"##\u25C6 Hammering Horns##. Right after I hit a creature within 5 ft with a melee attack (Attack action) on my turn, I can Shove it as a Bonus Action, up to 10 ft.",
	],
	variants: [],
};

RaceList["troll"] = {
	regExpSearch: /troll/i,
	name: "Troll",
	source: [["WoW", 91]],
	plural: "Trolls",
	size: 3,
	speed: { walk: { spd: 30, enc: 20 } },
	vision: [["Darkvision", 60]],
	languageProfs: [["Common or Orcish", 1], 2],
	trait: [
		"##\u25C6 Bloodied Frenzy##. While Bloodied, I have Advantage on attack rolls.",
		"##\u25C6 Troll Healing##. When I spend Hit Point Dice after a Short Rest, each die regains its maximum roll + my Con mod.",
	],
	variants: [],
};

RaceList["vulpera"] = {
	regExpSearch: /vulpera/i,
	name: "Vulpera",
	source: [["WoW", 92]],
	plural: "Vulpera",
	size: 4,
	speed: { walk: { spd: 30, enc: 20 } },
	vision: [["Darkvision", 60]],
	languageProfs: [["Common or Orcish", 1], 2],
	dmgres: ["Fire"],
	trait: [
		"**Vulpera**",
		"##\u25C6 Fire Resistance##. I have Resistance to Fire damage.",
		"##\u25C6 Nose for Trouble##. The first time I take damage after I roll Initiative, I reduce that damage by my level (min 0).",
		"##\u25C6 Vulpera Nimbleness##. I can move through the space of any creature that is a size larger than me, but I can't stop there.",
	],
};

RaceList["worgen"] = {
	regExpSearch: /worgen/i,
	name: "Worgen",
	source: [["WoW", 93]],
	plural: "Worgen",
	size: 3,
	speed: { walk: { spd: 30, enc: 20 } },
	vision: [["Darkvision", 60]],
	languageProfs: [["Common or Orcish", 1], 2],
	dmgres: [["Necrotic", "Necrotic (Darkflight)"]],
	features: {
		"darkflight": {
			name: "Darkflight",
			source: [["WoW", 93]],
			minlevel: 1,
			usages: "Proficiency Bonus per ",
			usagescalc: "event.value = How('Proficiency Bonus');",
			recovery: "Long Rest",
			additional: ProficiencyBonusList.map(function (n) { return (2 * n) + " temp HP"; }),
			action: [
				["bonus action", ""],
				["reaction", "Reactive Movement (Darkflight)"],
			],
		},
	},
	trait: [
		"##\u25C6 Darkflight##. Bonus Action: bestial form for 1 min (or revert as a Bonus Action) and 2 \xD7 PB Temp HP. PB/LR. In this form my Speed +10 ft, Resistance to Necrotic, and when a creature ends its turn within 5 ft of me I can use a Reaction to move up to 10 ft without provoking Opportunity Attacks.",
		"##\u25C6 Instinctual Shift##. When I roll Initiative while I have a Darkflight use left, I can use it immediately (no action required).",
	],
};

// Draenei Eredar lineages (page 72)
AddSubRace("draenei", "draenei", {
	regExpSearch: /^(?!.*(krokul|lightforged|man.?ari))(?=.*draenei)(?=.*lineage).*$/i,
	name: "Draenei (Draenei Lineage)",
	sortname: "Draenei Lineage",
	source: [["WoW", 72]],
	plural: "Draenei (Draenei Lineage)",
	dmgres: ["Necrotic"],
	trait: [
		"**Draenei (Draenei Lineage)**",
		"##\u25C6 Eredar Lineage (Draenei)##. I have Resistance to Necrotic damage. I know *Spare the Dying*, *Healing Word* at level 3, and *Prayer of Healing* at level 5. I can cast the level 3 and 5 spells once per Long Rest each without a spell slot, or with a spell slot as normal; Int, Wis, or Cha is my spellcasting ability for these (choose when selecting the lineage).",
	].concat(RaceList["draenei"].trait),
	features: {
		"eredar lineage 1": {
			name: "Spare the Dying (Draenei Lineage)",
			source: [["WoW", 72]],
			minlevel: 1,
			spellcastingBonus: [{
				name: "Draenei level 1",
				spells: ["spare the dying"],
				selection: ["spare the dying"],
			}],
		},
		"eredar lineage 3": {
			name: "Healing Word (Draenei Lineage)",
			source: [["WoW", 72]],
			minlevel: 3,
			spellFirstColTitle: "PR",
			spellcastingBonus: [{
				name: "Draenei level 3",
				spells: ["healing word"],
				selection: ["healing word"],
				firstCol: "oncelr+markedbox",
			}],
		},
		"eredar lineage 5": {
			name: "Prayer of Healing (Draenei Lineage)",
			source: [["WoW", 72]],
			minlevel: 5,
			spellcastingBonus: [{
				name: "Draenei level 5",
				spells: ["prayer of healing"],
				selection: ["prayer of healing"],
				firstCol: "oncelr+markedbox",
			}],
		},
	},
});

AddSubRace("draenei", "krokul", {
	regExpSearch: /krokul/i,
	name: "Krokul Draenei",
	source: [["WoW", 72]],
	plural: "Krokul Draenei",
	dmgres: ["Poison"],
	trait: [
		"**Krokul Draenei**",
		"##\u25C6 Eredar Lineage (Krokul)##. I have Resistance to Poison damage. I know *Poison Spray*, *Ray of Sickness* at level 3, and *Hold Person* at level 5. I can cast the level 3 and 5 spells once per Long Rest each without a spell slot, or with a spell slot as normal; Int, Wis, or Cha is my spellcasting ability for these (choose when selecting the lineage).",
	].concat(RaceList["draenei"].trait),
	features: {
		"eredar lineage 1": {
			name: "Poison Spray (Krokul Lineage)",
			source: [["WoW", 72]],
			minlevel: 1,
			spellcastingBonus: [{
				name: "Krokul level 1",
				spells: ["poison spray"],
				selection: ["poison spray"],
			}],
		},
		"eredar lineage 3": {
			name: "Ray of Sickness (Krokul Lineage)",
			source: [["WoW", 72]],
			minlevel: 3,
			spellFirstColTitle: "PR",
			spellcastingBonus: [{
				name: "Krokul level 3",
				spells: ["ray of sickness"],
				selection: ["ray of sickness"],
				firstCol: "oncelr+markedbox",
			}],
		},
		"eredar lineage 5": {
			name: "Hold Person (Krokul Lineage)",
			source: [["WoW", 72]],
			minlevel: 5,
			spellcastingBonus: [{
				name: "Krokul level 5",
				spells: ["hold person"],
				selection: ["hold person"],
				firstCol: "oncelr+markedbox",
			}],
		},
	},
});

AddSubRace("draenei", "lightforged", {
	regExpSearch: /lightforged/i,
	name: "Lightforged Draenei",
	source: [["WoW", 72]],
	plural: "Lightforged Draenei",
	dmgres: ["Radiant"],
	trait: [
		"**Lightforged Draenei**",
		"##\u25C6 Eredar Lineage (Lightforged)##. I have Resistance to Radiant damage. I know *Sacred Flame*, *Guiding Bolt* at level 3, and *Aid* at level 5. I can cast the level 3 and 5 spells once per Long Rest each without a spell slot, or with a spell slot as normal; Int, Wis, or Cha is my spellcasting ability for these (choose when selecting the lineage).",
	].concat(RaceList["draenei"].trait),
	features: {
		"eredar lineage 1": {
			name: "Sacred Flame (Lightforged Lineage)",
			source: [["WoW", 72]],
			minlevel: 1,
			spellcastingBonus: [{
				name: "Lightforged level 1",
				spells: ["sacred flame"],
				selection: ["sacred flame"],
			}],
		},
		"eredar lineage 3": {
			name: "Guiding Bolt (Lightforged Lineage)",
			source: [["WoW", 72]],
			minlevel: 3,
			spellFirstColTitle: "PR",
			spellcastingBonus: [{
				name: "Lightforged level 3",
				spells: ["guiding bolt"],
				selection: ["guiding bolt"],
				firstCol: "oncelr+markedbox",
			}],
		},
		"eredar lineage 5": {
			name: "Aid (Lightforged Lineage)",
			source: [["WoW", 72]],
			minlevel: 5,
			spellcastingBonus: [{
				name: "Lightforged level 5",
				spells: ["aid"],
				selection: ["aid"],
				firstCol: "oncelr+markedbox",
			}],
		},
	},
});

AddSubRace("draenei", "manari", {
	regExpSearch: /man.?ari/i,
	name: "Man'ari Draenei",
	source: [["WoW", 72]],
	plural: "Man'ari Draenei",
	dmgres: ["Fire"],
	trait: [
		"**Man'ari Draenei**",
		"##\u25C6 Eredar Lineage (Man'ari)##. I have Resistance to Fire damage. I know *Fire Bolt*, *Hellish Rebuke* at level 3, and *Darkness* at level 5. I can cast the level 3 and 5 spells once per Long Rest each without a spell slot, or with a spell slot as normal; Int, Wis, or Cha is my spellcasting ability for these (choose when selecting the lineage).",
	].concat(RaceList["draenei"].trait),
	features: {
		"eredar lineage 1": {
			name: "Fire Bolt (Man'ari Lineage)",
			source: [["WoW", 72]],
			minlevel: 1,
			spellcastingBonus: [{
				name: "Man'ari level 1",
				spells: ["fire bolt"],
				selection: ["fire bolt"],
			}],
		},
		"eredar lineage 3": {
			name: "Hellish Rebuke (Man'ari Lineage)",
			source: [["WoW", 72]],
			minlevel: 3,
			spellFirstColTitle: "PR",
			spellcastingBonus: [{
				name: "Man'ari level 3",
				spells: ["hellish rebuke"],
				selection: ["hellish rebuke"],
				firstCol: "oncelr+markedbox",
			}],
		},
		"eredar lineage 5": {
			name: "Darkness (Man'ari Lineage)",
			source: [["WoW", 72]],
			minlevel: 5,
			spellcastingBonus: [{
				name: "Man'ari level 5",
				spells: ["darkness"],
				selection: ["darkness"],
				firstCol: "oncelr+markedbox",
			}],
		},
	},
});

// Tauren lineages (page 88)
AddSubRace("tauren", "mulgore", {
	regExpSearch: /mulgore/i,
	name: "Mulgore Tauren",
	source: [["WoW", 88]],
	plural: "Mulgore Tauren",
	abilitySave: [1, 3, 5],
	trait: [
		"##\u25C6 War Stomp##. Instead of one attack, each creature I choose within 5 ft makes a Con save or is Stunned until the end of my turn. Not while Prone, flying, climbing, or swimming. DC 8 + PB + Str, Con, or Wis mod (my choice).",
	].concat(RaceList["tauren"].trait),
});

AddSubRace("tauren", "highmountain", {
	regExpSearch: /highmountain/i,
	name: "Highmountain Tauren",
	source: [["WoW", 88]],
	plural: "Highmountain Tauren",
	abilitySave: [1, 3, 5],
	action: [
		["bonus action", "Goring Rush (after Dash 20 ft)"],
		["bonus action", "Hammering Horns (Shove)"],
		["action", "Bull Rush"],
	],
	trait: [
		"##\u25C6 Bull Rush##. Action: I move up to my Speed, no Opportunity Attacks, through others' spaces. Each Medium or smaller creature whose space I enter: Str save or PB + Str mod dmg and Prone (1/turn each). DC 8 + PB + Str, Con, or Wis mod (my choice).",
	].concat(RaceList["tauren"].trait),
});

AddSubRace("tauren", "taunka", {
	regExpSearch: /taunka/i,
	name: "Taunka",
	source: [["WoW", 88]],
	plural: "Taunka",
	dmgres: ["Cold"],
	extraAC: [{ mod: 1, name: "Shaggy Hide", text: "I gain a +1 bonus to AC." }],
	trait: [
		"**Taunka**",
		"##\u25C6 Tauren Lineage (Taunka)##. My shaggy hide gives me a +1 bonus to AC and Resistance to Cold damage.",
	].concat(RaceList["tauren"].trait),
});

// Troll lineages (page 91)
AddSubRace("troll", "amani", {
	regExpSearch: /amani/i,
	name: "Amani Troll",
	source: [["WoW", 91]],
	plural: "Amani Trolls",
	trait: [
		"**Amani Troll**",
		"##\u25C6 Troll Lineage (Amani)##. Whenever I spend Heroic Inspiration, I regain 1 expended Hit Point Die.",
	].concat(RaceList["troll"].trait),
});

AddSubRace("troll", "darkspear", {
	regExpSearch: /darkspear/i,
	name: "Darkspear Troll",
	source: [["WoW", 91]],
	plural: "Darkspear Trolls",
	trait: [
		"**Darkspear Troll**",
		"##\u25C6 Troll Lineage (Darkspear)##. When I take the Dash action, Difficult Terrain of ice, rubble, snow, or undergrowth costs me no extra movement until the end of my turn.",
	].concat(RaceList["troll"].trait),
});

AddSubRace("troll", "zandalari", {
	regExpSearch: /zandalari/i,
	name: "Zandalari Troll",
	source: [["WoW", 91]],
	plural: "Zandalari Trolls",
	trait: [
		"**Zandalari Troll**",
		"##\u25C6 Troll Lineage (Zandalari)##. If I roll a 1 on the d20 for a D20 Test, I gain Heroic Inspiration at the end of the current turn.",
	].concat(RaceList["troll"].trait),
});

// Dwarf, Gnome, Human and Orc: the WoW versions copy the 2024 PHB species. Dwarf and Orc are unchanged, Human only rewords Versatile,
// and the WoW Gnome's single lineage is the built-in Rock Gnome lineage, so players use the built-in species (Gnome: pick Rock Gnome).
// Elf: the WoW Azeroth Elven Lineage adds four lineages to the built-in Elf; its High Elf is identical to the built-in High Elf.

// Elf Azeroth Elven lineages (page 76)
AddSubRace("elf", "blood", {
	regExpSearch: /^((?=.*sin.?dorei)|(?=.*\bblood\b)(?=.*\b(elfs?|elves|elven)\b)).*$/i,
	name: "Blood Elf",
	source: [["WoW", 76]],
	plural: "Blood Elves",
	languageProfs: [["Common or Orcish", 1], 2],
	spellcastingAbility: [4, 5, 6],
	trait: [
		"##\u25C6 Blood Elf Lineage##. I know *Prestidigitation* (swap for another Wizard cantrip after a LR), *Detect Magic* at 3, and *Arcane Vigor* at 5. The level 3 and 5 spells: 1/LR each without a slot, or with one as normal; Int, Wis, or Cha is my ability (my choice).",
	].concat(RaceList["elf"].trait),
	features: {
		"blood lineage 1": {
			name: "Prestidigitation (Blood Elf Lineage)",
			source: [["WoW", 76]],
			minlevel: 1,
			spellFirstColTitle: "PR",
			spellcastingPreparedCantrips: { "class": ["wizard"] },
			spellcastingBonus: [{
				name: "Blood Elf level 1",
				"class": ["wizard"],
				level: [0, 0],
				selection: ["prestidigitation"],
			}],
		},
		"blood lineage 3": {
			name: "Detect Magic (Blood Elf Lineage)",
			source: [["WoW", 76]],
			minlevel: 3,
			spellFirstColTitle: "PR",
			spellcastingBonus: [{
				name: "Blood Elf level 3",
				spells: ["detect magic"],
				selection: ["detect magic"],
				firstCol: "oncelr+markedbox",
			}],
		},
		"blood lineage 5": {
			name: "Arcane Vigor (Blood Elf Lineage)",
			source: [["WoW", 76]],
			minlevel: 5,
			spellcastingBonus: [{
				name: "Blood Elf level 5",
				spells: ["arcane vigor"],
				selection: ["arcane vigor"],
				firstCol: "oncelr+markedbox",
			}],
		},
	},
});

AddSubRace("elf", "night", {
	regExpSearch: /^((?=.*kal.?dorei)|(?=.*\bnight\b)(?=.*\b(elfs?|elves|elven)\b)).*$/i,
	name: "Night Elf",
	source: [["WoW", 76]],
	plural: "Night Elves",
	languageProfs: [["Common or Orcish", 1], 2],
	spellcastingAbility: [4, 5, 6],
	skills: ["Stealth"],
	action: [["bonus action", "Hide (Night Elf, in Dim Light/Darkness)"]],
	trait: [
		"##\u25C6 Night Elf Lineage##. Stealth proficiency; in Dim Light or Darkness I can Hide as a Bonus Action. I know *Longstrider* at 3 and *Pass without Trace* at 5: 1/LR each without a slot, or with one as normal; Int, Wis, or Cha is my ability (my choice).",
	].concat(RaceList["elf"].trait),
	features: {
		"night lineage 3": {
			name: "Longstrider (Night Elf Lineage)",
			source: [["WoW", 76]],
			minlevel: 3,
			spellFirstColTitle: "PR",
			spellcastingBonus: [{
				name: "Night Elf level 3",
				spells: ["longstrider"],
				selection: ["longstrider"],
				firstCol: "oncelr+markedbox",
			}],
		},
		"night lineage 5": {
			name: "Pass without Trace (Night Elf Lineage)",
			source: [["WoW", 76]],
			minlevel: 5,
			spellcastingBonus: [{
				name: "Night Elf level 5",
				spells: ["pass without trace"],
				selection: ["pass without trace"],
				firstCol: "oncelr+markedbox",
			}],
		},
	},
});

AddSubRace("elf", "nightborne", {
	regExpSearch: /nightborne|shal.?dorei/i,
	name: "Nightborne",
	source: [["WoW", 76]],
	plural: "Nightborne",
	languageProfs: [["Common or Orcish", 1], 2],
	spellcastingAbility: [4, 5, 6],
	vision: [["Darkvision", 120]],
	trait: [
		"##\u25C6 Nightborne Lineage##. Darkvision 120 ft. I know *Arcane Pulse*, *Faerie Fire* at 3, and *Darkness* at 5: 1/LR each without a slot, or with one as normal; Int, Wis, or Cha is my ability (my choice).",
	].concat(RaceList["elf"].trait),
	features: {
		"nightborne lineage 1": {
			name: "Arcane Pulse (Nightborne Lineage)",
			source: [["WoW", 76]],
			minlevel: 1,
			spellcastingBonus: [{
				name: "Nightborne level 1",
				spells: ["arcane pulse"],
				selection: ["arcane pulse"],
			}],
		},
		"nightborne lineage 3": {
			name: "Faerie Fire (Nightborne Lineage)",
			source: [["WoW", 76]],
			minlevel: 3,
			spellFirstColTitle: "PR",
			spellcastingBonus: [{
				name: "Nightborne level 3",
				spells: ["faerie fire"],
				selection: ["faerie fire"],
				firstCol: "oncelr+markedbox",
			}],
		},
		"nightborne lineage 5": {
			name: "Darkness (Nightborne Lineage)",
			source: [["WoW", 76]],
			minlevel: 5,
			spellcastingBonus: [{
				name: "Nightborne level 5",
				spells: ["darkness"],
				selection: ["darkness"],
				firstCol: "oncelr+markedbox",
			}],
		},
	},
});

AddSubRace("elf", "void", {
	regExpSearch: /^((?=.*ren.?dorei)|(?=.*\bvoid\b)(?=.*\b(elfs?|elves|elven)\b)).*$/i,
	name: "Void Elf",
	source: [["WoW", 76]],
	plural: "Void Elves",
	languageProfs: [["Common or Orcish", 1], 2],
	spellcastingAbility: [4, 5, 6],
	vision: [["Darkvision", 120]],
	trait: [
		"##\u25C6 Void Elf Lineage##. Darkvision 120 ft. I know *Mind Sliver*, *Entropic Embrace* at 3, and *Misty Step* at 5: 1/LR each without a slot, or with one as normal; Int, Wis, or Cha is my ability (my choice).",
	].concat(RaceList["elf"].trait),
	features: {
		"void lineage 1": {
			name: "Mind Sliver (Void Elf Lineage)",
			source: [["WoW", 76]],
			minlevel: 1,
			spellcastingBonus: [{
				name: "Void Elf level 1",
				spells: ["mind sliver"],
				selection: ["mind sliver"],
			}],
		},
		"void lineage 3": {
			name: "Entropic Embrace (Void Elf Lineage)",
			source: [["WoW", 76]],
			minlevel: 3,
			spellFirstColTitle: "PR",
			spellcastingBonus: [{
				name: "Void Elf level 3",
				spells: ["entropic embrace"],
				selection: ["entropic embrace"],
				firstCol: "oncelr+markedbox",
			}],
		},
		"void lineage 5": {
			name: "Misty Step (Void Elf Lineage)",
			source: [["WoW", 76]],
			minlevel: 5,
			spellcastingBonus: [{
				name: "Void Elf level 5",
				spells: ["misty step"],
				selection: ["misty step"],
				firstCol: "oncelr+markedbox",
			}],
		},
	},
});

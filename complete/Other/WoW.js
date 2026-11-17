/*	-WHAT IS THIS?-
	This file adds optional material to "MPMB's Character Record Sheet" found at https://flapkan.com/mpmb/charsheets
	Import this file using the "Add Extra Materials" bookmark.

	-KEEP IN MIND-
	It is recommended to enter the code in a fresh sheet before adding any other information (i.e. before making your character with it).
*/

/*	-INFORMATION-
	Subject:	Class
	Effect:		This script adds the World of Warcraft versions of the Death Knight, Demon Hunter, Evoker, Hunter, Mage, Priest, Shaman and Warrior classes, the World of Warcraft class features for the Death Knight, Demon Hunter and Shaman, the Path of the Elements, Path of the Spiritual Guardian, Discipline Domain, Shadow Domain, Oath of the Holy, Warrior of Mystic Brews and Swashbuckler subclasses, the Rune Strike, Prayer of Mending, Psychic Horror, Shadow Word: Pain and Void Eruption spells, and fixes for copied subclasses whose regex or class-level checks needed the WoW class names.
	Code by:	Rocky
	Date:		2026-11-17 (sheet v24)
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

appendWoWDescription(dk.features["faithful steed"], [
	"When I cast *Find Steed*, the Otherworldly Steed can be Undead.",
	"An Undead steed deals Necrotic damage with its Otherworldly Slam and gains Ghostly Stride (Bonus Action; recharges after a Long Rest).",
	"Ghostly Stride: the steed and its rider can move through other creatures and objects this turn as if they were Difficult Terrain, and each takes 1d10 Force damage if it ends its turn inside an object.",
]);

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

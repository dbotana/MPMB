/*	-WHAT IS THIS?-
	This file adds optional material to "MPMB's Character Record Sheet" found at https://flapkan.com/mpmb/charsheets
	Import this file using the "Add Extra Materials" bookmark.

	-KEEP IN MIND-
	It is recommended to enter the code in a fresh sheet before adding any other information (i.e. before making your character with it).
*/

/*	-INFORMATION-
	Subject:	Class
	Effect:		This script adds the World of Warcraft versions of the Death Knight, Demon Hunter, Evoker, Hunter, Mage, Priest, Shaman and Warrior classes, the World of Warcraft class features for the Death Knight, Demon Hunter and Shaman, and the Rune Strike spell.
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

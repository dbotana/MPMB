/*	-WHAT IS THIS?-
    This file adds optional material to "MPMB's Character Record Sheet" found at https://flapkan.com/mpmb/charsheets
    Import this file using the "Add Extra Materials" bookmark.
    -KEEP IN MIND-
    It is recommended to enter the code in a fresh sheet before adding any other information (i.e. before making your character with it).
*/

/*	-INFORMATION-
    Subject:	Push
    Effect:		This script adds the Push spell from second edition
    Code by:	Rocky
    Date:		2026-10-03 (sheet v13)
*/

var iFileName = "push2e.js";

RequiredSheetVersion("13.2.0");

SourceList["P2E"] = {
    name: "Push Homebrew",
    abbreviation: "P2E",
    group: "Rocky's Homebrew",
    date: "2026/10/03"
};

SpellsList["push"] = {
		name : "Push",
		classes : ["sorcerer", "wizard"],
		source : ["P2E", 0],
		level : 1,
		school : "Evoc",
		time : "1 a",
		range : "30 ft",
		components : "V,S,M",
		compMaterial : "A pinch of powdered brass",
		duration : "Instantaneous",
		save : "Dex",
		description : "1+1/SL Med crea save or push 20 ft & prone; save: 10 ft; or 50+50/SL lb obj 20 ft",
		descriptionFull : "A beam of magical force emits from you and strikes one Medium-sized creature of your choice up to 30 feet away. The creature must make a Dexterity saving throw. On a failed save, the creature is pushed 20 feet away from the caster and knocked prone. On a successful save, the creature is pushed 10 feet away from the caster and is not knocked prone. Each square entered as a result of the Push must be farther away from the caster than the last square entered. You can focus the spell on an unattended inanimate object weighing no more than 50 pounds. It is pushed 20 feet, provided that it is not held or fastened in place." + AtHigherLevels + "When this spell is cast using a spell slot of 2nd level or higher, you can create one additional beam for each spell slot level above 1st. If targeting an inanimate object, you can affect an additional 50 pounds for each spell slot level above 1st."
};

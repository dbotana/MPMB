/*	-WHAT IS THIS?-
    This file adds optional material to "MPMB's Character Record Sheet" found at https://flapkan.com/mpmb/charsheets
    Import this file using the "Add Extra Materials" bookmark.
    -KEEP IN MIND-
    It is recommended to enter the code in a fresh sheet before adding any other information (i.e. before making your character with it).
*/

/*	-INFORMATION-
    Subject:	Carrots
    Effect:		This script adds my homebrew spell to appease a unicorn
    Code by:	Rocky
    Date:		2025-1-31 (sheet v13)
*/

var iFileName = "CreateCarrot.js";

RequiredSheetVersion("13.2.0");

SourceList["Crt"] = {
    name: "Carrot Homebrew",
    abbreviation: "Crt",
    group: "Rocky's Homebrew",
    date: "2025/01/31"
};

SpellsList["create carrots"] = {
		name : "Create Carrots",
		classes : ["artificer", "cleric", "paladin"],
		source : ["CRT", 420],
		level : 1,
		school : "Conj",
		time : "1 a",
		range : "30 ft",
		components : "V,S",
		duration : "Instantaneous",
		description : "Create 15 carrots on the ground or in containers. The carrots are fresh and edible.",
		descriptionFull : "You create a lot of carrots on the ground or in containers within range, enough to sustain one unicorn for 4 minutes.",
		atHigherLevels : "When you cast this spell using a spell slot of 2nd level or higher, the number of carrots created increases by 15 for each slot level above 1st."
};
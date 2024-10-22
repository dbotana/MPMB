/*	-WHAT IS THIS?-
	This file adds optional material to "MPMB's Character Record Sheet" found at https://flapkan.com/mpmb/charsheets
	Import this file using the "Add Extra Materials" bookmark.
	-KEEP IN MIND-
	It is recommended to enter the code in a fresh sheet before adding any other information (i.e. before making your character with it).
*/

/*	-INFORMATION-
	Subject:	Race
	Effect:		This script adds a race called "Leafling"
	Code by:	Rocky
	Date:		2024-10-22 (sheet v13)
*/
var iFileName = "Leafling.js";

RequiredSheetVersion("13.2.0");

SourceList["Lf"] = {
    name : "Leafling Race Homebrew",
    abbreviation : "Lf",
    abbreviationSpellsheet : "Lf",
    group : "Rocky's Homebrew",
    date : "2024/10/22"
};

RaceList["leafling"] = {
	regExpSearch : /^(?=.*leafling).*$/i,
	name : "Leafling",
	sortname : "Leafling",
	source : [["Custom", 0]],
	plural : "Leaflings",
	size : 4, // Small
    speed : {
        walk : { spd : 30, enc : 20 },
        fly : { spd : 30, enc : 0 }
    },
	creatureType : "fey",
	languageProfs : ["Common", 1],
	scoresGeneric : true,
	trait : "Leafling"+
		"\n \u2022 Fairy Magic: I gain additional spells at certain levels. I can cast them each once per long rest and also using spell slots."+
		"\n \u2022 Flight: I have a flying speed equal to my walking speed. I can't use this flying speed in medium or heavy armor."+
		"\n \u2022 Healing Hands: Once per long rest as an action, I can touch a creature to heal it for a number of d4s equal to my proficiency bonus.",
	spellcastingAbility : [4, 5, 6], // Choose one: Intelligence, Wisdom, Charisma
	spellcastingBonus : [{
		name : "Fairy Magic (level 1)",
		spells : ["druidcraft"],
		selection : ["druidcraft"],
		firstCol : 'atwill'
	}, {
		name : "Fairy Magic (level 3)",
		spells : ["sanctuary"],
		selection : ["sanctuary"],
		firstCol : 'oncelr'
	}, {
		name : "Fairy Magic (level 5)",
		spells : ["wither and bloom"],
		selection : ["wither and bloom"],
		firstCol : 'oncelr'
	}],
    features : {
		"healing hands" : {
			name : "Healing Hands",
			usages : 1,
			minlevel : 1,
			recovery : "long rest",
			action : [["action", "Healing Hands (heal PB*d4)"]]
		},
    }
};
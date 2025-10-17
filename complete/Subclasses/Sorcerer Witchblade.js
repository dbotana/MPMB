/*
    -WHAT IS THIS?-
    This file adds optional material to MPMB's Character Record Sheet.
    Import using 'Add Extra Materials' bookmark.
    -INFO-
    Subclass: Sorcerer - Witchblade
    Source: Eink's Arcana (Homebrew) https://www.pinterest.com/pin/333829391149291848/
    Date: 2025-10-17
    Code by: Rocky and TrackAtNite (blade spell inclusion)
    RequiredSheetVersion = 13
*/

var iFileName = "Sorcerer - Witchblade Homebrew.js";
RequiredSheetVersion(13);

SourceList["EAWB"] = {
    name : "Eink's Arcana: Witchblade",
    abbreviation : "EAWB",
    group : "Homebrew",
    url : "https://www.pinterest.com/pin/333829391149291848/",
    date : "2025-10-17"
};

RunFunctionAtEnd(function () {
    // Iterate through all spells in SpellsList
    for (var spell in SpellsList) {
        var spellObj = SpellsList[spell];

        // Check if the spell name contains "smite", "strike", or "blade"
        if ((/smite|strike|blade/i).test(spellObj.name + (spellObj.nameAlt || "") + (spellObj.nameShort || ""))) {
            // Add "sorcerer" to the spell's classes if not already present
            if (spellObj.classes && spellObj.classes.indexOf("sorcerer") === -1) {
                spellObj.classes.push("sorcerer");
            }
        }
    }
});
AddSubClass("sorcerer", "witchblade", {
    regExpSearch : /^(?=.*witchblade)(?=.*sorcerer).*$/i,
    subname : "Witchblade",
    source : ["EAWB", 0],
    fullname : "Witchblade Sorcerer",

    features : {
        "subclassfeature1" : {
            name : "Witchblade Magic",
            source : ["EAWB", 0],
            minlevel : 1,
            description : "\n   My magic can infuse attacks with mystical power. Any spell with 'blade', 'strike', or 'smite' in its name is a sorcerer spell for me. At 1st, I learn two such spells, not counting them against sorcerer spells known. The spells must be cantrips or up to a spell level I can cast. At 6th & 14th, I learn one more. Whenever I gain sorcerer level, I may replace one spell gained with a new selection.",
            spellcastingExtra : [],
            additional : levels.map(function(n) {
                if (n < 1) return "";
                if (n < 6) return "2 bonus blade/strike/smite spells";
                if (n < 14) return "3 bonus blade/strike/smite spells";
                return "4 bonus blade/strike/smite spells";
            })
        },
        "subclassfeature1.1" : {
            name : "Arcane Warrior",
            source : ["EAWB", 0],
            minlevel : 1,
            description : "\n   I may use Charisma for attack/damage rolls with melee weapons. I gain proficiency with all simple and martial melee weapons. I may use a melee weapon as an arcane focus.",
            weaponProfs : [true, true],
            calcChanges : {
				atkAdd : [
					function (fields, v) {
						if (v.isMeleeWeapon && What('Cha Mod') > What(AbilityScores.abbreviations[fields.Mod - 1] + ' Mod')) {
							fields.Mod = 6;
						};
					},
					"For melee weapons, I can use my Charisma instead of Strength or Dexterity."
				]
			}
        },
        "subclassfeature6" : {
            name : "War Witch",
            source : ["EAWB", 0],
            minlevel : 6,
            description : "\n   When I use my action to cast a sorcerer spell, I may make a melee weapon attack as a bonus action."
        },
        "subclassfeature6.1" : {
            name : "Magical Armament",
            source : ["EAWB", 0],
            minlevel : 6,
            description : "\n   As a bonus action, I may create or summon any two melee weapons with the 'light' property as magical weapons until I lose possession or dismiss them. I may also create a set of magical armor and add my Charisma modifier to my base AC. I can use a reaction and spend sorcery points to reduce incoming damage by 5 per point spent. I may dismiss the armor as a bonus action.",
            armorProfs : [true],
            armorOptions : [{
                regExpSearch : /^(?=.*magical)(?=.*armor).*$/i,
                name : "Magical Armor",
                ac : "13+Cha",
                source : ["EAWB", 0],
                selectNow : true
            }]
        },
        "subclassfeature10" : {
            name : "Witch Walking",
            source : ["EAWB", 0],
            minlevel : 10,
            description : "\n   As a bonus action, I may teleport up to 15 ft to an unoccupied space I can see."
        },
        "subclassfeature18" : {
            name : "Magical Flurry",
            source : ["EAWB", 0],
            minlevel : 18,
            description : "\n   When I make a melee weapon attack using War Witch, I may spend up to 2 sorcery points for additional attacks (1 per point spent)."
        }
    }
});
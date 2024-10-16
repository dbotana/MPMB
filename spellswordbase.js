/*	-WHAT IS THIS?-
	This file adds optional material to "MPMB's Character Record Sheet" found at https://flapkan.com/mpmb/charsheets
	Import this file using the "Add Extra Materials" bookmark.
	-KEEP IN MIND-
	It is recommended to enter the code in a fresh sheet before adding any other information (i.e. before making your character with it).
*/

/*	-INFORMATION-
	Subject:	Class
	Effect:		This script adds a class called "Spell Sword" and its subclasses.
	Code by:	Rocky
	Date:		2024-10-16 (sheet v13)
*/
var iFileName = "SpellSword.js";

RequiredSheetVersion(13);

SourceList["SSH"] = {
    name : "Spell Sword Homebrew",
    abbreviation : "SSH",
    abbreviationSpellsheet : "SS",
    group : "Rocky's Homebrew",
    date : "2024/10/16"
};

// Define the Spell Sword spell list
[
    // Cantrips (0 Level)
    "acid splash", "blade ward", "booming blade", "control flames", "dancing lights", "fire bolt", "frostbite", "green-flame blade", "light", "mage hand", "message", "minor illusion", "poison spray", "prestidigitation", "ray of frost", "shocking grasp", "sword burst", "thunderclap", "true strike",

    // 1st Level
    "alarm", "arcane needle", "blazing ring", "burning hands", "chromatic orb", "color spray", "comprehend languages", "detect magic", "expeditious retreat", "false life", "feather fall", "flame thrust", "frostbite beam", "grease", "ice knife", "identify", "jump", "longstrider", "mage armor", "ray of sickness", "shield", "silent image", "sleep", "snare", "thunderwave", "witch bolt",

    // 2nd Level
    "aganazzar's scorcher", "arcane lock", "arcane javelin", "blindness/deafness", "blur", "cloud of daggers", "darkness", "darkvision", "detect thoughts", "dragon's breath", "enlarge/reduce", "glacial shroud", "gust of wind", "invisibility", "knock", "levitate", "locate object", "magic weapon", "mind spike", "mirror image", "phantom strike", "poisonous wave", "ray of enfeeblement", "rope trick", "scorching ray", "see invisibility", "shadow blade", "shatter", "silence", "spider climb", "web",

    // 3rd Level
    "blink", "counterspell", "dispel magic", "fear", "fireball", "fly", "frost lance", "gaseous form", "haste", "hypnotic pattern", "lightning bolt", "major image", "melf's minute meteors", "phantom steed", "protection from energy", "shadowblight claw", "sleet storm", "slow", "sonic burst", "thunder step", "tidal wave", "tongues", "vampiric touch", "wall of sand", "water breathing",

    // 4th Level
    "arcane chains", "banishment", "chaotic blastwave", "control water", "dimension door", "elemental bane", "fire shield", "greater invisibility", "hallucinatory terrain", "ice storm", "lightning arc", "phantasmal killer", "polymorph", "sickening radiance", "stoneskin", "storm sphere", "wall of fire",

    // 5th Level
    "animate object", "chthonic fissure", "cloudkill", "cone of cold", "ethereal strike", "far step", "immolation", "mislead", "modify memory", "skill empowerment", "steel wind strike", "synaptic static", "telekinesis", "teleportation circle", "wall of stone"
].forEach(function (s) {if(SpellsList[s] && SpellsList[s].classes && SpellsList[s].classes.indexOf("spellsword") === -1) SpellsList[s].classes.push("spellsword");});

ClassList["spellsword"] = {
    regExpSearch : /^(?=.*spell)(?=.*sword).*$/i,
    name : "Spell Sword",
    source : ["SSH", 0],
    primaryAbility : "4",
    abilitySave : 4,
    prereqs : "Dexterity and Intelligence 13",
    die : 8,
    saves : ["Con", "Int"],
    improvements: [0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 5, 5],
    armor : [
            [true, true, false, false],
    ],
    weaponProfs : [
            [true, false, ["longswords", "rapiers", "scimitars", "shortswords"]],
    ],
    spellcastingFactor : 2,
    spellcastingFactorRoundupMulti : true,
    spellcastingKnown : {
		cantrips : [2, 2, 2, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
		spells : [3, 4, 5, 5, 6, 6, 7, 7, 9, 9, 10, 10, 11, 11, 12, 12, 14, 14, 15, 15]
	},
    attacks : [1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
    subclasses : ["Eldritch Order", []],
    features : {
        "spellcasting" : {
            name : "Spellcasting",
            source : ["SSH", 0],
            minlevel : 1,
            description : "I can cast spells using my mental codex; Intelligence is my spellcasting ability.",
            additional : levels.map(function (n, idx) {
                return [2, 2, 2, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4][idx] + " cantrips known";
            })
        },
        "spellstrike" : {
            name : "Spellstrike",
            source : ["SSH", 0],
            minlevel : 1,
            description : desc([
                "When you cast a spellsword spell of 1st+ level as an action, you can make a melee weapon attack as a bonus action. The spell requirements:",
                "Ranged Spell Attack: Convert it to a melee spell attack with a range of Touch, removing disadvantage when within 5 feet of an enemy.",
                "Area of Effect: The spell must naturally have a cone or line area originating from you.",
                "Melee Spell Attack: These remain unchanged. Regain 1 use after short rest, all after long rest."
            ]),
            usagescalc: levels.map(function(n) { return n < 3 ? "1" : n < 8 ? "2" : n < 13 ? "3" : n < 18 ? "4" : "5"; }),
            recovery : "long rest"
        },
        "mental recall" : {
            name: "Mental Recall",
            source: ["SSH", 0],
            minlevel: 2,
            description: "Recover one expended spell slot after a short rest.",
            recovery: "long rest",
            usages: 1
        },
        "arcane maneuvers" : {
            name: "Arcane Maneuvers",
            source: ["SSH", 0],
            minlevel: 2,
            description: "Use a bonus action to Dash or Disengage or gain advantage on concentration saves before start of next turn.",
            action : [["bonus action", "Dash or Disengage or Concentration advantage"]]
        },
        "extra attack" : {
            name: "Extra Attack",
            source: ["SSH", 0],
            minlevel: 5,
            description: "Attack twice when taking the Attack action. You can cast one of your cantrips (casting time of one action) in place of one attack."
        },
        "agile reflexes" : {
            name: "Agile Reflexes",
            source: ["SSH", 0],
            minlevel: 6,
            description: "Gain proficiency in Dexterity saving throws (or Strength if already prof). Become immune to effects of your own spells.",
			saves : ["Dex"],
			prereqeval : function(v) { return tDoc.getField("Dex ST Prof").isBoxChecked(0) ? false : true; }
        },
        "spellsight" : {
            name: "Spellsight",
            source: ["SSH", 0],
            minlevel: 9,
            description: "Concentration: detect magic and see invisible entities within 30 feet for one minute. While active, touch an object to cast identify on it.",
            recovery: "short rest",
            action : [["action", "Spell Sight"]],
            usages: 1
        },
        "arcane slip" : {
            name: "Arcane Slip",
            source: ["SSH", 0],
            minlevel: 10,
            description: "Teleport to unoccupied space within 30 feet before or after using Spellstrike."
        },
        "swift enchantment" : {
            name: "Swift Enchantment",
            source: ["SSH", 0],
            minlevel: 14,
            description: "Cast a spell with a casting time of one action as a bonus action once per short or long rest.",
            recovery: "short rest",
            usages: 1,
            action : [["bonus action", "Swift Enchantment"]]
        },
        "improved spellstrike" : {
            name: "Improved Spellstrike",
            source: ["SSH", 0],
            minlevel: 18,
            description: "Ignore limitations of Spellstrike and use any spell with it."
        },
        "arcane ascendancy" : {
            name: "Arcane Ascendancy",
            source: ["SSH", 0],
            minlevel: 20,
            description: "Increase Intelligence and Dexterity scores by two. Deal 1d10 extra damage with Spellstrike of spell damage type (Force if none).",
            scores: [0, 2, 0, 2, 0, 0],
		    scoresMaximum: [0, 25, 0, 25, 0, 0],
        }
    }
};
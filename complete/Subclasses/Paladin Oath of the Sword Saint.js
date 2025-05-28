/*	-WHAT IS THIS?-
	This file adds optional material to "MPMB's Character Record Sheet" found at https://flapkan.com/mpmb/charsheets
	Import this file using the "Add Extra Materials" bookmark.
	-KEEP IN MIND-
	It is recommended to enter the code in a fresh sheet before adding any other information (i.e. before making your character with it).
*/

/*	-INFORMATION-
	Subject:	Class
	Effect:		This script adds the Oath of the Sword Saint, a Paladin subclass (Homebrew) made by Alan Grant https://docs.google.com/document/d/1BMFUC31pfY3rb9wWlXxDxT58emCYC9P0qxtN8uTJE1c/edit?tab=t.0
	Code by:	Rocky
	Date:		2024-11-18 (sheet v13)
*/
var iFileName = "Paladin - Oath of the Sword Saint.js";
RequiredSheetVersion(13);

SourceList["OSS"] = {
    name: "Homebrew: Oath of the Sword Saint",
    abbreviation: "OSS",
    group: "Homebrew",
    date: "2024-11-18"
};

AddSubClass("paladin", "oath of the sword saint", {
    regExpSearch: /^(?=.*paladin)(?=.*sword)(?=.*saint).*$/i,
    subname: "Oath of the Sword Saint",
    source: ["OSS", 0],
    
    spellcastingExtra: ["zephyr strike", "shield", "misty step", "branding smite", "haste", "blink", "staggering smite", "freedom of movement", "steel wind strike", "swift quiver"],

    features: {
        "subclassfeature3": {
            name: "Channel Divinity: Sword Saint",
            source: ["OSS", 0],
            minlevel: 3,
            description: desc([
                "I gain two Channel Divinity options:",
                "\u2022 Perfect Strike: As an action, I can add my paladin level to a sword attack's damage.",
                "\u2022 Defensive Stance: As an action, I can add my Charisma modifier to my AC for 1 minute while wielding a sword."
            ]),
            action: [["action", "Perfect Strike"], ["action", "Defensive Stance"]]
        },
        "subclassfeature5": {
            name: "Wings of the Sword Saint",
            source: ["OSS", 0],
            minlevel: 5,
            description: desc([
                "As a bonus action, I summon ethereal blade-like wings for 1 minute, gaining a flying speed of 30 ft.",
                "\u2022 Keen Edge Aura (10 ft): Allies gain a bonus to melee attack rolls and saving throws equal to my Charisma modifier.",
                "\u2022 Cutting Presence Aura (10 ft): Enemies have disadvantage on saves against my slashing or force damage abilities.",
                "\u2022 My sword attacks deal an additional 1d4 force damage while wings are active."
            ]),
            recovery: "long rest",
            usages: 1,
            action: [["bonus action", ""], ["reaction", ""], ["attack", ""]]
        },
        "subclassfeature7": {
            name: "Aura of Precision",
            source: ["OSS", 0],
            minlevel: 7,
            description: desc([
                "While wielding a sword, I and allies within range gain a bonus to weapon attack rolls equal to my Charisma modifier.",
                "\u2022 My sword attacks score a critical hit on a roll of 19 or 20."
            ]),
            additional: levels.map(function (n) {
                return n < 10 ? "10-foot aura" : "30-foot aura";
            })
        },
        "subclassfeature15": {
            name: "Sword Mastery",
            source: ["OSS", 0],
            minlevel: 15,
            description: desc([
                "\u2022 Counterattack: When a creature misses me with a melee attack, I can use my reaction to make a melee weapon attack.",
                "\u2022 Flawless Footwork: While wielding a sword, I don't provoke opportunity attacks and gain +10 ft movement speed."
            ]),
            action : [["reaction", "Counterattack"]]
        },
        "subclassfeature20": {
            name: "Saint of Blades",
            source: ["OSS", 0],
            minlevel: 20,
            description : desc([
                "As a bonus action, I enter a state of perfect swordsmanship for 1 minute:",
                "\u2022 Perfect Blade: My sword attacks automatically hit unless I roll a natural 1.",
                "\u2022 Unyielding Defense: I have resistance to all damage while wielding a sword.",
                "\u2022 Blade of the Saint: I can make one additional attack whenever I take the Attack action with a sword."
            ]),
            recovery : "long rest",
            usages : 1,
            action : ["bonus action", ""]
        }
    }
});
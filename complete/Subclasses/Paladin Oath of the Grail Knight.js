/*	-WHAT IS THIS?-
	This file adds optional material to "MPMB's Character Record Sheet" found at https://flapkan.com/mpmb/charsheets
	Import this file using the "Add Extra Materials" bookmark.
	-KEEP IN MIND-
	It is recommended to enter the code in a fresh sheet before adding any other information (i.e. before making your character with it).
*/

/*	-INFORMATION-
	Subject:	Background
	Effect:		This script adds the Paladin subclass Oath of the Grail Knight from the Templar and Tyrants https://www.makeyourgamelegendary.com/product/legendary-classes-templars-tyrants/
	Date:		2024-11-18 (sheet v13)
*/
var iFileName = "Paladin - Oath of the Grail Knight.js";
RequiredSheetVersion(13);

SourceList.OoGK = {
    name: "Paladin - Oath of the Grail Knight",
    abbreviation: "OoGK",
    group: "Homebrew",
    url: "https://www.makeyourgamelegendary.com/product/legendary-classes-templars-tyrants/",
    date: "2024/12/02"
};

AddSubClass("paladin", "oath of the grail knight", {
    regExpSearch: /^(?=.*grail)(?=.*knight).*$/i,
    subname: "Oath of the Grail Knight",
    source: ["OoGK", 1],
    features: {
        subclassfeature3: {
            name: "Channel Divinity: Consuming Hellfire",
            source: ["OoGK", 1],
            minlevel: 3,
            description: desc([
                "As an action, I can ignite a foe within 30 feet with hellfire, dealing fire damage.",
                "Lasts for proficiency bonus rounds. The target may make a Dexterity save to put it out with a DC equal to 8 + your proficiency bonus + your Constitution modifier."
            ]),
            additional : levels.map(function (n) {
				return 3+Math.floor(n/4)+ "d6";
			}),
            action: ["action", ""]
        },
        subclassfeature3_1: {
            name: "Channel Divinity: Hellfire",
            source: ["OoGK", 1],
            minlevel: 3,
            description: desc([
                "As a bonus action, ignite a weapon with hellfire, dealing additional damage equal to your Charisma modifier.",
                "Lasts up to 1 minute while concentrating. Disintegrate enemies reduced to 0 hitpoints."
            ]),
            action: ["bonus action", ""],
            calcChanges : {
                atkAdd : [
                    function (fields, v) {
                        if ((v.isMeleeWeapon) && (/hellfire/i).test(v.WeaponTextName)) {
                            fields.Description += (fields.Description ? '; ' : '') + 'add Cha mod necrotic damage';
                        }
                    },
                    "If I include the words 'Hellfire' in the name of a melee weapon or an unarmed strike, it adds my CHA in necrotic damage",
                    700
                ],
                atkCalc : [
                    function (fields, v, output) {
                        if (v.isMeleeWeapon) {
                            output.extraDmg += Number(What("Cha Mod"));
                        };
                    }, ''
                ]
            }
        },
        subclassfeature7: {
            name: "Aura of Evil",
            source: ["OoGK", 1],
            minlevel: 7,
            description: desc([
                "Use detect evil and good as a bonus action without expending a spell slot.",
                "This can be done a number of times equal to your paladin level per short rest."
            ]),
			usagescalc : "event.value = classes.known.paladin.level;",
            recovery: "short rest",
            action: [["bonus action"],""]
        },
        subclassfeature15: {
            name: "Cursed Hellfire",
            source: ["OoGK", 1],
            minlevel: 15,
            description: desc([
                "When you successfully attack with hellfire, can choose to reduce damage by 2d6 to force the target to make a Wisdom saving throw.",
                "On failure, they are cursed as per Bestow Curse with duration equal to your Paladin level."
            ])
        },
        subclassfeature20: {
            name: "Damning Hellfire",
            source: ["OoGK", 1],
            minlevel: 20,
            description: desc([
                "When you use your consuming hellfire ability, you can sacrifice a round of the hellfire to cause your target to gain negative levels every round while it is on fire.",
                "If negative levels = hit dice, you can destroy their soul as a free action. A creature whose soul has been destroyed can only be brought back to life by true resurrection or wish spell.",
            ]),
            recovery: "long rest",
            usages: 1,
            action: ["action", ""]
        }
    },
    spellcastingExtra: ["hellish rebuke", "witch bolt", "darkness", "ray of enfeeblement", 
                        "dispel magic", "fireball", "banishment", 
                        "greater invisibility", "geas", "modify memory"]
});
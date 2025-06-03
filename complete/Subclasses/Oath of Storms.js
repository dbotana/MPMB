/*	-WHAT IS THIS?-
    This file adds optional material to "MPMB's Character Record Sheet" found at https://flapkan.com/mpmb/charsheets
    Import this file using the "Add Extra Materials" bookmark.
    -KEEP IN MIND-
    It is recommended to enter the code in a fresh sheet before adding any other information (i.e. before making your character with it).
*/

/*	-INFORMATION-
    Subject:	Subclass
    Effect:		This script adds a subclass for the Paladin, called "Oath of Storms"
                This is taken from D&D Beyond https://www.dndbeyond.com/subclasses/16113-oath-of-storms
    Date:		2023-12-17
*/

var iFileName = "Paladin - Oath of Storms.js";
RequiredSheetVersion(13);

// Define the source
SourceList["OoS"] = {
    name: "Paladin - Oath of Storms",
    abbreviation: "OoS",
    abbreviationSpellsheet: "OoS",
    group: "Rocky's Homebrew",
    date: "2023/12/17"
};

AddSubClass("paladin", "oath of storms", {
    regExpSearch: /^(((?=.*(storm|lightning|thunder))((?=.*paladin)|((?=.*(exalted|sacred|holy|divine))(?=.*(knight|fighter|warrior|warlord|trooper)))))|((?=.*(Storm|safe|guard))(?=.*(knight|fighter|warrior|warlord|trooper)))).*$/i,
    subname: "Oath of Storms",
    source: ["OoS", 4],
    features: {
        "subclassfeature3": {
            name: "Channel Divinity: Thunderous Advance",
            source: ["OoS", 4],
            minlevel: 3,
            description: desc([
                "As a Bonus Action, I can teleport to an unoccupied space I can see within 60 feet",
                "This creates a thunderous boom audible up to 500 feet away"
            ]),
            action: ["bonus action", ""]
        },
        "subclassfeature3.1": {
            name: "Channel Divinity: Wield the Storm",
            source: ["OoS", 4],
            minlevel: 3,
            description: desc([
                "As an Action, I imbue myself and my weapon with lightning, transforming it into a 3-foot lightning bolt",
                "The weapon deals 2d8 Lightning damage instead of its regular damage",
                "It's a One Handed martial melee weapon, proficient only for me, with Thrown property (80/320 feet)",
                "On a miss or hit, the weapon instantly returns to my hand",
                "Retains original magical properties",
                "The effect lasts for 1 minute, or until I dismiss it (no action required)"
            ]),
            action: ["action", ""],
            spellcastingExtra: ["absorb elements", "thunderwave", "shatter", "warding wind", "call lightning", "thunder step", "elemental bane", "storm sphere", "cone of cold", "control winds"],
            weaponsAdd: ["Lightning Bolt"],
            weaponOptions: [{
                name: "Lightning Bolt",
                source: ["OoS", 2],
                regExpSearch: /^(?=.*lightning)(?=.*bolt).*$/i,
                type: "Martial",
                ability: 1,
                abilitytodamage: true,
                damage: [2, 8, "lightning"],
                range: "Melee, Thrown 80/320 ft",
                description: "When thrown, the bolt instantly returns to my hand upon missing or striking its target. Weapon retains all original magical properties.",
                isAlwaysProf: true,
            }]
        },
        "subclassfeature7": {
            name: "Aura of Gusts",
            source: ["OoS", 4],
            minlevel: 7,
            description: desc([
                "Within 10 feet of me, the area becomes difficult terrain for my enemies.",
                "I can convert any Lightning damage I deal in this area to Radiant damage, and vice versa."
            ]),
            additional: levels.map(function (n) {
                return (n < 7 ? "" : (n < 18 ? "10-foot aura" : "30-foot aura"));
            })
        },

        "subclassfeature15": {
            name: "Storm's Herald",
            source: ["OoS", 4],
            minlevel: 15,
            description: desc(["I gain immunity to Lightning and Thunder damage and ranged attack roles are made with disadvantage against me",]),
            savetxt: { immune: ["lightning", "radiant"] },
        },
        "subclassfeature20": {
            name: "Champion of Storm",
            source: ["OoS", 4],
            minlevel: 20,
            description: desc([
                "As a action, I embody the fury of a raging storm. For 1 hour:",
                " \u2022 I gain a flying speed of 60 feet",
                " \u2022 Allies within my Aura of Gusts gain the bonuses of my Storm’s Herald class feature. ",
                " \u2022 I may activate Wield the Storm as a Bonus Action at will.",
                " \u2022 When I hit an enemy with Wield the Storm, up to two creatures within 15 feet of the original target make a Dexterity saving throw.",
                " \u2022 On a failure, they take 2d8 Lightning damage and half as much on a success as a bolt of lightning leaps to it. "
            ]),
            recovery: "long rest",
            usages: 1,
            action: ["action", ""]
        }
    }
});
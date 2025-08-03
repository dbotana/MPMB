/* -WHAT IS THIS?-

This file adds optional material to "MPMB's Character Record Sheet" found at https://flapkan.com/mpmb/charsheets

Import this file using the "Add Extra Materials" bookmark.

-KEEP IN MIND-

It is recommended to enter the code in a fresh sheet before adding any other information (i.e. before making your character with it).

*/

/* -INFORMATION-

Subject: Subclass

Effect: This script adds the Oath of the Chosen paladin subclass by Kobold Press available here http://kpogl.wikidot.com/oath:oath-of-the-chosen

Code by: Rocky

Date: 2025-08-03 (sheet v13)

*/

var iFileName = "Oath of the Chosen.js";

RequiredSheetVersion(13);

SourceList["OtC"] = {
    name: "Oath of the Chosen",
    abbreviation: "OtC", 
    group: "Kobold Press",
    url: "http://kpogl.wikidot.com/oath:oath-of-the-chosen"
};

AddSubClass("paladin", "oath of the chosen", {
    regExpSearch: /^(?=.*paladin)(?=.*chosen).*$/i,
    subname: "Oath of the Chosen",
    source: ["OtC", 0],
    spellcastingExtra: ["healing word", "shield", "augury", "scorching ray", "beacon of hope", "haste", "guardian of faith", "resilient sphere", "flame strike", "hallow"],
    features: {
        "subclassfeature3": {
            name: "Channel Divinity: Oath of the Chosen",
            source: ["OtC", 0],
            minlevel: 3,
            description: desc([
                "I gain two Channel Divinity options:",
                "\u2022 Cradle of the Land: As a reaction, restore HP to a creature at 0 HP within 60 ft (1d8 + expend Lay on Hands points).",
                "\u2022 Star of Sand and Sun: As a bonus action, create a magical glass morningstar for 1 minute. On a hit, the weapon deals 1d8 piercing damage plus 1d4 radiant damage and 1d4 force damage. On a critical hit with this weapon, you can choose to deal extra damage as normal for a critical hit, or you can choose for the weapon to shatter. Your target and creatures within 20 feet of them that are hostile to you must roll a Dexterity saving throw against your spell save DC, suffering 4d6 radiant damage and 4d6 force damage on a failure or half damage on a success. The extra damage you deal increases to 2d6 radiant damage and 2d6 force damage at 15th level, and the critical damage from shattering the morningstar increases to 6d6 radiant damage and 6d6 force damage."

            ]),
            action: [["reaction", "Cradle of the Land"], ["bonus action", "Star of Sand and Sun"]]
        },
        "subclassfeature7": {
            name: "Bastion of Force", 
            source: ["OtC", 0],
            minlevel: 7,
            description: desc([
                "When I hit a creature with a Divine Smite, I or a creature I can see within range gains",
                "resistance to all damage dealt by that creature until the beginning of my next turn."
            ]),
            additional: levels.map(function (n) {
                return (n < 7 ? "" : (n < 18 ? "10-foot range" : "30-foot range"));
            })
        },
        "subclassfeature15": {
            name: "Divine Beacon",
            source: ["OtC", 0], 
            minlevel: 15,
            description: desc([
                "When I use Divine Sense, as a free action I can beckon detected celestials, fey, and fiends within 60 ft.",
                "Each must make a Wisdom save or be compelled to move toward me on their next turn."
            ]),
        },
        "subclassfeature20": {
            name: "Vitrified Guardian of the Chosen People",
            source: ["OtC", 0],
            minlevel: 20,
            description: desc([
                "As a bonus action, I take on a translucent, glassy form for 1 minute, gaining:",
                "\u2022 Resistance to acid, necrotic, and poison damage",
                "\u2022 Immunity to radiant damage; can redirect radiant spells to 2 others within 30 ft",
                "\u2022 Immunity to the blinded condition", 
                "\u2022 When using Lay on Hands or Cradle of the Land, a second creature within 60 ft regains equal HP"
            ]),
            recovery : "long rest",
			usages : 1,
			altResource : "SS 5+",
            action: [["bonus action", ""]]
        }
    }
});

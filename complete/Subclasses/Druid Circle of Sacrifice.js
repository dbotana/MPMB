/*	-WHAT IS THIS?-
	This file adds optional material to "MPMB's Character Record Sheet" found at https://flapkan.com/mpmb/charsheets
	Import this file using the "Add Extra Materials" bookmark.
	-KEEP IN MIND-
	It is recommended to enter the code in a fresh sheet before adding any other information (i.e. before making your character with it).
*/

/*	-INFORMATION-
	Subject:	Subclass
	Effect:		This script adds a subclass for the Druid, called "Circle of Sacrifice"
				Subclass comes from Age of Antiquity by Aruzian Publishing https://www.drivethrurpg.com/m/product/380478
	Code by:	Rocky
	Date:		2023-09-02 (sheet v13)
*/
var iFileName = "Druid - Circle of Sacrifice [Rocky].js";
RequiredSheetVersion(13);

SourceList["CoSC"] = {
    name: "Druid - Circle of Sacrifice",
    abbreviation: "CoSC",
    abbreviationSpellsheet: "CoSC",
    group: "Rocky's Homebrew",
    date: "2023/09/02"
};


AddSubClass("druid", "circle of sacrifice", {
    regExpSearch: /^(?=.*(druid|shaman))(?=.*circle)(?=.*sacrifice).*$/i,
    subname: "Circle of Sacrifice",
    source: [["CoSC", 1]],
    features: {
        "subclassfeature2": {
            name: "Dagda's Boon",
            source: [["CoSC", 1]],
            minlevel: 2,
            description: desc([
                "When I kill a creature I can use my reaction to regain a 1st level spell slot",
                "Alternatively, I can perform a 10 minute ritual over a corpose to regain higher level spell slots",
                "For every additional 10 minutes I spend, I can increase the level of the slot by one level"
            ]),
            action: [["reaction", ""]],
            usages: 1,
            recovery: "long rest"
        },
        "subclassfeature6": {
            name: "Ritual of Oak and Mistle Toe",
            source: [["CoSC", 2]],
            minlevel: 6,
            description: desc([
                "As part of a long rest, I complete a ritual (including sacrifice and a freshly harvested ingredient)",
                "At the end of the long rest I create a potion which one creature can drink within 8 hrs",
                "The potion has one of two properties (see notes)"
            ]),
            toNotesPage: [{
                name: "Ritual of Oak and Mistle Toe",
                note: desc([
                    "Bestial Brethren: I and another creature drink the potion simultaneously. The creature can use Wild Shape to turn into the same animal you do. While in wildshape, we are both immune to poison damage and speak to each other telepathically (100ft)",
                    "Curse of Claw and Talon: imbiber is cursed (polymorphed) and makes a constitution save to resist. On a success, they delay the transformation and roll again at the end of their next turn. The effect lasts one hour. You choose type of beast when creating the potion (following Polymorph rules)"
                ])
            }],
        },
        "subclassfeature10": {
            name: "Ritual of Threefold Death",
            source: [["CoSC", 2]],
            minlevel: 10,
            description: desc([
                "During or after combat, I can begin a ritual which takes ten minutes.",
                "If during the ritual, three criteria are met then the target gains vulnerability to all damage for 24 hrs.",
                "\u2022 Wounding: the creature must take any non-magical damage",
                "\u2022 Drowning/Poisoning: The creature must be submerged in liquid, take poison damage or be poisoned",
                "\u2022 Hanging: The creature must be suspended off the ground from any part of their body",
                "Additionally, until my next long rest I maximize hit dice I spend",
                "At the end of my next long rest, I double the number of my highest level spell slots until my next long rest",
            ])
        },
        "subclassfeature14": {
            name: "The Wicker Man",
            source: [["CoSC", 2]],
            minlevel: 14,
            description: desc([
                "As a ritual (1 hr) I gather a number of living creatures equal to the CR of the creature I want to summon",
                "The creature must have CR <= half druid level, and must be a beast or elemental.",
                "The creature summoned through the ritual acts on its own initiative, defends me by default, and obeys my commands",
                "If the creature dies it is gone forever and a new ritual must be done to summon a new creature."
            ]),
            additional: levels.map(function (n) {
                return n < 1 ? "" : "CR " + Math.floor(n / 2);
            })
        }
    }
});
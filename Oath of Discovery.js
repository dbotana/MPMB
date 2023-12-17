/*	-WHAT IS THIS?-
    This file adds optional material to "MPMB's Character Record Sheet" found at https://flapkan.com/mpmb/charsheets
    Import this file using the "Add Extra Materials" bookmark.
    -KEEP IN MIND-
    It is recommended to enter the code in a fresh sheet before adding any other information (i.e. before making your character with it).
*/

/*	-INFORMATION-
    Subject:	Subclass
    Effect:		This script adds a subclass for the Paladin, called "Oath of discovery"
                This is taken from Seas of Vodari (https://preview.drivethrurpg.com/en/product/308461/The-Seas-of-Vodari-5E-Swashbucking--Sorcery-on-the-High-Seas)
    Code by:	Rocky
    Date:		2023-12-17
*/

var iFileName = "Paladin - Oath of Discovery.js";
RequiredSheetVersion(13);

// Define the source
SourceList["HB"] = {
    name: "Paladin - Oath of discovery",
    abbreviation: "HB",
    abbreviationSpellsheet: "HB",
    group: "Rocky's Homebrew",
    date: "2023/12/17"
};

AddSubClass("paladin", "oath of discovery", {
    regExpSearch: /^(((?=.*(discovery|discover))((?=.*paladin)|((?=.*(exalted|sacred|holy|divine))(?=.*(knight|fighter|warrior|warlord|trooper)))))|((?=.*(discovery|safe|guard))(?=.*(knight|fighter|warrior|warlord|trooper)))).*$/i,
    subname: "Oath of discovery",
    source: ["HB", 4],
    features: {
        "subclassfeature3": {
            name: "Channel Divinity: Explorer’s Ward",
            source: ["HB", 4],
            minlevel: 3,
            description: desc([
                "As an action, choose a creature within 30 feet to gain temporary hit points and tool proficiencies",
                "The creature gains temporary hit points equal to 5 + my paladin level",
                "It also gains proficiency with cartographer's tools, navigator's tools, and thieves' tools",
                "If already proficient, it has advantage on checks with these tools",
                "These benefits last as long as it has these temporary hit points, which fade after a rest"
            ]),
            action: ["action", ""],
            spellcastingExtra: ["expeditious retreat", "identify", "see invisibility", "zone of truth", "clairvoyance", "speak with dead", "arcane eye", "dimension door", "legend lore", "teleportation circle"]
        },
        "subclassfeature3.1": {
            name: "Channel Divinity: Polarize",
            source: ["HB", 4],
            minlevel: 3,
            description: desc([
                "As a bonus action, gain polarity charges equal to my Charisma modifier (minimum of 1)",
                "These charges last for 1 minute if not expended",
                "Use a reaction and a charge to roll 1d6, adding it to my AC against metal weapon attacks",
                "I can decide to use this feature after the attack roll, but before knowing if it hits or misses",
                "Spend a charge as a bonus action to add 1d6 to my next attack and damage roll against a creature in metal armor",
                "While I have charges, I can cast true north as a bonus action"
            ]),
            action: [["bonus action", "Polarize Attack"], ["reaction", "Polarize Armor"], ["bonus action", "Polarize True North"]],
        },
        "subclassfeature3.2": {
            name: "Ancient Rites",
            source: ["HB", 4],
            minlevel: 3,
            description: desc([
                "I gain knowledge of ancient rites and can cast cleric and druid ritual spells",
                "I can cast these spells if they are on the cleric or druid list, and their level is no more than half my Paladin level (rounded up)",
                "I must have a ritual book in hand to cast these rituals",
                "I can add spells to my ritual book if they are on the chosen class list, have the ritual tag, and their level is no more than half my level (rounded up)",
                "Copying a spell into my ritual book takes 2 hours per spell level and costs 50 gp per level",
                "I also gain proficiency with calligraphy supplies"
            ]),
            toolProfs: ["Calligraphy supplies"]
        },

        "subclassfeature7": {
            name: "Aura of Concentration",
            source: ["HB", 4],
            minlevel: 7,
            description: desc([
                "While not incapacitated, creatures of my choice within range and I gain benefits:",
                "I and friendly creatures don’t have to roll a Constitution save to maintain concentration the first time it takes damage each round.",
                "Additionally, if a creature loses concentration from taking damage, the effect of the spell doesn’t end until the end of their next turn.",
            ]),
            additional: levels.map(function (n) {
                return (n < 7 ? "" : (n < 18 ? "10-foot aura" : "30-foot aura, +d4 to concentration checks"));
            })
        },
        "subclassfeature15": {
            name: "Twice-Found Sigils",
            source: ["HB", 4],
            minlevel: 15,
            description: desc([
                "I master ancient sigils of power (see notes), which I can inscribe on a flat surface in 10 minutes",
                "I can have only one sigil active at a time and can only inscribe the same sigil after a long rest",
                "The sigil covers an area up to 10 feet in diameter and is nearly invisible",
                "An Intelligence (Investigation) check against my spell save DC is required to find it",
                "I'm aware when my sigils trigger and they remain active until I inscribe another, remove them, or their surface is destroyed",]),
            toNotesPage: [{
                name: "Twice-Found Sigils",
                popupName: "Oath of discovery: Twice-Found Sigils",
                page3notes: true,
                note:
                    ["Sigil of Prophecy: A recognized creature can cast augury once after a long rest within 60 feet of the sigil",
                        "Sigil of Truth: Unrecognized creatures touching it must save or I learn their surface thoughts and a concealed truth",
                        "Sigil of Correspondence: I can inscribe two halves of this sigil on surfaces within my paladin level in miles; they allow telepathic communication when activated by recognized creatures",]
            }],
        },
        "subclassfeature20": {
            name: "Champion of Discovery",
            source: ["HB", 4],
            minlevel: 20,
            description: desc([
                "As a bonus action, I can cause shining runes to cover my skin and grow rune wings for 1 minute",
                " \u2022 I gain a flying speed equal to my walking speed",
                " \u2022 I can use the Dash action as a bonus action and make a weapon attack with advantage when I end my dash",
                " \u2022 My weapon attacks deal an additional 1d8 psychic damage",
                " \u2022 Hostile creatures within 10 feet have disadvantage on Wisdom and Intelligence checks and saving throws"
            ]),
            recovery: "long rest",
            usages: 1,
            action: ["bonus action", ""]
        }        
    }
});
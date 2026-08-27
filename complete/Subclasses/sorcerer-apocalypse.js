/*	-WHAT IS THIS?-
    This file adds optional material to "MPMB's Character Record Sheet" found at https://flapkan.com/mpmb/charsheets
    Import this file using the "Add Extra Materials" bookmark.
    -KEEP IN MIND-
    It is recommended to enter the code in a fresh sheet before adding any other information (i.e. before making your character with it).
*/

/*	-INFORMATION-
    Subject:	Subclass
    Effect:		This script adds a subclass for the Sorcerer class called "apocalypse" as described in the homebrew document https://www.worldanvil.com/block/1585361 by https://www.worldanvil.com/author/Ceadeus
                It should be added after PokeSimmer's 2024 scripts https://github.com/thepokesimmer/2024-PHB.
    Code by:	Rocky
    Date:		2026-08-26 (sheet v13)
*/

var iFileName = "Sorcerer - Apocalypse [Rocky].js";

RequiredSheetVersion("13.2.0");

SourceList["AP"] = {
    name: "Sorcerer - apocalypse",
    abbreviation: "AP",
    abbreviationSpellsheet: "AP",
    group: "Rocky's Homebrew",
    date: "2026/08/26"
};

AddSubClass("sorcerer", "apocalypse", {
    regExpSearch: /^(?=.*apocalypse)((?=.*sorcerer)|(?=.*sorcery)).*$/i,
    subname: "apocalypse",
    fullname: "apocalypse Sorcerer",
    source: [["AP", 0]],
    spellcastingExtra: [
        "augury", "comprehend languages", "hellish rebuke", "ray of enfeeblement",
        "bestow curse", "revivify",
        "banishment", "divination",
        "contagion", "insect plague"
    ],
    spellcastingExtraApplyNonconform: true,
    features: {
        "subclassfeature3": {
            name: "Apocalyptic Spells",
            source: [["AP", 0]],
            minlevel: 3,
            description: desc([
                "I always have the spells of the Apocalyptic Spells table prepared",
                "They don't count against the number of spells I can prepare"
            ])
        },
        "subclassfeature3.1": {
            name: "Unhinged Asservations",
            source: [["AP", 0]],
            minlevel: 3,
            description: desc([
                "I gain proficiency with Calligrapher's Supplies",
                "I can create Spell Scrolls in half the time and at half the cost in GP",
                "When I create a Spell Scroll, I can ensorcell it: I expend a spell slot of the spell's",
                "level or higher and can spend Sorcery Points to apply one of my Metamagic options",
                "Any creature that knows at least one language can use my ensorcelled Spell Scroll,",
                "casting the spell with the benefit of the Metamagic option I chose",
                "It remains ensorcelled until it is used or I finish a Long Rest"
            ]),
            toolProfs: ["Calligrapher's Supplies"]
        },
        "subclassfeature6": {
            name: "Bear Witness",
            source: [["AP", 0]],
            minlevel: 6,
            description: desc([
                "While my Innate Sorcery is active, I gain the following benefits:",
                " \u2022 Apocalyptic Inurement: I have Resistance to Force damage",
                " \u2022 Recite Scripture: Once per active Innate Sorcery, as a Bonus Action I can use a",
                "   Spell Scroll that has a spell with a casting time of Action",
                " \u2022 Unflappable: I am immune to the Frightened condition"
            ]),
            action: [["bonus action", "Recite Scripture (1/Innate Sorcery)"]],
            dmgres: [["Force", "Force (Innate Sorcery)"]],
            savetxt: { immune: ["Frightened (Innate Sorcery)"] }
        },
        "subclassfeature6.1": {
            name: "Arcane Apocrypha",
            source: [["AP", 0]],
            minlevel: 6,
            description: desc([
                "Whenever I finish a Long Rest, I can create one Spell Scroll at no cost",
                "It must be a spell of level 5 or lower that I can cast",
                "This Spell Scroll disintegrates when I finish a Long Rest"
            ]),
            usages: 1,
            recovery: "long rest"
        },
        "subclassfeature14": {
            name: "Forbidden Magic",
            source: [["AP", 0]],
            minlevel: 14,
            description: desc([
                "When I cast a Sorcerer spell using a spell slot, I can choose one option below:",
                " \u2022 Excessive: If the spell requires a costly Material component, I can cast it without",
                "   that component. I take Force damage equal to 4 x the spell slot level immediately",
                "   after casting it; this damage ignores Resistance and Immunity",
                " \u2022 Inexorable: Taking damage can't break my Concentration on the spell.",
                "   When the spell ends, I gain 1 Exhaustion level",
                " \u2022 Pyrrhic: If the spell requires an attack roll, it automatically hits and the attack",
                "   roll is a Critical Hit. My HP maximum is reduced by 4 x the spell slot level",
                "   immediately after casting it, returning to normal when I finish a Long Rest"
            ])
        },
        "subclassfeature18": {
            name: "The End is Nigh",
            source: [["AP", 0]],
            minlevel: 18,
            description: desc([
                "As a Magic action, each creature of my choice in a 30-ft Emanation from me makes a",
                "Wisdom saving throw vs my spell save DC. Fail: 6d6 Psychic and 6d6 Force damage and",
                "the Frightened condition for 1 min. Success: half damage only, and no Frightened",
                "A Frightened creature repeats the save at the end of each of its turns, ending it on a success",
                "A creature reduced to 0 HP by this damage can be revived only by True Resurrection or Wish",
                "Once used, I can't do so again until I finish a Long Rest, unless I spend 6 Sorcery Points",
                "(no action required) to restore my use of it"
            ]),
            action: [["action", "The End is Nigh"]],
            usages: 1,
            recovery: "long rest",
            altResource: "6 SP"
        }
    }
});

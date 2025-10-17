/* -WHAT IS THIS?-

This file adds optional material to "MPMB's Character Record Sheet" found at https://flapkan.com/mpmb/charsheets

Import this file using the "Add Extra Materials" bookmark.

-KEEP IN MIND-

It is recommended to enter the code in a fresh sheet before adding any other information (i.e. before making your character with it).

*/

/* -INFORMATION-

Subject: Subclass

Effect: This script adds a subclass for the Monk, called "Way of the Arcane Hand" from Sebastian Crowe's "Guide to Drakenheim" available at https://ghostfiregaming.com/product/sebastian-crowes-guide-to-drakkenheim-pdf/

Code by: Rocky

Date: 2025-10-16 (sheet v13)

*/

var iFileName = "Way_of_the_Arcane_Hand.js";

RequiredSheetVersion(13);

SourceList["S:GtD"] = {
    name : "Guide to Drakenheim",
    abbreviation : "S:GtD",
    abbreviationSpellsheet : "GD",
    group : "Sebastian Crowe",
    url : "https://ghostfiregaming.com/product/sebastian-crowes-guide-to-drakkenheim-pdf/"
};

AddSubClass("monk", "way of the arcane hand", {
    regExpSearch : /^(?=.*arcane)(?=.*hand)((?=.*(monk|monastic))|(((?=.*martial)(?=.*(artist|arts)))|((?=.*spiritual)(?=.*warrior)))).*$/i,
    subname : "Way of the Arcane Hand",
    source : [["S:GtD", 101]],
    spellcastingFactor : 3,
    spellcastingKnown : {
        cantrips : [0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
        spells : [0, 0, 3, 4, 4, 4, 5, 6, 6, 7, 8, 8, 9, 10, 10, 11, 11, 11, 12, 13]
    },
    spellcastingList : {
        class : "wizard",
        level : [0, 4]
    },
    features : {
        "subclassfeature3" : {
            name : "Erudite Education",
            source : [["S:GtD", 101]],
            minlevel : 3,
            description : desc([
                "I gain proficiency in the Arcana skill",
                "Whenever I make an Intelligence ability check, I gain a bonus equal to my Wisdom modifier (minimum of +1)"
            ]),
            skills : ["Arcana"],
			addMod : ["Arcana", "History", "Investigation", "Nature", "Religion"].map(function(skill){return { type : "skill", field : skill, mod : "max(Wis|1)", text : "I can add my Wisdom modifier to any Intelligence check I make (minimum of +1)." };}),
        },
        "subclassfeature3.1" : {
            name : "Spellcasting",
            source : [["S:GtD", 101]],
            minlevel : 3,
            description : desc([
                "I can cast wizard cantrips/spells that I know, using Wisdom as my spellcasting ability",
                "I can use a monk weapon as a spellcasting focus for my wizard spells"
            ]),
            additional : levels.map(function (n, idx) {
                var cantr = [0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2][idx];
                var splls = [0, 0, 3, 4, 4, 4, 5, 6, 6, 7, 8, 8, 9, 10, 10, 11, 11, 11, 12, 13][idx];
                return n < 3 ? "" : cantr + " cantrips \u0026 " + splls + " spells known";
            })
        },
        "subclassfeature3.2" : {
            name : "Arcane Focus",
            source : [["S:GtD", 101]],
            minlevel : 3,
            description : "\n   " + "I can use a monk weapon as an arcane focus for my spellcasting"
        },
        "subclassfeature3.3" : {
            name : "Spell Slots",
            source : [["S:GtD", 101]],
            minlevel : 3,
            description : desc([
                "I gain spell slots to cast my wizard spells of 1st level and higher",
                "See the Way of the Arcane Hand Spellcasting table for spell slots per level"
            ]),
            additional : levels.map(function (n) {
                return n < 3 ? "" : 
                    n < 4 ? "2\xD71st" : 
                    n < 5 ? "3\xD71st" : 
                    n < 7 ? "3\xD71st, 2\xD72nd" : 
                    n < 8 ? "4\xD71st, 2\xD72nd" : 
                    n < 9 ? "4\xD71st, 2\xD72nd" : 
                    n < 10 ? "4\xD71st, 3\xD72nd" : 
                    n < 11 ? "4\xD71st, 3\xD72nd, 2\xD73rd" : 
                    n < 13 ? "4\xD71st, 3\xD72nd, 2\xD73rd" : 
                    n < 14 ? "4\xD71st, 3\xD72nd, 3\xD73rd" : 
                    n < 16 ? "4\xD71st, 3\xD72nd, 3\xD73rd, 1\xD74th" : 
                    n < 19 ? "4\xD71st, 3\xD72nd, 3\xD73rd, 1\xD74th" : 
                    "4\xD71st, 3\xD72nd, 3\xD73rd, 1\xD74th";
            })
        },
        "subclassfeature3.4" : {
            name : "Spells Known of 1st-Level and Higher",
            source : [["S:GtD", 101]],
            minlevel : 3,
            description : desc([
                "I know three 1st-level wizard spells of my choice",
                "The Spells Known column shows when I learn more wizard spells of 1st level or higher",
                "Whenever I gain a level in this class, I can replace one wizard spell I know",
                "The new spell must be of a level for which I have spell slots"
            ])
        },
        "subclassfeature3.5" : {
            name : "Eldritch Flurry",
            source : [["S:GtD", 101]],
            minlevel : 3,
            description : desc([
                "Whenever I take the Attack action on my turn, I can cast one of my cantrips",
                "This cantrip replaces one of those attacks",
                "When I use Flurry of Blows, I can cast a spell with a casting time of 1 action as a bonus action instead of making unarmed strikes.",
                "Finally, when I use my action to cast a spell, I can treat it as taking an attack action",
                "with a monk weapon for the purposes of my other monk features"
            ]),
            action : [["action", " (with Attack action)"], ["bonus action", " (with spell)"]],
            calcChanges : {
                atkAdd : [
                    function (fields, v) {
                        if (v.baseWeaponName == 'unarmed strike' && classes.known.monk && classes.known.monk.level >= 3) {
                            fields.Description += (fields.Description ? '; ' : '') + 'Can cast cantrip in place of 1 attack';
                        }
                    },
                    "When I take the Attack action, I can cast a cantrip in place of one attack."
                ]
            }
        },
        "subclassfeature6" : {
            name : "Arcane Empowerment",
            source : [["S:GtD", 102]],
            minlevel : 6,
            description : desc([
                "While concentrating on a spell, I add twice the spell's level to the damage rolls of my",
                "unarmed strikes and attacks made with monk weapons"
            ]),
            calcChanges : {
                atkCalc : [
                    function (fields, v, output) {
                        if ((v.baseWeaponName == 'unarmed strike' || (v.theWea.monkweapon || v.thisWeapon[1])) && classes.known.monk && classes.known.monk.level >= 6) {
                            // Note: actual bonus depends on spell level being concentrated on
                            // This is a placeholder that assumes level 1 spell (2 damage)
                            output.extraDmg += 2; // This should be dynamic based on concentration
                        }
                    },
                    "While concentrating on a spell, I add twice the spell's level to the damage of my unarmed strikes and monk weapon attacks."
                ]
            }
        },
        "subclassfeature11" : {
            name : "Focus Power",
            source : [["S:GtD", 102]],
            minlevel : 11,
            description : desc([
                "When I cast a spell with a casting time of 1 action, I expend 1 ki point for each",
                "level I increase the spell in this way. I can increase the spell's level higher than",
                "normal to cast the spell using a higher-level spell slot",
                "I must use a spell slot as normal to cast the spell, then expend 1 ki point for each",
                "level I increase the spell in this way",
                "For example, if I'm an 11th-level Way of the Arcane Hand monk, when I cast the spell",
                "burning ray using a 2nd-level spell slot, I could expend 3 ki points to cast the spell",
                "as 4th-level spell"
            ])
        },
        "subclassfeature11.1" : {
            name : "Spell Resistance",
            source : [["S:GtD", 102]],
            minlevel : 11,
            description : desc([
                "I have advantage on saving throws against spells and magical effects",
                "Furthermore, I have resistance to damage from spells and magical effects"
            ]),
            savetxt : { adv_vs : ["spells", "magical effects"] },
            dmgres : ["Spells"]
        },
        "subclassfeature17" : {
            name : "Meditative Casting",
            source : [["S:GtD", 102]],
            minlevel : 17,
            description : desc([
                "Starting at 17th level, when I cast a spell with a casting time of 1 action (that",
                "requires my concentration), I can expend ki points equal to the spell's level to modify",
                "the spell so that it does not require my concentration",
                "The duration of the spell can't exceed 1 minute, or its maximum duration, whichever",
                "is shorter"
            ])
        }
    }
});
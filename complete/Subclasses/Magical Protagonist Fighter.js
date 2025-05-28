/* -WHAT IS THIS?-
This file adds optional material to "MPMB's Character Record Sheet" found at https://flapkan.com/mpmb/charsheets
Import this file using the "Add Extra Materials" bookmark.

-KEEP IN MIND-
It is recommended to enter the code in a fresh sheet before adding any other information (i.e. before making your character with it).
*/

/* -INFORMATION-
Subject: Class
Effect: This script adds the Magical Protagonist Fighter subclass written by Aviv Or.
Code by: Rocky
Date: 2025-05-23 (sheet v13)
*/
var iFileName = "Magical Protagonist Fighter.js";

RequiredSheetVersion('13');

SourceList["MPF"] = {
    name : "Magical Protagonist Fighter",
    abbreviation : "MPF", 
    group : "Rocky's Homebrew",
    date : "2025/05/23"
};

AddSubClass("fighter", "magical protagonist", {
    regExpSearch : /^(?=.*(magical|magic))(?=.*(protagonist|girl|boy|hero|heroine)).*$/i,
    subname : "Magical Protagonist",
    fullname : "Magical Protagonist",
    source : [["MPF", 0]],
    abilitySave : 6, // Charisma
    features : {
        "subclassfeature3" : {
            name : "Secret Power",
            source : [["MPF", 0]],
            minlevel : 3,
            choices : ["Magical Companion", "Magical Destiny", "Magical Trinket"],
            "magical companion" : {
                name : "Magical Companion",
                description : "\n " + "I learn Find Familiar and can cast it once per day without spell slot or components" + "\n " + "When summoned this way, my familiar can speak one language I know and doesn't have to obey",
                usages : 1,
                recovery : "long rest",
                spellcastingBonus : [{
                    name : "Magical Companion",
                    spells : ["find familiar"],
                    selection : ["find familiar"],
                    firstCol : "oncelr"
                }],
                spellChanges : {
                    "find familiar" : {
                        components : "V,S",
                        compMaterial : "",
                        changes : "When cast using my Magical Companion feature, it requires no material components and my familiar can speak one language I know."
                    }
                }
            },
            "magical destiny" : {
                name : "Magical Destiny",
                description : "\n " + "I gain proficiency in Performance and either Intimidation or Persuasion" + "\n " + "I can add my Constitution modifier to Charisma skill checks",
                skillstxt : "Performance and choice of Intimidation or Persuasion",
			    addMod : ["Deception", "Intimidation", "Performance", "Persuasion"].map(function(skill){return {type : "skill", field : skill, mod : "Con", text : "I add my Constitution modifier to my Charisma checks"};})
            },
            "magical trinket" : {
                name : "Magical Trinket",
                description : "\n " + "I have a Tiny object used in my transformation sequence" + "\n " + "When I transform, I can choose creatures to automatically succeed saves vs. my transformation"
            }
        },
        "subclassfeature3.1" : {
            name : "Magical Transformation",
            source : [["MPF", 0]],
            minlevel : 3,
            description : desc([
                "I can magically transform for 1 hour or until unconscious (regain on short/long rest)",
                "While transformed, I gain the ability to use style points and hero powers",
                "\u2022 Transform Dramatically (Action): 20-ft radius Charisma save or blinded until end of next turn",
                "\u2022 Transform Quickly (Bonus Action): No special effect"
            ]),
            usages : 1,
            recovery : "short rest",
            action : [["action", " (Dramatic)"], ["bonus action", " (Quick)"]]
        },
        "subclassfeature3.2" : {
            name : "Hero Powers and Style Points",
            source : [["MPF", 0]],
            minlevel : 3,
            description : desc([
                "While transformed, I have style points to fuel hero powers (only one per turn)",
                "I regain 1 style point on critical hit or rolling 20 on Charisma check",
                'Use "Choose Feature" button to add Hero Powers to the third page'
            ]),
            additional : levels.map(function (n) {
                return n < 3 ? "" : (n < 7 ? "3 style points, 3 powers" : n < 10 ? "4 style points, 4 powers" : n < 15 ? "5 style points, 5 powers" : "6 style points, 6 powers") + " known";
            }),
            usages : [0, 0, 3, 3, 3, 3, 4, 4, 4, 5, 5, 5, 5, 5, 6, 6, 6, 6, 6, 6],
            recovery : "short rest",
            extraname : "Hero Power",
            extrachoices : [
                "Anonymous Hero", "Awesome Hero Attack", "Beautiful Hero Blast", "Extra Sparkly Hero Attack",
                "Healing Hero", "Helpful Hero", "Hero Senses", "Hopeful Hero", "Hot-Headed Hero",
                "Hyper Heroic Hero", "Lovely Hero", "Mobile Hero", "Motivational Hero", "Sturdy Hero"
            ],
            extraTimes : levels.map(function (n) {
                return n < 3 ? 0 : n < 7 ? 3 : n < 10 ? 4 : n < 15 ? 5 : 6;
            }),
            "anonymous hero" : {
                name : "Anonymous Hero",
                description : "\n " + "I can spend 1 style point to cast Disguise Self as an action (1 style point)",
                action : [["action", ""]],
                spellcastingBonus : [{
                    name : "Anonymous Hero",
                    spells : ["disguise self"],
                    selection : ["disguise self"],
                    firstCol : "1"
                }]
            },
            "awesome hero attack" : {
                name : "Awesome Hero Attack",
                description : "\n " + "When making a weapon attack, I can spend 2 style points for advantage" + "\n " + "If it hits and I'm within 5 ft, it's automatically a critical hit (2 style points)"
            },
            "beautiful hero blast" : {
                name : "Beautiful Hero Blast",
                description : "\n " + "Forgo one attack to use bonus action for magical blast (spend any number of style points)" + "\n " + "20-ft radius at point within 90 ft: Dex save, 2d6+Cha mod radiant damage, +1d6 per extra style point",
                action : [["bonus action", " (with Attack action)"]]
            },
            "extra sparkly hero attack" : {
                name : "Extra Sparkly Hero Attack",
                description : "\n " + "When I hit with weapon attack, spend style points for +Cha mod radiant damage per point" + "\n " + "Target makes Con save or blinded until start of my next turn"
            },
            "healing hero" : {
                name : "Healing Hero",
                description : "\n " + "Spend style points to end conditions on ally within 30 ft who can see/hear me" + "\n " + "1 point per condition: charmed, frightened, paralyzed, or poisoned",
                action : [["action", ""]]
            },
            "helpful hero" : {
                name : "Helpful Hero",
                description : "\n " + "Spend 1 style point to Help as bonus action, target within 30 ft" + "\n " + "Before my next turn, if target rolls 1 on attack/check/damage die, reroll and use new result",
                action : [["bonus action", ""]]
            },
            "hero senses" : {
                name : "Hero Senses",
                description : "\n " + "I can spend 1 style point to cast Detect Evil and Good as an action (1 style point)",
                action : [["action", ""]],
                spellcastingBonus : [{
                    name : "Hero Senses",
                    spells : ["detect evil and good"],
                    selection : ["detect evil and good"],
                    firstCol : "1"
                }]
            },
            "hopeful hero" : {
                name : "Hopeful Hero",
                description : "\n " + "When I fail save vs. charmed, frightened, or paralyzed, spend 1 style point to reroll" + "\n " + "Add Charisma modifier to the reroll, must use new result (1 style point)"
            },
            "hot-headed hero" : {
                name : "Hot-Headed Hero",
                description : "\n " + "I can spend 2 style points to cast Heat Metal as an action (2 style points)" + "\n " + "I have fire resistance while concentrating on this spell",
                action : [["action", ""]],
                spellcastingBonus : [{
                    name : "Hot-Headed Hero",
                    spells : ["heat metal"],
                    selection : ["heat metal"],
                    firstCol : "2"
                }]
            },
            "hyper heroic hero" : {
                name : "Hyper Heroic Hero",
                description : "\n " + "I can spend 1 style point to cast Heroism as an action (1 style point)",
                action : [["action", ""]],
                spellcastingBonus : [{
                    name : "Hyper Heroic Hero",
                    spells : ["heroism"],
                    selection : ["heroism"],
                    firstCol : "1"
                }]
            },
            "lovely hero" : {
                name : "Lovely Hero",
                description : "\n " + "I can spend 2 style points to cast Charm Person as an action (2 style points)",
                action : [["action", ""]],
                spellcastingBonus : [{
                    name : "Lovely Hero",
                    spells : ["charm person"],
                    selection : ["charm person"],
                    firstCol : "2"
                }]
            },
            "mobile hero" : {
                name : "Mobile Hero",
                description : "\n " + "I can spend 1 style point to cast Jump on myself as a bonus action (1 style point)",
                action : [["bonus action", ""]],
                spellcastingBonus : [{
                    name : "Mobile Hero",
                    spells : ["jump"],
                    selection : ["jump"],
                    firstCol : "1"
                }]
            },
            "motivational hero" : {
                name : "Motivational Hero",
                description : "\n " + "When I attack a creature, spend 1 style point to give allies advantage vs. that target" + "\n " + "Lasts until start of my next turn or until an ally hits it (1 style point)",
                action : [["bonus action", ""]]
            },
            "sturdy hero" : {
                name : "Sturdy Hero",
                description : "\n " + "During transformation, spend 1 style point for temporary HP equal to fighter level" + "\n " + "Lasts until transformation ends (1 style point)"
            }
        },
        "subclassfeature7" : {
            name : "Ultra Personality",
            source : [["MPF", 0]],
            minlevel : 7,
            description : desc([
                "While transformed, I can add my Strength or Dexterity bonus to Charisma skill checks",
                "I can grant myself advantage on one Charisma check if I can see at least one ally"
            ]),
            usages : 1,
            recovery : "long rest"
        },
        "subclassfeature10" : {
            name : "Power of Friendship",
            source : [["MPF", 0]],
            minlevel : 10,
            description : desc([
                "As a free action, I can call out to allies within 30 ft who can see and hear me",
                "Each can use their reaction to grant me 1 style point (up to my fighter level total)",
                "Extra style points are lost at the end of my next turn"
            ]),
            usages : 1,
            recovery : "long rest"
        },
        "subclassfeature10.1" : {
            name : "Beam Attack",
            source : [["MPF", 0]],
            minlevel : 10,
            description : desc([
                "While transformed, I can replace one weapon attack with a beam attack",
                "5-ft wide, 60-ft long line: Dex save or weapon damage + 2d6 force damage",
                "Double damage to objects and structures; Upgrades to 2d12 force at 18th level"
            ]),
            additional : levels.map(function (n) {
                return n < 10 ? "" : n < 18 ? "+2d6 force damage" : "+2d12 force damage";
            })
        },
        "subclassfeature15" : {
            name : "Wings of Hope",
            source : [["MPF", 0]],
            minlevel : 15,
            description : "\n " + "While transformed, I manifest magical wings and gain flying speed equal to my movement speed",
            speed : { fly : { spd : "walk", enc : "walk" } }
        },
        "subclassfeature18" : {
            name : "Believe in Yourself",
            source : [["MPF", 0]],
            minlevel : 18,
            description : desc([
                "When I roll initiative and am not transformed, I can instantly transform as if I had used a bonus action",
                "When I roll initiative and have no style points, I gain 2 style points"
            ])
        }
    }
});

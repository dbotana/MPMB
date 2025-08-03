/* -WHAT IS THIS?-
This file adds optional material to "MPMB's Character Record Sheet" found at https://flapkan.com/mpmb/charsheets
Import this file using the "Add Extra Materials" bookmark.

-KEEP IN MIND-
It is recommended to enter the code in a fresh sheet before adding any other information (i.e. before making your character with it).
*/

/* -INFORMATION-
Subject: Class
Effect: This script adds Alternative Blood Hunter as described by LaserLlama https://www.gmbinder.com/share/-NLlETPNSzqxgQ92pnd-
Code by: Rocky
Date: 2025-05-28 (sheet v13)
*/
//to do: knacks prereqs, creatures, and subclass testing

var iFileName = "Alternate Blood Hunter.js";
RequiredSheetVersion(13);

SourceList["LL:BH"] = {
    name: "LaserLlama - Alternate Blood Hunter",
    abbreviation: "LL:BH",
    abbreviationSpellsheet: "BH",
    group: "LaserLlama",
    source: "GM Binder"
};

// Fighting Styles for Blood Hunter
if (!SourceList.FightingStylesLL) {
    var FightingStylesLL = {
        archery: {
            name: "Archery",
            description: "I gain a +2 bonus to attack rolls with ranged weapons",
            calcChanges: {
                atkCalc: [
                    function (fields, v, output) {
                        if (v.isRangedWeapon && !v.isNaturalWeapon) {
                            output.extraHit += 2;
                        }
                    },
                    "I gain a +2 bonus to attack rolls I make with ranged weapons."
                ]
            }
        },
        dual_wielding: {
            name: "Dual Wielding",
            description: "While two-weapon fighting, I make my off-hand attack as part of my Attack action instead of as a bonus action, and I add my ability modifier to the damage of this attack. I cannot also make an off-hand attack as a bonus action."
        },
        dueling: {
            name: "Dueling",
            description: "When wielding a melee weapon in one hand and no other weapons, I gain a +2 bonus to damage rolls with it",
            calcChanges: {
                atkCalc: [
                    function (fields, v, output) {
                        if (v.isMeleeWeapon && !v.isNaturalWeapon && fields.Proficiency) {
                            output.extraDmg += 2;
                        }
                    },
                    "When I'm wielding a melee weapon in one hand and no weapon in my other hand, I do +2 damage with it. This condition will always be false if the weapon has the two-handed or versatile property.",
                    true
                ]
            }
        },
        featherweight: {
            name: "Featherweight Fighting",
            description: "While unarmed or wielding only light weapons, and not wearing medium or heavy armor, my walking speed increases by 10 feet, and I gain a +1 bonus to damage rolls with light melee weapons and unarmed strikes",
            speed: { walk: { spd: "+10", enc: "+10" } }
        },
        great_weapon: {
            name: "Great Weapon Fighting",
            description: "When I make a two-handed melee attack with a heavy weapon as part of my Attack action, I treat a total roll of 5 or lower on the weapon's damage dice as a 6."
        },
        melee_marksman: {
            name: "Melee Marksman",
            description: "Having a hostile creature within 5 feet doesn't impose disadvantage on my ranged weapon attacks, so long as I'm attacking a creature within 5 feet. When I make a ranged weapon attack against a creature within 5 feet, I can use my bonus action to make a melee attack against it with my ranged weapon (1d4 + Str bludgeoning)",
            action: ["bonus action", " (melee attack with ranged weapon)"]
        },
        thrown_weapon: {
            name: "Thrown Weapon Fighting",
            description: "I can draw a weapon with the thrown property as part of the attack. When I hit with a ranged attack using a thrown weapon, I gain a +2 bonus to the damage roll",
            calcChanges: {
                atkCalc: [
                    function (fields, v, output) {
                        if (v.isThrownWeapon && v.isRangedWeapon) {
                            output.extraDmg += 2;
                        }
                    },
                    "When I hit with a ranged attack using a thrown weapon, I gain a +2 bonus to the damage roll."
                ]
            }
        },
        versatile: {
            name: "Versatile Fighting",
            description: "While wielding a single versatile weapon and no shield, I gain a +1 bonus to attack rolls with that weapon. I can also use my bonus action to grapple, shove, or take the Use an Object action",
            action: ["bonus action", " (grapple/shove/Use Object)"]
        }
    };
}

ClassList["blood hunter(laserllama)"] = {
    regExpSearch: /^(?=.*blood)(?=.*hunter)(?=.*alt|alternate).*$/i,
    name: "Blood Hunter (Alternate)",
    source: ["LL:BH", 0],
    primaryAbility: "Constitution",
    die: 12,
    improvements: [0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 5, 5],
    saves: ["Con", "Cha"],
    skillstxt: {
        primary: "Choose 2 from Athletics, Acrobatics, Arcana, History, Insight, Investigation, Nature, Religion, and Survival"
    },
    armorProfs: {
        primary: [true, true, false, true]
    },
    weaponProfs: {
        primary: [true, true]
    },
    toolProfs: {
        primary: ["Alchemist's supplies"]
    },
    equipment: "Blood Hunter starting equipment:\n \u2022 A martial weapon or two simple weapons;\n \u2022 A light crossbow and 20 bolts or four javelins;\n \u2022 Studded leather armor or scale mail;\n \u2022 Alchemist's supplies and an explorer's pack.",
    subclasses: ["Occult Order", []],
    attacks: [1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
    features: {
        "hunter's bane": {
            name: "Hunter's Bane",
            source: ["LL:BH", 0],
            minlevel: 1,
            description: desc([
                "I gain proficiency in Arcana, Nature, or Religion",
                "As a bonus action, I can analyze a creature within 30 ft (Constitution check, DC 8 + CR):",
                "Arcana: Aberrations, Dragons, Monstrosities",
                "Nature: Beasts, Elementals, Oozes, Plants",
                "Religion: Celestials, Fey, Fiends, Undead",
                "On success: learn highest/lowest ability score, vulnerabilities, resistances, immunities, etc."
            ]),
            action: ["bonus action", " (analyze creature)"],
            skillstxt: "Choose one from: Arcana, Nature, or Religion"
        },
        "fighting style": {
            name: "Fighting Style",
            source: ["LL:BH", 0],
            minlevel: 1,
            description: desc([
                "Choose a Fighting Style for the blood hunter using the \"Choose Feature\" button above.",
                "Whenever I gain a blood hunter level, I can switch my Fighting Style for another."
            ]),
            choices: ["Archery", "Dual Wielding", "Dueling", "Featherweight Fighting", "Great Weapon Fighting", "Melee Marksman", "Thrown Weapon Fighting", "Versatile Fighting"],
            "archery": FightingStylesLL.archery,
            "dual wielding": FightingStylesLL.dual_wielding,
            "dueling": FightingStylesLL.dueling,
            "featherweight fighting": FightingStylesLL.featherweight,
            "great weapon fighting": FightingStylesLL.great_weapon,
            "melee marksman": FightingStylesLL.melee_marksman,
            "thrown weapon fighting": FightingStylesLL.thrown_weapon,
            "versatile fighting": FightingStylesLL.versatile
        },
        "blood rites": {
            name: "Blood Rites",
            source: ["LL:BH", 0],
            minlevel: 2,
            description: desc([
                "I learn Blood Rites that I can invoke, using my Rite Die (starts as d4)",
                "Once per short/long rest each, or make Vital Sacrifice to use again",
                "Vital Sacrifice: reduce max and current HP by 1 Rite Die roll (restored on long rest)",
                "Rite save DC = 8 + proficiency bonus + Constitution modifier"
            ]),
            additional: levels.map(function (n) {
                return n < 2 ? "" :
                    n < 5 ? "d4, 2 rites" :
                        n < 9 ? "d6, 3 rites" :
                            n < 11 ? "d6, 4 rites" :
                                n < 13 ? "d8, 4 rites" :
                                    n < 17 ? "d8, 5 rites" :
                                        "d10, 6 rites";
            }),
            extraname: "Blood Rite",
            extrachoices: [
                "Rite of Agony", "Rite of Anxiety", "Rite of Binding", "Rite of Blindness",
                "Rite of Confusion", "Rite of Knowledge", "Rite of Revelation", "Rite of Siphoning",
                "Rite of the Beast", "Rite of Bonding", "Rite of Corrosion", "Rite of Exposure",
                "Rite of Marking", "Rite of the Puppet", "Rite of Aggression", "Rite of Dread",
                "Rite of the Open Grave", "Rite of the Senseless", "Rite of Decay", "Rite of Nightmares",
                "Rite of Thralldom", "Rite of Exsanguination", "Rite of Reaping", "Rite of Rejuvenation"
            ],
            extratimes: levels.map(function (n) {
                return n < 2 ? 0 :
                    n < 5 ? 2 :
                        n < 9 ? 3 :
                            n < 11 ? 4 :
                                n < 13 ? 4 :
                                    n < 17 ? 5 :
                                        6;
            }),

            // Basic Rites (no prerequisites)
            "rite of agony": {
                name: "Rite of Agony",
                description: desc([
                    "As a bonus action, target within 30 ft makes Constitution save",
                    "On failure: disadvantage on Str/Dex checks/saves, takes 1 Rite Die necrotic when attacking",
                    "Effects end at end of my next turn",
                    "Empowered: Effects last 1 minute, target repeats save at end of turns"
                ]),
                action: ["bonus action", ""]
            },

            "rite of anxiety": {
                name: "Rite of Anxiety",
                description: desc([
                    "As a bonus action, curse target within 30 ft for 1 minute",
                    "Creatures of my choice add 1 Rite Die to Charisma checks to influence target",
                    "Empowered: Target has disadvantage on next Int/Wis/Cha save before my next turn"
                ]),
                action: ["bonus action", ""]
            },

            "rite of binding": {
                name: "Rite of Binding",
                description: desc([
                    "As a bonus action, Large or smaller target within 30 ft makes Strength save",
                    "On failure: speed becomes 0, can't use reactions until end of my next turn",
                    "Empowered: Any size target, lasts 1 minute, repeat saves at end of turns"
                ]),
                action: ["bonus action", ""]
            },

            "rite of blindness": {
                name: "Rite of Blindness",
                description: desc([
                    "When creature within 30 ft hits another with attack, reaction to invoke",
                    "Attacker subtracts 1 Rite Die from attack roll, potentially turning hit to miss",
                    "Empowered: Also subtract 1 Rite Die from all attacks until end of next turn"
                ]),
                action: ["reaction", " (when creature hits with attack)"]
            },

            "rite of confusion": {
                name: "Rite of Confusion",
                description: desc([
                    "As a bonus action, target concentrating creature within 30 ft",
                    "Target makes Wisdom save or loses concentration",
                    "Empowered: Target subtracts 1 Rite Die from the saving throw"
                ]),
                action: ["bonus action", ""]
            },

            "rite of knowledge": {
                name: "Rite of Knowledge",
                description: desc([
                    "When learning this Rite, learn four ritual spells of 3rd level or lower from any list",
                    "Can only cast them as rituals, must make Vital Sacrifice to do so"
                ])
            },

            "rite of revelation": {
                name: "Rite of Revelation",
                description: desc([
                    "When using Hunter's Bane to analyze creature, can invoke to auto-succeed",
                    "Empowered: Turn one damage immunity to resistance, or remove one resistance",
                    "Lasts 1 minute. If no immunities/resistances, learn 3 characteristics"
                ])
            },

            "rite of siphoning": {
                name: "Rite of Siphoning",
                description: desc([
                    "As an action, touch target makes Charisma save",
                    "On failure: takes 2 Rite Dice necrotic, I gain temp HP equal to damage dealt",
                    "Empowered: Necrotic damage treated as maximum possible instead of rolling"
                ]),
                action: ["action", " (touch)"]
            },

            // 5th-level Prerequisites
            "rite of the beast": {
                name: "Rite of the Beast",
                prereqeval: function (v) {
                    return classes.known["blood hunter(laserllama)"] && classes.known["blood hunter(laserllama)"].level >= 5;
                },
                description: desc([
                    "As an action, touch living beast, it makes Charisma save or becomes enthralled 1 hour",
                    "Enthralled beast is friendly, obeys orders, shares initiative, acts on my turn",
                    "Only Dodges unless I use bonus action to command it to take action",
                    "Can only have one creature enthralled by Blood Rite at a time",
                    "Empowered: Beast remains enthralled until end of next long rest"
                ]),
                action: ["action", " (touch beast)", "bonus action", " (command beast)"]
            },

            "rite of bonding": {
                name: "Rite of Bonding",
                prereqeval: function (v) {
                    return classes.known["blood hunter(laserllama)"] && classes.known["blood hunter(laserllama)"].level >= 5;
                },
                description: desc([
                    "As an action, combine blood with willing creature within touch for 1 hour",
                    "While within 60 ft: bonded creature resistant to all damage",
                    "When bonded creature takes damage, I take same amount",
                    "Ends if either at 0 HP or more than 60 ft apart for 1+ minutes",
                    "Empowered: Lasts 8 hours, only ends at 0 HP or 1+ miles apart for 1+ hours"
                ]),
                action: ["action", " (touch willing creature)"]
            },

            "rite of corrosion": {
                name: "Rite of Corrosion",
                prereqeval: function (v) {
                    return classes.known["blood hunter(laserllama)"] && classes.known["blood hunter(laserllama)"].level >= 5;
                },
                description: desc([
                    "As a bonus action, target within 30 ft makes Constitution save",
                    "On failure: poisoned for 1 minute, repeat save at end of turns",
                    "Empowered: Lasts until successful save, takes 2 Rite Dice necrotic on failed saves"
                ]),
                action: ["bonus action", ""]
            },

            "rite of exposure": {
                name: "Rite of Exposure",
                prereqeval: function (v) {
                    return classes.known["blood hunter(laserllama)"] && classes.known["blood hunter(laserllama)"].level >= 5;
                },
                description: desc([
                    "As a bonus action, curse target within 30 ft",
                    "Damage dealt to it before end of my next turn ignores all resistances",
                    "Empowered: Damage treats immunity as resistance"
                ]),
                action: ["bonus action", ""]
            },

            "rite of marking": {
                name: "Rite of Marking",
                prereqeval: function (v) {
                    return classes.known["blood hunter(laserllama)"] && classes.known["blood hunter(laserllama)"].level >= 5;
                },
                description: desc([
                    "As a bonus action, mark target within 30 ft",
                    "I have advantage on attack rolls against it until end of my next turn",
                    "Empowered: Add 1 Rite Die to weapon attack rolls against it"
                ]),
                action: ["bonus action", ""]
            },

            "rite of the puppet": {
                name: "Rite of the Puppet",
                prereqeval: function (v) {
                    return classes.known["blood hunter(laserllama)"] && classes.known["blood hunter(laserllama)"].level >= 5;
                },
                description: desc([
                    "When creature within 30 ft is slain, reaction to invoke",
                    "Creature stands, moves up to speed, makes weapon attack against target in reach",
                    "Empowered: Target adds 1 Rite Die to attack and damage rolls"
                ]),
                action: ["reaction", " (when creature is slain)"]
            },

            // 9th-level Prerequisites
            "rite of aggression": {
                name: "Rite of Aggression",
                prereqeval: function (v) {
                    return classes.known["blood hunter(laserllama)"] && classes.known["blood hunter(laserllama)"].level >= 9;
                },
                description: desc([
                    "As an action, touch willing creature to increase aggression for 1 minute",
                    "Benefits: +1 attack when using Attack/Multiattack, Dash as bonus action, +2 AC/Dex saves",
                    "Drawback: If doesn't damage hostile since last turn, takes 1 Rite Die necrotic",
                    "When ends: Constitution save or gain 1 level exhaustion"
                ]),
                action: ["action", " (touch willing creature)"]
            },

            "rite of dread": {
                name: "Rite of Dread",
                prereqeval: function (v) {
                    return classes.known["blood hunter(laserllama)"] && classes.known["blood hunter(laserllama)"].level >= 9;
                },
                description: desc([
                    "As a bonus action, target within 30 ft that can see/hear me makes Wisdom save",
                    "On failure: frightened 1 minute, must move away by safest route, Dodge if can't move",
                    "If can't see me at end of turn, can repeat save",
                    "Empowered: Stunned while can see me, can repeat save when taking damage"
                ]),
                action: ["bonus action", ""]
            },

            "rite of the open grave": {
                name: "Rite of the Open Grave",
                prereqeval: function (v) {
                    return classes.known["blood hunter(laserllama)"] && classes.known["blood hunter(laserllama)"].level >= 9;
                },
                description: desc([
                    "As an action, touch creature that died within last minute",
                    "Returns to life with 1 HP but gains permanent death save failure",
                    "Cannot return from old age death or restore missing body parts",
                    "Empowered: No permanent death save failure, but gains 1 exhaustion level"
                ]),
                action: ["action", " (touch dead creature)"]
            },

            "rite of the senseless": {
                name: "Rite of the Senseless",
                prereqeval: function (v) {
                    return classes.known["blood hunter(laserllama)"] && classes.known["blood hunter(laserllama)"].level >= 9;
                },
                description: desc([
                    "As a bonus action, target within 30 ft makes Constitution save",
                    "On failure: blinded, deafened, can't speak/make sound for 1 minute",
                    "Repeat save at end of turns",
                    "Empowered: Speed also reduced to 0"
                ]),
                action: ["bonus action", ""]
            },

            // 13th-level Prerequisites
            "rite of decay": {
                name: "Rite of Decay",
                prereqeval: function (v) {
                    return classes.known["blood hunter(laserllama)"] && classes.known["blood hunter(laserllama)"].level >= 13;
                },
                description: desc([
                    "As an action, target within 30 ft makes Constitution save",
                    "On failure: 4 Rite Dice necrotic, speed halved, can't take reactions",
                    "Can repeat save as action: success ends, failure = 2 Rite Dice necrotic + 1 exhaustion",
                    "Empowered: Ignores necrotic resistance, treats immunity as resistance, killed = dust"
                ]),
                action: ["action", ""]
            },

            "rite of nightmares": {
                name: "Rite of Nightmares",
                prereqeval: function (v) {
                    return classes.known["blood hunter(laserllama)"] && classes.known["blood hunter(laserllama)"].level >= 13;
                },
                description: desc([
                    "As an action, target within 30 ft makes Wisdom save",
                    "On failure: 4 Rite Dice psychic damage, frightened 1 minute",
                    "Repeat save at end of turns: success ends, failure = 2 Rite Dice psychic",
                    "Empowered: Also incapacitated with speed 0"
                ]),
                action: ["action", ""]
            },

            "rite of thralldom": {
                name: "Rite of Thralldom",
                prereqeval: function (v) {
                    return classes.known["blood hunter(laserllama)"] && classes.known["blood hunter(laserllama)"].level >= 13;
                },
                description: desc([
                    "As an action, touch living humanoid, it makes Charisma save",
                    "On failure: enthralled 1 minute, friendly, obeys orders completely",
                    "Shares initiative, only Dodges unless I use bonus action to command",
                    "Can only enthrall one creature at a time",
                    "Empowered: Enthralled for up to 1 hour"
                ]),
                action: ["action", " (touch humanoid)", "bonus action", " (command thrall)"]
            },

            // 17th-level Prerequisites
            "rite of exsanguination": {
                name: "Rite of Exsanguination",
                prereqeval: function (v) {
                    return classes.known["blood hunter(laserllama)"] && classes.known["blood hunter(laserllama)"].level >= 17;
                },
                description: desc([
                    "As an action, target within 30 ft makes Constitution save",
                    "On failure: 12 Rite Dice necrotic, half on success",
                    "Creatures I damaged since start of last turn have disadvantage",
                    "Once per short/long rest, cannot use Vital Sacrifice to bypass",
                    "Empowered: Ignores necrotic resistance, treats immunity as resistance, killed = dust"
                ]),
                action: ["action", ""],
                usages: 1,
                recovery: "short rest"
            },

            "rite of reaping": {
                name: "Rite of Reaping",
                prereqeval: function (v) {
                    return classes.known["blood hunter(laserllama)"] && classes.known["blood hunter(laserllama)"].level >= 17;
                },
                description: desc([
                    "As an action, creatures of choice within 60 ft make Constitution save",
                    "On failure: 5 Rite Dice necrotic, half on success",
                    "Creatures I damaged since start of last turn have disadvantage",
                    "Once per short/long rest, cannot use Vital Sacrifice to bypass",
                    "Empowered: Ignores necrotic resistance, treats immunity as resistance, killed = dust"
                ]),
                action: ["action", ""],
                usages: 1,
                recovery: "short rest"
            },

            "rite of rejuvenation": {
                name: "Rite of Rejuvenation",
                prereqeval: function (v) {
                    return classes.known["blood hunter(laserllama)"] && classes.known["blood hunter(laserllama)"].level >= 17;
                },
                description: desc([
                    "As an action, touch living willing creature",
                    "Target gains all benefits of short rest, including spending Hit Dice",
                    "Target's max lifespan permanently reduced by 1 year 1 day, gains 1 exhaustion",
                    "Once per short/long rest, cannot use Vital Sacrifice to bypass"
                ]),
                action: ["action", " (touch willing creature)"],
                usages: 1,
                recovery: "short rest"
            }
        },
        "crimson offering": {
            name: "Crimson Offering",
            source: ["LL:BH", 0],
            minlevel: 2,
            description: desc([
                "As a bonus action, I can make a Vital Sacrifice to empower one weapon for 1 hour",
                "Choose acid, cold, fire, lightning, or poison",
                "Attacks with that weapon deal bonus damage of that type equal to one Rite Die"
            ]),
            action: ["bonus action", " (empower weapon)"]
        },
        "extra attack": {
            name: "Extra Attack",
            source: ["LL:BH", 0],
            minlevel: 5,
            description: desc("I can attack twice when I take the Attack action on my turn"),
            action: [["attack", " (2 attacks)"]]
        },
        "grim psychometry": {
            name: "Grim Psychometry",
            source: ["LL:BH", 0],
            minlevel: 5,
            description: desc([
                "I can use alchemist's supplies to cast identify as a ritual (also reveals curses)",
                "At 9th level: can cast legend lore by making Vital Sacrifice, targeting objects/creatures/locations with evil/violent/cursed history"
            ]),
            spellcastingBonus: {
                name: "Grim Psychometry",
                spells: ["identify"],
                selection: ["identify"],
                firstCol: "(R)"
            }
        },
        "crimson brand": {
            name: "Crimson Brand",
            source: ["LL:BH", 0],
            minlevel: 6,
            description: desc([
                "I can make a Crimson Offering once per short/long rest without Vital Sacrifice",
                "When I damage a creature with Crimson Offering weapon attack, I can Brand it:",
                "While Branded: I know its direction, when it damages me/ally within 15 ft it takes Rite Die damage",
                "Brand lasts until creature dies, I Brand another, or remove curse is cast"
            ]),
            usages: 1,
            recovery: "short rest"
        },
        "dark augmentation": {
            name: "Dark Augmentation",
            source: ["LL:BH", 0],
            minlevel: 10,
            description: desc("On Strength, Dexterity, or Constitution checks/saves, I add one Rite Die to the roll")
        },
        "improved crimson offering": {
            name: "Improved Crimson Offering",
            source: ["LL:BH", 0],
            minlevel: 11,
            description: desc("Crimson Offering bonus damage can also be necrotic, psychic, or thunder")
        },
        "vital control": {
            name: "Vital Control",
            source: ["LL:BH", 0],
            minlevel: 11,
            description: desc([
                "When making Vital Sacrifice, I roll Rite Die twice and choose which result to use",
                "Once per long rest, I can use one Blood Rite without making Vital Sacrifice"
            ]),
            usages: 1,
            recovery: "long rest"
        },
        "crimson anchor": {
            name: "Crimson Anchor",
            source: ["LL:BH", 0],
            minlevel: 14,
            description: desc([
                "Branded creature must make Charisma save to teleport or leave plane",
                "On failure: ability fails and takes 4 Rite Dice Crimson Offering damage",
                "Crimson Brand damage increases to 2 Rite Dice when Branded target damages me/ally"
            ])
        },
        "hardened soul": {
            name: "Hardened Soul",
            source: ["LL:BH", 0],
            minlevel: 15,
            description: desc("On Intelligence, Wisdom, or Charisma saves, I add one Rite Die to the roll")
        },
        "sanguine mastery": {
            name: "Sanguine Mastery",
            source: ["LL:BH", 0],
            minlevel: 20,
            description: desc([
                "When rolling Rite Die for Blood Rites/abilities, I roll twice and choose which result",
                "When making Vital Sacrifice, I subtract Con modifier (min 1) from the roll (min 1 damage)"
            ])
        }
    }
};

// Order of Alchemists
AddSubClass("blood hunter(laserllama)", "order of alchemists", {
    regExpSearch: /^(?=.*alchemist).*$/i,
    subname: "Order of Alchemists",
    source: ["LL:BH", 0],
    features: {
        "subclassfeature3": {
            name: "Aberrant Alchemy",
            source: ["LL:BH", 0],
            minlevel: 3,
            description: desc([
                "I inoculate my bloodstream with 3 Latent Mutagens of my choice",
                "As a bonus action, I can Mutate for 10 minutes, gaining benefits from Con mod Mutagens",
                "Can Mutate once per short/long rest, or make Vital Sacrifice to use again",
                "During long rest, can spend 1 hour to replace one Latent Mutagen"
            ]),
            additional: levels.map(function (n) {
                return n < 3 ? "" :
                    n < 7 ? "3 mutagens" :
                        n < 13 ? "5 mutagens" :
                            n < 18 ? "7 mutagens" :
                                "9 mutagens";
            }),
            action: ["bonus action", " (Mutate)"],
            usages: 1,
            recovery: "short rest",
            extraname: "Mutagen",
            extrachoices: [
                "Aberrant Sight", "Aquatic Adaptation", "Enhanced Movement", "Grappling Appendage",
                "Knotted Flesh", "Monstrous Glide", "Oozing Form", "Unnatural Physicality",
                "Acidic Bile", "Corrosive Blood", "Dislocated Reach", "Engorged Physique",
                "Inoculated Vigor", "Toxic Symbiosis", "Viscous Grip", "Accelerated Physiology",
                "Alchemical Intellect", "Hideous Regeneration", "Monstrous Flight", "Synthetic Carapace"
            ],
            extratimes: levels.map(function (n) {
                return n < 3 ? 0 :
                    n < 7 ? 3 :
                        n < 13 ? 5 :
                            n < 18 ? 7 :
                                9;
            }),
            "aberrant sight": {
                name: "Aberrant Sight",
                description: desc([
                    "My eyes become voids of inky darkness",
                    "I gain darkvision out to 60 ft, or +60 ft if I already have it",
                    "Within this radius, I can also see through magical darkness"
                ]),
                vision: [["Darkvision", "fixed 60"], ["Darkvision", "+60"]]
            },

            "aquatic adaptation": {
                name: "Aquatic Adaptation",
                description: desc([
                    "My neck sprouts gills or my skin becomes permeable like an amphibious creature",
                    "I gain swimming speed equal to walking speed and can breathe air and water"
                ]),
                speed: { swim: { spd: "walk", enc: "walk" } }
            },

            "enhanced movement": {
                name: "Enhanced Movement",
                description: desc([
                    "My legs grow unnaturally thick and powerful, but become grotesque to look upon",
                    "I can take the Dash action as a bonus action on each of my turns"
                ]),
                action: ["bonus action", " (Dash)"]
            },

            "grappling appendage": {
                name: "Grappling Appendage",
                description: desc([
                    "I grow an extra appendage from my back that resembles a tentacle",
                    "This appendage has 10 ft reach and can make unarmed strikes, shove, and grapple",
                    "On hit: deals bludgeoning damage equal to one Rite Die",
                    "Can be used for simple tasks but cannot wield weapons/shields or manipulate objects/tools",
                    "At 13th level: this Mutagen grows two appendages"
                ]),
                weaponOptions: {
                    regExpSearch: /^(?=.*grappling)(?=.*appendage).*$/i,
                    name: "Grappling Appendage",
                    source: ["LL:BH", 0],
                    ability: 1,
                    type: "Natural",
                    damage: [1, 0, "bludgeoning"],
                    range: "Melee (10 ft)",
                    description: "Uses Rite Die for damage; can grapple Large or smaller",
                    abilitytodamage: true
                }
            },

            "knotted flesh": {
                name: "Knotted Flesh",
                description: desc([
                    "My skin becomes hard and knotted like that of a tree or great beast",
                    "I can use Constitution modifier in place of Dexterity when calculating AC in armor",
                    "While not wearing armor: AC = 13 + Constitution modifier"
                ]),
                armorOptions: {
                    regExpSearch: /^(?=.*knotted)(?=.*flesh).*$/i,
                    name: "Knotted Flesh",
                    source: ["LL:BH", 0],
                    ac: 13,
                    addMod: true
                }
            },

            "monstrous glide": {
                name: "Monstrous Glide",
                description: desc([
                    "I grow bat-like skin flaps that I use to glide",
                    "When I fall at least 10 ft and aren't incapacitated:",
                    "I can subtract up to 100 ft from fall when calculating fall damage",
                    "I can move horizontally 2 ft for every 1 ft I fall"
                ])
            },

            "oozing form": {
                name: "Oozing Form",
                description: desc([
                    "My body can become slimy and pliable",
                    "As bonus action: morph into (or revert from) ooze-like state",
                    "Allows me to squeeze through gaps as narrow as 1 inch",
                    "Has no effect on weapons/armor/clothing/objects, cannot attack while in this state"
                ]),
                action: ["bonus action", " (morph into/from ooze)"]
            },

            "unnatural physicality": {
                name: "Unnatural Physicality",
                description: desc([
                    "My muscles and veins engorge with dark toxic chemicals",
                    "I add one Rite Die roll to any Strength (Athletics) or Dexterity (Acrobatics) checks"
                ])
            },

            // 7th-level Prerequisites
            "acidic bile": {
                name: "Acidic Bile",
                prereqeval: function (v) {
                    return classes.known["blood hunter(laserllama)"] && classes.known["blood hunter(laserllama)"].level >= 7;
                },
                description: desc([
                    "I can spew corrosive acid from my mouth",
                    "I know the acid splash cantrip, Constitution is my spellcasting modifier",
                    "When I deal damage with it, I add Con modifier (min +1) to damage"
                ]),
                spellcastingBonus: {
                    name: "Acidic Bile",
                    spells: ["acid splash"],
                    selection: ["acid splash"],
                    firstCol: "atwill"
                }
            },

            "corrosive blood": {
                name: "Corrosive Blood",
                prereqeval: function (v) {
                    return classes.known["blood hunter(laserllama)"] && classes.known["blood hunter(laserllama)"].level >= 7;
                },
                description: desc([
                    "My wounds expel corrosive acid",
                    "When hit by attack and attacker is within 30 ft:",
                    "I can use reaction to deal acid damage = one Rite Die + Con modifier"
                ]),
                action: ["reaction", " (when hit by attack within 30 ft)"]
            },

            "dislocated reach": {
                name: "Dislocated Reach",
                prereqeval: function (v) {
                    return classes.known["blood hunter(laserllama)"] && classes.known["blood hunter(laserllama)"].level >= 7;
                },
                description: desc([
                    "My strange experiments allow joints to unnaturally stretch, crack, and expand",
                    "The length of my arms doubles and reach of melee attacks increases by 5 ft"
                ])
            },

            "engorged physique": {
                name: "Engorged Physique",
                prereqeval: function (v) {
                    return classes.known["blood hunter(laserllama)"] && classes.known["blood hunter(laserllama)"].level >= 7;
                },
                description: desc([
                    "Chemicals forcefully enlarge my body, giving hideous physique",
                    "I grow by one size, reach increases by 5 ft, weight multiplies by eight",
                    "Melee weapon attacks deal bonus damage = one Rite Die on hit",
                    "If no room to grow: grow to maximum size allowed by surroundings"
                ])
            },

            "inoculated vigor": {
                name: "Inoculated Vigor",
                prereqeval: function (v) {
                    return classes.known["blood hunter(laserllama)"] && classes.known["blood hunter(laserllama)"].level >= 7;
                },
                description: desc([
                    "I inoculate myself against all but the worst poisons",
                    "I gain immunity to acid and poison damage",
                    "I gain immunity to all disease and the poisoned condition"
                ]),
                dmgres: ["Acid", "Poison"],
                savetxt: { immune: ["disease", "poisoned"] }
            },

            "toxic symbiosis": {
                name: "Toxic Symbiosis",
                prereqeval: function (v) {
                    return classes.known["blood hunter(laserllama)"] && classes.known["blood hunter(laserllama)"].level >= 7;
                },
                description: desc([
                    "When I hit creature with melee attack:",
                    "I can use bonus action to suck life from wound and gain temp HP = Con modifier",
                    "Cannot be used against Constructs or Undead"
                ]),
                action: ["bonus action", " (gain temp HP after melee hit)"]
            },

            "viscous grip": {
                name: "Viscous Grip",
                prereqeval: function (v) {
                    return classes.known["blood hunter(laserllama)"] && classes.known["blood hunter(laserllama)"].level >= 7;
                },
                description: desc([
                    "My hands and feet secrete a sticky substance",
                    "I gain climbing speed equal to walking speed",
                    "I can climb difficult surfaces without ability checks",
                    "Creatures have disadvantage on checks/saves to escape being grappled by me"
                ]),
                speed: { climb: { spd: "walk", enc: "walk" } }
            },

            // 13th-level Prerequisites
            "accelerated physiology": {
                name: "Accelerated Physiology",
                prereqeval: function (v) {
                    return classes.known["blood hunter(laserllama)"] && classes.known["blood hunter(laserllama)"].level >= 13;
                },
                description: desc([
                    "Chemicals enhance my physical ability and increase aggression",
                    "When I take Attack action: I can make three attacks instead of two",
                    "However, if I end turn without attacking since previous turn:",
                    "I take necrotic damage = one Rite Die"
                ])
            },

            "alchemical intellect": {
                name: "Alchemical Intellect",
                prereqeval: function (v) {
                    return classes.known["blood hunter(laserllama)"] && classes.known["blood hunter(laserllama)"].level >= 13;
                },
                description: desc([
                    "Strange chemicals enhance my mind at expense of body",
                    "I have advantage on all Int, Wis, and Cha saves",
                    "I have disadvantage on all Str, Dex, and Con saves"
                ]),
                savetxt: {
                    text: ["Adv. on Int, Wis, Cha saves; Disadv. on Str, Dex, Con saves"]
                }
            },

            "hideous regeneration": {
                name: "Hideous Regeneration",
                prereqeval: function (v) {
                    return classes.known["blood hunter(laserllama)"] && classes.known["blood hunter(laserllama)"].level >= 13;
                },
                description: desc([
                    "If I begin turn with less than half hit points but at least 1 HP:",
                    "I instantly regain HP = Constitution modifier (minimum 1)"
                ])
            },

            "monstrous flight": {
                name: "Monstrous Flight",
                prereqeval: function (v) {
                    return classes.known["blood hunter(laserllama)"] && classes.known["blood hunter(laserllama)"].level >= 13;
                },
                description: desc([
                    "A pair of monstrous leathery wings sprout from my back",
                    "I gain flying speed equal to walking speed"
                ]),
                speed: { fly: { spd: "walk", enc: "walk" } }
            },

            "synthetic carapace": {
                name: "Synthetic Carapace",
                prereqeval: function (v) {
                    return classes.known["blood hunter(laserllama)"] && classes.known["blood hunter(laserllama)"].level >= 13;
                },
                description: desc([
                    "My skin hardens resembling that of a terrible insectoid creature",
                    "I gain +2 bonus to AC",
                    "I gain resistance to bludgeoning, piercing, and slashing from non-magical, non-silvered attacks"
                ]),
                extraAC: { mod: 2, text: "I gain a +2 bonus to AC from my synthetic carapace.", stopeval: function (v) { return v.wearingArmor; } },
                dmgres: ["Bludgeoning, Piercing, and Slashing from nonmagical, non-silvered attacks"]
            }

        },
        "subclassfeature3.1": {
            name: "Monstrous Awareness",
            source: ["LL:BH", 0],
            minlevel: 3,
            description: desc([
                "When using alchemist's supplies or Hunter's Bane on Aberrations/Monstrosities/Oozes:",
                "I add one Rite Die roll to the check"
            ])
        },
        "subclassfeature7": {
            name: "Enduring Mutation",
            source: ["LL:BH", 0],
            minlevel: 7,
            description: desc([
                "During long rest, can spend 1 hour to make one Latent Mutagen permanent",
                "This Enduring Mutagen is always active, even when not Mutated",
                "Can replace during subsequent long rests"
            ])
        },
        "subclassfeature13": {
            name: "Noxious Strike",
            source: ["LL:BH", 0],
            minlevel: 13,
            description: desc([
                "Once per turn on melee hit, target makes Con save or takes 4 Rite Dice acid damage",
                "On failure: also blinded or stunned (my choice) for 1 minute",
                "Target repeats save when taking damage, ending effect on success"
            ]),
            usages: "Constitution modifier per ",
            usagescalc: "event.value = Math.max(1, What('Con Mod'));",
            recovery: "long rest"
        },
        "subclassfeature18": {
            name: "Rapid Mutation",
            source: ["LL:BH", 0],
            minlevel: 18,
            description: desc("While Mutated, can use bonus action to switch one active Mutagen for a Latent one"),
            action: ["bonus action", " (switch mutagen)"]
        }
    }
});

// Order of Heretics
AddSubClass("blood hunter(laserllama)", "order of heretics", {
    regExpSearch: /^(?=.*heretic).*$/i,
    subname: "Order of Heretics",
    source: ["LL:BH", 0],
    features: {
        "subclassfeature3": {
            name: "Blasphemous Prayer",
            source: ["LL:BH", 0],
            minlevel: 3,
            description: desc([
                "I gain Censure the Divine and one 2nd-level Cleric Domain Channel Divinity",
                "Use Blood Hunter level as Cleric level and Rite save DC",
                "Can use each Channel Divinity once per long rest, or make Vital Sacrifice"
            ]),
            usages: 2,
            recovery: "long rest",
            action: ["action", " (Channel Divinity)"],
            extraname: "Channel Divinity",
            extrachoices: ["Censure the Divine"],
            "censure the divine": {
                name: "Censure the Divine",
                description: desc([
                    "As action, Celestials/Fiends/divine casters within 30 ft make Cha save",
                    "On failure: incapacitated and restrained for 1 minute",
                    "Repeat save at end of turn and when taking damage"
                ])
            }
        },
        "subclassfeature3.1": {
            name: "Heretical Knowledge",
            source: ["LL:BH", 0],
            minlevel: 3,
            description: desc([
                "I gain proficiency in Religion (expertise if already proficient)",
                "I learn 2 Cleric cantrips, Constitution is spellcasting modifier",
                "Hunter's Bane on Celestials/Fiends/Undead: add one Rite Die to check"
            ]),
            spellcastingBonus: {
                name: "Heretical Knowledge",
                class: "cleric",
                level: [0, 0],
                times: 2
            }
        },
        "subclassfeature7": {
            name: "Unholy Restoration",
            source: ["LL:BH", 0],
            minlevel: 7,
            description: desc([
                "As action, target within 30 ft makes Con save (disadvantage if touched)",
                "Takes 4 Rite Dice necrotic damage (half on success)",
                "Another creature within 30 ft regains HP equal to half necrotic damage dealt"
            ]),
            action: ["action", ""],
            usages: "Constitution modifier per ",
            usagescalc: "event.value = Math.max(1, What('Con Mod'));",
            recovery: "long rest"
        },
        "subclassfeature13": {
            name: "Divine Anathema",
            source: ["LL:BH", 0],
            minlevel: 13,
            description: desc([
                "Can empower Censure the Divine with Vital Sacrifice",
                "Targets within 30 ft make Con save, speed reduced by 10 ft on failure",
                "Repeat save each turn: failure = -10 ft speed, success = +10 ft speed",
                "Petrified when speed reduction equals total speed"
            ])
        },
        "subclassfeature18": {
            name: "Utmost Transgression",
            source: ["LL:BH", 0],
            minlevel: 18,
            description: desc([
                "Can cast summon celestial at 5th level using Constitution modifier",
                "Celestial bound against its will, ignore material component, duration 1 minute"
            ]),
            usages: 1,
            recovery: "short rest",
            spellcastingBonus: {
                name: "Utmost Transgression",
                spells: ["summon celestial"],
                selection: ["summon celestial"],
                firstCol: "oncesr"
            }
        }
    }
});

// Order of the Pale Moon
AddSubClass("blood hunter(laserllama)", "order of the pale moon", {
    regExpSearch: /^(?=.*pale)(?=.*moon).*$/i,
    subname: "Order of the Pale Moon",
    source: ["LL:BH", 0],
    features: {
        "subclassfeature3": {
            name: "Beast Form",
            source: ["LL:BH", 0],
            minlevel: 3,
            description: desc([
                "Choose CR 1 or lower beast without fly/swim speed as my Beast Form",
                "As bonus action, make Vital Sacrifice to Wild Shape into chosen form for 1 hour",
                "Retain current/max HP, gain temp HP = 2×level, natural weapons use Rite Die",
                "Can make another Vital Sacrifice at end to extend 1 hour"
            ]),
            action: ["bonus action", " (Beast Form)"]
        },
        "subclassfeature3.1": {
            name: "Hybrid Form",
            source: ["LL:BH", 0],
            minlevel: 3,
            description: desc([
                "As bonus action, shift into Hybrid Form for 1 minute:",
                "Walking speed +10 ft, temp HP = level",
                "Grow claws/fangs (light weapons, 1 Rite Die + Str slashing damage)",
                "Can make Vital Sacrifice at end to extend 1 minute"
            ]),
            action: ["bonus action", " (Hybrid Form)"],
            usages: 1,
            recovery: "short rest",
            speed: { walk: { spd: "+10", enc: "+10" } }
        },
        "subclassfeature3.2": {
            name: "Feral Senses",
            source: ["LL:BH", 0],
            minlevel: 3,
            description: desc([
                "Perception/Survival checks based on hearing/sight/smell: add one Rite Die",
                "Hunter's Bane on beasts/monstrosities/shapeshifters: add one Rite Die"
            ])
        },
        "subclassfeature7": {
            name: "Lycan Warrior",
            source: ["LL:BH", 0],
            minlevel: 7,
            description: desc([
                "While in Beast or Hybrid Form:",
                "Attacks count as magical for overcoming resistance/immunity",
                "Resistance to nonmagical, non-silvered bludgeoning/piercing/slashing",
                "If holding Crimson Offering weapon when shifting, effect transfers to Form weapons"
            ]),
            dmgres: ["Bludgeoning, Piercing, and Slashing from nonmagical, non-silvered attacks (in forms)"]
        },
        "subclassfeature13": {
            name: "Feral Prowess",
            source: ["LL:BH", 0],
            minlevel: 13,
            description: desc([
                "While in Beast/Hybrid Form with at least 1 HP and less than half max HP:",
                "Regain Con modifier HP (min 1) at start of each turn",
                "Advantage on attacks against creatures marked by Crimson Brand"
            ])
        },
        "subclassfeature18": {
            name: "Lycanthropic Mastery",
            source: ["LL:BH", 0],
            minlevel: 18,
            description: desc([
                "Can shift into Beast or Hybrid Form at will without Vital Sacrifice",
                "Both transformations last indefinitely",
                "Can take Dash as bonus action if ending movement closer to hostile creature"
            ]),
            action: ["bonus action", " (Dash towards enemy)"]
        }
    }
});

// Order of Salt & Iron
AddSubClass("blood hunter(laserllama)", "order of salt & iron", {
    regExpSearch: /^(?=.*salt)(?=.*iron).*$/i,
    subname: "Order of Salt & Iron",
    source: ["LL:BH", 0],
    features: {
        "subclassfeature3": {
            name: "Spectral Nature",
            source: ["LL:BH", 0],
            minlevel: 3,
            description: desc([
                "I require half normal sleep, food, and drink",
                "As bonus action, enter Spectral State until end of turn:",
                "Resistant to nonmagical, non-silvered bludgeoning/piercing/slashing",
                "Can move through solid objects/creatures as difficult terrain"
            ]),
            additional: levels.map(function (n) {
                return n < 3 ? "" :
                    n < 7 ? "until end of turn" :
                        n < 13 ? "1 minute" :
                            n < 18 ? "1 hour" :
                                "indefinite";
            }),
            action: ["bonus action", " (Spectral State)"],
            usages: "Constitution modifier per ",
            usagescalc: "event.value = Math.max(1, What('Con Mod'));",
            recovery: "long rest"
        },
        "subclassfeature3.1": {
            name: "Warrior of the Dawn",
            source: ["LL:BH", 0],
            minlevel: 3,
            description: desc([
                "Hunter's Bane on Undead: add one Rite Die to check",
                "When using Crimson Offering, can empower with Order magic:",
                "Bonus damage becomes radiant, gain resistance to necrotic damage",
                "Weapon sheds bright light in 30-foot radius"
            ]),
            dmgres: ["Necrotic (with empowered Crimson Offering)"]
        },
        "subclassfeature7": {
            name: "Curse Specialist",
            source: ["LL:BH", 0],
            minlevel: 7,
            description: desc([
                "Can target any creature with Blood Rites, regardless of having blood",
                "At end of long rest, choose one Blood Rite to use one additional time"
            ])
        },
        "subclassfeature13": {
            name: "Warrior Exorcist",
            source: ["LL:BH", 0],
            minlevel: 13,
            description: desc([
                "As bonus action, end charmed/frightened/magically controlled on ally within 30 ft",
                "If creature causing effect is within 30 ft, it makes Wis save",
                "On failure: takes 4 Rite Dice radiant damage (half on success)"
            ]),
            action: ["bonus action", " (end effect on ally)"],
            usages: 1,
            recovery: "short rest"
        },
        "subclassfeature18": {
            name: "Sacrificial Offering",
            source: ["LL:BH", 0],
            minlevel: 18,
            description: desc([
                "When reduced to 0 HP but not killed outright:",
                "Can reduce max HP by one Rite Die roll and drop to 1 HP instead"
            ])
        },
        "subclassfeature18.1": {
            name: "Spectral Mastery",
            source: ["LL:BH", 0],
            minlevel: 18,
            description: desc([
                "Age 1 year for every 10 years that pass",
                "No longer need to sleep, eat, or drink (6 hours light activity for long rest)",
                "While in Spectral State: gain flying speed equal to walking speed and can hover"
            ]),
            speed: { fly: { spd: "walk", enc: "walk" } }
        }
    }
});

// Order of Undying Thirst
AddSubClass("blood hunter(laserllama)", "order of undying thirst", {
    regExpSearch: /^(?=.*undying)(?=.*thirst).*$/i,
    subname: "Order of Undying Thirst",
    source: ["LL:BH", 0],
    features: {
        "subclassfeature3": {
            name: "Blood Magic Specialist",
            source: ["LL:BH", 0],
            minlevel: 3,
            description: desc([
                "I learn one additional Blood Rite (doesn't count against total known)",
                "My Rite Die increases in size: d6 at 3rd, d8 at 5th, d10 at 11th, d12 at 17th",
                "Crimson Offering bonus damage can be necrotic"
            ])
        },
        "subclassfeature3.1": {
            name: "Vampiric Nature",
            source: ["LL:BH", 0],
            minlevel: 3,
            description: desc([
                "My fangs can be used for unarmed strikes (1 Rite Die + Str piercing damage)",
                "Hunter's Bane on Undead: add one Rite Die to check"
            ]),
            weaponOptions: {
                regExpSearch: /^(?=.*fang).*$/i,
                name: "Fangs",
                source: ["LL:BH", 0],
                ability: 1,
                type: "Natural",
                damage: [1, 0, "piercing"],
                range: "Melee",
                description: "Uses Rite Die for damage",
                abilitytodamage: true
            }
        },
        "subclassfeature7": {
            name: "Essence Drain",
            source: ["LL:BH", 0],
            minlevel: 7,
            description: desc([
                "When hitting with fang attack, can restore max HP equal to piercing damage dealt",
                "Fang piercing damage ignores resistance/immunity to nonmagical damage"
            ]),
            usages: 1,
            recovery: "short rest"
        },
        "subclassfeature7.1": {
            name: "Sinister Resilience",
            source: ["LL:BH", 0],
            minlevel: 7,
            description: desc([
                "When dealing necrotic damage with Blood Rite/Blood Hunter feature:",
                "Can gain temp HP = half necrotic damage dealt",
                "While temp HP last: resistant to necrotic, poison, nonmagical bps damage",
                "All temp HP from this feature lost when taking radiant damage"
            ])
        },
        "subclassfeature13": {
            name: "Misty Escape",
            source: ["LL:BH", 0],
            minlevel: 13,
            description: desc([
                "When hit by attack I can see, reaction to turn into mist and attack misses",
                "Instantly reappear in unoccupied space within 30 ft"
            ]),
            action: ["reaction", " (when hit by attack)"],
            usages: 1,
            recovery: "short rest"
        },
        "subclassfeature18": {
            name: "Crimson Lord",
            source: ["LL:BH", 0],
            minlevel: 18,
            description: desc([
                "I gain flying speed equal to walking speed",
                "Creatures hit by fang attacks have disadvantage on saves vs my Blood Rites until my next turn",
                "For every 10 years that pass, I age only 1 year"
            ]),
            speed: { fly: { spd: "walk", enc: "walk" } }
        }
    }
});

// Order of Witch Knights
AddSubClass("blood hunter(laserllama)", "order of witch knights", {
    regExpSearch: /^(?=.*witch)(?=.*knight).*$/i,
    subname: "Order of Witch Knights",
    source: ["LL:BH", 0],
    spellcastingFactor: "warlock3",
    spellcastingFactorRoundupMulti: false,
    spellcastingTable: [
        [0, 0, 0, 0, 0], // lvl 0
        [0, 0, 0, 0, 0], // lvl 1
        [0, 0, 0, 0, 0], // lvl 2
        [1, 0, 0, 0, 0], // lvl 3
        [2, 0, 0, 0, 0], // lvl 4
        [2, 0, 0, 0, 0], // lvl 5
        [2, 0, 0, 0, 0], // lvl 6
        [0, 2, 0, 0, 0], // lvl 7
        [0, 2, 0, 0, 0], // lvl 8
        [0, 2, 0, 0, 0], // lvl 9
        [0, 2, 0, 0, 0], // lvl 10
        [0, 2, 0, 0, 0], // lvl 11
        [0, 2, 0, 0, 0], // lvl 12
        [0, 0, 2, 0, 0], // lvl 13
        [0, 0, 2, 0, 0], // lvl 14
        [0, 0, 2, 0, 0], // lvl 15
        [0, 0, 2, 0, 0], // lvl 16
        [0, 0, 2, 0, 0], // lvl 17
        [0, 0, 2, 0, 0], // lvl 18
        [0, 0, 0, 2, 0], // lvl 19
        [0, 0, 0, 2, 0]  // lvl 20
    ],
    spellcastingKnown: {
        cantrips: [0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3],
        spells: [0, 0, 2, 2, 3, 3, 4, 4, 5, 5, 5, 5, 6, 6, 6, 6, 7, 7, 7, 7]
    },
    features: {
        "subclassfeature3": {
            name: "Pact Magic",
            source: ["LL:BH", 0],
            minlevel: 3,
            description: desc([
                "I can cast Witch Knight cantrips/spells using Intelligence as spellcasting ability",
                "I regain all expended spell slots on a short or long rest",
                "All spell slots are the same level"
            ]),
            additional: levels.map(function (n, idx) {
                var cantr = [0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3][idx];
                var splls = [0, 0, 2, 2, 3, 3, 4, 4, 5, 5, 5, 5, 6, 6, 6, 6, 7, 7, 7, 7][idx];
                var slots = [0, 0, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2][idx];
                var slvl = [0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 4, 4][idx];
                return n < 3 ? "" : cantr + " cantrips \u0026 " + splls + " spells known; " + slots + " " + Base_spellLevelList[slvl] + " spell slots";
            })
        },
        "subclassfeature3.1": {
            name: "Crimson Smite",
            source: ["LL:BH", 0],
            minlevel: 3,
            description: desc([
                "Can use Crimson Offering weapon as spellcasting focus for Witch Knight spells",
                "On Crimson Offering weapon hit, can expend spell slot for bonus damage:",
                "2 Rite Dice for 1st-level slot, +1 Rite Die per slot level above 1st"
            ])
        },
        "subclassfeature7": {
            name: "Sanguine Warrior",
            source: ["LL:BH", 0],
            minlevel: 7,
            description: desc([
                "If I cast Witch Knight spell or activate concentration spell, can make weapon attack as bonus action",
                "When casting Witch Knight spell while holding Crimson Offering weapon:",
                "Can change spell damage type to Crimson Offering damage type"
            ]),
            action: ["bonus action", " (weapon attack after casting)"]
        },
        "subclassfeature13": {
            name: "Bewitched Strikes",
            source: ["LL:BH", 0],
            minlevel: 13,
            description: desc([
                "When I hit with weapon attack, target has disadvantage on next save",
                "Against Blood Rite or spell I cast before end of my next turn"
            ])
        },
        "subclassfeature18": {
            name: "Profane Sacrifice",
            source: ["LL:BH", 0],
            minlevel: 18,
            description: desc([
                "When hostile creature dies within 30 ft, reaction to:",
                "Regain one Pact Magic spell slot, or",
                "Gain temp HP = 1 Rite Die + Int modifier"
            ]),
            action: ["reaction", " (when enemy dies within 30 ft)"],
            usages: 1,
            recovery: "short rest"
        }
    }
});

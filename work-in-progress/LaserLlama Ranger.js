/* -WHAT IS THIS?-
This file adds optional material to "MPMB's Character Record Sheet" found at https://flapkan.com/mpmb/charsheets
Import this file using the "Add Extra Materials" bookmark.

-KEEP IN MIND-
It is recommended to enter the code in a fresh sheet before adding any other information (i.e. before making your character with it).
*/

/* -INFORMATION-
Subject: Class
Effect: This script adds Alternative Ranger class as described by LaserLlama https://www.gmbinder.com/share/-M7iu19Af89SH2G_5RGa
Code by: Rocky
Date: 2025-05-28 (sheet v13)
*/
//to do: knacks prereqs, creatures, and subclass testing

var iFileName = "LaserLlama Ranger.js";

RequiredSheetVersion(13);
SourceList["LL:AR"] = {
    name: "LaserLlama - Alternate Ranger",
    abbreviation: "LL:AR",
    abbreviationSpellsheet: "AR",
    group: "Rocky's Homebrew",
    source: "https://www.gmbinder.com/share/-M7iu19Af89SH2G_5RGa",
};
[
        // 1st Level
        "absorb elements", "alarm", "animal friendship", "beast bond", "cure wounds", 
        "detect magic", "detect poison and disease", "ensnaring strike", "entangle", 
        "expeditious retreat", "fog cloud", "goodberry", "hail of thorns", "jump", 
        "longstrider", "purify food and drink", "snare", "speak with animals", "zephyr strike",
        
        // 2nd Level  
        "aid", "animal messenger", "barkskin", "beast sense", "continual flame", 
        "cordon of arrows", "darkvision", "enhance ability", "find traps", "gust of wind", 
        "healing spirit", "locate creature", "magic weapon", "pass without trace", 
        "protection from poison", "restoration", "silence", "spike growth", "summon beast",
        
        // 3rd Level
        "conjure animals", "conjure volley", "daylight", "dispel magic", "elemental weapon", 
        "flame arrows", "lightning arrows", "meld into stone", "nondetection", "plant growth", 
        "revivify", "speak with plants", "summon fey", "tiny hut", "water breathing", 
        "water walk", "wind wall",
        
        // 4th Level
        "conjure woodland beings", "death ward", "divination", "dominate beast", 
        "freedom of movement", "grasping vine", "guardian of nature", "stoneskin", 
        "summon elemental",
        
        // 5th Level
        "awaken", "commune with nature", "contagion", "steel wind strike", "swift quiver", 
        "tree stride", "wrath of nature"
].forEach(function (s) { if (SpellsList[s] && SpellsList[s].classes && SpellsList[s].classes.indexOf("ranger(laserllama)") === -1) SpellsList[s].classes.push("ranger(laserllama)"); });

ClassList["ranger(laserllama)"] = {
    regExpSearch: /^(?=.*ranger)(?=.*alt|alternate).*$/i,
    name: "Ranger (Alternate)",
    source: ["LL:AR", 0],
    primaryAbility: "Dexterity and Wisdom",
    die: 10,
    improvements: [0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 5, 5],
    saves: ["Str", "Dex"],
    skillstxt: {
        primary: "Choose 3 from: Animal Handling, Athletics, Insight, Investigation, Medicine, Nature, Perception, Sleight of Hand, Stealth, and Survival"
    },
    armorProfs: {
        primary: [true, true, false, true]
    },
    weaponProfs: {
        primary: [true, true]
    },
    equipment: "Ranger starting equipment:\n \u2022 Two shortswords or two simple melee weapons;\n \u2022 Chain shirt and shield, or leather armor;\n \u2022 Longbow and 20 arrows, or a martial weapon;\n \u2022 Dungeoneer's pack or explorer's pack.",
    subclasses: ["Ranger Conclave", []],
    attacks: [1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
    spellcastingFactor: 3,
    spellcastingKnown: {
        prepared: true
    },
    features: {
        "fighting style": {
            name: "Fighting Style",
            source: ["LL:AR", 0],
            minlevel: 1,
            description: desc([
                "Choose a Fighting Style for the ranger using the \"Choose Feature\" button above.",
                "Whenever I gain a ranger level, I can switch my Fighting Style for another."
            ]),
            choices: ["Archery", "Defense Fighting", "Dual Wielding", "Dueling", "Featherweight Fighting", "Mariner", "Mountaineer", "Strongbow", "Thrown Weapon Fighting", "Versatile Fighting"],
            "archery": FightingStylesLL.archery,
            "defense fighting": FightingStylesLL.defense,
            "dual wielding": FightingStylesLL.dual_wielding,
            "dueling": FightingStylesLL.dueling,
            "featherweight fighting": FightingStylesLL.featherweight,
            "mariner": FightingStylesLL.mariner,
            "mountaineer": FightingStylesLL.mountaineer,
            "strongbow": FightingStylesLL.strongbow,
            "pit fighting": FightingStylesLL.pit,
            "thrown weapon fighting": FightingStylesLL.thrown,
            "versatile fighting": FightingStylesLL.versatile
        },
        knacks: {
            name: "Knacks",
            source: ["LL:AR", 0],
            minlevel: 1,
            description: desc([
                "I learn primal knowledge called Knacks that enhance my hunting and survival skills",
                "I can replace one known Knack when I gain a ranger level (must still meet prerequisites)"
            ]),
            additional: levels.map(function (n) {
                return n < 2 ? "1 known" :
                    n < 3 ? "2 known" :
                        n < 5 ? "3 known" :
                            n < 9 ? "4 known" :
                                n < 13 ? "5 known" :
                                    n < 17 ? "6 known" :
                                        "8 known";
            }),
            extraname: "Ranger Knack",
            extrachoices: [
                "Alpine Adept", "Aquatic Adept", "Favored Foe", "Herbalist I", "Herbalist II", "Herbalist III",
                "Naturalist I", "Naturalist II", "Natural Regeneration", "Slayer I", "Slayer II", "Slayer III",
                "Stalker I", "Stalker II", "Stalker III", "Stalker IV", "Strider I", "Strider II", "Strider III",
                "Strider IV", "Survivor I", "Survivor II", "Survivor III", "Trapper", "Wild Insight I",
                "Wild Insight II", "Wild Insight III"
            ],
            extratimes: levels.map(function (n) {
                return n < 2 ? 1 :
                    n < 3 ? 2 :
                        n < 5 ? 3 :
                            n < 9 ? 4 :
                                n < 13 ? 5 :
                                    n < 17 ? 6 :
                                        8;
            }),
            "alpine adept": {
                name: "Alpine Adept",
                description: desc([
                    "I gain a 30-foot climbing speed (or +10 ft if I already have one)",
                    "I can use my reaction to reduce falling damage by my Ranger level"
                ]),
                speed: { climb: { spd: 30, enc: 20 } },
                action: ["reaction", " (reduce falling damage)"]
            },

            "aquatic adept": {
                name: "Aquatic Adept",
                description: desc([
                    "I gain a 30-foot swimming speed (or +10 ft if I already have one)",
                    "While underwater, I can hold my breath for up to 1 hour"
                ]),
                speed: { swim: { spd: 30, enc: 20 } }
            },

            "favored foe": {
                name: "Favored Foe",
                prereqeval: function (v) {
                    return classes.known["ranger(laserllama)"] && classes.known["ranger(laserllama)"].level >= 3;
                },
                description: desc([
                    "I choose one creature type, two humanoid races, or one organization as my Favored Foe",
                    "On Wisdom checks to hunt/track them or Intelligence checks to recall knowledge:",
                    "I treat rolls of 9 or lower on the d20 as a 10",
                    "I can learn this Knack multiple times, choosing a new Favored Foe each time"
                ])
            },

            "herbalist i": {
                name: "Herbalist I",
                submenu: "Herbalist",
                description: desc([
                    "I gain proficiency with herbalism kits",
                    "I automatically succeed on Wisdom (Medicine) checks to stabilize creatures at 0 HP if using a herbalism kit"
                ]),
                toolProfs: ["Herbalism kit"]
            },

            "herbalist ii": {
                name: "Herbalist II",
                submenu: "Herbalist",
                prereqeval: function (v) {
                    if (!classes.known["ranger(laserllama)"] || classes.known["ranger(laserllama)"].level < 3) return false;
                    var knacks = GetFeatureChoice('classes', 'ranger(laserllama)', 'knacks', true);
                    return knacks.indexOf("herbalist i") !== -1;
                },
                description: desc([
                    "During a long rest, I can spend 1 hour with an herbalism kit to create one potion of healing",
                    "These potions retain potency until the end of my next long rest"
                ])
            },

            "herbalist iii": {
                name: "Herbalist III",
                submenu: "Herbalist",
                prereqeval: function (v) {
                    if (!classes.known["ranger(laserllama)"] || classes.known["ranger(laserllama)"].level < 6) return false;
                    var knacks = GetFeatureChoice('classes', 'ranger(laserllama)', 'knacks', true);
                    return knacks.indexOf("herbalist i") !== -1 && knacks.indexOf("herbalist ii") !== -1;
                },
                description: desc([
                    "When crafting potions of healing during a long rest:",
                    "I create a number equal to 1 + my Wisdom modifier (minimum of 2)"
                ])
            },

            "naturalist i": {
                name: "Naturalist I",
                submenu: "Naturalist",
                description: desc([
                    "In the wilderness, I can use Wisdom (Nature) instead of Intelligence (Nature)",
                    "I can make Wisdom (Nature) checks as a bonus action to recall knowledge about beasts/plants I see"
                ]),
                action: ["bonus action", " (Nature check on beast/plant)"]
            },

            "naturalist ii": {
                name: "Naturalist II",
                submenu: "Naturalist",
                prereqeval: function (v) {
                    if (!classes.known["ranger(laserllama)"] || classes.known["ranger(laserllama)"].level < 6) return false;
                    var knacks = GetFeatureChoice('classes', 'ranger(laserllama)', 'knacks', true);
                    return knacks.indexOf("naturalist i") !== -1;
                },
                description: desc([
                    "At the end of a long rest, I can attune to my environment (arctic, coast, desert, etc.)",
                    "While in my attuned environment: advantage on Nature checks about local ecosystem,",
                    "find twice as much food when foraging, can't be surprised unless incapacitated,",
                    "advantage on initiative rolls if not surprised or incapacitated"
                ])
            },

            "natural regeneration": {
                name: "Natural Regeneration",
                prereqeval: function (v) {
                    return classes.known["ranger(laserllama)"] && classes.known["ranger(laserllama)"].level >= 3;
                },
                description: desc([
                    "During a short rest, I can recover spell slots of combined level equal to my Wisdom modifier",
                    "Once I do this, I must finish a long rest before using this feature again"
                ]),
                usages: 1,
                recovery: "long rest"
            },

            "slayer i": {
                name: "Slayer I",
                submenu: "Slayer",
                prereqeval: function (v) {
                    return classes.known["ranger(laserllama)"] && classes.known["ranger(laserllama)"].level >= 3;
                },
                description: desc([
                    "When I hit a creature with a weapon attack, I can mark it as my Quarry as part of the attack",
                    "This applies my Quarry damage bonus and other benefits to that damage roll"
                ])
            },

            "slayer ii": {
                name: "Slayer II",
                submenu: "Slayer",
                prereqeval: function (v) {
                    if (!classes.known["ranger(laserllama)"] || classes.known["ranger(laserllama)"].level < 6) return false;
                    var knacks = GetFeatureChoice('classes', 'ranger(laserllama)', 'knacks', true);
                    return knacks.indexOf("slayer i") !== -1;
                },
                description: desc([
                    "I can mark a creature as my Quarry by studying signs of its passing left within 24 hours",
                    "On Wisdom (Perception) or Wisdom (Survival) checks to locate/track my Quarry:",
                    "I treat rolls of 7 or lower on the d20 as an 8"
                ])
            },

            "slayer iii": {
                name: "Slayer III",
                submenu: "Slayer",
                prereqeval: function (v) {
                    if (!classes.known["ranger(laserllama)"] || classes.known["ranger(laserllama)"].level < 14) return false;
                    var knacks = GetFeatureChoice('classes', 'ranger(laserllama)', 'knacks', true);
                    return knacks.indexOf("slayer i") !== -1 && knacks.indexOf("slayer ii") !== -1;
                },
                description: desc([
                    "When I hit my Quarry with a weapon attack, I can force it to make a Constitution save",
                    "On failure: it's blinded, can't speak, deafened, or restrained (my choice) until my next turn",
                    "I can only use this on my Quarry once per turn"
                ])
            },

            "stalker i": {
                name: "Stalker I",
                submenu: "Stalker",
                description: desc("I have advantage on Dexterity (Stealth) checks to hide in natural environments")
            },

            "stalker ii": {
                name: "Stalker II",
                submenu: "Stalker",
                prereqeval: function (v) {
                    if (!classes.known["ranger(laserllama)"] || classes.known["ranger(laserllama)"].level < 3) return false;
                    var knacks = GetFeatureChoice('classes', 'ranger(laserllama)', 'knacks', true);
                    return knacks.indexOf("stalker i") !== -1;
                },
                description: desc("I can take the Hide action as a bonus action on my turn"),
                action: ["bonus action", " (Hide)"]
            },

            "stalker iii": {
                name: "Stalker III",
                submenu: "Stalker",
                prereqeval: function (v) {
                    if (!classes.known["ranger(laserllama)"] || classes.known["ranger(laserllama)"].level < 9) return false;
                    var knacks = GetFeatureChoice('classes', 'ranger(laserllama)', 'knacks', true);
                    return knacks.indexOf("stalker i") !== -1 && knacks.indexOf("stalker ii") !== -1;
                },
                description: desc([
                    "I cannot be tracked, even by magic",
                    "I'm always under the effects of the nondetection spell",
                    "I can't be tracked by divination magic or magical means unless I wish to be"
                ])
            },

            "stalker iv": {
                name: "Stalker IV",
                submenu: "Stalker",
                prereqeval: function (v) {
                    if (!classes.known["ranger(laserllama)"] || classes.known["ranger(laserllama)"].level < 14) return false;
                    var knacks = GetFeatureChoice('classes', 'ranger(laserllama)', 'knacks', true);
                    return knacks.indexOf("stalker i") !== -1 && knacks.indexOf("stalker ii") !== -1 && knacks.indexOf("stalker iii") !== -1;
                },
                description: desc([
                    "When I take the Hide action, I become invisible until the start of my next turn",
                    "This ends early if I attack or cast a spell"
                ])
            },

            "strider i": {
                name: "Strider I",
                submenu: "Strider",
                description: desc([
                    "I ignore difficult terrain from natural environments (undergrowth, snow, swamp)",
                    "I can't become lost as long as I can see the night sky",
                    "Up to 10 creatures traveling with me don't have travel slowed by natural difficult terrain"
                ])
            },

            "strider ii": {
                name: "Strider II",
                submenu: "Strider",
                prereqeval: function (v) {
                    if (!classes.known["ranger(laserllama)"] || classes.known["ranger(laserllama)"].level < 3) return false;
                    var knacks = GetFeatureChoice('classes', 'ranger(laserllama)', 'knacks', true);
                    return knacks.indexOf("strider i") !== -1;
                },
                description: desc("I can take the Dash action as a bonus action on my turn"),
                action: ["bonus action", " (Dash)"]
            },

            "strider iii": {
                name: "Strider III",
                submenu: "Strider",
                prereqeval: function (v) {
                    if (!classes.known["ranger(laserllama)"] || classes.known["ranger(laserllama)"].level < 6) return false;
                    var knacks = GetFeatureChoice('classes', 'ranger(laserllama)', 'knacks', true);
                    return knacks.indexOf("strider i") !== -1 && knacks.indexOf("strider ii") !== -1;
                },
                description: desc([
                    "My walking speed increases by 10 feet",
                    "I ignore difficult terrain from spells, magical phenomena, or supernatural effects"
                ]),
                speed: { walk: { spd: "+10", enc: "+10" } }
            },

            "strider iv": {
                name: "Strider IV",
                submenu: "Strider",
                prereqeval: function (v) {
                    if (!classes.known["ranger(laserllama)"] || classes.known["ranger(laserllama)"].level < 14) return false;
                    var knacks = GetFeatureChoice('classes', 'ranger(laserllama)', 'knacks', true);
                    return knacks.indexOf("strider i") !== -1 && knacks.indexOf("strider ii") !== -1 && knacks.indexOf("strider iii") !== -1;
                },
                description: desc("I'm always under the effects of the freedom of movement spell while conscious")
            },

            "survivor i": {
                name: "Survivor I",
                submenu: "Survivor",
                prereqeval: function (v) {
                    return classes.known["ranger(laserllama)"] && classes.known["ranger(laserllama)"].level >= 6;
                },
                description: desc("As a bonus action, I can grant myself temporary hit points equal to my Constitution modifier (minimum 1)"),
                action: ["bonus action", " (gain temp HP)"]
            },

            "survivor ii": {
                name: "Survivor II",
                submenu: "Survivor",
                prereqeval: function (v) {
                    if (!classes.known["ranger(laserllama)"] || classes.known["ranger(laserllama)"].level < 9) return false;
                    var knacks = GetFeatureChoice('classes', 'ranger(laserllama)', 'knacks', true);
                    return knacks.indexOf("survivor i") !== -1;
                },
                description: desc("When I expend a Hit Die to regain hit points, I regain additional hit points equal to my Wisdom modifier (minimum 1)")
            },

            "survivor iii": {
                name: "Survivor III",
                submenu: "Survivor",
                prereqeval: function (v) {
                    if (!classes.known["ranger(laserllama)"] || classes.known["ranger(laserllama)"].level < 14) return false;
                    var knacks = GetFeatureChoice('classes', 'ranger(laserllama)', 'knacks', true);
                    return knacks.indexOf("survivor i") !== -1 && knacks.indexOf("survivor ii") !== -1;
                },
                description: desc([
                    "I add my Wisdom modifier (minimum +1) to death saving throws",
                    "If the result is 20 or higher, it counts as rolling a natural 20"
                ])
            },

            "trapper": {
                name: "Trapper",
                description: desc([
                    "Over 1 hour (during rest), I can craft a Trap using a knife, natural materials, and 10 ft of rope",
                    "As an action, I can set a Trap in an adjacent 5-foot space",
                    "Large or smaller creatures entering must make Dex save (my spell save DC) or be restrained",
                    "As separate action, I can hide the Trap (Int (Investigation) vs my spell save DC to detect)"
                ]),
                action: ["action", " (set or hide trap)"]
            },

            "wild insight i": {
                name: "Wild Insight I",
                submenu: "Wild Insight",
                description: desc("I can communicate with beasts as if always under the effect of speak with animals"),
                spellcastingBonus: {
                    name: "Wild Insight I",
                    spells: ["speak with animals"],
                    selection: ["speak with animals"],
                    firstCol: "atwill"
                }
            },

            "wild insight ii": {
                name: "Wild Insight II",
                submenu: "Wild Insight",
                prereqeval: function (v) {
                    if (!classes.known["ranger(laserllama)"] || classes.known["ranger(laserllama)"].level < 3) return false;
                    var knacks = GetFeatureChoice('classes', 'ranger(laserllama)', 'knacks', true);
                    return knacks.indexOf("wild insight i") !== -1;
                },
                description: desc([
                    "I learn the find familiar spell (counts as a Ranger spell, always prepared)",
                    "When I cast this spell, my familiar is always a fey creature",
                    "This doesn't count against my total prepared spells"
                ]),
                spellcastingBonus: {
                    name: "Wild Insight II",
                    spells: ["find familiar"],
                    selection: ["find familiar"],
                    firstCol: "Sp"
                }
            },

            "wild insight iii": {
                name: "Wild Insight III",
                submenu: "Wild Insight",
                prereqeval: function (v) {
                    if (!classes.known["ranger(laserllama)"] || classes.known["ranger(laserllama)"].level < 9) return false;
                    var knacks = GetFeatureChoice('classes', 'ranger(laserllama)', 'knacks', true);
                    return knacks.indexOf("wild insight i") !== -1 && knacks.indexOf("wild insight ii") !== -1;
                },
                description: desc("When I cast find familiar, it can take the form of any beast of CR 1/2 or lower")
            }
        },
        "wild expertise": {
            name: "Wild Expertise",
            source: ["LL:AR", 0],
            minlevel: 1,
            description: desc([
                "I choose one ranger skill to gain expertise (double proficiency bonus)",
                "I learn one additional language",
                "At 9th level, I choose another ranger skill for expertise and learn another language"
            ]),
            skillstxt: "Expertise with one ranger skill (another at 9th level)",
            languageProfs: [1, 2]
        },
        "spellcasting": {
            name: "Spellcasting",
            source: ["LL:AR", 0],
            minlevel: 2,
            description: desc([
                "I can cast ranger spells that I have prepared, using Wisdom as my spellcasting ability",
                "I can use a druidic focus as a spellcasting focus",
                "I can cast prepared ranger spells with the ritual tag as rituals"
            ]),
            additional: levels.map(function (n, idx) {
                return n < 2 ? "" : (Math.floor(n / 2) + (n < 2 ? 0 : Math.floor((n - 1) / 2))) + " spells prepared";
            })
        },
        "ranger's quarry": {
            name: "Ranger's Quarry",
            source: ["LL:AR", 0],
            minlevel: 2,
            description: desc([
                "As a bonus action, I can mark a creature I can see as my Quarry for 1 hour",
                "When I damage it with an attack, I deal bonus damage equal to my Quarry Die",
                "When tracking/locating it, I can add my Quarry Die to the d20 roll",
                "I can use this Wisdom modifier times per long rest, or expend a spell slot"
            ]),
            additional: levels.map(function (n) {
                return n < 2 ? "" :
                    n < 6 ? "d4, 1 hour" :
                        n < 10 ? "d6, 8 hours" :
                            n < 14 ? "d8, 24 hours" :
                                n < 18 ? "d10, 1 week" :
                                    "d12, indefinite";
            }),
            usages: "Wisdom modifier per ",
            usagescalc: "event.value = Math.max(1, What('Wis Mod'));",
            recovery: "long rest",
            action: ["bonus action", ""]
        },
        "subclassfeature3": {
            name: "Ranger Conclave",
            source: ["LL:AR", 0],
            minlevel: 3,
            description: desc("I choose a Ranger Conclave that shapes my ranger abilities")
        },
        "extra attack": {
            name: "Extra Attack",
            source: ["LL:AR", 0],
            minlevel: 5,
            description: desc("I can attack twice when I take the Attack action on my turn")
        },
        "feral senses": {
            name: "Feral Senses",
            source: ["LL:AR", 0],
            minlevel: 5,
            description: desc([
                "I can't have disadvantage on attack rolls against my Quarry",
                "At 18th level, I can't have disadvantage on attacks against any target within 30 ft"
            ])
        },
        "tireless": {
            name: "Tireless",
            source: ["LL:AR", 0],
            minlevel: 11,
            description: desc("I regain all expended uses of Ranger's Quarry on a short or long rest"),
            recovery: "short rest"
        },
        "foe slayer": {
            name: "Foe Slayer",
            source: ["LL:AR", 0],
            minlevel: 20,
            description: desc([
                "When I hit my Quarry with a weapon attack, I can end the mark to deal maximum damage",
                "If this reduces the creature to 50 HP or fewer, it must make a Con save or drop to 0 HP"
            ])
        }
    }
};


// Beast Master Conclave
AddSubClass("ranger(laserllama)", "beast master", {
    regExpSearch: /beast master/i,
    subname: "Beast Master",
    source: ["LL:AR", 0],
    spellcastingExtra: ["animal friendship", "beast bond", "beast sense", "warding bond", "haste", "protection from energy", "death ward", "freedom of movement", "awaken", "commune with nature"],
    features: {
        "subclassfeature3": {
            name: "Primal Beast",
            source: ["LL:AR", 0],
            minlevel: 3,
            description: desc([
                "I bond with a Primal Beast (Beast of Cave, Land, Sea, or Sky)",
                "It's friendly to me and my allies, and obeys my commands",
                "In combat, it acts on my turn but only Dodges unless I use a bonus action to command it",
                "When I Attack, I can forgo one attack to command my Beast to attack",
                "If it dies, I can revive it with a 1-hour ritual during a rest"
            ]),
            action: ["bonus action", " (command beast)"]
        },
        "subclassfeature3.1": {
            name: "Wild Empathy",
            source: ["LL:AR", 0],
            minlevel: 3,
            description: desc("I learn the Wild Insight I Knack (or another if I already know it)"),
            autoSelectExtrachoices : [{ extrachoice : "wild insight i" }]
        },
        "subclassfeature7": {
            name: "Bestial Focus",
            source: ["LL:AR", 0],
            minlevel: 7,
            description: desc([
                "My Primal Beast gains all benefits of my Ranger's Quarry",
                "Its attacks count as magical for overcoming resistance and immunity"
            ])
        },
        "subclassfeature11": {
            name: "Exceptional Training",
            source: ["LL:AR", 0],
            minlevel: 11,
            description: desc("Once per turn when I command my Primal Beast to attack, it can make two attacks")
        },
        "subclassfeature15": {
            name: "Primal Bond",
            source: ["LL:AR", 0],
            minlevel: 15,
            description: desc("When I cast a ranger spell targeting myself, my Primal Beast gains the benefits too (within 30 ft)")
        }
    }
});

// Primal Beast companions
CreatureList["beast of the cave"] = {
    name: "Beast of the Cave",
    source: ["LL:AR", 0],
    size: 3,
    type: "Beast",
    alignment: "Neutral",
    ac: "13+Prof",
    hp: 5,
    hd: [1, 8],
    speed: "30 ft, burrow 10 ft",
    scores: [14, 14, 15, 8, 14, 11],
    senses: "Darkvision 120 ft; Tremorsense 30 ft",
    passivePerception: 12,
    languages: "understands the languages you speak",
    challengeRating: "1/4",
    proficiencyBonus: 2,
	proficiencyBonusLinked : true,
    attacksAction: 1,
    attacks: [{
        name: "Claw",
        ability: 1,
        damage: [1, 6, "slashing"],
        range: "Melee (5 ft)",
        description: "",
        abilitytodamage: false,
        useSpellMod: "ranger(laserllama)"
    }],
    features: [{
        name: "Primal Bond",
        description: "I can add my proficiency bonus to any ability check or saving throw the Beast makes"
    }],
    traits: [{
        name: "Tremorsense",
        description: "The Beast knows the location of anything in contact with the ground within 30 feet."
    }]
};

CreatureList["beast of the land"] = {
    name: "Beast of the Land",
    source: ["LL:AR", 0],
    size: 3,
    type: "Beast",
    alignment: "Neutral",
    ac: "13+Prof",
    hp: 5,
    hd: [1, 8],
    speed: "40 ft, climb 40 ft",
    scores: [14, 14, 15, 8, 14, 11],
    senses: "Darkvision 60 ft",
    passivePerception: 12,
    languages: "understands the languages you speak",
    challengeRating: "1/4",
    proficiencyBonus: 2,
    proficiencyBonusLinked : true,
    attacksAction: 1,
    attacks: [{
        name: "Maul",
        ability: 1,
        damage: [1, 8, "slashing"],
        range: "Melee (5 ft)",
        description: "",
        abilitytodamage: false,
        useSpellMod: "ranger(laserllama)"
    }],
    features: [{
        name: "Charge",
        description: "If the Beast moves at least 20 ft toward a target and hits with Maul, target takes bonus quarry die damage and must save or fall prone (Large or smaller)."
    }]
};

CreatureList["beast of the sea"] = {
    name: "Beast of the Sea",
    source: ["LL:AR", 0],
    size: 3,
    type: "Beast",
    alignment: "Neutral",
    ac: "13+Prof",
    hp: 5,
    hd: [1, 8],
    speed: "10 ft, swim 60 ft",
    scores: [14, 14, 15, 8, 14, 11],
    senses: "Darkvision 60 ft",
    passivePerception: 12,
    languages: "understands the languages you speak",
    challengeRating: "1/4",
    proficiencyBonus: 2,
    proficiencyBonusLinked : true,
    attacksAction: 1,
    attacks: [{
        name: "Pseudopod",
        ability: 1,
        damage: [1, 6, "bludgeoning"],
        range: "Melee (5 ft)",
        description: "Can grapple Large or smaller target (escape DC = spell save DC)",
        abilitytodamage: false,
        useSpellMod: "ranger(laserllama)"
    }],
    features: [{
        name: "Amphibious",
        description: "The Beast can breathe in air and water."
    }]
};

CreatureList["beast of the sky"] = {
    name: "Beast of the Sky",
    source: ["LL:AR", 0],
    size: 4,
    type: "Beast",
    alignment: "Neutral",
    ac: "13+Prof",
    hp: 4,
    hd: [1, 6],
    speed: "10 ft, fly 60 ft",
    scores: [6, 16, 13, 8, 14, 11],
    senses: "Darkvision 60 ft",
    passivePerception: 12,
    languages: "understands the languages you speak",
    challengeRating: "1/4",
    proficiencyBonus: 2,
    proficiencyBonusLinked : true,
    attacksAction: 1,
    attacks: [{
        name: "Shred",
        ability: 2,
        damage: [1, 4, "slashing"],
        range: "Melee (5 ft)",
        description: "",
        abilitytodamage: false,
        useSpellMod: "ranger(laserllama)"
    }],
    features: [{
        name: "Flyby",
        description: "The Beast doesn't provoke opportunity attacks when it flies out of an enemy's reach."
    }]
};

// Hunter Conclave
AddSubClass("ranger(laserllama)", "hunter", {
    regExpSearch: /hunter/i,
    subname: "Hunter",
    source: ["LL:AR", 0],
    spellcastingExtra: ["expeditious retreat", "snare", "locate object", "pass without trace", "conjure volley", "nondetection", "faithful hound", "freedom of movement", "swift quiver", "tree stride"],
    features: {
        "subclassfeature3": {
            name: "Ambuscade",
            source: ["LL:AR", 0],
            minlevel: 3,
            description: desc([
                "When I roll initiative and am not surprised, I can use my reaction to:",
                "Take the Hide action, Attack action, or mark a creature as my Quarry",
                "If surprised, I can't take this reaction but can act normally on my first turn"
            ]),
            action: ["reaction", " (when rolling initiative)"]
        },
        "subclassfeature3.1": {
            name: "Silent Steps",
            source: ["LL:AR", 0],
            minlevel: 3,
            description: desc("I learn the Stalker I Knack (or another if I already know it)"),
            autoSelectExtrachoices: [{ extrachoice: "stalker i" }]
        },
        "subclassfeature7": {
            name: "Cunning Parry",
            source: ["LL:AR", 0],
            minlevel: 7,
            description: desc([
                "When my Quarry attacks me with an attack I can see:",
                "I can use my reaction to add my Wis modifier (min +1) to AC against that attack",
                "If this causes the attack to miss, I can make one weapon attack against my Quarry"
            ]),
            action: ["reaction", " (when attacked by Quarry)"]
        },
        "subclassfeature7.1": {
            name: "Relentless Hunter",
            source: ["LL:AR", 0],
            minlevel: 7,
            description: desc([
                "When my Quarry is slain, I can mark another creature I can see as my Quarry",
                "This doesn't require an action or expend a use of Ranger's Quarry or spell slot"
            ])
        },
        "subclassfeature11": {
            name: "Horde Breaker",
            source: ["LL:AR", 0],
            minlevel: 11,
            description: desc([
                "I gain these features, each usable as an action on my turn:",
                "\u2022 Volley: Choose a point within range of a ranged weapon I'm wielding",
                "  Make ranged attacks against creatures of my choice within 10 ft of that point",
                "\u2022 Whirlwind: Make melee attacks against any number of creatures within reach"
            ]),
            action: ["action", " (Volley or Whirlwind)"]
        },
        "subclassfeature15": {
            name: "Ruthless Focus",
            source: ["LL:AR", 0],
            minlevel: 15,
            description: desc("I add my Wisdom modifier (min +1) to all weapon attack rolls against my Quarry")
        }
    }
});

// Monster Slayer Conclave
AddSubClass("ranger(laserllama)", "monster slayer", {
    regExpSearch: /monster slayer/i,
    subname: "Monster Slayer",
    source: ["LL:AR", 0],
    spellcastingExtra: ["bane", "protection from evil and good", "moonbeam", "see invisibility", "magic circle", "protection from energy", "banishment", "faithful hound", "dispel evil and good", "hold monster"],
    features: {
        "subclassfeature3": {
            name: "Knowledge of the Hunt",
            source: ["LL:AR", 0],
            minlevel: 3,
            description: desc([
                "I gain proficiency in Arcana, History, Nature, or Religion",
                "As a bonus action, I can analyze a creature I can see within 30 ft (DC 10 + CR):",
                "\u2022 Arcana: Aberrations, Dragons, Monstrosities",
                "\u2022 History: Giants, Humanoids",
                "\u2022 Nature: Beasts, Elementals, Oozes, Plants",
                "\u2022 Religion: Celestials, Fey, Fiends, Undead",
                "On success: learn highest/lowest ability score, vulnerabilities, resistances, immunities, etc.",
                "If analyzing my Quarry, I can add one Quarry Die roll to the check"
            ]),
            action: ["bonus action", " (analyze creature)"],
            skillstxt: "Choose one from: Arcana, History, Nature, or Religion"
        },
        "subclassfeature3.1": {
            name: "Slayer's Cunning",
            source: ["LL:AR", 0],
            minlevel: 3,
            description: desc([
                "I learn the Slayer I Knack (doesn't count against Knacks Known)",
                "I can use Ranger's Quarry once between each short/long rest without expending a use"
            ])
        },
        "subclassfeature7": {
            name: "Iron Focus",
            source: ["LL:AR", 0],
            minlevel: 7,
            description: desc([
                "When my Quarry forces me to make an ability check or saving throw,",
                "I gain a bonus equal to one roll of my Quarry Die"
            ])
        },
        "subclassfeature11": {
            name: "Monster's Nemesis",
            source: ["LL:AR", 0],
            minlevel: 11,
            description: desc([
                "My weapon attacks against my Quarry treat immunities as resistances",
                "My attacks ignore any damage resistances my Quarry has",
                "When my Quarry misses me or I succeed on its save, I can use my reaction to attack it"
            ]),
            action: ["reaction", " (when Quarry misses or I save)"]
        },
        "subclassfeature15": {
            name: "Ruthless Counter",
            source: ["LL:AR", 0],
            minlevel: 15,
            description: desc([
                "When I see my Quarry cast a spell, teleport, or use a supernatural ability:",
                "I can make a weapon attack as a reaction",
                "On hit: Quarry makes Wis save (my spell save DC) or ability fails",
                "If I hit and end Ranger's Quarry, the creature auto-fails the save"
            ]),
            action: ["reaction", " (when Quarry uses ability)"]
        }
    }
});

// Spellbreaker Conclave
AddSubClass("ranger(laserllama)", "spellbreaker", {
    regExpSearch: /^(?=.*spell)(?=.*breaker).*$/i,
    subname: "Spellbreaker",
    source: ["LL:AR", 0],
    spellcastingExtra: ["absorb elements", "detect magic", "blindness/deafness", "silence", "counterspell", "dispel magic", "arcane eye", "resilient sphere", "dispel evil and good", "wall of force"],
    features: {
        "subclassfeature3": {
            name: "Mage Breaker",
            source: ["LL:AR", 0],
            minlevel: 3,
            description: desc([
                "When I hit my Quarry with a weapon attack:",
                "It has disadvantage on Con saves to maintain concentration",
                "When I see/hear a creature within reach attempt to cast a spell:",
                "I can use my reaction to make an opportunity attack against it"
            ]),
            action: ["reaction", " (opportunity attack vs spellcaster)"]
        },
        "subclassfeature3.1": {
            name: "Spellsight",
            source: ["LL:AR", 0],
            minlevel: 3,
            description: desc([
                "When I mark a creature as my Quarry:",
                "I instantly learn its spellcasting ability (if any)",
                "I learn the highest level spell it can cast",
                "If hidden from divination magic, it appears as if it can't cast spells"
            ])
        },
        "subclassfeature7": {
            name: "Arcane Defense",
            source: ["LL:AR", 0],
            minlevel: 7,
            description: desc([
                "When my Quarry forces me to make a save vs spell/magical effect:",
                "I gain bonus to the roll equal to my Wis modifier (min +1)",
                "On saves for half damage: I take no damage on success, half on failure"
            ])
        },
        "subclassfeature11": {
            name: "Spellbane",
            source: ["LL:AR", 0],
            minlevel: 11,
            description: desc([
                "When I hit my Quarry with a weapon attack:",
                "I can expend a spell slot to deal bonus force damage (1 Quarry Die per slot level)",
                "When I cast counterspell or dispel magic:",
                "I can add one Quarry Die roll to the ability check"
            ])
        },
        "subclassfeature15": {
            name: "Mantle of the Master",
            source: ["LL:AR", 0],
            minlevel: 15,
            description: desc([
                "I have resistance to damage from spells and magical effects",
                "This doesn't work if I'm unconscious or incapacitated"
            ]),
            dmgres: ["Spells and magical effects"]
        },
        "subclassfeature15.1": {
            name: "Reflect Spell",
            source: ["LL:AR", 0],
            minlevel: 15,
            description: desc([
                "I can cast absorb elements at will as if cast at 1st level",
                "If my next melee attack is against the creature whose spell I absorbed:",
                "I treat the absorb elements damage as its maximum amount"
            ]),
            spellcastingBonus: {
                name: "Reflect Spell",
                spells: ["absorb elements"],
                selection: ["absorb elements"],
                firstCol: "atwill"
            }
        }
    }
});

// Deep Stalker Conclave
AddSubClass("ranger(laserllama)", "deep stalker", {
    regExpSearch: /deep stalker/i,
    subname: "Deep Stalker",
    source: ["LL:AR", 0],
    spellcastingExtra: ["cause fear", "disguise self", "darkness", "invisibility", "fear", "nondetection", "greater invisibility", "phantasmal killer", "mislead", "seeming"],
    features: {
        "subclassfeature3": {
            name: "Umbral Sight",
            source: ["LL:AR", 0],
            minlevel: 3,
            description: desc([
                "I gain darkvision out to 60 feet",
                "If I already have darkvision, its range increases by 30 feet"
            ]),
            vision: [["Darkvision", "fixed 60"], ["Darkvision", "+30"]]
        },
        "subclassfeature3.1": {
            name: "Dread Ambusher",
            source: ["LL:AR", 0],
            minlevel: 3,
            description: desc([
                "I gain bonus to initiative equal to my Wis modifier (min +1) if not surprised/incapacitated",
                "On my first turn in combat when I take the Attack action:",
                "I can make one additional attack that deals bonus damage equal to my level on hit"
            ]),
            addMod: { type: "skill", field: "Init", mod: "max(Wis|1)", text: "I can add my Wisdom modifier (min 1) to initiative rolls if not surprised or incapacitated." }
        },
        "subclassfeature7": {
            name: "Cloak of Shadows",
            source: ["LL:AR", 0],
            minlevel: 7,
            description: desc("While in darkness, I'm invisible to creatures that rely on darkvision to see me")
        },
        "subclassfeature7.1": {
            name: "Iron Mind",
            source: ["LL:AR", 0],
            minlevel: 7,
            description: desc([
                "I gain proficiency in Wisdom saving throws",
                "If already proficient, I gain proficiency in Intelligence or Charisma saves instead"
            ]),
            saves: ["Wis"]
        },
        "subclassfeature11": {
            name: "Precise Strikes",
            source: ["LL:AR", 0],
            minlevel: 11,
            description: desc([
                "Once per turn when I miss with a weapon attack:",
                "I can add one Quarry Die roll to the attack roll, possibly turning miss into hit",
                "My darkvision can see through magical and nonmagical darkness"
            ])
        },
        "subclassfeature15": {
            name: "Deadly Counter",
            source: ["LL:AR", 0],
            minlevel: 15,
            description: desc([
                "When a creature I can see targets me with an attack:",
                "I can use my reaction to impose disadvantage on the attack roll",
                "If this causes the attack to miss, I can make a weapon attack as part of the reaction",
                "If I'm in dim light/darkness when making this attack, I have advantage"
            ]),
            action: ["reaction", " (when targeted by attack)"]
        }
    }
});

// Drake Guard Conclave
AddSubClass("ranger(laserllama)", "drake guard", {
    regExpSearch: /^(?=.*drake)(?=.*guard).*$/i,
    subname: "Drake Guard",
    source: ["LL:AR", 0],
    spellcastingExtra: ["absorb elements", "command", "dragon's breath", "warding bond", "elemental weapon", "fear", "dominate beast", "elemental bane", "awaken", "dominate person"],
    features: {
        "subclassfeature3": {
            name: "Draconic Companion",
            source: ["LL:AR", 0],
            minlevel: 3,
            description: desc([
                "My soul is bound to a Draconic Companion (choose Essence: acid, cold, fire, lightning, poison)",
                "It uses the Draconic Companion stat block and obeys my commands",
                "In combat, it acts on my turn but only Dodges unless I command it (bonus action)",
                "When I Attack, I can forgo one attack to command it to attack",
                "If it dies, I can restore it with a 1-hour ritual during a rest"
            ]),
            action: ["bonus action", " (command draconic companion)"]
        },
        "subclassfeature3.1": {
            name: "Wyrmsoul",
            source: ["LL:AR", 0],
            minlevel: 3,
            description: desc([
                "I learn to speak, read, and write Draconic",
                "When I cast a ranger spell dealing acid, cold, fire, lightning, or poison damage:",
                "I can cause it to deal my Companion's Essence damage type instead"
            ]),
            languageProfs: ["Draconic"]
        },
        "subclassfeature7": {
            name: "Greater Companion",
            source: ["LL:AR", 0],
            minlevel: 7,
            description: desc([
                "My Companion becomes Medium size and can bear me as a rider (if I'm Medium or smaller)",
                "Its flying speed is halved while I'm riding it",
                "Its Claw attacks now roll d6s instead of d4s for damage"
            ])
        },
        "subclassfeature11": {
            name: "Elemental Breath",
            source: ["LL:AR", 0],
            minlevel: 11,
            description: desc([
                "I or my Companion can exhale a 30-foot cone of elemental breath (action)",
                "Creatures in area: Dex save (my spell save DC) or take 8d6 Essence damage (half on success)",
                "Combined uses equal to my Wis modifier (min 1) per long rest",
                "Can expend 3rd+ level spell slot to use again when no uses left"
            ]),
            usages: "Wisdom modifier per ",
            usagescalc: "event.value = Math.max(1, What('Wis Mod'));",
            recovery: "long rest",
            action: ["action", " (Elemental Breath)"]
        },
        "subclassfeature15": {
            name: "Mythic Companion",
            source: ["LL:AR", 0],
            minlevel: 15,
            description: desc([
                "My Companion can change size as an action (Small, Medium, or Large)",
                "If Large, its flying speed is no longer halved while bearing me as rider",
                "Once per turn when I command it to attack, it can make two attacks instead of one",
                "Elemental Breath damage increases to 10d6"
            ])
        }
    }
});

// Fey Wanderer Conclave
AddSubClass("ranger(laserllama)", "fey wanderer", {
    regExpSearch: /^(?=.*fey)(?=.*wanderer).*$/i,
    subname: "Fey Wanderer",
    source: ["LL:AR", 0],
    spellcastingExtra: ["cause fear", "charm person", "enthrall", "misty step", "dispel magic", "summon fey", "charm monster", "dimension door", "geas", "mislead"],
    features: {
        "subclassfeature3": {
            name: "Beguiling Strikes",
            source: ["LL:AR", 0],
            minlevel: 3,
            description: desc([
                "I can choose for my Ranger's Quarry bonus damage to be psychic instead",
                "If I deal psychic damage to my Quarry with a melee weapon attack:",
                "It has disadvantage on attack rolls against creatures other than me until my next turn"
            ])
        },
        "subclassfeature3.1": {
            name: "Otherworldly Mystique",
            source: ["LL:AR", 0],
            minlevel: 3,
            description: desc([
                "I gain proficiency in Deception, Performance, or Persuasion",
                "Whenever I make a Charisma check, I gain bonus equal to my Wis modifier (min +1)"
            ]),
            skillstxt: "Choose one from: Deception, Performance, or Persuasion",
            addMod: { type: "skill", field: "all", mod: "Wis", text: "I can add my Wisdom modifier to Charisma checks." }
        },
        "subclassfeature7": {
            name: "Whimsical Ward",
            source: ["LL:AR", 0],
            minlevel: 7,
            description: desc([
                "I have advantage on saves to resist being charmed or frightened",
                "When a creature within 30 ft makes a save vs charmed/frightened:",
                "I can use reaction to force another creature within 60 ft to make Wis save",
                "On failure: it's charmed or frightened of me (my choice) for 1 minute"
            ]),
            savetxt: { adv_vs: ["charmed", "frightened"] },
            action: ["reaction", " (when ally saves vs charm/fear)"]
        },
        "subclassfeature11": {
            name: "Faerie Guardian",
            source: ["LL:AR", 0],
            minlevel: 11,
            description: desc([
                "I can cast summon fey without material components",
                "Once per long rest, I can cast summon fey without concentration (duration becomes 1 minute)"
            ]),
            usages: 1,
            recovery: "long rest",
            spellcastingBonus: {
                name: "Faerie Guardian",
                spells: ["summon fey"],
                selection: ["summon fey"],
                firstCol: "oncelr"
            }
        },
        "subclassfeature15": {
            name: "Mirthful Step",
            source: ["LL:AR", 0],
            minlevel: 15,
            description: desc([
                "I can cast misty step without expending a spell slot Wis modifier times per long rest",
                "When I cast misty step, I can touch a willing creature within 5 ft and teleport it with me",
                "It reappears in an unoccupied space within 5 ft of where I reappear"
            ]),
            usages: "Wisdom modifier per ",
            usagescalc: "event.value = Math.max(1, What('Wis Mod'));",
            recovery: "long rest",
            spellcastingBonus: {
                name: "Mirthful Step",
                spells: ["misty step"],
                selection: ["misty step"],
                firstCol: "Sp"
            }
        }
    }
});

// Planar Warden Conclave
AddSubClass("ranger(laserllama)", "planar warden", {
    regExpSearch: /^(?=.*planar)(?=.*warden).*$/i,
    subname: "Planar Warden",
    source: ["LL:AR", 0],
    spellcastingExtra: ["alarm", "protection from evil and good", "misty step", "rope trick", "haste", "magic circle", "banishment", "dimension door", "planar binding", "teleportation circle"],
    features: {
        "subclassfeature3": {
            name: "Extraplanar Senses",
            source: ["LL:AR", 0],
            minlevel: 3,
            description: desc([
                "As an action, I detect nearest creature alien to current plane or planar portal within 1 mile",
                "Learn exact distance and direction (unless shielded from divination)",
                "I can exclude targets of my choice as part of this action"
            ]),
            usages: 1,
            recovery: "short rest",
            action: ["action", " (detect extraplanar)"]
        },
        "subclassfeature3.1": {
            name: "Planar Warrior",
            source: ["LL:AR", 0],
            minlevel: 3,
            description: desc([
                "I can choose for my Ranger's Quarry bonus damage to be force damage",
                "I can mark creatures not native to my current plane as Quarry without expending uses",
                "Examples: aberrations, celestials, elementals, fey, fiends (when on Material Plane)"
            ])
        },
        "subclassfeature7": {
            name: "Ethereal Step",
            source: ["LL:AR", 0],
            minlevel: 7,
            description: desc([
                "When I take the Attack action:",
                "I can teleport up to 10 ft before each attack to an unoccupied space I can see",
                "Teleport distance counts against my total movement for the turn"
            ])
        },
        "subclassfeature11": {
            name: "Empowered Strikes",
            source: ["LL:AR", 0],
            minlevel: 11,
            description: desc([
                "If I use Ethereal Step and attack at least two different creatures:",
                "I can make one additional attack against a third creature",
                "When I use Ethereal Step and attack, I can choose to deal force damage"
            ])
        },
        "subclassfeature15": {
            name: "Ethereal Defense",
            source: ["LL:AR", 0],
            minlevel: 15,
            description: desc([
                "When I take damage from an attack or spell I can see:",
                "I can use my reaction to gain resistance to that damage for this turn"
            ]),
            action: ["reaction", " (when taking damage)"]
        }
    }
});

// Swarm Keeper Conclave
AddSubClass("ranger(laserllama)", "swarm keeper", {
    regExpSearch: /^(?=.*swarm)(?=.*keeper).*$/i,
    subname: "Swarm Keeper",
    source: ["LL:AR", 0],
    spellcastingExtra: ["entangle", "faerie fire", "spider climb", "web", "fly", "gaseous form", "arcane eye", "giant insect", "arcane hand", "insect plague"],
    features: {
        "subclassfeature3": {
            name: "Symbiotic Swarm",
            source: ["LL:AR", 0],
            minlevel: 3,
            description: desc([
                "I know the mage hand cantrip, manifested as part of my swarm",
                "I can use bonus action to command my swarm in one of these ways:",
                "\u2022 Biting Assault: Creature within 30 ft, Dex save or 2 Quarry Dice piercing/poison damage",
                "\u2022 Harrying Horde: Creature within 30 ft, Str save or moved 15 ft (Large+ have advantage)",
                "\u2022 Swarm Step: I'm moved 15 ft without provoking opportunity attacks"
            ]),
            action: ["bonus action", " (command swarm)"],
            spellcastingBonus: {
                name: "Symbiotic Swarm",
                spells: ["mage hand"],
                selection: ["mage hand"],
                firstCol: "atwill"
            }
        },
        "subclassfeature7": {
            name: "Writhing Horde",
            source: ["LL:AR", 0],
            minlevel: 7,
            description: desc([
                "I gain climbing speed equal to my walking speed",
                "I can climb sheer surfaces and ceilings without ability checks (surrounded by swarm)",
                "On Str (Athletics) checks to shove, grapple, or resist/end grapple:",
                "I can add one Quarry Die roll to the check"
            ]),
            speed: { climb: { spd: "walk", enc: "walk" } }
        },
        "subclassfeature11": {
            name: "Greater Swarm",
            source: ["LL:AR", 0],
            minlevel: 11,
            description: desc([
                "My Quarry has disadvantage on saves against my Symbiotic Swarm features",
                "Additional benefits:",
                "\u2022 Biting Assault: Target is also poisoned until start of my next turn on failed save",
                "\u2022 Harrying Horde: Target is knocked prone at end of movement on failed save",
                "\u2022 Swarm Step: I gain half cover until beginning of my next turn after moving"
            ])
        },
        "subclassfeature15": {
            name: "One with the Swarm",
            source: ["LL:AR", 0],
            minlevel: 15,
            description: desc([
                "When I take damage from a source I can see:",
                "I can use reaction to gain resistance to that damage and teleport to unoccupied space within 30 ft",
                "Uses equal to Wis modifier (min 1) per long rest, or expend 1st+ level spell slot"
            ]),
            usages: "Wisdom modifier per ",
            usagescalc: "event.value = Math.max(1, What('Wis Mod'));",
            recovery: "long rest",
            action: ["reaction", " (when taking damage)"]
        },
        "subclassfeature15.1": {
            name: "Swarm Master",
            source: ["LL:AR", 0],
            minlevel: 15,
            description: desc([
                "I can cast one Swarm Keeper spell without expending a spell slot or components",
                "My swarm produces the spell effect instead of normal components"
            ]),
            usages: 1,
            recovery: "short rest"
        }
    }
});

// Draconic Companion stat block
CreatureList["draconic companion"] = {
    name: "Draconic Companion",
    source: ["LL:AR", 0],
    size: 4, // Small initially, becomes Medium at 7th level, can become Large at 15th
    type: "Dragon",
    alignment: "Lawful Neutral",
    ac: "14+Prof",
    hp: 5,
    hd: [1, 8],
    speed: "30 ft, fly 30 ft",
    scores: [16, 12, 15, 8, 10, 14],
    damage_immunities: "Essence type",
    senses: "Darkvision 60 ft",
    passivePerception: 10,
    languages: "Draconic, understands languages spoken by Drake Guard",
    challengeRating: "1/4",
    proficiencyBonus: 2,
    attacksAction: 1,
    attacks: [{
        name: "Claw",
        ability: 1,
        damage: [1, 4, "slashing"],
        range: "Melee (5 ft)",
        description: "+1d4 Essence damage",
        abilitytodamage: false,
        useSpellMod: "ranger(laserllama)"
    }],
    features: [{
        name: "Hit Dice",
        description: "The Companion has d8 Hit Dice equal to your Ranger level and gains benefits of short and long rests."
    }, {
        name: "Soul Bound",
        description: "You add your proficiency bonus to any ability check or saving throw the Companion makes."
    }],
    traits: [{
        name: "Essence",
        description: "Choose acid, cold, fire, lightning, or poison. The Companion is immune to that damage type and deals that type with its attacks."
    }]
};

// Add spell list updates for ranger
SpellsList["ensnaring strike ll"] = {
    name: "Ensnaring Strike (LL)",
    source: ["LL:AR", 0],
    level: 1,
    school: "Conj",
    time: "1 bns",
    range: "Self",
    components: "V",
    duration: "Conc, 1 min",
    description: "Next wea atk creature, DC Con save or restrained by magical vines; 1d6 piercing dmg start of turns",
    descriptionFull: "The next time you hit a creature with a weapon attack before this spell ends, writhing vines spring up around the target. The target must succeed on a Constitution saving throw or be restrained by the magical vines until the spell ends. A Large or larger creature has advantage on this saving throw. While restrained by this spell, the target takes 1d6 piercing damage at the start of each of its turns. A creature restrained by the vines can use its action to make a Strength check against your spell save DC. On a success, it frees itself."
};

SpellsList["hail of thorns ll"] = {
    name: "Hail of Thorns (LL)",
    source: ["LL:AR", 0],
    level: 1,
    school: "Conj",
    time: "1 bns",
    range: "Self",
    components: "V",
    duration: "Conc, 1 min",
    description: "Next ranged wea atk, hit/miss all crea in 5ft of target DC Dex save or 1d10 piercing dmg",
    descriptionFull: "The next time you make a ranged weapon attack during the spell's duration, the weapon's ammunition, or the weapon itself if it's a thrown weapon, transforms into a volley of thorns. Make the attack roll as normal. Whether you hit or miss, the target and all creatures within 5 feet of it must make a Dexterity saving throw. A creature takes 1d10 piercing damage on a failed save, or half as much damage on a successful one."
};

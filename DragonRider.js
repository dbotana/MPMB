/* -WHAT IS THIS?-
This file adds optional material to "MPMB's Character Record Sheet" found at https://flapkan.com/mpmb/charsheets
Import this file using the "Add Extra Materials" bookmark.

-KEEP IN MIND-
It is recommended to enter the code in a fresh sheet before adding any other information (i.e. before making your character with it).
*/

/* -INFORMATION-
Subject: Class
Effect: This script adds the "Dragon Rider" class and its subclasses
Code by: Rocky
Date: 2025-05-22 (sheet v13)
*/
var iFileName = "Dragon Rider.js";

RequiredSheetVersion('13');

SourceList["DR"] = {
    name: "Dragon Rider",
    abbreviation: "DR",
    group: "Rocky's Homebrew",
    date: "2025/05/22"
};

// Create Dragon Companion function for Dragon Rider
var createDragonRiderCompanion = function (colour) {
    var types = {
        'ruby': {
            energy: "fire",
            breathRange: "15-ft cone",
            breathSave: "Dex",
            description: "This dragon's scales are bright red, progressing to darker crimson with age. Breathes intense heat."
        },
        'sapphire': {
            energy: "lightning",
            breathRange: "5-ft × 30-ft line",
            breathSave: "Dex",
            description: "This dragon's scales begin sky blue with cloudy white flecks, aging to deep oceanic blue. Breathes electrical energy."
        },
        'emerald': {
            energy: "poison",
            breathRange: "15-ft cone",
            breathSave: "Con",
            description: "This dragon's scales begin light grassy green, aging to verdant forest green. Breathes toxic poison gas."
        },
        'opal': {
            energy: "cold",
            breathRange: "15-ft cone",
            breathSave: "Con",
            description: "This dragon's scales begin gleaming white with phosphorescent flecks, aging to grey with ashy undertones. Breathes frigid ice."
        },
        'obsidian': {
            energy: "acid",
            breathRange: "5-ft × 30-ft line",
            breathSave: "Dex",
            description: "This dragon's scales appear dark gray at birth, becoming black as night. Breathes virulent acid."
        }
    };

    var type = types[colour];
    if (!type) return false;

    var colourUC = colour.capitalize();

    var creature = {
        name: colourUC + " Dragon Companion",
        nameAlt: ["Dragon Companion, " + colourUC],
        minlevelLinked: ["dragon rider"],
        header: "Dragon comp.",
        source: [["DR", 0]],
        size: 3, // Medium
        type: "Dragon",
        alignment: "Same as rider",
        ac: 15,
        hp: 14,
        hd: [1, 12],
        hdLinked: ["dragon rider"],
        speed: "20 ft, fly 20 ft",
        scores: [16, 12, 14, 10, 10, 11],
        saves: ["Str", "Con", "Wis", "Cha"],
        skills: {
            "perception": 2,
            "stealth": 3
        },
        damage_resistances: type.energy,
        passivePerception: 12,
        senses: "Darkvision 60 ft",
        languages: "Common, Draconic",
        challengeRating: "1",
        proficiencyBonus: 2,
        proficiencyBonusLinked: true,
        attacksAction: 1,
        attacks: [{
            name: "Bite",
            ability: 1,
            damage: [1, 6, "piercing"],
            range: "Melee (5 ft)",
            description: "+1d4 " + type.energy + " damage",
            abilitytodamage: true
        }, {
            name: "Tail",
            ability: 1,
            damage: [1, 8, "bludgeoning"],
            range: "Melee (5 ft)",
            description: "",
            abilitytodamage: true
        }, {
            name: "Claw",
            ability: 1,
            damage: [1, 4, "slashing"],
            range: "Melee (5 ft)",
            description: "",
            abilitytodamage: true
        }, {
            name: "Breath Weapon (1× per SR)",
            ability: 3,
            damage: [2, 6, type.energy],
            range: type.breathRange,
            description: type.breathSave + " save for half damage",
            abilitytodamage: false,
            dc: true
        }],
        features: [{
            name: "Darkvision",
            description: "The dragon can see in dim light within 60 feet as if it were bright light, and in darkness as if it were dim light."
        }],
        traits: [{
            name: "Breath Attack (Dragon Rider 2)",
            minlevel: 2,
            description: "The dragon gains a breath weapon that recharges on a short or long rest.",
            eval: function (prefix, lvl) {
                var crea = CurrentCompRace[prefix];
                Value(prefix + "Comp.Use.Attack.2.Weapon Selection", crea.attacks[3].name);
            },
            removeeval: function (prefix, lvl) {
                Value(prefix + "Comp.Use.Attack.2.Weapon Selection", "");
            }
        }, {
            name: "Size Increase",
            minlevel: 3,
            description: "At 3rd level, the dragon's size increases to Large. At 15th level, it increases to Huge.",
            eval: function (prefix, lvl) {
                var drLvl = classes.known['dragon rider'] ? classes.known['dragon rider'].level : 0;
                if (drLvl >= 15) {
                    PickDropdown(prefix + "Comp.Desc.Size", 1); // Huge
                    Value(prefix + "Comp.Use.Speed", "35 ft, fly 70 ft");
                } else if (drLvl >= 3) {
                    PickDropdown(prefix + "Comp.Desc.Size", 2); // Large
                    Value(prefix + "Comp.Use.Speed", "25 ft, fly 30 ft");
                }
            },
            removeeval: function (prefix, lvl) {
                PickDropdown(prefix + "Comp.Desc.Size", 3); // Medium
                Value(prefix + "Comp.Use.Speed", "20 ft, fly 20 ft");
            }
        }, {
            name: "Natural Armor",
            minlevel: 3,
            description: "The dragon's AC increases by 1 at levels 3, 7, 13, and 17.",
            eval: function (prefix, lvl) {
                var drLvl = classes.known['dragon rider'] ? classes.known['dragon rider'].level : 0;
                var acBonus = 0;
                if (drLvl >= 17) acBonus = 4;
                else if (drLvl >= 13) acBonus = 3;
                else if (drLvl >= 7) acBonus = 2;
                else if (drLvl >= 3) acBonus = 1;
                Value(prefix + "Comp.Use.AC", 15 + acBonus);
            },
            removeeval: function (prefix, lvl) {
                Value(prefix + "Comp.Use.AC", 15);
            }
        }, {
            name: "Shape Change",
            minlevel: 5,
            description: "The dragon can change into a medium humanoid form as an action. In this form, it retains its stats but loses fly speed and has 30 ft walking speed."
        }, {
            name: "Advanced Darkvision",
            minlevel: 9,
            description: "The dragon's darkvision increases to 90 feet.",
            eval: function (prefix, lvl) {
                Value(prefix + "Comp.Use.Senses", "Darkvision 90 ft");
            },
            removeeval: function (prefix, lvl) {
                Value(prefix + "Comp.Use.Senses", "Darkvision 60 ft");
            }
        },{
            name: "Size/Speed Increase",
            minlevel: 15,
            eval: function (prefix, lvl) {
                var drLvl = classes.known['dragon rider'] ? classes.known['dragon rider'].level : 0;
                if (drLvl >= 15) {
                    PickDropdown(prefix + "Comp.Desc.Size", 1); // Huge
                    Value(prefix + "Comp.Use.Speed", "35 ft, fly 70 ft");
                } else if (drLvl >= 3) {
                    PickDropdown(prefix + "Comp.Desc.Size", 2); // Large
                    Value(prefix + "Comp.Use.Speed", "25 ft, fly 30 ft");
                }
            },
            removeeval: function (prefix, lvl) {
                PickDropdown(prefix + "Comp.Desc.Size", 3); // Medium
                Value(prefix + "Comp.Use.Speed", "20 ft, fly 20 ft");
            }
        }],
        notes: [{
            name: colourUC + " Dragon Companion",
            description: desc([
                type.description,
                "The dragon companion obeys my commands and acts on my turn",
                "It gains abilities as I gain Dragon Rider levels",
                "The dragon can be knocked unconscious but cannot be permanently killed unless I die"
            ])
        }]
    };

    return [creature];
};



// Main Dragon Rider Class
ClassList["dragon rider"] = {
    regExpSearch: /^(?=.*dragon)(?=.*rider).*$/i,
    name: "Dragon Rider",
    source: [["DR", 0]],
    primaryAbility: "Strength or Dexterity, and Constitution",
    prereqs: "",
    die: 8,
    improvements: [0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 5, 5],
    saves: ["Str", "Wis"],
    skillstxt: {
        primary: "Choose two from Athletics, Acrobatics, Stealth, Nature, Animal Handling, Perception, and Intimidation"
    },
    armorProfs: {
        primary: [true, true, false, true]
    },
    weaponProfs: {
        primary: [true, true]
    },
    equipment: "Dragon Rider starting equipment:" +
        "\n \u2022 One martial weapon" +
        "\n \u2022 Any two simple weapons" +
        "\n \u2022 Leather armor or scale mail" +
        "\n \u2022 Leatherworker's tools and an explorer's pack" +
        "\n\nAlternatively, choose 5d4 \xD7 10 gp worth of starting equipment instead of both the class' and the background's starting equipment.",
    subclasses: ["Draconic Vein", []],
    attacks: [1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
    toolProfs: {
        primary: [["Leatherworker's tools"]]
    },
    features: {
        "novice rider": {
            name: "Novice Rider",
            source: [["DR", 0]],
            minlevel: 1,
            description: desc([
                "I am granted a Dragon Companion that obeys my commands",
                "I can communicate telepathically with my companion while within 1 mile",
                'Choose a dragon companion using the "Choose Features" button above'
            ]),
            choices: ["Ruby", "Sapphire", "Emerald", "Opal", "Obsidian"],
            "ruby": {
                name: "Ruby Dragon Companion",
                description: desc([
                    "I have a ruby dragon companion with red scales and fiery breath",
                    "I can communicate telepathically with it while within 1 mile"
                ]),
                creaturesAdd: [["Ruby Dragon Companion"]],
                creatureOptions: createDragonRiderCompanion('ruby')
            },
            "sapphire": {
                name: "Sapphire Dragon Companion",
                description: desc([
                    "I have a sapphire dragon companion with blue scales and lightning breath",
                    "I can communicate telepathically with it while within 1 mile"
                ]),
                creaturesAdd: [["Sapphire Dragon Companion"]],
                creatureOptions: createDragonRiderCompanion('sapphire')
            },
            "emerald": {
                name: "Emerald Dragon Companion",
                description: desc([
                    "I have an emerald dragon companion with green scales and poison breath",
                    "I can communicate telepathically with it while within 1 mile"
                ]),
                creaturesAdd: [["Emerald Dragon Companion"]],
                creatureOptions: createDragonRiderCompanion('emerald')
            },
            "opal": {
                name: "Opal Dragon Companion",
                description: desc([
                    "I have an opal dragon companion with white scales and cold breath",
                    "I can communicate telepathically with it while within 1 mile"
                ]),
                creaturesAdd: [["Opal Dragon Companion"]],
                creatureOptions: createDragonRiderCompanion('opal')
            },
            "obsidian": {
                name: "Obsidian Dragon Companion",
                description: desc([
                    "I have an obsidian dragon companion with black scales and acid breath",
                    "I can communicate telepathically with it while within 1 mile"
                ]),
                creaturesAdd: [["Obsidian Dragon Companion"]],
                creatureOptions: createDragonRiderCompanion('obsidian')
            }
        },
        "draconic vein": {
            name: "Draconic Vein",
            source: [["DR", 0]],
            minlevel: 1,
            description: desc('Choose a Draconic Vein that shapes your bond with your dragon and put it in the "Class" field')
        },
        "fighting style": {
            name: "Fighting Style",
            source: [["DR", 0]],
            minlevel: 2,
            description: desc('Choose a Fighting Style for the dragon rider using the "Choose Feature" button above'),
            choices: ["Archery", "Dueling", "Great Weapon Fighting", "Two-Weapon Fighting"],
            "archery": FightingStyles.archery,
            "dueling": FightingStyles.dueling,
            "great weapon fighting": FightingStyles.great_weapon,
            "two-weapon fighting": FightingStyles.two_weapon
        },
        "dragon trainee": {
            name: "Dragon Trainee",
            source: [["DR", 0]],
            minlevel: 3,
            description: desc([
                "I can craft a saddle for my dragon companion using 10 gp of leather and 8 hours",
                "With the saddle, I can ride my dragon while it is walking"
            ])
        },
        "dragon maneuvers": {
            name: "Dragon Maneuvers",
            source: [["DR", 0]],
            minlevel: 3,
            description: desc([
                "I learn 3 dragon maneuvers and gain 3 maneuver points to use them",
                "I gain 1 additional maneuver point each level and learn more maneuvers at later levels",
                "Maneuver points recharge after a short or long rest",
                "Save DC = 8 + dragon's Strength modifier + proficiency bonus"
            ]),
            additional: levels.map(function (n) {
                if (n < 3) return "";
                var maneuvers = n < 6 ? 3 : n < 10 ? 4 : n < 14 ? 5 : n < 18 ? 6 : 7;
                var points = n;
                return maneuvers + " maneuvers, " + points + " points";
            }),
            limfeaname: "Dragon Maneuvers",
            usages: levels.map(function (n) { return n < 3 ? "" : n }),
            recovery: "short rest",
        },
        "extra attack": {
            name: "Extra Attack",
            source: [["DR", 0]],
            minlevel: 5,
            description: desc("I can attack twice when I take the Attack action on my turn")
        },
        "adept rider": {
            name: "Adept Rider",
            source: [["DR", 0]],
            minlevel: 6,
            description: desc([
                "I can now ride my dragon while it flies",
                "Each of my attacks deals +1 damage while mounted",
                "I learn one additional dragon maneuver"
            ]),
            calcChanges: {
                atkAdd: [
                    function (fields, v) {
                        if (v.isMeleeWeapon || v.isRangedWeapon) {
                            fields.Description += (fields.Description ? '; ' : '') + '+1 damage while mounted';
                        }
                    },
                    "While mounted on my dragon, my attacks deal +1 damage."
                ]
            }
        },
        "draconic awareness": {
            name: "Draconic Awareness",
            source: [["DR", 0]],
            minlevel: 9,
            description: desc("I gain advantage on initiative checks"),
            advantages: [["Initiative", true]]
        },
        "improved saddle": {
            name: "Improved Saddle",
            source: [["DR", 0]],
            minlevel: 10,
            description: desc([
                "I can craft an improved saddle using 25 gp of leather and 8 hours",
                "Mounting and dismounting costs only 5 feet of movement",
                "I can no longer be involuntarily dismounted"
            ])
        },
        "signature maneuver": {
            name: "Signature Maneuver",
            source: [["DR", 0]],
            minlevel: 10,
            description: desc([
                "I choose one Tier 1 dragon maneuver to be my signature maneuver",
                "I can use it once between rests without expending maneuver points",
                "I learn one additional dragon maneuver"
            ]),
            usages: 1,
            recovery: "short rest",
            additional: "signature maneuver"
        },
        "bond of scales": {
            name: "Bond of Scales",
            source: [["DR", 0]],
            minlevel: 13,
            description: desc([
                "During a short rest, any hit dice I expend also heal my dragon for the same amount"
            ])
        },
        "expert rider": {
            name: "Expert Rider",
            source: [["DR", 0]],
            minlevel: 14,
            description: desc([
                "While mounted, each of my attacks deals +3 additional damage (total +4)",
                "I score a critical hit on a 19 or 20 on attack rolls while mounted"
            ]),
            calcChanges: {
                atkAdd: [
                    function (fields, v) {
                        if (v.isMeleeWeapon || v.isRangedWeapon) {
                            fields.Description = fields.Description.replace('+1 damage while mounted', 'while mounted +4 damage and crit 19-20;');
                        }
                    },
                    "While mounted on my dragon, my attacks deal +4 damage total and I crit on 19-20."
                ]
            }
        },
        "isolated prey": {
            name: "Isolated Prey",
            source: [["DR", 0]],
            minlevel: 17,
            description: desc([
                "As a bonus action, I can target a creature I can see for 1 minute or until it's killed",
                "My dragon and I have advantage on attacks vs. the target and deal extra weapon die damage",
                "Opportunity attacks vs. the target don't require reactions (still limited to one attack)"
            ]),
            action: [["bonus action", ""]],
            usages: 1,
            recovery: "short rest"
        },
        "perfected maneuvers": {
            name: "Perfected Maneuvers",
            source: [["DR", 0]],
            minlevel: 18,
            description: desc([
                "My signature maneuver no longer costs maneuver points",
                "I select a new signature maneuver from any tier",
                "I learn one additional dragon maneuver"
            ])
        },
        "master rider": {
            name: "Master Rider",
            source: [["DR", 0]],
            minlevel: 20,
            description: desc([
                "While mounted, my dragon and I have advantage on all saving throws",
                "My telepathic bond persists as long as we're on the same plane",
                "If I have 0 maneuver points when rolling initiative, I start with 5"
            ]),
            savetxt: { adv_vs: ["all saves while mounted"] }
        }
    }
};

// Dragon Knight Subclass
AddSubClass("dragon rider", "dragon knight", {
    regExpSearch: /^(?=.*dragon)(?=.*knight).*$/i,
    subname: "Dragon Knight",
    source: [["DR", 0]],
    features: {
        "subclassfeature1": {
            name: "Heavy Armor Proficiency",
            source: [["DR", 0]],
            minlevel: 1,
            description: "",
            armorProfs: [false, false, true, false]
        },
        "subclassfeature3": {
            name: "Scaled Hide",
            source: [["DR", 0]],
            minlevel: 3,
            description: desc([
                "I gain +3 maximum hit points, and +1 additional maximum hit point for each Dragon Rider level"
            ]),
            calcChanges: {
                hp: function (totalHD, HDobj, prefix) {
                    if (classes.known["dragon rider"]) {
                        var drLvl = classes.known["dragon rider"].level;
                        return [3 + drLvl, "Scaled Hide (Dragon Knight)"];
                    }
                }
            }
        },
        "subclassfeature7": {
            name: "Tooth and Claw",
            source: [["DR", 0]],
            minlevel: 7,
            description: desc([
                "When I deal damage to a creature, I can deal additional damage equal to my Dragon Rider level",
                "This recharges on a short or long rest"
            ]),
            usages: 1,
            recovery: "short rest",
            additional: levels.map(function (n) { return n + " damage"; })
        },
        "subclassfeature11": {
            name: "Draconic Ability",
            source: [["DR", 0]],
            minlevel: 11,
            description: desc([
                "Choose either Strength or Constitution",
                "That ability score maximum is increased to 22"
            ]),
            choices: ["Strength", "Constitution"],
            "strength": {
                name: "Draconic Ability: Strength",
                description: "My Strength score maximum is increased to 22",
                scoresMaximum: [22, 20, 20, 20, 20, 20]
            },
            "constitution": {
                name: "Draconic Ability: Constitution",
                description: "My Constitution score maximum is increased to 22",
                scoresMaximum: [20, 20, 22, 20, 20, 20]
            }
        },
        "subclassfeature15": {
            name: "Strength of Scale",
            source: [["DR", 0]],
            minlevel: 15,
            description: desc([
                "When I roll a Strength check or Strength saving throw, I can add a d6 to the total"
            ])
        },
        "subclassfeature19": {
            name: "Aura of Dominance",
            source: [["DR", 0]],
            minlevel: 19,
            description: desc([
                "Once per day, I can use an action to gain resistance to all damage types for 1 minute",
                "During this time, my weapon attacks deal an additional weapon die of my dragon's damage type"
            ]),
            usages: 1,
            recovery: "long rest",
            action: [["action", ""]]
        }
    }
});

// Dragon Outrider Subclass  
AddSubClass("dragon rider", "dragon outrider", {
    regExpSearch: /^(?=.*dragon)(?=.*outrider).*$/i,
    subname: "Dragon Outrider",
    source: [["DR", 0]],
    features: {
        "subclassfeature1": {
            name: "Perception Proficiency",
            source: [["DR", 0]],
            minlevel: 1,
            description: desc([
                "I gain proficiency with Perception",
                "If I already have proficiency, I gain expertise instead"
            ]),
            skills: ["Perception"],
            skillstxt: "Perception, or expertise if already proficient"
        },
        "subclassfeature3": {
            name: "Moonlight Hunter",
            source: [["DR", 0]],
            minlevel: 3,
            description: desc([
                "My dragon companion and I gain darkvision out to 120 feet"
            ]),
            vision: [["Darkvision", 120]]
        },
        "subclassfeature7": {
            name: "Supple Wings",
            source: [["DR", 0]],
            minlevel: 7,
            description: desc([
                "My dragon companion can Dash as a bonus action",
                "Stealth checks made while I'm mounted have advantage"
            ]),
            advantages: [["Stealth", true]]
        },
        "subclassfeature11": {
            name: "Draconic Ability",
            source: [["DR", 0]],
            minlevel: 11,
            description: desc([
                "Choose either Dexterity or Wisdom",
                "That ability score maximum is increased to 22"
            ]),
            choices: ["Dexterity", "Wisdom"],
            "dexterity": {
                name: "Draconic Ability: Dexterity",
                description: "My Dexterity score maximum is increased to 22",
                scoresMaximum: [20, 22, 20, 20, 20, 20]
            },
            "wisdom": {
                name: "Draconic Ability: Wisdom",
                description: "My Wisdom score maximum is increased to 22",
                scoresMaximum: [20, 20, 20, 20, 22, 20]
            }
        },
        "subclassfeature15": {
            name: "Take Aim",
            source: [["DR", 0]],
            minlevel: 15,
            description: desc([
                "Once per turn, I can choose to re-roll one attack that misses"
            ])
        },
        "subclassfeature19": {
            name: "Aura of Agility",
            source: [["DR", 0]],
            minlevel: 19,
            description: desc([
                "Once per day, I can use an action to enhance my quickness and accuracy for 1 minute",
                "My dragon's and my movement speed is doubled",
                "I can make an additional attack per Attack action"
            ]),
            usages: 1,
            recovery: "long rest",
            action: [["action", ""]]
        }
    }
});

function AddDragonManeuverOptions() {
    // Extract all maneuvers from the list
    var maneuverArray = [];
    for (var maneuver in DragonManeuversList) {
        if (DragonManeuversList.hasOwnProperty(maneuver)) {
            maneuverArray.push({
                name: DragonManeuversList[maneuver].name,
                feature: maneuver,
                prerequisite: DragonManeuversList[maneuver].prereqeval,
                tier: DragonManeuversList[maneuver].tier
            });
        }
    }

    // Sort maneuvers by tier
    maneuverArray.sort(function (a, b) {
        return a.tier - b.tier || a.name.localeCompare(b.name);
    });

    // Add the maneuvers as feature choices
    for (var i = 0; i < maneuverArray.length; i++) {
        var curMan = maneuverArray[i];
        var maneuverObject = DragonManeuversList[curMan.feature];

        // Create a feature object for each maneuver
        var featureObj = {
            name: maneuverObject.name,
            source: maneuverObject.source,
            description: maneuverObject.description,
            prereqeval: maneuverObject.prereqeval
        };

        // Add action if present
        if (maneuverObject.action) {
            featureObj.action = maneuverObject.action;
        }

        // Add to dragon maneuvers feature
        AddFeatureChoice(ClassList["dragon rider"].features["dragon maneuvers"], true, maneuverObject.name, featureObj, "Dragon Maneuvers (Tier " + maneuverObject.tier + ")");
    }
}
// Dragon Rider Maneuvers List
DragonManeuversList = {
    // Tier 1 Maneuvers (1 Point)
    "charging strike": {
        name: "Charging Strike",
        source: ["DR", 0],
        description: "Action while mounted; Dragon charges; if moved 10+ ft straight, +2d8 damage; target Str save or prone",
        tier: 1,
        points: 1,
        action: ["action", ""],
        dragon_form_only: true
    },
    "coordinated flank": {
        name: "Coordinated Flank",
        source: ["DR", 0],
        description: "Bonus action while unmounted; If within 5 ft of same creature, advantage on attacks until next turn",
        tier: 1,
        points: 1,
        action: ["bonus action", ""]
    },
    "swipe the legs": {
        name: "Swipe the Legs",
        source: ["DR", 0],
        description: "Bonus action; Dragon makes tail attack; if hit, target makes Str save or is knocked prone",
        tier: 1,
        points: 1,
        action: ["bonus action", ""],
        dragon_form_only: true
    },
    "take the hit": {
        name: "Take the Hit",
        source: ["DR", 0],
        description: "Reaction when hit by attack; Dragon takes hit for you or you take hit for Dragon; must be within 5 ft",
        tier: 1,
        points: 1,
        action: ["reaction", ""]
    },
    "evasive maneuvers": {
        name: "Evasive Maneuvers",
        source: ["DR", 0],
        description: "Bonus action while riding Dragon; Take Dodge action for both you and your Dragon companion",
        tier: 1,
        points: 1,
        action: ["bonus action", ""],
        dragon_form_only: true
    },
    "create an opening": {
        name: "Create an Opening",
        source: ["DR", 0],
        description: "Reaction; Dragon creates gust with wings; allies within 20 ft can move without opportunity attacks",
        tier: 1,
        points: 1,
        action: ["reaction", ""],
        dragon_form_only: true
    },
    "bolstered defense": {
        name: "Bolstered Defense",
        source: ["DR", 0],
        description: "Bonus action; Increase AC by Dragon's Con modifier until beginning of next turn",
        prereqeval: function (v) {
            return classes.known.dragonrider && classes.known.dragonrider.subclass.indexOf("knight") !== -1 ? true : "skip";
        },
        tier: 1,
        points: 1,
        action: ["bonus action", ""],
    },
    "scan the perimeter": {
        name: "Scan the Perimeter",
        source: ["DR", 0],
        description: "Bonus action; Invisible or hidden creatures within 60 ft revealed only to you until next turn",
        prereqeval: function (v) {
            return classes.known.dragonrider && classes.known.dragonrider.subclass.indexOf("outrider") !== -1 ? true : "skip";
        },
        tier: 1,
        points: 1,
        action: ["bonus action", ""],
    },

    // Tier 2 Maneuvers (2 Points)
    "drag 'n drop": {
        name: "Drag 'n Drop",
        source: ["DR", 0],
        description: "If bite hits medium or smaller creature; Str save or grappled & restrained; Dragon moves at half speed",
        prereqeval: function (v) { return classes.known["dragon rider"].level >= 5; },
        tier: 2,
        points: 2,
        dragon_form_only: true
    },
    "channeled breath": {
        name: "Channeled Breath",
        source: ["DR", 0],
        description: "Action; 15 ft cone save vs breath; 4d8 dmg or half on save; +1d8 per extra 2 points spent",
        prereqeval: function (v) { return classes.known["dragon rider"].level >= 5; },
        tier: 2,
        points: 2,
        action: ["action", ""],
        additional_points: true
    },
    "fury strikes": {
        name: "Fury Strikes",
        source: ["DR", 0],
        description: "Action; Dragon makes bite and two claw attacks; if all 3 hit, regain 1 maneuver point",
        prereqeval: function (v) { return classes.known["dragon rider"].level >= 5; },
        tier: 2,
        points: 2,
        action: ["action", ""],
        dragon_form_only: true
    },
    "diving strike": {
        name: "Diving Strike",
        source: ["DR", 0],
        description: "Action; Dismount mid-air; attack with adv. + fall damage; Dex save (DC 15+) to avoid fall damage",
        prereqeval: function (v) { return classes.known["dragon rider"].level >= 5; },
        tier: 2,
        points: 2,
        action: ["action", ""],
        dragon_form_only: true
    },
    "manifestation knight": {
        name: "Manifestation (Knight)",
        source: ["DR", 0],
        description: "Bonus action; Draconic claw; 1d10+Str slashing & 1d8 elemental; +1d8 per extra 2 points spent",
        prereqeval: function (v) {
            return classes.known.dragonrider >= 5 && classes.known.dragonrider.subclass.indexOf("knight") !== -1 ? true : "skip";
        },
        tier: 2,
        points: 2,
        action: ["bonus action", ""],
        additional_points: true
    },
    "manifestation outrider": {
        name: "Manifestation (Outrider)",
        source: ["DR", 0],
        description: "Bonus action; Manifest draconic wings; gain fly speed equal to Dragon's for 1 minute",
        prereqeval: function (v) {
            return classes.known.dragonrider >= 5 && classes.known.dragonrider.subclass.indexOf("outrider") !== -1 ? true : "skip";
        },
        tier: 2,
        points: 2,
        action: ["bonus action", ""],
    },

    // Tier 3 Maneuvers (5 Points)
    "ravage": {
        name: "Ravage",
        source: ["DR", 0],
        description: "If Dragon's bite hits; target Str save or takes bite damage + 10d6 slashing damage",
        prereqeval: function (v) { return classes.known["dragon rider"].level >= 10; },
        tier: 3,
        points: 5,
        dragon_form_only: true
    },
    "recharge": {
        name: "Recharge",
        source: ["DR", 0],
        description: "Action; Funnel energy into Dragon to immediately recharge its breath attack",
        prereqeval: function (v) { return classes.known["dragon rider"].level >= 10; },
        tier: 3,
        points: 5,
        action: ["action", ""]
    },
    "unleash": {
        name: "Unleash",
        source: ["DR", 0],
        description: "Action; Dragon enters fury for 1 min; 2 attacks, extra damage die, breath recharge 5+ on d6, DC 12 check at end",
        prereqeval: function (v) { return classes.known["dragon rider"].level >= 10; },
        tier: 3,
        points: 5,
        action: ["action", ""]
    }
};

AddDragonManeuverOptions();
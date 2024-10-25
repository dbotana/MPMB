/*	-WHAT IS THIS?-
	This file adds optional material to "MPMB's Character Record Sheet" found at https://flapkan.com/mpmb/charsheets
	Import this file using the "Add Extra Materials" bookmark.
	-KEEP IN MIND-
	It is recommended to enter the code in a fresh sheet before adding any other information (i.e. before making your character with it).
*/

/*	-INFORMATION-
	Subject:	Class
	Effect:		This script adds a class called "Qigong Monk" and its subclass written by John J.
	Code by:	Rocky
	Date:		2024-10-22 (sheet v13)
*/
var iFileName = "QigongMonk.js";
RequiredSheetVersion("13.2.0");

SourceList["Qi"] = {
    name : "Qigong Monk Homebrew",
    abbreviation : "Qi",
    group : "Homebrew Classes",
    date : "2024/10/25"
};

ClassList["qigongMonk"] = {
    regExpSearch : /^(?=.*qigong)(?=.*monk).*$/i,
    name : "Qigong Monk",
    source : ["Qi", 0],
    primaryAbility : "Dexterity and Wisdom",
    abilitySave : 5,
    prereqs : "Dexterity 13 and Wisdom 13",
    die : 8,
    improvements : [0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 5, 5],
    saves : ["Str", "Dex"],
    toolProfs : {
        primary : [["Artisan's tool or musical instrument", 1]]
    },
    skillstxt : {
        primary : "Choose two from Acrobatics, Athletics, History, Insight, Religion, and Stealth"
    },
    armorProfs : {
        primary : [false, false, false, false]
    },
    weaponProfs : {
        primary : [true, false, ["shortsword"]],
        secondary : [true, false, ["shortsword"]]
    },
    equipment : "Qigong Monk starting equipment:" +
        "\n \u2022 A shortsword -or- any simple weapon;" +
        "\n \u2022 A dungeoneer's pack -or- an explorer's pack;" +
        "\n \u2022 10 darts." +
        "\n Alternatively, choose 5d4 gp worth of starting equipment instead of both the class' and the background's starting equipment.",
    subclasses : ["Monastic Tradition", []],
    attacks : [1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
    features : {
       "studied enemy": {
            name: "Studied Enemy",
            source: ["Qi", 0],
            minlevel: 1,
            description: desc([
                "I have significant experience using my abilities on certain enemies I've studied",
                "Choose a type of studied enemy: Aberrations, Beasts, Celestials, Fey, Fiends, Giants, or Monstrosities",
                "Alternatively, select two humanoid races and your own race as studied enemies",
                "I have Advantage on Medicine (Wisdom), Insight (Wisdom), History (Intelligence) checks on these enemies",
                "Learn one language or method of communication used by these enemies if they can communicate"
            ]),
            choices: ["Aberrations", "Beasts", "Celestials", "Fey", "Fiends", "Giants", "Monstrosities", "Humanoids"],
            additional: levels.map(function(n) {
                return n < 6 ? "" : n < 14 ? "Choose one additional studied enemy and language" : "";
            }),
            eval: function() {
                AddLanguage("Language of Studied Enemy");
            },
            removeeval: function() {
                RemoveLanguage("Language of Studied Enemy");
            }
        },
        "unarmored qi defense" : {
            name : "Unarmored Qi Defense",
            source : ["Qi", 0],
            minlevel : 1,
            description : desc("Without armor and no shield, my AC is 10 + Dexterity modifier + Wisdom modifier"),
            armorOptions : [{
                regExpSearch : /justToAddToDropDownAndEffectWildShape/,
                name : "Unarmored Qi Defense (Wis)",
                source : ["Qi", 0],
                ac : "10+Wis",
                affectsWildShape: true,
                selectNow: true
            }]
        },
        "martial arts" : {
            name: "Martial Arts",
            source: ["Qi",0],
            minlevel:1,
            description:desc([
                "Monk weapons: any simple melee (not two-handed/heavy), unarmed strike",
                "With monk weapons I can use Dex instead of Str and use Martial Arts damage die",
                "When taking an Attack action with these I get one unarmed strike as a bonus action"
            ]),
            additional: levels.map(function(n) { return "1d" + (n <5 ?4:n <11 ?6:n <17 ?8:10); }),
            action: [["bonus action", "Unarmed Strike (with Attack action)"]],
        },
        "studied enemy": {
            name: "Studied Enemy",
            source: ["Qi", 0],
            minlevel: 3,
            description: desc([
                "I can spend 1 minute observing or interacting with a creature to learn its capabilities",
                "The DM tells me if it is equal, superior, or inferior in two of my choice of the following:",
                "Strength, Dexterity, Constitution, Armor Class, Current Hit Points, Total Class Levels (if any), Fighter Class Levels (if any)"
            ]),
            action: [["action", "Study Enemy"]],
            usages: levels.map(function(n) { return n < 3 ? "" : 1; }),
            recovery: "short rest"
        },
        "unarmed martial arts": {
            name: "Unarmed Martial Arts",
            source: ["Qi", 0],
            minlevel: 1,
            description: desc([
                "Mastery of a singular style using unarmed strikes and pressure points",
                "Use Dexterity instead of Strength for attack and damage rolls of unarmed strikes and improvisational weapons",
                "Roll a d6 in place of normal damage for unarmed strikes or improvisational weapons",
                "Damage die increases at levels 5, 11, and 17",
                "Follow-through Attack: After using Attack action with unarmed strike or improvisational weapon, make another unarmed strike as a bonus action"
            ]),
            additional: levels.map(function(n) {
                return n < 5 ? "1d6" : n < 11 ? "1d8" : n < 17 ? "1d10" : "1d12";
            }),
            action: [["bonus action", "Unarmed Strike (with Attack action)"]],
            calcChanges: {
                atkAdd: [
                    function(fields, v) {
                        if (v.isMeleeWeapon && (v.baseWeaponName == "unarmed strike" || v.theWea.improvised)) {
                            fields.Mod = v.StrDex;
                            var monkDie = function(n) { return n < 5 ? 6 : n < 11 ? 8 : n < 17 ? 10 : 12; }(classes.known["qigong monk"].level);
                            if (fields.Damage_Die.replace('d', '*') < monkDie) {
                                fields.Damage_Die = '1d' + monkDie;
                            }
                        }
                    },
                    "I can use Dexterity instead of Strength for attack and damage rolls of my unarmed strikes and improvisational weapons. I roll a d6 in place of normal damage, increasing at higher levels."
                ]
            }
        },
        "improvisational armor": {
            name: "Improvisational Armor",
            source: ["Qi", 0],
            minlevel: 1,
            description: desc([
                "Add proficiency bonus to AC against one melee attacker per round when using an improvisational item",
                "If I take the Dodge action, this bonus applies against all attacks until the start of my next turn",
                "Requires: I am aware of the attacker, have an undamaged improvissational item, and can interpose the item between us",
                "Add proficiency to saving throws against one directional AoE attack if item is unavailable. See notes page for cover rules."
            ]),
            toNotesPage: [{
                name: "Improvisational Armor Cover",
                source: ["Qi", 0],
                popupName: "Improvisational Armor Cover",
                note: desc([
                    "Walls, trees, creatures, and other obstacles can provide cover during combat, making a target more difficult to harm.",
                    "A target benefits from cover only when an attack or effect originates from the opposite side.",
                    "A Qigong Monk can temporarily improve their AC with improvisational items.",
                    "To gain proficiency bonus to AC, use an item that can be picked up or moved to keep your attacker opposite.",
                    "Simply hiding behind something does not provide this bonus; standard Cover rules apply.",
                    "This works only against attackers you are aware of, even if invisible, but you must declare the direction blocked.",
                    "If a target is behind multiple sources of cover, only the most protective degree applies; they aren't added together.",
                    "Partial Cover: Add proficiency to AC and Dex saves if at least 1/4 of your body is covered by an item you can hold.",
                    "Half Cover: Add 2 + proficiency to AC and Dex saves if half your body is blocked by an object.",
                    "Three-Quarter Cover: Add 5 + proficiency to AC and Dex saves if 3/4 of your body is covered.",
                    "Full Cover: Can't be targeted directly; add proficiency to saves vs. AoE effects if fully concealed.",
                    "Critical Damage: Items used for cover or attack that are critically hit are considered damaged and unusable until after a short rest."
                ])
            },{
                name: "Entangle and Pin",
                source: ["Qi", 0],
                minlevel: 1,
                note: desc([
                    "Use improvisational weapons/armor to entangle or pin opponents instead of dealing damage.",
                    "Entangle: Sacrifice AC/weapon to restrain target's limb/weapon for 1 round if you let go.",
                    "Pin: Maintain control of object to restrain target; requires a surface to pin against.",
                    "Effects vary based on what is entangled/pinned:",
                    "- Arm(s): Can't attack/defend with affected limbs; disadvantage on DEX saves.",
                    "- Weapon: Can't be used; disadvantage if maintaining grip.",
                    "- Leg(s)/Foot: Speed 0; disadvantage on attacks and DEX saves.",
                    "- Body/Hips: Combine arm and leg restrictions; weapon use depends on Storyteller.",
                    "Escape: STR save DC = 8 + monk proficiency + item size bonus (handheld +1, medium +2, large +3)."
                ])
            }]
        },
        "qi": {
            name: "Aiqido (Qi Martial Art)",
            source: ["Qi", 0],
            minlevel: 2,
            description: desc([
                "Activate Aiqido with an action or spend 1 qi point to activate as a bonus action",
                "Gain benefits of Dodge and reduce damage by d20 + proficiency + DEX when hit",
                "First melee attack can be followed by a Grapple check; choose grappled, immobilized, or thrown",
                "Spend 1 qi point to reroll a failed grapple check once",
                "Use a grappled target as cover: +2 AC if same size, +5 AC if one size larger",
                "Spend 1 qi point to Dive up to 10 ft without provoking AoO, returning to stance or Prone",
                "Spend 1 qi point to enable options against another visible attack or engaged attacker"
            ]),
            action: [["action", ""], ["bonus action", ""]],
            usages: levels.map(function(n) { return n < 2 ? "" : n; }),
            recovery: "short rest"
        },
        "backlash table": {
            name: "Backlash Table",
            source: ["Qi", 0],
            minlevel: 2,
            toNotesPage:
            [{
                name: "Backlash Table",
                source: ["Qi", 0],
                popupName: "Backlash Table",
                note: desc([
                    "Roll 1d6 for Backlash from a Critical Fail while using Qi:",
                    "1 = Can't spend more qi until end of next round.",
                    "2 = Must take an Action/Reaction/Bonus action to unblock before spending more qi.",
                    "3 = Fumble an improvisational weapon or push one out of reach.",
                    "4 = Efforts against target interrupted; nothing happens if not in action.",
                    "5 = Nothing happens, just fail.",
                    "6 = Spend same qi cost to re-roll attack; if fail again, treat as rolling a 1 again."
                ])
            }]
        },
        "ability score improvement damage type": {
            name: "Ability Score Improvement Damage Type",
            source: ["QG", 0],
            minlevel: 8,
            description: desc([
                "At levels 8, 12, 16, and 19, choose a new damage type to add to your attacks",
                "Choices are permanent; by level 19, you'll have chosen four types",
                "Declare the damage type before rolling to hit; change it at the start of your next turn",
            ]),
            extraname: "Damage Type Choice",
            extrachoices: [
                "poison", "necrotic", "acid", "cold", "fire", "lightning", "force", "thunder", "psychic", "radiant"
            ],
            extraTimes: levels.map(function (n) {
                return n < 8 ? 0 : n < 12 ? 1 : n < 16 ? 2 : n < 19 ? 3 : 4;
            }),
            "poison" : {
                name: "Poison",
                source: ["Qi", 0],
                popupName: "Poison Damage",
                minlevel: 8,
                toNotesPage:            [{
                    name: "Poison Damage",
                    source: ["Qi", 0],
                    note: desc("My attacks can deal Poison damage.")
                }]
                },
            "necrotic" : {
                name: "Necrotic",
                source: ["Qi", 0],
                popupName: "Necrotic Damage",
                minlevel: 8,
                toNotesPage:            [{
                    name: "Necrotic Damage",
                    source: ["Qi", 0],
                    note: desc("My attacks can deal Necrotic damage.")
                }]
                },
            "acid" : {
                name: "Acid",
                source: ["Qi", 0],
                popupName: "Acid Damage",
                minlevel: 8,
                toNotesPage:            [{
                    name: "Acid Damage",
                    source: ["Qi", 0],
                    note: desc("My attacks can deal Acid damage.")
                }]
                },
            "cold" : {
                name: "Cold",
                source: ["Qi", 0],
                popupName: "Cold Damage",
                minlevel: 12,
                toNotesPage:            [{
                    name: "Cold Damage",
                    source: ["Qi", 0],
                    note: desc("My attacks can deal Cold damage.")
                }]
                },
            "fire" : {
                name: "Fire",
                source: ["Qi", 0],
                popupName: "Fire Damage",
                minlevel: 12,
                toNotesPage:            [{
                    name: "Fire Damage",
                    source: ["Qi", 0],
                    note: desc("My attacks can deal Fire damage.")
                }]
                },
            "lightning" : {
                name: "Lightning",
                source: ["Qi", 0],
                popupName: "Lightning Damage",
                minlevel: 12,
                toNotesPage:            [{
                    name: "Lightning Damage",
                    source: ["Qi", 0],
                    note: desc("My attacks can deal Lightning damage.")
                }]
                },
            "force" : {
                name: "Force",
                source: ["Qi", 0],
                popupName: "Force Damage",
                minlevel: 16,
                toNotesPage:            [{
                    name: "Force Damage",
                    source: ["Qi", 0],
                    note: desc("My attacks can deal Force damage.")
                }]
                },
            "thunder" : {
                name: "Thunder",
                source: ["Qi", 0],
                popupName: "Thunder Damage",
                minlevel: 16,
                toNotesPage:            [{
                    name: "Thunder Damage",
                    source: ["Qi", 0],
                    note: desc("My attacks can deal Thunder damage.")
                }]
                },
            "psychic" : {
                name: "Psychic",
                source: ["Qi", 0],
                popupName: "Psychic Damage",
                minlevel: 19,
                toNotesPage:            [{
                    name: "Psychic Damage",
                    source: ["Qi", 0],
                    note: desc("My attacks can deal Psychic damage.")
                }]
                },
            "radiant" : {
                name: "Radiant",
                source: ["Qi", 0],
                popupName: "Radiant Damage",
                minlevel: 19,
                toNotesPage:            [{
                    name: "Radiant Damage",
                    source: ["Qi", 0],
                    note: desc("My attacks can deal Radiant damage.")
                }]
                }
        },
        "mitigating qi": {
            name: "Mitigating Qi",
            source: ["Qi", 0],
            minlevel: 4,
            description: desc([
                "Spend 1 qi to negate a critical hit against you, rolling normal damage instead."
            ]),
        },
        "extra attack": {
            name: "Extra Attack",
            source: ["QG", 0],
            minlevel: 5,
            description: desc([
                "I can attack twice instead of once when I take the Attack action on my turn",
                "I can use two special abilities with the Attack label, or one Qi Attack and one normal attack",
                "One attack must be followed by the extra attack, then a Follow-through Attack as a bonus action",]),
            action: [["action", ""]],
            calcChanges: {
                atkAdd: [
                    function(fields, v) {
                        if (v.isMeleeWeapon && v.theWea.monkweapon) {
                            fields.Description += (fields.Description ? '; ' : '') + 'Can use extra attack';
                        }
                    },
                    "When taking the Attack action, I can make an additional attack."
                ]
            }
        },
        "stunning strike": {
            name: "Stunning Strike",
            source: ["QG", 0],
            minlevel: 5,
            description: desc([
                "Spend 1 qi point to attempt a stunning strike after hitting with an unarmed or improvisational weapon attack",
                "Target must succeed on a Constitution saving throw or be stunned (cannot take any actions on their next turn)",
            ]),
            usages: levels.map(function(n) { return n < 5 ? "" : n; }),
            recovery: "short rest",
            action: [["action", ""]],
            calcChanges: {
                atkAdd: [
                    function(fields, v) {
                        if (v.isMeleeWeapon && (v.theWea.monkweapon || v.baseWeaponName == "unarmed strike")) {
                            fields.Description += (fields.Description ? '; ' : '') + 'Stunning Strike [1 qi point]';
                        }
                    },
                    "When I hit with an unarmed or improvisational weapon attack, I can spend 1 qi point to attempt a Stunning Strike."
                ]
            }
        },
        "qi-empowered strikes": {
            name: "Qi-Empowered Strikes",
            source: ["QG", 0],
            minlevel: 6,
            description: desc([
                "Unarmed strikes count as magical for overcoming resistances and immunities",
                "Choose one additional studied enemy and associated language"
            ]),
            calcChanges: {
                atkAdd: [
                    function (fields, v) {
                        if (v.baseWeaponName == "unarmed strike" && !v.theWea.isMagicWeapon) {
                            fields.Description += (fields.Description ? '; ' : '') + 'Counts as magical';
                        }
                    },
                    "My unarmed strikes count as magical for overcoming resistances and immunities."
                ]
            },
        },
        "free-flowing energy": {
            name: "Free-flowing Energy",
            source: ["QG", 0],
            minlevel: 7,
            description: desc([
                "Use a bonus action to end one effect on yourself causing a saving throw each round",
                "Make saving throw after a Long Rest against long-term effects"
            ]),
            action: [["bonus action", ""]],
            savetxt: {
                text: ["Adv. on Int/Wis saves; half damage on fail"],
				dmgres : ["Psychic"]
            }
        },
        "improvisational armor improved": {
            name: "Improvisational Armor (Improved)",
            source: ["QG", 0],
            minlevel: 9,
            description: desc([
                "Add double proficiency to AC against one melee attacker per round; two if using Improvisational Weaponry feat",
                "Bonus applies against all attacks when using Dodge action with an improvisational item",
                "Critical hit on an unmodified roll of 19 or better"
            ]),
            calcChanges: {
                atkAdd: [
                    function(fields, v) {
                        if (v.isMeleeWeapon && v.theWea.improvised) {
                            fields.Description += (fields.Description ? '; ' : '') + 'Crit. 19-20';
                        }
                    },
                    "My attacks with improvisational weapons score a critical hit on a roll of 19 or 20."
                ],
            }
        },
        "purity of body": {
            name: "Purity of Body",
            source: ["QG", 0],
            minlevel: 10,
            description: desc([
                "I am immune to disease and poison; resistant to necrotic damage"
            ]),
            savetxt: {
                dmgres: ["Necrotic"]
            },
        },
        "tranquility": {
            name: "Tranquility",
            source: ["QG", 0],
            minlevel: 11,
            description: desc([
                "Enter a special meditation that grants an aura of peace",
                "At the end of a Long Rest, gain the effect of a Sanctuary spell until your next Long Rest",
                "Sanctuary ends early if you make an Attack or cast a spell affecting an enemy",
                "Qi abilities without the Attack label do not interrupt Sanctuary"
            ]),
            savetxt: {
                text: ["Sanctuary (DC 8 + Wis mod + Prof)"],
                adv_vs: ["charmed"]
            },
            spellcastingBonus: [{
                name: "Tranquility",
                spells: ["sanctuary"],
                selection: ["sanctuary"],
                firstCol: "LR"
            }],
        },
        "the great wheel": {
            name: "The Great Wheel",
            source: ["QG", 0],
            minlevel : 13,
            description: desc([
                "If someone gains advantage against you you can choose to gain advantage against them on your next roll against them (attack or save) or put them at a disadvantage on their next roll (attack or save)"
            ]),
        },
        "diamond soul" : {
			name : "Diamond Soul",
			source : [["SRD", 28], ["P", 79]],
			minlevel : 14,
			description : desc("I am proficient with all saves; I can reroll a failed save once by spending 1 ki point"),
			additional : "1 ki point to reroll failed saving throw",
			saves : ["Str", "Dex", "Con", "Int", "Wis", "Cha"]
		},
        "timeless body" : {
			name : "Timeless Body",
			source : [["SRD", 28], ["P", 79]],
			minlevel : 15,
			description : desc("I don't require food or water; I don't suffer age penalties and can't be aged magically")
		},
        "echo of vitality": {
            name: "Echo of Vitality",
            source: ["QG", 0],
            minlevel: 17,
            description: desc([
                "Spend 3 qi points after a Long Rest to create health reserves in yourself or another. Reserves last for hours equal to your monk level; qi points can't be recovered until used",
                "When reduced to 0 HP, roll 9d10 to restore that many hit points. Use 1 qi point to automatically succeed a Death Save. Remaining qi restores health at 3d10 each if reduced to 0 HP again"
            ]),
        },
        "chrysalis": {
            name: "Chrysalis",
            source: ["QG", 0],
            minlevel: 18,
            description: desc([
                "Use an action to spend 4 qi points to become resistant to all damage for 1 minute",
                "Also resistant to mind and body altering magic; skin gains a silky shimmering glow",
                "Spend 8 qi points to cast a modified Imprisonment spell (Burial or Sleep) without components",
                "Requires concentration if maintaining two imprisonments; ends if concentration is lost"
            ]),
            usages: 1,
            recovery: "long rest",
            action: [["action", ""]],
            savetxt: {
                text: ["Resistant to all damage types"],
                adv_vs: ["mind-altering effects"]
            }
        },
        "life is qi": {
            name: "Life is Qi",
            source: ["QG", 0],
            minlevel: 20,
            description: desc([
                "When out of qi points, convert unused Hit Dice into Qi points at a 1:1 ratio",
                "If out of Hit Dice, take 1d8 mystical damage per qi point recovered this way"
            ])
        }
        },
    };
// Define the Qigong Monk subclass "Path of the Five Fingers"
AddSubClass("qigongMonk", "path of the five fingers", {
    regExpSearch: /^(?=.*path)(?=.*five)(?=.*fingers).*$/i,
    subname: "Path of the Five Fingers",
    source: ["QG", 0],
    features: {
        "subclassfeature3": {
            name: "Open Hand Technique",
            source: ["QG", 0],
            minlevel: 3,
            description: desc([
                "Spend 1 qi point when hitting with Follow-through Attack to impose an effect:",
                "- Intelligence save or gain Advantage on next attack against target in same fight",
                "- Constitution save or target is Vulnerable to next qi attack within one round",
                "- Force target to use action to Disengage or suffer -2 AC for one round"
            ]),
            usages: levels.map(function(n) { return n < 3 ? "" : n < 6 ? 2 : n < 11 ? 3 : n < 17 ? 4 : 5; }),
            recovery: "short rest"
        },
        "subclassfeature6": {
            name: "Wholeness of Body",
            source: ["QG", 0],
            minlevel: 6,
            description: desc([
                "Once per long rest, as an action, regain hit points equal to three times monk level",
            ]),
            action: [["action", ""]],
            usages: 1,
            recovery: "long rest"
        },
        "subclassfeature17": {
            name: "Five Fingers of Death",
            source: ["QG", 0],
            minlevel: 17,
            description: desc([
                "Can be used once per Long Rest and only on one target at a time",
                "Must hit target five times, each hit requires 1 qi point that can't be recovered until released",
                "Final strike must occur within days equal to monk level; no immediate damage from hits",
                "After fifth strike, target must make a Constitution saving throw",
                "On failure, target is reduced to 0 HP; on success, takes 10d10 force damage",
                "If damage exceeds twice target's max HP, storyteller may allow a gory explosion"
            ]),
            usages: 1,
            recovery: "long rest",
        }
    }
});

// Define Qi features as spells with concise descriptions
SpellsList["detect poison and disease"] = {
    name: "Detect Poison and Disease",
    classes: ["monk"],
    level: 0, // Cantrip level
    source: ["QG", 0],
    description: "Sense poison or disease in a target. Healer's/Poisoner's Kit = 0 Qi.",
    descriptionFull: desc([
        "When you examine someone, you can sense whether they are poisoned or diseased, or both, in the first round.",
        "If uninterrupted, you can concentrate for one more round to identify the kind of poison or disease.",
        "Multiple diagnoses on the same target require more time to identify, especially for rare conditions.",
        "Interrupted concentration starts the process over.",
        "Using a charge from a Healer's Kit or Poisoner's Kit makes this attempt cost 0 qi."
    ]),
    action: [["action", ""]],
    range: "5 ft",
    components: "1",
    duration: "Concentration",
    save: ""
};

SpellsList["resistance"] = {
    name: "Resistance",
    classes: ["monk"],
    level: 0, // Cantrip level
    source: ["QG", 0],
    description: "Grant a d4 bonus to a saving throw. 1 minute concentration = 0 Qi cost",
    descriptionFull: desc([
        "Touch a willing creature to make precision strikes.",
        "Choose the saving throw affected at the time of application.",
        "Once before a Short or Long Rest, the target rolls a d4 and adds it to that saving throw.",
        "The effect ends after one use.",
        "Only one Resistance can be active at a time using this technique.",
        "Taking one minute of concentration reduces qi cost to 0."
    ]),
    action: [["action", ""]],
    range: "Touch",
    components: "1",
    duration: "Until used",
    save: ""
};

SpellsList["spare the dying"] = {
    name: "Spare the Dying",
    classes: ["monk"],
    level: 0, // Cantrip level
    source: ["QG", 0],
    description: "Stabilize a creature at 0 HP.",
    descriptionFull: desc([
        "Make precision strikes on a living creature with 0 hit points.",
        "The creature becomes stable. No effect on undead or constructs.",
        "Does not evoke Death Save if it fails but can only be used once per target per rest period."
    ]),
    action: [["action", ""]],
    range: "Touch",
    components: "1",
    duration: "",
    save: ""
};

SpellsList["cure wounds"] = {
    name: "Cure Wounds",
    classes: ["monk"],
    level: 1,
    source: ["QG", 0],
    description: "Heal a creature you touch. 1d8 + Wis modifier. +1d8/Qi.",
    descriptionFull: desc([
        "Clap hands together and rub until hot. A creature you touch regains hit points equal to 1d8 + your Wisdom modifier.",
        "No effect on undead or constructs.",
        "Additional Qi (option 1): Spend an additional qi point to increase 'spell' level by 1, adding 1d8 healing per level.",
        "Additional Qi (option 2): Spend an additional qi point to heal necrotic damage at half total rolled (min 1)."
    ]),
    action: [["action", ""]],
    range: "Touch",
    components: "1",
    duration: "",
    save: ""
};

SpellsList["inflict wounds"] = {
    name: "Inflict Wounds",
    classes: ["monk"],
    level: 1,
    source: ["QG", 0],
    description: "Deal 3d10 necrotic damage on a hit. +1d10/Qi",
    descriptionFull: desc([
        "Make a melee attack against a creature. On hit, deal unarmed damage + 3d10 necrotic damage.",
        "Additional Qi (option 1): Spend an additional qi point to increase 'spell' level by 1, adding 1d10 damage per level."
    ]),
    action: [["attack", ""]],
    range: "Touch",
    components: "1",
    duration: "",
};
// Define Qi features as spells with concise descriptions
SpellsList["sleep"] = {
    name: "Sleep",
    classes: ["monk"],
    level: 1,
    source: ["QG", 0],
    description: "Induce slumber using qi.",
    descriptionFull: desc([
        "This attack sends the creature into an induced slumber. Roll 5d8 + unarmed damage for your level, the total is how many hit points the creature has that this attack can affect.",
        "The effect is cumulative and reduces the total required for new attempts during the same encounter.",
        "Each creature affected by this spell falls Unconscious for 1 minute, until the sleeper takes more damage, or someone uses an action to shake or slap the sleeper awake.",
        "Undead and creatures immune to Sleep aren't affected by this spell (will work on Elves, etc).",
        "Additional Qi (option 1): If you add an additional qi point to this ability, you increase the effective 'spell' level you 'cast' it at. Roll an additional 2d8 to calculate the total number of hit points the creature has for each level above 1st.",
        "Additional Qi (option 2): If you spend an additional qi you can use an improvisational weapon (which can be thrown) to accomplish the same effect. Your damage is rolled from the improvisational weapon damage (and declared type according to your level)."
    ]),
    action: [["attack", ""]],
    range: "Touch/Ranged",
    components: "1",
    duration: "1 minute",
    save: ""
};

SpellsList["blindness deafness"] = {
    name: "Blindness Deafness",
    classes: ["monk"],
    level: 2,
    source: ["QG", 0],
    description: "Blind or deafen a foe with qi.",
    descriptionFull: desc([
        "You can blind or deafen a foe by striking at vital nerves. If you hit, first apply damage then that foe must make a Constitution saving throw.",
        "If it fails, the target is either Blinded or Deafened (your choice) for up to 1 minute. At the end of each of its turns, the target can make a Constitution saving throw. On a success, the effect ends.",
        "Additional Qi (option 1): When you make this attack using an extra qi, the foe must make a second Constitution saving throw or be affected by both conditions (or if it makes one and fails one, affected by one of them).",
        "Additional Qi (option 2): Spend an additional qi for the effect to require a saving throw at a Disadvantage to take effect and also to overcome.",
        "Additional Qi (option 3): If you spend an additional qi you can empower an improvisational weapon (which can be thrown, and does damage) to accomplish the same effect.",
        "One-Shot: You can only succeed once per effect, per target per their Long Rest."
    ]),
    action: [["attack", ""]],
    range: "Touch/Ranged",
    components: "2",
    duration: "1 minute",
    save: "Con"
};

SpellsList["calm emotions"] = {
    name: "Calm Emotions",
    classes: ["monk"],
    level: 3,
    source: ["QG", 0],
    description: "Calm emotions through qi manipulation.",
    descriptionFull: desc([
        "As an Attack: By attacking key energy flows in the body the Qigong Monk can block their targets flow of Emotions, effectively removing an active rage or frightened state. Your target must make a Constitution saving throw. If a creature fails its saving throw, it enters a relatively calm state for the Duration.",
        "As an Action: When you take this action on a willing target, they experience indifference for up to an hour. This indifference makes the target Resistant against Charm, Fear and provoked Rage."
    ]),
    action: [["attack", ""], ["action", ""]],
    range: "Touch",
    components: "3",
    duration: "Varies",
    save: "Con"
};

SpellsList["increase ability"] = {
    name: "Increase Ability",
    classes: ["monk"],
    level: 3,
    source: ["QG", 0],
    description: "Temporarily increase natural abilities.",
    descriptionFull: desc([
        "You touch a creature with your special attack and temporarily increase its natural abilities. Choose one of the following categories of effects - which lasts for up to TEN MINUTES.",
        "- Tree (+2 STR), Water (+2 DEX), Earth (+2 CON), Light (+2 INT), Time (+2 WIS), Reflection (+2 CHA)."
    ]),
    action: [["action", ""]],
    range: "Touch",
    components: "3",
    duration: "10 minutes",
};

SpellsList["hold person"] = {
    name: "Hold Person",
    classes: ["monk"],
    level: 3,
    source: ["QG", 0],
    description: "Paralyze a humanoid with qi.",
    descriptionFull: desc([
        "Apply pressure to the right spots on a humanoid that you can touch. The target must succeed on a Constitution saving throw or be Paralyzed from major muscle lock for the Duration.",
        "Duration is rounds equal to qi spent +1."
    ]),
    action: [["attack", ""]],
    range: "Touch",
    components: "3",
    duration: "",
};

SpellsList["lesser restoration"] = {
	name : "Lesser Restoration",
	classes : ["monk"],
	level : 3,
	source : ["QG", 0],
	description : "End one disease or condition affecting target.",
	descriptionFull : desc([
		"Your skilled touch can end the effects of either one disease (which also consumes a charge from a Healing Kit) or one condition afflicting it. The condition can be blinded, deafened or paralyzed.",
		"Additional Qi allows removing another effect or curing disease during treatment."
	]),
	action : [["action", ""]],
	range : "Touch",
	components : "3",
	duration : "",
};
// Define Qi features as spells with concise descriptions
SpellsList["protection from poison"] = {
    name: "Protection from Poison",
    classes: ["monk"],
    level: 3,
    source: ["QG", 0],
    description: "Neutralize poison or grant advantage on CON saves.",
    descriptionFull: desc([
        "As an Action, you administer your skills to a creature. If it is Poisoned, you neutralize the poison. If more than one poison afflicts the target, you neutralize the newest poison first. Spend 1 additional qi for each poison.",
        "Qi Cost: You can spend 2 qi to use their natural ability to fight off poison, giving them Advantage on their CON save every round for 1 minute or use a kit.",
        "Option 1: If you use a Poisoner's Kit you can craft an antidote for all the poisons that ail them. Make a Medicine check (with kit advantage) to succeed. A separate check for each poison, one per round.",
        "Option 2: If done as a Ritual (ten minutes at least), with a Kit, spend 2 qi to make a special brew (remember to reduce the number of charges in the kit by 1) that consists of 4 doses. If all 4 are taken at once, all poisons are neutralized.",
        "Note: Those who imbibe a single dose of this special brew will have advantage on saving throws against being Poisoned, and have Resistance to poison damage until they take a Long Rest or they take damage from poison - whichever comes first."
    ]),
    action: [["action", ""], ["ritual", ""]],
    range: "Touch",
    components: "3",
    duration: "Instantaneous",
    save: ""
};

SpellsList["weakness"] = {
    name: "Weakness",
    classes: ["monk"],
    level: 3,
    source: ["QG", 0],
    description: "Halve target's damage with Strength-based attacks.",
    descriptionFull: desc([
        "On a hit, the target deals only half damage with weapon attacks that use Strength until the effect fades. (See Ray of Enfeeblement.) If used with an improvisational weapon it's considered to have struck a nerve causing the weakness instead of your fingers/hand.",
        "At the end of each of the target's turns, it can make a Constitution saving throw against the ability. On a success, the effect fades."
    ]),
    action: [["attack", ""]],
    range: "Touch/Range",
    components: "3",
    duration: "Concentration",
    save: "Con"
};

SpellsList["shatter"] = {
    name: "Shatter",
    classes: ["monk"],
    level: 3,
    source: ["QG", 0],
    description: "Deal force damage to objects or creatures.",
    descriptionFull: desc([
        "As an Action, you strike an inanimate object causing 3d8 force damage, making an unmistakably loud crash. A nonmagical object, including barriers, that isn't being worn or carried takes maximum damage.",
        "As an Attack, the monk strikes their target with great, qi powered force. The affected creature must make the equivalent of a Constitution saving throw. A creature takes 3d8 force damage on a failed save, or half as much damage on a successful one. A creature made of inorganic material such as stone, Crystal, or metal has disadvantage on this saving throw.",
        "Additional Qi: Each additional qi spent increases the damage by 1d8."
    ]),
    action: [["action", ""], ["attack", ""]],
    range: "Varies",
    components: "3",
    duration: "",
};

SpellsList["bestow curse"] = {
    name: "Bestow Curse",
    classes: ["monk"],
    level: 4,
    source: ["QG", 0],
    description: "Curse a target with various effects.",
    descriptionFull: desc([
        "If you successfully attack a creature with this ability, that creature must succeed on a Constitution saving throw or become cursed for 10 rounds. When you attack with this ability, choose the nature of the curse from several options.",
        "- Movement halved and disadvantage on Dexterity checks and saves.",
        "- Disadvantage on Attack rolls.",
        "- Must make Constitution save at start of each turn; failure wastes action.",
        "- Your attacks deal extra necrotic damage.",
        "Additional Qi (option 1): Imbue improvisational weapon to deliver the curse.",
        "Additional Qi (option 2): Increase duration up to various lengths depending on qi spent."
    ]),
    action: [["attack", ""]],
    range: "Touch/Range",
    components: "4",
    duration: "",
};

SpellsList["dispel magic"] = {
	name : "Dispel Magic",
	classes : ["monk"],
	level : 4,
	source : ["QG", 0],
	description : "End effects of spells on target.",
	descriptionFull : desc([
		"Choose a creature or yourself under the effect of magic. The effects of any spell of 3rd level or lower on the target ends. This form of Dispel Magic only dispels an active spell effect, not a magical ability. It does not make a magic item no longer magical or work against spells with a duration of Instantaneous.",
		"Additional Qi allows dispelling higher-level spells by spending more qi."
	]),
	action : [["action", ""]],
	range : "Touch",
	components : "4",
	duration : "",
};

SpellsList["haste"] = {
	name : "Haste",
	classes : ["monk"],
	level : 4,
	source : ["QG", 0],
	description : "Double speed and grant extra actions.",
	descriptionFull : desc([
		"Choose a willing creature that you can touch (even yourself), you can apply acupressure points on your target that will accelerate their metabolism and reaction times. Until the effect ends 6 rounds later, the target's speed is doubled, it gains a +2 bonus to AC, it has advantage on Dexterity saving throws, and it gains an additional action on each of its turns. That action can be used only to take specific actions.",
		"Delayed application replaces normal lethargic aftereffects when cast with a spell."
	]),
	action : [["delayed action", ""]],
	range : "Touch",
	components : "4",
	duration : "",
};

SpellsList["hypnotic kata"] = {
    name: "Hypnotic Kata",
    classes: ["monk"],
    level: 4,
    source: ["QG", 0],
    description: "Charm creatures with a hypnotic pattern.",
    descriptionFull: desc([
        "You move with mystery and grace, creating a twisting pattern of movement.",
        "Each creature in the area who sees you must make a Wisdom saving throw.",
        "On a failed save, the creature becomes Charmed for the Duration and is Incapacitated with speed 0.",
        "Duration lasts as long as you maintain concentration and use an Action each round (up to 10 rounds).",
        "Additional Qi: Transfer focal point to an object for additional rounds per qi spent."
    ]),
    action: [["action", ""]],
    range: "120 ft",
    components: "4",
    duration: "Concentration",
    save: "Wis"
};

SpellsList["protection from energy"] = {
    name: "Protection from Energy",
    classes: ["monk"],
    level: 4,
    source: ["QG", 0],
    description: "Grant resistance to energy damage.",
    descriptionFull: desc([
        "Touch a willing creature to grant Resistance to acid, cold, fire, lightning, or thunder damage.",
        "Resistance works a number of times equal to 3 + the target's CON bonus, expiring after one hour if unused."
    ]),
    action: [["action", ""]],
    range: "Touch",
    components: "4",
    duration: "1 hour"
};

SpellsList["remove curse"] = {
    name: "Remove Curse",
    classes: ["monk"],
    level: 4,
    source: ["QG", 0],
    description: "End curses on a creature or object.",
    descriptionFull: desc([
        "Perform an intricate Ritual for 10 minutes to end all curses affecting one creature or object.",
        "If the object is a cursed magic item, its curse remains but breaks its owner's Attunement."
    ]),
    action: [["ritual", ""]],
    range: "Touch/Close Proximity",
    components: "4",
    duration: ""
};

SpellsList["revivify"] = {
    name: "Revivify",
    classes: ["monk"],
    level: 4,
    source: ["QG", 0],
    description: "Return life to a recently deceased creature.",
    descriptionFull: desc([
        "Maintain contact for at least 10 minutes with a creature that died within the last day (or longer if preserved).",
        "The creature returns to life with 1 hit point; you are reduced to 0 hit points and must make Death Saves.",
        "Gain exhaustion for each failed Death Save; recover from exhaustion only through rest."
    ]),
    action: [["ritual", ""], ["concentration", ""]],
    range: "Touch",
    components: "4",
};

SpellsList["slow"] = {
	name : "Slow",
	classes : ["monk"],
	level : 4,
	source : ["QG", 0],
	description : "Slow target's perception of time.",
	descriptionFull : desc([
		"Strike your target rapidly, causing them to experience time differently. Target takes damage equal to your proficiency bonus and must make a Wisdom saving throw.",
		"Failure causes the target to be slowed for up to 1 minute; success means they lose their Reaction next round."
	]),
	action : [["attack", ""]],
	range : "Touch/Range",
	components : "4",
	duration : "",
	save : "Wis"
};

SpellsList["dominate person"] = {
	name : "Dominate Person",
	classes : ["monk"],
	level : 6,
	source : ["QG", 0],
	description : "Dominate a person's actions through ritual.",
	descriptionFull : desc([
		"Perform a ritual to condition a target's responses, effectively 'Charming' them even if immune to charm.",
		"Target must make Constitution and Wisdom saving throws; failure results in domination for the Duration."
	]),
	action : [["ritual", ""], ["concentration", ""]],
	range : "",
	components : "6",
	duration : ""
};

SpellsList["hold monster"] = {
	name : "Hold Monster",
	classes : ["monk"],
	level : 6,
	source : ["QG", 0],
	description : "Paralyze a creature with qi pressure points.",
	descriptionFull : desc([
		"Apply pressure on a creature (not undead) that you can touch. The target must succeed on a Constitution saving throw or be Paralyzed for the Duration.",
		"If damaged before its turn, it can spend an Action to make another Constitution saving throw."
	]),
	action : [["attack", ""]],
	range : "Touch",
	components : "6",
	duration : ""
};

SpellsList["disintegrate - advanced shatter"] = {
    name: "Disintegrate - Advanced Shatter",
    classes: ["monk"],
    level: 7,
    source: ["QG", 0],
    description: "Disintegrate a target with force damage.",
    descriptionFull: desc([
        "The target of this ability can be a creature, an object, or a creation of magical force, such as the wall created by Wall of Force.",
        "You must declare you are using this ability and cannot use any other qi abilities or use improvisational weapons or armor for the time it takes to finish this special attack sequence.",
        "You must spend 1 qi each time you hit your target and hit them six times total (you must hit them at least one time per round or start over with new qi expenditures).",
        "After successfully connecting six times and having spent a minimum of 6 qi, the target takes 10d6+40 force damage. If this damage reduces the target's current hit points to 0, it is disintegrated.",
        "A disintegrated creature or object and everything it is carrying, wearing, or was stored on it or in it, except magic items, are reduced to a red vapor.",
        "Additional Qi: The damage increases by 3d6 for each 2 additional qi spent at the completion of this ability's requirements."
    ]),
    action: [["attack", ""]],
    range: "Touch",
    components: "7",
    duration: "",
};

SpellsList["harm"] = {
    name: "Harm",
    classes: ["monk"],
    level: 7,
    source: ["QG", 0],
    description: "Unleash a virulent disease causing necrotic damage.",
    descriptionFull: desc([
        "By directly attacking the body's built-in toxic stores, you unleash a virulent disease within a creature that you have successfully hit.",
        "The target must make a Constitution saving throw. On a failed save, it takes 14d6 necrotic damage, or half as much damage on a successful save, plus the damage type and amount from the attack.",
        "The damage can't reduce the target's hit points below 1. If the target fails the saving throw, its hit point maximum is reduced for 1 hour by an amount equal to the necrotic damage it took."
    ]),
    action: [["attack", ""]],
    range: "Touch",
    components: "7",
    duration: "",
};

SpellsList["heal"] = {
    name: "Heal",
    classes: ["monk"],
    level: 7,
    source: ["QG", 0],
    description: "Cure diseases and restore hit points.",
    descriptionFull: desc([
        "The target is cured of blindness, deafness, and any diseases. Then is healed 10 points for each qi spent (70 minimum).",
        "If the target has taken damage that reduced its maximum hit points, that damage is healed first at a rate of 2/1.",
        "Additional Qi (option 1): Every additional qi spent heals up to 10 more as described above."
    ]),
    action: [["action", ""]],
    range: "Touch",
    components: "7",
};

SpellsList["finger of death"] = {
    name: "Finger of Death",
    classes: ["monk"],
    level: 8,
    source: ["QG", 0],
    description: "Deal necrotic damage and raise a zombie.",
    descriptionFull: desc([
        "This ability is restricted by alignment. Those of Good alignment must be convinced that the risk of death is warranted.",
        "With this focused, one-inch punch equivalent, a successful hit sends negative energy coursing through the creature, causing searing pain.",
        "The target must make a Constitution saving throw. It takes 7d8+30 necrotic damage on a failed save, or half as much on a success.",
        "A humanoid killed by this spell rises as a Zombie under your command. Zombies decay rapidly, losing health daily until they are barely animated.",
        "Additional Qi: Spend an additional qi to attempt a follow-up attack if you miss."
    ]),
    action: [["attack", ""]],
    range: "Touch",
    components: "8",
    duration: "",
};

SpellsList["regenerate"] = {
    name: "Regenerate",
    classes: ["monk"],
    level: 8,
    source: ["QG", 0],
    description: "Stimulate healing and restore hit points.",
    descriptionFull: desc([
        "Administer to a creature to stimulate its natural healing ability. The target regains 4d8 + 15 hit points.",
        "For the ritual duration (minimum 10 minutes), the target regains 1 hit point at the start of each turn.",
        "Does not work on constructs, undead, or those recently dead with all death saves missed.",
        "Note: The ritual requires concentration and cannot be restarted if interrupted.",
        "Additional Qi: Spend 2 additional qi to regenerate a withered limb or organ."
    ]),
    action: [["ritual", ""], ["concentration", ""]],
    range: "Touch",
    components: "8",
};

SpellsList["dominate monster"] = {
    name: "Dominate Monster",
    classes: ["monk"],
    level: 9,
    source: ["QG", 0],
    description: "Dominate a monster's actions.",
    descriptionFull: desc([
        "This ability is questionable in use. Those of Neutral alignment must be convinced it's necessary.",
        "Use qi-infused attacks to dominate your target into submission, establishing a sympathetic bond.",
        "The saving throw is Wisdom, offset by the monk's Animal Handling bonus. Hitting with normal and bonus attacks imposes disadvantage on saves.",
        "Succeed three times in the same combat scene; renewed initiative resets the process.",
        "While Charmed (duration = 1 hour), you have a telepathic link with it for commands.",
        "Additional Qi: Spend 3 more qi to increase duration up to 8 hours."
    ]),
    action: [["attack", ""], ["concentration", ""]],
    range: "",
    components: "9",
};

SpellsList["feeblemind"] = {
    name: "Feeblemind",
    classes: ["monk"],
    level: 9,
    source: ["QG", 0],
    description: "Shatter a creature's intellect and personality.",
    descriptionFull: desc([
        "You strike the head of a creature, attempting to shatter its intellect and personality.",
        "The target takes 4d6 psychic damage + normal attack damage and must make a Constitution saving throw.",
        "On a failed save, the creature's Intelligence and Wisdom scores become 1.",
        "The creature can't cast spells, activate magic items, understand language, or communicate intelligibly.",
        "At the end of the first Long Rest, the creature can repeat its saving throw. If it fails, it can't roll again for 10 days.",
        "Additional Qi: Spend 3 additional qi to create this effect at range with a thrown improvisational weapon."
    ]),
    action: [["attack", ""]],
    range: "Touch/Range",
    components: "9",
    duration: "",
};

SpellsList["mind blank"] = {
    name: "Mind Blank",
    classes: ["monk"],
    level: 9,
    source: ["QG", 0],
    description: "Become immune to psychic damage and mind effects.",
    descriptionFull: desc([
        "Action: Spend one qi to maintain concentration and become immune to psychic damage, mind-reading, divination spells, and the charmed condition.",
        "Ritual: Spend at least 10 minutes preparing and 9 qi for this effect to last a Long Rest without concentration.",
        "Note: Cannot enter Mind Blanked sleep again for 8 hours but may perform normal concentration action with no penalty."
    ]),
    action: [["action", ""], ["ritual", ""]],
    range: "Self",
    components: "1/9",
};

SpellsList["power attack stun"] = {
    name: "Power Attack Stun",
    classes: ["monk"],
    level: 9,
    source: ["QG", 0],
    description: "Overwhelm a target's mind and body.",
    descriptionFull: desc([
        "Generate an attack that can overwhelm the mind and body of one creature you can hit, leaving it dumbfounded.",
        "If the target has 150 hit points or fewer, it is stunned if you hit. Otherwise, only attack damage applies.",
        "The stunned target must make a Constitution saving throw at the end of each turn (disadvantage if one of your chosen races).",
        "Additional Qi: Spend an additional 3 qi to empower an improvisational weapon for a ranged attack."
    ]),
    action: [["attack", ""]],
    range: "Touch/Range",
    components: "9",
};

SpellsList["power attack kill"] = {
    name: "Power Attack Kill",
    classes: ["monk"],
    level: 10,
    source: ["QG", 0],
    description: "Devastating attack that can cause instant death.",
    descriptionFull: desc([
        "Generate a devastating attack that can cause one creature you strike to die instantly if it has 100 hit points or fewer.",
        "Attack/Touch allows waiting until Bonus Action if normal attack hits. Calculate remaining HP after damage before determining effect.",
        "Attack/Range requires spending an additional 4 qi to empower an improvisational weapon for a ranged attack."
    ]),
    action: [["attack", ""]],
    range: "Touch/Range",
    components: "10",
};

[
    "detect poison and disease", "resistance", "spare the dying", "cure wounds", "inflict wounds", "sleep", "blindness deafness", "calm emotions", "increase ability", "hold person", "lesser restoration", "protection from poison", "weakness", "shatter", "bestow curse", "dispel magic", "haste", "hypnotic kata", "protection from energy", "remove curse", "revivify", "slow", "dominate person", "hold monster", "disintegrate - advanced shatter", "harm", "heal", "finger of death", "regenerate", "dominate monster", "feeblemind", "mind blank", "power attack stun", "power attack kill"
    ].forEach(function (s) {if(SpellsList[s] && SpellsList[s].classes && SpellsList[s].classes.indexOf("qigongMonk") === -1) SpellsList[s].classes.push("qigongMonk");});

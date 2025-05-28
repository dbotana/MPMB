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
    attacks : [1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
    spellcastingFactor : 2,
    spellcastingFactorRoundupMulti : true,
    spellcastingKnown : {
		cantrips : [2, 2, 2, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
		spells : [3, 4, 5, 5, 6, 6, 7, 7, 9, 9, 10, 10, 11, 11, 12, 12, 14, 14, 15, 15]
	},
    features : {
       "studied enemy": {
            name: "Studied Enemy",
            source: ["Qi", 0],
            minlevel: 1,
            description: desc([
                "\n I have significant experience using my abilities on certain enemies I've studied",
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
                "Use Dexterity instead of Strength for attack/damage  of unarmed strikes and improvisational weapons",
                "Roll a dx in place of normal damage for unarmed strikes or improvisational weapons",
                "Follow-through Attack: After using Attack action with unarmed strike or improvisational weapon, make unarmed strike as a bonus action"
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
                            var monkDie = function(n) { return n < 5 ? 6 : n < 11 ? 8 : n < 17 ? 10 : 12; }(classes.known["qigongMonk"].level);
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
                "At levels 8, 12, 16, and 19, choose a new damage type to add to your attacks. Choices are permanent.",
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
                toNotesPage:            [{
                    name: "Poison Damage",
                    source: ["Qi", 0],
                    note: desc("My attacks can deal Poison damage.")
                }]
                },
            "necrotic" : {
                name: "Necrotic",
                source: ["Qi", 0],
                toNotesPage:            [{
                    name: "Necrotic Damage",
                    source: ["Qi", 0],
                    note: desc("My attacks can deal Necrotic damage.")
                }]
                },
            "acid" : {
                name: "Acid",
                source: ["Qi", 0],
                toNotesPage:            [{
                    name: "Acid Damage",
                    source: ["Qi", 0],
                    note: desc("My attacks can deal Acid damage.")
                }]
                },
            "cold" : {
                name: "Cold",
                source: ["Qi", 0],
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
                "If someone gains advantage against you, you can choose to gain advantage against them on your next roll against them (attack or save) or put them at a disadvantage on their next roll (attack or save)"
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
    regExpSearch: /path of the five fingers/i,
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
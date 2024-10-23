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
    date : "2024/10/22"
};

ClassList["qigong monk"] = {
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
        "\n\nAlternatively, choose 5d4 gp worth of starting equipment instead of both the class' and the background's starting equipment.",
    subclasses : ["Monastic Tradition", ["qigong-way of inner peace"]],
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
                note: [
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
                ]
            }],
            // Add the "Entangle and Pin" section to the notes page for the Qigong Monk
            toNotesPage: [{
                name: "Entangle and Pin",
                source: ["Qi", 0],
                minlevel: 1,
                description: desc([
                    "Use improvisational weapons/armor to entangle or pin opponents instead of dealing damage.",
                    "Entangle: Sacrifice AC/weapon to restrain target's limb/weapon for 1 round if you let go.",
                    "Pin: Maintain control of object to restrain target; requires a surface to pin against.",
                    "Effects vary based on what is entangled/pinned:",
                    "- Arm(s): Can't attack/defend with affected limbs; disadvantage on DEX saves.",
                    "- Weapon: Can't be used; disadvantage if maintaining grip.",
                    "- Leg(s)/Foot: Speed 0; disadvantage on attacks and DEX saves.",
                    "- Body/Hips: Combine arm and leg restrictions; weapon use depends on Storyteller.",
                    "Escape: STR save DC = 8 + monk proficiency + item size bonus (handheld +1, medium +2, large +3)."
                ]),
                eval: function() {
                    AddString('Extra.Notes', 'Entangle and Pin:\n\u25C6 Use improvisational items to entangle/pin.\n\u25C6 Entangle sacrifices AC/weapon for one round.\n\u25C6 Pin requires maintaining control and a surface.\n\u25C6 Effects vary based on what is restrained.\n\u25C6 Escape requires STR save with item size modifiers.', '\n');
                    show3rdPageNotes();
                },
                removeeval: function() {
                    RemoveString('Extra.Notes', 'Entangle and Pin:\n\u25C6 Use improvisational items to entangle/pin.\n\u25C6 Entangle sacrifices AC/weapon for one round.\n\u25C6 Pin requires maintaining control and a surface.\n\u25C6 Effects vary based on what is restrained.\n\u25C6 Escape requires STR save with item size modifiers.');
                }
            }],
            
            "Qi": {
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
                recovery: "short rest",
            },
        },
    },
};

/*	-WHAT IS THIS?-
    This file adds optional material to "MPMB's Character Record Sheet" found at https://flapkan.com/mpmb/charsheets
    Import this file using the "Add Extra Materials" bookmark.
    -KEEP IN MIND-
    It is recommended to enter the code in a fresh sheet before adding any other information (i.e. before making your character with it).
*/

/*	-INFORMATION-
    Subject:	Class
    Effect:		This script adds Laser Llama's "Magus" class and its subclasses available at https://www.gmbinder.com/share/-Mslo6ktmq1Yg5WTSjDQ
    Code by:	Rocky
    Date:		2024-10-25 (sheet v13)
*/
var iFileName = "Magus.js";

RequiredSheetVersion("13.2.0");

SourceList["MGH"] = {
    name: "Magus Homebrew",
    abbreviation: "MGH",
    group: "Homebrew",
    date: "2024/12/02"
};
// Define the Magus spell list
[
    // Cantrips (0 Level)
    "acid splash", "blade ward", "booming blade", "chill touch", "dancing lights", "firebolt", "frostbite", "glitterbeam", "green-flame blade", "light", "lightning lure", "mage hand", "minor illusion", "poison spray", "prestidigitation", "ray of frost", "shocking grasp", "sword burst", "tempestuous blade", "true strike",

    // 1st Level
    "absorb elements", "arcane lance", "armor of agathys", "burning hands", "caustic brew", "chromatic orb", "color spray", "detect magic", "earth tremor", "expeditious retreat", "faerie fire", "fog cloud", "grease", "ice knife", "identify", "jump", "mage armor", "magic missile", "protection from good & evil", "ray of sickness", "shield", "sleep", "thunderwave", "witch bolt",

    // 2nd Level
    "acid arrow", "arcane scorcher", "aura of frost", "blindness/deafness", "blur", "cloud of daggers", "darkness", "darkvision", "earthen grasp", "elemental blade", "enhance ability", "enlarge/reduce", "gust of wind", "hold person", "invisibility", "knock", "levitate", "magic aura", "magic weapon", "mirror image", "misty step", "protection from poison", "ray of enfeeblement", "scorching ray", "shatter", "snowball swarm", "spider climb",

    // 3rd Level
    "counterspell", "dispel magic", "elemental weapon", "erupting earth", "fireball", "flame arrows", "fly", "haste", "lightning bolt", "magic circle", "minute meteors", "protection from energy", "sleet storm", "slow", "sonic wave", "tidal wave", "thunder step", "wall of sand", "wall of water", "wind wall",

    // 4th Level
    "accursed touch", "arcane eye", "banishment", "death ward", "dimension door", "elemental bane", "fire shield", "freedom of movement", "greater invisibility", "ice storm", "polymorph", "resilient sphere", "sickening radiance", "stoneskin", "vitriolic sphere", "wall of fire", "watery sphere",

    // 5th Level
    "animate objects", "cone of cold", "contagion", "dispel evil & good", "far step", "hold monster", "immolation", "passwall", "scrying", "skill empowerment", "steel wind strike", "teleportation circle", "vorpal blade", "wall of force", "wall of light", "wall of stone"
].forEach(function (s) { if (SpellsList[s] && SpellsList[s].classes && SpellsList[s].classes.indexOf("magus") === -1) SpellsList[s].classes.push("magus"); });

ClassList["magus"] = {
    regExpSearch: /magus/i,
    name: "Magus",
    source: ["MGH", 0],
    primaryAbility : "4",
    abilitySave : 4,
    prereqs: "Intelligence 13",
    die: 10,
    saves: ["Con", "Int"],
    improvements: [0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 5, 5],
    armor: [
        [true, true, false, false],
    ],
    weaponProfs: [
        [true, true]
    ],
    spellcastingFactor: 2,
    spellcastingFactorRoundupMulti: true,
    spellcastingKnown: {
        cantrips: [2, 2, 2, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
        spells: [3, 4, 5, 5, 6, 6, 7, 7, 9, 9, 10, 10, 11, 11, 12, 12, 14, 14, 15, 15]
    },
    attacks: [1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
    subclasses: ["Esoteric Order", []],
    features: {
        "arcane armory": {
            name: "Arcane Armory",
            source: ["MGH", 0],
            minlevel: 1,
            description: "\n   You can perform a ritual over one hour to add a melee weapon, shield, or set of armor to your Arcane Armory." +
                "\n   These items count as magical and are stored in extradimensional space. Bonus action to summon or shunt these items." +
                "\n   Use my intelligence instead of dexterity when calculating armor class from this armor. Your Arcane Armory can hold a number of items equal to your Intelligence modifier +1 (minimum of one), with at least one being a weapon.",
            action: [["bonus action", " (Summon/Shunt)"]],
        },

        "fighting style": {
            name: "Fighting Style",
            source: ["MGH", 0],
            minlevel: 1,
            description: "\n   Choose a Fighting Style",
            choices: ["Archery", "Thrown Weapon", "Classical Swordplay", "Defensive Fighting", "Dual Wielding", "Dueling", "Protector", "Shield Warrior", "Versatile Fighting"],
            "archery": FightingStyles.archery,

            "classical swordplay": {
                name: "Classical Swordplay Fighting Style",
                description: "\n   While wielding a finesse weapon and no other weapons," +
                    "\n   you gain a +2 bonus to weapon attack rolls and a +1 to Armor Class," +
                    "\n   so long as you are not using heavy armor or a shield."
            },

            "defensive fighting": FightingStyles.defense,

            "dual wielding": FightingStyles.two_weapon,

            "dueling": FightingStyles.dueling,

            "protector": {
                name: "Protector Fighting Style",
                description: "\n   When a creature you can see attacks you or a target within 5 feet," +
                    "\n   you can use a reaction to add your proficiency bonus to the target's Armor Class against that attack." +
                    "\n   You must be wielding a shield or melee weapon to gain this benefit."
            },

            "shield warrior": {
                name: "Shield Warrior Fighting Style",
                description: "\n   You gain proficiency with shields as martial melee weapons," +
                    "\n   and on hit your shield deals 2d4 bludgeoning damage." +
                    "\n   If you are wielding a shield and nothing else," +
                    "\n   you gain a +1 bonus to attack rolls with your shield and to your Armor Class."
            },

            "thrown weapon": ClassList.fighter.features["fighting style"]["thrown weapon fighting"],

            "versatile fighting": {
                name: "Versatile Fighting Style",
                description: "\n   While wielding a single versatile weapon and no shield," +
                    "\n   you gain a +1 bonus to your attack rolls with that weapon." +
                    "\n   While doing so, you can also use your bonus action to make a single grapple or shove attack," +
                    "\n   or to take the Use an Object action."
            }
        },

        "spellstrike": {
            name: "Spellstrike",
            source: ["MGH", 0],
            minlevel: 2,
            description: desc([
                "Once per turn, when you make an attack, you can cast a Magus spell using a spell slot",
                "Make an attack with a melee Arcane Armory weapon; if the attack hits, the spell takes effect",
                "The spell must have a casting time of 1 action and require a single spell attack roll,",
                "force a saving throw, or affect a number of hit points worth of creatures (like sleep)",
                "If your attack misses, the spell fails and has no effect. On a hit, apply the spell's effects:",
                "- Area of Effect: If targeting an area >10 ft cube, it becomes a 15-ft cone from you",
                "- Cantrips: Weapon deals the damage type of the cantrip; apply additional effects on hit",
                "- Concentration: You must concentrate as soon as it takes effect on hit",
                "- Saving Throws: Target makes initial save at disadvantage; critical hits auto-fail save"
            ])
        },

        "arcane regeneration": {
            name: "Arcane Regeneration",
            source: ["MGH", 0],
            minlevel: 3,
            description: "\n   During a short rest, recover spell slots of combined level equal to your Intelligence modifier.",
            recovery: "long rest",
            usages: 1
        },

        "esoteric order": {
            name: "Esoteric Order",
            source: ["MGH", 0],
            minlevel: 3,
            description: "\n   Choose an Esoteric Order that grants additional features at higher levels.",
        },

        "extra attack": {
            name: "Extra Attack",
            source: ["MGH", 0],
            minlevel: 5,
            description: "\n   Attack twice when taking the Attack action.",
        },

        "spellsight": {
            name: "Spellsight",
            source: ["MGH", 0],
            minlevel: 5,
            description: "\n   Detect magic and identify objects within range for one minute.",
        },

        "ethereal jaunt": {
            name: "Ethereal Jaunt",
            source: ["MGH", 0],
            minlevel: 6,
            description: "\n   Teleport up to a certain distance before or after casting a spell.",
        },

        "spellsunder": {
            name: "Spellsunder",
            source: ["MGH", 0],
            minlevel: 9,
            description: "\n   Use Spellstrike to counter spells targeting you by expending a spell slot.",
        },

        "mystical ward": {
            name: "Mystical Ward",
            source: ["MGH", 0],
            minlevel: 10,
            description: "\n   Become immune to the effects of your own Magus spells unless you choose otherwise.",
        },

        "arcane conservation": {
            name: "Arcane Conservation",
            source: ["MGH", 0],
            minlevel: 11,
            description: "\n   When you use Spellstrike and miss with your weapon attack, you can regain one expended spell slot." +
                "\n   The spell slot you regain must be a lower level than the slot you expended as part of your Spellstrike.",
            usages: 1,
            recovery: "long rest"
        },

        "prismatic strikes": {
            name: "Prismatic Strikes",
            source: ["MGH", 0],
            minlevel: 11,
            description: "\n   Your attacks with Arcane Armory weapons deal a bonus 1d8 damage on hit." +
                "\n   This bonus damage must be the damage type dealt by a Magus spell you know, chosen on hit."
        },

        "superior spellsunder": {
            name: "Superior Spellsunder",
            source: ["MGH", 0],
            minlevel: 14,
            description: "\n   When a creature within 30 feet is targeted by a spell, you can use a reaction to teleport to an unoccupied space within 5 feet of it." +
                "\n   Use your Spellsunder reaction against the triggering spell."
        },

        "improved arcane conservation": {
            name: "Improved Arcane Conservation",
            source: ["MGH", 0],
            minlevel: 18,
            description: "\n   When you use Spellstrike and miss with your weapon attack, you regain the same spell slot you expended."
        },
    },
};

// Add subclasses for the Magus class
AddSubClass("magus", "order of arcane archers", {
    regExpSearch: /arcane archer/i,
    subname: "Order of Arcane Archers",
    source: ["MGH", 0],

    features: {
        "subclassfeature3": {
            name: "Arcane Quiver",
            source: ["MGH", 0],
            minlevel: 3,
            description: "\n   Add ranged weapons and quivers with up to 20 pieces of ammo each to your Arcane Armory." +
                "\n   Use Spellstrike with ranged weapons; AOE spells affect only your target.",
            spellcastingExtra: ["ensnaring strike", "hail of thorns", "acid arrow", "cordon of arrows", "conjure volley", "lightning arrow", "arcane eye", "elemental bane", "scrying", "swift quiver"],

        },

        "subclassfeature7": {
            name: "Enchanted Shot",
            source: ["MGH", 0],
            minlevel: 7,
            description: "\n   When you miss with a ranged Arcane Armory weapon attack, use a reaction to reroll against a different target within 60 feet.",
            action: [["reaction", "(Reroll)"]]
        },

        "subclassfeature15": {
            name: "Ranged Transposition",
            source: ["MGH", 0],
            minlevel: 15,
            description: "\n   Enchant ammo with conjuration magic; fire it and teleport to an unoccupied space within 5 feet of where it lands." +
                "\n   Once per short or long rest; expend a spell slot to use again if needed.",
            usages: 1,
            recovery: "short rest",
            action: [["action", " (Teleport)"]]
        },

        "subclassfeature20": {
            name: "Elite Archer",
            source: ["MGH", 0],
            minlevel: 20,
            description: "\n   As a bonus action, enter a heightened state for 1 minute. Ranged attacks deal force damage." +
                "\n   Use Ethereal Jaunt after each ranged attack. Expend spell slot for extra force damage (2d4 per slot level)." +
                "\n   Once per long rest; expend a 5th-level spell slot to use again if needed.",
            usages: 1,
            recovery: "long rest",
            action: [["bonus action", " (Enter State)"]]
        }
    }
});

AddSubClass("magus", "order of blade dancers", {
    regExpSearch: /blade dancer/i,
    subname: "Order of Blade Dancers",
    source: ["MGH", 0],

    features: {
        "subclassfeature3": {
            name: "Blade Dance",
            source: ["MGH", 0],
            minlevel: 3,
            description: desc([
                "You gain proficiency in Performance and can use Strength or Dexterity for Performance checks",
                "As a bonus action, enter a trance called the Blade Dance for 1 minute, gaining benefits:",
                "- Increase walking speed by 10 feet",
                "- Gain a +1 bonus to Armor Class",
                "- Roll damage dice twice for an attack or spell and use the higher result (once per turn)",
                "- Add your Intelligence modifier to Strength (Athletics) and Dexterity (Acrobatics) checks",
                "The dance ends if incapacitated, wearing heavy armor, wielding a heavy weapon, or using a bonus action to end it",
                "Expend a spell slot to use again."
            ]),
            skills: ["Performance"],
            action: [["bonus action", " (Enter Blade Dance)"]],
            usages: 1,
            recovery: "short rest",
            spellcastingExtra: ["compelled duel", "zephyr strike", "blur", "misty step", "elemental weapon", "haste", "fire shield", "freedom of movement", "steel wind strike", "vorpal blade"],
        },

        "subclassfeature7": {
            name: "Fluid Steps",
            source: ["MGH", 0],
            minlevel: 7,
            description: desc([
                "Gain proficiency in Dexterity saving throws and add proficiency bonus to initiative rolls",
                "Your Blade Dance Armor Class bonus becomes +2"
            ]),
            saves: ["Dex"],
            addMod: [{ type: "skill", field: "Init", mod: "prof", text: "I can add my Proficiency Bonus to initiative rolls." }]
        },

        "subclassfeature15": {
            name: "Deadly Dance",
            source: ["MGH", 0],
            minlevel: 15,
            description: desc([
                "While in Blade Dance, gain additional benefits:",
                "- Take no damage on successful Dexterity saves against effects that deal half damage",
                "- Add Intelligence modifier to attack rolls made as part of Spellsunder",
                "- Your Blade Dance AC bonus becomes +3"
            ])
        },

        "subclassfeature20": {
            name: "Master of Blades",
            source: ["MGH", 0],
            minlevel: 20,
            description: desc([
                "Always considered under effects of Blade Dance unless wearing heavy armor or wielding a heavy weapon",
                "When taking the Attack action during Blade Dance, make one additional attack"
            ])
        }
    }
});
AddSubClass("magus", "order of dragon knights", {
    regExpSearch: /dragon knight/i,
    subname: "Order of Dragon Knights",
    source: ["Custom", 0],
    features: {
        "subclassfeature3": {
            name: "Draconic Companion",
            source: ["Custom", 0],
            minlevel: 3,
            description: desc([
                "As an action, summon your Draconic Companion to an unoccupied space within 30 feet",
                "The companion uses your proficiency bonus (PB) and Magus Spell save DC",
                "It acts on your turn, taking only the Dodge action unless commanded otherwise",
                "Use a bonus action to command it to take an action from its stat block or another action",
                "If you take the Attack action, you can forgo one attack to command it to attack",
                "If incapacitated, it acts independently to defend itself and you",
                "When reduced to 0 HP, it makes death saving throws like a player character"
            ]),
            usages: 1,
            recovery: "long rest",
            altResource: "SS 1+",
            action: [["action", " (summon)"], ["bonus action", " (command)"]],
            creaturesAdd: [["Draconic Companion", true]],
            creatureOptions: [{
                name: "Draconic Companion",
                source: ["Custom", 0],
                size: 3, // Small
                type: "Dragon",
                alignment: "Lawful",
                ac: "14 + Prof",
                hp: "5 + five times your Magus level",
                hd: [1, 8], // Hit Die
                speed: "30 ft, fly 30 ft",
                scores: [16, 12, 15, 8, 10, 14],
                damage_immunities: ["Essence type"],
                senses: "Darkvision 60 ft, passive Perception 10",
                languages: "Draconic; understands any languages spoken by its bonded Magus",
                proficiencyBonusLinked: true,
                attacksAction: 1,
                attacks: [{
                    name: "Claw",
                    ability: 1,
                    damage: [1, 4, "slashing"],
                    modifiers: ["Prof"],
                    range: "Melee (5 ft)",
                    description: "+1d4 Essence damage"
                }],
                features: [{
                    name: "Soul Bound",
                    description: desc([
                        "The companion adds your proficiency bonus to any ability check or saving throw it makes"
                    ])
                }]
            }]
        },

        "subclassfeature3.1": {
            name: "Wyrmsoul",
            source: ["Custom", 0],
            minlevel: 3,
            description: desc([
                "Learn Draconic language; spells can deal your Companion's Essence type damage"
            ]),
            languageProfs: ["Draconic"],
            spellcastingExtra: ["absorb elements", "command", "dragons breath", "warding bond", "elemental weapon", "fear", "dominate beast", "elemental bane", "awaken", "dominate person"]
        },

        "subclassfeature7": {
            name: "Greater Companion",
            source: ["Custom", 0],
            minlevel: 7,
            description: desc([
                "Companion becomes Medium and can bear you as a rider if you are Medium or smaller",
                "Its flying speed is halved while riding it; claw attacks are magical and use d6s"
            ]),
        },

        "subclassfeature15": {
            name: "Elemental Breath",
            source: ["Custom", 0],
            minlevel: 15,
            description: desc([
                "\n Companion can exhale a cone of elemental breath (30 ft.) as an action",
                "\n Dex save vs. your Magus Spell save DC; take ${10}d6 Essence damage on failure",
                "\n Uses equal to your Intelligence modifier per long rest; expend spell slot to use again"
            ]),
        },

        "subclassfeature20": {
            name: "Mythic Companion",
            source: ["Custom", 0],
            minlevel: 20,
            description: desc([
                "Companion can change size (Small, Medium, Large); if Large, its flying speed isn't halved while bearing you",
                "Once per turn when commanded to attack, it can make two attacks instead of one"
            ]),
        }
    }
});
AddSubClass("magus", "order of spellbreakers", {
    regExpSearch: /spellbreaker/i,
    subname: "Order of Spellbreakers",
    source: ["Custom", 0],

    features: {
        "subclassfeature3": {
            name: "Baleful Mark",
            source: ["Custom", 0],
            minlevel: 3,
            description: desc([
                "As a bonus action, place a Baleful Mark on a creature within 60 feet",
                "The mark lasts until you use this feature again or a marked creature is reduced to 0 HP",
                "While marked, you know the exact location of the creature",
                "The marked creature has disadvantage on concentration checks you force"
            ]),
            action: [["bonus action", " (Mark Creature)"]],
            usages: "Intelligence modifier per ",
            usagescalc: "event.value = Math.max(1, What('Int Mod'));",
            recovery: "long rest"
        },

        "subclassfeature3.1": {
            name: "Spellbreaker Spells",
            source: ["Custom", 0],
            minlevel: 3,
            description: "\n   You learn specific spells at certain levels that do not count against your Spells Known.",
            spellcastingExtra: ["bane", "detect evil and good", "blindness/deafness", "silence", "counterspell", "magic circle", "banishment", "resilient sphere", "dispel evil and good", "planar binding"],
        },

        "subclassfeature7": {
            name: "Crippling Mark",
            source: ["Custom", 0],
            minlevel: 7,
            description: desc([
                "Use your reaction to end your Baleful Mark when the marked creature makes a saving throw",
                "The creature has disadvantage on that saving throw"
            ]),
            action: [["reaction", " (End Mark)"]]
        },

        "subclassfeature15": {
            name: "Reflective Spellsunder",
            source: ["Custom", 0],
            minlevel: 15,
            description: desc([
                "When you use Spellsunder, you can choose to reflect the spell back at the caster",
                "The spell uses the caster's spell attack roll and save DC"
            ])
        },

        "subclassfeature20": {
            name: "Master Spellbreaker",
            source: ["Custom", 0],
            minlevel: 20,
            description: desc([
                "You can mark a creature you can see with Baleful Mark without using an action",
                "You have advantage on weapon attack rolls against marked creatures",
                "When you hit a marked creature with a Spellstrike, deal max damage"
            ])
        }
    }
});
AddSubClass("magus", "order of warders", {
    regExpSearch: /warder/i,
    subname: "Order of Warders",
    source: ["Custom", 0],

    features: {
        "subclassfeature3": {
            name: "Warder Spells",
            source: ["Custom", 0],
            minlevel: 3,
            description: "\n   You learn specific spells at certain levels that do not count against your Spells Known.",
            spellcastingExtra: ["compelled duel", "sanctuary"],
            spellcastingExtraAdditional: [
                [5, "aid", "warding bond"],
                [9, "beacon of hope", "life transference"],
                [13, "faithful hound", "death ward"],
                [17, "antilife shell", "circle of power"]
            ]
        },

        "subclassfeature3.1": {
            name: "Warder’s Bond",
            source: ["Custom", 0],
            minlevel: 3,
            description: desc([
                "Gain proficiency in heavy armor",
                "At the end of a long rest, touch a willing creature to create a mystical bond",
                "When your Ward is targeted by an attack or forced to make a saving throw and you are within 10 feet, you can swap places with them as a reaction",
                "At higher levels, this range increases (30 ft at level 7, 60 ft at level 15)"
            ]),
            armorProfs: [false, false, true, false],
            action: [["reaction", " (Swap Places)"]]
        },

        "subclassfeature7": {
            name: "Arcane Aegis",
            source: ["Custom", 0],
            minlevel: 7,
            description: desc([
                "Expend a spell slot to reduce damage taken by your Ward by 2d8 per spell slot level",
                "Start your turn within 10 feet of your Ward to grant them temporary hit points equal to your Intelligence modifier"
            ])
        },

        "subclassfeature15": {
            name: "Bond Perfected",
            source: ["Custom", 0],
            minlevel: 15,
            description: desc([
                "You and your Ward are immune to charmed and frightened conditions when within 10 feet of each other",
                "Use Warder's Bond reaction to gain resistance to damage from triggering effect"
            ])
        },

        "subclassfeature20": {
            name: "High Warder",
            source: ["Custom", 0],
            minlevel: 20,
            description: desc([
                "Bond with up to two willing creatures as Wards at the end of each long rest",
                "Use Spellbreaker as part of the reaction when your Ward is targeted by a spell",
                "Gain advantage on Spellbreaker attack roll"
            ])
        }
    }
});


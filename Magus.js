/*	-WHAT IS THIS?-
    This file adds optional material to "MPMB's Character Record Sheet" found at https://flapkan.com/mpmb/charsheets
    Import this file using the "Add Extra Materials" bookmark.
    -KEEP IN MIND-
    It is recommended to enter the code in a fresh sheet be`fore adding any other information (i.e. before making your character with it).
*/

/*	-INFORMATION-
    Subject:	Class
    Effect:		This script adds Laser Llama's "Magus" class and its subclasses available at https://www.gmbinder.com/share/-Mslo6ktmq1Yg5WTSjDQ
    Code by:	Rocky
    Date:		2024-10-25 (sheet v13)
*/
var iFileName = "Magus.js";

RequiredSheetVersion("13.2.0");

SourceList["LLM"] = {
    name: "Llaserllama Magus",
    abbreviation: "LLM",
    group: "Llaserllama",
    url: "https://www.gmbinder.com/share/-Mslo6ktmq1Yg5WTSjDQ",
    date: "2024/11/14"
};
// Define the Magus spell list
[
    // Cantrips
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
    name: "Magus LLM",
    regExpSearch: /^(?=.*magus)(?=.*llm).*$/i,
    source: ["LLM", 3],
    primaryAbility : "Intelligence",
    abilitySave : 4,
    prereqs: "Intelligence 13, Strength or Dexterity 13", // Multi-class prerequisites: Int13, Str or Dex 13
    die: 10,
    saves: ["Con", "Int"],
    improvements: [0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 5, 5],
    armor: [
        [true, true, false, true],  // Light armor, medium armor, shields
    ],
    weaponProfs: [
        [true, true], // Simple weapons, martial weapons
    ],
    skillstxt: { primary: "Choose two from Acrobatics, Arcana, Athletics, History, Investigation, Nature, or Performance." },
    spellcastingFactor: 2,
    spellcastingFactorRoundMulti: true,
    spellcastingKnown: {
        cantrips: [0, 2, 2, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
        spells: [0, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11]
    },
    attacks: [1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
    equipment: "Magus starting equipment: " +
        "\n \u2022 (a) martial weapon and shield or (b) two martial weapons;" +
        "\n \u2022 (a) scale mail or (b) leather armor;" +
        "\n \u2022 (a) a light crossbow and 20 bolts or (b) five javelins;" +
        "\n \u2022 (a) a dungeoneers pack or (b) an explorer's pack;" +
        "\n \u2022 Leather armor and a dagger",
    subclasses: ["Esoteric Order", []],
    features: {
        "arcane armory": {
            name: "Arcane Armory",
            source: ["LLM", 3],
            minlevel: 1,
            description: "\n   \u2010You can perform a ritual over one hour to add a melee weapon, shield, or set of armor to\n   your Arcane Armory. " +
                "These items count as magical and are stored in extradimensional space. \n   \u2010Bonus action to summon or shunt these items." +
                "\n   \u2010Uses Intelligence instead of Dexterity when calculating Armor Class from this armor. Your\n   Arcane Armory can hold a number of items equal to your Intelligence modifier +1 (min. +1),\n   with at least one being a weapon.",
            action: [["bonus action", " (Summon/Shunt)"]],
            additional: (What('Int Mod') + 1) + " Arcane Armory Items",
        },

        "fighting style": {
            name: "Fighting Style",
            source: ["LLM", 4],
            minlevel: 1,
            description: "\n   " + 'Select a Fighting Style using the "Choose Feature" button above',
            choices: ["Arcane Warrior", "Archery", "Thrown Weapon", "Classical Swordplay", "Defensive Fighting", "Dual Wielding", "Dueling", "Protector", "Shield Warrior", "Versatile Fighting"],
            "arcane warrior": {
                name: "Arcane Warrior",
                description : desc([
		            "I learn two Wizard cantrips that count as Magus spells for me and use Int for spellcasting.",
		            "They do not count against the total number of cantrips I know."
	            ]),
	            spellcastingBonus : [{
		            name : "Arcane Warrior",
		            "class" : "wizard",
		            level : [0, 0],
                    firstCol : "atwill",
		            times : 2,
                    spellcastingExtraApplyNonconform : true,
	            }]           
            },
            "archery": FightingStyles.archery,

            "classical swordplay": { 
                name: "Classical Swordplay Fighting Style",
                description: "\n   +2 to attack rolls and +1 to Armor Class when wielding a finesse weapon in one hand and no" +
                    "\n   other weapons, and not using heavy armor or a shield.",
                calcChanges: {
                    atkCalc: [
                    function (fields, v, output) {
                            if (v.isMeleeWeapon && (/\bfinesse\b/i).test(fields.Description)) output.extraHit += 2;
                    },
                    "When I'm wielding a finesse weapon in one hand and no weapon in my other hand, +2 to hit with that weapon.",
                    ],
                    stopeval : function (v) { return v.heavyArmor || v.usingShield; }
                },
                extraAC: [{ 
                    mod: 1, 
                    text: "While wielding a finesse weapon, no other weapons, heavy armor or shield.",
                    stopeval : function (v) { return v.heavyArmor || v.usingShield; }
                }],
            },

            "defensive fighting": FightingStyles.defense,

            "dual wielding": FightingStyles.two_weapon,

            "dueling": FightingStyles.dueling,

            "protector": {
                name: "Protector Fighting Style",
                description: "\n   When a creature you can see attacks you or a target within 5 feet, you can use a Reaction to" +
                    "\n   add your proficiency bonus to the target's Armor Class against that attack. You must be" +
                    "\n   wielding a shield or melee weapon to gain this benefit.",
                action: [["reaction", "Protect (Protector)"]],
            },

            "shieldwarrior" : { // From CalypsoMoonlace (Selena)
		name : "Shield Warrior Fighting Style",
		description : desc(["I gain proficiency with shields as martial melee weapon, which deal 2d4 bludg. damage on hit",
						"When I'm wielding a shield and nothing else, +1 to AC and attack rolls with that shield"]),
		extraAC : {
			name : "Shield Warrior Fighting Style",
			mod : 1,
			text : "I gain a +1 bonus to AC while wielding a shield and nothing else.",
			stopeval : function (v) { return !v.usingShield; }
		},
		weaponOptions : {
			regExpSearch : /(shield|bash)/i,
			name : "Shield Melee Attack",
			ability : 1,
			type : "shield melee attack",
			damage : [2, 4, "bludgeoning"],
			range : "Melee",
			list: "melee",
			abilitytodamage : true
		},
		weaponsAdd : ["Shield Melee Attack"],
		weaponProfs : [false, false, ["shield melee attack"]],
		calcChanges : {
			atkCalc : [
				function (fields, v, output) {
					for (var i = 1; i <= FieldNumbers.actions; i++) {
						if ((/off.hand.attack/i).test(What('Bonus Action ' + i))) return;
					}

					if ((/shield melee attack/i).test(v.baseWeaponName)) {
						output.extraHit += 1;
					}
				},
				"When wielding a shield and nothing else, my shield attacks get a +1 bonus on the To Hit. This condition will always be false if the bonus action 'Off-hand Attack' exists."
			]
		}
	    },

            "thrown weapon": ClassList.fighter.features["fighting style"]["thrown weapon fighting"],


            "versatile fighting": {
                name: "Versatile Fighting Style",
                description: "\n   While wielding a single versatile weapon and no shield, you gain +1 bonus to attack rolls" +
                    "\n   with that weapon. You can also use your Bonus action to make a grapple or shove attack, or\n   to use an object.",
                action: [["bonus action", " (Grapple/Shove/Use Object)"]],
                calcChanges: {
                    atkCalc: [
                    function (fields, v, output) {
                            if (v.isMeleeWeapon && (/versatile/i).test(fields.Description)) output.extraHit += 1;
                    },
                    "When wielding a single versatile weapon and no shield, +1 to hit with that weapon."
                    ],
                    stopeval : function (v) { return v.usingShield; }
                },  
            }
        },

        "spellstrike": {
            name: "Spellstrike",
            source: ["LLM", 5],
            minlevel: 2,
            description: desc([
                "Once per turn, when you make an attack, you can cast a Magus spell using a spell slot",
                "Make an attack with a melee Arcane Armory weapon; if the attack hits, the spell takes effect",
                "The spell must have a casting time of 1a and require a single spell attack roll,",
                "force a saving throw, or affect a number of hit points worth of creatures (like sleep)",
                "If your attack misses, the spell fails and has no effect. On a hit, apply the spell's effects:",
                "- Area of Effect: If targeting an area >10 ft cube, it becomes a 15-ft cone from you",
                "- Cantrips: Weapon deals the damage type of the cantrip; apply additional effects on hit",
                "- Concentration: You must concentrate as soon as it takes effect on hit",
                "- Saving Throws: Target makes initial save at disadvantage; critical hits auto-fail save",
                "- Spell Attacks: If spell requires spell attack roll, takes effect when weapon hits",
            ])
        },

        "arcane regeneration": {
            name: "Arcane Regeneration",
            source: ["LLM", 5],
            minlevel: 3,
            description: "\n   During a short rest, recover spell slots of combined level equal to your Intelligence modifier.",
            recovery: "long rest",
            usages: 1,
            additional: ["Recover " + What("Int Mod") + " spell slots"],
        },

        "esoteric order": {
            name: "Esoteric Order",
            source: ["LLM", 5],
            minlevel: 3,
            description: "\n   Choose an Esoteric Order that grants additional features at higher levels.",
        },

        "extra attack": {
            name: "Extra Attack",
            source: ["LLM", 5],
            minlevel: 5,
            description: "\n   Attack twice when taking the Attack action.",
        },

        "spellsight": {
            name: "Spellsight",
            source: ["LLM", 5],
            minlevel: 5,
            description: "\n   Detect magic (30ft) and identify objects (touch) within range for one minute.",
            recovery: "long rest",
            usages: "Int Mod per ",
            usagescalc: "event.value = Math.max(1, What('Int Mod'));"
        },

        "ethereal jaunt": { 
            name: "Ethereal Jaunt",
            source: ["LLM", 6],
            minlevel: 6,
            description: "\n   On your turn, before or after casting a spell or Spellstrike, teleport to unoccupied space you\n   can see within 10-ft, plus 10-ft per each spell slot level expended (max 60-ft).",
        },

        "spellsunder": {
            name: "Spellsunder",
            source: ["LLM", 6],
            minlevel: 9,
            description: "\n   Use Spellstrike to counter spells targeting you by expending a spell slot and using weapon\n   from Arcane Armory to attack the spell. If cast spell level is equal or lower than spell slot\n   expended, spell fails and no effect. If cast at level higher than your expended spell slot, make\n   attack roll with your weapon. If attack roll > 12 + twice level of spell, fail and no effect.",
        },

        "mystical ward": {
            name: "Mystical Ward",
            source: ["LLM", 6],
            minlevel: 10,
            description: "\n   Become immune to the effects of your own Magus spells unless you choose otherwise.",
            savetxt: { immune: ["My spell effects(choice);"] },
        },

        "arcane conservation": { 
            name: "Arcane Conservation",
            source: ["LLM", 6],
            minlevel: 11,
            description: levels.map(function (n) {
                var descr = desc(["When you use Spellstrike and miss with weapon attack, regain one expended spell slot; " +
                "\n   cannot use Ethereal Jaunt. Regained slot must be lower level than slot used for Spellstrike."]);
                if (n >= 18) {
                    descr += desc(["At 18th level, regain the same spell slot you expended."]);
                }
                return descr;
            })
        },

        "prismatic strikes": {
            name: "Prismatic Strikes",
            source: ["LLM", 6],
            minlevel: 11,
            description: "\n   Your attacks with Arcane Armory weapons deal a bonus 1d8 damage on hit." +
                "\n   This bonus damage must be a type dealt by a Magus spell you know, chosen on hit.",
            calcChanges : {
                atkCalc : [
                    function (fields, v, output) {
                        if (classes.known.magus && classes.known.magus.level && /\barcane armory\b/i.test(v.WeaponTextName)) {
                            fields.Description += "1d8 spell damage (choose on hit); ";
                        }
                    },
                    "If I include the phrase 'Arcane Armory' in a melee weapon's name that uses Strength or Dexterity, the calculation will add my Rage's bonus damage to it. Be aware that if the weapon is used to make a ranged attack, the rage bonus damage shouldn't be added (eg when using a thrown weapon)."
                ]
            },
        },

        "superior spellsunder": {
            name: "Superior Spellsunder",
            source: ["LLM", 6],
            minlevel: 14,
            description: "\n   When a creature within 30-ft is targeted by a spell, you can use reaction to teleport to an\n   unoccupied space within 5-ft. " +
                "Use your Spellsunder reaction against the spell.",
            action: [["reaction", " (Teleport)"]]
        },
    },
};

// Add subclasses for the Magus class
AddSubClass("magus", "order of arcane archers", {
    regExpSearch: /arcane archer/i,
    subname: "Order of Arcane Archers",
    source: ["LLM", 0],

    features: {
        "subclassfeature3": {
            name: "Arcane Quiver",
            source: ["LLM", 0],
            minlevel: 3,
            description: "\n   Add ranged weapons and quivers with up to 20 pieces of ammo each to your Arcane Armory." +
                "\n   Use Spellstrike with ranged weapons; AOE spells affect only your target.",
            spellcastingExtra: ["ensnaring strike", "hail of thorns", "acid arrow", "cordon of arrows", "conjure volley", "lightning arrow", "arcane eye", "elemental bane", "scrying", "swift quiver"],
        },

        "subclassfeature7": {
            name: "Enchanted Shot",
            source: ["LLM", 0],
            minlevel: 7,
            description: "\n   When you miss with a ranged Arcane Armory weapon attack, use a reaction to reroll against a different target within 60 feet.",
            action: [["reaction", "(Reroll)"]]
        },

        "subclassfeature15": {
            name: "Ranged Transposition",
            source: ["LLM", 0],
            minlevel: 15,
            description: "\n   Enchant ammo with conjuration magic; fire it and teleport to an unoccupied space within 5 feet of where it lands." +
                "\n   Once per short or long rest; expend a spell slot to use again if needed.",
            usages: 1,
            recovery: "short rest",
            action: [["action", " (Teleport)"]]
        },

        "subclassfeature20": {
            name: "Elite Archer",
            source: ["LLM", 0],
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
/*
AddSubClass("magus", "order of blade dancers", {
    regExpSearch: /blade dancer/i,
    subname: "Order of Blade Dancers",
    source: ["LLM", 0],

    features: {
        "subclassfeature3": {
            name: "Blade Dance",
            source: ["LLM", 0],
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
            source: ["LLM", 0],
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
            source: ["LLM", 0],
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
            source: ["LLM", 0],
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
    source: ["LLM", 0],
    features: {
        "subclassfeature3": {
            name: "Draconic Companion",
            source: ["LLM", 0],
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
                source: ["LLM", 0],
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
            source: ["LLM", 0],
            minlevel: 3,
            description: desc([
                "Learn Draconic language; spells can deal your Companion's Essence type damage"
            ]),
            languageProfs: ["Draconic"],
            spellcastingExtra: ["absorb elements", "command", "dragons breath", "warding bond", "elemental weapon", "fear", "dominate beast", "elemental bane", "awaken", "dominate person"]
        },

        "subclassfeature7": {
            name: "Greater Companion",
            source: ["LLM", 0],
            minlevel: 7,
            description: desc([
                "Companion becomes Medium and can bear you as a rider if you are Medium or smaller",
                "Its flying speed is halved while riding it; claw attacks are magical and use d6s"
            ]),
        },

        "subclassfeature15": {
            name: "Elemental Breath",
            source: ["LLM", 0],
            minlevel: 15,
            description: desc([
                "\n Companion can exhale a cone of elemental breath (30 ft.) as an action",
                "\n Dex save vs. your Magus Spell save DC; take ${10}d6 Essence damage on failure",
                "\n Uses equal to your Intelligence modifier per long rest; expend spell slot to use again"
            ]),
        },

        "subclassfeature20": {
            name: "Mythic Companion",
            source: ["LLM", 0],
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
    source: ["LLM", 0],
    features: {
        "subclassfeature3": {
            name: "Baleful Mark",
            source: ["LLM", 0],
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
            source: ["LLM", 0],
            minlevel: 3,
            description: "\n   You learn specific spells at certain levels that do not count against your Spells Known.",
            spellcastingExtra: ["bane", "detect evil and good", "blindness/deafness", "silence", "counterspell", "magic circle", "banishment", "resilient sphere", "dispel evil and good", "planar binding"],
        },

        "subclassfeature7": {
            name: "Crippling Mark",
            source: ["LLM", 0],
            minlevel: 7,
            description: desc([
                "Use your reaction to end your Baleful Mark when the marked creature makes a saving throw",
                "The creature has disadvantage on that saving throw"
            ]),
            action: [["reaction", " (End Mark)"]]
        },

        "subclassfeature15": {
            name: "Reflective Spellsunder",
            source: ["LLM", 0],
            minlevel: 15,
            description: desc([
                "When you use Spellsunder, you can choose to reflect the spell back at the caster",
                "The spell uses the caster's spell attack roll and save DC"
            ])
        },

        "subclassfeature20": {
            name: "Master Spellbreaker",
            source: ["LLM", 0],
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
    source: ["LLM", 0],

    features: {
        "subclassfeature3": {
            name: "Warder Spells",
            source: ["LLM", 0],
            minlevel: 3,
            description: "\n   You learn specific spells at certain levels that do not count against your Spells Known.",
            spellcastingExtra: ["compelled duel", "sanctuary", "aid", "warding bond", "beacon of hope", "life transference", "faithful hound", "death ward", "antilife shell", "circle of power"]
        },

        "subclassfeature3.1": {
            name: "Warder’s Bond",
            source: ["LLM", 0],
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
            source: ["LLM", 0],
            minlevel: 7,
            description: desc([
                "Expend a spell slot to reduce damage taken by your Ward by 2d8 per spell slot level",
                "Start your turn within 10 feet of your Ward to grant them temporary hit points equal to your Intelligence modifier"
            ])
        },

        "subclassfeature15": {
            name: "Bond Perfected",
            source: ["LLM", 0],
            minlevel: 15,
            description: desc([
                "You and your Ward are immune to charmed and frightened conditions when within 10 feet of each other",
                "Use Warder's Bond reaction to gain resistance to damage from triggering effect"
            ])
        },

        "subclassfeature20": {
            name: "High Warder",
            source: ["LLM", 0],
            minlevel: 20,
            description: desc([
                "Bond with up to two willing creatures as Wards at the end of each long rest",
                "Use Spellbreaker as part of the reaction when your Ward is targeted by a spell",
                "Gain advantage on Spellbreaker attack roll"
            ])
        }
    }
});
*/

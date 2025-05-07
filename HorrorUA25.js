/*	-WHAT IS THIS?-
    This file adds optional material to "MPMB's Character Record Sheet" found at https://flapkan.com/mpmb/charsheets
    Import this file using the "Add Extra Materials" bookmark.
    -KEEP IN MIND-
    It is recommended to enter the code in a fresh sheet before adding any other information (i.e. before making your character with it).
*/

/*	-INFORMATION-
    Subject:	2025 UA Horror Subclasses http://media.dndbeyond.com/compendium-images/ua/horror-subclasses/gPZTjw31gGeVdQKl/UA2025-HorrorSubclasses.pdf 
    Effect:		This script adds the 2025 UA Horror Subclasses. It should be added after PokeSimmer's 2024 scripts https://github.com/thepokesimmer/2024-PHB.
    Code by:	Rocky, special thanks to PokeSimmer for 2024 scripts.
    Date:		2025-5-7 (sheet v13)
*/

var iFileName = "HorrorSubclasses.js";

RequiredSheetVersion("13.2.0");

SourceList["UAH"] = {
    name: "UA 25 Horror",
    abbreviation: "UAH",
    group: "Rocky's Homebrew",
    url: "http://media.dndbeyond.com/compendium-images/ua/horror-subclasses/gPZTjw31gGeVdQKl/UA2025-HorrorSubclasses.pdf",
    date: "2025/05/07"
};

AddSubClass("artificer", "reanimator", {
    regExpSearch: /^(?=.*reanimator)(?=.*artificer).*$/i,
    subname: "Reanimator",
    source: [["UAH", 1]],
    features: {
        "subclassfeature3": {
            name: "Jolt to Life",
            source: [["UAH", 1]],
            minlevel: 3,
            description: desc([
                "When I cast Spare the Dying, I can modify it to send a jolt of electricity through the target",
                "The target regains 1 Hit Point, and each creature in a 10-ft emanation makes a Dex save",
                "On a fail, Lightning damage equal to 1d4 + half my artificer level (round up); half damage on success"
            ]),
            usages: "Intelligence modifier per ",
            usagescalc: "event.value = Math.max(1, What('Int Mod'));",
            recovery: "long rest",
            spellcastingExtra: ["false life", "spare the dying", "witch bolt", "blindness/deafness", "enhance ability", "animate dead", "lightning bolt", "blight", "death ward", "antilife shell", "raise dead"]
        },
        "subclassfeature3.1": {
            name: "Reanimated Companion",
            source: [["UAH", 1]],
            minlevel: 3,
            description: desc([
                "Using Tinker's Tools or another Artisan's Tools I'm proficient with, I can create a companion",
                "The companion is friendly to me and my allies and obeys my commands",
                "It lasts until I finish a long rest, dismiss it, or I die (triggering Death Burst)",
                "I can't create a new one until I finish a long rest or expend a spell slot",
                "I can only have one companion at a time",
                "In combat, it acts during my turn, and can move and take Reactions freely, but only takes the Dodge action unless I use a bonus action to command it",
                "If I'm incapacitated, it can act freely"
            ]),
            action: [["bonus action", "Command Companion"]],
            creaturesAdd: [["Reanimated Companion", true]],
            creatureOptions: [{
                name: "Reanimated Companion",
                source: [["UAH", 2]],
                size: 4, // Small
                type: "Undead",
                alignment: "Neutral",
                ac: "10+Int",
                hp: "4",
                hd : [1, 4],
                hdLinked: ["artificer", "artificerUA"],
                speed: "30 ft",
                scores: [14, 10, 16, 4, 10, 6], // STR, DEX, CON, INT, WIS, CHA
                damage_resistances: "necrotic, poison",
                damage_immunities: "lightning",
                condition_immunities: "charmed, exhaustion, poisoned",
                senses: "blindsight 60 ft",
                passivePerception: 10,
                languages: "understands the languages you know",
                challengeRating: "0",
                proficiencyBonus: 2,
                proficiencyBonusLinked: true,
                attacksAction: 1,
                attacks: [{
                    name: "Dreadful Swipe",
                    ability: 1,
                    damage: [1, 4, "necrotic"],
                    range: "Melee (5 ft)",
                    description: "Plus 2 + Int mod necrotic damage; target can't take opportunity attacks until start of its next turn",
                    modifiers: ["", "", ""], // Attack, Damage, Range
                    abilitytodamage: false
                }],
                features: [{
                    name: "Death Burst",
                    description: "When the companion dies, it explodes. Each creature within 10 ft must make a Dex save (DC = spell save DC) or take 2d6 necrotic damage."
                }, {
                    name: "Lightning Absorption",
                    description: "Whenever the companion is subjected to lightning damage, it regains a number of hit points equal to the lightning damage dealt."
                }],
                calcChanges : {
					hp : function (totalHD, HDobj, prefix) {
						if (!classes.known.artificer) return;
						var artLvl = classes.known.artificer.level;
						var artLvl4 = 4 * artLvl;
						HDobj.alt.push(artLvl4);
					},
					setAltHp : true,
					hpForceRecalc : true
				},
            }]
        },
        "subclassfeature5": {
            name: "Strange Modifications",
            source: [["UAH", 2]],
            minlevel: 5,
            description: desc([
                "When I create a Reanimated Companion, it gains one of the following modifications:",
                "\u2022 Arcane Conduit: I can cast spells from the companion's space using my own senses.",
                "  Once per turn, when I cast an Evocation or Necromancy Artificer spell and deal damage",
                "  while my companion is within 120 ft, I can add my Int modifier to one damage roll.",
                "\u2022 Ferocity: When I command my companion to take the Dreadful Swipe action, the companion can use it twice."
            ])
        },
        "subclassfeature9": {
            name: "Improved Reanimation",
            source: [["UAH", 2]],
            minlevel: 9,
            description: desc([
                "When I create a Reanimated Companion, it gains one of the following options:",
                "\u2022 Bloated: Companion becomes Large or Medium (my choice). When it hits a Large or smaller",
                "  creature with Dreadful Swipe, the target can be pushed up to 10 ft away. I can also add",
                "  my Int modifier to the damage dealt by its Death Burst.",
                "\u2022 Gaunt: Speed increases to 45 ft with equal climb speed. It can climb difficult surfaces",
                "  including ceilings without checks. Additionally, creatures within 10 ft at the start of",
                "  their turn must make a Wis save (DC = spell save DC) or be frightened until their next turn.",
                "\u2022 Moist: Gains swim speed equal to its speed. When hit by an attack from within 10 ft,",
                "  the attacker takes acid damage equal to my Int modifier."
            ])
        },
        "subclassfeature15": {
            name: "Promethean Reanimation",
            source: [["UAH", 2]],
            minlevel: 15,
            description: desc([
                "I master the science of revivification, gaining these benefits:",
                "\u2022 Facilitated Revival: When I cast Revivify or Raise Dead, the cost of material components",
                "  is halved.",
                "\u2022 Improved Companion: My companion's Death Burst damage increases to 4d6, and its necrotic",
                "  damage ignores resistance.",
                "\u2022 Life Transfer: As a reaction when I take damage, I can cause my companion to drop to 0 HP",
                "  and die (triggering Death Burst). I then regain HP equal to my artificer level."
            ]),
            action: [["reaction", "Life Transfer"]]
        }
    }
});


AddSubClass("bard", "college of spirits", {
    regExpSearch : /^(?=.*(college|bard|minstrel|troubadour|jongleur))(?=.*spirits).*$/i,
    subname : "College of Spirits",
    source : [["UAH", 3]],
    features : {
        "subclassfeature3" : {
            name : "Channeler",
            source : [["UAH", 3]],
            minlevel : 3,
            description : 
                "\u2022 Guiding Whispers: I know the Guidance cantrip and it has a range of 60 feet" +
                "\u2022 Spiritual Focus: I gain proficiency with playing cards and can use cards, crystal, orb," +
                "\n     candle, or ink pen as a spellcasting focus for my Bard spells",
            spellcastingBonus : [{
                name : "Guiding Whispers",
                spells : ["guidance"],
                selection : ["guidance"],
                firstCol : "atwill"
            }],
            spellChanges : {
                "guidance" : {
                    range : "60 ft",
                    changes : "Guidance has a range of 60 feet."
                }
            },
            toolProfs : [["Gaming set", 1]]
        },
        "subclassfeature3.1" : {
            name : "Spirits from Beyond",
            source : [["UAH", 3]],
            minlevel : 3,
            description : "While holding a spellcasting focus, I can use a bonus action to expend one use of Bardic" +
                "\n   " + "Inspiration and call forth a spirit. I roll the Bardic Inspiration die and check the Spirits from" +
                "\n   " + "Beyond table, then choose one creature I can see within 30 feet as the spirit's target." +
                "\n   " + "The spirit immediately takes effect. If a spirit's effect requires a saving throw, the DC" +
                "\n   " + "equals my Bard spell save DC.",
            action : [["bonus action", ""]],
            toNotesPage : [{
                name : "Spirits from Beyond Table",
                page3notes : true,
                note : [
                    "1: Beloved - Target regains HP equal to one roll of Bardic Inspiration + Cha mod",
                    "2: Sharpshooter - Target takes Force damage equal to one roll of Bardic Inspiration + Cha mod",
                    "3: Avenger - Until end of your next turn, any creature that hits the target with a melee attack takes Force damage equal to a roll of your Bardic Inspiration die",
                    "4: Renegade - Target can immediately take a Reaction to teleport up to 30 ft to an unoccupied space it can see", 
                    "5: Fortune Teller - Target has Advantage on D20 Tests until the start of your next turn",
                    "6: Wayfarer - Target gains Temporary HP equal to Bardic Inspiration die + Bard level; while it has these Temporary HP, its Speed increases by 10 ft",
                    "7: Trickster - Target makes Wis save; fail: takes Psychic damage equal to two rolls of your Bardic Inspiration die and has the Charmed condition until the start of your next turn; success: half damage only",
                    "8: Shade - Target gains the Invisible condition until the end of its next turn or until it makes an attack roll, deals damage, or casts a spell. When invisibility ends, each creature in a 5-foot Emanation from the target must succeed on a Con save or take Necrotic damage equal to two rolls of your Bardic Inspiration die",
                    "9: Arsonist - Target makes Dex save, taking Fire damage equal to four rolls of your Bardic Inspiration die on a failed save or half as much on a successful one",
                    "10: Coward - Target and each creature of your choice in a 30-foot Emanation originating from the target must succeed on a Wis save or have the Frightened condition until the start of your next turn. While Frightened, a creature's Speed is halved, and it can take either an action or a Bonus Action, not both",
                    "11: Brute - Each creature of your choice in a 30-foot Emanation originating from the target makes a Str save. On a failed save, a creature takes Thunder damage equal to three rolls of your Bardic Inspiration die and has the Prone condition. On a success, a creature takes half as much damage only",
                    "12: Controlled Channeling - You determine the spirit's effect by choosing one of the other rows in this table"
                ]
            }]
        },
        "subclassfeature6" : {
            name : "Empowered Channeling",
            source : [["UAH", 3]],
            minlevel : 6,
            description : desc([
                "My ability to channel spirits improves, granting me the following benefits:",
                " \u2022 Power from Beyond: Once per turn, when I cast a Bard spell that deals damage or restores",
                "   Hit Points, I roll a d6 and add the number rolled to one of the spell's damage rolls or to",
                "   the total Hit Points the spell restores",
                " \u2022 Spiritual Manifestation: I always have the Spirit Guardians spell prepared. I can cast it",
                "   once without a spell slot, and I regain the ability to do so when I finish a Long Rest",
                "   Once per rest, I can modify it so allies and I within the spell's Emanation have Half Cover"
            ]),
            spellcastingBonus : [{
                name : "Spiritual Manifestation",
                spells : ["spirit guardians"],
                selection : ["spirit guardians"],
                firstCol : "oncelr"
            }],
            usages : 1,
            recovery : "long rest",
            limfeaname : "Half Cover Modification (Spirit Guardians)",
            usages : 1,
            recovery : "short rest"
        },
        "subclassfeature14" : {
            name : "Mystical Connection",
            source : [["UAH", 4]],
            minlevel : 14,
            description : "\n   " + "Whenever I roll on the Spirits from Beyond table, I can roll the die twice and choose which of the two effects to bestow."
        }
    }
});

AddSubClass("cleric", "grave domain", {
    regExpSearch : /^(?=.*(cleric|priest|clergy|acolyte))(?=.*(grave|death|dying|mortality)).*$/i,
    subname : "Grave Domain",
    source : [["UAH", 4]],
    spellcastingExtra : ["bane", "chill touch", "detect evil and good", "gentle repose", "ray of enfeeblement", "revivify", "vampiric touch", "blight", "dispel evil and good", "hold monster", "raise dead"],
    features : {
        "subclassfeature3" : {
            name : "Circle of Mortality",
            source : [["UAH", 4]],
            minlevel : 3,
            description : desc([
                "\u2022 Pull of Death: Once per turn, when I cast a spell or hit with an attack and deal damage",
                "  to a Bloodied creature, that creature takes an extra 1d4 Necrotic damage",
                "\u2022 Return to Life: When I would normally roll dice to restore Hit Points to a creature at 0 HP",
                "  with a spell or Channel Divinity, I use the highest number possible for each die instead"
            ])
        },
        "subclassfeature3.1" : {
            name : "Path to the Grave",
            source : [["UAH", 4]],
            minlevel : 3,
            description : desc([
                "As a Bonus Action, I present my Holy Symbol and expend Channel Divinity to curse one",
                "creature I can see within 30 feet until the start of my next turn",
                "While cursed, the creature has disadvantage on attack rolls and saving throws",
                "When I or an ally I can see hits the cursed target with an attack, I can end the curse early",
                "to make the attack deal extra Necrotic or Radiant damage (my choice) equal to 1d8 + cleric level"
            ]),
            action : [["bonus action", ""]]
        },
        "subclassfeature6" : {
            name : "Sentinel at Death's Door",
            source : [["UAH", 5]],
            minlevel : 6,
            description : desc([
                "When I or a Bloodied creature I can see within 30 feet of myself is hit with an attack roll,",
                "I can use a Reaction to halve that attack's damage"
            ]),
            action : [["reaction", ""]],
            usages : "Wisdom modifier per ",
            usagescalc : "event.value = Math.max(1, What('Wis Mod'));",
            recovery : "long rest"
        },
        "subclassfeature17" : {
            name : "Divine Reaper",
            source : [["UAH", 5]],
            minlevel : 17,
            description : desc([
                "\u2022 Enhanced Necromancy: When I cast a spell of level 5 or lower from the Necromancy school",
                "  that targets one creature or a spell from the Grave Domain Spells table, I can expend a use",
                "  of Channel Divinity to target a second creature within the spell's range",
                "\u2022 Keeper of Souls: When an enemy dies within 60 feet of me, I or one creature I can see within",
                "  60 feet regains Hit Points equal to three times my cleric level",
                "  I can't use this feature if I have the Incapacitated condition"
            ]),
            limfeaname : "Keeper of Souls",
            usages : 1,
            recovery : "short rest"
        }
    }
});

AddSubClass("ranger", "hollow warden", {
    regExpSearch : /^(?=.*hollow)(?=.*warden).*$/i,
    subname : "Hollow Warden",
    source : [["UAH", 5]],
    features : {
        "subclassfeature3" : {
            name : "Wrath of the Wild",
            source : [["UAH", 5]],
            minlevel : 3,
            description : desc([
                "When I cast Hunter's Mark, I transform, gaining the following benefits for the spell's duration:",
                "\u2022 Ancient Armor: I gain a bonus to AC equal to my Wisdom modifier (minimum +1)",
                "\u2022 Unnerving Aura: When an enemy starts its turn within a 10-ft emanation from me,",
                "  it makes a Wisdom save against my spell save DC. On a failed save, it can take either",
                "  an action or a bonus action on this turn, not both",
            ]),
            extraAC : {
                mod : "Wis",
                text : "While transformed with Wrath of the Wild, I add my Wisdom modifier (min +1) to AC.",
                stopeval : function(v) { return !v.wearingArmor && v.wis < 1; }
            },
            spellcastingExtra : ["wrathful smite", "spike growth", "phantom steed", "hallucinatory terrain", "awaken"]
        },
        "subclassfeature7" : {
            name : "Hungering Might",
            source : [["UAH", 5]],
            minlevel : 7,
            description : desc([
                "I gain a bonus to Constitution saving throws equal to my Wisdom modifier (minimum +1)",
                "While bloodied, once per turn when I hit a creature with an attack roll while transformed using Wrath of",
                "the Wild, I regain hit points equal to 1d10 + my Wisdom modifier."
            ]),
            addMod : { type : "save", field : "Con", mod : "max(Wis,1)", text : "I add my Wisdom modifier (minimum +1) to Constitution saving throws." }
        },
        "subclassfeature11" : {
            name : "Rot and Violence",
            source : [["UAH", 5]],
            minlevel : 11,
            description : desc([
                "When transformed using Wrath of the Wild, I gain additional benefits:",
                "\u2022 Eerie Aura: When a creature fails its save against my Unnerving Aura, it also takes",
                "  Necrotic, Poison, or Psychic damage (my choice) equal to my ranger level",
                "  This damage ignores Resistance",
                "\u2022 Strangling Roots: When I hit a creature with an attack roll using a weapon, I can activate",
                "  the Sap or Slow mastery property in addition to a different mastery property",
            ])
        },
        "subclassfeature15" : {
            name : "Ancient Endurance",
            source : [["UAH", 6]],
            minlevel : 15,
            description : desc([
                "\u2022 Persistent Hunt: If I drop to 0 HP while transformed using Wrath of the Wild and don't",
                "  die outright, I can expend a level 4+ spell slot (no action required). My Hit Points then",
                "  change to an amount equal to five times the level of the spell slot expended",
            ]),
            savetxt : { immune : ["exhaustion"] }
        }
    }
});

AddSubClass("rogue", "phantom", {
    regExpSearch : /^(?=.*(phantom|ghost))(?=.*rogue).*$/i,
    subname : "Phantom",
    source : [["UAH", 6]],
    features : {
        "subclassfeature3" : {
            name : "Wails from the Grave",
            source : [["UAH", 6]],
            minlevel : 3,
            description : desc([
                "Immediately after I deal Sneak Attack damage to a creature on my turn, I can target a second",
                "creature I can see within 30 ft of the first. I roll half my Sneak Attack dice,",
                "and the second creature takes Necrotic damage equal to the roll's total"
            ]),
            usages : "Dexterity modifier per ",
            usagescalc : "event.value = Math.max(1, What('Dex Mod'));",
            recovery : "long rest"
        },
        "subclassfeature3.1" : {
            name : "Whispers of the Dead",
            source : [["UAH", 6]],
            minlevel : 3,
            description : desc([
                "After a short or long rest, I can choose one skill or tool proficiency that I lack and gain it",
                "I lose this proficiency when I use this feature again to choose a different proficiency"
            ])
        },
        "subclassfeature9" : {
            name : "Tokens of the Departed",
            source : [["UAH", 6]],
            minlevel : 9,
            description : desc([
                "After a long rest, I gain soul trinkets (tiny objects determined by the DM)",
                "If I move more than 30 ft from a trinket, it immediately teleports to me",
                "These trinkets last until I finish another long rest, at which point they disintegrate",
                "I can use soul trinkets in the following ways:",
                " \u2022 Death's Knell: When I deal Sneak Attack damage, I can expend a trinket to use Wails from",
                "   the Grave without expending a use of that feature",
                " \u2022 Life Essence: While I have at least one trinket, I have advantage on death saves and Con saves",
                " \u2022 Spirit Query: I can take a Magic action to expend a trinket to cast Augury with no components using dexterity",
                "When a creature I can see within 30 ft dies, I can use a reaction to regain one expended trinket"
            ]),
            additional : levels.map(function (n) {
                return n < 9 ? "" : n < 13 ? "2 trinkets" : n < 17 ? "3 trinkets" : "4 trinkets";
            }),
            action : [["reaction", "Regain Soul Trinket (on death)"], ["action", "Spirit Query (Augury)"]],
            savetxt : { adv_vs : ["death", "constitution"] },
            spellcastingBonus : [{
                name : "Spirit Query",
                spells : ["augury"],
                selection : ["augury"]
            }]
        },
        "subclassfeature9.1" : {
            name : "Voice of Death",
            source : [["UAH", 6]],
            minlevel : 9,
            description : desc([
                "I can cast Speak with Dead once without a spell slot or components",
                "I use Dexterity as my spellcasting ability for this spell"
            ]),
            usages : 1,
            recovery : "short rest",
            spellcastingBonus : [{
                name : "Voice of Death",
                spells : ["speak with dead"],
                selection : ["speak with dead"],
                firstCol : "oncesr"
            }]
        },
        "subclassfeature13" : {
            name : "Ghost Walk",
            source : [["UAH", 6]],
            minlevel : 13,
            description : desc([
                "As a bonus action, I assume a spectral form gaining these benefits for 10 minutes or until I end it (no action)",
                " \u2022 Flight: I gain a fly speed of 10 ft and can hover",
                " \u2022 Hazy Form: Attack rolls have disadvantage against me",
                " \u2022 Incorporeal Movement: I can move through occupied spaces as difficult terrain",
                "   If I end my turn in such a space, I take 1d10 Force damage",
                "After using this feature, I can't use it again until I finish a long rest unless I expend",
                "and destroy one of my soul trinkets (no action required)"
            ]),
            action : [["bonus action", "Ghost Walk"]],
            usages : 1,
            recovery : "long rest"
        },
        "subclassfeature17" : {
            name : "Death's Friend",
            source : [["UAH", 7]],
            minlevel : 17,
            description : desc([
                " \u2022 Death's Lament: When I use Wails from the Grave, I can deal the necrotic damage",
                "   to both the first and second creature",
                " \u2022 Draw of Death: When I roll initiative and have no soul trinkets remaining,",
                "   I regain one soul trinket"
            ])
        }
    }
});

AddSubClass("sorcerer", "shadow sorcery", {
    regExpSearch : /^(?=.*(sorcerer|sorcery|witch))(?=.*(shadow|darkness|umbral|gloom)).*$/i,
    subname : "Shadow Sorcery",
    source : [["UAH", 7]],
    features : {
        "subclassfeature3" : {
            name : "Eyes of the Dark",
            source : [["UAH", 7]],
            minlevel : 3,
            description : desc([
                "I have Darkvision with a range of 120 feet and Blindsight with a range of 10 feet",
                "If a spell I cast creates an area of Darkness, I can see normally through that Darkness"
            ]),
            vision : [["Darkvision", 120], ["Blindsight", 10]],
            spellcastingExtra : ["bane", "darkness", "inflict wounds", "pass without trace", "hunger of hadar", "summon undead", "greater invisibility", "phantasmal killer", "contagion", "creation"]
        },
        "subclassfeature6" : {
            name : "Spirits of Ill Omen",
            source : [["UAH", 7]],
            minlevel : 6,
            description : desc([
                "I can cast Summon Undead without a Material component",
                "I can cast it once without a spell slot, regaining this ability after a long rest",
                "When casting the spell, I can modify it to not require concentration",
                "If I do, the spell's duration becomes 1 minute and ends if I cast it again"
            ]),
            usages : 1,
            recovery : "long rest",
            spellcastingBonus : [{
                name : "Spirits of Ill Omen",
                spells : ["summon undead"],
                selection : ["summon undead"],
                firstCol : "oncelr"
            }],
            spellChanges : {
                "summon undead" : {
                    components : "V,S",
                    compMaterial : "",
                    changes : "I can cast Summon Undead without material components."
                }
            }
        },
        "subclassfeature14" : {
            name : "Shadow Walk",
            source : [["UAH", 7]],
            minlevel : 14,
            description : desc([
                "While in Dim Light or Darkness, I can use a bonus action to teleport up to 120 feet",
                "I must teleport to an unoccupied space I can see that is also in Dim Light or Darkness"
            ]),
            action : [["bonus action", ""]]
        },
        "subclassfeature18" : {
            name : "Umbral Form",
            source : [["UAH", 7]],
            minlevel : 18,
            description : desc([
                "As a bonus action, I adopt a shadowy form for 1 minute, until incapacitated, or until I end it",
                "This grants me the following benefits:",
                " \u2022 Incorporeal Movement: I can move through occupied spaces as difficult terrain",
                "   If I end my turn in such a space, I take 1d10 Force damage",
                " \u2022 Shadow Resilience: I have resistance to all damage except Force and Radiant damage",
                " \u2022 Strength of the Grave: If I would drop to 0 HP and not die outright, I can make a",
                "   Charisma save (DC 5 + half damage taken) to instead have HP = 3 × sorcerer level",
                "Once used, I can't use this again until I finish a long rest unless I spend 6 Sorcery Points"
            ]),
            action : [["bonus action", ""]],
            usages : 1,
            recovery : "long rest",
            altResource : "6 SP"
        }
    }
});

AddSubClass("warlock", "hexblade patron", {
    regExpSearch : /^(?=.*hexblade)(?=.*warlock).*$/i,
    subname : "Hexblade Patron",
    source : [["UAH", 7]],
    features : {
        "subclassfeature3.1" : {
            name : "Hexblade Manifest",
            source : [["UAH", 7]],
            minlevel : 3,
            description : desc([
                "My patron grants me power to summon cursed echoes of its blade to hinder my foes:",
                "\u2022 Hexblade's Curse: I can cast Hex without using a spell slot a number of times equal",
                "  to my Charisma modifier (minimum once). When I cast Hex, a spectral weapon",
                "  resembling my patron orbits the cursed target",
                "\u2022 Hexblade's Maneuvers: Once per turn, when I hit a target cursed by my Hex with an attack,",
                "  I can cause one of these effects:",
                "  - Draining Slash: Target makes Con save; fail: can't make opportunity attacks and half speed",
                "  - Harrowing Blade: Target makes Wis save; fail: next time it attacks someone other than me",
                "    before my next turn, it takes necrotic damage equal to my Charisma modifier",
                "  - Stymying Mark: Target has disadvantage on next save before my next turn"
            ]),
            limfeaname : "Hexblade's Curse",
            usages : "Charisma modifier per ",
            usagescalc : "event.value = Math.max(1, What('Cha Mod'));",
            recovery : "long rest",
            spellcastingExtra : ["arcane vigor", "hex", "magic weapon", "shield", "wrathful smite", "conjure barrage", "dispel magic", "freedom of movement", "staggering smite", "animate objects", "steel wind strike"]
        },
        "subclassfeature6" : {
            name : "Life Stealer",
            source : [["UAH", 8]],
            minlevel : 6,
            description : desc([
                "Hungering Hex: When Hex target drops to 0 HP, I regain 1d8+CHA HP.",
                "Inevitable Blade: Once per turn, if I miss an attack role against Hex target, I can deal Necrotic damage equal to my Charisma modifier."
            ]),
        },
        "subclassfeature10" : {
            name : "Armor of Hexes",
            source : [["UAH", 8]],
            minlevel : 9,
            description : desc([
                "When a creature I can see that is affected by my Hex spell hits me with an attack roll,",
                "I can use my reaction to reduce the damage taken by 2d8+CHA."
            ]),
            action : [["reaction", ""]],
            usages : "Charisma modifier per ",
            usagescalc : "event.value = Math.max(1, What('Cha Mod'));",
            recovery : "long rest"
        },
        "subclassfeature14" : {
            name : "Masterful Hex",
            source : [["UAH", 8]],
            minlevel : 13,
            description : desc([
                "Accursed Critical: Any attack roll I make against the target cursed by my Hex scores a Critical Hit on a roll of 19 or 20.",
                "Infectious Hex: When I use one of my Hexblade's Maneuvers, I can target one additional creature within 30 feet of the cursed target. The additional target takes 1d6 Necrotic damage.",
                "Resilient Hex: Taking damage can't break my Concentration on Hex."
            ])
        }
    }
});

AddSubClass("warlock", "undead patron", {
    regExpSearch : /^(?=.*undead)(?=.*warlock).*$/i,
    subname : "Undead Patron",
    source : [["UAH", 8]],
    spellcastingExtra : ["false life", "blindness/deafness", "phantasmal force", "ray of sickness", "speak with dead", "vampiric touch", "death ward", "phantasmal killer", "antilife shell", "cloudkill"],
    features : {
        "subclassfeature3" : {
            name : "Form of Dread",
            source : [["UAH", 8]],
            minlevel : 3,
            description : desc([
                "As a bonus action, I transform for 1 minute, manifesting an aspect of my patron's dreadful power",
                "I gain temporary hit points equal to 1d10 + my warlock level",
                "Once during each of my turns, when I hit a creature with an attack, I can force it to make",
                "a Wisdom saving throw against my spell save DC",
                "On a failed save, the target is frightened of me until the end of my next turn",
                "I am immune to the frightened condition while transformed",
            ]),
            action : [["bonus action", ""]],
            usages : "Proficiency bonus per ",
            usagescalc : "event.value = How('Proficiency Bonus');",
            recovery : "long rest",
            savetxt : { immune : ["frightened (in Form of Dread)"] }
        },
        "subclassfeature6" : {
            name : "Grave Touched",
            source : [["UAH", 8]],
            minlevel : 6,
            description : desc([
                "Whenever I cast a spell or hit a creature with an attack roll and deal Necrotic damage, it ignores Resistance to Necrotic damage.",
                "While using Form of Dread, once per turn when I cast a spell that deals damage I can change the damage type to Necrotic.",
                "I don’t gain Exhaustion levels from dehydration, malnutrition, or suffocation. I don’t need to sleep and magic can’t put me to sleep."
            ])
        },
        "subclassfeature10" : {
            name : "Mortal Husk",
            source : [["UAH", 8]],
            minlevel : 10,
            description : desc([
                "I have resistance to necrotic damage. In form of Dread, I am immune to necrotic damage",
                "Once per rest, when I'm reduced to 0 hit points, I can cause each creature within 30 feet of me to make a CON save. They take necrotic damage equal to 2d10 + my warlock level, half on a success",
                "My hitpoints then change to 10*CHA and and I gain 1 level of exhaustion",
            ]),
            dmgres : ["Necrotic"],
            savetxt : { immune : ["necrotic (in Form of Dread)"] },
            action : [["reaction", "Unholy Resuscitation (when reduced to 0 HP)"]],
            limfeaname : "Mortal Husk",
            usages : 1,
            recovery : "short rest",
        },
        "subclassfeature14" : {
            name : "Spirit Projection",
            source : [["UAH", 8]],
            minlevel : 14,
            description : desc([
                "Form of Dread improvements:",
                "Flight: I gain a fly speed equal to my walking speed and can hover",
                "Profane Casting: Whenever you cast a Warlock spell from the Conjuration or Necromancy school, you cast it without any components, except Material components that are consumed by the spell or that have a cost specified in the spell.",
                "Vitality Siphone: Once per turn when I deal Necrotic damage to a creature, I regain Hit Points equal to my Charisma modifier (minimum 1)",
            ]),
        }
    }
});
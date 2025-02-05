/*	-WHAT IS THIS?-
    This file adds optional material to "MPMB's Character Record Sheet" found at https://flapkan.com/mpmb/charsheets
    Import this file using the "Add Extra Materials" bookmark.
    -KEEP IN MIND-
    It is recommended to enter the code in a fresh sheet before adding any other information (i.e. before making your character with it).
*/

/*	-INFORMATION-
    Subject:	2025 UA Realms Subclasses
    Effect:		This script adds the 2025 UA Realms Subclasses
    Code by:	Rocky
    Date:		2025-2-4 (sheet v13)
*/

var iFileName = "RealmsSubclasses.js";

RequiredSheetVersion("13.2.0");

SourceList["U25"] = {
    name: "UA Realms",
    abbreviation: "UAR",
    group: "Rocky's Homebrew",
    date: "2025/02/4"
};

AddSubClass("bard", "college of the moon", {
    regExpSearch : /^(?=.*(college|bard|minstrel|troubadour|jongleur))(?=.*moon).*$/i,
    subname : "College of the Moon",
    source : [["U25", 1]],
    features : {
        "subclassfeature3" : {
            name : "Moonshae Folktales",
            source : [["U25", 1]],
            minlevel : 3,
            description : "\n   " + "As a Magic action, invoke a folktale's power. Choose one of the following tales:" +
                          "\n    - Tale of Life: When restoring Hit Points with a spell, expend a Bardic Inspiration die to add its roll to healing (once per turn)." +
                          "\n    - Tale of Gloam: When giving Bardic Inspiration as a Bonus Action, take the Disengage or Hide action as part of that Bonus Action." +
                          "\n    - Tale of Mirth: As a Reaction, expend a Bardic Inspiration die when an enemy succeeds on a saving throw. Subtract the die roll from their save, potentially causing failure.",
            usages : 1,
            recovery : "long rest",
            action : [["action", " (invoke tale)"]]
        },
        "subclassfeature3.1" : {
            name : "Primal Lorist",
            source : [["U25", 1]],
            minlevel : 3,
            description : "\n   " + "Learn Druidic and one cantrip from the Druid spell list (counts as a Bard spell)." +
                          "\n   " + "Gain proficiency in one skill: Animal Handling, Insight, Medicine, Nature, Perception, or Survival.",
            spellcastingExtra : ["druidcraft", "guidance", "produce flame"], // Example cantrips; adjust based on player choice
            skillProfs : [["Animal Handling", "Insight", "Medicine", "Nature", "Perception", "Survival"], 1]
        },
        "subclassfeature6" : {
            name : "Blessing of the Moonwells",
            source : [["U25", 1]],
            minlevel : 6,
            description : "\n   " + "Always have Moonbeam prepared." +
                          "\n   " + "As a Bonus Action, cast Moonbeam without expending a spell slot. While concentrating on it:" +
                          "\n    - Glow faintly (shed dim light in a 5-ft radius)." +
                          "\n    - When a creature fails its saving throw against Moonbeam, another creature you see within 60 ft regains 2d4 Hit Points." +
                          "\n   " + "Once per Long Rest or by expending a level 3+ spell slot (no action required).",
            spellcastingBonus : {
                name : "Blessing of the Moonwells",
                spells : ["moonbeam"],
                selection : ["moonbeam"],
                prepared : true
            },
            usages : 1,
            recovery : ["long rest"],
            additionalRecovery: { spellSlotLevel: 3 },
            action : [["bonus action", " (cast Moonbeam)"]]
        },
        "subclassfeature14" : {
            name : "Bolstered Folktales",
            source : [["U25", 1]],
            minlevel : 14,
            description : "\n   " + "Your Moonshae Folktales improve:" +
                          "\n    - Tale of Life or Mirth: Roll 1d6 instead of expending a Bardic Inspiration die." +
                          "\n    - Tale of Gloam: Teleport up to 30 ft to an unoccupied space you can see as part of the Bonus Action.",
        }
    }
}),

AddSubClass("fighter", "knightly envoy", {
    regExpSearch: /^(?=.*knightly)(?=.*envoy).*$/i,
    subname: "Knightly Envoy",
    source: [["U25", 0]],
    fullname: "Knightly Envoy",
    features: {
        "subclassfeature3": {
            name: "Knightly Envoy",
            source: [["U25", 0]],
            minlevel: 3,
            description: desc([
                "I learn one language of my choice",
                "I can cast the Comprehend Languages spell as a ritual using Intelligence as my spellcasting ability"
            ]),
            languageProfs: [1], // Allows selection of one language
            spellcastingBonus: [{
                name: "Comprehend Languages (Ritual)",
                spells: ["comprehend languages"],
                selection: ["comprehend languages"],
                firstCol: "ritual"
            }]
        },
        "subclassfeature3.1": {
            name: "Purple Dragon Companion",
            source: [["U25", 0]],
            minlevel: 3,
            description: desc([
                "I am bonded with an amethyst dragon hatchling as my companion",
                "The dragon is friendly to me and my allies and obeys my commands",
                "In combat, it acts during my turn, taking only the Dodge action unless commanded otherwise",
                "I can use a Bonus Action to command it to take another action"
            ]),
            action: [["bonus action", "Command Dragon"]],
            creatureOptions: [{
                name: "Purple Dragon Companion",
                source: [["U25", 0]],
                size: 4, // Small
                type: "Dragon",
                alignment: "Neutral",
                ac: "13+Int",
                hp: "4 + (Fighter level × 4)",
                hd: ["Fighter", 6],
                speed: "30 ft, fly 30 ft, swim 30 ft",
                scores: [16, 16, 12, 8, 13, 10], // Str, Dex, Con, Int, Wis, Cha
                saves: ["+3", "+3", "+1", "-1", "+1", "+0"], // Str, Dex, Con, Int, Wis, Cha
                senses: "Darkvision 60 ft",
                passivePerception: 11,
                languages: "Understands the languages you know; telepathy 30 ft",
                challengeRating: "None (XP 0; PB equals your Proficiency Bonus)",
                proficiencyBonus: 2,
                proficiencyBonusLinked: true,
                attacksAction: 1,
                attacks: [{
                    name: "Rend",
                    ability: 1,
                    damage: [1, 6, "force"],
                    range: "Melee (5 ft)",
                    description: "Plus Intelligence modifier Force damage",
                    modifiers: ["+3", "", ""], // Attack, Damage, Range
                    abilitytodamage: false
                }],
                features: [{
                    name: "Amphibious",
                    description: "The dragon can breathe both air and water."
                }, {
                    name: "Stalwart Bond",
                    description: "Add half your Proficiency Bonus (round down) to any ability check or saving throw the dragon makes."
                }],
                actions: [{
                    name: "Gravity Breath (2/Day)",
                    description: "Constitution Saving Throw: DC 8 + Proficiency Bonus + Intelligence modifier, each creature in a 15-foot Cone. Failure: The target is pulled up to 15 feet straight toward the dragon or pushed 15 feet straight away from the dragon (your choice)."
                }],
                traits: [{
                    name: "Companion",
                    description: "The dragon acts during your turn. It can move and use its Reaction on its own, but only takes the Dodge action unless you use a Bonus Action to command it to take another action."
                }]
            }]            
        },
        "subclassfeature7": {
            name: "Dragon Rider",
            source: [["U25", 0]],
            minlevel: 7,
            description: desc([
                "The dragon grows to Medium size and can serve as a mount if I am Medium or smaller",
                "While riding it, the dragon falls at the end of its turn if airborne and only held aloft by its Fly Speed",
                "Its Gravity Breath improves to a 30-ft cone and deals an additional 2d6 Force damage on failed saves"
            ]),
            eval:
              function(prefix) {
                  PickDropdown(prefix + 'Comp.Desc.Size', 3); // Medium
              },
              removeeval:
              function(prefix) {
                  PickDropdown(prefix + 'Comp.Desc.Size',4)//reverting small 
              }
        },
        "subclassfeature10": {
            name: "Rallying Surge",
            source: [["U25", 0]],
            minlevel: 10,
            description: desc([
                "When I use my Action Surge, I can choose up to three allies within a 30-ft emanation",
                "Each ally can take a Reaction to either Advance or Retreat:",
                " - Advance: Make one weapon attack or Unarmed Strike (dragon can make a Rend attack)",
                " - Retreat: Move up to half their Speed without provoking Opportunity Attacks"
            ]),
            additional: "choose up to three allies",
            action: [["reaction", " (allies' reactions)"]],
            usages: 1,
            recovery: "Action Surge",
        },

        "subclassfeature15": {
            name: "Amethyst Pinnacle",
            source: [["U25", 0]],
            minlevel: 15,
            description: desc([
                "My purple dragon grows to Large size and its Speed and Fly Speed increase to 40 ft",
                "The dragon no longer falls at the end of a turn if airborne while I’m riding it",
                "Tandem Attack: I can forego one attack to command the dragon to Rend, or two attacks for Gravity Breath"
            ]),
            eval: function(prefix) {
                PickDropdown(prefix + 'Comp.Desc.Size', 2); // Large
                var sMoveStr = (typePF ? ",\n" : ", ") + "fly 40 ft";
                if (What("Unit System") === "metric") sMoveStr = ConvertToMetric(sMoveStr, 0.5);
                tDoc.getField(prefix + "Comp.Use.Speed").value += sMoveStr;
            },
            removeeval: function(prefix) {
                PickDropdown(prefix + 'Comp.Desc.Size', 3); // Revert to Medium
                var sMoveStr = (typePF ? ",\n" : ", ") + "fly 40 ft";
                if (What("Unit System") === "metric") sMoveStr = ConvertToMetric(sMoveStr, 0.5);
                Value(prefix + "Comp.Use.Speed", What(prefix + "Comp.Use.Speed").replace(sMoveStr, ""));
            },
        },

        "subclassfeature18": {
            name: "Enduring Commander",
            source: [["U25", 0]],
            minlevel: 18,
            description: desc([
                "I and my purple dragon gain Resistance to Force and Psychic damage"
            ]),
            dmgres: ["Force", "Psychic"],
        },

    }
});
AddSubClass("paladin", "oath of the genie", {
    regExpSearch: /^(?=.*genie)(?=.*paladin|oath).*$/i,
    subname: "Oath of the Genie",
    source: [["U25", 0]],
    features: {
        "subclassfeature3": {
            name: "Elemental Smite",
            source: [["U25", 0]],
            minlevel: 3,
            description: desc([
                "After casting Divine Smite, I can use Channel Divinity for one of these effects:",
                " \u2022 Dao's Crush: Target is Grappled and Restrained (escape DC = spell save DC)",
                " \u2022 Djinni's Escape: Teleport 30 ft and gain mist form until end of next turn",
                " \u2022 Efreeti's Fury: Deal extra 2d4 Fire damage",
                " \u2022 Marid's Surge: 10-ft emanation Str save or pushed 15 ft and knocked prone"
            ]),
            action: [["reaction", "Elemental Smite (after Divine Smite)"]]
        },
        "subclassfeature3.1": {
            name: "Genie Spells",
            source: [["U25", 0]],
            minlevel: 3,
            spellcastingExtra: ["chromatic orb", "elementalism", "thunderous smite", "mirror image", "phantasmal force", "fly", "gaseous form", "conjure minor elementals", "summon elemental", "banishing smite", "contact other plane"]
        },
        "subclassfeature3.2": {
            name: "Genie's Splendor",
            source: [["U25", 0]],
            minlevel: 3,
            description: desc([
                "When not wearing Medium or Heavy armor, I add my Charisma modifier to AC (min +1)",
                "I gain proficiency in one skill: Acrobatics, Intimidation, Performance, or Persuasion"
            ]),
            skillstxt: "Choose one from: Acrobatics, Intimidation, Performance, or Persuasion",
            extraAC: {
                mod: "Cha",
                text: "While not wearing medium or heavy armor, I add my Charisma modifier to AC.",
                stopeval: function(v) { return v.heavyArmor || v.mediumArmor; }
            }
        },
        "subclassfeature7": {
            name: "Aura of Elemental Shielding",
            source: [["U25", 0]],
            minlevel: 7,
            description: desc([
                "Choose Acid, Cold, Fire, Lightning, or Thunder damage",
                "Allies in my Aura of Protection have resistance to that damage type",
                "I can change the damage type at the start of each of my turns (no action required)"
            ]),
            additional: ["", "", "", "", "", "", "10-foot aura", "10-foot aura", "10-foot aura", "10-foot aura", "10-foot aura", "10-foot aura", "10-foot aura", "10-foot aura", "10-foot aura", "10-foot aura", "10-foot aura", "30-foot aura", "30-foot aura", "30-foot aura"]
        },
        "subclassfeature15": {
            name: "Elemental Rebuke",
            source: [["U25", 0]],
            minlevel: 15,
            description: desc([
                "As a reaction when hit by an attack, I can halve the damage against myself",
                "The attacker must make a Dex save or take 4d10 + Cha mod damage (half on success)",
                "Damage type is my choice of: Acid, Cold, Fire, Lightning, or Thunder"
            ]),
            action: [["reaction", ""]],
            usages: "Charisma modifier per ",
            usagescalc: "event.value = Math.max(1, What('Cha Mod'));",
            recovery: "long rest"
        },
        "subclassfeature20": {
            name: "Noble Scion",
            source: [["U25", 0]],
            minlevel: 20,
            description: desc([
                "As a bonus action, for 10 minutes, I gain:",
                " \u2022 Flight: 60 ft flying speed and hover",
                " \u2022 Minor Wish: As a reaction, I can turn an ally's failed D20 Test in my aura into a success",
                "I can also restore one use by expending a 5th-level spell slot (no action required)"
            ]),
            action: [["bonus action", ""], ["reaction", "Minor Wish"]],
            recovery: "long rest",
            usages: 1
        }
    }
});
AddSubClass("ranger", "winter walker", {
    regExpSearch: /^(?=.*winter)(?=.*walker).*$/i,
    subname: "Winter Walker",
    source: [["U25", 0]],
    features: {
        "subclassfeature3": {
            name: "Frigid Explorer",
            source: [["U25", 0]],
            minlevel: 3,
            description: desc([
                "I have resistance to Cold damage",
                "When I hit with a weapon, I can deal +1d4 Cold damage once per target's turn",
                "This extra damage ignores Cold resistance and increases to 1d6 at 11th level"
            ]),
            additional: levels.map(function(n) {
                return n < 11 ? "1d4" : "1d6";
            }),
            dmgres: ["Cold"]
        },
        "subclassfeature3.1": {
            name: "Hunter's Rime",
            source: [["U25", 0]],
            minlevel: 3,
            description: desc([
                "When I cast Hunter's Mark, I gain temporary HP equal to 1d10 + ranger level",
                "While a creature is marked by my Hunter's Mark, it can't take the Disengage action"
            ])
        },
        "subclassfeature3.2": {
            name: "Winter Walker Magic",
            source: [["U25", 0]],
            minlevel: 3,
            description: "\n   I get bonus spells known, which do not count against the number of spells I can know",
            spellcastingExtra: ["ice knife", "pass without trace", "remove curse", "ice storm", "cone of cold"],
            spellcastingExtraApplyNonconform: true
        },
        "subclassfeature7": {
            name: "Fortifying Soul",
            source: [["U25", 0]],
            minlevel: 7,
            description: desc([
                "After a short rest, I can choose creatures I see (equal to Wis mod, min 1)",
                "Each chosen creature regains 1d10 + ranger level HP",
                "They also have advantage on saves vs. Frightened for 1 hour"
            ]),
            usages: 1,
            recovery: "long rest"
        },
        "subclassfeature11": {
            name: "Chilling Retribution",
            source: [["U25", 0]],
            minlevel: 11,
            description: desc([
                "As a reaction when hit by an attack, I can force the attacker to make a Wisdom save",
                "On a failed save, it is frightened until the end of my next turn with 0 speed"
            ]),
            action: [["reaction", ""]],
            usages: "Wisdom modifier per ",
            usagescalc: "event.value = Math.max(1, What('Wis Mod'));",
            recovery: "long rest"
        },
        "subclassfeature15": {
            name: "Frozen Haunt",
            source: [["U25", 0]],
            minlevel: 15,
            description: desc([
                "When I cast Hunter's Mark, I can adopt a ghostly, snowy form until the spell ends:",
                " \u2022 Frozen Soul: I'm immune to Cold damage and deal 2d4 Cold damage in 15-ft emanation",
                " \u2022 Partially Incorporeal: Immune to grappled/prone/restrained; move through creatures",
                "Moving through creatures/objects treats them as difficult terrain",
                "Take 1d10 Force damage if ending turn inside a creature/object"
            ]),
            usages: 1,
            recovery: "long rest",
            altResource: "SS 4+"
        }
    }
});

AddSubClass("rogue", "scion of the three", {
    regExpSearch: /^(?=.*scion)(?=.*three).*$/i,
    subname: "Scion of the Three",
    source: [["U25", 0]],
    features: {
        "subclassfeature3": {
            name: "Bloodthirst",
            source: [["U25", 0]],
            minlevel: 3,
            description: desc([
                "My Sneak Attack deals extra weapon damage vs. Bloodied equal to half my rogue level (round up)",
                "When an enemy I see drops to 0 HP, I can use my reaction to teleport within 30 ft",
                "After teleporting, I can make one melee attack"
            ]),
            action: [["reaction", "Bloodthirst Teleport"]],
            usages: "Intelligence modifier per ",
            usagescalc: "event.value = Math.max(1, What('Int Mod'));",
            recovery: "long rest",
            calcChanges: {
                atkAdd: [
                    function(fields, v) {
                        if (v.isSneakAttack) {
                            fields.Description += (fields.Description ? '; ' : '') + 'Extra ' + Math.ceil(classes.known.rogue.level/2) + ' damage vs. Bloodied';
                        }
                    },
                    "My Sneak Attack deals extra damage against Bloodied targets."
                ]
            }
        },
        "subclassfeature3.1": {
            name: "Dread Allegiance",
            source: [["U25", 0]],
            minlevel: 3,
            description: desc([
                "After a long rest, I choose one of the Dead Three and gain its benefits:",
                "\u2022 Bane: Psychic resistance and Minor Illusion cantrip",
                "\u2022 Bhaal: Poison resistance and Blade Ward cantrip",
                "\u2022 Myrkul: Necrotic resistance and Chill Touch cantrip"
            ]),
            choices: ["Bane", "Bhaal", "Myrkul"],
            "bane": {
                name: "Dread Allegiance: Bane",
                description: "\n   I have resistance to psychic damage and can cast Minor Illusion (Int) as a cantrip",
                dmgres: ["Psychic"],
                spellcastingBonus: [{
                    name: "Bane's Gift",
                    spells: ["minor illusion"],
                    selection: ["minor illusion"],
                    firstCol: "atwill"
                }]
            },
            "bhaal": {
                name: "Dread Allegiance: Bhaal",
                description: "\n   I have resistance to poison damage and can cast Blade Ward (Int) as a cantrip",
                dmgres: ["Poison"],
                spellcastingBonus: [{
                    name: "Bhaal's Gift",
                    spells: ["blade ward"],
                    selection: ["blade ward"],
                    firstCol: "atwill"
                }]
            },
            "myrkul": {
                name: "Dread Allegiance: Myrkul",
                description: "\n   I have resistance to necrotic damage and can cast Chill Touch (Int) as a cantrip",
                dmgres: ["Necrotic"],
                spellcastingBonus: [{
                    name: "Myrkul's Gift",
                    spells: ["chill touch"],
                    selection: ["chill touch"],
                    firstCol: "atwill"
                }]
            }
        },
        "subclassfeature9": {
            name: "Strike Fear",
            source: [["U25", 0]],
            minlevel: 9,
            description: desc([
                "I gain the Terrify Cunning Strike option:",
                "Terrify (Cost: 1d6): Target must make a Wisdom save or become frightened for 1 minute",
                "The frightened target can repeat the save at the end of each of its turns"
            ])
        },
        "subclassfeature13": {
            name: "Aura of Malevolence",
            source: [["U25", 0]],
            minlevel: 13,
            description: desc([
                "At the start of my turn, chosen creatures within 10 ft take damage equal to my Int mod (min 1)",
                "Damage type matches my Dread Allegiance resistance and ignores resistance",
                "The aura is inactive while I am incapacitated"
            ])
        },
        "subclassfeature17": {
            name: "Dread Incarnate",
            source: [["U25", 0]],
            minlevel: 17,
            description: desc([
                "I gain the following benefits:",
                "\u2022 Battle Tyrant: I have advantage on attacks against frightened creatures",
                "\u2022 Murderous Intent: I can treat 1s and 2s as 3s on Sneak Attack damage dice"
            ])
        }
    }
});

AddSubClass("sorcerer", "spellfire", {
    regExpSearch: /^(?=.*spellfire).*$/i,
    subname: "Spellfire",
    source: [["U25", 0]],
    features: {
        "subclassfeature3": {
            name: "Spellfire Burst",
            source: [["U25", 0]],
            minlevel: 3,
            description: desc([
                "When I spend Sorcery Points during my turn, I can use one of these effects once per turn:",
                "\u2022 Bolstering Flames: Grant 1d4 + Cha mod temp HP to self or creature within 30 ft",
                "\u2022 Radiant Fire: Force Dex save on creature within 30 ft or take 1d6 Fire/Radiant damage"
            ]),
            additional: levels.map(function(n) {
                if (n < 14) return "1d4 + Cha mod/1d6 damage";
                return "1d4 + Cha mod + level/3d6 damage";
            })
        },
        "subclassfeature3.1": {
            name: "Spellfire Spells",
            source: [["U25", 0]],
            minlevel: 3,
            description: "\n   I learn additional spells, which do not count against my number of spells known",
            spellcastingExtra: ["cure wounds", "guiding bolt", "lesser restoration", "scorching ray", "aura of vitality", "dispel magic", "fire shield", "wall of fire", "greater restoration", "flame strike"],
            spellcastingExtraApplyNonconform: true
        },
        "subclassfeature6": {
            name: "Absorb Spells",
            source: [["U25", 0]],
            minlevel: 6,
            description: desc([
                "I always have Counterspell prepared",
                "When a target fails its save against my Counterspell, I regain 1d4 Sorcery Points"
            ]),
            spellcastingBonus: [{
                name: "Absorb Spells",
                spells: ["counterspell"],
                selection: ["counterspell"],
                firstCol: "atwill"
            }]
        },
        "subclassfeature14": {
            name: "Honed Spellfire",
            source: [["U25", 0]],
            minlevel: 14,
            description: desc([
                "My Spellfire Burst improves:",
                "\u2022 Bolstering Flames now adds my sorcerer level to the temporary HP",
                "\u2022 Radiant Fire now deals 3d6 damage instead of 1d6"
            ])
        },
        "subclassfeature18": {
            name: "Crown of Spellfire",
            source: [["U25", 0]],
            minlevel: 18,
            description: desc([
                "As a bonus action, I gain these benefits for 1 minute:",
                "\u2022 Burning Life Force: When hit by an attack, I can spend Hit Dice (max = Cha mod)",
                "   Reduce damage by total rolled + sorcerer level (once per turn)",
                "\u2022 Flight: 60 ft flying speed and hover",
                "\u2022 Spell Avoidance: Succeed on saves vs. spells = no damage, fail = half damage",
                "   This doesn't work while incapacitated",
                "I can use this again by spending 7 sorcery points (no action required)"
            ]),
            action: [["bonus action", ""]],
            usages: 1,
            recovery: "long rest",
            altResource: "7 SP"
        }
    }
});

AddSubClass("wizard", "bladesinging", {
    regExpSearch: /(bladesinging|bladesinger)/i,
    subname: "Tradition of Bladesinging",
    source: [["U25", 0]],
    features: {
        "subclassfeature3": {
            name: "Training in War and Song",
            source: [["U25", 0]],
            minlevel: 3,
            description: desc([
                "I gain proficiency with all melee martial weapons without Two-Handed or Heavy properties",
                "I can use a melee weapon I'm proficient with as a spellcasting focus for wizard spells",
                "I gain proficiency in one skill: Acrobatics, Athletics, Performance, or Persuasion"
            ]),
            weaponProfs: [false, true],
            skillstxt: "Choose one from: Acrobatics, Athletics, Performance, or Persuasion"
        },
        "subclassfeature3.1": {
            name: "Bladesong",
            source: [["U25", 0]],
            minlevel: 3,
            description: desc([
                "As a bonus action, I can start the Bladesong for 1 minute if not wearing armor/shield",
                "It ends if I'm incapacitated, wear armor/shield, or use two hands to attack",
                "While active, I gain these benefits:",
                " \u2022 Intelligence modifier (min +1) to AC",
                " \u2022 Walking speed increases by 10 feet",
                " \u2022 Can use Intelligence instead of Strength/Dexterity for weapon attacks/damage",
                " \u2022 Add Intelligence modifier to Constitution saves for concentration"
            ]),
            action: [["bonus action", "Bladesong (Start)"]],
            usages: "Intelligence modifier per ",
            usagescalc: "event.value = Math.max(1, What('Int Mod'));",
            recovery: "long rest",
            extraAC: {
                mod: "Int",
                text: "While Bladesong is active, I add my Intelligence modifier to AC.",
                stopeval: function(v) { return v.heavyArmor || v.mediumArmor || v.usingShield; }
            }
        },
        "subclassfeature6": {
            name: "Extra Attack",
            source: [["U25", 0]],
            minlevel: 6,
            description: desc([
                "I can attack twice instead of once when I take the Attack action on my turn",
                "I can cast a wizard cantrip in place of one of those attacks"
            ])
        },
        "subclassfeature10": {
            name: "Song of Defense",
            source: [["U25", 0]],
            minlevel: 10,
            description: desc([
                "As a reaction while Bladesong is active, I can expend a spell slot to reduce damage",
                "The damage I take is reduced by 5 × the level of the spell slot expended"
            ]),
            action: [["reaction", "Song of Defense"]]
        },
        "subclassfeature14": {
            name: "Song of Victory",
            source: [["U25", 0]],
            minlevel: 14,
            description: "\n   After I cast a spell with a casting time of an action, I can make one weapon attack as a bonus action",
            action: [["bonus action", "Attack (after spell)"]]
        }
    }
});
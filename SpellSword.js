/*	-WHAT IS THIS?-
	This file adds optional material to "MPMB's Character Record Sheet" found at https://flapkan.com/mpmb/charsheets
	Import this file using the "Add Extra Materials" bookmark.
	-KEEP IN MIND-
	It is recommended to enter the code in a fresh sheet before adding any other information (i.e. before making your character with it).
*/

/*	-INFORMATION-
	Subject:	Class
	Effect:		This script adds a class called "Spell Sword" and its subclasses.
	Code by:	Rocky
	Date:		2024-10-16 (sheet v13)
*/
var iFileName = "SpellSword.js";

RequiredSheetVersion("13.2.0");

SourceList["SSH"] = {
    name : "Spell Sword Homebrew",
    abbreviation : "SSH",
    abbreviationSpellsheet : "SS",
    group : "Rocky's Homebrew",
    date : "2024/10/16"
};

// Define the Spell Sword spell list
[
    // Cantrips (0 Level)
    "acid splash", "blade ward", "booming blade", "control flames", "dancing lights", "fire bolt", "frostbite", "green-flame blade", "light", "mage hand", "message", "minor illusion", "poison spray", "prestidigitation", "ray of frost", "shocking grasp", "sword burst", "thunderclap", "true strike",

    // 1st Level
    "alarm", "arcane needle", "blazing ring", "burning hands", "chromatic orb", "color spray", "comprehend languages", "detect magic", "expeditious retreat", "false life", "feather fall", "flame thrust", "frostbite beam", "grease", "ice knife", "identify", "jump", "longstrider", "mage armor", "ray of sickness", "shield", "silent image", "sleep", "snare", "thunderwave", "witch bolt",

    // 2nd Level
    "aganazzar's scorcher", "arcane lock", "arcane javelin", "blindness/deafness", "blur", "cloud of daggers", "darkness", "darkvision", "detect thoughts", "dragon's breath", "enlarge/reduce", "glacial shroud", "gust of wind", "invisibility", "knock", "levitate", "locate object", "magic weapon", "mind spike", "mirror image", "phantom strike", "poisonous wave", "ray of enfeeblement", "rope trick", "scorching ray", "see invisibility", "shadow blade", "shatter", "silence", "spider climb", "web",

    // 3rd Level
    "blink", "counterspell", "dispel magic", "fear", "fireball", "fly", "frost lance", "gaseous form", "haste", "hypnotic pattern", "lightning bolt", "major image", "melf's minute meteors", "phantom steed", "protection from energy", "shadowblight claw", "sleet storm", "slow", "sonic burst", "thunder step", "tidal wave", "tongues", "vampiric touch", "wall of sand", "water breathing",

    // 4th Level
    "arcane chains", "banishment", "chaotic blastwave", "control water", "dimension door", "elemental bane", "fire shield", "greater invisibility", "hallucinatory terrain", "ice storm", "lightning arc", "phantasmal killer", "polymorph", "sickening radiance", "stoneskin", "storm sphere", "wall of fire",

    // 5th Level
    "animate object", "chthonic fissure", "cloudkill", "cone of cold", "ethereal strike", "far step", "immolation", "mislead", "modify memory", "skill empowerment", "steel wind strike", "synaptic static", "telekinesis", "teleportation circle", "wall of stone"
].forEach(function (s) {if(SpellsList[s] && SpellsList[s].classes && SpellsList[s].classes.indexOf("spellsword") === -1) SpellsList[s].classes.push("spellsword");});

ClassList["spellsword"] = {
    regExpSearch : /^(?=.*spell)(?=.*sword).*$/i,
    name : "Spell Sword",
    source : ["SSH", 0],
    primaryAbility : "4",
    abilitySave : 4,
    prereqs : "Dexterity and Intelligence 13",
    die : 8,
    saves : ["Con", "Int"],
    improvements: [0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 5, 5],
    armor : [
            [true, true, false, false],
    ],
    weaponProfs : [
            [true, false, ["longswords", "rapiers", "scimitars", "shortswords"]],
    ],
    spellcastingFactor : 2,
    spellcastingFactorRoundupMulti : true,
    spellcastingKnown : {
		cantrips : [2, 2, 2, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
		spells : [3, 4, 5, 5, 6, 6, 7, 7, 9, 9, 10, 10, 11, 11, 12, 12, 14, 14, 15, 15]
	},
    attacks : [1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
    subclasses : ["Eldritch Order", []],
    features : {
        "spellcasting" : {
            name : "Spellcasting",
            source : ["SSH", 0],
            minlevel : 1,
            description : "\n   I can cast spells using my mental codex; Intelligence is my spellcasting ability.",
            additional : levels.map(function (n, idx) {
                return [2, 2, 2, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4][idx] + " cantrips known";
            })
        },
        "spellstrike" : {
            name : "Spellstrike",
            source : ["SSH", 0],
            minlevel : 1,
            description : desc([
                "When you cast a spellsword spell of 1st+ level as an action, you can make a melee weapon attack as a bonus action. The spell requirements:",
                "Ranged Spell Attack: Convert it to a melee spell attack with a range of Touch, removing disadvantage when within 5 feet of an enemy.",
                "Area of Effect: The spell must naturally have a cone or line area originating from you.",
                "Melee Spell Attack: These remain unchanged. Regain 1 use after short rest, all after long rest."
            ]),
            usages : levels.map(function(n) { return n < 3 ? "1" : n < 8 ? "2" : n < 13 ? "3" : n < 18 ? "4" : "5"; }),
            recovery : "long rest"
        },
        "mental recall" : {
            name: "Mental Recall",
            source: ["SSH", 0],
            minlevel: 2,
            description: "\n   Recover one expended spell slot after a short rest.",
            recovery: "long rest",
            usages: 1
        },
        "arcane maneuvers" : {
            name: "Arcane Maneuvers",
            source: ["SSH", 0],
            minlevel: 2,
            description: "\n   Use a bonus action to Dash or Disengage or gain advantage on concentration saves before start of next turn.",
            action : [["bonus action", "Dash or Disengage or Concentration advantage"]]
        },
        "extra attack" : {
            name: "Extra Attack",
            source: ["SSH", 0],
            minlevel: 5,
            description: "\n   Attack twice when taking the Attack action. You can cast one of your cantrips (casting time of one action) in place of one attack."
        },
        "agile reflexes" : {
            name: "Agile Reflexes",
            source: ["SSH", 0],
            minlevel: 6,
            description: "\n   Gain proficiency in Dexterity saving throws (or Strength if already prof). Become immune to effects of your own spells.",
			saves : ["Dex"],
        },
        "spellsight" : {
            name: "Spellsight",
            source: ["SSH", 0],
            minlevel: 9,
            description: "\n   Concentration: detect magic and see invisible entities within 30 feet for one minute. While active, touch an object to cast identify on it.",
            recovery: "short rest",
            action : [["action", "Spell Sight"]],
            usages: 1
        },
        "arcane slip" : {
            name: "Arcane Slip",
            source: ["SSH", 0],
            minlevel: 10,
            description: "\n   Teleport to unoccupied space within 30 feet before or after using Spellstrike."
        },
        "swift enchantment" : {
            name: "Swift Enchantment",
            source: ["SSH", 0],
            minlevel: 14,
            description: "\n   Cast a spell with a casting time of one action as a bonus action once per short or long rest.",
            recovery: "short rest",
            usages: 1,
            action : [["bonus action", "Swift Enchantment"]]
        },
        "improved spellstrike" : {
            name: "Improved Spellstrike",
            source: ["SSH", 0],
            minlevel: 18,
            description: "\n   Ignore limitations of Spellstrike and use any spell with it."
        },
        "arcane ascendancy" : {
            name: "Arcane Ascendancy",
            source: ["SSH", 0],
            minlevel: 20,
            description: "\n   Increase Intelligence and Dexterity scores by two. Deal 1d10 extra damage with Spellstrike of spell damage type (Force if none).",
            scores: [0, 2, 0, 2, 0, 0],
		    scoresMaximum: [0, 25, 0, 25, 0, 0],
        }
    }
};

// Add Eldritch Orders as subclasses
AddSubClass("spellsword", "arcane rager", {
    regExpSearch: /arcane rager/i,
    subname: "Arcane Rager",
    source: ["SSH", 0],
    features: {
        "subclassfeature3": {
            name: "Arcane Rage",
            source: ["SSH", 0],
            minlevel: 3,
            description: "\n   Enter a state of Arcane Rage, enhancing physical abilities and arcane attacks.",
            action: [["bonus action", "Arcane Rage (start/end)"]],
            usages: 2,
            recovery: "long rest",
            spellcastingBonus : [{
                spellcastingAbility : 4,
                name : "Arcane Rager",
                spellcastingExtra : ["longstrider", "earth tremor", "mirror image", "aganazzar's scorcher", "blink", "tidal wave", "dimension door", "fire shield", "flame strike", "steel wind strike"]
            }],
            dmgres : [["Bludgeoning", "Bludgeon. (in rage)"], ["Piercing", "Piercing (in rage)"], ["Slashing", "Slashing (in rage)"]],
			savetxt : { text : ["Adv. on Str saves in rage"] },
            weaponProfs : [false, true],
            calcChanges : {
                atkCalc : [
                    function (fields, v, output) {
                        if (v.isMeleeWeapon && (fields.Mod === 1 || fields.Mod === 2) && classes.known.spellsword && classes.known.spellsword.level && /\barcane rage\b/i.test(v.WeaponTextName)) {
                            output.extraDmg += 2;
                        }
                    },
                    "If I include the phrase 'Arcane Rage' in a melee weapon's name that uses Strength or Dexterity, the calculation will add my Rage's bonus damage to it. Be aware that if the weapon is used to make a ranged attack, the rage bonus damage shouldn't be added (eg when using a thrown weapon)."
                ]
            },
            armorOptions: [{
				regExpSearch: /justToAddToDropDownAndEffectWildShape/,
				name: "Unarmored Defense (INT)",
				source: [["PHB2024", 51]],
				ac: "10+Int",
				affectsWildShape: true}],
        },
        "subclassfeature7": {
            name: "Mystic Fury",
            source: ["SSH", 0],
            minlevel: 7,
            description: "\n   While raging, expend a spell slot to deal extra damage with melee attacks.",
            additional: "1d6 per spell level (5d6 max)",
            action: [["bonus action", "Mystic Fury (extra damage)"]]
        },
        "subclassfeature7.1": {
            name: "Eldritch Vitality",
            source: ["SSH", 0],
            minlevel: 7,
            description: "\n   Gain temporary hit points when entering Arcane Rage. Use reaction to expend spell slot to reduce damage (1d8/SL + INT).",
            additional: "1d6 + Spellsword level temp HP",
            recovery: "long rest"
        },
        "subclassfeature11": {
            name: "Arcane Shockwave",
            source: ["SSH", 0],
            minlevel: 11,
            description: "\n   Release a burst of energy, dealing damage and knocking enemies prone. Dex save for 1/2 damage and resist knockdown.",
            additional: "6d6 force damage",
            usages : "Int mod per",
            usagescalc: "event.value = Math.max(1, Number(What('Int Mod')));",
            recovery: "long rest",
            action: [["action", " (Arcane Shockwave)"]]
        },
        "subclassfeature15": {
            name: "Arcane Resilience",
            source: ["SSH", 0],
            minlevel: 15,
            description: "\n   When drop to 0 hp, consume spell slot and regain hit points equal to Spell slot + Spell Sword level",
            usages : "Int mod per ",
            usagescalc: "event.value = Math.max(1, Number(What('Int Mod')));",
            recovery: "short rest"
        }
    }
});

AddSubClass("spellsword", "armored battlemage", {
    regExpSearch: /armored battlemage/i,
    subname: "Armored Battlemage",
    source: ["SSH", 0],
    features: {
        "subclassfeature3": {
            name: "Spellbound Armor",
            source: ["SSH", 0],
            minlevel: 3,
            description: "\n   Gain proficiency with heavy armor. While wearing armor, gain a +1 bonus to AC. Use Dexterity instead of Strength for heavy armor requirements, ignore speed reduction.",
            armorProfs: [false, false, true, false],
            armorOptions : [{
                regExpSearch : /Spellbound/,
                name : "Spellbound Armor Bonus",
                source : ["SSH", 0],
                ac : "1",
                selectNow : true
            }],
            spellcastingExtra : ["absorb elements", "color spray", "locate object", "scorching ray", "enemies abound", "glyph of warding", "banishment", "freedom of movement", "animate objects", "destructive wave"]
        },
        "subclassfeature3.1": {
            name: "Protective Spellstrike",
            source: ["SSH", 0],
            minlevel: 3,
            description: "\n   When you hit a creature with Spellstrike, it has disadvantage on attack rolls against anyone but you until the start of your next turn. Allies have resistance to its attack damage.",
        },
        "subclassfeature7": {
            name: "Arcane Repulsion",
            source: ["SSH", 0],
            minlevel: 7,
            description: "\n   As an action, push or pull all creatures within 30 feet. Strength save or be moved 15 feet and take 3d8 force damage and Dazed. Half damage and no movement on success.",
            usages: 1,
            recovery: "short rest",
            action: [["action", " (Push/Pull)"]]
        },
        "subclassfeature7.1": {
            name: "Eldritch Bulwark",
            source: ["SSH", 0],
            minlevel: 7,
            description: "\n   As a bonus action, consume a spell slot to gain AC bonus equal to the spell level for 1 minute. Gain resistance to that spell's damage type for 1 minute.",
            action: [["bonus action", "(AC Bonus/resistance)"]],
        },
        "subclassfeature11": {
            name: "Arcane Aegis",
            source: ["SSH", 0],
            minlevel: 11,
            description: "\n   Cast Shield as a reaction without expending a spell slot. Gain +2 bonus to saving throws if cast on self.",
            usages : "Int mod per",
            usagescalc: "event.value = Math.max(1, Number(What('Int Mod')));",
            recovery : "long rest",
            action : [["reaction", "(Shield)"]]
        },
        "subclassfeature15": {
            name: "Fortress of Will",
            source: ["SSH", 0],
            minlevel: 15,
            description: "\n   Create an aura of resilience for 1 minute. You and allies within 30 feet have advantage on all saving throws.",
            usages : 1,
            recovery : "long rest",
            action : [["action", " (Fortress of Will)"]]
        }
    }
});
AddSubClass("spellsword", "duskblade", {
    regExpSearch: /duskblade/i,
    subname: "Duskblade",
    source: ["SSH", 0],
    features: {
        "subclassfeature3": {
            name: "Eyes of the Night",
            source: ["SSH", 0],
            minlevel: 3,
            description: "\n   Gain darkvision out to a range of 60 feet. Become proficient in Stealth, or double proficiency if already proficient.",
            vision: [["Darkvision", "fixed 30"], ["Darkvision", "+30"]],
            skills: [["Stealth", "only if not already proficient"]],
            skillstxt : "Proficiency in Stealth; double proficiency if already proficient",
            spellcastingExtra : ["bane", "ray of sickness", "darkness", "pass without trace", "hunger of hadar", "vampiric touch", "greater invisibility", "shadow moil", "cloudkill", "dominate person"]
        },
        "subclassfeature3.1": {
            name: "Shadowblade Mastery",
            source: ["SSH", 0],
            minlevel: 3,
            description: "\n   Cast shadow blade at will as a 2nd-level spell without expending a spell slot. At level 15, cast it as a 3rd-level spell.",
            spellcastingBonus: [{
                name: "Shadow Blade",
                spells: ["shadow blade"],
                selection: ["shadow blade"],
                times : 1,
                firstCol : "atwill"
            }]
        },
        "subclassfeature7": {
            name: "Cloak of Shadows",
            source: ["SSH", 0],
            minlevel: 7,
            description: "\n   Use reaction to become invisible when targeted by an attack, imposing disadvantage on the attack roll. Remain invisible until start of next turn and teleport up to 30 feet.",
            usages : "Int mod per",
            usagescalc: "event.value = Math.max(1, Number(What('Int Mod')));",
            recovery : "long rest",
            action : [["reaction", " (Cloak of Shadows)"]]
        },
        "subclassfeature7.1": {
            name: "Silent Movement",
            source: ["SSH", 0],
            minlevel: 7,
            description: "\n   In dim light or darkness, gain advantage on Dexterity (Stealth) checks and move at full speed silently."
        },
        "subclassfeature11": {
            name: "Umbral Strike",
            source: ["SSH", 0],
            minlevel: 11,
            description: "\n   Enhance Spellstrike by making weapon attack first. If hit, target has disadvantage on saving throw against the spell. Critical hit causes automatic failure on save. If miss, don't consume usage.",
            usages : 1,
            recovery : "long rest"
        },
        "subclassfeature15": {
            name: "Shadowform",
            source: ["SSH", 0],
            minlevel: 15,
            description: "\n   Use bonus action to become a living shadow for 1 minute, gaining resistance to all damage and moving through creatures/objects as difficult terrain. Creatures within 30 feet must make a constitution save or be blinded until start of next turn. 1d10 force damage if end turn inside an object.",
            usages : 1,
            recovery : "short rest",
            action : [["bonus action", " (Shadowform)"]]
        }
    }
});
AddSubClass("spellsword", "eldritch archer", {
    regExpSearch: /eldritch archer/i,
    subname: "Eldritch Archer",
    source: ["SSH", 0],
    features: {
        "subclassfeature3": {
            name: "Martial Ranged Weapons Proficiency",
            source: ["SSH", 0],
            minlevel: 3,
            description: "\n   Gain proficiency with all martial ranged weapons. Use ranged weapons as a spellcasting focus for spellsword spells.",
            weaponProfs: [false, true],
            spellcastingExtra : ["faerie fire", "ensnaring strike", "find trap", "melf's acid arrow", "conjure barrage", "lightning bolt", "grasping vine", "storm sphere", "conjure volley", "swift quiver"]
        },
        "subclassfeature3.1": {
            name: "Ranged Spellstrike",
            source: ["SSH", 0],
            minlevel: 3,
            description: "\n   Use Spellstrike with ranged and thrown weapons, without needing a free hand. Spells requiring ranged attacks use their normal range. AOE spells must have a line originating from you or it cannot be used with Spellstrike. Cannot cast melee spell attacks while using Ranged Spellstrike.",
        },
        "subclassfeature3.2": {
            name: "Fighting Style",
            source: ["SSH", 0],
            minlevel: 3,
            description: "\n   Choose a Fighting Style:\n   \u2022 Archery: +2 bonus to attack rolls with ranged weapons.\n   \u2022 Thrown Weapon: Draw thrown weapons as part of the attack, +2 bonus to damage on hit.",
            choices: ["Archery", "Thrown Weapon"],
            "archery": FightingStyles.archery,
            "thrown weapon": FightingStyles.thrown_weapon
        },
        "subclassfeature7": {
            name: "Phasing Shot",
            source: ["SSH", 0],
            minlevel: 7,
            description: "\n   Spellstrike ranged weapon attacks ignore half and three-quarters cover. Gain proficiency in Perception or double proficiency if already proficient.",
            vision : [["See through cover", 0]],
            skills : [["Perception", "only if not already proficient"]],
            skillstxt : "Proficiency in Perception; double proficiency if already proficient"
        },
        "subclassfeature7.1": {
            name: "Enchanted Quiver",
            source: ["SSH", 0],
            minlevel: 7,
            description: "\n   Enchant a quiver to produce unlimited non-magical ammunition or thrown weapons for one day. Enhance lasts one day.",
            usages : 1,
            recovery : "long rest",
            action : [["action", " (Enchant Quiver)"]]
        },
        "subclassfeature11": {
            name: "Eldritch Redirection",
            source: ["SSH", 0],
            minlevel: 11,
            description: "\n   When missing a ranged attack, use reaction to redirect it to another target within 60 feet. Make a new attack roll against the second target.",
            usages : "Int mod per",
            usagescalc : "event.value = Math.max(1, Number(What('Int Mod')));",
            recovery : "long rest",
            action : [["reaction", " (Redirect Shot)"]]
        },
        "subclassfeature11.1": {
            name: "Arcane Penetration",
            source: ["SSH", 0],
            minlevel: 11,
            description: "\n   When hit with a ranged attack using Spellstrike, target has disadvantage on saving throws against next spell before end of you next turn."
        },
        "subclassfeature15": {
            name: "Piercing Spell",
            source: ["SSH", 0],
            minlevel: 15,
            description: "\n   Cast a spell requiring a ranged attack as a Piercing Spell in a line (normal range from self, 5 ft wide). Each creature in line makes Dexterity save; fail takes full damage and effects, success takes half.",
            usages : 1,
            recovery : "long rest"
        }
    }
});
AddSubClass("spellsword", "magebane", {
    regExpSearch: /magebane/i,
    subname: "Magebane",
    source: ["SSH", 0],
    features: {
        "subclassfeature3": {
            name: "Magic Knowledge",
            source: ["SSH", 0],
            minlevel: 3,
            description: "\n   Become proficient in two of the following skills: Arcana, History, Nature, or Religion. Double proficiency bonus for checks using these skills.",
            skillstxt: "Proficiency in two of Arcana, History, Nature, or Religion; double proficiency bonus",
            spellcastingExtra : ["burning hands", "command", "detect thoughts", "silence", "counterspell", "dispel magic", "confusion", "storm sphere", "legend lore", "wall of force"]
        },
        "subclassfeature3.1": {
            name: "Magebane Strike",
            source: ["SSH", 0],
            minlevel: 3,
            description: "\n   Use reaction to make an Attack of Opportunity on a spellcaster within melee range when they cast a spell.",
            action: [["reaction", " (AoP spell caster)"]]
        },
        "subclassfeature7": {
            name: "Dispelling Maneuver",
            source: ["SSH", 0],
            minlevel: 7,
            description: "\n   When hitting a target under a spell effect with Spellstrike, dispel spells of 3rd level or lower automatically. Higher-level spells: make a spellcasting ability check against DC 10 + spell's level.",
            usages: 1,
            recovery: "short rest"
        },
        "subclassfeature11": {
            name: "Magebane's Presence",
            source: ["SSH", 0],
            minlevel: 11,
            description: "\n   Allies within 15 feet gain a bonus to saving throws against spells equal to your Intelligence modifier. You must be conscious to grant this bonus.",
            savetxt : {text : "I and visible allies add intelligence modifier against spells"}
        },
        "subclassfeature11.1": {
            name: "Arcane Resilience",
            source: ["SSH", 0],
            minlevel: 11,
            description: "\n   End one spell effect on yourself at the start of your turn without taking an action.",
            usages: 1,
            recovery: "long rest"
        },
        "subclassfeature15": {
            name: "Improved Magebane Strike",
            source: ["SSH", 0],
            minlevel: 15,
            description: "\n   As a reaction, move up to half your speed towards a creature casting a spell within 30 feet. If within melee range, use Magebane Strike as part of reaction. If you hit and the spell is of 5th level or lower, the caster must make a Constitution save or the spell fails."
        }
    }
});

SpellsList["arcane chains"] = {
    name: "Arcane Chains",
    classes: ["spellsword"],
    source: ["SSH", 0],
    level: 4,
    school: "Conj",
    time: "1 a",
    range: "60 ft",
    components: "V, S, M",
    compMaterial: "a length of chain",
    duration: "Conc, up to 1 min",
    description: "Ranged spell attack; 5d10 force dmg; restrained; Str/Dex save to break.",
    descriptionFull: "You conjure spectral chains that bind a creature within range. Make a ranged spell attack against the target. On a hit, the target takes 5d10 force damage and is restrained for the duration. On its turn, the target can use its action to make a Strength or Dexterity check (its choice) against your spell save DC, breaking free on a success.",
    atHigherLevels: "When you cast this spell using a spell slot of 5th level or higher, the damage increases by 1d10 for each slot level above 4th."
};

SpellsList["arcane javelin"] = {
    name: "Arcane Javelin",
    classes: ["spellsword"],
    source: ["SSH", 0],
    level: 2,
    school: "Evoc",
    time: "1 a",
    range: "60 ft",
    components: "V, S",
    duration: "Instantaneous",
    description: "Ranged spell attack; 5d6 force dmg; nearby creatures Dex save or 2d6 force dmg.",
    descriptionFull: "You materialize and throw a javelin infused with arcane energy. Make a ranged spell attack against a target within range. On a hit, the target takes 5d6 force damage, and creatures within 5 feet of the target, other than you, must make a Dexterity saving throw or take 2d6 force damage.",
    atHigherLevels: "When you cast this spell using a spell slot of 3rd level or higher, the primary damage increases by 1d6 for each slot level above 2nd, and the secondary damage increases by 1d6 for each slot level above 2nd."
};

SpellsList["arcane needle"] = {
    name: "Arcane Needle",
    classes: ["spellsword"],
    source: ["SSH", 0],
    level: 1,
    school: "Evoc",
    time: "1 a",
    range: "30 ft",
    components: "V, S, M",
    compMaterial: "a silver needle",
    duration: "Instantaneous",
    description: "Ranged spell attack; 2d6 piercing dmg; Con save or dazed until end of next turn.",
    descriptionFull: "You conjure a thin, shimmering needle of magical energy and hurl it at a target within range. Make a ranged spell attack against the target. On a hit, the target takes 2d6 piercing damage and must succeed on a Constitution saving throw or become dazed until the end of your next turn. A dazed creature can only do one of the following things on their turn: move, use an action, or use a bonus action.",
    atHigherLevels: "When you cast this spell using a spell slot of 2nd level or higher, the damage increases by 1d6 for each slot level above 1st."
};

SpellsList["blazing ring"] = {
    name: "Blazing Ring",
    classes: ["spellsword"],
    source: ["SSH", 0],
    level: 1,
    school: "Conj",
    time: "1 a",
    range: "Self",
    components: "V, S, M",
    compMaterial: "a small piece of sulfur",
    duration: "Conc, up to 1 min",
    description: "15-ft radius ring of fire; Dex save or 1d8 fire dmg; dmg on entry.",
    descriptionFull: "A ring of flames erupts from the ground, forming a ringed wall of 15 feet radius, 10 feet high, and 1 foot thick centered on you. When the ring appears, each creature within its area must make a Dexterity saving throw. On a failed save, a creature takes 1d8 fire damage, or half as much damage on a successful save. Any creature that passes through the ring for the first time on a turn takes 1d8 fire damage.",
    atHigherLevels: "When you cast this spell using a spell slot of 2nd level or higher, the damage of the ring of fire increases by 1d8 for each slot level above 1st."
};

SpellsList["chaotic blastwave"] = {
    name: "Chaotic Blastwave",
    classes: ["spellsword"],
    source: ["SSH", 0],
    level: 4,
    school: "Evoc",
    time: "1 a",
    range: "Self (15-ft cone)",
    components: "V, S, M",
    compMaterial: "a shard of eldritch stone",
    duration: "Instantaneous",
    description: "15-ft cone; Wis save or 8d6 arcane dmg + chaotic effect.",
    descriptionFull: "You project a powerful blastwave of eldritch energy in a 15-foot cone. Each creature in that area must make a Wisdom saving throw. On a failed save, a creature takes 8d6 arcane damage and is subjected to a chaotic effect determined by rolling a d12. On a successful save, a creature takes half as much damage and isn't affected by the additional effect.",
    atHigherLevels: "When you cast this spell using a spell slot of 5th level or higher, the damage increases by 1d6 for each slot level above 4th."
};

SpellsList["chthonic fissure"] = {
    name: "Chthonic Fissure",
    classes: ["spellsword"],
    source: ["SSH", 0],
    level: 5,
    school: "Necro",
    time: "1 a",
    range: "Self (60-ft line)",
    components: "V, S, M",
    compMaterial: "a shard of volcanic rock",
    duration: "Conc, up to 1 min",
    description: "60-ft line; Dex save or 6d6 fire dmg; necrotic aura restrains.",
    descriptionFull: "You slam your hand into the ground, causing a fissure of chthonic fire to erupt in a 60-foot line that is 5 feet wide. Each creature in that line must make a Dexterity saving throw. On a failed save, a creature takes 6d6 fire damage, or half as much on a successful save. For the duration, the fissure remains open, emitting dark, necrotic energy. Any creature within 10 feet of the fissure at the start of its turn or that enters the area for the first time on a turn must make a Dexterity saving throw. On a failed save, the creature is restrained and takes 2d6 necrotic damage. On a successful save, the creature takes half as much damage and isn't restrained.",
    atHigherLevels: "When you cast this spell using a spell slot of 6th level or higher, the initial fire damage increases by 1d6 for each slot level above 5th."
};

SpellsList["ethereal strike"] = {
    name: "Ethereal Strike",
    classes: ["spellsword"],
    source: ["SSH", 0],
    level: 5,
    school: "Conj",
    time: "1 a",
    range: "Touch",
    components: "V, S, M",
    compMaterial: "a pinch of fine sand",
    duration: "Conc, up to 1 min",
    description: "Melee spell attack; 5d10 force dmg; Cha save or banished to Ethereal Plane.",
    descriptionFull: "You channel otherworldly energy through your hand and strike a creature within touch range. Make a melee spell attack against the target. On a hit, the target takes 5d10 force damage and must succeed on a Charisma saving throw or be banished to the Ethereal Plane. While there, the target is incapacitated. It remains there until the spell ends, at which point the target reappears in the space it left or in the nearest unoccupied space if that space is occupied.",
    atHigherLevels: "When you cast this spell using a spell slot of 6th level or higher, the damage increases by 1d10 for each slot level above 5th."
};

SpellsList["flame thrust"] = {
    name: "Flame Thrust",
    classes: ["spellsword"],
    source: ["SSH", 0],
    level: 1,
    school: "Evoc",
    time: "1 a",
    range: "Touch",
    components: "V, S, M",
    compMaterial: "a piece of charcoal",
    duration: "Instantaneous",
    description: "Melee spell attack; 2d8 fire dmg; ignites target; 1d4 fire dmg at start of each turn.",
    descriptionFull: "Your hand ignites with fiery energy as you thrust it toward your target. Make a melee spell attack against a creature within touch range. On a hit, the target takes 2d8 fire damage and is set ablaze. If the target is a creature or a flammable object, it ignites. Until a creature takes an action to douse the fire, the target takes 1d4 fire damage at the start of each of its turns.",
    atHigherLevels: "When you cast this spell using a spell slot of 2nd level or higher, the initial fire damage increases by 1d6 for each slot level above 1st."
};

SpellsList["frost lance"] = {
    name: "Frost Lance",
    classes: ["spellsword"],
    source: ["SSH", 0],
    level: 3,
    school: "Evoc",
    time: "1 a",
    range: "120 ft",
    components: "V, S, M",
    compMaterial: "a piece of frost-covered iron",
    duration: "Instantaneous",
    description: "Ranged spell attack; 5d6 cold dmg; Con save or paralyzed until end of next turn.",
    descriptionFull: "You conjure a lance of pure ice and hurl it at a target within range. Make a ranged spell attack against the target. On a hit, the target takes 5d6 cold damage and must make a Constitution saving throw. On a failed save, the target is frozen, counting as paralyzed until the end of its next turn.",
    atHigherLevels: "When you cast this spell using a spell slot of 4th level or higher, the damage increases by 2d6 for each slot level above 3rd."
};

SpellsList["frostbite beam"] = {
    name: "Frostbite Beam",
    classes: ["spellsword"],
    source: ["SSH", 0],
    level: 1,
    school: "Evoc",
    time: "1 a",
    range: "Self (30-ft line)",
    components: "V, S, M",
    compMaterial: "a mirror shard",
    duration: "Instantaneous",
    description: "30-ft line; Dex save or 3d6 cold dmg; disadv on next weapon attack.",
    descriptionFull: "A concentrated beam of frost emanates from your hand in a line 30 feet long and 5 feet wide in a direction you choose. Each creature must succeed on a Dexterity saving throw. On a failed save, a creature takes 3d6 cold damage and has disadvantage on the next weapon attack roll it makes before the end of its next turn. On a successful save, the creature takes half as much damage and suffers no other effects.",
    atHigherLevels: "When you cast this spell using a spell slot of 2nd level or higher, the damage increases by 1d6 for each slot level above 1st."
};

SpellsList["glacial shroud"] = {
    name: "Glacial Shroud",
    classes: ["spellsword"],
    source: ["SSH", 0],
    level: 2,
    school: "Conj",
    time: "1 a",
    range: "Self (10-ft radius)",
    components: "V, S, M",
    compMaterial: "a pinch of frost",
    duration: "Conc, up to 1 min",
    description: "10-ft radius; Con save or 2d6 cold dmg; speed reduced by 20 ft.",
    descriptionFull: "A chilling shroud of frost and wind surrounds you in a 10-foot radius, moving with you and centered on you for the spell's duration. Any creature, other than you, that enters the area for the first time on a turn or starts its turn there must succeed on a Constitution saving throw. On a failed save, the creature takes 2d6 cold damage and its speed is reduced by 20 feet until the start of its next turn. On a successful save, the creature takes half damage and its speed is not reduced.",
    atHigherLevels: "When you cast this spell using a spell slot of 3rd level or higher, the cold damage increases by 1d8 and the speed reduction increases by 10 feet for each slot level above 2nd."
};

SpellsList["lightning arc"] = {
    name: "Lightning Arc",
    classes: ["spellsword"],
    source: ["SSH", 0],
    level: 4,
    school: "Evoc",
    time: "1 a",
    range: "Touch",
    components: "V, S, M",
    compMaterial: "a piece of copper wire",
    duration: "Instantaneous",
    description: "Melee spell attack; 4d10 lightning dmg; arcs to up to three targets within 10 ft.",
    descriptionFull: "You channel a powerful surge of lightning through your hand, striking a creature within touch range. Make a melee spell attack against the target. On a hit, the target takes 4d10 lightning damage. The lightning then arcs to up to three other creatures of your choice within 10 feet of the first target. Each of these additional targets must make a Dexterity saving throw. On a failed save, they take 4d6 lightning damage, or half as much on a successful save.",
    atHigherLevels:"When you cast this spell using a spell slot of 5th level or higher, the initial damage increases by 1d10 and the secondary damage increases by 1d6 for each slot level above 4th."
};

SpellsList["phantom strike"] = {
   name : "Phantom Strike", 
   classes : ["spellsword"], 
   source : ["SSH",0], 
   level : 2,
   school : "Illus", 
   time : "1 a", 
   range : "Touch", 
   components : "V,S,M", 
   compMaterial : "a shard of obsidian", 
   duration : "Instantaneous", 
   description : "Melee spell attack, 2d10 psychic dmg,Int save or use reaction to move away.",
   descriptionFull : "Your hand becomes insubstantial, allowing you to strike through physical barriers. Make a melee spell attack against a creature within touch range. On hit, target takes 2d10 psychic damage and must succeed on an Intelligence saving throw. On failed save, target uses reaction to move away from you.",
   atHigherLevels :
      "When you cast this spell using a spell slot of 3rd level or higher, the psychic damage increases by 1d10 for each slot level above 2nd."
};

SpellsList["poisonous wave"] = {
   name : "Poisonous Wave",
   classes : ["spellsword"],
   source : ["SSH",0],
   level : "2",
   school : "Conj",
   time : "1 action",
   range : "Self (30-ft cone)",
   components : "V,S,M",
   compMaterial : "a snake fang",
   duration : "Instantaneous",
   description : "30-ft cone; Con save or 3d8 poison dmg; poisoned until end of next turn.",
   descriptionFull : "You extend your hand and release a wave of toxic gas in a 30-foot cone. Each creature in that area must make a Constitution saving throw. On a failed save, a creature takes 3d8 poison damage and is poisoned until the end of your next turn. On a successful save, a creature takes half as much damage and isn't poisoned.",
   atHigherLevels : "When you cast this spell using a spell slot of 3rd level or higher, the damage increases by 1d8 for each slot level above 2nd."
};

SpellsList["shadowblight claw"] = {
   name : "Shadowblight Claw",
   classes : ["spellsword"],
   source : ["SSH",0],
   level : "3",
   school : "Conj",
   time : "1 action",
   range : "Touch",
   components : "V,S,M",
   compMaterial : "a blackened bone",
   duration : "Instantaneous",
   description : "Melee spell attack; 4d10 necrotic dmg; Con save or blinded until end of next turn.",
   descriptionFull : "Your hand transforms into a claw infused with negative energy drawn from the Shadowfell. Make a melee spell attack against a target within touch range. On a hit, the target takes 4d10 necrotic damage and must make a Constitution saving throw. On a failed save, the target is blinded until the end of your next turn.",
   atHigherLevels : "When you cast this spell using a spell slot of 4th level or higher, the necrotic damage increases by 1d10 for each slot level above 3rd."
};

SpellsList["sonic burst"] = {
     name:"Sonic Burst", 
     classes:["spellsword"], 
     source:["SSH",0], 
     level:"3", 
     school:"Conj", 
     time:"1 action", 
     range:"Self (30-ft cone)", 
     components:"V,S", 
     duration:"Instantaneous", 
     description: "30-ft cone; Con save or take 4d6 thunder dmg; fall prone; deafened for one minute.",
     descriptionFull: "You extend your palm forward and release a powerful sonic wave that shoots forth from your hand, emitting a boom audible out to three hundred feet. All creatures in a thirty-foot cone must succeed on a Constitution saving throw or take 4d6 thunder damage, fall prone, and be deafened for one minute. On a successful save, creatures take half damage and are not knocked prone or deafened. A creature can repeat the saving throw at the end of each of its turns, ending the deafened effect on a success.",
     atHigherLevels: "When you cast this spell using a spell slot of 4th level or higher, the damage increases by 1d6 for each slot level above 3rd."
};
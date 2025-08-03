/* -WHAT IS THIS?-
This file adds optional content to "MPMB's Character Record Sheet" for the LaserLlama Alternate Rogue.
Import with "Add Extra Materials" bookmark.

-INFORMATION-
Subject: Class
Effect: Implements the Alternate Rogue class v2.2.1 by LaserLlama (https://www.gmbinder.com/share/-N8o6KduyOA2qhUGBQqA)
Code by: [Your Name]
Date: 2025-07-19
*/
// to do: fix prereq evals for skills. fix prereqs for class level                 
// example: prereqeval: function (v) { return v.skillProfs.indexOf("Arcana") == -1; },

var iFileName = "LaserLlama Alternate Rogue.js";
RequiredSheetVersion(13);

SourceList["LL:AR"] = {
    name: "LaserLlama - Alternate Rogue",
    abbreviation: "LL:AR",
    abbreviationSpellsheet: "AR",
    group: "LaserLlama",
    date: "2025/03/16",
    source: "https://www.gmbinder.com/share/-N8o6KduyOA2qhUGBQqA"
};

ClassList["rogue(laserllama)"] = {
    regExpSearch: /^(?=.*rogue)(?=.*alt|alternate).*$/i,
    name: "Rogue(laserllama)",
    source: ["LL:AR", 0],
    primaryAbility: "Dexterity",
    die: 8,
    improvements: [0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 5, 5],
    saves: ["Dex", "Int"],
    skillstxt: { primary: "Choose 4 from Acrobatics, Athletics, Deception, Insight, Intimidation, Investigation, Perception, Performance, Persuasion, Sleight of Hand, and Stealth" },
    armorProfs: { primary: [true, false, false, false] },
    weaponProfs: { primary: [true, true] },
    toolProfs: { primary: [["One tool set", 1]] },
    equipment: "Rogue starting equipment:\n- (a) a rapier, (b) a scimitar, or (c) a shortsword\n- (a) a shortbow and 20 arrows, or (b) a shortsword\n- (a) a burglar's pack or (b) a dungeoneer's pack\n- Leather armor, two daggers, and a tool set of your choice",
    subclasses: ["Roguish Archetype", []],
    attacks: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    features: {
        "expertise": {
            name: "Expertise",
            source: ["LL:AR", 0],
            minlevel: 1,
            description: desc([
                "Choose two skills or tools; double proficiency bonus for them. Choose two more (one at 6th, 10th, 15th, 18th levels)."
            ])
        },
        "sneak attack": {
            name: "Sneak Attack",
            source: ["LL:AR", 0],
            minlevel: 1,
            description: desc([
                "Once per turn, when I hit with a finesse or ranged weapon and have advantage OR an ally is within 5 ft and I don't have disadvantage, I deal bonus damage. Increases with Rogue level."
            ]),
            additional: levels.map(function (n) {
                return ((Math.floor((n + 1) / 2)) + "d6"); // Matches Rogue table increments
            })
        },
        "thieves' cant": {
            name: "Thieves' Cant",
            source: ["LL:AR", 0],
            minlevel: 1,
            description: desc([
                "Learn Thieves' Cant for secret messages. Alternatively, learn two extra languages."
            ])
        },
        "cunning action": {
            name: "Cunning Action",
            source: ["LL:AR", 0],
            minlevel: 2,
            description: desc([
                "Bonus action: Dash, Disengage, Hide, or Use an Object. At 11th level: can take second bonus action (but not the same action twice)."
            ])
        },
        "devious exploits": {
            name: "Devious Exploits",
            source: ["LL:AR", 0],
            minlevel: 2,
            description: desc([
                "Access to Devious Exploits and Exploit Dice. Track Exploits Known, Exploit Dice, and Exploit Die Size per Rogue level."
            ])
            // See extended exploit list below
        },
        "roguish archetype": {
            name: "Roguish Archetype",
            source: ["LL:AR", 0],
            minlevel: 3,
            description: desc([
                "Choose a Roguish Archetype that shapes my rogue features."
            ])
        },
        "ability score improvement": {
            name: "Ability Score Improvement",
            source: ["LL:AR", 0],
            minlevel: 4,
            description: desc([
                "Increase one ability score by 2, or two ability scores by 1 (no max > 20). More at 8th, 12th, 16th, 19th."
            ])
        },
        "cunning strike": {
            name: "Cunning Strike",
            source: ["LL:AR", 0],
            minlevel: 5,
            description: desc([
                "When I Sneak Attack, forgo some d6s to use a Devious Exploit without using Exploit Dice (see PDF for details)."
            ])
        },
        "uncanny dodge": {
            name: "Uncanny Dodge",
            source: ["LL:AR", 0],
            minlevel: 6,
            description: desc([
                "Use my reaction to halve the damage from an attack that I can see when it hits me.",
                "At 14th level, I can also move up to half my speed (no opportunity attacks) as part of this reaction."
            ]),
            action: ["reaction", " (halves damage from attack)"]
        },
        "evasion": {
            name: "Evasion",
            source: ["LL:AR", 0],
            minlevel: 9,
            description: desc([
                "If subjected to an effect that allows a Dexterity save for half damage (e.g., fireball):",
                "- Success: take no damage.",
                "- Failure: take only half damage."
            ])
        },
        "reliable talent": {
            name: "Reliable Talent",
            source: ["LL:AR", 0],
            minlevel: 10,
            description: desc([
                "When I make an ability check that adds my proficiency bonus or an Exploit Die,",
                "I treat a roll of 9 or lower on the d20 as a 10."
            ])
        },
        "ruthless": {
            name: "Ruthless",
            source: ["LL:AR", 0],
            minlevel: 11,
            description: desc([
                "When I use a Devious Exploit as part of an attack that also includes Sneak Attack,",
                "I can reduce my Sneak Attack bonus by 2d6 to force the target to make their Exploit save at disadvantage.",
                "I can use this and Cunning Strike together, but penalty is cumulative."
            ])
        },
        "blindsense": {
            name: "Blindsense",
            source: ["LL:AR", 0],
            minlevel: 14,
            description: desc([
                "I am aware of the location of any hidden or invisible creature within 10 ft if I can hear.",
                "Radius increases to 20 ft at 17th level and 30 ft at 20th level."
            ]),
            additional: levels.map(function (n) {
                if (n < 17) return "10 ft";
                if (n < 20) return "20 ft";
                return "30 ft";
            })
        },
        "slippery mind": {
            name: "Slippery Mind",
            source: ["LL:AR", 0],
            minlevel: 15,
            description: desc([
                "Whenever I make an Intelligence, Wisdom, or Charisma saving throw,",
                "I gain a bonus to my roll equal to my Exploit Die."
            ])
        },
        "elusive": {
            name: "Elusive",
            source: ["LL:AR", 0],
            minlevel: 18,
            description: desc([
                "No attack roll can have advantage against me unless I am Incapacitated."
            ])
        },
        "stroke of luck": {
            name: "Stroke of Luck",
            source: ["LL:AR", 0],
            minlevel: 20,
            description: desc([
                "When I roll a d20 for an ability check, attack roll, or saving throw,",
                "I can treat the result as a 20, after knowing the result but before effects occur.",
                "I must finish a short or long rest before using this feature again."
            ]),
            usages: 1,
            recovery: "short rest"
        }
    },
};
// Add Exploits to the LaserLlama Alternate Rogue
ClassList["rogue(laserllama)"].features["exploits"] = {
    name: "Devious Exploits",
    source: ["LL:AR", 0],
    minlevel: 2,
    description: desc([
        "I learn Devious Exploits that enhance my roguish skills",
        "Exploit Dice (see Rogue table) are spent to fuel most Exploits",
        "I can replace an Exploit with another when I gain a rogue level, as long as I meet its prerequisites"
    ]),
    extraname: "Rogue Exploit",
    // How many exploits known per level (ref: Rogue Table in the PDF)
    extratimes: [
        0, // 1st level, can't pick
        2, // 2nd level
        2, // 3rd
        2, // 4th
        3, // 5th
        3, // 6th
        4, // 7th
        4, // 8th
        5, // 9th
        5, // 10th
        6, // 11th
        6, // 12th
        7, // 13th
        7, // 14th
        7, // 15th
        7, // 16th
        8, // 17th
        8, // 18th
        8, // 19th
        8, // 20th
    ],
    extrachoices: [
        // 1st-Degree
        "Aerial Maneuver",
        "Alchemical Adept",
        "Arresting Strike",
        "Commanding Presence",
        "Cunning Instinct",
        "Disarm",
        "Eloquent Speech",
        "Feint",
        "First Aid",
        "Inquisitive Eye",
        "Lightstep",
        "Mechanical Insight",
        "Modify Device",
        "Parry",
        "Precision Strike",
        "Quick Quip",
        "Reliable Skill",
        "Roguish Charm",
        "Rustic Intuition",
        "Scholarly Recall",
        "Subtle Con",
        "Sweeping Strike",
        // 2nd-Degree
        "Alchemical Oil",
        "Blinding Debris",
        "Craft Minor Poison",
        "Crippling Strike",
        "Dirty Hit",
        "Exposing Strike",
        "Glancing Blow",
        "Grasp of Night",
        "Improvised Skill",
        "Soothing Speech",
        "Survey Dungeon",
        "Trick Shot",
        // 3rd-Degree
        "Craft Greater Poison",
        "Forgotten Knowledge",
        "Recruit Informant",
        "Survey Settlement",
        // 4th-Degree
        "Craft Advanced Poison",
        "Expert Focus",
        "Fluid Movements",
        // 5th-Degree
        "Craft Masterwork Poison",
        "Inconceivable Dodge",
        "Trickster's Blessing"
    ],


    "aerial maneuver": {
        name: "Aerial Maneuver",
        description: desc([
            "When falling, can use a reaction and expend an Exploit Die to reduce falling damage by 5×my level and land on my feet."
        ]),
        action: ["reaction", " (falling)"],
        prereqeval: function (v) { return What('Dex') >= 11 && v.skillProfs.indexOf("Acrobatics") == 1; }
    },
    "alchemical adept": {
        name: "Alchemical Adept",
        description: desc([
            "When making a check with alchemist's, herbalism, or poisoner's kit, may expend an Exploit Die and add it to the roll (after rolling)."
        ]),
        toolProfs: ["Alchemist's supplies", "Herbalism kit", "Poisoner's kit"],
        prereqeval: function (v) { return What('Int') >= 11 || What('Wis') >= 11; }
    },
    "arresting strike": {
        name: "Arresting Strike",
        description: desc([
            "On weapon hit, expend an Exploit Die: target Dex save or add die to damage and halve speed until my next turn."
        ])
    },
    "commanding presence": {
        name: "Commanding Presence",
        description: desc([
            "When making Intimidation or Persuasion check, expend Exploit Die and add to roll (after rolling). May use for Str (Intimidation)."
        ]),
        prereqeval: function (v) { return What('Cha') >= 11 || What('Str') >= 11; }
    },
    "cunning instinct": {
        name: "Cunning Instinct",
        description: desc([
            "When making a Perception or Survival check, expend Exploit Die and add to roll (after rolling)."
        ]),
        prereqeval: function (v) { return What('Wis') >= 11; }
    },
    "disarm": {
        name: "Disarm",
        description: desc([
            "On weapon hit, expend Die: target Str save or add die to damage and drop one held item."
        ])
    },
    "eloquent speech": {
        name: "Eloquent Speech",
        description: desc([
            "May use Intelligence in place of Charisma for Deception/Persuasion; when doing so, expend Exploit Die and add to roll."
        ]),
        prereqeval: function (v) { return What('Int') >= 11; }
    },
    "feint": {
        name: "Feint",
        description: desc([
            "Bonus action: expend Exploit Die; force creature within 15 ft to Wis save. On fail, advantage on attacks vs that creature this turn."
        ]),
        action: ["bonus action", ""]
    },
    "first aid": {
        name: "First Aid (Medicine)",
        description: desc([
            "Action: touch willing living creature, expend up to PB Exploit Dice. For each, it regains that many Hit Dice + Con mod (minimum 0)."
        ]),
        action: ["action", ""],
        prereqeval: function (v) { return v.skillProfs.indexOf("Medicine") == 1; }
    },
    "inquisitive eye": {
        name: "Inquisitive Eye",
        description: desc([
            "When making Insight or Investigation, expend Exploit Die and add to roll (after rolling)."
        ]),
        prereqeval: function (v) { return What('Int') >= 11 || What('Wis') >= 11; }
    },
    "lightstep": {
        name: "Lightstep",
        description: desc([
            "When making Acrobatics or Stealth, expend Exploit Die and add to roll (after rolling)."
        ]),
        prereqeval: function (v) { return What('Dex') >= 11; }
    },
    "mechanical insight": {
        name: "Mechanical Insight",
        description: desc([
            "When making check with thieves' or tinker's tools, expend Die and add to roll (after rolling)."
        ]),
        prereqeval: function (v) { return What('Int') >= 11; }
    },
    "modify device": {
        name: "Modify Device",
        description: desc([
            "Spend 1 min and Exploit Die to modify an unlocked/deactivated trap or lock nearby. Raise its DC by 5, or change DC to my Exploit save DC."
        ]),
        toolProfs: ["Thieves' tools", "Tinker's tools"],
        prereqeval: function (v) { return GetProficiencyBonus('Thieves\' tools') > 0 || GetProficiencyBonus('Tinker\'s tools') > 0; }
    },
    "parry": {
        name: "Parry",
        description: desc([
            "When hit by a melee attack while wielding finesse/versatile weapon, use reaction to expend Exploit Die and add die to AC."
        ]),
        prereqeval: function (v) { return What('Dex') >= 11; },
        action: ["reaction", ""]
    },
    "precision strike": {
        name: "Precision Strike",
        description: desc([
            "When making an attack, expend Exploit Die and add die to attack roll (after seeing roll, before result)."
        ]),
        prereqeval: function (v) { return What('Dex') >= 11; }
    },
    "quick quip": {
        name: "Quick Quip",
        description: desc([
            "Expend Exploit Die, tell a joke/quip. Creatures (10 ft, can hear/understand) forget last 10 sec, remember only quip. Immunity to further use for 24 hrs. Immune to Charmed creatures."
        ]),
        prereqeval: function (v) { return What('Int') >= 11 || What('Cha') >= 11; }
    },
    "reliable skill": {
        name: "Reliable Skill",
        description: desc([
            "On skill/tool check with proficiency: if I roll 7 or lower, can expend Die to treat d20 as 8."
        ])
    },
    "roguish charm": {
        name: "Roguish Charm (Persuasion)",
        description: desc([
            "As an action, expend Die, force creature within 10 ft to Wis save, advantage if hostile. On fail, charmed 1 hr (treats me as friend, ends if harmed, then knows it was deceived). One success = immune 24 hrs."
        ]),
        prereqeval: function (v) { return What('Cha') >= 11 && v.skillProfs.indexOf("Persuasion") == 1; },
        action: ["action", ""]
    },
    "rustic intuition": {
        name: "Rustic Intuition",
        description: desc([
            "On Animal Handling, Medicine, Nature, can expend Die and add to roll."
        ]),
        prereqeval: function (v) { return What('Wis') >= 11; }
    },
    "scholarly recall": {
        name: "Scholarly Recall",
        description: desc([
            "On Arcana, History, Religion check, can expend Die and add to roll."
        ]),
        prereqeval: function (v) { return What('Int') >= 11; }
    },
    "subtle con": {
        name: "Subtle Con",
        description: desc([
            "On Deception, Performance, or Sleight of Hand check, can expend Die and add to roll."
        ]),
        prereqeval: function (v) { return What('Dex') >= 11 || What('Cha') >= 11; }
    },
    "sweeping strike": {
        name: "Sweeping Strike",
        description: desc([
            "On melee hit, expend Die. Target Str/Dex save or add die to damage and is knocked prone."
        ])
    },

    // 2nd-Degree Exploits (require 5th+ level)
    "alchemical oil": {
        name: "Alchemical Oil",
        description: desc([
            "5th level, alchemist's supplies proficiency.",
            "As action, expend Die + use alchemist's supplies to craft a vial of acid, cold, fire, poison, or lightning oil.",
            "Oil lasts until end of next long rest; can't regain Die until used.",
            "Use Object: Apply to weapon. For 10 minutes, weapon deals that damage type instead of normal."
        ]),
        prereqeval: function (v) {
            if (!classes.known["rogue(laserllama)"] || classes.known["rogue(laserllama)"].level < 5) return false
        }
    },
    "blinding debris": {
        name: "Blinding Debris",
        description: desc([
            "5th level, Dex 13+.",
            "Bonus action: expend Die; force one creature within 10 ft to make a Con save.",
            "On fail: Blinded until it uses an action to clear its eyes."
        ]),
        prereqeval: function (v) { if (!classes.known["rogue(laserllama)"] || classes.known["rogue(laserllama)"].level < 5 || What('Dex') < 13) return false },
        action: ["bonus action", ""]
    },
    "craft minor poison": {
        name: "Craft Minor Poison",
        description: desc([
            "5th level, poisoner's kit proficiency.",
            "Action: expend Die + use poisoner's kit to craft Minor Poison (potent until end of next long rest, can't regain Die until used).",
            "Use Object: Apply to weapon/ammo. On hit: damage is poison; Con save or Poisoned for 1 min (repeat save at end of each turn)."
        ]),
        prereqeval: function (v) { if (!classes.known["rogue(laserllama)"] || classes.known["rogue(laserllama)"].level < 5) return false },

    },
    "crippling strike": {
        name: "Crippling Strike",
        description: desc([
            "5th level.",
            "On weapon hit: expend Die, force Con save.",
            "Fail: add Die to damage, and target is Blinded, Deafened, or can't speak (your choice) until next turn."
        ]),
        prereqeval: function (v) { if (!classes.known["rogue(laserllama)"] || classes.known["rogue(laserllama)"].level < 5) return false },
    },
    "dirty hit": {
        name: "Dirty Hit",
        description: desc([
            "5th level, Dex 13+.",
            "On melee hit: expend Die, force Con save.",
            "Fail: add Die to damage, target falls prone, can't take reactions until your next turn."
        ]),
        prereqeval: function (v) { if (!classes.known["rogue(laserllama)"] || classes.known["rogue(laserllama)"].level < 5 || what('Dex') < 13) return false },
    },
    "exposing strike": {
        name: "Exposing Strike",
        description: desc([
            "5th level.",
            "On weapon hit: expend Die, weaken target.",
            "First attack against it before your next turn has advantage; if it hits, add Die to damage."
        ]),
        prereqeval: function (v) { if (!classes.known["rogue(laserllama)"] || classes.known["rogue(laserllama)"].level < 5) return false },
    },
    "glancing blow": {
        name: "Glancing Blow",
        description: desc([
            "5th level.",
            "When you miss with a melee weapon attack, expend Die to immediately repeat your attack against another target within reach."
        ]),
        prereqeval: function (v) { if (!classes.known["rogue(laserllama)"] || classes.known["rogue(laserllama)"].level < 5) return false },
    },
    "grasp of night": {
        name: "Grasp of Night",
        description: desc([
            "5th level, Wis 13+.",
            "In place of attack, expend up to PB Dice; touch a creature.",
            "If HP ≤ 3×[Dice spent]+Wis mod: creature sleeps, Unconscious 10 min (wakes if takes damage or action to shake)."
        ]),
        prereqeval: function (v) { if (!classes.known["rogue(laserllama)"] || classes.known["rogue(laserllama)"].level < 5 || What('Wis') < 13) return false },
    },
    "improvised skill": {
        name: "Improvised Skill",
        description: desc([
            "5th level.",
            "On ability check you lack proficiency in: expend Die and add to the roll (after rolling, before you know the result)."
        ]),
        prereqeval: function (v) { if (!classes.known["rogue(laserllama)"] || classes.known["rogue(laserllama)"].level < 5) return false },
    },
    "soothing speech": {
        name: "Soothing Speech",
        description: desc([
            "5th level, Persuasion proficiency.",
            "Action: expend Die; speak to creatures who can hear/understand within 20 ft. Charisma save.",
            "On fail: Indifferent toward all creatures they see, 10 minutes; ends if damage, forced save, or see ally harmed."
        ]),
        prereqeval: function (v) { if (!classes.known["rogue(laserllama)"] || classes.known["rogue(laserllama)"].level < 5 || v.skillProfs.indexOf("Acrobatics") == -1) return false },
        action: ["action", ""]
    },
    "survey dungeon": {
        name: "Survey Dungeon",
        description: desc([
            "5th level, Dex or Int of 13+.",
            "Expend Die and spend 10 minutes examining a room. Learn 1 of: trap, active spell, or secret.",
            "Once per room per long rest."
        ]),
        prereqeval: function (v) { if (!classes.known["rogue(laserllama)"] || classes.known["rogue(laserllama)"].level < 5 || (What('Dex') < 13 || What('Int') < 13)) return false },
    },
    "trick shot": {
        name: "Trick Shot",
        description: desc([
            "5th level, Dex or Int of 13+.",
            "Bonus action: expend Die, make special ranged or thrown attack with finesse weapon.",
            "Attack ignores cover if ricochet is possible; no disadvantage if would normally apply. On hit, add Die to damage."
        ]),
        prereqeval: function (v) { if (!classes.known["rogue(laserllama)"] || classes.known["rogue(laserllama)"].level < 5 || (What('Dex') < 13 || What('Int') < 13)) return false },
        action: ["bonus action", ""]
    },

    // 3rd-Degree Exploits (require 9th+ level)
    // All can only be used once per short or long rest (see exploit text)
    "craft greater poison": {
        name: "Craft Greater Poison",
        description: desc([
            "9th level, poisoner's kit proficiency.",
            "Action: spend up to PB Dice and use poisoner's kit to craft one Greater Poison (potent until next long rest; can't regain dice until used).",
            "Use Object: Apply to weapon/ammo. Next hit: extra poison dmg = dice spent, Con save or 1 min: disadv on attacks/checks, speed halved, can't react.",
            "Repeat save at turn end: fail takes Die poison, succeed ends effect."
        ]),
        prereqeval: function (v) { if (!classes.known["rogue(laserllama)"] || classes.known["rogue(laserllama)"].level < 9) return false },
    },
    "forgotten knowledge": {
        name: "Forgotten Knowledge",
        description: desc([
            "9th level, History proficiency.",
            "Expend Die and spend 10 minutes focused on a person, object, or location you can see; remember lore about subject.",
            "The more info you have, the more precise; DM determines specifics."
        ]),
        prereqeval: function (v) { if (!classes.known["rogue(laserllama)"] || classes.known["rogue(laserllama)"].level < 9 || v.skillProfs.indexOf("History") == -1) return false },
    },
    "recruit informant": {
        name: "Recruit Informant",
        description: desc([
            "9th level, Cha or Int 15+.",
            "Expend Die and spend 1 hour in a settlement with a willing urchin/criminal/etc.",
            "Gain noncombat Informant in that settlement who delivers rumors/news/secrets nightly.",
            "Lose Die until informant leaves service."
        ]),
        prereqeval: function (v) { if (!classes.known["rogue(laserllama)"] || classes.known["rogue(laserllama)"].level < 9 || (What('Cha') < 15 || What('Int') < 15)) return false },
    },
    "survey settlement": {
        name: "Survey Settlement",
        description: desc([
            "9th level, Dex or Cha 15+.",
            "Expend Die and spend 1 hr gathering info on up to 1 sq mile of settlement.",
            "Learn three: (factions/outposts, prominent locations, important NPCs, beliefs/rumors, secret hideouts/doors/alleyways).",
            "Once per settlement/long rest."
        ]),
        prereqeval: function (v) { if (!classes.known["rogue(laserllama)"] || classes.known["rogue(laserllama)"].level < 9 || (What('Cha') < 15 || What('Int') < 15)) return false },



    },
    "craft advanced poison": {
        name: "Craft Advanced Poison",
        description: desc([
            "13th level, poisoner's kit proficiency.",
            "Action: expend up to PB Dice and use poisoner's kit to craft 1 vial of Advanced Poison (lasts until end of next long rest; cannot regain Dice until used).",
            "Use Object: Apply to weapon/ammo. On next hit: extra acid dmg = dice spent. Con save or 1 hour: disadv on all attack rolls and ability checks; fail by 5+ also blinded.",
            "Target can repeat save as action: succeed ends effect; fail takes Die acid dmg."
        ]),
        prereqeval: function (v) { if (!classes.known["rogue(laserllama)"] || classes.known["rogue(laserllama)"].level < 13) return false },
    },
    "expert focus": {
        name: "Expert Focus",
        description: desc([
            "13th level.",
            "Action: expend Die to focus on 1 proficient skill or tool. For 1 hour, add Die to checks with that proficiency."
        ]),
        prereqeval: function (v) { if (!classes.known["rogue(laserllama)"] || classes.known["rogue(laserllama)"].level < 13) return false },
    },
    "fluid movements": {
        name: "Fluid Movements",
        description: desc([
            "13th level, Dex 17+.",
            "Bonus action: expend Die to enter focused state (concentration, 1 min).",
            "Speed can't be reduced, opportunity attacks vs you have disadvantage, and you're immune to Grappled, Paralyzed, and Restrained."
        ]),
        prereqeval: function (v) {
            return GetClassLevel("rogue(laserllama)") >= 13 && What('Dex') >= 17;
        },
        prereqeval: function (v) { if (!classes.known["rogue(laserllama)"] || classes.known["rogue(laserllama)"].level < 13 || What('Dex') < 17) return false },
        action: ["bonus action", ""]
    },
    "craft masterwork poison": {
        name: "Craft Masterwork Poison",
        description: desc([
            "17th level, poisoner's kit proficiency.",
            "Action: expend up to PB Dice and use poisoner's kit to craft 1 vial of Masterwork Poison (until end of next long rest; can't regain Dice until used).",
            "Use Object: Apply to weapon/ammo. Next hit: add necrotic dmg = 2×dice spent, Con save or disadv on all attacks, checks, and saves until cured by 5th-level+ spell.",
            "Fail by 5+: also Incapacitated (can’t move or speak) until cured."
        ]),
        prereqeval: function (v) { if (!classes.known["rogue(laserllama)"] || classes.known["rogue(laserllama)"].level < 17) return false },
    },
    "inconceivable dodge": {
        name: "Inconceivable Dodge",
        description: desc([
            "17th level, Dex 19+.",
            "When you take damage, reaction: expend Die to move to space within 10 ft, avoiding triggering effect as if it never happened."
        ]),
        prereqeval: function (v) {
            return classes.known["rogue(laserllama)"].level >= 17 && What('Dex') >= 19;
        },
        action: ["reaction", " (when would take damage)"]
    },
    "trickster's blessing": {
        name: "Trickster's Blessing",
        description: desc([
            "17th level, Dex 19+.",
            "When you take the Hide action, expend Die. If there's a hiding spot within 60 ft, instantly appear there and are automatically hidden from all senses and magic."
        ]),
        prereqeval: function (v) {
            return classes.known["rogue(laserllama)"].level >= 17 && What('Dex') >= 19;
        }
    }
}
// Subclasses

AddSubClass("rogue(laserllama)", "assassin", {
    regExpSearch: /assassin/,
    subname: "Assassin",
    source: [["LL:AR", 0]],
    features: {
        "subclassfeature3": {
            name: "Assassinate",
            minlevel: 3,
            description: desc([
                "After initiative order determined, I can expend an Exploit Die and add it to initiative.",
                "I have advantage on attack rolls against creatures who haven’t acted yet this combat.",
                "When I hit an Incapacitated or Surprised target with a weapon attack with Sneak Attack, it’s an automatic critical hit."
            ])
        },
        "subclassfeature3.1": {
            name: "Assassin Exploits",
            minlevel: 3,
            description: desc([
                "I gain Precision Strike and Subtle Con exploits at 3rd level; Craft Minor Poison and Crippling Strike at 5th; Craft Greater Poison at 9th.",
                "These do not reduce my number of Exploits known and cannot be swapped out."
            ]),
            autoSelectExtrachoices: [
                { extrachoice: "precision strike" },
                { extrachoice: "subtle con" }
            ]
        },
        "subclassfeature3.2": {
            name: "Infiltrator",
            minlevel: 3,
            description: desc([
                "Gain proficiency with disguise and poisoner's kits.",
                "Can craft a disguise of a dead/unconscious humanoid over 10 minutes (found on its body).",
                "Can mimic a humanoid’s speech after 10 min of listening."
            ]),
            toolProfs: ["Disguise kit", "Poisoner's kit"]
        },
        "subclassfeature5.1": {
            name: "Assassin Exploits (5th)",
            minlevel: 5,
            autoSelectExtrachoices: [
                { extrachoice: "craft minor poison" },
                { extrachoice: "crippling strike" }
            ]
        },
        "subclassfeature7": {
            name: "Deadly Blades",
            minlevel: 7,
            description: desc([
                "When I score a critical hit, can reroll any 1 on damage dice for that attack.",
                "Whenever I use Sneak Attack, may use Cunning Strike and reduce bonus by 1d6 to force Con save (vs Exploit save DC); on fail, target is Poisoned until my next turn."
            ])
        },
        "subclassfeature9.1": {
            name: "Assassin Exploits (9th)",
            minlevel: 9,
            autoSelectExtrachoices: [
                { extrachoice: "craft greater poison" }
            ]
        },
        "subclassfeature13": {
            name: "Flawless Infiltrator",
            minlevel: 13,
            description: desc([
                "Learn to speak, read, and write three extra languages.",
                "Gain bonus to checks to maintain a disguise equal to Exploit Die.",
                "Add Rogue level to DC for others to see through my disguise."
            ]),
            languageProfs: [3]
        },
        "subclassfeature13.1": {
            name: "Master Poisoner",
            minlevel: 13,
            description: desc([
                "Can apply any Devious Exploit-crafted poison (craft minor/greater/advanced) to a weapon as a bonus action.",
                "Learn Craft Advanced Poison exploit (does not reduce Exploits Known)."
            ]),
            autoSelectExtrachoices: [{ extrachoice: "craft advanced poison" }]
        },
        "subclassfeature17": {
            name: "Death Strike",
            minlevel: 17,
            description: desc([
                "When I add Sneak Attack bonus to a weapon attack, I can choose to make it an automatic critical hit.",
                "Once used, must finish a short or long rest to regain."
            ]),
            usages: 1,
            recovery: "short rest"
        }
    }
});

AddSubClass("rogue(laserllama)", "burglar", {
    regExpSearch: /burglar/i,
    subname: "Burglar",
    source: ["LL:AR", 0],
    fullcastingprogression: "rogue(laserllama)",
    features: {
        "subclassfeature3": {
            name: "Burglar Exploits",
            source: ["LL:AR", 0],
            minlevel: 3,
            description: desc([
                "Learn the following archetype exploits at levels in this class:",
                "3rd: Lightstep, Modify Device; 5th: Dirty Hit, Survey Dungeon; 9th: Forgotten Knowledge"
            ]),
            extraname: "Burglar Exploit",
            extrachoices: ["lightstep", "modify device", "dirty hit", "survey dungeon", "forgotten knowledge"],
            "lightstep": {
                name: "Lightstep",
                description: desc([
                    "When making Acrobatics or Stealth check, can expend Exploit Die and add to roll."
                ]),
                prereqeval: function (v) { return What('Dex') >= 11; }
            },
            "modify device": {
                name: "Modify Device",
                description: desc([
                    "If proficient with thieves' or tinker's tools, you can spend 1 minute and expend Exploit Die to adjust a disarmed trap or lock: either raise DC by 5 or set DC to your Exploit save DC."
                ]),
            },
            "dirty hit": {
                name: "Dirty Hit",
                description: desc([
                    "5th level, Dex 13+.",
                    "When you hit with a melee weapon, expend Die. Target Con save or add Die to damage, falls prone, and can't take reactions until start of next turn."
                ]),
                prereqeval: function (v) { return What('Dex') >= 13 && classes.known["rogue(laserllama)"] && classes.known["rogue(laserllama)"].level >= 5; }
            },
            "survey dungeon": {
                name: "Survey Dungeon",
                description: desc([
                    "5th level, Dex or Int 13+.",
                    "Expend Die to spend 10 min surveying current room: learn about 1 trap, spell, or secret feature. Can use once/long rest per room."
                ]),
                prereqeval: function (v) { return (What('Dex') >= 13 || What('Int') >= 13) && classes.known["rogue(laserllama)"] && classes.known["rogue(laserllama)"].level >= 5; }
            },
            "forgotten knowledge": {
                name: "Forgotten Knowledge",
                description: desc([
                    "9th level, History proficiency.",
                    "Expend Die to spend 10 min focused on a person, place, or thing; remember a secret or obscure piece of lore about the subject."
                ]),
                prereqeval: function (v) { return classes.known["rogue(laserllama)"] && classes.known["rogue(laserllama)"].level >= 9; }
            }
        },
        "subclassfeature3.1": {
            name: "Nimble",
            source: ["LL:AR", 0],
            minlevel: 3,
            description: desc([
                "Gain climbing speed equal to walk speed",
                "Can use Dex instead of Str for long/high jump distance"
            ]),
            speed: { climb: { spd: "walk", enc: "walk" } }
        },
        "subclassfeature3.2": {
            name: "Quick Fingers",
            source: ["LL:AR", 0],
            minlevel: 3,
            description: desc([
                "When Sneak Attack on melee, reduce bonus by 1d6 to attempt to steal an object (Dex(Sleight of Hand) vs target's Wis(Perception))",
                "If using Cunning Action, can use a tool or make Dex(Sleight of Hand) check as bonus action"
            ])
        },
        "subclassfeature7": {
            name: "Supreme Sneak",
            source: ["LL:AR", 0],
            minlevel: 7,
            description: desc([
                "Advantage on Stealth checks while moving at half speed",
                "Can Hide when lightly obscured",
                "Can use Cunning Strike -1d6 Sneak Attack bonus to Hide as free action before end of turn"
            ]),
            savetxt: { adv_vs: ["Stealth (half speed)"] }
        },
        "subclassfeature7.1": {
            name: "Treasure Lore",
            source: ["LL:AR", 0],
            minlevel: 7,
            description: desc([
                "When researching, investigating, or valuing a magic item, treasure, or trap: add Exploit Die to the check",
                "Can Use an Object action to activate a magic item, spell scroll, drink potion, or use object (if normally an action)"
            ])
        },
        "subclassfeature13": {
            name: "Use Magic Device",
            source: ["LL:AR", 0],
            minlevel: 13,
            description: desc([
                "Ignore alignment, class, race, and level reqs for magical items, scrolls, and potions; use Int if spellcasting ability required"
            ])
        },
        "subclassfeature17": {
            name: "Quick Reflexes",
            source: ["LL:AR", 0],
            minlevel: 17,
            description: desc([
                "Gain additional bonus action each turn (only for Cunning Action options)",
                "If not used, gain extra reaction (1/round; one effect can only trigger one reaction)"
            ])
        }
    }
});

AddSubClass("rogue(laserllama)", "investigator", {
    regExpSearch: /investigator/i,
    subname: "Investigator",
    source: ["LL:AR", 0],
    features: {
        "subclassfeature3": {
            name: "Investigator Exploits",
            source: ["LL:AR", 0],
            minlevel: 3,
            description: desc([
                "Learn archetype exploits as follows:",
                "3rd: Inquisitive Eye, Precision Strike; 5th: Exposing Strike, Survey Dungeon; 9th: Survey Settlement"
            ]),
            extraname: "Investigator Exploit",
            extrachoices: ["inquisitive eye", "precision strike", "exposing strike", "survey dungeon", "survey settlement"],
            "inquisitive eye": {
                name: "Inquisitive Eye",
                description: desc([
                    "Int or Wis 11+: Expend Exploit Die to add to Investigation or Insight after rolling."
                ]),
                prereqeval: function (v) {
                    return What('Int') >= 11 || What('Wis') >= 11;
                }
            },
            "precision strike": {
                name: "Precision Strike",
                description: desc([
                    "Dex 11+: Expend Exploit Die to add to weapon attack roll after rolling but before knowing hit or miss."
                ]),
                prereqeval: function (v) {
                    return What('Dex') >= 11;
                }
            },
            "exposing strike": {
                name: "Exposing Strike",
                description: desc([
                    "5th+: When you hit with weapon, expend Die. Next attack vs. it before your next turn has advantage, add Die to its damage if that hits."
                ]),
                prereqeval: function (v) {
                    return classes.known["rogue(laserllama)"] && classes.known["rogue(laserllama)"].level >= 5;
                }
            },
            "survey dungeon": {
                name: "Survey Dungeon",
                description: desc([
                    "5th+, Dex or Int 13+: Expend Die and spend 10 min to learn about one of: a trap, a spell, or secret feature in the room. 1/long rest per room."
                ]),
                prereqeval: function (v) {
                    return (What('Dex') >= 13 || What('Int') >= 13) && classes.known["rogue(laserllama)"] && classes.known["rogue(laserllama)"].level >= 5;
                }
            },
            "survey settlement": {
                name: "Survey Settlement",
                description: desc([
                    "9th+, Dex or Cha 15+: Expend Die, spend 1hr for 3 facts about local area: factions, authority, secrets, etc. 1/long rest per area."
                ]),
                prereqeval: function (v) {
                    return (What('Dex') >= 15 || What('Cha') >= 15) && classes.known["rogue(laserllama)"] && classes.known["rogue(laserllama)"].level >= 9;
                }
            }
        },
        "subclassfeature3.1": {
            name: "Eye for Detail",
            source: ["LL:AR", 0],
            minlevel: 3,
            description: desc([
                "Can make Intelligence (Insight) and Intelligence (Perception) checks",
                "You can use Cunning Action to take the Search action as a bonus action",
                "Whenever you Search, you get info as if spending 10 minutes investigating focus"
            ])
        },
        "subclassfeature3.2": {
            name: "Predictive Fighting",
            source: ["LL:AR", 0],
            minlevel: 3,
            description: desc([
                "Take Search action, focus on creature within 60 ft (DC 8 + CR). On success for 1min:",
                "Add Int mod (min +1) to weapon attack rolls vs target, don't need adv to sneak attack",
                "If you use this on a new target, it ends for the previous target"
            ])
        },
        "subclassfeature7": {
            name: "Insightful Strike",
            source: ["LL:AR", 0],
            minlevel: 7,
            description: desc([
                "When you hit and sneak attack, can use Cunning Strike -1d6 sneak to learn:",
                "Armor Class; Highest Stat; Lowest Stat; Immunities; One Special Feature",
                "If using Predictive Fighting for Search, you have adv if you've hit that creature since last long rest"
            ])
        },
        "subclassfeature13": {
            name: "Adept Investigator",
            source: ["LL:AR", 0],
            minlevel: 13,
            description: desc([
                "Survey Dungeon/Settlement takes half time and you get twice the info",
                "After long rest in town or short rest in dungeon, you get automatic survey info as per Exploit (doesn’t interrupt rest)"
            ])
        },
        "subclassfeature13.1": {
            name: "Unerring Sight",
            source: ["LL:AR", 0],
            minlevel: 13,
            description: desc([
                "Gain Truesight 10 ft, adv on all Insight, Investigation, and Perception checks within it",
                "Radius increases to 20 ft at 17th and 30 ft at 20th (matches Blindsense)"
            ]),
            vision: [["Truesight", "fixed 10"]]
        },
        "subclassfeature17": {
            name: "Exploit Weakness",
            source: ["LL:AR", 0],
            minlevel: 17,
            description: desc([
                "Predictive Fighting auto succeed (no check). Use d8 for sneak attack vs that creature."
            ])
        }
    }
});

AddSubClass("rogue(laserllama)", "mastermind", {
    regExpSearch: /mastermind/i,
    subname: "Mastermind",
    source: ["LL:AR", 0],
    features: {
        "subclassfeature3": {
            name: "Mastermind Exploits",
            source: ["LL:AR", 0],
            minlevel: 3,
            description: desc([
                "Learn archetype exploits as follows:",
                "3rd: Eloquent Speech, Roguish Charm; 5th: Exposing Strike, Soothing Speech; 9th: Recruit Informant"
            ]),
            extraname: "Mastermind Exploit",
            extrachoices: ["eloquent speech", "roguish charm", "exposing strike", "soothing speech", "recruit informant"],
            "eloquent speech": {
                name: "Eloquent Speech",
                description: desc([
                    "Int 11+: Use Intelligence for Deception/Persuasion; you can expend an Exploit Die to add to the roll after rolling."
                ]),
                prereqeval: function (v) {
                    return What('Int') >= 11;
                }
            },
            "roguish charm": {
                name: "Roguish Charm",
                description: desc([
                    "Cha 11+, Persuasion prof: Use action/expend Exploit Die; force one creature within 10 ft to make Wis save or be charmed 1hr. See exploit for details."
                ]),
                prereqeval: function (v) {
                    return What('Cha') >= 11;
                }
            },
            "exposing strike": {
                name: "Exposing Strike",
                description: desc([
                    "5th+: On hit with weapon, expend Die. First attack against the target before your turn has advantage; if hit, add Die to its damage."
                ]),
                prereqeval: function (v) {
                    return classes.known["rogue(laserllama)"] && classes.known["rogue(laserllama)"].level >= 5;
                }
            },
            "soothing speech": {
                name: "Soothing Speech",
                description: desc([
                    "5th+, Persuasion prof: As an action, expend Die; all creatures in 20 ft make Cha save or become indifferent to any creature they see for 10 min unless harmed."
                ]),
                prereqeval: function (v) {
                    return classes.known["rogue(laserllama)"] && classes.known["rogue(laserllama)"].level >= 5;
                }
            },
            "recruit informant": {
                name: "Recruit Informant",
                description: desc([
                    "9th+, Cha or Int 15+: Expend Die & 1hr in a settlement to gain a loyal informant while you’re in the area; see exploit for more."
                ]),
                prereqeval: function (v) {
                    return (What('Cha') >= 15 || What('Int') >= 15) && classes.known["rogue(laserllama)"] && classes.known["rogue(laserllama)"].level >= 9;
                }
            }
        },
        "subclassfeature3.1": {
            name: "Master of Machinations",
            source: ["LL:AR", 0],
            minlevel: 3,
            description: desc([
                "Learn two additional languages, and gain proficiency with disguise and forgery kits.",
                "If you speak with a creature for 1 min in its native tongue, can use Roguish Charm exploit for free; can spend an Exploit Die for it to last until the target's next long rest (but can't regain this Die until effect ends)."
            ]),
            languageProfs: [2],
            toolProfs: [["Disguise Kit", "Forgery Kit"]],
        },
        "subclassfeature3.2": {
            name: "Tactical Acumen",
            source: ["LL:AR", 0],
            minlevel: 3,
            description: desc([
                "Can use Cunning Action to take the Help action as a bonus action.",
                "If you use Help to aid an ally in attacking a creature, the target can be within 30 ft if your ally can see or hear you."
            ])
        },
        "subclassfeature7": {
            name: "Manipulative Intuition",
            source: ["LL:AR", 0],
            minlevel: 7,
            description: desc([
                "Spend 1 min talking with/observing a creature out of combat to learn one of its ideals, bonds, flaws, motivations, alignment, or attitude toward you/another (1/rest/target).",
                "Creatures with Legendary Resistance are immune to this."
            ])
        },
        "subclassfeature7.1": {
            name: "Potent Insight",
            source: ["LL:AR", 0],
            minlevel: 7,
            description: desc([
                "If you use Help for attack and it hits, can use reaction to add your Sneak Attack bonus to its damage. If so, you can't Sneak Attack on your next turn."
            ])
        },
        "subclassfeature13": {
            name: "Devious Tactics",
            source: ["LL:AR", 0],
            minlevel: 13,
            description: desc([
                "When targeted by an attack, can use a reaction to force a creature within 5 ft to make Dex save (your Exploit Save DC, can choose to fail). On fail, you switch places and it becomes the target."
            ])
        },
        "subclassfeature17": {
            name: "Inscrutable Mind",
            source: ["LL:AR", 0],
            minlevel: 17,
            description: desc([
                "Add your Intelligence modifier to all Int, Wis, and Cha saving throws.",
                "Your thoughts can’t be read by magic unless you allow it; if a creature tries, can make a Deception check to give it false thoughts and impressions."
            ])
        }
    }
});

AddSubClass("rogue(laserllama)", "phantom", {
    regExpSearch: /phantom/i,
    subname: "Phantom",
    source: ["LL:AR", 0],
    features: {
        // Level 3: Phantom Exploits
        "subclassfeature3": {
            name: "Phantom Exploits",
            source: ["LL:AR", 0],
            minlevel: 3,
            description: desc([
                "Learn archetype exploits as follows:",
                "3rd: Feint, Reliable Skill; 5th: Exposing Strike, Grasp of Night; 9th: Forgotten Knowledge"
            ]),
            extraname: "Phantom Exploit",
            extrachoices: [
                "feint",
                "reliable skill",
                "exposing strike",
                "grasp of night",
                "forgotten knowledge"
            ],
            "feint": {
                name: "Feint",
                description: desc([
                    "As a bonus action, expend an Exploit Die: target within 15 ft must make a Wis save; if failed, you have advantage on attacks against that creature until end of turn."
                ])
            },
            "reliable skill": {
                name: "Reliable Skill",
                description: desc([
                    "When making a check with a skill or tool you are proficient in, and roll a 7 or lower on d20, you can expend an Exploit Die to treat d20 as an 8."
                ])
            },
            "exposing strike": {
                name: "Exposing Strike",
                description: desc([
                    "5th+: On hit with weapon, expend Die. First attack made against that target before your next turn has advantage, and on hit, add Die to its damage."
                ]),
                prereqeval: function (v) {
                    return classes.known["rogue(laserllama)"] && classes.known["rogue(laserllama)"].level >= 5;
                }
            },
            "grasp of night": {
                name: "Grasp of Night",
                description: desc([
                    "5th+, Wis 13+: In place of an attack, expend up to Prof Bonus Exploit Dice to touch a creature. If HP <= 3 × Dice + Wis mod, it falls asleep (Unconscious, 10 min)."
                ]),
                prereqeval: function (v) {
                    return What('Wis') >= 13 && classes.known["rogue(laserllama)"] && classes.known["rogue(laserllama)"].level >= 5;
                }
            },
            "forgotten knowledge": {
                name: "Forgotten Knowledge",
                description: desc([
                    "9th+, History prof: Spend 10 min focusing on a person, object, or place. Expend Exploit Die to recall forgotten/secret lore about that subject."
                ]),
                prereqeval: function (v) {
                    return classes.known["rogue(laserllama)"] && classes.known["rogue(laserllama)"].level >= 9;
                }
            }
        },
        // Level 3: Knowledge of the Grave
        "subclassfeature3.1": {
            name: "Knowledge of the Grave",
            source: ["LL:AR", 0],
            minlevel: 3,
            description: desc([
                "Gain proficiency in a skill or tool, or learn a language.",
                "During a short or long rest, can replace this proficiency or language with another of your choice."
            ])
            // Implementation note: Handled manually in sheet, as proficiency swapping is not directly supported by MPMB.
        },
        // Level 3: Grave Bolt
        "subclassfeature3.2": {
            name: "Grave Bolt",
            source: ["LL:AR", 0],
            minlevel: 3,
            description: desc([
                "When you hit with an attack that adds Sneak Attack, force a different creature within 30 ft to make a Wis save (Exploit DC).",
                "On a fail, deal necrotic damage equal to half your Sneak Attack dice (rounded up)."
            ])
        },
        // Level 7: Soul Trinkets
        "subclassfeature7": {
            name: "Soul Trinkets",
            source: ["LL:AR", 0],
            minlevel: 7,
            description: desc([
                "When a creature with Int 5+ dies within 30 ft, you can use your reaction to form a Soul Trinket in a free hand.",
                "Max trinkets = half your Rogue level (rounded down). New trinket can't be formed if at max.",
                "While you have a trinket: advantage on Con saves and death saving throws."
            ])
            // Implementation note: Trinket limits and usage tracked manually/off-sheet.
        },
        // Level 7: Dark Offering
        "subclassfeature7.1": {
            name: "Dark Offering",
            source: ["LL:AR", 0],
            minlevel: 7,
            description: desc([
                "Destroy a Soul Trinket to:",
                "- Extract Knowledge: Ask the soul one question, as speak with dead.",
                "- Grave Smite: When you Sneak Attack, destroy a trinket to make your damage necrotic.",
                "- Otherworldly Fright: If a creature fails its Grave Bolt save, destroy a trinket to frighten it until your next turn."
            ])
        },
        // Level 13: Spectral Step
        "subclassfeature13": {
            name: "Spectral Step",
            source: ["LL:AR", 0],
            minlevel: 13,
            description: desc([
                "When you Dash, you can become incorporeal until end of turn: move through creatures/objects (difficult terrain), gain 15 ft fly speed.",
                "If you end inside a creature/object, shunted to nearest open space and take 1d10 force/5ft traveled (cannot be reduced)."
            ])
        },
        // Level 17: Death Knell
        "subclassfeature17": {
            name: "Death Knell",
            source: ["LL:AR", 0],
            minlevel: 17,
            description: desc([
                "When using Grave Bolt, you can destroy a Soul Trinket to have any creatures of your choice within 30 ft of the target make a Wis save.",
                "On fail: suffer Grave Bolt's effect and are Frightened until your next turn. On success: take half damage."
            ])
        }
    }
});

AddSubClass("rogue(laserllama)", "psiknife", {
    regExpSearch: /psiknife/i,
    subname: "Psiknife",
    source: ["LL:AR", 0],
    features: {
        // 3rd level: Psionic Awakening, Psi Blade, Archetype Exploits
        "subclassfeature3": {
            name: "Psionic Awakening",
            source: ["LL:AR", 0],
            minlevel: 3,
            description: desc([
                "Gain Psi Points equal to Rogue level (restore all after long rest, Int mod after short rest)",
                "Psi Points fuel Mystic Skills, Telekinetic Leap, Telepathic Link (see feature list)",
                "Mystic Skill: On failing any ability check, use 1 Psi Point to add Exploit Die to roll, potentially turning it into a success (visibly psionic)",
                "Telekinetic Leap: As a bonus action, spend 1 Psi Point and 10 ft movement to jump 30 ft in a line, even if it exceeds current speed",
                "Telepathic Link: As an action, spend Psi Points to link you + 1 creature per point; everyone is telepathically linked for Int mod hours (same plane)",
            ]),
            usages : classes.known["rogue(laserllama)"].level

        },
        "subclassfeature3.1": {
            name: "Psi Blade",
            source: ["LL:AR", 0],
            minlevel: 3,
            description: desc([
                "As part of an attack or bonus action, you can conjure a Psi Blade (dagger stats, deals psychic, can use Int for attack & damage, thrown range doubled, d4 increased with Exploit Die size)",
                "Blade radiates bright 5 ft light; leaves no visible mark; can be dismissed at will",
                "Psi Blade's damage die grows with Exploit Die size (see class table)"
            ])
            // Note: Psi Blade is not a separate weapon, but modifies dagger stats for display
        },
        },
        // 7th level: Empowered Blades (Mind Rend, Sentient Strike, Metaphysical Shift)
        "subclassfeature7": {
            name: "Empowered Blades",
            source: ["LL:AR", 0],
            minlevel: 7,
            description: desc([
                "When you hit with Psi Blade & Sneak Attack: use Cunning Strike (–2d6 Sneak Attack) to force Int save (Exploit Save DC); fail: can't take reactions until start of your next turn, can only move, use 1 action, or 1 bonus action on next turn",
                "When you miss a Psi Blade attack, spend 1 Psi Point to add Exploit Die to the roll (possibly hit)",
                "Metaphysical Shift: Use Cunning Action & spend up to Int mod Psi Points to teleport up to 20 ft per point to visible space (as bonus action)"
            ])
        },
        // 13th level: Shimmer
        "subclassfeature13": {
            name: "Shimmer",
            source: ["LL:AR", 0],
            minlevel: 13,
            description: desc([
                "As an action, spend 1 Psi Point to become invisible (as invisibility spell, no concentration). Ends if you attack, cast a spell, or touch a creature."
            ])
        },
        // 17th level: Mental Scourge
        "subclassfeature17": {
            name: "Mental Scourge",
            source: ["LL:AR", 0],
            minlevel: 17,
            description: desc([
                "When using Mind Rend to force an Int save, you can further reduce Sneak Attack by –2d6 (total –4d6) to upgrade effect; fail: target is Stunned until start of your next turn.",
                "You also regain 1 Psi Point at the start of each turn in combat."
            ])
        }
    }
);

AddSubClass("rogue(laserllama)", "scout", {
    regExpSearch: /scout/i,
    subname: "Scout",
    source: ["LL:AR", 0],
    features: {
        // 3rd-level: Ambuscade, Scout Exploits, Skillful Hunter
        "subclassfeature3": {
            name: "Ambuscade",
            source: ["LL:AR", 0],
            minlevel: 3,
            description: desc([
                "When I roll initiative and am not surprised, I can use my reaction to:",
                "\u2022 Take the Hide or Search action, or",
                "\u2022 Make a single weapon attack.",
                "If surprised, I can't take this reaction but can act normally on my first turn."
            ]),
            action: ["reaction", " (when rolling initiative)"]
        },
        "subclassfeature3.1": {
            name: "Scout Exploits",
            source: ["LL:AR", 0],
            minlevel: 3,
            description: desc([
                "I automatically learn these exploits at the level shown (do not count against Exploits Known):",
                "3rd: arresting strike, cunning instinct",
                "5th: craft minor poison, trick shot",
                "9th: craft greater poison"
            ]),
            autoSelectExtrachoices: [
                {
                    extrachoice: "arresting strike",
                    minlevel: 3
                },
                {
                    extrachoice: "cunning instinct",
                    minlevel: 3
                },
                {
                    extrachoice: "craft minor poison",
                    minlevel: 5
                },
                {
                    extrachoice: "trick shot",
                    minlevel: 5
                },
                {
                    extrachoice: "craft greater poison",
                    minlevel: 9
                }
            ]
        },
        "subclassfeature3.2": {
            name: "Skillful Hunter",
            source: ["LL:AR", 0],
            minlevel: 3,
            description: desc([
                "When a creature I can see ends its turn within 5 ft of me, I can use my reaction to move up to half my speed without provoking opportunity attacks.",
                "Whenever I make a Nature or Survival check, I gain a bonus to my roll equal to my Exploit Die."
            ]),
            action: ["reaction", " (move when a creature ends its turn near you)"]
        },
        // 7th-level: Wilderness Adept
        "subclassfeature7": {
            name: "Wilderness Adept",
            source: ["LL:AR", 0],
            minlevel: 7,
            description: desc([
                "My speed increases by 10 feet.",
                "I gain a climbing and a swimming speed, each equal to my walking speed.",
                "When I take the Dash action, I can ignore difficult terrain caused by natural phenomena."
            ]),
            speed: {
                walk: { spd: "+10", enc: "+10" },
                climb: { spd: "walk", enc: "walk" },
                swim: { spd: "walk", enc: "walk" },
            },

        },
        // 13th-level: Deadly Hunter
        "subclassfeature13": {
            name: "Deadly Hunter",
            source: ["LL:AR", 0],
            minlevel: 13,
            description: desc([
                "I add my proficiency bonus to initiative rolls.",
                "When I use Ambuscade, I can move up to half my speed as part of that reaction.",
                "When I hit a creature with my Ambuscade attack, I can mark it for death (until end of the round, creatures of my choice have advantage on attacks against the target)."
            ]),
            addMod: { type: "skill", field: "Init", mod: "Prof", text: "I add my proficiency bonus to initiative rolls." }
        },
        // 17th-level: Twin Strike
        "subclassfeature17": {
            name: "Twin Strike",
            source: ["LL:AR", 0],
            minlevel: 17,
            description: desc([
                "When I take the Attack action, I can make a weapon attack as a bonus action on the same turn.",
                "I can apply my Sneak Attack to this bonus attack even if I've already used it this turn, as long as these attacks don't target the same creature."
            ]),
            action: ["bonus action", " (make one weapon attack)"]
        }
    }
});

AddSubClass("rogue(laserllama)", "swashbuckler", {
    regExpSearch: /swashbuckler/i,
    subname: "Swashbuckler",
    source: ["LL:AR", 0],
    features: {
        // 3rd Level: Fancy Footwork, Relentless Swagger, Swashbuckler Exploits
        "subclassfeature3": {
            name: "Fancy Footwork",
            source: ["LL:AR", 0],
            minlevel: 3,
            description: desc([
                "If I make a melee attack against a creature, it can't target me with opportunity attacks for the rest of my turn."
            ])
        },
        "subclassfeature3.1": {
            name: "Relentless Swagger",
            source: ["LL:AR", 0],
            minlevel: 3,
            description: desc([
                "So long as I'm not surprised, I add my Charisma modifier (min +1) to initiative rolls.",
                "I don't need advantage on attack rolls to add Sneak Attack if I'm within 5 ft of my target, no creatures are within 5 ft of me, and I don't have disadvantage on the attack roll."
            ]),
            addMod: { type: "skill", field: "Init", mod: "max(Cha|1)", text: "I can add my Charisma modifier (min 1) to initiative rolls if not surprised." }
        },
        "subclassfeature3.2": {
            name: "Swashbuckler Exploits",
            source: ["LL:AR", 0],
            minlevel: 3,
            description: desc([
                "I automatically learn these exploits at the level shown (do not count against Exploits Known):",
                "3rd: Commanding Presence, Parry",
                "5th: Glancing Blow, Soothing Speech",
                "9th: Recruit Informant"
            ]),
            autoSelectExtrachoices: [
                {
                    extrachoice: "commanding presence",
                    minlevel: 3
                },
                {
                    extrachoice: "parry",
                    minlevel: 3
                },
                {
                    extrachoice: "glancing blow",
                    minlevel: 5
                },
                {
                    extrachoice: "soothing speech",
                    minlevel: 5
                },
                {
                    extrachoice: "recruit informant",
                    minlevel: 9
                }
            ]
        },
        // 7th Level: Panache
        "subclassfeature7": {
            name: "Panache",
            source: ["LL:AR", 0],
            minlevel: 7,
            description: desc([
                "When I hit with an attack that adds my Sneak Attack bonus, I can use Cunning Strike to reduce my bonus by 1d6 to cause one of the following effects until start of my next turn:",
                "• Charm: One creature within 30 ft that can see me must succeed on a Wisdom save or be charmed by me.",
                "• Taunt: The creature must succeed on a Wisdom save or has disadvantage on attacks against others and cannot make opportunity attacks."
            ])
        },
        // 13th Level: Elegant Warrior
        "subclassfeature13": {
            name: "Elegant Warrior",
            source: ["LL:AR", 0],
            minlevel: 13,
            description: desc([
                "When I take the Dash action, opportunity attacks against me are made with disadvantage (including when using Cunning Action).",
                "When I make a Strength (Athletics), Dexterity (Acrobatics), or Charisma (Performance) check, I gain a bonus to my roll equal to my Exploit Die."
            ])
        },
        // 17th Level: Master Duelist
        "subclassfeature17": {
            name: "Master Duelist",
            source: ["LL:AR", 0],
            minlevel: 17,
            description: desc([
                "When I miss with an attack roll, I can add my Charisma modifier (min +1) to the attack, possibly turning a miss into a hit.",
                "I can use this reaction a number of times equal to my Charisma modifier (min 1), regaining all expended uses at the end of a short or long rest."
            ])
        }
    }
});

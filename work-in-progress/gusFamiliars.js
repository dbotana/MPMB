/*	-WHAT IS THIS?-
	This file adds optional material to "MPMB's Character Record Sheet" found at https://flapkan.com/mpmb/charsheets
	Import this file using the "Add Extra Materials" bookmark.
	-KEEP IN MIND-
	It is recommended to enter the code in a fresh sheet before adding any other information (i.e. before making your character with it).
*/

/*	-INFORMATION-
	Subject:	Class
	Effect:		This script adds familiars from the 3rd party source Old Gus' Errata: Wanderers of the Infinite Skies https://drive.google.com/drive/u/1/folders/1Qv-U43kH066mbaeu9dLNeqmDpsdQW6CW
	Code by:	Rocky
	Date:		2024-11-18 (sheet v13)
*/

var iFileName = "gusFamiliars.js";
RequiredSheetVersion("13.2.0");

SourceList["GF"] = {
    name : "Gus Familiars",
    abbreviation : "GF",
    group : "Homebrew Classes",
    date : "2024/11/18"
};

CreatureList["amethyst wyrmling"] = {
    name: "Amethyst Wyrmling",
    source: [["GF", 1]],
    size: 5, // Tiny
    type: "Dragon",
    alignment: "Typically Neutral",
    ac: 13,
    hp: 10,
    hd: [3, 4], // [#, die]
    speed: "15 ft, fly 35 ft",
    scores: [3, 16, 12, 14, 14, 14], // [Str, Dex, Con, Int, Wis, Cha]
    damage_resistances: "force, thunder",
    senses: "Darkvision 60 ft",
    passivePerception: 13,
    languages: "Draconic",
    challengeRating: "1",
    proficiencyBonus: 2,
    innateSpellcasting: {
        ability: "Charisma",
        saveDC: 12,
        spells: {
            atWill: ["mage hand", "mold earth"],
            daily1: ["shield"]
        }
    },
    attacksAction: 1,
    attacks: [{
        name: "Bite",
        ability: 2,
        damage: [1, "", "piercing"], // [#, die, type]
        range: "Melee (5 ft)",
        description: "",
        abilitytodamage: false
    }, {
        name : "Gem Lozenge (2/Day)",
        ability : 2,
        damage : [2, 6, "piercing"],
        range : "60 ft",
        description : "Exhales a gem lozenge that shatters in a 5-ft-radius sphere. DC 11 Dexterity save for half damage."
    }],
};

CreatureList["blink pup"] = {
    name : "Blink Pup",
    source : [["GF", 1]],
    size : 5, // Tiny
    type : "Fey",
    alignment : "Typically Lawful Good",
    ac : 12,
    hp : 7,
    hd : [2, 4], // [#, die]
    speed : "35 ft",
    scores : [8, 14, 12, 10, 13, 11], // [Str, Dex, Con, Int, Wis, Cha]
    skills : {
        "perception" : +3,
        "stealth" : +4
    },
    senses : "Passive Perception 13",
    languages : "Understands Sylvan but can't speak",
    challengeRating : "1/4",
    proficiencyBonus : 2,
    
    traits : [{
        name : "Keen Hearing and Smell",
        description : "The pup has advantage on Wisdom (Perception) checks that rely on hearing or smell."
    }],
    
    attacksAction : 1,
    
    attacks : [{
        name : "Bite",
        ability : 2,
        damage : [1, "", "piercing"], // [#, die, type]
        range : "Melee (5 ft)",
        description : "",
        abilitytodamage : true
    }],
    
    features : [{
        name : "Teleport (2/Day)",
        description : "The pup magically teleports up to 40 ft to an unoccupied space it can see. Before or after teleporting, it can make one bite attack."
    }]
};

CreatureList["anqa"] = {
    name: "Anqa",
    source: [["GF", 1]],
    size: 5, // Tiny
    type: "Monstrosity",
    alignment: "Unaligned",
    ac: 13,
    hp: 4, // (2d4)
    hd: [2, 4],
    speed: "30 ft, climb 30 ft",
    scores: [8, 16, 11, 11, 14, 12], // [Str, Dex, Con, Int, Wis, Cha]
    skills: {
        "acrobatics": +4,
        "perception": +4
    },
    senses: "Darkvision 60 ft",
    passivePerception: 12,
    languages: "Any four languages",
    challengeRating: "1/4",
    proficiencyBonus: 2,
    
    innateSpellcasting: {
        ability: "Charisma",
        saveDC: 11,
        spells: {
            atWill: ["prestidigitation"],
            daily1: ["color spray"]
        }
    },
    
    traits : [{
        name : "Glider",
        description : "The anqa has a thin membrane between its limbs that can slow its fall and allow it to glide. When it falls and isn't incapacitated, it can subtract up to 100 feet from the fall when calculating falling damage and can move up to 2 feet horizontally for every 1 foot it descends."
    }],
    
    attacksAction : 1,
    
    attacks : [{
        name : "Bite",
        ability : 2,
        damage : [1, "", "piercing"], // [#, die, type]
        range : "Melee (5 ft)",
        description : "",
        abilitytodamage : true
    }]
};

CreatureList["awakened tome"] = {
    name: "Awakened Tome",
    source: [["GF", 1]],
    size: 5, // Tiny
    type: "Construct",
    alignment: "Typically Lawful Neutral",
    ac: 13, // (natural armor)
    hp: 4, // (2d4)
    hd: [2, 4],
    speed: "5 ft, fly 30 ft (hover)",
    scores: [12, 11, 10, 17, 14, 12], // [Str, Dex, Con, Int, Wis, Cha]
    
    skills: {
        "arcana": +5,
        "history": +5
    },
    
    damageVulnerabilities : "fire",
    damageResistances : "bludgeoning",
    
    senses : "Darkvision 60 ft",
    passivePerception : 12,
    
    languages : "Any four languages",
    
    challengeRating : "1/4",
    
    proficiencyBonus : 2,
    
    traits : [{
        name : "False Appearance",
        description : "While the tome remains motionless, it is indistinguishable from a normal book."
    }, {
        name : "Flyby",
        description : "The tome doesn't provoke opportunity attacks when it flies out of an enemy's reach."
    }],
    
    attacksAction : 1,
    
    attacks : [{
        name : "Drop Knowledge",
        ability : 1,
        damage : [1, "", "bludgeoning"], // [#, die, type]
        range : "Melee (5 ft)",
        description : "+3 to hit; target must succeed on a Wisdom saving throw or take an additional psychic damage and have disadvantage on the next attack roll before the end of its next turn."
     }],
     
     features : [{
         name : "Dispense Advice (2/Day)",
         description : "The tome searches the knowledge held within its pages and dispenses helpful advice to a creature within 30 feet of it that can hear it. Within the next minute, the target can roll two d4s and add the number rolled to one ability check of its choice. The roll can be made before or after making the ability check but before the results are announced."
     }]
};

CreatureList["basilisk youngling"] = {
    name: "Basilisk Youngling",
    source: [["GF", 1]],
    size: 5, // Tiny
    type: "Monstrosity",
    alignment: "Unaligned",
    ac: 14, // Natural Armor
    hp: 7, // (2d4 + 2)
    hd: [2, 4], // [#, die]
    speed: "20 ft",
    scores: [12, 10, 13, 2, 9, 7], // [Str, Dex, Con, Int, Wis, Cha]
    
    skills: {
        "stealth": +5
    },
    
    senses: "Darkvision 60 ft",
    passivePerception: 9,
    
    languages: "-",
    
    challengeRating: "1/8",
    
    proficiencyBonus: 2,
    
    traits : [{
        name : "Petrifying Gaze (2/Day)",
        description : "The basilisk forces a creature within 30 feet of itself that it can see and that can see it to make a DC 13 Constitution saving throw. On a failed save, the creature's flesh hardens and becomes rigid and inflexible. The target is restrained for up to 1 minute. It can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. Creatures immune to petrification automatically succeed their saving throw."
    }],
    
    attacksAction : 1,
    
    attacks : [{
        name : "Bite",
        ability : 1,
        damage : [1, "", "piercing"], // [#, die, type]
        range : "Melee (5 ft)",
        description : "Deals an additional 2 (1d4) poison damage."
    }]
};

CreatureList["bloom bat"] = {
    name: "Bloom Bat",
    source: [["GF", 1]],
    size: 5, // Tiny
    type: "Fey",
    alignment: "Typically Neutral",
    ac: 12,
    hp: 3, // (1d4)
    hd: [1, 4], // [#, die]
    speed: "10 ft, fly 30 ft",
    
    scores: [2, 15, 10, 10, 13, 7], // [Str, Dex, Con, Int, Wis, Cha]
    
    skills : {
        "perception": +3,
        "stealth": +4
    },
    
    senses : "Blindsight 60 ft",
    passivePerception : 13,
    
    languages : "Understands Sylvan but can't speak",
    
    challengeRating : "1/4",
    
    proficiencyBonus : 2,
    
    traits : [{
        name : "Camouflage",
        description : "The bloom bat has advantage on Dexterity (Stealth) checks it makes in terrain with ample vegetation."
    }, {
        name : "Echolocation",
        description : "The bloom bat can't use its blindsight while deafened."
    }, {
        name : "Keen Hearing",
        description : "The bloom bat has advantage on Wisdom (Perception) checks that rely on hearing."
    }, {
        name : "Innate Spellcasting",
        description : `The bloom bat's innate spellcasting ability is Wisdom (spell save DC 11). It can innately cast a number of spells without requiring material components:
- At will: druidcraft
- 1/day each: entangle, snare`
     }],
     
     attacksAction : 1,
     
     attacks : [{
         name : "Bite",
         ability : 2,
         damage : [1, "", "acid"], // [#, die, type]
         range : "Melee (5 ft)",
         description : ""
     }]
};

CreatureList["bubblumph"] = {
    name: "Bubblumph",
    source: [["GF", 1]],
    size: 5, // Tiny
    type: "Aberration",
    alignment: "Typically Lawful Good",
    ac: 12,
    hp: 5, // (2d4)
    hd: [2, 4], // [#, die]
    speed: "5 ft, fly 25 ft",
    
    scores: [3, 14, 10, 12, 12, 11], // [Str, Dex, Con, Int, Wis, Cha]
    
    skills: {
        "insight": +3,
        "investigation": +3,
        "perception": +3
    },
    
    senses: "Darkvision 60 ft",
    passivePerception: 13,
    
    languages: "Common, telepathy 30 ft",
    
    challengeRating: "0",
    
    proficiencyBonus: 2,
    
    traits : [{
        name : "Advanced Telepathy",
        description : "The Bubblumph can perceive the content of any telepathic communication used within 30 feet of it. It can't be surprised by creatures with any form of telepathy."
    }, {
        name : "Telepathic Shroud",
        description : "The Bubblumph is immune to any effect that would sense its emotions or read its thoughts, as well as all divination spells."
    }],
    
    attacksAction : 1,
    
    attacks : [{
        name : "Psychic Bubbles",
        ability : 4,
        damage : [1, "", "psychic"], // [#, die, type]
        range : "Melee (10 ft)",
        description : "The target has disadvantage on the first attack it makes on its next turn."
     }]
};

CreatureList["bumble bear"] = {
    name: "Bumble Bear",
    source: [["GF", 1]],
    size: 5, // Tiny
    type: "Fey",
    alignment: "Typically Lawful Neutral",
    ac: 13,
    hp: 4, // (1d4 + 2)
    hd: [1, 4], // [#, die]
    speed: "20 ft, fly 30 ft",
    
    scores: [3, 16, 12, 2, 12, 7], // [Str, Dex, Con, Int, Wis, Cha]
    
    skills : {
        "acrobatics": +5,
        "perception": +3
    },
    
    senses : "Passive Perception 13",
    
    languages : "-",
    
    challengeRating : "1/4",
    
    proficiencyBonus : 2,
    
    traits : [{
        name : "Keen Smell",
        description : "The Bumble Bear has advantage on Wisdom (Perception) checks that rely on smell."
    }],
    
    attacksAction : 1,
    
    attacks : [{
        name : "Sting",
        ability : 2,
        damage : [1, "", "piercing"], // [#, die, type]
        range : "Melee (5 ft)",
        description : `The target must make a DC 11 Constitution saving throw. On a failed save, the target takes an additional 10 (3d6) poison damage. If the poison damage reduces the target to 0 hit points, the target is stable but poisoned for one hour and is paralyzed while poisoned in this way.`
     }]
};

CreatureList["cactoor"] = {
    name: "Cactoor",
    source: [["GF", 1]],
    size: 5, // Tiny
    type: "Plant",
    alignment: "Unaligned",
    ac: 14, // Natural Armor
    hp: 7, // (2d4 + 2)
    hd: [2, 4], // [#, die]
    speed: "30 ft",
    
    scores: [6, 14, 12, 3, 12, 10], // [Str, Dex, Con, Int, Wis, Cha]
    
    skills : {
        "perception": +3
    },
    
    senses : "Tremorsense 5 ft",
    passivePerception : 13,
    
    languages : "-",
    
    challengeRating : "1/4",
    
    proficiencyBonus : 2,
    
    traits : [{
        name : "Desert Dweller",
        description : "The Cactoor is acclimated to deserts and naturally adapted to extreme heat."
    }, {
        name : "False Appearance",
        description : "While the Cactoor remains motionless, it is indistinguishable from a tiny cactus."
    }, {
        name : "Prickly",
        description : "A creature that touches the Cactoor takes piercing damage equal to its proficiency bonus (2)."
    }],
    
    attacksAction : 1,
    
    attacks : [{
        name : "Ram",
        ability : 1,
        damage : [1, 6, "piercing"], // [#, die, type]
        range : "Melee (5 ft)",
        description : ""
     }, {
        name: "Barrage (2/Day)",
        ability: 2,
        damage: [2, 6, "piercing"], // [#, die, type]
        range: "30 ft",
        description: `The Cactoor unleashes a barrage of spines to a point within 30 feet of itself. Creatures within a 5-foot-radius sphere must make a DC 12 Dexterity saving throw. On a failed save, they take full damage; on success, they take half.`
     }],
     
     features : [{
         name : "Create Water (1/Day)",
         description : "The Cactoor can create up to 1 gallon of clean water within 5 feet of itself."
     }]
};

CreatureList["carbuncle"] = {
    name: "Carbuncle",
    source: [["GF", 1]],
    size: 4, // Small
    type: "Monstrosity",
    alignment: "Typically Neutral",
    ac: 12,
    hp: 5, // (1d6 + 2)
    hd: [1, 6], // [#, die]
    speed: "30 ft",
    
    scores: [9, 14, 14, 12, 11, 14], // [Str, Dex, Con, Int, Wis, Cha]
    
    skills : {
        "stealth": +5
    },
    
    senses : "Darkvision 60 ft",
    passivePerception : 11,
    
    languages : "-",
    
    challengeRating : "1/8",
    
    proficiencyBonus : 2,
    
    traits : [{
        name : "Treasure Scent",
        description : `The Carbuncle can detect the presence and direction of precious metals and gems within a range of up to 30 feet. It can't detect treasure if more than five feet of stone or one foot of common metal blocks the path.`
     }],
     
     innateSpellcasting: {
         ability: "Charisma",
         saveDC: 12,
         spells: {
             atWill: ["blade ward", "light"],
             daily1: ["mislead", "shield"]
         }
     },
     
     attacksAction : 1,
     
     attacks : [{
         name : "Bite",
         ability : 1,
         damage : [1, "", "piercing"], // [#, die, type]
         range : "Melee (5 ft)",
         description : ""
     }]
};

CreatureList["catspider"] = {
    name: "Catspider",
    source: [["GF", 1]],
    size: 5, // Tiny
    type: "Monstrosity",
    alignment: "Typically Chaotic Neutral",
    ac: 13,
    hp: 5, // (2d4)
    hd: [2, 4], // [#, die]
    speed: "40 ft, climb 40 ft",
    
    scores: [4, 16, 10, 3, 12, 7], // [Str, Dex, Con, Int, Wis, Cha]
    
    skills : {
        "perception": +3,
        "stealth": +5
    },
    
    senses : "Darkvision 30 ft",
    passivePerception : 13,
    
    languages : "-",
    
    challengeRating : "1/4",
    
    proficiencyBonus : 2,
    
    traits : [{
        name : "Keen Smell",
        description : "The catspider has advantage on Wisdom (Perception) checks that rely on smell."
     }, {
        name : "Spider Climb",
        description : "The catspider can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check."
     }, {
        name : "Web Sense",
        description : "While in contact with a web, the catspider knows the exact location of any other creature in contact with the same web."
     }, {
        name : "Web Walker",
        description : "The catspider ignores movement restrictions caused by webbing."
     }, {
        name : "Vermin Hunter",
        description : "The catspider has advantage on attack rolls against Beasts of its own size category or smaller."
     }],
     
     attacksAction : 1,
     
     attacks : [{
         name : "Bite",
         ability : 2,
         damage : [1, "", "piercing"], // [#, die, type]
         range : "Melee (5 ft)",
         description : `The target must succeed on a DC 10 Constitution saving throw or take an additional 3 (1d6) poison damage.`
     }]
};

CreatureList["cherub"] = {
    name: "Cherub",
    source: [["GF", 1]],
    size: 5, // Tiny
    type: "Celestial",
    alignment: "Typically Chaotic Good",
    ac: 13,
    hp: 6, // (2d4 + 1)
    hd: [2, 4], // [#, die]
    speed: "20 ft, fly 25 ft",

    scores: [4, 16, 12, 12, 12, 14], // [Str, Dex, Con, Int, Wis, Cha]

    skills: {
        "acrobatics": +5,
        "persuasion": +4
    },

    damageResistances: "radiant",

    senses: "Darkvision 60 ft",
    passivePerception: 11,

    languages: "Common, Celestial",

    challengeRating: "1/2",

    proficiencyBonus: 2,

    innateSpellcasting: {
        ability: "Charisma",
        saveDC: 12,
        spells: {
            atWill: ["friends"],
            daily1: ["charm person", "suggestion"]
        }
    },

    traits: [{
        name: "Angelic Weapons",
        description: `The cherub's weapon attacks are magical. When it hits with any weapon attack, it deals an extra radiant damage of its proficiency bonus (2).`
     }],

     attacksAction: 1,

     attacks: [{
         name: "Heartwood Bow",
         ability: 2,
         damage: [1, "", "piercing"], // [#, die, type]
         range: "Ranged (80/160 ft)",
         description: `On a hit with this bow attack, the cherub can cast *charm person* or *suggestion* upon the target (if available), even if the target is out of spell range.`
     }]
};

CreatureList["chromatic whelk"] = {
    name: "Chromatic Whelk",
    source: [["GF", 1]],
    size: 5, // Tiny
    type: "Monstrosity",
    alignment: "Unaligned",
    ac: 12, // Natural Armor
    hp: 5, // (2d4)
    hd: [2, 4], // [#, die]
    speed: "15 ft, climb 15 ft",
    
    scores: [10, 5, 11, 6, 10, 3], // [Str, Dex, Con, Int, Wis, Cha]
    
    savingThrows: {
        str: "+2",
        dex: "-1",
        con: "+2",
        int: "+0",
        wis: "+2",
        cha: "-2"
    },
    
    senses : "Darkvision 60 ft",
    passivePerception : 11,
    
    languages : "-",
    
    challengeRating : "1/4",
    
    proficiencyBonus : 2,
    
    innateSpellcasting : {
        ability : "Charisma",
        saveDC : 10,
        spells : {
            atWill : ["dancing lights", "resistance", "shield"],
            daily1 : ["treasure scent"]
        }
    },
    
    traits : [{
        name : "Magic Resistance",
        description : "The chromatic whelk has advantage on saving throws against spells and other magical effects."
     }, {
        name : "Spider Climb",
        description : "The chromatic whelk can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check."
     }],
     
     attacksAction : 1,
     
     attacks : [{
         name : "Bite",
         ability : 1,
         damage : [1, 4, "piercing"], // [#, die, type]
         range : "Melee (5 ft)",
         description : ""
     }]
};
CreatureList["fluttering oculus"] = {
    name: "Fluttering Oculus",
    source: [["GF", 1]],
    size: 5, // Tiny
    type: "Aberration",
    alignment: "Unaligned",
    ac: 13, // Natural Armor
    hp: 2, // (1d4)
    hd: [1, 4], // [#, die]
    speed: "0 ft, fly 40 ft (hover)",
    
    scores: [3, 12, 10, 12, 16, 5], // [Str, Dex, Con, Int, Wis, Cha]
    
    skills : {
        "investigation": +3,
        "perception": +5
    },
    
    damageImmunities : "poison",
    conditionImmunities : "charmed, poisoned",
    
    senses : "Darkvision 60 ft",
    passivePerception : 17,
    
    languages : "-",
    
    challengeRating : "1/8",
    
    proficiencyBonus : 2,
    
    traits : [{
        name : "Vigilant",
        description : "The fluttering oculus can't be surprised."
     }, {
        name : "Telepathic Bond",
        description : "While the fluttering oculus is on the same plane of existence as its master, it can magically convey what it senses to its master, and the two can communicate telepathically."
     }],
     
     attacksAction : 1,
     
     attacks : [{
         name : "Eyebeam",
         ability : 2,
         damage : [1, 6, "force"], // [#, die, type]
         range : "Ranged (15/30 ft)",
         description : ""
     }],
     
     features : [{
         name : "Holograph (1/Day)",
         description : `The fluttering oculus scans the area around itself to a distance of 30 feet and stores the image in its memory. It can later use this ability to project the stored image as a transparent illusion. The fluttering oculus can only store one such image in its memory at a time.`
     }]
};

CreatureList["gili-geli"] = {
    name: "Gili-Geli",
    source: [["GF", 1]],
    size: 5, // Tiny
    type: "Fey",
    alignment: "Typically Chaotic Neutral",
    ac: 14,
    hp: 5, // (2d4)
    hd: [2, 4], // [#, die]
    speed: "0 ft., fly 30 ft (hover)",

    scores: [3, 18, 10, 11, 13, 14], // [Str, Dex, Con, Int, Wis, Cha]

    skills: {
        perception: +3,
        stealth: +6
    },

    senses: "Passive Perception 13",

    languages: "Sylvan",

    challengeRating: "1/8",

    proficiencyBonus: 2,

    traits : [{
        name : "Flyby",
        description : "The gili-geli doesn't provoke opportunity attacks when it flies out of an enemy's reach."
     }],

     innateSpellcasting: {
         ability: "Charisma",
         saveDC: 12,
         spells: {
             atWill: ["gust", "misty step", "vicious mockery"],
             daily1: ["expeditious retreat", "gust of wind", "gaseous form"]
         }
     },

     attacksAction : 1,

     attacks : [{
         name : "Claw",
         ability : 2,
         damage : [1, "", "slashing"], // [#, die, type]
         range : "Melee (5 ft)",
         description : ""
     }]
};
CreatureList["glumping poozer"] = {
    name: "Glumping Poozer",
    source: [["GF", 1]],
    size: 5, // Tiny
    type: "Aberration",
    alignment: "Unaligned",
    ac: 12,
    hp: 7, // (2d4 + 2)
    hd: [2, 4], // [#, die]
    speed: "30 ft, climb 15 ft",
    
    scores: [13, 15, 13, 2, 13, 8], // [Str, Dex, Con, Int, Wis, Cha]
    
    skills : {
        "perception": +3,
        "stealth": +4
    },
    
    senses : "Blindsight 30 ft (blind beyond this radius), passive Perception 10",
    
    languages : "-",
    
    challengeRating : "1/8",
    
    proficiencyBonus : 2,
    
    traits : [{
        name : "Echolocation",
        description : "The poozer can't use its blindsight while deafened."
     }, {
        name : "Chromatophores",
        description : "While the poozer remains motionless, it is indistinguishable from nonmagical terrain unless a creature succeeds on a DC 13 Intelligence (Investigation) check."
     }],
     
     attacksAction : 1,
     
     attacks : [{
         name : "Proboscis",
         ability : 1,
         damage : [1, "", "acid"], // [#, die, type]
         range : "Melee (5 ft)",
         description : ""
     }],
     
     bonusActions : [{
         name : "Attune Antennae (Recharges after a Short or Long Rest)",
         description : `The poozer casts the *detect evil and good* or *detect magic* spell without requiring verbal or material components. It doesn't need to concentrate on the spell. The spell ends if the poozer is incapacitated or paralyzed.`
     }]
};

CreatureList["griffon chick"] = {
    name: "Griffon Chick",
    source: [["GF", 1]],
    size: 5, // Tiny
    type: "Monstrosity",
    alignment: "Unaligned",
    ac: 12,
    hp: 7, // (2d4 + 2)
    hd: [2, 4], // [#, die]
    speed: "25 ft., fly 50 ft",

    scores: [13, 15, 13, 2, 13, 8], // [Str, Dex, Con, Int, Wis, Cha]

    skills: {
        perception: +3
    },

    senses: "Darkvision 60 ft., passive Perception 10",

    languages: "-",

    challengeRating: "1/8",

    proficiencyBonus: 2,

    traits : [{
        name : "Keen Sight",
        description : `The griffon chick has advantage on Wisdom (Perception) checks that rely on sight.`
     }],

     attacksAction : 2,

     attacks : [{
         name : "Beak",
         ability : 1,
         damage : [1, "", "piercing"], // [#, die, type]
         range : "Melee (5 ft)",
         description : ""
     }, {
         name : "Claws",
         ability : 1,
         damage : [1, "", "slashing"], // [#, die, type]
         range : "Melee (5 ft)",
         description : ""
     }]
};

CreatureList["ikkrippe"] = {
    name: "Ikkrippe",
    source: [["GF", 1]],
    size: 5, // Tiny
    type: "Monstrosity",
    alignment: "Typically Neutral Evil",
    ac: 13,
    hp: 7, // (2d4 + 2)
    hd: [2, 4], // [#, die]
    speed: "30 ft., climb 30 ft.",
    
    scores: [9, 16, 13, 4, 14, 8], // [Str, Dex, Con, Int, Wis, Cha]
    
    skills : {
        "perception": +4,
        "stealth": +5
    },
    
    damageResistances : "piercing, bludgeoning",
    
    senses : "Darkvision 60 ft., Tremorsense 10 ft., passive Perception 14",
    
    languages : "-",
    
    challengeRating : "1/8",
    
    proficiencyBonus : 2,
    
    traits : [{
        name : "Keen Sight",
        description : "The ikkrippe has advantage on Wisdom (Perception) checks that rely on sight."
     }, {
        name : "Spider Climb",
        description : "The ikkrippe can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check."
     }],
     
     attacksAction : 1,
     
     attacks : [{
         name : "Sickening Gaze",
         ability : 3,
         damage : [1, 4 + 2, "necrotic"], // [#, die, type]
         range : "Ranged (30 ft)",
         description : `The target must succeed on a DC 11 Constitution saving throw or become poisoned for 1 minute.`
     }]
};

CreatureList["illuminant mantis"] = {
    name: "Illuminant Mantis",
    source: [["GF", 1]],
    size: 5, // Tiny
    type: "Fey",
    alignment: "Typically Chaotic Neutral",
    ac: 14,
    hp: 3, // (1d4 + 1)
    hd: [1, 4], // [#, die]
    speed: "15 ft., fly 25 ft.",
    
    scores: [3, 18, 13, 9, 12, 14], // [Str, Dex, Con, Int, Wis, Cha]
    
    senses : "Darkvision 60 ft., passive Perception 11",
    
    languages : "Sylvan",
    
    challengeRating : "1/8",
    
    proficiencyBonus : 2,
    
    traits : [{
        name : "Magic Resistance",
        description : "The mantis has advantage on saving throws against spells and other magical effects."
     }],
     
     innateSpellcasting: {
         ability: "Charisma",
         saveDC: 12,
         spells: {
             atWill: ["dancing lights"],
             daily1: ["invisibility"]
         }
     },
     
     attacksAction : 1,
     
     attacks : [{
         name : "Bugaboo",
         ability : 3,
         damage : [1, 4, "poison"], // [#, die, type]
         range : "Ranged (60 ft)",
         description : `The target must succeed on a DC 12 Constitution saving throw or take poison damage and move randomly by rolling a d4 (north/south/east/west). This movement doesn't provoke opportunity attacks.`
     }]
};
CreatureList["infectious protozoan"] = {
    name: "Infectious Protozoan",
    source: [["GF", 1]],
    size: 5, // Tiny
    type: "Aberration",
    alignment: "Unaligned",
    ac: 13,
    hp: 9, // (2d4 + 4)
    hd: [2, 4], // [#, die]
    speed: "0 ft., fly 35 ft. (hover)",
    
    scores: [3, 16, 14, 2, 10, 5], // [Str, Dex, Con, Int, Wis, Cha]
    
    senses : "Darkvision 120 ft., passive Perception 10",
    
    languages : "-",
    
    challengeRating : "1/8",
    
    proficiencyBonus : 2,
    
    traits : [{
        name : "Flyby",
        description : "The protozoan doesn't provoke opportunity attacks when it flies out of an enemy's reach."
     }],
     
     attacksAction : 1,
     
     attacks : [{
         name : "Bite",
         ability : 2,
         damage : [1, "", "poison"], // [#, die, type]
         range : "Melee (5 ft)",
         description : ""
     }, {
         name : "Infect (2/Day)",
         ability : 3,
         damage : ["", "", ""], // No direct damage
         range : "10 ft",
         description : `The protozoan expels an infectious goo onto a creature it can see within range. The target must make a DC 12 Constitution saving throw. On a failed save, the creature is poisoned for 24 hours. While poisoned in this way, at the start of each of its turns, it rolls a d4. On a roll of 1, it spends its action that turn coughing and retching. Creatures immune to poison automatically succeed on this saving throw.`
     }]
};
CreatureList["jellicat"] = {
    name: "Jellicat",
    source: [["GF", 1]],
    size: 5, // Tiny
    type: "Monstrosity",
    alignment: "Unaligned",
    ac: 13,
    hp: 5, // (2d4)
    hd: [2, 4], // [#, die]
    speed: "5 ft., swim 30 ft.",
    
    scores: [8, 16, 10, 4, 14, 8], // [Str, Dex, Con, Int, Wis, Cha]
    
    skills : {
        "perception": +4,
        "stealth": +5
    },
    
    damageResistances : "piercing",
    
    senses : "Blindsight 10 ft., Darkvision 60 ft., passive Perception 12",
    
    languages : "-",
    
    challengeRating : "1/8",
    
    proficiencyBonus : 2,
    
    traits : [{
        name : "Keen Sight",
        description : "The jellicat has advantage on Wisdom (Perception) checks that rely on sight."
     }, {
        name : "Invisibility",
        description : `The jellicat magically turns invisible until it attacks or casts a spell or until its concentration ends (as if concentrating on a spell). Any equipment the jellicat wears or carries is invisible with it.`
     }],
     
     attacksAction : 1,
     
     attacks : [{
         name : "Stinging Tentacles",
         ability : 2,
         damage : [1, "", "poison"], // [#, die, type]
         range : "Melee (5 ft)",
         description : `On a hit against a Tiny creature, the target is grappled (escape DC 9).`
     }]
};

CreatureList["ki-rin youngling"] = {
    name: "Ki-rin Youngling",
    source: [["GF", 1]],
    size: 4, // Small
    type: "Celestial",
    alignment: "Typically Lawful Good",
    ac: 15, // Natural Armor
    hp: 10, // (3d4 + 3)
    hd: [3, 4], // [#, die]
    speed: "20 ft., fly 40 ft. (hover)",
    
    scores: [10, 12, 12, 14, 15, 16], // [Str, Dex, Con, Int, Wis, Cha]
    
    skills : {
        "insight": +4,
        "perception": +4
    },
    
    damageImmunities : "poison",
    conditionImmunities : "poisoned",
    
    senses : "Darkvision 60 ft., passive Perception 14",
    
    languages : "Celestial, Common, telepathy 60 ft.",
    
    challengeRating : "1",
    
    proficiencyBonus : 2,
    
    innateSpellcasting: {
        ability: "Charisma",
        saveDC: 13,
        spells: {
            atWill: ["light", "mending", "thaumaturgy"],
            daily1: ["fog cloud", "gaseous form", "protection from poison"]
        }
    },
    
    traits : [{
        name : "Magic Resistance",
        description : "The ki-rin has advantage on saving throws against spells and other magical effects."
     }],
     
     attacksAction : 1,
     
     attacks : [{
         name : "Sacred Flame",
         ability : 6,
         damage : [4, 4, "radiant"], // [#, die, type]
         range : "Ranged (30 ft)",
         description : ""
     }]
};

CreatureList["kodama"] = {
    name: "Kodama",
    source: [["GF", 1]],
    size: 5, // Tiny
    type: "Plant",
    alignment: "Typically Neutral",
    ac: 16, // Natural Armor
    hp: 9, // (2d4 + 4)
    hd: [2, 4], // [#, die]
    speed: "25 ft., climb 15 ft.",
    
    scores: [9, 13, 14, 4, 15, 8], // [Str, Dex, Con, Int, Wis, Cha]
    
    damageVulnerabilities : "fire",
    damageResistances : "piercing, bludgeoning",
    
    senses : "Darkvision 60 ft., passive Perception 12",
    
    languages : "Common, Druidic, Elvish, Sylvan",
    
    challengeRating : "1/8",
    
    proficiencyBonus : 2,
    
    innateSpellcasting: {
        ability: "Wisdom",
        saveDC: 12,
        spells: {
            atWill: ["druidcraft"]
        }
     },
     
     attacksAction : 1,
     
     attacks : [{
         name : "Shillelagh",
         ability : 5,
         damage : [1, "", "bludgeoning"], // [#, die, type]
         range : "Melee (5 ft)",
         description : ""
     }]
};

CreatureList["mechanical wyrmling"] = {
    name: "Mechanical Wyrmling",
    source: [["GF", 1]],
    size: 5, // Tiny
    type: "Construct",
    alignment: "Typically Lawful Neutral",
    ac: 13, // Natural Armor
    hp: 6, // (2d4 + 2)
    hd: [2, 4], // [#, die]
    speed: "20 ft., fly 25 ft.",
    
    scores: [10, 10, 13, 8, 9, 5], // [Str, Dex, Con, Int, Wis, Cha]
    
    damageImmunities : "poison, psychic",
    
    senses : "Darkvision 60 ft., passive Perception 9",
    
    languages : "Common, Draconic",
    
    challengeRating : "1/4",
    
    proficiencyBonus : 2,
    
    traits : [{
        name : "False Appearance",
        description : "While the mechanical wyrmling remains motionless, it is indistinguishable from a small metallic statue."
     }, {
        name : "Magic Resistance",
        description : "The mechanical wyrmling has advantage on saving throws against spells and other magical effects."
     }],
     
     attacksAction : 1,
     
     attacks : [{
         name : "Bite",
         ability : 1,
         damage : [1, "", "piercing"], // [#, die, type]
         range : "Melee (5 ft)",
         description : ""
     }, {
         name: "Steam Breath (Recharge 5-6)",
         ability: 3,
         damage: [2, 6, "fire"], // [#, die, type]
         range: "15 ft. cone",
         description: `Each creature in the area must make a DC 12 Dexterity saving throw. On a failed save, the creature takes full damage; on a successful save, it takes half as much.`
     }]
};

CreatureList["mimic infant"] = {
    name: "Mimic Infant",
    source: [["GF", 1]],
    size: 5, // Tiny
    type: "Monstrosity (Shapechanger)",
    alignment: "Neutral",
    ac: 11,
    hp: 7, // (2d4 + 2)
    hd: [2, 4], // [#, die]
    speed: "10 ft., climb 10 ft.",
    
    scores: [1, 12, 13, 10, 13, 10], // [Str, Dex, Con, Int, Wis, Cha]
    
    skills : {
        stealth: +3
    },
    
    damageImmunities : "acid",
    
    conditionImmunities : "prone",
    
    senses : "Darkvision 60 ft., passive Perception 11",
    
    languages : "Common, Undercommon; telepathy 120 ft.",
    
    challengeRating : "0",
    
    proficiencyBonus : 2,
    
    traits : [{
        name : "False Appearance (Object Form Only)",
        description : "While the mimic remains motionless in object form, it is indistinguishable from an ordinary object."
     }, {
        name : "Spider Climb",
        description : "The mimic can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check."
     }],
     
     actionsAction : [{
         name : "Bite",
         ability : 2,
         damage : [1, 4, "piercing"], // [#, die, type]
         range : "Melee (5 ft)",
         description : `Plus an additional (1d4) acid damage.`
     }, {
         name: "Shape-Shift",
         description: `The mimic polymorphs into an object or back into its true amorphous form. Its statistics remain the same in each form. It reverts to its true form if it dies.`
     }]
};

CreatureList["mini drone"] = {
    name: "Mini Drone",
    source: [["GF", 1]],
    size: 5, // Tiny
    type: "Construct",
    alignment: "Unaligned",
    ac: 14, // Natural Armor
    hp: 6, // (2d4 + 2)
    hd: [2, 4], // [#, die]
    speed: "0 ft., fly 40 ft. (hover)",
    
    scores: [3, 16, 12, 10, 10, 7], // [Str, Dex, Con, Int, Wis, Cha]
    
    senses : "Darkvision 60 ft., passive Perception 10",
    
    languages : "-",
    
    challengeRating : "1/8",
    
    proficiencyBonus : 2,
    
    traits : [{
        name : "Flyby",
        description : "The mini drone doesn't provoke opportunity attacks when it flies out of an enemy's reach."
     }, {
        name : "Camera Feed",
        description : "The mini drone can transmit visual data to a designated receiver within a range of up to 120 feet. The feed can be viewed in real time by creatures with access to the receiver."
     }],
     
     attacksAction : 1,
     
     attacks : [{
         name : "Shock Prod",
         ability : 2,
         damage : [1, "", "lightning"], // [#, die, type]
         range : "Melee (5 ft)",
         description : `On a hit, the target must succeed on a DC 11 Constitution saving throw or be stunned until the end of its next turn.`
     }]
};

CreatureList["mote of earth"] = {
    name: "Mote of Earth",
    source: [["GF", 1]],
    size: 5, // Tiny
    type: "Elemental",
    alignment: "Unaligned",
    ac: 13,
    hp: 8, // (2d4 + 4)
    hd: [2, 4], // [#, die]
    speed: "20 ft., burrow 20 ft.",
    
    scores: [12, 10, 14, 5, 11, 6], // [Str, Dex, Con, Int, Wis, Cha]
    
    damageResistances : "bludgeoning, piercing",
    
    conditionImmunities : "prone",
    
    senses : "Tremorsense 30 ft., passive Perception 10",
    
    languages : "-",
    
    challengeRating : "1/8",
    
    proficiencyBonus : 2,
    
    traits : [{
        name : "Earth Glide",
        description : "The mote of earth can move through nonmagical unworked earth and stone without disturbing the material it moves through."
     }],
     
     attacksAction : 1,
     
     attacks : [{
         name : "Slam",
         ability : 1,
         damage : [1 + "", "", "bludgeoning"], // [#, die, type]
         range : "Melee (5 ft)",
         description : ""
     }]
};

CreatureList["mote of fire"] = {
    name: "Mote of Fire",
    source: [["GF", 1]],
    size: 5, // Tiny
    type: "Elemental",
    alignment: "Unaligned",
    ac: 13,
    hp: 8, // (2d4 + 4)
    hd: [2, 4], // [#, die]
    speed: "20 ft., fly 30 ft.",
    
    scores: [10, 14, 12, 5, 11, 6], // [Str, Dex, Con, Int, Wis, Cha]
    
    damageImmunities : "fire",
    damageVulnerabilities : "cold",
    
    senses : "Darkvision 60 ft., passive Perception 10",
    
    languages : "-",
    
    challengeRating : "1/8",
    
    proficiencyBonus : 2,
    
    traits : [{
        name : "Illumination",
        description : "The mote sheds bright light in a 10-foot radius and dim light for an additional 10 feet."
     }, {
        name : "Fire Form",
        description : "A creature that touches the mote or hits it with a melee attack while within 5 feet of it takes 1 fire damage."
     }],
     
     attacksAction : 1,
     
     attacks : [{
         name : "Touch",
         ability : 2,
         damage : [1 + "", "", "fire"], // [#, die, type]
         range : "Melee (5 ft)",
         description : ""
     }]
};

CreatureList["mote of ice"] = {
    name: "Mote of Ice",
    source: [["GF", 1]],
    size: 5, // Tiny
    type: "Elemental",
    alignment: "Unaligned",
    ac: 13,
    hp: 8, // (2d4 + 4)
    hd: [2, 4], // [#, die]
    speed: "20 ft., fly (hover) 30 ft.",
    
    scores: [10, 14, 12, 5, 11, 6], // [Str, Dex, Con, Int, Wis, Cha]
    
    damageImmunities : "cold",
    damageVulnerabilities : "fire",
    
    senses : "Darkvision 60 ft., passive Perception 10",
    
    languages : "-",
    
    challengeRating : "1/8",
    
    proficiencyBonus : 2,
    
    traits : [{
        name : "Freezing Aura",
        description : "A creature that starts its turn within 5 feet of the mote must succeed on a DC 10 Constitution saving throw or take 1 cold damage."
     }],
     
     attacksAction : 1,
     
     attacks : [{
         name : "Chill Touch",
         ability : 2,
         damage : [1 + "", "", "cold"], // [#, die, type]
         range : "Melee (5 ft)",
         description : ""
     }]
};

CreatureList["mote of light"] = {
    name: "Mote of Light",
    source: [["GF", 1]],
    size: 5, // Tiny
    type: "Elemental",
    alignment: "Unaligned",
    ac: 13,
    hp: 8, // (2d4 + 4)
    hd: [2, 4], // [#, die]
    speed: "0 ft., fly 40 ft. (hover)",
    
    scores: [3, 16, 12, 5, 12, 10], // [Str, Dex, Con, Int, Wis, Cha]
    
    damageImmunities : "radiant",
    
    senses : "Darkvision 60 ft., passive Perception 10",
    
    languages : "-",
    
    challengeRating : "1/8",
    
    proficiencyBonus : 2,
    
    traits : [{
        name : "Illumination",
        description : "The mote sheds bright light in a 20-foot radius and dim light for an additional 20 feet."
     }, {
        name : "Positive Energy",
        description : "The mote heals for an additional 50% from any magical healing it receives."
     }],
     
     attacksAction : 1,
     
     attacks : [{
         name : "Light Ray",
         ability : 2,
         damage : [1, 6, "radiant"], // [#, die, type]
         range : "Ranged (30 ft)",
         description : ""
     }]
};

CreatureList["mote of shadow"] = {
    name: "Mote of Shadow",
    source: [["GF", 1]],
    size: 5, // Tiny
    type: "Undead",
    alignment: "Chaotic Evil",
    ac: 12,
    hp: 8, // (2d4 + 4)
    hd: [2, 4], // [#, die]
    speed: "0 ft., fly 40 ft. (hover)",
    
    scores: [3, 14, 12, 6, 10, 8], // [Str, Dex, Con, Int, Wis, Cha]
    
    damageImmunities : "necrotic",
    damageVulnerabilities : "radiant",
    
    senses : "Darkvision 60 ft., passive Perception 10",
    
    languages : "-",
    
    challengeRating : "1/8",
    
    proficiencyBonus : 2,
    
    traits : [{
        name : "Shadow Stealth",
        description : "While in dim light or darkness, the mote can take the Hide action as a bonus action."
     }, {
        name : "Sunlight Weakness",
        description : "While in sunlight, the mote has disadvantage on attack rolls and saving throws."
     }],
     
     attacksAction : 1,
     
     attacks : [{
         name : "Shadow Drain",
         ability : 2,
         damage : [1 + "", "", "necrotic"], // [#, die, type]
         range : "Melee (5 ft)",
         description : `On a hit, the target must succeed on a DC 11 Constitution saving throw or have its Strength score reduced by 1d4.`
     }]
};

CreatureList["oozeling"] = {
    name: "Oozeling",
    source: [["GF", 1]],
    size: 5, // Tiny
    type: "Ooze",
    alignment: "Unaligned",
    ac: 8,
    hp: 10, // (3d4 + 3)
    hd: [3, 4], // [#, die]
    speed: "10 ft., climb 10 ft.",
    
    scores: [8, 6, 12, 2, 10, 3], // [Str, Dex, Con, Int, Wis, Cha]
    
    damageResistances : "acid",
    
    conditionImmunities : "blinded, charmed, deafened, exhaustion, prone",
    
    senses : "Blindsight 30 ft. (blind beyond this radius), passive Perception 10",
    
    languages : "-",
    
    challengeRating : "1/8",
    
    proficiencyBonus : 2,
    
    traits : [{
        name : "Amorphous",
        description : "The oozeling can move through a space as narrow as 1 inch wide without squeezing."
     }, {
        name : "Corrosive Form",
        description : "A creature that touches the oozeling or hits it with a melee attack while within 5 feet of it takes 1 acid damage."
     }],
     
     attacksAction : 1,
     
     attacks : [{
         name : "Pseudopod",
         ability : 1,
         damage : [1 + "", "", "acid"], // [#, die, type]
         range : "Melee (5 ft)",
         description : ""
     }]
};

CreatureList["otak"] = {
    name: "Otak",
    source: [["GF", 1]],
    size: 5, // Tiny
    type: "Beast",
    alignment: "Typically Neutral Evil",
    ac: 13,
    hp: 9, // (2d4 + 4)
    hd: [2, 4], // [#, die]
    speed: "30 ft., burrow 10 ft.",
    
    scores: [10, 14, 12, 6, 12, 7], // [Str, Dex, Con, Int, Wis, Cha]
    
    skills : {
        perception: +3,
        stealth: +5
    },
    
    senses : "Darkvision 60 ft., passive Perception 13",
    
    languages : "-",
    
    challengeRating : "1/4",
    
    proficiencyBonus : 2,
    
    traits : [{
        name : "Keen Smell",
        description : "The otak has advantage on Wisdom (Perception) checks that rely on smell."
     }, {
        name : "Tunneler",
        description : "The otak can burrow through solid rock at half its burrow speed and leaves a tunnel in its wake."
     }],
     
     attacksAction : 1,
     
     attacks : [{
         name : "Bite",
         ability : 1,
         damage : [1 + "", "", "piercing"], // [#, die, type]
         range : "Melee (5 ft)",
         description : ""
     }]
};

CreatureList["paper drake"] = {
    name: "Paper Drake",
    source: [["GF", 1]],
    size: 5, // Tiny
    type: "Construct",
    alignment: "Typically Neutral",
    ac: 12, // Natural Armor
    hp: 6, // (2d4 + 2)
    hd: [2, 4], // [#, die]
    speed: "20 ft., fly 40 ft.",
    
    scores: [4, 16, 10, 12, 11, 7], // [Str, Dex, Con, Int, Wis, Cha]
    
    damageVulnerabilities : "fire",
    
    senses : "Darkvision 60 ft., passive Perception 10",
    
    languages : "-",
    
    challengeRating : "1/8",
    
    proficiencyBonus : 2,
    
    traits : [{
        name : "False Appearance",
        description : "While the paper drake remains motionless, it is indistinguishable from a piece of folded paper."
     }, {
        name : "Fragile Form",
        description : "The paper drake has disadvantage on saving throws to avoid damage from area effects like fireball."
     }],
     
     attacksAction : 1,
     
     attacks : [{
         name : "Paper Cut",
         ability : 2,
         damage : [1 + "", "", "slashing"], // [#, die, type]
         range : "Melee (5 ft)",
         description : ""
     }, {
         name: "Paper Shred (Recharge 5-6)",
         ability: 2,
         damage: [2, 6, "slashing"], // [#, die, type]
         range: "15 ft. cone",
         description: `Each creature in the area must make a DC 11 Dexterity saving throw. On a failed save, the creature takes full damage; on a successful save, it takes half as much.`
     }]
};

CreatureList["phoenix hatchling"] = {
    name: "Phoenix Hatchling",
    source: [["D&D Wiki", 1]],
    size: 5, // Tiny
    type: "Elemental",
    alignment: "Typically Chaotic Good",
    ac: 13,
    hp: 10, // (3d4 + 3)
    hd: [3, 4], // [#, die]
    speed: "20 ft., fly 40 ft.",
    
    scores: [6, 14, 12, 10, 12, 16], // [Str, Dex, Con, Int, Wis, Cha]
    
    damageResistances : "cold",
    damageImmunities : "fire",
    
    senses : "Darkvision 120 ft., passive Perception 13",
    
    languages : "-",
    
    challengeRating : "1/4",
    
    proficiencyBonus : 2,
    
    traits : [{
        name : "Fiery Aura",
        description : `A creature that touches the phoenix hatchling or hits it with a melee attack while within 5 feet of it takes fire damage equal to the phoenix's proficiency bonus (2).`
     }, {
        name : "Rebirth (1/Day)",
        description : `When the phoenix hatchling is reduced to zero hit points but not killed outright, it explodes in a burst of flame. Each creature within a 10-foot radius must make a DC 12 Dexterity saving throw or take fire damage equal to half the phoenix's hit points. The phoenix hatchling reforms at full health in an unoccupied space within that radius.`
     }],
     
     attacksAction : 1,
     
     attacks : [{
         name : "Fiery Talons",
         ability : 2,
         damage : [1 + "", "", "fire"], // [#, die, type]
         range : "Melee (5 ft)",
         description : ""
     }]
};

CreatureList["skull servant"] = {
    name: "Skull Servant",
    source: [["GF", 1]],
    size: 4, // Small
    type: "Undead",
    alignment: "Neutral Evil",
    ac: 12, // Natural Armor
    hp: 9, // (2d6 + 2)
    hd: [2, 6], // [#, die]
    speed: "30 ft.",
    
    scores: [10, 14, 12, 6, 10, 5], // [Str, Dex, Con, Int, Wis, Cha]
    
    damageImmunities : "poison",
    conditionImmunities : "poisoned",
    
    senses : "Darkvision 60 ft., passive Perception 10",
    
    languages : "Understands Common but can't speak",
    
    challengeRating : "1/4",
    
    proficiencyBonus : 2,
    
    traits : [{
        name : "Undead Fortitude",
        description : "If damage reduces the skull servant to 0 hit points, it must make a Constitution saving throw with a DC of 5 + the damage taken, unless the damage is radiant or from a critical hit. On a success, the skull servant drops to 1 hit point instead."
     }],
     
     attacksAction : 1,
     
     attacks : [{
         name : "Shortsword",
         ability : 1,
         damage : [1 + "", "", "piercing"], // [#, die, type]
         range : "Melee (5 ft)",
         description : ""
     }]
};
CreatureList["sporeling"] = {
    name: "Sporeling",
    source: [["GF", 1]],
    size: 5, // Tiny
    type: "Plant",
    alignment: "Typically Neutral",
    ac: 12,
    hp: 6, // (2d4 + 2)
    hd: [2, 4], // [#, die]
    speed: "20 ft.",
    
    scores: [8, 14, 12, 6, 13, 7], // [Str, Dex, Con, Int, Wis, Cha]
    
    damageResistances : "poison",
    
    conditionImmunities : "poisoned",
    
    senses : "Blindsight 30 ft., passive Perception 11",
    
    languages : "-",
    
    challengeRating : "1/8",
    
    proficiencyBonus : 2,
    
    traits : [{
        name : "Spore Cloud (Recharge 5-6)",
        description : `The sporeling releases a cloud of spores in a 10-foot radius. Each creature in that area must succeed on a DC 11 Constitution saving throw or be poisoned for one minute. A poisoned creature can repeat the saving throw at the end of each of its turns to end the effect on itself.`
     }],
     
     attacksAction : 1,
     
     attacks : [{
         name : "Claw",
         ability : 1,
         damage : [1 + "", "", "slashing"], // [#, die, type]
         range : "Melee (5 ft)",
         description : ""
     }]
};
CreatureList["unicorn foal"] = {
    name: "Unicorn Foal",
    source: [["GF", 1]],
    size: 4, // Small
    type: "Celestial",
    alignment: "Lawful Good",
    ac: 13, // Natural Armor
    hp: 9, // (2d6 + 2)
    hd: [2, 6], // [#, die]
    speed: "40 ft.",
    
    scores: [12, 14, 12, 10, 14, 16], // [Str, Dex, Con, Int, Wis, Cha]
    
    damageImmunities : "poison",
    conditionImmunities : "poisoned",
    
    senses : "Darkvision 60 ft., passive Perception 12",
    
    languages : "Celestial, Common",
    
    challengeRating : "1/4",
    
    proficiencyBonus : 2,
    
    traits : [{
        name : "Magic Resistance",
        description : "The unicorn foal has advantage on saving throws against spells and other magical effects."
     }, {
        name : "Healing Touch (1/Day)",
        description : "The unicorn foal touches another creature with its horn. The target regains hit points equal to 1d8 + the foal's Charisma modifier (3)."
     }],
     
     attacksAction : 1,
     
     attacks : [{
         name : "Hooves",
         ability : 1,
         damage : [1 + "", "", "bludgeoning"], // [#, die, type]
         range : "Melee (5 ft)",
         description : ""
     }]
};
CreatureList["winged monkey"] = {
    name: "Winged Monkey",
    source: [["GF", 1]],
    size: 5, // Tiny
    type: "Beast",
    alignment: "Chaotic Neutral",
    ac: 12,
    hp: 5, // (2d4)
    hd: [2, 4], // [#, die]
    speed: "20 ft., fly 30 ft.",
    
    scores: [8, 14, 10, 6, 12, 7], // [Str, Dex, Con, Int, Wis, Cha]
    
    skills : {
        perception: +3,
        stealth: +4
    },
    
    senses : "Passive Perception 13",
    
    languages : "-",
    
    challengeRating : "1/8",
    
    proficiencyBonus : 2,
    
    traits : [{
        name : "Flyby",
        description : "The winged monkey doesn't provoke opportunity attacks when it flies out of an enemy's reach."
     }],
     
     attacksAction : 1,
     
     attacks : [{
         name : "Bite",
         ability : 1,
         damage : [1 + "", "", "piercing"], // [#, die, type]
         range : "Melee (5 ft)",
         description : ""
     }]
};

CreatureList["winged piglet"] = {
    name: "Winged Piglet",
    source: [["GF", 1]],
    size: 5, // Tiny
    type: "Beast",
    alignment: "Typically Neutral Good",
    ac: 12,
    hp: 5, // (2d4)
    hd: [2, 4], // [#, die]
    speed: "20 ft., fly 30 ft.",
    
    scores: [8, 14, 10, 6, 12, 10], // [Str, Dex, Con, Int, Wis, Cha]
    
    senses : "Passive Perception 11",
    
    languages : "-",
    
    challengeRating : "1/8",
    
    proficiencyBonus : 2,
    
    traits : [{
        name : "Keen Smell",
        description : "The winged piglet has advantage on Wisdom (Perception) checks that rely on smell."
     }, {
        name : "Flyby",
        description : "The winged piglet doesn't provoke opportunity attacks when it flies out of an enemy's reach."
     }],
     
     attacksAction : 1,
     
     attacks : [{
         name : "Tusk",
         ability : 1,
         damage : [1 + "", "", "piercing"], // [#, die, type]
         range : "Melee (5 ft)",
         description : ""
     }]
};

CreatureList["wordworm"] = {
    name: "Wordworm",
    source: [["GF", 1]],
    size: 5, // Tiny
    type: "Aberration",
    alignment: "Typically Neutral Evil",
    ac: 11,
    hp: 4, // (1d4 + 2)
    hd: [1, 4], // [#, die]
    speed: "10 ft., burrow 10 ft.",
    
    scores: [3, 12, 10, 14, 13, 8], // [Str, Dex, Con, Int, Wis, Cha]
    
    skills : {
        arcana: +4,
        history: +4
    },
    
    senses : "Darkvision 30 ft., passive Perception 11",
    
    languages : "Telepathy (30 ft.)",
    
    challengeRating : "1/8",
    
    proficiencyBonus : 2,
    
    traits : [{
        name : "Psychic Drain",
        description : `The wordworm can drain knowledge from a creature it touches. The target must succeed on a DC 11 Intelligence saving throw or take psychic damage equal to the wordworm's proficiency bonus (2), and the wordworm learns one fact or piece of information from the target's mind.`
     }],
     
     attacksAction : 1,
     
     attacks : [{
         name : "Bite",
         ability : 1,
         damage : [1 + "", "", "piercing"], // [#, die, type]
         range : "Melee (5 ft)",
         description : ""
     }]
};
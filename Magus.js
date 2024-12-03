var iFileName = "Magus.js";

RequiredSheetVersion("13.2.0");

SourceList["MGH"] = {
    name: "Magus Homebrew",
    abbreviation: "MGH",
    group: "Custom Homebrew",
    date: "2024/12/02"
};

ClassList["magus"] = {
    regExpSearch: /magus/i,
    name: "Magus",
    source: ["MGH", 0],
    primaryAbility: "4",
    prereqs: "Intelligence 13",
    die: 10,
    saves: ["Con", "Int"],
    improvements: [0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 5, 5],
    armor : [
        [true, true, false, false],
    ],
    weaponProfs: [
        [true, true]
    ],
    spellcastingFactor : 2,
    spellcastingFactorRoundupMulti : true,
    spellcastingKnown : {
		cantrips : [2, 2, 2, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
		spells : [3, 4, 5, 5, 6, 6, 7, 7, 9, 9, 10, 10, 11, 11, 12, 12, 14, 14, 15, 15]
	},
    attacks : [1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
    subclasses: ["Esoteric Order", []],
    features: {
        "arcane armory": {
            name: "Arcane Armory",
            source: ["MGH", 0],
            minlevel: 1,
            description : "\n   You can perform a ritual over one hour to add a melee weapon, shield, or set of armor to your Arcane Armory." +
                          "\n   These items count as magical and are stored in extradimensional space. Bonus action to summon or shunt these items." +
                          "\n   Use my intelligence instead of dexterity when calculating armor class from this armor. Your Arcane Armory can hold a number of items equal to your Intelligence modifier +1 (minimum of one), with at least one being a weapon.",
            action : [["bonus action", " (Summon/Shunt)"]],
        },
        
        "fighting style": {
            name: "Fighting Style",
            source: ["MGH", 0],
            minlevel: 1,
            description: "\n   Choose a Fighting Style:\n   \u2022 Archery: +2 bonus to attack rolls with ranged weapons.\n   \u2022 Thrown Weapon: Draw thrown weapons as part of the attack, +2 bonus to damage on hit.",
            choices: ["Archery", "Thrown Weapon"],
            "archery": FightingStyles.archery,
            
            "classical swordplay": {
                name : "Classical Swordplay Fighting Style",
                description : "\n   While wielding a finesse weapon and no other weapons," +
                              "\n   you gain a +2 bonus to weapon attack rolls and a +1 to Armor Class," +
                              "\n   so long as you are not using heavy armor or a shield."
            },
            
            "defensive fighting": FightingStyles.defense,
            
            "dual wielding": FightingStyles.duelwielding,
            
            "dueling": FightingStyles.dueling,
            
            "protector": {
                name : "Protector Fighting Style",
                description : "\n   When a creature you can see attacks you or a target within 5 feet," +
                              "\n   you can use a reaction to add your proficiency bonus to the target's Armor Class against that attack." +
                              "\n   You must be wielding a shield or melee weapon to gain this benefit."
            },
            
            "shield warrior": {
                name : "Shield Warrior Fighting Style",
                description : "\n   You gain proficiency with shields as martial melee weapons," +
                              "\n   and on hit your shield deals 2d4 bludgeoning damage." +
                              "\n   If you are wielding a shield and nothing else," +
                              "\n   you gain a +1 bonus to attack rolls with your shield and to your Armor Class."
            },
            
            "thrown weapon": ClassList.fighter.features["fighting style"]["thrown weapon fighting"],
            
            "versatile fighting": {
                name : "Versatile Fighting Style",
                description : "\n   While wielding a single versatile weapon and no shield," +
                              "\n   you gain a +1 bonus to your attack rolls with that weapon." +
                              "\n   While doing so, you can also use your bonus action to make a single grapple or shove attack," +
                              "\n   or to take the Use an Object action."
            }        },
        
        "spellcasting": {
            name: "Spellcasting",
            source: ["MGH", 0],
            minlevel: 2,
            description : "\n   Cast spells using your Intelligence as your spellcasting ability.",
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
            name : "Esoteric Order",
            source : ["MGH", 0],
            minlevel : 3,
            description : "\n   Choose an Esoteric Order that grants additional features at higher levels.",
        },
        
        "extra attack": {
            name : "Extra Attack",
            source : ["MGH", 0],
            minlevel : 5,
            description : "\n   Attack twice when taking the Attack action.",
        },
        
        "spellsight": {
            name : "Spellsight",
            source : ["MGH", 0],
            minlevel : 5,
            description : "\n   Detect magic and identify objects within range for one minute.",
        },
        
        "ethereal jaunt": {
            name : "Ethereal Jaunt",
            source : ["MGH", 0],
            minlevel : 6,
            description : "\n   Teleport up to a certain distance before or after casting a spell.",
        },
        
        "spellsunder": {
            name : "Spellsunder",
            source : ["MGH", 0],
            minlevel : 9,
            description : "\n   Use Spellstrike to counter spells targeting you by expending a spell slot.",
        },
        
        "mystical ward": {
            name : "Mystical Ward",
            source : ["MGH", 0],
            minlevel : 10,
            description : "\n   Become immune to the effects of your own Magus spells unless you choose otherwise.",
        },
        
        "arcane conservation": {
            name : "Arcane Conservation",
            source : ["MGH", 0],
            minlevel : 11,
            description : "\n   Regain an expended spell slot if you miss with a Spellstrike attack.",
        },
        
        "prismatic strikes": {
            name : "Prismatic Strikes",
            source : ["MGH", 0],
            minlevel : 11,
            description : "\n   Add bonus damage of a Magus spell type to weapon attacks.",
        },
        
        // Continue adding features up to level 20
    }
};

// Add subclasses for the Magus class
AddSubClass("magus", "order of arcanists", {
    regExpSearch : /order of arcanists/i,
    subname : "Order of Arcanists",
    source : ["MGH", 0],
    
    features : {
        // Define subclass features here
    }
});
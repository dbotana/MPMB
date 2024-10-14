// Barbarian 2024
var iFileName = "Barbarian - 2024 [Rocky].js";
RequiredSheetVersion(13);
legacyClassRefactor("barbarian", {
	regExpSearch: /barbarian/i,
	name: "Barbarian",
	source: [["PHB2024", 51]],
	primaryAbility: ["Strength"],
	abilitySave: 1,
	prereqs: "Strength 13",
	improvements: [0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 5, 5],
	die: 12,
	saves: ["Str", "Con"],
	skillstxt: {
		primary: "Choose 2: Animal Handling, Athletics, Intimidation, Nature, Perception, or Survival",
	},
	armorProfs: {
		primary: [true, true, false, true],
		secondary: [false, false, false, true],
	},
	weaponProfs: {
		primary: [true, true],
		secondary: [false, true],
	},
	equipment: "Barbarian starting equipment:" +
		"\n \u2022 A Greataxe;" +
		"\n \u2022 4 Handaxes;" +
		"\n \u2022 An Explorer's Pack, and 15 gp." +
		"\n\nAlternatively, choose 75 gp worth of starting equipment instead of the class's starting equipment.",
	subclasses: ["Barbarian Subclass", []],
	attacks: [1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
	features: {
		"rage": {
		name: "Rage",
		source: [["PHB2024", 51]],
		minlevel: 1,
		action: ["bonus action", "Enter Rage"],
		usages: [2, 2, 3, 3, 3, 4, 4, 4, 4, 4, 4, 5, 5, 5, 5, 5, 6, 6, 6, 6],
		recovery: "long rest",
		additional: ["2 Uses, +2 Damage", "2 Uses, +2 Damage", "3 Uses, +2 Damage", "3 Uses, +2 Damage", "3 Uses, +2 Damage", "4 Uses, +2 Damage", "4 Uses, +2 Damage", "4 Uses, +2 Damage", "4 Uses, +3 Damage", "4 Uses, +3 Damage", "4 Uses, +3 Damage", "5 Uses, +3 Damage", "5 Uses, +3 Damage", "5 Uses, +3 Damage", "5 Uses, +3 Damage", "5 Uses, +4 Damage", "6 Uses, +4 Damage", "6 Uses, +4 Damage", "6 Uses, +4 Damage", "6 Uses, +4 Damage"],
		dmgres: [["Bludgeoning", "Bludgeon. (in rage)"], ["Piercing", "Piercing (in rage)"], ["Slashing", "Slashing (in rage)"]],
		savetxt: {adv_vs: ["Str checks and saves in rage; "]},
		calcChanges: {
			atkCalc: [
				function (fields, v, output) {
					if (v.isMeleeWeapon && fields.Mod === 1 && classes.known.barbarian && classes.known.barbarian.level && /\brage\b/i.test(v.WeaponTextName)) {
					output.extraDmg += classes.known.barbarian.level < 9 ? 2 : classes.known.barbarian.level < 16 ? 3 : 4;
					}
				},
				"If I include the word 'Rage' in a melee weapon's name that uses Strength, the calculation will add my Rage's bonus damage to it. Be aware that if the weapon is used to make a ranged attack, the rage bonus damage shouldn't be added (e.g. when using a thrown weapon)."
			]
		},
        description: desc([
            "Start as Bonus Action. Regain a use 1/SR or all/LR. Bonus damage to melee weapon attacks using Str. Adv. on Strength checks/saves (not attacks); resistance to bludgeoning/piercing/slashing",
            "Rage lasts until the end of your next turn. Extend by attacking, forcing a save, or using a Bonus Action. Max duration: 10 minutes."
        ]),
    },
		"unarmored defense": {
			name: "Unarmored Defense",
			source: [["PHB2024", 51]],
			minlevel: 1,
			description: desc([
				"While you aren't wearing any armor, your base Armor Class equals 10 plus your Dexterity and Constitution modifiers. You can use a Shield and still gain this benefit.",
			]),
			armorOptions: [{
				regExpSearch: /justToAddToDropDownAndEffectWildShape/,
				name: "Unarmored Defense (Con)",
				source: [["PHB2024", 51]],
				ac: "10+Con",
				affectsWildShape: true,
				selectNow: true
			}],
		},
		"weapon mastery": {
			name: "Weapon Mastery",
			source: [["PHB2024", 52]],
			minlevel: 1,
            description: desc([
                "Use mastery properties of two (more at higher levels) chosen Simple or Martial Melee weapons. After a Long Rest, change one weapon choice.",
            ]),			
            additional: ["2 Weapon Masteries", "2 Weapon Masteries", "2 Weapon Masteries", "3 Weapon Masteries", "3 Weapon Masteries", "3 Weapon Masteries", "3 Weapon Masteries", "3 Weapon Masteries", "3 Weapon Masteries", "4 Weapon Masteries", "4 Weapon Masteries", "4 Weapon Masteries", "4 Weapon Masteries", "4 Weapon Masteries", "4 Weapon Masteries", "4 Weapon Masteries", "4 Weapon Masteries", "4 Weapon Masteries", "4 Weapon Masteries", "4 Weapon Masteries"],
			extraname: "Weapon Mastery",
			extrachoices: ["Club", "Dagger", "Greatclub", "Handaxe", "Javelin", "Light Hammer", "Mace", "Quarterstaff", "Sickle", "Spear", "Battleaxe", "Flail", "Glaive", "Greataxe", "Greatsword", "Halberd", "Lance", "Longsword", "Maul", "Morningstar", "Pike", "Rapier", "Scimitar", "Shortsword", "Trident", "Warhammer", "War Pick", "Whip"],
			extraTimes: [2, 2, 2, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
		  "club": {
			name: "Club",
			description: desc([
			  "Slow : If you hit a creature with this weapon and deal damage to it, you can reduce its Speed by 10 feet until the start of your next turn. If the creature is hit more than once by weapons that have this property, the Speed reduction doesn't exceed 10 feet.",
			]),
		  },
		  "dagger": {
			name: "Dagger",
			description: desc([
			  "Nick : When you make the extra attack of the Light property, you can make it as part of the Attack action instead of as a Bonus Action. You can make this extra attack only once per turn.",
			]),
		  },
		  "greatclub": {
			name: "Greatclub",
			description: desc([
			  "Push : If you hit a creature with this weapon, you can push the creature up to 10 feet straight away from yourself if it is Large or smaller.",
			]),
		  },
		  "handaxe": {
			name: "Handaxe",
			description: desc([
			  "Vex : If you hit a creature with this weapon and deal damage to the creature, you have Advantage on your next attack roll against the creature before the end of your next turn.",
			]),
		  },
		  "javelin": {
			name: "Javelin",
			description: desc([
			  "Slow : If you hit a creature with this weapon and deal damage to it, you can reduce its Speed by 10 feet until the start of your next turn. If the creature is hit more than once by weapons that have this property, the Speed reduction doesn't exceed 10 feet.",
			]),
		  },
		  "light hammer": {
			name: "Light Hammer",
			description: desc([
			  "Nick : When you make the extra attack of the Light property, you can make it as part of the Attack action instead of as a Bonus Action. You can make this extra attack only once per turn.",
			]),
		  },
		  "mace": {
			name: "Mace",
			description: desc([
			  "Sap : If you hit a creature with this weapon that creature has Disadvantage on its next attack roll before the start of your next turn.",
			]),
		  },
		  "quarterstaff": {
			name: "Quarterstaff",
			description: desc([
			  "Topple : If you hit a creature with this weapon, you can force the creature to make a Constitution saving throw (DC 8 plus the ability modifier used to make the attack roll and your Proficiency Bonus). On a failed save, the creature has the Prone condition.",
			]),
		  },
		  "sickle": {
			name: "Sickle",
			description: desc([
			  "Nick : When you make the extra attack of the Light property, you can make it as part of the Attack action instead of as a Bonus Action. You can make this extra attack only once per turn.",
			]),
		  },
		  "spear": {
			name: "Spear",
			description: desc([
			  "Sap : If you hit a creature with this weapon that creature has Disadvantage on its next attack roll before the start of your next turn.",
			]),
		  },
		  "battleaxe": {
			name: "Battleaxe",
			description: desc([
			  "Topple : If you hit a creature with this weapon, you can force the creature to make a Constitution saving throw (DC 8 plus the ability modifier used to make the attack roll and your Proficiency Bonus). On a failed save, the creature has the Prone condition.",
			]),
		  },
		  "flail": {
			name: "Flail",
			description: desc([
			  "Sap : If you hit a creature with this weapon that creature has Disadvantage on its next attack roll before the start of your next turn.",
			]),
		  },
		  "glaive": {
			name: "Glaive",
			description: desc([
			  "Graze : If your attack roll with this weapon misses a creature, you can deal damage to that creature equal to the ability modifier you used to make the attack roll. This damage is the same type dealt by the weapon, and the damage can be increased only by increasing the ability modifier.",
			]),
		  },
		  "greataxe": {
			name: "Greataxe",
			description: desc([
			  "Cleave : If you hit a creature with a melee attack roll using this weapon, you can make a melee attack roll with the weapon against a second creature within 5 feet of the first that is also within your reach. On a hit the second creature takes the weapon's damage, but don't add your ability modifier to that damage unless the modifier is negative. You can make this extra attack only once per turn.",
			]),
		  },
		  "greatsword": {
			name: "Greatsword",
			description: desc([
			  "Graze : If your attack roll with this weapon misses a creature, you can deal damage to that creature equal to the ability modifier you used to make the attack roll. This damage is the same type dealt by the weapon, and the damage can be increased only by increasing the ability modifier.",
			]),
		  },
		  "halberd": {
			name: "Halberd",
			description: desc([
			  "Cleave : If you hit a creature with a melee attack roll using this weapon, you can make a melee attack roll with the weapon against a second creature within 5 feet of the first that is also within your reach. On a hit the second creature takes the weapon's damage, but don't add your ability modifier to that damage unless the modifier is negative. You can make this extra attack only once per turn.",
			]),
		  },
		  "lance": {
			name: "Lance",
			description: desc([
			  "Topple : If you hit a creature with this weapon, you can force the creature to make a Constitution saving throw (DC 8 plus the ability modifier used to make the attack roll and your Proficiency Bonus). On a failed save, the creature has the Prone condition.",
			]),
		  },
		  "longsword": {
			name: "Longsword",
			description: desc([
			  "Sap : If you hit a creature with this weapon that creature has Disadvantage on its next attack roll before the start of your next turn.",
			]),
		  },
		  "maul": {
			name: "Maul",
			description: desc([
			  "Topple : If you hit a creature with this weapon, you can force the creature to make a Constitution saving throw (DC 8 plus the ability modifier used to make the attack roll and your Proficiency Bonus). On a failed save, the creature has the Prone condition.",
			]),
		  },
		  "morningstar": {
			name: "Morningstar",
			description: desc([
			  "Sap : If you hit a creature with this weapon that creature has Disadvantage on its next attack roll before the start of your next turn.",
			]),
		  },
		  "pike": {
			name: "Pike",
			description: desc([
			  "Push : If you hit a creature with this weapon, you can push the creature up to 10 feet straight away from yourself if it is Large or smaller.",
			]),
		  },
		  "rapier": {
			name: "Rapier",
			description: desc([
			  "Vex : If you hit a creature with this weapon and deal damage to the creature, you have Advantage on your next attack roll against the creature before the end of your next turn.",
			]),
		  },
		  "scimitar": {
			name: "Scimitar",
			description: desc([
			  "Nick : When you make the extra attack of the Light property, you can make it as part of the Attack action instead of as a Bonus Action. You can make this extra attack only once per turn.",
			]),
		  },
		  "shortsword": {
			name: "Shortsword",
			description: desc([
			  "Vex : If you hit a creature with this weapon and deal damage to the creature, you have Advantage on your next attack roll against the creature before the end of your next turn.",
			]),
		  },
		  "trident": {
			name: "Trident",
			description: desc([
			  "Topple : If you hit a creature with this weapon, you can force the creature to make a Constitution saving throw (DC 8 plus the ability modifier used to make the attack roll and your Proficiency Bonus). On a failed save, the creature has the Prone condition.",
			]),
		  },
		  "warhammer": {
			name: "Warhammer",
			description: desc([
			  "Push : If you hit a creature with this weapon, you can push the creature up to 10 feet straight away from yourself if it is Large or smaller.",
			]),
		  },
		  "war pick": {
			name: "War Pick",
			description: desc([
			  "Sap : If you hit a creature with this weapon that creature has Disadvantage on its next attack roll before the start of your next turn.",
			]),
		  },
		  "whip": {
			name: "Whip",
			description: desc([
			  "Slow : If you hit a creature with this weapon and deal damage to it, you can reduce its Speed by 10 feet until the start of your next turn. If the creature is hit more than once by weapons that have this property, the Speed reduction doesn't exceed 10 feet.",
			]),
		  },
		},
		"danger sense": {
		  name: "Danger Sense",
		  source: [["PHB2024", 52]],
		  minlevel: 2,
		  savetxt: {adv_vs: ["Dex saves, when not Incapacitated; "]},
		  description: desc([
			"You have Advantage on Dexterity saving throws unless you have the Incapacitated condition.",
		  ]),
		},
		"reckless attack": {
		  name: "Reckless Attack",
		  source: [["PHB2024", 52]],
		  minlevel: 2,
		  description: desc([
            "When you make your first attack roll on your turn, you can attack recklessly. Until the start of your next turn, you have Advantage on Strength-based attack rolls but attack rolls against you also have Advantage",
            ]),
		},
		"subclassfeature3": {
		  name: "Barbarian Subclass",
		  source: [["PHB2024", 52]],
		  minlevel: 3,
		  description: desc([
			"Choose a Barbarian subclass and put it in the 'Class' field.",
		  ]),
		},
		"primal knowledge": {
		  name: "Primal Knowledge",
		  source: [["PHB2024", 52]],
		  minlevel: 3,
		  description: desc([
            "Gain proficiency in one additional skill from the Barbarian level 1 skill list.",
            "While Raging, you can use Strength for ability checks with Acrobatics, Intimidation, Perception, Stealth, or Survival."
            ]),
		  choices: ["Primal Knowledge : Animal Handling", "Primal Knowledge : Athletics", "Primal Knowledge : Intimidation", "Primal Knowledge : Nature", "Primal Knowledge : Perception", "Primal Knowledge : Survival"],
		  "primal knowledge : animal handling": {
			name: "Primal Knowledge : Animal Handling",
			skills: ["Animal Handling"],
			description: desc([
			  "You gain proficiency in Animal Handling",
              "While Raging, you can use Strength for ability checks with Acrobatics, Intimidation, Perception, Stealth, or Survival"
			]),
		  },
		  "primal knowledge : athletics": {
			name: "Primal Knowledge : Athletics",
			skills: ["Athletics"],
			description: desc([
			  "You gain proficiency in Athletics",
              "While Raging, you can use Strength for ability checks with Acrobatics, Intimidation, Perception, Stealth, or Survival"
			]),
		  },
		  "primal knowledge : intimidation": {
			name: "Primal Knowledge : Intimidation",
			skills: ["Intimidation"],
			description: desc([
			  "You gain proficiency in Intimidation",
              "While Raging, you can use Strength for ability checks with Acrobatics, Intimidation, Perception, Stealth, or Survival"
			]),
		  },
		  "primal knowledge : nature": {
			name: "Primal Knowledge : Nature",
			skills: ["Nature"],
			description: desc([
			  "You gain proficiency in Nature",
              "While Raging, you can use Strength for ability checks with Acrobatics, Intimidation, Perception, Stealth, or Survival"
			]),
		  },
		  "primal knowledge : perception": {
			name: "Primal Knowledge : Perception",
			skills: ["Perception"],
			description: desc([
			  "You gain proficiency in Perception",
              "While Raging, you can use Strength for ability checks with Acrobatics, Intimidation, Perception, Stealth, or Survival"
			]),
		  },
		  "primal knowledge : survival": {
			name: "Primal Knowledge : Survival",
			skills: ["Survival"],
			description: desc([
			  "You gain proficiency in Survival",
              "While Raging, you can use Strength for ability checks with Acrobatics, Intimidation, Perception, Stealth, or Survival"
			]),
		  },
		},
		"extra attack": {
		  name: "Extra Attack",
		  source: [["PHB2024", 53]],
		  minlevel: 5,
		  description: desc([
			"You can attack twice instead of once whenever you take the Attack Action on your Turn.",
		  ]),
		},
		"fast movement": {
		  name: "Fast Movement",
		  source: [["PHB2024", 53]],
		  minlevel: 5,
		  speed: {allModes: "+10"},
		  description: desc([
			"Your speed increases by 10 feet while you aren't wearing Heavy armor.",
		  ]),
		},
		"feral instinct": {
		  name: "Feral Instinct",
		  source: [["PHB2024", 53]],
		  minlevel: 7,
		  description: desc([
			"Your instincts are so honed that you have Advantage on Initiative rolls.",
		  ]),
		},
		"instinctive pounce": {
		  name: "Instinctive Pounce",
		  source: [["PHB2024", 53]],
		  minlevel: 7,
		  description: desc([
			"As part of the Bonus Action you take to enter your Rage, you can move up to half your Speed.",
		  ]),
		},
		"brutal strike": {
		  name: "Brutal Strike",
		  source: [["PHB2024", 53]],
		  minlevel: 9,
		  description: desc([
            "When using Reckless Attack, you can skip Advantage on a Strength-based attack without Disadvantage. If it hits, extra 1d10 damage and a Brutal Strike effect.",
            "Forceful Blow: Push target 15 feet away; move half your speed towards them without provoking Opportunity Attacks.",
            "Hamstring Blow: Reduce target's Speed by 15 feet until your next turn; only one effect at a time per target."
        ]),
		},
		"relentless rage": {
		  name: "Relentless Rage",
		  source: [["PHB2024", 53]],
		  minlevel: 9,
          description: desc([
            "While Raging, if you drop to 0 HP but aren't killed outright, make a DC 10 Constitution save. On success, set HP to half your Barbarian level.",
            "Each subsequent use raises the DC by 5. DC resets to 10 after a Short or Long Rest."
        ]),
		},
		"improved brutal strike": {
		  name: "Improved Brutal Strike",
		  source: [["PHB2024", 53]],
		  minlevel: 13,
          description: desc([
            "Gain new Brutal Strike options:",
            "Staggering Blow: Target has Disadvantage on its next save and can't make Opportunity Attacks until your next turn.",
            "Sundering Blow: Next attack roll against the target gets a +5 bonus before your next turn. 1 effect per attack roll."
        ]),
		},
		"persistent rage": {
		  name: "Persistent Rage",
		  source: [["PHB2024", 53]],
		  minlevel: 15,
		  description: desc([
            "Regain all Rage uses when you roll Initiative, once per Long Rest.",
            "Rage lasts 10 minutes without extension actions; ends early if Unconscious or wearing Heavy armor."
        ]),
		},
		"improved brutal strike2": {
		  name: "Improved Brutal Strike",
		  source: [["PHB2024", 53]],
		  minlevel: 17,
		  description: desc([
			"The extra damage of your Brutal Strike increases to 2d10. You can use two different Brutal Strike effects whenever you use your Brutal Strike feature.",
		  ]),
		},
		"indomitable might": {
		  name: "Indomitable Might",
		  source: [["PHB2024", 53]],
		  minlevel: 18,
		  description: desc([
			"If your total for a Strength check or Strength saving throw is less than your Strength score, you can use that score in place of the total.",
		  ]),
		},
		"epic boon": {
		  name: "Epic Boon",
		  source: [["PHB2024", 53]],
		  minlevel: 19,
		  description: desc([
			"You gain an Epic Boon feat (see chapter 5) or another feat of your choice for which you qualify.",
		  ]),
		},
		"primal champion": {
		  name: "Primal Champion",
		  source: [["PHB2024", 53]],
		  minlevel: 20,
		  scores: [4, 0, 4, 0, 0, 0],
		  scoresMaximum: [25, 0, 25, 0, 0, 0],
		  description: desc([
			"You embody primal power. Your Strength and Constitution scores increase by 4, to a maximum of 25.",
		  ]),
		},
	},
});
legacySubClassRefactor("barbarian", "berserker", {
  regExpSearch: /^(?=.*(barbarian))(?=.*(berserker)).*$/i,
  subname: "Path of the Berserker",
  source: [["PHB2024", 54]],
  features: {
    "subclassfeature3": {
      name: "Frenzy",
      source: [["PHB2024", 54]],
      minlevel: 3,
      additional: ["2d6", "2d6", "2d6", "2d6", "2d6", "2d6", "2d6", "2d6", "3d6", "3d6", "3d6", "3d6", "3d6", "3d6", "3d6", "4d6", "4d6", "4d6", "4d6", "4d6"],
      toNotesPage: [{
        name: "Frenzy",
        note: desc([
          "While Raging and using Reckless Attack, deal extra damage to the first target hit on your turn. Roll d6s equal to your Rage Damage bonus for extra damage of the same type as the attack."
      ]),
    },
    "subclassfeature6": {  
      name: "Mindless Rage",
      source: [["PHB2024", 54]],
      minlevel: 6,
      savetxt: {immune: ["Charmed while Raging; ", "Frightened while Raging; "]},
      toNotesPage: [{
        name: "Mindless Rage",
        note: desc([
          "While Raging, you are immune to Charmed and Frightened conditions. These conditions end when you enter Rage."
      ]),
    }],
    },
    "subclassfeature10": {
      name: "Retaliation",
      source: [["PHB2024", 54]],
      minlevel: 10,
      action: ["reaction", "Retaliation"],
      toNotesPage: [{
        name: "Retaliation",
        note: desc([
          "As a Reaction, make a melee attack against a creature within 5 feet when it damages you."
        ]),
        }],
    },
    "subclassfeature14": {
      name: "Intimidating Presence",
      source: [["PHB2024", 54]],
      minlevel: 14,
      action: "action",
      usages: 1,
      recovery: "long rest",
      toNotesPage: [{
        name: "Intimidating Presence",
        note: desc([
          "As a Bonus Action, cause creatures in a 30-foot radius to make a Wisdom save (DC 8 + Strength mod + Proficiency). On failure, they are Frightened for 1 minute, repeating the save at each turn's end. Regain use after a Long Rest or by expending a Rage use."
        ]),
      }],
    },
    },
    },
});
legacySubClassRefactor("barbarian", "wild heart", {
  regExpSearch: /^(?=.*(barbarian))(?=.*(wild))(?=.*(heart)).*$/i,
  subname: "Path of the Wild Heart",
  replaces: "path of the totem warrior",
  source: [["PHB2024", 55]],
  features: {
    "subclassfeature3": {
      name: "Animal Speaker",
      source: [["PHB2024", 55]],
      minlevel: 3,
      spellcastingAbility: 5,
      spellcastingBonus: [{
        name: "Animal Speaker",
        spells: ["beast sense", "speak with animals"],
        selection: ["beast sense", "speak with animals"],
        times: 2,
        firstCol: "R",
      }],
      toNotesPage: [{
        name: "Animal Speaker",
        note: desc([
          "Cast Beast Sense and Speak with Animals as Rituals using Wisdom."
        ]),
        }],
    },
    "subclassfeature3.1": {
      name: "Rage of the Wilds",
      source: [["PHB2024", 55]],
      minlevel: 3,
      description: desc([
        "Choose an animal aspect when Raging:",
        "- **Bear**: Resistance to all but Force, Necrotic, Psychic, and Radiant damage.",
        "- **Eagle**: Disengage and Dash as a Bonus Action.",
        "- **Wolf**: Allies have Advantage on attacks against enemies within 5 feet."
    ]),
    },
    "subclassfeature6": {
      name: "Aspect of the Wilds",
      source: [["PHB2024", 55]],
      minlevel: 6,
      choices: ["Owl", "Panther", "Salmon"],
      "owl": {
        name: "Owl",
        vision: [["Darkvision", "fixed 60"], ["Darkvision", "+60"]],
        description: desc([
          "You have Darkvision with a range of 60 feet. If you already have Darkvision, its range increases by 60 feet.",
        ]),
      },
      "panther": {
        name: "Panther",
        speed: {climb: {spd: "walk", enc: "walk"}},
        description: desc([
          "You have a Climb Speed equal to your Speed",
        ]),
      },
      "salmon": {
        name: "Salmon",
        speed: {swim: {spd: "walk", enc: "walk"}},
        description: desc([
          "You have a Swim Speed equal to your Speed",
        ])
      },
      description: desc([
        "You gain one of the following options of your choice. Whenever you finish a Long Rest, you can change your choice.",
      ]),
    },
    "subclassfeature10": {
      name: "Nature Speaker",
      source: [["PHB2024", 55]],
      minlevel: 10,
      spellcastingBonus: [{
        name: "Nature Speaker",
        spells: ["commune with nature"],
        selection: ["commune with nature"],
        times: 1,
        firstCol: "R",
      }],
      toNotesPage: [{
        name: "Nature Speaker",
        note: desc([
          "Cast Commune with Nature as a Ritual using Wisdom."
        ]),
        }],
    },
    "subclassfeature14": {
      name: "Power of the Wilds",
      source: [["PHB2024", 55]],
      minlevel: 14,
      toNotesPage: [{
        name: "Power of the Wilds",
        note: desc([
          "Choose an aspect when Raging: Falcon (Fly Speed equals your Speed without armor), Lion (Enemies within 5 feet have Disadvantage on attacks against creatures other than you), or Ram (Knock Large or smaller creatures Prone with melee attacks)."
        ]),
        }],
    },
  },
});
AddSubClass("barbarian", "world tree", {
  regExpSearch: /^(?=.*(barbarian))(?=.*(world))(?=.*(tree)).*$/i,
  subname: "Path of the World Tree",
  source: [["PHB2024", 56]],
  features: {
    "subclassfeature3": {
      name: "Vitality of the Tree",
      source: [["PHB2024", 56]],
      minlevel: 3,
      additional: ["2d6", "2d6", "2d6", "2d6", "2d6", "2d6", "2d6", "2d6", "3d6", "3d6", "3d6", "3d6", "3d6", "3d6", "3d6", "4d6", "4d6", "4d6", "4d6", "4d6"],
      description: desc([
        "Vitality surge : Gain Temporary Hit Points equal to your Barbarian level when you Rage.",
        "Life-Giving Force : Each turn, give a nearby creature Temporary Hit Points by rolling d6s equal to your Rage Damage bonus. All vanish when rage ends."
    ]),
    },
    "subclassfeature6": {
      name: "Branches of the Tree",
      source: [["PHB2024", 54]],
      minlevel: 6,
      action: "reaction",
      description: desc([
        "As a Reaction, teleport a nearby creature within 30 feet to a space near you. Reduce its Speed to 0 until the end of the turn if it fails a Strength save (DC 8 + Strength mod + Proficiency)."
    ]),
    },
    "subclassfeature10": {
      name: "Battering Roots",
      source: [["PHB2024", 56]],
      minlevel: 10,
      action: ["reaction", "Retaliation"],
      description: desc([
        "Extend reach by 10 feet with Heavy or Versatile weapons. Use Push or Topple mastery properties when hitting with such weapons in addition to a different property."
    ]),
    },
    "subclassfeature14": {
      name: "Travel Along the Tree",
      source: [["PHB2024", 56]],
      minlevel: 14,
      action: "bonus action",
      description: desc([
        "Teleport up to 60 feet as a Bonus Action while Raging. Once per Rage, extend range to 150 feet and bring up to six creatures within 10 feet."
    ]),
    },
  },
});
legacySubClassRefactor("barbarian", "zealot", {
  regExpSearch: /^(?=.*(barbarian))(?=.*(zealot)).*$/i,
  subname: "Path of the Zealot",
  replaces: "path of the zealot",
  source: [["PHB2024", 57]],
  features: {
    "subclassfeature3": {
      name: "Divine Fury",
      source: [["PHB2024", 57]],
      minlevel: 3,
      description: desc([
        "While Raging, your first hit each turn deals extra damage: 1d6 + half your Barbarian level. Choose Necrotic or Radiant damage each time."
    ]),
    },
    "subclassfeature3.1": {
      name: "Warrior of the Gods",
      source: [["PHB2024", 57]],
      minlevel: 3,
      action: "Bonus Action",
      usages: [0, 0, 4, 4, 4, 5, 5, 5, 5, 5, 5, 6, 6, 6, 6, 6, 7, 7, 7, 7],
      recovery: "long rest",
      description: desc([
        "As a Bonus Action, expend d12s from a healing pool to regain HP. Pool size increases at levels 6, 12, and 17. Regain all dice after a Long Rest."
    ]),
    },
    "subclassfeature6": {
      name: "Fanatical Focus",
      source: [["PHB2024", 57]],
      minlevel: 6,
      description: desc([
        "Once per Rage, reroll a failed save with a bonus equal to your Rage Damage bonus. You must use new roll"
    ]),
    },
    "subclassfeature10": {
      name: "Zealous Presence",
      source: [["PHB2024", 57]],
      minlevel: 10,
      action: "bonus action",
      usages: 1,
      recovery: "long rest",
      description: desc([
        "As a Bonus Action, give up to ten creatures within 60 feet Advantage on attacks and saves until your next turn. Recharge after Long Rest or by expending Rage."
    ]),
    },
    "subclassfeature14": {
      name: "Rage of the Gods",
      source: [["PHB2024", 57]],
      minlevel: 14,
      action: ["reaction", "Revivification"],
      usages: 1,
      recovery: "long rest",
      description: desc([
        "Assume divine form for 1 minute when Raging. Gain flight, resistance to Necrotic, Psychic, and Radiant damage. Use Reaction to prevent an ally from dropping to 0 HP and change their HP to 1/2 your Barbarian level by expending Rage."
    ]),
    },
  },
});
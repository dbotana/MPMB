/*	-WHAT IS THIS?-
    This file adds optional material to "MPMB's Character Record Sheet" found at https://flapkan.com/mpmb/charsheets
    Import this file using the "Add Extra Materials" bookmark.
    -KEEP IN MIND-
    It is recommended to enter the code in a fresh sheet before adding any other information (i.e. before making your character with it).
*/

/*	-INFORMATION-
    Subject:	2026 UA Villainous Options Revisited https://media.dndbeyond.com/compendium-images/ua/villainous-options-revisited/Cbzg7luMwkSQRoc0/UA2026-VillainousOptionsRevisited.pdf
    Effect:		This script adds the 2026 UA Villainous Options subclasses and feat paths.
                It should be added after PokeSimmer's 2024 scripts https://github.com/thepokesimmer/2024-PHB.
    Code by:	Rocky
    Date:		2026-06-01 (sheet v13)
*/

var iFileName = "VillainousUA26Revisited.js";

RequiredSheetVersion("13.2.0");

SourceList["UVR26"] = {
    name: "UA 2026 Villainous Options Revisited",
    abbreviation: "UVR26",
    group: "Unearthed Arcana",
    url: "https://media.dndbeyond.com/compendium-images/ua/villainous-options-revisited/Cbzg7luMwkSQRoc0/UA2026-VillainousOptionsRevisited.pdf",
    date: "2026/06/01"
};

// ============================================================
// TITAN FORM CREATURES (Circle of the Titan Wild Shapes) credit to Nashorn12
// ============================================================

CreatureList["Behemoth"] = {
	name : "Behemoth",
	source : [["UVR26", 2]],
	size : [2,1,0],
	type : "Beast",
	alignment : "Unaligned",
	ac :  13 + What('Wis Mod'),
	hp : 1,
	hd : [1, 4],
	speed : "40 ft, Climb 40 ft",
	scores : [What('Wis'), What('Wis'), What('Con'), What('Int'), What('Wis'), What('Cha')],
	saves : ["", "", "", "", "", ""],
	senses : "Darkvision 60 ft",
	languages : "",
	challengeRating : 0,
	proficiencyBonus : 2,
	attacksAction : 2,
	traits : [{
		name : "Siege Monster",
		description : desc([
			"You deal double damage to objects and structures.",
		]),
	},
    ],
	actions : [{
		name : "Multiattack (Requires Druid Level 5+)",
		description : desc([
			"You make two Rend attacks.",
		]),
	}, {
		name : "Incandescent Breath",
		description : desc([
			"You expend a level 1+ spell slot. Dexterity Saving Throw: DC equals your spell save DC, each creature in a 5-foot-wide, 60-foot-long Line. Failure: 2d10 Radiant damage per level of the spell slot expended. Success: Half damage.",
		]),
	}],
	bonusActions : [{
		name : "Rampager (Requires Druid Level 10+)",
		description : desc([
			"You expend a level 1+ spell slot and move up to half your Speed without provoking Opportunity Attacks. When you enter the space of an enemy that is at least two sizes smaller than you for the first time on a turn, that creature is subjected to the following effect. Strength Saving Throw: DC equals your spell save DC. Failure: The target has the Prone condition. If the target already has the Prone condition, it instead takes 1d10 Bludgeoning damage per level of the spell slot expended.",
		]),
	}],
	attacks : [{
		name : "Rend",
		ability : 5,
		damage : [1, 8, "slashing"],
		range : "Melee (10 ft). ",
		description : "",
        list: "Spell",
	}, ],

};

CreatureList["Leviathan"] = {
	name : "Leviathan",
	source : [["UVR26", 3]],
	size : [2,1,0],
	type : "Beast",
	alignment : "Unaligned",
	ac :  13 + What('Wis Mod'),
	hp : 1,
	hd : [1, 4],
	speed : "40 ft, Swim 40 ft",
	scores : [What('Wis'), What('Wis'), What('Con'), What('Int'), What('Wis'), What('Cha')],
	saves : ["", "", "", "", "", ""],
	senses : "Darkvision 60 ft",
	languages : "",
	challengeRating : 0,
	proficiencyBonus : 2,
	attacksAction : 2,
	traits : [{
		name : "Amphibious",
		description : desc([
			"You can breathe air and water.",
		]),
	}, {
		name : "Siege Monster",
		description : desc([
			"You deal double damage to objects and structures.",
		]),
	},
    ],
	actions : [{
		name : "Multiattack (Requires Druid Level 5+)",
		description : desc([
			"You make two Rend attacks.",
		]),
	}],
	bonusActions : [{
		name : "Toxic Deluge (Requires Druid Level 10+)",
		description : desc([
			"You expend a level 1+ spell slot and emit a toxic miasma. Constitution Saving Throw: DC equals your spell save DC, each creature of your choice in a 10-foot Emanation originating from yourself. Failure: 2d4 Poison damage per level of the spell slot expended, and the target has the Poisoned condition until the start of your next turn.",
		]),
	}],
	attacks : [{
		name : "Rend",
		ability : 5,
		damage : [1, 8, "bludgeoning"],
		range : "Melee (10 ft)",
		description : "",
        list: "Spell",
	}, ],

};

CreatureList["insectoid"] = {
	name : "insectoid",
	source : [["UVR26", 3]],
	size : [2,1,0],
	type : "Beast",
	alignment : "Unaligned",
	ac :  13 + What('Wis Mod'),
	hp : 1,
	hd : [1, 4],
	speed : "40 ft, Fly 40 ft (Requires Druid Level 10+)",
	scores : [What('Wis'), What('Wis'), What('Con'), What('Int'), What('Wis'), What('Cha')],
	saves : ["", "", "", "", "", ""],
	senses : "Darkvision 60 ft",
	languages : "",
	challengeRating : 0,
	proficiencyBonus : 2,
	attacksAction : 2,
	traits : [{
		name : "Flyby (Requires Druid Level 10+)",
		description : desc([
			"You don't provoke an Opportunity Attack when you fly out of an enemy's reach.",
		]),
	}, {
		name : "Siege Monster",
		description : desc([
			"You deal double damage to objects and structures.",
		]),
	},
    ],
	actions : [{
		name : "Multiattack (Requires Druid Level 5+)",
		description : desc([
			"You make two Rend attacks.",
		]),
	}, {
		name : "Energizing Pollen",
		description : desc([
			"You expend a level 1+ spell slot and can move up to half your Speed without provoking Opportunity Attacks while emitting a cloud of healing pollen. When you move within 5 feet of another creature during this movement, you can restore a number of Hit Points equal to 2d6 per level of the spell slot expended. A creature can receive this healing only once per turn.",
		]),
	}],
	attacks : [{
		name : "Rend",
		ability : 5,
		damage : [1, 8, "piercing"],
		range : "Melee (10 ft). ",
		description : "",
        list: "Spell",
	}, ],

};

// ============================================================
// SUBCLASS: CIRCLE OF THE TITAN (DRUID)
// ============================================================
AddSubClass("druid", "circle of the titan", {
    regExpSearch: /^(?=.*druid)(?=.*titan).*$/i,
    subname: "Circle of the Titan",
    source: [["UVR26", 1]],
    spellcastingExtra: [
        "enlarge/reduce", "thaumaturgy", "thunderwave",
        "fear",
        "fire shield",
        "destructive wave"
    ],
    spellCastingExtraApplyNonconform: true,
    features: {
        "subclassfeature3": {
            name: "Titan Form",
            source: [["UVR26", 1]],
            minlevel: 3,
            description: desc([
                "When I use Wild Shape, I can adopt a Titan Form: Behemoth, Leviathan, or Insectoid",
                "I can also cast my Circle of the Titan spells while in Titan Form",
                "See the Titan stat blocks and appearance table in notes",
                " \u2022 Behemoth: AC 13+Wis, Speed 40/Climb 40, Rend (Slashing), Incandescent Breath (line)",
                "   Siege Monster: double damage to objects/structures",
                " \u2022 Leviathan: AC 13+Wis, Speed 40/Swim 40, Rend (Bludgeoning), Amphibious",
                "   Siege Monster: double damage to objects/structures",
                " \u2022 Insectoid: AC 13+Wis, Speed 40/Fly 40 (level 10+), Rend (Piercing), Energizing Pollen",
                "   Siege Monster: double damage to objects/structures",
                "All forms: Temp HP = 4 × Druid level; Str/Dex = Wis score; Darkvision 60 ft",
                "Rend: spell attack modifier, reach 10 ft, 1d8 + Wis mod damage",
                "Multiattack (level 5+): two Rend attacks"
            ]),
            toNotesPage: [{
                name: "Titan Form Details",
                page3notes: true,
                note: [
                    "TITAN FORM STAT BLOCKS",
                    "",
                    "All Forms: Large (Huge at level 10+, Gargantuan at level 14+)",
                    "Temp HP: 4 × Druid level | Str & Dex = Wis score | Darkvision 60 ft",
                    "Rend: Spell atk mod, reach 10 ft, 1d8 + Wis mod damage (2d8 at level 6, 3d8 at level 12)",
                    "Multiattack (level 5+): Two Rend attacks",
                    "",
                    "BEHEMOTH",
                    "AC: 13 + Wis modifier | Speed: 40 ft, Climb 40 ft",
                    "Traits: Siege Monster (double damage to objects/structures)",
                    "Actions: Rend (Slashing)",
                    "  Incandescent Breath: Expend level 1+ spell slot; 5-ft wide, 60-ft Line; Dex save;",
                    "    Fail: 2d10 Radiant per slot level; Success: half",
                    "Bonus Actions: Rampager (level 10+): Expend level 1+ spell slot, move up to half Speed;",
                    "  When entering enemy space (at least 2 sizes smaller), Str save or Prone;",
                    "  If already Prone, take 1d10 Bludgeoning per slot level instead",
                    "",
                    "LEVIATHAN",
                    "AC: 13 + Wis modifier | Speed: 40 ft, Swim 40 ft",
                    "Traits: Amphibious (breathe air and water)",
                    "  Siege Monster (double damage to objects/structures)",
                    "Actions: Rend (Bludgeoning)",
                    "Bonus Actions: Toxic Deluge (level 10+): Expend level 1+ spell slot; emit toxic miasma;",
                    "  Con save, each creature of your choice in 10-ft Emanation;",
                    "  Fail: 2d4 Poison per slot level + Poisoned until start of your next turn",
                    "",
                    "INSECTOID",
                    "AC: 13 + Wis modifier | Speed: 40 ft, Fly 40 ft (requires Druid Level 10+)",
                    "Traits: Flyby (level 10+): no opportunity attacks when flying out of reach",
                    "  Siege Monster (double damage to objects/structures)",
                    "Actions: Rend (Piercing)",
                    "  Energizing Pollen: Expend level 1+ spell slot; move up to half Speed (no opp. attacks);",
                    "    When moving within 5 ft of a creature, restore 2d6 HP per slot level;",
                    "    A creature can receive healing only once per turn",
                    "",
                    "TITAN APPEARANCE TABLE (1d4)",
                    "Behemoth: 1-Reflective scales, 2-Multiple heads, 3-Reptilian tail, 4-Furry and simian",
                    "Leviathan: 1-Many-tentacled, 2-Translucent and bloblike, 3-Lamprey-like mouth, 4-Serpentine body",
                    "Insectoid: 1-Iridescent wings, 2-Compound eyes, 3-Chitinous horns, 4-Bioluminescent exoskeleton"
                ]
            }]
        },
        "subclassfeature6": {
            name: "Dire Impact",
            source: [["UVR26", 2]],
            minlevel: 6,
            description: desc([
                "\u2022 Elemental Rend: When I hit with my Titan Form's Rend, I can choose Acid, Cold, Fire,",
                "  Lightning, or Thunder damage instead of its normal type",
                "\u2022 Shock Wave: Once per turn, immediately after I move at least half my Speed, I can create",
                "  a shock wave in a 10-ft Emanation originating from me.",
                "  Each creature in the Emanation must succeed on a Con save vs my spell save DC or be Prone"
            ])
        },
        "subclassfeature10": {
            name: "Primal Havoc",
            source: [["UVR26", 2]],
            minlevel: 10,
            description: desc([
                "\u2022 Huge Size: I can choose to become Huge when assuming my Titan Form (if space allows)",
                "\u2022 Toughened Hide: Immediately after assuming a Huge or larger Titan Form, I can expend a",
                "  level 1+ spell slot; for the duration I gain +½ the slot's level (round up) bonus to AC",
                "\u2022 Above It All: While Huge or larger in Titan Form, Difficult Terrain from heavy snow,",
                "  ice, rubble, or undergrowth doesn't cost extra movement"
            ]),
            action: [["bonus action", "Toughened Hide (expend spell slot after assuming Huge+ Titan Form)"]]
        },
        "subclassfeature14": {
            name: "Monstrous Appetite",
            source: [["UVR26", 2]],
            minlevel: 14,
            description: desc([
                "\u2022 Gargantuan Size: I can choose to become Gargantuan when assuming my Titan Form",
                "\u2022 Grappling Rend: Once per turn when Huge or larger, hitting a creature with Rend can",
                "  give it the Grappled condition (escape DC = my spell save DC); one target at a time",
                "\u2022 Swallow: As a Bonus Action while Gargantuan, choose a Large or smaller Grappled",
                "  creature. It makes a Str save vs my spell save DC. On a fail: swallowed (Grappled ends).",
                "  Swallowed: Blinded, Restrained, Total Cover, take Wis-mod d12s Acid at start of my turns",
                "  I can swallow up to Wis modifier creatures (min 1); requires Concentration.",
                "  Lose Concentration or leave Titan Form: regurgitate all (fall Prone in 10 ft of me)"
            ]),
            action: [["bonus action", "Swallow (Gargantuan, target Grappled)"]]
        }
    }
});

// SUBCLASS: HELL KNIGHT (FIGHTER)
AddSubClass("fighter", "hell knight", {
    regExpSearch: /^(?=.*fighter)(?=.*hell).*$/i,
    subname: "Hell Knight",
    source: [["UVR26", 4]],
    features: {
        "subclassfeature3": {
            name: "Diabolical Gift",
            source: [["UVR26", 4]],
            minlevel: 3,
            description: desc([
                "\u2022 Devil's Sight: I see normally in Dim Light and Darkness (magical and nonmagical) to 120 ft",
                "\u2022 Devil's Talents: I know Infernal; if I already know it, I learn another language of my choice",
                "  I also gain proficiency in one of the following skills of my choice:",
                "  Deception, Performance, or Sleight of Hand"
            ]),
            vision: [["See through magical darkness", 120], ["Darkvision", 120]],
            languageProfs: [["Infernal or any language", 1]],
            skillstxt: "Choose one from Deception, Performance, or Sleight of Hand"
        },
        "subclassfeature3.1": {
            name: "Hell-Forged Weapon",
            source: [["UVR26", 4]],
            minlevel: 3,
            description: desc([
                "When I take the Attack action, I can imbue each held weapon with hellfire (Hell-Forged)",
                "Remains transformed until I use this again, am Unconscious, or weapon is 5+ ft away for 1 min",
                "I can also end the effect early (no action required)",
                "While wielding a Hell-Forged Weapon: sheds Dim Light in a 5-ft radius",
                "Damage with it can be Cold, Fire, or Necrotic, or its normal damage type (chosen when imbued)"
            ])
        },
        "subclassfeature3.2": {
            name: "Infernal Wound",
            source: [["UVR26", 4]],
            minlevel: 3,
            description: desc([
                "My Hell-Forged Weapon can inflict infernal wounds (Infernal Wound Die: d6)",
                "When I hit a creature with my Hell-Forged Weapon, I can deal extra damage equal to one roll",
                "of my Infernal Wound Die (same type as chosen for the weapon) and give it an infernal wound",
                "While wounded: takes damage = one Infernal Wound Die roll of that type at start of each turn",
                "  Wound lasts 1 minute, until target regains HP, or until a creature within 5 ft stanches it",
                "  A target can only have one infernal wound at a time"
            ]),
            usages: "Constitution modifier per ",
            usagescalc: "event.value = Math.max(1, What('Con Mod'));",
            recovery: "short rest"
        },
        "subclassfeature7": {
            name: "Advanced Wounds",
            source: [["UVR26", 4]],
            minlevel: 7,
            description: desc([
                "When I roll my Infernal Wound Die, I can apply one of these effects (once per turn).",
                "If I roll a 6, the chosen effect also gains the Devil's Luck bonus:",
                " \u2022 Purulence of Minauros: Each enemy in a 5-ft Emanation from the target takes Acid = Con mod;",
                "   target has the Poisoned condition until end of its next turn.",
                "   Devil's Luck: each creature that takes Acid damage has −1 penalty to AC until end of my next turn",
                " \u2022 Rupture of Cania: Target takes Force = Con mod.",
                "   Devil's Luck: target subtracts 1d6 from the next save it makes before end of my next turn",
                " \u2022 Stygian Gangrene: Target takes Cold = Con mod and can't take Reactions until start of its next turn.",
                "   Devil's Luck: target's Speed is halved until end of its next turn"
            ])
        },
        "subclassfeature7.1": {
            name: "Infernal Equipment",
            source: [["UVR26", 5]],
            minlevel: 7,
            description: desc([
                "My armor and weapons embody infernal armaments forged in the fires of Avernus:",
                " \u2022 Infernal Resilience: When I finish a Short or Long Rest, I choose Cold, Fire, or Necrotic.",
                "   While wearing Heavy armor or wielding a Shield, I have Resistance to that damage type",
                "   until I choose a different one",
                " \u2022 Unholy Power: When I roll my Infernal Wound Die, I can treat a roll of 1 as a 6"
            ])
        },
        "subclassfeature10": {
            name: "Hellfire Surge",
            source: [["UVR26", 5]],
            minlevel: 10,
            description: desc([
                "When I use Action Surge while holding a Hell-Forged Weapon, I erupt with hellfire in a",
                "20-ft Emanation from me that lasts until the end of my next turn.",
                "Whenever a creature suffering an infernal wound starts its turn within the Emanation,",
                "it takes damage equal to two rolls of my Infernal Wound Die instead of one"
            ])
        },
        "subclassfeature15": {
            name: "Devil's Misfortune",
            source: [["UVR26", 5]],
            minlevel: 15,
            description: desc([
                "When a creature with an infernal wound hits me with an attack roll, I can take a Reaction",
                "to roll my Infernal Wound Die and reduce the damage taken by the number rolled.",
                "On a roll of 6, I roll my Infernal Wound Die again (max three rolls total) and reduce",
                "damage by the total rolled.",
                "In addition, if the attack is a Critical Hit, it becomes a normal hit"
            ]),
            action: [["reaction", "Devil's Misfortune (creature with infernal wound hits me)"]]
        },
        "subclassfeature18": {
            name: "Infernal Bargain",
            source: [["UVR26", 5]],
            minlevel: 18,
            description: desc([
                "When I roll a 6 on my Infernal Wound Die three or more times before the start of my next",
                "turn, I gain Heroic Inspiration. I can use it in the following way:",
                " \u2022 Infernal Inspiration: If a creature I can see within 120 ft rolls a d20 for a D20 Test,",
                "   I can expend my Heroic Inspiration to force the target to reroll the d20.",
                "   If the result causes the target to succeed, I regain an expended use of Indomitable",
                "   or Second Wind (my choice). If it causes the target to fail, I lose HP = 3d6 + Fighter level"
            ])
        }
    }
});

// SUBCLASS: DEMONIC SORCERY (SORCERER)
AddSubClass("sorcerer", "demonic sorcery", {
    regExpSearch: /^(?=.*sorcerer)(?=.*demon).*$/i,
    subname: "Demonic Sorcery",
    source: [["UVR26", 5]],
    spellcastingExtra: [
        "bane", "dissonant whispers", "spike growth", "web",
        "bestow curse", "dispel magic",
        "giant insect", "hallucinatory terrain",
        "contact other plane", "modify memory"
    ],
    spellCastingExtraApplyNonconform: true,
    features: {
        "subclassfeature3": {
            name: "Abyssal Rupture",
            source: [["UVR26", 5]],
            minlevel: 3,
            description: desc([
                "When I use Innate Sorcery, I create a rupture into the Abyss: a 10-ft-radius Sphere centered",
                "on a point I can see within 30 ft, filled with Abyssal energy.",
                "When I activate Innate Sorcery and as a Bonus Action while Innate Sorcery is active,",
                "I can choose one of the following options:",
                " \u2022 Demonic Lash: Melee spell attack vs a target within 5 ft of the rupture. Hit: 1d8 Slashing;",
                "   if Large or smaller, I can pull it up to 10 ft toward the center of the Sphere",
                " \u2022 Terrifying Screams: Each creature in the rupture makes a Wis save vs my spell save DC",
                "   or takes 1d4 Psychic damage",
                "While the rupture persists, I can move the center to a point within 30 ft at start of my turns"
            ]),
            action: [["bonus action", "Abyssal Rupture option (while Innate Sorcery active)"]]
        },
        "subclassfeature6": {
            name: "Abyssal Realm",
            source: [["UVR26", 6]],
            minlevel: 6,
            description: desc([
                "When I spend at least 1 Sorcery Point as part of a Magic action or Bonus Action on my turn,",
                "I can pull influence from the Abyss, creating a 10-ft Emanation from me or filling my",
                "Abyssal Rupture Sphere with magic from one of the following layers of the Abyss:",
                " \u2022 Gaping Maw's Frenzy: Designate a horizontal direction. Each creature in the area that",
                "   fails a Cha save must use as much of its movement as possible to move that direction",
                "   at the start of its next turn, taking the safest route",
                " \u2022 Maze of Azzatar: Each creature in the area makes an Int save. On a failed save,",
                "   I gain the benefits of the Invisible condition against that target until start of my next turn",
                " \u2022 Slime Pits' Haze: Each creature in the area makes a Con save. On a failed save,",
                "   the target has my choice of the Charmed or Poisoned condition until start of my next turn",
                "Saving throw DC equals my spell save DC"
            ])
        },
        "subclassfeature14": {
            name: "Abyssal Conduit",
            source: [["UVR26", 6]],
            minlevel: 14,
            description: desc([
                "\u2022 Rupture Expansion: My Abyssal Rupture is now a 30-ft-radius Sphere and is Difficult",
                "  Terrain for my enemies",
                "\u2022 Fiendish Servant: I always have Summon Fiend prepared. When I cast it, I can modify",
                "  it to not require Concentration; when I do, the duration becomes 1 minute and I must",
                "  choose Demon. The Fiend has Advantage on attack rolls while within my Abyssal Rupture"
            ])
        },
        "subclassfeature18": {
            name: "Abyssal Explosion",
            source: [["UVR26", 6]],
            minlevel: 18,
            description: desc([
                "As a Magic action, I fill a 30-ft-radius Sphere with an explosion of Abyssal energy.",
                "Each creature in the Sphere makes a Con save vs my spell save DC.",
                "Fail: 8d6 Force damage if it isn't a Fiend, and it has the Incapacitated condition",
                "until the start of my next turn.",
                "Once used, I can't do so again until I finish a Long Rest, unless I spend 7 Sorcery Points",
                "(no action required) to restore my use of it"
            ]),
            usages: 1,
            recovery: "long rest",
            altResource: "7 SP",
            action: [["action", "Abyssal Explosion"]]
        }
    }
});

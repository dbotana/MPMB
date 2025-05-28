/* -WHAT IS THIS?-
This file adds optional material to "MPMB's Character Record Sheet" found at https://flapkan.com/mpmb/charsheets
Import this file using the "Add Extra Materials" bookmark.
-KEEP IN MIND-
It is recommended to enter the code in a fresh sheet before adding any other information (i.e. before making your character with it).
*/

/* -INFORMATION-
Subject: Subclass
Effect: This script adds the Path of the Dragon, a Barbarian subclass (Homebrew)
Code by: Rocky
Date: 2025-04-24 (sheet v13)
*/

var iFileName = "Barbarian - Path of the Dragon.js";

RequiredSheetVersion(13);

SourceList["HB:DB"] = {
    name: "Homebrew: Path of the Dragon Barbarian",
    abbreviation: "HB:DB",
    group: "Homebrew",
    url: "https://docs.google.com/document/d/18zvCk5XinTL6AipXVO3O96sS9-xRz9o4Egd0aP-XFm4/edit?tab=t.0",
    date: "2025-04-24"
};

AddSubClass("barbarian", "path of the dragon", {
    regExpSearch: /^(?=.*dragon)(?=.*(path|subclass))/i,
    subname: "Path of the Dragon",
    source: ["HB:DB", 0],
    features: {
        "subclassfeature3.1": {
            name: "Draconic Might",
            source: ["HB:DB", 0],
            minlevel: 3,
            description: desc([
                "I learn to read, speak, and write Draconic and one other language of my choice",
                "I gain access to the Thaumaturgy cantrip"
            ]),
            languageProfs: ["Draconic", 1],
            spellcastingBonus: {
                name: "Draconic Might",
                spells: ["thaumaturgy"],
                selection: ["thaumaturgy"]
            }
        },
        "subclassfeature3.2": {
            name: "Burning Blood",
            source: ["HB:DB", 0],
            minlevel: 3,
            description: desc([
                "My unarmed strikes come in the form of razor sharp claws and teeth",
                "My unarmed strikes deal 1d8+STR slashing damage",
                "My Barbaric Rage becomes Draconic Fury, granting me Draconic Boons",
                "I gain 1 Draconic Boon at 3rd level and additional boons at 6th, 10th, and 14th level"
            ]),
            weaponsAdd: ["Dragon Claws"],
            weaponOptions: [{
                regExpSearch: /^(?=.*dragon)(?=.*claws).*$/i,
                name: "Dragon Claws",
                source: ["HB:DB", 0],
                ability: 1,
                type: "Natural",
                damage: [1, 8, "slashing"],
                range: "Melee",
                description: "Counts as unarmed strike",
                abilitytodamage: true
            }],
            toNotesPage: [{
                name: "Draconic Boons",
                page3notes: true,
                note: [
                    "Draconic Boons (3rd level):",
                    "\u2022 Ancient Strength: Count as 1 size larger for carrying capacity; 2 sizes larger during Draconic Fury",
                    "\u2022 Hardened Scales: +1 to Unarmored Defense AC; +2 during Draconic Fury",
                    "\u2022 Savage Instincts: Make Opportunity Attack against first creature attacking me after my turn",
                    "   without reaction; Opportunity Attacks apply rage damage bonus twice during Draconic Fury",
                    "",
                    "Draconic Boons (6th level):",
                    "\u2022 Draconic Disguise: Once per day polymorph into humanoid form; during Draconic Fury,",
                    "   force WIS save (DC 8+Prof+CON) or incapacitate nearby creatures",
                    "\u2022 Kereska's Majesty: Gain Arcana proficiency and cantrips; during Draconic Fury,",
                    "   gain magic resistance and extra elemental damage",
                    "\u2022 Astilabor's Eye for Treasure: Gain expertise in Perception and Investigation;",
                    "   during Draconic Fury, gain reaction to prevent movement/grappling",
                    "",
                    "Draconic Boons (10th level):",
                    "\u2022 Dominating Presence: Gain expertise in Intimidation and Persuasion;",
                    "   during Draconic Fury, force WIS save or frighten nearby creatures",
                    "\u2022 Wit of Hlal: Gain proficiency in Persuasion, Deception, and Performance;",
                    "   during Draconic Fury, can incapacitate creatures with laughter",
                    "\u2022 Tamara's Mercy: Become immune to diseases and gain healing abilities;",
                    "   during Draconic Fury, reroll 1s on healing",
                    "",
                    "Draconic Boons (14th level):",
                    "\u2022 Null's Embrace: Can cast Speak with Dead; during Draconic Fury,",
                    "   gain Death Ward and summon a Draconic Spirit",
                    "\u2022 Garyx's Destruction: Gain fire resistance; during Draconic Fury,",
                    "   become immune to fire and damage nearby creatures"
                ]
            }]
        },
        "subclassfeature6": {
            name: "Essence of Zorquan",
            source: ["HB:DB", 0],
            minlevel: 6,
            description: desc([
                "I grow a draconic tail that I can use to make an additional attack as a bonus action",
                "The tail attack deals 1d8+STR bludgeoning damage",
                "I grow small wings that allow me to glide (5 ft horizontally for every 1 ft descended)",
                "Once at dawn, I can choose an element to gain resistance to while Draconic Fury is active",
                "I gain a breath weapon attack that deals 2d10 damage in a 5 ft × 30 ft line or 15 ft cone",
                "Creatures must make a DEX save (DC 8+Prof+CON) for half damage",
                "Breath weapon damage and area increases at higher levels"
            ]),
            weaponsAdd: ["Dragon Tail"],
            weaponOptions: [{
                regExpSearch: /^(?=.*dragon)(?=.*tail).*$/i,
                name: "Dragon Tail",
                source: ["HB:DB", 0],
                ability: 1,
                type: "Natural",
                damage: [1, 8, "bludgeoning"],
                range: "Melee",
                description: "Bonus action attack",
                abilitytodamage: true
            }],
            action: [["bonus action", "Dragon Tail Attack"]],
            usages: "Proficiency bonus per",
            usagescalc: "event.value = How('Proficiency Bonus');",
            recovery: "short rest",
            additional: levels.map(function (n) {
                if (n < 6) return "";
                if (n < 10) return "2d10, 5ft×30ft/15ft cone";
                if (n < 14) return "3d10, 10ft×60ft/30ft cone";
                if (n < 18) return "4d10, 10ft×60ft/30ft cone";
                return "4d10, 15ft×90ft/45ft cone";
            })
        },
        "subclassfeature10": {
            name: "Heart of The Wyrm",
            source: ["HB:DB", 0],
            minlevel: 10,
            description: desc([
                "I choose one of three paths: Heart of Tiamat, Heart of Bahamut, or Heart of Sardior",
                "Once chosen, this path cannot be changed",
                "Each path grants different abilities that I can select once at dawn"
            ]),
            choices: ["Heart of Tiamat", "Heart of Bahamut", "Heart of Sardior"],
            "heart of tiamat": {
                name: "Heart of Tiamat",
                description: desc([
                    "My blood and soul align with the malevolent chromatic family",
                    "Once at dawn I can choose one of the following benefits (can change next dawn):",
                    "\u2022 Red Heart: 2 extra rages per day, immunity to extreme heat, climbing speed",
                    "\u2022 Blue Heart: +20ft movement speed, can Dash as part of Draconic Fury extension",
                    "\u2022 Green Heart: Speak with plants, swim speed, water breathing",
                    "\u2022 White Heart: Perfect memory for 1 month, immunity to extreme cold",
                    "\u2022 Black Heart: Heavily obscured in dim light, swim speed, water breathing"
                ])
            },
            "heart of bahamut": {
                name: "Heart of Bahamut",
                description: desc([
                    "My blood and soul align with the benevolent metallic family",
                    "Once at dawn I can choose one of the following benefits (can change next dawn):",
                    "\u2022 Golden Heart: Advantage vs. charm/fear, swim speed, water breathing",
                    "\u2022 Silver Heart: Immunity to extreme cold and forced movement",
                    "\u2022 Bronze Heart: Can cast Zone of Truth once per short rest, swim speed, water breathing",
                    "\u2022 Copper Heart: Speak with animals, ignore difficult terrain, climbing speed",
                    "\u2022 Brass Heart: Can cast Major Image at 4th level once per short rest"
                ])
            },
            "heart of sardior": {
                name: "Heart of Sardior",
                description: desc([
                    "My blood and soul align with the impartial gem family",
                    "Once at dawn I can choose one of the following benefits (can change next dawn):",
                    "\u2022 Amethyst Heart: Immunity to being knocked prone, swim speed, water breathing",
                    "\u2022 Emerald Heart: Advantage against psionic or illusion effects",
                    "\u2022 Sapphire Heart: Climbing speed with no hands needed",
                    "\u2022 Topaz Heart: Immunity to Exhaustion, swim speed, water breathing",
                    "\u2022 Crystal Heart: Can cast Guidance, Light, and Dancing Lights"
                ])
            }
        },
        "subclassfeature14": {
            name: "Aspect of Asgorath",
            source: ["HB:DB", 0],
            minlevel: 14,
            description: desc([
                "I gain the dragon creature type and grow to Large size",
                "I gain blindsight of 30 ft",
                "My natural weapons and tail attack use d12s, and my tail attack gains 15 ft reach",
                "I gain a flight speed equal to my walking speed",
                "When activating Draconic Fury, I transform into an aspect of Asgorath:",
                "\u2022 I can hover without wings",
                "\u2022 My shape cannot be changed against my will",
                "\u2022 I gain 60 ft of True Sight",
                "\u2022 Once per long rest, I automatically succeed on first Relentless Rage and regain half HP",
                "\u2022 The DC increases to 15 for subsequent Relentless Rage checks",
                "I gain additional benefits based on my Heart of the Wyrm path"
            ]),
            weaponOptions: [{
                regExpSearch: /^(?=.*dragon)(?=.*claws).*$/i,
                name: "Dragon Claws (Improved)",
                source: ["HB:DB", 0],
                ability: 1,
                type: "Natural",
                damage: [1, 12, "slashing"],
                range: "Melee",
                description: "Counts as unarmed strike",
                abilitytodamage: true
            }, {
                regExpSearch: /^(?=.*dragon)(?=.*tail).*$/i,
                name: "Dragon Tail (Improved)",
                source: ["HB:DB", 0],
                ability: 1,
                type: "Natural",
                damage: [1, 12, "bludgeoning"],
                range: "Melee, 15 ft reach",
                description: "Bonus action attack",
                abilitytodamage: true
            }],
            vision: [["Blindsight", 30], ["Truesight (during Draconic Fury)", 60]],
            speed: { fly: { spd: "walk", enc: "walk" } },
            toNotesPage: [{
                name: "Aspect of Asgorath Path Benefits",
                page3notes: true,
                note: [
                    "Chromatic Aspect:",
                    "\u2022 My scales shine with the colors of the chromatic family",
                    "\u2022 Action: Unleash Chromatic Flare (60 ft radius, DEX save for half damage)",
                    "   dealing 4d12 elemental damage",
                    "\u2022 Reaction: Gain immunity to Acid, Cold, Fire, Lightning, and Poison damage until next turn",
                    "",
                    "Metallic Aspect:",
                    "\u2022 My scales gleam with the brilliance of platinum light",
                    "\u2022 Bonus Action: Summon 7 spectral ancient gold dragons to grant temporary HP to allies",
                    "\u2022 Action: Make a Ranged Attack with a platinum light lance (4d12 Radiant Damage)",
                    "",
                    "Gem Aspect:",
                    "\u2022 My scales shine with refractions of crimson ruby light",
                    "\u2022 Bonus Action: Teleport 60 ft in any direction",
                    "\u2022 I can choose 2 resistances and select my breath weapon damage type each turn"
                ]
            }],
            action: [
                ["bonus action", "Gem Aspect: Teleport"],
                ["bonus action", "Metallic Aspect: Summon Spectral Dragons"],
                ["action", "Chromatic Aspect: Chromatic Flare"],
                ["action", "Metallic Aspect: Platinum Light Lance Attack"],
                ["reaction", "Chromatic Aspect: Elemental Immunity"]
            ]
        }
    }
});

/*	-WHAT IS THIS?-
    This file adds optional material to "MPMB's Character Record Sheet" found at https://flapkan.com/mpmb/charsheets
    Import this file using the "Add Extra Materials" bookmark.
    -KEEP IN MIND-
    It is recommended to enter the code in a fresh sheet before adding any other information (i.e. before making your character with it).
*/

/*	-INFORMATION-
    Subject:	2026 UA Villainous Options https://media.dndbeyond.com/compendium-images/ua/villainous-options/VRQr4YbETAgmpWRj/UA2026-VillainousOptions.pdf
    Effect:		This script adds the 2026 UA Villainous Options subclasses and feat paths.
                It should be added after PokeSimmer's 2024 scripts https://github.com/thepokesimmer/2024-PHB.
    Code by:	Rocky
    Date:		2026-04-07 (sheet v13)
*/

var iFileName = "VillainousUA26.js";

RequiredSheetVersion("13.2.0");

SourceList["UAV26"] = {
    name: "UA 2026 Villainous Options",
    abbreviation: "UAV26",
    group: "Unearthed Arcana",
    url: "https://media.dndbeyond.com/compendium-images/ua/villainous-options/VRQr4YbETAgmpWRj/UA2026-VillainousOptions.pdf",
    date: "2026/04/07"
};

// SUBCLASS: PESTILENCE DOMAIN (CLERIC)
AddSubClass("cleric", "pestilence domain", {
    regExpSearch: /^(?=.*(cleric|priest|clergy|acolyte))(?=.*(pestilence|plague|rot|blight|disease)).*$/i,
    subname: "Pestilence Domain",
    source: [["UAV26", 1]],
    spellcastingExtra: [
        "detect poison and disease", "protection from poison", "ray of enfeeblement", "ray of sickness",
        "stinking cloud", "vampiric touch",
        "blight", "giant insect",
        "contagion", "insect plague"
    ],
    spellCastingExtraApplyNonconform: true,
    features: {
        "subclassfeature3": {
            name: "Blight Weaver",
            source: [["UAV26", 1]],
            minlevel: 3,
            description: desc([
                "\u2022 Inoculated Soul: I have Resistance to Necrotic and Poison damage",
                "  I can't be infected by magical contagions",
                "\u2022 Rot and Fester: Damage from my Cleric spells and features ignores Resistance to Necrotic",
                "  and Poison damage. When I deal Necrotic or Poison damage with a Cleric spell or feature,",
                "  I can change that damage to the other type"
            ]),
            dmgres: ["Necrotic", "Poison"],
            savetxt: { immune: ["magical contagions"] }
        },
        "subclassfeature3.1": {
            name: "Plague Blessing",
            source: [["UAV26", 2]],
            minlevel: 3,
            description: desc([
                "As a Magic action, I expend Channel Divinity to manifest a 5-ft Emanation of withering",
                "plague around me or one willing creature I touch for 1 minute (dismiss: no action)",
                "Each creature of my choice starting its turn in the Emanation makes a Con save",
                "On a fail: +1 Exhaustion level (max = my Wisdom modifier, minimum 1)",
                "The plague has a symptom; roll 1d6 or choose from the Plague Symptoms table (see notes)"
            ]),
            action: [["action", "Plague Blessing (Channel Divinity)"]],
            toNotesPage: [{
                name: "Plague Symptoms Table",
                page3notes: true,
                note: [
                    "PLAGUE SYMPTOMS (1d6)",
                    "1: Drained of all color, appearing in monochromatic grays",
                    "2: Sheds metallic, rust-hued flakes and creaks while moving",
                    "3: Secretes foul-smelling mucus",
                    "4: Surrounded by a cloud of buzzing insects",
                    "5: Sprouts fungi or other foliage from its flesh",
                    "6: Covered in glowing pustules"
                ]
            }]
        },
        "subclassfeature6": {
            name: "Virulent Burst",
            source: [["UAV26", 2]],
            minlevel: 6,
            description: desc([
                "Reaction when an enemy within 60 ft is reduced to 0 HP: plague bursts from that creature",
                "10-ft Emanation from the enemy (20-ft if it had at least 1 Exhaustion level)",
                "Each creature of my choice in the Emanation makes a Con save against my spell save DC",
                "On a failed save, I choose one effect:",
                " \u2022 Putrid Shock: Incapacitated (speed 0) until end of its next turn",
                " \u2022 Toxic Infection: 3d6 Necrotic or Poison damage (my choice)"
            ]),
            action: [["reaction", "Virulent Burst (enemy drops to 0 HP)"]],
            usages: "Wisdom modifier per ",
            usagescalc: "event.value = Math.max(1, What('Wis Mod'));",
            recovery: "long rest"
        },
        "subclassfeature17": {
            name: "Vermin Form",
            source: [["UAV26", 2]],
            minlevel: 17,
            description: desc([
                "As a Bonus Action, I shapeshift into a Medium swarm of Tiny pests for up to 10 minutes",
                "I retain my shape, personality, memories, ability to speak, and game statistics except:",
                " \u2022 Condition Immunities: Grappled, Paralyzed, Prone, Restrained",
                " \u2022 Damage Resistances: Bludgeoning, Piercing, Slashing",
                " \u2022 Movement: I can enter/occupy a creature's space; gain Climb Speed = my Speed",
                "   and can climb difficult surfaces (including ceilings) without checks",
                " \u2022 Plague Bites: When I enter an enemy's space (or it enters mine or ends its turn there),",
                "   it takes Wis modifier damage (Necrotic, Piercing, or Poison; my choice), once per turn",
                "Equipment doesn't transform but I can still use it",
                "Revert after 10 min, if I choose to end it (no action), if Incapacitated, or if I die",
                "Once used, I can't use it again until a Long Rest or expend a level 5+ spell slot (no action)"
            ]),
            action: [["bonus action", "Vermin Form"]],
            usages: 1,
            recovery: "long rest",
            altResource: "level 5+ spell slot"
        }
    }
});

// SUBCLASS: CIRCLE OF THE TITAN (DRUID)
AddSubClass("druid", "circle of the titan", {
    regExpSearch: /^(?=.*(druid|shaman))(?=.*(titan|colossus|behemoth|giant)).*$/i,
    subname: "Circle of the Titan",
    source: [["UAV26", 3]],
    spellcastingExtra: [
        "cure wounds", "longstrider", "thaumaturgy",
        "fear",
        "stoneskin",
        "destructive wave"
    ],
    spellCastingExtraApplyNonconform: true,
    features: {
        "subclassfeature3": {
            name: "Titan Form",
            source: [["UAV26", 3]],
            minlevel: 3,
            description: desc([
                "When I use Wild Shape, I can adopt a Titan Form: Behemoth, Leviathan, or Insectoid",
                "I can also cast my Circle of the Titan spells while in Titan Form",
                "See the Titan stat blocks and appearance table in notes",
                " \u2022 Behemoth: AC 11+Wis, Speed 40/Climb 40, Rend (Slashing), Incandescent Breath (line)",
                "   Siege Monster: double damage to objects/structures",
                " \u2022 Leviathan: AC 10+Wis, Speed 40/Swim 40, Rend (Bludgeoning), Ink Cloud (reaction)",
                "   Amphibious: breathe air and water",
                " \u2022 Insectoid: AC 8+Wis, Speed 40/Fly 40, Rend (Piercing), Energizing Pollen (healing)",
                "   Flyby: no opportunity attacks when flying out of enemy reach",
                "All forms: Temp HP = 2 × Druid level; Str/Dex = Wis score; Darkvision 60 ft",
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
                    "Temp HP: 2 × Druid level | Str & Dex = Wis score | Darkvision 60 ft",
                    "Rend: Spell atk mod, reach 10 ft, 1d8 + Wis mod damage",
                    "Multiattack (level 5+): Two Rend attacks",
                    "",
                    "BEHEMOTH",
                    "AC: 11 + Wis modifier | Speed: 40 ft, Climb 40 ft",
                    "Traits: Siege Monster (double damage to objects/structures)",
                    "  Rampager (level 10+): When entering enemy space (1+ size smaller), Str save or Prone;",
                    "    if already Prone, take 2d6 Bludgeoning instead",
                    "Actions: Rend (Slashing)",
                    "  Incandescent Breath: Expend level 1+ spell slot; 5-ft wide, 60-ft Line; Dex save;",
                    "    Fail: 2d8 Radiant per slot level + Wis mod; Success: half",
                    "",
                    "LEVIATHAN",
                    "AC: 10 + Wis modifier | Speed: 40 ft, Swim 40 ft",
                    "Traits: Amphibious (breathe air and water)",
                    "  Toxic Stench (level 10+): Con save each creature starting turn in 10-ft Emanation;",
                    "    Fail: 2d4 Poison + Poisoned until start of its next turn",
                    "Actions: Rend (Bludgeoning)",
                    "Reactions: Ink Cloud: On taking damage, expend level 1+ spell slot; 15-ft radius Cube",
                    "  Heavily Obscured for 1 minute; move up to Speed",
                    "",
                    "INSECTOID",
                    "AC: 8 + Wis modifier | Speed: 40 ft, Fly 40 ft",
                    "Traits: Flyby (no opportunity attacks when flying out of reach)",
                    "  Hive Mind (level 10+): Forge telepathic link with up to [Druid level] creatures you",
                    "    can see that speak a language; communicate telepathically on same plane",
                    "Actions: Rend (Piercing)",
                    "  Energizing Pollen: Expend level 1+ spell slot; restore 2d8 + 5×slot level HP total;",
                    "    divide among any number of creatures within 15 ft",
                    "",
                    "TITAN APPEARANCE TABLE (1d4)",
                    "Behemoth: 1-Reflective scales, 2-Multiple heads, 3-Reptilian tail, 4-Woolly and simian",
                    "Leviathan: 1-Many-tentacled, 2-Translucent and bloblike, 3-Lamprey-like mouth, 4-Serpentine body",
                    "Insectoid: 1-Iridescent wings, 2-Compound eyes, 3-Chitinous horns, 4-Bioluminescent exoskeleton"
                ]
            }]
        },
        "subclassfeature6": {
            name: "Dire Impact",
            source: [["UAV26", 3]],
            minlevel: 6,
            description: desc([
                "\u2022 Elemental Rend: When I hit with my Titan Form's Rend, I can choose Acid, Cold, Fire,",
                "  Lightning, or Thunder damage instead of its normal type",
                "\u2022 Shock Wave: Immediately after I assume a Titan Form, or by spending a Bonus Action to",
                "  expend a level 1+ spell slot while in Titan Form, I create a shock wave in a",
                "  15-ft Emanation. Each creature in it makes a Con save vs my spell save DC or is Prone"
            ]),
            action: [["bonus action", "Shock Wave (expend level 1+ spell slot)"]]
        },
        "subclassfeature10": {
            name: "Primal Havoc",
            source: [["UAV26", 3]],
            minlevel: 10,
            description: desc([
                "\u2022 Improved Titan Form: I can choose to become Huge when assuming my Titan Form",
                "  Each form gains an additional benefit:",
                "  - Behemoth: Rampager trait (enter enemy space = Str save or Prone / 2d6 Bludgeoning)",
                "  - Leviathan: Toxic Stench trait (10-ft Emanation, Con save or 2d4 Poison + Poisoned)",
                "  - Insectoid: Hive Mind trait (telepathic link with up to [Druid level] visible creatures)",
                "\u2022 Above It All: While Huge or larger in Titan Form, Difficult Terrain from heavy snow,",
                "  ice, rubble, or undergrowth doesn't cost extra movement"
            ])
        },
        "subclassfeature14": {
            name: "Monstrous Appetite",
            source: [["UAV26", 3]],
            minlevel: 14,
            description: desc([
                "\u2022 Gargantuan Size: I can choose to become Gargantuan when assuming my Titan Form",
                "\u2022 Grappling Rend: Once per turn when Huge or larger, hitting a creature with Rend can",
                "  give it the Grappled condition (escape DC = my spell save DC); one target at a time",
                "\u2022 Swallow: As a Bonus Action while Gargantuan, choose a Large or smaller Grappled",
                "  creature. It makes a Str save vs my spell save DC. On a fail: swallowed (Grappled ends).",
                "  Swallowed: Blinded, Restrained, Total Cover, 2d8 Acid at start of each of my turns",
                "  I can swallow up to Wis modifier creatures (min 1); requires Concentration.",
                "  Lose Concentration or leave Titan Form: regurgitate all (fall Prone in 10 ft of me)"
            ]),
            action: [["bonus action", "Swallow (Gargantuan, target Grappled)"]]
        }
    }
});

// SUBCLASS: HELL KNIGHT (FIGHTER)
AddSubClass("fighter", "hell knight", {
    regExpSearch: /^(?=.*(fighter|warrior|champion))(?=.*(hell|infernal|diabolical|devil)).*$/i,
    subname: "Hell Knight",
    source: [["UAV26", 6]],
    features: {
        "subclassfeature3": {
            name: "Diabolical Gift",
            source: [["UAV26", 6]],
            minlevel: 3,
            description: desc([
                "\u2022 Devil's Sight: I see normally in Dim Light and Darkness (magical and nonmagical) to 120 ft",
                "\u2022 Devil's Tongue: I know Infernal; if I already know it, I learn another language of my choice"
            ]),
            vision: [["See through magical darkness", 120], ["Darkvision", 120]],
            languageProfs: [["Infernal or any language", 1]]
        },
        "subclassfeature3.1": {
            name: "Hellfire Weapon",
            source: [["UAV26", 6]],
            minlevel: 3,
            description: desc([
                "When I take the Attack action, I can imbue one held weapon with hellfire for 10 minutes",
                "(or until I use this again, die, or the weapon is 5+ ft away for 1 min; end early: no action)",
                "While imbued: the weapon emits Dim Light in a 5-ft Emanation",
                "Damage with it can be Fire or its normal damage type (my choice per hit)"
            ])
        },
        "subclassfeature3.2": {
            name: "Infernal Wound",
            source: [["UAV26", 6]],
            minlevel: 3,
            description: desc([
                "My Hellfire Weapon can inflict infernal wounds (Infernal Wound Die: d6)",
                "Once per turn when I hit a creature with my Hellfire Weapon:",
                "  I can deal extra 1d6 Fire damage and give it an infernal wound",
                "While wounded: takes 1d6 Fire at the start of each of its turns for 1 minute",
                "  (until it regains HP, or a creature within 5 ft uses an action to stanch the wound)",
                "Only one instance of this feature can affect a target at a time"
            ]),
            usages: "Constitution modifier per ",
            usagescalc: "event.value = Math.max(1, What('Con Mod'));",
            recovery: "short rest"
        },
        "subclassfeature7": {
            name: "Advanced Wounds",
            source: [["UAV26", 6]],
            minlevel: 7,
            description: desc([
                "When I roll my Infernal Wound Die and roll a 6, I can apply one of these effects:",
                " \u2022 Purulence of Minauros: Caustic pus erupts; each creature in a 5-ft Emanation from the",
                "   target takes Acid = Con mod; target has the Poisoned condition until its next turn",
                " \u2022 Rupture of Cania: The wound ruptures; target takes Force = Con mod",
                " \u2022 Stygian Gangrene: Infernal rime spreads; target takes Cold = Con mod and can't",
                "   take Reactions until the start of its next turn"
            ])
        },
        "subclassfeature7.1": {
            name: "Hell-Forged Equipment",
            source: [["UAV26", 6]],
            minlevel: 7,
            description: desc([
                "My armor and weapons embody infernal armaments forged in the fires of Avernus:",
                " \u2022 Fire Resistance: While wearing armor or wielding a Shield, I have Resistance to Fire",
                " \u2022 Unholy Fire: Damage from my weapon attacks and Fighter features ignores Fire Resistance"
            ]),
            dmgres: ["Fire"]
        },
        "subclassfeature10": {
            name: "Hellfire Surge",
            source: [["UAV26", 7]],
            minlevel: 10,
            description: desc([
                "When I use Action Surge while wearing armor or wielding a Shield, I can superheat my",
                "equipment, erupting with hellfire in a 10-ft Emanation from me",
                "Each creature of my choice in the Emanation makes a Dex save (DC 8 + Con mod + PB)",
                "Fail: 1d6 Fire damage (one Infernal Wound Die roll) and the target is burning",
                "Success: half damage only"
            ])
        },
        "subclassfeature15": {
            name: "Blister of Avernus",
            source: [["UAV26", 7]],
            minlevel: 15,
            description: desc([
                "When I roll a 6 on my Infernal Wound Die, I can roll another d6 and add it to the damage",
                "The maximum number of extra d6s I can add to an Infernal Wound's damage on a turn is 3"
            ])
        },
        "subclassfeature18": {
            name: "Hellfire Condemnation",
            source: [["UAV26", 7]],
            minlevel: 18,
            description: desc([
                "When damage from my Hellfire Weapon or Infernal Wound reduces a creature to 0 HP,",
                "the creature dies and its soul rises from the River Styx as a Lemure in a layer of",
                "the Nine Hells of my choice in 1d4 hours. If the creature isn't revived before then,",
                "only a Wish spell can return the creature to life"
            ])
        },
        "subclassfeature18.1": {
            name: "Infernal Bargain",
            source: [["UAV26", 7]],
            minlevel: 18,
            description: desc([
                "When I roll my Infernal Wound Die, I can treat a roll of 1 as a 6"
            ])
        }
    }
});

// SUBCLASS: DEMONIC SORCERY (SORCERER)
AddSubClass("sorcerer", "demonic sorcery", {
    regExpSearch: /^(?=.*(sorcerer|sorcery|witch))(?=.*(demon|demonic|abyss|abyssal)).*$/i,
    subname: "Demonic Sorcery",
    source: [["UAV26", 7]],
    spellcastingExtra: [
        "detect magic", "entangle", "misty step", "spider climb",
        "dispel magic", "gaseous form",
        "confusion", "hallucinatory terrain",
        "contact other plane", "hallow"
    ],
    spellCastingExtraApplyNonconform: true,
    features: {
        "subclassfeature3": {
            name: "Abyssal Rupture",
            source: [["UAV26", 7]],
            minlevel: 3,
            description: desc([
                "When I spend at least 1 Sorcery Point as part of a Magic action or Bonus Action on my turn,",
                "I can unleash one of the following effects (once per turn):",
                " \u2022 Demonic Lash: One creature I can see within 20 ft takes 1d4 Slashing damage; if it is",
                "   Large or smaller, I can pull it up to 10 ft closer to me",
                " \u2022 Fiendish Carapace: Until the start of my next turn, attack rolls against me have",
                "   Disadvantage"
            ])
        },
        "subclassfeature6": {
            name: "Abyssal Aura",
            source: [["UAV26", 8]],
            minlevel: 6,
            description: desc([
                "When I use Innate Sorcery, I can infuse the chaos of the Abyss into my surroundings",
                "While that Innate Sorcery is active, reality warps in a 10-ft Emanation from me",
                "Roll on the Abyssal Effects table to determine the effect (see notes)",
                "If an effect requires a save, the DC equals my spell save DC",
                "Once used, I can't use it again until a Long Rest or spend 2 Sorcery Points (no action)"
            ]),
            usages: 1,
            recovery: "long rest",
            altResource: "2 SP",
            toNotesPage: [{
                name: "Abyssal Effects Table",
                page3notes: true,
                note: [
                    "ABYSSAL EFFECTS (1d6) — 10-ft Emanation from me while Innate Sorcery is active",
                    "(20-ft Emanation at level 14+ via Abyssal Conduit)",
                    "(Saving throw DC = my spell save DC)",
                    "",
                    "1: Sticky Webs — Difficult Terrain for enemies. Each enemy starting its turn in the",
                    "   Emanation makes a Str save or has the Restrained condition. Restrained creature can",
                    "   use an action to make Str (Athletics) vs my spell save DC to end the effect on itself.",
                    "",
                    "2: Caustic Ooze — Difficult Terrain for enemies. Each enemy starting its turn on the",
                    "   ground in the Emanation takes 1d6 Acid (2d6 at level 11, 3d6 at level 16) and makes",
                    "   a Dex save or has the Prone condition.",
                    "",
                    "3: Terrifying Screams — Each enemy starting its turn in the Emanation takes 1d6 Psychic",
                    "   (2d6 at level 11, 3d6 at level 16) and makes a Wis save or has the Frightened",
                    "   condition until the start of its next turn.",
                    "",
                    "4: Enthralling Spores — Emanation is Heavily Obscured for creatures of my choice.",
                    "   At level 11+: each enemy starting its turn in the Emanation makes a Wis save or",
                    "   has the Charmed condition until the start of its next turn.",
                    "",
                    "5: Poisonous Foliage — Emanation is Lightly Obscured by demonic flora. Each enemy",
                    "   starting its turn in the Emanation takes 1d6 Poison (2d6 at level 11, 3d6 at level 16)",
                    "   and makes a Con save or has the Poisoned condition until the start of its next turn.",
                    "",
                    "6: Enervating Bones — Spectral limbs erupt from the ground. Each enemy starting its",
                    "   turn in the Emanation takes 1d10 Necrotic (2d10 at level 11, 3d10 at level 16) and",
                    "   can't regain Hit Points until the start of its next turn."
                ]
            }]
        },
        "subclassfeature14": {
            name: "Abyssal Conduit",
            source: [["UAV26", 8]],
            minlevel: 14,
            description: desc([
                "\u2022 Aura Expansion: My Abyssal Aura is now a 20-ft Emanation",
                "\u2022 Controlled Chaos: When I roll on the Abyssal Effects table, I can roll twice and choose",
                "  which of the two effects to use. If I roll the same number on both dice, I can instead",
                "  choose any effect on the table"
            ])
        },
        "subclassfeature18": {
            name: "Fiendish Servant",
            source: [["UAV26", 8]],
            minlevel: 18,
            description: desc([
                "I can cast Summon Fiend without a Material component",
                "I can cast it once without a spell slot (must choose Demon for the fiend's type)",
                "I regain the ability to cast it this way when I finish a Long Rest"
            ]),
            usages: 1,
            recovery: "long rest",
            spellcastingBonus: [{
                name: "Fiendish Servant (Summon Fiend)",
                spells: ["summon fiend"],
                selection: ["summon fiend"],
                firstCol: "oncelr"
            }],
            spellChanges: {
                "summon fiend": {
                    components: "V,S",
                    compMaterial: "",
                    changes: "I can cast Summon Fiend without material components. Once per long rest I can cast it without a spell slot, but must choose Demon as the fiend type."
                }
            }
        }
    }
});

// FEAT PATH: PATH OF THE DEATH KNIGHT

FeatsList["death knight initiate"] = {
    name: "Death Knight Initiate",
    source: [["UAV26", 9]],
    prerequisite: "Level 4 or higher and the Weapon Mastery feature",
    prereqeval: function (v) {
        return v.characterLevel >= 4 && (
            classes.known.fighter || classes.known.paladin || classes.known.ranger ||
            classes.known.barbarian || classes.known.rogue || classes.known.monk
        );
    },
    descriptionFull: "You gain the following benefits.\n   Ability Score Increase. Increase your Strength or Charisma score by 1, to a maximum of 20.\n   Death Points. You have a number of Death Points equal to your Proficiency Bonus. You regain all expended Death Points when you finish a Long Rest. You can expend Death Points to use certain Path of the Death Knight benefits.\n   Dread Strike. You always have the Wrathful Smite spell prepared. Charisma is your spellcasting ability for this spell. You can cast it without expending a spell slot by expending 1 Death Point. When you expend Death Points to cast Wrathful Smite, the target has Disadvantage on Wisdom saving throws to avoid or end the spell's effect. You can also cast the spell using any spell slots you have.",
    description: desc([
        "+1 Str or Cha (choose)",
        "Death Points: equal to Proficiency Bonus; regain all on Long Rest (tracked as 'Death Points')",
        "Dread Strike: always have Wrathful Smite prepared (Cha-based); cast free with 1 Death Point",
        "  When casting with Death Points, target has Disadvantage on Wis saves vs the spell"
    ]),
    scorestxt: "+1 Strength or +1 Charisma",
    limfeaname: "Death Points",
    usages: "Proficiency bonus per ",
    usagescalc: "event.value = How('Proficiency Bonus');",
    recovery: "long rest",
    spellcastingBonus: [{
        name: "Dread Strike (Wrathful Smite)",
        spells: ["wrathful smite"],
        selection: ["wrathful smite"],
        firstCol: "markedbox"
    }]
};

FeatsList["dread authority"] = {
    name: "Dread Authority",
    source: [["UAV26", 9]],
    prerequisite: "Death Knight Initiate feat",
    prereqeval: function (v) {
        return v.feats.indexOf("death knight initiate") !== -1;
    },
    descriptionFull: "You gain the following benefits.\n   Ability Score Increase. Increase your Constitution or Charisma score by 1, to a maximum of 20.\n   Dread Command. You always have the Command spell prepared. Charisma is your spellcasting ability for this spell. You can cast it without expending a spell slot by expending 1 Death Point. You can also cast the spell using any spell slots you have. When you expend Death Points to cast Command, Undead targeted by it have Disadvantage on the saving throw against the spell.",
    description: desc([
        "+1 Con or Cha (choose)",
        "Dread Command: always have Command prepared (Cha-based); cast free with 1 Death Point",
        "  When casting with Death Points, Undead targets have Disadvantage on the save"
    ]),
    scorestxt: "+1 Constitution or +1 Charisma",
    spellcastingBonus: [{
        name: "Dread Command (Command)",
        spells: ["command"],
        selection: ["command"],
        firstCol: "markedbox"
    }]
};

FeatsList["harbinger of doom"] = {
    name: "Harbinger of Doom",
    source: [["UAV26", 10]],
    prerequisite: "Death Knight Initiate feat",
    prereqeval: function (v) {
        return v.feats.indexOf("death knight initiate") !== -1;
    },
    descriptionFull: "You gain the following benefits.\n   Ability Score Increase. Increase your Strength, Constitution, or Charisma score by 1, to a maximum of 20.\n   Ill Omen. You always have the Bane spell prepared. Charisma is your spellcasting ability for this spell. You can cast it without expending a spell slot by expending 1 Death Point. You can also cast the spell using any spell slots you have. When you expend Death Points to cast Bane, affected targets subtract 1d6 from attack rolls and saving throws instead of 1d4.",
    description: desc([
        "+1 Str, Con, or Cha (choose)",
        "Ill Omen: always have Bane prepared (Cha-based); cast free with 1 Death Point",
        "  When casting with Death Points, targets subtract 1d6 (not 1d4) from atk rolls and saves"
    ]),
    scorestxt: "+1 Strength, +1 Constitution, or +1 Charisma",
    spellcastingBonus: [{
        name: "Ill Omen (Bane)",
        spells: ["bane"],
        selection: ["bane"],
        firstCol: "markedbox"
    }]
};

FeatsList["deathly presence"] = {
    name: "Deathly Presence",
    source: [["UAV26", 10]],
    prerequisite: "Level 8 or higher and the Death Knight Initiate feat",
    prereqeval: function (v) {
        return v.characterLevel >= 8 && v.feats.indexOf("death knight initiate") !== -1;
    },
    descriptionFull: "You gain the following benefits.\n   Ability Score Increase. Increase your Strength, Constitution, or Charisma score by 1, to a maximum of 20.\n   Awful Presence. You always have the Fear spell prepared. Charisma is your spellcasting ability for this spell. You can cast it without expending a spell slot by expending 1 Death Point. You can also cast the spell using any spell slots you have. When you expend Death Points to cast Fear, you deal 7 (2d6) Psychic damage to each creature that fails its saving throw against the spell, in addition to the spell's normal effects.",
    description: desc([
        "+1 Str, Con, or Cha (choose)",
        "Awful Presence: always have Fear prepared (Cha-based); cast free with 1 Death Point",
        "  When casting with Death Points, deal 2d6 Psychic to each creature that fails its save"
    ]),
    scorestxt: "+1 Strength, +1 Constitution, or +1 Charisma",
    spellcastingBonus: [{
        name: "Awful Presence (Fear)",
        spells: ["fear"],
        selection: ["fear"],
        firstCol: "markedbox"
    }]
};

FeatsList["unholy steed"] = {
    name: "Unholy Steed",
    source: [["UAV26", 10]],
    prerequisite: "Level 8 or higher and the Death Knight Initiate feat",
    prereqeval: function (v) {
        return v.characterLevel >= 8 && v.feats.indexOf("death knight initiate") !== -1;
    },
    descriptionFull: "You gain the following benefits.\n   Ability Score Increase. Increase your Strength or Constitution score by 1, to a maximum of 20.\n   Spectral Steed. You always have the Find Steed spell prepared. Charisma is your spellcasting ability for this spell. You can cast it without expending a spell slot by expending 1 Death Point. When you expend Death Points to cast Find Steed, the summoned steed is a Fiend, and targets you choose have Disadvantage on the Wisdom saving throw against its Fell Glare. You can also cast the spell using any spell slots you have.",
    description: desc([
        "+1 Str or Con (choose)",
        "Spectral Steed: always have Find Steed prepared (Cha-based); cast free with 1 Death Point",
        "  When casting with Death Points, the steed is a Fiend; chosen targets have Disadvantage on",
        "  the Wis save vs its Fell Glare"
    ]),
    scorestxt: "+1 Strength or +1 Constitution",
    spellcastingBonus: [{
        name: "Spectral Steed (Find Steed)",
        spells: ["find steed"],
        selection: ["find steed"],
        firstCol: "markedbox"
    }]
};

FeatsList["death knight ascension"] = {
    name: "Death Knight Ascension",
    source: [["UAV26", 10]],
    prerequisite: "Level 12 or higher and two Path of the Death Knight feats",
    prereqeval: function (v) {
        if (v.characterLevel < 12) return false;
        var dkFeats = ["death knight initiate", "dread authority", "harbinger of doom", "deathly presence", "unholy steed"];
        var count = 0;
        for (var i = 0; i < dkFeats.length; i++) {
            if (v.feats.indexOf(dkFeats[i]) !== -1) count++;
        }
        return count >= 2;
    },
    descriptionFull: "Your path to becoming a death knight is complete. You gain the following benefits.\n   Ability Score Increase. Increase your Strength or Charisma score by 1, to a maximum of 20.\n   Undead. Your creature type is Undead.\n   Unholy Anatomy. You have Resistance to Necrotic and Poison damage. You don't gain Exhaustion levels from dehydration, malnutrition, or suffocation.\n   Hellfire Orb. As a Magic action, you can expend 1 to 5 Death Points to throw an orb of pure hellfire at a point you can see within 120 feet. Each creature in a 20-foot-radius Sphere makes a Dexterity saving throw (DC 8 plus your Charisma modifier and Proficiency Bonus). On a failed save, a target takes 2d6 Fire damage and 2d6 Necrotic damage per Death Point expended. On a successful save, the target takes half as much damage.",
    description: desc([
        "+1 Str or Cha (choose)",
        "Creature type is now Undead",
        "Unholy Anatomy: Resistance to Necrotic and Poison damage",
        "  No Exhaustion from dehydration, malnutrition, or suffocation",
        "Hellfire Orb: Magic action, expend 1-5 Death Points; target point within 120 ft",
        "  20-ft Sphere; Dex save (DC 8 + Cha mod + PB)",
        "  Fail: 2d6 Fire + 2d6 Necrotic per Death Point spent; Success: half"
    ]),
    scorestxt: "+1 Strength or +1 Charisma",
    dmgres: ["Necrotic", "Poison"],
    savetxt: { immune: ["exhaustion from dehydration, malnutrition, or suffocation"] },
    action: [["action", "Hellfire Orb (expend 1-5 Death Points)"]]
};

// FEAT PATH: PATH OF THE LICH

FeatsList["lich initiate"] = {
    name: "Lich Initiate",
    source: [["UAV26", 11]],
    prerequisite: "Level 4 or higher and the Spellcasting or Pact Magic feature",
    prereqeval: function (v) {
        return v.characterLevel >= 4 && (v.isSpellcaster || v.hasPactMagic);
    },
    descriptionFull: "You take the first steps toward lichdom by creating your spirit jar.\n   Ability Score Increase. Increase your Intelligence, Wisdom, or Charisma score by 1, to a maximum of 20.\n   Creating Your Spirit Jar. Choose a Tiny object of great significance to you. You spend a Long Rest anchoring your soul to this object. You can have only one spirit jar at a time. Its AC equals your spell save DC, and its HP equals your spellcasting ability modifier plus your character level. If your spirit jar is destroyed, you gain 2 Exhaustion levels and can't use Soul Siphon until you create a new one.\n   Soul Siphon. When you reduce a Humanoid enemy to 0 HP (or one within 10 ft of you is reduced to 0 HP), you can consume its soul (no action required). On your next turn, the first creature you hit with an attack takes extra Necrotic damage equal to 1d6 plus your spellcasting ability modifier. A soul consumed this way can be restored only by a True Resurrection or Wish spell.",
    description: desc([
        "+1 Int, Wis, or Cha (choose)",
        "Spirit Jar: choose a Tiny significant object; spend a Long Rest anchoring your soul to it",
        "  Its AC = spell save DC; HP = spellcasting mod + character level",
        "  If destroyed: gain 2 Exhaustion levels, can't use Soul Siphon until a new jar is created",
        "Soul Siphon: when I reduce a Humanoid to 0 HP (or one within 10 ft is), I consume its soul",
        "  On my next turn, first creature I hit takes extra 1d6 + spellcasting mod Necrotic damage",
        "  Consumed souls restored only by True Resurrection or Wish",
        "See notes for Spirit Jar table"
    ]),
    scorestxt: "+1 Intelligence, +1 Wisdom, or +1 Charisma",
    toNotesPage: [{
        name: "Spirit Jars Table",
        page3notes: true,
        note: [
            "SPIRIT JARS (1d6) — Choose or roll for your spirit jar object",
            "1: An acorn from a forest destroyed long ago",
            "2: A love letter from a deceased paramour",
            "3: The inkwell that you used to scribe your first spell or prayer",
            "4: The defaced holy symbol of a god you've denounced",
            "5: A bell whose toll becomes lower with each soul you collect",
            "6: A desiccated body part (an eye, finger, or horn) that was once part of you or someone you knew"
        ]
    }]
};

FeatsList["arcane restoration"] = {
    name: "Arcane Restoration",
    source: [["UAV26", 12]],
    prerequisite: "Lich Initiate feat",
    prereqeval: function (v) {
        return v.feats.indexOf("lich initiate") !== -1;
    },
    descriptionFull: "You gain the following benefits.\n   Ability Score Increase. Increase your Intelligence, Wisdom, or Charisma score by 1, to a maximum of 20.\n   Essence Rejuvenation. When you use Soul Siphon to consume a soul, you can choose one or more expended spell slots to recover. The spell slots can have a combined level equal to no more than 4. Once you use this feature, you can't use it again until you finish a Short or Long Rest.",
    description: desc([
        "+1 Int, Wis, or Cha (choose)",
        "Essence Rejuvenation: when I use Soul Siphon, I can recover expended spell slots",
        "  Combined level of recovered slots can't exceed 4; once per Short or Long Rest"
    ]),
    scorestxt: "+1 Intelligence, +1 Wisdom, or +1 Charisma",
    usages: 1,
    recovery: "short rest",
    limfeaname: "Essence Rejuvenation"
};

FeatsList["transfer life"] = {
    name: "Transfer Life",
    source: [["UAV26", 12]],
    prerequisite: "Lich Initiate feat",
    prereqeval: function (v) {
        return v.feats.indexOf("lich initiate") !== -1;
    },
    descriptionFull: "You gain the following benefits.\n   Ability Score Increase. Increase your Intelligence, Wisdom, or Charisma score by 1, to a maximum of 20.\n   Soul Transference. When you use Soul Siphon to consume a soul, you can choose a creature within 60 feet of yourself to gain Temporary Hit Points equal to your Proficiency Bonus plus your spellcasting ability modifier (minimum of 1 Temporary Hit Point).",
    description: desc([
        "+1 Int, Wis, or Cha (choose)",
        "Soul Transference: when I use Soul Siphon, I can choose a creature within 60 ft to gain",
        "  Temp HP equal to my Proficiency Bonus + my spellcasting ability modifier (minimum 1)"
    ]),
    scorestxt: "+1 Intelligence, +1 Wisdom, or +1 Charisma"
};

FeatsList["undead grasp"] = {
    name: "Undead Grasp",
    source: [["UAV26", 12]],
    prerequisite: "Lich Initiate feat",
    prereqeval: function (v) {
        return v.feats.indexOf("lich initiate") !== -1;
    },
    descriptionFull: "You gain the following benefits.\n   Ability Score Increase. Increase your Intelligence, Wisdom, or Charisma score by 1, to a maximum of 20.\n   Paralyzing Touch. You know the Chill Touch cantrip. If you already know it, you learn another cantrip of your choice. Intelligence, Wisdom, or Charisma is your spellcasting ability (choose when you select this feat).\n   When you deal damage with Chill Touch, you can expend a level 1+ spell slot to attempt to paralyze the target. The target takes an extra 1d10 Necrotic damage per level of the spell slot expended and must succeed on a Constitution saving throw against your spell save DC or have the Paralyzed condition until the start of your next turn.",
    description: desc([
        "+1 Int, Wis, or Cha (choose)",
        "Paralyzing Touch: know Chill Touch cantrip (Int, Wis, or Cha; choose when taking feat)",
        "  If already known, learn another cantrip instead",
        "  When dealing damage with Chill Touch, I can expend a level 1+ spell slot:",
        "  Extra 1d10 Necrotic per slot level; Con save or Paralyzed until start of my next turn"
    ]),
    scorestxt: "+1 Intelligence, +1 Wisdom, or +1 Charisma",
    spellcastingBonus: [{
        name: "Paralyzing Touch (Chill Touch)",
        spells: ["chill touch"],
        selection: ["chill touch"],
        firstCol: "atwill"
    }]
};

FeatsList["lich ascension"] = {
    name: "Lich Ascension",
    source: [["UAV26", 12]],
    prerequisite: "Level 12 or higher and at least two Path of the Lich feats",
    prereqeval: function (v) {
        if (v.characterLevel < 12) return false;
        var lichFeats = ["lich initiate", "arcane restoration", "transfer life", "undead grasp"];
        var count = 0;
        for (var i = 0; i < lichFeats.length; i++) {
            if (v.feats.indexOf(lichFeats[i]) !== -1) count++;
        }
        return count >= 2;
    },
    descriptionFull: "Your path to lichdom is complete. You gain the following benefits.\n   Ability Score Increase. Increase your Intelligence, Wisdom, or Charisma score by 1, to a maximum of 20.\n   Undead. Your creature type is Undead.\n   Unholy Anatomy. You have Resistance to Necrotic and Poison damage. You don't gain Exhaustion levels from dehydration, malnutrition, or suffocation.\n   Frightening Gaze. You learn the Fear spell if you don't already know it, and you always have it prepared. You can cast the spell without expending a spell slot a number of times equal to your spellcasting ability modifier (minimum of once), and you regain all expended uses when you finish a Long Rest.\n   Rejuvenation. If you die, you re-form in 1d10 days if you have a spirit jar and aren't revived before then. You gain a new body with all your Hit Points in the nearest unoccupied space within 5 feet of your spirit jar.",
    description: desc([
        "+1 Int, Wis, or Cha (choose)",
        "Creature type is now Undead",
        "Unholy Anatomy: Resistance to Necrotic and Poison damage",
        "  No Exhaustion from dehydration, malnutrition, or suffocation",
        "Frightening Gaze: always have Fear prepared; cast without slot = spellcasting mod times (min 1)",
        "  Regain uses after Long Rest",
        "Rejuvenation: if I die and have a spirit jar, re-form in 1d10 days with full HP within 5 ft",
        "  of my spirit jar (only if not revived before then)"
    ]),
    scorestxt: "+1 Intelligence, +1 Wisdom, or +1 Charisma",
    dmgres: ["Necrotic", "Poison"],
    savetxt: { immune: ["exhaustion from dehydration, malnutrition, or suffocation"] },
    usages: "Spellcasting modifier per ",
    usagescalc: "event.value = Math.max(1, What('Int Mod') || What('Wis Mod') || What('Cha Mod'));",
    recovery: "long rest",
    limfeaname: "Frightening Gaze (Fear)",
    spellcastingBonus: [{
        name: "Frightening Gaze (Fear)",
        spells: ["fear"],
        selection: ["fear"],
        firstCol: "markedbox"
    }]
};

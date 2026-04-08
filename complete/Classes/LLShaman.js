/* -WHAT IS THIS?-
This file adds the Shaman class to "MPMB's Character Record Sheet" found at https://flapkan.com/mpmb/charsheets
Import this file using the "Add Extra Materials" bookmark.

Subject: Class
Effect: This script adds the "Shaman" class and its subclasses (Curse Binder, Wild Heart, Far Seer, Witch Doctor, Spirit Warrior)
Code by: Rocky
Date: 2026-04-08 (sheet v13)
*/

var iFileName = "LLShaman.js";
RequiredSheetVersion("13.2.0");

SourceList["LLS"] = {
    name: "LaserLlama - Shaman",
    abbreviation: "LLS",
    abbreviationSpellsheet: "Sh",
    group: "GM Binder",
    date: "2025/01/05",
};

// Add spells to Shaman spell list
// Note: homebrew spells (beckon air, otherworldly grasp, seance, ghastly flight, totemic cowl,
//   dire wail, spectral passage, accursed touch, spiritual sundering) will be silently skipped
//   if not present in SpellsList; add them via a separate homebrew spell script if needed.
[
    // Cantrips
    "beckon air", "blade ward", "chill touch", "control flames", "create bonfire",
    "frostbite", "guidance", "magic stone", "mold earth", "otherworldly grasp",
    "poison spray", "primal savagery", "shape water", "shillelagh", "spare the dying",
    "seance", "thaumaturgy", "thorn whip", "thunderclap", "toll the dead",

    // 1st Level
    "absorb elements", "animal friendship", "bane", "beast bond", "bless",
    "cause fear", "ceremony", "command", "cure wounds", "detect evil and good",
    "detect magic", "dissonant whispers", "entangle", "expeditious retreat",
    "false life", "find familiar", "fog cloud", "ghastly flight", "heroism",
    "inflict wounds", "longstrider", "protection from evil and good",
    "purify food and drink", "sanctuary", "shield of faith", "sleep",
    "unseen servant", "witch bolt",

    // 2nd Level
    "aid", "alter self", "augury", "barkskin", "blur", "continual flame",
    "darkness", "dust devil", "earthbind", "enhance ability", "gentle repose",
    "gust of wind", "heat metal", "locate creature", "misty step", "moonbeam",
    "pass without trace", "protection from poison", "spike growth",
    "totemic cowl", "warding wind",

    // 3rd Level
    "bestow curse", "clairvoyance", "daylight", "dire wail", "dispel magic",
    "elemental bane", "elemental weapon", "feign death", "gaseous form", "haste",
    "life transference", "magic circle", "nondetection", "phantom steed",
    "plant growth", "protection from energy", "remove curse", "slow",
    "speak with dead", "spectral passage", "spirit guardians", "stinking cloud",
    "leomund's tiny hut", "tongues", "wall of sand", "wall of water", "wind wall",

    // 4th Level
    "accursed touch", "arcane eye", "banishment", "control water", "divination",
    "mordenkainen's faithful hound", "fire shield", "freedom of movement",
    "giant insect", "guardian of nature", "polymorph", "sickening radiance",
    "stoneskin", "watery sphere",

    // 5th Level
    "antilife shell", "awaken", "cloudkill", "commune", "commune with nature",
    "dawn", "dispel evil and good", "dream", "far step", "planar binding",
    "reincarnate", "scrying", "skill empowerment", "spiritual sundering",
    "wrath of nature"

].forEach(function (s) {
    if (SpellsList[s] && SpellsList[s].classes && SpellsList[s].classes.indexOf("shaman") === -1)
        SpellsList[s].classes.push("shaman");
});

SpellsList["beckon air"] = {
    name: "Beckon Air",
    classes: ["druid", "shaman", "sorcerer", "wizard"],
    source: ["LLS:Spells", 0],
    level: 0,
    school: "Transmutation",
    time: "1 a",
    range: "60 ft",
    components: "V, S",
    duration: "Instantaneous",
    description: "Manipulate air in 5-ft cube (sensory effect) or create air burst. Target Str save or 1d6 thunder dmg and knocked back 10 ft (Medium or smaller).",
    descriptionFull: "You can manipulate the winds and use them to assault foes. When you cast this spell choose one of the following effects:\n\nManipulate Air. You manipulate the air in a 5-foot cube within range, creating a small sensory affect such as causing leaves to rustle, shutters to slam shut, or clothing to ripple.\n\nAir Burst. You create a ball of compressed air in your hand and hurl it at a target you can see within range, forcing it to make a Strength saving throw. On a failed save, it takes 1d6 thunder damage and a Medium or smaller target is knocked back 10 feet away from you in a straight line.\n\nAt Higher Levels. The damage of this Cantrip and the size target it can knock back increases by 1d6 at 5th (2d6, Large), 11th (3d6, Huge), and 17th level (4d6, Gargantuan).",
    atHigherLevels: "Damage increases by 1d6 at 5th (2d6, Large), 11th (3d6, Huge), and 17th level (4d6, Gargantuan)"
};

SpellsList["otherworldly grasp"] = {
    name: "Otherworldly Grasp",
    classes: ["shaman", "sorcerer", "warlock"],
    source: ["LLS:Spells", 0],
    level: 0,
    school: "Necromancy",
    time: "1 a",
    range: "Self",
    components: "S, M",
    compMaterial: "an empty hand",
    duration: "Instantaneous",
    description: "Melee spell attack; 1d8 necrotic dmg. Gain temp HP equal to half dmg dealt.",
    descriptionFull: "You channel necrotic spiritual power to your hand, changing it into a withered specter of itself. Make a melee spell attack against one creature within your reach. On hit, it takes 1d8 necrotic damage, and you can choose to gain temporary hit points equal to half the necrotic damage dealt.\n\nAt Higher Levels. The damage of this spell increases by 1d8 at 5th (2d8), 11th (3d8), and 17th level (4d8).",
    atHigherLevels: "Damage increases by 1d8 at 5th (2d8), 11th (3d8), and 17th level (4d8)"
};

SpellsList["seance"] = {
    name: "Seance",
    classes: ["shaman"],
    source: ["LLS:Spells", 0],
    level: 0,
    school: "Transmutation",
    time: "1 a",
    range: "30 ft",
    components: "V, S",
    duration: "Instantaneous",
    description: "Channel spirits to create harmless sensory effect, spirit appears, light/snuff candle/torch/fire, point mote of light to spiritual location, or reveal ley lines.",
    descriptionFull: "You channel minor spirits, allowing them to work through you so that they may once again affect change in the material world. You create one of the following effects within range:\n\n• You create an instantaneous, harmless sensory effect, such as a flickering azure flame, an unnaturally chill breeze, rhythmic chanting, or the smell of incense.\n• A minor spirit briefly appears and fades away.\n• You instantaneously light or snuff out a candle, torch, or a small campfire.\n• A mote of iridescent light points to the closest place of spiritual power, recent death, or new birth.\n• Ley lines within range briefly reveal themselves as they flicker with otherworldly light."
};

SpellsList["ghastly flight"] = {
    name: "Ghastly Flight",
    classes: ["shaman", "warlock"],
    source: ["LLS:Spells", 0],
    level: 1,
    school: "Conjuration",
    time: "1 a",
    range: "Self (60 ft line)",
    components: "V, S, M",
    compMaterial: "powdered remains of a creature",
    duration: "Instantaneous",
    description: "60 ft line, 5 ft wide; Con save or 2d8 necrotic dmg; cannot regain HP until start of your next turn. Success is half dmg.",
    descriptionFull: "You release a malevolent spirit that flies out from you in a direction of your choice in a 60-foot long, 5-foot wide line, at which point it fades away. Each creature within the line must make a Constitution saving throw. On a failed save, creatures take 2d8 necrotic damage and cannot regain hit points until the start of your next turn. On a success, creatures take half as much damage and can regain hit points as normal.\n\nAt Higher Levels. When you cast this spell using a spell slot of 2nd-level or higher, the damage increases by 1d8 for each slot level above 1st.",
    atHigherLevels: "Damage increases by 1d8 for each slot level above 1st"
};

SpellsList["totemic cowl"] = {
    name: "Totemic Cowl",
    classes: ["shaman"],
    source: ["LLS:Spells", 0],
    level: 2,
    school: "Abjuration",
    time: "1 a",
    range: "Touch",
    components: "V, S, M",
    compMaterial: "a leaf from the first day of fall",
    duration: "1 hr",
    description: "Ghostly cowl reduces any dmg taken by 2.",
    descriptionFull: "You touch a willing creature. Until the spell ends, it is cloaked in a ghostly cowl, and any damage it takes is reduced by 2.\n\nAt Higher Levels. When you cast this spell using a spell slot of 3rd-level or higher, the damage reduction from the cowl increases by 1 for each slot level above 2nd.",
    atHigherLevels: "Damage reduction increases by 1 for each slot level above 2nd"
};

SpellsList["dire wail"] = {
    name: "Dire Wail",
    classes: ["bard", "shaman", "vessel"],
    source: ["LLS:Spells", 0],
    level: 3,
    school: "Necromancy",
    time: "1 a",
    range: "Self (30 ft radius)",
    components: "V",
    duration: "1 min",
    description: "Creatures within 30 ft Con save or 4d10 thunder dmg and deafened for duration. Can retry save at end of turn.",
    descriptionFull: "You let forth a wail filled with otherworldly power. Creatures of your choice within 30 feet must succeed on a Constitution saving throw or take 4d10 thunder damage and be deafened for the duration. At the end of each turn, targets can make a Constitution saving throw, ending the spell on a success. On a successful save, it takes half damage and is not deafened.\n\nAt Higher Levels. When you cast this spell using a spell slot of 4th-level or higher, the damage increases by 1d10 for each slot level above 3rd.",
    atHigherLevels: "Damage increases by 1d10 for each slot level above 3rd"
};

SpellsList["spectral passage"] = {
    name: "Spectral Passage",
    classes: ["shaman", "sorcerer", "warlock"],
    source: ["LLS:Spells", 0],
    level: 3,
    school: "Transmutation",
    time: "1 a",
    range: "Touch",
    components: "V, S, M",
    compMaterial: "an object a spirit has passed through",
    duration: "Conc, up to 1 min",
    description: "Semi-incorporeal; move through creatures/objects as difficult terrain. If ending inside another, shunted to nearest space, taking 1d10 force dmg per 5 ft.",
    descriptionFull: "You touch a willing creature. Until the spell ends, it becomes semi-incorporeal and can move through other creatures and objects as if they were difficult terrain. If the creature ends its movement inside another object or creature, it is immediately shunted to the nearest unoccupied space, taking 1d10 force damage for every 5 feet it was forced to travel.\n\nAt Higher Levels. When you cast this spell using a spell slot of 4th-level or higher, you can target one additional creature for each slot level above 3rd.",
    atHigherLevels: "You can target one additional creature for each slot level above 3rd"
};

SpellsList["accursed touch"] = {
    name: "Accursed Touch",
    classes: ["druid", "cleric", "shaman", "sorcerer", "warlock", "wizard"],
    source: ["LLS:Spells", 0],
    level: 4,
    school: "Transmutation",
    time: "1 a",
    range: "Touch",
    components: "V, S, M",
    compMaterial: "a basilisk scale",
    duration: "Conc, up to 1 min",
    description: "Con save or Restrained as flesh hardens. Fail 3 saves = Petrified. Target can retry at end of each turn.",
    descriptionFull: "You attempt to transmute a creature into stone. As an action, you touch a creature, forcing it to make a Constitution saving throw. On a failed save, the creature is Restrained as its flesh begins to harden. On a successful save, it is not affected.\n\nA creature Restrained by this spell must make another Constitution saving throw at the end of each of its turns. If it saves against this spell three times, the spell ends. Should it fail three saves, it is turned to stone and Petrified. Successes and failures don't need to be consecutive; keep track of both until the creature fails or passes three saves.\n\nIf the target is physically broken while Petrified, it suffers from similar deformities if it reverts to its original state.\n\nIf you maintain your concentration for the entire duration, the creature is turned to stone until the effect is removed.\n\nAt Higher Levels. When you cast this spell using a spell slot of 5th level or higher, the number of saves that the target must fail before it is turned to stone and Petrified is reduced by 1 (to a minimum of 1) for each level above 4th.",
    atHigherLevels: "Saves needed reduced by 1 (min 1) for each slot level above 4th"
};

SpellsList["spiritual sundering"] = {
    name: "Spiritual Sundering",
    classes: ["cleric", "shaman", "warlock"],
    source: ["LLS:Spells", 0],
    level: 5,
    school: "Enchantment",
    time: "1 a",
    range: "120 ft",
    components: "V, S",
    duration: "Instantaneous",
    description: "20 ft radius sphere; Cha save or 8d6 necrotic dmg + subtract 1d6 from Int/Wis/Cha saves for 1 min. Success is half dmg. Can retry at end of turn.",
    descriptionFull: "Creatures in a 20-foot-radius sphere centered on a point of your choice within range have their soul rent, and must make a Charisma saving throw. On a failure, they take 8d6 necrotic damage, and for the next minute, they have a muddied sense of self and subtract 1d6 from any Intelligence, Wisdom, or Charisma saving throw they make. On a success, they take half damage and suffer no saving throw penalty.\n\nTargets can make a Charisma saving throw at the end of each of their turns, ending the effect on a successful save.",
    atHigherLevels: ""
};

ClassList["shaman"] = {
    regExpSearch: /^(?=.*shaman).*$/i,
    name: "Shaman",
    source: ["LLS", 0],
    primaryAbility: "Wisdom",
    abilitySave: 5, // Wisdom
    prereqs: "Wisdom 13",
    die: 8,
    saves: ["Wis", "Cha"],
    skills: ["\n\n" + toUni("Shaman") + ": Choose 2 from Animal Handling, Arcana, Insight, Medicine, Nature, Performance, or Religion"],
    armor: [
        [true, true, false, true], // light, medium, not heavy, shields
    ],
    weapons: [
        [true, false], // simple weapons, not martial
    ],
    equipment: "Shaman starting equipment:" +
        "\n \u2022 Leather armor, a shield, and a simple weapon;" +
        "\n \u2022 An explorer's pack and a component pouch;" +
        "\n \u2022 Or 35 gp to buy your equipment.",
    subclasses: ["Spirituality", []],
    attacks: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    improvements: [0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 5, 5],
    // Custom spell slot table: a single "Slot Level" that advances, with only 2-4 slots at a time
    spellcastingTable: [
        [0, 0, 0, 0, 0, 0, 0, 0, 0], // lvl 0
        [0, 0, 0, 0, 0, 0, 0, 0, 0], // lvl 1  - no spellcasting yet
        [2, 0, 0, 0, 0, 0, 0, 0, 0], // lvl 2  - 2 slots, 1st level
        [0, 2, 0, 0, 0, 0, 0, 0, 0], // lvl 3  - 2 slots, 2nd level
        [0, 2, 0, 0, 0, 0, 0, 0, 0], // lvl 4  - 2 slots, 2nd level
        [0, 0, 2, 0, 0, 0, 0, 0, 0], // lvl 5  - 2 slots, 3rd level
        [0, 0, 2, 0, 0, 0, 0, 0, 0], // lvl 6  - 2 slots, 3rd level
        [0, 0, 0, 2, 0, 0, 0, 0, 0], // lvl 7  - 2 slots, 4th level
        [0, 0, 0, 2, 0, 0, 0, 0, 0], // lvl 8  - 2 slots, 4th level
        [0, 0, 0, 0, 2, 0, 0, 0, 0], // lvl 9  - 2 slots, 5th level
        [0, 0, 0, 0, 2, 0, 0, 0, 0], // lvl 10 - 2 slots, 5th level
        [0, 0, 0, 0, 3, 0, 0, 0, 0], // lvl 11 - 3 slots, 5th level
        [0, 0, 0, 0, 3, 0, 0, 0, 0], // lvl 12 - 3 slots, 5th level
        [0, 0, 0, 0, 3, 0, 0, 0, 0], // lvl 13 - 3 slots, 5th level
        [0, 0, 0, 0, 3, 0, 0, 0, 0], // lvl 14 - 3 slots, 5th level
        [0, 0, 0, 0, 3, 0, 0, 0, 0], // lvl 15 - 3 slots, 5th level
        [0, 0, 0, 0, 3, 0, 0, 0, 0], // lvl 16 - 3 slots, 5th level
        [0, 0, 0, 0, 4, 0, 0, 0, 0], // lvl 17 - 4 slots, 5th level
        [0, 0, 0, 0, 4, 0, 0, 0, 0], // lvl 18 - 4 slots, 5th level
        [0, 0, 0, 0, 4, 0, 0, 0, 0], // lvl 19 - 4 slots, 5th level
        [0, 0, 0, 0, 4, 0, 0, 0, 0], // lvl 20 - 4 slots, 5th level
    ],
    spellcastingKnown: {
        cantrips: [2, 2, 2, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
        spells: "list",
        prepared: true,
    },
    features: {
        "sacred focus": {
            name: "Sacred Focus",
            source: ["LLS", 0],
            minlevel: 1,
            description: desc('Choose a Sacred Focus using the "Choose Feature" button above'),
            choices: ["Heart", "Mind", "Soul", "Body"],
            "heart": {
                name: "Sacred Focus: Heart",
                source: ["LLS", 0],
                description: desc([
                    "I gain proficiency in Intimidation and Persuasion",
                    "I use my Wisdom modifier instead of Charisma for Intimidation and Persuasion checks",
                    "Apply this manually: replace the Charisma modifier with Wisdom on those skill lines",
                ]),
                skills: ["Intimidation", "Persuasion"],
            },
            "mind": {
                name: "Sacred Focus: Mind",
                source: ["LLS", 0],
                description: desc([
                    "I use my Wisdom modifier instead of Intelligence for all Int ability checks and saving throws",
                    "Apply this manually: replace Intelligence with Wisdom on Int-based checks and saves",
                ]),
            },
            "soul": {
                name: "Sacred Focus: Soul",
                source: ["LLS", 0],
                description: desc([
                    "While unarmored and not wielding a shield, my AC equals my Charisma + Wisdom modifier",
                    "This replaces the normal unarmored AC (10 + Dex); enter this AC manually on the sheet",
                ]),
            },
            "body": {
                name: "Sacred Focus: Body",
                source: ["LLS", 0],
                description: desc([
                    "Spiritual power flows through physical might; my hit point maximum increases",
                    "I gain bonus HP equal to my Wisdom modifier × my Shaman level",
                    "Track this bonus manually: add Wisdom modifier \u00d7 Shaman level to your HP maximum",
                ]),
            },
        },
        "totem spirits": {
            name: "Totem Spirits",
            source: ["LLS", 0],
            minlevel: 1,
            description: desc([
                "I bind primal Spirits to Totem objects (any small physical item) to safely channel their power",
                "Totemic Assault: As an action, command Spirits from one Totem to swarm a creature in range",
                "  Target makes a Charisma saving throw (DC = PB + Wis mod) or takes necrotic damage",
                "  The swarm persists until the target is slain, moves out of range, or I redirect it",
                "Redirect: As a bonus action, redirect the swarm to a new target within range",
                "Totem spell attacks and saving throws use Wisdom modifier + proficiency bonus",
                "A Totem with a bound Spirit serves as my spellcasting focus",
                "If a Spirit has prerequisites, I can learn that Totem at the same time I meet those prerequisites",
            ]),
            additional: levels.map(function (n) {
                var spirits = n < 3 ? 2 : n < 5 ? 3 : n < 7 ? 4 : n < 9 ? 5 : n < 12 ? 6 : n < 15 ? 7 : n < 18 ? 8 : 9;
                return spirits + " Bound Spirits";
            }),
            extraname: "Bound Spirit",
            extrachoices: [
                "Spirit of the Autumn Wind", "Spirit of the Bear", "Spirit of the Bog", "Spirit of the Eagle",
                "Spirit of the Earthquake", "Spirit of Forest", "Spirit of the Harvest", "Spirit of the Hound",
                "Spirit of the Mountain", "Spirit of the Panther", "Spirit of the Squally", "Spirit of the Stream",
                "Spirit of the Rains", "Spirit of Twilight", "Spirit of the Waves", "Spirit of the Winds",
                "Spirit of the Bloom", "Spirit of Destruction", "Spirit of Growth", "Spirit of the Grave",
                "Spirit of Light", "Spirit of Mirth", "Spirit of Secrets", "Spirit of the Swamp",
                "Spirit of the Wilds", "Spirit of Wrath", "Spirit of the Hunt", "Spirit of the Ooze",
                "Spirit of the River", "Spirit of the Cave", "Spirit of the Dawn", "Spirit of the Rockslide",
                "Spirit of Dread", "Spirit of Harmony", "Spirit of Serenity", "Spirit of Vengeance",
                "Spirit of Sunlight", "Spirit of the Vine", "Spirit of Awakening", "Spirit of Bedrock",
                "Spirit of Binding", "Spirit of the Eclipse", "Spirit of the Elements", "Spirit of Peace",
                "Spirit of Majesty", "Spirit of the Sapling", "Spirit of the Skies"
            ],
            extratimes: levels.map(function (n) {
                return n < 3 ? 2 : n < 5 ? 3 : n < 7 ? 4 : n < 9 ? 5 : n < 12 ? 6 : n < 15 ? 7 : n < 18 ? 8 : 9;
            }),
            "spirit of the autumn wind": {
                name: "Spirit of the Autumn Wind",
                description: desc("You bind a minor Spirit of Death that comes at the changing of the seasons. When you deal damage to a creature with a weapon attack or with Totemic Assault, it cannot regain hit points until the beginning of your next turn."),
            },
            "spirit of the bear": {
                name: "Spirit of the Bear",
                description: desc([
                    "You bind a minor Bestial Spirit granting you the ferocity of a bear",
                    "As a bonus action, you can sprout (or retract) ethereal claws from your fingers",
                    "Unarmed strikes with these claws use Wisdom, in place of Strength for the attack and damage rolls",
                    "On hit, they deal 1d6 slashing damage. Should you have two free hands, this d6 becomes a d8"
                ]),
                action: ["bonus action", "Sprout/retract claws"],
            },
            "spirit of the bog": {
                name: "Spirit of the Bog",
                prereqeval: function (v) { return (GetFeatureChoice("classes", "shaman", "sacred focus") === "mind"); },
                description: desc([
                    "You bind a minor Spirit of Deception to guard your mind",
                    "Any attempt to read your thoughts, emotions, alignment, or target you with an Insight check or a divination spell instantly fails",
                    "You are aware that you are targeted by such an ability, but not its source, and you can allow them to work on you"
                ]),
            },
            "spirit of the eagle": {
                name: "Spirit of the Eagle",
                description: desc([
                    "You bind a minor Bestial Spirit which grants you the sight of the eagles",
                    "You gain proficiency in Perception, and you have advantage on Wisdom (Perception) checks that rely on sight"
                ]),
                skills: ["Perception"],
            },
            "spirit of the earthquake": {
                name: "Spirit of the Earthquake",
                description: desc([
                    "You bind a Spirit of Earth that grants you destructive power",
                    "Once per turn when you hit with a melee weapon attack, you deal a bonus 1d6 damage of your weapon's type",
                    "This damage bonus increases at certain levels: at 5th level (1d8), 11th level (1d10), and 17th level (1d12)"
                ]),
            },
            "spirit of forest": {
                name: "Spirit of Forest",
                prereqeval: function (v) { return (GetFeatureChoice("classes", "shaman", "sacred focus") === "heart"); },
                description: desc([
                    "You bind a minor Woodland Spirit that allows you to converse with wild creatures in your own tongue",
                    "You are always under the effect of speak with animals while you are conscious",
                    "Starting at 7th level, you are also always under the effects of speak with plants while you are conscious"
                ]),
                spellcastingBonus: { name: "Spirit of Forest", spells: ["speak with animals"], selection: ["speak with animals"], firstCol: "atwill" },
            },
            "spirit of the harvest": {
                name: "Spirit of the Harvest",
                prereqeval: function (v) { return (GetFeatureChoice("classes", "shaman", "sacred focus") === "soul"); },
                description: desc([
                    "You bind a minor Spirit of wild growth and bounty",
                    "Each time you finish short or long rest, you instantly cast the goodberry spell without expending a spell slot or material components",
                    "The berries from this spell last until the end of your next short or long rest, at which point they dissolve into ash"
                ]),
                usages: 1,
                recovery: "short rest",
                spellcastingBonus: { name: "Spirit of the Harvest", spells: ["goodberry"], selection: ["goodberry"], firstCol: "atwill" },
            },
            "spirit of the hound": {
                name: "Spirit of the Hound",
                description: desc([
                    "You bind a minor Bestial Spirit that grants you the senses of hounds",
                    "You gain proficiency in Survival and have advantage on Wisdom (Survival) checks while in natural environments"
                ]),
                skills: ["Survival"],
            },
            "spirit of the mountain": {
                name: "Spirit of the Mountain",
                prereqeval: function (v) { return (GetFeatureChoice("classes", "shaman", "sacred focus") === "body"); },
                description: desc([
                    "You bind a minor Spirit of Earth that hardens your skin like that of solid rock",
                    "So long as you are not wearing any armor or wielding a shield, your Armor Class is equal to 13 + your Constitution modifier (minimum of 0)"
                ]),
            },
            "spirit of the panther": {
                name: "Spirit of the Panther",
                description: desc([
                    "You bind a minor Bestial Spirit that grants you the steps of a panther",
                    "You gain proficiency in Stealth, and have advantage on Dexterity (Stealth) checks to hide in natural environments"
                ]),
                skills: ["Stealth"],
            },
            "spirit of the squally": {
                name: "Spirit of the Squally",
                description: desc([
                    "You bind a minor Spirit of Air to lend deadly speed to your strikes",
                    "When you miss with a weapon attack, you can use a bonus action to make a single attack against that creature"
                ]),
                action: ["bonus action", "Attack after miss"],
            },
            "spirit of the stream": {
                name: "Spirit of the Stream",
                description: desc([
                    "You bind a minor Spirit of Water that grants you a protective aqueous coating",
                    "You have advantage on any ability check or saving throw you make to resist being grappled, restrained, or stunned",
                    "and you can hold your breath for up to 1 hour"
                ]),
            },
            "spirit of the rains": {
                name: "Spirit of the Rains",
                description: desc([
                    "You bind a minor Spirit of Water that washes toxins away like rain",
                    "You gain resistance to acid and poison damage, and you have advantage on saving throws to resist being Poisoned"
                ]),
                dmgres: ["Acid", "Poison"],
                savetxt: { adv_vs: ["poisoned"] },
            },
            "spirit of twilight": {
                name: "Spirit of Twilight",
                description: desc([
                    "You bind a minor Spirit of Shadow that grants you enhanced sight in the darkness",
                    "You gain Darkvision out to a radius of 120 feet, within which you can see in dim light as if it were bright light, and in darkness as if it were dim light",
                    "At 7th level, you can see in magic dim light and darkness"
                ]),
                vision: [["Darkvision", 120]],
            },
            "spirit of the waves": {
                name: "Spirit of the Waves",
                description: desc([
                    "You bind a minor Spirit of Water that allows you to shift like the sea",
                    "Once between each short or long rest, you can use a reaction to halve one instance of damage you would take",
                    "You can use this reaction twice between each rest at 9th level, and three times between each rest at 18th level"
                ]),
                usages: 1,
                recovery: "short rest",
                action: ["reaction", "Half damage"],
            },
            "spirit of the winds": {
                name: "Spirit of the Winds",
                description: desc([
                    "You bind a minor Spirit of Air that lends speed to your steps with mighty gusts",
                    "Your walking speed increases by 5 feet",
                    "This bonus to your speed increases at 5th level (10 feet), 11th level (15 feet), and finally at 17th level (20 feet)"
                ]),
                speed: { walk: "+5" },
            },
            "spirit of the bloom": {
                name: "Spirit of the Bloom",
                prereqeval: function (v) { return classes.known.shaman && classes.known.shaman >= 5 && (GetFeatureChoice("classes", "shaman", "sacred focus") === "soul"); },
                description: desc([
                    "You bind a Spirit of Verdant Growth that enriches the lands around you",
                    "Once between each short or long rest, you can cast the plant growth spell without expending a spell slot",
                    "Starting at 9th level, the 8-hour version of the plant growth spell takes effect on the land surrounding you each time you take a long rest, unless you wish to withhold this effect"
                ]),
                usages: 1,
                recovery: "short rest",
                spellcastingBonus: { name: "Spirit of the Bloom", spells: ["plant growth"], selection: ["plant growth"], firstCol: "1\u00d7" },
            },
            "spirit of destruction": {
                name: "Spirit of Destruction",
                prereqeval: function (v) { return classes.known.shaman && classes.known.shaman >= 5; },
                description: desc([
                    "You bind a Spirit of the Elements to lend you its destructive power",
                    "Once per turn, when you hit with a melee attack, you can expend a Conduit Magic spell slot to deal bonus cold, fire, lightning, or thunder damage equal to 1d8 per Slot Level"
                ]),
            },
            "spirit of growth": {
                name: "Spirit of Growth",
                prereqeval: function (v) { return classes.known.shaman && classes.known.shaman >= 5 && (GetFeatureChoice("classes", "shaman", "sacred focus") === "body"); },
                description: desc([
                    "You bind a Spirit of Verdant Growth to temporarily increase your size",
                    "Once between each short or long rest, you can cast the enlarge version of the enlarge/reduce spell on yourself without expending a spell slot or requiring concentration"
                ]),
                usages: 1,
                recovery: "short rest",
                spellcastingBonus: { name: "Spirit of Growth", spells: ["enlarge/reduce"], selection: ["enlarge/reduce"], firstCol: "1\u00d7" },
            },
            "spirit of the grave": {
                name: "Spirit of the Grave",
                prereqeval: function (v) { return classes.known.shaman && classes.known.shaman >= 5; },
                description: desc([
                    "You bind a Spirit of Death which you can summon to your service",
                    "Once per long rest, you can expend a Conduit Magic spell slot to cast animate dead. This Totem replaces the normal material components of the spell",
                    "At 15th level, you use this between each short or long rest"
                ]),
                usages: 1,
                recovery: "long rest",
                spellcastingBonus: { name: "Spirit of the Grave", spells: ["animate dead"], selection: ["animate dead"], firstCol: "1\u00d7" },
            },
            "spirit of light": {
                name: "Spirit of Light",
                prereqeval: function (v) { return classes.known.shaman && classes.known.shaman >= 5; },
                description: desc([
                    "You bind a Spirit of Radiance that restores your spirit when you heal others",
                    "Whenever you restore hit points to another creature with a Shaman spell or feature you gain temporary hit points equal to your Wisdom modifier (minimum of 1)"
                ]),
            },
            "spirit of mirth": {
                name: "Spirit of Mirth",
                prereqeval: function (v) { return classes.known.shaman && classes.known.shaman >= 5 && (GetFeatureChoice("classes", "shaman", "sacred focus") === "heart"); },
                description: desc([
                    "You bind a Spirit of Revelry that grants you its vigor",
                    "Once between each short or long rest, you can use a bonus action to gain temporary hit points equal to your Shaman level",
                    "You can use this feature twice between each rest at 12th level, and three times between each rest at 18th level"
                ]),
                usages: 1,
                recovery: "short rest",
                action: ["bonus action", "Gain temp HP"],
            },
            "spirit of secrets": {
                name: "Spirit of Secrets",
                prereqeval: function (v) { return classes.known.shaman && classes.known.shaman >= 5 && (GetFeatureChoice("classes", "shaman", "sacred focus") === "mind"); },
                description: desc([
                    "You bind a Spirit of Knowledge that lets you peer into the minds of others",
                    "Once between each short or long rest, you can cast the detect thoughts spell without expending a spell slot, or the normal verbal or somatic components of the spell"
                ]),
                usages: 1,
                recovery: "short rest",
                spellcastingBonus: { name: "Spirit of Secrets", spells: ["detect thoughts"], selection: ["detect thoughts"], firstCol: "1\u00d7" },
            },
            "spirit of the swamp": {
                name: "Spirit of the Swamp",
                prereqeval: function (v) { return classes.known.shaman && classes.known.shaman >= 5; },
                description: desc([
                    "You bind a Spirit of Disease to poison foes",
                    "When a creature fails its saving throw against Totemic Assault, you can reduce the damage by 1d8 and cause the target to be Poisoned until the beginning of your next turn"
                ]),
            },
            "spirit of the wilds": {
                name: "Spirit of the Wilds",
                prereqeval: function (v) { return classes.known.shaman && classes.known.shaman >= 5; },
                description: desc([
                    "You bind a Spirit of the Wilderness which you can call to your aid",
                    "Once per long rest, you can expend a Conduit Magic spell slot to cast the conjure beasts spell. This Totem replaces the normal material components of this spell",
                    "At 15th level, you use this between each short or long rest"
                ]),
                usages: 1,
                recovery: "long rest",
                spellcastingBonus: { name: "Spirit of the Wilds", spells: ["conjure animals"], selection: ["conjure animals"], firstCol: "1\u00d7" },
            },
            "spirit of wrath": {
                name: "Spirit of Wrath",
                prereqeval: function (v) { return classes.known.shaman && classes.known.shaman >= 5; },
                description: desc([
                    "You bind a Spirit of Anger which you unleash upon your foes",
                    "You can add your Wisdom modifier (a minimum of +1) to the damage roll of Totemic Assault when a creature fails its save"
                ]),
            },
            "spirit of the hunt": {
                name: "Spirit of the Hunt",
                prereqeval: function (v) { return classes.known.shaman && classes.known.shaman >= 7; },
                description: desc([
                    "You bind a Spirit of the Wild Hunt to enhance your ferocity in battle",
                    "Once per turn, when you attack a target that is within 5 feet of one of your allies, you have advantage on your roll"
                ]),
            },
            "spirit of the ooze": {
                name: "Spirit of the Ooze",
                prereqeval: function (v) { return classes.known.shaman && classes.known.shaman >= 7; },
                description: desc([
                    "You bind a Spirit of Water that allows your body to flow like water",
                    "As a bonus action, you can cause your body to become pliable (or return to normal)",
                    "In this state, you can expend 5 feet of movement to automatically escape from non-magical restraints or grapples, and you can move through spaces as narrow as 1 inch without having to squeeze"
                ]),
                action: ["bonus action", "Become pliable"],
            },
            "spirit of the river": {
                name: "Spirit of the River",
                prereqeval: function (v) { return classes.known.shaman && classes.known.shaman >= 7; },
                description: desc([
                    "You bind a Spirit of Water that allows you to live underwater",
                    "You can breathe both air and water, and you gain a swimming speed equal to your walking speed"
                ]),
                speed: { swim: { equal: "walk" } },
            },
            "spirit of the cave": {
                name: "Spirit of the Cave",
                prereqeval: function (v) { return classes.known.shaman && classes.known.shaman >= 9; },
                description: desc([
                    "You bind a Spirit of Earth that lends you its connection to the ground",
                    "While you are touching the ground with a bare feet or hand, you gain tremorsense out to a 30-foot radius, allowing you to sense the presence of any creatures or objects that are touching the ground within the area"
                ]),
                senses: ["Tremorsense 30"],
            },
            "spirit of the dawn": {
                name: "Spirit of the Dawn",
                prereqeval: function (v) { return classes.known.shaman && classes.known.shaman >= 9; },
                description: desc([
                    "You bind a Spirit of Life which can shield mortals from death",
                    "At the end of each long rest, you cast the death ward spell on one creature you touch, without expending a spell slot"
                ]),
                spellcastingBonus: { name: "Spirit of the Dawn", spells: ["death ward"], selection: ["death ward"], firstCol: "atwill" },
            },
            "spirit of the rockslide": {
                name: "Spirit of the Rockslide",
                prereqeval: function (v) { return classes.known.shaman && classes.known.shaman >= 9 && (GetFeatureChoice("classes", "shaman", "sacred focus") === "body"); },
                description: desc([
                    "You bind a Spirit of Elemental Destruction to crush your foes",
                    "Whenever you use Totemic Assault, you can force the target to make a Strength saving throw in place of Charisma",
                    "On a failed save, the target suffers the normal damage of Totemic Assault and is knocked prone"
                ]),
            },
            "spirit of dread": {
                name: "Spirit of Dread",
                prereqeval: function (v) { return classes.known.shaman && classes.known.shaman >= 9 && (GetFeatureChoice("classes", "shaman", "sacred focus") === "mind"); },
                description: desc([
                    "You bind a sinister Spirit of Fear to unleash upon your foes",
                    "When you use Totemic Assault, you can force the creature to make an Intelligence saving throw in place of Charisma",
                    "On a failure, you can reduce the damage by 2d8 to cause the target to be Frightened of you until the start of your next turn"
                ]),
            },
            "spirit of harmony": {
                name: "Spirit of Harmony",
                prereqeval: function (v) { return classes.known.shaman && classes.known.shaman >= 9 && (GetFeatureChoice("classes", "shaman", "sacred focus") === "soul"); },
                description: desc([
                    "You bind a Spirit of Friendship which calms your foes",
                    "When a creature fails its saving throw against Totemic Assault, you can choose to deal no damage and instead inflict the effects of the calm emotions spell until the start of your next turn"
                ]),
                spellcastingBonus: { name: "Spirit of Harmony", spells: ["calm emotions"], selection: ["calm emotions"], firstCol: "atwill" },
            },
            "spirit of serenity": {
                name: "Spirit of Serenity",
                prereqeval: function (v) { return classes.known.shaman && classes.known.shaman >= 9 && (GetFeatureChoice("classes", "shaman", "sacred focus") === "heart"); },
                description: desc([
                    "You bind a Spirit of Serenity to still your inner self",
                    "Whenever you are forced make a saving throw to resist being Charmed or Frightened, or to resist the effects of an enchantment spell, you have advantage on your roll"
                ]),
                savetxt: { adv_vs: ["charmed", "frightened"] },
            },
            "spirit of vengeance": {
                name: "Spirit of Vengeance",
                prereqeval: function (v) { return classes.known.shaman && classes.known.shaman >= 9; },
                description: desc([
                    "You bind a vengeful Fey Spirit which you can call to your aid",
                    "Once per long rest, you can expend one Conduit Magic spell slot to cast the conjure fey spell. This Totem replaces the normal material components of this spell",
                    "At 15th level, you use this between each short or long rest"
                ]),
                usages: 1,
                recovery: "long rest",
                spellcastingBonus: { name: "Spirit of Vengeance", spells: ["conjure fey"], selection: ["conjure fey"], firstCol: "1\u00d7" },
            },
            "spirit of sunlight": {
                name: "Spirit of Sunlight",
                prereqeval: function (v) { return classes.known.shaman && classes.known.shaman >= 9; },
                description: desc([
                    "You bind a Spirit of Radiance to help you find success when you fail",
                    "Once per long rest when you fail a saving throw, you can choose to re-roll, possibly turning failure into success",
                    "At 15th level you can do so twice between each long rest"
                ]),
                usages: 1,
                recovery: "long rest",
                action: ["reaction", "Reroll save"],
            },
            "spirit of the vine": {
                name: "Spirit of the Vine",
                prereqeval: function (v) { return classes.known.shaman && classes.known.shaman >= 9; },
                description: desc([
                    "You bind a Spirit of Growth which lends you its wild power to restrain your foes",
                    "You can cast the ensnaring strike spell at 1st-level, at will, without expending a spell slot"
                ]),
                spellcastingBonus: { name: "Spirit of the Vine", spells: ["ensnaring strike"], selection: ["ensnaring strike"], firstCol: "atwill" },
            },
            "spirit of awakening": {
                name: "Spirit of Awakening",
                prereqeval: function (v) { return classes.known.shaman && classes.known.shaman >= 15 && (GetFeatureChoice("classes", "shaman", "sacred focus") === "mind"); },
                description: desc([
                    "You bind an ancient Spirit of Ascended Consciousness",
                    "You can sense the presence of any creature within 120 feet of you so long as it has an Intelligence of 4 or higher",
                    "You can also communicate telepathically with these creatures"
                ]),
                senses: ["Telepathy 120"],
            },
            "spirit of bedrock": {
                name: "Spirit of Bedrock",
                prereqeval: function (v) { return classes.known.shaman && classes.known.shaman >= 15 && (GetFeatureChoice("classes", "shaman", "sacred focus") === "body"); },
                description: desc([
                    "You bind an ancient Spirit of Earth which infuses your body with its resilience",
                    "Whenever you take damage, you reduce it by your Wisdom modifier (minimum of 1)",
                    "Any force, necrotic, psychic, thunder, or radiant damage ignores this feature"
                ]),
            },
            "spirit of binding": {
                name: "Spirit of Binding",
                prereqeval: function (v) { return classes.known.shaman && classes.known.shaman >= 15; },
                description: desc([
                    "You can quickly bind a natural Spirit to regain some of your lost power",
                    "Once between each long rest, you can use your action to regain one expended Conduit Magic spell slot"
                ]),
                usages: 1,
                recovery: "long rest",
                action: ["action", "Regain spell slot"],
            },
            "spirit of the eclipse": {
                name: "Spirit of the Eclipse",
                prereqeval: function (v) { return classes.known.shaman && classes.known.shaman >= 15; },
                description: desc([
                    "You bind a powerful Spirit of Darkness that wards you from the arcane",
                    "You gain resistance to all damage from spells"
                ]),
            },
            "spirit of the elements": {
                name: "Spirit of the Elements",
                prereqeval: function (v) { return classes.known.shaman && classes.known.shaman >= 15; },
                description: desc([
                    "You bind a powerful Elemental Spirit to you",
                    "Once between each short or long rest, you can expend a Conduit Magic spell slot to cast the conjure elemental spell",
                    "This Totem replaces the normal material components of this spell"
                ]),
                usages: 1,
                recovery: "short rest",
                spellcastingBonus: { name: "Spirit of the Elements", spells: ["conjure elemental"], selection: ["conjure elemental"], firstCol: "1\u00d7" },
            },
            "spirit of peace": {
                name: "Spirit of Peace",
                prereqeval: function (v) { return classes.known.shaman && classes.known.shaman >= 15 && (GetFeatureChoice("classes", "shaman", "sacred focus") === "soul"); },
                description: desc([
                    "You bind an ancient Spirit of Life which deters your enemies",
                    "At the end of each short or long rest, you gain the benefits of the sanctuary spell, which last until the end of your next short or long rest, or until you break the spell as normal"
                ]),
                spellcastingBonus: { name: "Spirit of Peace", spells: ["sanctuary"], selection: ["sanctuary"], firstCol: "atwill" },
            },
            "spirit of majesty": {
                name: "Spirit of Majesty",
                prereqeval: function (v) { return classes.known.shaman && classes.known.shaman >= 15 && (GetFeatureChoice("classes", "shaman", "sacred focus") === "heart"); },
                description: desc([
                    "You bind an ancient Fey Spirit of royalty that you can unleash to humble your enemies",
                    "As an action, you force creatures of your choice within 30 feet that can see or hear you to make a Wisdom saving throw",
                    "On a failure, they instantly fall prone. Creatures immune to the Charmed condition have advantage on this Wisdom saving throw",
                    "You can use this feature once per long rest at no cost, but you can expend a Conduit Magic spell slot to use it again"
                ]),
                usages: 1,
                recovery: "long rest",
                action: ["action", "Force prone"],
            },
            "spirit of the sapling": {
                name: "Spirit of the Sapling",
                prereqeval: function (v) { return classes.known.shaman && classes.known.shaman >= 15; },
                description: desc([
                    "You bind a powerful Spirit of Verdant Growth which blesses your body with wondrous regeneration",
                    "If you begin your turn with less than half your hit points, but at least 1 hit point, you instantly regain hit points equal to your Wisdom modifier"
                ]),
            },
            "spirit of the skies": {
                name: "Spirit of the Skies",
                prereqeval: function (v) { return classes.known.shaman && classes.known.shaman >= 15; },
                description: desc([
                    "You bind a powerful Spirit of Air which propels you through the skies",
                    "You gain a flying speed equal to your walking speed",
                    "Whenever you take falling damage, you reduce the damage by an amount equal to your Shaman level"
                ]),
                speed: { fly: { equal: "walk" } },
            },
            action: [["action", "Totemic Assault"], ["bonus action", "Redirect Swarm"]],
        },
        "conduit magic": {
            name: "Conduit Magic",
            source: ["LLS", 0],
            minlevel: 2,
            description: desc([
                "I can cast Shaman spells using Wisdom as my spellcasting ability (spell save DC and attack)",
                "I prepare a number of Shaman spells equal to my Wisdom modifier + Shaman level after each long rest",
                "I can cast Ritual-tagged Shaman spells without expending a spell slot (takes 10 extra minutes)",
                "A Totem with a bound Spirit serves as my spellcasting focus",
            ]),
        },
        "spirituality": {
            name: "Spirituality",
            source: ["LLS", 0],
            minlevel: 2,
            description: desc('Choose a Spirituality subclass using the "Class" field on the first page'),
        },
        "totemic versatility": {
            name: "Totemic Versatility",
            source: ["LLS", 0],
            minlevel: 5,
            description: desc([
                "During a long rest, I can perform a 1-hour ritual to replace one Bound Totem Spirit",
                "I can replace it with any Spirit of my choice, provided all prerequisites are met",
            ]),
        },
        "elder spirit": {
            name: "Elder Spirit",
            source: ["LLS", 0],
            minlevel: 11,
            description: desc([
                "My deep connection to the Spirit world allows me to bind immensely powerful Elder Spirits",
                "Each Elder Spirit is bound to a Totem and grants access to its powerful signature spells",
                "I gain one Elder Spirit at 11th, 13th, 15th, and 17th level",
            ]),
            additional: levels.map(function (n) {
                return n < 11 ? "" : n < 13 ? "1 Elder Spirit" : n < 15 ? "2 Elder Spirits" : n < 17 ? "3 Elder Spirits" : "4 Elder Spirits";
            }),
            extraTimes: levels.map(function (n) {
                return n < 11 ? 0 : n < 13 ? 1 : n < 15 ? 2 : n < 17 ? 3 : 4;
            }),
            extraname: "Elder Spirit",
            extrachoices: ["Elder Spirit of Death", "Elder Spirit of Life", "Elder Spirit of the Moon", "Elder Spirit of the Sun", "Elder Spirit of the Void"],
            "elder spirit of death": {
                name: "Elder Spirit of Death",
                source: ["LLS", 0],
                description: desc([
                    "My Totem channels the Spirit of Death, granting access to devastating spells",
                    "Each of these spells can be cast once per long rest through the Elder Totem",
                    "Harm: Blast a creature with debilitating necrotic energy (6th-level)",
                    "Finger of Death: Send negative energy coursing through one creature (7th-level)",
                    "Power Word Kill: Speak a word of power that can compel a creature to die (9th-level)",
                ]),
                usages: 3,
                recovery: "long rest",
                spellcastingBonus: [{
                    name: "Elder Spirit of Death (Harm)",
                    spells: ["harm"],
                    selection: ["harm"],
                    firstCol: "1\u00d7"
                }, {
                    name: "Elder Spirit of Death (Finger of Death)",
                    spells: ["finger of death"],
                    selection: ["finger of death"],
                    firstCol: "1\u00d7"
                }, {
                    name: "Elder Spirit of Death (Power Word Kill)",
                    spells: ["power word kill"],
                    selection: ["power word kill"],
                    firstCol: "1\u00d7"
                }],
            },
            "elder spirit of life": {
                name: "Elder Spirit of Life",
                source: ["LLS", 0],
                description: desc([
                    "My Totem channels the Spirit of Life, granting access to potent restorative spells",
                    "Each of these spells can be cast once per long rest through the Elder Totem",
                    "Heal: Channel positive energy to cure wounds and conditions (6th-level)",
                    "Regenerate: Touch a creature to stimulate natural healing ability (7th-level)",
                    "Power Word Heal: A wave of healing energy washes over one creature (9th-level)",
                ]),
                usages: 3,
                recovery: "long rest",
                spellcastingBonus: [{
                    name: "Elder Spirit of Life (Heal)",
                    spells: ["heal"],
                    selection: ["heal"],
                    firstCol: "1\u00d7"
                }, {
                    name: "Elder Spirit of Life (Regenerate)",
                    spells: ["regenerate"],
                    selection: ["regenerate"],
                    firstCol: "1\u00d7"
                }, {
                    name: "Elder Spirit of Life (Power Word Heal)",
                    spells: ["power word heal"],
                    selection: ["power word heal"],
                    firstCol: "1\u00d7"
                }],
            },
            "elder spirit of the moon": {
                name: "Elder Spirit of the Moon",
                source: ["LLS", 0],
                description: desc([
                    "My Totem channels the Spirit of the Moon, granting access to cosmic divination spells",
                    "Each of these spells can be cast once per long rest through the Elder Totem",
                    "Astral Projection: Project astral bodies of up to 9 willing creatures (9th-level)",
                    "Reverse Gravity: Reverse gravity in a 50-foot radius cylinder (7th-level)",
                    "Foresight: Bestow a limited ability to see into the immediate future (9th-level)",
                ]),
                usages: 3,
                recovery: "long rest",
                spellcastingBonus: [{
                    name: "Elder Spirit of the Moon (Astral Projection)",
                    spells: ["astral projection"],
                    selection: ["astral projection"],
                    firstCol: "1\u00d7"
                }, {
                    name: "Elder Spirit of the Moon (Reverse Gravity)",
                    spells: ["reverse gravity"],
                    selection: ["reverse gravity"],
                    firstCol: "1\u00d7"
                }, {
                    name: "Elder Spirit of the Moon (Foresight)",
                    spells: ["foresight"],
                    selection: ["foresight"],
                    firstCol: "1\u00d7"
                }],
            },
            "elder spirit of the sun": {
                name: "Elder Spirit of the Sun",
                source: ["LLS", 0],
                description: desc([
                    "My Totem channels the Spirit of the Sun, granting access to radiant and resurrective spells",
                    "Each of these spells can be cast once per long rest through the Elder Totem",
                    "Sunbeam: A beam of brilliant light flashes from my hand, damaging creatures (6th-level)",
                    "Resurrection: Touch a dead creature and return it to full life (7th-level)",
                    "True Resurrection: Return a dead creature to life in a new body (9th-level)",
                ]),
                usages: 3,
                recovery: "long rest",
                spellcastingBonus: [{
                    name: "Elder Spirit of the Sun (Sunbeam)",
                    spells: ["sunbeam"],
                    selection: ["sunbeam"],
                    firstCol: "1\u00d7"
                }, {
                    name: "Elder Spirit of the Sun (Resurrection)",
                    spells: ["resurrection"],
                    selection: ["resurrection"],
                    firstCol: "1\u00d7"
                }, {
                    name: "Elder Spirit of the Sun (True Resurrection)",
                    spells: ["true resurrection"],
                    selection: ["true resurrection"],
                    firstCol: "1\u00d7"
                }],
            },
            "elder spirit of the void": {
                name: "Elder Spirit of the Void",
                source: ["LLS", 0],
                description: desc([
                    "My Totem channels the Spirit of the Void, granting access to soul-rending spells",
                    "Each of these spells can be cast once per long rest through the Elder Totem",
                    "Soul Cage: Trap a humanoid's soul as it dies, enabling horrific uses (6th-level)",
                    "Prismatic Spray: Eight rays of multicolored light flash from my hand (7th-level)",
                    "Psychic Scream: Unleash psychic power to blast the intellect of up to 10 creatures (9th-level)",
                ]),
                usages: 3,
                recovery: "long rest",
                spellcastingBonus: [{
                    name: "Elder Spirit of the Void (Soul Cage)",
                    spells: ["soul cage"],
                    selection: ["soul cage"],
                    firstCol: "1\u00d7"
                }, {
                    name: "Elder Spirit of the Void (Prismatic Spray)",
                    spells: ["prismatic spray"],
                    selection: ["prismatic spray"],
                    firstCol: "1\u00d7"
                }, {
                    name: "Elder Spirit of the Void (Psychic Scream)",
                    spells: ["psychic scream"],
                    selection: ["psychic scream"],
                    firstCol: "1\u00d7"
                }],
            },
        },
        "spiritual ascension": {
            name: "Spiritual Ascension",
            source: ["LLS", 0],
            minlevel: 20,
            description: desc([
                "I transcend my need for a corporeal form and gain the following benefits:",
                "I no longer age and am immune to all disease and the poisoned condition",
                "When reduced to 0 HP: I can release the Spirit from one Totem as a reaction",
                "  I instead fall to a number of HP equal to my Shaman level rather than dropping to 0",
                "  I lose access to that Totem's abilities until I complete a long rest",
            ]),
            action: [["reaction", "Spiritual Ascension (at 0 HP)"]],
            savetxt: { immune: ["disease", "poisoned"] },
        },
    }
};

// ---- SUBCLASSES ----

// Curse Binder
AddSubClass("shaman", "curse binder", {
    regExpSearch: /(?=.*curse)(?=.*binder).*$/i,
    subname: "Curse Binder",
    source: ["LLS", 0],
    features: {
        "subclassfeature2": {
            name: "Curse Binder Spells",
            source: ["LLS", 0],
            minlevel: 2,
            description: desc("I always have these spells prepared; they don't count against my prepared spells total"),
            // Pairs unlocked at Shaman levels 2, 3, 5, 7, 9
            spellcastingExtra: [
                "bane", "cause fear",
                "blindness/deafness", "ray of enfeeblement",
                "bestow curse", "vampiric touch",
                "blight", "phantasmal killer",
                "contagion", "enervation"
            ],
            spellcastingExtraApplyNonconform: true,
        },
        "subclassfeature2.1": {
            name: "Evil Eye",
            source: ["LLS", 0],
            minlevel: 2,
            description: desc([
                "When a creature I can see within 60 ft hits with an attack roll or succeeds on a check or save,",
                "I can use my reaction to roll 1d4 and subtract it from its roll, possibly causing it to fail",
            ]),
            usages: "Wisdom modifier per ",
            usagescalc: "event.value = Math.max(1, What('Wis Mod'));",
            recovery: "long rest",
            action: [["reaction", "Evil Eye"]],
        },
        "subclassfeature2.2": {
            name: "Totemic Curse",
            source: ["LLS", 0],
            minlevel: 2,
            description: desc([
                "When a creature fails its saving throw against my Totemic Assault, I inflict one condition",
                "The condition lasts until the beginning of my next turn; choose one:",
                "  \u2022 Its speed is halved and it cannot take reactions",
                "  \u2022 It cannot regain HP, and takes an extra 1d4 necrotic damage whenever it takes damage",
                "  \u2022 It is Blinded to anything more than 15 feet away from it",
            ]),
        },
        "subclassfeature6": {
            name: "Sinister Vitality",
            source: ["LLS", 0],
            minlevel: 6,
            description: desc([
                "Whenever I deal necrotic damage to a creature with Totemic Assault,",
                "I gain temporary HP equal to half the necrotic damage dealt",
                "This has no effect on Constructs or Undead creatures",
            ]),
        },
        "subclassfeature10": {
            name: "Occult Ward",
            source: ["LLS", 0],
            minlevel: 10,
            description: desc([
                "I have resistance to poison and necrotic damage",
                "I have advantage on saving throws to resist the Charmed and Frightened conditions",
                "When I succeed on a save to resist being Charmed or Frightened, I can use my reaction",
                "  to immediately target the attacker with my Totemic Assault",
            ]),
            dmgres: ["Poison", "Necrotic"],
            savetxt: { adv_vs: ["charmed", "frightened"] },
            action: [["reaction", "Occult Ward (on Charmed/Frightened save)"]],
        },
        "subclassfeature14": {
            name: "Foul Conjuration",
            source: ["LLS", 0],
            minlevel: 14,
            description: desc([
                "Once per long rest, I can cast Create Undead at 6th level without a spell slot",
                "No material components are required",
                "Undead created this way crumble to dust at the end of my next long rest",
            ]),
            usages: 1,
            recovery: "long rest",
            spellcastingBonus: [{
                name: "Foul Conjuration",
                spells: ["create undead"],
                selection: ["create undead"],
                firstCol: "oncelr",
            }],
        },
    }
});

// Wild Heart
AddSubClass("shaman", "wild heart", {
    regExpSearch: /(?=.*wild)(?=.*heart).*$/i,
    subname: "Wild Heart",
    source: ["LLS", 0],
    features: {
        "subclassfeature2": {
            name: "Wild Heart Spells",
            source: ["LLS", 0],
            minlevel: 2,
            description: desc("I always have these spells prepared; they don't count against my prepared spells total"),
            // Pairs unlocked at Shaman levels 2, 3, 5, 7, 9
            spellcastingExtra: [
                "animal friendship", "jump",
                "conjure animals", "locate creature",
                "fear", "haste",
                "dominate beast", "freedom of movement",
                "hold monster", "tree stride"
            ],
            spellcastingExtraApplyNonconform: true,
        },
        "subclassfeature2.1": {
            name: "Bestial Adaptation",
            source: ["LLS", 0],
            minlevel: 2,
            description: desc([
                "My time in the wilds grants me bestial qualities",
                "My speed increases by 10 feet",
                "I gain a climbing speed and a swimming speed equal to my walking speed",
            ]),
            speed: { allModes: "+10", climb: { equal: "walk" }, swim: { equal: "walk" } },
        },
        "subclassfeature2.2": {
            name: "Totemic Wild Shape",
            source: ["LLS", 0],
            minlevel: 2,
            description: desc([
                "As a bonus action, I transform into the Great Beast (see stat block below) for up to 1 hour",
                "I retain my Int/Wis/Cha scores, HP, alignment, personality, and skill/save proficiencies",
                "On transformation I gain temporary HP equal to 2 \u00d7 my Shaman level",
                "I cannot cast spells, but can maintain concentration; I can still use Totems and Totemic Assault",
                "Natural/unrefined equipment merges with the form; metal gear falls to the ground",
                "The form ends early if I drop to 0 HP or end it as a bonus action",
                "Each transformation I choose a number of Bestial Traits equal to my current Slot Level",
                "1/short or long rest; if no uses remain I can expend a Conduit Magic spell slot to transform",
                "Great Beast \u2014 Medium Beast, AC 13+PB, Speed 40 ft",
                "  STR 18 (+4), DEX 14 (+2), CON 15 (+2); Darkvision 60 ft",
                "  Primal Fury: add PB to Str, Dex, or Con ability checks and saving throws",
                "  Bite: Spell attack mod to hit, 1d6 + Wis mod piercing",
                "  Claw: Spell attack mod to hit, 1d10 + Wis mod slashing",
            ]),
            usages: 1,
            recovery: "short rest",
            action: [["bonus action", "Totemic Wild Shape"], ["bonus action", "End Great Beast Form"]],
        },
        "subclassfeature2.3": {
            name: "Bestial Traits",
            source: ["LLS", 0],
            minlevel: 2,
            description: desc([
                "Each time I transform, I choose Bestial Traits equal to my current Slot Level",
                "Traits last for the duration of that transformation only",
                "Aggressive: Dash as bonus action if I end closer to a hostile creature I can sense",
                "Amphibious: Breathe air and water; gain swimming speed equal to walking speed",
                "Charge: Move 20+ ft straight then hit with Claw \u2192 +1d6 damage and target knocked prone",
                "Hardened Shell: +2 AC; speed reduced by 10 ft",
                "Keen Senses: Advantage on Wis checks using hearing, sight, or smell",
                "Large Frame: Become Large; can act independently if used as a mount",
                "Mighty Leap: Bonus action, expend 5 ft of movement for 20 ft long jump / 10 ft standing jump",
                "Natural Camouflage: Advantage on Dex (Stealth) checks in natural environments",
                "Pack Tactics: Advantage on attacks if a conscious ally is within 5 ft of the target",
                "Powerful Build: Count as one size larger for grappling/carrying; no speed halve while grappling",
                "Savage Grip: Climbing speed = walking speed; climb sheer surfaces/ceilings freely",
                "  Advantage on saves vs. being moved, grappled, restrained, or knocked prone",
                "Strong Jaws: On Bite hit vs. smaller creature, can grapple (DC = spell save DC)",
                "  While grappling with jaws, Bite deals +1d6 damage to the grappled creature",
                "Thermal Vision: Always aware of exact location of warm-blooded creatures within 60 ft",
                "Thick Hide: Reduce damage taken by CON modifier (2); not force, psychic, or radiant damage",
            ]),
            additional: levels.map(function (n) {
                // Slot level: 1 at lvl2, 2 at lvl3-4, 3 at lvl5-6, 4 at lvl7-8, 5 at lvl9+
                var slots = n < 2 ? 0 : n < 3 ? 1 : n < 5 ? 2 : n < 7 ? 3 : n < 9 ? 4 : 5;
                return slots ? slots + " trait" + (slots > 1 ? "s" : "") + " per transformation" : "";
            }),
        },
        "subclassfeature6": {
            name: "Savage Strikes",
            source: ["LLS", 0],
            minlevel: 6,
            description: desc([
                "When I take the Attack action in Great Beast form, I make two Natural Weapon attacks",
                "My Natural Weapon attacks in Great Beast form ignore resistance and immunity to nonmagical attacks",
            ]),
        },
        "subclassfeature10": {
            name: "Mythic Resilience",
            source: ["LLS", 0],
            minlevel: 10,
            description: desc([
                "While in Great Beast form, I am resistant to all bludgeoning, piercing, and slashing damage",
            ]),
        },
        "subclassfeature14": {
            name: "Legendary Guardian",
            source: ["LLS", 0],
            minlevel: 14,
            description: desc([
                "I have mastered the Great Beast transformation",
                "While in Great Beast form, I can use my bonus action to replace one Bestial Trait with another",
            ]),
            action: [["bonus action", "Legendary Guardian (swap Bestial Trait)"]],
        },
    }
});

// Far Seer
AddSubClass("shaman", "far seer", {
    regExpSearch: /(?=.*far)(?=.*seer).*$/i,
    subname: "Far Seer",
    source: ["LLS", 0],
    features: {
        "subclassfeature2": {
            name: "Far Seer Spells",
            source: ["LLS", 0],
            minlevel: 2,
            description: desc("I always have these spells prepared; they don't count against my prepared spells total"),
            // Pairs unlocked at Shaman levels 2, 3, 5, 7, 9
            spellcastingExtra: [
                "comprehend languages", "detect magic",
                "augury", "detect thoughts",
                "clairvoyance", "tongues",
                "arcane eye", "divination",
                "contact other plane", "scrying"
            ],
            spellcastingExtraApplyNonconform: true,
        },
        "subclassfeature2.1": {
            name: "Spirits of Fate",
            source: ["LLS", 0],
            minlevel: 2,
            description: desc([
                "After each short or long rest, I roll two Fate Dice and record the results",
                "When a creature I can see within 60 ft makes an ability check, attack roll, or saving throw,",
                "  I can use my reaction to apply one Fate Die, adding or subtracting it from the result",
                "I can apply a Fate Die after seeing the result, but before knowing if it succeeds or fails",
                "Each Fate Die can only be used once; unused dice are lost at the end of a short or long rest",
                "Fate Die size: d4 (lvl 2), d6 (lvl 6), d8 (lvl 10), d10 (lvl 14)",
            ]),
            additional: levels.map(function (n) {
                var die = n < 6 ? "d4" : n < 10 ? "d6" : n < 14 ? "d8" : "d10";
                return "2 Fate Dice (" + die + ")";
            }),
            usages: 2,
            recovery: "short rest",
            action: [["reaction", "Spirits of Fate (apply Fate Die)"]],
        },
        "subclassfeature2.2": {
            name: "Totemic Ritualist",
            source: ["LLS", 0],
            minlevel: 2,
            description: desc([
                "When I cast the Ritual version of a Shaman spell, I can use a Totem in place of any",
                "  non-consumed material component; the ritual then only takes 1 extra minute (not 10)",
                "When I cast a divination spell using a Totem as my focus, the Totem can replace any",
                "  non-consumed material components that have a gold piece value",
            ]),
        },
        "subclassfeature6": {
            name: "Ascended Awareness",
            source: ["LLS", 0],
            minlevel: 6,
            description: desc([
                "The Spirits of Fate whisper glimpses of the near future to me constantly",
                "While not incapacitated, I cannot be surprised",
                "I add my Wisdom modifier (minimum +1) to initiative rolls",
            ]),
            addMod: [{ type: "skill", field: "Init", mod: "max(Wis:1)", text: "I add my Wisdom modifier (min 1) to initiative rolls." }],
        },
        "subclassfeature10": {
            name: "Certain Fate",
            source: ["LLS", 0],
            minlevel: 10,
            description: desc([
                "When I use my reaction to apply a Fate Die to a roll and it does not change the outcome,",
                "  the Fate Die is not expended",
                "Example: I subtract a Fate Die from a foe's save and it still succeeds — die is not lost",
            ]),
        },
        "subclassfeature14": {
            name: "Tip the Scales",
            source: ["LLS", 0],
            minlevel: 14,
            description: desc([
                "When a creature I can see within 60 ft finishes its turn, I can use my reaction",
                "  to expend one of my Fate Dice and force that creature to repeat its turn",
                "Everything that happened during its turn is undone; the target must repeat the same actions",
                "All dice rolled during the repeated turn are rolled again; all creatures use the new results",
            ]),
            action: [["reaction", "Tip the Scales (end of creature's turn)"]],
        },
    }
});

// Witch Doctor
AddSubClass("shaman", "witch doctor", {
    regExpSearch: /(?=.*witch)(?=.*doctor).*$/i,
    subname: "Witch Doctor",
    source: ["LLS", 0],
    spellChanges: {
        "revivify": {
            range: "30 feet",
            components: "V,S",
            compMaterial: "",
            description: "Dead creature < 1 min ago returns to life; regains 2\u00d7 Shaman lvl HP; can stand immediately",
            changes: "Spiritual Awakening: range 30 ft, no material component, target regains 2\u00d7 Shaman level HP and can immediately stand up.",
        }
    },
    features: {
        "subclassfeature2": {
            name: "Witch Doctor Spells",
            source: ["LLS", 0],
            minlevel: 2,
            description: desc("I always have these spells prepared; they don't count against my prepared spells total"),
            // Pairs unlocked at Shaman levels 2, 3, 5, 7, 9
            // "restoration" is a homebrew 3rd-level spell; lesser restoration used as closest standard fallback
            spellcastingExtra: [
                "bless", "detect poison and disease",
                "lesser restoration", "warding bond",
                "beacon of hope", "revivify",
                "aura of life", "death ward",
                "creation", "reincarnate"
            ],
            spellcastingExtraApplyNonconform: true,
        },
        "subclassfeature2.1": {
            name: "Life Bearer",
            source: ["LLS", 0],
            minlevel: 2,
            description: desc([
                "My Totemic Assault deals radiant damage instead of necrotic damage",
                "When I use Totemic Assault, I can choose to heal the target instead of harm it:",
                "  No saving throw; the target regains 2d4 + my Wisdom modifier (min 1) HP",
                "  This cannot restore HP to Constructs or Undead creatures",
                "I can heal a creature this way a number of times equal to my Shaman level per long rest",
            ]),
            usages: "Shaman level per ",
            usagescalc: "event.value = classes.known.shaman ? classes.known.shaman.level : 1;",
            recovery: "long rest",
        },
        "subclassfeature2.2": {
            name: "Totemic Blessing",
            source: ["LLS", 0],
            minlevel: 2,
            description: desc([
                "During a long rest, I can perform a 1-hour ritual on a willing creature I touch",
                "I bind one of my Bound Totems to it; it gains the Totem's benefits and I lose them",
                "This lasts until the end of my next long rest; I can only bind one Totem per creature",
                "Number of Totems I can bind to others: 1 (lvl 2), 2 (lvl 6), 3 (lvl 10), 4 (lvl 14)",
            ]),
            additional: levels.map(function (n) {
                var totems = n < 6 ? 1 : n < 10 ? 2 : n < 14 ? 3 : 4;
                return "bind up to " + totems + " Totem" + (totems > 1 ? "s" : "") + " to others";
            }),
        },
        "subclassfeature6": {
            name: "Benevolent Bearing",
            source: ["LLS", 0],
            minlevel: 6,
            description: desc([
                "When I use my action to cast a Witch Doctor spell or to restore hit points,",
                "I gain the benefits of the Dodge action until the start of my next turn",
            ]),
        },
        "subclassfeature10": {
            name: "Selfless Ward",
            source: ["LLS", 0],
            minlevel: 10,
            description: desc([
                "For each Totem I have bound to a creature other than myself (via Totemic Blessing),",
                "I gain a +1 bonus to all saving throws (max +4) and resistance to one damage type of my choice",
                "Track these bonuses manually based on how many Totems are currently bound to others",
            ]),
        },
        "subclassfeature14": {
            name: "Spiritual Awakening",
            source: ["LLS", 0],
            minlevel: 14,
            description: desc([
                "When I cast revivify, it gains a range of 30 feet and needs no material component",
                "The target regains HP equal to twice my Shaman level and can immediately stand up",
                "When I would make a death saving throw, I can expend a Conduit Magic spell slot",
                "  to cast revivify on myself, gaining the enhanced benefits above",
            ]),
            spellcastingBonus: [{
                name: "Spiritual Awakening",
                spells: ["revivify"],
                selection: ["revivify"],
                firstCol: "atwill",
            }],
        },
    }
});

// Spirit Warrior
AddSubClass("shaman", "spirit warrior", {
    regExpSearch: /(?=.*spirit)(?=.*warrior).*$/i,
    subname: "Spirit Warrior",
    source: ["LLS", 0],
    features: {
        "subclassfeature2": {
            name: "Ancestral Knowledge",
            source: ["LLS", 0],
            minlevel: 2,
            description: desc("Ancient warrior Spirits grant me their lifetimes of combat experience"),
            armorProfs: [false, true, false, false], // medium armor (shields already from class)
            weaponProfs: [false, true],              // martial weapons
        },
        "subclassfeature2.1": {
            name: "Spirit Warrior Spells",
            source: ["LLS", 0],
            minlevel: 2,
            description: desc("I always have these spells prepared; they don't count against my prepared spells total"),
            // Pairs unlocked at Shaman levels 2, 3, 5, 7, 9
            spellcastingExtra: [
                "heroism", "shield of faith",
                "compelled duel", "totemic cowl",
                "clairvoyance", "spirit shroud",
                "guardian of faith", "staggering smite",
                "contact other plane", "steel wind strike"
            ],
            spellcastingExtraApplyNonconform: true,
        },
        "subclassfeature2.2": {
            name: "Totemic Weapon",
            source: ["LLS", 0],
            minlevel: 2,
            description: desc([
                "During a long rest, I can perform a 1-hour ritual to bind one Spirit to a melee weapon I hold",
                "The weapon is my Totemic Weapon; I can use Wisdom for its attack and damage rolls",
                "Its attacks count as magical for overcoming resistance and immunity",
                "Choose one Spirit to bind (replace the weapon's spirit with another via the same ritual):",
                "Spirit of Challenge: On hit, target has disadv. on attacks vs. creatures other than me",
                "  until the start of my next turn",
                "Spirit of Draining: Once per turn on hit, deal necrotic damage and gain temp HP = Wis mod (min 1)",
                "Spirit of Might: While wielding, add Wis mod (min +1) to Str- and Con-based checks and saves",
            ]),
        },
        "subclassfeature6": {
            name: "Spirit Warrior's Extra Attack",
            source: ["LLS", 0],
            minlevel: 6,
            description: desc([
                "I can attack twice whenever I take the Attack action on my turn",
                "If I use my action to cast a Shaman spell or use Totemic Assault,",
                "  I can make one attack with my Totemic Weapon as a bonus action",
            ]),
            action: [["bonus action", "Totemic Weapon Attack (after spell/Totemic Assault)"]],
        },
        "subclassfeature10": {
            name: "Warrior of the Grave",
            source: ["LLS", 0],
            minlevel: 10,
            description: desc([
                "After I take damage, I can use my reaction to gain temporary HP equal to the damage taken",
            ]),
            usages: "Wisdom modifier per ",
            usagescalc: "event.value = Math.max(1, What('Wis Mod'));",
            recovery: "long rest",
            action: [["reaction", "Warrior of the Grave (after taking damage)"]],
        },
        "subclassfeature14": {
            name: "Spiritual Champion",
            source: ["LLS", 0],
            minlevel: 14,
            description: desc([
                "As a bonus action, I enter a possessed state for 1 minute, gaining:",
                "  \u2022 I can take the Dash action as a bonus action",
                "  \u2022 Resistance to bludgeoning, piercing, and slashing damage from non-silvered attacks",
                "  \u2022 Once per turn when I hit with my Totemic Weapon, I can apply Totemic Assault's effects",
                "1/short or long rest; if no uses remain, I can expend a Conduit Magic spell slot to use it again",
            ]),
            usages: 1,
            recovery: "short rest",
            action: [["bonus action", "Spiritual Champion"]],
        },
    }
});
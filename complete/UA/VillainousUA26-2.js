/*	-WHAT IS THIS?-
    This file adds optional material to "MPMB's Character Record Sheet" found at https://flapkan.com/mpmb/charsheets
    Import this file using the "Add Extra Materials" bookmark.
    -KEEP IN MIND-
    It is recommended to enter the code in a fresh sheet before adding any other information (i.e. before making your character with it).
*/

/*	-INFORMATION-
    Subject:	2026 UA Villainous Options 2
    Effect:		This script adds the 2026 UA Villainous Options 2 subclasses and eldritch invocations described here https://media.dndbeyond.com/compendium-images/ua/villainous-options-2/jjnPv60IoeJEmM8Z/UA2026-VillainousOptions02.pdf
                It should be added after PokeSimmer's 2024 scripts https://github.com/thepokesimmer/2024-PHB.
    Code by:	Rocky
    Date:		2026-05-07 (sheet v13)
*/

var iFileName = "VillainousUA26-2.js";

RequiredSheetVersion("13.2.0");

SourceList["UAV262"] = {
    name: "UA 2026 Villainous Options 2",
    abbreviation: "UAV262",
    group: "Unearthed Arcana",
    date: "2026/05/07",
    url: "https://media.dndbeyond.com/compendium-images/ua/villainous-options-2/jjnPv60IoeJEmM8Z/UA2026-VillainousOptions02.pdf"
};

// SUBCLASS: PATH OF LAMENT (BARBARIAN)
AddSubClass("barbarian", "path of lament", {
    regExpSearch: /^(?=.*barbarian)(?=.*lament).*$/i,
    subname: "Path of Lament",
    source: [["UAV262", 1]],
    features: {
        "subclassfeature3": {
            name: "Banshee's Wail",
            source: [["UAV262", 1]],
            minlevel: 3,
            description: desc([
                "On Rage activation or as a Bonus Action while Raging, I unleash a horrifying wail",
                "Each creature of my choice in a 30-ft Emanation makes a Con save (DC 8 + Con mod + PB)",
                "Fail: Psychic damage (d12s = my Rage Damage bonus) + Deafened for 1 minute",
                "Success: half damage only",
                "Recharge on Long Rest or by expending a Rage use (no action); see notes for origin table"
            ]),
            action: [["bonus action", "Banshee's Wail (while Raging)"]],
            usages: "Constitution modifier per ",
            usagescalc: "event.value = Math.max(1, What('Con Mod'));",
            recovery: "long rest",
            altResource: "Rage use",
        },
        "subclassfeature6": {
            name: "Commune with the Dead",
            source: [["UAV262", 1]],
            minlevel: 6,
            description: desc([
                "I can cast Speak with Dead, but only as a Ritual (casting time 11 minutes)",
                "Wisdom is my spellcasting ability for this spell; no spell slot required"
            ]),
            spellcastingBonus: [{
                name: "Commune with the Dead (Speak with Dead)",
                spells: ["speak with dead"],
                selection: ["speak with dead"],
                firstCol: "markedbox"
            }],
            spellChanges: {
                "speak with dead": {
                    time: "11 min",
                    changes: "I can only cast Speak with Dead as a Ritual (11-minute casting time). Wisdom is my spellcasting ability."
                }
            }
        },
        "subclassfeature6.1": {
            name: "Horrifying Strike",
            source: [["UAV262", 1]],
            minlevel: 6,
            description: desc([
                "Once per turn when I hit a creature with a Str-based attack roll while Raging:",
                "The target makes a Wis save (DC 8 + Con mod + PB)",
                "On a fail: the target has the Frightened condition until the start of my next turn"
            ])
        },
        "subclassfeature10": {
            name: "Otherworldly Anguish",
            source: [["UAV262", 2]],
            minlevel: 10,
            description: desc([
                "• Deathly Wail: If a creature fails against Banshee's Wail and its HP ≤ twice my",
                "  Barbarian level, it drops to 0 HP instead of taking the Wail's damage",
                "• Impenetrable Sorrow: I cannot be possessed",
                "• Resistance: I have Resistance to Cold and Necrotic damage while Raging"
            ]),
            savetxt: { immune: ["possession"] }
        },
        "subclassfeature14": {
            name: "Sorrow Form",
            source: [["UAV262", 2]],
            minlevel: 14,
            description: desc([
                "When I activate my Rage, I may empower myself with undeath for 1 min (or until 0 HP)",
                "While active:",
                " • Immune to Charmed and Frightened (removes them if already present)",
                " • Cannot gain Exhaustion levels",
                " • Life-Draining Strike: When a creature fails against Horrifying Strike, it takes",
                "   2d10 Necrotic damage; I regain HP equal to the Necrotic damage dealt",
                " • My creature type becomes Undead for the duration"
            ]),
            usages: 1,
            recovery: "long rest"
        }
    }
});

// SUBCLASS: WARRIOR OF VENOM (MONK)
AddSubClass("monk", "warrior of venom", {
    regExpSearch: /^(?=.*monk)(?=.*venom).*$/i,
    subname: "Warrior of Venom",
    source: [["UAV262", 3]],
    features: {
        "subclassfeature3": {
            name: "Envenom Weapon",
            source: [["UAV262", 3]],
            minlevel: 3,
            description: desc([
                "At the start of my turn, I spend 1 Focus Point to apply a toxin to one held Monk weapon",
                "Toxin lasts 1 minute or until a creature takes damage from the weapon; choose one:",
                " • Slowing Toxin: Until start of my next turn, target's Speed is halved,",
                "   can't take Reactions, and can only take an Action or Bonus Action (not both)",
                " • Venom: Target takes Poison damage equal to 2 rolls of my Martial Arts die"
            ])
        },
        "subclassfeature3.1": {
            name: "Potent Arsenal",
            source: [["UAV262", 3]],
            minlevel: 3,
            description: desc([
                "I gain a Poisoner's Kit and proficiency with it",
                "Creating a Basic Poison takes only 1 day (8 hours) of work",
                "When I deal Poison damage with a Monk feature or Monk weapon, I can change it to Acid"
            ]),
            toolProfs: ["Poisoner's Kit"]
        },
        "subclassfeature6": {
            name: "Toxic Touch",
            source: [["UAV262", 4]],
            minlevel: 6,
            description: desc([
                "As a Magic action, I spend 1 Focus Point and touch a creature; it makes a Con save",
                "On fail: Poisoned for 1 minute, plus one effect of my choice:",
                " • Intoxicant: Charmed for the duration, or until I or my allies deal damage to it",
                " • Sedative: Unconscious; another creature can use an action to wake it",
                " • Truth Serum: Cannot knowingly communicate a lie for the duration"
            ]),
            action: [["action", "Toxic Touch (1 Focus Point)"]]
        },
        "subclassfeature11": {
            name: "Toxin Refiner",
            source: [["UAV262", 4]],
            minlevel: 11,
            description: desc([
                "I am Immune to Poison damage",
                "When I am subjected to Poison damage, each Envenom Weapon option deals extra Poison",
                "  damage equal to 1 Martial Arts die roll (once per turn)",
                "When I ingest a poison, I regain HP equal to 1 Martial Arts die roll"
            ]),
            dmgimmune: ["poison"]
        },
        "subclassfeature11.1": {
            name: "Toxic Blood",
            source: [["UAV262", 4]],
            minlevel: 11,
            description: desc([
                "When a creature hits me with a melee attack roll, it takes 1d6 Poison damage",
                "If I am Bloodied (at or below half my HP maximum), it instead takes Poison damage",
                "equal to 1 Martial Arts die roll"
            ])
        },
        "subclassfeature17": {
            name: "Hallucinogenic Breath",
            source: [["UAV262", 5]],
            minlevel: 17,
            description: desc([
                "I can replace one attack in my Attack action with this (costs 2 Focus Points)",
                "One creature within 30 ft makes a Con save (my Ki save DC)",
                "Fail: Poison damage equal to 3 Martial Arts die rolls + Frightened for 1 minute",
                "  While Frightened this way: dashes away by the safest route each turn",
                "  The Frightened condition ends early if the creature takes any damage",
                "Success: Half damage only"
            ]),
            action: [["action", "Hallucinogenic Breath (2 Focus Points, replaces 1 attack)"]]
        }
    }
});

// SUBCLASS: PRIMORDIAL PATRON (WARLOCK)
AddSubClass("warlock", "primordial patron", {
    regExpSearch: /^(?=.*warlock)(?=.*primordial).*$/i,
    subname: "Primordial Patron",
    source: [["UAV262", 5]],
    spellcastingExtra: [
        "chromatic orb", "darkvision",
        "elemental weapon",
        "summon elemental",
        "commune with nature"
    ],
    spellCastingExtraApplyNonconform: true,
    features: {
        "subclassfeature3": {
            name: "Elemental Node",
            source: [["UAV262", 6]],
            minlevel: 3,
            description: desc([
                "As a Magic action, I create a 5-ft radius Sphere at a point within 60 ft of me",
                "As a Bonus Action on later turns, I move it up to 30 ft",
                "Creatures (other than me) on appearance, on entry, or at end of turn make a Dex save",
                "Fail: elemental damage (my element type; see Additional); Success: half; once/turn/creature",
                "Damage scales: 1d6 (levels 3-5), 2d6 (levels 6-13), 3d6 (level 14+)",
                "Once per Short/Long Rest; can spend a Pact Magic spell slot (no action) to restore"
            ]),
            additional: levels.map(function(n) {
                return n < 6 ? "1d6 elemental dmg" : n < 14 ? "2d6 elemental dmg" : "3d6 elemental dmg";
            }),
            action: [["action", "Create Elemental Node"], ["bonus action", "Move Elemental Node (30 ft)"]],
            usages: 1,
            recovery: "short rest",
            altResource: "Pact Magic slot"
        },
        "subclassfeature3.1": {
            name: "Element Choice",
            source: [["UAV262", 5]],
            minlevel: 3,
            description: "",
            choices: ["Air (Thunder)", "Earth (Acid)", "Fire (Fire)", "Water (Cold)"],
            choicesNotInMenu: false,
            "air (thunder)": {
                name: "Element: Air (Thunder)",
                source: [["UAV262", 5]],
                description: desc([
                    "My element is Air; my elemental damage type is Thunder",
                    "Air element spells are always prepared (Feather Fall, Shatter, Fly,",
                    "Freedom of Movement, Steel Wind Strike)"
                ]),
                spellcastingBonus: [
                    { name: "Air: Feather Fall", spells: ["feather fall"], selection: ["feather fall"], firstCol: "markedbox" },
                    { name: "Air: Shatter", spells: ["shatter"], selection: ["shatter"], firstCol: "markedbox" },
                    { name: "Air: Fly", spells: ["fly"], selection: ["fly"], firstCol: "markedbox" },
                    { name: "Air: Freedom of Movement", spells: ["freedom of movement"], selection: ["freedom of movement"], firstCol: "markedbox" },
                    { name: "Air: Steel Wind Strike", spells: ["steel wind strike"], selection: ["steel wind strike"], firstCol: "markedbox" }
                ]
            },
            "earth (acid)": {
                name: "Element: Earth (Acid)",
                source: [["UAV262", 5]],
                description: desc([
                    "My element is Earth; my elemental damage type is Acid",
                    "Earth element spells are always prepared (Entangle, Knock, Plant Growth,",
                    "Vitriolic Sphere, Wall of Stone)"
                ]),
                spellcastingBonus: [
                    { name: "Earth: Entangle", spells: ["entangle"], selection: ["entangle"], firstCol: "markedbox" },
                    { name: "Earth: Knock", spells: ["knock"], selection: ["knock"], firstCol: "markedbox" },
                    { name: "Earth: Plant Growth", spells: ["plant growth"], selection: ["plant growth"], firstCol: "markedbox" },
                    { name: "Earth: Vitriolic Sphere", spells: ["vitriolic sphere"], selection: ["vitriolic sphere"], firstCol: "markedbox" },
                    { name: "Earth: Wall of Stone", spells: ["wall of stone"], selection: ["wall of stone"], firstCol: "markedbox" }
                ]
            },
            "fire (fire)": {
                name: "Element: Fire (Fire)",
                source: [["UAV262", 5]],
                description: desc([
                    "My element is Fire; my elemental damage type is Fire",
                    "Fire element spells are always prepared (Burning Hands, Heat Metal, Fireball,",
                    "Wall of Fire, Flame Strike)"
                ]),
                spellcastingBonus: [
                    { name: "Fire: Burning Hands", spells: ["burning hands"], selection: ["burning hands"], firstCol: "markedbox" },
                    { name: "Fire: Heat Metal", spells: ["heat metal"], selection: ["heat metal"], firstCol: "markedbox" },
                    { name: "Fire: Fireball", spells: ["fireball"], selection: ["fireball"], firstCol: "markedbox" },
                    { name: "Fire: Wall of Fire", spells: ["wall of fire"], selection: ["wall of fire"], firstCol: "markedbox" },
                    { name: "Fire: Flame Strike", spells: ["flame strike"], selection: ["flame strike"], firstCol: "markedbox" }
                ]
            },
            "water (cold)": {
                name: "Element: Water (Cold)",
                source: [["UAV262", 5]],
                description: desc([
                    "My element is Water; my elemental damage type is Cold",
                    "Water element spells are always prepared (Alter Self, Ice Knife, Water Walk,",
                    "Control Water, Cone of Cold)"
                ]),
                spellcastingBonus: [
                    { name: "Water: Alter Self", spells: ["alter self"], selection: ["alter self"], firstCol: "markedbox" },
                    { name: "Water: Ice Knife", spells: ["ice knife"], selection: ["ice knife"], firstCol: "markedbox" },
                    { name: "Water: Water Walk", spells: ["water walk"], selection: ["water walk"], firstCol: "markedbox" },
                    { name: "Water: Control Water", spells: ["control water"], selection: ["control water"], firstCol: "markedbox" },
                    { name: "Water: Cone of Cold", spells: ["cone of cold"], selection: ["cone of cold"], firstCol: "markedbox" }
                ]
            }
        },
        "subclassfeature6": {
            name: "Elemental Haven",
            source: [["UAV262", 7]],
            minlevel: 6,
            description: desc([
                "• Elemental Protection: While within my Elemental Node, I gain a bonus to AC",
                "  equal to my Charisma modifier (minimum 1)",
                "• Elemental Teleport: As a Bonus Action, I teleport into my node or to the nearest",
                "  unoccupied space within 5 ft of it",
                "  Uses: Charisma modifier (minimum 1); recharge on Long Rest"
            ]),
            action: [["bonus action", "Elemental Teleport (into/near Node)"]],
            usages: "Charisma modifier per ",
            usagescalc: "event.value = Math.max(1, What('Cha Mod'));",
            recovery: "long rest"
        },
        "subclassfeature10": {
            name: "Primeval Protection",
            source: [["UAV262", 7]],
            minlevel: 10,
            description: desc([
                "• Elemental Fortitude: I have Resistance to my element's damage type",
                "  While inside my Elemental Node, I have Immunity to my element's damage type instead",
                "• Node Improvement: My Elemental Node is now a 10-ft radius Sphere"
            ])
        },
        "subclassfeature14": {
            name: "Elemental Harbinger",
            source: [["UAV262", 8]],
            minlevel: 14,
            description: desc([
                "• Elemental Vortex: When I expend a Pact Magic slot inside my node, one creature",
                "  within 30 ft of the node makes a Str save or is pulled up to 15 ft toward the node center",
                "• Node Improvement: My node now lasts up to 1 hour",
                "• Primordial Herald: While inside my node, I can cast Planar Ally without a spell slot",
                "  by speaking my patron's name; recharge after 2d4 Long Rests (tracked as 1/Long Rest)"
            ]),
            usages: 1,
            recovery: "long rest",
            limfeaname: "Primordial Herald (Planar Ally)",
            spellcastingBonus: [{
                name: "Primordial Herald (Planar Ally)",
                spells: ["planar ally"],
                selection: ["planar ally"],
                firstCol: "oncelr"
            }]
        }
    }
});

// ELDRITCH INVOCATIONS: ELEMENTAL OVERFLOW & ELEMENTAL TRANSMUTATION
(function() {
    var invFeature = null;
    if (ClassList.warlock && ClassList.warlock.features) {
        for (var fname in ClassList.warlock.features) {
            if (/invocation/i.test(fname)) {
                invFeature = ClassList.warlock.features[fname];
                break;
            }
        }
    }
    if (!invFeature || !invFeature.extrachoices) return;

    invFeature.extrachoices.push("Elemental Overflow [UAV262]", "Elemental Transmutation [UAV262]");

    invFeature["elemental overflow [uav262]"] = {
        name: "Elemental Overflow",
        source: [["UAV262", 9]],
        submenu: "[Elemental]",
        prerequisite: "Level 5 Warlock",
        prereqeval: function(v) {
            return classes.known.warlock && classes.known.warlock.level >= 5;
        },
        description: desc([
            "Choose a damage type: Acid, Cold, Fire, Lightning, or Thunder",
            "When I cast a spell dealing that damage type, I am wreathed in elemental energy",
            "Until end of my next turn, any creature within 5 ft that hits me with a melee attack",
            "takes 1d4 damage of the chosen type",
            "This invocation is Repeatable; each time it is taken, choose a different damage type"
        ])
    };

    invFeature["elemental transmutation [uav262]"] = {
        name: "Elemental Transmutation",
        source: [["UAV262", 9]],
        submenu: "[Elemental]",
        prerequisite: "Level 2 Warlock",
        prereqeval: function(v) {
            return classes.known.warlock && classes.known.warlock.level >= 2;
        },
        description: desc([
            "Choose a damage type: Acid, Cold, Fire, Lightning, or Thunder",
            "Once per turn, when I deal damage of any of those five types,",
            "I may change it to my chosen type instead",
            "This invocation is Repeatable; each time it is taken, choose a different damage type"
        ])
    };
})();

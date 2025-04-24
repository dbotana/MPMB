/* -WHAT IS THIS?-
This file adds optional material to "MPMB's Character Record Sheet" found at https://flapkan.com/mpmb/charsheets
Import this file using the "Add Extra Materials" bookmark.
-KEEP IN MIND-
It is recommended to enter the code in a fresh sheet before adding any other information (i.e. before making your character with it).
*/

/* -INFORMATION-
Subject: Subclass
Effect: This script adds a subclass for the Sorcerer, called "Giant Soul Sorcerer" from homebrew material 
Code by:  Rocky
Date: 2025-04-24 (sheet v13)
*/

var iFileName = "Sorcerer - Giant Soul Homebrew.js";

RequiredSheetVersion(13);

SourceList["HB:GS"] = {
    name: "Sorcerer - Giant Soul",
    abbreviation: "HB:GS",
    abbreviationSpellsheet: "GS",
    group: "Rocky's Homebrew",
    url: "https://docs.google.com/document/d/19BL1LwhN0YZ5pxuswAT9EhfCRTmiUsob_pZgE_4q_XQ/edit?tab=t.0",
    date: "2024/04/24"
};

AddSubClass("sorcerer", "giant soul", {
    regExpSearch: /^(?=.*giant)(?=.*soul)(?=.*(sorcerer|sorcery)).*$/i,
    subname: "Giant Soul",
    source: [["HB:GS", 0]],
    fullname: "Giant Soul Sorcerer",
    features: {
        "subclassfeature3": {
            name: "Jötunn Bloodline",
            source: [["HB:GS", 0]],
            minlevel: 3,
            description: desc([
                "I can read, write, and speak Giant; I gain the Thaumaturgy cantrip",
                "My hit point maximum increases by 1 per sorcerer level",
                "I gain an unarmored defense equal to 10 + Charisma modifier + Dexterity modifier",
                "I choose a Jötunn Bloodline which affects my Ordning Mark spells and other features"
            ]),
            languageProfs: ["Giant"],
            calcChanges: {
                hp: function (totalHD, HDobj, prefix) {
                    if (classes.known.sorcerer) {
                        return [classes.known.sorcerer.level, "Jötunn Bloodline (Sorcerer)"];
                    }
                },
                hpForceRecalc: true
            },
            spellcastingBonus: {
                name: "Thaumaturgy",
                spells: ["thaumaturgy"],
                selection: ["thaumaturgy"]
            },
            armorOptions: [{
                regExpSearch: /^(?=.*jötunn)(?=.*bloodline).*$/i,
                name: "Jötunn Bloodline",
                source: [["HB:GS", 0]],
                ac: "10+Cha+Dex",
                dex: -10,
                selectNow: true
            }],
            choices: ["Hill Giant", "Stone Giant", "Frost Giant", "Fire Giant", "Cloud Giant", "Storm Giant"],
            "Hill Giant": {
                name: "Hill Giant Bloodline",
                description: desc([
                    "I gain additional spells from the Hill Giant Ordning Mark Spell List",
                    "During Fury of the Titans, I regain 1d6 temporary HP at the end of my turn",
                    "I gain maximum HP from healing potions, spells, and magical effects during Fury"
                ]),
                spellcastingExtra: ["sleep", "enhance ability", "slow", "stoneskin", "hold monster"],
            },
            "Stone Giant": {
                name: "Stone Giant Bloodline",
                description: desc([
                    "I gain additional spells from the Stone Giant Ordning Mark Spell List",
                    "During Fury of the Titans, I gain a climbing speed equal to my walking speed"
                ]),
                spellcastingExtra: ["entangle", "spike growth", "meld into stone", "stone shape", "wall of stone"],
            },
            "Frost Giant": {
                name: "Frost Giant Bloodline",
                description: desc([
                    "I gain additional spells from the Frost Giant Ordning Mark Spell List",
                    "During Fury of the Titans, I gain resistance to cold damage",
                    "I am unaffected by difficult terrain during Fury of the Titans"
                ]),
                spellcastingExtra: ["fog cloud", "snilloc's snowball swarm", "sleet storm", "ice storm", "cone of cold"],
            },
            "Fire Giant": {
                name: "Fire Giant Bloodline",
                description: desc([
                    "I gain additional spells from the Fire Giant Ordning Mark Spell List",
                    "During Fury of the Titans, I gain resistance to fire damage",
                    "I emit bright light in a 30 ft radius around me during Fury of the Titans"
                ]),
                spellcastingExtra: ["burning hands", "scorching ray", "fireball", "wall of fire", "immolation"],
            },
            "Cloud Giant": {
                name: "Cloud Giant Bloodline",
                description: desc([
                    "I gain additional spells from the Cloud Giant Ordning Mark Spell List",
                    "During Fury of the Titans, I gain resistance to thunder damage"
                ]),
                spellcastingExtra: ["fog cloud", "misty step", "thunder step", "storm sphere", "control winds"],
            },
            "Storm Giant": {
                name: "Storm Giant Bloodline",
                description: desc([
                    "I gain additional spells from the Storm Giant Ordning Mark Spell List",
                    "During Fury of the Titans, I gain resistance to lightning damage"
                ]),
                spellcastingExtra: ["thunderwave", "gust of wind", "call lightning", "storm sphere", "control weather"],
            },
            "Desert Giant": {
                name: "Desert Giant Bloodline",
                description: desc([
                    "I gain additional spells from the Desert Giant Ordning Mark Spell List",
                    "During Fury of the Titans, I gain immunity to the blind condition",
                    "I gain resistance to radiant damage during Fury of the Titans"
                ]),
                spellcastingExtra: ["silent image", "blur", "major image", "hallucinatory terrain", "mirage arcane"],
            },
            "Jungle Giant": {
                name: "Jungle Giant Bloodline",
                description: desc([
                    "I gain additional spells from the Jungle Giant Ordning Mark Spell List",
                    "During Fury of the Titans, I gain resistance to poison damage",
                    "I gain advantage on saves against the poison condition during Fury of the Titans"
                ]),
                spellcastingExtra: ["ray of sickness", "protection from poison", "stinking cloud", "vitriolic sphere", "contagion"],
            },
            "Reef Giant": {
                name: "Reef Giant Bloodline",
                description: desc([
                    "I gain additional spells from the Reef Giant Ordning Mark Spell List",
                    "During Fury of the Titans, I gain a swim speed equal to my walking speed",
                    "I can breathe underwater during Fury of the Titans"
                ]),
                spellcastingExtra: ["create or destroy water", "blur", "water breathing", "control water", "maelstrom"],
            },
            "Sun Giant": {
                name: "Sun Giant Bloodline",
                description: desc([
                    "I gain additional spells from the Sun Giant Ordning Mark Spell List",
                    "During Fury of the Titans, I gain immunity to the blind condition",
                    "I gain resistance to radiant damage during Fury of the Titans"
                ]),
                spellcastingExtra: ["faerie fire", "scorching ray", "daylight", "wall of fire", "dawn"],
            },
            "Moon Giant": {
                name: "Moon Giant Bloodline",
                description: desc([
                    "I gain additional spells from the Moon Giant Ordning Mark Spell List",
                    "During Fury of the Titans, I gain resistance to cold damage",
                    "I am unaffected by fall damage during Fury of the Titans"
                ]),
                spellcastingExtra: ["sleep", "calm emotions", "hypnotic pattern", "confusion", "modify memory"],
            },
            "Eclipse Giant": {
                name: "Eclipse Giant Bloodline",
                description: desc([
                    "I gain additional spells from the Eclipse Giant Ordning Mark Spell List",
                    "During Fury of the Titans, I gain resistance to cold and radiant damage"
                ]),
                spellcastingExtra: ["chromatic orb", "moonbeam", "blink", "greater invisibility", "circle of power"],
            }

        },
        "subclassfeature6": {
            name: "Extra Attack",
            source: [["HB:GS", 0]],
            minlevel: 6,
            description: desc([
                "My unarmed strikes deal 1d8 bludgeoning damage and can use Charisma for attack/damage",
                "I can attack twice during my attack action",
                "If both attacks are unarmed strikes, I can make a bonus action unarmed strike"
            ]),
            weaponOptions: [{
                regExpSearch: /^(?=.*giant)(?=.*soul)(?=.*unarmed)(?=.*strike).*$/i,
                name: "Giant Soul Unarmed Strike",
                source: [["HB:GS", 0]],
                ability: 6,
                type: "Natural",
                damage: [1, 8, "bludgeoning"],
                range: "Melee",
                description: "Extra attack; bonus action attack if both main attacks are unarmed",
                abilitytodamage: true
            }],
            weaponsAdd: ["Giant Soul Unarmed Strike"],
            action: [["bonus action", "Unarmed Strike (after two unarmed attacks)"]]
        },

        "subclassfeature6.1": {
            name: "Fury of the Titans",
            source: [["HB:GS", 0]],
            minlevel: 6,
            description: desc([
                "As a bonus action, I increase my size by 1 category for 1 minute",
                "I gain advantage on Strength and Constitution saving throws",
                "I gain additional benefits based on my Jötunn Bloodline choice",
                "Effect ends if I choose to end it, drop to 0 HP, or am incapacitated for >1 round"
            ]),
            action: [["bonus action", "Fury of the Titans"], ["action", "End Fury of the Titans (optional)"]],
            usages: "Proficiency bonus per ",
            usagescalc: "event.value = How('Proficiency Bonus');",
            recovery: "long rest"
        },

        "subclassfeature14": {
            name: "Jötunn Resilience",
            source: [["HB:GS", 0]],
            minlevel: 14,
            description: desc([
                "My unarmed strikes now deal 1d10 + Charisma modifier bludgeoning damage",
                "I am immune to disease and cannot be magically aged",
                "I age 10 times slower than normal",
                "My size increases by 2 size categories during Fury of the Titans",
                "I gain 10 ft of movement and 5 ft of reach per size category above medium"
            ]),
            savetxt: { immune: ["disease"] },
            weaponOptions: [{
                regExpSearch: /^(?=.*giant)(?=.*soul)(?=.*unarmed)(?=.*strike).*$/i,
                name: "Giant Soul Unarmed Strike (Improved)",
                source: [["HB:GS", 0]],
                ability: 6,
                type: "Natural",
                damage: [1, 10, "bludgeoning"],
                range: "Melee",
                description: "Extra attack; bonus action attack if both main attacks are unarmed",
                abilitytodamage: true
            }],
            weaponsAdd: ["Giant Soul Unarmed Strike (Improved)"],
            weaponsRemove: ["Giant Soul Unarmed Strike"]
        },

        "subclassfeature14.1": {
            name: "Colossal Spell",
            source: [["HB:GS", 0]],
            minlevel: 14,
            description: desc([
                "I gain a unique Metamagic option: Colossal Spell",
                "When casting an area of effect spell, I can spend 2 sorcery points to increase its size by 5 ft",
                "This increases by another 5 ft per size category I am above medium"
            ])
        },

        "subclassfeature18": {
            name: "Blessing of the Titans",
            source: [["HB:GS", 0]],
            minlevel: 18,
            description: desc([
                "My size becomes Large; I can change back to normal size as an action",
                "I gain the Giant creature type",
                "My unarmed strikes deal 1d12 + Charisma modifier bludgeoning or force damage",
                "During Fury of the Titans, I gain advantage on saves vs. spells and magical effects",
                "Fury of the Titans now lasts for 1 hour"
            ]),
            action: [["action", "Return to Normal Size"]],
            weaponOptions: [{
                regExpSearch: /^(?=.*giant)(?=.*soul)(?=.*unarmed)(?=.*strike).*$/i,
                name: "Giant Soul Unarmed Strike (Titanic)",
                source: [["HB:GS", 0]],
                ability: 6,
                type: "Natural",
                damage: [1, 12, "bludgeoning"],
                range: "Melee",
                description: "Extra attack; bonus action attack if both main attacks are unarmed; or force damage",
                abilitytodamage: true
            }],
            weaponsAdd: ["Giant Soul Unarmed Strike (Titanic)"],
            weaponsRemove: ["Giant Soul Unarmed Strike (Improved)"]
        }
    }
});

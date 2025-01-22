/*	-WHAT IS THIS?-
    This file adds optional material to "MPMB's Character Record Sheet" found at https://flapkan.com/mpmb/charsheets
    Import this file using the "Add Extra Materials" bookmark.
    -KEEP IN MIND-
    It is recommended to enter the code in a fresh sheet before adding any other information (i.e. before making your character with it).
*/

/*	-INFORMATION-
    Subject:	Class
    Effect:		This script adds my homebrew Unicorn Warrior class and its subclasses
    Code by:	Rocky
    Date:		2025-1-18 (sheet v13)
*/

var iFileName = "UnicornWarrior.js";

RequiredSheetVersion("13.2.0");

SourceList["UW"] = {
    name: "Unicorn Warrior Homebrew",
    abbreviation: "UW",
    group: "Rocky's Homebrew",
    date: "2025/01/18"
};

// Tell the sheet the spells on the Unicorn Warrior's spell list
[
    // Cantrips (0 Level)
    "booming blade", "dancing lights", "guidance", "light", "mage hand", "minor illusion", "prestidigitation", "shocking grasp", "thunderclap",
    // 1st Level
    "burning hands", "chromatic orb", "expeditious retreat", "feather fall", "jump", "longstrider", "magic missile", "thunderwave", "witch bolt",
    // 2nd Level
    "blur", "darkness", "dragon's breath", "gust of wind", "mirror image", "misty step", "scorching ray", "shatter",
    // 3rd Level
    "call lightning", "counterspell", "daylight", "fireball", "fly", "haste", "lightning bolt", "thunder step",
    // 4th Level
    "dimension door", "freedom of movement", "ice storm", "storm sphere",
    // 5th Level
    "cone of cold", "destructive wave", "far step", "steel wind strike"
].forEach(function (s) {
    if (SpellsList[s] && SpellsList[s].classes && SpellsList[s].classes.indexOf("unicornwarrior") === -1) SpellsList[s].classes.push("unicornwarrior");
});

// Define Unicorn Warrior Class
ClassList["unicornwarrior"] = {
    regExpSearch: /^(?=.*unicorn)(?=.*warrior).*$/i,
    name: "Unicorn Warrior",
    source: ["UW", 0],
    primaryAbility: 5,
    prereqs: "Dexterity 13 and Wisdom 13",
    die: 10,
    saves: ["Dex", "Wis"],
    improvements: [0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 5, 5],
    armorProfs: [false, false, false],
    weaponProfs: [false, false, ["natural weapons"]],
    toolProfs: [],
    spellcastingFactor: 2,
    spellcastingKnown: {
        spells: "list",
        prepared: true
    },
    attacks: [1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
    subclasses: ["Colors of the Rainbow ", []],
    features: {
        "unarmored defense": {
            name: "Unarmored Defense",
            source: ["UW", 0],
            minlevel: 1,
            description: desc("Without armor, my AC is 10 + Dexterity modifier + Wisdom modifier + shield"),
            armorOptions: [{
                regExpSearch: /justToAddToDropDownAndEffectWildShape/,
                name: "Unarmored Defense (Wis)",
                source: [["SRD", 8], ["P", 48]],
                ac: "10+Wis",
                affectsWildShape: true,
                selectNow: true
            }]
        },
        "horn and hoof": {
            name: "Horn and Hoof",
            source: ["UW", 0],
            minlevel: 1,
            description: "\n   Your horn and hooves are natural weapons. Use Dexterity or Strength for attack rolls." +
                "\n   Horn attacks deal piercing damage (1d6), and hoof attacks deal bludgeoning damage (1d6).",
            weaponOptions: [{
                regExpSearch: /^(?=.*(horn)).*$/i,
                name: "Horn",
                source: [["UW", 24]],
                ability: 2,
                type: "Natural",
                damage: [1, 6, "piercing"],
                range: "Melee",
                abilitytodamage: true,
                bestialNaturalWeapon: true,
                selectNow: true,
                unicornWeapon: true
            },
            {
                regExpSearch: /^(?=.*(hoof)).*$/i,
                name: "Hoof",
                source: [["UW", 24]],
                ability: 1,
                type: "Natural",
                damage: [1, 6, "bludgeoning"],
                range: "Melee",
                abilitytodamage: true,
                bestialNaturalWeapon: true,
                selectNow: true,
                unicornWeapon: true
            }],///not currently working
            calcChanges: {
                atkCalc: [
                    function (fields, v, output) {
                        if (v.theWea.unicornWeapon) {
                            fields.Damage_Die = '1d' + (classes.known.unicornwarrior.level < 5 ? 6 : classes.known.unicornwarrior.level < 11 ? 10 : 12);
                        };
                    }
                ]
            }
        },
        "rainbow smite": {
            name: "Rainbow Smite",
            source: ["UW", 0],
            minlevel: 2,
            description: "\n   When you hit with a horn attack, you can expend a spell slot to deal 1d8/SL radiant damage"
        },
        "charge": {
            name: "Charge",
            source: ["UW", 0],
            minlevel: 6,
            description: desc([
                "You can use your bonus action to Dash. Once per turn, if you move at least 20 feet straight toward a creature and hit it with a horn attack on the same turn, the target takes extra piercing damage.",
            ]),
            additional: levels.map(function (n) {
                return Math.ceil(n / 3) + "d6";
            }),
            calcChanges: {
                atkAdd: [
                    function (fields, v) {
                        if (classes.known.unicornwarrior && classes.known.unicornwarrior.level && (/charge/i).test(v.WeaponTextName)) {
                            var chargeDice = Math.ceil(classes.known.unicornwarrior.level / 3); // Calculate Charge dice scaling
                            fields.Description += (fields.Description ? "; " : "") + "Charge +" + chargeDice + "d6 piercing damage";
                        }
                    },
                    "My Charge feature adds extra piercing damage to my horn attacks when I move at least 20 feet straight toward a creature and hit it on the same turn. The damage scales with my Unicorn Warrior level."
                ]
            }
        },
        "radiant smite": {
            name: "Radiant Smite",
            source: ["UW", 0],
            minlevel: 10,
            description:
                "\n   Your horn and hoof attacks deal an additional +1d8 radiant damage." +
                "\n   If you hit with both a horn and hoof attack in the same turn, you can knock the target prone if they fail a Strength save.",
            calcChanges: {
                atkAdd: [
                    function (fields, v) {
                        if (v.WeaponTextName.match(/horn|hoof/i)) {
                            fields.Description =
                                (fields.Description ? "; " : "") + "+1d8 radiant damage";
                        }
                    },
                    "My horn and hoof attacks deal an additional +1d8 radiant damage."
                ]
            }
        },
        "misty charge": {
            name: "Misty Charge",
            source: ["UW", 0],
            minlevel: 14,
            description:
                "\n   When you use your Charge feature and successfully hit with a horn attack after moving at least 20 feet toward a target, you can teleport up to 20 feet after the attack as part of the same action."
        },
        "aura of grace": {
            name: "Aura of Grace",
            source: ["UW", 0],
            minlevel: 18,
            description:
                "\n   You and friendly creatures within a radius of up to 30 feet gain advantage on Dexterity saving throws" +
                "\n   against effects that would restrain or knock them prone." +
                "\n   Additionally, whenever an ally within this aura is healed by one of your spells or abilities," +
                "\n   they also gain temporary hit points equal to half the amount healed.",
            additional: ["30-ft aura"]
        }
    }
};

AddSubClass("unicornwarrior", "path of the red unicorn", {
    regExpSearch: /^(?=.*red)(?=.*unicorn).*$/i,
    subname: "Path of the Red Unicorn (The Flamebringer)",
    source: ["UW", 0],
    spellcastingExtra: [
        "burning hands", "hellish rebuke",
        "flaming sphere", "scorching ray",
        "fireball", "melf's minute meteors",
        "wall of fire", "fire shield",
        "flame strike", "immolation"
    ],
    features: {
        "subclassfeature3": {
            name: "Flaming Horn",
            source: ["UW", 0],
            minlevel: 3,
            description: "\n   When you hit a creature with your horn attack, you can choose to deal an additional 1d6 fire damage." +
                "This damage increases to 2d6 at level 11.",
            additional: levels.map(function (n) {
                return n < 11 ? "+1d6 fire damage" : "+2d6 fire damage";
            }),
            calcChanges: {
                atkAdd: [
                    function (fields, v) {
                        var colorHorn = levels.map(function (n) { return n < 11 ? "1" : "2"; }); // Calculate dice scaling
                        if (v.WeaponTextName.match(/horn/i)) {
                            fields.Description += (fields.Description ? "; " : "") + '+' + colorHorn + "d6 fire damage";
                        }
                    },
                    "My horn attacks deal an additional +1d6 fire damage, increasing to +2d6 at level 11."
                ]
            }
        },
        "subclassfeature7": {
            name: "Blazing Charge",
            source: ["UW", 0],
            minlevel: 7,
            description: "\n   When you use your Charge feature, you leave a fire trail in your wake until the start of your next turn." +
                "\n   Any creature that moves through the path you charged along takes fire damage equal to your Wisdom modifier (minimum of 1)."
        },
        "subclassfeature15": {
            name: "Inferno Aura",
            source: ["UW", 0],
            minlevel: 15,
            description: "\n   You emit an aura of intense heat. At the start of each of your turns, creatures within 10 feet of you take fire damage equal to your Wisdom modifier (minimum of 1)." +
                "\n   Additionally, you have resistance to fire damage.",
            dmgres: [["Fire", "Fire"]]
        },
        "subclassfeature20": {
            name: "Avatar of Flame",
            source: ["UW", 0],
            minlevel: 20,
            description: "\n   As an action, you can transform into a being of pure flame for 1 minute. While in this form:" +
                "\n    - Your horn attacks deal an additional +2d8 fire damage." +
                "\n    - You are immune to fire damage." +
                "\n    - You can cast Fireball once per turn without expending a spell slot." +
                "\n   You can use this feature once per long rest.",
            usages: 1,
            recovery: "long rest",
            action: [["action", " (Activate Avatar of Flame)"]]
        }
    }
});

AddSubClass("unicornwarrior", "path of the orange unicorn", {
    regExpSearch: /^(?=.*orange)(?=.*unicorn).*$/i,
    subname: "Path of the Orange Unicorn (The Dawnbringer)",
    source: ["UW", 0],
    spellcastingExtra: [
        "cure wounds", "bless",
        "lesser restoration", "aid",
        "beacon of hope", "revivify",
        "aura of life", "death ward",
        "greater restoration", "mass cure wounds"
    ],
    features: {
        "subclassfeature3": {
            name: "Healing Horn",
            source: ["UW", 0],
            minlevel: 3,
            description: "\n   When you hit with a horn attack, you can choose to heal an ally within 30 feet for an amount equal to half the damage dealt (rounded down)." +
                "\n   You can use this feature a number of times equal to your proficiency bonus per long rest.",
            usages: "Proficiency bonus per ",
            usagescalc: "event.value = Number(What('Proficiency Bonus'));",
            recovery: "long rest"
        },
        "subclassfeature7": {
            name: "Aura of Vitality",
            source: ["UW", 0],
            minlevel: 7,
            description: "\n   You emit an aura that invigorates your allies. Allies within 10 feet of you regain hit points equal to your Wisdom modifier whenever they start their turn within the aura." +
                "This aura increases to 30 feet at level 18."
        },
        "subclassfeature15": {
            name: "Empowering Radiance",
            source: ["UW", 0],
            minlevel: 15,
            description: "\n   Whenever you cast a healing spell or use your Healing Horn, the target also gains advantage on their next attack roll or saving throw before the end of their next turn."
        },
        "subclassfeature20": {
            name: "Avatar of Renewal",
            source: ["UW", 0],
            minlevel: 20,
            description: "\n   As an action, you can transform into a radiant beacon of healing for 1 minute. While in this form:" +
                "\n    - You regain hit points equal to your Wisdom modifier at the start of each turn." +
                "\n    - Allies within 30 feet regain hit points equal to half their maximum hit points when they start their turn in this aura (once per creature per transformation)." +
                "\n   You can use this feature once per long rest.",
            usages: 1,
            recovery: "long rest",
            action: [["action", " (Activate Avatar of Renewal)"]]
        }
    }
});
AddSubClass("unicornwarrior", "path of the yellow unicorn", {
    regExpSearch: /^(?=.*yellow)(?=.*unicorn).*$/i,
    subname: "Path of the Yellow Unicorn (The Thunderbringer)",
    source: ["UW", 0],
    spellcastingExtra: [
        "thunderwave", "witch bolt",
        "shatter", "dragon's breath (lightning)",
        "call lightning", "lightning bolt",
        "storm sphere", "freedom of movement",
        "destructive wave (lightning)", "chain lightning"
    ],
    features: {
        "subclassfeature3": {
            name: "Lightning Horn",
            source: ["UW", 0],
            minlevel: 3,
            description: "\n   Your horn attacks crackle with lightning energy. When you hit with a horn attack, it deals an additional 1d6 lightning damage." +
                "This increases to 2d6 at level 11.",
            additional: levels.map(function (n) {
                return n < 11 ? "+1d6 lightning damage" : "+2d6 lightning damage";
            }),
            calcChanges: {
                atkAdd: [
                    function (fields, v) {
                        if (v.WeaponTextName.match(/horn/i)) {
                            var colorHorn = classes.known.unicornwarrior ? classes.known.unicornwarrior.level : classes.known.unicornwarrior.level;
                            fields.Description = (fields.Description ? '; ' : '') + '+' + (colorHorn < 11 ? 1 : 2) + 'd6 lightning damage';
                        }
                    },
                    "My horn attacks deal an additional +1d6 lightning damage, increasing to +2d6 at level 11."
                ]
            }
        },
    },
    "subclassfeature7": {
        name: "Thunderous Charge",
        source: ["UW", 0],
        minlevel: 7,
        description: "\n   When you use your Charge feature and hit with a horn attack, all creatures within 10 feet of the target must make a Constitution saving throw (DC = 8 + your proficiency bonus + your Wisdom modifier)." +
            "\n   On a failed save, they take thunder damage equal to half your Unicorn Warrior level and are knocked prone.",
    },
    "subclassfeature15": {
        name: "Storm Aura",
        source: ["UW", 0],
        minlevel: 15,
        description: "\n   You emit an aura charged with electricity. At the start of each of your turns, creatures within 10 feet take lightning damage equal to your Wisdom modifier (minimum of 1)." +
            "\n   Additionally, you have resistance to lightning damage.",
        dmgres: [["Lightning", "Lightning"]]
    },
    "subclassfeature20": {
        name: "Avatar of Storms",
        source: ["UW", 0],
        minlevel: 20,
        description: "\n   As an action, you can transform into a storm avatar for 1 minute. While in this form:" +
            "\n    - Your movement speed increases by 30 feet." +
            "\n    - You can cast Call Lightning without expending a spell slot." +
            "\n    - Your horn attacks deal an additional +2d8 lightning damage." +
            "\n   You can use this feature once per long rest.",
        usages: 1,
        recovery: "long rest",
        action: [["action", " (Activate Avatar of Storms)"]]
    }
});
AddSubClass("unicornwarrior", "path of the green unicorn", {
    regExpSearch: /^(?=.*green)(?=.*unicorn).*$/i,
    subname: "Path of the Green Unicorn (The Lifebringer)",
    source: ["UW", 0],
    spellcastingExtra: [
        "entangle", "goodberry",
        "spike growth", "barkskin",
        "plant growth", "conjure animals",
        "grasping vine", "guardian of nature",
        "tree stride", "wrath of nature"
    ],
    features: {
        "subclassfeature3": {
            name: "Thorned Horn",
            source: ["UW", 0],
            minlevel: 3,
            description: "\n   Your horn is imbued with nature’s wrath. When you hit with a horn attack, it deals an additional 1d6 piercing damage as thorny vines sprout from it." +
                "\n   The target must also make a Strength saving throw (DC = 8 + your proficiency bonus + your Wisdom modifier) or be restrained by these vines until the start of your next turn.",
            additional: levels.map(function (n) {
                return n < 11 ? "+1d6 piercing damage" : "+2d6 piercing damage";
            }),
            calcChanges: {
                atkAdd: [
                    function (fields, v) {
                        var colorHorn = levels.map(function (n) { return n < 11 ? "1" : "2"; }); // Calculate dice scaling
                        if (v.WeaponTextName.match(/horn/i)) {
                            fields.Description = (fields.Description ? "; " : "") + '+' + colorHorn + "d6 piercing damage";
                        }
                    },
                    "My horn attacks deal an additional +1d6 piercing damage, increasing to +2d6 at level 11."
                ]
            }
        },
        "subclassfeature7": {
            name: "Nature’s Grasp",
            source: ["UW", 0],
            minlevel: 7,
            description: "\n   When you use your Charge feature, you leave a trail of brambles in your wake until the start of your next turn." +
                "\n   A creature moving through this area must spend 4 feet of movement for every 1 foot it moves." +
                "\n   Additionally, when you use your Charge feature and move through plants or natural growths (such as from Entangle), it does not cost extra movement for you."
        },
        "subclassfeature15": {
            name: "Verdant Aura",
            source: ["UW", 0],
            minlevel: 15,
            description: "\n   You emit an aura that strengthens plant life around you. Plants within a radius of up to 30 feet grow rapidly and become difficult terrain for enemies but not for allies." +
                "\n   Additionally, any healing spells cast on creatures within this aura restore additional hit points equal to your Wisdom modifier."
        },
        "subclassfeature20": {
            name: "Avatar of Nature",
            source: ["UW", 0],
            minlevel: 20,
            description: "\n   As an action, you can transform into an avatar of nature for one minute. While in this form:" +
                "\n    - You can cast Wall of Thorns once without expending a spell slot." +
                "\n    - Your horn attacks deal an additional +2d8 piercing damage." +
                "\n    - You are immune to poison and disease." +
                "\n   You can use this feature once per long rest.",
            usages: 1,
            recovery: "long rest",
            action: [["action", " (Activate Avatar of Nature)"]]
        }
    }
});

AddSubClass("unicornwarrior", "path of the blue unicorn", {
    regExpSearch: /^(?=.*blue)(?=.*unicorn).*$/i,
    subname: "Path of the Blue Unicorn (The Frostbringer)",
    source: ["UW", 0],
    spellcastingExtra: [
        "armor of agathys", "ice knife",
        "snilloc's snowball swarm", "rime's binding ice",
        "sleet storm", "counterspell",
        "ice storm", "fire shield (cold mode)",
        "cone of cold", "wall of ice"
    ],
    features: {
        "subclassfeature3": {
            name: "Frost Horn",
            source: ["UW", 0],
            minlevel: 3,
            description: "\n   Your horn radiates freezing energy. When you hit with a horn attack, it deals an additional 1d6 cold damage. This increases to 2d6 at level 11." +
                "\n   Additionally, when you deal cold damage to a creature, its movement speed is reduced by 10 feet until the end of your next turn.",
            additional: levels.map(function (n) {
                return n < 11 ? "+1d6 cold damage" : "+2d6 cold damage";
            }),
            calcChanges: {
                atkAdd: [
                    function (fields, v) {
                        var colorHorn = levels.map(function (n) { return n < 11 ? "1" : "2"; }); // Calculate dice scaling
                        if (v.WeaponTextName.match(/horn/i)) {
                            fields.Description = (fields.Description ? "; " : "") + '+' + colorHorn + "d6 cold damage";
                        }
                    },
                    "My horn attacks deal an additional +1d6 cold damage, increasing to +2d6 at level 11."
                ]
            }
        },
        "subclassfeature7": {
            name: "Glacial Charge",
            source: ["UW", 0],
            minlevel: 7,
            description: "\n   When you use your Charge feature and hit with a horn attack, you can choose to convert half the damage dealt into temporary hit points for yourself or an ally within 10 feet of the target." +
                "\n   The temporary hit points last for 1 minute. You can use this feature a number of times equal to your Wisdom modifier (minimum of once) per long rest.",
            usagescalc: "event.value = Math.max(1, Number(What('Wis Mod')));",
            recovery: "long rest"
        },
        "subclassfeature15": {
            name: "Frozen Bulwark",
            source: ["UW", 0],
            minlevel: 15,
            description: "\n   As a reaction when you or an ally within 30 feet takes damage, you can conjure a shield of magical ice to reduce the incoming damage by an amount equal to your Unicorn Warrior level + your Wisdom modifier." +
                "\n   If this reduces the damage to 0, the shield explodes in icy shards, dealing cold damage equal to your Wisdom modifier (minimum of 1) to all creatures within 10 feet of the protected target." +
                "\n   You can use this feature a number of times equal to your proficiency bonus per long rest.",
            usagescalc: "event.value = Number(What('Proficiency Bonus'));",
            recovery: "long rest",
            action: [["reaction", "(Reduce Damage)"]]
        },
        "subclassfeature20": {
            name: "Avatar of Winter",
            source: ["UW", 0],
            minlevel: 20,
            description: "\n   As an action, transform into an embodiment of winter for one minute. While in this form:" +
                "\n    - You gain resistance to all damage except fire." +
                "\n    - Your horn attacks deal an additional +2d8 cold damage." +
                "\n    - When you take damage from an enemy within 30 feet, they take cold damage equal to your Wisdom modifier (minimum of 1)." +
                "\n    - At the start of each turn, you and all allies within 30 feet gain temporary hit points equal to half your Unicorn Warrior level (rounded down)." +
                "\n   Once you use this feature, you cannot do so again until you finish a long rest.",
            usages: 1,
            recovery: "long rest",
            action: [["action", "(Activate Avatar of Winter)"]]
        }
    }
});

AddSubClass("unicornwarrior", "path of the indigo unicorn", {
    regExpSearch: /^(?=.*indigo)(?=.*unicorn).*$/i,
    subname: "Path of the Indigo Unicorn (The Shadowbringer)",
    source: ["UW", 0],
    spellcastingExtra: [
        "disguise self", "hex",
        "darkness", "mirror image",
        "fear", "vampiric touch",
        "greater invisibility", "phantasmal killer",
        "shadow of moil", "wall of force"
    ],
    features: {
        "subclassfeature3": {
            name: "Shadow Horn",
            source: ["UW", 0],
            minlevel: 3,
            description: "\n   Your horn strikes are infused with shadow energy. When you hit with a horn attack, it deals an additional 1d6 necrotic damage. This increases to 2d6 at level 11.",
            additional: levels.map(function (n) {
                return n < 11 ? "+1d6 cold damage" : "+2d6 cold damage";
            }),
            calcChanges: {
                atkAdd: [
                    function (fields, v) {
                        var colorHorn = levels.map(function (n) { return n < 11 ? "1" : "2"; }); // Calculate dice scaling
                        if (v.WeaponTextName.match(/horn/i)) {
                            fields.Description = (fields.Description ? "; " : "") + '+' + colorHorn + "d6 cold damage";
                        }
                    },
                    "My horn attacks deal an additional +1d6 cold damage, increasing to +2d6 at level 11."
                ]
            }
        },
        "subclassfeature7": {
            name: "Cloak of Shadows",
            source: ["UW", 0],
            minlevel: 7,
            description: "\n   As a bonus action, you can become invisible until the end of your next turn or until you make an attack or cast a spell." +
                "\n   You can use this feature a number of times equal to your proficiency bonus per long rest.",
            usagescalc: "event.value = Number(What('Proficiency Bonus'));",
            recovery: "long rest",
            action: [["bonus action", "(Become Invisible)"]]
        },
        "subclassfeature15": {
            name: "Shadow Aura",
            source: ["UW", 0],
            minlevel: 15,
            description: "\n   You emit a 10 ft radius aura that cloaks nearby allies in darkness. Allies within this aura have advantage on Stealth checks while inside it." +
                "\n   Additionally, enemies have disadvantage on attack rolls against allies who are fully obscured by darkness while inside this aura."
        },
        "subclassfeature20": {
            name: "Avatar of Night",
            source: ["UW", 0],
            minlevel: 20,
            description: "\n   As an action, you can transform into pure shadow for one minute. While in this form:" +
                "\n    - You are immune to necrotic damage." +
                "\n    - You gain resistance against non-magical weapon attacks." +
                "\n    - Your horn attacks deal an additional +2d8 necrotic damage." +
                "\n   Once you use this feature, you cannot do so again until you finish a long rest.",
            usages: 1,
            recovery: "long rest",
            action: [["action", "(Activate Avatar of Night)"]]
        }
    }
});

AddSubClass("unicornwarrior", "path of the violet unicorn", {
    regExpSearch: /^(?=.*violet)(?=.*unicorn).*$/i,
    subname: "Path of the Violet Unicorn (The Mindbringer)",
    source: ["UW", 0],
    spellcastingExtra: [
        "dissonant whispers", "tasha's hideous laughter",
        "mind spike", "calm emotions",
        "hypnotic pattern", "enemies abound",
        "confusion", "raulothim's psychic lance",
        "synaptic static", "dominate person"
    ],
    features: {
        "subclassfeature3": {
            name: "Psychic Horn",
            source: ["UW", 0],
            minlevel: 3,
            description: "\n   Your horn attacks channel psychic energy into foes' minds. When you hit with a horn attack, it deals an additional 1d6 psychic damage. This increases to 2d6 at level 11.",
            additional: levels.map(function (n) {
                return n < 11 ? "+1d6 psychic damage" : "+2d6 psychic damage";
            }),
            calcChanges: {
                atkAdd: [
                    function (fields, v) {
                        var colorHorn = levels.map(function (n) { return n < 11 ? "1" : "2"; }); // Calculate dice scaling
                        if (v.WeaponTextName.match(/horn/i)) {
                            fields.Description = (fields.Description ? "; " : "") + '+' + colorHorn + "d6 psychic damage";
                        }
                    },
                    "My horn attacks deal an additional +1d6 psychic damage, increasing to +2d6 at level 11."
                ]
            }
        },
    },
    "subclassfeature7": {
        name: "Mental Assault",
        source: ["UW", 0],
        minlevel: 7,
        description: "\n   When using your Charge feature against a creature that has taken psychic damage since your last turn, they must make a Wisdom saving throw (DC = 8 + proficiency bonus + Wisdom modifier) or be stunned until the end of their next turn.",
    },
    "subclassfeature15": {
        name: "Psychic Aura",
        source: ["UW", 0],
        minlevel: 15,
        description: "\n   You emit an aura that disrupts enemy concentration within range. Enemies within this aura have disadvantage on concentration checks when maintaining spells or effects that require concentration while inside it." +
            "\n   Additionally, any creature that fails its saving throw against one of your psychic spells takes additional psychic damage equal to half your Unicorn Warrior level (rounded down)."
    },
    "subclassfeature20": {
        name: "Avatar of Thought",
        source: ["UW", 0],
        minlevel: 20,
        description: "\n   As an action, you transform into pure psionic energy for one minute. While in this form:" +
            "\n    - You are immune to psychic damage and gain the effects of the Mind Blank spell." +
            "\n    - You gain telepathy out to a range of up to one mile." +
            "\n    - You can cast Synaptic Static once per turn without expending a spell slot." +
            "\n   Once you use this feature, you cannot do so again until you finish a long rest.",
        usages: 1,
        recovery: "long rest",
        action: [["action", "(Activate Avatar of Thought)"]]
    }
}
);


RaceList["unicorn"] = {
    regExpSearch: /unicorn/i,
    name: "Unicorn",
    sortname: "Unicorn",
    source: [["Custom", 0]],
    plural: "Unicorns",
    size: 3, // Medium size
    speed: {
        walk: { spd: 40, enc: 30 } // Base walking speed of 40 feet
    },
    languageProfs: ["Common", "Celestial"], // Languages: Common and Celestial
    scoresGeneric: true, // Ability score increase: +2/+1 or +1/+1/+1
    trait: "Unicorn" +
        "\n \u2022 Fey: My creature type is fey, rather than humanoid." +
        "\n \u2022 Limited Telepathy: I can telepathically speak to any creature I can see within 30 feet." +
        "\n \u2022 Charge: If I move 30 ft straight toward a creature and then hit it with a melee weapon attack on the same turn, I can make a hooves attack against it as a bonus action." +
        "\n \u2022 Equine Build: I count as one size larger for my carrying capacity and the weight I can push, drag, or lift. Because of my hooves, 1 ft of movement while climbing costs me 4 ft.",
    skillstxt: "Choose one from Animal Handling, Medicine, Nature, or Survival", // Skill proficiency options
    weaponOptions: [{
        baseWeapon: "unarmed strike",
        regExpSearch: /\b(hoofs?|hooves)\b/i,
        name: "Hooves",
        source: [["Custom", 0]],
        damage: [1, 6, "bludgeoning"], // Hooves deal 1d6 bludgeoning damage
        description: "Use as bonus action after charge 30 ft", // Bonus action after Charge ability
        selectNow: true
    }],
    action: [["bonus action", "Hooves (after charge)"]], // Bonus action for Hooves attack after Charge
    carryingCapacity: 2 // Counts as one size larger for carrying capacity
};
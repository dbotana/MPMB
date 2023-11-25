// Add the Gastronomist specialist
var iFileName = "Artificer - Gastronomist [Rocky].js";
RequiredSheetVersion(13);

SourceList["Gas"] = {
    name: "Artificer - Gastronomist",
    abbreviation: "Gas",
    abbreviationSpellsheet: "GS",
    group: "Rocky's Homebrew",
    date: "2023/8/21"
};

AddSubClass("artificer", "gastronomist", {
    regExpSearch: /^(?=.*gastronomist)(?!.*wizard).*$/i,
    subname: "Gastronomist",
    fullname: "Gastronomist",
    source: ["HB", 2],
    features: {
        "subclassfeature3": {
            name: "Tools Proficiency",
            source: ["HB", 2],
            minlevel: 3,
            description: " [proficient with cook's utensils]",
            toolProfs: ["cook's utensils"],
            spellcastingExtra: ["purify food and drink", "goodberry", "heat metal", "suggestion", "create food and water", "fast friends", "charm monster", "sickening radiance", "greater restoration", "animate objects"]
        },
        "subclassfeature3.1": {
            name: "Easy Bake Oven",
            source: ["HB", 2],
            minlevel: 3,
            description: desc([
                "As an action I can create a number of delicacies less than or equal to my proficency bonus",
                "As a bonus action a creature can eat a delicacy or feed it to another creature within 5ft",
                "I can make a number of delicacies equal to 1+1/2 my artificer level per long rest",
                "Also, as an action, I can expend a spell slot to create Delicacies",
                "I need cooking utensils on my person to do this; A delicacy lasts until my next long rest",
                "Effects are shown in the Delicacies table on a Notes page, options unlock at certain levels."
            ]),
            additional: levels.map(function (n) {
                return n < 3 ? "" : "create " + (1 + Math.ceil(n / 2)) + " delicacies per long rest";
            }),
            action: [["action", ""]],
            toNotesPage: [{
                name: "Delicacy Table",
                note: [
                    "\n  D100\tEFFECT",
                    "1\tHealing: The drinker regains a number of hit points equal to 2d4 + my Intelligence modifier.",
                    "2\tSwiftness: The drinker's walking speed increases by 10 ft for 1 hour.",
                    "3\tResilience: The drinker gains a +1 bonus to AC for 10 minutes.",
                    "4\tBoldness: The drinker can roll a d4 and add the number rolled to every attack roll and saving throw they make for the next minute.",
                    "5\tFlight: The drinker gains a flying speed of 10 ft for 10 minutes.",
                    "6\tTransformation: The drinker's body is transformed as if by the alter self spell. The drinker determines the transformation caused by the spell, the effects of which last for 10 minutes."
                ]
            }]
        },
        "subclassfeature5": {
            name: "Food Fight",
            source: [["HB", 2]],
            minlevel: 3,
            description: desc([
                "As a action, I can fling delicious detonations",
                "For each, I make a melee spell attack against a creature/object within 60 ft I can see",
                "On a hit, I deal 1d6 acid, cold, fire, or poison (my choice) damage and apply an effect",
                "The effects use my spell save DC; See the Notes page for the Food Fight table",
                "The effect and damage dice increase with class level: 1d8 at 9th, 1d10 at 11th, 1d12 at 13th",
                "Spell attacks can be combined or split; AL5:2, AL11:3, AL17:4 delicious detonations"
            ]),
            action: ["action", "Delicious Detonation (roll on table)"],
            additional: levels.map(function (n) {
                return "1d" + (n < 9 ? 6 : n < 11 ? 8 : n < 13 ? 10 : 12);
            }),
            weaponsAdd: ["Delicious Detonation"],
            weaponOptions: [{
                name: "Delicious Detonation",
                source: ["HB", 2],
                regExpSearch: /^(?=.*delicious)(?=.*detonation).*$/i,
                type: "Cantrip",
                ability: 4,
                abilitytodamage: false,
                damage: [1, 6, "acid"],
                range: "Melee, 60 ft",
                description: "Melee spell attack, deals my choice of acid/fire/cold/poison",
                isAlwaysProf: true,
                useSpellMod: "artificer",
            }],
            calcChanges: {
                atkAdd: [
                    function (fields, v) {
                        if ((/^(?=.*delicious)(?=.*detonation).*$/i).test(v.WeaponTextName) && classes.known.artificer && classes.known.artificer.level) {
                            alvl = classes.known.artificer.level
                            fields.Damage_Die = "1d" + (alvl < 9 ? 6 : alvl < 11 ? 8 : alvl < 13 ? 10 : 12);
                        };
                    },
                    700
                ]
            },
            toNotesPage: [{
                name: " Delicious Detonation Table",
                note: desc([
                    "Roll on the Table to determine the effect",
                    "The effect and damage dice increases as you gain levels in this class, becoming 1d8 at 9th level, 1d10 at 11th level, and 1d12 at 13th level.",
                    "You create more delicious detonations when you reach higher levels: two at 5th level, three at 11th level, and four at 17th level. You can direct the detonations at the same target or at different ones. Make a separate attack roll for each.",
                    "\nRoll " + (typePF ? "" : " ") + "Detonation"
                ]) +
                    desc([
                        "  1    The target takes additional damage equal to  your Intelligence modifier (minimum of 1).",
                        "  2    The target cannot take reactions until the end of it's next turn.",
                        "  3    A creature of your choice within 30 feet gains a bonus to its AC equal to 1d4 until the start of your next turn.",
                        "  4    The target is moved up to 10 feet in a direction of your choice.",
                        "  5    A creature of your choice within 30 feet of you can add 1d4 to it's next saving throw.",
                        "  6    The target must subtract 1d4 from its next saving throw.",
                        "  7    All attacks made against the target have advantage until the end of your next turn.",
                        "  8    The target has disadvantage on its next attack roll.",
                        "  9    A creature of your choice within 30 feet can immediately use its reaction to make one weapon attack.",
                        " 10    The target can use its movement or its action, but not both.",
                        " 11    The target must make a dexterity save, on a fail it is is restrained until the end of your next turn.",
                        " 12    The target must make a constitution save, on a fail it is paralyzed until the end of your next turn."
                    ], "\n")
            }]
        },
        "subclassfeature9": {
            name: "Alternative Medicine",
            source: ["HB", 2],
            minlevel: 9,
            description: desc([
                "Consuming my delicacies now also grants 2d6 + my Int mod in temp HP (min 1)",
                "I can cast Lesser Restoration with cook's utensils without a spell slot (Int mod times)"
            ]),
            usages: "Int mod per ",
            usagescalc: "event.value = Math.max(1, What('Int Mod'));",
            recovery: "long rest",
            limfeaname: "Alternative Medicine: Lesser Restoration",
            spellcastingBonus: {
                name: "Alternative Medicine",
                spells: ["lesser restoration"],
                selection: ["lesser restoration"],
                firstCol: "Sp"
            },
            spellChanges: {
                "lesser restoration": {
                    components: "V,S,M\u0192",
                    compMaterial: "cook's utensils",
                    changes: "When using my Alternative Medicine class feature, I can cast Lesser Restoration a number of times per long rest equal to my Intelligence modifier. To do so, I have to use cook's utensils as my spellcasting focus."
                }
            }
        },
        "subclassfeature15": {
            name: "Master Chef",
            source: ["HB", 2],
            minlevel: 15,
            description: " [each spell 1\xD7 per long rest]" + desc([
                "I have immunity to fire and poison damage and immunity to being poisoned",
                "I can cast Greater Restoration and Heroes' Feast each once per long rest without a spell slot",
                "I need cook's utensils as a focus for it, but the spells require no material components"
            ]),
            savetxt: { immune: ["fire", "poison", "poisoned condition"] },
            extraLimitedFeatures: [{
                name: "Master Chef: Greater Restoration",
                usages: 1,
                recovery: "long rest"
            }, {
                name: "Master Chef: Heroes' Feast",
                usages: 1,
                recovery: "long rest"
            }],
            spellcastingBonus: {
                name: "Master Chef",
                spells: ["greater restoration", "heroes' feast"],
                selection: ["greater restoration", "heroes' feast"],
                firstCol: "oncelr",
                times: 2
            },
            spellChanges: {
                "greater restoration": {
                    components: "V,S,M\u0192",
                    compMaterial: "cook's utensils",
                    description: "Reduce exhaustion 1 lvl or end charm, petrify, curse, one ability score reduction, or max HP reduction",
                    changes: "When using my Master Chef class feature and cook's utensils as my spellcasting focus, I can cast Greater Restoration once per long rest without using a spell slot or requiring other material components."
                },
                "heroes' feast": {
                    components: "V,S,M\u0192",
                    compMaterial: "cook's utensils",
                    allowUpCasting: false,
                    changes: "When using my Master Chef class feature and cook's utensils as my spellcasting focus, I can cast Heroes' Feast once per long rest without using a spell slot or requiring other material components."
                }
            }
        }
    }
});
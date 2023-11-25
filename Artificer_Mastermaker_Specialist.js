// Add the Mastermaker specialist
var iFileName = "Artificer - Mastermaker [Custom].js";
RequiredSheetVersion(13);

SourceList["MkM"] = {
    name: "Artificer - Mastermaker",
    abbreviation: "MkM",
    abbreviationSpellsheet: "Mk",
    group: "Rocky's Homebrew",
    date: "2023/11/24"
};

AddSubClass("artificer", "mastermaker", {
    regExpSearch: /^(?=.*mastermaker)(?!.*wizard).*$/i,
    subname: "Mastermaker",
    fullname: "Mastermaker",
    source: ["HB", 2],
    attacks : [1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
    features: {
        "subclassfeature3": {
            name: "Tools of Integration",
            source: ["HB", 2],
            minlevel: 3,
            description: " [proficient with heavy armor and smith's tools]",
            toolProfs: ["smith's tools"],
            armorProfs: ["heavy"],
            spellcastingExtra: ["absorb elements", "thunderous smite", "enhance ability", "lesser restoration", "blinding smite", "haste", "freedom of movement", "stone shape", "banishing smite", "greater restoration"]
        },
        "subclassfeature3.1": {
            name: "Prosthesis Expertise",
            source: ["HB", 2],
            minlevel: 3,
            description: desc([
                "After a long rest, I can touch a nonmagical object to create a permanent magical prosthesis",
                "It functions identically to the part it replaces and can't be removed against wearer's will",
                "It detaches if the wearer dies",
                "This prosthetic can be a hand, arm, foot, leg, or similar body part"
            ])
        },
        "subclassfeature3.2": {
            name: "Battlefist",
            source: ["HB", 2],
            minlevel: 3,
            description: desc([
                "Replace an arm with a battlefist, a magical prosthetic",
                "Use as a simple melee weapon and a spellcasting focus",
                "Attack using Int instead of Str, dealing 1d10 (2d10 at 9th lvl) + Str/Int mod bludgeoning"
            ]),
            additional: levels.map(function (n) {
                return n < 9 ? "1d10" : "2d10";
            }),
            weaponsAdd: ["Battlefist"],
            weaponOptions: {
                name: "Battlefist",
                source: ["HB", 2],
                regExpSearch: /^(?=.*battlefist).*$/i,
                type: "Simple",
                ability: 4, // Intelligence
                abilitytodamage: true,
                damage: [1, 10, "bludgeoning"],
                range: "Melee",
                description: "Can use Int instead of Str for attack and damage; magical weapon",
                isAlwaysProf: true,
                useSpellMod: "artificer"
            },
            calcChanges: {
                atkAdd: [
                    function (fields, v) {
                        if ((/^(?=.*battlefist).*$/i).test(v.WeaponTextName) && classes.known.artificer && classes.known.artificer.level) {
                            var alvl = classes.known.artificer.level;
                            fields.Damage_Die = alvl < 9 ? "1d10" : "2d10";
                        }
                    },
                    700
                ]
            }
        },
        "subclassfeature9": {
            name: "Improved Battlefist",
            source: ["HB", 2],
            minlevel: 9,
            description: desc([
                "Apply two infusions to battlefist at a time, and can be infused as both a weapon and a shield",
                "Functions as a shield if not already holding a shield, increasing AC by 2",
                "Max number of infused items increases by 1, extra infusion must be on the battlefist"
            ])
        },
        "subclassfeature15": {
            name: "Construct Apotheosis",
            source: ["HB", 2],
            minlevel: 15,
            description: desc([
                "Gain resistance to poison and psychic damage; immune to poisoned condition",
                "Can choose to be considered a construct instead of other creature types against spells/effects",
                "Can cast Antilife Shell and Investiture of Stone without spell slot, preparation, or material components using battlefist as focus (once per long rest for each spell)"
            ]),
            spellcastingBonus: {
                name: "Construct Apotheosis",
                spells: ["antilife shell", "investiture of stone"],
                selection: ["antilife shell", "investiture of stone"],
                firstCol: "oncelr",
            }
        }
    }
});
MagicItemsList["Improved Battlefist Shield"] = {
    name: "Improved Battlefist Shield",
    source: [["HB", 2]], // Update source as appropriate
    type: "shield",
    rarity: "common", // Update rarity as appropriate
    description: "When equipped, this shield grants a +2 bonus to AC. It can be infused as both a weapon and a shield. While used as a shield, it still functions as a magical melee weapon.",
    descriptionFull: "This shield is an enhanced version of the Battlefist, capable of being used as both a weapon and a shield. When equipped, it grants a +2 bonus to AC and can be infused with artificer infusions applicable to weapons and shields. Despite being used as a shield, it maintains its capabilities as a magical melee weapon.",
    shieldAdd: "Improved Battlefist Shield",
};
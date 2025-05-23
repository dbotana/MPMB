/* -WHAT IS THIS?-
This file adds optional material to "MPMB's Character Record Sheet" found at https://flapkan.com/mpmb/charsheets
Import this file using the "Add Extra Materials" bookmark.

-KEEP IN MIND-
It is recommended to enter the code in a fresh sheet before adding any other information (i.e. before making your character with it).
*/

/* -INFORMATION-
Subject: Class
Effect: This script adds the "Gunsmith" Artificer subclass as described in The Sharpest Tools by /u/3athompson
Code by: Rocky
Date: 2025-05-23 (sheet v13)
*/

var iFileName = "Artificer - Gunsmith.js";

RequiredSheetVersion(13);

SourceList["Gun"] = {
    name: "Artificer - Gunsmith",
    abbreviation: "Gun",
    abbreviationSpellsheet: "GS",
    group: "Rocky's Homebrew",
    source: "https://drive.google.com/file/d/1VHRDnNszuU_iz7AXWLhdvA8axy7GPOB6/view",
    date: "2025/5/23"
};

AddSubClass("artificer", "gunsmith", {
    regExpSearch: /^(?=.*gunsmith)(?!.*wizard).*$/i,
    subname: "Gunsmith",
    fullname: "Gunsmith",
    source: ["Gun", 1],
    attacks: [1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
    features: {
        "subclassfeature3": {
            name: "Weaponcraft",
            source: ["Gun", 1],
            minlevel: 3,
            description: desc([
                "I gain proficiency with heavy crossbows and hand crossbows",
                "I craft a weapon worthy to be wielded - either a renaissance firearm with 20 bullets,",
                "or a crossbow of my choice with 40 bolts (DM's discretion based on firearm rules)"
            ]),
            weaponProfs: [false, false, ["heavy crossbow", "hand crossbow"]],
            toolProfs: ["smith's tools"],
            spellcastingExtra: ["hail of thorns", "heroism", "branding smite", "find steed", "conjure barrage", "lightning arrow", "death ward", "mordenkainen's faithful hound", "banishing smite", "swift quiver"]
        },
        "subclassfeature3.2": {
            name: "Arsenal",
            source: ["Gun", 1],
            minlevel: 3,
            description: desc([
                "After a long rest, I can use smith's tools to carve sigils into ranged weapons with loading",
                "I can have any number of arsenal weapons; Arsenal weapons have these benefits:",
                " \u2022 Use Intelligence modifier instead of Str/Dex for attack and damage rolls",
                " \u2022 Ignore the loading property when I use them",
                " \u2022 While on my person: bonus to initiative equal to my Intelligence modifier",
                " \u2022 Advantage on first attack of combat if made with an arsenal weapon"
            ]),
            addMod: { type: "skill", field: "Init", mod: "Int", text: "I can add my Intelligence modifier to initiative rolls while an arsenal weapon is on my person." },
            calcChanges: {
                atkAdd: [
                    function (fields, v) {
                        if (!v.isSpell && (/arsenal/i.test(v.WeaponTextName)) && (fields.Mod === 1 || fields.Mod === 2) && Number(What("Int")) > Number(What(fields.Mod === 1 ? "Str" : "Dex"))) {
                            fields.Mod = 4;
                        }
                    },
                    'I can use my Intelligence modifier instead of Strength or Dexterity for the attack and damage rolls of Arsenal weapons.'
                ]
            }
        },
        "subclassfeature9": {
            name: "Deadly Aim",
            source: ["Gun", 1],
            minlevel: 9,
            description: desc([
                "With arsenal weapons, I score critical hits on rolls of 19-20",
                "I roll one additional weapon damage die for critical hits (two additional at 15th level)"
            ]),
            additional: levels.map(function (n) {
                return n < 15 ? "19-20 crit, +1 damage die" : "19-20 crit, +2 damage dice";
            }),
            calcChanges: {
                atkAdd: [
                    function (fields, v) {
                        if (!v.isSpell && (/arsenal/i.test(v.WeaponTextName))) {
                            v.CritChance = 19;
                            fields.Description += (fields.Description ? '; ' : '') + 'Crit on 19-20';
                        }
                    },
                    'I crit on 19-20 with Arsenal weapons.'
                ]
            }
        },
        "subclassfeature15": {
            name: "Sidearm",
            source: ["Gun", 1],
            minlevel: 15,
            description: desc([
                "When I use my action to cast a spell, I can make one attack with an arsenal weapon as a bonus action"
            ]),
            action: [["bonus action", "Arsenal weapon attack (after casting spell)"]]
        }
    }
});

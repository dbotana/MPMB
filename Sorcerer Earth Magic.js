/*	-WHAT IS THIS?-
	This file adds optional material to "MPMB's Character Record Sheet" found at https://flapkan.com/mpmb/charsheets
	Import this file using the "Add Extra Materials" bookmark.
	-KEEP IN MIND-
	It is recommended to enter the code in a fresh sheet before adding any other information (i.e. before making your character with it).
*/

/*	-INFORMATION-
	Subject:	Subclass
	Effect:		This script adds a subclass for the Sorcerer, called "Earth Sorcery" from https://www.reddit.com/r/UnearthedArcana/comments/ok8h70/stone_sorcerer_revised_my_attempt_at_remaking_a/
	Code by:	Rocky
	Date:		2024-09-19 (sheet v13)
*/
var iFileName = "Sorcerer - Earth Sorcery [Rocky].js";
RequiredSheetVersion(13);

SourceList["HB:E"] = {
	name : "Sorcerer - Earth Sorcery",
	abbreviation : "HB:E",
	abbreviationSpellsheet: "E",
	group : "Rocky's Homebrew",
	date : "2024/9/20"
};
AddSubClass("sorcerer", "earth sorcery", {
    regExpSearch: /^(?=.*earth)(?=.*(sorcerer|sorcery)).*$/i,
    subname: "Earth Sorcery",
    source: [["HB:E", 0]],
    features: {
        "subclassfeature1": {
            name: "Earth Magic",
            source: [["Eth", 0]],
            minlevel: 1,
            description: desc([
                "I learn additional spells, which do not count towards the number of spells I can know",
                "Whenever I gain a sorcerer level, I can replace one of these with another of the same level",
                "It must be a conjuration or evocation spell on the sorcerer, druid, or wizard spell list"
            ]),
            spellcastingBonus: [{
                name: "Earth Magic (1st-level)",
                "class": ["sorcerer", "druid", "wizard"],
                school: ["Conj", "Evoc"],
                level: [1, 1],
                extraspells: ["earth tremor", "shield"],
                selection: ["earth tremor", "shield"],
                times: 2
            }, {
                name: "Earth Magic (2nd-level)",
                "class": ["sorcerer", "druid", "wizard"],
                school: ["Conj", "Evoc"],
                level: [2, 2],
                extraspells: ["maximilian's earthen grasp", "spike growth"],
                selection: ["maximilian's earthen grasp", "spike growth"],
                times: levels.map(function (n) { return n < 3 ? 0 : 2; })
            }, {
                name: "Earth Magic (3rd-level)",
                "class": ["sorcerer", "druid", "wizard"],
                school: ["Conj", "Evoc"],
                level: [3, 3],
                extraspells: ["erupting earth", "meld into stone"],
                selection: ["erupting earth", "meld into stone"],
                times: levels.map(function (n) { return n < 5 ? 0 : 2; })
            }, {
                name: "Earth Magic (4th-level)",
                "class": ["sorcerer", "druid", "wizard"],
                school: ["Conj", "Evoc"],
                level: [4, 4],
                extraspells: ["stone shape", "stoneskin"],
                selection: ["stone shape", "stoneskin"],
                times: levels.map(function (n) { return n < 7 ? 0 : 2; })
            }, {
                name: "Earth Magic (5th-level)",
                "class": ["sorcerer", "druid", "wizard"],
                school: ["Conj", "Evoc"],
                level: [5, 5],
                extraspells: ["transmute rock", "wall of stone"],
                selection: ["transmute rock", "wall of stone"],
                times: levels.map(function (n) { return n < 9 ? 0 : 2; })
            }]
        },
        "subclassfeature1.1": {
            name: "Earth Speaker",
            source: [["Eth", 0]],
            minlevel: 1,
            description: desc([
                "I can speak, read, and write Primordial, understanding the Terran dialect",
                "I learn the Mold Earth cantrip, which doesn't count against my number of cantrips known"
            ]),
            languageProfs: ["Primordial"],
            spellcastingBonus: {
                name: "Earth Speaker",
                spells: ["mold earth"],
                selection: ["mold earth"]
            }
        },
        "subclassfeature1.2": {
            name: "Stone's Durability",
            source: [["Eth", 0]],
            minlevel: 1,
            description: desc([
                "My hit point maximum increases by 1, and by 1 again whenever I gain a sorcerer level",
                "As an action, I can assume a hardened form with stone-like skin, gaining these benefits:",
                " \u2022 13 + Con modifier AC if not wearing armor",
                " \u2022 Unarmed strikes deal 1d8 damage and can use Con for attack and damage rolls",
                "This lasts until I end it as a bonus action, I'm incapacitated, or I don armor other than a shield"
            ]),
            action: [["action", "Stone's Durability"], ["bonus action", "End Stone's Durability"]],
            calcChanges: {
                hp: function (totalHD, HDobj, prefix) {
                    if (classes.known.sorcerer) {
                        return [classes.known.sorcerer.level, "Stone's Durability (Sorcerer)"];
                        extrahp += classes.known.sorcerer.level;
                    }
                },
                hpForceRecalc: true
            },
            armorOptions : [{
                regExpSearch : /^(?=.*stone)(?=.*durability).*$/i,
                name : "Stone's Durability",
                source : [["Eth", 0]],
                ac : "13+Con",
                dex : -10,
                selectNow : true,
            }],
            weaponOptions : [{
                regExpSearch : /^(?=.*stone)(?=.*durability)(?=.*unarmed)(?=.*strike).*$/i,
                name : "Stone's Durability Unarmed Strike",
                source : [["Eth", 0]],
                ability : 3,
                type : "Natural",
                damage : [1, 8, "bludgeoning"],
                range : "Melee",
                description : "Stone's Durability active",
                abilitytodamage : true,
                monkweapon : false
            }],
            weaponsAdd : ["Stone's Durability Unarmed Strike"]
        },
        "subclassfeature6": {
            name: "Earth Warden",
            source: [["Eth", 0]],
            minlevel: 6,
            description: desc([
                "When I cast a sorcerer spell or Earth Magic spell of 1st level or higher that deals damage,",
                "I can spend 2 sorcery points to deal an extra 1d10 bludgeoning damage to one target (+1d10/SP up to 3d10)",
                "As a bonus action, I grant an aegis to myself or an ally within 30 ft which reduces B/P/S damage by half my sorcerer level",
                "This lasts for 1 minute, until I use it again, or until I'm incapacitated. Spend 3 sorcery points to regain a use."
            ]),
            action: [["bonus action", "Earth Warden (Aegis)"]],
            usages: "Proficiency bonus per ",
            usagescalc: "event.value = How('Proficiency Bonus');",
            recovery: "long rest",
            additional: levels.map(function (n) {
                return n < 6 ? "" : "Aegis damage reduction: " + Math.floor(n/2);
            })
        },
        "subclassfeature14": {
            name: "Earth Master",
            source: [["Eth", 0]],
            minlevel: 14,
            description: desc([
                "I gain a burrowing speed equal to my walking speed",
                "I can burrow through nonmagical, unworked earth and stone without disturbing it",
                "I gain tremorsense out to a range of 30 ft"
            ]),
            speed: { burrow: { spd: "walk", enc: "walk" } },
            vision: [["Tremorsense", 30]]
        },
        "subclassfeature18": {
            name: "Primordial Earth",
            source: [["Eth", 0]],
            minlevel: 18,
            description: desc([
                "I have resistance to bludgeoning, slashing, and piercing damage",
                "I have advantage on saving throws against being moved or knocked unconscious",
                "I can cast any spell requiring earthen material components without those components"
            ]),
            dmgres: ["Bludgeoning", "Piercing", "Slashing"],
            savetxt: { adv_vs: ["being moved", "being knocked unconscious"] }
        }
    }
});
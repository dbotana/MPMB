var iFileName = "Paladin - Oath of the Grail Knight.js";
RequiredSheetVersion(13);

SourceList.OoGK = {
    name: "Paladin - Oath of the Grail Knight",
    abbreviation: "OoGK",
    group: "Homebrew",
    date: "2023/12/02"
};

AddSubClass("paladin", "oath of the grail knight", {
    regExpSearch: /^(?=.*grail)(?=.*knight).*$/i,
    subname: "Oath of the Grail Knight",
    source: ["OoGK", 1],
    features: {
        subclassfeature3: {
            name: "Channel Divinity: Consuming Hellfire",
            source: ["OoGK", 1],
            minlevel: 3,
            description: desc([
                "As an action, I can ignite a foe within 10 feet with hellfire, dealing 3d6 plus 1d6 per four paladin levels.",
                "The target may make a Dexterity save to put it out with a DC equal to 8 + your proficiency bonus + your Constitution modifier."
            ]),
            additional : levels.map(function (n) {
				return 3+Math.floor(n/4)+ "d6";
			}),
            action: ["action", ""]
        },
        subclassfeature3_1: {
            name: "Channel Divinity: Hellfire",
            source: ["OoGK", 1],
            minlevel: 3,
            description: desc([
                "As a bonus action, ignite a weapon with hellfire, dealing additional damage equal to your Charisma modifier.",
                "An undead creature hit with this weapon must make a Constitution saving throw or be reduced to zero hit points."
            ]),
            action: ["bonus action", ""],
            calcChanges : {
                atkAdd : [
                    function (fields, v) {
                        if ((v.isMeleeWeapon) && (/hellfire/i).test(v.WeaponTextName)) {
                            fields.Description += (fields.Description ? '; ' : '') + 'Cha mod added to damage';
                        }
                    },
                    "If I include the words 'Hellfire' in the name of a melee weapon or an unarmed strike, it adds my CHA in necrotic damage",
                    700
                ],
                atkCalc : [
                    function (fields, v, output) {
                        if (v.isMeleeWeapon) {
                            output.extraDmg += Number(What("Cha Mod"));
                        };
                    }, ''
                ]
            }
        },
        subclassfeature7: {
            name: "Aura of Evil",
            source: ["OoGK", 1],
            minlevel: 7,
            description: desc([
                "Use detect evil and good as a bonus action without expending a spell slot.",
                "This can be done a number of times equal to your paladin level per short rest."
            ])
        },
        subclassfeature15: {
            name: "Cursed Hellfire",
            source: ["OoGK", 1],
            minlevel: 15,
            description: desc([
                "When you successfully attack with hellfire, force the target to make a Wisdom saving throw.",
                "On failure, they are cursed with disadvantage on all saving throws for a duration equal to your paladin level."
            ])
        },
        subclassfeature20: {
            name: "Damning Hellfire",
            source: ["OoGK", 1],
            minlevel: 20,
            description: desc([
                "Sacrifice a round of hellfire to cause an enemy's soul to be destroyed if they die while cursed.",
                "A creature whose soul is destroyed can only be revived by true resurrection or wish."
            ]),
            recovery: "long rest",
            usages: 1,
            action: ["action", ""]
        }
    },
    spellcastingExtra: ["hellish rebuke", "witch bolt", "darkness", "ray of enfeeblement", 
                        "dispel magic", "fireball", "banishment", 
                        "greater invisibility", "geas", "modify memory"]
});
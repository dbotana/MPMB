//push to git

var iFileName = "Warlock - The Eternal Citadel [Rocky].js";
RequiredSheetVersion(13);

SourceList["TEC"] = {
    name: "Warlock - The Eternal Citadel",
    abbreviation: "TEC",
    abbreviationSpellsheet: "TC",
    group: "Rocky's Homebrew",
    date: "2023/8/23"
};

AddSubClass("warlock", "the eternal citadel", {
    regExpSearch: /^(?=.*eternal)(?=.*citadel)(?=.*warlock).*$/i,
    subname: "the Eternal Citadel",
    source: [["HB", 3]],
    spellcastingExtra: ["alarm", "sanctuary", "arcane lock", "warding bond", "glyph of warding", "tiny hut", "resilient sphere", "stoneskin", "passwall", "wall of stone"],
    features: {
        "subclassfeature1": {
            name: "Righteous Guardian",
            source: [["HB", 3]],
            minlevel: 1,
            description: "\n   " + "Whenever me or an ally within 30 ft takes damage, I can use my reaction to reduce it" + "\n   " + "The damage is reduced by half my warlock level + my Charisma modifier" + "\n   " + "I can use this feature a number of times equal to my Charisma mod, regaining all uses after a long rest",
            action: ["reaction", " (when damage is taken)"],
            recovery: "long rest",
            usages: "Charisma mod per ",
            usagescalc: "event.value = Math.max(1, this.getField('Cha Mod').value);"
        },
        "subclassfeature1": {
            name: "Righteous Guardian",
            source: [["HB", 3]],
            minlevel: 1,
            description: desc([
                "Whenever me or an ally within 30 ft takes damage, I can use my reaction to reduce it",
                "The damage is reduced by half my warlock level + my Charisma modifier",
                "I can use this feature a number of times equal to my Charisma mod, regaining all uses after a long rest"
            ]),
            action: ["reaction", " (when damage is taken)"],
            recovery: "long rest",
            usages: "Charisma mod per ",
            usagescalc: "event.value = Math.max(1, this.getField('Cha Mod').value);",
            additional: levels.map(function (n) {
                return n < 1 ? "" : "Reduce damage by: " + Math.floor(n / 2) + "+CHA";
            })
        },

        "subclassfeature6": {
            name: "Force of Preservation",
            source: [["HB", 3]],
            minlevel: 6,
            description: "\n   " + "When I take damage, I can use my reaction to become immune to that damage" + "\n   " + "I also gain temporary hit points equal to half my warlock level" + "\n   " + "Once used, I can't use this again until after a short or long rest",
            action: ["reaction", " (when I take damage)"],
            recovery: "short rest",
            usages: 1,
            additional: levels.map(function (n) {
                return n < 1 ? "" : Math.floor(n / 2)+" temp HP";
            })
        },
        "subclassfeature10": {
            name: "Builder of Walls",
            source: [["HB", 3]],
            minlevel: 10,
            description: "\n   " + "I can add two wall spells (from a specific list) to my spells known" + "\n  " + "I can cast one of these spells without expending a spell slot once per long rest.",
            additional: levels.map(function (n) {
                return n < 10 ? "" : 2 + " wall spells";
            }),
            spellcastingBonus: {
                name: "Builder of Walls",
                spells: ["wall of stone", "wall of light", "passwall", "wall of fire", "wind wall", "wall of water", "wall of sand"],
                selection: ["wall of stone", "wall of light", "passwall", "wall of fire", "wind wall", "wall of water", "wall of sand"],
                times: levels.map(function (n) {
                    return n < 10 ? 0 : 2;
                })
            }
        },
        "subclassfeature14": {
            name: "Bound to the Aeons",
            source: [["HB", 3]],
            minlevel: 14,
            description: "\n   " + "I no longer age, cannot be magically aged, and don't require food or water" + "\n   " + "As an action, I can mark a location within 200 ft, causing a beam to hit it next turn" + "\n   " + "Creatures in the area make a Charisma save or take 7d6 radiant and 7d6 force damage and are blinded" + "\n   " + "On a successful save, they take half damage and aren't blinded" + "\n   " + "The beam passes through obstacles without damaging them" + "\n   " + "Once used, I can't use this again until after a long rest",
            action: ["action", ""],
            recovery: "long rest",
            usages: 1
        }
    }
});

AddWarlockInvocation("Alliance Upheld (prereq: 7th level, Eternal Citadel patron)", {
    name: "Alliance Upheld",
    description: "\n   " + "When using Righteous Guardian on an ally with 1+ HP, they regain hit points equal to my Charisma modifier",
    source: ["HB", 3],
    submenu: "[requires Eternal Citadel patron]",
    prereqeval: function (v) { return v.warlocksubclasschoice == 'the eternal citadel' && classes.known.warlock.level >= 7; },
}),

    AddWarlockInvocation("Steadfast Companion (prereq: Eternal Citadel patron, Pact of the Chain feature)", {
        name: "Steadfast Companion",
        description: "\n   " + "If I have an animate shield as my familiar, it gains additional hit points equal to my warlock level" + "\n   " + "I can cast the mending and light cantrips",
        source: ["HB", 3],
        submenu: "[requires Eternal Citadel patron]",
        spellcastingBonus: {
            name: "Steadfast Companion",
            spells: ["mending", "light"],
            selection: ["mending", "light"],
            firstCol: 'atwill'
        },
        prereqeval: function (v) { return v.warlocksubclasschoice == 'the eternal citadel' && GetFeatureChoice('class', 'warlock', 'pact boon') == 'pact of the chain'; }
    }),

    AddWarlockInvocation("Hammer of Dawn (prereq: Eternal Citadel patron, Pact of the Blade feature)", {
        name: "Hammer of Dawn",
        description: "\n   " + "I can create a weapon that deals bludgeoning damage from stone infused with golden metal using Pact of the Blade" + "\n   " + "I can choose for it to deal force damage instead" + "\n   " + "I use my Charisma mod on its attack and damage rolls" + "\n   " + "Targets hit by it can't make opportunity attacks targeting others than me until my next turn",
        source: ["HB", 3],
        submenu: "[requires Eternal Citadel patron]",
        prereqeval: function (v) { return v.warlocksubclasschoice == 'the eternal citadel' && GetFeatureChoice('class', 'warlock', 'pact boon') == 'pact of the blade'; },
        action: ["action", " (create weapon)"],
        calcChanges: {
            atkAdd: [
                function (fields, v) {
                    if (What('Cha Mod') > What(AbilityScores.abbreviations[fields.Mod - 1] + ' Mod') && /^(?=.*hammer of dawn).*$/i.test(v.WeaponText)) {
                        fields.Mod = 6;
                        fields.Damage_Type = 'Force';
                        fields.Description += (fields.Description ? '; ' : '') + "hit targets can only opportunity attack me until my next turn";
                    };
                },
                "If I include the words 'Hammer of Dawn' in the name of a bludgeoning weapon, it gets treated as the weapon I imbued to use Charisma for its attack and damage rolls instead of Strength, if my Charisma modifier is higher than the ability it would otherwise use. This weapon also deals Force damage and has a special effect on hit targets."
            ]
        }
    }),
    // Add the Invested Defense shield item
    MagicItemsList["invested defense"] = {
        name: "Invested Defense",
        source: ["HB", 3],
        type: "shield",
        description: "While wielding my pact weapon, I gain an additional +2 bonus to AC, similar to a standard shield.",
        descriptionFull: "While wielding my pact weapon, the wielder gains an additional +2 bonus to AC, similar to a standard shield.",
        allowDuplicates: true,
        shieldAdd: "Invested Defense"
    };

// Update the Invested Defense Invocation
AddWarlockInvocation("Invested Defense (prereq: Eternal Citadel patron, Pact of the Blade feature)", {
    name: "Invested Defense",
    description: "\n   " + "I gain proficiency in shields" + "\n   " + "When wielding my pact weapon, I'm considered to have a shield equipped",
    source: ["HB", 3],
    submenu: "[requires Eternal Citadel patron]",
    armorProfs: [false, false, false, true], // Added shield proficiency
    shieldAdd: "Invested Defense",
    prereqeval: function (v) { return v.warlocksubclasschoice == 'the eternal citadel' && GetFeatureChoice('class', 'warlock', 'pact boon') == 'pact of the blade'; }
}),

    AddWarlockInvocation("Preserved Document (prereq: Eternal Citadel patron, Pact of the Tome feature)", {
        name: "Preserved Document",
        source: ["HB", 3],
        submenu: "[requires Eternal Citadel patron]",
        description: "\n   " + "I'm instantly aware if other parties try to break terms of contracts or agreements signed by me",
        prereqeval: function (v) { return v.warlocksubclasschoice == 'the eternal citadel' && GetFeatureChoice('class', 'warlock', 'pact boon') == 'pact of the tome'; }
    }),

    AddWarlockInvocation("Servants of the Citadel (prereq: Eternal Citadel patron)", {
        name: "Servants of the Citadel",
        description: "\n   " + "When I deal damage with a cantrip or weapon attack, I can use a bonus action to give an ally within 60 ft temporary hit points equal to my Charisma mod for 1 minute",
        source: ["HB", 3],
        submenu: "[requires Eternal Citadel patron]",
        prereqeval: function (v) { return v.warlocksubclasschoice == 'the eternal citadel'; },
        action: ['bonus action', ' (after dealing damage) ally +CHA temp HP']
    });
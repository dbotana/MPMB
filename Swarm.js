/* -WHAT IS THIS?-
This file adds optional material to "MPMB's Character Record Sheet" found at https://flapkan.com/mpmb/charsheets
Import this file using the "Add Extra Materials" bookmark.
-KEEP IN MIND-
It is recommended to enter the code in a fresh sheet before adding any other information (i.e. before making your character with it).
*/

/* -INFORMATION-
Subject: Species
Effect: This script adds the Swarm race from the "Walrock Homebrew" source
Code by: Rocky
Date: 2025-05-18 (sheet v13)
*/

var iFileName = "Swarm.js";

// Define the source
SourceList["WH"] = {
    name : "Walrock Homebrew",
    abbreviation : "WH",
    group : "Homebrew",
    url : "https://walrock-homebrew.blogspot.com/",
    date : "2025/05/18"
};

// Base Swarm Race
RaceList["swarm"] = {
    regExpSearch : /swarm/i,
    name : "Swarm",
    sortname : "Swarm",
    source : [["WH", 0]],
    plural : "Swarms",
    size : 3, // Medium
    speed : {
        walk : { spd : 30, enc : 20 }
    },
    languageProfs : ["Common", 1], // Common and one other language
    age : " effectively immortal as long as you replace organisms that die off",
    scores : [0, 2, 0, 1, 0, 0], // +2 Dex, +1 Int
    trait : "Swarm " +
        "\n \u2022 Telepathy: I can communicate via two-way telepathy with any creature that is within 30 feet of me, if that creature knows at least one language." +
        "\n \u2022 Dissonance: I can use verbal components of spells even if I do not speak." +
        "\n \u2022 Aberrant Nature: I have two creature types: humanoid and aberration. I can be affected by a game effect if it works on either of my creature types." +
        "\n \u2022 Reconstitute: During a short rest, I can expend hit dice to maximize a number of hit dice equal to 1d4-1 (or 1d4+1 if consuming a nearby corpse). Once used, this ability requires a long rest to use again." +
        "\n \u2022 Amorphous Form: As an action, I can transform into an amorphous swarm, gaining resistance to bludgeoning, piercing, and slashing damage, and can fit through 1-inch gaps. In this form, I can only use Dash, Disengage, or Dodge actions. At 5th level, I can use this ability as a reaction when reduced to 0 hit points. After using this ability, I need a short or long rest before using it again." +
        "\n \u2022 Amorphous Talent: I gain an additional ability while in amorphous form, based on the variant I choose.",
    features : {
        "amorphous form" : {
            name : "Amorphous Form",
            minlevel : 1,
            usages : 1,
            recovery : "short rest",
            action : ["action", ""]
        },
        "reconstitute" : {
            name : "Reconstitute",
            minlevel : 1,
            usages : 1,
            recovery : "long rest",
        }
    },
};

// Define a common trait string for all variants
var Swarm_trait = "\n \u2022 Telepathy: I can communicate via two-way telepathy with any creature that is within 30 feet of me, if that creature knows at least one language." +
    "\n \u2022 Dissonance: I can use verbal components of spells even if I do not speak." +
    "\n \u2022 Aberrant Nature: I have two creature types: humanoid and aberration. I can be affected by a game effect if it works on either of my creature types." +
    "\n \u2022 Reconstitute: During a short rest, I can expend hit dice to maximize a number of hit dice equal to 1d4-1 (or 1d4+1 if consuming a nearby corpse). Once used, this ability requires a long rest to use again." +
    "\n \u2022 Amorphous Form: As an action, I can transform into an amorphous swarm, gaining resistance to bludgeoning, piercing, and slashing damage, and can fit through 1-inch gaps. In this form, I can only use Dash, Disengage, or Dodge actions. At 5th level, I can use this ability as a reaction when reduced to 0 hit points. After using this ability, I need a short or long rest before using it again.";

// Define Amorphous Talent variants
AddRacialVariant("swarm", "biting", {
    regExpSearch : /biting/i,
    name : "Biting Swarm",
    sortname : "Swarm, Biting",
    source : [["WH", 0]],
    weaponOptions : [{
        baseWeapon : "unarmed strike",
        regExpSearch : /^(?=.*swarm)(?=.*bite).*$/i,
        name : "Swarm Bite",
        source : [["WH", 0]],
        ability : 1,
        damage : [1, 6, "piercing"],
        description : "Only usable in amorphous form; Finesse"
    }],
    trait : "Biting Swarm " + Swarm_trait +
        "\n \u2022 Biting: While in amorphous form, I gain a bite attack that deals 1d6 + Strength or Dexterity modifier piercing damage."
});

AddRacialVariant("swarm", "burrowing", {
    regExpSearch : /burrowing/i,
    name : "Burrowing Swarm",
    sortname : "Swarm, Burrowing",
    source : [["WH", 0]],
    speed : {
        walk : { spd : 30, enc : 20 },
        burrow : { spd : "walk", enc : "walk" }
    },
    trait : "Burrowing Swarm " + Swarm_trait +
        "\n \u2022 Burrowing: While in amorphous form, I gain a burrow speed equal to my movement speed."
});

AddRacialVariant("swarm", "buzzing", {
    regExpSearch : /buzzing/i,
    name : "Buzzing Swarm",
    sortname : "Swarm, Buzzing",
    source : [["WH", 0]],
    speed : {
        walk : { spd : 10, enc : 5 },
        fly : { spd : 25, enc : 15 }
    },
    trait : "Buzzing Swarm " + Swarm_trait +
        "\n \u2022 Buzzing: While in amorphous form, my walking speed becomes 10 feet, but I gain a flying speed of 25 feet with the hover property."
});

AddRacialVariant("swarm", "multitudinous", {
    regExpSearch : /multitudinous/i,
    name : "Multitudinous Swarm",
    sortname : "Swarm, Multitudinous",
    source : [["WH", 0]],
    trait : "Multitudinous Swarm " + Swarm_trait +
        "\n \u2022 Multitudinous: While in amorphous form, I gain temporary hit points equal to my Constitution modifier plus my proficiency bonus."
});

AddRacialVariant("swarm", "skittering", {
    regExpSearch : /skittering/i,
    name : "Skittering Swarm",
    sortname : "Swarm, Skittering",
    source : [["WH", 0]],
    trait : "Skittering Swarm " + Swarm_trait +
        "\n \u2022 Skittering: While in amorphous form, I cannot be the target of opportunity attacks."
});

// Swarm Feats
FeatsList["swarm control"] = {
    name : "Swarm Control",
    source : [["WH", 0]],
    prerequisite : "Being a Swarm",
    prereqeval : function(v) { return (/swarm/).test(CurrentRace.known); },
    description : "I know the infestation cantrip. I can cast animal messenger and conjure animals once per long rest (only targeting or conjuring insects, rodents, worms, larvae, or similar creatures).",
    spellcastingBonus : [{
        name : "Swarm Control",
        spells : ["infestation"],
        selection : ["infestation"],
        firstCol : 'atwill'
    }, {
        name : "Swarm Control",
        spells : ["animal messenger"],
        selection : ["animal messenger"],
        firstCol : 'oncelr'
    }, {
        name : "Swarm Control",
        spells : ["conjure animals"],
        selection : ["conjure animals"],
        firstCol : 'oncelr'
    }],
    spellcastingAbility : 4
};

FeatsList["swarm magic"] = {
    name : "Swarm Magic",
    source : [["WH", 0]],
    prerequisite : "Being a Swarm",
    prereqeval : function(v) { return (/swarm/).test(CurrentRace.known); },
    description : "I can cast disguise self at will. I can cast blur, detect thoughts, and fear once each per long rest.",
    spellcastingBonus : [{
        name : "Swarm Magic",
        spells : ["disguise self"],
        selection : ["disguise self"],
        firstCol : 'atwill'
    }, {
        name : "Swarm Magic",
        spells : ["blur"],
        selection : ["blur"],
        firstCol : 'oncelr'
    }, {
        name : "Swarm Magic",
        spells : ["detect thoughts"],
        selection : ["detect thoughts"],
        firstCol : 'oncelr'
    }, {
        name : "Swarm Magic",
        spells : ["fear"],
        selection : ["fear"],
        firstCol : 'oncelr'
    }],
    spellcastingAbility : 4
};

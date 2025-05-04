/* -WHAT IS THIS?-
This file adds optional material to "MPMB's Character Record Sheet" found at https://flapkan.com/mpmb/charsheets
Import this file using the "Add Extra Materials" bookmark.
-KEEP IN MIND-
It is recommended to enter the code in a fresh sheet before adding any other information (i.e. before making your character with it).
*/

/* -INFORMATION-
Subject: Species
Effect: This script adds the Hengeyokai races from the "Hengeyokai" homebrew source created by GreyFartBR https://www.reddit.com/user/GreyFartBR/
Code by:  Rocky
Date: 2025-05-04 (sheet v13)
*/
var iFileName = "Hengeyokai.js";

// Define the source
SourceList["HGY"] = {
    name : "Hengeyokai",
    abbreviation : "HGY",
    group : "Rocky's Homebrew",
    url : "https://www.reddit.com/user/GreyFartBR/",
    date : "2025/05/03"
};

// Base Hengeyokai Race
RaceList["hengeyokai"] = {
    regExpSearch : /hengeyokai|henge/i,
    name : "Hengeyokai",
    sortname : "Hengeyokai",
    source : [["HGY", 0]],
    plural : "Hengeyokai",
    size : [3, 4], // Can be Medium or Small
    speed : {
        walk : { spd : 30, enc : 20 }
    },
    vision : [["Darkvision", 60]],
    languageProfs : ["Common", 1],
    age : " can live up to 1000 years",
    scoresGeneric : false,
    trait : "Hengeyokai (+1 Charisma, and subrace bonuses)" +
        "\n \u2022 Nature Spirit: My creature type is fey, rather than humanoid." +
        "\n \u2022 Spirit Form: As an action, I can transform into my animal form. My game statistics remain the same except for characteristics listed in my subrace." +
        "\n \u2022 Animal Communication: I can speak with animals of the same type as my animal form in both forms." +
        "\n \u2022 Yokai Magic: I know one cantrip from the Sorcerer spell list. Charisma is my spellcasting ability for it.",
    spellcastingAbility : 6, // Charisma
    spellcastingBonus : [{
        name : "Yokai Magic",
        "class" : "sorcerer",
        level : [0, 0],
        firstCol : 'atwill'
    }],
    action : [["action", "Spirit Form (transform)"]]
};
var Hengeyokai_trait = (typePF ? "\n" : "") + " \u2022 Nature Spirit: My creature type is fey, rather than humanoid." +
"\n \u2022 Spirit Form: As an action, I can transform into my animal form. My game statistics remain the same except for characteristics listed in my subrace." + 
"\n \u2022 Animal Communication: I can speak with animals of the same type as my animal form in both forms." +
"\n \u2022 Yokai Magic: I know one cantrip from the Sorcerer spell list. Charisma is my spellcasting ability for it.";
// Carp Henge subrace
AddRacialVariant("hengeyokai", "carp", {
    regExpSearch : /^(?=.*hengeyokai)(?=.*carp)|koi/i,
    name : "Carp Hengeyokai",
    sortname : "Hengeyokai, Carp",
    source : [["HGY", 0]],
    plural : "Carp Hengeyokai",
    skills : ["Athletics", "Survival"],
    speed : {
        walk : { spd : 30, enc : 20 },
        swim : { spd : "walk", enc : "walk" }
    },
    scores : [0, 1, 1, 0, 0, 1], // +1 Dex, +1 Con
    weaponOptions : [{
        baseWeapon : "unarmed strike",
        regExpSearch : /^(?=.*carp)(?=.*bite).*$/i,
        name : "Carp Bite",
        source : [["HGY", 0]],
        ability : 1,
        damage : [1, "", "piercing"],
        description : "Only usable in carp form"
    }],
    trait : "Carp Hengeyokai (+1 Dexterity, +1 Constitution, +1 Charisma)" + Hengeyokai_trait +
        "\n \u2022 Carp Spirit: When I use Spirit Form, I transform into a carp. As a carp, my size is Tiny, my base walking speed is 0, I have a swim speed of 40 feet, and my unarmed strikes are bites. I can only breathe underwater in carp form." +
        "\n \u2022 Amphibious: In humanoid form, I can breathe air and water."
});

// Cat Henge subrace
AddRacialVariant("hengeyokai", "cat", {
    regExpSearch : /^(?=.*hengeyokai)(?=.*cat)|neko/i,
    name : "Cat Hengeyokai",
    sortname : "Hengeyokai, Cat",
    source : [["HGY", 0]],
    plural : "Cat Hengeyokai",
    skills : ["Acrobatics", "Stealth"],
    speed : {
        walk : { spd : 30, enc : 20 },
        climb : { spd : 30, enc : 20 }
    },
    scores : [0, 2, 0, 0, 0, 1], // +2 Dex
    vision : [["Keen Smell", 0], ["Darkvision", 60]],
    weaponOptions : [{
        baseWeapon : "unarmed strike",
        regExpSearch : /^(?=.*cat)(?=.*claws).*$/i,
        name : "Cat Claws",
        source : [["HGY", 0]],
        ability : 2,
        damage : [1, "", "slashing"],
        description : "Finesse; Only usable in cat form"
    }],
    trait : "Cat Hengeyokai (+2 Dexterity, +1 Charisma)" + Hengeyokai_trait +
        "\n \u2022 Cat Spirit: When I use Spirit Form, I transform into a cat. As a cat, my size is Tiny, my base speed becomes 40 feet, and my unarmed strikes are claws dealing slashing damage." +
        "\n \u2022 Keen Smell: I have advantage on Wisdom (Perception) checks that rely on smell." +
        "\n \u2022 Climber: I have a climbing speed of 30 feet in both forms."
});

// Dog Henge subrace
AddRacialVariant("hengeyokai", "dog", {
    regExpSearch : /^(?=.*hengeyokai)(?=.*dog)|inu/i,
    name : "Dog Hengeyokai",
    sortname : "Hengeyokai, Dog",
    source : [["HGY", 0]],
    plural : "Dog Hengeyokai",
    skills : ["Athletics", "Insight"],
    savetxt : { adv_vs : ["frightened", "prone"] },
    scores : [2, 0, 0, 0, 0, 1], // +2 Str
    vision : [["Keen Smell and Hearing", 0], ["Darkvision", 60]],
    weaponOptions : [{
        baseWeapon : "unarmed strike",
        regExpSearch : /^(?=.*dog)(?=.*bite).*$/i,
        name : "Dog Bite",
        source : [["HGY", 0]],
        ability : 1,
        damage : [1, 4, "piercing"],
        description : "Only usable in dog form"
    }],
    trait : "Dog Hengeyokai (+2 Strength, +1 Charisma)" + Hengeyokai_trait +
        "\n \u2022 Dog Spirit: When I use Spirit Form, I transform into a dog. As a dog, my size is Small, my base speed becomes 40 feet, and my unarmed strikes are bites dealing 1d4 + my Strength modifier piercing damage." +
        "\n \u2022 Keen Smell and Hearing: I have advantage on Wisdom (Perception) checks that rely on smell or hearing." +
        "\n \u2022 Steadfast and Loyal: I have advantage on saving throws against being frightened or knocked prone."
});

// Fox Henge subrace
AddRacialVariant("hengeyokai", "fox", {
    regExpSearch : /^(?=.*hengeyokai)(?=.*fox)|kitsune/i,
    name : "Fox Hengeyokai",
    sortname : "Hengeyokai, Fox",
    source : [["HGY", 0]],
    plural : "Fox Hengeyokai",
    skills : [["Deception", "full"], "Persuasion"],
    scores : [0, 1, 0, 0, 0, 2], // +1 Dex, +1 Cha (total +2 Cha with base)
    vision : [["Keen Smell and Hearing", 0]],
    weaponOptions : [{
        baseWeapon : "unarmed strike",
        regExpSearch : /^(?=.*fox)(?=.*bite).*$/i,
        name : "Fox Bite",
        source : [["HGY", 0]],
        ability : 1,
        damage : [1, 4, "piercing"],
        description : "Only usable in fox form"
    }],
    trait : "Fox Hengeyokai (+1 Dexterity, +2 Charisma total)" + Hengeyokai_trait +
        "\n \u2022 Fox Spirit: When I use Spirit Form, I transform into a fox. As a fox, my size is Tiny, my base speed becomes 40 feet, and my unarmed strikes are bites dealing 1d4 + my Strength modifier piercing damage." +
        "\n \u2022 Keen Smell and Hearing: I have advantage on Wisdom (Perception) checks that rely on smell or hearing.",
});

// Raccoon Dog Henge subrace
AddRacialVariant("hengeyokai", "raccoon dog", {
    regExpSearch : /^(?=.*hengeyokai)(?=.*raccoon)|tanuki/i,
    name : "Raccoon Dog Hengeyokai",
    sortname : "Hengeyokai, Raccoon Dog",
    source : [["HGY", 0]],
    plural : "Raccoon Dog Hengeyokai",
    skills : ["Insight", "Persuasion"],
    scores : [0, 0, 1, 0, 0, 2], // +1 Con, +1 Cha (total +2 Cha with base)
    speed : {
        walk : { spd : 30, enc : 20 },
        climb : { spd : 30, enc : 20 }
    },
    vision : [["Keen Smell", 0], ["Darkvision", 60]],
    weaponOptions : [{
        baseWeapon : "unarmed strike",
        regExpSearch : /^(?=.*raccoon)(?=.*claws).*$/i,
        name : "Raccoon Dog Claws",
        source : [["HGY", 0]],
        ability : 2,
        damage : [1, 4, "slashing"],
        description : "Finesse; Only usable in raccoon dog form"
    }],
    trait : "Raccoon Dog Hengeyokai (+1 Constitution, +2 Charisma total)" + Hengeyokai_trait +
        "\n \u2022 Charm of a Merchant: I have advantage on Charisma (Persuasion) and Charisma (Deception) checks regarding money." +
        "\n \u2022 Raccoon Dog Spirit: When I use Spirit Form, I transform into a raccoon dog. As a raccoon dog, my size is Tiny, and my unarmed strikes are claws dealing 1d4 + my Dexterity modifier slashing damage." +
        "\n \u2022 Keen Smell: I have advantage on Wisdom (Perception) checks that rely on smell."
    });

// Sparrow Henge subrace
AddRacialVariant("hengeyokai", "sparrow", {
    regExpSearch : /^(?=.*hengeyokai)(?=.*sparrow)|suzume/i,
    name : "Sparrow Hengeyokai",
    sortname : "Hengeyokai, Sparrow",
    source : [["HGY", 0]],
    plural : "Sparrow Hengeyokai",
    skills : ["Acrobatics", "Insight"],
    scores : [0, 1, 0, 0, 1, 1], // +1 Dex, +1 Wis
    weaponOptions : [{
        baseWeapon : "unarmed strike",
        regExpSearch : /^(?=.*sparrow)(?=.*beak).*$/i,
        name : "Sparrow Beak",
        source : [["HGY", 0]],
        ability : 1,
        damage : [1, "", "piercing"],
        description : "Only usable in sparrow form"
    }],
    trait : "Sparrow Hengeyokai (+1 Dexterity, +1 Wisdom, +1 Charisma)" + Hengeyokai_trait +
        "\n \u2022 Sparrow Spirit: When I use Spirit Form, I transform into a sparrow. As a sparrow, my size is Tiny, my base speed becomes 10 feet, I have a fly speed of 50 feet, and my unarmed strikes are my beak.",
    features : {
        "sparrow form" : {
            name : "Sparrow Form",
            minlevel : 1,
            action : ["action", "Sparrow Form (Spirit Form)"],
            speeds : {
                fly : { spd : 50, enc : 30 }
            }
        }
    }
});

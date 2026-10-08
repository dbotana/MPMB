/* -WHAT IS THIS?-
This file adds optional material to "MPMB's Character Record Sheet" found at https://flapkan.com/mpmb/charsheets
Import this file using the "Add Extra Materials" bookmark.
-KEEP IN MIND-
It is recommended to enter the code in a fresh sheet before adding any other information (i.e. before making your character with it).
*/

/* -INFORMATION-
Subject: Species
Effect: This script adds the Gastrosapien race, with its five subraces, from the D&D Wiki homebrew page "Gastrosapien (5e Race)"
        https://www.dandwiki.com/wiki/Gastrosapien_(5e_Race)
Code by:  Claude
Date: 2026-10-07 (sheet v13)
*/
var iFileName = "Gastrosapien.js";

// Define the source
SourceList["GSP"] = {
    name : "Gastrosapien (5e Race)",
    abbreviation : "GSP",
    group : "D&D Wiki Homebrew",
    url : "https://www.dandwiki.com/wiki/Gastrosapien_(5e_Race)",
    date : "2025/05/23"
};

// Traits shared by all gastrosapiens, reused in every subrace
var Gastrosapien_trait = "\n • Invertebrate: I have advantage on saves against taking non-magical bludgeoning damage." +
    "\n • Slime Coated: Checks to grapple me are made with disadvantage. This doesn't work while I'm in my shell or if I haven't fulfilled my daily water requirement." +
    "\n • Shell Defense: As an action or reaction, I can withdraw into my shell. Until I emerge: +3 AC, advantage on Str and Con saves, I'm prone, my speed is 0, disadvantage on Dex saves, and I can't take reactions. The only action I can take is a bonus action to emerge." +
    "\n • Salt Vulnerability: I can't eat food that has salt, nor come in contact with saltwater." +
    "\n • Monstrous Nature: My creature type is monstrosity instead of humanoid, so I'm immune to spells that specifically target humanoids, like crown of madness or dominate person.";

// Base Gastrosapien Race
RaceList["gastrosapien"] = {
    regExpSearch : /gastrosapien/i,
    name : "Gastrosapien",
    sortname : "Gastrosapien",
    source : [["GSP", 0]],
    plural : "Gastrosapiens",
    size : 3, // Medium
    speed : {
        walk : { spd : 25, enc : 15 },
        climb : { spd : 25, enc : 15 }
    },
    languageProfs : ["Common", "Gastrosapien"],
    scores : [0, 0, 2, 1, 0, 0], // +2 Con, +1 Int
    savetxt : { adv_vs : ["non-magical bludgeoning damage"] },
    action : [
        ["action", "Shell Defense (withdraw)"],
        ["reaction", "Shell Defense (withdraw)"],
        ["bonus action", "Shell Defense (emerge)"]
    ],
    trait : "Gastrosapien (+2 Constitution, +1 Intelligence, and subrace features)" + Gastrosapien_trait
};

// Corrosive Gastrosapien
AddRacialVariant("gastrosapien", "corrosive", {
    regExpSearch : /^(?=.*gastrosapien)(?=.*corrosive).*$/i,
    name : "Corrosive Gastrosapien",
    sortname : "Gastrosapien, Corrosive",
    source : [["GSP", 0]],
    plural : "Corrosive Gastrosapiens",
    trait : "Corrosive Gastrosapien (+2 Constitution, +1 Intelligence)" + Gastrosapien_trait +
        "\n • Metal Corrosion: As a reaction when a non-magical metal weapon hits me, after damage the wielder makes a Dex save or the weapon takes a permanent, cumulative -1 penalty to damage rolls (destroyed at -5). Non-magical metal ammunition that hits me is destroyed. Usable my proficiency bonus times per long rest." +
        "\n • Swamp Walker: I ignore difficult terrain caused by muddy or swampy ground.",
    features : {
        "metal corrosion" : {
            name : "Metal Corrosion",
            minlevel : 1,
            usages : "Proficiency bonus per ",
            usagescalc : "event.value = How('Proficiency Bonus');",
            recovery : "long rest",
            action : ["reaction", ""],
            tooltip : "As a reaction, when a non-magical weapon made of metal hits me, I can attempt to corrode it. After dealing damage, the holder of the weapon must make a Dexterity saving throw (DC = 8 + my Constitution modifier + my proficiency bonus). On a failed save, the weapon takes a permanent and cumulative -1 penalty to damage rolls. If its penalty drops to -5, the weapon is destroyed. Non-magical metal ammunition that hits me can be destroyed with this reaction after dealing damage."
        }
    }
});

// Toxic Gastrosapien
AddRacialVariant("gastrosapien", "toxic", {
    regExpSearch : /^(?=.*gastrosapien)(?=.*toxic).*$/i,
    name : "Toxic Gastrosapien",
    sortname : "Gastrosapien, Toxic",
    source : [["GSP", 0]],
    plural : "Toxic Gastrosapiens",
    skills : ["Intimidation"],
    dmgres : ["Poison"],
    trait : "Toxic Gastrosapien (+2 Constitution, +1 Intelligence)" + Gastrosapien_trait +
        "\n • Vibrant Warning: I'm proficient in the Intimidation skill." +
        "\n • Toxicity: I'm resistant to poison damage. I can spend at least 1 hour to harvest one vial of poison from my own body. It is slimy, sticky, and discolored, so it can't be sold in normal stores, and it loses its potency at the end of my next long rest."
});

// Glueskin Gastrosapien
AddRacialVariant("gastrosapien", "glueskin", {
    regExpSearch : /^(?=.*gastrosapien)(?=.*glue).*$/i,
    name : "Glueskin Gastrosapien",
    sortname : "Gastrosapien, Glueskin",
    source : [["GSP", 0]],
    plural : "Glueskin Gastrosapiens",
    trait : "Glueskin Gastrosapien (+2 Constitution, +1 Intelligence)" + Gastrosapien_trait +
        "\n • Adhesive Grip: I have advantage on Strength (Athletics) checks to grapple." +
        "\n • Slime Puddle: As an action, I coat all surfaces within 15 ft in slime (difficult terrain) for 1 minute. Creatures starting their turn on it or walking onto it make a Strength save (DC 8 + Con mod + prof bonus) or are restrained. A restrained creature can use its action to make a Strength check against the same DC to end it. Once per long rest.",
    features : {
        "slime puddle" : {
            name : "Slime Puddle",
            minlevel : 1,
            usages : 1,
            recovery : "long rest",
            action : ["action", ""],
            additional : "15-ft radius; Str save or restrained",
            tooltip : "As an action, I can produce a mass of slime which fills the area surrounding me. Surfaces within 15 feet of me become coated in this slime and are considered difficult terrain. A creature that starts its turn standing on the slime or that walks onto it during its turn must make a Strength saving throw (DC = 8 + my Constitution modifier + my proficiency bonus). On a failed save, the creature is restrained by the sticky goo for up to one minute. A creature restrained by the slime can use its action to make a Strength check against the same DC on its turn. If it succeeds, it is no longer restrained."
        }
    }
});

// Spectral Gastrosapien
AddRacialVariant("gastrosapien", "spectral", {
    regExpSearch : /^(?=.*gastrosapien)(?=.*spectral).*$/i,
    name : "Spectral Gastrosapien",
    sortname : "Gastrosapien, Spectral",
    source : [["GSP", 0]],
    plural : "Spectral Gastrosapiens",
    skills : ["Stealth"],
    trait : "Spectral Gastrosapien (+2 Constitution, +1 Intelligence)" + Gastrosapien_trait +
        "\n • Otherworldly Transparency: As an action (or bonus action while in my shell), I turn transparent until I move, make an attack, fall prone, or cast a spell with a somatic component. I'm invisible, can hide even when only lightly obscured or in plain sight, and Wisdom (Perception) checks to see me are at disadvantage while lightly or heavily obscured. Once per long rest." +
        "\n • Silent: I'm proficient in Stealth.",
    features : {
        "otherworldly transparency" : {
            name : "Otherworldly Transparency",
            minlevel : 1,
            usages : 1,
            recovery : "long rest",
            action : [["action", ""], ["bonus action", " (in shell)"]],
            tooltip : "As an action, I can alter my slime's coloration to become transparent until I move, make an attack, fall prone, or cast a spell with a somatic component, either voluntarily or because of some external effect. While using this ability, I am considered invisible and can attempt to hide even when only lightly obscured or even in plain sight. While lightly or heavily obscured, Wisdom (Perception) checks made to see me have disadvantage. I can also use this ability as a bonus action while using my Shell Defense."
        }
    }
});

// Nomadic Gastrosapien
AddRacialVariant("gastrosapien", "nomadic", {
    regExpSearch : /^(?=.*gastrosapien)(?=.*nomad).*$/i,
    name : "Nomadic Gastrosapien",
    sortname : "Gastrosapien, Nomadic",
    source : [["GSP", 0]],
    plural : "Nomadic Gastrosapiens",
    skillstxt : "Proficient in Nature or Survival",
    carryingCapacity : 2, // counts as one size larger
    trait : "Nomadic Gastrosapien (+2 Constitution, +1 Intelligence)" + Gastrosapien_trait +
        "\n • Mobile Home: I count as one size larger when determining my carrying capacity and the weight I can push or drag." +
        "\n • Well Traveled: I'm proficient in the Nature or Survival skill and can hold my breath for up to 1 hour at a time."
});

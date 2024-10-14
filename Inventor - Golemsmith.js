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
var iFileName = "Inventor - Golemsmith [Rocky].js";
RequiredSheetVersion(13);

SourceList["HB:G"] = {
	name : "Inventor - Golemsmith",
	abbreviation : "HB:G",
	abbreviationSpellsheet: "G",
	group : "Rocky's Homebrew",
	date : "2024/9/20"
};
AddSubClass("inventor", "golemsmith", {
  regExpSearch : /^(?=.*golem)(?=.*smith).*$/i,
  subname : "Golemsmith",
  fullname : "Golemsmith",
  source : [["KCCC", 12]],
  features : {
    "subclassfeature1" : {
      name : "Golemsmith's Proficiency",
      source : [["KCCC", 12]],
      minlevel : 1,
      description : desc([
        "I gain proficiency with smith's tools and tinker's tools"
      ]),
      toolProfs : ["Smith's tools", "Tinker's tools"]
    },
    "subclassfeature1.1" : {
      name : "Mechanical Golem",
      source : [["KCCC", 12]],
      minlevel : 1,
      description : desc([
        "I forge a mechanical golem to carry out my orders and protect me",
        "The golem is under my control and understands the languages I speak, but can't speak",
        "It obeys my commands as best it can and acts on my turn",
        "If I issue no commands, it takes no actions",
        "I can recreate it over four days of work (8 hours each day) and 100 gp of raw materials",
        "During a short rest, I can restore hit points to my golem equal to my Int mod + inventor level",
        "During a long rest, I can fully repair it, causing it to regain all its hit points",
        "Any spells I cast that cause the target to regain hit points ignore construct restrictions for my golem"
      ]),
      action : [["action", "Command Golem"]],
      creaturesAdd : ["Mechanical Golem"],
      creatureOptions : [{
        name : "Mechanical Golem",
        source : [["KCCC", 12]],
        size : 3,
        type : "construct",
        alignment : "unaligned",
        ac : 14,
        hp : 5,
        hd : [1, 8],
        speed : "30 ft",
        scores : [14, 12, 12, 4, 5, 1],
        damage_immunities : "poison, psychic",
        condition_immunities : "charmed, exhaustion, frightened, poisoned",
        senses : "passive Perception 7",
        languages : "understands the languages of its creator but can't speak",
        challengeRating : "0",
        proficiencyBonus : 2,
        attacksAction : 1,
        attacks : [{
          name : "Slam",
          ability : 1,
          damage : [1, 4, "bludgeoning"],
          range : "Melee (5 ft)",
          description : ""
        }],
        features : [{
          name : "Bound",
          description : "The golem is magically bound to its creator. As long as the creator and it are on the same plane of existence, the creator can telepathically call the golem to travel to it, and the golem knows the distance and direction to its creator."
        }],
        traits : [{
          name : "Immutable Form",
          description : "The golem is immune to any spell or effect that would alter its form."
        }]
      }]
    },
    "subclassfeature1.2" : {
      name : "Golem Chassis",
      source : [["KCCC", 13]],
      minlevel : 1,
      description : desc([
        "When I create my golem, I can choose one of the following chassis:",
        "\u2022 Launcher: Dex 16 (+3), speed 25 ft, ranged attack (Shoot: +5, 60/240 ft, 1d10+3 piercing)",
        "\u2022 Quadrupedal: Large, AC 16, Str/Con 16 (+3), speed 35 ft, melee attack (Bite: +5, 1d10+3 piercing)",
        "\u2022 Specialized: Two free upgrades, melee attack (Slam: +4, 1d8+2 bludgeoning)",
        "\u2022 Ironwrought: Str 16 (+3), proficient with shields, simple and martial weapons",
        "\u2022 Winged: Small, flying speed 30 ft, melee attack (Talon: +4, 1d8+2 slashing)",
        "\u2022 Flesh: Str 16 (+3), proficient with shields, simple and martial weapons"
      ]),
      choices : ["Launcher", "Quadrupedal", "Specialized", "Ironwrought", "Winged", "Flesh"],
      "launcher" : {
        name : "Launcher Chassis",
        description : desc([
          "My golem's Dexterity becomes 16 (+3), its speed becomes 25 feet, and it gains a ranged attack:",
          "Shoot: +5 to hit, range 60/240 ft., one target. Hit: 1d10+3 piercing damage"
        ]),
        changeeval : function(prefix, lvl) {
          var golemPrefix = ClassList['inventor'].features["subclassfeature1.1"].creaturesAdd[0];
          if (!golemPrefix) return;
          var theGolem = CurrentCompRace[golemPrefix];
          if (!theGolem) return;
          theGolem.scores[1] = 16;
          theGolem.speed = "25 ft";
          theGolem.attacks = [{
            name : "Shoot",
            ability : 2,
            damage : [1, 10, "piercing"],
            range : "60/240 ft",
            description : "",
            modifiers : [2, ""]
          }];
        }
      },
      "quadrupedal" : {
        name : "Quadrupedal Chassis",
        description : desc([
          "My golem becomes Large, its base AC becomes 16, its speed becomes 35 feet,",
          "Its Strength and Constitution become 16 (+3), and it gains a melee attack:",
          "Bite: +5 to hit, reach 5 ft., one target. Hit: 1d10+3 piercing damage"
        ]),
        changeeval : function(prefix, lvl) {
          var golemPrefix = ClassList['inventor'].features["subclassfeature1.1"].creaturesAdd[0];
          if (!golemPrefix) return;
          var theGolem = CurrentCompRace[golemPrefix];
          if (!theGolem) return;
          theGolem.size = 2;
          theGolem.ac = 16;
          theGolem.speed = "35 ft";
          theGolem.scores[0] = 16;
          theGolem.scores[2] = 16;
          theGolem.attacks = [{
            name : "Bite",
            ability : 1,
            damage : [1, 10, "piercing"],
            range : "Melee (5 ft)",
            description : ""
          }];
        }
      },
      "specialized" : {
        name : "Specialized Chassis",
        description : desc([
          "My golem starts with the basic golem statistics, but I can select two free upgrades for it",
          "that don't count against my upgrade total. It gains a melee attack:",
          "Slam: +4 to hit, reach 5 ft., one target. Hit: 1d8+2 bludgeoning damage"
        ]),
        changeeval : function(prefix, lvl) {
          var golemPrefix = ClassList['inventor'].features["subclassfeature1.1"].creaturesAdd[0];
          if (!golemPrefix) return;
          var theGolem = CurrentCompRace[golemPrefix];
          if (!theGolem) return;
          theGolem.attacks = [{
            name : "Slam",
            ability : 1,
            damage : [1, 8, "bludgeoning"],
            range : "Melee (5 ft)",
            description : ""
          }];
        }
      },
      "ironwrought" : {
        name : "Ironwrought Chassis",
        description : desc([
          "My golem's Strength becomes 16 (+3), it gains proficiency with shields,",
          "simple weapons, and martial weapons. It gains a melee attack:",
          "Slam: +5 to hit, reach 5 ft., one target. Hit: 1d4+3 bludgeoning damage"
        ]),
        changeeval : function(prefix, lvl) {
          var golemPrefix = ClassList['inventor'].features["subclassfeature1.1"].creaturesAdd[0];
          if (!golemPrefix) return;
          var theGolem = CurrentCompRace[golemPrefix];
          if (!theGolem) return;
          theGolem.scores[0] = 16;
          theGolem.attacks = [{
            name : "Slam",
            ability : 1,
            damage : [1, 4, "bludgeoning"],
            range : "Melee (5 ft)",
            description : ""
          }];
        }
      },
      "winged" : {
        name : "Winged Chassis",
        description : desc([
          "My golem becomes Small, it gains a flying speed of 30 feet, and it gains a melee attack:",
          "Talon: +4 to hit, reach 5 ft., one target. Hit: 1d8+2 slashing damage"
        ]),
        changeeval : function(prefix, lvl) {
          var golemPrefix = ClassList['inventor'].features["subclassfeature1.1"].creaturesAdd[0];
          if (!golemPrefix) return;
          var theGolem = CurrentCompRace[golemPrefix];
          if (!theGolem) return;
          theGolem.size = 4;
          theGolem.speed = "30 ft, fly 30 ft";
          theGolem.attacks = [{
            name : "Talon",
            ability : 1,
            damage : [1, 8, "slashing"],
            range : "Melee (5 ft)",
            description : ""
          }];
        }
      },
      "flesh" : {
        name : "Flesh Chassis",
        description : desc([
          "My golem's Strength becomes 16 (+3), it gains proficiency with shields,",
          "simple weapons, and martial weapons. It gains a melee attack:",
          "Slam: +5 to hit, reach 5 ft., one target. Hit: 1d4+3 bludgeoning damage",
          "I replace my smith's tools proficiency with leatherworker's tools proficiency"
        ]),
        changeeval : function(prefix, lvl) {
          var golemPrefix = ClassList['inventor'].features["subclassfeature1.1"].creaturesAdd[0];
          if (!golemPrefix) return;
          var theGolem = CurrentCompRace[golemPrefix];
          if (!theGolem) return;
          theGolem.scores[0] = 16;
          theGolem.attacks = [{
            name : "Slam",
            ability : 1,
            damage : [1, 4, "bludgeoning"],
            range : "Melee (5 ft)",
            description : ""
          }];
        },
        toolProfs : [["Smith's tools", "Leatherworker's tools"]]
      }
    },
    "subclassfeature3" : {
      name : "Intelligent Oversight",
      source : [["KCCC", 13]],
      minlevel : 3,
      description : desc([
        "I can take the Help action as a bonus action when assisting my golem",
        "When I take the Help action to aid an ally (including my golem) in attacking a creature,",
        "the target of that attack can be up to 30 feet away from me, rather than within 5 feet of me,",
        "if my ally can see or hear me"
      ]),
      action : [["bonus action", "Help Golem"]]
    },
    "subclassfeature5" : {
      name : "Autonomous Action",
      source : [["KCCC", 13]],
      minlevel : 5,
      description : desc([
        "I no longer need to spend my action or reaction to command my golem to use its action or reaction",
        "I can issue commands to it mentally while it is within 60 feet of me",
        "If the golem isn't commanded to take any action, it will take the Dodge action in combat"
      ])
    },
    "subclassfeature5.1" : {
      name : "Magical Nature",
      source : [["KCCC", 13]],
      minlevel : 5,
      description : desc([
        "My golem's natural weapons count as magical for the purpose of overcoming resistance",
        "and immunity to nonmagical attacks and damage"
      ])
    },
    "subclassfeature14" : {
      name : "Perfected Design",
      source : [["KCCC", 13]],
      minlevel : 14,
      description : desc([
        "My golem can add my Intelligence modifier to all of its attack rolls, ability checks,",
        "and saving throws"
      ])
    }
  }
});

// Golemsmith upgrades
KCCCglobal.upgrades.golemsmith = [
  {
    name : "Arcane Barrage Armament",
    source : [["KCCC", 14]],
    description : desc([
      "I install a mounted armament on my golem, which is charged with arcane power",
      "As an action, the golem can cast magic missile through the armament without components",
      "Once cast, it can't do so again until I finish a short or long rest",
      "The spell is cast at higher levels when I reach 5th (2nd-level), 11th (3rd-level), and 17th (4th-level)"
    ]),
    action : [["action", "Arcane Barrage (Golem)"]],
    usages : 1,
    recovery : "short rest",
    spellcastingBonus : [{
      name : "Arcane Barrage",
      spells : ["magic missile"],
      selection : ["magic missile"],
      firstCol : "oncesr"
    }],
    spellChanges : {
      "magic missile" : {
        description : "3+1/SL darts hit creature(s) for 1d4+1 force damage each; +1 dart at CL 5, 11, \u0026 17",
        changes : "My golem can cast Magic Missile once per short rest without components."
      }
    }
  },
KCCCglobal.upgrades.golemsmith = [
  {
    name : "Arcane Barrage Armament",
    source : [["KCCC", 14]],
    description : desc([
      "I install a mounted armament on my golem, which is charged with arcane power",
      "As an action, the golem can cast magic missile through the armament without components",
      "Once cast, it can't do so again until I finish a short or long rest",
      "The spell is cast at higher levels when I reach 5th (2nd-level), 11th (3rd-level), and 17th (4th-level)"
    ]),
    action : [["action", "Arcane Barrage (Golem)"]],
    usages : 1,
    recovery : "short rest",
    spellcastingBonus : [{
      name : "Arcane Barrage",
      spells : ["magic missile"],
      selection : ["magic missile"],
      firstCol : "oncesr"
    }],
    spellChanges : {
      "magic missile" : {
        description : "3+1/SL darts hit creature(s) for 1d4+1 force damage each; +1 dart at CL 5, 11, \u0026 17",
        changes : "My golem can cast Magic Missile once per short rest without components."
      }
    }
  },{
    KCCClevel : 5,
    name : "Arcane Resonance",
    source : [["KCCC", 15]],
    description : desc([
      "I can make any spell I cast that targets only me also target my golem"
    ])
  },
  {
    KCCClevel : 5,
    name : "Defender Protocol",
    source : [["KCCC", 15]],
    description : desc([
      "My golem gains the Protection Fighting Style:",
      "When a creature it can see attacks a target other than it that is within 5 feet of it,",
      "it can use its reaction to impose disadvantage on the attack roll"
    ])
  },
  {
    KCCClevel : 5,
    name : "Ether Heart",
    source : [["KCCC", 15]],
    description : desc([
      "My golem gains 2 charges, which it can use to cast any 1st-level spell I know",
      "It regains all expended charges when I finish a long rest"
    ]),
    usages : 2,
    recovery : "long rest"
  },
  {
    KCCClevel : 5,
    name : "Flamethrower Armament",
    source : [["KCCC", 15]],
    description : desc([
      "My golem can cast Burning Hands without components, using my spell save DC",
      "It can't do so again until I finish a short or long rest",
      "The spell is cast at higher levels when I reach 5th (2nd-level), 11th (3rd-level), and 17th (4th-level)"
    ]),
    usages : 1,
    recovery : "short rest",
    spellcastingBonus : [{
      name : "Flamethrower Armament",
      spells : ["burning hands"],
      selection : ["burning hands"],
      firstCol : "oncesr"
    }],
    spellChanges : {
      "burning hands" : {
        description : "All in 15-ft cone save or take 3d6/SL fire damage; save halves; unattended flammable objects ignite",
        changes : "My golem can cast Burning Hands once per short rest without components."
      }
    }
  },
  {
    KCCClevel : 5,
    name : "Fine-Tuned Dexterity",
    source : [["KCCC", 15]],
    description : desc([
      "My golem's Dexterity score increases by 2",
      "If this increases its Dexterity to 16+, it gains proficiency with thieves' tools",
      "If this increases its Dexterity to 18, it gains proficiency in the Stealth skill",
      "This upgrade can be taken multiple times, but can't increase Dexterity above 18"
    ]),
    scorestxt : "+2 Dexterity for the golem"
  },
  {
    KCCClevel : 5,
    name : "Grappling Appendages",
    source : [["KCCC", 15]],
    description : desc([
      "My golem gains two additional appendages that count as free hands for grappling",
      "When not grappling, it has a climbing speed equal to its walking speed"
    ]),
    speed : {
      climb : { spd : "walk", enc : "walk" }
    }
  },
  {
    KCCClevel : 5,
    name : "Heavy Armor Plating",
    source : [["KCCC", 15]],
    description : desc([
      "I can incorporate heavy armor into my golem; It calculates AC as if wearing that armor",
      "It's proficient with the armor but has disadvantage on Dexterity (Stealth) checks",
      "Removing or incorporating new armor takes twice as long as normal donning/doffing"
    ])
  },
  {
    KCCClevel : 5,
    name : "Magical Essence",
    source : [["KCCC", 15]],
    description : desc([
      "My golem can attune to one magic item, following normal attunement rules"
    ])
  },
  {
    KCCClevel : 5,
    name : "Structural Constitution",
    source : [["KCCC", 15]],
    description : desc([
      "My golem's Constitution score increases by 2",
      "If this increases its Constitution to 16+, it gains proficiency in Constitution saving throws",
      "If this increases its Constitution to 18, it has advantage on death saving throws",
      "This upgrade can be taken multiple times, but can't increase Constitution above 18"
    ]),
    scorestxt : "+2 Constitution for the golem"
  },
  {
    KCCClevel : 5,
    name : "Systematic Strength",
    source : [["KCCC", 15]],
    description : desc([
      "My golem's Strength score increases by 2",
      "If this increases its Strength to 16+, it gains proficiency in Strength saving throws",
      "If this increases its Strength to 18, it gains proficiency in the Athletics skill",
      "This upgrade can be taken multiple times, but can't increase Strength above 18"
    ]),
    scorestxt : "+2 Strength for the golem"
  },
  {
    KCCClevel : 5,
    name : "Warfare Routines",
    source : [["KCCC", 15]],
    description : desc([
      "My golem gains one of the following Fighting Styles: Archery, Dueling, or Great Weapon Fighting"
    ]),
    choices : ["Archery", "Dueling", "Great Weapon Fighting"],
    "archery" : {
      name : "Warfare Routines: Archery",
      description : desc([
        "My golem gains +2 to attack rolls it makes with ranged weapons"
      ])
    },
    "dueling" : {
      name : "Warfare Routines: Dueling",
      description : desc([
        "My golem gains +2 to damage rolls when wielding a melee weapon in one hand and no other weapons"
      ])
    },
    "great weapon fighting" : {
      name : "Warfare Routines: Great Weapon Fighting",
      description : desc([
        "My golem can reroll 1 or 2 on damage dice for two-handed melee weapon attacks"
      ])
    }
  },
  //5th lvl upgrades
  {
    KCCClevel : 5,
    name : "Cloaking Device",
    source : [["KCCC", 15]],
    description : desc([
      "My golem can cast Invisibility on itself without expending a spell slot or requiring components",
      "Once cast, it can't do so again until I finish a short or long rest"
    ]),
    usages : 1,
    recovery : "short rest",
    spellcastingBonus : [{
      name : "Cloaking Device",
      spells : ["invisibility"],
      selection : ["invisibility"],
      firstCol : "oncesr"
    }],
    spellChanges : {
      "invisibility" : {
        components : "",
        compMaterial : "",
        changes : "My golem can cast Invisibility on itself without using components."
      }
    }
  },
  {
    KCCClevel : 5,
    name : "Expanded Frame",
    source : [["KCCC", 15]],
    description : desc([
      "My golem's size increases by one category, up to a maximum of Large",
      "If Large, it gains advantage on Strength checks and saving throws",
      "Its hit point maximum increases to 5 + [(Con mod + 6) \xD7 inventor level]",
      "I can choose to give it anatomy to serve as a mount",
      "This upgrade can be taken multiple times, but can't increase size above Large"
    ]),
    calcChanges : {
      hp : function (totalHD, HDobj, prefix) {
        if (prefix.indexOf('Companion.') !== -1) {
          var golemConMod = What(prefix + 'Comp.Use.Ability.Con.Mod');
          HDobj.alt.push(5 + ((Number(golemConMod) + 6) * classes.known.inventor.level));
          HDobj.altStr.push(' + ' + (5 + 6 * classes.known.inventor.level) + ' from Expanded Frame');
        }
      }
    }
  },
  {
    KCCClevel : 5,
    name : "Shielding Bond",
    source : [["KCCC", 15]],
    description : desc([
      "My golem can cast Warding Bond without expending a spell slot or material components",
      "Once cast, it can't do so again until it finishes a short or long rest"
    ]),
    usages : 1,
    recovery : "short rest",
    spellcastingBonus : [{
      name : "Shielding Bond",
      spells : ["warding bond"],
      selection : ["warding bond"],
      firstCol : "oncesr"
    }],
    spellChanges : {
      "warding bond" : {
        components : "V,S",
        compMaterial : "",
        changes : "My golem can cast Warding Bond without using material components."
      }
    }
  },
  {
    KCCClevel : 5,
    name : "Iron Fortress",
    source : [["KCCC", 15]],
    prereqKCCC : {
      featuresAnd : ["systematic strength", "structural constitution"],
      featuresOr : ["expanded frame"]
    },
    description : desc([
      "My golem counts as three-quarters cover for creatures riding it or within 5 ft of it",
      "(as long as it is between the target and the attacker)",
      "While on the ground, it can't be moved against its will"
    ])
  },
  {
    KCCClevel : 5,
    name : "Reciprocity Programming",
    source : [["KCCC", 15]],
    description : desc([
      "If I use my bonus action to Help my golem attack, it can Help me attack as a bonus action on its next turn"
    ]),
    action : [["bonus action", "Golem Help (after being Helped)"]]
  },{
  //9th lvl
      KCCClevel : 9,
      name : "Mark of Sapience",
      source : [["KCCC", 16]],
      description : desc([
        "I craft a Mark of Sapience on my golem's forehead, turning it into a Golem Companion",
        "Its mental ability scores increase: Int 10, Wis 10, Cha 8",
        "It can now speak, remember things, and follow more complex commands",
        "It gains proficiency in Intelligence and Wisdom saving throws"
      ]),
      prereqKCCC : {
        featuresNot : ["launcher golem chassis"]
      },
      changeeval : function(prefix) {
        var golemPrefix = ClassList['inventor'].features["subclassfeature1.1"].creaturesAdd[0];
        if (!golemPrefix) return;
        var theGolem = CurrentCompRace[golemPrefix];
        if (!theGolem) return;
        theGolem.scores[3] = 10; // Intelligence
        theGolem.scores[4] = 10; // Wisdom
        theGolem.scores[5] = 8;  // Charisma
        theGolem.saves += "|Int|Wis";
      }},
    {
      KCCClevel : 9,
      name : "Overdrive",
      source : [["KCCC", 16]],
      description : desc([
        "As an action, I can overcharge my golem with energy, granting it the effects of Haste",
        "This lasts for a number of rounds equal to my Intelligence modifier",
        "Once used, I can't do so again until I finish a long rest"
      ]),
      action : [["action", "Overdrive (Golem)"]],
      usages : 1,
      recovery : "long rest"
    },
    {
      KCCClevel : 9,
      name : "Powered Charge",
      source : [["KCCC", 16]],
      description : desc([
        "My golem's walking speed increases by 5 feet",
        "If its walking speed is 40 feet or higher after this upgrade, it gains Forceful Slam:",
        " If it moves 20+ ft straight toward a target and hits it with a melee attack,",
        " the target must make a Str save (DC 8 + golem's prof + its Str mod) or be knocked prone",
        "I can select this upgrade up to two times"
      ]),
      additional : "Can be taken twice",
      changeeval : function(prefix) {
        var golemPrefix = ClassList['inventor'].features["subclassfeature1.1"].creaturesAdd[0];
        if (!golemPrefix) return;
        var theGolem = CurrentCompRace[golemPrefix];
        if (!theGolem) return;
        var currentSpeed = parseInt(theGolem.speed.match(/\d+/)[0]);
        theGolem.speed = (currentSpeed + 5) + " ft";
        if (currentSpeed + 5 >= 40) {
          if (!theGolem.features) theGolem.features = [];
          theGolem.features.push({
            name : "Forceful Slam",
            description : "If the golem moves at least 20 feet straight toward a target and then hits it with a melee attack, the target must succeed on a Strength saving throw (DC 8 + the golem's proficiency bonus + its Strength modifier) or be knocked prone."
          });
        }
      }
    },
    {
        KCCClevel : 15,
        name : "Artificial Learning",
        listname : "Artificial Learning (prereq: Mark of Sapience)",
        prereqKCCC : { featuresAnd : ["mark of sapience (incompatible: launcher golem chassis)"] },
        source : [["KCCC", 18]],
        description : desc([
          "My Golem Companion gains one level in a class of my choice",
          "It gains all 1st-level features of the chosen class, except hit points, Hit Dice, and proficiencies",
          "This upgrade can be selected multiple times for additional levels or different classes"
        ]),
        additional : "Choose a class",
        choices : ["Barbarian", "Bard", "Cleric", "Druid", "Fighter", "Monk", "Paladin", "Ranger", "Rogue", "Sorcerer", "Warlock", "Wizard"],
        "barbarian" : {
          name : "Artificial Learning (Barbarian)",
          description : desc([
            "My Golem Companion gains the following 1st-level Barbarian features:",
            " \u2022 Rage",
            " \u2022 Unarmored Defense (Constitution instead of Dexterity)"
          ])
        },
        // Add similar entries for other classes
      },
      {
        KCCClevel : 15,
        name : "Brutal Armaments",
        source : [["KCCC", 18]],
        description : desc([
          "When my golem attacks, it can subtract its Prof Bonus from the attack roll",
          "If the attack hits, it adds twice its Prof Bonus to the damage roll instead"
        ]),
        calcChanges : {
          atkCalc : [
            function (fields, v, output) {
              if (v.isMeleeWeapon && (/golem/i).test(v.WeaponTextName)) {
                output.extraHit -= output.prof;
                output.extraDmg += output.prof * 2;
              }
            },
            "My golem's attacks can subtract the proficiency bonus from the attack roll to add twice the proficiency bonus to the damage instead."
          ]
        }
      },
      {
        KCCClevel : 15,
        name : "Shared Power",
        source : [["KCCC", 18]],
        description : desc([
          "My golem can use its action and one of my spell slots to cast a spell I know",
          "As an action, I can have my golem lose HP (max 2 × inventor level) to gain temp HP",
          "I can forgo my action to give my golem an extra action, or vice versa",
          "This extra action can only be used for Attack (1 weapon attack), Dash, Disengage, Hide, or Use an Object"
        ]),
        action : [["action", "Shared Power (HP Transfer)"], ["action", "Shared Power (Grant Action)"]]
      },
      {
        KCCClevel : 15,
        name : "Titan Slayer",
        source : [["KCCC", 18]],
        description : desc([
          "I build an oversized weapon into my golem (martial melee or improved natural weapon)",
          "The weapon's base damage dice are doubled (e.g., 1d8 becomes 2d8)",
          "My golem can only attack with this weapon once per turn"
        ]),
        calcChanges : {
          atkAdd : [
            function (fields, v) {
              if (v.isMeleeWeapon && (/titan slayer/i).test(v.WeaponTextName)) {
                var dice = fields.Damage_Die.match(/(\d+)d(\d+)/);
                if (dice) {
                  fields.Damage_Die = (dice[1] * 2) + "d" + dice[2];
                }
                fields.Description += (fields.Description ? '; ' : '') + 'Can only be used 1/turn';
              }
            },
            "If I include 'Titan Slayer' in a melee weapon's name, the base damage dice are doubled, but it can only be used once per turn."
          ]
        }
      }
]];
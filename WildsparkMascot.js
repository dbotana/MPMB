/* -WHAT IS THIS?-
This file adds the "Wildspark Mascot" class to "MPMB's Character Record Sheet."
Import this file using the "Add Extra Materials" bookmark.
*/

/* -INFORMATION-
Subject: Class
Effect: Adds the Wildspark Mascot class and its features.
Code by: [Your Name]
Date: 2025-02-11
*/

var iFileName = "WildsparkMascot.js";

RequiredSheetVersion("13.2.0");

SourceList["WSM"] = {
  name: "Wildspark Mascot",
  abbreviation: "WSM",
  group: "Rocky's Homebrew",
  date: "2025/02/11"
};

ClassList["wildspark mascot"] = {
  name: "Wildspark Mascot",
  regExpSearch: /^(?=.*wildspark)(?=.*mascot).*$/i,
  source: ["WSM", 0],
  primaryAbility: "Charisma",
  prereqs: "Charisma 13", // Multi-class prerequisites
  die: 6,
  saves: ["Con", "Cha"],
  improvements: [0, 0, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5],
  
  // Armor and Weapon Proficiencies
  armor: [[false, false, false, false]], // No armor proficiency
  weaponProfs: [[false, false]], 
  
  // Skills
  skillstxt: {
    primary: "Choose two from Arcana, Animal Handling, Insight, Nature, Performance, or Persuasion."
  },
  
  // Spellcasting
  spellcastingFactor: 1,
  spellcastingKnown : {
    cantrips : [2, 2, 2, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
    spells :   [1, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9,10,10,11,11]
  },

  attacks: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], // No direct attacks in beast form
  
  ///equipment:
    //"Wildspark Mascot starting equipment:\n \u2022 A quarterstaff or (b) a dagger;\n \u2022 An explorer's pack;\n \u2022 A component pouch or druidic focus.",
  
  subclasses: ["Circle of Borrowed Strength", []], // Add subclass options here
  
  features: {
    "bound familiar form": {
      name: "Bound Familiar Form",
      source: ["WSM", 0],
      minlevel: 1,
      description:
        "\nYou are permanently bound to a Tiny beast form with fey magic. You cannot make attacks in this form." +
        "\nYou can cast druid spells without verbal/somatic/material components (except costly ones)." +
        "\nIf you die in this form, your body remains as a beast. You can only be revived in beast form.",
    },
    "unarmored defense": {
            name: "Unarmored Defense",
            source: ["WSM", 0],
            minlevel: 1,
            description: desc("Without armor, my AC is 10 + Dexterity modifier + Charisma modifier + shield"),
            armorOptions: [{
                regExpSearch: /justToAddToDropDownAndEffectWildShape/,
                name: "Unarmored Defense (Cha)",
                source: [["SRD", 8], ["P", 48]],
                ac: "10+Cha",
                affectsWildShape: true,
                selectNow: true
            }]
        },
    "wildspark magic": {
      name: "Wildspark Magic",
      source: ["WSM", 0],
      minlevel: 1,
      description:
        "\nYou know only non-damaging spells from Sorcerer/Druid/Bard lists." +
        "\nWhen casting a spell of level one or higher, trigger a Wild Surge."
    },
    // Chaotic Empowerment (6th Level)
    "chaotic empowerment": {
      name: "Chaotic Empowerment",
      source: ["WSM", 0],
      minlevel: 6,
      description: desc([
        "When allies benefit from your spells, they gain +1d4 to their next d20 roll before your next turn.",
        "Roll on the Wildspark Surge table without expending a spell slot."
      ]),
      additional: "+1d4 to allies' rolls; triggers Wild Surge"
    },
    // Reality Warp (14th Level)
    "reality warp": {
      name: "Reality Warp",
      source: ["WSM", 0],
      minlevel: 14,
      description: desc([
        "Once per long rest, when a creature fails a saving throw against your spell:",
        "- Replace the spell's effect with any non-damaging spell of equal/lower level you know.",
        "- This automatically triggers a Wild Surge."
      ]),
      usages: 1,
      recovery: "long rest",
      additional: "Replace spell effect; trigger Wild Surge"
    },

    // Prismatic Apotheosis (18th Level)
    "prismatic apotheosis": {
      name: "Prismatic Apotheosis",
      source: ["WSM", 0],
      minlevel: 18,
      description: desc([
        "Gain additional benefits in your familiar form:",
        "- Fey Step: Teleport up to 60 ft as a bonus action, three times per day.",
        "- Uncontainable Spark: Cast *dispel magic* on yourself without expending a spell slot.",
        "- Living Ward: Allies within 30 ft gain resistance to one damage type of your choice, changing at dawn."
      ]),
      usages: 3,
      recovery: "dawn",
      action: [["bonus action", "Fey Step"], ["action", "Dispel Magic"]],
      additional: "Resistance aura for allies"
    }
  }
};

//subclasses
AddSubClass("wildspark mascot", "circle of borrowed strength", {
    regExpSearch: /^(?=.*borrowed)(?=.*strength).*$/i,
    subname: "Circle of Borrowed Strength",
    source: ["WSM", 0],
    features: {
      // Level 2 Features
      "subclassfeature2": {
        name: "Wildspark Rage",
        source: ["WSM", 0],
        minlevel: 2,
        description: desc([
          "Enter a rage as a bonus action, gaining the following benefits:",
          "- Resistance to bludgeoning, piercing, and slashing damage.",
          "- Add your Strength modifier (minimum +1) to melee weapon damage rolls.",
          "- Rage lasts for 1 minute or until you are incapacitated or end it early.",
        ]),
        usagescalc: "event.value = Math.max(1, What('Cha Mod'));",
        recovery: "long rest",
        action: [["bonus action", " (Enter Rage)"]]
      },
      "subclassfeature2.1": {
        name: "Reckless Attack",
        source: ["WSM", 0],
        minlevel: 2,
        description: desc([
          "When you make your first attack on your turn, you can decide to attack recklessly.",
          "- Gain advantage on melee weapon attack rolls during this turn.",
          "- Attack rolls against you have advantage until your next turn."
        ])
      },
  
      // Level 5 Features
      "subclassfeature5": {
        name: "Extra Attack",
        source: ["WSM", 0],
        minlevel: 5,
        description: desc([
          "You can attack twice instead of once whenever you take the Attack action on your turn."
        ])
      },
      "subclassfeature5.1": {
        name: "Primal Critical",
        source: ["WSM", 0],
        minlevel: 5,
        description: desc([
          "While raging, your melee weapon attacks score a critical hit on a roll of 19 or 20."
        ])
      },
  
      // Level 10 Feature
      "subclassfeature10": {
        name: "Relentless Rage",
        source: ["WSM", 0],
        minlevel: 10,
        description: desc([
          "While raging, if you drop to 0 hit points, you can make a DC 10 Constitution saving throw.",
          "- On a success, you drop to 1 hit point instead.",
          "- Each time you use this feature after the first, the DC increases by +5.",
          "- The DC resets to 10 after a short or long rest."
        ])
      },
  
      // Level 20 Feature
      "subclassfeature20": {
        name: "Unstoppable Fury",
        source: ["WSM", 0],
        minlevel: 20,
        description: desc([
          "The duration of your rage becomes indefinite while you are conscious.",
          "- You no longer need to make attacks or take damage to maintain your rage."
        ])
      }
    }
  });
  //paladin/ranger substitute
  AddSubClass("wildspark mascot", "divine oath", {
    regExpSearch: /^(?=.*divine)(?=.*oath).*$/i,
    subname: "Divine Oath",
    source: ["WSM", 0],
    features: {
      // Level 2 Features
      "subclassfeature2": {
        name: "Channel Divinity",
        source: ["WSM", 0],
        minlevel: 2,
        description: desc([
          "You gain the ability to channel divine energy to fuel magical effects.",
          "You can use this ability once per long rest."
        ]),
        usages: 1,
        recovery: "long rest"
      },
      "subclassfeature2.1": {
        name: "Favored Enemy",
        source: ["WSM", 0],
        minlevel: 2,
        description: desc([
          "You always have the Hunter's Mark spell prepared, and it doesn't count against your spells known.",
          "You can cast Hunter's Mark a number of times equal to your Wisdom modifier without expending a spell slot.",
          "You regain all expended uses of this feature when you finish a long rest."
        ]),
        spellcastingBonus: {
          name: "Favored Enemy",
          spells: ["hunter's mark"],
          selection: ["hunter's mark"],
          firstCol: "atwill"
        },
        usagescalc: "event.value = Math.max(1, What('Wis Mod'));",
        recovery: "long rest"
      },
      "subclassfeature2.2": {
        name: "Divine Smite",
        source: ["WSM", 0],
        minlevel: 2,
        description: desc([
          "When you hit a creature with a melee weapon attack, you can expend a spell slot to deal radiant damage.",
          "- The damage is 1d6 per level of the spell slot expended (maximum of 5d6)."
        ])
      },
  
      // Level 5 Features
      "subclassfeature5": {
        name: "Aura of Conviction",
        source: ["WSM", 0],
        minlevel: 5,
        description: desc([
          "You and allies within 10 feet of you add your Charisma modifier to their saving throws.",
          "At level 18, this aura's range increases to 30 feet."
        ])
      },
      "subclassfeature5.1": {
        name: "Extra Attack",
        source: ["WSM", 0],
        minlevel: 5,
        description: desc([
          "You can attack twice, instead of once, whenever you take the Attack action on your turn."
        ])
      },
  
      // Level 10 Feature
      "subclassfeature10": {
        name: "Improved Smite",
        source: ["WSM", 0],
        minlevel: 10,
        description: desc([
          "Your melee weapon attacks deal an extra 1d8 radiant damage while you are raging or in combat."
        ])
      },
  
      // Level 20 Feature
      "subclassfeature20": {
        name: "Avatar of War",
        source: ["WSM", 0],
        minlevel: 20,
        description: desc([
          "As an action, you can transform into an Avatar of War for one minute. While transformed:",
          "- You gain a flying speed of 30 feet.",
          "- All your attacks deal an additional +2d8 radiant damage.",
          "- You cast Spirit Guardians as a no-concentration spell at level five (once per long rest)."
        ]),
        usages: 1,
        recovery: "long rest",
        action: [["action", "(Transform)"]],
        spellcastingBonus: {
          name: "Spirit Guardians (5th Level)",
          spells: ["spirit guardians"],
          selection: ["spirit guardians"],
          firstCol: "(once)"
        }
      }
    }
  });
  //wizard/sorcerer/bard substitute
  AddSubClass("wildspark mascot", "arcane duelist", {
    regExpSearch: /^(?=.*arcane)(?=.*duelist).*$/i,
    subname: "Arcane Duelist",
    source: ["WSM", 0],
    features: {
      // Level 2 Features
      "subclassfeature2": {
        name: "Arcane Reserves",
        source: ["WSM", 0],
        minlevel: 2,
        description: desc([
          "You gain access to two special abilities:",
          "- Blade Cantrip: You can replace one of your melee weapon attacks with Booming Blade or Green-Flame Blade.",
          "- Defensive Flourish: As a bonus action, expend a 1st-level spell slot to gain +5 AC until the start of your next turn."
        ]),
        action: [["bonus action", "Defensive Flourish"]],
        spellcastingBonus: {
          name: "Blade Cantrip",
          spells: ["booming blade", "green-flame blade"],
          selection: ["booming blade", "green-flame blade"],
          firstCol: "atwill"
        }
      },
  
      // Level 5 Features
      "subclassfeature5": {
        name: "Spellbreaker Strikes",
        source: ["WSM", 0],
        minlevel: 5,
        description: desc([
          "When you hit a creature with a melee weapon attack, you can disrupt its concentration.",
          "- The creature must succeed on a Constitution saving throw (DC = 8 + your proficiency bonus + your Intelligence modifier).",
          "- On a failure, the creature loses concentration on any spell it is maintaining."
        ])
      },
      "subclassfeature5.1": {
        name: "Extra Attack",
        source: ["WSM", 0],
        minlevel: 5,
        description: desc([
          "You can attack twice whenever you take the Attack action on your turn."
        ])
      },
  
      // Level 10 Feature
      "subclassfeature10": {
        name: "Countermagic Evasion",
        source: ["WSM", 0],
        minlevel: 10,
        description: desc([
          "When you succeed on a saving throw against a spell, you can use your reaction to do one of the following:",
          "- Teleport up to 30 feet to an unoccupied space you can see.",
          "- Make one melee weapon attack against a creature within range."
        ]),
        action: [["reaction", "Countermagic Evasion"]]
      },
  
      // Level 20 Feature
      "subclassfeature20": {
        name: "Arcane Apotheosis",
        source: ["WSM", 0],
        minlevel: 20,
        description: desc([
          "You gain unparalleled mastery over arcane combat:",
          "- Blade Cantrips now affect all creatures within a 15-foot cone instead of a single target.",
          "- Your Arcane Dice (used for Blade Cantrips) become d10s.",
          "- Once per long rest, you can cast *Steel Wind Strike* using your Intelligence modifier as the spellcasting ability."
        ]),
        usages: 1,
        recovery: "long rest",
        spellcastingBonus: {
          name: "*Steel Wind Strike*",
          spells: ["steel wind strike"],
          selection: ["steel wind strike"],
          firstCol: "(once)"
        }
      }
    }
  });
  
  
  AddSubClass("wildspark mascot", "pactbound spirit", {
    regExpSearch: /^(?=.*pactbound)(?=.*spirit).*$/i,
    subname: "Pactbound Spirit",
    source: ["WSM", 0],
    features: {
      // Level 2 Features
      "subclassfeature2": {
        name: "Eldritch Pact",
        source: ["WSM", 0],
        minlevel: 2,
        description: desc([
          "You forge a pact with an otherworldly entity, gaining one of the following abilities:",
          "- Pact of the Chain: Gain the find familiar spell. Your familiar can take the form of a Tiny fey or spirit and can attack.",
          "- Pact of the Tome: Gain three cantrips from any spell list. They count as Wildspark Mascot spells for you.",
          "- Pact of the Blade: Summon a magical weapon as a bonus action. Use Charisma for its attack and damage rolls."
        ]),
        choices: ["Pact of the Chain", "Pact of the Tome", "Pact of the Blade"],
        "pact of the chain": {
          name: "Pact of the Chain",
          description: desc([
            "Gain the find familiar spell. Your familiar can take on a Tiny fey or spirit form.",
            "Your familiar can attack as part of your action."
          ]),
          spellcastingBonus: {
            name: "Pact of the Chain",
            spells: ["find familiar"],
            selection: ["find familiar"],
            firstCol: "atwill"
          }
        },
        "pact of the tome": {
          name: "Pact of the Tome",
          description: desc([
            "Gain three cantrips from any spell list. They count as Wildspark Mascot spells for you."
          ]),
          spellcastingBonus: {
            name: "Pact of the Tome",
            spells: ["any"],
            selection: ["any"],
            times: 3,
            firstCol: "atwill"
          }
        },
        "pact of the blade": {
          name: "Pact of the Blade",
          description: desc([
            "Summon a magical weapon as a bonus action. Use Charisma for attack and damage rolls.",
            "The weapon counts as magical for overcoming resistances."
          ]),
          action: [["bonus action", "Summon Weapon"]]
        }
      },
  
      // Level 5 Features
      "subclassfeature5": {
        name: "Eldritch Surge",
        source: ["WSM", 0],
        minlevel: 5,
        description: desc([
          "When you hit with an attack or cast a spell that forces a saving throw, roll on the Wildspark Surge table.",
          "- Pact of the Chain: Familiar attacks deal an extra 1d8 damage.",
          "- Pact of the Tome: Cast one pact cantrip as a bonus action once per short rest.",
          "- Pact of the Blade: Summoned weapon deals an additional 1d8 force damage."
        ]),
        additional: "+1d8 damage (Chain/Blade), Bonus Cantrip (Tome)"
      },
      "subclassfeature5.1": {
        name: "Extra Attack",
        source: ["WSM", 0],
        minlevel: 5,
        description: desc([
          "You can attack twice whenever you take the Attack action on your turn."
        ])
      },
  
      // Level 10 Feature
      "subclassfeature10": {
        name: "Mystic Shield",
        source: ["WSM", 0],
        minlevel: 10,
        description: desc([
          "When hit by an attack or fail a save against magic, use your reaction to:",
          "- Gain resistance to all damage until your next turn.",
          "- Teleport up to 30 feet to an unoccupied space you can see.",
          "- Force your attacker to roll on the Wildspark Surge table."
        ]),
        usagescalc: "event.value = Math.max(1, What('Cha Mod'));",
        recovery: "long rest",
        action: [["reaction", "(Mystic Shield)"]]
      },
  
      // Level 20 Feature
      "subclassfeature20": {
        name: "Avatar of Chaos",
        source: ["WSM", 0],
        minlevel: 20,
        description: desc([
          "As an action, transform into an Avatar of Chaos for one minute. While transformed:",
          "- Gain resistance to all damage.",
          "- Your attacks deal an additional +2d10 force damage.",
          "- You can cast eldritch blast as part of any Attack action without using an action.",
          "- Once during this transformation, cast wish without material components or expending a spell slot.",
          "- After casting wish, roll on the Wildspark Surge table twice and apply both effects."
        ]),
        usages: 1,
        recovery: "long rest",
        action: [["action", "(Transform)"]]
      }
    }
  });
  AddSubClass("wildspark mascot", "beacon of the divine", {
    regExpSearch: /^(?=.*beacon)(?=.*divine).*$/i,
    subname: "Beacon of the Divine",
    source: ["WSM", 0],
    features: {
      // Level 2 Features
      "subclassfeature2": {
        name: "Divine Conduit",
        source: ["WSM", 0],
        minlevel: 2,
        description: desc([
          "You gain the ability to channel divine energy, granting you the following abilities:",
          "- Channel Divinity (1/short rest): Choose one of two effects:",
          "   - Radiant Healing: Heal creatures within 30 ft for Cha mod + Wildspark level.",
          "   - Turn the Tide: Frighten hostile creatures within 30 ft (Wis save, DC = 8 + Prof + Cha).",
          "- Blessed Form: Cast *bless* once per long rest without expending a spell slot."
        ]),
        usages: 1,
        recovery: "short rest",
        spellcastingBonus: {
          name: "Blessed Form",
          spells: ["bless"],
          selection: ["bless"],
          firstCol: "(once)"
        },
        action: [["action", "Channel Divinity"]]
      },
  
      // Level 5 Features
      "subclassfeature5": {
        name: "Aura of Serenity",
        source: ["WSM", 0],
        minlevel: 5,
        description: desc([
          "You and allies within 10 feet gain the following benefits:",
          "- Add your Charisma modifier to saving throws against being frightened or charmed.",
          "- Whenever a creature regains hit points from a spell or ability, they regain additional HP equal to your Charisma modifier."
        ])
      },
      "subclassfeature5.1": {
        name: "Extra Attack",
        source: ["WSM", 0],
        minlevel: 5,
        description: desc([
          "You can attack twice whenever you take the Attack action on your turn."
        ])
      },
  
      // Level 10 Feature
      "subclassfeature10": {
        name: "Divine Intercession",
        source: ["WSM", 0],
        minlevel: 10,
        description: desc([
          "When a creature within 30 feet is hit by an attack or fails a saving throw, use your reaction to:",
          "- Grant them resistance to all damage until the start of your next turn.",
          "- Teleport them up to 30 feet to an unoccupied space you can see.",
          "- Force the attacker or source of the effect to roll on the Wildspark Surge table."
        ]),
        usagescalc: "event.value = Math.max(1, What('Cha Mod'));",
        recovery: "long rest",
        action: [["reaction", "(Divine Intercession)"]]
      },
  
      // Level 20 Feature
      "subclassfeature20": {
        name: "Avatar of Divinity",
        source: ["WSM", 0],
        minlevel: 20,
        description: desc([
          "As an action, transform into an Avatar of Divinity for one minute. While transformed:",
          "- Emit a 30-ft aura. Allies in this aura are immune to fear and charm and regain HP equal to your Charisma modifier at the start of their turns.",
          "- Your attacks deal an additional +2d8 radiant damage.",
          "- Once during this transformation, cast *mass heal* without expending a spell slot or requiring material components."
        ]),
        usages: 1,
        recovery: "long rest",
        action: [["action", "(Transform)"]],
        spellcastingBonus: {
          name: "*Mass Heal* (Avatar of Divinity)",
          spells: ["mass heal"],
          selection: ["mass heal"],
          firstCol: "(once)"
        }
      }
    }
  });
    
  RaceList["familiar-born"] = {
    regExpSearch: /^(?=.*familiar)(?=.*born).*$/i,
    name: "Familiar-Born",
    source: ["WSM", 0],
    plural: "Familiar-Born",
    size: 5, // Tiny
    speed: {
      walk: { spd: 20, enc: 15 },
      climb: { spd: "20", enc: "15" },
      fly: { spd: "20", enc: "0" } // Choose climb or fly at creation
    },
    languageProfs: ["Common", "Sylvan"],
    vision: [["Darkvision", 60]],
    savetxt: {
      text: ["Adv. on saves vs. being charmed"],
      immune: ["magic sleep"]
    },
    weaponOptions: false, // Cannot wield weapons
    armorProfs: [false, false, false, false], // No armor proficiency
    skillstxt: "Choose one from Arcana, Insight, Nature, or Stealth",
    
    abilitySave: 6, // Charisma-based abilities
    abilityScores: [0, 0, 0, 0, 0, 2], // +2 Charisma
    scorestxt: "+2 Charisma and +1 to one other ability score of your choice",
  
    traits: [
      "Magical Form:\n   - You cannot make weapon attacks.\n   - You can manipulate objects as if you had hands but cannot wield weapons or shields.\n   - You can cast spells without requiring verbal or somatic components.",
      "Fey Nature:\n   - Advantage on saving throws against being charmed.\n   - Immune to magical sleep effects.\n   - You do not require food or drink but must still rest as normal.",
      "Tiny Trickster:\n   - You can move through the space of any creature larger than you.\n   - You can take the Disengage action as a bonus action."
    ],
  
    // Subrace Options
    subraces: [
      {
        regExpSearch: /arcane familiar/i,
        name: "Arcane Familiar",
        source: ["WSM", 0],
        spellcastingBonus: {
          name: "Arcane Knowledge",
          spells: ["any"],
          selection: ["any"],
          times: 1,
          firstCol: "atwill"
        },
        featuresAdd: {
          spellStorageFeature :{
            name : "Spell Storage",
            source : ["WSM", 0],
            minlevel : 1,
            description : desc([
              "You can store one spell of 1st level or higher in your familiar form.",
              "When you cast this spell, it does not count against your spells known.",
              "You can use this feature once per long rest."
            ]),
            usages: 1,
            recovery: "long rest"
          }
        }
      },
    ]
  };
/*WIP adding only nondamaging spells to spell list
    All 3 attributes (eval, removeeval, and calcChanges) go in the same class feature.
    We have to create a custom CurrentSpells entry to do what we need to.
    A calcChanges.spellList function will then dynamically determine the eligible cantrips.

    This script was made assuming the base class is ClassList['spellblade'].
    If not, adjust the below accordingly
*/
/*
eval : function () {
    // Create custom CurrentSpells entry
    CurrentSpells['spellblade-borrowed power'] = {
        name : 'Wildspark Spells (Wildspark Mascot)',
        ability : "wildspark mascot", // use the same spellcasting ability as the main class
        list : { spells : [] }, // will be filled by the calcChanges.spellList function
        known : { cantrips : 0, spells : 'list' },
        bonus : {
            bon1 : {
                name : 'Just select "Full List"',
                spells : []
            },
            bon2 : {
                name : 'on the bottom left',
                spells : []
            }
        },
        typeList : 4,
        refType : "class",
        allowUpCasting : true,
        firstCol : ""
    };
    SetStringifieds('spells'); CurrentUpdates.types.push('spells');
},
removeeval : function () {
    // Remove custom CurrentSpells entry
    delete CurrentSpells['spellblade-borrowed power'];
    SetStringifieds('spells'); CurrentUpdates.types.push('spells');
},
calcChanges : {
    spellList : [
        function(spList, spName, spType) {
            // Only do this for the above defined CurrentSpells object
            if (spName === 'spellblade-borrowed power') {
                // First get all the cantrips known by other spellcasting sources
                var allSpellsKnown = [];
                for (var sCast in CurrentSpells) {
                    if (sCast.refType === "item" || sCast === spName) continue; // skip magic items and the current entry
                    var oCast = CurrentSpells[sCast];
                    if (oCast.selectCa) allSpellsKnown = allSpellsKnown.concat(oCast.selectCa);
                    if (oCast.selectBo) allSpellsKnown = allSpellsKnown.concat(oCast.selectBo);
                }
                // Get just the cantrips
                var allCantripsKnown = OrderSpells(allSpellsKnown, "single", false, false, 9) // max 9th level spells 
                // Make sure the array is empty
                spList.spells = [];
                // First get all the cantrips from all the classes (this way, the excluded/included sources are respected)
                //var cantrips = CreateSpellList({ "class" : "any", level : [0,0] })
                var spells = CreateSpellList({ "class" : ["druid", "sorcerer", "bard"]})
                /*  loop through these cantrips and push the ones that meet the criteria
                    of not having 'dmg' or 'damage' in the short description
                    and not being a cantrip known by any other spellcasting source.
                /
                for (var i = 0; i < spells.length; i++) {
                    var oCantrip = SpellsList[cantrips[i]];
                    if ( !/dmg|damage/i.test(oCantrip.description) && allCantripsKnown.indexOf(cantrips[i]) === -1 ) {
                        spList.spells.push( cantrips[i] );
                    }
                }
            }
        }
    ]
}
*/
//
legacyClassRefactor("druid", {
  regExpSearch: /druid/i,
  name: "Druid",
  source: [["PHB2024", 79]],
  primaryAbility: ["Wisdom"],
  abilitySave: 5,
  prereqs: "Wisdom 13",
  improvements: [0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 5, 5],
  die: 8,
  saves: ["Int", "Wis"],
  skillstxt: {
    primary: "Choose 2: Arcana, Animal Handling, Insight, Medicine, Nature, Perception, religion, or Survival",
  },
  armorProfs: {
    primary: [true, false, false, true],
    secondary: [true, false, false, true],
  },
  toolProfs: {
    primary: [["Herbalism Kit"]],
    secondary: [[""]],
  },
  weaponProfs: {
    primary: [true, false],
    secondary: [false, false],
  },
  equipment: "Druid starting equipment:" +
    "\n \u2022 Leather Armor;" +
    "\n \u2022 A Shield;" +
    "\n \u2022 A Sickle;" +
    "\n \u2022 A Druidic Focus(Quarterstaff);" +
    "\n \u2022 An Herbalism Kit;" +
    "\n \u2022 An Explorer's Pack, and 9 gp." +
    "\n\nAlternatively, choose 50 gp worth of starting equipment instead of the class' starting equipment.",
  subclasses: ["Druid Subclass", []],
  attacks: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  spellcastingAbility: 5,
  spellcastingFactor: 1,
  spellcastingKnown: {
    cantrips: [2, 2, 2, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
    spells: "list",
    prepared: true,
  },
  features: {
    "spellcasting": {
      name: "Spellcasting",
      source: [["PHB2024", 79]],
      minlevel: 1,
      additional: levels.map(function (n, idx) {
        var cantr = [2, 2, 2, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4][idx];
        var splls = [4, 5, 6, 7, 9, 10, 11, 12, 14, 15, 16, 16, 17, 17, 18, 18, 19, 20, 21, 22][idx];
        return cantr + " cantrips \u0026 " + splls + " spells prepared";
      }),
      calcChanges: {
        spellCalc: [
          function (type, spellcasters, ability) {
            if (type === "prepare" && spellcasters.indexOf("druid") !== -1) {
              var lvl = classes.known.druid.level;
              var sArr = [0, 4, 5, 6, 7, 9, 10, 11, 12, 14, 15, 16, 16, 17, 17, 18, 18, 19, 20, 21, 22];
              return sArr[lvl] - lvl - Number(What("Wis Mod"));
            }
          }
        ]
      },
      description: desc([
        "I can cast druid spells using Wisdom as my spellcasting ability. I know druid cantrips and can prepare a number of spells from the druid list. I regain spell slots after a long rest."      ]),
    },
    "druidic": {
      name: "Druidic",
      source: [["PHB2024", 80]],
      minlevel: 1,
      languageProfs: ["Druidic"],
      spellcastingBonus: [{
        name: "Druidic",
        spells: ["speak with animals"],
        selection: ["speak with animals"],
        times: 1,
      }],
      description: desc([
        "I know Druidic, the secret language of druids. I can leave hidden messages in it. I always have Speak with Animals prepared.",
      ]),
    },
    "primal order": {
      name: "Primal Order",
      source: [["PHB2024", 80]],
      minlevel: 1,
      choices: ["Magician (Arcana)", "Magician (Nature)", "Warden"],
      "magician (arcana)": {
        name: "Magician (Arcana)",
        spellcastingBonus: [{
          name: "Magician",
          "class": ["druid"],
          level: [0, 0],
          times: 1,
        }],
        addMod: [
          {type: "skill", field: "Arcana", mod: "Wis", text: "I can add my Wisdom modifier to Arcana rolls."},
        ],
        description: "I know one extra cantrip from the Druid spell list. I add my wisdom modifier to my Intelligence (Arcana) checks.",
      },
      "magician (nature)": {
        name: "Magician (Nature)",
        spellcastingBonus: [{
          name: "Magician",
          "class": ["druid"],
          level: [0, 0],
          times: 1,
        }],
        addMod: [
          {type: "skill", field: "Nature", mod: "Wis", text: "I can add my Wisdom modifier to Nature rolls."},
        ],
        description: "I know one extra cantrip from the Druid spell list. I add my wisdom modifier to my Intelligence (Nature) checks.",
      },
      "warden": {
        name: "Warden",
        armorProfs: [false, false, true, false],
        weaponProfs: [false, true],
        description: "Trained for battle, I gain proficiency with Martial weapons and training with Heavy armor."
      },
      description: desc([
        "I have dedicated myself to one of the following sacred roles.",
      ]),
    },
    "wild shape": {
      name: "Wild Shape",
      source: [["PHB2024", 80]],
      minlevel: 2,
      action: ["bonus action", "Wild Shape (Shift/Revert)"],
      usages: [0, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 4, 4, 4],
      recovery: "long rest",
      additional: levels.map(function (n) {
        if (n < 2) return "";
        var cr = n < 4 ? "1/4" : n < 8 ? "1/2" : 1;
        var hr = Math.floor(n / 2);
        var restr = n < 8 ? ", no fly" : "";
        return "CR " + cr + restr + "; " + hr + (restr.length ? " h" : " hours");
      }),
      description: desc([
        "Wild Shape allows me to transform into known beast forms as a bonus action, lasting for hours equal to half my druid level.", 
        "Regain 1 on a short rest or all on a long rest. Initially, I know 4 forms (CR 1/4 or lower, no flying). While transformed, I gain temp HP equal to my druid level, use the beast's physical stats and proficiencies, but retain my mental stats, class features, and languages.", 
        "I can't cast spells but maintain concentration. Equipment falls, merges, or is worn. The form ends if I'm incapacitated or die."
      ])
    },
    "wild companion": {
      name: "Wild Companion",
      source: [["PHB2024", 81]],
      minlevel: 2,
      spellcastingBonus: [{
        name: "Wild Companion",
        spells: ["find familiar"],
        selection: ["find familiar"],
        times: 1,
      }],
      description: desc([
        "As a Magic action, I can expend a spell slot or a use of Wild Shape to cast the Find Familiar spell without Material components.",
        "When I cast the spell in this way, the familiar is Fey and disappears when I finish a Long Rest.",
      ]),
    },
    "subclassfeature3": {
      name: "Druid Subclass",
      source: [["PHB2024", 81]],
      minlevel: 3,
      description: desc([
        "Choose a Druid subclass and put it in the 'Class' field.",
      ]),
    },
    "wild resurgence": {
      name: "Wild Resurgence",
      source: [["PHB2024", 81]],
      minlevel: 5,
      limfeaname: "Exchange Wild Shape",
      usages: 1,
      recovery: "long rest",
      description: desc([
        "Once per turn, I can regain a Wild Shape use by expending a spell slot. I can also exchange a Wild Shape use for a level 1 spell slot once per long rest.",
      ]),
    },
    "elemental fury": {
      name: "Elemental Fury",
      source: [["PHB2024", 81]],
      minlevel: 7,
      choices: ["Primal Strike", "Potent Spellcasting"],
      "primal strike": {
        name: "Primal Strike",
        description: desc([
          "Once on each of my turns when I hit a creature with an attack roll using a weapon, I can cause the target to take an extra 1d8 Cold, Fire, Lightning, or Thunder damage (choose on hit).",
        ]),
      },
      "potent spellcasting": {
        name: "Potent Spellcasting",
        calcChanges: {
          atkCalc: [
            function (fields, v, output) {
              if (v.thisWeapon[3] && /\bdruid\b/.test(v.thisWeapon[4]) && SpellsList[v.thisWeapon[3]].level === 0 && /\d/.test(fields.Damage_Die)) {
                output.extraDmg += What('Wis Mod');
              }
            },
            "My druid cantrips get my Wisdom modifier added to their damage."
          ],
          spellAdd: [
            function (spellKey, spellObj, spName) {
              if (spellObj.psionic || spellObj.level !== 0 || spName.indexOf("druid") == -1 || !What("Wis Mod") || Number(What("Wis Mod")) <= 0) return;
              return genericSpellDmgEdit(spellKey, spellObj, "\\w+\\.?", "Wis");
            },
            "My druid cantrips get my Wisdom modifier added to their damage."
          ]
        },
        description: desc([
          "I add my Wisdom modifier to the damage I deal with any Druid cantrip.",
        ]),
      },
      description: desc([
        "The might of the elements flows through me. I gain one of the following options.",
      ]),
    },
    "improved elemental fury": {
      name: "Improved Elemental Fury",
      source: [["PHB2024", 81]],
      minlevel: 15,
      choices: ["Primal Strike", "Potent Spellcasting"],
      "primal strike": {
        name: "Primal Strike",
        description: desc([
          "The extra damage of my Primal Strikes increases to 2d8",
        ]),
      },
      "potent spellcasting": {
        name: "Potent Spellcasting",
        description: desc([
          "When I cast a Druid cantrip with a range of 10 feet or greater, the spell's range increases by 300 feet.",
        ]),
      },
      description: desc([
        "The option I chose for Elemental Fury grow more powerful.",
      ]),
    },
    "beast spells": {
      name: "Beast Spells",
      source: [["PHB2024", 81]],
      minlevel: 18,
      description: desc([
        "I can cast spells while in Wild Shape, except those with costly/consumed material components",
      ]),
    },
    "epic boon": {
      name: "Epic Boon",
      source: [["PHB2024", 81]],
      minlevel: 19,
      description: desc([
        "I gain an Epic Boon feat (see chapter 5) or another feat of my choice for which I qualify.",
      ]),
    },
    "archdruid": {
      name: "Archdruid",
      source: [["PHB2024", 82]],
      minlevel: 20,
      limfeaname: "Nature Magician",
      usages: 1,
      recovery: "long rest",
      description: desc([
        "I regain a Wild Shape use when rolling initiative if I have none left. I can convert Wild Shape uses into a spell slot. 2 spell slot level/wild shape. I age more slowly."
      ]),
    },
  },
});
legacySubClassRefactor("druid", "land", {
  regExpSearch: /^(?=.*(druid))(?=.*(land)).*$/i,
  subname: "Circle of the Land",
  source: [["PHB2024", 84]],
  replaces: "circle of the land",
  features: {
    "subclassfeature3": {
      name: "Circle of the Land Spells",
      source: [["PHB2024", 84]],
      minlevel: 3,
      choices: ["Arid Land", "Polar Land", "Temperate Land", "Tropical Land"],
      "arid land": {
        name: "Arid Land",
        spellcastingExtra: ["blur", "burning hands", "fire bolt", "fireball", "blight", "wall of stone"],
        description: desc([
          "Whenever I finish a Long Rest, choose one type of land; arid, polar, temperate, or tropical. I have certain spells prepared based on the land chosen.",
        ]),
      },
      "polar land": {
        name: "Polar Land",
        spellcastingExtra: ["fog cloud", "hold person", "ray of frost", "sleet storm", "ice storm", "cone of cold"],
        description: desc([
          "Whenever I finish a Long Rest, choose one type of land; arid, polar, temperate, or tropical. I have certain spells prepared based on the land chosen.",
        ]),
      },
      "temperate land": {
        name: "Temperate Land",
        spellcastingExtra: ["misty step", "shocking grasp", "sleep", "lightning bolt", "freedom of movement", "tree stride"],
        description: desc([
          "Whenever I finish a Long Rest, choose one type of land; arid, polar, temperate, or tropical. I have certain spells prepared based on the land chosen.",
        ]),
      },
      "tropical land": {
        name: "Tropical Land",
        spellcastingExtra: ["acid splash", "ray of sickness", "web", "stinking cloud", "polymorph", "insect plague"],
        description: desc([
          "Whenever I finish a Long Rest, choose one type of land; arid, polar, temperate, or tropical. I have certain spells prepared based on the land chosen.",
        ]),
      },
      description: desc([
        "Whenever I finish a Long Rest, choose one type of land; arid, polar, temperate, or tropical. I have certain spells prepared based on the land chosen.",
      ]),
    },
    "subclassfeature3.1": {
      name: "Land's Aid",
      source: [["PHB2024", 85]],
      minlevel: 3,
      action: "action",
      description: desc([
        "As a Magic action, expend a Wild Shape use to create a 10-foot sphere within 60 feet. Chosen creatures in the sphere make a Constitution save against my spell DC, taking 2d6 Necrotic damage (half on success). One creature in the area regains 2d6 HP. Damage and healing increase to 3d6 at level 10 and 4d6 at level 14."
      ]),
    },
    "subclassfeature6": {
      name: "Natural Recovery",
      source: [["PHB2024", 85]],
      minlevel: 6,
      usages: 1,
      recovery: "long rest",
      description: desc([
        "Once per long rest, cast a prepared circle spell (level 1+) without using a spell slot. After a short rest, recover expended spell slots totaling up to half my druid level (rounded up, max 5th level)."
      ]),
    },
    "subclassfeature10": {
      name: "Nature's Ward",
      source: [["PHB2024", 85]],
      minlevel: 10,
      savetxt: {
        immune: ["Poisoned condition"],
      },
      choices: ["Arid Land", "Polar Land", "Temperate Land", "Tropical Land"],
      "arid land": {
        name: "Arid Land",
        dmgres: "Fire",
        description: desc([
          "I am immune to the Poisoned condition, and have damage resistance associated with my current land choice.[Fire]",
        ]),
      },
      "polar land": {
        name: "Polar Land",
        dmgres: "Cold",
        description: desc([
          "I am immune to the Poisoned condition, and have damage resistance associated with my current land choice.[Cold]",
        ]),
      },
      "temperate land": {
        name: "Temperate Land",
        dmgres: "Lightning",
        description: desc([
          "I am immune to the Poisoned condition, and have damage resistance associated with my current land choice.[Lightning]",
        ]),
      },
      "tropical land": {
        name: "Tropical Land",
        dmgres: "Poison",
        description: desc([
          "I am immune to the Poisoned condition, and have damage resistance associated with my current land choice.[Poison]",
        ]),
      },
      description: desc([
        "I am immune to the Poisoned condition, and have damage resistance associated with my current land choice.",
      ]),
    },
    "subclassfeature14": {
      name: "Nature's Sanctuary",
      source: [["PHB2024", 86]],
      minlevel: 14,
      action: [["action", "Summon Sanctuary"], ["bonus action", "Move Sanctuary"]],
      description: desc([
        "As a Magic action, I can use my Wild Shape to create a 15-foot cube within 120 feet. It lasts for 1 minute or until I'm incapacitated or die. In this area, my allies and I have Half Cover, and my allies gain the current Resistance from my Nature's Ward. As a Bonus Action, move the cube up to 60 feet within 120 feet",
      ]),
    },
  },
});
legacySubClassRefactor("druid", "moon", {
  regExpSearch: /^(?=.*(druid))(?=.*(moon)).*$/i,
  subname: "Circle of the Moon",
  source: [["PHB2024", 86]],
  replaces: "circle of the moon",
  spellcastingExtra: ["cure wounds", "moonbeam", "starry wisp", "conjure animals", "fount of moonlight", "mass cure wounds"],
  features: {
    "subclassfeature3": {
      name: "Circle Forms",
      source: [["PHB2024", 86]],
      minlevel: 3,
      description: desc([
        "In Wild Shape: My maximum form's Challenge Rating is my Druid level divided by 3. My AC becomes greatest of 13 plus my Wisdom modifier or the Beast's AC. I also gain Temporary Hit Points equal to three times my Druid level.",
      ]),
    },
    "subclassfeature6": {
      name: "Improved Circle Forms",
      source: [["PHB2024", 87]],
      minlevel: 6,
      description: desc([
        "In Wild Shape, I can choose to deal Radiant damage with my attacks. I also add my Wisdom modifier to Constitution saving throws.",
      ]),
    },
    "subclassfeature10": {
      name: "Moonlight Step",
      source: [["PHB2024", 87]],
      minlevel: 10,
      usages: "Wisdom modifier per ",
      usagescalc: "event.value = Math.max(1, What('Wis Mod'));",
      recovery: "long rest",
      description: desc([
        "As a Bonus Action, I can teleport up to 30 feet and gain Advantage on my next attack roll this turn. I can do this my Wisdom modifier per Long Rest or by expending a level 2+ spell slot.",      ]),
    },
    "subclassfeature14": {
      name: "Lunar Form",
      source: [["PHB2024", 87]],
      minlevel: 14,
      description: desc([
        "Once per turn, I can deal an extra 2d10 Radiant damage with a Wild Shape attack. When using Moonlight Step, I can also teleport one willing creature within 10 feet to a space within 10 feet of my destination.",      ]),
    },
  },
});
AddSubClass("druid", "sea", {
  regExpSearch: /^(?=.*(druid))(?=.*(sea)).*$/i,
  subname: "Circle of the Sea",
  source: [["PHB2024", 87]],
  spellcastingExtra: ["fog cloud", "gust of wind", "ray of frost", "shatter", "thunderwave", "lightning bolt", "water breathing", "control water", "ice storm", "conjure elemental", "hold monster"],
  features: {
    "subclassfeature3": {
      name: "Wrath of the Sea",
      source: [["PHB2024", 87]],
      minlevel: 3,
      action: "bonus action",
      description: desc([
        "As a Bonus Action, I can use my Wild Shape to create a 5-foot ocean spray around me for 10 minutes. Each turn, I can target a creature in the spray, forcing a Constitution save or dealing WIS*d6 Cold damage and pushing it 15 feet away.",
    ]),
    },
    "subclassfeature6": {
      name: "Aquatic Affinity",
      source: [["PHB2024", 87]],
      minlevel: 6,
      speed: {swim: {spd: "walk", enc: "walk"}},
      description: desc([
        "My ocean spray increases to a 10-foot radius, and I gain a Swim Speed equal to my walking Speed.",      ]),
    },
    "subclassfeature10": {
      name: "Stormborn",
      source: [["PHB2024", 87]],
      minlevel: 10,
      description: desc([
        "While my ocean spray is active, I gain a Fly Speed equal to my walking Speed and Resistance to Cold, Lightning, and Thunder damage",      ]),
    },
    "subclassfeature14": {
      name: "Oceanic Gift",
      source: [["PHB2024", 88]],
      minlevel: 14,
      description: desc([
        "I can manifest my ocean spray around another willing creature within 60 feet. By expending two uses of Wild Shape, I can cover both myself and the other creature with the spray.",
      ]),
    },
  },
});
legacySubClassRefactor("druid", "stars", {
  regExpSearch: /^(?=.*(druid))(?=.*(stars)).*$/i,
  subname: "Circle of Stars",
  source: [["PHB2024", 88]],
  replaces: "circle of the stars",
  features: {
    "subclassfeature3": {
      name: "Star Map",
      source: [["PHB2024", 88]],
      minlevel: 3,
      description: desc([
        "I create a star map as my Spellcasting Focus. With it, I have Guidance and Guiding Bolt prepared. I can cast Guiding Bolt without a spell slot, up to my Wisdom modifier times per Long Rest. If lost, I can recreate the map during a Short or Long Rest.",
      ]),
    },
    "subclassfeature3.1": {
      name: "Starry Form",
      source: [["PHB2024", 88]],
      minlevel: 3,
      toNotesPage: [{
        name: "Starry Forms",
        note: [
          "Archer : A constellation of an archer appears on me. When I activate this form and as a Bonus Action on my subsequent turns while it lasts, I can make a ranged spell attack, hurling a luminous arrow that targets one creature within 60 feet. On a hit, the attack deals Radiant damage equal to 1d8 plus my Wisdom modifier.",
          "Chalice : A constellation of a life-giving goblet appears on me. Whenever I cast a spell using a spell slot that restores Hit Points to a creature, I or another creature within 30 feet of me can regain Hit Points equal to 1d8 plus my Wisdom modifier.",
          "Dragon : A constellation of a wise dragon appears on me. When I make an Intelligence or a Wisdom check or a Constitution saving throw to maintain Concentration, I can treat a roll of 9 or lower on the d20 as a 10.",
        ],
      }],
      description: desc([
        "As a Bonus Action, I can use Wild Shape to assume a starry form for 10 minutes. I choose one constellation: Archer (ranged attack dealing 1d8 + Wisdom modifier Radiant damage), Chalice (heal an additional 1d8 + Wisdom modifier), or Dragon (treat rolls of 9 or lower as 10 on certain checks)."
      ]),
    },
    "subclassfeature6": {
      name: "Cosmic Omen",
      source: [["PHB2024", 89]],
      minlevel: 6,
      description: desc([
        "After a long rest, I roll a die for omens. If even, I can add 1d6 to an ally's roll; if odd, subtract 1d6 from an enemy's roll. I can use this Reaction equal to my Wisdom modifier per Long Rest.",      ]),
    },
    "subclassfeature10": {
      name: "Twinkling Constellations",
      source: [["PHB2024", 89]],
      minlevel: 10,
      description: desc([
        "My starry form improves: Archer and Chalice deal 2d8 damage/heal, and Dragon grants a Fly Speed of 20 feet. I can change constellations at the start of each turn.",
      ]),
    },
    "subclassfeature14": {
      name: "Full of Stars",
      source: [["PHB2024", 89]],
      minlevel: 14,
      dmgres: ["Bludgeoning", "Piercing", "Slashing"],
      description: desc([
        "while in starry form, I gain Resistance to Bludgeoning, Piercing, and Slashing damage.",
        ]),
    },
  },
});
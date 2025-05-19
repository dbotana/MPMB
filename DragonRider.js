/* -WHAT IS THIS?-
This file adds optional material to "MPMB's Character Record Sheet" found at https://flapkan.com/mpmb/charsheets
Import this file using the "Add Extra Materials" bookmark.

-KEEP IN MIND-
It is recommended to enter the code in a fresh sheet before adding any other information (i.e. before making your character with it).
*/

/* -INFORMATION-
Subject: Class
Effect: This script adds the "Dragon Rider" class and its subclasses
Code by: [Your Name]
Date: 2025-05-18 (sheet v13)
*/

var iFileName = "DragonRider.js";

RequiredSheetVersion("13.2.0");

SourceList["DR"] = {
    name: "Dragon Rider",
    abbreviation: "DR",
    group: "Homebrew",
    date: "2025/05/18"
};
// Add Dragon Maneuver choice system
// This will be integrated with the Dragon Rider class features
// We'll create a feature selector function

function AddDragonManeuverOptions() {
    // Extract all maneuvers from the list
    var maneuverArray = [];
    for (var maneuver in DragonManeuversList) {
        if (DragonManeuversList.hasOwnProperty(maneuver)) {
            maneuverArray.push({
                name: DragonManeuversList[maneuver].name,
                feature: maneuver,
                prerequisite: DragonManeuversList[maneuver].prereqeval,
                tier: DragonManeuversList[maneuver].tier
            });
        }
    }

    // Sort maneuvers by tier
    maneuverArray.sort(function(a, b) {
        return a.tier - b.tier || a.name.localeCompare(b.name);
    });

    // Add the maneuvers as feature choices
    for (var i = 0; i < maneuverArray.length; i++) {
        var curMan = maneuverArray[i];
        var maneuverObject = DragonManeuversList[curMan.feature];

        // Create a feature object for each maneuver
        var featureObj = {
            name : maneuverObject.name,
            source : maneuverObject.source,
            description : maneuverObject.description,
            prereqeval : maneuverObject.prereqeval
        };

        // Add action if present
        if (maneuverObject.action) {
            featureObj.action = maneuverObject.action;
        }

        // Add to dragon maneuvers feature
        AddFeatureChoice(ClassList["dragon rider"].features["dragon maneuvers"], true, maneuverObject.name, featureObj, "Dragon Maneuvers (Tier " + maneuverObject.tier + ")");
    }
}

// This function can be called after all class features are defined
// It will populate the available maneuver options dynamically

ClassList["dragon rider"] = {
    regExpSearch: /^(?=.*dragon)(?=.*rider).*$/i,
    name: "Dragon Rider",
    source: ["DR", 0],
    primaryAbility: "Strength or Dexterity",
    prereqs: "Strength 13",
    die: 8,
    improvements: [0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 5, 5],
    saves: ["Str", "Wis"],
    skills: ["Athletics", "Acrobatics", "Stealth", "Nature", "Animal Handling", "Perception", "Intimidation"],
    skillstxt: "Choose two from Athletics, Acrobatics, Stealth, Nature, Animal Handling, Perception, and Intimidation",
    armor: [
        [true, true, false, true], // Light, Medium, Shields
    ],
    weapons: [
        [true, true], // Simple, Martial
    ],
    equipment: "Dragon Rider starting equipment:" +
        "\n \u2022 One martial weapon;" +
        "\n \u2022 Any two simple weapons;" +
        "\n \u2022 (a) Leather armor or (b) scale mail;" +
        "\n \u2022 Leatherworker's tools and an explorer's pack;" +
        "\n\nAlternatively, choose 5d4 \xD7 10 gp worth of starting equipment instead of both the class' and the background's starting equipment.",
    toolProfs: [["Leatherworker's tools", 1]],
    subclasses: ["Draconic Vein", []],
    attacks: [1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
    features: {
        "novice rider": {
            name: "Novice Rider",
            source: ["DR", 0],
            minlevel: 1,
            description: "\n   I am granted a Dragon Companion that grows alongside me" +
                "\n   I may communicate telepathically with my Companion while they are within 1 mile of me"
        },
        "draconic vein": {
            name: "Draconic Vein",
            source: ["DR", 0],
            minlevel: 1,
            description: "\n   Choose a Draconic Vein (Dragon Knight or Dragon Outrider) and put it in the \"Class\" field"
        },
        "fighting style": {
            name: "Fighting Style",
            source: ["DR", 0],
            minlevel: 2,
            description: "\n   Choose a Fighting Style using the \"Choose Feature\" button above",
            choices: ["Archery", "Great Weapon Fighting", "Dueling", "Two-Weapon Fighting"],
            "archery": {
                name: "Archery Fighting Style",
                description: "\n   I gain a +2 bonus to attack rolls I make with ranged weapons",
                calcChanges: {
                    atkCalc: [
                        function (fields, v, output) {
                            if (v.isRangedWeapon) output.extraHit += 2;
                        },
                        "I get a +2 bonus on attack rolls made with ranged weapons."
                    ]
                }
            },
            "great weapon fighting": {
                name: "Great Weapon Fighting Style",
                description: "\n   When rolling 1 or 2 on damage die for two-handed weapon, I can reroll the die; Must use the new roll",
                calcChanges: {
                    atkAdd: [
                        function (fields, v) {
                            if (v.isMeleeWeapon && (/\b(2|two)-?hand(ed)?s?\b/i).test(fields.Description)) {
                                fields.Description += (fields.Description ? '; ' : '') + 'Re-roll 1 or 2 on damage die once';
                            }
                        },
                        "When using a two-handed weapon, I can re-roll a 1 or 2 on the damage die once."
                    ]
                }
            },
            "dueling": {
                name: "Dueling Fighting Style",
                description: "\n   While wielding a melee weapon in one hand and no weapon in my other hand,\n   I gain a +2 bonus to damage rolls with that melee weapon",
                calcChanges: {
                    atkCalc: [
                        function (fields, v, output) {
                            if (v.isMeleeWeapon && !v.isNaturalWeapon && !(/\b(2|two)-?hand(ed)?s?\b/i).test(v.theWea.description) && !v.isOffHand) output.extraDmg += 2;
                        },
                        "When I'm wielding a melee weapon in one hand and no weapon in my other hand, I do +2 damage with that melee weapon. This is not added if the weapon has the two-handed property."
                    ]
                }
            },
            "two-weapon fighting": {
                name: "Two-Weapon Fighting Style",
                description: "\n   I can add my ability modifier to the damage of my off-hand attacks",
                calcChanges: {
                    atkCalc: [
                        function (fields, v, output) {
                            if (v.isOffHand) output.modToDmg = true;
                        },
                        "When engaging in two-weapon fighting, I can add my ability modifier to the damage of my off-hand attacks."
                    ]
                }
            }
        },
        "dragon trainee" : {
            name : "Dragon Trainee",
            source : ["DR", 0],
            minlevel : 3,
            description : "\n   I can create a saddle for my dragon with 10 gp of leather and 8 hours of work" +
                "\n   I gain the ability to ride my Dragon Companion while it is walking"
        },
        "dragon maneuvers" : {
            name : "Dragon Maneuvers",
            source : ["DR", 0],
            minlevel : 3,
            description : "\n   I learn 3 Dragon Maneuvers and gain 3 Maneuver Points" +
                "\n   If a maneuver requires a saving throw, the DC equals 8 + dragon's Str mod + proficiency" +
                "\n   I learn additional maneuvers at higher levels" +
                "\n   I gain additional Maneuver Points as I gain levels in this class" +
                "\n   I regain all expended Maneuver Points when I finish a short or long rest",
            additional : levels.map(function (n) {
                if (n < 3) return "";
                var maneuvers = n < 6 ? 3 : n < 10 ? 4 : n < 14 ? 5 : n < 18 ? 6 : 7;
                var points = n < 4 ? 3 : n;
                return maneuvers + " maneuvers, " + points + " points";
            }),
            usages : ["", "", 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
            recovery : "short rest"
        },
        "ability score improvement" : {
            name : "Ability Score Improvement",
            source : ["DR", 0],
            minlevel : 4,
            description : "\n   I can increase one ability score by 2, or two ability scores by 1, up to a maximum of 20" +
                "\n   Alternatively, I can select one feat instead"
        },
        "extra attack" : {
            name : "Extra Attack",
            source : ["DR", 0],
            minlevel : 5,
            description : "\n   I can attack twice, instead of once, whenever I take the Attack action on my turn"
        },
        "adept rider" : {
            name : "Adept Rider",
            source : ["DR", 0],
            minlevel : 6,
            description : "\n   I can now ride my Dragon Companion while it flies" +
                "\n   My attacks deal +1 damage while mounted" +
                "\n   I learn one additional Dragon Maneuver",
            calcChanges : {
                atkCalc : [
                    function (fields, v, output) {
                        if (v.isMeleeWeapon || v.isRangedWeapon) {
                            output.extraDmg += 1;
                        }
                    },
                    "My attacks deal +1 damage while mounted on my Dragon Companion."
                ]
            }
        },
        "draconic awareness" : {
            name : "Draconic Awareness",
            source : ["DR", 0],
            minlevel : 9,
            description : "\n   I gain advantage on initiative checks"
        },
        "improved saddle" : {
            name : "Improved Saddle",
            source : ["DR", 0],
            minlevel : 10,
            description : "\n   I can craft an improved saddle with 25 gp of leather and 8 hours of work" +
                "\n   It costs only 5 feet of movement to mount or dismount" +
                "\n   I can no longer be involuntarily dismounted"
        },
        "signature maneuver" : {
            name : "Signature Maneuver",
            source : ["DR", 0],
            minlevel : 10,
            description : "\n   I choose one Tier 1 Dragon Maneuver I know to be my Signature Maneuver" +
                "\n   I can perform it once per short or long rest without expending Maneuver points" +
                "\n   I also learn one additional Dragon Maneuver"
        },
        "bond of scales" : {
            name : "Bond of Scales",
            source : ["DR", 0],
            minlevel : 13,
            description : "\n   During a short rest, any Hit Dice I spend also heal my Dragon Companion by the same amount"
        },
        "expert rider" : {
            name : "Expert Rider",
            source : ["DR", 0],
            minlevel : 14,
            description : "\n   While mounted, my attacks deal +3 additional damage" +
                "\n   I score a critical hit on a 19 or 20 on the d20 attack roll while mounted",
            calcChanges : {
                atkCalc : [
                    function (fields, v, output) {
                        if (v.isMeleeWeapon || v.isRangedWeapon) {
                            output.extraDmg += 3;
                        }
                    },
                    "My attacks deal +3 damage while mounted on my Dragon Companion."
                ],
                atkAdd : [
                    function (fields, v) {
                        if (v.isMeleeWeapon || v.isRangedWeapon) {
                            fields.Description += (fields.Description ? '; ' : '') + 'Crit on 19-20 while mounted';
                        }
                    },
                    "My attacks score a critical hit on a 19 or 20 while mounted on my Dragon Companion."
                ]
            }
        },
        "isolated prey" : {
            name : "Isolated Prey",
            source : ["DR", 0],
            minlevel : 17,
            description : "\n   As a bonus action, I can target a creature I can see" +
                "\n   My Dragon Companion becomes fixated on the target" +
                "\n   Attacks made by me and my Companion have advantage against the target" +
                "\n   These attacks also deal an additional weapon die damage" +
                "\n   Opportunity attacks against the target no longer require a reaction" +
                "\n   This effect lasts for 1 minute or until the creature is killed",
            action : [["bonus action", ""]]
        },
        "perfected maneuvers" : {
            name : "Perfected Maneuvers",
            source : ["DR", 0],
            minlevel : 18,
            description : "\n   My Signature Maneuver is perfected and no longer costs Maneuver points" +
                "\n   I select a new Signature Maneuver from any tier" +
                "\n   I also learn one additional Dragon Maneuver"
        },
        "master rider" : {
            name : "Master Rider",
            source : ["DR", 0],
            minlevel : 20,
            description : "\n   While mounted, my Dragon Companion and I have advantage on all saving throws" +
                "\n   Our telepathic bond persists as long as we are on the same plane" +
                "\n   If I have 0 Maneuver points when rolling initiative, I start with 5"
        }
    }
};

// Add Dragon Knight subclass
AddSubClass("dragon rider", "dragon knight", {
    regExpSearch : /^(?=.*dragon)(?=.*knight).*$/i,
    subname : "Dragon Knight",
    source : ["DR", 0],
    features : {
        "subclassfeature1" : {
            name : "Heavy Armor Proficiency",
            source : ["DR", 0],
            minlevel : 1,
            description : "\n   I gain proficiency with heavy armor",
            armorProfs : [false, false, true, false]
        },
        "subclassfeature3" : {
            name : "Scaled Hide",
            source : ["DR", 0],
            minlevel : 3,
            description : "\n   I gain +3 maximum HP and +1 additional maximum HP for each Dragon Rider level I gain",
            calcChanges : {
                hp : function (totalHD, HDobj, prefix) {
                    if (classes.known["dragon rider"]) {
                        return [classes.known["dragon rider"].level + 2, "Scaled Hide (Dragon Knight)"];
                    }
                }
            }
        },
        "subclassfeature7" : {
            name : "Tooth and Claw",
            source : ["DR", 0],
            minlevel : 7,
            description : "\n   When I deal damage to a creature, I can deal additional damage equal to my Dragon Rider level",
            usages : 1,
            recovery : "short rest"
        },
        "subclassfeature11" : {
            name : "Draconic Ability",
            source : ["DR", 0],
            minlevel : 11,
            description : "\n   My Strength or Constitution score maximum increases to 22",
            scorestxt : "My Strength or Constitution score maximum increases to 22"
        },
        "subclassfeature15" : {
            name : "Strength of Scale",
            source : ["DR", 0],
            minlevel : 15,
            description : "\n   Whenever I roll a Strength check or Strength saving throw, I may add a d6 to the total"
        },
        "subclassfeature19" : {
            name : "Aura of Dominance",
            source : ["DR", 0],
            minlevel : 19,
            description : "\n   As an action, I gain resistance to all damage types for 1 minute" +
                "\n   During this time, my weapon attacks deal an additional weapon die of damage" +
                "\n   The damage type is determined by my dragon companion's type",
            usages : 1,
            recovery : "long rest",
            action : [["action", ""]]
        }
    }
});

// Add Dragon Outrider subclass
AddSubClass("dragon rider", "dragon outrider", {
    regExpSearch : /^(?=.*dragon)(?=.*outrider).*$/i,
    subname : "Dragon Outrider",
    source : ["DR", 0],
    features : {
        "subclassfeature1" : {
            name : "Perception Proficiency",
            source : ["DR", 0],
            minlevel : 1,
            description : "\n   I gain proficiency in Perception; expertise if already proficient",
            skillstxt : "Proficiency in Perception; expertise if already proficient"
        },
        "subclassfeature3" : {
            name : "Moonlight Hunter",
            source : ["DR", 0],
            minlevel : 3,
            description : "\n   My Dragon Companion and I gain darkvision out to a range of 120 ft",
            vision : [["Darkvision", 120]]
        },
        "subclassfeature7" : {
            name : "Supple Wings",
            source : ["DR", 0],
            minlevel : 7,
            description : "\n   My Dragon Companion can Dash as a bonus action" +
                "\n   Any stealth checks made while mounted gain advantage"
        },
        "subclassfeature11" : {
            name : "Draconic Ability",
            source : ["DR", 0],
            minlevel : 11,
            description : "\n   My Dexterity or Wisdom score maximum increases to 22",
            scorestxt : "My Dexterity or Wisdom score maximum increases to 22"
        },
        "subclassfeature15" : {
            name : "Take Aim",
            source : ["DR", 0],
            minlevel : 15,
            description : "\n   Once per turn, I may choose to re-roll one attack that misses"
        },
        "subclassfeature19" : {
            name : "Aura of Agility",
            source : ["DR", 0],
            minlevel : 19,
            description : "\n   As an action, I can enhance my quickness and accuracy massively for 1 minute" +
                "\n   The movement speed of me and my companion is doubled" +
                "\n   I may make an additional attack per attack action",
            usages : 1,
            recovery : "long rest",
            action : [["action", ""]]
        }
    }
});


CreatureList["dragon companion"] = {
    name : "Dragon Companion",
    source : ["DR", 0],
    size : 3, // Medium
    type : "Dragon",
    companion : "dragon rider",
    companionApply : "dragonCompanion",
    header : "Dragon Companion",
    alignment : "Same as Rider",
    ac : 15,
    hp : 14,
    hd : [1, 12],
    speed : "20 ft, fly 20 ft",
    scores : [16, 12, 14, 10, 10, 11],
    saves : ["", "", "", "", "", ""],
    skills : {
        "perception" : 2,
        "stealth" : 3
    },
    damage_resistances : "",
    senses : "Darkvision 60 ft",
    languages : "Common, Draconic",
    challengeRating : "1",
    proficiencyBonus : 2,
    attacksAction : 1,
    attacks : [{
        name : "Bite",
        ability : 1,
        damage : [1, 6, "piercing"],
        range : "Melee (5 ft)",
        description : "Plus 1d4 elemental damage (same type as breath weapon)",
    }, {
        name : "Tail",
        ability : 1,
        damage : [1, 8, "bludgeoning"],
        range : "Melee (5 ft)",
        description : ""
    }, {
        name : "Claw",
        ability : 1,
        damage : [1, 4, "slashing"],
        range : "Melee (5 ft)",
        description : ""
    }],
    features : [{
        name : "Breath Attack",
        description : "The Dragon can use a breath attack once per short or long rest. Each creature caught in its range must succeed on a DC 12 saving throw or take 2d6 damage of the appropriate type (half on success)."
    }, {
        name : "Darkvision",
        description : "The Dragon has darkvision with a range of 60 ft."
    }],
    traits : [{
        name : "Bond",
        description : "The Dragon shares a magical bond with its rider. It operates on the rider's initiative and shares their action."
    }],
    actions : [{
        name : "Breath Attack (Recharges after a Short or Long Rest)",
        description : "The dragon exhales destructive energy in either a 15-foot cone or 30-foot line. Each creature in that area must make a DC 12 saving throw, taking 2d6 damage on a failed save, or half as much damage on a successful one."
    }]
};

// Dragon Rider Maneuvers List
DragonManeuversList = {
    // Tier 1 Maneuvers (1 Point)
    "charging strike" : {
        name : "Charging Strike",
        source : ["DR", 0],
        description : "Action while mounted; Dragon charges; if moved 10+ ft straight, +2d8 damage; target Str save or prone",
        prereqeval : function(v) { return true; },
        tier : 1,
        points : 1,
        action : ["action", ""],
        dragon_form_only : true
    },
    "coordinated flank" : {
        name : "Coordinated Flank",
        source : ["DR", 0],
        description : "Bonus action while unmounted; If within 5 ft of same creature, advantage on attacks until next turn",
        prereqeval : function(v) { return true; },
        tier : 1,
        points : 1,
        action : ["bonus action", ""]
    },
    "swipe the legs" : {
        name : "Swipe the Legs",
        source : ["DR", 0],
        description : "Bonus action; Dragon makes tail attack; if hit, target makes Str save or is knocked prone",
        tier : 1,
        points : 1,
        action : ["bonus action", ""],
        dragon_form_only : true
    },
    "take the hit" : {
        name : "Take the Hit",
        source : ["DR", 0],
        description : "Reaction when hit by attack; Dragon takes hit for you or you take hit for Dragon; must be within 5 ft",
        tier : 1,
        points : 1,
        action : ["reaction", ""]
    },
    "evasive maneuvers" : {
        name : "Evasive Maneuvers",
        source : ["DR", 0],
        description : "Bonus action while riding Dragon; Take Dodge action for both you and your Dragon companion",
        tier : 1,
        points : 1,
        action : ["bonus action", ""],
        dragon_form_only : true
    },
    "create an opening" : {
        name : "Create an Opening",
        source : ["DR", 0],
        description : "Reaction; Dragon creates gust with wings; allies within 20 ft can move without opportunity attacks",
        tier : 1,
        points : 1,
        action : ["reaction", ""],
        dragon_form_only : true
    },
    "bolstered defense" : {
        name : "Bolstered Defense",
        source : ["DR", 0],
        description : "Bonus action; Increase AC by Dragon's Con modifier until beginning of next turn",
        prereqeval : function(v) {
		    return classes.known.dragonrider && classes.known.dragonrider.subclass.indexOf("knight") !== -1 ? true : "skip";
	    },
        tier : 1,
        points : 1,
        action : ["bonus action", ""],
    },
    "scan the perimeter" : {
        name : "Scan the Perimeter",
        source : ["DR", 0],
        description : "Bonus action; Invisible or hidden creatures within 60 ft revealed only to you until next turn",
        prereqeval : function(v) {
		    return classes.known.dragonrider && classes.known.dragonrider.subclass.indexOf("outrider") !== -1 ? true : "skip";
	    },
        tier : 1,
        points : 1,
        action : ["bonus action", ""],
    },
    
    // Tier 2 Maneuvers (2 Points)
    "drag 'n drop" : {
        name : "Drag 'n Drop",
        source : ["DR", 0],
        description : "If bite hits medium or smaller creature; Str save or grappled & restrained; Dragon moves at half speed",
        prereqeval : function(v) { return classes.known["dragon rider"].level >= 5; },
        tier : 2,
        points : 2,
        dragon_form_only : true
    },
    "channeled breath" : {
        name : "Channeled Breath",
        source : ["DR", 0],
        description : "Action; 15 ft cone save vs breath; 4d8 dmg or half on save; +1d8 per extra 2 points spent",
        prereqeval : function(v) { return classes.known["dragon rider"].level >= 5; },
        tier : 2,
        points : 2,
        action : ["action", ""],
        additional_points : true
    },
    "fury strikes" : {
        name : "Fury Strikes",
        source : ["DR", 0],
        description : "Action; Dragon makes bite and two claw attacks; if all 3 hit, regain 1 maneuver point",
        prereqeval : function(v) { return classes.known["dragon rider"].level >= 5; },
        tier : 2,
        points : 2,
        action : ["action", ""],
        dragon_form_only : true
    },
    "diving strike" : {
        name : "Diving Strike",
        source : ["DR", 0],
        description : "Action; Dismount mid-air; attack with adv. + fall damage; Dex save (DC 15+) to avoid fall damage",
        prereqeval : function(v) { return classes.known["dragon rider"].level >= 5; },
        tier : 2,
        points : 2,
        action : ["action", ""],
        dragon_form_only : true
    },
    "manifestation knight" : {
        name : "Manifestation (Knight)",
        source : ["DR", 0],
        description : "Bonus action; Draconic claw; 1d10+Str slashing & 1d8 elemental; +1d8 per extra 2 points spent",
        prereqeval : function(v) {
		    return classes.known.dragonrider >=5 && classes.known.dragonrider.subclass.indexOf("knight") !== -1 ? true : "skip";
	    },
        tier : 2,
        points : 2,
        action : ["bonus action", ""],
        additional_points : true
    },
    "manifestation outrider" : {
        name : "Manifestation (Outrider)",
        source : ["DR", 0],
        description : "Bonus action; Manifest draconic wings; gain fly speed equal to Dragon's for 1 minute",
        prereqeval : function(v) {
		    return classes.known.dragonrider >=5 && classes.known.dragonrider.subclass.indexOf("outrider") !== -1 ? true : "skip";
	    },
        tier : 2,
        points : 2,
        action : ["bonus action", ""],
    },
    
    // Tier 3 Maneuvers (5 Points)
    "ravage" : {
        name : "Ravage",
        source : ["DR", 0],
        description : "If Dragon's bite hits; target Str save or takes bite damage + 10d6 slashing damage",
        prereqeval : function(v) { return classes.known["dragon rider"].level >= 10; },
        tier : 3,
        points : 5,
        dragon_form_only : true
    },
    "recharge" : {
        name : "Recharge",
        source : ["DR", 0],
        description : "Action; Funnel energy into Dragon to immediately recharge its breath attack",
        prereqeval : function(v) { return classes.known["dragon rider"].level >= 10; },
        tier : 3,
        points : 5,
        action : ["action", ""]
    },
    "unleash" : {
        name : "Unleash",
        source : ["DR", 0],
        description : "Action; Dragon enters fury for 1 min; 2 attacks, extra damage die, breath recharge 5+ on d6, DC 12 check at end",
        prereqeval : function(v) { return classes.known["dragon rider"].level >= 10; },
        tier : 3,
        points : 5,
        action : ["action", ""]
    }
};

AddDragonManeuverOptions();

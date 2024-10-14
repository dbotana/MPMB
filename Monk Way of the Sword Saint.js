/*	-WHAT IS THIS?-
	This file adds optional material to "MPMB's Character Record Sheet" found at https://flapkan.com/mpmb/charsheets
	Import this file using the "Add Extra Materials" bookmark.
	-KEEP IN MIND-
	It is recommended to enter the code in a fresh sheet before adding any other information (i.e. before making your character with it).
*/

/*	-INFORMATION-
	Subject:	Subclass
	Effect:		This script adds a subclass for the Monk, called "Way of the Sword Saint" from KibblesTasty https://www.gmbinder.com/share/-N46VhAUgbdaHVZFlhaS
	Code by:	Rocky
	Date:		2024-10-14 (sheet v13)
*/
var iFileName = "Monk_Way_of_the_Sword_Saint.js";

RequiredSheetVersion("13");

SourceList["WSS"] = {
    name : "Way of the Sword Saint",
    abbreviation : "WSS",
    abbreviationSpellsheet : "SS",
    group : "Rocky's Homebrew",
    date : "2024/10/14"
};

AddSubClass("monk", "way of the sword saint", {
    regExpSearch : /^(?=.*sword)(?=.*saint)((?=.*(monk|monastic))|(((?=.*martial)(?=.*(artist|arts)))|((?=.*spiritual)(?=.*warrior)))).*$/i,
    subname : "Way of the Sword Saint",
    source : [["WSS", 1]],
    features : {
        spellcastingKnown: {
            spells: "list",
            prepared: true,
          },
        "subclassfeature3" : {
            name : "Mystical Techniques",
            source : [["WSS", 1]],
            minlevel : 3,
            description : desc([
                "I learn Mystical Techniques that allow me to perform supernatural feats with weapons.",
                "I learn three techniques at 3rd level, two more at 6th, 11th, and 17th level.",
                "I can spend ki points on techniques equal to my proficiency bonus per turn."
            ]),
            additional : levels.map(function (n) {
                return n < 6 ? "3 techniques" :
                       n < 11 ? "5 techniques" :
                       n < 17 ? "7 techniques" :
                                "9 techniques";
            }),
            extraname: "Mystical Technique Options",
            extrachoices: ["Agile Defense (3+)", "Cut the Weave (6+)", "Dancing Weapon (3+)", 
                           "Deft Attack (3+)", "Dimension Slash (11+)", "Distracting Strike (3+)", 
                           "Imparted Force (3+)", "Instant Strike (3+)", "Iron Wind Strike (11+)", 
                           "Sever Soul (17+)", "Sharpen the Blade (6+)", "Slashing Spin (3+)", 
                           "Skyward Leap (3+)", "Steel Wind Strike (11+)", "Sundering Strike (11+)", 
                           "Sword Spirit (6+)", "Vaulting Strike (3+)"],
            extraTimes: levels.map(function(n) {
                return n < 6 ? 3 : n < 11 ? 5 : n < 17 ? 7 : 9;
            }),
            "agile defense (3+)": {
                name: "Agile Defense",
                source: [["WSS", 1]],
                prereqeval: function(v) { return classes.known.monk.level >= 3; },
                description : desc([
                    "As a reaction to being attacked, roll your Martial Arts die and increase your AC by that value.",
                    "If the attack still hits, reduce damage by the value rolled + your proficiency bonus."
                ]),
                action : [["reaction", ""]],
                additional: "1 ki point"
            },
            "cut the weave (6+)": {
                name: "Cut the Weave",
                source: [["WSS", 1]],
                prereqeval: function(v) { return classes.known.monk.level >= 6; },
                description : desc([
                    "Spend 3 ki points to cast dispel magic with a range of 5 feet.",
                    "Alternatively, attack a magical barrier to open a hole until your next turn."
                ]),
                additional: "3 ki points"
            },
            "dancing weapon (3+)" : {
                name : "Dancing Weapon",
                source : [["WSS", 1]],
                prereqeval: function(v) { return classes.known.monk.level >= 3; },
                description : desc([
                    "As a bonus action, infuse a monk weapon with ki, animating it with your will.",
                    "Until the end of your next turn, you can attack with it as if holding it, causing it to fly up to 30 feet before striking a target."
                ]),
                action : [["bonus action", ""]],
                additional: "1 ki point"
            },
            "deft attack (3+)" : {
                name : "Deft Attack",
                source : [["WSS", 1]],
                prereqeval: function(v) { return classes.known.monk.level >= 3; },
                description : desc([
                    "When you make an attack roll, gain advantage on the attack.",
                    "If the attack hits, add your Martial Arts die to the damage dealt."
                ]),
                additional: "1 ki point"
            },
            "dimension slash (11+)" : {
                name : "Dimension Slash",
                source : [["WSS", 1]],
                prereqeval: function(v) { return classes.known.monk.level >= 11; },
                description : desc([
                    "You can cast dimension cutter, slashing apart dimensional space.",
                    "Each creature in a 15-foot cone takes 6d6 force damage."
                ]),
                additional: "6 ki points"
            },
            "distracting strike (3+)" : {
                name : "Distracting Strike",
                source : [["WSS", 1]],
                prereqeval: function(v) { return classes.known.monk.level >= 3; },
                description : desc([
                    "When you hit a creature with a weapon attack, deal additional damage equal to your Martial Arts die.",
                ]),
                additional: "1 ki point"
            },
            "imparted force (3+)" : {
                name : "Imparted Force",
                source : [["WSS", 1]],
                prereqeval: function(v) { return classes.known.monk.level >= 3; },
                description : desc([
                    "When you hit a target with an attack, expend up to 3 ki points.",
                    "Deal additional damage equal to rolls of your Martial Arts die and push the target 10 feet per ki point spent."
                ]),
                additional: "1 ki point"
            },
            "instant strike (3+)" : {
                name : "Instant Strike",
                source : [["WSS", 1]],
                prereqeval: function(v) { return classes.known.monk.level >= 3; },
                description : desc([
                    "As a reaction to a creature moving within your reach, make a melee weapon attack against them."
                ]),
                action : [["reaction", ""]],
                additional: "1 ki point"
            },
            "iron wind strike (11+)" : {
                name : "Iron Wind Strike",
                source : [["WSS", 1]],
                prereqeval: function(v) { return classes.known.monk.level >= 11; },
                description : desc([
                    "Cast iron wind strike, choosing up to three creatures within range.",
                    "Make a melee weapon attack against each target. On hit, deal 3d8 damage of the weapon's type."
                ]),
                additional: "3 ki points"
            },
            "sever soul (17+)" : {
                name : "Sever Soul",
                source : [["WSS", 1]],
                prereqeval: function(v) { return classes.known.monk.level >= 17; },
                description : desc([
                    "When you strike a creature, attempt to sever its soul.",
                    "The target must make a Constitution saving throw or take necrotic damage equal to 6 rolls of your Martial Arts die and gain exhaustion."
                ]),
                additional: "6 ki points"
            },
            "sharpen the blade (6+)" : {
                name : "Sharpen the Blade",
                source : [["WSS", 1]],
                prereqeval: function(v) { return classes.known.monk.level >= 6; },
                description : desc([
                    "Infuse a monk weapon with ki, granting it a bonus to attack and damage rolls equal to ki spent for 1 minute.",
                    "This bonus can stack with existing bonuses but cannot exceed +3."
                ]),
                additional: "1 ki point"
            },
            "slashing spin (3+)" : {
                name : "Slashing Spin",
                source : [["WSS", 1]],
                prereqeval: function(v) { return classes.known.monk.level >= 3; },
                description : desc([
                    "As an attack as part of the attack action, whirl your blade in a circle.",
                    "All creatures within 5 feet must make a Dexterity saving throw or take damage equal to your Martial Arts die + Dexterity modifier."
                ]),
                additional: "1 ki point"
            },
            "skyward leap (3+)" : {
                name : "Skyward Leap",
                source : [["WSS", 1]],
                prereqeval: function(v) { return classes.known.monk.level >= 3; },
                description : desc([
                    "As a bonus action, jump 20 feet per ki spent and hover as if under levitate until the end of your next turn."
                ]),
                action : [["bonus action", ""]],
                additional: "1 ki point"
            },
            "steel wind strike (11+)" : {
                name : "Steel Wind Strike",
                source : [["WSS", 1]],
                prereqeval: function(v) { return classes.known.monk.level >= 11; },
                description : desc([
                    "Cast flickering strikes, teleporting and striking up to five targets within range.",
                    "Make a weapon attack against each target. On hit, deal weapon damage +6d6 force damage."
                ])
            },
            "sundering strike (11+)" : {
                name : "Sundering Strike",
                source : [["WSS", 1]],
                prereqeval: function(v) { return classes.known.monk.level >= 11; },
                description: desc([
                    "Empower an attack with destructive ki. If attacking an object not worn or carried, it's a critical hit and deals double damage.",
                    "If attacking a creature using nonmagical armor or shield, they must make a Constitution saving throw or have their shield destroyed or armor damaged."
            ])
            },
            "sword spirit (6+)" : {
                name: "Sword Spirit",
                source: [["WSS", 1]],
                prereqeval: function(v) { return classes.known.monk.level >= 6; },
                description: desc([
                    "Cast spirit echo, summoning a ghostly echo that shares your space and acts automatically on your intents.",
                    "For the duration of the spell, it attacks the same target as you on your turn."
            ])
            },
            "vaulting strike (3+)" : {
                name: "Vaulting Strike",
                source: [["WSS", 1]],
                prereqeval: function(v) { return classes.known.monk.level >= 3; },
                description: desc([
                    "When you hit a target with an attack, expend a ki point to deal additional damage equal to your Martial Arts die and leap over the target.",
                    "Land in an unoccupied space adjacent to them."
            ])
            },
            spellcastingBonus : [{
                spellcastingAbility : 5,
                name : "Mystical Techniques",
                spells : ["dimension slash", "iron wind strike", "spirit echo", "flickering strikes"],
                selection : ["dimension slash", "iron wind strike", "spirit echo", "flickering strikes"],
                times : 4,
            }],
        },
        "subclassfeature3.1" : {
            name : "Weapon Mastery",
            source : [["WSS", 1]],
            minlevel : 3,
            description : desc([
                "I can master a non-heavy, non-special simple or martial melee weapon as a monk weapon.",
                "I gain proficiency with this weapon and can choose another at levels 6, 11, and 17."
            ])
        },
        "subclassfeature6" : {
            name : "Perfect State",
            source : [["WSS", 1]],
            minlevel : 6,
            description : desc([
                "My monk weapon attacks count as magical for overcoming resistances.",
                "I can use my monk weapon with Flurry of Blows."
            ])
        },
        "subclassfeature11" : {
            name : "Empowered Techniques",
            source : [["WSS", 1]],
            minlevel : 11,
            description : desc([
                "At the start of my turn, I gain 1 free ki point for a Mystic Technique.",
                "If not used by the start of my next turn, it is lost."
            ])
        },
        "subclassfeature17" : {
            name : "Flawless Form",
            source : [["WSS", 1]],
            minlevel : 17,
            description : desc([
                "If I miss with a monk weapon attack on my turn, I can reroll it once per turn."
            ])
        },
        }
});
SpellsList["dimension slash"] = {
    name : "Dimension Slash",
    source : [["WSS", 1]],
    level : 3,
    school : "Conj",
    time : "1 a",
    range : "S:15ft cone",
    components : "V, S",
    duration : "Instantaneous",
    save : "Dex",
    description : "Each creature in a 15-ft cone takes 6d6 force damage; save halves.",
    descriptionFull : "You slash through the fabric of space, creating a rift that deals force damage. Each creature in a 15-foot cone must make a Dexterity saving throw, taking 6d6 force damage on a failed save, or half as much damage on a successful one."
},
SpellsList["iron wind strike"] = {
    name : "Iron Wind Strike",
    source : [["WSS", 1]],
    level : 5,
    school : "Conj",
    time : "1 a",
    range : "S:30 feet",
    components : "V, S, M (a weapon)",
    duration : "Instantaneous",
    description : "Melee spell attack on 3 targets. On hit, deal 3d8 weapon damage.",
    descriptionFull : "You call upon the iron winds to strike your foes. Choose up to three creatures within range. Make a melee spell attack against each target. On a hit, the target takes 3d8 damage of the weapon's type."
},
SpellsList["spirit echo"] = {
    name : "Spirit Echo",
    source : [["WSS", 1]],
    level : 2,
    school : "Conj",
    time : "1 bns",
    range : "Self",
    components : "V, S",
    duration : "Concentration, up to 1 minute",
    description : "Summon echo to attack with you; shares your space, seperate roll. On hit deal force damage equal to half damage rolled.",
    descriptionFull : "You summon a ghostly echo of yourself that shares your space and mimics your movements. For the duration, whenever you make an attack, the spirit echo also makes an attack against the same target."
};
SpellsList["flickering strikes"] = {
    name : "Flickering Strikes",
    source : [["WSS", 1]],
    level : 5,
    school : "Conj",
    time : "1 a",
    range : "S:30 ft",
    components : "V, S",
    duration : "Instantaneous",
    description : "Teleport, make a weapon attack against 5 targets. On hit, deal weapon damage + 6d6 force.",
    descriptionFull : "You flicker between targets, striking each with a weapon attack. You teleport to each target within range and make a melee weapon attack against it. On a hit, the target takes damage equal to the weapon's damage dice + 6d6 force damage."
}
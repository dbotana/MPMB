/*	-WHAT IS THIS?-
	This file adds optional material to "MPMB's Character Record Sheet" found at https://www.flapkan.com/download#charactersheets
	Import this file using the "Add Extra Materials" bookmark.
	-KEEP IN MIND-
	It is recommended to enter the code in a fresh sheet before adding any other information (i.e. before making your character with it).
*/

/*	-INFORMATION-
	Subject:	Odic Class
	Effect:		This script adds the Odic classto the MPMB character sheet.  
	Remarks:	The class can be found at this link: https://www.dmsguild.com/m/product/223886
=	Sheet:		v13.1.0 and newer
	Code by:	Rocky
	Date: 6-21-2021
*/

var iFileName = "odic.js"; 
RequiredSheetVersion(13.1); 

SourceList["OC"] = {
    name : "Original Odic Class",
    abbreviation : "OC",
    group : "Homebrew",
    url : "https://www.dmsguild.com/m/product/223886"
};

odicspells = [/*Cantrips: */"chill touch", "guidance", "spare the dying", "shillelagh", "thorn whip", /*1st Level: */"cure wounds", "false life", "inflict wounds", "longstrider", "speak with animals", /*2nd Level: */"barkskin", "blindness/deafness", "hold person", "lesser restoration", "ray of enfeeblement", /*3rd Level: */"bestow curse", "revivify", "vampiric touch", /*4th Level: */"blight", "polymorph", "stoneskin", /*5th Level: */"antilife shell", "greater restoration", "hold monster", /*6th Level: */"circle of death", "harm", "heal", /*7th Level: */"finger of death", "regenerate", /*8th Level: */"dominate monster", /*9th Level: */"foresight", "power word heal", "power word kill"];
ClassList["odic"] = { 
    regExpSearch : /^(?=.*odic).*$/i, 
    name : "Odic", 
    source : ["OC", 1], 
    primaryAbility : "Wisdom",
    abilitySave : 5,
    prereqs : "\n \u2022 Odic: Wisdom 13;",
    die : 12,
    improvements : [0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 5, 5],
    saves : ["Wis", "Cha"],
    skills : ["Choose two from Arcana, Athletics, History, Insight, Medicine, Nature, Perception, and Survival."],
    toolProfs : {
        primary : [["Painter's supplies", "Wisdom"]]
    },
    armorProfs : {
        primary : [false, false, false, false]
    },
    weaponProfs : {
        primary : [true, false, ["simple"]]
    },
    equipment : "Odic starting equipment:" +
        "\n \u2022 A light crossbow and 20 bolts -or- any simple weapon;" + 
        "\n \u2022 A quarterstaff -or- any simple weapon;" + 
        "\n \u2022 An explorer’s pack, a tattoo kit, and a jar of odyllic dye",
    subclasses : ["Heart Rune", ["Bestial Mark", "Parasite Brand", "Patron Emblem", "Sight Sigil"]],
    attacks : [1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
    spellcastingFactor : 1,
    spellcastingKnown : {
        cantrips : [2, 2, 2, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
        spells : [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 12, 13, 13, 14, 14, 15, 15, 15, 15]
    },
    spellcastingList : {
        class : "odic",
        school : ["Necromancy", "Transmutation", "Evocation"]
    },
    features : { 
        "spellcasting" : {
            name : "Spellcasting",
            source : ["OC", 2],
            minlevel : 1,
            description : "\n   " + "Through your tattooing and practice manipulating your life force through your body, you have the ability to cast spells. See chapter 10 of the Player's Handbook for the general rules of spellcasting and the odic spell list." + 
                         "\n   " + "I can use my odyllic tattoos as a spellcasting focus for my Odic spells.",
            additional : levels.map(function (n, idx) {
                var cantr = [2, 2, 2, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4][idx];
                var splls = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 12, 13, 13, 14, 14, 15, 15, 15, 15][idx];
                return cantr + " cantrips & " + splls + " spells known";
            }),
            spellcastingBonus : {
                name : "Odyllic Tattoos",
                spells : ["mage armor", "false life", "hex"],
                selection : ["mage armor", "false life", "hex"],
                atwill : true
            }
        },
        "odyllic tattoos" : {
            name : "Odyllic Tattoos",
            source : ["OC", 2],
            minlevel : 1,
            description : "\n   " + "I am covered in odyllic tattoos that allow me to manipulate life force for various effects. These tattoos can be used as a spellcasting focus for my Odic spells."
        },
        "heart rune" : {
            name : "Heart Rune",
            source : ["OC", 2],
            minlevel : 1,
            description : "\n   " + "Choose a Heart Rune which grants features at 1st, 6th, 14th, and 18th level",
            choices : ["Bestial Mark", "Parasite Brand", "Patron Emblem", "Sight Sigil"]
        },
        "vital recovery" : {
            name : "Vital Recovery",
            source : ["OC", 2],
            minlevel : 3,
            description : "\n   " + "Once per day when I finish a short rest, I can restore my hit point maximum by half."
        }
    }
};

AddSubClass("odic", "bestial mark", {
    regExpSearch : /^(?=.*bestial)(?=.*mark).*$/i,
    subname : "Bestial Mark",
    fullname : "Bestial Mark",
    source : ["OC", 1],
    features : {
        "subclassfeature1" : {
            name : "Rune of the Feral",
            source : ["OC", 1],
            minlevel : 1,
            description : "\n   " + "I learn the Ond Fury cantrip. It doesn't count against the number of cantrips I know." +
                         "\n   " + "When I make a melee spell attack as part of the spell, I can choose for it to deal piercing or slashing damage instead of bludgeoning.",
            spellcastingBonus : {
                name : "Rune of the Feral",
                spells : ["ond fury"],
                selection : ["ond fury"],
                atwill : true
            }
        },
        "subclassfeature1.1" : {
            name : "Odyllic Strength",
            source : ["OC", 1],
            minlevel : 1,
            description : "\n   " + "I can use my Wisdom modifier, instead of my Strength modifier, for my Strength ability checks."
        },
        "subclassfeature6" : {
            name : "Vigorous Fury",
            source : ["OC", 1],
            minlevel : 6,
            description : "\n   " + "When I cast Ond Fury, my base walking speed increases by 10 feet until the end of my turn." +
                         "\n   " + "Additionally, when I cast Ond Fury, I can choose to reduce my hit point maximum as though casting a 1st-level Odic spell to augment the cantrip's effects. When I do, choose one of the following gambits, which lasts until the beginning of my next turn:" +
                         "\n    - Bash: Add my Wisdom modifier to the damage on a hit." +
                         "\n    - Endure: Gain resistance to all damage except psychic damage and gain temporary hit points equal to my Odic level." +
                         "\n    - Rend: When I hit a creature, the next attack against it before the beginning of my next turn is made with advantage." +
                         "\n    - Wound: When I hit a creature, its speed is reduced by 10 feet until the beginning of my next turn."
        },
        "subclassfeature14" : {
            name : "Odyllic Physique",
            source : ["OC", 1],
            minlevel : 14,
            description : "\n   " + "When forced to make a Strength or Constitution saving throw, I can choose to make a Wisdom saving throw instead (excluding Constitution saving throws for maintaining concentration on spells)." +
                         "\n   " + "Once I use this feature, I must finish a short or long rest before I can use it again, or I can use it again by reducing my hit point maximum as though casting a 3rd-level Odic spell."
        },
        "subclassfeature18" : {
            name : "Vigorous Savagery",
            source : ["OC", 1],
            minlevel : 18,
            description : "\n   " + "I choose one Vigorous Fury gambit. I no longer need to reduce my hit point maximum to use the chosen gambit when casting Ond Fury, though I can still only use one gambit per casting." +
                         "\n   " + "Additionally, I gain the following benefits with my chosen gambit until the beginning of my next turn:" +
                         "\n    - Bash: Once per turn, I can force a creature hit by Ond Fury to make a Strength saving throw against my spell save DC. On a failure, the creature takes an extra 1d8 force damage, is pushed up to 30 feet in a direction of my choice, and is knocked prone." +
                         "\n    - Endure: Gain immunity to a damage type of my choice other than psychic damage." +
                         "\n    - Rend: I have advantage on melee attack rolls against any hostile creature within 5 feet of one of my allies." +
                         "\n    - Wound: Once per turn, I can force a creature hit by Ond Fury to make a Constitution saving throw against my spell save DC. On a failure, the creature can't take reactions and has disadvantage on all attack rolls until the beginning of my next turn."
        }
    }
});

AddSubClass("odic", "parasite brand", {
    regExpSearch : /^(?=.*parasite)(?=.*brand).*$/i,
    subname : "Parasite Brand",
    fullname : "Parasite Brand",
    source : ["OC", 1],
    spellcastingExtra : ["hex", "ray of enfeeblement", "vampiric touch", "blight", "hold monster"],
    features : {
        "subclassfeature1" : {
            name : "Rune of the Morbid",
            source : ["OC", 1],
            minlevel : 1,
            description : "\n   " + "I learn the Chill Touch cantrip. It doesn't count against the number of cantrips I know." +
                         "\n   " + "When I cast Chill Touch, I add my Wisdom modifier to its damage roll.",
            spellcastingBonus : {
                name : "Rune of the Morbid",
                spells : ["chill touch"],
                selection : ["chill touch"],
                atwill : true
            }
        },
        "subclassfeature1.1" : {
            name : "Odyllic Leech",
            source : ["OC", 1],
            minlevel : 1,
            description : "\n   " + "When I deal necrotic damage to a creature within 30 feet, I can parasitically link my life force to the target for 1 minute. I can't link to undead or constructs." +
                         "\n   " + "While linked, I gain the following benefits:" +
                         "\n    - Whenever it takes necrotic damage, I can gain temporary hit points equal to a quarter of the necrotic damage it suffered, rounded up." +
                         "\n    - If the target dies while my hit point maximum is below its normal value, I increase my hit point maximum by an amount equal to its challenge rating (minimum of 1), but not beyond my normal hit point maximum." +
                         "\n   " + "The link ends if we are separated by more than 60 feet, or if I link to another target." +
                         "\n   " + "A creature with truesight, or under detect magic, can see a chain of life force connecting my heart rune to the target's heart." +
                         "\n   " + "I can use this feature a number of times equal to my Wisdom modifier (minimum of once). I regain all expended uses after a long rest."
        },
        "subclassfeature6" : {
            name : "Parasitic Drain",
            source : ["OC", 1],
            minlevel : 6,
            description : "\n   " + "While linked to a creature, I can use my action to drain its life force. It takes necrotic damage equal to 1d6 + my Wisdom modifier, and its hit point maximum is reduced by the same amount." +
                         "\n   " + "The target dies if its hit point maximum is reduced to 0." +
                         "\n   " + "The damage increases by 1d6 at 5th level (2d6), 11th level (3d6), and 17th level (4d6)."
        },
        "subclassfeature14" : {
            name : "Grievous Putrefaction",
            source : ["OC", 1],
            minlevel : 14,
            description : "\n   " + "When my Odic spells or class features deal necrotic damage, they ignore resistance to necrotic damage, and immune targets take half damage."
        },
        "subclassfeature18" : {
            name : "Ravenous Parasite",
            source : ["OC", 1],
            minlevel : 18,
            description : "\n   " + "While linked to a creature, I can use Parasitic Drain as an action or bonus action, but not more than once per turn." +
                         "\n   " + "I regain all expended uses of Odyllic Leech after a short or long rest."
        }
    }
});

AddSubClass("odic", "patron emblem", {
    regExpSearch : /^(?=.*patron)(?=.*emblem).*$/i,
    subname : "Patron Emblem",
    fullname : "Patron Emblem",
    source : ["OC", 1],
    spellcastingExtra : ["healing word", "aid", "aura of vitality", "death ward", "greater restoration"],
    features : {
        "subclassfeature1" : {
            name : "Rune of the Generous",
            source : ["OC", 1],
            minlevel : 1,
            description : "\n   " + "I learn the Give Life cantrip. It doesn't count against the number of cantrips I know." +
                         "\n   " + "When I cast Give Life on a target other than myself, the target regains additional hit points equal to my Wisdom modifier (a minimum of 1), and I regain hit points equal to half the amount the target regained.",
            spellcastingBonus : {
                name : "Rune of the Generous",
                spells : ["give life"],
                selection : ["give life"],
                atwill : true
            }
        },
        "subclassfeature1.1" : {
            name : "Odyllic Link",
            source : ["OC", 1],
            minlevel : 1,
            description : "\n   " + "I can use my odyllic dye to link my life force to an ally, bolstering each other against harm. When I finish a short or long rest, I choose a willing creature that isn't an undead or construct. I ink a small rune on the creature, linking us until the tattoo fades when I finish my next rest, or until I sever the link as an action." +
                         "\n   " + "While linked, whenever the linked creature takes damage that causes it to lose hit points (not temporary hit points), I can gain temporary hit points equal to a quarter of the damage it suffered, rounded up. Additionally, whenever my hit point maximum is reduced, I can grant my linked creature temporary hit points equal to half of the reduction, rounded up." +
                         "\n   " + "A creature with truesight, or under the effect of detect magic, can see a chain of life force connecting my heart rune to the odyllic dye tattoo on my linked ally."
        },
        "subclassfeature6" : {
            name : "Beneficent Benefactor",
            source : ["OC", 1],
            minlevel : 6,
            description : "\n   " + "When I cast an Odic spell that targets only a single creature on my linked creature, I can cast the spell as though its range is 60 feet, and I don't need to see the target, instead guiding the spell through my link."
        },
        "subclassfeature14" : {
            name : "Emergency Stimulus",
            source : ["OC", 1],
            minlevel : 14,
            description : "\n   " + "When I see my linked creature drop to 0 hit points while within 60 feet of me, I can use my reaction to cast an Odic spell that targets only that creature. If the spell restores the creature to above 0 hit points, it doesn't fall unconscious and continues normally." +
                         "\n   " + "Once I use this feature, I must finish a long rest before I can do so again."
        },
        "subclassfeature18" : {
            name : "Philanthropic Network",
            source : ["OC", 1],
            minlevel : 18,
            description : "\n   " + "When I use my Odyllic Link at the end of a short or long rest, I can choose a number of creatures up to my Wisdom modifier (a minimum of one), linking with each by inking them with a small rune." +
                         "\n   " + "Until I finish my next rest, each linked creature gains the benefits of being linked to me, and I gain the benefits of being linked to each creature separately." +
                         "\n   " + "Once I use this feature, I must finish a long rest before I can do so again."
        }
    }
});

AddSubClass("odic", "sight sigil", {
    regExpSearch : /^(?=.*sight)(?=.*sigil).*$/i,
    subname : "Sight Sigil",
    fullname : "Sight Sigil",
    source : ["OC", 1],
    spellcastingExtra : ["bane", "augury", "counterspell", "arcane eye", "commune"],
    features : {
        "subclassfeature1" : {
            name : "Rune of the Seer",
            source : ["OC", 1],
            minlevel : 1,
            description : "\n   " + "I learn the Guidance cantrip. It counts as an Odic spell for me and doesn't count against the number of cantrips I know." +
                         "\n   " + "When I cast Guidance, the die added to the ability check changes when I reach certain levels in this class. The die becomes a d6 at 5th level, a d8 at 11th level, and a d10 at 17th level.",
            spellcastingBonus : {
                name : "Rune of the Seer",
                spells : ["guidance"],
                selection : ["guidance"],
                atwill : true
            }
        },
        "subclassfeature1.1" : {
            name : "Odyllic Intervention",
            source : ["OC", 1],
            minlevel : 1,
            description : "\n   " + "I have an aura of awareness in a 60-foot radius around me, within which I have limited control over the outcome of events. I have 2 fate points, which can be used in the following ways:" +
                         "\n    - When a creature in my aura makes a death saving throw, I can use my reaction and expend 1 fate point to give the creature advantage or disadvantage on the roll." +
                         "\n    - When I miss with an attack against a creature within my aura, I can use my bonus action and expend 1 fate point to reroll the attack." +
                         "\n    - When a creature in my aura makes a roll with advantage or disadvantage, I can use my reaction and expend 2 fate points to have the creature roll with the opposite (advantage to disadvantage or vice versa)." +
                         "\n   " + "I must be able to see the creature to use any of my fate effects against it, and I can only expend fate points once per attack, ability check, or saving throw." +
                         "\n   " + "I regain all expended fate points when I finish a short or long rest."
        },
        "subclassfeature6" : {
            name : "Fate Weaver",
            source : ["OC", 1],
            minlevel : 6,
            description : "\n   " + "I have a number of fate points equal to half my Odic level." +
                         "\n   " + "Additionally, when a creature within my aura hits or misses with an attack, I can use my reaction and expend 2 fate points to have the creature reroll the attack, potentially changing the outcome."
        },
        "subclassfeature14" : {
            name : "Destiny Spinner",
            source : ["OC", 1],
            minlevel : 14,
            description : "\n   " + "I learn new ways to alter destiny using my fate points:" +
                         "\n    - When a creature within my aura fails an ability check, I can use my reaction and expend 1 fate point to have the creature reroll the ability check, potentially causing it to succeed." +
                         "\n    - When a creature within my aura succeeds on or fails a saving throw, I can use my reaction and expend 3 fate points to force the creature to reroll the saving throw, potentially changing the outcome."
        },
        "subclassfeature18" : {
            name : "Explore the Possibilities",
            source : ["OC", 1],
            minlevel : 18,
            description : "\n   " + "I gain the ability to take quick glimpses into the near future, possibly altering my decisions to change the course of history." +
                         "\n   " + "At the start of my turn, I can choose to expend 1 fate point. If I do, I take note of each creature's current hit points, position, and current states (including conditions and magical resources such as spell slots), then take my turn as normal." +
                         "\n   " + "At the end of my turn, or if I fall unconscious or die before the end of my turn, I can expend 4 fate points to reset every creature to the hit points, position, and state (excluding the fate points I expended) it was in at the start of my turn. If I do, I immediately take another turn." +
                         "\n   " + "Once I take another turn this way, I must finish a long rest before I can do so again."
        }
    }
});
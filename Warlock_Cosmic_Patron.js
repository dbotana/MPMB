/*	-WHAT IS THIS?-
	This file adds optional material to "MPMB's Character Record Sheet" found at https://flapkan.com/mpmb/charsheets
	Import this file using the "Add Extra Materials" bookmark.
	-KEEP IN MIND-
	It is recommended to enter the code in a fresh sheet before adding any other information (i.e. before making your character with it).
*/

/*	-INFORMATION-
	Subject:	Class
	Effect:		This script adds the Cosmic Patron, a Warlock subclass from Sebastien Crow's Guide to Drakenheim
	Code by:	Rocky
	Date:		2024-10-25 (sheet v13)
*/
var iFileName = "Warlock_Cosmic_Patron.js";

RequiredSheetVersion("13.2.0");

SourceList["TCP"] = {
    name: "Warlock - The Cosmic Patron",
    abbreviation: "TCP",
    group: "Homebrew",
    date: "2024/11/18"
};

AddSubClass("warlock", "cosmic patron", {
    regExpSearch: /^(?=.*cosmic)(?=.*patron)(?=.*warlock).*$/i,
    subname: "The Cosmic Patron",
    source: [["TCP", 1]],
    
    spellcastingExtra: ["magic missile", "faerie fire", "moonbeam", "scorching ray", "blink", "spirit guardians", "fire shield", "wall of fire", "flame strike", "greater restoration"],
    
    features: {
        // 1st-level features
        "subclassfeature1": {
            name: "Shooting Stars",
            source: [["TCP", 1]],
            minlevel: 1,
            description: "\n   I learn the Eldritch Blast cantrip if I don't already know it. It doesn't count against the number of warlock cantrips I know." +
                         "\n   When I cast Eldritch Blast, I can choose to deal radiant damage instead of force damage.",
            calcChanges : {
                atkAdd : [
                    function (fields, v) {
                        if (v.baseWeaponName == 'eldritch blast') fields.Description += '; Radiant/Force damage';
                    },
                ]
            },
            spellcastingBonus: {
                name: "Shooting Stars (Eldritch Blast)",
                spells: ["eldritch blast"],
                selection: ["eldritch blast"],
                firstCol: 'atwill'
            },
        },
        "subclassfeature1.1": {
            name: "Cosmic Guidance",
            source: [["TCP", 1]],
            minlevel: 1,
            description: "\n   I can speak, read, and write Celestial and Deep Speech." +
                         "\n   I learn the Guidance cantrip, which doesn't count against the number of warlock cantrips I know." +
                         "\n   Additionally, I may cast Augury once without expending a spell slot. I can't do so again until I finish a long rest.",
            languageProfs: ["Celestial", "Deep Speech"],
            spellcastingBonus: {
                name: "Cosmic Guidance",
                spells: ["guidance", "augury"],
                selection: ["guidance", "augury"],
                times : 2,
                firstCol: ['atwill', 'oncelr']
            }
        },
        // 6th-level feature
        "subclassfeature6": {
            name: "Orbit",
            source: [["TCP", 1]],
            minlevel: 6,
            description: "\n   When I miss a creature with Eldritch Blast, it returns as an orbiting comet." + 
                        "\n   Cosmic Power. Once on your turn when you cast eldritch blast, you can consume one orbiting comet to fire an additional beam." +
                        "\n   Interception. You can use your reaction to intercept a melee or ranged attack, gaining resistance to the damage from that attack." + 
                        "\n   Lightspeed. As a bonus action, you can consume a comet to teleport 30 feet to an unoccupied space you can see." +
                        "\n   As long as you have comets, you glow (bright light 20 feet, dim light 10 feet. The comets last until you finish a short or long rest, or until you dismiss them (no action).",
            additional: ["Max comets = Proficiency Bonus"],
        },
        // 10th-level feature
        "subclassfeature10": {
            name: "Meteoric Impact",
            source: [["TCP", 1]],
            minlevel: 10,
            description: "\n   Once per turn when I hit with Eldritch Blast, I can cause an explosion dealing additional fire damage to creatures within 10 feet.",
            additional: levels.map(function (n) {
                return n < 14 ? "3d6" : n<17 ? "4d6" : "5d6";
            })
        },
        // 14th-level feature
        "subclassfeature14": {
            name: "Supernova",
            source: [["TCP", 1]],
            minlevel: 14,
            description: "\n   When I cast Eldritch Blast, I can fire one additional beam. On a critical hit, I can use Meteoric Impact again that turn.",
        }
    }
});
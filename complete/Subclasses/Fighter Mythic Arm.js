/*	-WHAT IS THIS?-
	This file adds optional material to "MPMB's Character Record Sheet" found at https://flapkan.com/mpmb/charsheets
	Import this file using the "Add Extra Materials" bookmark.
	-KEEP IN MIND-
	It is recommended to enter the code in a fresh sheet before adding any other information (i.e. before making your character with it).
*/

/*	-INFORMATION-
	Subject:	Subclass
	Effect:		This script adds a subclass for the Fighter, called "Mythic Arm" from https://docs.google.com/document/d/e/2PACX-1vT7rFn0dxsK-46-rMZdxYBXqEYUM-AQ45E_7YMFznrkTjhVwQAg2EOdVQZuUaVS7eFOGZgdAXluhfU7/pub
	Code by:	Rocky
	Date:		2024-12-03 (sheet v13)
*/
SourceList["PHS"] = {
    name: "Pointy Hat Scion",
    abbreviation: "PHS",
    group: "Homebrew",
    url: "https://docs.google.com/document/d/e/2PACX-1vT7rFn0dxsK-46-rMZdxYBXqEYUM-AQ45E_7YMFznrkTjhVwQAg2EOdVQZuUaVS7eFOGZgdAXluhfU7/pub",
    date: "2024/12/03"
};

AddSubClass("fighter", "mythic arm", {
    regExpSearch: /mythic arm/i,
    subname: "Mythic Arm",
    source: ["PHS", 0],
    features: {
        "subclassfeature3": {
            name: "Mythic Arm",
            source: ["PHS", 0],
            minlevel: 3,
            description: "\n   I wield a mythic arm as a powerful weapon. Choose one damage type: acid, cold, fire, lightning, necrotic, poison, radiant, or thunder. Mythic arm attacks with action surge deal additional 1d8 of this damage type.",
            additional: levels.map(function (n) {
                return n < 10 ? "1d8" : n < 18 ? "2d8" : "3d8";
            }),        
        },
        "subclassfeature3.1": {
            name: "Wielding Legend",
            source: ["PHS", 0],
            minlevel: 3,
            description: "\n   The mythic arm is bound to me and is magical for overcoming resistances. It cannot rust or break, and I cannot be disarmed while conscious. I can sense its location and absorb enchantments from other weapons.",
            toNotesPage : [{
                name : "Wielding Legend",
                note : ["I can spend one hour to transfer an enchantment from an enchanted weapon to my mythic arm. The original weapon loses its enchantment after the transfer. I can also change my mythic arm into the shape of any weapon it has absorbed an enchantment from by spending one hour concentrating on it."]}],
        },
        "subclassfeature7": {
            name: "Wondrous Wielder",
            source: ["PHS", 0],
            minlevel: 7,
            description: "\n   At the end of a long rest, choose one property for the mythic arm: finesse, light, reach, or thrown (range 20/60)."
        },
        "subclassfeature10": {
            name: "Unlocked Potential",
            source: ["PHS", 0],
            minlevel: 10,
            description: "\n   Additional damage increases to 2d8 with action surge. Choose an additional damage type. Absorb an additional enchantment."
        },
        "subclassfeature15": {
            name: "Unleash Potential",
            source: ["PHS", 0],
            minlevel: 15,
            description: "\n   Once per turn on a successful attack, deal additional damage without using action surge."
        },
        "subclassfeature18": {
            name: "Mythic Scion",
            source: ["PHS", 0],
            minlevel: 18,
            description: "\n   After using action surge, treat attack rolls of 9 or lower as a 10. Regain one use of action surge when rolling initiative if none remain."
        }
    }
});
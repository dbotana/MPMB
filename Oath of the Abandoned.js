/*	-WHAT IS THIS?-
    This file adds optional material to "MPMB's Character Record Sheet" found at https://flapkan.com/mpmb/charsheets
    Import this file using the "Add Extra Materials" bookmark.
    -KEEP IN MIND-
    It is recommended to enter the code in a fresh sheet be`fore adding any other information (i.e. before making your character with it).
*/

/*	-INFORMATION-
    Subject:	Subclass
    Effect:		This script adds the Oath of the Abandoned https://www.gmbinder.com/share/-MFJKGR760Ww9Wz5vt8p
    Code by:	Rocky
    Date:		2025-02-11 (sheet v13)
*/
var iFileName = "Oath of the Abandoned.js";

RequiredSheetVersion(13);

SourceList["HB:OtA"] = {
    name: "Homebrew: Oath of the Abandoned",
    abbreviation: "HB:OtA",
    group: "Rocky's Homebrew",
    url: "https://www.gmbinder.com/share/-MFJKGR760Ww9Wz5vt8p",
    date: "2025-02-11"
};

AddSubClass("paladin", "oath of the abandoned", {
    regExpSearch: /^(?=.*paladin)(?=.*abandoned).*$/i,
    subname: "Oath of the Abandoned",
    source: ["HB:OtA", 0],
    spellcastingExtra: ["grease", "unseen servant", "pass without trace", "misty step", "beacon of hope", "nondetection", "dimension door", "divination", "creation", "modify memory"],
    features: {
        "subclassfeature3": {
            name: "Channel Divinity: Oath of the Abandoned",
            source: ["HB:OtA", 0],
            minlevel: 3,
            description: desc([
                "I gain two Channel Divinity options:",
                "\u2022 Pure Ambivalence: Impart a creature with complete disinterest in me and others I designate.",
                "\u2022 Purpose for the Unwanted: Transform unwanted refuse into a fragile object that lasts 1 hour or one use."
            ]),
            action: [["action", "Pure Ambivalence"], ["action", "Purpose for the Unwanted"]]
        },
        "subclassfeature7": {
            name: "Aura of Resourcefulness",
            source: ["HB:OtA", 0],
            minlevel: 7,
            description: desc([
                "I and friendly creatures within range can find useful objects in strange places.",
                "Range is 100 ft at level 7, increasing to 300 ft at level 18."
            ]),
            additional: levels.map(function (n) {
                return (n < 7 ? "" : (n < 18 ? "100-foot radius" : "300-foot radius"));
            })
        },
        "subclassfeature15": {
            name: "Gone But Not Forgotten",
            source: ["HB:OtA", 0],
            minlevel: 15,
            description: desc([
                "When reduced to 0 HP but not killed outright, I can make a death save immediately.",
                "On success, I regain 3d10 HP and am hidden from hostile creatures within 30 ft for 1 minute."
            ]),
            recovery: "long rest"
        },
        "subclassfeature20": {
            name: "Lost Affection",
            source: ["HB:OtA", 0],
            minlevel: 20,
            description: desc([
                "As an action, I can call upon Klugto to return a valued lost object to its owner.",
                "The value and power of the item depend on how much it is missed by its owner.",
                "Once used, this feature can't be used again until a long rest, or by expending a 5th-level spell slot."
            ]),
            action: [["action", ""]]
        }
    }
});

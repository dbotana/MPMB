// ============================================================
// Deadeye Creed — Gunslinger Subclass
// Valda's Spire of Secrets (Mage Hand Press)
//
// Features:
//   Level  3: Eagle Eye (Maneuver), Sharpshooter's Stance
//   Level  6: Concealed Position
//   Level 10: Reposition
//   Level 14: Focused Shot
//
// NOTE: Update the page numbers in source: ["VSoS", 0] to match
//       your copy of Valda's Spire of Secrets.
// ============================================================
var iFileName = "Gunslinger - Deadeye VSoS.js";

RequiredSheetVersion(13);

SourceList["VSS"] = {
    name: "Valda's Spire of Secrets",
    abbreviation: "VSoS",
    abbreviationSpellsheet: "VSoS",
    group: "Rocky's Homebrew",
};

AddSubClass(
    "gunslinger",
    "deadeye",
    {
        regExpSearch: /\bdeadeye\b/i,
        subname: "Deadeye",
        source: ["VSoS", 0], // TODO: update page number
        features: {

            "subclassfeature3": {
                name: "Eagle Eye",
                minlevel: 3,
                source: ["VSoS", 0],
                description: desc([
                    "Once per turn when I miss with a ranged attack roll, I can expend 1 Risk Die",
                    "and add it to the attack roll, potentially causing the attack to hit."
                ]),
                // Eagle Eye is a Maneuver (Deed-like), triggered on a miss and costing a Risk Die.
                // Risk Dice are already tracked on the sheet via the base class Risk feature.
                action: ["bonus action", " (Eagle Eye - on miss)"],
            },

            "subclassfeature3.1": {
                name: "Sharpshooter's Stance",
                minlevel: 3,
                source: ["VSoS", 0],
                description: desc([
                    "Fire While Prone: I don't have disadvantage on ranged attack rolls while prone.",
                    "Quick Stand: I can end the Prone condition using only 5 ft of movement."
                ]),
            },

            "subclassfeature6": {
                name: "Concealed Position",
                minlevel: 6,
                source: ["VSoS", 0],
                description: desc([
                    "Camouflage: While prone, I can take the Hide action without needing heavy obscurement",
                    "or Three-Quarters/Total Cover. The hidden condition ends if I'm no longer prone.",
                    "Sniper's Nest: Missing an attack roll while hidden doesn't reveal my location."
                ]),
            },

            "subclassfeature10": {
                name: "Reposition",
                minlevel: 10,
                source: ["VSoS", 0],
                description: desc([
                    "As a reaction when a creature misses me with an attack roll, I can end the Prone",
                    "condition on myself and move up to half my speed."
                ]),
                action: ["reaction", ""],
            },

            "subclassfeature14": {
                name: "Focused Shot",
                minlevel: 14,
                source: ["VSoS", 0],
                description: desc([
                    "When I take the Attack action, I can forgo all attacks but one to make a Focused Shot:",
                    "a single ranged weapon attack with advantage. On a hit, it is automatically a critical hit."
                ]),
                calcChanges: {
                    atkAdd: [
                        function (fields, v) {
                            if (
                                classes.known.gunslinger &&
                                classes.known.gunslinger.level >= 14 &&
                                (/firearm/i.test(v.theWea.list) || /\bfirearm\b/i.test(fields.Description))
                            ) {
                                fields.Description += (fields.Description === "" ? "" : "; ") +
                                    "Focused Shot: 1 atk, adv., auto-crit on hit";
                            }
                        },
                        "Focused Shot (level 14): When I take the Attack action, I can make a single" +
                        " ranged weapon attack with advantage. On a hit, it is automatically a critical hit."
                    ]
                },
            },

        }, // end features
    } // end subclass object
); // end AddSubClass
var iFileName = "Paladin - Oath of the Moon.js";
RequiredSheetVersion(13);

SourceList["HB:OtM"] = {
    name: "Homebrew: Oath of the Moon",
    abbreviation: "HB:OtM",
    group: "Rocky's Homebrew",
    date: "2023-10-30"
};

AddSubClass("paladin", "oath of the moon", {
    regExpSearch: /^(?=.*paladin)(?=.*moon).*$/i,
    subname: "Oath of the Moon",
    source: ["HB", 0],
    spellcastingExtra: ["faerie fire", "hex", "moonbeam", "zone of truth", "beacon of hope", "remove curse", "locate creature", "guardian of faith", "greater restoration", "scrying"],
    features: {
        "subclassfeature3": {
            name: "Channel Divinity: Oath of the Moon",
            source: ["HB", 0],
            minlevel: 3,
            description: desc([
                "I gain two Channel Divinity options:",
                "\u2022 Silver Gilded Irises: As an action, grant a creature an additional 60ft of darkvision for 10 minutes.",
                "\u2022 Moon Glow: As a bonus action, I cover my melee weapon in a gray smoke aura. It gains the ranged property (30/120ft) and deals force damage for 1 minute."
            ]),
            action: [["action", "Silver Gilded Irises"], ["bonus action", "Moon Glow"]]
        },
        "subclassfeature7": {
            name: "Fake Light",
            source: ["HB", 0],
            minlevel: 7,
            description: desc([
                "As a bonus action, I can create a sphere of magical darkness around me, through which only I can see.",
                "It lasts until the start of my next turn. I regain use of this feature after a short or long rest."
            ]),
            additional: levels.map(function (n) {
                return (n < 7 ? "" : (n < 18 ? "30-foot radius" : "60-foot radius"));
            }),
            recovery: "short rest",
            action: ["bonus action", ""]
        },
        "subclassfeature15": {
            name: "Moon Cloak",
            source: ["HB", 0],
            minlevel: 15,
            description: "\n   " + "When I am not in sunlight, I gain a +1 bonus to AC. I also gain proficiency in Stealth, or double my proficiency bonus for it if I'm already proficient.",
            skillstxt: "\n\n" + toUni("Oath of the Moon") + ": Stealth proficiency; double proficiency if already proficient.",
        },
        "subclassfeature20": {
            name: "Moon Aura",
            source: ["HB", 0],
            minlevel: 20,
            description: desc([
                "I emit a soothing aura in a 20-ft radius around me.",
                "Chosen creatures in the aura gain 60 ft of darkvision.",
                "They also have advantage on saving throws against being charmed, frightened, and petrified."
            ]),
            vision : [["Darkvision", 60]],
            savetxt: { adv_vs: ["charmed", "frightened", "petrified"] }
        }
    }
});
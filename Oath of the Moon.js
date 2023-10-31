var iFileName = "Paladin - Oath of the Moon.js";
RequiredSheetVersion(13);

SourceList["HB"] = {
    name : "Homebrew",
    abbreviation : "HB",
    group : "Homebrew",
    date : "2023/10/30"
};

AddSubClass("paladin", "oath of the moon", {
    regExpSearch : /^(?=.*paladin)(?=.*moon).*$/i,
    subname : "Oath of the Moon",
    source : ["HB", 0],
    spellcastingExtra : ["faerie fire", "hex", "moonbeam", "zone of truth", "beacon of hope", "remove curse", "locate creature", "guardian of faith", "greater restoration", "scrying"],
    features : {
        "subclassfeature3" : {
            name : "Channel Divinity",
            source : ["HB", 0],
            minlevel : 3,
            description : desc([
                "I gain two Channel Divinity options:",
                "\n \u2022 Silver Gilded Irises: As an action, grant a creature an additional 60ft of darkvision for 10 minutes.",
                "\n \u2022 Moon Glow: As a bonus action, I cover my melee weapon in a gray smoke aura. It gains the ranged property (30/120ft) and deals force damage for 1 minute."
            ]),
            action : [["action", "Silver Gilded Irises"], ["bonus action", "Moon Glow"]]
        },
        "subclassfeature7" : {
            name : "Fake Light",
            source : ["HB", 0],
            minlevel : 7,
            description : desc([
                "As a bonus action, I can create a 30ft sphere of magical darkness around me, through which only I can see.",
                "It lasts until the start of my next turn. I regain use of this feature after a short or long rest."
            ]),
            additional : levels.map(function (n) {
                return n < 18 ? "30-foot radius" : "60-foot radius";
            }),
            recovery : "short rest",
            action : ["bonus action", ""]
        },
        "subclassfeature15" : {
            name : "Moon Cloak",
            source : ["HB", 0],
            minlevel : 15,
            description : "\n   " + "When I am not in sunlight, I gain a +1 bonus to AC. I also gain proficiency in Stealth, or double my proficiency bonus for it if I'm already proficient.",
            skillstxt : "\n\n" + toUni("Oath of the Moon") + ": Stealth proficiency; double proficiency if already proficient.",
        },
        "subclassfeature20" : {
            name : "Moon Aura",
            source : ["HB", 0],
            minlevel : 20,
            description : "\n   " + "I emit a 20ft radius aura. Chosen creatures in it gain 60ft darkvision and advantage on saves vs. being charmed, frightened, and petrified.",
            savetxt: { advantage: ["charmed", "frightened", "petrified"] }
        }
    }
});
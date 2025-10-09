/* -WHAT IS THIS?-
This file adds optional material to MPMB's Character Record Sheet: https://flapkan.com/mpmb/charsheets
Import this file using the "Add Extra Materials" bookmark.

-INFORMATION-
Subject:    Class
Effect:     This script adds the Future Self, a Warlock subclass, as described https://www.reddit.com/r/UnearthedArcana/comments/1heo6kv/fortify_yourself_and_allies_with_incredible_time/
By:         Rocky
Date:       2025-10-09
Sheet:      v13
*/

var iFileName = "Warlock_Future_Self_Patron.js"; 
RequiredSheetVersion(13);

SourceList["FSW"] = {
	name : "Warlock - Future Self",
	abbreviation : "FSW",
	group : "Homebrew",
	date : "2025/10/09",
	url : "https://www.reddit.com/r/UnearthedArcana/comments/1heo6kv/fortify_yourself_and_allies_with_incredible_time/"
};

AddSubClass("warlock", "future self", {
	regExpSearch : /future\s*self/i,
	subname : "Future Self",
	source : ["FSW", 0],

	spellcastingExtra : [
		"bless", "calm emotions", "guidance", "protection from evil and good", "spiritual weapon",
		"clairvoyance", "haste",
		"death ward", "resilient sphere",
		"scrying", "telekinesis"
	],
	features : {
		"subclassfeature3" : {
			name : "Hope",
			source : ["FSW", 0],
			minlevel : 3,
			description : "\n "+"When I roll a natural 1 on a d20 test, I gain Heroic Inspiration if I don't already have it. I also regain Heroic Inspiration whenever I finish a short or long rest.",
			action : ["reaction", ""],
			recovery : "short rest",
		},
		"subclassfeature3": {
			name: "Guiding Memory",
			source: ["FSW", 0],
			minlevel: 3,
			description: "\n "+"When I cast a spell requiring concentration from my Future Self spell list, I can use this feature. For as long as I concentrate on that spell, I have advantage on Dexterity saving throws and attack rolls made against me have disadvantage.",
			usages: 1,
			recovery: "short rest"
		},
		"subclassfeature6": {
			name: "Not Today",
			source: ["FSW", 0],
			minlevel: 6,
			description: "\n "+"When reduced to 0 HP but not killed outright, I can drop to 1 HP instead and regain Hit Points equal to twice my Warlock level. I also gain a bonus to AC and saving throws equal to my Charisma modifier until the end of the turn.",
			usages: 1,
			recovery: "long rest"
		},
		"subclassfeature10": {
			name: "Future Visions",
			source: ["FSW", 0],
			minlevel: 10,
			description: "\n "+"When a creature I can see within 30 ft succeeds on an attack roll or ability check, or fails a d20 test, I can use my reaction to force them to reroll the d20 (using the new result).",
            usages: "Cha mod per ",
            usagescalc: "event.value = Math.max(1, What('Cha Mod'));",
			recovery: "long rest",
			action: ["reaction","See a d20 roll within 30 ft"]
		},
		"subclassfeature14": {
			name: "All of Me",
			source: ["FSW", 0],
			minlevel: 14,
			description: "\n "+"At the start of my turn, I can channel all my temporal echoes into one moment. This turn, I can take one extra action and cast one leveled Warlock spell without expending a spell slot. Once I use this feature, I gain a point of exhaustion, and can't use it again until I finish a long rest.",
			usages: 1,
			recovery: "long rest"
		}
	}
});
var iFileName = "UA 2026 - Mystic Subclasses Monk Mystic Arts.js";
RequiredSheetVersion("13.2.3");

SourceList["UA-MS"] = {
	name : "Mystic Subclasses",
	abbreviation : "UA-MS",
	date : "2026/01/15",
	group : "UA",
	url : "https://www.dndbeyond.com/sources/dnd/ua/mystic-subclasses",
};	

AddSubClass("monk", "mystic arts", {
	regExpSearch: /^(?=.*(monk))(?=.*(mystic))(?=.*(arts)).*$/i,
	subname: "Warrior of the Mystic Arts",
	source: [["UA-MS", 1]],
	spellcastingFactor: 3,
	spellcastingAbility: 5,
	spellcastingList: { "class": "sorcerer", level: [0, 4], },
	spellcastingKnown: {
		cantrips: [0, 0, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
		spells: [0, 0, 3, 4, 4, 4, 5, 6, 6, 7, 8, 8, 9, 10, 10, 11, 11, 11, 12, 13],
		prepared: false,
	},
	features: {
		"subclassfeature3": {
			name: "Spellcasting",
			source: [["UA-MS", 1]],
			minlevel: 3,
			additional: levels.map(function(n, idx) {
				var cantr = [0, 0, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3][idx];
				var splls = [0, 0, 3, 4, 4, 4, 5, 6, 6, 7, 8, 8, 9, 10, 10, 11, 11, 11, 12, 13][idx];
				return cantr + " cantrips \u0026 " + splls + " spells prepared";
			}),
			description: desc([
				"I can cast known sorcerer cantrips and spells, using Wisdom as my spellcasting ability",
				"When I gain a Monk level, I can replace one cantrip and one spell. I can use an Arcane Focus",
			]),
		},
        "subclassfeature6": {
            name: "Mystic Focus",
            source: [["UA-MS", 2]],
            minlevel: 6,
            description: desc([
				"I can expend a spell slot to regain Focus Points equal to the slot’s level (no action required)",
                "As a Bonus Action, I can use Focus Points to recover one spell slot no higher than 4th level,", 
				"as follows: 2 Focus Points for Level 1 (min Monk 6); 3 Focus Points for Level 2 (min Monk 7);",
                "5 Focus Points for Level 3 (min Monk 13); 6 Focus Points for Level 4 (min Monk 19)"
            ]),
            action: [["bonus action", " (regain spell slot)"]],
        },
		"subclassfeature6.1": {
            name: "Mystic Fighting Style",
            source: [["UA-MS", 2]],
            minlevel: 6,
            description: desc(["When I take the Attack action on my turn, I can cast a Sorcerer cantrip that has a casting", 
			"time of an action in place of one of those attacks"]),
        },
        "subclassfeature11": {
            name: "Centered Focus",
            source: [["UA-MS", 2]],
            minlevel: 11,
            description: desc([
                "Whenever I expend a Focus Point to use Flurry of Blows, Patient Defense, or Step of the Wind,", 
				"I have Advantage on any save I make to maintain Concentration until the start of my next turn"]),
		},
		"subclassfeature17": {
            name: "Improved Mystic Fighting Style",
            source: [["UA-MS", 2]],
            minlevel: 17,
            description: desc(["When I take the Attack action on my turn, I can cast a 1st or 2nd level Sorcerer spell that has",
			"a casting time of an action in place of two of those attacks"]),
		},	
    },
});
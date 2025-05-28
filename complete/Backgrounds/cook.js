/*	-WHAT IS THIS?-
	This file adds optional material to "MPMB's Character Record Sheet" found at https://flapkan.com/mpmb/charsheets
	Import this file using the "Add Extra Materials" bookmark.

	-KEEP IN MIND-
	It is recommended to enter the code in a fresh sheet before adding any other information (i.e. before making your character with it).
*/

/*  -INFORMATION-
	Subject:	Background
	Effect:		This script adds a background, called "Cook"
				This is taken from D&D Wiki (https://www.dandwiki.com/wiki/Cook_(5e_Background))
	Code by:	Rocky
	Date:		2024-09-11 (sheet v13.1.0)
*/

var iFileName = "Cook [D&D Wiki, transcribed by MPMB].js";
RequiredSheetVersion(13.1);

SourceList["Cook"] = {
	name : "Cook",
	abbreviation : "Ck",
	group : "Homebrew",
	url : "https://www.dandwiki.com/wiki/Cook_(5e_Background)",
	date : "2024/09/11"
};

BackgroundList["cook"] = {
	regExpSearch : /^(?=.*cook).*$/i,
	name : "Cook",
	source : [["DWiki", 0]],
	skills : ["Insight", "Performance"],
	skillstxt : "Insight and Performance",
	gold : 5,
	equipleft : [
		["Mess kit", "", ""],
		["Cook's utensils", "", ""],
		["Bottle of cooking oil", "", ""],
		["Spice kit", "", ""],
		["Recipe books", "", ""],
		["Tinderbox", "", ""],
		["Iron pot", "", ""]
	],
	equipright : [
		["Costume or fine clothes", "", ""],
		["Electrum spork or kitchensmith plans", "", ""],
		["Belt pouch (with coins)", "", 1]
	],
	feature : "A Tasteful Sentiment",
	trait : [
		"I am often lost in thought.",
		"I use big and complicated words.",
		"I always try to help others.",
		"I am a perfectionist and need things to be just so.",
		"I am very awkward in social situations.",
		"I am always trying to learn new recipes, formulas, or techniques by reading or watching others work."
	],
	ideal : [
		["Creativity", "Creativity: Cooking is an art form and I strive to create masterpieces. (Good)"],
		["Tradition", "Tradition: I preserve and pass on time-honored recipes and techniques. (Lawful)"],
		["Experimentation", "Experimentation: I'm always looking to create new and exciting flavor combinations. (Chaotic)"],
		["Greed", "Greed: My skills are valuable and I expect to be well compensated for them. (Evil)"],
		["Community", "Community: Sharing food brings people together and I love fostering that. (Good)"],
		["Aspiration", "Aspiration: I want to be known as the greatest chef in the world. (Any)"]
	],
	bond : [
		"I'm searching for a legendary lost recipe.",
		"My family has been cooks for generations and I carry on the tradition.",
		"I was the cook on a ship and still long for the sea.",
		"I'm determined to earn a Michelin star...or this world's equivalent.",
		"I'm on a quest to find the perfect ingredients.",
		"I want to open my own restaurant someday."
	],
	flaw : [
		"I'm a terrible glutton and often eat more than my share.",
		"I'm a horrible snob about food and drink.",
		"I cut corners when I think I can get away with it.",
		"I always insist on using exotic and expensive ingredients.",
		"I panic when things don't go exactly according to my recipes.",
		"I tend to drink too much of the wine I cook with."
	],
	toolProfs : ["Cook's utensils"],
	languageProfs : [2],
	lifestyle : "comfortable"
};

BackgroundFeatureList["A Tasteful Sentiment"] = {
	description : "I can use food to communicate more than just good flavor; I can produce intellectually meaningful dishes which can send a message, however simple and abstract. At the DM's discretion, I can make persuasive, deceptive, and even intimidating attempts by simply feeding a person a meal, or by preparing it in front of them. I may also treat public preparation of food as a performance to entertain.",
	source : [["DWiki", 0]]
};


BackgroundFeatureList["Through Their Stomachs"] = {
	description : "You can work as a cook during down time. You can feed your adventuring companions modest meals each day for free, unless you are in a barren place devoid of anything edible for miles, such as a desert or dungeon. You can arrange meetings with anyone interested in a free meal.",	
	source : [["DWiki", 0]]
};
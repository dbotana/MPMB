var iFileName = "Druid - Circle of Time [Homebrew].js";
RequiredSheetVersion(13);

SourceList["HB:CoT"] = {
	name : "Homebrew: Circle of Time",
	abbreviation : "HB:CoT",
	group : "Rocky's Homebrew",
	date : "2023-10-23"
};

AddSubClass("druid", "circle of time", {
	regExpSearch : /^(?=.*(druid|shaman))(?=.*\btime\b).*$/i,
	subname : "Circle of Time",
	source : ["HB:CoT", 0],
	spellcastingExtra : ["gift of alacrity", "identify", "mirror image", "blur", "clairvoyance", "slow", "arcane eye", "banishment", "temporal shunt", "legend lore"],
	features : {
		"subclassfeature2" : {
			name : "Marker of Time",
			source : ["HB:CoT", 0],
			minlevel : 2,
			description : desc([
				"As an action, I can expend a use of Wild Shape to place a marker recording my location, health, and position",
				"The marker is neither a creature nor an object, unaffected by gravity, and lasts for 1 minute",
				"At the end of the duration, I return to the marker's location with the recorded health and position",
				"Resources expended while the marker is active remain expended; I can't use Wild Shape while the marker is active",
				"If I die while the marker is active, I return to life at the marker's location with 1 hit point (once per long rest)"
			]),
			action : ["action", ""]
		},
		"subclassfeature6" : {
			name : "Prophetic Precision",
			source : ["HB:CoT", 0],
			minlevel : 6,
			description : "\n   I can use the Ready or Dodge actions as a bonus action a number of times per day equal to my Wisdom modifier",
			action : ["bonus action", " (Ready/Dodge)"],
			usages : "1/2 Wisdom modifier per ",
			usagescalc : "event.value = Math.max(1, What('Wis Mod')/2);",
			recovery : "long rest"
		},
		"subclassfeature10" : {
			name : "Chronological Shrapnel",
			source : ["HB:CoT", 0],
			minlevel : 10,
			description : desc([
				"As a bonus action, I can sunder a Marker of Time to deal force damage in a 60 ft radius",
				"I gain a pool of points equal to twice the amount of damage I've taken since the Marker was placed",
				"I can distribute this pool as force damage to creatures in range, but it can't penetrate full cover",
				"Creatures can make a Dexterity save against my spell save DC to avoid this damage",
				"Sundering the marker forfeits its normal benefits; I can use this twice per day, regain 1d2 uses on a long rest"
			]),
			action : ["bonus action", " (Sunder Marker)"],
			usages : 2,
			recovery : "long rest",
		},
		"subclassfeature14" : {
			name : "Eternal Sentinel",
			source : ["HB:CoT", 0],
			minlevel : 14,
			description : desc([
				"For every 10 years that pass, my body ages only 1 year",
				"As a bonus action, I surround myself with ancient energy for 1 minute, granting several benefits:",
				" \u2022 When attacking with a weapon or natural weapon, I can use my Wisdom modifier for attack and damage rolls",
				" \u2022 When making a Wisdom-based ability check or any saving throw I'm proficient in, I can treat a d20 roll of 9 or lower as a 10",
				" \u2022 Creatures that hit me with a melee attack take psychic damage equal to my Wisdom modifier (minimum 1), if I'm not incapacitated",
				"I can use this bonus action a number of times per day equal to my Wisdom modifier"
			]),
			action : ["bonus action", ""],
			usages : "Wisdom modifier per ",
			usagescalc : "event.value = Math.max(1, What('Wis Mod'));",
			recovery : "long rest"
		}
	}
});
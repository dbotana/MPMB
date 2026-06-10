/*	-WHAT IS THIS?-
	This file adds optional material to "MPMB's Character Record Sheet" found at https://flapkan.com/mpmb/charsheets
	Import this file using the "Add Extra Materials" bookmark.
*/

/*	-INFORMATION-
	Subject:	Subclasses
	Effect:		Adds 50 spells and 9 subclasses described in "Obojima: Tales from the Tall Grass" a 3rd party campaign setting inspired by Studio Ghibli films. The subclasses are:
				Barbarian - Belly Brewer
				Bard - College of Masks
				Druid - Circle of the Petal Druid
				Fighter - Spirit-Fused Fighter
				Monk - Way of the Shepherd
				Paladin - Oath of the River
				Ranger - Corrupted Ranger
				Rogue - Waxwork Rogue
				Sorcerer - Oni Kin Sorcery
				Warlock - The Lantern
	Code by:	Rocky
	Date:		2026-05-04 (sheet v13)
*/

var iFileName = "Obojima-Spirited.js";
RequiredSheetVersion(13);

SourceList["OTT"] = {
	name: "Obojima: Tales from the Tall Grass",
	abbreviation: "OTT",
	group: "Obojima",
	date: "2026-05-04"
};

//Spells

SpellsList["plummet"] = {
		name : "Plummet",
		classes : ["druid", "sorcerer", "warlock", "wizard"],
		source : ["OTT", 0],
		level : 3,
		school : "Trans",
		time : "1 a",
		range : "300 ft",
		components : "V,S",
		duration : "Instantaneous",
		description : "Flying creature within range must make DEX save or is pulled to ground, taking fall damage. Success: pulled halfway down, no damage.",
		descriptionFull : "You conjure an enormous glowing force that wraps around a flying creature within range and attempts to pull it out of the air. The target must make a Dexterity saving throw. On a failed save, it is pulled to the ground and takes damage from the fall as normal (1d6 Bludgeoning damage for every 10 feet it fell, to a maximum of 2d6). On a successful save, the target is pulled halfway to the ground and takes no damage."
};

SpellsList["pogmo's pot"] = {
		name : "Pogmo's Pot",
		classes : ["bard", "sorcerer", "wizard"],
		source : ["OTT", 0],
		level : 3,
		school : "Conj",
		time : "1 a",
		range : "60 ft",
		components : "V,S",
		duration : "10 min",
		description : "Summon a tiny pot. Objects within 20 ft, not worn/carried, weighing up to 10 lb are sucked inside. Objects return when spell ends.",
		descriptionFull : "You summon a Tiny cast iron pot in an unoccupied space on the ground within range. All objects in a 20-foot Emanation originating from the pot that are not being worn or carried and weigh no more than 10 pounds are instantly sucked inside, whether they look like they should fit or not. The objects are stored in an extradimensional space inside the pot until the spell ends, at which point the pot vanishes and the objects it contained appear on the ground in its space.\n\nFor the duration, the pot remains sealed, and the objects inside can't be accessed until the spell ends. The pot is 1 foot wide and 1 foot tall. It can be easily moved or carried and always weighs 15 pounds, regardless of the weight of the objects it contains. The pot has Immunity to all damage, but it can be dispelled."
};

SpellsList["rageful nimbus"] = {
		name : "Rageful Nimbus",
		classes : ["druid", "ranger", "sorcerer", "wizard"],
		source : ["OTT", 0],
		level : 2,
		school : "Evoc",
		time : "1 ba",
		range : "60 ft",
		components : "V,S,M",
		compMaterial : "a drop of water",
		duration : "1 min",
		description : "Cloud follows creature for duration. When target takes damage from enemy, take reaction to make ranged spell attack from cloud. Hit: 2d8 lightning.",
		descriptionFull : "Choose a creature within range. A pristine, fluffy white cloud appears above the target and follows it for the duration. If the target takes damage from an enemy you can see, you can take a Reaction to make a ranged spell attack from the cloud, provided that enemy is within 60 feet of the target. On a hit, the enemy takes 2d8 Lightning damage.",
		atHigherLevels : "When you use a higher-level spell slot, the damage increases: 3d8 (level 4-5), 4d8 (level 6-7), or 5d8 (level 8-9)."
};

SpellsList["resilient friendship"] = {
		name : "Resilient Friendship",
		classes : ["bard", "cleric", "druid"],
		source : ["OTT", 0],
		level : 0,
		school : "Ench",
		time : "1 a",
		range : "5 ft",
		components : "V",
		duration : "Instantaneous",
		description : "Grant creature benefits of Help action. If target succeeds by next turn, gain 1d4 temporary HP (lasts 1 hour).",
		descriptionFull : "You magically assist a creature within range, granting it the benefits of the Help action. If the target successfully accomplishes the task by the start of your next turn, you gain 1d4 Temporary Hit Points, which last for 1 hour.",
		atHigherLevels : "The temporary HP increases at higher levels: 1d6 (level 5), 1d8 (level 11), 1d10 (level 17)."
};

SpellsList["retrieve"] = {
		name : "Retrieve",
		classes : ["bard", "sorcerer", "wizard"],
		source : ["OTT", 0],
		level : 0,
		school : "Trans",
		time : "1 ba",
		range : "15 ft",
		components : "V",
		duration : "Instantaneous",
		description : "Object within range not worn/carried flies to you. Can catch it or drop it at feet. Fails if object weighs over 10 lb.",
		descriptionFull : "You cause an object within range that isn't being worn or carried to fly to you. You can either catch it in your open hand or cause it to fall to the ground at your feet. If the object weighs more than 10 pounds, the spell fails."
};

SpellsList["root grab"] = {
		name : "Root Grab",
		classes : ["bard", "druid", "sorcerer", "wizard"],
		source : ["OTT", 0],
		level : 0,
		school : "Conj",
		time : "1 r",
		range : "10 ft",
		components : "V,S",
		duration : "Instantaneous",
		description : "When creature provokes opportunity attack, roots grasp it. Target's speed reduced by 10 ft until start of your next turn.",
		descriptionFull : "You cause roots to reach out and grasp at the creature that provoked the Opportunity Attack, hindering its movement. The target's Speed is reduced by 10 feet until the start of your next turn."
};

SpellsList["sand structure"] = {
		name : "Sand Structure",
		classes : ["bard", "druid", "ranger", "sorcerer", "warlock", "wizard"],
		source : ["OTT", 0],
		level : 1,
		school : "Evoc",
		time : "1 a",
		range : "30 ft",
		components : "V,S,M",
		compMaterial : "a small piece of seaglass",
		duration : "1 min",
		description : "Wall of sand (5 ft tall, 5 ft wide, 1 ft thick) materializes. AC 13, 10 HP. Ritual: wall lasts until destroyed.",
		descriptionFull : "A wall of sand that is 5 feet tall, 5 feet wide, and 1 foot thick materializes from the ground in an unoccupied space you can see within range. The sand functions as solid stone while in its wall form. The wall has AC 13 and 10 Hit Points. Reducing the wall to 0 Hit Points destroys it and might cause connected walls to collapse at the GM's discretion. You can end the spell early by taking a Magic action to dismiss it. When the spell ends, the wall crumbles back into sand.\n\nIf you cast the spell as a Ritual, the wall lasts until it is destroyed or dismissed."
};

SpellsList["task"] = {
		name : "Task",
		classes : ["bard", "sorcerer", "warlock", "wizard"],
		source : ["OTT", 0],
		level : 0,
		school : "Trans",
		time : "1 a",
		range : "15 ft",
		components : "S",
		duration : "Up to 1 hr",
		description : "Complete small, simple task without physical interaction (flip page, sew tear, heat tea). Can have up to three tasks active.",
		descriptionFull : "With a flick of your wrist, you magically complete a small, simple task without any physical interaction -- such as flipping a book page, sewing a tear in a shirt, or heating a cup of tea. The task can't include anything intended to inflict a harmful effect on a creature and must be something you could normally accomplish without the use of magic. The spell fails if the target of the task is behind Total Cover.\n\nIf you cast this spell multiple times, you can have up to three tasks active at a time."
};

SpellsList["transparency"] = {
		name : "Transparency",
		classes : ["bard", "sorcerer", "warlock", "wizard"],
		source : ["OTT", 0],
		level : 2,
		school : "Illus",
		time : "1 r",
		range : "Self",
		components : "S",
		duration : "1 rnd",
		description : "Turn invisible when location would be revealed while hidden. Invisible until end of next turn, steps make no sound. Ends after attack, damage, or spell.",
		descriptionFull : "You temporarily turn Invisible, preventing you from being discovered by the triggering creature. Until the end of your next turn, you have the Invisible condition and your steps make no sound, regardless of the surface you are moving across. Anything you are wearing or carrying is also Invisible as long as it remains on your person. The spell ends after you make an attack roll, deal damage, or cast a spell."
};

SpellsList["vegetable blade"] = {
		name : "Vegetable Blade",
		classes : ["bard", "druid", "ranger", "paladin", "sorcerer"],
		source : ["OTT", 0],
		level : 3,
		school : "Conj",
		time : "1 a",
		range : "30 ft",
		components : "V,S,M",
		compMaterial : "a strip of grass",
		duration : "Conc, 1 min",
		description : "Vegetable fronds spring from ground. Can pull to reveal blade (1d12 slashing, finesse). Creatures bite for healing. Blade destroyed at d4.",
		descriptionFull : "A lush bunch of vegetable fronds suddenly springs from the ground in an unoccupied space you can see within range. As a Bonus Action, a creature can pull the fronds from the ground, revealing a root vegetable of your choice grown in the shape of a blade. For the duration, a creature can use the vegetable blade as a Melee weapon with which it is proficient. The blade deals 1d12 Slashing damage on a hit (the wielder adds its ability modifier to the damage roll as normal), and it has the Finesse property.\n\nOn subsequent turns, the wielder or one of its allies within reach can take a bite out of the blade as a Bonus Action. Doing so heals the creature for a number of Hit Points equal to the blade's damage die + your spellcasting ability modifier. Once a creature has taken a bite out of the blade, its damage die is reduced by one size -- from a d12 to a d10, for example. If a bite is taken when its damage die is a d4, the blade is destroyed and the spell ends early."
};

SpellsList["water bullet"] = {
		name : "Water Bullet",
		classes : ["druid", "ranger", "sorcerer", "wizard"],
		source : ["OTT", 0],
		level : 1,
		school : "Evoc",
		time : "1 a",
		range : "90 ft",
		components : "V,S",
		duration : "Instantaneous",
		description : "Ranged spell attack. Damage varies by distance: 5d6 (1-10 ft), 4d6 (11-60 ft), 3d6 (61-90 ft).",
		descriptionFull : "You create a sphere of swirling water that spins rapidly in your hand or mouth before you hurl it at a creature or object within range. Make a ranged spell attack against the target. On a hit, the target takes Bludgeoning damage based on how far it is from you:\n- 1-10 feet: 5d6\n- 11-60 feet: 4d6\n- 61-90 feet: 3d6",
		atHigherLevels : "The damage increases by 1d6 for each spell slot level above 1."
};

SpellsList["whelm weapon"] = {
		name : "Whelm Weapon",
		classes : ["bard", "druid", "ranger", "sorcerer", "wizard"],
		source : ["OTT", 0],
		level : 1,
		school : "Trans",
		time : "1 a",
		range : "60 ft",
		components : "V,S,M",
		compMaterial : "a drop of seawater",
		duration : "Conc, 1 min",
		description : "Up to 3 weapons become enveloped in water. Damage reduced by d4 roll (min 1). Ritualize can target 2 additional weapons per slot level above 1.",
		descriptionFull : "Up to three weapons of your choice that you can see within range become enveloped in water. Roll a d4; for the duration, any damage dealt by the weapons is reduced by the number rolled (to a minimum of 1 damage).",
		atHigherLevels : "You can target two additional weapons for each spell slot level above 1."
};

SpellsList["wind sprint"] = {
		name : "Wind Sprint",
		classes : ["paladin", "ranger", "wizard"],
		source : ["OTT", 0],
		level : 2,
		school : "Evoc",
		time : "1 ba",
		range : "60 ft",
		components : "V",
		duration : "Instantaneous",
		description : "Winds carry you to creature within range. If within reach, make melee attack. Target takes extra 2d6 slashing from winds.",
		descriptionFull : "A tempest wind churns around you until the end of the turn. You are immediately lifted by the winds, which carry you toward another creature you can see within range. If the winds move you within reach of the target, you immediately make a melee attack against it using a weapon or an Unarmed Strike, and the target takes an extra 2d6 Slashing damage as the winds batter it."
};

SpellsList["origami bird swarm"] = {
		name : "Origami Bird Swarm",
		classes : ["bard", "sorcerer", "warlock", "wizard"],
		source : ["OTT", 0],
		level : 5,
		school : "Trans",
		time : "1 a",
		range : "30 ft",
		components : "V,S,M",
		compMaterial : "a stack of papers (consumed)",
		duration : "Conc, 1 min",
		description : "8 origami birds attack target within 30 ft (8d6 slashing). Farther: swarm moves 30 ft/turn, AC = spell save DC, 1d6 per bird at target.",
		descriptionFull : "A swarm of eight origami birds erupts from the stack of papers consumed in the casting of the spell and flies toward a creature you can see within range. If the target is within 30 feet of you when you cast the spell, the swarm collides with it, dealing 8d6 Slashing damage, and the birds disappear.\n\nIf the target is farther than 30 feet away from you when you cast the spell, the swarm immediately moves 30 feet toward the target, and it moves another 30 feet toward the target at the start of each of your turns. The swarm ignores Difficult Terrain and moves around creatures and other obstructions as needed. While the swarm exists, it occupies a 5-foot-Cube area as if it were a Medium creature.\n\nWhile traveling toward the target, the swarm can be attacked. It has an AC equal to your spell save DC. For every attack that hits it, the number of birds in the swarm is reduced by one.\n\nAt the start of your turn when the swarm reaches its target, the target takes 1d6 Slashing damage for each bird remaining in the swarm. The birds then disappear. The birds disappear early if the target travels to a different plane of existence from them.",
		atHigherLevels : "The number of birds increases by two for each slot level above 5. Extra 2d6 damage if within 30 ft when cast (per slot above 5)."
};

SpellsList["pacify monster"] = {
		name : "Pacify Monster",
		classes : ["bard", "cleric", "druid", "sorcerer", "warlock", "wizard"],
		source : ["OTT", 0],
		level : 4,
		school : "Ench",
		time : "1 a",
		range : "60 ft",
		components : "V,S",
		duration : "Conc, 1 min",
		description : "Target must make WIS save or become pacified. Can't attack or cast damaging spells. Repeats save at turn end.",
		descriptionFull : "You attempt to pacify a creature you can see within range. The target must make a Wisdom saving throw. On a failed save, it has the Pacified condition until the spell ends. A Pacified creature can't attack, cast a spell that affects an enemy, or deal damage to another creature. The target can repeat the save at the end of each of its turns, ending the effect on itself on a success.",
		atHigherLevels : "You can target one additional creature for each spell slot level above 4."
};

SpellsList["pacify person"] = {
		name : "Pacify Person",
		classes : ["bard", "cleric", "druid", "sorcerer", "warlock", "wizard"],
		source : ["OTT", 0],
		level : 1,
		school : "Ench",
		time : "1 a",
		range : "60 ft",
		components : "V,S",
		duration : "Conc, 1 min",
		description : "Humanoid must make WIS save or become pacified. Can't attack or cast damaging spells. Repeats save at turn end.",
		descriptionFull : "You attempt to pacify a Humanoid you can see within range. The target must make a Wisdom saving throw. On a failed save, it has the Pacified condition until the spell ends. A Pacified creature can't attack, cast a spell that affects an enemy, or deal damage to another creature. The target can repeat the save at the end of each of its turns, ending the effect on itself on a success.",
		atHigherLevels : "You can target one additional Humanoid for each spell slot level above 1."
};

SpellsList["pillar of force"] = {
		name : "Pillar of Force",
		classes : ["bard", "druid", "ranger", "sorcerer"],
		source : ["OTT", 0],
		level : 2,
		school : "Evoc",
		time : "1 a",
		range : "60 ft",
		components : "V,S",
		duration : "Instantaneous",
		description : "Ranged spell attack. Hit: 2d12 bludgeoning, push Huge or smaller 10 ft. Ground becomes difficult terrain.",
		descriptionFull : "You swiftly stomp your foot, conjuring a pillar of wood or stone that thrusts out from underneath you and toward a creature or object you can see within range. Make a ranged spell attack against the target. On a hit, the target takes 2d12 Bludgeoning damage, and if the target is Huge or smaller, it is pushed up to 10 feet away from you. The ground in a straight line between you and the target also becomes Difficult Terrain, with each 5-foot-Square portion requiring at least 1 minute to clear by hand.",
		atHigherLevels : "The damage increases by 1d12 for each spell slot level above 2."
};

SpellsList["crustacean form"] = {
		name : "Crustacean Form",
		classes : ["sorcerer", "wizard"],
		source : ["OTT", 0],
		level : 6,
		school : "Abjur",
		time : "1 a",
		range : "Self",
		components : "V,S,M",
		compMaterial : "a rust crab shell",
		duration : "Conc, 1 min",
		description : "Create ethereal crustacean form. 40 ft swim speed, 30 ft blindsight, AC 20, bonus action claw attack (1d10). Damage threshold 15.",
		descriptionFull : "You create an ethereal crustacean form around your body, which protects and aids you in combat. For the duration, you have a Swim Speed of 40 feet, Blindsight with a range of 30 feet, and an Armor Class of 20 if your AC is lower than that. In addition, you can take a Bonus Action to make an Unarmed Strike using your claws. This attack deals 1d10 Bludgeoning damage instead of the normal damage for your Unarmed Strike, and you use your spellcasting ability modifier for the attack and damage rolls instead of Strength.\n\nAdditionally, your ethereal shell has a Damage Threshold of 15 Hit Points. This grants you Immunity to all damage unless you take an amount of damage from a single attack or effect equal to or greater than your Damage Threshold, in which case you take that entire instance of damage. Any damage that fails to meet or exceed the shell's Damage Threshold is superficial and doesn't reduce your Hit Points."
};

SpellsList["dara blocks"] = {
		name : "Dara Blocks",
		classes : ["sorcerer", "warlock", "wizard"],
		source : ["OTT", 0],
		level : 3,
		school : "Conj",
		time : "1 a",
		range : "60 ft",
		components : "V,S,M",
		compMaterial : "a pinch of sand and a piece of pottery",
		duration : "1 min",
		description : "Create five 1-foot cubes of magical force. Invisible except to you/chosen creatures. Hold 5,000 lb. Can push 10 ft with STR check.",
		descriptionFull : "You create five 1-foot Cubes of magical force known as dara blocks. Each dara block appears in a different unoccupied space of your choice within range and becomes magically fixed in place. The blocks are Invisible to all creatures except you and any creatures you designate when you cast the spell. A creature that can see the dara blocks (including one benefiting from See Invisibility or Truesight) sees a luminous cube made of a transparent, dark green light.\n\nA block fixed in the air can hold up to 5,000 pounds; More weight causes the block to fall. A creature can take a Utilize action to make a Strength check against your spell save DC, moving the block up to 10 feet on a success.",
		atHigherLevels : "You can create two additional dara blocks for each spell slot level above 3."
};

SpellsList["divine arrow"] = {
		name : "Divine Arrow",
		classes : ["bard", "cleric", "warlock"],
		source : ["OTT", 0],
		level : 7,
		school : "Evoc",
		time : "1 a",
		range : "120 ft",
		components : "V,S,M",
		compMaterial : "a pearl worth 100 gp",
		duration : "Conc, 1 min",
		description : "Ranged spell attack: 4d10 force. Target has vulnerability to one damage type (or resistance becomes normal). Duration: spell ends.",
		descriptionFull : "A bow made of light materializes as you fire an angelic arrow from it. Make a ranged spell attack against a creature or object within range. On a hit, the target takes 4d10 Force damage and, until the spell ends, has Vulnerability to one of the following damage types of your choice: Acid, Cold, Fire, Lightning, Necrotic, Radiant, or Thunder. If a creature has Immunity to the chosen damage type, it instead has Resistance to that type for the duration. If a creature has Resistance to the chosen damage type, it loses that Resistance for the duration."
};

SpellsList["duplicate"] = {
		name : "Duplicate",
		classes : ["bard", "sorcerer", "warlock", "wizard"],
		source : ["OTT", 0],
		level : 1,
		school : "Conj",
		time : "1 a",
		range : "5 ft",
		components : "S,M",
		compMaterial : "copper powder and wax",
		duration : "1 hr",
		description : "Create exact replica of object (up to 25 lb). Functions as original but no magic. Investigation to detect.",
		descriptionFull : "You create an exact replica of an object you can see within range that weighs no more than 25 pounds. At first glance, the two objects are indistinguishable from each other, and the duplicate functions as if it were the original, except for any magical properties the original object may have. The duplicate disappears when the spell ends.\n\nIf a creature takes a Study action to examine the duplicate, it can determine that the duplicate is a replica with a successful Intelligence (Investigation) check against your spell save DC.",
		atHigherLevels : "Duration extends: 8 hours (2nd-3rd slot) or 24 hours (4th+ slot)."
};

SpellsList["ember belly"] = {
		name : "Ember Belly",
		classes : ["bard", "ranger", "sorcerer", "wizard"],
		source : ["OTT", 0],
		level : 2,
		school : "Evoc",
		time : "1 a",
		range : "Self",
		components : "S,M",
		compMaterial : "a flask of oil (consumed)",
		duration : "8 hr",
		description : "Swallow oil. Once, as bonus action, exhale it as fire in 30 ft line. DEX save: 2d10 fire or half.",
		descriptionFull : "You swallow the oil consumed in the spell's casting. Once before the spell ends, you can exhale the oil as a Bonus Action, igniting it as you expel it from your body. Each creature in a 5-foot-wide, 30-foot-long Line must make a Dexterity saving throw, taking 2d10 Fire damage on a failed save or half as much damage on a successful one. Once you exhale the oil, the spell ends."
};

SpellsList["armament"] = {
		name : "Armament",
		classes : ["bard", "cleric", "paladin", "ranger", "wizard"],
		source : ["OTT", 0],
		level : 1,
		school : "Conj",
		time : "1 a",
		range : "10 ft",
		components : "V,S,M",
		compMaterial : "metal powder",
		duration : "8 hr",
		description : "Materialize up to 5 nonmagical weapons in unoccupied space. Well-made and stylized.",
		descriptionFull : "Up to five simple or martial weapons of your choice materialize in an unoccupied space you can see within range. The weapons are nonmagical, but they are well made and stylistically look however you choose. The weapons vanish when the spell ends.",
		atHigherLevels : "You can summon three additional weapons for each spell slot level above 1."
};

SpellsList["at your side"] = {
		name : "At Your Side",
		classes : ["bard", "cleric", "druid", "ranger", "wizard"],
		source : ["OTT", 0],
		level : 2,
		school : "Trans",
		time : "1 a",
		range : "30 ft",
		components : "V,S",
		duration : "1 hr",
		description : "You and up to 3 creatures form arcane bond. Speed increases 5 ft. Reaction: move half speed toward another target.",
		descriptionFull : "You and up to three other willing creatures of your choice within range form an arcane bond, which magically pulls you forward when moving toward each other. For the duration, each target's Speed increases by 5 feet. Additionally, whenever an affected creature ends its turn, all targets of the spell can use their Reaction to move up to half their Speed toward another affected creature.",
		atHigherLevels : "You can target one additional creature for each spell slot level above 2."
};

SpellsList["beast transmutation"] = {
		name : "Beast Transmutation",
		classes : ["bard", "druid", "ranger", "wizard"],
		source : ["OTT", 0],
		level : 2,
		school : "Trans",
		time : "1 a",
		range : "30 ft",
		components : "S",
		duration : "Conc, 1 hr",
		description : "Transform beast into humanoid form. WIS save to resist. Gain 4 temporary HP. Spell ends when temp HP gone.",
		descriptionFull : "This spell transforms a Beast you can see within range into a Humanoid form. An unwilling target must succeed on a Wisdom saving throw to avoid the effect. The spell has no effect on a Beast with 0 Hit Points.\n\nThe transformation lasts for the duration, or until the target drops to 0 Hit Points or dies. The new form has the appearance of a Humanoid of any species you choose. The target's game statistics are replaced by the statistics of a Commoner, but it retains its creature type; Hit Points; Hit Point Dice; alignment; personality; and Intelligence, Wisdom, and Charisma scores.\n\nThe target gains 4 Temporary Hit Points. These Temporary Hit Points vanish if any remain when the spell ends. The spell ends early on the target if it has no Temporary Hit Points left.",
		atHigherLevels : "Duration increases 1 hour per slot level above 2nd."
};

SpellsList["counterspy"] = {
		name : "Counterspy",
		classes : ["bard", "cleric", "druid", "warlock", "wizard"],
		source : ["OTT", 0],
		level : 2,
		school : "Abjur",
		time : "10 m",
		range : "5 ft",
		components : "V,S,M",
		compMaterial : "a bag of sand and six candles",
		duration : "1 hr",
		description : "Create arcane circle (up to 10 ft radius). Detect if creature outside circle can see/hear you magically.",
		descriptionFull : "You create an intricate arcane circle of candles and sand, centered on a point on the ground within range. The circle can have a radius of up to 10 feet. If, at any point before the spell ends, a creature outside the circle can see or hear you through magical or nonmagical means, the candles' flames change color. If a spell or other magical effect was used, you are aware of it and understand the extent of its effects."
};

SpellsList["create spirit train stop"] = {
		name : "Create Spirit Train Stop",
		classes : ["bard", "sorcerer", "wizard"],
		source : ["OTT", 0],
		level : 5,
		school : "Conj",
		time : "1 m",
		range : "10 ft",
		components : "V,S,M",
		compMaterial : "a blank ticket and high quality ink worth 50+ gp (consumed)",
		duration : "1 hr",
		description : "Inscribe train stop on ticket. Wandering Line arrives with passage for up to 10 creatures. 1 hour travel.",
		descriptionFull : "As you cast the spell, you inscribe onto your blank ticket the code of a permanent train stop of your choice whose stop number you're already familiar with. A shimmering sign and small bench appear behind you as the Wandering Line arrives on tracks that materialize before it. Your ticket grants passage for you and up to nine other creatures of your choice. It takes 1 hour to arrive at your destination, regardless of the distance.\n\nDuring your travel, other stops may occur and are determined by the GM. If a target takes a Short Rest while traveling and regains Hit Points at the end of the Short Rest by spending one or more Hit Dice, it regains an additional 1d10 Hit Points.\n\nThere are countless train stops, each with a unique train stop number. When you first gain the ability to cast this spell, you learn the stop numbers for two destinations, determined by the GM. You can learn additional numbers during your adventures. You can commit a new number to memory by studying it for 1 minute."
};

SpellsList["festival king"] = {
		name : "Festival King",
		classes : ["bard", "wizard"],
		source : ["OTT", 0],
		level : 5,
		school : "Ench",
		time : "1 a",
		range : "30 ft",
		components : "V,S,M",
		compMaterial : "a small ribbon",
		duration : "Conc, 1 min",
		description : "Target becomes Festival King with crown and cape. 20 ft aura: CHR save or enamored. Can't act, give all attention.",
		descriptionFull : "Choose a creature you can see within range. A gaudy crown and cape appear on the target, accompanied by a disembodied arrangement of unseen brass instruments. For the duration, the target becomes the Festival King and exudes an aura of importance in a 20-foot Emanation. When you cast this spell, you can designate creatures to be unaffected by it. Any other creature that enters the aura for the first time on a turn or starts its turn there must make a Charisma saving throw. A creature that is immune to the Charmed condition automatically succeeds on this save.\n\nOn a failed save, the creature becomes enamored with the Festival King, chanting and dancing around them. Until the spell ends, affected creatures can't take an action or a Bonus Action, as they give all of their attention and admiration to the Festival King. These effects end on a creature when the spell ends or if the creature starts its turn outside of the Festival King's aura."
};

SpellsList["forest guard"] = {
		name : "Forest Guard",
		classes : ["druid", "ranger", "sorcerer"],
		source : ["OTT", 0],
		level : 1,
		school : "Conj",
		time : "1 a",
		range : "60 ft",
		components : "V,S",
		duration : "10 min",
		description : "Create small animated shrub. Enemies within 10 ft targeted for leaf attack (1d4 slashing). Bonus action: shrub attacks.",
		descriptionFull : "You create a Small animated shrub, which grows from the ground in an unoccupied space of your choice that you can see within range. The shrub has several human-like characteristics, including a wooden body and face, but it lacks hands and arms and can't move.\n\nAny enemy that moves to a space within 10 feet of the shrub for the first time on a turn or starts its turn there is targeted by the shrub's leaf attack. When it does so, the shrub makes a ranged spell attack, using your spell attack modifier. On a hit, the creature takes 1d4 Slashing damage.\n\nOn your turn, you can take a Bonus Action to cause the shrub to make a leaf attack against one creature or object within 10 feet of it. If multiple shrubs created by you are within 10 feet of the target, the attack deals 1d4 Slashing damage per shrub on a hit.",
		atHigherLevels : "Additional shrubs at higher levels: 2 (3rd-4th), 3 (5th-6th), 4 (7th-8th), 5 (9th)."
};

SpellsList["gift"] = {
		name : "Gift",
		classes : ["bard", "paladin", "ranger", "sorcerer", "warlock", "wizard"],
		source : ["OTT", 0],
		level : 1,
		school : "Evoc",
		time : "1 a",
		range : "30 ft",
		components : "V,S",
		duration : "Instantaneous",
		description : "You take 1d20 necrotic damage. Target regains HP equal to damage taken.",
		descriptionFull : "Choose a creature you can see within range. You take 1d20 Necrotic damage, and the target regains a number of Hit Points equal to the damage you took."
};

SpellsList["jolt"] = {
		name : "Jolt",
		classes : ["bard", "sorcerer", "warlock", "wizard"],
		source : ["OTT", 0],
		level : 0,
		school : "Evoc",
		time : "1 a",
		range : "30 ft",
		components : "V,S",
		duration : "Instantaneous",
		description : "Ranged spell attack: 1d8 lightning. Or power machine for 18 seconds.",
		descriptionFull : "A jolt of electricity springs from you toward a creature or object you can see within range. Make a ranged spell attack against the target. On a hit, the target takes 1d8 Lightning damage.\n\nAlternatively, you can target a machine within range and temporarily power it, allowing it to function as if it were whelmed by a spirit or permanently enchanted. Machines targeted by this spell stay powered for 18 seconds before shutting off. For a machine to function using this spell, it must still be in working condition.",
		atHigherLevels : "Damage increases at levels 5 (2d8), 11 (3d8), and 17 (4d8)."
};

SpellsList["light snare"] = {
		name : "Light Snare",
		classes : ["bard", "cleric", "sorcerer", "warlock", "wizard"],
		source : ["OTT", 0],
		level : 3,
		school : "Evoc",
		time : "1 ba",
		range : "60 ft",
		components : "V,S",
		duration : "Instantaneous",
		description : "Ranged spell attack. Hit: target restrained and fixed until end of next turn.",
		descriptionFull : "A shimmering band of energy streaks toward a creature or object within range and envelops it in a spectacular burst of light. Make a ranged spell attack against the target. On a hit, the target has the Restrained condition and is magically fixed in place until the end of its next turn."
};

SpellsList["mass levitate"] = {
		name : "Mass Levitate",
		classes : ["sorcerer", "wizard"],
		source : ["OTT", 0],
		level : 5,
		school : "Trans",
		time : "1 a",
		range : "60 ft",
		components : "V,S,M",
		compMaterial : "a small leather loop",
		duration : "Conc, 10 min",
		description : "Up to 6 creatures/objects rise 20 ft and suspend for duration. CON save to resist. Can move by pushing/pulling.",
		descriptionFull : "Up to six creatures or loose objects of your choice that you can see within range rise vertically up to 20 feet and remain suspended there for the duration. Each object levitated by the spell can weigh up to 500 pounds. An unwilling creature that succeeds on a Constitution saving throw is unaffected.\n\nA target can move only by pushing or pulling against a fixed object or surface within reach (such as a wall or a ceiling), which allows it to move as if it were climbing. You can change the altitude of any number of targets by up to 20 feet in either direction on your turn. If you are one of the targets, you can move up or down as part of your move. Otherwise, you can take a Magic action to move the targets, which must remain within the spell's range.\n\nWhen the spell ends, the targets float gently to the ground if they are still aloft."
};

SpellsList["monkey's grasp"] = {
		name : "Monkey's Grasp",
		classes : ["druid", "ranger", "sorcerer"],
		source : ["OTT", 0],
		level : 2,
		school : "Evoc",
		time : "1 a",
		range : "120 ft",
		components : "V,S",
		duration : "Conc, 1 min",
		description : "Ethereal monkey paw grapples Huge or smaller creature. DEX save or grappled. 1d8 necrotic at turn start.",
		descriptionFull : "You summon a large, ethereal monkey's paw that rises up and attempts to grapple a Huge or smaller creature on the ground that you can see within range. The target must succeed on a Dexterity saving throw, or it has the Grappled condition, with an escape DC equal to your spell save DC.\n\nWhile grappled by the paw, the target takes 1d8 Necrotic damage at the start of each of its turns. When the grapple is broken, the paw disappears and the spell ends.",
		atHigherLevels : "You can target one additional creature for each spell slot level above 2, summoning a separate monkey's paw for each target. When you do so, the spell doesn't end until the last paw disappears."
};

SpellsList["mushroom ballista"] = {
		name : "Mushroom Ballista",
		classes : ["druid", "ranger"],
		source : ["OTT", 0],
		level : 2,
		school : "Trans",
		time : "1 ba",
		range : "Touch",
		components : "V",
		duration : "1 hr",
		description : "Imbue up to 3 ammunition with mushroom magic. On hit: 1d6 poison + DEX save or pushed 5-15 ft.",
		descriptionFull : "You touch up to three pieces of ammunition and imbue them with unique toadstool magic. The targeted ammunition sprouts plump green mushrooms around it or its tip.\n\nWhen a creature is hit with a ranged attack using the ammunition, it takes an extra 1d6 Poison damage and must make a Dexterity saving throw. On a failed save, the creature is pushed a number of feet away from the attacker equal to the damage taken (rounded up to the nearest 5 feet), to a maximum of 15 feet. Whether the attack hits or misses, the spell then ends on that piece of ammunition. If you cast this spell again, it ends on any ammunition still affected by your previous casting."
};

SpellsList["obscure object"] = {
		name : "Obscure Object",
		classes : ["bard", "sorcerer", "warlock", "wizard"],
		source : ["OTT", 0],
		level : 2,
		school : "Illus",
		time : "1 a",
		range : "30 ft",
		components : "V,S",
		duration : "Conc, 1 hr",
		description : "Object within range becomes invisible until spell ends.",
		descriptionFull : "An object you can see within range becomes Invisible until the spell ends. The object must be no larger than a 5-foot Cube and it can't be worn by an unwilling creature."
};

SpellsList["shared vision"] = {
		name : "Shared Vision",
		classes : ["bard", "cleric", "sorcerer", "wizard"],
		source : ["OTT", 0],
		level : 2,
		school : "Div",
		time : "1 a",
		range : "1 mi",
		components : "S,M",
		compMaterial : "a glass eye",
		duration : "Conc, 10 min",
		description : "Choose willing creature within 1 mi. They see through your eyes, gaining special senses. Swap vision as bonus action.",
		descriptionFull : "Choose a willing creature you're familiar with; the spell fails if the target isn't within range. For the duration, or until the target dismisses the spell as a Magic action, it can see through your eyes, gaining the benefits of any special senses you have. Until the spell ends, the target can swap between its own vision and yours as a Bonus Action.",
		atHigherLevels : "You can target one additional creature per slot level above 2."
};

SpellsList["spell signature"] = {
		name : "Spell Signature",
		classes : ["bard", "cleric", "druid", "paladin", "ranger", "sorcerer", "warlock", "wizard"],
		source : ["OTT", 0],
		level : 2,
		school : "Div",
		time : "10 m",
		range : "30 ft",
		components : "V,S,M",
		compMaterial : "a rosewood match",
		duration : "Instantaneous",
		description : "Draw potent scents from magical effect within range. Identify creator. Check results determine what learned.",
		descriptionFull : "As you cast the spell, you draw out the potent scents trapped within all magic. Choose a magical effect you are aware of that's within range. That effect releases a scent specific to the creature that created it. If you are familiar with the creature, you automatically know that the magical effect was created by them.\n\nIf you are not familiar with the creature, you can make an ability check using your spellcasting ability and add your Proficiency Bonus to the roll. Refer to the table below to determine what information you glean from the scent, based on the result of your check.\n\n| Result | Information Learned |\n|---|---|\n| 5 or higher | You learn what kind of creature created the magical effect. |\n| 10 or higher | You also learn the creature's class, if any. |\n| 15 or higher | You also learn the name of any organization the creature is affiliated with. |\n| 20 or higher | You also learn the name of the creature. |"
};

SpellsList["sprout foliage"] = {
		name : "Sprout Foliage",
		classes : ["druid", "ranger", "sorcerer"],
		source : ["OTT", 0],
		level : 1,
		school : "Conj",
		time : "1 ba",
		range : "Self",
		components : "V,S,M",
		compMaterial : "flower seeds",
		duration : "1 hr",
		description : "Sprout leafy foliage covering body. While prone and still, indistinguishable from bush. Hurl projectiles at 30 ft (1d6+ability).",
		descriptionFull : "You sprout and rapidly grow lush, leafy foliage that covers your entire body. When casting this spell, you can choose whether the foliage has other features, such as flowers or berries.\n\nWhile you have the Prone condition and remain motionless, you are indistinguishable from a normal bush. If a creature hasn't observed you move or act, it must succeed on an Intelligence (Investigation) check against your spell save DC to discern that you aren't a bush. To become disguised again to a creature that has already discerned you for what you are, you must take the Hide action while unseen by that creature.\n\nUntil the spell ends, you can take a Magic action to create and hurl a pinecone, berry, or flower bud at a creature or object within 30 feet of you. Make a ranged spell attack. On a hit, the target takes Bludgeoning damage equal to 1d6 + your spellcasting ability modifier."
};

SpellsList["storm stallion"] = {
		name : "Storm Stallion",
		classes : ["druid", "paladin", "ranger", "sorcerer", "warlock"],
		source : ["OTT", 0],
		level : 4,
		school : "Evoc",
		time : "1 a",
		range : "60 ft",
		components : "V,S,M",
		compMaterial : "the stem of a Windbloom",
		duration : "Instantaneous",
		description : "Medium wind stallion appears in 5-ft cube, charges up to 60 ft in line. DEX save: 5d8 bludgeoning or half.",
		descriptionFull : "Choose a 5-foot-Cube space that you can see within range. A Medium elemental stallion appears in that space, formed from a twisting gust of wind, and charges in a straight Line up to 60 feet long in a direction of your choice. If the stallion appears in a space occupied by a creature that is Medium or smaller, that creature must succeed on a Dexterity saving throw or be carried along with the stallion as it moves.\n\nEach creature in the stallion's path (excluding the creature it's carrying, if any) must make a Dexterity saving throw, taking 5d8 Bludgeoning damage on a failed save or half as much damage on a successful one. The stallion then vanishes.",
		atHigherLevels : "Damage increases 1d8 per slot level above 4."
};

SpellsList["submerge"] = {
		name : "Submerge",
		classes : ["druid", "ranger", "sorcerer", "warlock", "wizard"],
		source : ["OTT", 0],
		level : 5,
		school : "Conj",
		time : "1 a",
		range : "10 ft",
		components : "V,S",
		duration : "1 rnd",
		description : "Link two bodies of water within 500 mi. Creatures step into one and exit from other (5 ft movement).",
		descriptionFull : "This spell creates a magical link between a body of water within range and another body of water of your choice within 500 miles. You must have seen the destination body of water at least once before. For the duration, any creature can step into the target body of water and exit from the destination body of water by using 5 feet of movement. Both bodies of water must be large enough for the creature to become fully submerged. If either body of water isn't large enough for the creature to be fully submerged, there's a 25 percent chance that the creature instead exits from a random body of water on the same plane of existence."
};

SpellsList["summon jack-o'-lantern"] = {
		name : "Summon Jack-o'-Lantern",
		classes : ["bard", "druid", "ranger", "sorcerer", "warlock", "wizard"],
		source : ["OTT", 0],
		level : 5,
		school : "Conj",
		time : "1 a",
		range : "60 ft",
		components : "V,S,M",
		compMaterial : "Jack-o'-Lantern Bits",
		duration : "Instantaneous",
		description : "Giant Jack-o'-lantern grows around up to 4 Medium creatures or 1 Large. DEX save to escape. AC 15, 100 HP.",
		descriptionFull : "A giant Jack-o'-lantern rapidly grows around up to four Medium or smaller creatures, or one Large creature, within a 5-foot-radius Sphere centered on a point you can see within range. An unwilling creature in the area can make a Dexterity saving throw, moving 5 feet outside the Jack-o'-lantern on a success.\n\nWhile inside the Jack-o'-lantern, creatures can see only through its eyes and mouth, which are located on one side of the Jack-o'-lantern, chosen by you when you cast this spell. The creatures can make attacks with Ranged or Reach weapons only from this side. Creatures outside the Jack-o'-lantern see only a warm, glowing light when looking into its mouth or eyes. While the Jack-o'-lantern remains, no creature inside or outside of it can pass or reach through it.\n\nThe Jack-o'-lantern has AC 15 and 100 Hit Points, and it weighs 5,000 pounds. The lantern naturally loses 1 Hit Point every 30 days. When the lantern is reduced to 0 Hit Points, it is destroyed."
};

SpellsList["summon vehicle"] = {
		name : "Summon Vehicle",
		classes : ["bard", "ranger", "wizard"],
		source : ["OTT", 0],
		level : 1,
		school : "Conj",
		time : "1 a",
		range : "30 ft",
		components : "V,S,M",
		compMaterial : "a small piece of rubber",
		duration : "10 min",
		description : "Summon bicycle or moving machine within 5 ft. Size: 5-ft cube, 60 ft speed, carries 1 Medium creature.",
		descriptionFull : "You summon a bicycle or other moving machine in an unoccupied space within 5 feet of you. The vehicle can be no larger than a 5-foot Cube and can carry only one creature that is Medium or smaller. It has a Speed of 60 feet, which you can use while riding it, provided you have at least one free hand to operate the vehicle. When the spell ends, the vehicle vanishes."
};

SpellsList["swallow magic"] = {
		name : "Swallow Magic",
		classes : ["bard", "wizard"],
		source : ["OTT", 0],
		level : 1,
		school : "Trans",
		time : "1 r",
		range : "Self",
		components : "S",
		duration : "Instantaneous",
		description : "After resisting spell/missing attack: regain 1d4+ability HP, +15 ft speed, or +d6 to next D20 test.",
		descriptionFull : "You chomp down on the threads of magic left behind after the triggering spell fails to affect you, swallowing the now-latent energy and gaining one of the following effects of your choice:\n- You regain Hit Points equal to 1d4 + your spellcasting ability modifier.\n- Your Speed increases by 15 feet and you don't provoke Opportunity Attacks until the end of your next turn.\n- Once before the end of your next turn, you can roll a d6 and add the number rolled to a D20 Test you make."
};

SpellsList["switched form"] = {
		name : "Switched Form",
		classes : ["bard", "sorcerer", "warlock", "wizard"],
		source : ["OTT", 0],
		level : 2,
		school : "Illus",
		time : "1 a",
		range : "30 ft",
		components : "V,S",
		duration : "1 hr",
		description : "Two humanoids appear to look like each other (clothing, armor, weapons). Illusion fails to physical inspection.",
		descriptionFull : "You give an illusory appearance to two Humanoids you can see within range, making each target look like the other -- including its armor, clothing, weapons, and other belongings on its person. Each creature can seem 1 foot shorter or taller; the disguise otherwise replicates the other target's physical features as accurately as possible.\n\nThe changes wrought by this spell fail to hold up to physical inspection. For example, if this spell causes a creature to appear with a cape as part of its disguise, objects pass through the cape.\n\nA creature that takes the Study action to examine a target can make an Intelligence (Investigation) check against your spell save DC. If it succeeds, it becomes aware that the target is disguised."
};

SpellsList["tamh gon's fiery festival feast"] = {
		name : "Tamh Gon's Fiery Festival Feast",
		classes : ["bard", "cleric", "wizard"],
		source : ["OTT", 0],
		level : 5,
		school : "Abjur",
		time : "10 m",
		range : "30 ft",
		components : "V,S,M",
		compMaterial : "an uncommon ingredient (consumed)",
		duration : "Instantaneous",
		description : "Sanctify meal in 1 hour. Up to 12 creatures get: -1 exhaustion, +10 ft speed, +2 DEX saves, activate Ember Belly once.",
		descriptionFull : "You sanctify a meal in an extravagant show of thrown spices and twirling dance. Those who participate in the meal are granted the curry blessings of the great festival spirit Tamh Gon. The feast takes 1 hour to consume, and the beneficial effects don't set in until this hour is over. Up to twelve creatures can partake of the feast.\n\nA creature that partakes gains several benefits, which last for 24 hours. The creature's Exhaustion level, if any, decreases by 1, its Speed increases by 10 feet, and it gains a +2 bonus to Dexterity saving throws. It can also activate the effects of the Ember Belly spell one time while the benefits of the feast last."
};

SpellsList["bubble lift"] = {
		name : "Bubble Lift",
		classes : ["druid", "sorcerer", "wizard"],
		source : ["OTT", 0],
		level : 1,
		school : "Evoc",
		time : "1 a",
		range : "60 ft",
		components : "V",
		duration : "1 hr",
		description : "Blow bubble around object (up to 500 lb), float 4 ft off ground. Bubble weighs 10 lb, can be pushed.",
		descriptionFull : "You blow a bubble around any solid, granular, or liquid object that weighs 500 pounds or less, causing it to float 4 feet off the ground. No matter its contents, the bubble weighs 10 pounds and can be pushed using an action. Strong winds or effects that would push a creature also push the bubble. The bubble always floats at least 4 feet above the ground, and it descends from a fall at a rate of 10 feet per round.\n\nWhen the spell ends, the bubble pops, releasing its contents. The spell ends early if a creature within reach takes an action to pierce the bubble.",
		atHigherLevels : "Weight capacity increases 500 lb per slot level above 1."
};

SpellsList["butterfly storm"] = {
		name : "Butterfly Storm",
		classes : ["druid", "ranger", "sorcerer", "warlock", "wizard"],
		source : ["OTT", 0],
		level : 3,
		school : "Conj",
		time : "1 a",
		range : "120 ft",
		components : "V,S,M",
		compMaterial : "insect legs",
		duration : "Conc, 1 min",
		description : "20-ft radius sphere of butterflies (heavily obscured). Difficult terrain. STR save or pulled back to center.",
		descriptionFull : "You create a chaotic cloud of butterflies in a 20-foot-radius Sphere centered on a point you can see within range. The area is Heavily Obscured, and any fog or smoke in the area is dispersed.\n\nWhen you cast this spell, all creatures other than those you designate are subjected to the following effects. The affected area is Difficult Terrain. Any affected creature that attempts to leave the area must make a Strength saving throw. On a failed save, it is pulled back to the unoccupied space closest to the center of the Sphere."
};

SpellsList["conjure ocean"] = {
		name : "Conjure Ocean",
		classes : ["druid", "ranger", "sorcerer", "wizard"],
		source : ["OTT", 0],
		level : 3,
		school : "Conj",
		time : "1 a",
		range : "60 ft",
		components : "V,S,M",
		compMaterial : "a piece of Witch's eye coral",
		duration : "Conc, 10 min",
		description : "Teleport random 20-ft cube of ocean water to area within range. Creatures move freely in it.",
		descriptionFull : "You teleport a random 20-foot Cube of water from the bottom of the ocean to an area you can see within range. The water retains its shape as if held within a container. A creature can enter and exit the water as normal.\n\nWhen the spell ends, the water loses its shape, crashing to the ground and spreading outward. Any creature inside the water when this happens is carried 30 feet in a random direction."
};

SpellsList["control animal"] = {
		name : "Control Animal",
		classes : ["druid", "ranger", "sorcerer"],
		source : ["OTT", 0],
		level : 2,
		school : "Ench",
		time : "1 a",
		range : "60 ft",
		components : "V,S,M",
		compMaterial : "a bit of matted fur",
		duration : "Conc, 1 hr",
		description : "Control beast with CR 2 or lower. WIS save to resist. See through eyes. Must check on damage or spell ends.",
		descriptionFull : "Choose a Beast that you can see within range. The Beast is affected if it has a Challenge Rating of 2 or lower; otherwise, the spell fails. An affected target must succeed on a Wisdom saving throw or you take total and precise control of it as your consciousness enters its body. While under the effect of this spell, you can see through the target's eyes and hear what it hears, gaining the benefits of any special senses the target has.\n\nYou can move and take actions as the target and can perform tasks the target could feasibly perform. For the duration, your body is considered to have the Unconscious condition; this doesn't affect your Concentration on the spell, but if the target has the Unconscious condition or dies, the spell ends. If the target takes damage, you must make a Wisdom (Animal Handling) check, with a DC equal to 10 or half the damage it took (round down), whichever number is higher. On a failure, the target regains control of its body, and the spell ends.",
		atHigherLevels : "Maximum CR increases by 1 per slot level above 2."
};

// Subclasses start here
// BARBARIAN - BELLY BREWER


AddSubClass("barbarian", "belly brewer", {
	regExpSearch: /^(?=.*barbarian)(?=.*belly)(?=.*brew)/i,
	subname: "Belly Brewer",
	source: ["OTT", 0],
	features: {
		"subclassfeature3": {
			name: "Belly Concoction",
			source: ["OTT", 0],
			minlevel: 3,
			description: desc([
				"When I Rage, I choose a Concoction: Combat, Utility, or Whimsy (change each Rage)",
				"\u2022 Combat: Reaction to deflect ranged attacks (1d12+Con+Barb level); BA for +5 ft reach",
				"  (first hit deals +1d6 of weapon's damage type)",
				"\u2022 Utility: BA swallow any non-magic object; expend Hit Die+Con mod to heal; Con mod uses/LR",
				"\u2022 Whimsy: Start of turn choose: teleport 10 ft; OR take 1d4 Necrotic for next check bonus;",
				"  OR take Help as BA; random cosmetic visual effect each turn"
			]),
			action: [
				["reaction", "Combat Concoction: Belly Deflect"],
				["bonus action", "Combat Concoction: Stretch Arms (+5 ft reach)"],
				["bonus action", "Utility Concoction: Swallow Object"],
				["bonus action", "Utility Concoction: Expend Hit Die to Heal"]
			],
			toNotesPage: [{
				name: "Belly Concoction Details",
				page3notes: true,
				note: [
					"BELLY CONCOCTION: Choose Combat, Utility, or Whimsy on each Rage.",
					"",
					"COMBAT:",
					"\u2022 Reaction when hit by ranged attack: reduce damage by 1d12 + Con mod + Barb level",
					"\u2022 Before making melee attack, BA: +5 ft reach until end of turn;",
					"  first hit deals +1d6 of the weapon's damage type",
					"",
					"UTILITY:",
					"\u2022 BA: swallow any non-magic object that fits in your mouth",
					"\u2022 Expend Hit Die + Con mod to heal (min 1 HP)",
					"\u2022 Uses = Con mod (min 1) per Long Rest",
					"",
					"WHIMSY:",
					"\u2022 Start of each turn, choose one:",
					"  - Teleport 10 ft to unoccupied space you can see",
					"  - Take 1d4 Necrotic; next ability check gains bonus equal to number rolled",
					"  - Take the Help action as a BA",
					"\u2022 Gain a random cosmetic visual effect each turn (flavor only)"
				]
			}]
		},
		"subclassfeature3.1": {
			name: "Side Effects",
			source: ["OTT", 0],
			minlevel: 3,
			description: desc([
				"I know the Prestidigitation and Thaumaturgy cantrips",
				"Constitution is my spellcasting ability for these cantrips"
			]),
			spellcastingBonus: [{
				name: "Side Effects",
				spells: ["prestidigitation"],
				selection: ["prestidigitation"],
				spellcastingAbility: 3
			}, {
				name: "Side Effects",
				spells: ["thaumaturgy"],
				selection: ["thaumaturgy"],
				spellcastingAbility: 3
			}]
		},
		"subclassfeature6": {
			name: "Quick Brew",
			source: ["OTT", 0],
			minlevel: 6,
			description: desc([
				"I choose one common potion; I can activate it as a BA once per Long Rest",
				"I can replace it on each Barbarian level-up"
			]),
			action: [["bonus action", "Quick Brew (activate chosen common potion)"]],
			usages: 1,
			recovery: "long rest"
		},
		"subclassfeature10": {
			name: "Lingering Effects",
			source: ["OTT", 0],
			minlevel: 10,
			description: desc([
				"After a Long Rest, I choose one condition; I gain Advantage on saves vs that condition",
				"Choose from: Blinded, Charmed, Exhaustion, Frightened, Paralyzed, Petrified,",
				"  Poisoned, Prone, Restrained, or Stunned; I can change it on my next Long Rest"
			])
		},
		"subclassfeature14": {
			name: "Mighty Quick Brew",
			source: ["OTT", 0],
			minlevel: 14,
			description: desc([
				"Quick Brew now also includes one additional common and one uncommon potion",
				"Each can be activated as a BA (once per Long Rest each)",
				"I can replace each on a Barb level-up (replacement must match rarity)"
			]),
			action: [
				["bonus action", "Quick Brew - Common Potion 2"],
				["bonus action", "Quick Brew - Uncommon Potion"]
			],
			usages: 3,
			recovery: "long rest"
		}
	}
});


// BARD - COLLEGE OF MASKS


AddSubClass("bard", "college of masks", {
	regExpSearch: /^(?=.*bard)(?=.*masks)/i,
	subname: "College of Masks",
	source: ["OTT", 0],
	features: {
		"subclassfeature3": {
			name: "Tools of Performance",
			source: ["OTT", 0],
			minlevel: 3,
			description: desc([
				"I craft 2 masks from the Masks list; gain 1 more at Bard levels 7, 11, and 15",
				"I can replace one mask when crafting a new one",
				"While wearing a mask I gain its abilities; don/swap as Utilize action or BA",
				"Mask save DC = Bard spell save DC"
			]),
			additional: levels.map(function (n) {
				return n < 7 ? "2 masks" : n < 11 ? "3 masks" : n < 15 ? "4 masks" : "5 masks";
			}),
			extraname: "Mask",
			extrachoices: [
				"Demon Mask (prereq: Lv5+)",
				"Fish Mask",
				"Fox Mask",
				"Golem Mask (prereq: Lv5+)",
				"Harpy Mask (prereq: Lv11+)",
				"Old Man Mask",
				"Protagonist Mask",
				"Sea Urchin Mask",
				"Spirit Mask (prereq: Lv7+)",
				"Stone Mask"
			],
			extraTimes: levels.map(function (n) {
				return n < 7 ? 2 : n < 11 ? 3 : n < 15 ? 4 : 5;
			}),
			"demon mask (prereq: lv5+)": {
				name: "Demon Mask",
				source: ["OTT", 0],
				prereqeval: function (v) { return classes.known.bard.level >= 5; },
				description: desc([
					"Arcane Memory (Magic action, expend spell slot): know if creature/object was within",
					"  20 ft in past 24h; Lv3+ slot gives a brief vision of what occurred",
					"Demon Eye (Magic action): see through solid objects up to 15 ft",
					"  Blocked by: 1 ft stone/dirt/wood, 1 inch metal, or any lead"
				]),
				action: [["action", "Demon Mask: Arcane Memory (expend spell slot)"], ["action", "Demon Mask: Demon Eye"]]
			},
			"fish mask": {
				name: "Fish Mask",
				source: ["OTT", 0],
				description: desc([
					"Swim Speed equals my Speed; I can breathe underwater",
					"I always have Water Bullet and Whelm prepared (free, don't count against spells known)"
				]),
				speed: { swim: { spd: "walk", enc: "walk" } },
				spellcastingBonus: [{
					name: "Fish Mask",
					spells: ["water bullet"],
					selection: ["water bullet"],
					prepared: true
				}, {
					name: "Fish Mask",
					spells: ["whelm"],
					selection: ["whelm"],
					prepared: true
				}]
			},
			"fox mask": {
				name: "Fox Mask",
				source: ["OTT", 0],
				description: desc([
					"I can move through enemy spaces (not Difficult Terrain for me)",
					"I gain +1 AC",
					"Reaction when I make a Dex saving throw: gain Advantage on the roll"
				]),
				action: [["reaction", "Fox Mask: Advantage on Dex Save"]],
				extraAC: [{ mod: 1, name: "Fox Mask", stopeval: function (v) { return false; } }]
			},
			"golem mask (prereq: lv5+)": {
				name: "Golem Mask",
				source: ["OTT", 0],
				prereqeval: function (v) { return classes.known.bard.level >= 5; },
				description: desc([
					"My weapon and unarmed attacks deal +1d8 damage",
					"Heavy weapons don't impose Disadvantage if my Str or Dex is below 13",
					"I deal double damage to objects and structures"
				])
			},
			"harpy mask (prereq: lv11+)": {
				name: "Harpy Mask",
				source: ["OTT", 0],
				prereqeval: function (v) { return classes.known.bard.level >= 11; },
				description: desc([
					"I gain a Fly Speed equal to my Speed",
					"I gain Resistance to Psychic damage"
				]),
				speed: { fly: { spd: "walk", enc: "walk" } },
				dmgres: ["Psychic"]
			},
			"old man mask": {
				name: "Old Man Mask",
				source: ["OTT", 0],
				description: desc([
					"Detect Magic and Identify are always prepared (don't count against spells known)",
					"I can cast both without expending a spell slot or Material components"
				]),
				spellcastingBonus: [{
					name: "Old Man Mask",
					spells: ["detect magic"],
					selection: ["detect magic"],
					prepared: true
				}, {
					name: "Old Man Mask",
					spells: ["identify"],
					selection: ["identify"],
					prepared: true
				}]
			},
			"protagonist mask": {
				name: "Protagonist Mask",
				source: ["OTT", 0],
				description: desc([
					"On Initiative, gain THP = half Bard level (rounded up)",
					"BA: mark a creature as my antagonist for 1 minute",
					"  Advantage on ability checks directed at the antagonist",
					"  Reaction: expend Bardic Inspiration die, subtract roll from antagonist's attack roll"
				]),
				action: [["bonus action", "Protagonist Mask: Mark Antagonist"], ["reaction", "Protagonist Mask: Reduce Antagonist Attack"]]
			},
			"sea urchin mask": {
				name: "Sea Urchin Mask",
				source: ["OTT", 0],
				description: desc([
					"BA + expend Bardic Inspiration die: regain HP = roll + half Bard level (round up)",
					"Magic action: target within 30 ft makes Con save or Restrained 1 min; repeats at turn end",
					"Uses = Cha mod (min 1) per Long Rest"
				]),
				action: [["bonus action", "Sea Urchin Mask: Heal"], ["action", "Sea Urchin Mask: Restrain (Con save)"]],
				usages: "Charisma modifier per",
				usagescalc: "event.value = Math.max(1, What('Cha Mod'));",
				recovery: "long rest"
			},
			"spirit mask (prereq: lv7+)": {
				name: "Spirit Mask",
				source: ["OTT", 0],
				prereqeval: function (v) { return classes.known.bard.level >= 7; },
				description: desc([
					"Speak with Dead is always prepared (doesn't count against spells known)",
					"Expend Bardic Inspiration: enter Spirit Realm until end of turn or when I stop moving",
					"  Can only interact with Spirit Realm creatures/objects while there",
					"  If space occupied on return: shunted to nearest open space + take 1d10 Force"
				]),
				spellcastingBonus: [{
					name: "Spirit Mask",
					spells: ["speak with dead"],
					selection: ["speak with dead"],
					prepared: true
				}]
			},
			"stone mask": {
				name: "Stone Mask",
				source: ["OTT", 0],
				description: desc([
					"I gain proficiency in Athletics",
					"All Bludgeoning, Piercing, and Slashing damage I take is reduced by 2",
					"Advantage on checks and saves vs being pushed, pulled, or knocked Prone"
				]),
				skills: ["Athletics"]
			}
		},
		"subclassfeature3.1": {
			name: "Copycat",
			source: ["OTT", 0],
			minlevel: 3,
			description: desc([
				"Magic action + expend Bardic Inspiration: cast Alter Self (Change Appearance only)",
				"Targets a Humanoid I've seen; no Concentration; I gain 5 THP (ends if THP lost)",
				"I appear to have target's equipment (vanishes when spell ends; no magical properties)",
				"My actual equipment merges with me; I can't use it while transformed"
			]),
			action: [["action", "Copycat (expend Bardic Inspiration)"]]
		},
		"subclassfeature6": {
			name: "Many-Masked Performance",
			source: ["OTT", 0],
			minlevel: 6,
			description: desc([
				"Over 1 minute: attempt to Charm, Frighten, or render Unconscious up to Bard level",
				"  creatures within 60 ft who can hear me; all targets must receive the same condition",
				"Wis save vs Bard spell DC or have condition 10 min; repeat save on taking damage",
				"Long Rest recharge"
			]),
			usages: 1,
			recovery: "long rest"
		},
		"subclassfeature14": {
			name: "Gift of Theater",
			source: ["OTT", 0],
			minlevel: 14,
			description: desc([
				"Magic action: temporarily give one of my masks to an ally within 5 ft for 1 minute",
				"Only one ally can be designated at a time; Short/Long Rest recharge"
			]),
			action: [["action", "Gift of Theater"]],
			usages: 1,
			recovery: "short rest"
		}
	}
});


// DRUID - CIRCLE OF THE PETAL DRUID


AddSubClass("druid", "circle of the petal", {
	regExpSearch: /^(?=.*druid)(?=.*petal)/i,
	subname: "Circle of the Petal",
	source: ["OTT", 0],
	features: {
		"subclassfeature3": {
			name: "Petal Dance",
			source: ["OTT", 0],
			minlevel: 3,
			description: desc([
				"BA + expend Wild Shape use: conjure petal cloud (lasts 1 hr)",
				"While enveloped: +1 AC",
				"BA: lunge petals at creature within 30 ft (ranged spell attack) for Slashing damage",
				"Reaction when I or creature within 10 ft takes damage: reduce by Druid level + Wis mod",
				"  The reaction is one-time use (cloud dissipates after)"
			]),
			additional: levels.map(function (n) {
				return n < 5 ? "1d6 Slashing" : n < 11 ? "2d6 Slashing" : n < 17 ? "3d6 Slashing" : "4d6 Slashing";
			}),
			action: [
				["bonus action", "Petal Dance: Conjure Cloud (expend Wild Shape)"],
				["bonus action", "Petal Dance: Lunge Petals (ranged spell atk)"],
				["reaction", "Petal Dance: Reduce Damage (one use per cloud)"]
			],
			extraAC: [{ mod: 1, name: "Petal Dance (while enveloped)", stopeval: function (v) { return false; } }]
		},
		"subclassfeature6": {
			name: "Petal Beast Mimicry",
			source: ["OTT", 0],
			minlevel: 6,
			description: desc([
				"Magic action: summon Wild Spirit in unoccupied space within 30 ft (see Notes)",
				"Wild Spirit can only Dash or Attack; at 0 HP it explodes:",
				"  Each creature in 20-ft Emanation is affected by Faerie Fire until end of my next turn",
				"Dismisses after 1 min or dismissed (no action); Long Rest recharge",
				"At Lv11+: expend 2 uses to summon 2 Wild Spirits simultaneously"
			]),
			additional: levels.map(function (n) {
				return n < 11 ? "2 uses" : n < 16 ? "3 uses" : "4 uses";
			}),
			action: [["action", "Petal Beast Mimicry: Summon Wild Spirit"]],
			usages: levels.map(function (n) {
				return n < 11 ? 2 : n < 16 ? 3 : 4;
			}),
			recovery: "long rest",
			toNotesPage: [{
				name: "Wild Spirit Stat Block",
				page3notes: true,
				note: [
					"WILD SPIRIT",
					"Medium Spirit, Unaligned",
					"AC 15 | HP 2 + (3 \u00d7 Druid level) | Speed 40 ft, Fly 20 ft (hover) | Init +2",
					"STR 15 (+2) | DEX 15 (+2) | CON 15 (+2) | INT 9 (-1) | WIS 12 (+1) | CHA 9 (-1)",
					"Skills: Intimidation -1+PB | Perception +1+PB | Stealth +2+PB",
					"Passive Perception 11+PB | CR None (PB = your Proficiency Bonus)",
					"",
					"TRAITS:",
					"\u2022 Like the Wind: Move through creatures' spaces (counts as Difficult Terrain)",
					"\u2022 Promising Threat: Advantage on Intimidation if target saw it hit with Chomp in",
					"  the past minute",
					"",
					"ACTION \u2014 Chomp (Melee):",
					"  Atk bonus = your spell attack mod; reach 5 ft",
					"  2d6+2 Piercing; Large or smaller target is knocked Prone",
					"",
					"REACTION \u2014 Devour:",
					"  Trigger: reduces a creature to 0 HP",
					"  Response: regain 1d10 HP"
				]
			}]
		},
		"subclassfeature10": {
			name: "Spirit of Obojima",
			source: ["OTT", 0],
			minlevel: 10,
			description: desc([
				"Advantage on Wis (Survival) checks to find a path or track a creature",
				"Magic action: create petal wall up to 60 ft long, 15 ft high, 1 ft thick in any angle",
				"  Immune to all damage; auto-repairs; creatures pushed to one side on creation",
				"  Lasts Druid level minutes or until dismissed (no action); Long Rest recharge"
			]),
			action: [["action", "Spirit of Obojima: Create Petal Wall"]],
			usages: 1,
			recovery: "long rest"
		},
		"subclassfeature14": {
			name: "Winds of Revival",
			source: ["OTT", 0],
			minlevel: 14,
			description: desc([
				"When reduced to 0 HP, instead I regain HP equal to half my HP maximum",
				"Reaction: send a 10-ft Emanation wave; each creature makes Str save vs spell DC",
				"  On fail: 2d8 Slashing + pushed 15 ft away from me",
				"Long Rest recharge"
			]),
			action: [["reaction", "Winds of Revival: Emanation Wave"]],
			usages: 1,
			recovery: "long rest"
		}
	}
});


// FIGHTER - SPIRIT-FUSED FIGHTER


AddSubClass("fighter", "spirit-fused", {
	regExpSearch: /^(?=.*fighter)(?=.*spirit)(?=.*fused)/i,
	subname: "Spirit-Fused Fighter",
	source: ["OTT", 0],
	features: {
		"subclassfeature3": {
			name: "Arcane Quirk",
			source: ["OTT", 0],
			minlevel: 3,
			description: desc([
				"I choose one or more cosmetic effects when using subclass features (flavor only)",
				"Examples: tech goes haywire, radio plays on attacks, bubbles appear on damage"
			])
		},
		"subclassfeature3.1": {
			name: "Channel Essence",
			source: ["OTT", 0],
			minlevel: 3,
			description: desc([
				"I have Essence Dice (d6s); on a weapon/Unarmed attack roll, expend one die",
				"Add the roll to the attack roll OR damage roll (decide before or after rolling)",
				"Regain all expended dice on a Short or Long Rest"
			]),
			additional: levels.map(function (n) {
				return n < 7 ? "4 Essence Dice (d6)" :
					n < 10 ? "5 Essence Dice (d6)" :
					n < 15 ? "6 Essence Dice (d6)" :
					n < 18 ? "7 Essence Dice (d6)" : "8 Essence Dice (d6)";
			}),
			usages: levels.map(function (n) {
				return n < 7 ? 4 : n < 10 ? 5 : n < 15 ? 6 : n < 18 ? 7 : 8;
			}),
			recovery: "short rest"
		},
		"subclassfeature3.2": {
			name: "Object Channeling",
			source: ["OTT", 0],
			minlevel: 3,
			description: desc([
				"I gain proficiency with Salvage; I learn 1 Channeling Option and gain an object",
				"Object Channeling uses recharge on Short or Long Rest (see Notes for all options)"
			]),
			usages: 1,
			recovery: "short rest",
			extraname: "Channeling Option",
			extrachoices: [
				"Ballooning Bag",
				"Entangling Cord",
				"Find the Thing",
				"First Age Steed",
				"Goggled Vision",
				"Leaping Sneakers",
				"Pocket Voice",
				"Water Jettison"
			],
			extraTimes: levels.map(function (n) {
				return n < 7 ? 1 : n < 18 ? 2 : 3;
			}),
			"ballooning bag": {
				name: "Ballooning Bag",
				source: ["OTT", 0],
				description: desc([
					"BA: inflate worn bag, float up to 30 ft straight up; hover until released or next turn",
					"Reaction while falling: gain Feather Fall effect"
				]),
				action: [["bonus action", "Ballooning Bag: Float Up"], ["reaction", "Ballooning Bag: Feather Fall while Falling"]]
			},
			"entangling cord": {
				name: "Entangling Cord",
				source: ["OTT", 0],
				description: desc([
					"Replace one attack with entangling strike (object must be within 15 ft of target)",
					"Ranged attack (Con mod + PB) to pull target up to 15 ft toward the object"
				])
			},
			"find the thing": {
				name: "Find the Thing",
				source: ["OTT", 0],
				description: desc([
					"Magic action while touching navigation object: cast Locate Object",
					"No Concentration; lasts 1 hour; range 1 mile"
				]),
				action: [["action", "Find the Thing: Locate Object (no Conc, 1hr, 1mi)"]]
			},
			"first age steed": {
				name: "First Age Steed",
				source: ["OTT", 0],
				description: desc([
					"Magic action: summon non-flying vehicle (bicycle/moped)",
					"Carries 1 creature; Speed 60 ft; immune to all damage; disappears after 1 hour"
				]),
				action: [["action", "First Age Steed: Summon Vehicle"]]
			},
			"goggled vision": {
				name: "Goggled Vision",
				source: ["OTT", 0],
				description: desc([
					"While wearing an ocular covering, Magic action: Darkvision 60 ft for 1 hour",
					"Also gain Advantage on Intelligence (Investigation) to detect illusions"
				]),
				action: [["action", "Goggled Vision: Activate (1 hr)"]]
			},
			"leaping sneakers": {
				name: "Leaping Sneakers",
				source: ["OTT", 0],
				description: desc([
					"While wearing footwear, BA: gain Jump spell benefits for 1 hour"
				]),
				action: [["bonus action", "Leaping Sneakers: Activate Jump (1 hr)"]]
			},
			"pocket voice": {
				name: "Pocket Voice",
				source: ["OTT", 0],
				description: desc([
					"1-minute ritual: bind voice to a sound-making object within sight",
					"Voice heard through object (same plane) for 1 hour or until dismissed (BA)"
				]),
				action: [["bonus action", "Pocket Voice: Dismiss"]]
			},
			"water jettison": {
				name: "Water Jettison",
				source: ["OTT", 0],
				description: desc([
					"BA: spray water from container; gain Disengage and push 10 ft in chosen direction"
				]),
				action: [["bonus action", "Water Jettison"]]
			},
			toNotesPage: [{
				name: "Channeling Options Reference",
				page3notes: true,
				note: [
					"CHANNELING OPTIONS (Object Channeling, 1/short rest; see Improved Channeling at Lv7):",
					"\u2022 Ballooning Bag: BA inflate worn bag, float 30 ft up; hover until release or next turn;",
					"  Reaction while falling: Feather Fall",
					"\u2022 Entangling Cord: Replace attack; ranged atk (Con+PB) to pull target 15 ft toward object",
					"\u2022 Find the Thing: Magic action + nav object: Locate Object, no Conc, 1 hr, 1 mile",
					"\u2022 First Age Steed: Magic action: non-flying vehicle; 1 rider; Spd 60; immune to dmg; 1 hr",
					"\u2022 Goggled Vision: Wearing goggles + Magic action: Darkvision 60 ft +",
					"  Advantage on Investigation to detect illusions; 1 hr",
					"\u2022 Leaping Sneakers: Wearing footwear + BA: Jump spell benefits; 1 hr",
					"\u2022 Pocket Voice: 1-min ritual: bind voice to nearby object; heard same-plane 1 hr (BA dismiss)",
					"\u2022 Water Jettison: BA spray water: Disengage + push 10 ft in chosen direction"
				]
			}]
		},
		"subclassfeature7": {
			name: "Spirit Battery",
			source: ["OTT", 0],
			minlevel: 7,
			description: desc([
				"I gain the Spirit creature type; I learn the Jolt cantrip (Con = spellcasting ability)",
				"Jolt on a machine powers it for 1 hour instead of the normal 18 seconds",
				"Once per turn on a hit with weapon/Unarmed as part of Attack action:",
				"  Replace damage with Jolt's Lightning damage dice (no other damage bonuses)"
			])
		},
		"subclassfeature7.1": {
			name: "Improved Object Channeling",
			source: ["OTT", 0],
			minlevel: 7,
			description: desc([
				"I learn one more Channeling Option",
				"I can use Object Channeling 1 + Con mod times (min 2) per Short/Long Rest"
			]),
			usages: "1+Con mod per",
			usagescalc: "event.value = Math.max(2, 1 + What('Con Mod'));",
			recovery: "short rest"
		},
		"subclassfeature10": {
			name: "Improvised Armor",
			source: ["OTT", 0],
			minlevel: 10,
			description: desc([
				"Reaction when I am hit by an attack: expend an Essence Die",
				"Add the result to my AC for that attack (may cause the attack to miss)"
			]),
			action: [["reaction", "Improvised Armor (expend Essence Die)"]]
		},
		"subclassfeature15": {
			name: "Backup Battery",
			source: ["OTT", 0],
			minlevel: 15,
			description: desc([
				"I gain one additional use of Second Wind (5 total)",
				"When my HP drops below my Fighter level, I immediately use Second Wind",
				"  (no action required)"
			])
		},
		"subclassfeature18": {
			name: "Junk Master",
			source: ["OTT", 0],
			minlevel: 18,
			description: desc([
				"I learn one more Channeling Option",
				"When I roll Initiative, I regain Object Channeling uses until I have at least 2"
			])
		}
	}
});


// MONK - WAY OF THE SHEPHERD


AddSubClass("monk", "way of the shepherd", {
	regExpSearch: /^(?=.*shepherd)(?=.*monk).*$/i,
	subname: "Way of the Shepherd",
	source: ["OTT", 0],
	features: {
		"subclassfeature3": {
			name: "Herding Sheep",
			source: ["OTT", 0],
			minlevel: 3,
			description: desc([
				"I gain proficiency with Shepherd Crooks (Light property)",
				"BA + spend 1+ Focus Points: cause willing creature(s) within 60 ft to move",
				"  Toward me: up to 15 ft per Focus Point; any direction: up to 10 ft per Focus Point",
				"  Movement doesn't provoke Opportunity Attacks"
			]),
			additional: levels.map(function (n) {
				return n < 6 ? "1 creature max" : n < 11 ? "2 creatures max" : n < 17 ? "3 creatures max" : "4 creatures max";
			}),
			action: [["bonus action", "Herding Sheep (spend Focus Points)"]],
			weaponProfs: [false, false, ["Shepherd Crooks"]]
		},
		"subclassfeature6": {
			name: "Wind Shot",
			source: ["OTT", 0],
			minlevel: 6,
			description: desc([
				"When making an Unarmed Strike, I can instead fire a compressed air ranged attack (60 ft)",
				"Uses the same attack bonus and damage die as my Unarmed Strike",
				"On hit, optionally spend 1 Focus Point: Str save or pushed 10 ft OR Prone (my choice)"
			]),
			action: [["action", "Wind Shot (ranged Unarmed Strike, 60 ft)"]]
		},
		"subclassfeature6.1": {
			name: "Intercepting Maneuver",
			source: ["OTT", 0],
			minlevel: 6,
			description: desc([
				"Reaction + spend 1 Focus Point when ally within 10 ft is hit by an attack",
				"Reduce the damage taken by 1 Martial Arts die + my Dexterity modifier"
			]),
			action: [["reaction", "Intercepting Maneuver (1 Focus Point)"]]
		},
		"subclassfeature11": {
			name: "Take to the Skies",
			source: ["OTT", 0],
			minlevel: 11,
			description: desc([
				"When I use Step of the Wind: gain Fly Speed = Speed until end of my turn",
				"I also simultaneously take both Disengage and Dash without spending a Focus Point"
			])
		},
		"subclassfeature17": {
			name: "Guide to the Herd",
			source: ["OTT", 0],
			minlevel: 17,
			description: desc([
				"When I use Patient Defense (Disengage + Dodge), spend 1 additional Focus Point:",
				"Each ally within 30 ft who can see or hear me uses their Reaction to also gain",
				"  Disengage and Dodge until the start of my next turn"
			])
		}
	}
});


// PALADIN - OATH OF THE RIVER


AddSubClass("paladin", "oath of the river", {
	regExpSearch: /^(?=.*oath)(?=.*river)/i,
	subname: "Oath of the River",
	source: ["OTT", 0],
	spellcastingExtra: ["bless", "whelm weapon", "calm emotions", "lesser restoration", "water breathing", "water walk", "control water", "freedom of movement", "mass cure wounds", "submerge"],
	features: {
		"subclassfeature3": {
			name: "Blessed Pool",
			source: ["OTT", 0],
			minlevel: 3,
			description: desc([
				"BA: choose up to 2 \u00d7 Cha mod creatures (min 2) within 30 ft; each regains 2d6 HP",
				"Short/Long Rest recharge"
			]),
			action: [["bonus action", "Blessed Pool (2 \u00d7 Cha mod targets, 2d6 HP)"]],
			usages: 1,
			recovery: "short rest"
		},
		"subclassfeature3.1": {
			name: "Channel Divinity: Rushing Rapids",
			source: ["OTT", 0],
			minlevel: 3,
			description: desc([
				"Magic action + expend Channel Divinity: release 20-ft Emanation wave of water",
				"Large or smaller creatures of my choice make Str save vs spell DC",
				"On fail: pushed to unoccupied space 5 ft outside the area"
			]),
			action: [["action", "Rushing Rapids (Channel Divinity)"]]
		},
		"subclassfeature7": {
			name: "Aura of the River",
			source: ["OTT", 0],
			minlevel: 7,
			description: desc([
				"The Aura of Protection area counts as Difficult Terrain for enemies",
				"I can exempt any creatures I can see (no action required)",
				"First Large or smaller creature I hit each turn with melee: I can move them up to",
				"  10 ft to an unoccupied space using the aura"
			]),
			additional: levels.map(function (n) {
				return n < 18 ? "10-foot aura" : "30-foot aura";
			})
		},
		"subclassfeature15": {
			name: "Shielding Spirit",
			source: ["OTT", 0],
			minlevel: 15,
			description: desc([
				"Reaction when I make a Dex saving throw: halve the incoming damage for myself",
				"Optionally expend a spell slot: extend halved damage to creatures within 10 ft",
				"  Number of additional creatures protected = the level of spell slot expended"
			]),
			action: [["reaction", "Shielding Spirit (on Dex save; opt: expend spell slot)"]]
		},
		"subclassfeature20": {
			name: "Form of the River",
			source: ["OTT", 0],
			minlevel: 20,
			description: desc([
				"BA: transform for 1 minute; Long Rest recharge (or expend Lv5 spell slot)",
				"\u2022 Speed +15 ft + Swim Speed 60 ft",
				"\u2022 Advantage on all saving throws",
				"\u2022 When I move a creature with my aura, I can deal 2d8 Bludgeoning to them"
			]),
			action: [["bonus action", "Form of the River (1 min)"]],
			usages: 1,
			recovery: "long rest"
		}
	}
});


// RANGER - CORRUPTED RANGER


AddSubClass("ranger", "corrupted ranger", {
	regExpSearch: /^(?=.*corrupted)(?=.*ranger)/i,
	subname: "Corrupted Ranger",
	source: ["OTT", 0],
	features: {
		"subclassfeature3": {
			name: "First Manifestation",
			source: ["OTT", 0],
			minlevel: 3,
			description: desc([
				"When I take damage, I gain 1 curse marker (2 on Critical Hit)",
				"On weapon/Unarmed hit: consume ALL markers, dealing +1d4 Necrotic per marker",
				"Alternatively, BA: instantly gain markers up to my current maximum"
			]),
			additional: levels.map(function (n) {
				return n < 5 ? "Max 2 markers" : n < 11 ? "Max 3 markers" : n < 17 ? "Max 4 markers" : "Max 5 markers";
			}),
			action: [["bonus action", "First Manifestation: Gain Max Curse Markers"]]
		},
		"subclassfeature3.1": {
			name: "Second Manifestation",
			source: ["OTT", 0],
			minlevel: 3,
			description: desc([
				"On a Str or Dex check, I can replace the result with my Ranger level + 10",
				"I decide after rolling the d20 but before the GM announces the outcome",
				"2 uses per Long Rest"
			]),
			usages: 2,
			recovery: "long rest"
		},
		"subclassfeature7": {
			name: "Third Manifestation",
			source: ["OTT", 0],
			minlevel: 7,
			description: desc([
				"On weapon/Unarmed attack, expend 1 curse marker: roll d4 and add to attack roll",
				"  Once per turn; decide before or after rolling",
				"Reaction when I take damage: reduce it by my Ranger level; once per Short/Long Rest"
			]),
			action: [["reaction", "Third Manifestation: Reduce Damage"]],
			usages: 1,
			recovery: "short rest"
		},
		"subclassfeature11": {
			name: "Fourth Manifestation",
			source: ["OTT", 0],
			minlevel: 11,
			description: desc([
				"I gain one ailment of my choice: Failing Lungs, Graying Vision, or Losing Feeling"
			]),
			choices: ["Failing Lungs", "Graying Vision", "Losing Feeling"],
			"failing lungs": {
				name: "Fourth Manifestation: Failing Lungs",
				source: ["OTT", 0],
				description: desc([
					"Magic action: pull breath from creature I can see; it can't take Reactions until my",
					"  next turn; Large or smaller is also knocked Prone; consumes all curse markers (1d4 each)",
					"Reaction when creature makes Dex save: give it Advantage + +15 ft Speed until next turn"
				]),
				action: [["action", "Failing Lungs: Pull Breath (consumes all markers)"], ["reaction", "Failing Lungs: Gift Adv on Dex Save + 15 ft Speed"]]
			},
			"graying vision": {
				name: "Fourth Manifestation: Graying Vision",
				source: ["OTT", 0],
				description: desc([
					"I gain Blindsight 15 ft",
					"I automatically detect visual illusions whose DC \u2264 my Ranger spell save DC"
				]),
				vision: [["Blindsight", 15]]
			},
			"losing feeling": {
				name: "Fourth Manifestation: Losing Feeling",
				source: ["OTT", 0],
				description: desc([
					"BA: envelop creature within 60 ft in cursed flame; Short/Long Rest recharge",
					"While active, my curse marker damage increases to 1d6 Necrotic (instead of 1d4)"
				]),
				action: [["bonus action", "Losing Feeling: Cursed Flame"]],
				usages: 1,
				recovery: "short rest"
			}
		},
		"subclassfeature15": {
			name: "Fifth Manifestation",
			source: ["OTT", 0],
			minlevel: 15,
			description: desc([
				"BA: gain the following until start of my next turn:",
				"\u2022 Speed doubled; +2 AC; two additional attacks on Attack action",
				"\u2022 All attacks treated as if at maximum curse markers",
				"Second activation before Long Rest: lose benefits + gain 1 Exhaustion + drop to 1 HP",
				"  (if above 1 HP); need Long Rest to reuse after second activation"
			]),
			action: [["bonus action", "Fifth Manifestation: Surge"]],
			usages: 2,
			recovery: "long rest"
		}
	}
});


// ROGUE - WAXWORK ROGUE


AddSubClass("rogue", "waxwork", {
	regExpSearch: /^(?=.*waxwork)(?=.*rogue)/i,
	subname: "Waxwork Rogue",
	source: ["OTT", 0],
	features: {
		"subclassfeature3": {
			name: "Conjure Flame",
			source: ["OTT", 0],
			minlevel: 3,
			description: desc([
				"I know the Dancing Lights and Produce Flame cantrips",
				"I choose Intelligence or Charisma as my spellcasting ability (choose when gained)"
			]),
			spellcastingBonus: [{
				name: "Conjure Flame",
				spells: ["dancing lights"],
				selection: ["dancing lights"],
				spellcastingAbility: 6
			}, {
				name: "Conjure Flame",
				spells: ["produce flame"],
				selection: ["produce flame"],
				spellcastingAbility: 6
			}]
		},
		"subclassfeature3.1": {
			name: "Wax Enchantments",
			source: ["OTT", 0],
			minlevel: 3,
			description: desc([
				"I learn 4 Enchantment Options (2 more at Rogue levels 9, 13, and 17)",
				"I can replace one on each new learn",
				"Wick Points (WP): max = 3 + Rogue level; expended WP unavailable until Short/Long Rest"
			]),
			additional: levels.map(function (n) {
				return n < 9 ? "4 enchantments, " + (n + 3) + " max WP" :
					n < 13 ? "6 enchantments, " + (n + 3) + " max WP" :
					n < 17 ? "8 enchantments, " + (n + 3) + " max WP" :
					"10 enchantments, " + (n + 3) + " max WP";
			}),
			extraname: "Wax Enchantment",
			extrachoices: [
				"Blooming Light",
				"Bocha Glue Wax",
				"Burning Delay",
				"Candle Pop",
				"Consuming Flame (prereq: Lv9+)",
				"Delicacy",
				"Detonate",
				"Fish Fat Candle",
				"Flooding Abundance",
				"Iron Seal",
				"Lost Wax Carving",
				"Maker's Mark",
				"Shielding Seal",
				"Spark Shower",
				"Waxlings",
				"Wick Whip"
			],
			extraTimes: levels.map(function (n) {
				return n < 9 ? 4 : n < 13 ? 6 : n < 17 ? 8 : 10;
			}),
			"blooming light": {
				name: "Blooming Light",
				source: ["OTT", 0],
				description: desc([
					"1 WP, Magic action: ignite dark green candle; 10-ft radius Dim Light for 1 hr",
					"Creatures in light are hidden from Divination magic",
					"Advanced (Lv13+): lasts 8 hours instead"
				]),
				action: [["action", "Blooming Light (1 WP)"]]
			},
			"bocha glue wax": {
				name: "Bocha Glue Wax",
				source: ["OTT", 0],
				description: desc([
					"1 WP, Magic action: bond two objects together for 24 hours",
					"Break with Utilize action, DC 15 Str (Athletics)",
					"Advanced (Lv13+): break DC increases to 20"
				]),
				action: [["action", "Bocha Glue Wax (1 WP)"]]
			},
			"burning delay": {
				name: "Burning Delay",
				source: ["OTT", 0],
				description: desc([
					"3 additional WP: use alongside Candle Pop, Fish Fat Candle, or Detonate",
					"Delay that enchantment's activation by 1 round, 1 minute, or 10 minutes"
				])
			},
			"candle pop": {
				name: "Candle Pop",
				source: ["OTT", 0],
				description: desc([
					"2 WP, BA: throw misshapen yellow candle up to 60 ft",
					"Target makes Dex save vs Cunning Strike DC or Restrained; repeats save at turn end",
					"Advanced (Lv13+): also affects each creature within 5 ft of target"
				]),
				action: [["bonus action", "Candle Pop (2 WP)"]]
			},
			"consuming flame (prereq: lv9+)": {
				name: "Consuming Flame",
				source: ["OTT", 0],
				prereqeval: function (v) { return classes.known.rogue.level >= 9; },
				description: desc([
					"Prereq: Lv9+; 3 WP, Reaction when enemy within 60 ft casts a spell",
					"Cast Counterspell using Cunning Strike DC",
					"If countered and Lv3 or lower: spend 2 more WP to store it in candle (24 hr)"
				]),
				action: [["reaction", "Consuming Flame (3 WP)"]]
			},
			"delicacy": {
				name: "Delicacy",
				source: ["OTT", 0],
				description: desc([
					"1 WP, Magic action: imbue candle with healing; creature (BA) consumes for 1d6 HP",
					"Also sustained for 1 day; max 2 candles active",
					"Advanced (Lv13+): regain 1d12 HP; up to 4 candles active"
				]),
				action: [["action", "Delicacy: Create Healing Candle (1 WP)"]]
			},
			"detonate": {
				name: "Detonate",
				source: ["OTT", 0],
				description: desc([
					"3+ WP, Magic action: throw dark black candle up to 60 ft",
					"20-ft Sphere: Dex save vs Cunning Strike DC",
					"Fail: 2d6 Fire + 2d8 Thunder; +1d6 Fire per extra WP; flammable objects ignite"
				]),
				action: [["action", "Detonate (3+ WP)"]]
			},
			"fish fat candle": {
				name: "Fish Fat Candle",
				source: ["OTT", 0],
				description: desc([
					"1 WP, Magic action: throw oily candle up to 60 ft",
					"1 round later: Heavily Obscured 20-ft radius smoke cloud for 1 minute",
					"Smoke visible up to 10 miles away"
				]),
				action: [["action", "Fish Fat Candle (1 WP)"]]
			},
			"flooding abundance": {
				name: "Flooding Abundance",
				source: ["OTT", 0],
				description: desc([
					"2 WP, Magic action: throw tea light candle up to 60 ft to the ground",
					"Melts into 15-ft Square of wax (Difficult Terrain) for 1 minute",
					"Flammable; 5-ft section exposed to fire burns in 3 rounds (2d6 Fire to creatures)"
				]),
				action: [["action", "Flooding Abundance (2 WP)"]]
			},
			"iron seal": {
				name: "Iron Seal",
				source: ["OTT", 0],
				description: desc([
					"1 WP, Magic action: melt iron seal onto door or lidded object; magically held shut",
					"Break with Utilize action, DC 15 Str (Athletics); lasts until broken or dispelled",
					"Magic action to end early; Advanced (Lv13+): break DC increases to 20"
				]),
				action: [["action", "Iron Seal (1 WP)"]]
			},
			"lost wax carving": {
				name: "Lost Wax Carving",
				source: ["OTT", 0],
				description: desc([
					"2 WP, 10 minutes: craft detailed replica of object (max 1-ft Cube)",
					"Functions as the Duplicate spell"
				])
			},
			"maker's mark": {
				name: "Maker's Mark",
				source: ["OTT", 0],
				description: desc([
					"1 WP, on one-handed weapon attack (Attack action): also make Unarmed Strike",
					"  with free hand using signet ring: 1d4+Dex Bludgeoning + 1d6 Fire",
					"  Can Sneak Attack with it if not already used this turn",
					"Advanced (Lv13+): 1d6+Dex Bludgeoning + 1d10 Fire"
				])
			},
			"shielding seal": {
				name: "Shielding Seal",
				source: ["OTT", 0],
				description: desc([
					"1 WP, Magic action: grant willing creature/object 5 THP for 24 hr",
					"+5 THP per additional WP (max 15 THP); one active at a time",
					"Advanced (Lv13+): up to 3 active simultaneously"
				]),
				action: [["action", "Shielding Seal (1+ WP, max 15 THP)"]]
			},
			"spark shower": {
				name: "Spark Shower",
				source: ["OTT", 0],
				description: desc([
					"1 WP, BA: ignite breath; shower sparks at creature within 5 ft",
					"Advantage on my next attack roll vs that creature this turn",
					"Target can't make Opportunity Attacks until end of my turn"
				]),
				action: [["bonus action", "Spark Shower (1 WP)"]]
			},
			"waxlings": {
				name: "Waxlings",
				source: ["OTT", 0],
				description: desc([
					"2 WP, Magic action: cast Find Familiar; candle grows appendages/eyes (Rat stats)",
					"Magic action: command to touch flammable uncarried/unworn object (ignites it)",
					"Sheds Bright Light 5 ft, Dim Light 10 ft; dismissed after 1 hr or at 0 HP",
					"Advanced (Lv13+): create 2 simultaneously by spending 3 WP instead"
				]),
				action: [["action", "Waxlings: Create (2 WP)"], ["action", "Waxlings: Command"]]
			},
			"wick whip": {
				name: "Wick Whip",
				source: ["OTT", 0],
				description: desc([
					"3 WP, BA: ignite 10-ft candlewick soaked in dragon frog stomach acid; burns 1 min",
					"Melee weapon (proficient), Finesse/Light/Reach: 3d4 Fire + ability mod"
				]),
				action: [["bonus action", "Wick Whip: Ignite (3 WP)"]],
				weaponsAdd: ["Wick Whip"],
				weaponOptions: [{
					regExpSearch: /^(?=.*wick)(?=.*whip).*$/i,
					name: "Wick Whip",
					source: ["OTT", 0],
					ability: 2,
					type: "Simple",
					damage: [3, 4, "fire"],
					range: "Melee",
					description: "Finesse, Light, Reach; ignite with 3 WP (BA)",
					abilitytodamage: true,
					isAlwaysProf: true
				}]
			}
		},
		"subclassfeature9": {
			name: "Burn Cycle",
			source: ["OTT", 0],
			minlevel: 9,
			description: desc([
				"On a Sneak Attack turn, I can expend Wick Points instead of Sneak Attack dice",
				"Spend 1 WP per Sneak Attack die forgone to use a Cunning Strike effect",
				"I can also change that attack's Sneak Attack damage type to Fire"
			])
		},
		"subclassfeature13": {
			name: "Advanced Enchantments",
			source: ["OTT", 0],
			minlevel: 13,
			description: desc([
				"My Wax Enchantments become more potent (see Advanced version in each option's desc)",
				"If none of my known enchantments have an Advanced version, I learn one that does"
			])
		},
		"subclassfeature17": {
			name: "Spirit Flame",
			source: ["OTT", 0],
			minlevel: 17,
			description: desc([
				"BA: ignite a special pink wax candle for 1 minute; Long Rest recharge",
				"While lit and on my person:",
				"\u2022 Wick Point cost of enchantments reduced by 1",
				"\u2022 Immunity to Fire damage",
				"\u2022 Spirits have Disadvantage on attack rolls against me",
				"\u2022 Candle cannot be extinguished by nonmagical means"
			]),
			action: [["bonus action", "Spirit Flame: Light Pink Candle (1 min)"]],
			usages: 1,
			recovery: "long rest",
			dmgres: ["Fire"]
		}
	}
});


// SORCERER - ONI KIN SORCERY


AddSubClass("sorcerer", "oni kin", {
	regExpSearch: /^(?=.*sorcerer)(?=.*oni)(?=.*kin)/i,
	subname: "Oni Kin Sorcery",
	source: ["OTT", 0],
	spellcastingExtra: ["charm person", "spell signature", "swallow magic", "transparency", "bestow curse", "remove curse", "phantasmal killer", "polymorph", "geas", "modify memory"],
	features: {
		"subclassfeature3": {
			name: "Arcane Prison",
			source: ["OTT", 0],
			minlevel: 3,
			description: desc([
				"I gain Oni Traits as I expend Sorcery Points; each has physical + arcane effects",
				"Thresholds = Sorcery Points MISSING from maximum:",
				"  0-1: Eyes | 2-4: Horns | 5-9: Skin | 10-14: Tongue | 15+: Hair",
				"Traits remain active until Long Rest or lost; see Notes for full details"
			]),
			action: [
				["action", "Oni Eyes: Adv on Cha checks vs creature (1 min)"],
				["reaction", "Oni Horns: Cantrip via Opportunity Attack"],
				["bonus action", "Oni Tongue: Force Wis Save (Prone or move away)"]
			],
			toNotesPage: [{
				name: "Arcane Prison: Oni Traits",
				page3notes: true,
				note: [
					"ONI TRAITS (active while Sorcery Points missing meets threshold):",
					"",
					"EYES (0-1 points missing):",
					"  Eyes become large and glowing.",
					"  Magic action, 1 min: Advantage on all Cha checks directed at one non-Hostile",
					"  creature that can see your eyes. On end, target makes Wis save vs spell DC",
					"  or becomes Hostile. [Lv14: Zone of Truth prepared; cast free on 1 target in",
					"  60 ft; target repeats save each turn, ends if can't see your eyes.]",
					"",
					"HORNS (2-4 points missing):",
					"  Oni horns sprout from your head.",
					"  When casting cantrip requiring melee/ranged spell attack: make melee spell",
					"  attack via horns; target takes +1d6 Piercing [+1d12 at Lv14].",
					"  Reaction when creature provokes OA from you: cast cantrip (action cast time)",
					"  at it via horns instead.",
					"",
					"SKIN (5-9 points missing):",
					"  Skin turns dull red, green, or blue.",
					"  When you cast a Lv1+ spell, regain HP = spell level + Con mod.",
					"  No benefit if Tongue trait is also active during that casting.",
					"  [Lv14: regain HP = 2x spell level + Con mod.]",
					"",
					"TONGUE (10-14 points missing):",
					"  Tongue elongates and becomes Oni-like.",
					"  When casting a Verbal spell targeting a single creature, BA to force Wis save",
					"  vs spell DC: Prone OR must Reaction-move half Speed away (your choice).",
					"  [Lv14 with Lv5+ slot: target hyperfixated until start of your next turn:",
					"  Passive Perception reduced to 5; -5 to AC vs all attacks not from you.]",
					"",
					"HAIR (15+ points missing):",
					"  Hair turns white, stretches to cover back.",
					"  +2 AC."
				]
			}]
		},
		"subclassfeature6": {
			name: "Ogre Manipulation",
			source: ["OTT", 0],
			minlevel: 6,
			description: desc([
				"BA: activate one currently-available Oni trait (even below its SP threshold)",
				"The trait lasts 1 minute; lost if I don't naturally reach the threshold in that time",
				"Long Rest recharge"
			]),
			action: [["bonus action", "Ogre Manipulation (activate Oni trait)"]],
			usages: 1,
			recovery: "long rest"
		},
		"subclassfeature14": {
			name: "Boiling Power",
			source: ["OTT", 0],
			minlevel: 14,
			description: desc([
				"My Oni traits grow stronger (see Notes for details):",
				"\u2022 Eyes: Zone of Truth prepared; target repeats save each turn",
				"\u2022 Horns: Extra damage increases to 1d12 Piercing",
				"\u2022 Skin: Regain HP = 2x spell level + Con mod",
				"\u2022 Tongue + Lv5 slot: target hyperfixated (Passive Perc 5, -5 AC vs others)"
			])
		},
		"subclassfeature18": {
			name: "Transformation",
			source: ["OTT", 0],
			minlevel: 18,
			description: desc([
				"Magic action: instantly manifest ALL Oni traits regardless of Sorcery Points spent",
				"While active: Resistance to Bludgeoning, Piercing, Slashing; Immunity to Charmed",
				"  and Frightened; lasts 1 minute; traits gained this way are lost after",
				"Long Rest recharge; or spend 5 Sorcery Points to reuse"
			]),
			action: [["action", "Transformation: Manifest All Oni Traits (1 min)"]],
			usages: 1,
			recovery: "long rest",
			dmgres: ["Bludgeoning", "Piercing", "Slashing"]
		}
	}
});


// WARLOCK - THE LANTERN


AddSubClass("warlock", "the lantern", {
	regExpSearch: /^(?=.*lantern)(?=.*(warlock|patron))/i,
	subname: "The Lantern",
	source: ["OTT", 0],
	spellcastingExtra: ["faerie fire", "identify", "locate object", "swallow magic", "daylight", "nondetection", "guardian of faith", "locate creature", "create spirit train stop", "tamh gon's fiery festival feast"],
	features: {
		"subclassfeature3": {
			name: "Illuminating Aura",
			source: ["OTT", 0],
			minlevel: 3,
			description: desc([
				"BA: activate lantern; Bright Light 20 ft + Dim Light 20 ft for 1 min; Short/LR recharge",
				"  (or until released/ended, no action)",
				"While active:",
				"  Reaction when creature in Bright Light makes a save: grant +Cha mod (min +1)",
				"  When enemy in Dim Light fails a save: takes Radiant = half Warlock level (round up)"
			]),
			action: [["bonus action", "Illuminating Aura: Activate Lantern"], ["reaction", "Illuminating Aura: Grant Save Bonus"]],
			usages: 1,
			recovery: "short rest"
		},
		"subclassfeature3.1": {
			name: "Revealing Light",
			source: ["OTT", 0],
			minlevel: 3,
			description: desc([
				"Magic action: lantern sheds maroon Bright Light 10 ft + Dim Light 10 ft for 1 hr",
				"Invisible creatures/objects visible while in the Bright Light; end as BA"
			]),
			action: [["action", "Revealing Light: Activate"], ["bonus action", "Revealing Light: End Early"]],
			usages: 1,
			recovery: "short rest"
		},
		"subclassfeature6": {
			name: "Dangerous Tool",
			source: ["OTT", 0],
			minlevel: 6,
			description: desc([
				"Illuminating Aura no longer ends if I let go of the lantern",
				"While not holding lantern, Magic action: control it for 1 min as Spiritual Weapon",
				"  (no Concentration); lantern still serves as Spellcasting Focus",
				"Long Rest recharge (or expend a Pact Magic slot)"
			]),
			additional: levels.map(function (n) {
				return n < 10 ? "as Spiritual Weapon (Lv2)" : n < 14 ? "as Spiritual Weapon (Lv3)" : "as Spiritual Weapon (Lv4)";
			}),
			action: [["action", "Dangerous Tool: Animate Lantern (Spiritual Weapon)"]],
			usages: 1,
			recovery: "long rest"
		},
		"subclassfeature6.1": {
			name: "Oracle Illumination",
			source: ["OTT", 0],
			minlevel: 6,
			description: desc([
				"Magic action: connect mind to a visible or familiar light source",
				"Functions as a Clairvoyance sensor for 10 minutes or until used again",
				"Can't reuse the same light source until a Long Rest"
			]),
			action: [["action", "Oracle Illumination (Clairvoyance via light source)"]]
		},
		"subclassfeature10": {
			name: "Brilliant Illumination",
			source: ["OTT", 0],
			minlevel: 10,
			description: desc([
				"While Illuminating Aura is active, Magic action: cause lantern to flash",
				"Each creature illuminated by Bright or Dim Light makes Con save vs spell DC",
				"Fail: 2d8+Warlock level Radiant + Blinded until end of my next turn; success: half",
				"Short/Long Rest recharge"
			]),
			action: [["action", "Brilliant Illumination: Flash Lantern"]],
			usages: 1,
			recovery: "short rest"
		},
		"subclassfeature14": {
			name: "Brighter Still",
			source: ["OTT", 0],
			minlevel: 14,
			description: desc([
				"I can activate Illuminating Aura at will (no longer Short/Long Rest limited)",
				"Dangerous Tool and Brilliant Illumination still have their own recharge limits",
				"While holding lantern, Magic action: pale blue light reveals a glowing arcane path",
				"  Functions as Find the Path to a familiar location; Long Rest recharge"
			]),
			action: [["action", "Brighter Still: Find the Path (pale blue light)"]],
			usages: 1,
			recovery: "long rest"
		}
	}
});

AddSubClass("wizard", "origami mage", {
	regExpSearch : /^(?=.*origami)(?=.*(mage|wizard|magus)).*$/i,
	subname : "Origami Mage",
	source : [["custom", 192]],
	features : {
		"subclassfeature3" : {
			name : "An Arcane Art",
			source : [["custom", 192]],
			minlevel : 3,
			description : desc([
				"As a Bonus Action, I can fold and imbue life into paper; it takes a form from Origami Constructs",
				"A crafted Origami Construct becomes bound to me or another creature I can see within 60 ft",
				"A creature can't have more than one of the same Construct bound to it at a time",
				"A bound Origami Construct occupies the same space as the creature it's bound to",
				"Constructs remain imbued for hours equal to half my Wizard level (round up)",
				"Constructs have AC equal to my spell save DC, Immunity to Poison and Psychic damage",
				"They are destroyed when they take any damage",
				"See notes for available Origami Constructs"
			]),
			action : [["bonus action", ""]],
			usages : "Intelligence modifier per ",
			usagescalc : "event.value = Math.max(1, What('Int Mod'));",
			recovery : "long rest",
			toNotesPage : [{
				name : "Origami Constructs",
				page3notes : true,
				note : [
					"ORIGAMI CONSTRUCTS",
					"",
					"BIRD: While bound, the creature gains proficiency in Perception",
					"  Additionally, the creature deals an extra 2 Slashing damage when it hits with a ranged attack",
					"",
					"CAT: While bound, the creature gains proficiency in Stealth",
					"  Once on each of the creature's turns when it hits with a melee attack or Unarmed Strike,",
					"  the origami cat can make a melee spell attack against the same target",
					"  The cat's attack modifier equals the bound creature's weapon attack modifier",
					"  On a hit, the target takes 1d6 Slashing damage (increases: 1d8 at 5, 1d10 at 11, 1d12 at 17)",
					"",
					"CRAB: While bound, the creature gains +1 bonus to AC and proficiency in Athletics",
					"  If the Wizard who crafted this origami crab creates another, this origami crab is destroyed",
					"",
					"DRAGON: While bound, the creature has Disadvantage on Dexterity (Stealth) checks",
					"  The bound creature can't benefit from the Invisible condition",
					"  The bound creature takes 1d4 Fire damage at the start of each of its turns",
					"  A creature can have multiple origami dragons bound to it at the same time",
					"  When destroyed, the origami dragon pops loudly, dealing 2d6 Fire damage to creatures within 5 ft",
					"",
					"FROG: While bound, the creature gains proficiency in Acrobatics",
					"  When the bound creature would fail a Dexterity saving throw, it can use its Reaction",
					"  It adds a bonus to the roll equal to the crafting Wizard's Intelligence modifier (min +1)",
					"  Using this effect destroys the origami frog"
				]
			}]
		},
		"subclassfeature3.1" : {
			name : "Origami Familiar",
			source : [["OTT", 0]],
			minlevel : 3,
			description : desc([
				"I always have Find Familiar prepared; my familiar appears as an origami version of itself",
				"It has Immunity to Poison and Psychic damage and the Poisoned condition",
				"It is a Construct instead of Celestial, Fey, or Fiend",
				"Camouflage: As a Magic action, familiar shifts to a flattened paper form indistinguishable from paper",
				"A creature can Study-check to discern it; Int (Investigation) vs. my spell save DC to confirm",
				"The familiar can take a Magic action to shift back to its origami form",
				"Last Resort: As a Magic action, the familiar dives at a creature and wraps around its face",
				"The target must make a Dexterity save vs. my spell save DC or be Blinded for 1 minute",
				"A creature within 5 ft can use an action to make a Strength (Athletics) check vs. my spell DC",
				"On success, the familiar is removed and the target is no longer Blinded; familiar is destroyed",
				"Reconnaissance: As a Magic action, I command the familiar to spy for 1 minute",
				"It records all sounds within 15 ft, then returns as an inert piece of paper with a transcript"
			]),
			action : [["magic action", " (Camouflage/Last Resort/Recon)"]],
			spellcastingBonus : [{
				name : "Find Familiar (always prepared)",
				spells : ["find familiar"],
				selection : ["find familiar"],
				firstCol : "markedbox"
			}]
		},
		"subclassfeature6" : {
			name : "Binding Release",
			source : [["OTT", 0]],
			minlevel : 6,
			description : "\n   As a Bonus Action, I can move one of my Origami Constructs to a creature I can see within 30 ft",
			action : [["bonus action", ""]]
		},
		"subclassfeature6.1" : {
			name : "Paper Path",
			source : [["OTT", 0]],
			minlevel : 6,
			description : "\n   When I cast a Touch spell, my Origami Familiar can deliver the touch; it no longer requires its Reaction"
		},
		"subclassfeature10" : {
			name : "Origami Servant",
			source : [["OTT", 0]],
			minlevel : 10,
			description : desc([
				"I always have Unseen Servant prepared; I can cast it without expending a spell slot",
				"Max servants at a time equals half my Wizard level (round up)",
				"The spell lasts hours equal to 1 + my Intelligence modifier (min 2 hours) instead of 1 hour",
				"My servant appears as a visible origami version of itself",
				"It has Immunity to Poison and Psychic damage, and the Poisoned condition",
				"It can move through spaces as narrow as 1 inch without expending extra movement",
				"When I Bonus Action to command a servant, I can issue a unique command to each servant",
				"The servant falls at 60 ft per round and takes no falling damage",
				"It can see Invisible creatures and objects as if they were visible",
				"As a Magic action within 200 ft, I can see through its eyes and hear what it hears until my next turn",
				"I can command it to perform tasks that would move it up to 200 ft away, instead of 60 ft"
			]),
			spellcastingBonus : [{
				name : "Unseen Servant (always prepared)",
				spells : ["unseen servant"],
				selection : ["unseen servant"],
				firstCol : "markedbox"
			}],
			extraLimitedFeatures : [{
				name : "Origami Servant (no spell slot)",
				usages : "half Wizard level per ",
				usagescalc : "event.value = Math.ceil(classes.known.wizard.level / 2);",
				recovery : "long rest"
			}]
		},
		"subclassfeature14" : {
			name : "Arcane Refresh",
			source : [["OTT", 0]],
			minlevel : 14,
			description : desc([
				"When one of my Origami Constructs is destroyed, I regain 10 HP or one expended spell slot of 2nd level or lower",
				"When a visible Origami Construct would take damage, I can use my Reaction to negate that damage",
				"I can't use this reaction again until I finish a Long Rest"
			]),
			action : [["reaction", " (negate Construct damage)"]],
			usages : 1,
			recovery : "long rest"
		}
	}
});
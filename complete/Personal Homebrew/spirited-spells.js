/*	-WHAT IS THIS?-
	This file adds optional material to "MPMB's Character Record Sheet" found at https://flapkan.com/mpmb/charsheets
	Import this file using the "Add Extra Materials" bookmark.
*/

/*	-INFORMATION-
	Subject:	Spells
	Effect:		Adds spells described in "Obojima: Tales from the Tall Grass" a homebrew campaign setting inspired by Studio Ghibli films. The spells are:
	Code by:	Rocky
	Date:		2026-06-10 (sheet v13)
*/

var iFileName = "Spirited Spells.js";
RequiredSheetVersion(13);

SourceList["SS"] = {
	name: "Spirited Spells (Homebrew)",
	abbreviation: "SS",
	group: "Homebrew",
	date: "2026-06-10"
};

SpellsList["plummet"] = {
		name : "Plummet",
		classes : ["druid", "sorcerer", "warlock", "wizard"],
		source : ["SS", 0],
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
		source : ["SS", 0],
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
		source : ["SS", 0],
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
		source : ["SS", 0],
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
		source : ["SS", 0],
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
		source : ["SS", 0],
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
		source : ["SS", 0],
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
		source : ["SS", 0],
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
		source : ["SS", 0],
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
		source : ["SS", 0],
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
		source : ["SS", 0],
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
		source : ["SS", 0],
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
		source : ["SS", 0],
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
		source : ["SS", 0],
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
		source : ["SS", 0],
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
		source : ["SS", 0],
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
		source : ["SS", 0],
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
		source : ["SS", 0],
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
		source : ["SS", 0],
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
		source : ["SS", 0],
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
		source : ["SS", 0],
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
		source : ["SS", 0],
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
		source : ["SS", 0],
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
		source : ["SS", 0],
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
		source : ["SS", 0],
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
		source : ["SS", 0],
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
		source : ["SS", 0],
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
		source : ["SS", 0],
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
		source : ["SS", 0],
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
		source : ["SS", 0],
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
		source : ["SS", 0],
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
		source : ["SS", 0],
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
		source : ["SS", 0],
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
		source : ["SS", 0],
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
		source : ["SS", 0],
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
		source : ["SS", 0],
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
		source : ["SS", 0],
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
		source : ["SS", 0],
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
		source : ["SS", 0],
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
		source : ["SS", 0],
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
		source : ["SS", 0],
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
		source : ["SS", 0],
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
		source : ["SS", 0],
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
		source : ["SS", 0],
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
		source : ["SS", 0],
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
		source : ["SS", 0],
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
		source : ["SS", 0],
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
		source : ["SS", 0],
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
		source : ["SS", 0],
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
		source : ["SS", 0],
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
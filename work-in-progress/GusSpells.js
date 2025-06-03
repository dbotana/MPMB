/*	-WHAT IS THIS?-
	This file adds optional material to "MPMB's Character Record Sheet" found at https://flapkan.com/mpmb/charsheets
	Import this file using the "Add Extra Materials" bookmark.
	-KEEP IN MIND-
	It is recommended to enter the code in a fresh sheet before adding any other information (i.e. before making your character with it).
*/

/*	-INFORMATION-
	Subject:	Spells
	Effect:		Note: Faerie tbd. This script adds spells from Old Gus's spell list https://drive.google.com/drive/folders/1Qv-U43kH066mbaeu9dLNeqmDpsdQW6CW?usp=drive_link
	Code by:	Rocky
	Date:		2024-10-15 (sheet v13)
*/
var iFileName = "Gus Spells.js";

RequiredSheetVersion(13);

SourceList["Gus"] = {
    name : "Gus Spells",
    abbreviation : "Gus",
    abbreviationSpellsheet : "Gus",
    group : "Rocky's Homebrew",
    date : "2024/10/15"
};

SpellsList["acidic exudation"] = {
    name: "Acidic Exudation",
    classes: ["Artificer", "Sorcerer", "Wizard"],
    level: 2,
    school: "Transmutation",
    time: "1 action",
    range: "Self",
    components: "V, S, M",
    compMaterial: "a pinch of saltpeter",
    duration: "Concentration, up to 1 minute",
    description: "Your palm secretes a volatile gel used as a weapon.",
    descriptionFull: "Your palm secretes a volatile gel, which you can use as a weapon. For the duration, you can use a bonus action to throw a globule of the substance up to 30 feet. The globule explodes upon impact, creating a shower of hissing acid in a 5-foot-radius sphere. Creatures in the area must make a Dexterity saving throw, taking 2d6 acid damage on a failed save, or half as much damage on a successful one.",
    atHigherLevels: "When you cast this spell using a spell slot of 3rd level or higher, the damage increases by 1d6 for each slot level above 2nd."
};

SpellsList["age plant"] = {
    name: "Age Plant",
    classes: ["Druid", "Faerie"],
    level: 4,
    school: "Transmutation",
    time: "1 minute",
    range: "60 feet",
    components: "V, S",
    duration: "Concentration, up to 1 minute",
    description: "Target plant ages forward or backward by ten years.",
    descriptionFull: "You target a Plant you can see within range. If the target is nonmagical and immobile, you increase or decrease its aging by up to ten years. The process can operate either forward or backward, causing flowers to blossom or wither. If the target is unwilling, it must succeed on a Wisdom saving throw or be charmed by you for the duration.",
    atHigherLevels:"When you cast this spell using a spell slot of 5th level or higher, aging effect increases significantly."
};

SpellsList["allergen cloud"] = {
    name: "Allergen Cloud",
    classes: ["Druid", "Faerie", "Ranger", "Wizard"],
    level: 1,
    school: "Conjuration",
    time: "1 action",
    range: "60 feet",
    components: "V, M",
    compMaterial:"a pinch of ragweed",
    duration: "Concentration, up to 1 minute",
    description:"Creates an irritating dust cloud causing creatures to be poisoned.",
    descriptionFull:"A cloud of irritating dust and pollen fills a 15-foot-radius cylinder centered on a point within range. Creatures entering or starting their turn in the area must succeed on a Constitution saving throw or be poisoned for 1 minute.",
};

SpellsList["alter fortune"] = {
    name: "Alter Fortune",
    classes: ["Bard", "Faerie", "Sorcerer", "Warlock"],
    level: 3,
    school: "Divination",
    time: "1 reaction",
    range: "30 feet",
    components: "S, M",
    compMaterial: "a set of weighted bone dice",
    duration: "Instantaneous",
    description: "Allows a creature to reroll an ability check, attack roll, or saving throw.",
    descriptionFull: "When a creature you can see within range makes an ability check, attack roll, or saving throw, you can attempt to alter the course of fate. An unwilling target makes a Wisdom save; on a failure (or if willing), they can immediately reroll the triggering roll, accepting the new result instead.",
};

SpellsList["amanuensis"] = {
    name: "Amanuensis",
    classes: ["Artificer", "Bard", "Cleric", "Wizard"],
    level: 2,
    school: "Transmutation (ritual)",
    time: "1 minute",
    range: "30 feet",
    components: "V, S, M",
    compMaterial: "fine ink worth at least 1 gp",
    duration: "Concentration, up to 1 hour",
    description: "Copies nonmagical text from one source to another.",
    descriptionFull: "You cause writing from one source to be copied onto parchment you provide. This spell copies 250 words per minute, creating a perfect transcription of the original. Alternatively, you can dictate verbally and have your dictation transcribed onto a page.",
};

SpellsList["anterograde amnesia"] = {
    name: "Anterograde Amnesia",
    classes: ["Bard", "Faerie", "Sorcerer", "Warlock", "Wizard"],
    level: 6,
    school: "Enchantment",
    time: "1 action",
    range: "60 feet",
    components: "V, S",
    duration: "Concentration, up to 1 minute",
    description: "Suppresses short-term memory formation in a creature.",
    descriptionFull: "You attempt to suppress the short-term memory of a creature within range. On a failed Wisdom saving throw, they become unable to form new memories for the duration. Each turn they forget events since their last turn's start.",
};

SpellsList["antipathetic field"] = {
    name: "Antipathetic Field",
    classes: ["Bard", "Faerie", "Warlock"],
    level: 3,
    school: "Enchantment",
    time: "1 action",
    range: "60 feet",
    components: "S",
    duration: "Concentration, up to 1 minute",
    description: "Creates a field of enmity between you and a target.",
    descriptionFull: "You invade the mind of a creature with rage and anger toward you. On a failed Wisdom save, they take psychic damage and create a field of mutual enmity. Both you and the target have disadvantage on attacks against others and cannot move apart willingly.",
};

SpellsList["arcane razor"] = {
    name: "Arcane Razor",
    classes: ["Artificer", "Faerie", "Ranger", "Sorcerer", "Wizard"],
    level: 3,
    school: "Evocation",
    time: "1 action",
    range: "Self (15-foot radius)",
    components: "V, S, M",
    compMaterial:"a melee weapon made of metal worth at least 10 gp that deals slashing damage",
    duration: "Instantaneous",
    description:"Unleashes a wave of razor-thin magic in all directions.",
    descriptionFull:"You infuse your weapon with arcane energy and whirl it in a circle. Make a melee weapon attack roll; all creatures within 15 feet whose AC is less than your attack roll suffer normal damage plus an additional 4d10 slashing damage.",
};

SpellsList["arcane strike"] = {
    name: "Arcane Strike",
    classes: ["Artificer", "Faerie", "Ranger", "Sorcerer", "Wizard"],
    level: 1,
    school: "Evocation",
    time: "1 action",
    range: "10 feet",
    components: "V, S, M",
    compMaterial: "a melee weapon made of metal worth at least 10 gp",
    duration: "Instantaneous",
    description: "Lunge at a creature with arcane force; choose additional effects.",
    descriptionFull: "You lunge at a creature, striking them with arcane force. As part of the action used to cast this spell, you must make a melee attack with a weapon against one creature within the spell's range, otherwise the spell fails. On a hit, the target suffers the attack's normal effects, and up to two of the following effects of your choice: The target takes an additional 1d8 force damage; You force a Large or smaller target to make a Strength saving throw. If they fail, they are pushed 10 feet away from you; The target can't take reactions until the start of its next turn.",
    atHigherLevels: "When you cast this spell using a spell slot of 2nd level or higher, the additional force damage increases by 1d8 and the distance the creature is pushed increases by 5 feet for each slot level above 1st."
};

SpellsList["avalanche"] = {
    name: "Avalanche",
    classes: ["Druid", "Sorcerer", "Wizard"],
    level: 7,
    school: "Evocation",
    time: "1 action",
    range: "300 feet",
    components: "V, S, M",
    compMaterial: "a quartz crystal",
    duration: "Instantaneous",
    description: "Torrent of ice, rock, and snow falls in a 30-foot-radius.",
    descriptionFull: "Choose a point you can see on the ground within range. A torrent of ice, rock and snow fall in a 30-foot-radius, 40-foot-high cylinder centered on that point. Each creature in that area must make a Dexterity saving throw. On a failure, a creature takes 4d10 cold and 4d10 bludgeoning damage on a failed save and is knocked prone. Creatures that fail their saving throw by 5 or more are restrained by the rubble. A creature can use an action to pull itself or another buried creature free by making a Strength check with a DC equal to your spell save DC.",
    atHigherLevels: "When you cast this spell using a spell slot of 8th level or higher, the damage increases by 1d10 for each of its effects."
};

SpellsList["avyie's temporal trickery"] = {
    name: "Avyie's Temporal Trickery",
    classes: ["Artificer", "Bard", "Faerie", "Wizard"],
    level: 3,
    school: "Transmutation",
    time: "1 action",
    range: "Self",
    components: "V, S, M",
    compMaterial: "a broken clock",
    duration: "Concentration, up to 1 minute",
    description: "Dislodge yourself from temporality; control time flow.",
    descriptionFull: "You dislodge yourself from your current temporality, granting you control over time flow. For the duration, you can use your bonus action to stop time until the end of your turn. While time is stopped, you are undetectable and other creatures cannot react to your actions. At the end of your turn, time resumes and everything you did during your turn happens simultaneously.",
};

SpellsList["awaken object"] = {
    name: "Awaken Object",
    classes: ["Artificer", "Faerie", "Wizard"],
    level: 5,
    school: "Transmutation",
    time: "8 hours",
    range: "Touch",
    components: "V, S, M",
    compMaterial:"platinum shavings worth at least 1,000 gp (consumed)",
    duration: "Instantaneous",
    description:"Touch an object to awaken it as a living construct.",
    descriptionFull:"You touch a Huge or smaller object, which becomes a living construct. The DM rolls a d4 in secret to determine traits like intelligence and personality. The awakened object can articulate its parts and gains abilities based on the roll result.",
};

SpellsList["babau slime"] = {
    name: "Babau Slime",
    classes: ["Artificer", "Warlock"],
    level: 3,
    school: "Transmutation",
    time: "1 action",
    range: "Self",
    components: "V, S, M",
    compMaterial:"a vial of babau blood worth at least 100 gp",
    duration:"1 hour",
    description:"Coat yourself in acidic slime; damages attackers.",
    descriptionFull:"Your flesh weeps hot red tears that coat your body in slime. For the duration, creatures touching or hitting you take acid damage. Grappled creatures or those swallowing you take additional damage.",
};

SpellsList["blade of resonance"] = {
    name: "Blade of Resonance",
    classes: ["Artificer", "Bard", "Faerie", "Sorcerer", "Wizard"],
    level: 2,
    school: "Evocation",
    time: "1 action",
    range: "30 feet",
    components: "S, M",
    compMaterial: "a melee weapon made of metal worth at least 10 gp",
    duration: "Instantaneous",
    description: "Clang your weapon, releasing a thundering shockwave.",
    descriptionFull: "You clang your weapon on a nearby surface, causing it to vibrate, and swing it with blinding speed, releasing a thundering shockwave in its wake. As part of the action used to cast this spell, you must make a melee attack with a weapon, otherwise the spell fails. All creatures in a line 30 feet long and 5 feet wide whose AC is less than your attack roll suffer the attack's normal damage and take an additional 3d6 thunder damage. Additionally, the spell emits a thunderous boom audible out to 300 feet.",
    atHigherLevels: "When you cast this spell using a spell slot of 3rd level or higher, the damage increases by 1d6 for each slot level above 2nd."
};

SpellsList["blinding glitter"] = {
    name: "Blinding Glitter",
    classes: ["Artificer", "Bard", "Faerie", "Sorcerer"],
    level: 4,
    school: "Evocation",
    time: "1 action",
    range: "Self (20-foot radius)",
    components: "S, M",
    compMaterial: "faerie dust",
    duration: "Instantaneous",
    description: "Explodes in glittering dust; blinds creatures.",
    descriptionFull: "A blinding flash of glittering dust explodes 20 feet from you, coating everything in range except you in glowing glittering dust, which glows dimly for 1 minute. Creatures coated in glittering dust have disadvantage on Dexterity (Stealth) checks and cannot benefit from being invisible. Creatures in range that can see you make a Constitution saving throw. If they fail, they are blinded, making a new saving throw at the end of each of their turns to end their blindness. A creature coated in glitter can use its action to remove the glitter from its body."
};

SpellsList["body swap"] = {
    name: "Body Swap",
    classes: ["Faerie", "Warlock"],
    level: 7,
    school: "Enchantment (ritual)",
    time: "10 minutes",
    range: "60 feet",
    components: "V, S, M",
    compMaterial: "a lock of hair or drop of blood from each target, and crushed diamond dust worth at least 1,000 gp (consumed)",
    duration: "Concentration, 8 hours",
    description: "Swap essences between two creatures.",
    descriptionFull: "You target two living creatures in range that you can see who are not in combat. Both targets must share the same creature type. An unwilling target makes a Charisma saving throw. If a creature succeeds their saving throw, the spell is lost. If they fail, their essences are swapped. Each body retains its racial modifiers and abilities, its Strength, Constitution and Dexterity scores. Memories and enchantments upon or within them are transferred to their new body.",
    atHigherLevels:"If you cast this spell using a spell slot of 8th level, the duration is 24 hours. At 9th level, the targets do not need to share a creature type and the spell lasts until dispelled."
};

SpellsList["branch to branch"] = {
    name: "Branch to Branch",
    classes: ["Ranger"],
    level: 1,
    school: "Transmutation",
    time: "1 action",
    range: "Self",
    components: "V, S",
    duration: "Concentration, up to 10 minutes",
    description:"Gain climbing speed; swing from branches.",
    descriptionFull:"You pound your chest in primal exuberance. For the duration, you gain a climbing speed equal to your movement speed. You gain a bonus to Dexterity (Acrobatics) checks equal to your spellcasting ability modifier. You can brachiate (swing from branches and vines) at your movement speed without needing to make an ability check.",
};

SpellsList["budding romance"] = {
    name: "Budding Romance",
    classes: ["Bard", "Faerie", "Warlock"],
    level: 6,
    school: "Enchantment",
    time: "1 minute",
    range: "60 feet",
    components: "S, M",
    compMaterial:"a lock of hair or drop of blood from the target(s), which the spell consumes",
    duration:"Concentration, up to 1 hour",
    description:"Forge bond of love between two creatures.",
    descriptionFull:"You forge a bond of love between up to two creatures. Designate up to two living creatures of the same type that you can see within range who are not in combat. Each target makes a Wisdom saving throw. If they fail their saving throw, they are consumed by feelings of love for the other target of the spell.",
};

SpellsList["celerity"] = {
    name: "Celerity",
    classes: ["Artificer", "Bard", "Faerie", "Sorcerer", "Wizard"],
    level: 2,
    school: "Transmutation",
    time: "1 action",
    range: "Self",
    components: "V, S",
    duration: "Concentration, up to 1 minute",
    description: "Enhance speed and perform additional actions.",
    descriptionFull: "Pieces of your body move at a rapid rate. For the duration, your movement speed doubles, and you can use your bonus action to perform one of the following: Extricate (Disengage action with AC and Dexterity save bonus), Swift Hands (multiple object interactions or checks), or Quickened Senses (multiple ability checks). At the end of your turn, roll a d20 and add your spellcasting ability modifier. On a roll of 11 or higher, maintain celerity; otherwise, the spell ends."
};

SpellsList["cheetah sprint"] = {
    name: "Cheetah Sprint",
    classes: ["Druid", "Faerie", "Ranger"],
    level: 1,
    school: "Transmutation",
    time: "1 bonus action",
    range: "Self",
    components: "V, S",
    duration: "Instantaneous",
    description: "Double speed and jump distance; extra damage on hit.",
    descriptionFull: "Until the end of your turn, your base walking speed and long jump distance double. The first melee attack deals an additional 1d6 damage. At the end of your turn, your legs ache, halving your movement speed until the end of your next turn."
};

SpellsList["choking hands"] = {
    name: "Choking Hands",
    classes: ["Sorcerer", "Warlock", "Wizard"],
    level: 2,
    school: "Necromancy",
    time: "1 action",
    range: "60 feet",
    components: "S, M",
    compMaterial:"a silk handkerchief, tied in a knot",
    duration: "Concentration, up to 1 minute",
    description:"Spectral hands choke a creature; damage and grapple.",
    descriptionFull:"Create spectral hands around a creature's throat. On a failed Constitution save, the target takes necrotic damage and is grappled. The hands move with the target. Use an action to tighten or move the hands to another target. Ends if saving throw succeeds."
};

SpellsList["cloudburst"] = {
    name: "Cloudburst",
    classes: ["Druid", "Wizard"],
    level: 2,
    school: "Evocation (ritual)",
    time: "1 action",
    range: "500 feet",
    components: "V, S, M",
    compMaterial:"a finely crushed quartz crystal",
    duration:"Concentration, up to 10 minutes",
    description:"Summon rain; obscure area and extinguish flames.",
    descriptionFull:"Cause clouds to gather and rain in a 150-foot-radius. Lightly obscures area and extinguishes unprotected flames. Creates difficult terrain. Water evaporates after 1 minute post-spell."
};

SpellsList["conduit"] = {
    name: "Conduit",
    classes: ["Artificer", "Faerie", "Cleric", "Wizard"],
    level: 5,
    school: "Enchantment",
    time: "1 hour",
    range: "Touch",
    components:"V, S, M",
    compMaterial:"metallic ink worth at least 100 gp per spell slot level instilled (consumed)",
    duration:"1 hour",
    description:"Instill spells into ammunition; release on impact.",
    descriptionFull:"Touch up to five pieces of nonmagical ammunition and instill them with spells you know or have prepared. Ammunition becomes magical for overcoming resistance. Instilled spell releases on impact. Concentration required for concentration spells."
};

SpellsList["confess"] = {
    name: "Confess",
    classes: ["Cleric", "Paladin", "Warlock"],
    level: 2,
    school: "Enchantment",
    time: "1 action",
    range: "10 feet",
    components: "V, S",
    duration: "1 round",
    description: "Force a creature to answer truthfully or suffer consequences.",
    descriptionFull: "You attempt to force a creature to answer truthfully. When you cast the spell, you ask a target creature that you can see and that can hear you a single question no more than ten words in length. If the target does not understand the question or the language you spoke, the spell fails. At the start of the creature's next turn, the target makes a Charisma saving throw. On a failure, the target must answer truthfully or suffer the effects of the spell. The target can still be evasive in its answers as long as it remains within the boundaries of the truth, but must answer directly if they fail their saving throw by 5 or more. If the target fails to answer the question in the same language the question was asked, it takes 1d8 psychic damage and becomes poisoned until the end its turn.",
    atHigherLevels: "When you cast this spell using a spell slot of 3rd level or higher, the damage for a failed save increases by 1d8 for each slot level above 2nd."
};

SpellsList["conjure shield"] = {
    name: "Conjure Shield",
    classes: ["Sorcerer", "Wizard"],
    level: 1,
    school: "Conjuration",
    time: "1 bonus action",
    range: "Self",
    components: "S",
    duration: "Concentration, up to 1 hour",
    description: "Conjure a weightless shield for AC and Dexterity saving throw bonuses.",
    descriptionFull: "You clench a fist and conjure a weightless shield made of shimmering force that adheres to your arm. You are proficient with the shield, and for the duration, you have a +2 bonus to AC and Dexterity saving throws. If you unclench your fist or use your hand for any other purpose, the spell ends.",
    atHigherLevels: "If you cast this spell using a spell slot of 3rd level, the bonus increases to +3. Using a spell slot of 5th level or higher grants a duration that doesn't require concentration."
};

SpellsList["corak's metal form"] = {
    name: "Corak's Metal Form",
    classes: ["Sorcerer", "Wizard"],
    level: 7,
    school: "Transmutation",
    time: "1 action",
    range: "Touch",
    components: "V, S, M",
    compMaterial:"a platinum figurine worth at least 500 gp",
    duration:"Concentration, up to 10 minutes",
    description:"Coat target in metallic form; enhance defenses and resistances.",
    descriptionFull:"You touch a willing creature. Until the spell ends, their skin, clothing and equipment is covered in a lustrous metallic coating. The target's AC can't be less than 20, they are immune to acid, fire, lightning, and poison damage, and have resistance to nonmagical bludgeoning, piercing, and slashing damage.",
};

SpellsList["corrosive touch"] = {
    name: "Corrosive Touch",
    classes: ["Artificer", "Warlock", "Sorcerer", "Wizard"],
    level: 2,
    school: "Transmutation",
    time: "1 action",
    range: "Touch",
    components: "S, M",
    compMaterial:"a vial of lye",
    duration:"Concentration, up to 1 minute",
    description:"Hands become corrosive; destroy metal objects.",
    descriptionFull:"For the duration, your hands become corrosive to ferrous metal. If a nonmagical metal object isn't being worn or carried, you can use your action to touch it, destroying a one-inch cube of it. If targeting metal equipment being worn or carried by a creature, make an attack roll or saving throw as appropriate; equipment suffers penalties until destroyed.",
};

SpellsList["create campsite"] = {
    name: "Create Campsite",
    classes: ["Bard", "Druid", "Faerie"],
    level: 3,
    school: "Conjuration (ritual)",
    time: "10 minutes",
    range: "Special",
    components:"V, S",
    duration:"24 hours",
    description:"Summon Fey servants to create a campsite for travelers.",
    descriptionFull:"You summon tiny Fey servants who create a campsite for up to ten travelers. The fey clear debris, set up tents or bedrolls if available (or prepare soft earth), start a campfire, fetch water, and prepare a bland meal. The campsite blends with terrain; Beasts have disadvantage on checks to notice it.",
};

SpellsList["dazzling strobe"] = {
    name: "Dazzling Strobe",
    classes: ["Bard", "Cleric", "Faerie", "Paladin", "Sorcerer"],
    level: 3,
    school: "Evocation",
    time: "1 action",
    range: "20 feet",
    components: "S, M",
    compMaterial: "faerie dust",
    duration: "Instantaneous",
    description: "Emit a flickering light; incapacitate creatures.",
    descriptionFull: "You emit a flickering light with wild intensity. Each creature within 20 feet that can see you makes a Constitution saving throw. If they fail, they are incapacitated until the end of their next turn, and any concentration effects they are maintaining are interrupted."
};

SpellsList["deadly lahar"] = {
    name: "Deadly Lahar",
    classes: ["Druid", "Sorcerer", "Wizard"],
    level: 8,
    school: "Evocation",
    time: "1 action",
    range: "Self (60-foot cone)",
    components: "V, S",
    duration: "Instantaneous",
    description: "Erupt a torrent of molten slurry; damage and restrain.",
    descriptionFull: "You cause a rushing torrent of liquid rock to burst from the ground, burying your enemies in an eruption of molten slurry. Each creature in a 60-foot cone must make a Dexterity saving throw. A creature takes 5d6 bludgeoning damage and 5d6 fire damage on a failure, or half as much on a success. For the next minute, the area is difficult terrain, and creatures entering or starting their turn there take fire damage equal to your spellcasting ability modifier. Creatures that failed their saving throw are restrained by rubble and magma."
};

SpellsList["defenestration sphere"] = {
    name: "Defenestration Sphere",
    classes: ["Druid", "Sorcerer", "Wizard"],
    level: 4,
    school: "Evocation",
    time: "1 action",
    range: "120 feet",
    components: "V, S",
    duration: "Concentration, up to 1 minute",
    description: "Create swirling air; damage and knock prone.",
    descriptionFull: "You create a 15-foot-radius sphere of violently swirling air centered on a point within range. The spell's area is difficult terrain. When a creature enters the spell's area for the first time on a turn or starts its turn there, it must succeed on a Dexterity saving throw or take 3d8 bludgeoning damage. On each of your turns after you cast this spell, you can use an action to move the sphere up to 60 feet in any direction."
};

SpellsList["delay agony"] = {
    name: "Delay Agony",
    classes: ["Artificer", "Bard", "Cleric", "Paladin", "Wizard"],
    level: 4,
    school: "Abjuration",
    time: "1 reaction",
    range: "30 feet",
    components: "V, S, M",
    compMaterial:"a puff of cotton or a few down feathers",
    duration:"Concentration, up to 1 hour",
    description:"Warp reality to delay incoming damage.",
    descriptionFull:"React to incoming damage and warp reality around a creature you can see within range. Roll 8d8 and subtract the total from the triggering spell or attack's damage. Record the amount of prevented damage. Any remaining damage is passed onto the target as normal."
};

SpellsList["dimensional anchor"] = {
    name: "Dimensional Anchor",
    classes: ["Cleric", "Wizard"],
    level: 4,
    school: "Abjuration",
    time: "1 reaction",
    range: "60 feet",
    components:"V, S",
    duration:"Concentration, up to 1 minute",
    description:"Prevent extradimensional travel; deal force damage.",
    descriptionFull:"Grasp at a teleporting creature's essence to anchor it. The target makes a Charisma saving throw. On failure, they are wreathed in an emerald field preventing extradimensional travel. If they attempt such travel, they take force damage."
};

SpellsList["dimensional rift"] = {
    name: "Dimensional Rift",
    classes: ["Artificer", "Sorcerer", "Wizard"],
    level: 2,
    school: "Conjuration",
    time: "1 bonus action",
    range: "30 feet",
    components: "V, S",
    duration: "1 round",
    description: "Create a temporary rift to a point you can see or specify.",
    descriptionFull: "You create an invisible and immobile rift which is 5 feet in diameter. The rift bridges the distance between that space and any point within 30 feet of it that you can see or specify by distance and direction (such as '30 feet straight up'). While next to the rift, you are considered to be next to the destination as well, and anything you put through it (including any portion of your body) emerges at the destination. No sound passes through the rift, and only you can see it or move through it. It lasts until the end of your next turn.",
    atHigherLevels: "When you cast this spell using a spell slot of 3rd level or higher, the distance you can place the rift away from yourself increases by an additional 30 feet for each slot level above 2nd."
};

SpellsList["dirge of the exorcist"] = {
    name: "Dirge of the Exorcist",
    classes: ["Bard", "Cleric", "Paladin", "Wizard"],
    level: 3,
    school: "Abjuration (ritual)",
    time: "1 action",
    range: "60 feet",
    components: "V, S, M",
    compMaterial: "an engraved silver bell worth at least 50 gp",
    duration: "Concentration, up to 1 minute",
    description: "Create a painful ringing against chosen creature types.",
    descriptionFull: "You cry out ancient words that create a painful ringing in the ears of your enemies. Choose a creature type: Celestials, Elementals, Fey, Fiends, or Undead. Creatures of the selected type within 60 feet of you that can hear you must make a Constitution saving throw, taking 3d6 thunder damage on a failure, or half as much on a success. A creature that fails their saving throw by 5 or more is incapacitated until the end of their next turn.",
    atHigherLevels: "When you cast this spell using a spell slot of 5th level or higher, the damage increases by 1d6 for each slot level above 4th."
};

SpellsList["discordant thrum"] = {
    name: "Discordant Thrum",
    classes: ["Bard", "Faerie"],
    level: 2,
    school: "Enchantment",
    time: "1 action",
    range: "Self (15-foot cone)",
    components: "V, S, M",
    compMaterial:"faerie dust",
    duration:"Instantaneous",
    description:"Emit an uncomfortable cacophony; disrupt communication.",
    descriptionFull:"You emit an uncomfortable cacophony. Each creature in a 15-foot cone that can hear you makes an Intelligence saving throw. If they fail, they cannot communicate and have disadvantage on attack rolls until the end of their next turn. Creatures with an Intelligence score of 6 or lower are immune."
};

SpellsList["disguise undead"] = {
    name: "Disguise Undead",
    classes: ["Cleric", "Wizard"],
    level: 2,
    school: "Illusion",
    time: "1 minute",
    range: "Touch",
    components:"V, S, M",
    compMaterial:"a moth's cocoon",
    duration:"1 hour",
    description:"Make an undead appear different; mask decay scent.",
    descriptionFull:"You make one undead—including its clothing, armor, weapons, and equipment—look different until the spell ends or until you use your action to dismiss it. The spell also masks the scent of any decaying flesh that might emanate from the target creature. You can make the target seem 1 foot shorter or taller and it can appear thin, fat, or in between. You can't change its body type, so you must cause it to adopt a form that has the same basic arrangement of limbs.",
};

SpellsList["diterlizzi's dymaxion"] = {
    name: "DiTerlizzi's Dymaxion",
    classes: ["Artificer", "Faerie"],
    level: 2,
    school: "Divination",
    time: "1 bonus action",
    range: "Self",
    components:"V, S, M",
    compMaterial:"specialized copper-engraved tools worth at least 250 gp",
    duration:"Concentration, up to 1 minute",
    description:"Amplify magical resource management; recover spell slots.",
    descriptionFull:"You amplify your ability to efficiently manage your magical resources. For the duration, whenever you cast a 1st-level spell, roll a d20. On an 11 or higher, you immediately recover the expended spell slot. Additionally, whenever you expend a spell slot of 2nd or 3rd level, you can expend a spell slot one level lower instead."
};

SpellsList["dodge-weave"] = {
    name: "Dodge-Weave",
    classes: ["Bard", "Faerie", "Sorcerer", "Warlock", "Wizard"],
    level: 3,
    school: "Conjuration",
    time: "1 reaction",
    range: "Self",
    components: "S, M",
    compMaterial: "a weapon",
    duration: "Instantaneous",
    description: "Briefly vanish, gain AC bonus, and teleport near attacker.",
    descriptionFull: "You briefly vanish, gaining a +5 bonus to AC against the triggering attack. If your attacker is within 30 feet of you, you can teleport to an unoccupied space within 5 feet of them. On your next turn, you gain advantage on your first attack roll against the attacker.",
    atHigherLevels: "When you cast this spell using a spell slot of 4th level or higher, the distance you can teleport toward the attacker increases by an additional 10 feet for each slot level above 3rd."
};

SpellsList["double jeopardy"] = {
    name: "Double Jeopardy",
    classes: ["Artificer", "Wizard"],
    level: 4,
    school: "Divination",
    time: "1 bonus action",
    range: "Self",
    components: "V, S, M",
    compMaterial: "an arcane focus worth at least 1000 gp",
    duration: "Concentration, up to 1 minute",
    description: "Mirror spells; cast same spell twice with reaction.",
    descriptionFull: "You create a torrent of magical energy around you which can mirror other magical energies. For the duration, whenever you cast a spell of 1st-level or higher with a casting time of 1 action that requires an attack roll or a saving throw and that targets only one creature or object, you can use your reaction and expend a spell slot to cast the same spell a second time. Neither expended spell slot can exceed 5th level. You can choose to do this after the first spell attack hits or misses, or after the target creature fails its saving throw against the spell."
};

SpellsList["doublespeak"] = {
    name: "Doublespeak",
    classes: ["Bard", "Faerie", "Wizard"],
    level: 2,
    school: "Illusion (ritual)",
    time: "1 action",
    range: "15 feet",
    components: "S, M",
    compMaterial: "a snake’s forked tongue",
    duration: "Concentration, up to 10 minutes",
    description: "Cloak conversation; disguise topics with mundane chatter.",
    descriptionFull: "You and up to five willing creatures of your choice within 15 feet of you have your words cloaked in secrecy, disguising your conversation. For the duration, whatever you speak of amongst one another sounds to the casual observer like mundane conversation about the weather, the taste of food, local politics, or other banal topics. The illusion also modifies your facial expressions and mouth movements to match the illusory words being spoken."
};

SpellsList["draw upon holy might"] = {
    name: "Draw Upon Holy Might",
    classes: ["Cleric", "Paladin"],
    level: 1,
    school: "Enchantment",
    time: "1 bonus action",
    range: "Self",
    components: "V, S",
    duration: "Concentration, up to 1 minute",
    description: "Bolster physical stature; reroll failed checks or saves.",
    descriptionFull: "You draw forth pure, holy power to bolster your physical stature. For the duration, when you fail a Strength, Dexterity, or Constitution ability check or saving throw, you can use your reaction to reroll the d20. You must use the new result. In addition, once before the spell ends, when you make a weapon attack, you can add your spellcasting ability modifier to the attack and damage rolls of that attack."
};

SpellsList["drumble dead"] = {
    name: "Drumble Dead",
    classes: ["Cleric", "Wizard"],
    level: 0,
    school: "Necromancy (cantrip)",
    time: "1 action",
    range: "30 feet",
    components: "V, S",
    duration: "Up to an hour",
    description:"Create minor necromantic effects on objects or corpses.",
    descriptionFull:"You disturb the veil between life and death, creating one of several magical effects within range. You can spoil food or drink, drop temperature in an area by 5 degrees Fahrenheit for 1 minute, make a corpse speak a message up to three words long for up to an hour, move a corpse up to 10 feet along the ground instantaneously, or have a corpse grapple a creature within range."
};

SpellsList["drunkard's breath"] = {
    name: "Drunkard's Breath",
    classes: ["Artificer", "Bard", "Faerie"],
    level: 1,
    school: "Conjuration",
    time: "1 action",
    range: "Self (15-foot cone)",
    components: "V, S",
    duration: "Instantaneous",
    description: "Emit a foul-smelling belch; poison and incapacitate creatures.",
    descriptionFull: "You let out a tremendous, foul-smelling belch in a 15-foot cone. Creatures in the area must make a Constitution saving throw. On a failed save, a creature becomes poisoned for 1 minute and spends its action on its next turn retching and reeling. Creatures that don’t need to breathe or are immune to poison automatically succeed on this saving throw. An affected creature repeats its saving throw at the end of each of its turns, ending the effect on a success."
};

SpellsList["drunken revelry"] = {
    name: "Drunken Revelry",
    classes: ["Bard", "Faerie"],
    level: 4,
    school: "Enchantment (ritual)",
    time: "1 action",
    range: "60 feet",
    components: "V, S, M",
    compMaterial: "a potable liquid held in a glass or flagon",
    duration: "Concentration, up to 10 minutes",
    description: "Sing an enchanting drinking song; charm humanoids into revelry.",
    descriptionFull: "You sing an enchanting drinking song that spurs those who can hear you into a drunken revelry. Humanoids of your choice within 60 feet of you that can see and hear you must succeed on a Wisdom saving throw or become charmed by you. A creature hostile to you or in combat with you or your companions makes any saving throws the spell demands with advantage. A creature that succeeds its Wisdom saving throw against the spell becomes immune to its effects for 24 hours."
};

SpellsList["duelist's ward"] = {
    name: "Duelist's Ward",
    classes: ["Sorcerer", "Warlock", "Wizard"],
    level: 3,
    school: "Abjuration",
    time: "1 action",
    range: "Self",
    components: "V, S",
    duration: "Concentration, up to 1 minute",
    description: "Gain defensive bonuses against attacks and saves.",
    descriptionFull: "Choose a creature you can see within 120 feet of you. For the duration, when the target hits you with an attack or forces you to make a saving throw (including to maintain your concentration on this spell), you can use your reaction to gain a 1d6 bonus to your AC against that attack or a 1d6 bonus to that saving throw. You can use this reaction a number of times equal to 1 + your spellcasting ability modifier (minimum of twice). When you expend the final use of the reaction, the spell ends."
};

SpellsList["dulling chains"] = {
    name: "Dulling Chains",
    classes: ["Artificer", "Cleric", "Faerie", "Warlock", "Wizard"],
    level: 0,
    school: "Conjuration (cantrip)",
    time: "1 action",
    range: "60 feet",
    components: "V, S",
    duration: "Instantaneous",
    description:"Summon magical restraints; damage and slow targets.",
    descriptionFull:"You summon a magical restraint to ensnare an enemy. The target makes a Strength saving throw. On a failure, it takes 1d4 force damage, and its speed is reduced by 15 feet until the start of your next turn."
};

SpellsList["duodimension"] = {
    name: "Duodimension",
    classes: ["Artificer", "Sorcerer", "Wizard"],
    level: 5,
    school: "Transmutation",
    time: "1 action",
    range: "Self",
    components:"S, M",
    compMaterial:"a strip of fine paper bound into a mobius strip and a flat ivory likeness of yourself worth at least 500 gp",
    duration:"Concentration, up to 1 hour",
    description:"Reduce yourself to two dimensions; gain defensive benefits.",
    descriptionFull:"You fold your height, width, or depth into the Astral Plane, reducing yourself to a two-dimensional form. For the duration, attacks against you are made at disadvantage, and you can Hide as a bonus action without any available cover."
};

SpellsList["dust dash"] = {
    name: "Dust Dash",
    classes: ["Artificer", "Faerie", "Sorcerer", "Wizard"],
    level: 1,
    school: "Evocation",
    time: "1 action",
    range: "5 feet",
    components: "S, M",
    compMaterial: "faerie dust",
    duration: "Instantaneous",
    description: "Dash faerie dust on a creature; cause unpredictable effects.",
    descriptionFull: "You dash faerie dust wantonly upon a living creature within 5 feet of you, causing unpredictable effects. Make a melee spell attack against the target if it is unwilling. On a hit, roll a d20 to determine the dust’s effects from a table of possibilities, including effects like glowing, sneezing, or becoming invisible.",
};

SpellsList["entropic field"] = {
    name: "Entropic Field",
    classes: ["Artificer", "Cleric", "Sorcerer", "Wizard"],
    level: 3,
    school: "Abjuration",
    time: "1 action",
    range: "60 feet",
    components: "V, S, M",
    compMaterial: "a hunk of pewter",
    duration: "Concentration, up to 1 minute",
    description: "Slow time in an area; affect movement and projectiles.",
    descriptionFull: "You slow the flow of time in a 15-foot-radius, 40-foot-high cylinder centered on a point within range. Creatures entering or starting their turn in the area must make a Strength saving throw or have their speed halved and suffer penalties to AC and reactions. Non-magical ranged attacks are made at disadvantage.",
};

SpellsList["euphoric cloud"] = {
    name: "Euphoric Cloud",
    classes: ["Artificer", "Bard", "Faerie", "Sorcerer", "Wizard"],
    level: 3,
    school: "Conjuration",
    time: "1 action",
    range: "120 feet",
    components: "V, S, M",
    compMaterial: "a few poppy seeds",
    duration: "Concentration, up to 10 minutes",
    description: "Create intoxicating vapor; charm and incapacitate creatures.",
    descriptionFull: "You create a 20-foot-radius sphere of intoxicating blue vapor centered on a point within range. Creatures entering or starting their turn in the area must succeed on a Wisdom saving throw or become charmed and incapacitated. The cloud is heavily obscured and disperses with strong wind or heat.",
};

SpellsList["exstasis"] = {
    name: "Exstasis",
    classes: ["Sorcerer", "Wizard"],
    level: 5,
    school: "Divination",
    time: "1 action",
    range: "1 mile",
    components: "S",
    duration: "Concentration, up to 1 minute",
    description:"Project duplicate self to distant location.",
    descriptionFull:"You project a duplicate self to an unoccupied point within range. Your selves share statistics and resources. You can act using any self's location and senses. Damage can be avoided by sacrificing a self. The spell ends when concentration is lost or duration expires.",
};

SpellsList["fallow"] = {
    name: "Fallow",
    classes: ["Druid", "Faerie"],
    level: 2,
    school: "Transmutation (ritual)",
    time: "1 minute",
    range: "Touch",
    components:"V, S",
    duration:"Up to 1000 years",
    description:"Deposit essence into plant or stone; enter fallow state.",
    descriptionFull:"You deposit your essence within a plant or stone large enough to contain your body. You can remain in this state for as long as your body can live. If disturbed, you are expelled and take double damage done to the host object. You can exit using an action.",
};

SpellsList["fenton's flickering fists"] = {
    name: "Fenton's Flickering Fists",
    classes: ["Artificer", "Bard", "Sorcerer", "Warlock", "Wizard"],
    level: 0,
    school: "Evocation",
    time: "1 action",
    range: "5 feet",
    components: "V, S",
    duration: "Instantaneous",
    description: "Strike a creature with vibrating hands; deal force damage.",
    descriptionFull: "Your hands blur, becoming able to strike a creature with devastating vibrations. Make a melee spell attack against the target. On a hit, the target takes 1d6 force damage and loses its reaction. The spell’s damage increases by 1d6 when you reach 5th level (2d6), 11th level (3d6), and 17th level (4d6)."
};

SpellsList["flourishing beanstalk"] = {
    name: "Flourishing Beanstalk",
    classes: ["Artificer", "Druid", "Faerie", "Wizard"],
    level: 2,
    school: "Transmutation (ritual)",
    time: "1 action",
    range: "Touch",
    components: "V, S, M",
    compMaterial: "a handful of beans",
    duration: "10 minutes",
    description: "Grow a massive beanstalk; climbable by chosen creatures.",
    descriptionFull: "You place the beans on the ground and cause them to sprout. At the start of your next turn, they suddenly shoot upward, growing a network of vines that twist around one another, forming a mighty stalk that reaches into the sky. You must be outdoors to cast this spell. The vines rapidly grow into a 5-foot-radius, 500-foot-high cylinder, which lasts for the duration. You and creatures of your choice can climb the stalk as if you had a climbing speed equal to your movement speed."
};

SpellsList["fool's speech"] = {
    name: "Fool's Speech",
    classes: ["Bard", "Faerie", "Sorcerer", "Wizard"],
    level: 4,
    school: "Illusion",
    time: "1 action",
    range: "Touch",
    components: "V, S, M",
    compMaterial: "a bone whistle",
    duration: "1 hour",
    description: "Speak in an incomprehensible secret language.",
    descriptionFull: "You and up to six willing creatures of your choice within range gain the ability to speak a secret language that is incomprehensible to others. The targets of the must be touching you or at least one other target of the spell when the spell is cast. For the duration, the targets can speak normally or in their secret tongue. They can speak and understand this mysterious language fluently."
};

SpellsList["fortify familiar"] = {
    name: "Fortify Familiar",
    classes: ["Wizard"],
    level: 3,
    school: "Conjuration",
    time: "10 minutes",
    range: "10 feet",
    components: "V, S, M",
    compMaterial:"charcoal, incense, and herbs worth at least 20 gp (consumed)",
    duration:"24 hours",
    description:"Empower a familiar with enhanced abilities.",
    descriptionFull:"You empower a familiar in your service, keeping its current form or altering it to new one. The fortified familiar gains benefits such as using your proficiency bonus, increased hit points, improved AC and damage rolls, and more. It shares your initiative count in combat and can take specific actions on its turn."
};

SpellsList["frigid wind"] = {
    name: "Frigid Wind",
    classes: ["Sorcerer", "Wizard"],
    level: 3,
    school: "Evocation",
    time: "1 action",
    range: "Self (60-foot line)",
    components:"V, S",
    duration:"Instantaneous",
    description:"Blast enemies with frigid wind; deal cold damage.",
    descriptionFull:"A line of strong, frigid wind 60 feet long and 10 feet wide blasts from you in a direction you choose. Each creature in the line must make a Constitution saving throw, taking 8d6 cold damage on a failed save or half as much on a successful one. The wind disperses gas or vapor and extinguishes flames."
};

SpellsList["frigidigitation"] = {
    name: "Frigidigitation",
    classes: ["Artificer", "Druid", "Faerie", "Sorcerer", "Wizard"],
    level: 0,
    school: "Transmutation",
    time: "1 action",
    range: "30 feet",
    components: "S",
    duration: "Instantaneous",
    description: "Create various icy effects.",
    descriptionFull: "You weave your frosty magics into a plethora of icy legerdemain. You create one of the following effects: snuff out a candle, torch, or small campfire; create an instantaneous, harmless effect such as a flurry of snowflakes or a shower of sleet; chill up to 1 cubic foot of nonliving material for 1 hour; make frost appear on an object or surface for 1 minute; freeze water within a 5-foot cube for 1 hour; or create a nonmagical trinket or illusory image of ice or snow that fits in your hand for 1 minute."
};

SpellsList["ghastlight"] = {
    name: "Ghastlight",
    classes: ["Cleric", "Wizard"],
    level: 2,
    school: "Abjuration (ritual)",
    time: "1 action",
    range: "Touch",
    components: "V, S, M",
    compMaterial: "defiled oil worth at least 5 gp (consumed)",
    duration: "1 hour",
    description: "Create a sickly green flame that aids undead.",
    descriptionFull: "You touch an object, which alights with a sickly green flame that gives off no heat, shedding bright light in a 15-foot-radius and dim light for an additional 15 feet. Undead creatures within 30 feet gain a bonus to saving throws against being frightened and effects that turn undead equal to your spellcasting ability modifier. The flame cannot be extinguished by water or wind but can be covered and hidden."
};

SpellsList["ghost armor"] = {
    name: "Ghost Armor",
    classes: ["Sorcerer", "Warlock", "Wizard"],
    level: 4,
    school: "Conjuration",
    time: "1 action",
    range: "Touch",
    components: "V, S, M",
    compMaterial:"a shard of battle-worn metal",
    duration:"1 hour",
    description:"Surround target with magical force armor.",
    descriptionFull:"You touch a willing creature and cause a haunting, magical force in the shape of a suit of armor to surround it. The target gains resistance to necrotic damage and its AC cannot be less than 13 plus your spellcasting ability modifier. A creature that touches the bearer or hits it with a melee attack takes necrotic damage equal to 1d4 plus your spellcasting ability modifier."
};

SpellsList["ghost trap"] = {
    name: "Ghost Trap",
    classes: ["Artificer", "Cleric", "Paladin", "Wizard"],
    level: 5,
    school: "Abjuration",
    time: "1 action",
    range: "60 feet",
    components:"V, S, M",
    compMaterial:"a scrap of tulle or lace",
    duration:"Concentration, up to 1 minute",
    description:"Trap ethereal creatures in your plane.",
    descriptionFull:"Supernatural ripples radiate from you in an aura with a 60-foot-radius. Ethereal creatures in the area are transported to your plane and cannot return to the Ethereal Plane until the spell ends or they leave the aura’s area."
};

SpellsList["ghostly disguise"] = {
    name: "Ghostly Disguise",
    classes: ["Artificer", "Wizard"],
    level: 2,
    school: "Illusion",
    time: "1 action",
    range: "Self",
    components:"V, S",
    duration:"Concentration, up to 1 hour",
    description:"Appear as a ghost.",
    descriptionFull:"You make yourself—including your clothing and belongings—appear as if you were a ghost until the spell ends. You appear to hover slightly above surfaces, and your form takes on a wispy appearance. The spell doesn’t confer any benefits of etherealness. To discern that your appearance is an illusion, a creature within 15 feet can use its action to inspect you and must succeed on a Wisdom (Perception) check against your spell save DC."
};

SpellsList["gift of the soothsayer"] = {
    name: "Gift of the Soothsayer",
    classes: ["Cleric", "Bard", "Druid", "Faerie", "Sorcerer", "Wizard"],
    level: 0,
    school: "Divination",
    time: "Special",
    range: "Special",
    components: "V, S, M",
    compMaterial: "a deck of cards, crystal ball, bones, runic stones, a haruspex, sacred oils, needles, ritual salts, tea leaves, or a pendulum",
    duration: "Special",
    description: "Gain insights through divination.",
    descriptionFull: "The spell can be cast in several ways. Choose one from the following three versions: Auspex (learn truths about surroundings), Psychometry (experience potent memory from an object), or Read Fortune (gain insights about a creature). Each version provides specific insights or visions."
};

SpellsList["glamoured majesty"] = {
    name: "Glamoured Majesty",
    classes: ["Cleric", "Faerie", "Paladin", "Warlock"],
    level: 2,
    school: "Illusion",
    time: "1 action",
    range: "30 feet",
    components: "V, S, M",
    compMaterial: "faerie dust",
    duration: "Instantaneous",
    description: "Create awe-inspiring appearance; charm creatures.",
    descriptionFull: "You create an awe-inspiring appearance that forces others to avert their gaze. Choose up to three creatures within 30 feet that can see you. They must succeed on a Charisma saving throw or become charmed by you. Charmed creatures have disadvantage on attack rolls against others within 30 feet of you."
};

SpellsList["glamourous craft"] = {
    name: "Glamourous Craft",
    classes: ["Artificer", "Bard", "Faerie", "Sorcerer", "Wizard"],
    level: 5,
    school: "Enchantment",
    time: "1 action",
    range: "Touch",
    components: "V, S, M",
    compMaterial: "faerie dust",
    duration: "Concentration, up to 8 hours",
    description:"Perform incredible feats of craftsmanship.",
    descriptionFull:"Choose from Hasty Craft (gain extra action for crafting) or Masterwork (enchant an item with a spell). The spell enhances crafting abilities or imbues items with magical effects."
};

SpellsList["glass strike"] = {
    name: "Glass Strike",
    classes: ["Sorcerer", "Warlock", "Wizard"],
    level: 7,
    school: "Transmutation",
    time: "1 action",
    range: "60 feet",
    components:"V, S, M",
    compMaterial:"a shard of transparent glass",
    duration:"Special",
    description:"Transform target into glass.",
    descriptionFull:"Transform nonliving matter or a creature into glass. Glass Transmute affects objects; Flesh to Glass affects creatures, making them vulnerable to damage and altering their properties. The effect can be permanent if concentration is maintained."
};

SpellsList["glassteel"] = {
    name: "Glassteel",
    classes: ["Artificer", "Wizard"],
    level: 5,
    school: "Transmutation (ritual)",
    time: "10 minutes",
    range: "Touch",
    components:"V, S, M",
    compMaterial:"a piece of fine crystal worth at least 2,500 gp",
    duration:"1 hour",
    description:"Make material transparent as glass.",
    descriptionFull:"Touch an object or area of metal, stone, or wood to make it transparent like glass. Decide transparency and visibility for others. The material retains original strength. The transformation can become permanent with concentration."
};

SpellsList["glogala's paradox"] = {
    name: "Glogala's Paradox",
    classes: ["Sorcerer", "Warlock", "Wizard"],
    level: 8,
    school: "Conjuration",
    time: "1 minute",
    range: "Self",
    components: "V, S, M",
    compMaterial: "A platinum hourglass worth at least 5,000 gp filled with diamond dust worth at least 5,000 gp (the dust is consumed)",
    duration: "1 hour",
    description: "Travel backwards in time up to one month.",
    descriptionFull: "You disappear entirely, traveling backwards in time up to one month earlier, to a time when you had just completed a long rest. You become yourself at that moment in time, with all your memories of the following month. You can make alterations to your own past. When the spell ends, you return to your present time. The DM determines the totality of the effects of your changes.",
};

SpellsList["grounding"] = {
    name: "Grounding",
    classes: ["Druid", "Faerie", "Sorcerer", "Wizard"],
    level: 4,
    school: "Abjuration",
    time: "1 action",
    range: "Self (30-foot radius)",
    components: "V, S, M",
    compMaterial: "an iron rod wrapped in a coil of copper wire",
    duration: "Concentration, up to 1 minute",
    description: "Create a deflection aura against electrical energy.",
    descriptionFull: "You create a deflection aura that protects creatures in the area from electrical energy. Creatures within the area have resistance to lightning and have advantage on saving throws against spells and other effects that would deal lightning damage to them."
};

SpellsList["hawkeye"] = {
    name: "Hawkeye",
    classes: ["Druid", "Ranger"],
    level: 1,
    school: "Transmutation",
    time: "1 bonus action",
    range: "Self",
    components: "V",
    duration: "Concentration, up to 10 minutes",
    description: "Enhance eyesight and improve ranged attack capabilities.",
    descriptionFull: "You let out a cry resembling that of a hawk, enhancing your eyesight. For the duration, you can see up to 1 mile away with no difficulty and discern fine details as though looking at something no more than 100 feet away. Additionally, dim light doesn’t impose disadvantage on your Wisdom (Perception) checks."
};

SpellsList["healing wave"] = {
    name: "Healing Wave",
    classes: ["Bard", "Cleric", "Druid", "Faerie"],
    level: 3,
    school: "Evocation",
    time: "1 action",
    range: "30 feet",
    components: "V, S",
    duration: "Instantaneous",
    description:"Channel restorative healing to multiple creatures.",
    descriptionFull:"You create a pool of 10d4 restorative healing and channel it toward a creature you can see within range. Roll half the pool’s dice, restoring hit points equal to the result + your spellcasting ability modifier. Choose additional creatures within range for further healing."
};

SpellsList["hirsutism"] = {
    name: "Hirsutism",
    classes: ["Artificer", "Bard", "Faerie", "Druid", "Wizard"],
    level: 3,
    school: "Transmutation",
    time: "1 action",
    range: "60 feet",
    components:"V, S, M (a drop of castor oil)",
    duration:"Concentration, up to 1 minute",
    description:"Cause hair to sprout from a target.",
    descriptionFull:"Choose between Hirsute Blessing (granting desired hair growth) or Hirsute Curse (causing unruly hair growth). The curse blinds and restrains the target unless they succeed on saving throws or cut the hair away."
};

SpellsList["hold portal"] = {
    name: "Hold Portal",
    classes: ["Artificer", "Wizard"],
    level: 1,
    school: "Abjuration",
    time: "1 action",
    range: "60 feet",
    components: "V, S, M",
    compMaterial: "an iron bar at least two inches long",
    duration: "Concentration, up to 1 hour",
    description: "Magically close and hold shut a nonmagical entrance.",
    descriptionFull: "You magically close and hold shut a nonmagical entrance you can see within range, holding any locking mechanisms it can have in place for the duration. The entrance must be a door, gate, window, or shutter made of wood, metal, or stone whose total area does not exceed 15 cubic feet. For the duration, the target object gains 1d8 temporary hit points and has resistance to damage from nonmagical attacks. A creature can attempt to force the door open by making a Strength ability check equal to your spell save DC. A more powerful knock or dispel magic spell opens the entrance and ends the spell."
};

SpellsList["humanoid possession"] = {
    name: "Humanoid Possession",
    classes: ["Faerie", "Warlock"],
    level: 7,
    school: "Enchantment",
    time: "1 action",
    range: "Touch",
    components: "V, S, M",
    compMaterial: "a fragment of an oyster’s shell and a piece of the target’s body (hair, blood, or fingernail)",
    duration: "Concentration, up to 10 minutes",
    description: "Possess a humanoid's body.",
    descriptionFull: "You touch one Humanoid you can see within range, forcing it to make a Charisma saving throw. On a failure, the target is charmed, and your essence enters their consciousness. You control the target’s body while retaining your own alignment and mental scores. The target can attempt to wrestle control back by making new saving throws. The possession ends if the target is reduced to 0 hit points or if you exit using a bonus action."
};

SpellsList["hunter's mercy"] = {
    name: "Hunter’s Mercy",
    classes: ["Ranger"],
    level: 1,
    school: "Divination",
    time: "1 bonus action",
    range: "120 feet",
    components: "V, S",
    duration: "Concentration, up to 1 round",
    description: "Gain insight into a target's weaknesses for a critical hit.",
    descriptionFull: "You are filled with the memories and experience of generations of hunters. Choose a Beast or a creature of a type that matches your Favored Enemy feature within range. Until the spell ends, the first hit you make with a weapon attack against your designated target is a critical hit."
};

SpellsList["hypothermia"] = {
    name: "Hypothermia",
    classes: ["Druid", "Sorcerer", "Wizard"],
    level: 4,
    school: "Evocation",
    time: "1 action",
    range: "60 feet",
    components: "V, S",
    duration: "Instantaneous",
    description:"Cover target in icy rime; deal cold damage.",
    descriptionFull:"Target a creature within range; they make a Constitution saving throw. On failure, they take 8d8 cold damage and suffer chilling sickness (halved speed and disadvantage on checks). On success, take half damage without sickness."
};

SpellsList["ice blade"] = {
    name: "Ice Blade",
    classes: ["Druid"],
    level: 2,
    school: "Evocation",
    time: "1 bonus action",
    range: "Self",
    components:"V, S, M (leaf of hellebore)",
    duration:"Concentration, up to 10 minutes",
    description:"Evoke an icy blade for melee attacks.",
    descriptionFull:"Evoke an icy blade in your hand lasting for the duration. Use an action for melee spell attacks dealing 3d6 cold damage; reduce target's speed by 10 feet on hit."
};

SpellsList["icicle"] = {
    name: "Icicle",
    classes: ["Artificer", "Druid", "Sorcerer", "Wizard"],
    level: 2,
    school: "Abjuration",
    time: "1 action",
    range: "60 feet",
    components: "V, S",
    duration: "10 minutes",
    description: "Create icicles that fall and restrain creatures.",
    descriptionFull: "You create several large, crystal-clear icicles on a 5-foot-diameter surface on a ceiling, doorway, or similar overhang within range. When a creature walks beneath the icicles, they fall, and the creature beneath them must make a Dexterity saving throw. On a failure, the creature takes 2d12 piercing damage and is restrained until the start of their next turn. On a success, they take half as much damage and aren’t restrained. Additionally, creatures within 5 feet of the creature that triggered the icicles’ fall must also make a Dexterity saving throw, taking 2d6 cold damage on a failure or half as much on a success."
};

SpellsList["icy sheet"] = {
    name: "Icy Sheet",
    classes: ["Druid", "Sorcerer", "Wizard"],
    level: 3,
    school: "Evocation",
    time: "1 bonus action",
    range: "Special",
    components: "V, S",
    duration: "Instantaneous",
    description: "Create an icy sheet that can be traversed.",
    descriptionFull: "You move 10 feet in any direction, up to a number of times equal to your spellcasting ability modifier (minimum of 1), creating a 5-foot-square, 1-foot-thick sheet of ice in your wake. This movement does not provoke attacks of opportunity. You can end your movement on any side of the resulting sheet. The sheet lasts for 1 minute or until it is destroyed."
};

SpellsList["immaculate conception"] = {
    name: "Immaculate Conception",
    classes: ["Cleric", "Faerie", "Sorcerer", "Wizard"],
    level: 6,
    school: "Transmutation (ritual)",
    time: "1 hour",
    range: "10 feet",
    components: "V, S, M (a meal prepared by the spell’s targets)",
    duration: "Special",
    description: "Bind two creatures to conceive new life.",
    descriptionFull: "You bind two willing creatures you can see within range together, comingling their essences, and calling forth a new life into the world. This spell must be cast under a full moon. The spell can produce offspring from creatures that cannot normally produce offspring together."
};

SpellsList["indefinite suspension"] = {
    name: "Indefinite Suspension",
    classes: ["Cleric", "Sorcerer", "Wizard"],
    level: 7,
    school: "Abjuration (ritual)",
    time: "1 action",
    range: "Touch",
    components: "V, S, M (a hunk of amber with an insect preserved inside)",
    duration: "Special",
    description:"Suspend a creature in time.",
    descriptionFull:"You touch a Large or smaller creature and attempt to suspend them in time. The target makes a Charisma saving throw. On failure, they become petrified and immune to all damage for the duration."
};

SpellsList["infestation of maggots"] = {
    name: "Infestation of Maggots",
    classes: ["Druid", "Warlock"],
    level: 2,
    school: "Necromancy",
    time: "1 action",
    range: "30 feet",
    components:"V, S, M (several dead flies)",
    duration:"Concentration, up to 1 minute",
    description:"Infest target with maggots; deal necrotic damage.",
    descriptionFull:"You exhale a foul-smelling stench of decay onto a creature within range. The target makes a Constitution saving throw. On failure, they are poisoned and take necrotic damage as maggots burst from their flesh."
};

SpellsList["investiture of starlight"] = {
    name: "Investiture of Starlight",
    classes: ["Druid", "Faerie"],
    level: 6,
    school: "Transmutation",
    time: "1 action",
    range: "Self",
    components: "V, S",
    duration: "Concentration, up to 10 minutes",
    description: "Emit intense starlight; gain various benefits.",
    descriptionFull: "Your body emits intense starlight, shedding bright light in a 30-foot radius, and dim light for an additional 30 feet. This light is sunlight. You can use a bonus action to teleport up to your movement speed to an unoccupied space you can see. You gain the ability to hover. Any creature that moves within 5 feet of you or starts its turn there must make a Constitution saving throw. On a failure, they are blinded until the end of their turn. You can use your action to create four motes of starlight that assail creatures within 90 feet. Make a separate ranged spell attack for each mote; each deals 1d8 radiant damage on a hit."
};

SpellsList["investiture of starlight"] = {
    name: "Investiture of Starlight",
    classes: ["Druid", "Faerie"],
    level: 6,
    school: "Transmutation",
    time: "1 action",
    range: "Self",
    components: "V, S",
    duration: "Concentration, up to 10 minutes",
    description: "Emit intense starlight; gain various benefits.",
    descriptionFull: "Your body emits intense starlight, shedding bright light in a 30-foot radius, and dim light for an additional 30 feet. This light is sunlight. You can use a bonus action to teleport up to your movement speed to an unoccupied space you can see. You gain the ability to hover. Any creature that moves within 5 feet of you or starts its turn there must make a Constitution saving throw. On a failure, they are blinded until the end of their turn. You can use your action to create four motes of starlight that assail creatures within 90 feet. Make a separate ranged spell attack for each mote; each deals 1d8 radiant damage on a hit."
};

SpellsList["invisible trickery"] = {
    name: "Invisible Trickery",
    classes: ["Bard", "Faerie", "Sorcerer", "Wizard"],
    level: 3,
    school: "Illusion",
    time: "1 bonus action",
    range: "Self",
    components: "V, S",
    duration: "Concentration, up to 1 minute",
    description: "Become invisible under certain conditions.",
    descriptionFull: "For the duration, roll a d20 at the end of each of your turns. On a roll of 11 or higher, you become invisible until the start of your next turn. Anything you wear or carry is invisible as long as it is on your person. Your invisibility ends early if you attack a creature, cast a spell, or use your reaction."
};

SpellsList["jinx"] = {
    name: "Jinx",
    classes: ["Bard", "Faerie", "Sorcerer", "Warlock"],
    level: 2,
    school: "Enchantment",
    time: "1 bonus action",
    range: "60 feet",
    components: "V, S, M (faerie dust)",
    duration: "Concentration, up to 1 hour",
    description: "Curse a creature with misfortune.",
    descriptionFull: "You curse one creature you can see, jinxing them. Until the spell ends, each time the target takes the Attack action or casts a spell, they must succeed on a Dexterity saving throw or take 2d8 thunder damage. Choose one ability when you cast the spell; the target has disadvantage on ability checks made with that ability."
};

SpellsList["leeock's lucky coin"] = {
    name: "Leeock's Lucky Coin",
    classes: ["Artificer", "Bard", "Faerie", "Sorcerer", "Warlock"],
    level: 0,
    school: "Transmutation",
    time: "1 action",
    range: "30 feet",
    components: "S, M (a metal coin)",
    duration: "Instantaneous",
    description:"Fling a coin at a target; deal bludgeoning damage.",
    descriptionFull:"You fling a coin toward a creature you can see within range. Make a ranged spell attack; on a hit, the target takes 1d6 + your spellcasting ability modifier bludgeoning damage. At the end of your turn, the coin returns to your hand or pocket."
};

SpellsList["lifebloom"] = {
    name: "Lifebloom",
    classes: ["Faerie", "Druid", "Ranger"],
    level: 4,
    school: "Evocation",
    time: "1 action",
    range: "30 feet",
    components:"V, S, M (a fresh sprig of local flora)",
    duration:"Instantaneous",
    description:"Heal allies with life force from the Feywild.",
    descriptionFull:"You create a 20-foot-radius sphere filled with pure life force centered on a point within range. Each creature of your choice in the area regains 3d6 hit points and makes a DC 10 Charisma check. If they succeed, they add your spellcasting modifier to the healing."
};

SpellsList["lipstitch"] = {
    name: "Lipstitch",
    classes: ["Faerie", "Sorcerer", "Wizard", "Warlock"],
    level: 3,
    school: "Transmutation",
    time: "1 action",
    range: "30 feet",
    components: "V, S",
    duration: "Concentration, up to 10 minutes",
    description: "Curse a creature's mouth shut.",
    descriptionFull: "You speak a rebuking word and make a matching gesture. Choose a creature you can see within range. The target must make a Constitution saving throw. On a failure, the target becomes cursed, taking 2d4 piercing damage, and its mouth is sewn shut by a sinuous thread. The threads have an AC equal to your spell save DC and hit points equal to 1d4 + your spellcasting ability modifier. A creature can use an action to make a Strength saving throw to burst the stitches or use an appropriate implement to cut them away."
};

SpellsList["lloyd's beacon"] = {
    name: "Lloyd's Beacon",
    classes: ["Artificer", "Bard", "Cleric", "Wizard"],
    level: 4,
    school: "Conjuration (ritual)",
    time: "1 minute",
    range: "10 feet",
    components: "V, S",
    duration: "Instantaneous",
    description: "Create a magical beacon for teleportation.",
    descriptionFull: "When casting the spell, choose from Light or Recall options. Light creates a magical flame on an object that lasts up to 1 year. Recall teleports you and up to five willing creatures to the beacon's location if on the same plane."
};

SpellsList["londyn's duet"] = {
    name: "Londyn's Duet",
    classes: ["Bard", "Faerie"],
    level: 2,
    school: "Conjuration",
    time: "1 bonus action",
    range: "Self",
    components: "V, S, M (a metal coin with two identical sides)",
    duration: "Concentration, up to 10 minutes",
    description:"Create a duplicate for performance or combat support.",
    descriptionFull:"You create a translucent duplicate of yourself within 5 feet. The duplicate shares your proficiencies and can perform actions like moving, attacking with force damage, or granting bardic inspiration."
};

SpellsList["longlimb"] = {
    name: "Longlimb",
    classes: ["Faerie", "Sorcerer", "Wizard"],
    level: 1,
    school: "Transmutation",
    time: "1 bonus action",
    range: "Touch",
    components: "V, S, M (a length of rubber)",
    duration: "Concentration, up to 1 minute",
    description:"Extend limbs for increased reach or speed.",
    descriptionFull:"You touch a willing creature, causing one pair of limbs to grow beyond their normal length. Choose arms for increased reach or legs for increased speed and jump distance."
};

SpellsList["luck"] = {
    name: "Luck",
    classes: ["Bard", "Faerie", "Sorcerer", "Warlock"],
    level: 3,
    school: "Divination",
    time: "1 action",
    range: "Touch",
    components:"V, S, M (a four-leaf clover or rabbit’s foot)",
    duration:"Concentration, up to 1 minute",
    description:"Imbue a creature with good fortune.",
    descriptionFull:"You touch a willing creature and grant them Luck points. They can spend these points for advantage on rolls or reroll damage dice. Additional Luck points can be gained at higher levels."
};

SpellsList["lunar occult"] = {
    name: "Lunar Occult",
    classes: ["Druid", "Faerie", "Sorcerer", "Warlock", "Wizard"],
    level: 7,
    school: "Conjuration",
    time: "1 minute",
    range: "Special",
    components: "V, S, M",
    compMaterial: "a handful of meteoric iron worth at least 125 gp",
    duration: "Concentration, up to 1 hour",
    description: "Create an astral object to block sunlight.",
    descriptionFull: "You cause an astral object to materialize high in the sky, interposing itself between the sun and the land. This spell must be cast during the day. The conjured object blocks sunlight in a 10-mile radius centered on the point where you cast the spell. Immediately, sunlight becomes dim light. After 1 minute has passed, the area is plunged into darkness as the sun is eclipsed by the object. A bright corona of sunlight is still visible around the object, and creatures who look directly at it must succeed on a Constitution saving throw or be blinded until the end of their next turn."
};

SpellsList["magic miasma"] = {
    name: "Magic Miasma",
    classes: ["Faerie", "Sorcerer", "Wizard"],
    level: 7,
    school: "Abjuration",
    time: "1 action",
    range: "120 feet",
    components: "V, S, M",
    compMaterial: "a tiny pillow of fine quilted silk",
    duration: "Concentration, up to 1 minute",
    description: "Create a cylinder of billowing mist that disrupts spells.",
    descriptionFull: "You create a 30-foot-radius, 10-foot-high cylinder of billowing, sparkling purple mist centered on a point within range. The cylinder spreads around corners and its area is heavily obscured. It lasts for the duration. In addition to obscuring sight, the miasma is difficult terrain. Melee attack rolls made from within it (or ranged attack rolls whose projectiles pass through it) whose results are less than your spell save DC are lost. A creature or object that falls through the miasma is slowed, reducing falling damage by 1d6 for each 10 feet passed through."
};

SpellsList["magnetism"] = {
    name: "Magnetism",
    classes: ["Artificer", "Wizard"],
    level: 5,
    school: "Evocation",
    time: "1 action",
    range: "60 feet",
    components: "V, S, M",
    compMaterial: "a horseshoe-shaped piece of magnetic iron coated in mithril worth at least 250 gp",
    duration: "Concentration, up to 1 minute",
    description:"Cause an object to emit a magnetic field.",
    descriptionFull:"You cause an object made of nonmagical stone or metal you can see within range to emit a powerful magnetic field. Up to 10 cubic feet of material can be affected. For the duration, the object attracts all other nonmagical ferrous metals within 60 feet of itself. Large or smaller metal objects not worn or carried move toward the magnet, and creatures in metal armor must make Strength saving throws or be pulled toward it."
};

SpellsList["magnetokinesis"] = {
    name: "Magnetokinesis",
    classes: ["Artificer", "Wizard"],
    level: 6,
    school: "Transmutation",
    time: "1 action",
    range: "60 feet",
    components: "V, S, M",
    compMaterial: "a lodestone and a piece of iron wire",
    duration: "Concentration, up to 10 minutes",
    description: "Manipulate metallic objects with magnetic force.",
    descriptionFull: "You gain the ability to manipulate metallic objects within range as if using telekinesis. You can move, lift, and control up to 500 pounds of metal. You can use your action to exert fine control over objects or creatures made of metal. This includes opening doors, manipulating weapons, or restraining a creature in metal armor."
};


SpellsList["majorGlamour"] = {
    name: "Major Glamour",
    classes: ["Faerie", "Sorcerer", "Wizard"],
    level: 4,
    school: "Transmutation (Ritual)",
    time: "1 minute",
    range: "Self",
    components: "V, S, M",
    compMaterial: "an uncut ruby, emerald or sapphire worth at least 500 gp, which the spell consumes",
    duration: "Concentration, up to 1 hour",
    description: "Transform yourself into a living creature.",
    descriptionFull: "You transform yourself into a living creature. For the duration, you are Fey and are also the creature type you transformed into. A hostile creature can use its action to make an Intelligence (Investigation) check against your spell save DC. If they succeed, you must make a concentration check to maintain your form. Choose one of following two creature types:\n\nGlamourous Humanoid. You become a human, half-elf, halfling, gnome or elf that is not a drow. You decide what you look like, including your height, weight, facial features, sound of your voice, hair length, coloration, and distinguishing characteristics, if any. None of your statistics change. Additionally, you can become proficient with one skill, tool, armor, or weapon of your choice for the duration.\n\nGlamourous Beast. Choose a creature known to you as the target of this spell. The target must be on the same plane of existence as you. You become a Tiny, Small, or Medium Beast of great beauty, perfectly suited to the target's aesthetics, such as a colorful bird, a white stag, or a silvery fish. You can cast the message cantrip at will with the target as a recipient and make Charisma (Persuasion) and Charisma (Performance) checks against them with advantage. You gain the traits of your chosen form and can fly, swim, or breathe water as applicable but cannot speak, cast spells, make attacks, or use any class abilities."
};

SpellsList["massDistortion"] = {
    name: "Mass Distortion",
    classes: ["Artificer", "Faerie", "Wizard"],
    level: 1,
    school: "Transmutation",
    time: "1 action",
    range: "Touch",
    components: "V, S, M",
    compMaterial: "a lead sphere at least 1 inch in diameter",
    duration: "24 hours",
    description: "Alter the apparent weight of an object.",
    descriptionFull: "You touch one nonmagical object no larger than a 5-foot cube, altering its apparent weight for you or for others. The effect lasts for the duration. When you cast the spell, choose one of the following effects:\n\nMass Decrease. When handled by you, the apparent weight of the object is five times less.\n\nMass Increase. When handled by any creature other than you, the apparent weight of the object is five times their normal weight."
};

SpellsList["melfsUnicornArrow"] = {
    name: "Melf's Unicorn Arrow",
    classes: ["Faerie", "Sorcerer", "Wizard"],
    level: 3,
    school: "Conjuration",
    time: "1 action",
    range: "120 feet",
    components: "V, S, M",
    compMaterial: "a unicorn's horn or a nightmare's hoof worth at least 250 gp",
    duration: "Instantaneous",
    description: "Release a spectral arrow that transforms into a unicorn or nightmare.",
    descriptionFull: "You release a spectral arrow from your hand that becomes the shimmering form of a unicorn or nightmare (your choice), which rushes toward a creature of your choice that you can see. Make a ranged spell attack ignoring up to half cover or dim light if the target is not fully illuminated by your vision. On a hit, the target takes 5d12 damage and is pushed 15 feet away from you."
};

SpellsList["metamorphoseLiquid"] = {
    name: "Metamorphose Liquid",
    classes: ["Artificer", "Bard", "Cleric", "Sorcerer", "Wizard"],
    level: 1,
    school: "Transmutation",
    time: "1 action",
    range: "Touch",
    components: "V, M",
    compMaterial: "a drop of the target liquid",
    duration: "Instantaneous",
    description: "Transmute up to one gallon of nonmagical liquid into another.",
    descriptionFull: "You transmute up to one gallon of nonmagical liquid into an equal amount of a different nonmagical liquid (e.g., water into wine). Liquid poisons can also be neutralized by this spell."
};

SpellsList["minorGlamour"] = {
    name: "Minor Glamour",
    classes: ["Faerie", "Sorcerer", "Wizard"],
    level: 3,
    school: "Transmutation (Ritual)",
    time: "1 action",
    range: "Self",
    components: "S, M",
    compMaterial: "a hunk of jade or malachite worth at least 250 gp which the spell consumes",
    duration: "Concentration, up to 8 hours",
    description: "Transform yourself into an object.",
    descriptionFull: "You transform yourself into an object up to one size category smaller than yourself. While in an object form, you cannot move but remain aware and make Wisdom (Perception) checks with disadvantage."
};

SpellsList["mushroomRing"] = {
    name: "Mushroom Ring",
    classes: ["Druid", "Faerie", "Ranger"],
    level: 3,
    school: "Conjuration (Ritual)",
    time: "1 minute",
    range: "10 feet",
    components: "\uD835\uDC52, \uD835\uDC53, \uD835\uDC54 (faerie dust and a sample of fungi)",
    duration: "1 hour",
    description: "Create a protective ring of mushrooms.",
    descriptionFull: "You enhance the fecundity of a circle of ground, causing mushrooms to grow at its edges. The ring affects creatures attempting to enter it based on their type. You can invite creatures into the ring without penalty and use your action to explode the ring in spores."
};

SpellsList["natureBolt"] = {
    name: "Nature Bolt",
    classes: ["Druid", "Faerie", "Wizard"],
    level: 0, // Cantrip
    school: "Transmutation",
    time: "1 action",
    range: "60 feet",
    components: "V, S",
    duration: "Instantaneous",
    description: "Hurl a mass of terrain at a target.",
    descriptionFull: "A handful of solid terrain you can reach crumbles at your touch, and you hurl the mass at a creature or object within range. Make a ranged spell attack against the target. If you hit, the target takes 1d8 of damage of a type based on the terrain. This spell's damage increases by 1d8 when you reach 5th level (2d8), 11th level (3d8), and 17th level (4d8)."
};

SpellsList["negromanticRegombination"] = {
    name: "Negromantic Regombination",
    classes: ["Cleric", "Wizard"],
    level: 5,
    school: "Necromancy",
    time: "1 action",
    range: "10 feet",
    components: "V, S",
    duration: "Instantaneous",
    description: "Combine lesser undead into a more powerful one.",
    descriptionFull: "You create a more powerful undead servant out of lesser ones. You target three skeletons or zombies that you created by means of the animate dead spell and who are under your control, combining their mass into a single creature with the statistics of a minotaur skeleton or ogre zombie. The creature is under your control for 24 hours."
};

SpellsList["othertime"] = {
    name: "OTHERTIME",
    classes: ["Artificer", "Bard", "Cleric", "Faerie"],
    level: 5,
    school: "Conjuration",
    time: "1 action",
    range: "Self",
    components: "S, M",
    compMaterial: "a fold of brocade fabric worth at least 50 gold, which the spell consumes",
    duration: "Concentration, 1 round",
    description: "Step into the future.",
    descriptionFull: "You step into the future, to the start of your next turn. To other creatures, you appear to vanish altogether, only to reappear at a later point in time. Time continues to progress for everything except you."
};

SpellsList["pallOfTwilight"] = {
    name: "Pall of Twilight",
    classes: ["Bard", "Faerie", "Sorcerer", "Warlock", "Wizard"],
    level: 3,
    school: "Illusion",
    time: "1 action",
    range: "120 feet",
    components: "S, M",
    compMaterial: "a ball of cotton or wool, dyed grey or black",
    duration: "Concentration, up to 1 minute",
    description: "Create a sphere of grey mist that mutes sound and color.",
    descriptionFull: "A creeping pall of grey mist manifests in a 30-foot-radius sphere centered on a point you can see within range, muting sound and color alike. This spell reduces bright light to dim light and dim light to darkness."
};

SpellsList["papergut"] = {
    name: "PAPERGUT",
    classes: ["Artificer", "Bard", "Sorcerer", "Wizard"],
    level: 4,
    school: "Transmutation",
    time: "1 action",
    range: "120 feet",
    components: "S, M",
    compMaterial: "a sheet of parchment, which the spell consumes",
    duration: "Instantaneous",
    description: "Tear parchment into fragments that deal damage.",
    descriptionFull: "You tear a sheet into dozens of fragments and send them flying toward a creature you can see within range. The target makes a Dexterity saving throw, taking 10d8 damage on a failed save, or half as much on a successful one."
};

SpellsList["pealOfNineBells"] = {
    name: "Peal of Nine Bells",
    classes: ["Artificer", "Bard", "Cleric", "Faerie", "Wizard"],
    level: 0, // Cantrip
    school: "Conjuration",
    time: "1 action",
    range: "20 feet",
    components: "S, M",
    compMaterial: "a chime or bell",
    duration: "Instantaneous",
    description: "Create a beam of ringing sound that pushes and damages a target.",
    descriptionFull: "You create a beam of ringing sound that strikes at one creature of your choice that you can see within range. The target must succeed on a Strength saving throw or be pushed up to 10 feet in a straight line away from you, taking 1d6 thunder damage. The spell's damage increases by 1d6 when you reach 5th level (2d6), 11th level (3d6), and 17th level (4d6)."
};

SpellsList["perplex"] = {
    name: "Perplex",
    classes: ["Bard", "Faerie", "Wizard"],
    level: 3,
    school: "Enchantment",
    time: "1 action",
    range: "60 feet",
    components: "V, S, M",
    compMaterial: "faerie dust",
    duration: "Concentration, up to 1 minute",
    description: "Wreak havoc among a creature's thoughts.",
    descriptionFull: "You target one creature you can see within range, and attempt to wreak havoc among its thoughts. The target makes a Wisdom saving throw. On a failure, the target rolls a d6 at the start of its turn, taking the amount rolled as psychic damage, and subtracting that number from attack rolls, ability checks, and concentration checks it makes until the start of its next turn. The target repeats its saving throw at the end of its turn, ending the spell on a success. Creatures with an Intelligence score of 2 or lower are immune to this spell."
};

SpellsList["plaguemask"] = {
    name: "Plaguemask",
    classes: ["Artificer", "Faerie", "Wizard"],
    level: 2,
    school: "Illusion",
    time: "1 action",
    range: "Touch",
    components: "V, M",
    compMaterial: "A white handkerchief",
    duration: "24 hours",
    description: "Make creatures appear sick or plagued.",
    descriptionFull: "You touch up to three willing creatures, making them appear sick or plagued. You decide the symptoms of the illusory disease, which could include a fever, runny nose, clammy hands, swollen extremities, and weeping sores. Each target must display the same symptoms. For the duration, the targets gain advantage on Charisma (Performance) checks to convince others of the illusory disease. A creature can make a Wisdom (Medicine) check at disadvantage against your spell save DC to determine if the symptoms are real. On a success, the illusion is immediately dispelled."
};

SpellsList["polandarasPetticoatPocket"] = {
    name: "Polandara's Petticoat Pocket",
    classes: ["Artificer", "Bard", "Wizard"],
    level: 2,
    school: "Conjuration",
    time: "1 action",
    range: "Self",
    components: "S, M",
    compMaterial: "a fold of fine fabric worth at least 10 gold, which is consumed by the spell",
    duration: "Instantaneous",
    description: "Create an extradimensional pocket on your garment.",
    descriptionFull: "The spell creates a pocketed square of fabric, which immediately attaches to a location on a garment the caster is wearing. The pocket has an opening no larger than a six-inch diameter, with an interior space considerably larger than its outside dimensions suggest. It can hold up to 50 pounds and not exceed a volume of 20 cubic feet. The pocket weighs 3 pounds regardless of its contents. Retrieving an item requires a bonus action. If overloaded or pierced, it ruptures and scatters contents within 10 feet."
};

SpellsList["powerWordSilence"] = {
    name: "Power Word Silence",
    classes: ["Bard", "Faerie", "Sorcerer", "Warlock", "Wizard"],
    level: 6,
    school: "Enchantment",
    time: "1 action",
    range: "60 feet",
    components: "V",
    duration: "Instantaneous",
    description: "Remove the ability to speak from one creature.",
    descriptionFull: "You speak a word of power that removes the ability to speak from one creature you can see within range. If the target has 150 hit points or fewer, it is enveloped in silence. No sound can reach nor escape from the target. It becomes immune to thunder damage and is deafened. Casting a spell that includes a verbal component becomes impossible for them. The silenced target must make a Charisma saving throw at the end of each of its turns. On a successful save, the silencing effect ends."
};

SpellsList["probabilityWarp"] = {
    name: "Probability Warp",
    classes: ["Bard", "Faerie", "Sorcerer", "Warlock"],
    level: 5,
    school: "Enchantment",
    time: "1 action",
    range: "60 feet",
    components: "V, S, M",
    compMaterial: "a strong iron magnet",
    duration: "Concentration, up to 1 minute",
    description: "Surround a creature with a field of favorable probability.",
    descriptionFull: "A subtle field of favorable probability surrounds one creature you can see within 60 feet of you. For the duration, the target's attacks are magical. Their attack rolls gain a bonus equal to half your spellcasting ability modifier (minimum of 1), and they score a critical hit on a roll of 19 or 20. You can use your reaction to apply your spellcasting ability modifier as a bonus to the target's Armor Class against a triggering attack, or to one saving throw they make (after the roll, but before the results are announced)."
};

SpellsList["puffOfSmoke"] = {
    name: "Puff of Smoke",
    classes: ["Artificer", "Bard", "Faerie", "Sorcerer", "Wizard"],
    level: 0, // Cantrip
    school: "Conjuration",
    time: "1 action",
    range: "60 feet",
    components: "V, S",
    duration: "Instantaneous",
    description: "Create a cylinder of fog that heavily obscures an area.",
    descriptionFull: "You create a 5-foot-radius, 15-foot-high cylinder of fog centered on a point within range. The smoke spreads around corners, and its area is heavily obscured. When created, the puff produces a dull thud which is audible out to 100 feet. The smoke can be any color you desire, and you can cause it to shed dim light in a 5-foot-radius in the same color. It lasts until the start of your next turn or until a wind of moderate or greater speed (at least 10 miles per hour) disperses it. When you reach 11th level, you can create two puffs of smoke with the spell."
};

SpellsList["puncture"] = {
    name: "Puncture",
    classes: ["Artificer"],
    level: 0, // Cantrip
    school: "Transmutation",
    time: "1 action",
    range: "120 feet",
    components: "S, M",
    compMaterial: "a steel needle",
    duration: "Instantaneous",
    description: "Send psionic needles toward a creature.",
    descriptionFull: "A psionic needle streaks toward a creature within range. Make a ranged spell attack against the target. On a hit, the target takes 1d10 piercing damage. The spell creates more needles when you reach higher levels: two needles at 5th level, three needles at 11th level, and four needles at 17th level. You can direct the needles at the same target or at different ones. Make a separate attack roll for each needle."
};

SpellsList["pyroclasm"] = {
    name: "Pyroclasm",
    classes: ["Druid", "Sorcerer", "Wizard"],
    level: 3,
    school: "Evocation",
    time: "1 action",
    range: "60 feet",
    components: "V, S, M",
    compMaterial: "a shard of obsidian or pumice",
    duration: "Instantaneous",
    description: "Erupt fumes and lava at a point you choose.",
    descriptionFull: "A cloud of volatile fumes and scorching lava erupts forth at a point you choose in range. Each creature in a 20-foot-radius sphere centered on that point must make a Dexterity saving throw, taking 2d8 fire damage and 2d8 poison damage on a failure, or half as much damage on a successful one. After damage is dealt, the spell's area of effect is filled by the cloud of fumes and ash, lightly obscuring the area. At the start of your next turn, the cloud ignites. Each creature in the area must make a Dexterity saving throw. A target takes 4d8 fire damage on a failure or half as much on a success. Afterwards, the cloud vanishes."
};

SpellsList["quentinsQuicklingSenses"] = {
    name: "Quentin's Quickling Senses",
    classes: ["Artificer", "Bard", "Faerie", "Sorcerer", "Wizard"],
    level: 4,
    school: "Transmutation",
    time: "1 action",
    range: "Self",
    components: "V, S, M",
    compMaterial: "a hummingbird feather",
    duration: "Concentration, up to 1 minute",
    description: "Gain heightened senses and speed.",
    descriptionFull: "For the duration, you gain bonuses to your armor class equal to your spellcasting ability modifier (minimum of 1), ignore difficult terrain and are immune to attacks of opportunity. You have advantage on Dexterity, Intelligence and Wisdom checks and saving throws and cannot be surprised. In addition, attacks against you from sources you can see are made at disadvantage. However, your quickening makes it difficult to engage with those moving at normal speed; you also have disadvantage on attack rolls and Charisma ability checks to influence others."
};

SpellsList["radiantGlamour"] = {
    name: "Radiant Glamour",
    classes: ["Cleric", "Faerie", "Paladin"],
    level: 3,
    school: "Evocation",
    time: "1 action",
    range: "20 feet",
    components: "V, S, M",
    compMaterial: "faerie dust",
    duration: "Instantaneous",
    description: "Emit an intense light, searing nearby enemies.",
    descriptionFull: "You emit an intense light, searing nearby enemies. Each creature of your choice within 20 feet that can see you makes a Constitution saving throw. A creature takes 3d12 radiant damage on a failure, or half as much on a success. Fiends and Undead have disadvantage on their saving throws, and if they fail, they are blinded until the end of their next turn. At Higher Levels: When you cast this spell using a spell slot of 4th level or higher, the damage increases by 1d12 for each slot level above 3rd."
};

SpellsList["readBlood"] = {
    name: "Read Blood",
    classes: ["Artificer", "Faerie", "Sorcerer", "Warlock", "Wizard"],
    level: 1,
    school: "Divination (Ritual)",
    time: "1 action",
    range: "Self",
    components: "V, S, M",
    compMaterial: "a drop of blood, ichor or other fluid that left a creature in the last 24 hours, suspended in an inscribed vial worth at least 10 gp",
    duration: "Instantaneous",
    description: "Gain mystical insight into the magics connecting fluid to its source.",
    descriptionFull: "You focus your mind on the fluid, gaining mystical insight into the magics connecting it to the creature it came from. The DM tells you information in regard to two choices from a list including surface thoughts, creature type and Constitution score, highest spell level cast recently, disease or poison status, and relation to another creature. At Higher Levels: When you cast this spell using a spell slot of 2nd level or higher, you can request one additional piece of information for each slot level above 1st."
};

SpellsList["regallAgony"] = {
    name: "Regall Agony",
    classes: ["Bard", "Cleric", "Warlock"],
    level: 4,
    school: "Conjuration",
    time: "1 action",
    range: "60 feet",
    components: "V, S, M",
    compMaterial: "a shard of mirrored glass",
    duration: "Concentration, up to 1 minute",
    description: "Draw upon a painful memory within a creature.",
    descriptionFull: "You draw upon a painful memory within one creature you can see within range and force them to relive the experience. The target makes a Charisma saving throw, taking 4d10 psychic damage on a failure, and half as much on a success. If they fail their saving throw, they become cursed. For the duration, whenever the target takes damage, you can use your reaction to deal half that amount as additional psychic damage. Constructs, Undead, and creatures with an Intelligence score lower than 4 are immune. At Higher Levels: When you cast this spell using a spell slot of 5th level or higher, the damage increases by 1d10 for each slot level above 4th."
};

SpellsList["rejuvenate"] = {
    name: "Rejuvenate",
    classes: ["Druid", "Faerie", "Sorcerer", "Wizard"],
    level: 7,
    school: "Necromancy",
    time: "1 action",
    range: "Touch",
    components: "V, S, M",
    compMaterial: "an inscribed platinum egg worth at least 5000 gp, which the spell consumes",
    duration: "Concentration, up to 1 minute",
    description: "Reverse the aging process of a Humanoid or Beast.",
    descriptionFull: "You touch a Humanoid or Beast, reversing its aging process. An unwilling target can make a Charisma saving throw to resist. If willing or if it fails the save, roll 1d6 and subtract from its age. You cannot reduce age below birth. For the duration, you can use your action to rejuvenate again up to times equal to your spellcasting ability modifier. Creatures repeat their saving throw at the start of each turn to end the effect. When the spell ends, aging returns over a year unless dispelled. At Higher Levels: Using an 8th-level slot increases die to 1d10 and effect lingers for a century; at 9th-level die is increased to 1d12 and effects are permanent."
};

SpellsList["reminiscence"] = {
    name: "Reminiscence",
    classes: ["Cleric", "Druid"],
    level: 4,
    school: "Divination (Ritual)",
    time: "1 minute",
    range: "Self",
    components: "V, M",
    compMaterial: "a lens of glass worth at least 250 gp which the spell consumes",
    duration: "Concentration, up to 10 minutes",
    description: "Experience past events from your current location.",
    descriptionFull: "Choose a span of time within the last century. Visions fill your senses and subsume all sensory input in the present. You are blinded and deafened during this experience. You view events in reverse from your current position but cannot interact with them. You retain any special senses while witnessing past events and can speak normally but find movement difficult if surroundings have changed."
};

SpellsList["rendingDistortion"] = {
    name: "Rending Distortion",
    classes: ["Artificer", "Sorcerer", "Warlock", "Wizard"],
    level: 4,
    school: "Evocation",
    time: "1 action",
    range: "120 feet",
    components: "V, S",
    duration: "Instantaneous",
    description: "Cause space and time around a target to fluctuate violently.",
    descriptionFull: "The spell causes the space and time around and inside a target creature or object to rapidly accelerate and decelerate in random patches, tearing their body as they attempt to move through the fluctuations. The target makes a Constitution saving throw, taking 5d10 force damage on a failure and half as much on a success. If they fail their saving throw, they are restrained until the end of their next turn, and if they take an action on that turn, they are dealt an additional 2d10 force damage. At Higher Levels: When you cast this spell using a spell slot of 5th level or higher, the damage increases by 1d10 for each slot level above 4th."
};

SpellsList["reorient"] = {
    name: "Reorient",
    classes: ["Artificer", "Faerie", "Wizard"],
    level: 1,
    school: "Transmutation",
    time: "1 bonus action",
    range: "Self",
    components: "V, S, M",
    compMaterial: "a leaden sphere",
    duration: "1 round",
    description: "Alter gravity's pull upon yourself.",
    descriptionFull: "You alter gravity's pull upon your person, causing yourself to fall in a direction of your choosing until the end of your turn, covering a distance up to 500 feet. If you collide with any objects during this movement, you take appropriate falling damage as determined by the DM. At the start of your next turn, gravity reorients itself as is normal for the space you occupy, potentially causing you to fall again."
};

SpellsList["reverseProjectiles"] = {
    name: "Reverse Projectiles",
    classes: ["Artificer", "Cleric", "Faerie", "Paladin", "Wizard"],
    level: 3,
    school: "Abjuration",
    time: "1 action",
    range: "Self",
    components: "V, S, M",
    compMaterial: "a tortoiseshell fragment",
    duration: "Concentration, up to 1 minute",
    description: "Deflect projectiles back at attackers.",
    descriptionFull: "You wrap yourself in a nimbus of lavender light which sheds dim light in a 5-foot-radius and deflects projectiles. For the duration, when you are hit by a ranged attack, the damage you take from it is reduced by 1d10 + your spellcasting ability modifier. If the spell reduces the projectile's damage to 0, the missile is turned back upon the creature that attacked you."
};

SpellsList["roarOfWaves"] = {
    name: "Roar of Waves",
    classes: ["Bard", "Sorcerer", "Warlock", "Wizard"],
    level: 3,
    school: "Illusion",
    time: "1 action",
    range: "30 feet",
    components: "V, S, M",
    compMaterial: "a seashell",
    duration: "Concentration, up to 1 minute",
    description: "Create an illusory manifestation of rising ocean waters.",
    descriptionFull: "You tap into the mind of a creature you can see within range, creating an illusory manifestation of rising ocean waters, visible only to the target. The target must make a Wisdom saving throw. On a failed save, the target is overcome by the rising waters and is deafened and incapacitated. At Higher Levels: When you cast this spell using a spell slot of 4th level or higher, you can target one additional creature for each slot level above 3rd."
};

SpellsList["sacredStrike"] = {
    name: "Sacred Strike",
    classes: ["Cleric", "Faerie"],
    level: 0, // Cantrip
    school: "Evocation",
    time: "1 action",
    range: "5 feet",
    components: "V, M",
    compMaterial: "(a weapon)",
    duration: "1 round",
    description: "Make a melee attack that wreathes the target in light.",
    descriptionFull: "As part of the action used to cast this spell, you must make a melee attack with a weapon against one creature within the spell's range. On a hit, the target suffers the attack's normal effects and is wreathed in light. For the duration, if another creature hits it with an attack, it deals additional radiant damage equal to your spellcasting modifier."
};

SpellsList["sanguineStrike"] = {
    name: "Sanguine Strike",
    classes: ["Bard", "Cleric", "Faerie", "Sorcerer"],
    level: 0, // Cantrip
    school: "Divination",
    time: "1 action",
    range: "Touch",
    components: "V, S",
    duration: "Concentration, up to 1 round",
    description: "Grant a creature advantage on an attack roll.",
    descriptionFull: "You touch a willing creature. Your magic grants them exceptional skill with their weapon. The target then designates a creature they can see within 30 feet of them. Until the end of their next turn, they gain advantage on the first attack roll they make against the designated creature, provided that this spell hasn't ended."
};

SpellsList["seeking"] = {
    name: "Seeking",
    classes: ["Artificer", "Cleric", "Faerie", "Paladin", "Ranger", "Wizard"],
    level: 2,
    school: "Divination",
    time: "1 minute",
    range: "Touch",
    components: "V, S, M",
    compMaterial: "alchemical ink worth at least 25 gp, which the spell consumes, and the ammunition being imbued, which crumbles to dust when this spell ends",
    duration: "1 hour",
    description: "Imbue ammunition with seeking properties.",
    descriptionFull: "You touch up to 5 nonmagical pieces of ammunition. For the duration, this seeking ammunition is magical for the purpose of overcoming resistance and immunity to nonmagical damage. When a creature makes an attack with seeking ammunition, they do not make an attack roll but instead declare the target of the attack to be a creature or object they can see within range of their weapon. Provided there is a pathway along which a projectile might reach the target, regardless of how winding, crooked or circuitous that path is, the attack hits."
};

SpellsList["sensoryDeprivation"] = {
    name: "Sensory Deprivation",
    classes: ["Faerie", "Sorcerer", "Warlock", "Wizard"],
    level: 4,
    school: "Illusion",
    time: "1 action",
    range: "60 feet",
    components: "V, S, M",
    compMaterial: "a chrysoberyl worth at least 20 gp and black silk cloth",
    duration: "Concentration, up to 1 minute",
    description: "Nullify a creature's senses.",
    descriptionFull: "You attempt to blot out the senses of a creature you can see within range. The target makes a Wisdom saving throw. On a failure, the target's senses are nullified for the duration, including their auditory, olfactory, taste, and visual senses. In addition to being blinded and deafened, an affected creature cannot benefit from blindsight or tremorsense while under the effects of the spell."
};

SpellsList["shapeWood"] = {
    name: "Shape Wood",
    classes: ["Artificer", "Druid", "Faerie"],
    level: 3,
    school: "Transmutation",
    time: "1 action",
    range: "Touch",
    components: "V, S, M",
    compMaterial: "(a pinch of sawdust)",
    duration: "Instantaneous",
    description: "Form wood into any shape that suits your purpose.",
    descriptionFull: "You touch a nonmagical wooden object of Large size or smaller or a section of wood no more than 10 feet in any dimension and form it into any shape that suits your purpose. For example, you might shape a trap door into a spear or quarterstaff, or you might shape a large wooden throne into a cage fit for a Medium creature."
};

SpellsList["shatterfloor"] = {
    name: "Shatterfloor",
    classes: ["Artificer", "Bard", "Sorcerer", "Wizard"],
    level: 3,
    school: "Evocation",
    time: "1 action",
    range: "Self (60-foot cone)",
    components: "V, S, M",
    compMaterial: "(a tuning fork)",
    duration: "Instantaneous",
    description: "Unleash a thrumming crescendo across a solid surface.",
    descriptionFull: "You unleash a thrumming crescendo across a solid surface in a 60-foot cone. Creatures in the area must make a Constitution saving throw, taking 7d6 thunder damage on a failure or half as much on a success. If the surface is made of nonmagical stone, wood, ice, or material with hardness less than those, the floor is pulverized, becoming difficult terrain."
};

SpellsList["skipDay"] = {
    name: "Skip Day",
    classes: ["Artificer", "Wizard"],
    level: 5,
    school: "Transmutation",
    time: "1 action",
    range: "Self (10-foot radius)",
    components: "S, M",
    compMaterial: "diamond dust worth at least 250 gp",
    duration: "Instantaneous",
    description: "Travel 24 hours into the future.",
    descriptionFull: "You and up to six willing creatures of your choice within 10 feet of you are swallowed by a tear in space-time, traveling 24 hours into the future. For the travelers, this feels like a mere instant. Constructs and Elementals cannot be targeted by the spell. Creatures observing the spell from outside its range see you disappear in a momentary flash of bright, white light. You and your companions arrive in the exact spaces they were when the spell was cast. If a creature's space is now occupied due to changing conditions in the intervening time, they are shunted to the nearest available space, taking 1d10 force damage for every 5 feet they are moved. Creatures traveling in time this way must succeed on a DC 12 Constitution saving throw or take one level of exhaustion."
};

SpellsList["slipstream"] = {
    name: "Slipstream",
    classes: ["Artificer", "Sorcerer", "Wizard"],
    level: 2,
    school: "Transmutation",
    time: "1 action",
    range: "60 feet",
    components: "V, S, M",
    compMaterial: "a length of silk",
    duration: "Concentration, up to 1 minute",
    description: "Create a corridor of flowing space-time.",
    descriptionFull: "A 10-foot-tall, 15-foot-wide, 60-foot-long corridor of flowing space-time unfurls in a straight line in front of you, aiding or hindering travel along its length. You can choose whether the line flows towards or away from you. Creatures moving with the flow can move 2 feet for every one foot of spent movement, and those moving against it treat the area as difficult terrain. For the duration, you can use a bonus action to reverse the direction of the flow."
};

SpellsList["snakestaff"] = {
    name: "Snakestaff",
    classes: ["Druid", "Faerie", "Sorcerer", "Wizard"],
    level: 1,
    school: "Transmutation",
    time: "1 action",
    range: "15 feet",
    components: "V, S, M",
    compMaterial: "a wooden quarterstaff or similar length of wood",
    duration: "Concentration, up to 1 hour",
    description: "Transform a staff into a giant poisonous snake.",
    descriptionFull: "You throw a wooden spear or quarterstaff up to 15 feet away from you, transforming it into a giant poisonous snake. The snake is friendly to you and your companions and obeys your commands. In combat, it shares your initiative count but takes its turn immediately after yours. The only action it takes is Dodge unless commanded otherwise. The transformation lasts until the duration ends or until the snake drops to 0 hit points or dies. If the weapon used has bonuses, those are conferred upon any snake created by the spell."
};

SpellsList["sneezingDust"] = {
    name: "Sneezing Dust",
    classes: ["Bard", "Druid", "Faerie", "Ranger", "Wizard"],
    level: 4,
    school: "Conjuration",
    time: "1 action",
    range: "20 feet",
    components: "V, S, M",
    compMaterial: "(faerie dust)",
    duration: "Instantaneous",
    description: "Unleash a cloud of irritating dust causing sneezing.",
    descriptionFull: "You unleash a cloud of irritating dust out from yourself to a distance of 20 feet. Creatures of your choice in the area must succeed on a Constitution saving throw or begin sneezing uncontrollably. Creatures that do not need to breathe succeed automatically. An affected creature is incapacitated and begins suffocating. As long as it remains conscious, it can repeat the saving throw at the end of each turn, ending the effect on success."
};

SpellsList["solidFog"] = {
    name: "Solid Fog",
    classes: ["Faerie", "Sorcerer", "Wizard"],
    level: 2,
    school: "Conjuration",
    time: "1 action",
    range: "120 feet",
    components: "V, S, M",
    compMaterial: "(a pinch of powdered animal hoof)",
    duration: "Concentration, up to 10 minutes",
    description: "Create a dense fog that heavily obscures an area.",
    descriptionFull: "You create a 20-foot-radius, 10-foot-high cylinder of dense fog centered on a point within range. The cylinder spreads around corners and its area is heavily obscured. It lasts for the duration or until dispersed by strong wind (at least 30 mph). The fog is so thick that it becomes difficult terrain. Melee attack rolls made from within it (or ranged attack rolls whose projectiles pass through it) whose results are less than your spell save DC are lost."
};

SpellsList["solipsism"] = {
    name: "Solipsism",
    classes: ["Bard", "Faerie", "Sorcerer", "Warlock", "Wizard"],
    level: 7,
    school: "Illusion",
    time: "1 action",
    range: "120 feet",
    components: "V",
    duration: "Concentration, up to 1 minute",
    description: "Convince a creature that they are the only real being.",
    descriptionFull: "You manipulate the senses of one creature and attempt to convince them that they are the only real creature in all of existence and that everything around them is merely an illusion. The target makes a Wisdom saving throw. On a failure, they become despondent and are stunned, watching the world around themselves with boredom or bemusement. Since they do not consider their surroundings to be real, they make no effort to interact with them or to defend themselves from any potential threat. The target repeats its saving throw at the end of each of its turns, ending the effect early on a success."
};

SpellsList["soulWhip"] = {
    name: "Soul Whip",
    classes: ["Bard", "Faerie", "Sorcerer", "Warlock", "Wizard"],
    level: 2,
    school: "Illusion",
    time: "1 action",
    range: "Self",
    components: "V, S",
    duration: "Concentration, up to 1 minute",
    description: "Create a whip of solidified enmity.",
    descriptionFull: "You weave together threads of wrathful thought to create a whip of solidified enmity in your hand. This magic whip lasts until the spell ends. It counts as a martial melee weapon with which you are proficient. It deals 2d4 + your spellcasting ability modifier psychic damage on a hit and has the finesse, light, and reach properties. In addition, when you use the whip to attack a target that is charmed or frightened by you, you make the attack roll with advantage. If you drop the weapon or throw it, it dissipates as it leaves your hand. Thereafter, while the spell persists, you can use a bonus action to cause the whip to reappear in your hand."
};

SpellsList["speakWithObject"] = {
    name: "Speak with Object",
    classes: ["Bard", "Sorcerer", "Warlock"],
    level: 3,
    school: "Conjuration",
    time: "1 action",
    range: "Touch",
    components: "V, S",
    duration: "10 minutes",
    description: "Summon potent memories from an object.",
    descriptionFull: "You summon the most potent memories of a creature by touching an object they once held. The spell fails if the object was the target of this spell within the last 10 days. Until the spell ends, you can ask the memory up to five questions. The memory knows only what the creature knew up until the last moment it touched the object. The answers come in the form of memories, impressions, or emotions, and the memory is under no compulsion to offer answers if you are hostile to it or it recognizes you as an enemy."
};

SpellsList["squeakingFloor"] = {
    name: "Squeaking Floor",
    classes: ["Artificer", "Cleric", "Wizard"],
    level: 3,
    school: "Abjuration (Ritual)",
    time: "1 minute",
    range: "Touch",
    components: "V, S, M",
    compMaterial: "(a rusty iron hinge)",
    duration: "8 hours",
    description: "Create magical sensors along flooring.",
    descriptionFull: "You create a thin sheet of magical sensors along a stretch of even flooring or terrain with an area up to 50 feet long and 50 feet wide. For the duration, if a creature weighing more than three pounds steps into the area, it emits loud, unmistakable squeaks that can be heard up to 100 feet away. The sound spreads around corners and through materials like stone and metal. Creatures capable of moving completely silently reduce the audible range by half."
};

SpellsList["stumble"] = {
    name: "Stumble",
    classes: ["Bard", "Faerie", "Sorcerer", "Warlock", "Wizard"],
    level: 1,
    school: "Enchantment",
    time: "1 action",
    range: "60 feet",
    components: "V, S, M",
    compMaterial: "(a scrap of fruit skin or a drop of grease)",
    duration: "Concentration, up to 1 minute",
    description: "Curse a creature to suffer a humiliating fall.",
    descriptionFull: "You curse a creature, causing them to suffer a humiliating fall. For the duration, if the target moves more than 5 feet on their turn, you can use your reaction to force them to make a Dexterity saving throw. On a failure, they fall prone and lose the rest of their movement. Creatures using a flying or swimming speed for their movement are immune to this spell’s effects."
};

SpellsList["suspendedSilence"] = {
    name: "Suspended Silence",
    classes: ["Artificer", "Bard", "Cleric", "Ranger"],
    level: 3,
    school: "Enchantment",
    time: "1 minute",
    range: "Touch",
    components: "V, S, M",
    compMaterial: "a feather and a handful of gem dust worth 25 gp, which the spell consumes",
    duration: "24 hours",
    description: "Imbue an object with silence.",
    descriptionFull: "You enchant an object weighing no more than 5 pounds, imbuing it with the silence spell. As you finish casting the spell, you assign a command word, which is inaudible to all but you. The object remains enchanted for the duration or until you speak the command word. As a bonus action, you can speak the command word, causing it to project a silencing aura in a 20-foot-radius sphere centered on itself. The aura lasts for 1 minute or until the object is destroyed."
};

SpellsList["switcheroo"] = {
    name: "Switcheroo",
    classes: ["Bard", "Faerie", "Sorcerer", "Warlock", "Wizard"],
    level: 4,
    school: "Conjuration",
    time: "1 action",
    range: "30 feet",
    components: "V, S, M",
    compMaterial: "faerie dust",
    duration: "Instantaneous",
    description: "Exchange positions of two creatures.",
    descriptionFull: "You attempt to exchange the positions of two creatures you can see within range. The targets must be of the same size category. If either target is unwilling, they make a Wisdom saving throw. On a failure, their positions are swapped. Constructs and Undead succeed their saving throw automatically. Until the end of your next turn, you can use your reaction to teleport to the position you were at when you cast this spell."
};

SpellsList["sylvanVision"] = {
    name: "Sylvan Vision",
    classes: ["Druid", "Faerie", "Ranger"],
    level: 1,
    school: "Divination (Ritual)",
    time: "1 action",
    range: "200 feet",
    components: "V, M",
    compMaterial: "a fresh sprig of local flora, which the spell consumes",
    duration: "Concentration, up to 10 minutes",
    description: "See through nonmagical foliage.",
    descriptionFull: "For the duration, nonmagical foliage does not obscure your vision. You can see through any nonmagical plants as if they were transparent."
};

SpellsList["synostodweomer"] = {
    name: "Synostodweomer",
    classes: ["Sorcerer", "Wizard"],
    level: 3,
    school: "Transmutation",
    time: "1 bonus action",
    range: "Self",
    components: "V, S",
    duration: "1 round",
    description: "Convert magical energy into healing.",
    descriptionFull: "You channel magical energy from a spell you know or have prepared into healing magic. Until the end of your next turn, you can use your action to touch a creature and expend a spell slot of 5th level or lower to restore hit points. The amount restored is 2d8 for a 1st-level slot, plus 1d8 for each level higher than 1st."
};

SpellsList["tailSweep"] = {
    name: "Tail Sweep",
    classes: ["Artificer", "Druid", "Faerie", "Sorcerer", "Wizard"],
    level: 4,
    school: "Evocation",
    time: "1 action",
    range: "10 feet",
    components: "S",
    duration: "Instantaneous",
    description: "Unleash a sweeping tail attack.",
    descriptionFull: "A translucent tail sweeps around you in a 10-foot-radius. Each creature of your choice within range must make a Dexterity saving throw. On a failure, they take 4d10 force damage and are knocked prone. On a success, they take half as much damage and aren't knocked prone."
};

SpellsList["tattoosion"] = {
    name: "Tattoosion",
    classes: ["Artificer", "Sorcerer", "Bard", "Warlock", "Wizard"],
    level: 0, // Cantrip
    school: "Illusion",
    time: "1 action",
    range: "Self",
    components: "S",
    duration: "1 minute",
    description: "Create magical effects with your tattoos.",
    descriptionFull: "This spell is a minor magical trick that novice tattoosionists use for practice. You create one of the following magical effects:\n- You create lifelike animations of your tattoos, for example, causing a snake to slither in a spiral around your forearm.\n- You cause one of your tattoos to emit sounds appropriate to their nature, audible up to 10 feet away from you.\n- You permanently relocate a tattoo.\n- You make a colored shape, an image, or a symbol appear on a willing creature for a number of hours equal to your spellcasting ability modifier.\nIf you cast this spell multiple times, you can have up to three of its non-instantaneous effects active at a time, and you can dismiss such an effect as an action."
};

SpellsList["telepathyTap"] = {
    name: "Telepathy Tap",
    classes: ["Cleric", "Faerie", "Sorcerer", "Wizard"],
    level: 3,
    school: "Divination",
    time: "1 action",
    range: "120 feet",
    components: "S",
    duration: "Concentration, up to 10 minutes",
    description: "Overhear telepathic conversations.",
    descriptionFull: "You can overhear the telepathic conversations of other creatures within 120 feet of you, and the contents of any message cantrips cast in the same area. You do not detect uncommunicated thoughts nor understand telepathic conversations in languages you don’t know. Specify the specific creatures whose transmissions you wish to overhear. Telepathy tap does not allow you to overhear telepathic conversations of creatures protected by a mind blank spell."
};

SpellsList["thornSpray"] = {
    name: "Thorn Spray",
    classes: ["Faerie", "Druid"],
    level: 4,
    school: "Transmutation",
    time: "1 action",
    range: "60 feet",
    components: "V, S, M",
    compMaterial: "(the stem of a plant with thorns)",
    duration: "Instantaneous",
    description: "Create a spray of thick, painful thorns.",
    descriptionFull: "You create a spray of thick, painful thorns which you distribute in a 60-foot cone, dealing up to 10d6 piercing damage. Make a ranged spell attack for each creature of your choice within the area. Divide the spell’s damage dice between the targets. On a hit, the target is poisoned until the end of your next turn. At Higher Levels: When you cast this spell using a spell slot of 5th level or higher, the damage increases by 2d6 for each slot level above 4th."
};

SpellsList["timeBomb"] = {
    name: "Time Bomb",
    classes: ["Artificer", "Sorcerer", "Warlock", "Wizard"],
    level: 3,
    school: "Evocation",
    time: "1 action",
    range: "60 feet",
    components: "V, S, M",
    compMaterial: "(a working watch)",
    duration: "Concentration up to 1 minute",
    description: "Turn a creature into a living bomb.",
    descriptionFull: "You cause a well of pressure to build from within a creature you can see within range, turning them into a living bomb. The target must make a Constitution saving throw. On failure, they take 3d6 force damage and their movement speed is halved. On success, they take half damage and are otherwise unaffected. For the duration, you can use an action on your turn to deal 3d6 force damage to an affected target. If reduced to 0 hit points, they explode. At Higher Levels: When cast using a spell slot of 4th level or higher, each effect's damage increases by 1d6 per slot level above 3rd."
};

SpellsList["timeKnife"] = {
    name: "Time Knife",
    classes: ["Artificer", "Bard", "Cleric", "Sorcerer", "Wizard"],
    level: 0, // Cantrip
    school: "Conjuration",
    time: "1 action",
    range: "120 feet",
    components: "V, S",
    duration: "Instantaneous",
    description: "A magical blade of disruptive energy.",
    descriptionFull: "A magical blade of disruptive energy sails toward a creature within range. Make a ranged spell attack against the target. On hit, the target takes 1d6 slashing damage plus force damage equal to your spellcasting ability modifier. The spell creates additional blades at higher levels."
};

SpellsList["timeParasite"] = {
    name: "Time Parasite",
    classes: ["Bard", "Faerie", "Sorcerer", "Warlock"],
    level: 2,
    school: "Abjuration",
    time: "1 action",
    range: "30 feet",
    components: "V, S",
    duration: "1 round",
    description: "Steal time from a creature.",
    descriptionFull: "You attempt to steal time from a creature you can see within range. The target makes a Constitution saving throw. On a failure, they become incapacitated until the end of their next turn, and you gain an additional action, which you can use at the end of the target’s next turn."
};

SpellsList["toweringOak"] = {
    name: "Towering Oak",
    classes: ["Druid", "Ranger"],
    level: 1,
    school: "Illusion",
    time: "1 action",
    range: "Self",
    components: "V, S",
    duration: "Concentration, up to 1 minute",
    description: "Grow taller and gain intimidation bonuses.",
    descriptionFull: "Your voice becomes deeper, rasping with the strength of earth. For the duration, you gain the following benefits:\n- You grow a number of inches taller equal to your spellcasting ability modifier.\n- You gain a bonus to Charisma (Intimidation) checks that you make equal to twice your spellcasting ability modifier."
};

SpellsList["toxicTongue"] = {
    name: "Toxic Tongue",
    classes: ["Artificer", "Druid", "Faerie", "Ranger", "Warlock"],
    level: 3,
    school: "Transmutation",
    time: "1 action",
    range: "Self",
    components: "V, S",
    duration: "Concentration, up to 1 minute",
    description: "Create virulent poison in your mouth.",
    descriptionFull: "Your mouth gains the ability to create a virulent poison for the duration. You can use your poison in two ways:\n- **Poison Spit:** As a bonus action, you can spray a stream of poison from your mouth, targeting one creature you can see within 30 feet of you. The target makes a Constitution saving throw. On a failure, they take 3d10 poison damage.\n- **Poison Weapon:** As a bonus action, you can apply your poison to a melee weapon or piece of ammunition on your person or carried by a willing creature within 5 feet of you. The poison’s potency lasts until the start of your next turn. If the poisoned weapon hits a creature, the target must make a Constitution saving throw, taking 3d6 poison damage on a failure, or half as much on a success. The poison has no effect if ingested.\nAt Higher Levels: When you cast this spell using a spell slot of 4th level or higher, the damage of the poison increases by 1d8 for each slot level above 3rd."
};

SpellsList["treasureScent"] = {
    name: "Treasure Scent",
    classes: ["Artificer", "Bard", "Cleric", "Faerie", "Sorcerer", "Wizard"],
    level: 3,
    school: "Divination",
    time: "1 action",
    range: "Self (30-foot radius)",
    components: "V, S",
    duration: "1 hour",
    description: "Detect valuable metals and gems.",
    descriptionFull: "A multihued mist appears in front of you before swirling up into your nose. For the duration, you can detect copper, silver, gold, platinum, mithral, adamantine, and gems within 30 feet of you and differentiate between types of valuables you sense. When you detect valuables, their exact location is not revealed—only their presence and direction. When you come within 10 feet of treasure, you can pinpoint its exact location. This spell can’t locate treasure if more than 5 feet of stone, 1 foot of common metal, or any thickness of lead blocks a direct path between you and the treasure."
};

SpellsList["treeSteed"] = {
    name: "Tree Steed",
    classes: ["Druid", "Faerie", "Ranger"],
    level: 2,
    school: "Enchantment",
    time: "10 minutes",
    range: "Touch",
    components: "V, S",
    duration: "24 hours",
    description: "Animate a log into a steed.",
    descriptionFull: "You touch a wooden log at least one foot in diameter and five to ten feet long, causing it to spring to life, sprouting four wooden legs. The steed takes on a form that you choose (e.g., brown bear or riding horse). The steed has the statistics of your chosen form but is a plant instead of a Beast. Additionally, your steed’s wooden exterior grants it an AC of 16 and makes it vulnerable to fire damage. It cannot speak but understands Sylvan and Druidic. The steed serves as a mount and obeys your commands."
};

SpellsList["twistingInnards"] = {
    name: "Twisting Innards",
    classes: ["Artificer", "Faerie", "Sorcerer", "Wizard"],
    level: 5,
    school: "Transmutation",
    time: "1 action",
    range: "Touch",
    components: "V, S",
    duration: "1 hour",
    description: "Cause the target’s vital organs to shift, making it difficult to strike vulnerable areas.",
    descriptionFull: "You cause the target’s vital organs to writhe, shift, and move about, making it difficult to strike the target in a vulnerable area. For the duration, if the target is subjected to a critical hit or sneak attack, roll a 1d4. If the result is a 3-4, the target is unaffected by the extra damage caused by the sneak attack or critical hit. This spell can’t affect Constructs, Plants, or Undead. At Higher Levels: If you cast this spell using a spell slot of 6th level, the additional damage from a critical hit or sneak attack is avoided on a roll of 2-4. If you use a spell slot of 7th level, the target is rendered immune to critical hits and sneak attacks."
};

SpellsList["unbinding"] = {
    name: "Unbinding",
    classes: ["Cleric", "Faerie", "Sorcerer", "Wizard"],
    level: 9,
    school: "Abjuration",
    time: "1 action",
    range: "120 feet",
    components: "V, S, M",
    compMaterial: "(a pristine yellow diamond worth at least 5,000 gp, which the spell consumes)",
    duration: "Instantaneous",
    description: "Dispel certain spells and effects in a large radius.",
    descriptionFull: "A burst of yellow-white energy erupts from your body in a 120-foot radius, dispelling certain spells of 7th level or lower (without regard to your wishes) as follows:\n- Charmed creatures are released from their enchantments.\n- Paralyzed creatures under the effect of hold person or similar magic are freed.\n- Magical locking mechanisms such as arcane lock are opened.\n- Temporal alterations such as haste and slow are ended.\n- The bestow curse and geas spells are dispelled.\n- Magical barriers such as wall of force are dispelled.\n- A magic circle holding an imprisoned creature is dispelled.\nAn unbinding does not affect protective spells like protection from evil and good or antimagic fields."
};

SpellsList["unconsciousCommand"] = {
    name: "Unconscious Command",
    classes: ["Bard", "Faerie", "Sorcerer", "Warlock", "Wizard"],
    level: 6,
    school: "Enchantment",
    time: "1 minute",
    range: "Touch",
    components: "V, S",
    duration: "24 hours",
    description: "Implant a command into an unconscious creature's mind.",
    descriptionFull: "You touch a creature’s forehead, implanting a course of activity deep into their mind. You must share at least one language with the target. The target makes a Wisdom saving throw. On a failure, they fall unconscious until the end of their next turn and lose all memory of the last 10 minutes. For the duration, when your specified conditions occur, the target attempts to fulfill your command. The spell is detectable by detect magic but not dispel magic."
};

SpellsList["undeadAlacrity"] = {
    name: "Undead Alacrity",
    classes: ["Cleric", "Wizard"],
    level: 1,
    school: "Transmutation",
    time: "1 action",
    range: "60 feet",
    components: "V, S",
    duration: "Concentration, up to 1 minute",
    description: "Imbue undead with speed and agility.",
    descriptionFull: "You imbue up to three undead creatures you can see within range with speed. For the duration, their base walking speed increases by 10 feet and they gain a +1 bonus to AC, Dexterity saving throws, and initiative rolls. At Higher Levels: When you cast this spell using a spell slot of 2nd level or higher, you can target one additional creature for each slot level above 1st."
};

SpellsList["undeadDetonation"] = {
    name: "Undead Detonation",
    classes: ["Cleric", "Wizard"],
    level: 5,
    school: "Necromancy",
    time: "1 action",
    range: "60 feet",
    components: "V, S",
    duration: "Instantaneous",
    description: "Cause an undead under your control to explode.",
    descriptionFull: "You cause a zombie under your control (or an available corpse) to move up to 40 feet and explode. Creatures within a 10-foot radius must make a Dexterity saving throw, taking 6d6 necrotic damage and 6d6 thunder damage on a failed save or half on success. At Higher Levels: When you cast this spell using a spell slot of 6th level or higher, each effect's damage increases by 1d6 for each slot level above 5th."
};

SpellsList["undeadEmissary"] = {
    name: "Undead Emissary",
    classes: ["Cleric", "Wizard"],
    level: 4,
    school: "Necromancy (Ritual)",
    time: "1 hour",
    range: "Touch",
    components: "V, S, M",
    compMaterial: "a cold iron crown with mithril runes worth at least 500 gp, which the spell consumes",
    duration: "1 hour",
    description: "Empower an undead as your emissary.",
    descriptionFull: "You place the iron crown onto a willing undead creature in your service, empowering it as your emissary. For the duration, the target gains 3d8 temporary hit points, advantage on saving throws against being frightened and effects that turn undead, and its Intelligence and Wisdom scores increase by an amount equal to your spellcasting ability modifier (minimum of 1). It can cast the thaumaturgy cantrip and speak one additional language you know. You can communicate with it telepathically within 1 mile and perceive through its senses. It can command other undead you control. If turned or reduced to 0 hit points, your connection is severed."
};

SpellsList["undeadRegeneration"] = {
    name: "Undead Regeneration",
    classes: ["Cleric", "Wizard"],
    level: 3,
    school: "Necromancy",
    time: "1 action",
    range: "60 feet",
    components: "V, M",
    compMaterial: "the freshly severed head of a Medium-sized Beast, which the spell consumes",
    duration: "24 hours",
    description: "Reinforce magic keeping undead animated.",
    descriptionFull: "You reinforce the magic that keeps an undead animated. Up to six undead creatures of your choice within range each regain hit points equal to 2d12 + your spellcasting ability modifier. At Higher Levels: When you cast this spell using a spell slot of 4th level or higher, the healing increases by 1d12 for each slot level above 3rd."
};

SpellsList["vacancy"] = {
    name: "Vacancy",
    classes: ["Artificer", "Faerie", "Sorcerer", "Wizard"],
    level: 4,
    school: "Illusion",
    time: "10 minutes",
    range: "60 feet",
    components: "V, S, M",
    compMaterial: "a square of fine black silk embroidered with silver thread worth at least 100 gp",
    duration: "24 hours",
    description: "Make a structure appear vacant.",
    descriptionFull: "You cause a structure no larger than a 50-foot cube to appear vacant and unused. Those who enter see dust and cobwebs typical of an abandoned place. You can hide furniture or objects with the illusion. Creatures interacting with hidden objects make a Wisdom saving throw; on failure, they believe the object is invisible."
};

SpellsList["wallOfPain"] = {
    name: "Wall of Pain",
    classes: ["Cleric", "Warlock", "Wizard"],
    level: 5,
    school: "Necromancy",
    time: "1 action",
    range: "120 feet",
    components: "V, S, M",
    compMaterial: "(a length of viscera)",
    duration: "Concentration, up to 10 minutes",
    description: "Create a wall that deals necrotic damage.",
    descriptionFull: "You create a wall of twisting energy on a solid surface within range. The wall is up to 60 feet long, 20 feet high, and 1 foot thick. One side deals 6d8 necrotic damage to creatures ending their turn within 5 feet or inside it. The other side deals no damage. At Higher Levels: When you cast this spell using a spell slot of 6th level or higher, the damage increases by 1d8 for each slot level above 5th."
};

SpellsList["waterWhip"] = {
    name: "Water Whip",
    classes: ["Druid", "Faerie", "Sorcerer", "Wizard"],
    level: 1,
    school: "Transmutation",
    time: "1 action",
    range: "30 feet",
    components: "S, M",
    compMaterial: "(a waterskin)",
    duration: "Instantaneous",
    description: "Extend a whip of water at a target.",
    descriptionFull: "You extend a whip of water at a target within range. Make a ranged spell attack; on hit, it takes 2d12 bludgeoning damage and can be pushed or pulled up to 15 feet in any direction but upwards. If pulled within 5 feet of you, use a bonus action to attempt to grapple it. At Higher Levels: When cast using a spell slot of 2nd level or higher, damage increases by 1d12 and movement distance by 5 feet per slot level above 1st."
};

SpellsList["waypoint"] = {
    name: "Waypoint",
    classes: ["Wizard"],
    level: 9,
    school: "Abjuration",
    time: "1 hour",
    range: "30 feet",
    components: "V, S, M",
    compMaterial: "an ornately inscribed platinum stake costing at least 5000 gp, which the spell consumes",
    duration: "24 hours",
    description: "Create a waypoint for eventual return.",
    descriptionFull: "You pound an ornate stake into the ground, magically anchoring your essence to the current coordinates of timeline, creating a waypoint for your eventual return. Once cast, for the duration, you can return to your waypoint using your action. You can also set conditions that would trigger a return to your waypoint. Returning to your waypoint consumes it, undoing everything that happened since its creation. Only you retain any memory of the undone time. The waypoint immediately disappears if you travel through time in any way, move to a different plane, or after 24 hours passes."
};

SpellsList["whelm"] = {
    name: "Whelm",
    classes: ["Artificer", "Bard", "Cleric", "Druid", "Faerie", "Sorcerer", "Warlock", "Wizard"],
    level: 0, // Cantrip
    school: "Enchantment",
    time: "1 action",
    range: "30 feet",
    components: "S",
    duration: "Instantaneous",
    description: "Attempt to overwhelm a creature's mind.",
    descriptionFull: "You thrust your arm forward with your palm open and fingers splayed, targeting a creature you can see within range, and attempt to overwhelm its mind. The target makes a Wisdom saving throw, taking 1d6 points of psychic damage on a failure, or half as much on a success. Constructs, Undead, and creatures with an Intelligence score of 4 or lower are immune to the spell. If the spell reduces a creature to 0 hit points, they are unconscious but stable."
};

SpellsList["wildFlight"] = {
    name: "Wild Flight",
    classes: ["Cleric", "Faerie", "Sorcerer"],
    level: 3,
    school: "Evocation",
    time: "1 action",
    range: "Self",
    components: "V, S, M",
    compMaterial: "(faerie dust)",
    duration: "Instantaneous",
    description: "Become a swirling orb of magical energy.",
    descriptionFull: "You become a swirling orb of magical energy. You double your remaining movement speed. Until the end of your turn, you can use your movement speed to move freely through creatures. Your velocity is so high that you can only change direction every 10 feet you move. Each creature you move through must make a Dexterity saving throw, taking 4d6 radiant damage on a failure or half as much on a success."
};

SpellsList["wildRunner"] = {
    name: "Wild Runner",
    classes: ["Druid", "Faerie", "Ranger"],
    level: 4,
    school: "Transmutation",
    time: "1 minute",
    range: "Self",
    components: "V, S, M",
    compMaterial: "(a fragment of hoof or antler)",
    duration: "1 hour",
    description: "Grow a second pair of hoofed legs.",
    descriptionFull: "You alter your form, growing a sturdy second pair of hoofed legs. This growth increases your size by one category. For the duration, you gain benefits such as increased strength and speed, natural weapons like hooves or antlers, and additional damage when charging."
};

SpellsList["windAtOurBacks"] = {
    name: "Wind at Our Backs",
    classes: ["Cleric", "Druid", "Faerie", "Paladin", "Ranger"],
    level: 5,
    school: "Divination (Ritual)",
    time: "10 minutes",
    range: "60 feet",
    components: "V, S, M",
    compMaterial: "(a brass talisman with inlaid amethyst crystals worth at least 500 gp)",
    duration: "24 hours",
    description: "Bless creatures with good fortune in travel.",
    descriptionFull: "You bless up to ten willing creatures with good fortune as they travel. Difficult terrain doesn’t slow their travel, and they can’t become lost except by magical means. Alternatively, bless one vessel traveling by sea or air to double its travel pace."
};

SpellsList["witness"] = {
    name: "Witness",
    classes: ["Bard", "Sorcerer", "Wizard"],
    level: 3,
    school: "Divination",
    time: "1 action",
    range: "Touch",
    components: "S",
    duration: "Concentration, up to 1 hour",
    description: "Create a magical link to experience another's senses.",
    descriptionFull: "You touch a willing creature, creating a magical link from their senses to your own that functions over any distance. For the duration, you can use your action to experience the world through the target’s senses, including sight, sound, touch, smell, and taste, and any special senses such as darkvision. While doing so, you are blinded, deafened, and restrained, and your own senses of taste, smell, and touch are suspended. You can speak normally but can only make Wisdom and Intelligence ability checks or cast spells that allow communication with the target. You can return to your own senses as a bonus action. If the target takes damage while you are experiencing its senses, you take half the amount as psychic damage."
};

SpellsList["wizen"] = {
    name: "Wizen",
    classes: ["Cleric", "Sorcerer", "Warlock", "Wizard"],
    level: 6,
    school: "Necromancy",
    time: "1 action",
    range: "30 feet",
    components: "V, S, M",
    compMaterial: "desecrated gem dust worth at least 1000 gp, which the spell consumes",
    duration: "Concentration, up to 10 hours",
    description: "Age a creature and deal necrotic damage.",
    descriptionFull: "A jet-black beam fires from your hand and ages one Humanoid or Beast you can see within range. The target makes a Charisma saving throw. If they fail, you curse the target, roll a 1d6 and deal the result in necrotic damage to the target, and age them by an equivalent number of years. For the duration, you can use your action to repeat the aging process on your turn. Each additional time you age the target, it must succeed on a Constitution saving throw or take one level of exhaustion. The unnatural aging lingers after the spell ends and gradually returns over a year unless removed by magic."
};

SpellsList["woodRot"] = {
    name: "Wood Rot",
    classes: ["Artificer", "Druid", "Faerie", "Wizard"],
    level: 1,
    school: "Transmutation",
    time: "1 action",
    range: "Touch",
    components: "S, M",
    compMaterial: "(a termite queen’s carapace)",
    duration: "Instantaneous",
    description: "Cause rot in plant creatures or wooden objects.",
    descriptionFull: "You touch a plant creature or nonmagical wooden object, and an insidious rot immediately taints it. If the target is a plant creature, it must make a Constitution saving throw, taking 4d6 necrotic damage on a failure or half as much on a success. If the target is a nonmagical wooden object not being worn or carried, you can destroy up to 5 cubic feet of it. If it's a wooden shield or armor being carried or worn by a creature, it becomes brittle and is destroyed upon taking damage."
};

SpellsList["wrack"] = {
    name: "Wrack",
    classes: ["Sorcerer", "Warlock", "Wizard"],
    level: 4,
    school: "Necromancy",
    time: "1 action",
    range: "30 feet",
    components: "V, S",
    duration: "Concentration, up to 1 minute",
    description: "Curse a creature with pain.",
    descriptionFull: "You target a creature you can see within range with a painful curse. The target makes a Constitution saving throw. On failure, its body blisters with sores and its eyes cloud with blood, rendering it blind for the duration. Constructs and Undead succeed automatically. Use an action each turn to deal 3d10 necrotic damage; they must succeed on a Strength save or fall prone."
};

SpellsList["wyrmhole"] = {
    name: "Wyrmhole",
    classes: ["Sorcerer", "Wizard"],
    level: 9,
    school: "Conjuration",
    time: "1 action",
    range: "60 feet",
    components: "V, S, M",
    compMaterial: "(A platinum hourglass worth at least 5,000 gp filled with diamond dust worth at least 20,000 gp. The dust is consumed.)",
    duration: "Concentration, up to 1 minute",
    description: "Create a portal linking two times.",
    descriptionFull: "You conjure a portal linking an unoccupied space you can see within range to the same location in a different time of your choice. The destination must be at least 24 hours apart from your current location in time. The portal is circular (5-20 feet in diameter) and lasts for the duration. Travel through is possible only by moving through its front."
};

SpellsList["xornMovement"] = {
    name: "Xorn Movement",
    classes: ["Artificer", "Druid", "Sorcerer", "Wizard"],
    level: 5,
    school: "Transmutation",
    time: "1 action",
    range: "Self",
    components: "V, S, M",
    compMaterial: "a pristine fold of xorn hide worth at least 500 gp",
    duration: "Concentration, up to 1 minute",
    description: "Burrow through earth and stone without disturbing it.",
    descriptionFull: "A yellow glow spreads over your entire form, shedding dim light in a 5-foot radius. For the duration, you burrow through nonmagical, unworked earth and stone at your movement speed. While doing so, you don’t disturb the material you move through, and you can breathe normally while entombed in earth and rock. The spell ends if you cast another spell or attack a creature. When the spell ends, if you have not emerged into a space large enough to contain your body, you are shunted to the nearest unoccupied space, taking 1d6 points of bludgeoning damage for every 5 feet you are moved."
};

SpellsList["zap"] = {
    name: "Zap",
    classes: ["Bard", "Faerie", "Sorcerer", "Wizard"],
    level: 0, // Cantrip
    school: "Evocation",
    time: "1 action",
    range: "60 feet",
    components: "V, S",
    duration: "Instantaneous",
    description: "A thrum of chaotic magic deals random damage.",
    descriptionFull: "A thrum of chaotic magic streaks out of you toward one creature of your choice that you can see within range. Make a ranged spell attack. If it hits, roll a d8 to determine the type of damage, then deal 1d8 of that type to the creature. The spell’s damage increases by 1d8 when you reach 5th level (2d8), 11th level (3d8), and 17th level (4d8). Each time the damage dice increase, you can modify the results of your damage type’s roll by an additional ±1."
};

SpellsList["zoneOfSelfImmolation"] = {
    name: "Zone of Self-Immolation",
    classes: ["Druid", "Faerie", "Sorcerer", "Wizard"],
    level: 5,
    school: "Abjuration",
    time: "1 action",
    range: "120 feet",
    components: "V, S, M",
    compMaterial: "(a fragment of charred tree bark)",
    duration: "Concentration, up to 1 hour",
    description: "Create a zone where magical fire backfires on its caster.",
    descriptionFull: "You create a 30-foot-radius sphere centered on a point you can see within range where magical fire twists against its creator. The zone is invisible but smells of ash and sulfur. Nonmagical flames are extinguished in the area. If a creature in the area casts a spell of 4th level or lower that would create magical flame, the spell backfires on them. Additionally, creatures in the area have resistance to fire damage not caused by themselves."
};
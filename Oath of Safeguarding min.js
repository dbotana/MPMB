var iFileName="Paladin - Oath of Safeguarding.js";RequiredSheetVersion(13),SourceList.HB={name:"Paladin - Oath of Safeguarding",abbreviation:"HB",abbreviationSpellsheet:"HB",group:"Rocky's Homebrew",date:"2023/8/28"},AddSubClass("paladin","oath of safeguarding",{regExpSearch:/^(((?=.*(safeguarding|safe|guard))((?=.*paladin)|((?=.*(exalted|sacred|holy|divine))(?=.*(knight|fighter|warrior|warlord|trooper)))))|((?=.*(safeguarding|safe|guard))(?=.*(knight|fighter|warrior|warlord|trooper)))).*$/i,subname:"Oath of Safeguarding",source:["HB",4],features:{subclassfeature3:{name:"Channel Divinity: Insurmountable Passage",source:["HB",4],minlevel:3,description:desc(["As an action, I can magically make ground within 60 ft difficult terrain","It lasts for 1 minute, and I can designate up to 10 creatures that can ignore it",]),action:["action",""],spellcastingExtra:["longstrider","shield of faith","hold person","spike growth","beacon of hope","spirit guardians","dimension door","stoneskin","greater restoration","wall of stone"]},"subclassfeature3.1":{name:"Channel Divinity: Protect from Harm",source:["HB",4],minlevel:3,description:desc(["As an action, I can give reassure friendly creatures that can see or hear me","They gain advantage on saving throws against spells and abilities that deal damage","Additionally, each hostile creature within 30 ft of me that can hear me must make a Wis save","On a fail, they have disadv. on attack rolls until the end of its next turn"]),action:["bonus action",""]},subclassfeature7:{name:"Aura of Preservation",source:["HB",4],minlevel:7,description:desc(["While not incapacitated, creatures of my choice within range and I gain benefits:","First time I or a friendly creature within range would take damage from a weapon attack","Between my turn and the start of my next turn, the target resists non-magical bludgeoning, piercing and slashing","Additionally, each friendly creature within range has advantage on death saving throws",]),additional:levels.map(function(e){return e<7?"":e<18?"10-foot aura":"30-foot aura, resistance to all B/P/S damage"})},subclassfeature15:{name:"Battlefield Controller",source:["HB",4],minlevel:15,description:desc(["I cannot be shoved. If a hostile creature within 10 ft of me moves more than 10 feet away,","I can use my reaction to move up to 10 feet and make an attack against the creature",]),action:["reaction",""]},subclassfeature20:{name:"Redoubtable Defender",source:["HB",4],minlevel:20,description:desc(["As an action, I touch a creature or structure and for 1 hour gain benefits:"," • See third page notes section"]),toNotesPage:[{name:"Redoubtable Defender Benefits",popupName:"Oath of Safeguarding: Redoubtable Defender",page3notes:!0,note:[" • I know if my charge is wounded/damaged or experiencing a strong emotion"," • As an action, I can teleport to an unoccupied space 5ft within my charge's location"," • If the charge is a structure, I can teleport to any uncooccupied space within the structure"," • I am immune to spells and effects that would charm me or otherwise influence me to harm my charge,"," • If charge is a creature within 5ft of me, it is immune to nonmagical B/P/S damage and has adv on saving throws"," • As an action, I can create a barrier similar to wall of force for 1 minute to protect my charge"," • The wall can be a hemispherical dome or sphere with a radius of up to 5ft or four 10 ft by 10 ft panels"," • If my charge is a structure, the barrier can cut through portions without harming it",]}],recovery:"long rest",usages:1,action:["action",""]}}});
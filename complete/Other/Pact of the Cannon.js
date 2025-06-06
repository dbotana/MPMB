var iFileName = "Warlock - Pact of the Cannon [Rocky].js"; 
RequiredSheetVersion(13);

SourceList["PoC"] = {
	name : "Warlock - Pact of the Cannon",
	abbreviation : "PoC",
	abbreviationSpellsheet: "PC",
	group : "Rocky's Homebrew",
	date : "2023/8/20"
};

AddWarlockPactBoon("Pact of the Cannon", {
    name: "Pact of the Cannon",
    description: desc([
        "As a bonus action, I can create a loaded pact weapon in my empty hand; I'm proficient with it",
        "I can choose the type of firearm every time I create it, and it has those statistics",
        "I can use a bonus action to create enough ammunition to reload my current firearm",
        "Any unused ammunition generated disappears at the end of my next turn",
        "The weapon disappears if it is more than 5 ft away from me for 1 minute",
        "The weapon disappears if I use this feature again, dismiss it as a bonus action, or I die",
        "The weapon counts as magical for overcoming resistance and immunity to nonmagical attack"
    ]),
    action: [["bonus action", "Create Pact Firearm"], ["bonus action", "Reload Pact Firearm"]],
    weaponOptions : [{
        regExpSearch : /^(?!.*rifle)(?=.*pact)(?=.*pistol).*$/i,
        name : "Pact Pistol",
        source : [["HB", 1]],
        list : "firearm",
        ability : 2,
        type : "Firearm",
        damage : [1, 10, "piercing"],
        range : "30/90 ft",
        weight : 3,
        description : "Ammunition, reload (10 shots); Counts as magical",
        abilitytodamage : true,
        ammo : "modern bullet",
        isAlwaysProf : true
    }, {
        regExpSearch : /^(?!=.*(laser|antimatter))(?=.*pact)(?=.*rifle).*$/i,
        name : "Pact Rifle",
        source : [["HB", 1]],
        list : "firearm",
        ability : 2,
        type : "Firearm",
        damage : [1, 12, "piercing"],
        range : "40/120 ft",
        weight : 10,
        description : "Ammunition, reload (5 shots), two-handed; Counts as magical",
        abilitytodamage : true,
        ammo : "modern bullet",
        isAlwaysProf : true
    }, {
        regExpSearch : /^(?!=.*laser|antimatter)(?=.*pact)(?=.*shotgun).*$/i,
        name : "Pact Shotgun",
        source : [["HB", 1]],
        list : "firearm",
        ability : 2,
        type : "Firearm",
        damage : [2, 6, "piercing"],
        range : "30/90 ft",
        weight : 7,
        description : "Ammunition, reload (2 shots), two-handed; Counts as magical",
        abilitytodamage : true,
        ammo : "modern bullet",
        isAlwaysProf : true
    }, {
        regExpSearch: /^(?!=.*laser|antimatter)(?=.*pact)(?=.*sniper).*$/i,
        name : "Pact Sniper",
        source : [["HB", 1]],
        list : "firearm",
        ability : 2,
        type : "Firearm",
        damage : [2, 6, "piercing"],
        range : "150/600 ft",
        weight : 10,
        description : "Ammunition, loading, two-handed; Counts as magical",
        abilitytodamage : true,
        ammo : "modern bullet",
        isAlwaysProf : true
    }]
}),

//Agressive Fire
AddWarlockInvocation("Agressive Fire (prereq: Pact of the Cannon, 5th level)", {
    name: "Aggressive Fire",
    description: "\n   " + "You can attack with your pact firearm twice as an attack action on your turn",
    source: ["HB", 1],
    submenu: "[improves Pact of the Cannon]",
    action : ['action', 'Pact Weapon (2 attacks per action)'],
    prereqeval: function (v) { return GetFeatureChoice('class', 'warlock', 'pact boon') == 'pact of the cannon' && classes.known.warlock.level >= 5; },
}),
//Bullet Time
AddWarlockInvocation("Bullet Time (prereq: Pact of the Cannon, 15th level)", {
    name: "Bullet Time",
    description: "\n   " + "Immediately after initiative is rolled, I can spend a warlock spell slot and use my reaction to cast haste on myself. Once I use this feature, I can't use it again until I finish a long rest.",
    source: ["HB", 1],
    submenu: "[improves Pact of the Cannon]",
    prereqeval: function (v) { return GetFeatureChoice('class', 'warlock', 'pact boon') == 'pact of the cannon' && classes.known.warlock.level >= 15; },
    usages : 1,
    recovery : "long rest",
    spellcastingBonus : {
        name : "Bullet Time",
        spells : ["haste"],
        selection : ["haste"],
        firstCol : "oncelr"
    },
}),

// Deadeye Invocation
AddWarlockInvocation("Deadeye (prereq: Pact of the Cannon)", {
    name: "Deadeye",
    description: "\n   " + "Being within 5 feet of a hostile creature or attacking at long range doesn't impose disadvantage on my attack rolls with a firearm. Additionally, I can use my pact firearm as a spellcasting focus for my warlock spells.",
    source: ["HB", 1],
    submenu: "[improves Pact of the Cannon]",
    prereqeval: function (v) {
        return GetFeatureChoice('class', 'warlock', 'pact boon') == 'pact of the cannon';
    },
}),

// Death List Invocation
AddWarlockInvocation("Death List (prereq: Pact of the Cannon, 9th level)", {
    name: "Death List",
    description: "\n   " + "Immediately after initiative is rolled, I can spend a warlock spell slot to choose a number of creatures that I can see up to my Charisma modifier to mark them. I gain a death die, a d4, which I can add to my damage rolls with my pact firearm against a marked creature for 1 minute or until I hit a nonmarked creature. Whenever I reduce a marked creature to 0 hit points my death die increases in size. Once I use this feature, I can't use it again until I finish a long rest.",
    source: ["HB", 1],
    submenu: "[improves Pact of the Cannon]",
    prereqeval: function (v) {
        return GetFeatureChoice('class', 'warlock', 'pact boon') == 'pact of the cannon' && classes.known.warlock.level >= 9;
    },
}),

// Dual Dirge Invocation
AddWarlockInvocation("Dual Dirge (prereq: Pact of the Cannon)", {
    name: "Dual Dirge",
    description: "\n   " + "Whenever I create my pact firearm in the form of a pistol, I can choose to create a second loaded pistol in my other hand. Additionally, when I use the Attack action and attack with a one-handed weapon, I can use a bonus action to attack with a pistol I am holding.",
    source: ["HB", 1],
    action : ["bonus action", "One-Handed Pact Weapon (off hand attack)"],
    submenu: "[improves Pact of the Cannon]",
    prereqeval: function (v) {
        return GetFeatureChoice('class', 'warlock', 'pact boon') == 'pact of the cannon';
    },
}),

// Eagle Eye Invocation
AddWarlockInvocation("Eagle Eye (prereq: Pact of the Cannon)", {
    name: "Eagle Eye",
    description: "\n   " + "While I am wielding a firearm, its long and short attack range are both doubled.",
    source: ["HB", 56],
    submenu: "[improves Pact of the Cannon]",
    prereqeval: function (v) {
        return GetFeatureChoice('class', 'warlock', 'pact boon') == 'pact of the cannon';
    },
    calcChanges : {
        atkAdd : [
            function (fields, v) {
                if (!v.eagleEye && v.isRangedWeapon && /firearm/i.test(v.theWea.type + " " + v.theWea.list) && (/\d+ ?(f.{0,2}t|m)/i).test(fields.Range)) {
                    v.eagleEye = true;
                    var rangeNmbr = fields.Range.match(/\d+([.,]\d+)?/g);
                    var notNmbrs = fields.Range.split(RegExp(rangeNmbr.join('|')));
                    fields.Range = '';
                    rangeNmbr.forEach(function (dR, idx) {
                        fields.Range += (notNmbrs[idx] ? notNmbrs[idx] : '') + (parseFloat(dR.toString().replace(',', '.') * 2));
                    });
                    if (notNmbrs.length > rangeNmbr.length) {
                        fields.Range += notNmbrs[notNmbrs.length - 1];
                    };
                    if (!v.rangeM) {
                        v.rangeM = 2;
                    } else {
                        v.rangeM *= 2;
                    }
                };
            },
            "My ranged firearms have their range doubled.",
            700
        ]
    }
});

//Quickdraw
AddWarlockInvocation("Quickdraw (prereq: Pact of the Cannon)", {
    name: "Quickdraw",
    description: "\n   " + "Immediately after initiative is rolled, I can use my reaction to summon my pact firearm and make one attack with it against a creature in range.",
    source: ["HB", 1],
    submenu: "[improves Pact of the Cannon]",
    prereqeval: function (v) {
        return GetFeatureChoice('class', 'warlock', 'pact boon') == 'pact of the cannon'
    },
});
/*	-WHAT IS THIS?-
	Node.js measurement harness for WoW.js. A dev tool: NOT an Acrobat import script, never import it into the sheet.
	Loads MPMB-v14/_variables/ListsClasses.js (with ListsSources.js and ListsRaces.js), then
	"MPMB-v14/additional-content/pub_20240917_PHB (2).js", then WoW.js, as the runtime harness does, and counts the
	characters the 2024 sheet prints for each WoW entry at level 20 against the largest PHB'24 entry of the same kind.
	Usage (any working directory):
		node "complete/Other/wow-fit-harness.js"                   before/after/budget table; exit 0 only if every row fits
		node "complete/Other/wow-fit-harness.js" --dump            all sheet text of the WoW entries (working tree)
		node "complete/Other/wow-fit-harness.js" --dump fdb30a4    the same for WoW.js at that git revision
	--measure <rev|WORKTREE> is internal: it prints the rows as JSON for the table mode.
*/
var H_BASE_REV = "fdb30a4"; // last commit before the fit work: the "Before" column
var H_ARGS = process.argv.slice(2);
var H_MODE = H_ARGS[0] === "--measure" ? "measure" : H_ARGS[0] === "--dump" ? "dump" : "table";
var H_REV = H_MODE === "table" ? "" : (H_ARGS[1] || "WORKTREE");
var H_cp = require("child_process");
process.chdir(require("path").resolve(__dirname, "..", ".."));
if (H_MODE === "table") hRunTable(); // runs itself twice with --measure, prints the table and exits

// ---- preamble, as in the runtime harness (agent-loop-runs/2026-11-19-1019-wow-maneuvers-pets/plan.md §4b) ----
function isArray(a){ return Object.prototype.toString.call(a) === "[object Array]"; }
function desc(arr, joinStr, preStr){ joinStr = joinStr ? joinStr : "\n"; if (preStr === undefined) preStr = joinStr; if (!isArray(arr)) return preStr + arr; return preStr + arr.join(joinStr); }
var levels = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
var typePF = false, typeA4 = false; // Colourful sheet
var UsingHigherLvl = "***Using a Higher-Level Spell Slot***. ";
var CantripUpgrade = "***Cantrip Upgrade***. ";
var SpellRitualTag = "\xAE";
var cantripDie = [1,1,1,1,2,2,2,2,2,2,3,3,3,3,3,3,4,4,4,4];
var ProficiencyBonusList = [2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,6,6,6,6];
var Base_spellLevelList = ["Cantrips (0-level)","1st-level","2nd-level","3rd-level","4th-level","5th-level","6th-level","7th-level","8th-level","9th-level","Talents","Disciplines"];
function toSourcePoly(v){
  if (v === null || v === undefined) return String(v);
  var t = typeof v;
  if (t === "string") return JSON.stringify(v);
  if (t === "number" || t === "boolean") return String(v);
  if (t === "function") return v.toString();
  if (v instanceof RegExp) return v.toString();
  if (isArray(v)) { var a=[]; for (var i=0;i<v.length;i++) a.push(toSourcePoly(v[i])); return "["+a.join(",")+"]"; }
  var parts=[]; for (var k in v){ if (Object.prototype.hasOwnProperty.call(v,k)) parts.push(JSON.stringify(k)+":"+toSourcePoly(v[k])); }
  return "({"+parts.join(",")+"})";
}
Object.defineProperty(Object.prototype, "toSource", { value: function(){ return toSourcePoly(this); }, enumerable: false, writable: true, configurable: true });
function newObj(inObj){ return typeof inObj === "string" ? inObj : eval(inObj.toSource()); }
function RequiredSheetVersion(){}
function addAbilityScoreChoicesToFeat(){}
function formatLineList(pre, arr){ return pre + " " + arr.join(", "); }
var classes = { known: {} };
var abil = { Str: 10, Dex: 13, Con: 10, Int: 10, Wis: 13, Cha: 10 };
function What(f){ return abil[f] !== undefined ? abil[f] : ""; }
var CurrentRace = { known: "" };
function displayError(){}
var diacriticsMap = {};
var CurrentSources = { globalExcl: [] };
var ignoreSearchLength = false;
function testSource(key, obj, CSatt, concise) { return !obj; } // `return !obj` matters (Functions1.js:1598)
var fs = require("fs");
function grab(file, name) {
  var src = fs.readFileSync(file, "utf8");
  var start = src.indexOf("function " + name + "(");
  if (start === -1) throw new Error("function " + name + " not found in " + file);
  var end = src.indexOf("\n}", start);
  return src.slice(start, end + 2);
}
eval(fs.readFileSync("MPMB-v14/_variables/ListsSources.js", "utf8"));
eval(fs.readFileSync("MPMB-v14/_variables/ListsRaces.js", "utf8"));
eval(fs.readFileSync("MPMB-v14/_variables/ListsClasses.js", "utf8"));
var SourceList = newObj(Base_SourceList);
var RaceList = newObj(Base_RaceList);
var RaceSubList = newObj(Base_RaceSubList);
var ClassList = newObj(Base_ClassList);
var ClassSubList = newObj(Base_ClassSubList);
var SpellsList = {};
var FeatsList = {};
var BackgroundList = {};
var BackgroundFeatureList = {};
var WeaponsList = {};
var WeaponMasteriesList = { vex: { description: "x" } };
function convert5eFeatureTo2024(iClass, feaObj){ for (var key in feaObj){ var feature = feaObj[key]; if (/^channel divinity: /i.test(feature.name)) { feature.name = feature.name.replace(/^channel divinity: /i, ""); if (!feature.additional) feature.additional = "1 Channel Divinity"; } } }
function AddSubClass(iClass, subclassName, subclassObj, bDoNotConvert){ iClass = iClass.toLowerCase(); subclassName = subclassName.toLowerCase(); if (!ClassList[iClass]) { console.log("FAIL: AddSubClass missing class " + iClass); return; } var suffix = 1, baseScNm = iClass + "-" + subclassName, fullScNm = baseScNm; while (ClassList[iClass].subclasses[1].indexOf(fullScNm) !== -1 || ClassSubList[fullScNm]) { suffix++; fullScNm = baseScNm + "-" + suffix; } ClassList[iClass].subclasses[1].push(fullScNm); if (!bDoNotConvert) convert5eFeatureTo2024(iClass, subclassObj.features); ClassSubList[fullScNm] = subclassObj; return fullScNm; }
function AddFeatureChoice(pObj, cType, cName, cObj, force, bSort) { if (!pObj) return; var aObj = pObj, cNameLC = cName.toLowerCase(); cType = cType ? "extrachoices" : "choices"; if (!pObj[cType]) { if (!force) return; aObj[cType] = []; } if (aObj[cNameLC] && aObj[cNameLC].toSource() == cObj.toSource()) return; var useName = cName, suffix = 1; while (aObj[cType].indexOf(useName) !== -1 || aObj[useName.toLowerCase()]) { suffix += 1; useName = cName + " [" + suffix + "]"; } aObj[cType].push(useName); if (bSort) aObj[cType].sort(); aObj[useName.toLowerCase()] = cObj; }
function AddWarlockInvocation(invocName, invocObj) { if (!invocObj.submenu) { var lvl = invocObj.minlevel ? invocObj.minlevel : 0; if (lvl.toString().length == 1) lvl = " " + lvl; invocObj.submenu = "[Warlock level " + lvl + "+]"; } AddFeatureChoice(ClassList.warlock.features["eldritch invocations"], true, invocName, invocObj); }
eval(grab("MPMB-v14/_functions/FunctionsImport.js", "AddSubRace"));
eval(grab("MPMB-v14/_functions/Functions0.js", "removeDiacritics"));
eval(grab("MPMB-v14/_functions/Functions0.js", "sourceDate"));
eval(grab("MPMB-v14/_functions/Functions1.js", "ParseClass"));
eval(grab("MPMB-v14/_functions/Functions1.js", "ParseRace"));
eval(fs.readFileSync("MPMB-v14/additional-content/pub_20240917_PHB (2).js", "utf8"));
// ---- end of preamble ----

// ---- measurement helpers (all harness names start with h/H_ so they can't clash with WoW.js globals) ----
function hIsPHB(o) { var s = o ? JSON.stringify(o.source || "") : ""; return s.indexOf("PHB24") !== -1 || s.indexOf("SRD24") !== -1; }
function hPick(d, idx) { // an array is level-dependent; past its end the sheet uses the last entry
  if (d === undefined || d === null) return "";
  if (isArray(d)) { var v = d[Math.min(idx, d.length - 1)]; return v === undefined || v === null ? "" : String(v); }
  return String(d);
}
// Text a class feature or feat prints. A selected choice's description REPLACES the parent's, so use the defaultChoice
// if set, otherwise the longest of the parent and every choice (the worst case a player can end up with).
function hPrinted(f, idx) {
  if (!f) return "";
  var own = hPick(f.description, idx);
  if (!isArray(f.choices) || !f.choices.length) return own;
  var useDefault = f.defaultChoice && f[f.defaultChoice];
  var opts = useDefault ? [f.defaultChoice] : f.choices.map(function (c) { return c.toLowerCase(); });
  var worst = useDefault ? "" : own;
  opts.forEach(function (c) { var o = f[c]; if (!o) return; var t = o.description !== undefined ? hPick(o.description, idx) : own; if (t.length > worst.length) worst = t; });
  return worst;
}
function hFeatures20(cls, sub) { // a subclass feature with the same object name replaces the class feature
  var out = {}, k;
  if (cls && cls.features) for (k in cls.features) if (cls.features[k] && (cls.features[k].minlevel || 0) <= 20) out[k] = cls.features[k];
  if (sub && sub.features) for (k in sub.features) if (sub.features[k] && (sub.features[k].minlevel || 0) <= 20) out[k] = sub.features[k];
  return out;
}
function hTotal(cls, sub) { var fe = hFeatures20(cls, sub), t = 0; for (var k in fe) t += hPrinted(fe[k], 19).length; return t; }
function hTrait(r) { return !r || r.trait === undefined ? "" : isArray(r.trait) ? r.trait.join("\r") : String(r.trait); }
function hBudget(keys, okFn, lenFn) { // largest PHB'24/SRD'24 entry; falls back to all keys if none is tagged
  var use = keys.filter(okFn); if (!use.length) use = keys;
  var m = { chars: 0, from: "" };
  use.forEach(function (k) { var n = lenFn(k); if (n > m.chars) m = { chars: n, from: k }; });
  return m;
}
function hNew(list, oldKeys) { return list.filter(function (k) { return oldKeys.indexOf(k) === -1; }); }

// ---- budgets and snapshots, taken BEFORE WoW.js loads ----
var H_BUDGET = {};
["barbarian", "cleric", "druid", "monk", "paladin", "ranger", "rogue", "sorcerer"].forEach(function (b) {
  H_BUDGET[b] = hBudget(ClassList[b].subclasses[1], function (k) { return hIsPHB(ClassSubList[k]); }, function (k) { return hTotal(ClassList[b], ClassSubList[k]); });
});
var H_CLASS_PRE = {}, H_CFEAT_PRE = {};
Object.keys(ClassList).forEach(function (k) {
  H_CLASS_PRE[k] = hTotal(ClassList[k], null);
  H_CFEAT_PRE[k] = {};
  for (var f in ClassList[k].features) H_CFEAT_PRE[k][f] = ClassList[k].features[f].toSource();
});
var H_DERIVED = { "sorcerer-draconic": "sorcerer", "druid-moon": "druid", "ranger-beast master": "ranger" }, H_DERIVED_PRE = {};
for (var hd in H_DERIVED) H_DERIVED_PRE[hd] = hTotal(ClassList[H_DERIVED[hd]], ClassSubList[hd]);
var H_MOON_PRE = {};
for (var hm in ClassSubList["druid-moon"].features) H_MOON_PRE[hm] = ClassSubList["druid-moon"].features[hm].toSource();
var H_FEAT_KEYS = Object.keys(FeatsList);
var H_FEAT_B = hBudget(H_FEAT_KEYS, function (k) { return hIsPHB(FeatsList[k]); }, function (k) { return hPrinted(FeatsList[k], 19).length; });
var H_INV = ClassList.warlock.features["eldritch invocations"], H_INV_KEYS = H_INV.extrachoices.slice();
var H_INV_B = hBudget(H_INV_KEYS, function (k) { return hIsPHB(H_INV[k.toLowerCase()]); }, function (k) { return hPrinted(H_INV[k.toLowerCase()], 19).length; });
var H_MAN = ClassSubList["fighter-battle master"].features["subclassfeature3.1"], H_MAN_KEYS = H_MAN.extrachoices.slice();
var H_MAN_B = hBudget(H_MAN_KEYS, function (k) { return hIsPHB(H_MAN[k.toLowerCase()]); }, function (k) { return hPrinted(H_MAN[k.toLowerCase()], 19).length; });
var H_RACE_KEYS = Object.keys(RaceList);
var H_RACE_B = hBudget(H_RACE_KEYS, function (k) { return hIsPHB(RaceList[k]); }, function (k) { return hTrait(RaceList[k]).length; });
var H_SUBR_KEYS = Object.keys(RaceSubList);
var H_SUBR_B = hBudget(H_SUBR_KEYS.filter(function (k) { return RaceSubList[k].trait !== undefined; }), function (k) { return hIsPHB(RaceSubList[k]); }, function (k) { return hTrait(RaceSubList[k]).length; });

// ---- load WoW.js (working tree, or a git revision) ----
eval(H_REV === "WORKTREE" ? fs.readFileSync("complete/Other/WoW.js", "utf8")
  : H_cp.execSync('git show "' + H_REV + ':complete/Other/WoW.js"', { encoding: "utf8", maxBuffer: 67108864 }));

// ---- rows ----
var H_TARGETS = [ // [subclass key, base class whose PHB'24 subclasses set the budget, PHB'24 subclass it copies or extends]
  ["barbarian-path of the elements", "barbarian", ""],
  ["barbarian-path of the spiritual guardian", "barbarian", ""],
  ["cleric-discipline domain", "cleric", ""],
  ["cleric-shadow domain", "cleric", ""],
  ["paladin-oath of the holy", "paladin", ""],
  ["deathknight-oath of the ebon blade", "paladin", ""],
  ["demonhunter-demon hunter", "ranger", ""],
  ["monk-warrior of mystic brews", "monk", ""],
  ["rogue-swashbuckler", "rogue", ""],
  ["evoker-draconic sorcery", "sorcerer", "sorcerer-draconic"],
  ["druid-moon", "druid", "druid-moon"],
  ["hunter-beast master", "ranger", "ranger-beast master"]
];
var H_WOW_CLASSES = { deathknight: "paladin", demonhunter: "ranger", evoker: "sorcerer", hunter: "ranger", mage: "wizard", priest: "cleric", shaman: "barbarian", warrior: "fighter" };
var H_ROWS = [];
function hRow(group, name, host, chars, b) { H_ROWS.push({ group: group, name: name, host: host, chars: chars, budget: b.chars, from: b.from }); }
H_TARGETS.forEach(function (t) {
  var sub = ClassSubList[t[0]], worst = null;
  if (sub) Object.keys(ClassList).forEach(function (h) {
    var c = ClassList[h];
    if (c.subclasses && c.subclasses[1] && c.subclasses[1].indexOf(t[0]) !== -1) { var n = hTotal(c, sub); if (!worst || n > worst.n) worst = { h: h, n: n }; }
  });
  var b = H_BUDGET[t[1]];
  if (t[2] && H_DERIVED_PRE[t[2]] + 40 > b.chars) b = { chars: H_DERIVED_PRE[t[2]] + 40, from: t[2] + " (PHB original) + 40" };
  hRow("subclass", t[0], worst ? worst.h : "MISSING", worst ? worst.n : -1, b);
});
for (var hc in H_WOW_CLASSES) hRow("class", hc, "", ClassList[hc] ? hTotal(ClassList[hc], null) : -1, { chars: H_CLASS_PRE[H_WOW_CLASSES[hc]], from: H_WOW_CLASSES[hc] });
hNew(Object.keys(FeatsList), H_FEAT_KEYS).forEach(function (k) { hRow("feat", k, "", hPrinted(FeatsList[k], 19).length, H_FEAT_B); });
hNew(H_INV.extrachoices, H_INV_KEYS).forEach(function (k) { hRow("invocation", k, "", hPrinted(H_INV[k.toLowerCase()], 19).length, H_INV_B); });
hNew(H_MAN.extrachoices, H_MAN_KEYS).forEach(function (k) { hRow("maneuver", k, "", hPrinted(H_MAN[k.toLowerCase()], 19).length, H_MAN_B); });
hNew(Object.keys(RaceList), H_RACE_KEYS).forEach(function (k) { hRow("species", k, "", hTrait(RaceList[k]).length, H_RACE_B); });
hNew(Object.keys(RaceSubList), H_SUBR_KEYS).forEach(function (k) { hRow("lineage", k, "", hTrait(RaceSubList[k]).length, H_SUBR_B); });

if (H_MODE === "measure") { console.log("@@JSON@@" + JSON.stringify(H_ROWS)); process.exit(0); }

// ---- --dump: every string the WoW entries put on the sheet (description, choices, extrachoices, notes, header fields) ----
var H_SKIP = { descriptionFull: 1, source: 1, regExpSearch: 1, spellcastingExtra: 1, selection: 1, spells: 1, calcChanges: 1, eval: 1, removeeval: 1, changeeval: 1, prereqeval: 1, usagescalc: 1 };
function hWalk(p, v, out) {
  if (v === undefined || v === null || typeof v === "function" || v instanceof RegExp) return;
  if (typeof v !== "object") { out.push(p + ": " + String(v)); return; }
  if (isArray(v) && v.length && v.every(function (x) { return x === undefined || x === null || typeof x !== "object"; })) {
    var i = 0;
    while (i < v.length) { var j = i; while (j + 1 < v.length && v[j + 1] === v[i]) j++; if (v[i] !== undefined && v[i] !== null && v[i] !== "") out.push(p + "[" + (i + 1) + (j > i ? "-" + (j + 1) : "") + "]: " + String(v[i])); i = j + 1; }
    return;
  }
  for (var k in v) if (Object.prototype.hasOwnProperty.call(v, k) && !H_SKIP[k]) hWalk(p + "." + k, v[k], out);
}
function hDump(title, obj) { var out = []; hWalk("", obj, out); console.log("### " + title); out.forEach(function (l) { console.log(l); }); console.log(""); }
H_TARGETS.forEach(function (t) {
  var s = ClassSubList[t[0]]; if (!s) return;
  if (t[0] === "druid-moon") { for (var f in s.features) if (H_MOON_PRE[f] !== s.features[f].toSource()) hDump("subclass druid-moon / " + f, s.features[f]); }
  else hDump("subclass " + t[0], s.features);
});
for (var hc2 in H_WOW_CLASSES) {
  var hcl = ClassList[hc2]; if (!hcl) continue;
  for (var hf in hcl.features) if (H_CFEAT_PRE[H_WOW_CLASSES[hc2]][hf] !== hcl.features[hf].toSource()) hDump("class " + hc2 + " / " + hf, hcl.features[hf]);
}
hNew(Object.keys(FeatsList), H_FEAT_KEYS).forEach(function (k) { hDump("feat " + k, FeatsList[k]); });
hNew(H_INV.extrachoices, H_INV_KEYS).forEach(function (k) { hDump("invocation " + k, H_INV[k.toLowerCase()]); });
hNew(H_MAN.extrachoices, H_MAN_KEYS).forEach(function (k) { hDump("maneuver " + k, H_MAN[k.toLowerCase()]); });
hNew(Object.keys(RaceList), H_RACE_KEYS).forEach(function (k) { hDump("species " + k, RaceList[k]); });
hNew(Object.keys(RaceSubList), H_SUBR_KEYS).forEach(function (k) { hDump("lineage " + k, RaceSubList[k]); });
process.exit(0);

// ---- table mode ----
function hRunTable() {
  function child(rev) {
    var r = H_cp.spawnSync(process.execPath, [__filename, "--measure", rev], { encoding: "utf8", maxBuffer: 67108864 });
    var i = r.stdout ? r.stdout.indexOf("@@JSON@@") : -1;
    if (r.status !== 0 || i === -1) { console.log("measure " + rev + " failed:\n" + (r.stdout || "") + (r.stderr || "")); return null; }
    return JSON.parse(r.stdout.slice(i + 8));
  }
  var before = child(H_BASE_REV), after = child("WORKTREE");
  if (!after) process.exit(2);
  var bmap = {};
  (before || []).forEach(function (r) { bmap[r.group + "|" + r.name] = r; });
  var fail = 0;
  console.log("| Group | Entry | Host | Before | After | Budget | Budget from | Status |");
  console.log("|---|---|---|---:|---:|---:|---|---|");
  after.forEach(function (r) {
    var b = bmap[r.group + "|" + r.name];
    var ok = r.chars >= 0 && r.budget > 0 && r.chars <= r.budget;
    if (!ok) fail++;
    console.log("| " + [r.group, r.name, r.host, b ? b.chars : "?", r.chars, r.budget, r.from, ok ? "OK" : "OVER"].join(" | ") + " |");
  });
  console.log("");
  console.log(fail === 0 ? "ALL BUDGETS PASSED" : fail + " ENTRY(S) OVER BUDGET");
  process.exit(fail === 0 ? 0 : 1);
}

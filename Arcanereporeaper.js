/*	-WHAT IS THIS?-
	This file adds optional material to "MPMB's Character Record Sheet" found at https://flapkan.com/mpmb/charsheets
	Import this file using the "Add Extra Materials" bookmark.
	-KEEP IN MIND-
	It is recommended to enter the code in a fresh sheet before adding any other information (i.e. before making your character with it).
*/

/*	-INFORMATION-
	Subject:	Background
	Effect:		This script adds the background Arcane Repo Reaper from https://www.dandwiki.com/wiki/Arcane_Repo_Reaper_(5e_Background)
	Date:		2024-11-18 (sheet v13)
*/


var iFileName = "ArcaneRepoReaper.js"; // File name for import

RequiredSheetVersion(13); // Minimum required version of the sheet

SourceList["ARR"] = {
    name: "Arcane Repo Reaper HomeBrew",
    abbreviation: "ARR",
    group: "Homebrew",
    url: "https://www.dandwiki.com/wiki/Arcane_Repo_Reaper_(5e_Background)",
    date: "2023/11/28"
};

BackgroundList["arcane reporeaper"] = {
    regExpSearch: /^(?=.*arcane)(?=.*repo)(?=.*reaper).*$/i,
    name: "Arcane Repo Reaper",
    source: ["ARR", 1],
    skills: ["Investigation", "Arcana"],
    gold: 15,
    equipleft: [
        ["Fine Clothes", 1, 6],
        ["Thieves' Tools", 1, 1],
        ["A small symbol or token of the Arcane Repo Reapers", "", ""]
    ],
    equipright: [
        ["Gaming Set (Dice)", 1, ""]
    ],
    feature: "Arcane Tracking",
    trait: [
        "Meticulous: You pay close attention to details and leave no stone unturned in your search for stolen or misused magical items.",
        "Cautious: You approach situations with caution and always have an escape plan in mind.",
        "Driven: Your sense of purpose drives you to complete your mission, no matter the obstacles in your path.",
        "Observant: You have a keen eye for spotting magical artifacts and subtle magical energies.",
        "Adaptable: You are always ready to adjust your plans on the fly to better suit the situation at hand."
    ],
    ideal: [
        ["Justice", "Justice: You believe in restoring order by returning stolen magical artifacts to their rightful owners. (Lawful)"],
        ["Secrecy", "Secrecy: You understand the need for secrecy and protect the secrets of the Arcane Repo Reapers. (Neutral)"],
        ["Balance", "Balance: You strive to maintain balance between magic and the world. (Neutral)"]
    ],
    bond: [
        "The Guild: Loyal to the Arcane Repo Reapers.",
        "A Missing Artifact: On a quest to recover a significant magical artifact.",
        "A Patron: Close relationship with a wealthy patron."
    ],
    flaw: [
        "Perfectionist: Pressure for flawless tasks leads to self-criticism.",
        "Haunted past: Emotional scars from involvement with the Arcane Repo Reapers.",
        "Gambler's vice: Weakness for gambling."
    ],
    toolProfs: [["Thieves' Tools", ""], ["Gaming Set (Dice)", ""], 2],
    languageProfs : [2], // Two languages of choice
};

BackgroundFeatureList["arcane tracking"] = {
    description : "You can use your knowledge of magical signatures and impressions to locate a specific missing magical item or trace recent magical activities within a limited area.",
    source : ["ARR", 1]
};
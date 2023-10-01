// Assignment 1 | COMP1073 Client-Side JavaScript

/* Variables
-------------------------------------------------- */
// Constants for main button query selectors
const btnNoun1 = document.getElementById('noun1');
const btnVerb = document.getElementById('verb');
const btnAdjective = document.getElementById('adjective');
const btnNoun2 = document.getElementById('noun2');
const btnSetting = document.getElementById('setting');

// Constants for p tag to display query selectors
const displayNoun1 = document.getElementById('choosenNoun1');
const displayVerb = document.getElementById('choosenVerb');
const displayAdjective = document.getElementById('choosenAdjective');
const displayNoun2 = document.getElementById('choosenNoun2');
const displaySetting = document.getElementById('choosenSetting');
const displayStory = document.getElementById('story');

// Variables for pre-defined arrays
// 1. Noun1
const noun1Array = ["The turkey", "Mom", "Dad", "The dog", "My teacher", "The elephant", "The cat"];
// 2. Verb
const verbArray = ["sat on", "ate", "danced with", "saw", "doesn't like", "kissed"];
// 3. Adjective
const adjectiveArray = ["a funny", "a scary", "a goofy", "a slimy", "a barking", "a fat"];
// 4. Noun2
const noun2Array = ["goat", "monkey", "fish", "cow", "frog", "bug", "worm"];
// 5. Setting
const settingArray = ["on the moon", "on the chair", "in my spaghetti", "in my soup", "on the grass", "in my shoes"];

/* Functions
-------------------------------------------------- */
function getRandomElement(item) {
    return item[Math.floor(Math.random() * item.length)];
}

// grab random element from arrays and display below Noun1 button
function noun1_on_click() {
    const activeNoun1 = getRandomElement(noun1Array);
    displayNoun1.innerText = activeNoun1;
}

// grab random element from arrays and display below Verb button
function verb_on_click() {
    const activeVerb = getRandomElement(verbArray);
    displayVerb.innerText = activeVerb;
}

// grab random element from arrays and display below Adjective button
function adjective_on_click() {
    const activeAdjective = getRandomElement(adjectiveArray);
    displayAdjective.innerText = activeAdjective;
}

// grab random element from arrays and display below Noun2 button
function noun2_on_click() {
    const activeNoun2 = getRandomElement(noun2Array);
    displayNoun2.innerText = activeNoun2;
}

// grab random element from arrays and display below Setting button
function setting_on_click() {
    const activeSetting = getRandomElement(settingArray);
    displaySetting.innerText = activeSetting;
}

// concatenate the user story and display
function playback_on_click() {
    const story = `${displayNoun1.innerText} ${displayVerb.innerText} ${displayAdjective.innerText} ${displayNoun2.innerText} ${displaySetting.innerText}`;
    displayStory.innerText = story;
}

// grabbing random element from arrays, concatenate and display
function random_on_click() {
    const story = `${getRandomElement(noun1Array)} ${getRandomElement(verbArray)} ${getRandomElement(adjectiveArray)} ${getRandomElement(noun2Array)} ${getRandomElement(settingArray)}`;
    displayStory.innerText = story;
}

/* Event Listeners
-------------------------------------------------- */
btnNoun1.addEventListener('click', noun1_on_click);
btnVerb.addEventListener('click', verb_on_click);
btnAdjective.addEventListener('click', adjective_on_click);
btnNoun2.addEventListener('click', noun2_on_click);
btnSetting.addEventListener('click', setting_on_click);
document.getElementById('playback').addEventListener('click', playback_on_click);
document.getElementById('random').addEventListener('click', random_on_click);

/* Additional Variables
-------------------------------------------------- */
const studentIdDisplay = document.getElementById('studentId');

/* Additional Functions
-------------------------------------------------- */
function toggleStudentId() {
    if (studentIdDisplay.innerText === "") {
        studentIdDisplay.innerText = "200547547 / Brandon Hann";
        document.getElementById('showStudentId').innerText = "Hide Student ID / Name";
    } else {
        studentIdDisplay.innerText = "";
        document.getElementById('showStudentId').innerText = "Show Student ID / Name";
    }
}

/* Additional Event Listeners
-------------------------------------------------- */
document.getElementById('showStudentId').addEventListener('click', toggleStudentId);
document.addEventListener('DOMContentLoaded');
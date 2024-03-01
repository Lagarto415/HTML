const currentDate = new Date();

const year = currentDate.getFullYear();
const month = currentDate.getMonth() + 1;
const day = currentDate.getDate();
const hours = currentDate.getHours();
const minutes = currentDate.getMinutes();

const formattedDateTime = `${hours}:${minutes} ${day}-${month}-${year}`;

let current_minerals = 50;
let current_water = 0;
let current_gold = 0;
let current_citizens = 1;

let minerals_level = 0;
let water_level = 0;
let gold_level = 0;

let habitats = 1;

const AllEvents = ["Astoroid Impact", "Earthquake", "Flood", "Friendly Alien Encouter", "Pirates", "Ship Crash"];

let eventcounter = 0;

function addLogEntry(event) {
    const ol = document.getElementById("log");
    const li = document.createElement("li");

    li.textContent = (formattedDateTime + " - " + event);

    ol.appendChild(li);
}

function gameloop() {
    current_minerals += minerals_level;
    current_water += water_level;
    current_gold += gold_level;

    if (eventcounter == 50) {
        eventgeneration();
        eventcounter = 0;
    } else {
        eventcounter++;
    }
    saveGameState();
}

function update_hud() {
    const mineral_element = document.getElementById("minerals");
    const water_element = document.getElementById("water");
    const gold_element = document.getElementById("gold");
    const citizen_element = document.getElementById("citizens");

    const habitatsobj = document.getElementById("habitats");
    const minerallevelobj = document.getElementById("mineralmine");
    const waterlevelobj = document.getElementById("wasserpumpe");
    const goldlevelobj = document.getElementById("goldmine");

    mineral_element.textContent = current_minerals;
    water_element.textContent = current_water;
    gold_element.textContent = current_gold;
    citizen_element.textContent = current_citizens + " / " + habitats * 4;
    habitatsobj.textContent = habitats;
    minerallevelobj.textContent = minerals_level;
    waterlevelobj.textContent = water_level;
    goldlevelobj.textContent = gold_level;
}

function eventgeneration() {
    let randomEvent = Math.floor(Math.random() * AllEvents.length);
    addLogEntry(AllEvents[randomEvent]);
}

function saveGameState() {
    const gameState = {
        current_minerals,
        current_water,
        current_gold,
        current_citizens,
        minerals_level,
        water_level,
        gold_level,
        habitats
    };
    document.cookie = `gameState=${JSON.stringify(gameState)};expires=Thu, 01 Jan 2100 00:00:00 UTC;path=/`;
}

function loadGameState() {
    const cookieData = document.cookie.split(';').find(cookie => cookie.trim().startsWith('gameState='));
    if (cookieData) {
        const gameStateString = cookieData.split('=')[1];
        const gameState = JSON.parse(gameStateString);
        current_minerals = gameState.current_minerals;
        current_water = gameState.current_water;
        current_gold = gameState.current_gold;
        current_citizens = gameState.current_citizens;
        minerals_level = gameState.minerals_level;
        water_level = gameState.water_level;
        gold_level = gameState.gold_level;
        habitats = gameState.habitats;
        update_hud(); // Update HUD after loading game state
    }
}

window.addEventListener('load', () => {
    loadGameState();
});

function upgrade(object) {
    if (object == "minerals") {

        if (current_minerals >= 50) {
            current_minerals -= 50;
            minerals_level++;
            console.log("minerals upgraded");
        }
        else {
            console.log("Not enough minerals");
        }

    } else if (object == "water") {
        console.log("water upgraded");
    } else if (object == "gold") {
        console.log("gold upgraded");
    } else if (object == "habitats") {
        console.log("habitats upgraded");
    } else {
        console.log("error in upgrade function: Not a valid object");
    }
}

function resetGame() {
    // Delete the save game cookie
    document.cookie = 'gameState=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';

    // Reset all game variables to their initial state
    current_minerals = 50;
    current_water = 0;
    current_gold = 0;
    current_citizens = 1;
    minerals_level = 0;
    water_level = 0;
    gold_level = 0;
    habitats = 1;
}


setInterval(gameloop, 3000);
setInterval(update_hud, 500);

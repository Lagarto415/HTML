let currentDate = new Date();

let year = currentDate.getFullYear();
let month = currentDate.getMonth() + 1;
let day = currentDate.getDate();
let hours = currentDate.getHours();
let minutes = currentDate.getMinutes();

let formattedDateTime = `${hours}:${minutes} ${day}.${month}.${year}`;

let current_minerals = 50;
let current_water = 0;
let current_gold = 0;
let current_citizens = 1;

let minerals_level = 0;
let water_level = 0;
let gold_level = 0;

let habitats = 1;

let mineral_upgradeprice = [50,100,200,350,500,750,1100,1500,2000,2500,3000,3500,4000,4500,5000,5500,6000,6500,7000,7500,8000,8500,9000,9500,10000];
let water_upgradeprice = [100,250,500,1000,3000,10000];
let gold_upgradeprice = [1000,5000,10000,50000];
let habitat_price = [200, 800, 1200, 1800];

let AllEvents = [];

function gameloop() {
    current_minerals += minerals_level;
    current_water += water_level;
    current_gold += gold_level;

    if (Math.random() > 0.990) {
        eventgeneration();
    }

    document.addEventListener('keydown', function(event) {
        if (event.key == "r") {
            current_minerals += 1000;
        }
    });

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

    mineral_element.textContent = current_minerals + " Mineralien";
    water_element.textContent = current_water + " Wasser";
    gold_element.textContent = current_gold + " Gold";
    citizen_element.textContent = current_citizens + " / " + habitats * 4;
    habitatsobj.textContent = habitats;
    minerallevelobj.textContent = minerals_level;
    waterlevelobj.textContent = water_level;

    document.getElementById("price_habitats").textContent = habitat_price[habitats-1];
    document.getElementById("price_minerals").textContent = mineral_upgradeprice[minerals_level];
    document.getElementById("price_water").textContent = water_upgradeprice[water_level];
}

function eventgeneration() {
    if (AllEvents.length === 0) {
        console.error("No events loaded. Ensure events are fetched before generating.");
        return;
    }

    const randomEventIndex = Math.floor(Math.random() * AllEvents.length);
    eventhandler(randomEventIndex);
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
    
    // Fetch JSON data for events
    fetchEventsData().then(events => {
        AllEvents = events;
        console.log('Events fetched successfully:', AllEvents);
        eventgeneration(); // Call eventgeneration once events are fetched
    }).catch(error => {
        console.error('Error fetching events:', error);
    });
}

async function fetchEventsData() {
    try {
        const response = await fetch('EventJson.json');
        if (!response.ok) {
            throw new Error('Failed to fetch events');
        }
        const eventData = await response.json();
        return eventData.AllEvents;
    } catch (error) {
        throw new Error('Error fetching events:', error);
    }
}

window.addEventListener('load', () => {
    loadGameState();
});

function pauseInterval() {
    clearInterval(intervalId); // Clears the interval
}

function resumeInterval() {
    intervalId = setInterval(gameloop, 1000); // Restarts the interval
}

function upgrade(object) {
    if (object == "minerals") {
        if (current_minerals >= mineral_upgradeprice[minerals_level]) {
            current_minerals -= mineral_upgradeprice[minerals_level];
            minerals_level++;
            income("minerals", -mineral_upgradeprice[minerals_level-1]);
            console.log("minerals upgraded");
        }
        else {
            console.log("Not enough minerals");
        }
    } else if (object == "water") {
        if (current_minerals >= water_upgradeprice[water_level]) {
            current_minerals -= water_upgradeprice[water_level];
            water_level++;    
            income("water", -water_upgradeprice[water_level-1]);
            console.log("water upgraded");
        }
        else {
            console.log("Not enough minerals");
        }
    } else if (object == "gold") {
        if (current_minerals >= gold_upgradeprice[gold_level]) {
            current_minerals -= gold_upgradeprice[gold_level];
            gold_level++;
            income("gold", -gold_upgradeprice[gold_level-1]);
            console.log("gold upgraded");
        }
        else {
            console.log("Not enough minerals");
        }
    } else if (object == "habitats") {
        if (current_minerals >= habitat_price[habitats-1]) {
            current_minerals -= habitat_price[habitats-1];
            habitats++;
            income("habitats", -habitat_price[habitats-2]);
            console.log("habitats upgraded");
        }
        else {
            console.log("Not enough minerals");
        }
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

function buildmenu(action) {
    if (action == "open") {
        document.getElementById("buildmenu").style.visibility = "visible";

        document.getElementById("build_button").style.visibility = "hidden";
        document.getElementById("expedition_button").style.visibility = "hidden";
        document.getElementById("settings_button").style.visibility = "hidden";
        pauseInterval();
    }
    else if (action == "close") {
        document.getElementById("buildmenu").style.visibility = "hidden";
        document.getElementById("build_button").style.visibility = "visible";
        document.getElementById("expedition_button").style.visibility = "visible";
        document.getElementById("settings_button").style.visibility = "visible";
        update_hud();
        resumeInterval();
    }
    else{
        console.log("error in buildmenu function: Not a valid action");
    }
}

function eventmenu(action){
    if (action == "open") {
        pauseInterval();
        document.getElementById("eventpopup").style.visibility = "visible";

        document.getElementById("build_button").style.visibility = "hidden";
        document.getElementById("expedition_button").style.visibility = "hidden";
        document.getElementById("settings_button").style.visibility = "hidden";
    }
    else if (action == "close") {
        document.getElementById("eventpopup").style.visibility = "hidden";
        document.getElementById("build_button").style.visibility = "visible";
        document.getElementById("expedition_button").style.visibility = "visible";
        document.getElementById("settings_button").style.visibility = "visible";
        update_hud();
        resumeInterval();
    }
    else{
        console.log("error in eventmenu function: Not a valid action");
    }
}

async function income(what, how_much) {
    let obj = document.getElementById("mineral_income");
    if (what == "minerals") {

        if (how_much < 0) {
            obj.style.color = "red";
        } 
        else if (how_much == 0) {
            how_much = "";
        }
        else {
            obj.style.color = "green";
        }
        obj.textContent = how_much;
        await wait(2000); // Wait for 3000 milliseconds
        obj.textContent = "";
    } else if (what == "water") {
        if (how_much < 0) {
            obj.style.color = "red";
        } else {
            obj.style.color = "green";
        }
        obj.textContent = how_much;
        await wait(2000); // Wait for 3000 milliseconds
        obj.textContent = "";
    } else if (what == "gold") {
        if (how_much < 0) {
            obj.style.color = "red";
        }
        else {
            obj.style.color = "green";
        }
        obj.textContent = how_much;
        await wait(2000); // Wait for 3000 milliseconds
        obj.textContent = "";
    } else if (what == "habitats") {
        if (how_much < 0) {
            obj.style.color = "red";
        }
        else {
            obj.style.color = "green";
        }
        obj.textContent = how_much;
        await wait(2000); // Wait for 3000 milliseconds
        obj.textContent = "";
    } else {
        console.log("error in income function: Not a valid income type");
    }
}

function wait(time) {
    return new Promise(resolve => setTimeout(resolve, time));
}

function eventhandler(event) {
    const selectedEvent = AllEvents[event];
    console.log('Event:', selectedEvent.name);

    if (selectedEvent.options.length >= 2) {
        console.log('Option 1:', selectedEvent.options[0].optionName);
        console.log('Option 2:', selectedEvent.options[1].optionName);

        eventmenu('open');

        const eventnameobj = document.getElementById('eventname');
        const eventdescriptionobj = document.getElementById('event_description')

        const option1_button = document.getElementById('option1_button');
        const option2_button = document.getElementById('option2_button');
        
        const option1_text = document.getElementById('event_optiontext1');
        const option2_text = document.getElementById('event_optiontext2');


        eventnameobj.innerHTML = selectedEvent.name;
        eventdescriptionobj.innerHTML = selectedEvent.description;
        option1_text.innerHTML = ("Option1: "+ selectedEvent.options[0].optionName);
        option2_text.innerHTML = ("Option2: "+ selectedEvent.options[1].optionName);

        option1_button.addEventListener('click', function() {
            executeEffect(selectedEvent.options[0].effect);    
            eventmenu('close'); 
        });
        option2_button.addEventListener('click', function() {
            executeEffect(selectedEvent.options[1].effect);  
            eventmenu('close');   
        });

        // Assuming the player chooses Option 1
    } else {
        executeEffect(selectedEvent.options[0].effect);     
    }
}


async function executeEffect(effect) {
    switch (effect) {
        case "negotiate":
            console.log("Negotiate for peace effect");
            break;
        case "defend":
            console.log("Defend village effect");
            break;
        case "strengthen":
            console.log("Strengthen buildings effect");
            break;
        case "evacuate":
            console.log("Evacuate effect");
            break;
        case "efficientStorage":
            console.log("Invest in more efficient water storage effect");
            break;
        case "rationWater":
            console.log("Ration water among the citizens effect");
            break;
        case "hospital":
            console.log("Invest in a hospital effect");
            break;
        case "sendDesert":
            console.log("Send infected citizens into the desert effect");
            break;
        case "trade":
            console.log("Trade resources for each other effect");
            break;
        case "turnOff":
            console.log("Turn off all electronics effect");
            break;
        case "buildShield":
            console.log("Build a temporary shield effect");
            break;
        case "calm":
            console.log("Try to calm the citizens effect");
            break;
        case "giveWater":
            console.log("Give them more water, if they calm down effect");
            break;
        case "huntGold":
            console.log("Hunt it for gold effect");
            break;
        case "tame":
            console.log("Tame it (can get scared in both cases) effect");
            break;
        case "investFestival":
            console.log("Invest in a big Festival effect");
            break;
        case "goBackWork":
            console.log("Go back to work! effect");
            break;
        case "upgradeGold":
            console.log("Upgrade facilities for gold effect");
            break;
        case "sendDesertThief":
            console.log("Send him into the desert effect");
            break;
        case "payGold":
            console.log("Make him pay for it (+gold) effect");
            break;
        case "leaveBuilding":
            console.log("Leave the building alone effect");
            break;
        case "removePlants":
            console.log("Try to remove the plants effect");
            break;
        default:
            console.log("Invalid effect");
    }
}

let intervalId = setInterval(gameloop, 1000);
setInterval(update_hud, 100);

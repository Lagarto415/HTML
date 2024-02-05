const input = document.getElementById("input");
let points = document.getElementById("points");
let current_pts = 0;
let all_countries = ["Albania","Andorra","Austria","Belarus","Belgium","Bosnia and Herzegovina","Bulgaria","Croatia","Cyprus","Czech Republic","Denmark","Estonia","Finland","France","Germany",
"Greece","Hungary","Iceland","Ireland","Italy","Kosovo","Latvia","Liechtenstein","Lithuania","Luxembourg","Malta","Moldova","Monaco","Montenegro","Netherlands","North Macedonia","Norway","Poland","Portugal",
"Romania","Russia","San Marino","Serbia","Slovakia","Slovenia","Spain","Sweden","Switzerland","Turkey","Ukraine","United Kingdom","Vatican City"]
let countryid = ["AL","AD","AT","BY","BE","BA","BG","HR","CY","CZ","DK","EE","FI","FR","DE","GR","HU","IS","IE","IT","XK","LV","LI","LT","LU","","MD","","ME","NL","MK","NO","PL",
"PT","RO","","","RS","SK","SI","ES","SE","CH","TR","UA","GB",""]
let total = countryid.length;
let guessed = []
let ctemp = all_countries
let timer_started = false

function check() {
    if (current_pts < total) {
        let matched = false;  // Variable to check if a match is found

        for (let i = all_countries.length - 1; i >= 0; i--) {
            if (input && input.value !== undefined && input.value !== null) {
                const formattedInput = input.value.trim().toLowerCase().replace(/\s+/g, "");
                const formattedCountry = ctemp[i] ? ctemp[i].replace(/\s+/g, "").toLowerCase() : "";

                if (formattedInput === formattedCountry) {
                    if (timer_started == false) {
                        timer_started = true;
                        startTimer();
                    }
                    guessed.push(countryid[i])
                    input.value = "";
                    console.log(countryid[i]);
                    console.log(ctemp[i]);

                    document.getElementById("timer").classList.add("active");
                    setTimeout(function () {
                        document.getElementById("timer").classList.remove("active");
                    }, 200);

                    try {
                        document.getElementById(countryid[i]).classList.toggle("active");
                    } catch {
                        guessed.push(countryid[i]);
                    }

                    ctemp.splice(i, 1);
                    countryid.splice(i, 1);
                    current_pts++;
                    points.innerHTML = `${current_pts} / ${total}`;
                    matched = true;  // Set matched to true if a match is found
                    break;
                }
            }
        }

        // Stop the timer only if a match is found
        if (matched && current_pts === total) {
            stopTimer();
        }
    }
}




let timer;
let minutes = 0;
let seconds = 0;
let stopwatchTime;  // Variable to store the current time when the timer is stopped

function startTimer() {
    timer = setInterval(function() {
        seconds++;
        if (seconds === 60) {
            seconds = 0;
            minutes++;
        }
        updateTimerDisplay();
    }, 1000);
}

function stopTimer() {
    console.log("Timer stopped");
    clearInterval(timer);
    stopwatchTime = { minutes, seconds };  // Store the current time
}

function resetTimer() {
    clearInterval(timer);
    stopwatchTime = { minutes: 0, seconds: 0 };  // Reset the stopwatchTime
    minutes = 0;
    seconds = 0;
    updateTimerDisplay();
}

function updateTimerDisplay() {
    const formattedMinutes = minutes < 10 ? "0" + minutes : minutes;
    const formattedSeconds = seconds < 10 ? "0" + seconds : seconds;
    document.getElementById("timer").innerHTML = formattedMinutes + ":" + formattedSeconds;
}

function reset() {
    resetTimer();
    timer_started = false;
    ctemp = ["Albania","Andorra","Austria","Belarus","Belgium","Bosnia and Herzegovina","Bulgaria","Croatia","Cyprus","Czech Republic","Denmark","Estonia","Finland","France","Germany",
    "Greece","Hungary","Iceland","Ireland","Italy","Kosovo","Latvia","Liechtenstein","Lithuania","Luxembourg","Malta","Moldova","Monaco","Montenegro","Netherlands","North Macedonia","Norway","Poland","Portugal",
    "Romania","Russia","San Marino","Serbia","Slovakia","Slovenia","Spain","Sweden","Switzerland","Turkey","Ukraine","United Kingdom","Vatican City"];
    current_pts = 0;
    points.innerHTML = `${current_pts} / ${total}`;
    countryid = ["AL","AD","AT","BY","BE","BA","BG","HR","CY","CZ","DK","EE","FI","FR","DE","GR","HU","IS","IE","IT","XK","LV","LI","LT","LU","","MD","","ME","NL","MK","NO","PL",
    "PT","RO","","","RS","SK","SI","ES","SE","CH","TR","UA","GB",""];
    guessed.forEach(country => {
        const element = document.getElementById(country);
        if (element) {
            element.classList.remove("active");
        }
    });
    guessed = [];
}

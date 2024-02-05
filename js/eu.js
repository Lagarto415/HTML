const input = document.getElementById("input");
let points = document.getElementById("points");
let current_pts = 0;
let all_countries = ["Albania","Andorra","Austria","Belarus","Belgium","Bosnia and Herzegovina","Bulgaria","Croatia","Cyprus","Czech Republic","Denmark","Estonia","Finland","France","Germany",
"Greece","Hungary","Iceland","Ireland","Italy","Kosovo","Latvia","Liechtenstein","Lithuania","Luxembourg","Malta","Moldova","Monaco","Montenegro","Netherlands","North Macedonia","Norway","Poland","Portugal",
"Romania","Russia","San Marino","Serbia","Slovakia","Slovenia","Spain","Sweden","Switzerland","Turkey","Ukraine","United Kingdom","Vatican City"]
let countryid = ["AL","AD","AT","BY","BE","BA","BG","HR","CY","CZ","DK","EE","FI","FR","DE","GR","HU","IS","IE","IT","XK","LV","LI","LT","LU","","MD","","ME","NL","MK","NO","PL",
"PT","RO","","","RS","SK","SI","ES","SE","CH","TR","UA","GB",""]
const total = countryid.length;
let guessed = []
let ctemp = all_countries

function check() {
    if (current_pts < total) {
        for (let i = all_countries.length - 1; i >= 0; i--) {
            if (input.value.replace(/\s+/g, "").toLowerCase() === ctemp[i].replace(/\s+/g, "").toLowerCase()) {
                input.value = "";
                console.log(countryid[i]);
                console.log(ctemp[i]);
                try {
                    document.getElementById(countryid[i]).classList.toggle("active");
                } catch {
                    guessed.push(countryid[i]);
                    ctemp.splice(i, 1);
                    countryid.splice(i, 1);
                    current_pts++;
                    points.innerHTML = `${current_pts} / ${total}`;
                    break; // Exit the loop if a match is found 
                }
                guessed.push(countryid[i]);
                ctemp.splice(i, 1);
                countryid.splice(i, 1);
                current_pts++;
                points.innerHTML = `${current_pts} / ${total}`;
                break; // Exit the loop if a match is found
            }
        }
    }
}


function reset() {
    ctemp = ["Albania","Andorra","Austria","Belarus","Belgium","Bosnia and Herzegovina","Bulgaria","Croatia","Cyprus","Czech Republic","Denmark","Estonia","Finland","France","Germany","Greece","Hungary","Iceland","Ireland","Italy","Kosovo","Latvia","Liechtenstein","Lithuania","Luxembourg","Malta","Moldova","Monaco","Montenegro","Netherlands","North Macedonia","Norway","Poland","Portugal","Romania","Russia","San Marino","Serbia","Slovakia","Slovenia","Spain","Sweden","Switzerland","Turkey","Ukraine","United Kingdom","Vatican City"];
    current_pts = 0;
    points.innerHTML = `${current_pts} / ${total}`;
    countryid = ["AL","AD","AT","BY","BE","BA","BG","HR","CY","CZ","DK","EE","FI","FR","DE","GR","HU","IS","IE","IT","XK","LV","LI","LT","LU","","MD","","ME","NL","MK","NO","PL",
    "PT","RO","","","RS","SK","SI","ES","SE","CH","TR","UA","GB",""]

    // Remove "active" class from elements that were guessed
    guessed.forEach(country => {
        const element = document.getElementById(country);
        if (element) {
            element.classList.remove("active");
        }
    });

    // Clear the guessed array
    guessed = [];
}
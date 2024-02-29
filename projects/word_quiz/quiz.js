/*
1.  Zufällige Abkürzung aus abk anzeigen
2.  Input mit gleichstelligen Ausg vergleichen (no case sensetive or space)
3.  Entweder Richtig oder Falsch anzeigen
(4.) Elemente hinzufügen
(5.) 
*/
// Define your arrays initially
let Abk = [];
let Ausg = [];
const abkobj = document.getElementById('abk');
const ausgobj = document.getElementById('ausg');
const tfobj = document.getElementById('tf');
const itemAnchor = document.querySelector('.item a');
let x = 0;
let a = 0;


function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function reroll() {
    tfobj.innerHTML = '?';
    ausgobj.value = '';
    while (a == x) {
        a = getRandomNumber(0, (Abk.length - 1));
    }
    x = a;
    abkobj.value = Abk[x];
    itemAnchor.style.backgroundColor = 'var(--bg)';
}

function check() {
    let inp = ausgobj.value.toLowerCase().replace(/[\s-]/g, '');
    let check = Ausg[x].toLowerCase().replace(/[\s-]/g, '');

    if (inp == check) {
        dk();
        tfobj.innerHTML = 'TRUE';
        itemAnchor.style.backgroundColor = 'var(--rd)';
        itemAnchor.style.transition = '0.5s';
    } else {
        tfobj.innerHTML = 'FALSE';
    }
}

function dk() {
    ausgobj.value = Ausg[x];
}

// Fetch the data from the JSON file
fetch('../../main/json/data.json')
    .then(response => {
        if (!response.ok) {
            throw new Error(`Failed to fetch words.json: ${response.status} ${response.statusText}`);
        }
        return response.json(); // Parses the JSON response into a JavaScript object
    })
    .then(data => {
        // Extract Abk and Ausg arrays from the fetched data
        Abk = data.words.map(entry => entry.Abk);
        Ausg = data.words.map(entry => entry.Ausg);
    })
    .catch(error => {
        console.error('Error fetching or parsing words.json:', error);
    });

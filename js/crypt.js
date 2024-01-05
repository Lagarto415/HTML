const moveobj = document.getElementById('move');
const wordobj = document.getElementById('word');
const finalobj = document.getElementById('final');

function calc (){
    raw = wordobj.value;
    raw = raw.toUpperCase();
    const mov = parseInt(moveobj.value);
    var x = 0;
    var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var fullAlphabet = alphabet + alphabet + alphabet;
    let fin = "";
    var temp = '';

    while (x<raw.length){
        temp = raw.charCodeAt(x) - 65
        console.log(temp+mov)
        fin += fullAlphabet.charAt(temp+mov);
        x++;
    }
    finalobj.innerHTML = fin;
}

function decode(){
    raw = wordobj.value;
    const mov = parseInt(moveobj.value);
    var x = 0;
    var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var fullAlphabet = alphabet + alphabet + alphabet;
    let fin = "";
    var temp = '';

    while (x<raw.length){
        temp = raw.charCodeAt(x) - 65
        console.log(temp+mov)
        fin += fullAlphabet.charAt(temp-mov+26);
        x++;
    }
    finalobj.innerHTML = fin;
}
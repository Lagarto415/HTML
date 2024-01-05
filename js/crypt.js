const moveobj = document.getElementById('move');
const wordobj = document.getElementById('word');
const finalobj = document.getElementById('final');

function encode (){
    raw = wordobj.value;
    const mov = parseInt(moveobj.value);
    var x = 0;
    var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var alphabets = "abcdefghijklmnopqrstuvwxyz";
    var fullAlphabet = alphabet + alphabet + alphabet;
    var fullAlphabets = alphabets + alphabets + alphabets;
    let fin = "";
    var temp = '';

    while (x < raw.length) {
        if (65 <= raw.charCodeAt(x) && raw.charCodeAt(x) <= 90) {
            temp = raw.charCodeAt(x) - 65;
            fin += fullAlphabet.charAt(temp + mov);
            x++;
        }
        if (97 <= raw.charCodeAt(x) && raw.charCodeAt(x) <= 122) {
            temp = raw.charCodeAt(x) - 97;
            fin += fullAlphabets.charAt(temp + mov);
            x++;
        }
        if(raw.charCodeAt(x) == 32){
            fin += " ";
            x++;
        }
    }
    
    finalobj.innerHTML = fin;
}

function decode(){
    raw = wordobj.value;
    const mov = parseInt(moveobj.value);
    var x = 0;
    var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var alphabets = "abcdefghijklmnopqrstuvwxyz";
    var fullAlphabet = alphabet + alphabet + alphabet;
    var fullAlphabets = alphabets + alphabets + alphabets;
    let fin = "";
    var temp = '';

    while (x < raw.length) {
        if (65 <= raw.charCodeAt(x) && raw.charCodeAt(x) <= 90) {
            temp = raw.charCodeAt(x) - 65;
            fin += fullAlphabet.charAt(temp - mov + 26);
            x++;
        }
        if (97 <= raw.charCodeAt(x) && raw.charCodeAt(x) <= 122) {
            temp = raw.charCodeAt(x) - 97;
            fin += fullAlphabets.charAt(temp - mov + 26);
            x++;
        }
        if(raw.charCodeAt(x) == 32){
            fin += " ";
            x++;
        }
    }
    finalobj.innerHTML = fin;
}
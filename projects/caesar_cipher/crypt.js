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

function copyToClipboard() {
    if (finalobj) {
        navigator.clipboard.writeText(finalobj.innerHTML)
          .then(() => {
            showNotification('COPIED');
          })
          .catch(err => {
            console.error('Unable to copy text to clipboard', err);
          });
      } else {
        console.error('Element with id "finalobj" not found.');
      }
  }

function showNotification(message) {
    var notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
  
    document.body.appendChild(notification);
  
    setTimeout(function() {
      document.body.removeChild(notification);
    }, 1000);
  }
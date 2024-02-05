const redbutton = document.getElementById('red');
const yellowbutton = document.getElementById('yellow');
const greenbutton = document.getElementById('green');

var redLightOn = false
var yellowLightOn = false
var greenLightOn = false

alert("Only Press the lights when Arduino is conected! \n Otherwise the Site will crash, while trying to connect to the Arduino")

function changecolor(color){
    if(color == 'red'){
        console.log(color);
        if(redbutton.style.backgroundColor == 'var(--red)'){
            redbutton.style.backgroundColor = 'var(--rd)';
            redbutton.style.color = 'var(--font)';
        }
        else{
            redbutton.style.backgroundColor = 'var(--red)';
            redbutton.style.color = 'white';
        }
    }
    if(color == 'yellow'){
        console.log(color);
        if(yellowbutton.style.backgroundColor == 'var(--yellow)'){
            yellowbutton.style.backgroundColor = 'var(--rd)';
            yellowbutton.style.color = 'var(--font)';
        }
        else{
            yellowbutton.style.backgroundColor = 'var(--yellow)';
            yellowbutton.style.color = 'black';
        }
    }
    if(color == 'green'){
        console.log(color);
        if(greenbutton.style.backgroundColor == 'var(--green)'){
            greenbutton.style.backgroundColor = 'var(--rd)';
            greenbutton.style.color = 'var(--font)';
        }
        else{
            greenbutton.style.backgroundColor = 'var(--green)';
            greenbutton.style.color = 'white';
        }
        
    }
}

 
        function changeColor(event){
            var target = event.target;
            target.classList.toggle(target.id)
        }
       
        function toggleRedLight(event) {
            var request = new XMLHttpRequest();
            try { // try-catch ist für das Fehler-Handling. Falls im try-statement ein fehler auftritt, springt die Funktion in das catch-statement
                request.open('GET', `http://192.168.0.102/led1${redLightOn ? 'off' : 'on'}`, false);
                request.send(null);
            } catch (error) {
                console.log(error)
            }
        changeColor(event)
        changecolor('red');
        redLightOn = !redLightOn;
        }
 
        function toggleYellowLight(event) {
            var request = new XMLHttpRequest();
            try {
                request.open('GET', `http://192.168.0.102/led2${yellowLightOn ? 'off' : 'on'}`, false);
                request.send(null); 
            } catch (error) {
                console.log(error)
            }
        changeColor(event)
        changecolor('yellow');
        yellowLightOn = !yellowLightOn;
        }
 
        function toggleGreenLight(event) {
            var request = new XMLHttpRequest();
            try {
                request.open('GET', `http://192.168.0.102/led3${greenLightOn ? 'off' : 'on'}`, false);
                request.send(null);
            } catch (error) {
                console.log(error)
            }
        changeColor(event)
        changecolor('green');
        greenLightOn = !greenLightOn;
        }


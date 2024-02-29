function change(what, how){
    document.getElementById(what).innerHTML = how;
}

function test(){
    alert("WORKED!");
}

function submitForm() {
    var userInput = document.getElementById("inputText").value;
    change('text1',userInput);
}
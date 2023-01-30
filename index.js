let myScreen = document.getElementById("screen");

function display(lol){
    myScreen.value+=lol;
}


function Calculate(){
    try{
        myScreen.value = eval (myScreen.value);
    }
    catch(mistake)
    {alert("invalid numbers")}
}

function Clear() {
    myScreen.value="";
}

function Del(){
    myScreen.value = myScreen.value.slice (0,-1);
}


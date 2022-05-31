let outputScreen = document.getElementById("output-screen");
function display(num){
    outputScreen.value += num;
};

function calculator () {
    try {
        outputScreen.value = eval(outputScreen.value);
    }
    catch(err){
        alert("invalid")
    }
}

function bersihkan () {
    outputScreen.value = "";
}

function dell () {
    outputScreen.value = outputScreen.value.slice(0, -1)
}
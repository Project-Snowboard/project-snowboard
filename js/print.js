var printHere = document.getElementById("printer");
var newArray = [];

function getItBack() {
    newArray = JSON.parse(localStorage.getItem('info'))
    //  results = newArray;
    console.log('this', newArray);
}


function printResults() {
    console.log("results", newArray);
    printHere.innerHTML = newArray;
    return newArray;
}

getItBack();
printResults();


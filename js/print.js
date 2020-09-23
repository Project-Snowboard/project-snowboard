var printHere = document.getElementById("printer");
var newArray = [];

console.log("test", newArray.join('.'));

function getItBack() {
    newArray = JSON.parse(localStorage.getItem('info'))
}


function printResults() {
    printHere.innerHTML = newArray.join('.');
    return newArray;
} 

getItBack();
printResults();


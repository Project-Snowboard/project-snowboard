// global variable to print outputted results 
var results = [];
var q1_values = ["80lbs", "80_120lbs", "100_130lbs", "110_140lbs",
    "125_155lbs", "135_165lbs", "145_170lbs", "160_190lbs", "175_205lbs", "185_215uplbs"];
var q1_results = ["Look for a board between 132-137cm", "Look for a board between 135-140cm", "Look for a board between 138-143cm", "Look for a board between 142-147cm", "Look for a board between 145-150cm",
    "Look for a board between 151-156cm", "Look for a board between 155-160cm", "Look for a board between 158-163cm", "Look for a board between 163-172cm"];
var q2_results = [" Since you're new, move down in your size range. Get a rocker shaped board as this board will be more forgiving and easier to turn on--your face will thank you. For new riders we recomend the Lib Tech Skate Banana or if you're on a budget, the Arbor Relapse is a great choice too",
    " More experienced riders tend to enjoy the aggressive control you get with a camber shaped board. Choose firmer boots and bindings to complement the boards level of control "];
var q3_results = ["<img src= '../img/groomer.jpeg'/>", " If you want to cruise the groomers, move up in your board size range; longer boards provide more stability when going fast. The best part of the groomers is carving, a stiffer board will provide better edge hold for deeper turns. We recomend the Lib Tech Orca snowboard, hook it up with with a pair of thirty two double BOA boots and the union flight pro bindings. If you're on a budget swap the board for the Arbor formula.", "<img src= '../img/park.jpeg'/>", " For park, go with a short flexible board, flexy bindings, and a softer boot. If you want to do rail avoid rocker shapes. The Capita DOA is king of the park boards, deck it out with a pair of Union Contact Pro bindings and the Burton Swath Boa boots. If you're on a budget swap the board for the Capita Indoor Survival",
    , "<img src= '../img/powder.jpeg'/>", " If you're riding powder, you will want the longest board in your size range and you want it to have a wide nose. Grab a pair of stiffer boots and bindings so you have more control avoiding obstacles. A good powder setup would be the Bataleon Surfer snowboard, Union Force bindings, and Thirtytwo Stevens snowboard boots. If you're on a budget swap the board for a Chamonix Chemin snowboard--it's cheap and only comes in one size (plus, it floats in the pow and it's a blast)"];
var q4_results = [" Since you live in a sunny area grab a pair of goggles with darker lenses (you can get lighter lenses later). We recomend the Electric EG 3.5, but if thats too steep go with the EG2--which is the best model from last year.", " Since you live in an overcast area start with lighter lenses with a pink tint. The pink tint provides better contrast in flat lighting. We recomend the Oakly Prizm Snow Hi Pink Iridium. These googles are second to none in flat lighting. We aren't going to recommend a cheaper pair of goggles here because these goggles really are essential"];
var q5_results = [" Since your mountain is warmer you should get a shell jacket and pants, your movement will keep you warm, all you need to do is keep warmth in moisture out. The TM jacket from Thirtytwo and the Basement Bib pants is a good place to start. If money isn't an issue you could splurge for the Burton AK shell and pants combo to stay dry in any weather conditions", " Since you're on a colder mountain you'll want an insulated jacket and pants, as well as warm gloves. The colder it is the thicker the jacket should be. The Burton AK gore-tex 2L LZ down jacket and matching AK cyclic pant is our choice for cold weather. If you live somewhere really cold, we don't recommend trying to save money on things that can actually save your life."];

// takes string argument for id of form element
// grabs value of the selected drop down item 
function getFormInput(id) {
    var getInput = document.getElementById(id);
    var input = getInput.value;
    return input;
}

// compares input value of question 1 
// grabs corresponding output and adds to results
function outputQ1() {
    var input = getFormInput('weight');
    for (var i = 0; i < q1_values.length; i++) {
        if (input === q1_values[i]) {
            results.push(q1_results[i]);
        }
    }
}

// compares input value of question 2
// grabs corresponding output and adds to results 
function outputQ2() {
    var input = getFormInput('experience');
    if (input === 'new') {
        results.push(q2_results[0]);
    } else {
        results.push(q2_results[1]);
    }
}

// compares input value of question 3
// grabs corresponding output and adds to results 
function outputQ3() {
    var input = getFormInput('mountain');
    if (input === 'groomedPath') {
        results.push(q3_results[0]);
        results.push(q3_results[1]);
    } else if (input === 'park') {
        results.push(q3_results[2])
        results.push(q3_results[3]);
    } else {
        results.push(q3_results[4])
        results.push(q3_results[5]);
    }
}


// compares input value of question 4
// grabs corresponding output and adds to results 
function outputQ4() {
    var input = getFormInput('weather');
    if (input === 'sunny') {
        results.push(q4_results[0]);
    } else {
        results.push(q4_results[1]);
    }
}

// compares input value of question 5
// grabs corresponding output and adds to results 
function outputQ5() {
    var input = getFormInput('temperature');
    if (input === '25-32F') {
        results.push(q5_results[0]);
    } else {
        results.push(q5_results[1]);
    }
}

function setStorage() {
    var answers = JSON.stringify(results);
    localStorage.setItem('info', answers);

}




// event handler, calls other functions for outputs
function handler(e) {
    outputQ1();
    outputQ2();
    outputQ3();
    outputQ4();
    outputQ5();
    window.location.href = "../pages/results.html";
    console.log(results);
    setStorage();
}

var eventElement = document.getElementById('button');
eventElement.addEventListener('click', handler);


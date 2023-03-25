function calculateTip() {
    /*
    Reads the Bill, Tip and People inputs and calculates Tip per person and Total per person.
    */
    var bill = parseFloat(billInput.value);
    var tip = parseFloat(tipInput.value);
    var people = parseFloat(peopleInput.value);
    var tipPerPerson = (bill * (tip / 100)) / people;
    var totalPerPerson = (bill + (bill * (tip / 100))) / people;
    if (isNaN(bill) || isNaN(tip) || isNaN(people)) {
        tipPerPersonInput.value = "Detected blank in form. Setting default value to 1";
        totalPerPersonInput.value = "Detected blank in form. Setting default value to 1";
    }
    else {
        tipPerPersonInput.value = tipPerPerson.toFixed(2) + ' $';
        totalPerPersonInput.value = totalPerPerson.toFixed(2) + ' $';
    }
    if (isNaN(bill)) {
        billInput.value = '1';
    }
    if (isNaN(tip)) {
        tipInput.value = '1';
    }
    if (isNaN(people)) {
        peopleInput.value = '1';
    }
}
//Get elements from html
var billInput = document.getElementById('bill');
var tipInput = document.getElementById('tip');
var peopleInput = document.getElementById('people');
var tipPerPersonInput = document.getElementById('tip-per-person');
var totalPerPersonInput = document.getElementById('total-per-person');
// Add an event linstener for all the html inputs
billInput.addEventListener('input', calculateTip);
tipInput.addEventListener('input', calculateTip);
peopleInput.addEventListener('input', calculateTip);

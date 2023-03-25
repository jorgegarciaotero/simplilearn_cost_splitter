function calculateTip() {
    /*
    Reads the Bill, Tip and People inputs and calculates Tip per person and Total per person.
    */

    const bill = parseFloat(billInput.value);
	const tip = parseFloat(tipInput.value);
	const people = parseFloat(peopleInput.value);

	const tipPerPerson = (bill * (tip / 100)) / people;
	const totalPerPerson = (bill + (bill * (tip / 100))) / people;
	
    if (isNaN(bill) || isNaN(tip)  || isNaN(people)) {
        tipPerPersonInput.value = "Detected blank in form. Setting default value to 1";
        totalPerPersonInput.value = "Detected blank in form. Setting default value to 1";
      } else {
        tipPerPersonInput.value = tipPerPerson.toFixed(2)+ ' $';  
        totalPerPersonInput.value = totalPerPerson.toFixed(2)+ ' $';
      }
      if (isNaN(bill)){
        billInput.value='1';
      }
      if (isNaN(tip)){
        tipInput.value='1';
      }
      if (isNaN(people)){
        peopleInput.value='1';
      }
}

//Get elements from html
const billInput = document.getElementById('bill') as HTMLInputElement;
const tipInput = document.getElementById('tip') as HTMLInputElement;
const peopleInput = document.getElementById('people') as HTMLInputElement;
const tipPerPersonInput = document.getElementById('tip-per-person') as HTMLInputElement;
const totalPerPersonInput = document.getElementById('total-per-person') as HTMLInputElement;

// Add an event linstener for all the html inputs
billInput.addEventListener('input', calculateTip);
tipInput.addEventListener('input', calculateTip);
peopleInput.addEventListener('input', calculateTip);
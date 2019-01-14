var katzDeliLine = []; // Holds the incoming customers.
var katzDeliNumber = []; // Holds number for incoming customers.

function takeANumber(katzDeliLine, name) // Takes deli line and a new customer name as input.
{
  katzDeliLine.push(name); // Add new customer to deli line.

  var number = katzDeliLine.indexOf(name)+1; // Stores customer number postion in line.
  katzDeliNumber.push(number); // Adds customer number to katzDeliNumber array.
  return `Welcome, ${name}. You are number ${number} in line.`; // Returns the required string.
}

function nowServing(katzDeliLine) // Takes deli line as input.
{
	var firstPersonInLine = ""; // Stores first person in line in order to be served.

	if (katzDeliLine.length === 0) // If the function is called and there's no one on line then...
	{
		return  "There is nobody waiting to be served!"; //...say this string.
	}
	else // However, if someone is on line then...
	{
		firstPersonInLine = katzDeliLine[0]; // ...hold on to this customer so he or she can be served and...
		katzDeliLine.shift(); //...remove this customer's line status.
		return `Currently serving ${firstPersonInLine}.`; // Returns the required string.
	}
}

function currentLine(katzDeliLine) // Takes deli line as input.
{
  var lineMessage = ""; // Holds the message of the customers on line.
  var localArrayForCustomers = []; // Holds the line of customers locally for manipulation.
  var localArrayForNumbers = []; // Holds the customer number locally for manipulation.
  localArrayForNumbers = localArrayForNumbers.concat(katzDeliNumber); // inputs global to local array.
  localArrayForCustomers = localArrayForCustomers.concat(katzDeliLine); // inputs global to local array.

  function appendRemainingCustomers() // Helper function to assist with adding info of the remaining customers on line to the line message.
  {
    var lineCounter = (katzDeliLine.length - 1); // counts the current amount of customers on line,
    while (lineCounter > 0) // While there's more customers on line...
    {
      localArrayForCustomers.shift(); // ...locally remove the first person on line since the info is already added to the line message..
      localArrayForNumbers.shift(); // ...locally remove the first person's number since the info is already added to the line message...
      lineMessage += `, ${localArrayForNumbers[0]}. ${localArrayForCustomers[0]}`; // ...append the remaining customer's info to the line message.
      lineCounter--;// ... subtract the amount currently counted for the customer line
    }
  }

	if (katzDeliLine.length === 0) // If the function is called and there's no one on line then...
	{
		return  "The line is currently empty."; //...say this string.
	}
	else // However, if someone is on line then...
	{
      lineMessage = `The line is currently: ${localArrayForNumbers[0]}. ${localArrayForCustomers[0]}`; //...add their info to the line message...
      appendRemainingCustomers(); //...check if there's more than one customer on line and add their info if needed...
      lineMessage += "."; // ...add a period to the end of the line message.
      return lineMessage; // Returns the required string.
	}
}
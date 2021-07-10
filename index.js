var katzDeliLine = []; // Holds the incoming customers.
var katzDeliNumber = []; // Holds number for incoming customers.

function takeANumber(katzDeliLine, name) // Takes deli line and a new customer name as input.
{
  function generateTicketNumber()// Helper function that creates ticket numbers.
  {
    katzDeliNumber.push(1+katzDeliNumber.length);
  }

  generateTicketNumber();
  katzDeliLine.push(name); // Add new customer to deli line.
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`; // Returns the required string.
}

function nowServing(katzDeliLine) // Takes deli line as input.
{
  var firstPersonInLine = ""; // Stores first person in line in order to be served.

  function reassignTicketNumbers() // Helper function to assist reassigning ticket numbers after a customer is served.
  {
    katzDeliNumber.shift(); // removes the 1st number on line of the serving customer
    var numberCounter; // // counts the current amount active ticket numbers
    for(numberCounter=0; numberCounter < katzDeliNumber.length; numberCounter++) // For each active ticket number...
    {
      katzDeliNumber[numberCounter] -= 1; // ...substract 1 from it's value.
    }
  }

  if (katzDeliLine.length === 0) // If the function is called and there's no one on line then...
  {
    return  "There is nobody waiting to be served!"; //...say this string.
  }
  else // However, if someone is on line then...
  {
    firstPersonInLine = katzDeliLine[0]; // ...hold on to this customer so he or she can be served and...
    katzDeliLine.shift(); // Removes customer from line since their about to be served.
    reassignTicketNumbers();
    return `Currently serving ${firstPersonInLine}.`; // Returns the required string.
  }
}

function currentLine(katzDeliLine) // Takes deli line as input.
{
  var lineMessage = ""; // Holds the message of the customers on line.
  var localArrayForCustomers = []; // Holds the line of customers locally for manipulation.
  localArrayForCustomers = localArrayForCustomers.concat(katzDeliLine); // inputs global to local array.

  function appendRemainingCustomersAndTicketNumbers() // Helper function to assist with adding info of the remaining customers on line to the line message.
  {
    var lineCounter = (katzDeliLine.length - 1); // counts the current amount of customers on line,
    var numberCounter = 1; // holds the first ticket number
    while (lineCounter > 0) // While there's more customers on line...
    {
      localArrayForCustomers.shift();
      lineMessage += `, ${numberCounter+1}. ${localArrayForCustomers[0]}`; // ...append the remaining customer's info to the line message.
      numberCounter++; //... increase the ticket number value.
      lineCounter--;// ... subtract the amount currently counted for the customer line
    }
  }

  if (katzDeliLine.length === 0) // If the function is called and there's no one on line then...
  {
    return  "The line is currently empty."; //...say this string.
  }
  else // However, if someone is on line then...
  {
      lineMessage = `The line is currently: 1. ${localArrayForCustomers[0]}`; //...add their info to the line message...
      appendRemainingCustomersAndTicketNumbers(); //...check if there's more than one customer on line and add their info if needed...
      // lineMessage += "."; // ...add a period to the end of the line message.
      return lineMessage; // Returns the required string.
  }
}

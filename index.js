var katzDeliLine = []; // Holds the incoming customers.
var katzDeliNumber = []; // Holds number for incoming customers.

function takeANumber(katzDeliLine, name) // Takes deli line and a new customer name as input.
{
  function generateTicketNumber()
  {
    katzDeliNumber.push(1+katzDeliNumber.length);
  }

  generateTicketNumber();
  katzDeliLine.push(name); // Add new customer to deli line.
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`; // Returns the required string.
}

function nowServing(katzDeliLine) // Takes deli line as input.
{
  var localDeliArray = [];
  var firstPersonInLine = ""; // Stores first person in line in order to be served.

  function reassignTicketNumbers()
  {
    katzDeliNumber.shift();
    var i;
    for(i=0; i < katzDeliNumber.length; i++)
    {
      katzDeliNumber[i] -= 1;
    }
  }

  localDeliArray = localDeliArray.concat(katzDeliLine);
  if (katzDeliLine.length === 0) // If the function is called and there's no one on line then...
  {
    return  "There is nobody waiting to be served!"; //...say this string.
  }
  else // However, if someone is on line then...
  {
    firstPersonInLine = localDeliArray[0]; // ...hold on to this customer so he or she can be served and...
    localDeliArray.shift(); //...remove this customer's line status.
    katzDeliLine.shift();
    reassignTicketNumbers();
    return `Currently serving ${firstPersonInLine}.`; // Returns the required string.
  }
}

function currentLine(katzDeliLine) // Takes deli line as input.
{
  var lineMessage = ""; // Holds the message of the customers on line.
  var localArrayForCustomers = []; // Holds the line of customers locally for manipulation.
  localArrayForCustomers = localArrayForCustomers.concat(katzDeliLine); // inputs global to local array.

  function appendRemainingCustomers() // Helper function to assist with adding info of the remaining customers on line to the line message.
  {
    var lineCounter = (katzDeliLine.length - 1); // counts the current amount of customers on line,
    var numberCounter = 1;
    while (lineCounter > 0) // While there's more customers on line...
    {
      localArrayForCustomers.shift();
      lineMessage += `, ${numberCounter+1}. ${localArrayForCustomers[0]}`; // ...append the remaining customer's info to the line message.
      numberCounter++;
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
      appendRemainingCustomers(); //...check if there's more than one customer on line and add their info if needed...
      // lineMessage += '.'; // ...add a period to the end of the line message.
      return lineMessage; // Returns the required string.
  }
}
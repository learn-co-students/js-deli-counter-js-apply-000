function takeANumber(lineOfPeople, newCustomer) {
  // Add the customer to the line of people
  lineOfPeople.push(newCustomer);
  
  // Determine the number for this customer
  let currentNumber = lineOfPeople.length;
  
  return `Welcome, ${newCustomer}. You are number ${currentNumber} in line.`;
}

function nowServing(lineOfPeople){
  // Determine if there are any people in line
  if (lineOfPeople.length === 0) {
    return "There is nobody waiting to be served!";
  }
  
  // Remove the person at the beginning of the lineOfPeople
  let currentCustomer = lineOfPeople.shift();
  return `Currently serving ${currentCustomer}.`;
}


function currentLine(lineOfPeople){
   // Determine if there are any people in line
  let lineLength = lineOfPeople.length;
  if (lineLength === 0) {
    return "The line is currently empty.";
  }
  
  var customersInLine = "The line is currently: "
  // Loop through each person in line
  for(var i = 0; i <  lineLength; i++) {
    let currentCustomer = lineOfPeople[i];
    let currentNumber = i + 1;
    customersInLine = customersInLine + currentNumber + ". " + currentCustomer + ", ";
  }
  // Remove Extra Puctuation
  customersInLine = customersInLine.slice(0, -2);
  
  return customersInLine;
}
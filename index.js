function takeANumber(katzDeliLine, newCustomer){
  katzDeliLine.push(newCustomer);
  return `Welcome, ${newCustomer}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(katzDeliLine){
  if(katzDeliLine.length === 0 ){
    return "There is nobody waiting to be served!"
  } else {
    return `Currently serving ${katzDeliLine.shift()}.`;
  }
}

function currentLine(katzDeliLine){
  // Check for empty line
  if(katzDeliLine.length === 0){
    return `The line is currently empty.`
  }
  // Create intermediate array
  var currentlyWaiting = [];

  // Loop through and fill intermediate array with index numbers and names
  katzDeliLine.forEach(function(item,index,array){
    currentlyWaiting.push(`${index + 1}. ${item}`)
  })
  // Perform logic and loop to fit requested template
  if(currentlyWaiting.length > 1){
    for(var i = 1; i < currentlyWaiting.length; i++){
      // Add space after index number for subsequent customers
      currentlyWaiting[i] = ` ${currentlyWaiting[i]}`;
    }
  }

  return `The line is currently: ${currentlyWaiting}`;

}


/*
## Expected functionality and function names

takeANumber(katzDeliLine, "Ada"); // "Welcome, Ada. You are number 1 in line."
takeANumber(katzDeliLine, "Grace"); // "Welcome, Grace. You are number 2 in line."
takeANumber(katzDeliLine, "Kent"); // "Welcome, Kent. You are number 3 in line."

currentLine(katzDeliLine); // "The line is currently: 1. Ada, 2. Grace, 3. Kent"
nowServing(katzDeliLine); // "Currently serving Ada."

currentLine(katzDeliLine); // "The line is currently: 1. Grace, 2. Kent"
takeANumber(katzDeliLine, "Matz"); // "Welcome, Matz. You are number 1 in line."

currentLine(katzDeliLine); // "The line is currently: 1. Grace, 2. Kent, 3. Matz"
nowServing(katzDeliLine); // "Currently serving Grace."

currentLine(katzDeliLine); // "The line is currently: 1. Kent, 2. Matz"
*/

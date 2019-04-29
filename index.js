/*
// Store is open!
katzDeliLine = [];

// dewclaw enters
console.log(takeANumber(katzDeliLine, 'dewclaw'));

//now serving button is pressed twice. shift() will remove dewclaw from the line and announce his name
console.log(nowServing(katzDeliLine));

// There should be nobody on line at this point.
console.log(nowServing(katzDeliLine));

// Add more people to the line.
console.log(takeANumber(katzDeliLine, 'clawdew'));
console.log(takeANumber(katzDeliLine, 'personA'));
console.log(takeANumber(katzDeliLine, 'aPerson'));

// someone checks to see who is on and how many people are, on line.
console.log(currentLine(katzDeliLine));
*/

// Pass in dummy variables, first is array representing deli line and next is name of customer.
function takeANumber(katzDeliLine, newCustomer){
  // Since the line has to persist through several other functions. I choose to use a mutable array method
  katzDeliLine.push(newCustomer);
  return `Welcome, ${newCustomer}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(katzDeliLine){
  // Check for empty line.
  if(katzDeliLine.length === 0 ){
    return "There is nobody waiting to be served!"
  } else {
    // if the line isnt empty, then we remove the next customer from line and serve him/her
    return `Currently serving ${katzDeliLine.shift()}.`;
  }
}

function currentLine(katzDeliLine){
  // Check for empty line
  if(katzDeliLine.length === 0){
    return `The line is currently empty.`
  }
  /*
  Create intermediate array
  since this function isn't intended to actually change or alter the
  deli line a temporary array is used to perform operations.
  */
  var currentlyWaiting = [];

  // Loop through and fill intermediate array with index numbers and names
  // There is probably a better way to do this.
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

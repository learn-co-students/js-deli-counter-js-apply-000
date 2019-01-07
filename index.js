var katzDeli = [];

function takeANumber (katzDeliLine, name) {
  //Build a function that a new customer will use when entering the deli.//
  
  var numberAhead = katzDeliLine.length;
  var currentPosition = numberAhead + 1;
  
  katzDeliLine.push(name);
  
  return `Welcome, ${name}. You are number ${currentPosition} in line.`;
  
} 

function nowServing (katzDeliLine) {
  //This function should return the first person in line and then remove that individual from the line.//
  
  var deliLineCount = katzDeliLine.length;
  
  if (deliLineCount === 0) {
    return `There is nobody waiting to be served!`;
  } 
  
  else if (deliLineCount > 0) {
    let currentlyServingName = katzDeliLine.shift();
    return `Currently serving ${currentlyServingName}.`;
  }

  else {
    //
  }

}

function currentLine (katzDeliLine) {
  //Returns the current line.//
  
  var deliLineCount = katzDeliLine.length;
  
  if (deliLineCount === 0) {
    return `The line is currently empty.`;
  }
  
  else if (deliLineCount > 0) {
    var returnString = 'The line is currently: ';
    
    for (let i = 0; i < deliLineCount; i++) {
      returnString += `${i+1}. ${katzDeliLine[i]}, `;
    }
    
    return returnString.slice(0,-2);  //slice off the trailing comma and space
  }
  
  else {
    //
  }
  
}
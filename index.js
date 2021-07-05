// takeANumber, should accept two paramaters: the current line of people, along with the new person's name.

function takeANumber(currentLine, newPersonsName) {
  
  // add the new person to the existing line:
  currentLine.push(newPersonsName);
  
  // define a variable to determine the current length of the line including the newest person
  let positionInLine = currentLine.length;
  
  // return desired welcome in template literal format
  return `Welcome, ${newPersonsName}. You are number ${positionInLine} in line.`
}

// function nowServing should accept the current line of people (katzDeliLine) and return the first person in line and then remove that individual from the line. If there is nobody in line, it should return "There is nobody waiting to be served!"


function nowServing(katzDeliLine) {
  
   // check to see if line exists
  if (katzDeliLine.length === 0) {
    return 'There is nobody waiting to be served!';
  }
  
  let currentlyServing = katzDeliLine[0];
  
  //remove them from the line
  katzDeliLine.shift();
  
  // return the first person in line
  return `Currently serving ${currentlyServing}.`;
}

// currentLine that accepts the current line of people and returns the current line as a string

function currentLine(array) {
  
  //if nobody is in line, return string that line is empty
  if (array.length === 0) {
    return 'The line is currently empty.';
  }
  
  //create string variable to store position/name of those in line
  let compiledLine = '';
  let index = 0;
  
  while (index < array.length) {
    
    // add all but last position/names with comma
    if (index < array.length - 1) {
      compiledLine = compiledLine + `${index +1 }. ${array[index]}, `
    }
    //add the final element of the array to the string without comma
    if (index === array.length - 1) {
      compiledLine = compiledLine + `${index +1 }. ${array[index]}`
    }
    //iterate index
    index++;
  }
  
  //return current line as a string
  return `The line is currently: ${compiledLine}`;
}






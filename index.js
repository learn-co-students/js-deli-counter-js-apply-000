var katzDeliLine = [];

var takeANumber = (katzDeliLine, newPerson) => {
  // Add the new person into the end of the line
  katzDeliLine.push(newPerson);

  // Print out welcome message using temperate literals and placeholders
  // Number in line is determied by finding the element's index and then adding one (taking into account zero-based indexing)

  return (`Welcome, ${newPerson}. You are number ${katzDeliLine.indexOf(newPerson) + 1} in line.`)
}


var nowServing = katzDeliLine => {
// If the line is empty, then katzDeliLine.length = 0. 0 is falsy, using the bang operator on it would make it truthy
  if (!katzDeliLine.length) return "There is nobody waiting to be served!";

// Assigning name at 0th index the first person in line
  let firstPersonInLine = katzDeliLine[0];
  katzDeliLine.shift(); // Removing the 0th element from the array
  return (`Currently serving ${firstPersonInLine}.`) // Using template literals and placeholder to return string
}

var currentLine = katzDeliLine => {
  // Returning empty line message if line is empty
  if (!katzDeliLine.length) return "The line is currently empty.";

  // Assigning a variable to the string that will eventually be returned
  let str = 'The line is currently: ';

  // Looping through all elements in the line
  for (let x = 0; x < katzDeliLine.length; x++) {
    // Assigning variables to each portion of string that will be added to variable str
    let numInLinePeriod = `${x+1}. `;
    let nameComma = `${katzDeliLine[x]}, `;
    let name = katzDeliLine[x];

    // If the loop hits the last element, add to the string 'str' above the number in line and the name without a comma
    if (x === (katzDeliLine.length-1)) {
      str += (numInLinePeriod + name);
    }

    // Otherwise add the number in line and name plus comma
    else str += (numInLinePeriod + nameComma)
  }
  // Finally, after the loop is completed, return the above string with all the extra parts added
  return str;
}

var katzDeliLine = [];

var takeANumber = (line, newPerson) => {
  // Add the new person into the end of the line
  line.push(newPerson);

  // Print out welcome message using temperate literals and placeholders
  // Number in line is determied by finding the element's index and then adding one (taking into account zero-based indexing)

  return (`Welcome, ${newPerson}. You are number ${line.indexOf(newPerson) + 1} in line.`)
}


var nowServing = line => {
// If the line is empty, then line.length = 0. 0 is falsy, using the bang operator on it would make it truthy
  if (!line.length) return "There is nobody waiting to be served!";

// Assigning name at 0th index the first person in line
  let firstPersonInLine = line[0];
  line.shift(); // Removing the 0th element from the array
  return (`Currently serving ${firstPersonInLine}.`) // Using template literals and placeholder to return string
}

var currentLine = line => {
  // Returning empty line message if line is empty
  if (!line.length) return "The line is currently empty.";

  // Assigning a variable to the string that will eventually be returned
  let str = 'The line is currently: ';

  // Looping through all elements in the line
  for (let x = 0; x < line.length; x++) {
    // Assigning variables to each portion of string that will be added to variable str
    let numInLinePeriod = `${x+1}. `;
    let nameComma = `${line[x]}, `;
    let name = line[x];

    // If the loop hits the last element, add to the string 'str' above the number in line and the name without a comma
    if (x === (line.length-1)) {
      str += (numInLinePeriod + name);
    }

    // Otherwise add the number in line and name plus comma
    else str += (numInLinePeriod + nameComma)
  }
  // Finally, after the loop is completed, return the above string with all the extra parts added
  return str;
}

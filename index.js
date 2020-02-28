// I over-commented in order to demonstrate fully my thought process and understanding of all concepts used to write the code
var katzDeliLine = [];

var takeANumber = (katzDeliLine, newPerson) => {
  // Adding the new person's name to the end of katzDeliLine array using .push() method
  katzDeliLine.push(newPerson);
  // Using temperate literals (``) and placeholders (${}) to return the welcome string
  // The number in line is obtained by finding out the person's index in the array and then adding 1, because arrays begin with index 0 (i.e. if the new person is 0th index, then they are first in line)
  return (`Welcome, ${newPerson}. You are number ${katzDeliLine.indexOf(newPerson) + 1} in line.`)
}


var nowServing = katzDeliLine => {
  // If the line is empty, then its length is 0, which means its boolean value is 'false'
  // If the line is not empty, then its length is more than 0, which means its boolean value is 'true'
  // Adding the bang operator (!) before katzDeliLine is the same as writing katzDeliLine.length === 0, which equates to 'false'
  if (!katzDeliLine.length) return "There is nobody waiting to be served!";

 // The first person in line will always be the element in index 0, so this variable is assigned accordingly
  let firstPersonInLine = katzDeliLine[0];
  katzDeliLine.shift(); // Removing the 0th element from the array
  return (`Currently serving ${firstPersonInLine}.`) // Using template literals and placeholder to return string
}

var currentLine = katzDeliLine => {
  //See above for rationale for using bang operator to determine that katzDeliLine is empty
  if (!katzDeliLine.length) return "The line is currently empty.";

  //This is the string that will eventually be returned; I will be adding to this string
  let str = 'The line is currently: ';

  // Using for loop to loop through katzDeliLine
  // In the condition, x should be less than katzDeliLine.length because the last element's index is one less than the length
  // x is incremented for every round
  for (let x = 0; x < katzDeliLine.length; x++) {
    // Assigning variables to each portion of string that will be added to variable str
    // 'x' represents the index, however, the number in line is one more than index, so the number in line is x+1.
    // Period and space are also added
    let numInLinePeriod = `${x+1}. `;
    // The person's name is the element in the current index. Comma and space are added
    let nameComma = `${katzDeliLine[x]}, `;
    // Because the final name added to the string does not need to be followed with a comma and space, it is useful to have a variable just representing the name
    let name = katzDeliLine[x];

    // If the loop hits the last element add to the string 'str' above the number in line and the name without a comma
    if (x === (katzDeliLine.length-1)) {
      str += (numInLinePeriod + name);
    }
    // Otherwise add the number in line and name plus comma
    else str += (numInLinePeriod + nameComma)
  }
  // Finally, after the loop is completed, return the above string with all the extra parts added
  return str;
}

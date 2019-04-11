// Declare a function with two parameters
function takeANumber (katzDeliLine, name) {
  // Push the name to the array for each number in line
  katzDeliLine.push(name);
  // Return message with name and position in line, without starting at index 0
  return "Welcome, " + name + ". You are number " + katzDeliLine.length + " in line."
}


// Declare a function that accepts the current line of people
function nowServing (katzDeliLine) {
  // Check for empty line
  if (katzDeliLine.length === 0) {
    // Respond to empty line
    return "There is nobody waiting to be served!"
  } else {
    // Return the first person from the line and remove them
    // Use shift array method to remove first item in array
    return "Currently serving " + katzDeliLine.shift() + "."
  }
}

// Declare a function that accepts the current line of people
function currentLine (katzDeliLine) {
  // Check if the line is empty
  if (katzDeliLine.length === 0) {
    // If so, say that the line is empty
    return "The line is currently empty.";
    // Otherwise
  } else {
    // Create an empty array to add the people in line to
    let line = [];
    // Iterate through the line
    for (let i = 0; i < katzDeliLine.length; i++) {
      // Add the people from the line to the line array with formatting to make a list. Add 1 to the position so there is no position 0
      line.push(i + 1 + ". " + katzDeliLine[i]);
    }
    // Return the new list (array) and add a comma and space between each person using the join method
    return "The line is currently: " + line.join(", ");
    }
  }





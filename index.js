function takeANumber(currentLine, newPerson) {
  // Creates a variable to later add a person to the currentLine
  var newLine;
  // Adds a person to the currentLine
  newLine = currentLine.push(newPerson)
  // Returns a message with the newPerson name and her position in line 
  return `Welcome, ${newPerson}. You are number ${currentLine.length} in line.`
}

function nowServing(deliLine) {
  // Creates a variable to store the name of the first person in line.
  var newDeliLine;
  // Removes the first element of deliLine and stores it in newLiLine
  newDeliLine = deliLine.shift()
  // Checks if deliLine is an empty array
  if (deliLine.length === 0) return `There is nobody waiting to be served!`
  // Returns the first element of deliLine and updates deliLine  
  else return `Currently serving ${newDeliLine}.`
}

function currentLine(line) {
  // Creates an empty array to store each person in line and their position
  let personsInLine = []
  // Checks if the line is empty 
  if (line.length === 0) return `The line is currently empty.`
  else {
    // Iterates through each element in line
    for (var i = 0; i < line.length; i++) {
      // Retrieves each name and their position 
      personsInLine.push(` ${i + 1}. ${line[i]}`)
    }
    // Returns a summary of the person in line and their positions 
  return `The line is currently:${personsInLine}`

  }
}

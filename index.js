function takeANumber(katzDeliLine, newPerson){
  // Adding newPerson to the end of the line array
  katzDeliLine.push(newPerson)
  // Stating a welcome to the new person and stating their place in line
  return "Welcome, " + newPerson + ". You are number " + katzDeliLine.length + " in line."
}



function nowServing(katzDeliLine){

  // Evaluating if there are people in line
  if (katzDeliLine.length > 0){
    // Had to store name before removing it
    var serving = "Currently serving " + katzDeliLine[0] + "."
    // Removeing the first person in the array
    katzDeliLine.shift()
    // Printing out who is currently being served
    return serving
  }

  else {
    // Stating no one is in line if the length of the line is 0
    return "There is nobody waiting to be served!"
  }
}



function currentLine(line){
  // evaluating if more than 0 people are in line
  if (line.length > 0){
    // Initializing the output string variable
    var output = "The line is currently:"
    // For loop to run through the array and add to the output string variable
    // Runs through the entire length of array
    for (let i = 0; i < line.length ; i++){
      // Adds new person to the list in a string variable
      // If statement at end accounts for no comma after last person in line
      output += " " + (i+1) + ". " + line[i] + ((i+1) === line.length ? '' : ',')
    }
    // Print out the final string.
    return output
  }
  else {
    // If no one is in line and the array is of length 0, this is returned
    return "The line is currently empty."
  }
}

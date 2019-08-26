function takeANumber(deliLine, guestName) {
  deliLine.push(guestName)
  // this adds a new guest to the line
  
  return `Welcome, ${guestName}. You are number ${deliLine.length} in line.`
  /* 
  using line.length allows us to return the actual number the newest guest is in line. e.g. if the newest guest is the fourth element in an array then .length will return 4, as that is how many elements in the array there is, ie the length of the array
  */
}

function nowServing(deliLine) {
  if (deliLine.length === 0) {
    return "There is nobody waiting to be served!"
  }
  else {
    var currentGuest = deliLine.shift()
    return `Currently serving ${currentGuest}.`
  }
}

function currentLine(deliLine) {
  if (deliLine.length === 0) {
    return "The line is currently empty."
  }
  else {
    var guestInLine = []
    //declares empty array to push elements onto
    
    var lineLength = deliLine.length
    /*
    gives us a number value to use for our for loop condition
    */
    
    for (let i = 0; i < lineLength; i++) {
      guestInLine.push(`${i + 1}. ${deliLine[i]}`)
    }
    /*
    using a for loop allows us to loop through the array of people in line. our counter starts at zero and as long as the value of i is less than the value of the length of the line, it will add to our empty array guestInLine. ${i + 1} is used to have an accurate number value for our string output. ${deliLine[i]} gives us the guest name at the spot of the index
    */
    
    return `The line is currently: ${guestInLine.join(', ')}`
    // .join() allows us to construct the str sentence
  }
}
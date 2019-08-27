function takeANumber(deliLine, guestName) {
  deliLine.push(guestName)
  // this adds a new guest to the line
  
  return `Welcome, ${guestName}. You are number ${deliLine.length} in line.`
  /* 
  using .length() allows us to return the number of elements in the array, or put more plainly the actual number the newest guest is in line
  */
}

function nowServing(deliLine) {
  if (deliLine.length === 0) {
    return "There is nobody waiting to be served!"
  }
  else {
    var currentGuest = deliLine.shift()
    return `Currently serving ${currentGuest}.`
    /*
    the .shift() method removes the first element from our array and returns that removed element
    */
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
    using a for loop allows us to loop through the array of people in line. our counter starts at zero and as long as the value of i is less than the value of the length of the line, it will add to our empty array guestInLine. ${i + 1} is used to so that our output has the 1, 2, 3, etc, pattern, because just using the index number would start the count at 0. ${deliLine[i]} gives us the guest name at the spot of the index
    */
    
    return `The line is currently: ${guestInLine.join(', ')}`
    /*
    .join() method allows us to create and return a new string by concatenating all of the elements in an array separated by commas
    */
  }
}
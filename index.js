var katzDeliLine = [];

// Takes in the current line of people and the new person's name.
// Returns a string that tells the customer their place in line.
// @param katzDeliLine  Array of current customers in line
// @param nameIn        New person's nameIn
// @return              "Welcome, <nameIn>. You are number <array length> in line."
function takeANumber(katzDeliLine, nameIn) {
  katzDeliLine.push(nameIn);
  var retVal = "Welcome, " + nameIn + ". You are number " + katzDeliLine.length + " in line.";
  return retVal;
}

// If the line isn't empty, removes the first person in line from the array and returns their name.
// @param   katzDeliLine  Array of current customers in line.
// @return                If empty "There is nobody waiting to be served!", otherwise the name of the first person in line.
function nowServing(katzDeliLine) {
  var retVal;
  if (katzDeliLine.length > 0) {
    retVal = "Currently serving " + katzDeliLine[0] + '.';
    katzDeliLine.splice(0, 1); // Removes 1 element starting from index 0
  } else {
    retVal = "There is nobody waiting to be served!";
  }
  
  return retVal;
}

// Returns the line in order if not empty.
// @param   katzDeliLine Array of current customers in line.
// @return               Returns a string of the customers in order if not empty       
function currentLine(katzDeliLine) {
  var retVal = "The line is currently: ";
  
  if (katzDeliLine.length > 0) {
    for (var i = 0; i < katzDeliLine.length; i++) {
      if (i !== katzDeliLine.length - 1) { // Check it's end of array
        retVal += ((i+1) + '. ' + katzDeliLine[i] + ', '); 
      } else {
        retVal += ((i+1) + '. ' + katzDeliLine[i]); 
      }
    }
  } else {
    retVal = "The line is currently empty.";
  }
  
  return retVal;
}
//takeANumber function adds new patron the list and returns patron's position in plain english
//Parameters: katzDeliLine, patronName
//Return: patron's position in line in plain english

function takeANumber (katzDeliLine, patronName) {
  
  //.push returns the new length of the array
  //katzDeliLine.length is the same as the last patron's line position
  
  return `Welcome, ${patronName}. You are number ${katzDeliLine.push(patronName)} in line.`;
}





//nowServing function states the next patron to be served (first in line) and removes the individual from the line, or returns a string if the line is empty.
//Parameters: katzDeliLine
//Return: Person that is now being served (first in line) --- OR --- string stating the line is empty

function nowServing (katzDeliLine) {
  //check if there is a line. If there is no line, return string from lesson.
  if (lineEmpty(katzDeliLine)) {
    return "There is nobody waiting to be served!";
  }
  
  //If there is a line, return string stating next patron and remove that individual from the line (katzDeliLine array)
  else {
    //.shift removes first element from array AND returns the removed element from array.
    return `Currently serving ${katzDeliLine.shift()}.`;
  }
}





//currentLine function returns the current line of patrons.
//Parameters: katzDeliLine
//Return: String with list of patrons (including their position) --- OR --- string stating that the line is empty.
function currentLine (katzDeliLine) {
  
  //Check if the the line has patrons
  if (lineEmpty(katzDeliLine)) {
    return "The line is currently empty.";
  }



  //If line has patrons, form string with patron's and their location in line.
  else {

    //create beginning of string to start sentence. The string will be added to by iterating through the katzDeliLine array.
    var theLine = "The line is currently:";

    //Adds the lline position and patron name for each patron in the line.
    for (var c = 0; c < katzDeliLine.length; c++) {
      theLine += ` ${c + 1}. ${katzDeliLine[c]},`
    }
    
    //removes the final comma in the string because list is over.
    //.substring removes the last character in this instance
    theLine = theLine.substring(0, theLine.length - 1);

    //return the string that contains line
    return theLine;
  }

}










//This function checks to see if there is a line (if katzDeliLine array is empty or not)
//Returns true if the line is empty (array === 0)
function lineEmpty (katzDeliLine) {

  if (katzDeliLine.length === 0) {
    return true;
  }
}


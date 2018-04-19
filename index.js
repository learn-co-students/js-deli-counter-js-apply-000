var katzDeliLine = [];

//takeANumber function 
//PURPOSE: Add new patron to the line. Tell them their line position.
//PARAMETERS: current line of patrons (katzDeliLine), patron's name
//RETURN: patron's name and line position in plain english

function takeANumber (katzDeliLine, patronName) {
  //.push returns the new length of the array
  let katzDeliLineLength = katzDeliLine.push(patronName);
  return `Welcome, ${patronName}. You are number ${katzDeliLineLength} in line.`;
}





//nowServing function 
//PURPOSE: Tell which patron is to be served next. Remove that individual from the line. Or returns provided string if line is empty.
//Parameters: current line of patrons (katzDeliLine)
//Return: Person that is now being served (first in line) --- OR --- string stating the line is empty

function nowServing (katzDeliLine) {
  //check if there is a line. If there is no line, return string provided by the lesson instructions.
  if ( katzDeliLine.length === 0 ) {
    return "There is nobody waiting to be served!";
  }
  
  //If there is a line, return string stating next patron and remove that individual from the line (katzDeliLine array)
  else {
    //.shift returns the element removed from the array.
    let nextUp = katzDeliLine.shift();
    return `Currently serving ${nextUp}.`;
  }
}





//currentLine function
//PURPOSE: Share the current line of patrons with their respective line positions. Or returns provided string if line is empty.
//PARAMETERS: current line of patrons (katzDeliLine)
//RETURN: String with the current line of patrons and their line positions

function currentLine (katzDeliLine) {
  //check if there is a line. If there is no line, return string provided by the lesson instructions.
  if ( katzDeliLine.length === 0 ) {
    return "The line is currently empty.";
  }
  
  else {
    
    //declare a new variable with an empty array that will hold the new elements created by the map function
    let mappedLine = [];
    
    //Assign the mappedLine array each new element that the map function creates at the respective arrays
    mappedLine = katzDeliLine.map( function (patronName, index ) {
        //Return the neccessary string using interpolation. Remembering to convert the line position from computer (starting at zeroth index) to human english (which starts at 1).
        return `${index + 1}. ${katzDeliLine[index]}`;
    }); //ends .map function

    //.join to condense the array into a single string (and adding a ", " in between each element to form the list)
    //Return the string to the currentLine function
    return `The line is currently: ${mappedLine.join(", ")}` ;
  
  } //ends else statement
} //ends currentLine function





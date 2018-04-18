var katzDeliLine = [];

//takeANumber function adds new patron the list and returns patron's position in plain english
//Parameters: katzDeliLine, patronName
//Return: patron's position in line in plain english

function takeANumber (katzDeliLine, patronName) {
  //.push returns the new length of the array
  let katzDeliLineLength = katzDeliLine.push(patronName);
  return `Welcome, ${patronName}. You are number ${katzDeliLineLength} in line.`;
}





//nowServing function states the next patron to be served (first in line) and removes the individual from the line, or returns a string if the line is empty.
//Parameters: katzDeliLine
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





function currentLine (katzDeliLine) {
  //check if there is a line. If there is no line, return string provided by the lesson instructions.
  if ( katzDeliLine.length === 0 ) {
    return "The line is currently empty.";
  }
  
  
  else {
    
    //Use .reduce function to condense the katzDeliLine array into a string using an accumulator to hold the initial string ("The line is current: ") and the additional concatenated strings as .reduce iterates over the elements
    //The output of the .reduce function will be saved to the currentLineString variable defined below
    //the .reduce function requires an accumulator, elements (to iterate over) and index to match a patron with a line position 
    
    let currentLineString = katzDeliLine.reduce (function ( accumulator, item, index ) {
  
      //Assign this variable to hold the accumulator. Cannot return string to .reduce here becuase we need to add a ", " to all elements, except for the last patron/element in the line/array.
      //index+1 is required because computers start from zeroth index and humans start from 1.
      let runningLineString = accumulator + (index + 1) + ". " + item;
      
      //This if statement checks if this is the final element in the array. If it is not, then a ", " is added to fulfill mocha JS test in learn.co
      if (index < katzDeliLine.length - 1 ) {
        //", " is added to end of string using addition assignment
        runningLineString += ", "; 
      }  
      
      //return the current string so that .reduce can continue iterating  
      return runningLineString;  
      
    }, "The line is currently: "); //String here is the initial value of the accumulator for .reduce
    
    //Return the entire string created by the .reduce function. This return will be presented when calling the currentLine function
    return currentLineString;
    
    
  } //ends else statement
} //ends currentLine function





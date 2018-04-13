//Start with an empty array to represent empty deli at start of day
var katzDeli = [];

//array to hold the current line
var katzDeliLine = [];


//function takeANumber — accepts current line of people (katzDeliLine) and patron's name as parameteres
//function returns position in line (in plain english — not an index)
function takeANumber (katzDeliLine, patronName) {
  
  //will hold the line position by getting length of katzDeliLine
  var linePosition;

  //Add partron name to the end of array in katzDeliLine
  katzDeliLine.push(patronName);
  
  //linePosition will equal katzDeliLine.length (don't need to worry about accounting for 0 index by using length)
  linePosition = katzDeliLine.length;
  
  //return position in line (in plain english)
  return `Welcome, ${patronName}. You are number ${linePosition} in line.`;
}



//nowServing function returns the first person in line
//Also remove that individual from the line
//Returns specific string if nobody is in line
function nowServing (katzDeliLine) {
  
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!";
  }
  
  //nextUp is the next person in line (index 0)
  var nextUp = katzDeliLine[0];
  
  //use .shift to remove that individual from the front of the line
  katzDeliLine.shift();
  
  //return nextUp
  return `Currently serving ${nextUp}.`;
  
}



//function currentLine returns the current line in a string

function currentLine (katzDeliLine) {
  
  //check if there are partrons in line
  if (katzDeliLine.length === 0) {
    return "The line is currently empty.";
  }
  
  //Start of string that will be returned. The rest of the string of patrons waiting will be added later.
  var theLine = "The line is currently:";
  
  //iterate over the line to obtain each position
  for (var c = 0; c < katzDeliLine.length; c++) {
    
    //add the position and name for each iteration(position)
    //add the +1 to position to get the "plain english" location, rather than the index (which starts from 0)
    theLine += ` ${c + 1}. ${katzDeliLine[c]},` 
  }
  
  //remove the final "," to end the list
  theLine = theLine.substring(0, theLine.length - 1);
  
  return theLine; 
}









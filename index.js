// Declare variable 
var katzDeliLine = [];

// create a function takeANumber

function takeANumber(katzDeliLine, person) {
  katzDeliLine.push(person);
  return "Welcome, " + person + ". You are number " + katzDeliLine.length + " in line.";
}

// create a function nowServing 

function nowServing( katzDeliLine ) {
  // create a conditional statement. 
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!";
  } else {
    var firstPerson = katzDeliLine.shift(0);
    return "Currently serving " + firstPerson + ".";
  }
}

// create a currentLine function 
 function currentLine( katzDeliLine ) {
   // conditional statement 
   if (katzDeliLine.length === 0) {
     return "The line is currently empty.";
   } else {
     return "The line is currently: 1. " + katzDeliLine[0] + ", 2. " + katzDeliLine[1] + ", 3. " + katzDeliLine[2];
   }
 }
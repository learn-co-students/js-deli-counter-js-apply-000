// This programs the Take A Number feature for Katz Deli

//This array represents the line of people who are waiting to take their order
var katzDeliLine = [];

//This function adds people to the Deli Line
function takeANumber(katzDeliLine,name) {
  
/* I know that because I am looking to give a person their place in line or a position in an array NOT their index number */

//Adds the name of the person to the Deli line
katzDeliLine.push(`${name}`);

//Find the place of that person in line and assigns it to a variable.
var yourLineNumber = katzDeliLine.length;

return `Welcome, ${name}. You are number ${yourLineNumber} in line.`;
}

//Calls the Take A Number function
takeANumber(katzDeliLine, "Ada");
takeANumber(katzDeliLine, "Grace");
takeANumber(katzDeliLine, "Kent");


//This function tells people who is currently being served and then removes them
function nowServing(katzDeliLine) {
  // The shift method selects the first element of an array and removes it.
  
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!";
  } else {
  
  var upNow = katzDeliLine.shift();
  return `Currently serving ${upNow}.`;
  }
}

nowServing(katzDeliLine);

//This function returns the current line
function currentLine(katzDeliLine) {
  
//Use while loop because I'm not sure how many people would be in line. 

var upNext = [];
var i = 0;
while (i < katzDeliLine.length) {
upNext.push(` ${[i+1]}. ${katzDeliLine[i]}`);
    i++;
  }
  if (katzDeliLine.length === 0) {
    return "The line is currently empty.";
  } else
  return(`The line is currently:${upNext}`);
}
currentLine(katzDeliLine);



var katzDeliLine = [];
 
/*
  1.) Initialize a function to return a customer's position in line after taking a number.
  2.) Adding the name to the line using push instead of the shift opperator to add name to end of the array.
  3.) Return the name along with line.length rather than .indexOf(name)  because of possible dupes.
*/

function takeANumber(line, name)  {
  line.push(name); 
  return(`Welcome, ${name}. You are number ${line.length} in line.`); 
}

 /*
  1.) Initialize a function that removes the 1st person from the line when it is their time to be served
  2.) Check the length of the line. If it is zero say no one is being served.
  3.) Removed the first person from the line array using shift to change the length of the array.
*/

function nowServing(line) {
  if (line.length === 0) { 
    return "There is nobody waiting to be served!" ;
  }

  else {
    return ("Currently serving " + line.shift() + ".");
  }
}

 /*
  1.) Initialize function to return the entire deli line with position and name.
  2.) Check the length of the line. If it's zero, the say the line is empty.
  3.) If it's not 0, then create an array that contains the beginning of the text needed to return the deli line and postion.
  4.) Loop through the line adding the position and name to the helper array. But if it's the last one, we should not add a comma at the end.
*/

function currentLine(line) {
  if (line.length === 0) {
    return "The line is currently empty.";
  }
  var lineStr = "The line is currently: ";
  for(var i=0; i<line.length; i++) {
    if (i!= line.length-1) {
      lineStr = lineStr + `${i+1}` + ". " + line[i] + ", ";
    }
    else {
    lineStr = lineStr + `${i+1}` + ". " + line[i]; 
    }
  }
  return (lineStr);
}


// Example Usage

var katzDeliLine = [];

takeANumber(katzDeliLine, "Ada");  // "Welcome, Ada. You are number 1 in line."
takeANumber(katzDeliLine, "Grace"); // "Welcome, Grace. You are number 2 in line."
takeANumber(katzDeliLine, "Kent"); // "Welcome, Kent. You are number 3 in line."
 
currentLine(katzDeliLine); // "The line is currently: 1. Ada, 2. Grace, 3. Kent"
 
nowServing(katzDeliLine); // "Currently serving Ada."
 
currentLine(katzDeliLine); // "The line is currently: 1. Grace, 2. Kent"
 
takeANumber(katzDeliLine, "Matz"); // "3"
 
currentLine(katzDeliLine); // "The line is currently: 1. Grace, 2. Kent, 3. Matz"
 
nowServing(katzDeliLine); // "Currently serving Grace."
 
currentLine(katzDeliLine); // "The line is currently: 1. Kent, 2. Matz"
 

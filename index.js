function takeANumber(currentLine, newName) {
  if (currentLine.length === 0) {  // checks if the line is at 0
    currentLine.push(newName); //if so adds the person to the line and gives them a number
    
    return "Welcome, " + newName + ". " + "You are number " + currentLine.length + " in line."
  } else {
    currentLine.push(newName);  // is not the adds newest person to line with current number
    
    return "Welcome, " + newName + ". " + "You are number " + currentLine.length + " in line.";
  }
 
}

function nowServing(katzDeliLine) {
  for (var i = 0; i < katzDeliLine.length; i++) { // loops through GIVEN line at deli
    var current = katzDeliLine[i]; // each current person while going through
    
    if (katzDeliLine.length > 0) { // if there are people in line
      katzDeliLine.shift(current); // takes out first person from line
      return "Currently serving " + current + ".";
    } 
  }
   if (katzDeliLine.length === 0) { // if no-one is on line
      return "There is nobody waiting to be served!"
    }
}

function currentLine(katzDeliLine) {
  if (katzDeliLine.length === 0) { // if no-one is on line
    return "The line is currently empty."
  }
  if (katzDeliLine.length > 0) { // if there is a line
    var output = "";
    
    for(var i = 0; i < katzDeliLine.length; i++) { // loops through GIVEN line
    
        output += (i + 1) + ". " + katzDeliLine[i] + ", "; // concating the names and number placement 
      
      }
    output = output.slice(0, -2);  // removes last two characters of string "the ','" from the string
    return "The line is currently: " + output;
  } 
}



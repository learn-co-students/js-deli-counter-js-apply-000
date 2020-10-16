function takeANumber(currentLine, newPersonName) {
  // Take new customer name in

  // Push new customer to end of array/line
  currentLine.push(newPersonName);
  var positionInLine = currentLine.indexOf(newPersonName) + 1;

  var welcomeMessage = "Welcome, " + newPersonName + ". You are number " + positionInLine + " in line.";

  return welcomeMessage;
}

function nowServing(currentLine) {
  // If nobody in line, return "There is nobody waiting to be served!"
  if (currentLine.length === 0) {
    return "There is nobody waiting to be served!";
  }

  // Remove first person in line
  var firstInLine = currentLine.shift();
  // Return first person in line
  return "Currently serving " + firstInLine + ".";
}

function currentLine(currentLine) {
  if (currentLine.length === 0) {
    return "The line is currently empty.";
  }

  // Create line message
  var fullLineMessage = "The line is currently: ";

  // Populate names from currentLine into line message
  for (var i = 0; i < currentLine.length; i++) {
       // Making the end message look nice without extra ',' at the end
      if (i === currentLine.length - 1) {
        var currentName = currentLine[i];
        fullLineMessage += i+1 + ". " + currentName;
      } else {
          var currentName = currentLine[i];
          fullLineMessage += i+1 + ". " + currentName + ", ";
      }
  }

  // Return line message
  return fullLineMessage;
}
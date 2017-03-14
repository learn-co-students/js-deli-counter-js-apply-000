
    function takeANumber(katzDeliLine, newPersonName) {
      // Add the new person's name to the list
      var placeInLine = katzDeliLine.length;
      katzDeliLine[placeInLine] = newPersonName;

      // Tell the new person what place they are in line
      var placeInLineNotice = "Welcome, " + newPersonName + ". You are number " + (placeInLine + 1) + " in line.";
      return placeInLineNotice
    }


  function nowServing(deliLine) {
    // If there is nobody in line, return this message
    if (deliLine.length > 0) {
      // Determine and return the first person in line
      var currentlyServingNotice = "Currently serving " + deliLine.shift() + "."
      return currentlyServingNotice
    } else {
      return "There is nobody waiting to be served!"
    }
  }

function currentLine(deliLine) {
  if (deliLine.length > 0) {
    var i = 1;
    var currentLineNotice = "The line is currently:";
    var currentLineArray = [];
    while (i <= deliLine.length) {
      currentLineArray[i-1] = " " + i + ". " + deliLine[i-1];
      i++;
    }
    return currentLineNotice + currentLineArray
  } else {
    return "The line is currently empty."
  }
}

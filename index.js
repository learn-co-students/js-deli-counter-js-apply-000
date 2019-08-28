function takeANumber(katzDeliLine, newPersonName) {
  var positionInLine = katzDeliLine.length + 1;
  var welcomeStatement = "Welcome, " + newPersonName + ". You are number " + positionInLine + " in line.";
  katzDeliLine.push(newPersonName);
  return welcomeStatement;
}

function nowServing(katzDeliLine) {
  var nowServingStatement;
  if (katzDeliLine.length === 0) {
    nowServingStatement = "There is nobody waiting to be served!"
  }
  else {
    nowServingStatement = "Currently serving " + katzDeliLine[0] + ".";
    katzDeliLine.shift();
  }
  return nowServingStatement;
}

function currentLine(katzDeliLine) {
  var currentLineStatement;
  if (katzDeliLine.length === 0) {
    currentLineStatement = "The line is currently empty."
  }
  else {
    currentLineStatement = "The line is currently: "
    for (var i = 0; i < katzDeliLine.length; i++) { 
    if (i === 0) { currentLineStatement = currentLineStatement + (i + 1) + ". " + katzDeliLine[i];
    }
    else { 
      currentLineStatement = currentLineStatement + ", " + (i + 1) + ". " + katzDeliLine[i];
    } 
    }
    }
    return currentLineStatement;
}
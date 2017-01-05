function takeANumber(katzDeliLine, newPerson) {
  katzDeliLine.push(newPerson);
  return "Welcome, " + newPerson + ". You are number " + katzDeliLine.length + " in line.";
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!";
  } else {
    return "Currently serving " + katzDeliLine.shift() + ".";
  }
}

function currentLine(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "The line is currently empty.";
  } else {
    var returnStatementArray = ["The", "line", "is", "currently:"];

    for (var i = 0; i < katzDeliLine.length; i++) {
      returnStatementArray.push((i + 1) + ".");

      if (i === katzDeliLine.length - 1) {
        returnStatementArray.push(katzDeliLine[i]);
      } else {
        returnStatementArray.push(katzDeliLine[i] + ",");
      }
    }

    return returnStatementArray.join(" ");
  }
}

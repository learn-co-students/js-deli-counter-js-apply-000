
function takeANumber(katzDeliLine, newPerson) {
  var position = katzDeliLine.length;
  katzDeliLine[position] = newPerson;
  position ++;  //account for discrepancy between index and position
  return `Welcome, ${newPerson}. You are number ${position} in line.`;

}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length > 0) {
    return `Currently serving ${katzDeliLine.shift()}.`;
  }  else { //if no one in line
    return "There is nobody waiting to be served!";
  }

}

function currentLine(katzDeliLine) {
  if (!katzDeliLine[0]) { //empty line
    return "The line is currently empty.";
  }  else {   //nonempty line
    var theLine = `The line is currently: 1. ${katzDeliLine[0]}`;
    var count = 1;
    while (katzDeliLine[count]) {
      theLine += `, ${count+1}. ${katzDeliLine[count]}`
      count++;
    }
    return theLine;
  }

}

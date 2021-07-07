var katzDeliLine = [];

function takeANumber(katzDeliLine, person) {
  katzDeliLine.push(person);
  return `Welcome, ${person}. You are number ${katzDeliLine.length} in line.`;
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!";
  } else {
    return `Currently serving ${katzDeliLine.shift()}.`;
  }
}

function currentLine(line) {
  if (line.length === 0) {
    return "The line is currently empty.";
  } else {
    var announcement = "The line is currently: ";
    for (var i = 0; i < line.length; i++) {
      announcement += `${i + 1}. ${line[i]}`;
      if (i < line.length - 1) {
        announcement += ", ";
      }
    }
    return announcement;
  }
  
}
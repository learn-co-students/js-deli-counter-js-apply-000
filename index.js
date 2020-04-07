function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`;
}

function nowServing(katzDeliLine){
  if (katzDeliLine[0]) {
    var serving = katzDeliLine.shift();
    return `Currently serving ${serving}.`;
  } else {
    return "There is nobody waiting to be served!";
  }
}

function currentLine(katzDeliLine) {
  var line = "The line is currently: ";
  if (katzDeliLine[0]) {
    for (var x = 0; x < katzDeliLine.length; x++) {
      if (x === (katzDeliLine.length - 1)) {
          line += `${x + 1}. ${katzDeliLine[x]}`;
      } else {
          line += `${x + 1}. ${katzDeliLine[x]}, `;
      }
    } return line;
  } else {
      return "The line is currently empty.";
  }
}
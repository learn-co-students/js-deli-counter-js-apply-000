// New customer
function takeANumber(katzDeliLine, name) {
    katzDeliLine.push(`${name}`);
    return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`;
  }

// Now serving
function nowServing(katzDeliLine) {
  var i = 0;
  while (katzDeliLine > i) {
    i++;
  }
  if (katzDeliLine == 0) {
    return "There is nobody waiting to be served!"
  } else {
    return "Currently serving " + katzDeliLine.shift() + ".";
  }
}

// Current line / line empty
var theCurrentLine = []

function currentLine(katzDeliLine) {
  for (var i = 0; i < katzDeliLine.length; i++) {
    theCurrentLine.push(" " + [i + 1] + "." + " " + katzDeliLine[i]);
  }
  if (katzDeliLine.length > 0) {
    return "The line is currently:" + theCurrentLine;
  } else if (katzDeliLine.length == 0) {
      return  "The line is currently empty.";
  }
}

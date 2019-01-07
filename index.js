var katzDeliLine = [];

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  var index = katzDeliLine.indexOf(name) + 1;
  return ("Welcome, " + name + "." + " You are number " + index + " in line.");
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return ("There is nobody waiting to be served!");
  } else {
    var first = katzDeliLine[0];
    katzDeliLine = katzDeliLine.splice(0, 1);
    return ("Currently serving " + first + ".");
  }
}

function currentLine(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return ("The line is currently empty.");
  }

  var string = "The line is currently: ";

  for (var i = 0; i < katzDeliLine.length; i++) {
    var name = katzDeliLine[i];
    var index = i + 1;
    var lastInLine = index + ". " + name;

    if (i === katzDeliLine.length - 1) {
      string += lastInLine;
    } else {
      var line = index + ". " + name + ", ";
      string += line;
    }
  }

  return string;
}

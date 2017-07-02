var katzDeliLine = [];

function takeANumber(line, name) {
  line.push(name);
  for (var i = 0; i < katzLine.length; i++) {
    if (katzLine[i] === name) {
      return 'Welcome, ' + name + '.' + ' You are number ' + (i + 1) + ' in line.';
    }
  }
}


function nowServing(line) {
  if (line.length > - 1) {
    return 'Currently serving ' + line[0] + '.' + line.shift();
  } else {
    return 'There is nobody waiting to be served!';
  }
}


function currentLine(line) {

  if (line.length === -1) {
    return 'The line is currently empty.';
  } else {
    var lineTracker = [];
    for (var i = 0; i < line.length; i++) {
      lineTracker.push((i + 1) + '. ' + line[i]);
    }
    return 'The line is currently:' + lineTracker.join(', ');
  }
}


takeANumber(katzDeliLine, "Ada"); // "Welcome, Ada. You are number 1 in line."
takeANumber(katzDeliLine, "Grace"); // "Welcome, Grace. You are number 2 in line."
takeANumber(katzDeliLine, "Kent"); // "Welcome, Kent. You are number 3 in line."
 //-----------------------------------------------------------------------
currentLine(katzDeliLine); // "The line is currently: 1. Ada, 2. Grace, 3. Kent"

nowServing(katzDeliLine); // "Currently serving Ada."

currentLine(katzDeliLine); // "The line is currently: 1. Grace, 2. Kent"

takeANumber(katzDeliLine, "Matz"); // "3"

currentLine(katzDeliLine); // "The line is currently: 1. Grace, 2. Kent, 3. Matz"

nowServing(katzDeliLine); // "Currently serving Grace."

currentLine(katzDeliLine); // "The line is currently: 1. Kent, 2. Matz"

var katzDeli = [];

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  return "Welcome, " + name + ". You are number " + katzDeliLine.length + " in line."
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!"
  }
  else {
    return "Currently serving " + katzDeliLine.shift() + ".";
  }
}

function currentLine(line) {
  var format = "The line is currently: ";

  if (line.length === 0 || line === undefined) {
    return "The line is currently empty.";
  }

  for (var i = 0, n = line.length; i < n; i++) {
    if (i === n-1) {
      format += i+1 +'. '+line[i];
    }
    else {
      format += i+1 +'. '+line[i] + ', ';
    }
  }
  return format;
}

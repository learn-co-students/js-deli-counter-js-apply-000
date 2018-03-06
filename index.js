var katzDeli = [];

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  return "Welcome, " + name + ". You are number " + katzDeliLine.length + " in line.";
}



function nowServing(katzDeliLine) {
  var announcement = '';

  if (katzDeliLine.length === 0) {
    announcement = "There is nobody waiting to be served!";
  } else {
    announcement = "Currently serving " + katzDeliLine[0] + ".";
    katzDeliLine.shift();
  }

  return announcement;
}

function currentLine(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "The line is currently empty.";
  }

  var info = 'The line is currently: ';

  for (var i = 0; i < katzDeliLine.length; i++) {
    if (i === katzDeliLine.length - 1) {
      info += [i + 1] + ". " + katzDeliLine[i];
    } else {
      info += [i + 1] + ". " + katzDeliLine[i] + ", ";
    }
  }

  return info;
}

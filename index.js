var katzDeli = [];

function takeANumber(katzDeli, name) {
  katzDeli.push(name);
  var lineNum = katzDeli.length;
  return "Welcome, "+ name + ". You are number " + lineNum + " in line.";
}

function nowServing(katzDeli) {
  if (katzDeli.length === 0) {
    return "There is nobody waiting to be served!";
      }
  else {
    var firstInLine = katzDeli[0];
    katzDeli.shift();
    return "Currently serving " + firstInLine + ".";
  }
}

function currentLine (katzDeli) {
  if (katzDeli.length === 0 || katzDeli === null) {
    return "The line is currently empty.";
    }

  else {
    var theLine = "The line is currently: ";
    for (var i = 0; i < katzDeli.length; i++) {
      theLine += (i+1) + ". " + katzDeli[i] + ", ";
    }
    theLine = theLine.slice(0,theLine.length-2)
    return theLine;
  }
}

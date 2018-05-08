var katzDeliLine = [];

function takeANumber(katzDeliLine, name) {
    katzDeliLine.push(name);
    return "Welcome, " + name + ". You are number " + katzDeliLine.length + " in line.";
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!";
  } 
  else {
    var name = katzDeliLine[0];
    katzDeliLine.shift();
    return "Currently serving " + name + ".";
    } 
    return katzDeliLine;
}

function currentLine(katzDeliLine) {
  var line = [];
  if(katzDeliLine.length > 0) {
    for (var i = 0; i < katzDeliLine.length; i++) {
    var name = katzDeliLine[i];
    line.push(" " + (i + 1) + ". " + name);
  }
    return "The line is currently:" + line;  
} else {
  return "The line is currently empty.";
  }
}
var katzDeliLine = [];

function takeANumber(katzDeliLine, name) {
    katzDeliLine.push(name);
    return "Welcome, " + name + ". You are number " + katzDeliLine.length + " in line.";
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length > 0) {{
    var name = katzDeliLine[0];
    katzDeliLine.shift();
    return "Currently serving " + name + ".";
    } 
    return katzDeliLine;
}
  else {
    return "There is nobody waiting to be served!";
  }
}

function currentLine(katzDeliLine) {
  if (katzDeliLine.length > 0) {
    var line = [];
    for (var i = 0; i < katzDeliLine.length; i++) {
    var name = katzDeliLine[i];
    line.push(" " + (i + 1) + ". " + name);
  }
    return "The line is currently:" + line;  
} else {
  return "The line is currently empty.";
  }
}
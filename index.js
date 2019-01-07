var katzDeli = [];
function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  return "Welcome, " + name + ". You are number " + (katzDeliLine.length) + " in line."
}

function nowServing(katzDeliLine) {
  if(katzDeliLine.length > 0) {
    var name = katzDeliLine[0];
    katzDeliLine.shift();
    return "Currently serving " + name + "."
  }
  else {
    return "There is nobody waiting to be served!"
  }
}

function currentLine(katzDeliLine) {
  var line = "The line is currently: "
  if(katzDeliLine.length > 0) {
    for (var i = 1; i <= katzDeliLine.length; i++) {
      if(i === katzDeliLine.length) {
        line = line + i + ". " + katzDeliLine[i - 1];
      }
      else {
      line = line + i + ". " + katzDeliLine[i - 1] + ", ";
      }
    }
  }
  else {
    line = "The line is currently empty."
  }
  return line
}

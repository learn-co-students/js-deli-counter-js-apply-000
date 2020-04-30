var katzDeliLine = [];
function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name)
  return "Welcome, " + name + ". You are number " + katzDeliLine.length + " in line."
}


function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!"
  } else {
    var first = katzDeliLine[0];
    katzDeliLine.splice(0, 1);//remove one ele at inx zero
    return "Currently serving " + first + ".";
  }
}

function currentLine(katzDeliLine) {
    var line = []
    if (katzDeliLine.length === 0) {
      return "The line is currently empty."
    } else {
      for(var i = 0; i < katzDeliLine.length; i++) {
        line += (i + 1) + ". " + katzDeliLine[i] + ", "
      }
      //remove the last elements
      line = line.slice(0, -2);
      return "The line is currently: " + line
    }
}
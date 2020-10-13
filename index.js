function  takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  katzDeliLine = katzDeliLine.length;
  return "Welcome, " + name + ". You are number " + katzDeliLine + " in line.";
}

function nowServing(katzDeliLine) {
  while (katzDeliLine.length > 0) {
    return "Currently serving " + katzDeliLine.shift() + ".";
  }
  return "There is nobody waiting to be served!"
}

function currentLine(katzDeliLine) {
  var v = [];
  var i = 1;
  if (katzDeliLine.length > 0 ) {
    while (katzDeliLine.length > 0) {
      v.push(i + ". " + katzDeliLine.shift());
      i++
    }
    var s = v.join(", ");
    return "The line is currently: " + s;
  } else return "The line is currently empty."
}

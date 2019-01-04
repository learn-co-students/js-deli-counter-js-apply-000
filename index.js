var katzDeliLine =[];

function takeANumber (katzDeliLine,name) {
  var number = katzDeliLine.length + 1;
  katzDeliLine.push(name);
  return "Welcome, " + name + ". You are number " + katzDeliLine.length + " in line."
}

function nowServing (katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!";
  } else {
    return "Currently serving " + name + "."}
}

function currentLine (katzDeliLine) {
  var line = []
  if (katzDeliLine.length === 0) {
    return "The line is currently empty."
  } else {
    line.push ()
    for(var i = 0; i < katzDeliLine.length; i++) {
      line += (i + 1) + "." + katzDeliLine[i] + ", "
    }
    line = line.slice(0, line.length-2)
    return "The line is currently: " + line
  }
}

var katzDeliline = [];

function takeANumber(katzDeliline, name) {
  katzDeliline.push(name);
  var number = katzDeliline.length;
  return "Welcome, " + name + ". You are number " + number + " in line."  
}

function nowServing(deliLine) {
  if (deliLine.length > 0) {
    return "Currently serving " + deliLine.shift() + "."
  } else {
    return "There is nobody waiting to be served!"
  }
}

function currentLine(katzDeliline) {
  var line = [];
  if (katzDeliline.length > 0) {
    for (let i = 0; i < katzDeliline.length; i++) {
      line.push(' ' + (i + 1) + '.' + ' ' + katzDeliline[i])
    }
    return "The line is currently:" + line;
  } else {
    return "The line is currently empty."
  }
}

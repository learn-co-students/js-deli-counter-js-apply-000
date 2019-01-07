function takeANumber(katzDeliLine,name) {
  katzDeliLine.push(name);
  var position = katzDeliLine.length;
  return "Welcome, " + name + ". You are number " + position + " in line.";
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!"
  } else {
    return "Currently serving " + katzDeliLine.shift() + ".";
  };
}

function currentLine(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "The line is currently empty."
  } else {
    var numberName = []
    for (let i=0; i<katzDeliLine.length;i++){
      numberName.push(" " + (i+1) + ". " + katzDeliLine[i])
    }
    return "The line is currently:" + numberName
  }
}

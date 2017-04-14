function takeANumber (katzDeliLine, name) {
  katzDeliLine.push(name);
  return "Welcome, " + name + ". You are number " + katzDeliLine.length + " in line.";
}
function nowServing(katzDeliLine) {
  if(katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!";
  } else {
    var serving = katzDeliLine[0];
    var deliLine = katzDeliLine.splice(0, 1);
    return "Currently serving " + serving + ".";
  }
}

function currentLine(katzDeliLine) {
  var string = "The line is currently:";
  if(katzDeliLine.length === 0) {
    return "The line is currently empty.";
  } else {
    for (var i = 0; i < katzDeliLine.length; i++) {
      var person = katzDeliLine[i];
      string += " " + (i+1) + ". " + person + ","
    }
  }
  return string.slice(0, -1);
}

var katzDeli = ["Ada", "Grace", "Kent"];
function takeANumber(katzDeliLine, name) {
  return ("Welcome, " + name + ". You are number " + katzDeliLine.push(name) + " in line.")
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!";
  } else {
    return 'Currently serving ' + katzDeliLine.shift() + "."
  }
}

function currentLine(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "The line is currently empty.";
  } else {
    var currentLineStrings = [];
    for (var i = 0; i < katzDeliLine.length; i++) {
      currentLineStrings.push(i + 1 + ". " + katzDeliLine[i]);
    }
    return "The line is currently: " + currentLineStrings.join(", ");
  }
}
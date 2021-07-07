function takeANumber(line, name) {
  line.push(name);
  return "Welcome, " + name + ". You are number " + (line.length) + " in line.";
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length > 0) {
    return "Currently serving " + katzDeliLine.shift() + ".";
  } else {
    return "There is nobody waiting to be served!";
  }
}

function currentLine(line) {
  if (line.length === 0) {
      return "The line is currently empty.";
  }

  var numLine = [];
  for (var i = 0; i < line.length; i++) {
    numLine.push((i + 1) + ". " + line[i]);
    var sentence = "The line is currently: " + numLine.join(", ");
  }

  return sentence;
}

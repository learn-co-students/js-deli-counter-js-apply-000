function takeANumber(line, name) {
  line.push(name);
  return "Welcome, " + name + ". You are number " + (line.length) + " in line.";
}

function nowServing(katzDeliLine) {
  for (var i = katzDeliLine.length; i >= 0; i--) {
    if (i > 0) {
      return "Currently serving " + katzDeliLine.shift() + ".";
    } else {
      return "There is nobody waiting to be served!";
    }
  }
}

function currentLine(line) {
  if (line.length === 0) {//went through all the ways to figure out if array was empty...
      return "The line is currently empty.";//Had scoping issues, figuring out where to put this.
  }

  var numLine = [];//scoping issues, placed this originally inside for loop
  for (var i = 0; i < line.length; i++) {
    numLine.push((i + 1) + ". " + line[i]);
    var sentence = "The line is currently: " + numLine.join(", ");
  }

  return sentence;
}

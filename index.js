function takeANumber(katzDeliLine, person) {
  katzDeliLine.push(person);
  var string = "Welcome, " + person + ". You are number " + katzDeliLine.length + " in line.";
  return string;
}

function nowServing(deliLine) {
  if (deliLine.length === 0) {
    return "There is nobody waiting to be served!";
  } else {
    return "Currently serving " + deliLine.shift() + ".";
  }
}

function currentLine(line) {
  if (line.length === 0) {
    return "The line is currently empty.";
  }
  var str = "The line is currently: ";
  for (var i = 0; i < line.length; i += 1) {
    var name = line[i];
    var string = i+1 + ". " + name + ", ";
    str += string;
    var newStr = str.slice(0, str.length - 2)
  }

  return newStr;
}

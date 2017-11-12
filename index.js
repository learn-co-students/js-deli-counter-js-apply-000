function takeANumber(katzDeliLine, person) {
  katzDeliLine.push(person);
  return "Welcome, " + person + ". " + "You are number " + katzDeliLine.length + " in line.";
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!";
  } else {
    var person = katzDeliLine[0];
    katzDeliLine.shift();
    return "Currently serving " + person + ".";
  }
}

function currentLine(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "The line is currently empty.";
  }
  var string = "The line is currently: "
  for (var i = 0; i < katzDeliLine.length; i++) {
    string += i + 1 + ". " + katzDeliLine[i] + ", ";
  }
  string = string.slice(0, -2);
  return string;
}

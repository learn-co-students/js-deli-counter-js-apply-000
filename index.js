var katzDeliLine = [];

function takeANumber(katzDeliLine, person) {
    katzDeliLine.push(person);
    return "Welcome, " + person + ". You are number " + katzDeliLine.length + " in line.";
  }

function currentLine(katzDeliLine) {
  if (katzDeliLine.length == 0) {
    return "The line is currently empty."
  }

var list = [];
for (var i = 0; i < katzDeliLine.length; i++) {
    list.push((i+1) + ". " + katzDeliLine[i]);
    }
    list = list.join(', ')
    return "The line is currently: " + list;
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length == 0)  {
  return "There is nobody waiting to be served!"
} else {
  return "Currently serving " + katzDeliLine.shift() + ".";
}
}

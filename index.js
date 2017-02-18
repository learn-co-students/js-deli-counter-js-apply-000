// appends new person/people to deli line and gives out number
function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);

  for (var i = 0; i < name.length; i++) {
      return "Welcome, " + name + ". You are number " + (katzDeliLine.length) + " in line.";
      i++;
    }
}

function nowServing(katzDeliLine) {
  while(katzDeliLine.length > 0) {
    return "Currently serving " + katzDeliLine.shift() + ".";
  }
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!"
  }
}

function currentLine(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "The line is currently empty."
  }
var nameInLine = []; // new array to combine number with name

  if (katzDeliLine.length > 0) {
    for (var i = 1; i <= katzDeliLine.length; i++) { // counter for number in line
      for (var j = 0; j < katzDeliLine.length; j++) { // counter for person in line
        if (katzDeliLine[j] === katzDeliLine[0]) { // don't create space before first number
          nameInLine.push([i] + ". " + katzDeliLine[j])
          i++;
        }
        else {
          nameInLine.push(" " + [i] + ". " + katzDeliLine[j]);
          i++;
        }
      }
    }
  }
  return "The line is currently: " + nameInLine;
}

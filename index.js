function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  var ticketNumber = katzDeliLine.length;
  return "Welcome, " + name + "." + " You are number " + ticketNumber + " in line.";
}

function nowServing(array) {
  if (array.length < 1) {
    return "There is nobody waiting to be served!";
  } else {
    var currPerson = array[0];
    array.shift(currPerson);
    return "Currently serving " + currPerson + ".";

  }
}

function currentLine (line) {
  var serving = "The line is currently: "

  if (line.length < 1) {
    return "The line is currently empty.";
  }

  if (line.length < 2) {
    return "The line is currently: " + line[0];

  } else {
      for (var i = 0; i < line.length - 1; i++) {
        var position = i + 1;
        var name = line[i];
    serving += (position + ". " + name + ", ");
      }
    }
  var lastPerson = line[line.length - 1]
  serving += (line.length + (". ") + lastPerson);

  return serving;

}

var katzDeliLine = ["John", "Anna", "Martha"]

console.log(nowServing(katzDeliLine));
console.log(currentLine(katzDeliLine));

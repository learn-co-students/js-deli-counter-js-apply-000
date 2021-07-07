var katzDeliLine = [];

function takeANumber(line, person){
  var currentLine = line;
  currentLine.push(person);
  var position = currentLine.indexOf(person) + 1;
  return "Welcome, " + person + ". " + "You are number " + position + " in line.";
}

function nowServing(line){
  if (line.length === 0) {
    return "There is nobody waiting to be served!";
  }
  var announcement = ""
  for (var i = 0; i < line.length; i++){
    var person = line[i];
    if (i === 0) {
      announcement += "Currently serving " + person + ".";
    }
  }
  line = line.shift();
  return announcement;
}

function currentLine(line){
  if (line.length === 0) {
    return "The line is currently empty.";
  }
  var lineStatus = "The line is currently: "
  for (var i = 0; i < line.length; i++){
    var person = line[i];
    var position = line.indexOf(person) + 1;
    lineStatus += position + ". " + person;
    if (i != line.length - 1) {
      lineStatus += ", ";
    }
  }
  return lineStatus;
}

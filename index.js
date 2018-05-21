var katzDeli = [];
var otherDeli = ["Steven", "Blake", "Avi"];

function takeANumber(array, name) {
  array.push(name);
  var number = array.length;
  return "Welcome, " + name + ". You are number " + number + " in line.";
}

function nowServing(array) {
  var servingPerson = array[0];
  if (array.length === 0) {
    return "There is nobody waiting to be served!";
  } else {
    array.shift();
    return "Currently serving " + servingPerson + ".";
  }
}

function currentLine(array) {
  if (array.length === 0) {
    return "The line is currently empty.";
  }
  var currentLine = "The line is currently: ";
  for (var i = 0; i < array.length; i++) {
    var number = i + 1;
    var name = array[i];
    currentLine += number + ". " + name + ", ";
  }
  return currentLine.slice(0, -2);
}

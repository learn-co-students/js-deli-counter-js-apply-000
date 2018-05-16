var katzDeli = [];
var otherDeli = ["Steven", "Blake", "Avi"];

function takeANumber(array, string) {
  array.push(string);
  var index = array.indexOf(string) + 1;
  return "Welcome, " + string + ". You are number " + index + " in line.";
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
  var line = "The line is currently: ";
  for (var i = 0; i < array.length; i++) {
    var number = i + 1;
    var name = array[i];
    line += number + ". " + name + ", ";
  }
  return line.slice(0, -2);
}

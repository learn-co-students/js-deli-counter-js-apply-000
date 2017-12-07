var katzDeli = [];

function takeANumber(katzDeli, person) {
  var index = 0;
  if (katzDeli.indexOf(person) === -1) {
    katzDeli.push(person);
  }
  index = katzDeli.indexOf(person) + 1;
  return `Welcome, ${person}. You are number ${index} in line.`;
}

function nowServing(katzDeli) {
  if (katzDeli.length === 0) {
    return "There is nobody waiting to be served!";
  }
  var nextPerson = katzDeli.shift();
  return "Currently serving " + nextPerson + ".";
}

function currentLine(katzDeli) {
  if (katzDeli.length === 0) {
    return "The line is currently empty."
  }
  var string = "The line is currently: "
  for (var i = 0; i < katzDeli.length-1; i++) {
    string += (i + 1) + ". " + katzDeli[i] + ", ";
  }
  return string + katzDeli.length + ". " + katzDeli[katzDeli.length - 1];
}
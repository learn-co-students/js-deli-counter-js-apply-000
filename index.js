"use strict";

function takeANumber(line, person) {
  line.push(person);
  return "Welcome, " + person + ". You are number "+ line.length + " in line.";
}

function nowServing(line) {
  if (!line.length) {
    return "There is nobody waiting to be served!";
  } else {
    var name = line.shift();
    return "Currently serving " + name + ".";
  }
}

function currentLine(line) {
  if (!line.length) {
    return "The line is currently empty.";
  } else {
    var order = [];
    line.forEach(
      function(p, i) {
        order.push(i + 1 + ". " + p);
      }
    );
    return "The line is currently: " + order.join(", ");
  }
}

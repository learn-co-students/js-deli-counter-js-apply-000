//  Index.js
//  Created by Charles Albert Samuels on 12.06.16.

//EFFECTS: Gives a ticket for name and number in line
//MODIFIES: Pushes new name onto line array
function takeANumber(line, name) {
  return "Welcome, " + name + ". You are number " + line.push(name) + " in line."
}

//EFFECTS: Notifies if line is empty or else who is first in line
//MODIFIES: Shifts first in line off of line array
function nowServing(line) {
  if (line.length === 0) {
    return "There is nobody waiting to be served!"
  }
  else {
    return "Currently serving " + line.shift() + "."
  }
}

//EFFECTS: Notifies if line is empty or else the contents of the line
function currentLine(line) {
  if (line.length === 0) {
    return "The line is currently empty."
  }
  else {
    var out = [];
    for (var i = 0; i < line.length; i++) {
      out.push(" " + (i + 1) + ". " + line[i])
    }
    return "The line is currently:" + out.toString()
  }
}

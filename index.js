
function takeANumber (line, newPerson) {
line.push(newPerson);
return "Welcome, " + newPerson + ". You are number " + line.length + " in line.";
}

function nowServing (line) {
  if (line.length == 0) {
    return "There is nobody waiting to be served!";
  } else {
    return "Currently serving " + line.shift() + ".";
  }
}

function currentLine (line) {
  if (line.length == 0) {
    return "The line is currently empty."
  } else {
    return "The line is currently:" + line.map (el => " " + (line.indexOf(el) + 1) + ". " + el).toString();
    }
  }

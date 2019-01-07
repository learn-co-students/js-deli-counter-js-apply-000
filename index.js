function takeANumber(array, name) {
  array.push(name);
  for (var i = 0; i < array.length; i++) {
    var place = array[i];
    if (place === name) {
      return "Welcome, " + name + ". You are number " + (i+1) + " in line."
    }
  }
}

function nowServing(array) {
  var nextPerson = array[0];
  if (array.length === 0) {
    return "There is nobody waiting to be served!"
  } else {
    array = array.splice(0,1);
    return "Currently serving " + nextPerson + ".";
  }
}

function currentLine(array) {
  var line = ""
  if (array.length === 0) {
    return "The line is currently empty.";
  } else {
    for (var i = 0; i < array.length; i++) {
      var place = array[i];
      line += ((i+1) +". " + array[i] + ", ")
    }
  }
  return "The line is currently: " + line.slice(0, line.length - 2);
}

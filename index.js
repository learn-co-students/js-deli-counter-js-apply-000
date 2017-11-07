function takeANumber(line, name){
  line.push(name);
  return "Welcome, " + name + ". You are number " + line.length + " in line."
}

function nowServing(line) {
  if(line.length > 0){
    var first = line.shift();
    return "Currently serving " + first + ".";
  } else {
    return "There is nobody waiting to be served!";
  }
}

function currentLine(line) {
  var str = "The line is currently: ";
  if(line.length > 0) {
    for (var i = 0; i < line.length; i++) {
      str += (i+1) + ". " + line[i] + ", ";
    }
  } else {
    return "The line is currently empty.";
  }

  return str.slice(0,-2);
}

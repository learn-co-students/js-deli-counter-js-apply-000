function takeANumber(line, name) {
  line.push(name);
  return "Welcome, " + name + ". You are number " + line.length + " in line.";
}

function nowServing(line) {
  if(line.length === 0) {
    return "There is nobody waiting to be served!";
  }
  else {
    var person = line[0];
    line.splice(0,1);
    return "Currently serving " + person + ".";
  }
}

function currentLine(line) {
  if(line.length === 0) {
    return "The line is currently empty.";
  }
  else {
    var result = "The line is currently: ";
    for(var i = 1; i <= line.length; i++) {
      if(i > 1) {
        result += ", ";
      }
      result += i + ". " + line[i-1];
    }
    return result;
  }
}
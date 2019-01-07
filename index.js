var katzDeli = [];

function takeANumber(line,name) {
  line.push(name);
  return "Welcome, " + name + ". You are number " + line.length + " in line.";
}

function nowServing(line) {
  if (line.length === 0) {
    return "There is nobody waiting to be served!";
  } else {
    var serving = line.shift();
    return "Currently serving " + serving + ".";
  }
}

function currentLine(line) {
  if (line.length === 0) {
    return "The line is currently empty.";
  }
    var arr = [];
    for (var i = 0; i < line.length; i++) {
    arr.push((i + 1) + ". " +  line[i])
  }
  return "The line is currently: " + arr.join(', ')
}

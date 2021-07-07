var takeANumber = function(line,name) {
  line.push(name);
  return "Welcome, " + name + ". You are number " + line.length + " in line.";
};

var nowServing = function(line) {
  if (line.length > 0) {
    var next = line[0];
    line.splice(0,1);
    return "Currently serving " + next + ".";
  }
  else {
    return "There is nobody waiting to be served!";
  }
};

var formatLine = [];
var currentLine = function(line) {
  if (line.length > 0) {
    for (var i = 0; i < line.length; i++) {
      formatLine[i] = (i + 1) + ". " + line[i].toString();
    }
  return "The line is currently: " + formatLine.join(', ');
  }
  else {
    return "The line is currently empty.";
  }
};
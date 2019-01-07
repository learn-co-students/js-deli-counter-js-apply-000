var katzDeli = [];
var otherDeli = ["Steven", "Blake", "Avi"];

function takeANumber(aLine, name) {
  aLine.push(name);
  return "Welcome, " + name + ". You are number " + aLine.length + " in line.";
}


function nowServing(bLine) {
  if (bLine.length === 0) {
    return "There is nobody waiting to be served!";
  }
  if (bLine.length > 0) {
    var first = bLine[0];
    bLine.splice(0, 1)
    return "Currently serving " + first + ".";
  }
}

function currentLine(cLine) {
  var i = 0;
  var line = "";

  if (cLine.length === 0) {
    return "The line is currently empty."
  }
  if (cLine.length > 0) {
    for (i = 0; i < cLine.length; i++) {
      var j = i + 1;
      line = line + " " + j + ". " + cLine[i] + ",";
    }
    line = line.slice(0, -1);
    return "The line is currently:" + line;
  }
}

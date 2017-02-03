var katzDeli = [];

function takeANumber(deliLine, name) {
  deliLine.push(name);
  return "Welcome, " + name + ". You are number " + deliLine.length + " in line.";
}


function nowServing(deliLine) {
  if (deliLine.length > 0) {
    // so how do we get a name and how do we store it?
    var name = deliLine[0]
    // how do we remove the first element of an array?
    deliLine = deliLine.shift();
    return "Currently serving " + name + "."
  }

  if (deliLine.length === 0) {
    return "There is nobody waiting to be served!"
  }
}

function currentLine(deliLine) {
  var lineList = []
  if (deliLine.length === 0) {
    return "The line is currently empty.";
  } else {
    for(var i = 0; i < deliLine.length; i++){
      lineList += (i + 1) + ". " + deliLine[i] + ", ";
    }
    // an extra space at the end of the string
    lineList = lineList.slice(0, lineList.length-2);
    // an extra comma
    return "The line is currently: " + lineList;
  }
}

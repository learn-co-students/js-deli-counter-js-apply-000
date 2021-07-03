var katzDeli = [];
var katzDeliLine = ["Steven", "Blake", "Avi"];

var takeANumber = function(katzDeliLine, newName) {
  katzDeliLine.push(newName);
  var PlaceInLine = katzDeliLine.indexOf(newName) + 1;
  return "Welcome, " + newName + ". " + "You are number " + PlaceInLine + " in line.";
}

var nowServing = function(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!";
  } else {
    var name = katzDeliLine[0];
    katzDeliLine.splice(0, 1);
    return "Currently serving " + name + ".";
  }
}

function currentLine(x) {
    var line = []
    if (x.length === 0) {
      return "The line is currently empty."
    } else {
      for(var i = 0; i < x.length; i++) {
        line += (i + 1) + ". " + x[i] + ", "
      }
      line = line.slice(0, line.length-2)
      return "The line is currently: " + line
    }
}

var katzDeli = [];

function takeANumber(line, name) {
  line.push(name);
  var position1 = line.indexOf(name)
  var realposition = position1 + 1
  return ("Welcome, " + name + ". You are number " + realposition + " in line." )
}

function nowServing(linename) {
  if (linename.length === 0) {
    return "There is nobody waiting to be served!";
  } else {
    var first = (linename[0])
    linename.shift()
  	return ("Currently serving " + first + ".")
  }
}

function currentLine(linename) {
  if (linename.length === 0) {
    return "The line is currently empty.";
  } else {
    var intro = "The line is currently: ";
    return (intro + "1. " + linename[0] + ", 2. " + linename[1] + ", 3. " + linename[2])
  }
}

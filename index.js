function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name)
  return `Welcome, ${name}. You are number ${katzDeliLine.indexOf(name) + 1} in line.`
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length >= 1) {
    return `Currently serving ${katzDeliLine.shift()}.`
  }
  else {
    return "There is nobody waiting to be served!"
  }
}

function currentLine(line) {
  
 var returnArray = [];
 
    if (line.length >= 1) {
      for (var i = 0; i < line.length; i++) {
        var theName = line[i]
        returnArray.push(" " + `${line.indexOf(theName) + 1}. ${theName}`);
      }
    return "The line is currently:" + returnArray
  }
  else {
    return "The line is currently empty.";
  }
}
var katzDeliLine = [];

/*function takeANumber(katzDeliLine, newName) {
  katzDeliLine = katzDeliLine.push(newName);
  return `Welcome, ${newName}. You are number ${katzDeliLine.length} in line.`
}*/

function takeANumber(currentDeliLine, newName) {
  return `Welcome, ${newName}. You are number ${currentDeliLine.push(newName)} in line.`
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length > 0) {
    return  `Currently serving ${katzDeliLine.shift()}.`;
  }
  else {
    return "There is nobody waiting to be served!"
  }
}

function currentLine(katzDeliLine) {
  if (katzDeliLine.length > 0)  {
    var line = "The line is currently: ";
    var i;
    for (i = 0; i < katzDeliLine.length; i++) {
      line += `${i + 1}. ${katzDeliLine[i]}`;
      if (i + 1 < katzDeliLine.length) {
          line += ", "
      }
    }
    return line
  }

  else {
    return "The line is currently empty."
  }
}

  /*var newKatzDeliLine = [];
  var numberString = "";
  var number = "";
  newKatzDeliLine = katzDeliLine.push(newName);
  numberString = newKatzDeliLine.length;
  number = parseInt(numberString)
  return (`Welcome, ${newName}. You are number ${number} in line.`)
  }*/

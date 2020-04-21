
function takeANumber(katzDeliLine, newPerson) {
    katzDeliLine.push(newPerson)
    var num = katzDeliLine.length;
 
  return "Welcome, " + newPerson + "." + " You are number " + num + " in line.";
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return 'There is nobody waiting to be served!';
  } else {
   return 'Currently serving ' + katzDeliLine.shift() + '.';
  }
}



function currentLine(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return 'The line is currently empty.';
  }
  var currentLine = 'The line is currently: ';
  for (var i = 0; i < katzDeliLine.length; i++) {
    var name = katzDeliLine[i];
    var num = i + 1;
    var str = num + '. ' + name;
    if (i !== katzDeliLine.length -1 && i !== 0) {
      currentLine += ' ' + str + ',';
      } else if (i === 0) {
      currentLine += str + ',';
      } else {
      currentLine += ' ' + str;
    }
  }
  return currentLine;
}
  

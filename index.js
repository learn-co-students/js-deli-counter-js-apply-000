function takeANumber(katzDeliLine, person) {
  var count = katzDeliLine.length + 1;
  var message = `Welcome, ${person}. You are number ${count} in line.`;
  var newLine = katzDeliLine;
  newLine.push(person);
  return message;
}
function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!";
  }
  var firstPerson = katzDeliLine.shift();
  return `Currently serving ${firstPerson}.`;
}

function currentLine(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "The line is currently empty.";
  }
  var announcement = "The line is currently:";
  
  for (var i = 0; i < katzDeliLine.length; i += 1) {
    var person = katzDeliLine[i];
    var position = i + 1
    if (i === katzDeliLine.length - 1) {
      announcement += ` ${position}. ${person}`;
    } else {
    announcement += ` ${position}. ${person},`;
    }
  }
  
  return announcement;
  }

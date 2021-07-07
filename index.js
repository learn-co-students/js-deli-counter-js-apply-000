function takeANumber (katzDeliLine, name) {
  var yourPosition = katzDeliLine.length + 1
  var response = "Welcome, " + name + ". You are number " + yourPosition + " in line." 
  katzDeliLine.push(name)
  return response
}

function nowServing (katzDeliLine) {
  if (katzDeliLine.length > 0) {
    var removed = katzDeliLine.splice(0,1)
    return "Currently serving " + removed + "."
  }
  else {
    return "There is nobody waiting to be served!"; 
  }
}
  
function currentLine(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "The line is currently empty."
  }
  else {
    var announcement = "The line is currently: ";
    var i = 0;
    var number = i + 1
    while (i < katzDeliLine.length - 1) {
      announcement += number + ". " + katzDeliLine[i] + ", ";
      i++;
      number++;
    }
    announcement += number + ". " + katzDeliLine[i];
    return announcement  
  }
}
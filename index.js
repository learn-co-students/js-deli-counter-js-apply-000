function takeANumber (katzDeliLine, newPerson) {
  katzDeliLine.push(newPerson);
  return "Welcome, " + newPerson + ". You are number " + katzDeliLine.length + " in line.";
}

function nowServing (katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!";
  }
  else {
  return "Currently serving " + katzDeliLine.shift() + ".";
  }
}

function currentLine (katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "The line is currently empty.";
    }
  else {
    var line = "";
    katzDeliLine.forEach(function(element, id, array) {
      if (id < katzDeliLine.length - 1) {
        line += (id + 1) + ". " + element + ", ";
      }
      else {
        line += (id + 1) + ". " + element;
      }
    });
    
      return "The line is currently: " + line;
  }
}
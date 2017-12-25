function takeANumber(katzDeliLine, newCustomer) {
  //return: string indicating newCustomer's position in the line
  katzDeliLine.push(newCustomer);
  return "Welcome, " + newCustomer + ". You are number " + katzDeliLine.length + " in line.";
}

function nowServing(katzDeliLine) {
  //return: the first person in line then remove that individual from the line
  //return: "There is nobody waiting to be served!" if nobody is in line
  if(!katzDeliLine.length) {
    return "There is nobody waiting to be served!";
  } else {
    return "Currently serving " + katzDeliLine.shift() + ".";
  }
}

function currentLine(katzDeliLine) {
  //return: the current line of people in a string
  //return: "The line is currently empty." if nobody in line
  if(!katzDeliLine.length) {
    return "The line is currently empty.";
  }

  var peopleInLine = "The line is currently: "
  for(var i = 0; i < katzDeliLine.length; i++) {
    var numInLine = i + 1;
    var name = katzDeliLine[i];
    peopleInLine += numInLine + ". " + name + ", ";
  }
  return peopleInLine.slice(0, peopleInLine.length - 2);
}

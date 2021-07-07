function takeANumber(currentLine, newPerson) {
  currentLine.push(newPerson);
  return `Welcome, ${newPerson}. You are number ${currentLine.length} in line.`;
}

function nowServing(katzDeliLine) {
  if(katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!";
  } 
  else {
    return "Currently serving " + katzDeliLine.shift() + ".";
  }
}

function currentLine(katzDeliLine) {
  if(katzDeliLine.length === 0) {
    return "The line is currently empty.";
  } else {
    let queue = [];
    let fullQueue = [];
    let string = "The line is currently: ";
    let queueNumber = 0;
    for (let i = 0; i < katzDeliLine.length - 1; i++) {
    queueNumber++;
    let personInQueue = katzDeliLine[i]
    queue += queueNumber + ". " + personInQueue + ", "
    fullQueue = queue + katzDeliLine.length + ". " + katzDeliLine[katzDeliLine.length - 1] 
    } 
    return string + fullQueue;
}
}
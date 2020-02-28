function takeANumber (waitingList, personName) {
  waitingList.push(personName);
  return (
    "Welcome, " 
    + personName
    + ". You are number "
    + waitingList.length
    + " in line.")
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length > 0) 
    return "Currently serving "
    + katzDeliLine.shift()
    +".";
    else return "There is nobody waiting to be served!"
}

var line = [];

function currentLine (katzDeliLine) {
  let i = 0;
  while (i < katzDeliLine.length) {
    line.push(" " + [i+1] + "." + " " + katzDeliLine[i])
    i++;
  }
  if (katzDeliLine.length === 0) {
    return "The line is currently empty.";
  } else 
  return "The line is currently:" + line;
}
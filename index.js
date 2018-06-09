var katzDeli = [];
function takeANumber(katzDeliLine, name) {
  //assuming this function is for adding people to the queue, not finding the location of a person already in the queue
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`;
}
function nowServing(katzDeliLine) {
  //0 is untruthy, so I can avoid using ".length === 0"; not sure if I should use it anyway to make my code more readable, though?
  if (katzDeliLine.length) {
    return `Currently serving ${katzDeliLine.shift()}.`;
  }
  else
    return "There is nobody waiting to be served!";
}
function currentLine(katzDeliLine) {
  if (katzDeliLine.length) {
    let peopleInLine = "";
    for (let i = 0; i<katzDeliLine.length; i++) {
      peopleInLine+= `${i+1}. ${katzDeliLine[i]}, `;
    }
    peopleInLine = peopleInLine.substring(0, (peopleInLine.length-2))
    return `The line is currently: ${peopleInLine}`;
  }
  else
    return "The line is currently empty.";
}
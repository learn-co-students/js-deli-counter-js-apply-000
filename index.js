function takeANumber(currentLine, newPerson) {
  
  currentLine.push(newPerson); //[] -> ["Ada"]
  return "Welcome, " + newPerson + ". You are number " + currentLine.length + " in line.";
  
}
const line = [];
takeANumber([], "Ada");

function nowServing(currentLine) {
  
  if (currentLine.length === 0) {
    return "There is nobody waiting to be served!";
  }
  
  let firstPersonInLine = currentLine.shift();
    return "Currently serving " + firstPersonInLine + '.';
}

function currentLine(line) {
    // var peopleInLine='The line is currently: ' + 1 + ". " + line[0] + 2 + ". " + line[1];

  
  var peopleInLine='The line is currently: ' ;
  
  if (line.length === 0) {
    return "The line is currently empty.";
  }
  let spotInLine = 1;
  for(let i=0; i < line.length; i++) {
    peopleInLine += spotInLine + ". " + line[i] + ", ";
    spotInLine++;
  }
  peopleInLine.substring(0,peopleInLine.length-2)
  
  return peopleInLine.substring(0,peopleInLine.length-2);
}
// line -> ["Ada", "Grace"]
//"The line is currently: 1. Ada, 2. Grace"`


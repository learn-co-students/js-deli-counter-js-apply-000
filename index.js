
function takeANumber(line, name) {
  line.push(name);
  return `Welcome, ${name}. You are number ${line.length} in line.`;
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!";
  }
  
  var first = katzDeliLine[0];
  katzDeliLine.splice(0,1);
  return "Currently serving " + first + ".";
}

function currentLine(line) {
  if (line.length === 0) {
    return "The line is currently empty."
  }
  
  var waiting = "The line is currently: "
  for (var i = 0; i < line.length; i++) {
    var person = `${i+1}. ${line[i]}, `;
    waiting = waiting + person;
  }
  waiting = waiting.substring(0, waiting.length - 2);
  
  return waiting;
}
var katzDeliLine = [];

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`;
}

function nowServing(katzDeliLine) {
  if(katzDeliLine.length === 0)
    return "There is nobody waiting to be served!";
  else
    return `Currently serving ${katzDeliLine.splice(0,1)}.`;
}

function currentLine(katzDeliLine) {
  if(katzDeliLine.length === 0)
    return "The line is currently empty.";
  else {
    var message = "The line is currently:";
    
    for(var i = 0; i < katzDeliLine.length; i++) {
      message = message + ` ${i + 1}. ${katzDeliLine[i]},`;
    }
    message = message.slice(0,-1);
    return message;
  }
}
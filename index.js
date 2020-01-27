function takeANumber(katzDeliLine, name) {
  var message = "Welcome, ";
  katzDeliLine.push(name);
  message += name + ". You are number " + katzDeliLine.length + " in line."
  return message;
}

function nowServing(katzDeliLine) {
  var message = "Currently serving "
  if (!katzDeliLine.length) {
    message = "There is nobody waiting to be served!"
  } else {
    message += katzDeliLine[0] + ".";
    katzDeliLine.shift();
  }
  return message;
}


function currentLine(katzDeliLine) {
  var line = [];
  var message = "The line is currently: ";
  
  if (!katzDeliLine.length) {
    message = "The line is currently empty.";
  }
  for (var i = 0; i < katzDeliLine.length; i++) {
    line.push(`${i+1}. ${katzDeliLine[i]}`);
  }
  return `${message}${line.join(', ')}`
}

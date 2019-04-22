function takeANumber(currentLine, newCustomer) {
  var str = '';
  currentLine.push(newCustomer);
  str += "Welcome, " + newCustomer + ". You are number " + currentLine.length + " in line.";
  
  return str;
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length < 1) {
    return "There is nobody waiting to be served!"
  } else {
    return "Currently serving " + katzDeliLine.shift() + ".";
  }
}

function currentLine(currentQueue) {
  var message = "The line is currently: "
  if (currentQueue.length < 1) {
    return "The line is currently empty."
  }
  
  for (var i = 0; i < currentQueue.length; i++) {
    var customer = currentQueue[i];
    if (i === currentQueue.length - 1) {
      message += (i + 1) + ". " + customer;
    } else {
      message += (i + 1) + ". " + customer + ", ";
    }
  }
  
  return message;
}
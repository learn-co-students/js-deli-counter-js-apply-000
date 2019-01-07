var katzDeliLine = [];

function takeANumber(katzDeliLine, newCustomerName) {
  katzDeliLine.push(newCustomerName);
  return ("Welcome, " + newCustomerName + ". You are number " + (katzDeliLine.length) + " in line.")
}

function nowServing(line) { if (line.length >= 1)
  {
    return ("Currently serving " + line.shift() + ".");
  }
else {
  return ("There is nobody waiting to be served!");
  }
};


function currentLine(line) { if (line.length > 0)
  {
    var lineLoop = [];
    for (var i = 0; i < line.length; i++) {
    lineLoop.push(" " + (i + 1) + ". " + line[i]);
  }
    return ("The line is currently:" + lineLoop);
  }
else {
  return ("The line is currently empty.");
  }
}

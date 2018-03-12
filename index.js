var katzDeliLine = [];

function takeANumber(katzDeliLine, newCustomer) {
  katzDeliLine.push(newCustomer);
  return "Welcome, " + newCustomer + ". You are number " + katzDeliLine.length + " in line.";
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!";
  } else {
    var temp = katzDeliLine.shift();
    return "Currently serving " + temp + ".";
  }
}

function currentLine(katzDeliLine) {
  var string = "The line is currently: ";
  
  if (katzDeliLine.length === 0) {
    return "The line is currently empty.";
  } 
  else {
    for(var i = 0; i < katzDeliLine.length; i++) {
      string += (i+1) + ". " + katzDeliLine[i];
      if (i != katzDeliLine.length-1) {
        string += ", ";
      }
    }
    return string;
  }
}
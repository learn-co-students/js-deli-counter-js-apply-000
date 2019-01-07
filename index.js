function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  
  return "Welcome, " + name + ". You are number " + katzDeliLine.length  + " in line.";
}

function nowServing(katzDeliLine) {
  
  // return first person in line
  if (katzDeliLine.length !== 0) {
    var name = katzDeliLine.shift()
    return "Currently serving " + name + ".";
  }
  else { // array is empty
    return "There is nobody waiting to be served!";
  }
}

function currentLine(katzDeliLine) {
  if (katzDeliLine.length !== 0) {
    var string = "The line is currently: ";
    
    for (var i = 0; i < katzDeliLine.length; i++) {
      // this makes sure we only add commas in the right places
      if (i !== katzDeliLine.length - 1) {
        string += (i + 1) + ". " + katzDeliLine[i] + ", ";
      }
      else {
        string += (i + 1) + ". " + katzDeliLine[i];
      }
    }
    
    return string;
  }
  else {
    return "The line is currently empty.";
  }
}
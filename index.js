
function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  return "Welcome, " + name + "."  + " You are number " + katzDeliLine.length +  " in line."; 
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length > 0) {
    var beingServed = katzDeliLine[0];
    katzDeliLine.shift();
    return "Currently serving " + beingServed + ".";
  }
  else {
    return "There is nobody waiting to be served!";
  }
}

function currentLine(katzDeliLine) {
  var lineLength = katzDeliLine.length;
  var printLine = [];
  printLine = "The line is currently";
    if (lineLength == 0) {
      return printLine +  " empty.";
    }
    else {
      printLine += ": ";
        for( var ind = 0; ind < lineLength; ind++ ) {
          printLine+= (ind + 1) + ". " + katzDeliLine[ind]; 
          if (ind < lineLength - 1) {
            printLine+= ", ";
          }
        }
    }
    return printLine;
}
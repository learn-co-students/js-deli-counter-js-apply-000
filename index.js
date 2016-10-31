var katzDeliLine = [];
function takeANumber(katzDeliLine) {
  katzDeliLine.append(katzDeliLine.length + 1);
  return "Welcome! You are number " + katzDeliLine.length + 1 + " in line.";
}

function nowServing(katzDeliLine) {
  var serving = katzDeliLine.splice(0, 1);
  if (serving.length == 1) {
    return "Currently serving " + serving + ".";
  } else {
    return "There is nobody waiting to be served!";
  }
}

function currentLine(katzDeliLine) {
  if (katzDeliLine === null || katzDeliLine.length === 0) {
    return "The line is currently empty.";
  } else {
    var waiting = "The line is currently: ";
    for (var i = 0; i < katzDeliLine.length; i++) {
      waiting += (i+1) + ". " + katzDeliLine[i];
       if (i < katzDeliLine.length - 1){
       waiting += ", ";}
    }
    return waiting;
  }
}

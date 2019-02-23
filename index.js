function takeANumber(katzDeli, customerName) {
  // provide actual position in line & not index
  var x = katzDeli.length + 1
  katzDeli.push(customerName);
  return "Welcome, " + customerName + "." + " You are number " + x
+ " in line.";
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length > 0) {
    var announcement = "Currently serving " + katzDeliLine[0] + ".";
    katzDeliLine.shift();
    return announcement;
  }
  else {
    return "There is nobody waiting to be served!";
  }
}

function currentLine(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "The line is currently empty.";
  }
  else {
    var announcement = "The line is currently: ";
    for (var x = 0; x < katzDeliLine.length; x++) {
      announcement += x+1 + "." + " " + katzDeliLine[x];
      if ((x + 1) < katzDeliLine.length) {
        announcement += ", ";
      }
    }
    return announcement;
  }
}

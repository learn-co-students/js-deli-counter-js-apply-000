var katzDeli = [];
var katzDeliLine = [];

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  var lineNumber = (katzDeliLine.length - 1) + 1;
  var customer = katzDeliLine[katzDeliLine.length - 1];
  return "Welcome, " + customer + ". " + "You are number " + lineNumber + " in line.";
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length > 0) {
    var firstCustomer = katzDeliLine.shift();
    return "Currently serving " + firstCustomer + ".";
  } else {
    return "There is nobody waiting to be served!";
  }
}

function currentLine(katzDeliLine) {
  var order = [];
  if (katzDeliLine.length > 0) {
    for (var i = 0; i < katzDeliLine.length; i++) {
      var customer = katzDeliLine[i];
      order.push((i + 1) + ". " + customer);
    }

    return "The line is currently: " + order.join(', ');
  } else {

    return "The line is currently empty.";
  }
}

function takeANumber(katzDeliLine,newCustomer) {
  katzDeliLine.push(newCustomer);
  var spotInLine = katzDeliLine.indexOf(newCustomer);
  spotInLine++;
  var greeting = "Welcome, " + newCustomer + ". You are number " + spotInLine + " in line.";
  return greeting;
}

function nowServing(katzDeliLine) {
  var firstCustomer = katzDeliLine.shift();
  var str = "Currently serving " + firstCustomer + ".";
  var result = firstCustomer ? str : "There is nobody waiting to be served!";
  return result;
}

function currentLine(katzDeliLine) {
  var str = "The line is currently: ";
  var customerList = [];
  
  for (let i = 0; i < katzDeliLine.length; i++) {
    customerList.push((i + 1) + ". " + katzDeliLine[i]);
  }
  var resultStr = "The line is currently: " + customerList.join(", ");
  var result = (katzDeliLine.length > 0) ? resultStr : "The line is currently empty.";
  return result;
}
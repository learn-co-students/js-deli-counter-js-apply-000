var katzDeli = []; //is this necessary?

function takeANumber(customersInLine,customerName){
  customersInLine.push(customerName);
  return "Welcome, " + customerName + ". You are number " + (customersInLine.length) + " in line.";
}

function nowServing(customersInLine){
  if (customersInLine.length === 0){
    return "There is nobody waiting to be served!";
  } else {
    var currentCustomer = customersInLine[0];
    customersInLine.shift();
    return "Currently serving " + currentCustomer + ".";
  }
}

function currentLine(customersInLine){
  var len = customersInLine.length;
  if (len === 0){
    return "The line is currently empty.";
  } else {
    var i;
    var customerNames = "";
    for (i=0;i<len-1;i++){
      customerNames += [i+1] + ". " + customersInLine[i] + ", ";
    }
    var lastCustomerInLine = len + ". " + customersInLine[len-1]
    return "The line is currently: " + customerNames + lastCustomerInLine;
  }
}
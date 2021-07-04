var katzDeli = [];

function takeANumber (katzDeliLine, newCustomer) {
if (katzDeliLine.length > 0);{
    katzDeliLine.push(newCustomer);
    return ('Welcome, ' + newCustomer + '. You are number ' + katzDeliLine.length + ' in line.')
}
}

function nowServing (katzDeliLine) { 
if(katzDeliLine.length <= 0) { 
return 'There is nobody waiting to be served!'; 
}
var customer = katzDeliLine.shift(); 
return "Currently serving " + customer + "."; 
}


function currentLine (katzDeliLine) {
if (katzDeliLine.length===0) {
  return "The line is currently empty.";
}
var customerAndNumber = [];
for (var i=0; i<katzDeliLine.length; i++) {
customerAndNumber.push(i + 1 + ". " + katzDeliLine[i])
}
return "The line is currently: " + customerAndNumber.join(", "); 
}
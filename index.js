var katzDeliLine = [];

// 1. Take a number

function takeANumber(katzDeliLine, name){
 if (katzDeliLine.length > 0); 
 // so array position doesn't start at zero
   katzDeliLine.push(name);

 // other way +1
  
 return(`Welcome, ${name}. You are number ${katzDeliLine.length} in line.`);
}


// 2. Now serving 

function nowServing (katzDeliLine) { 
   if(katzDeliLine.length === 0) {  
   return 'There is nobody waiting to be served!'; 
}

   var customer = katzDeliLine.shift(0); 
   return `Currently serving ${customer}.`; 
}

function nowServing(katzDeliLine){
  if(katzDeliLine.length){
    return 'Currently serving ' + katzDeliLine.shift() + ".";
  } else return `There is nobody waiting to be served!`
}

// 3. Current line

var currentLine = function (katzDeliLine) {
if (katzDeliLine.length===0) {
   return "The line is currently empty.";
 }
    var customerAndNumber = [];
    for (var i=0; i<katzDeliLine.length; i++) {
    customerAndNumber.push(i + 1 + ". " + katzDeliLine[i])
 }
   return "The line is currently: " + customerAndNumber.join(", ");
 }
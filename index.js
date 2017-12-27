var katzDeliLine = [];

function takeANumber (katzDeliLine, newCustomer) {
  katzDeliLine.push(newCustomer);
  return "Welcome, " + newCustomer + ". You are number " + katzDeliLine.length + " in line.";
}

function nowServing(katzDeliLine) {
  
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!"
  } else {
    var currentCustomer = katzDeliLine[0];
  }
  
  katzDeliLine.shift();
  return "Currently serving " + currentCustomer + ".";
}

function currentLine(katzDeliLine){
  
  var output = "The line is currently: ";
  
  if(katzDeliLine.length >= 1) {
    
    for(var i = 0; i < katzDeliLine.length; i++) {
       
       output += i+1 + ". ";
       output += katzDeliLine[i] + ", ";
       
    }
    
  } else {
    
    return "The line is currently empty."
  
  }

return output.slice(0,output.length-2);
}
function takeANumber(katzDeliLine, string) {
 //we want a condition so that if there is a line or there isn't to still add the name of the customer to the line
 //once the name is added a loop is created to go through the array
 //this loop will create a welcome message and announce the customer's position in line. 
 //Since it is an array we don't want it to announce it's index so we added 1 to i.
 //return the welcome message. 
  if(katzDeliLine.length === 0 || katzDeliLine.length > 0) {
    katzDeliLine.push(string);
    
      for(let i = 0; i < katzDeliLine.length; i++) {
      var welcome = `Welcome, ${string}. You are number ${i + 1} in line.`;
    }
  }
  return welcome;
}

function nowServing(katzDeliLine) {
  if(katzDeliLine.length > 0) {
   //var serving = katzDeliLine.shift();
    var message = `Currently serving ${katzDeliLine.shift()}.`;
    return message;
  }
  else {
    return ("There is nobody waiting to be served!")
  }
}

function currentLine(katzDeliLine) {
  var ourLine = [...katzDeliLine];
  var final = katzDeliLine.pop();
  var counter = 0; 
  var currentString = "The line is currently:"
  if(katzDeliLine.length > 0) {
    for (var i = 0; i < ourLine.length-1; i++) {
      currentString += ` ${i+1}. ${ourLine[i]},`;
      counter++
      
    }
    
    currentString += ` ${counter + 1}. ${final}`; 
    return currentString;
  }
    else {
    return "The line is currently empty."
    }
  }

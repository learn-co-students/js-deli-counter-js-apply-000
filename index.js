function takeANumber(katzDeliLine, string) {
//checks that the line exists 
//add a name to the line, then welcome everyone with a for loop
  
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

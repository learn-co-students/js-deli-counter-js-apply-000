var katzDeli = [];

function takeANumber(katzDeliLine, customerName) { 
  katzDeliLine.push(customerName); 
  return "Welcome, " + customerName + ". You are number " +  katzDeliLine.length + " in line."; 
} 

function nowServing(katzDeliLine) { 
  if (katzDeliLine.length === 0) { 
    return "There is nobody waiting to be served!"
  } else { 
    var currentName = katzDeliLine.shift(); 
    return "Currently serving " + currentName + "."; 
  }
}

function currentLine(katzDeliLine) { 
  if (katzDeliLine.length === 0) { 
    return "The line is currently empty."
  } else if (katzDeliLine.length !== 0) { 
    var finalNames = []; 
    for (var i = 0; i < katzDeliLine.length; i++) { 
      var currentName = katzDeliLine[i]; 
      finalNames.push((i + 1) + '. ' + currentName);   
    } return "The line is currently: " + finalNames.join(', '); 
  }
}
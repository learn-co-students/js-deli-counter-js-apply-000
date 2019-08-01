var katzDeliLine = [];

function takeANumber(katzDeliLine, name){
  
  katzDeliLine.push(name);
  const result = "Welcome, " + name + ". You are number " + katzDeliLine.length + " in line.";
  
  return result;
}

function nowServing (katzDeliLine) {
  
  const firstPerson = katzDeliLine.shift();
  
  if(katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!"
  } else {
    return "Currently serving " + firstPerson +".";
  }
}

function currentLine (katzDeliLine) {
  
  if(katzDeliLine.length === 0){
    return "The line is currently empty.";
  } else {
    var result = "The line is currently: " + 1 + ". " + katzDeliLine[0];
    for(var i = 2; i <= katzDeliLine.length; i++) {
       result = result + ", "+ i + ". " + katzDeliLine[i-1] 
    }
    
    return result;
  }
  
}
function takeANumber(katzDeli, newPerson){
  var position = katzDeli.length + 1  
  katzDeli[katzDeli.length] = newPerson;
  return "Welcome, " + newPerson + ". You are number " + position + " in line.";  
 
}

function nowServing(katzDeli){
  if (katzDeli.length ===0){
    return "There is nobody waiting to be served!"
  }
  else{
    var current = katzDeli.shift();
    return "Currently serving " + current + "."
    
  }
}

function currentLine(katzDeli){
  if (katzDeli.length ===0){
    return "The line is currently empty."
  }
  else{
   
    var end = katzDeli.length -1
    var index = 0
    var position = 1 
    var output = "The line is currently: " 
    while (index < katzDeli.length){
    if (index < end){
      output +=  position + ". " + katzDeli[index] + ", " 
    }
    else if (index == end){
      output += position + ". " + katzDeli[index]  
    }
    index++
    position++
  }
  return output
}
}
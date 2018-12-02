function takeANumber(line, name){
  line.push(name);
  var numberInLine = line.length;
  var message = "Welcome, " + name + ". You are number " +numberInLine + " in line.";
  // if(numberInLine == 1){
  //   message += "1st in line.";
  // }
  // if(numberInLine == 2){
  //   message += "2nd in line.";
  // } 
  // if(numberInLine == 3){
  //   message += "3rd in line.";
  // }
  // if(numberInLine > 3){
  //   message += numberInLine+ "th in line.";
  // }
  return message
}

function nowServing(katzDeliLine){
  if(katzDeliLine.length== 0){
    return "There is nobody waiting to be served!"
  }else{
    var name = katzDeliLine[0];
    katzDeliLine.shift();
    return "Currently serving " + name + ".";
  }
  
}
function currentLine(line){
  if(line.length == 0){
    message= "The line is currently empty."
    return message
  }
  
  else{
    
  var message = "The line is currently: ";
  
  for(var i = 0; i<line.length; i++){
    message += (i+1) +". " + line[i];
    
    if(i+1 == line.length){
      return message;
    }
    else if(i<line.length){
      message += ", ";
    }
  }
  return message;
  }
}


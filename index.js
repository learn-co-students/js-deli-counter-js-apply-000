function takeANumber(katzDeliLine, newName){
  var position = katzDeliLine.length + 1;
  katzDeliLine.push(newName);
  var message = "Welcome, "+ newName + ". You are number "+position+" in line.";
  return message;
}

function nowServing(katzDeliLine){
  var message;
  if(katzDeliLine.length > 0){
    message = "Currently serving "+katzDeliLine[0]+".";
    katzDeliLine.splice(0, 1);
  }
  else{
    message = "There is nobody waiting to be served!";
  }
  return message;
}

function currentLine(katzDeliLine){
  var message = "The line is currently: ";
  
  if(katzDeliLine.length > 0){
      for(var i = 0; i < katzDeliLine.length; i++){
      var postion = i + 1;
      
      var m = postion + ". "+katzDeliLine[i];
      if(i!=katzDeliLine.length-1){
        m += ", ";
      }
      message += m; 
    }
  }
  else{
    message = "The line is currently empty.";
  }
  return message;
}
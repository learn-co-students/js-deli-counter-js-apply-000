function takeANumber(katzDeliLine,newName){
  var lineLength = katzDeliLine.length+1;
  var message = "Welcome, " + newName + ". You are number "+lineLength+" in line.";
  katzDeliLine.push(newName);
  return message;
}
function nowServing(katzDeliLine){
  if(katzDeliLine.length==0){
    return "There is nobody waiting to be served!";
  }
  else{
    var current = katzDeliLine[0];
    var i=0;
    for(i=0;i<katzDeliLine.length-1;i++){
      katzDeliLine[i]=katzDeliLine[i+1];
    }
    katzDeliLine.pop();
    var message = "Currently serving "+current+".";
    return message;
  }
}
function currentLine(katzDeliLine){
  var length=katzDeliLine.length;
  if(length==0){
    return "The line is currently empty.";
  }
  else{
    var message = "The line is currently: ";
    var counter = 1;
    var i=0;
    for(i=0;i<length;i++){
      message = message + counter + '. ' + katzDeliLine[i];
      counter++;
      if(i!=length-1){
        message = message + ', ';
      }
    }
    return message;
  }
}

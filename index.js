function takeANumber(katzDeliLine,name){
  katzDeliLine.push(name);
  return "Welcome, " + name +". You are number " + katzDeliLine.length + " in line.";
}

function nowServing(katzDeliLine){
  
  var msg;
  if(katzDeliLine.length===0)
    return "There is nobody waiting to be served!";
  else{
    msg = "Currently serving " + katzDeliLine[0] +".";
    katzDeliLine.splice(0,1);
  }
  
  return msg;
}

function currentLine(katzDeliLine){
  
  if(katzDeliLine.length===0)
    return "The line is currently empty.";
  else{
    var msg="";
    for(var i=0;i<katzDeliLine.length;i++){
      if(i===katzDeliLine.length-1)
        msg = msg + (i+1) + ". " +katzDeliLine[i];
      else
        msg = msg + (i+1) + ". " +katzDeliLine[i]+", "
    }
   return "The line is currently: "+msg;
  }
  
}
function takeANumber(katzDeliLine, newPerson){
  katzDeliLine.push(newPerson);
  return "Welcome, " + newPerson + ". You are number " + katzDeliLine.length + " in line."; 
}
function nowServing(katzDeliLine){
  var i=0;
  if (i==katzDeliLine.length){
    return "There is nobody waiting to be served!";
  } else if(i<katzDeliLine.length){
    var x=katzDeliLine.shift();
    return "Currently serving " + x + ".";
  }
}
function currentLine(katzDeliLine){
  var i=0;
  if (katzDeliLine.length==i){
    return "The line is currently empty.";
  }
  else if(i<katzDeliLine.length){
  while(i<katzDeliLine.length){
    katzDeliLine[i]=i + 1+ ". "+ katzDeliLine[i]; 
   //katzDeliLine[i]=i+ 1+". " + katzDeliLine[i];
i++;
  }
return "The line is currently: "+katzDeliLine.join(", ");
  }
  
}
  
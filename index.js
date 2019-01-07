function takeANumber(katzDeliLine, newName){
  var lineLength = katzDeliLine.length;
  katzDeliLine.push(newName);
  return "Welcome, "+newName+". You are number "+(lineLength+1).toString()+" in line.";
}

function nowServing(katzDeliLine){
  if (katzDeliLine.length==0) {
    return "There is nobody waiting to be served!"
  }
  else {
    var cust=katzDeliLine[0];
    katzDeliLine.splice(0,1)
    return "Currently serving "+cust+".";
  }
}

function currentLine(line){
  if (line.length==0) {
    return "The line is currently empty.";
  }
  else{
    var outPut="The line is currently: ";
    for (var i=0; i<line.length; i++){
      outPut+=(i+1).toString()+". "+line[i];
      if (i!=line.length-1){
        outPut+=", "
      }
    }
    return outPut;
  }
}

function takeANumber(katzDeliLine,newPer){
  katzDeliLine.push(newPer);
  for(var i=0;i<katzDeliLine.length;i++){
    if (katzDeliLine[i] == newPer){
      return "Welcome, " +newPer+ ". You are number " +(i+1)+ " in line.";
    }
  }
}

function nowServing(katzDeliLine) {
  var x = katzDeliLine[0];
  katzDeliLine.shift();
  if (x == undefined){
    return 'There is nobody waiting to be served!'
  }else
  return ("Currently serving " + x +".");
}

function currentLine(katzDeliLine){
  var pH = "The line is currently: ";
  if (katzDeliLine.length === 0){
    return "The line is currently empty."
  }
  for (var i=0;i<katzDeliLine.length;i++){
    if (i==katzDeliLine.length-1){
    pH+= (i+1) +". " + katzDeliLine[i]
  }else{
    pH+= (i+1) +". " + katzDeliLine[i]+", "
  }
  }
  return pH;
}

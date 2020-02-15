function takeANumber(katzDeliLine,name){
  katzDeliLine.push(name);
  var num = katzDeliLine.length;
  return "Welcome, " + name + ". You are number " + num + " in line.";
}

function nowServing(katzDeliLine, name){
  if (katzDeliLine[0] === undefined){
    return "There is nobody waiting to be served!";
    
  }
  else {
    return "Currently serving " + katzDeliLine.shift() + ".";
  }
}

function currentLine(katzDeliLine){
  if (katzDeliLine[0] === undefined){
    return "The line is currently empty.";
  }
  else {
    var response = "";
    for (var i=0; i < katzDeliLine.length; i++){
      if (response !== ""){
        response = response + ", " ;
      }
      response = response + (i+1) + ". " + katzDeliLine[i];
    }
    return "The line is currently: " + response;
  }
}
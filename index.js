function takeANumber (katzDeliLine, name){
    katzDeliLine.push (name);
    return  ("Welcome, " + name + ". You are number " + katzDeliLine.length + " in line.")
  }
  
function nowServing(deliLine){
  if (deliLine.length === 0) {
    return ("There is nobody waiting to be served!");
}
  else{ 
    return("Currently serving " + deliLine.shift() + ".") ;
  }
}

function currentLine(katzDeliLine){
  if (katzDeliLine.length === 0){
    return ("The line is currently empty.");    
  }
  
  if (katzDeliLine.length > 0){
      var i;
      var text = "";
      for (i = 0; i < katzDeliLine.length; i++) { 
          text += (i + 1) + ". " + katzDeliLine[i] + ", ";
      }
    text = text.replace(/,\s*$/, "");
    return ("The line is currently: " + text);
  }
}
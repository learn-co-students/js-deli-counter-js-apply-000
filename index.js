
function takeANumber(line , name){
  line.push(name);
  return "Welcome, " + name + ". You are number " + line.length + " in line.";
} 

function nowServing(katzDeliLine){
  if(katzDeliLine === undefined || katzDeliLine.length === 0){
    return "There is nobody waiting to be served!"
  }else{
    return "Currently serving " + katzDeliLine.shift() + ".";
  }
} 

function currentLine(katzDeliLine){
  var line = "The line is currently: "
  if(katzDeliLine === undefined || katzDeliLine.length === 0){
    return "The line is currently empty."
  }else{
    for(var i = 0; i<katzDeliLine.length; i++){
    if(i+1 === katzDeliLine.length){
      line += i+1 + ". "+ katzDeliLine[i];
    }else{
      line += i+1 + ". "+katzDeliLine[i] + ", " ;
    }
    }
    return line;
  }
}


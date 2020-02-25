var katzDeliLine = [];

function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`;
}

function nowServing(katzDeliLine){
  
  if(katzDeliLine.length){
    var now;
    now = katzDeliLine.shift();
    return `Currently serving ${now}.`;
    
  }else{
    return "There is nobody waiting to be served!";
  }
}

function currentLine(katzDeliLine){
  if(katzDeliLine.length){
    
    var numberAndName = [];
    for(var i = 0; i< katzDeliLine.length; i++){
     numberAndName.push(`${i+1}. ${katzDeliLine[i]}`);
    }
    return `The line is currently: ${numberAndName.join(', ')}`;
  }else{
    return "The line is currently empty.";
  }
}
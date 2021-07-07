var katzDeliLine = [];

function takeANumber(katzDeliLine, name){
  
  katzDeliLine.push(name);
  var position = parseInt(katzDeliLine.indexOf(name))+1
  
  return "Welcome, " + name + ". You are number " + position + " in line.";
}

function nowServing(katzDeliLine){
 
  if (katzDeliLine[0] === undefined){
    return "There is nobody waiting to be served!";
  } else {
    var currentName = katzDeliLine.shift()
    return 'Currently serving '+ currentName+'.'
  }
}

function currentLine(katzDeliLine){
  var array = []
  
  if (katzDeliLine[0] === undefined){
    return "The line is currently empty."
  
    
  } else {
  
  for (var i = 0; i < katzDeliLine.length; i++){
    array.push(` ${i+1}. ${katzDeliLine[i]}`);
  }
   return "The line is currently:" + array;
  }
}


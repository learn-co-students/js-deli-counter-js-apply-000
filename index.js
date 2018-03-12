var katzDeliLine = []; 

function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}

function currentLine(katzDeliLine){
  if(katzDeliLine.length === 0){
    return "The line is currently empty."; 
  }
  var newArray = [];
  for(var i=0; i<katzDeliLine.length; i++){
    newArray.push(`${i+1}. ${katzDeliLine[i]}`)
  }
  return "The line is currently: " + newArray.join(", "); 
}

function nowServing(katzDeliLine){
  if(katzDeliLine.length === 0){
    return "There is nobody waiting to be served!"; 
  }
  var now = [];
  var string = "Currently serving ";
  now = katzDeliLine.splice(0,1);
  
  string += now[0] + "."; 
  return string; 
}
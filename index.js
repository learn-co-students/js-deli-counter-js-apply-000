var katzDeliLine = [];

function takeANumber(line, name){  
  let length = line.length + 1;
  line.push(name);
 return `Welcome, ${name}. You are number `+ length + ` in line.`;
}

function nowServing(katzDeliLine){
  if (katzDeliLine.length === 0){
    return "There is nobody waiting to be served!";
  } else {
    return `Currently serving ${katzDeliLine.shift()}.`;
  }
  
}
/*
function currentLine(){
  var numberline = [];
    if (katzDeliLine.length === 0){
    return "The line is currently empty.";
  } else {return katzDeliLine;}
  
}*/
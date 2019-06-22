var katzDeliLine = [];

function takeANumber(line, name){  
  line = katzDeliLine.length + 1;
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number `+ line + `in line.`;
}

function nowServing(){
  if (katzDeliLine.length === 0){
    return "There is nobody waiting to be served!";
  } else katzDeliLine.shift();
  
}

function currentLine(){
  var numberline = [];
    if (katzDeliLine.length === 0){
    return "The line is currently empty.";
  } else return katzDeliLine;
  
}
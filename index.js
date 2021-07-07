var katzDeliLine = [];

function takeANumber(katzDeliLine,name){
  katzDeliLine.push(`${name}`);
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`;
}

function nowServing(katzDeliLine){
  let i =0;
  while(i < katzDeliLine.length){
    i++;
    }
    if(katzDeliLine.length === 0){
      return "There is nobody waiting to be served!";
    }
    else {
      return `Currently serving ${katzDeliLine.shift()}.`;
    }
}

function currentLine(katzDeliLine){
  var str = "The line is currently: "
  let i=0;
  if(katzDeliLine.length>0){
  for(let i=0;i<katzDeliLine.length;i++){
    str = str + [i+1] + ". " + katzDeliLine[i] + ", "
  }
  str = str.slice(0,-2)
  }
  else{
    str = "The line is currently empty."
  }
  return str
}    

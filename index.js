function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`;
  
}

function nowServing(katzDeliLine){
  if(katzDeliLine.length!==0) return `Currently serving ${katzDeliLine.shift()}.`;
  else return 'There is nobody waiting to be served!';
}

function currentLine(katzDeliLine){
  var comma=false;
  if(katzDeliLine.length!==0){
    var str='';
    for(var i=0;i<katzDeliLine.length;i++){
      if(comma) str+=`, ${i+1}. ${katzDeliLine[i]}`;
      else{
        str+=`1. ${katzDeliLine[i]}`;
        comma = true;
      }
    }
    return `The line is currently: ${str}`;
  }
  else return 'The line is currently empty.';
}
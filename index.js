function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name);
  
  return `Welcome, ${name}. You are number ${katzDeliLine.indexOf(name)+1} in line.`;
}

function nowServing(arr){
  if(arr.length){
    return `Currently serving ${arr.shift()}.`
    
  }
  return "There is nobody waiting to be served!";
}

function currentLine(deli){
  var str = '';
  if(deli.length === 0) return "The line is currently empty."
  for(var i=0;i<deli.length;i++){
    str += ` ${i+1}. ${deli[i]},`
  }
  return `The line is currently:${str}`.slice(0,-1);
}
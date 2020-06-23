var katzDeliLine = [];

function takeANumber(katzDeliLine,name){
  katzDeliLine.push(`${name}`);
  return(`Welcome, ${name}. You are number ${katzDeliLine.length} in line.`)
}  

function nowServing(katzDeliLine,name){
  var i =katzDeliLine.length;
  if (i === 0) {
    return `There is nobody waiting to be served!`
  } else {
  // 
  var inLine = katzDeliLine.shift();
  return `Currently serving ${inLine}.`
  }
}


function currentLine(katzDeliLine) {
  if(katzDeliLine.length===0){
    return `The line is currently empty.`
  }
  var servingLine = [];
  for(var i=0;i<katzDeliLine.length;i++) {
    servingLine.push(i+1+`. `+katzDeliLine[i]);
  }
  return `The line is currently: ` + servingLine.join(', ');
}



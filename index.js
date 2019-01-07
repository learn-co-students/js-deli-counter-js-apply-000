function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${katzDeliLine.indexOf(name)+1} in line.`;
}


function nowServing(katzDeliLine){
  if (katzDeliLine.length){
    return `Currently serving ${katzDeliLine.shift()}.`;
  }
    return "There is nobody waiting to be served!";
}

function currentLine(katzDeliLine, i){
  var newArray = [];
  if (katzDeliLine.length){
    for(var i = 0; i < katzDeliLine.length; i++) {
      newArray.push(`${i+1}. ${katzDeliLine[i]}`)
    }
  return `The line is currently: ${newArray.join(', ')}`;
  }
  return "The line is currently empty.";  
}
function takeANumber(currentLine, customerName){
  currentLine.push(customerName);
  return `Welcome, ${customerName}. You are number ${currentLine.length} in line.`;
}

function nowServing(currentLine){
  if(currentLine.length === 0){return "There is nobody waiting to be served!"}
  return `Currently serving ${currentLine.shift()}.`;
}

function currentLine(currentLine){
  if(currentLine.length === 0){return "The line is currently empty."}
  var message = `The line is currently: `
  for(var i = 0; i < currentLine.length; i++){
    message += `${i+1}. ${currentLine[i]}, `
  }
  return message.slice(0,-2)
  
}

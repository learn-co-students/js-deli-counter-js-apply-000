function takeANumber(currentLine, name){
  currentLine.push(name);
  return `Welcome, ${name}. You are number ${currentLine.length} in line.`
}

function nowServing(currentLine){
  if(currentLine.length === 0){
    return "There is nobody waiting to be served!"
  }
  return `Currently serving ${currentLine.shift()}.`
}

function currentLine(currentLine){
  if(currentLine.length === 0){
    return "The line is currently empty."
  }
  var newLine = currentLine.map((element, index )=>{
    return ` ${index+1}. ${element}`
  })
  return `The line is currently:${newLine}`;
}

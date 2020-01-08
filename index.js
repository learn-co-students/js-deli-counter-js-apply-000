const takeANumber = (currentInLine, name) => {

  if(!currentInLine.includes(name)) {
    currentInLine.push(name);
  }
  
  if(currentInLine.length === 7) {
    return `Don't get your hopes up, you are number 6 in line.`;
  }
  
  return `Welcome, ${name}. You are number ${currentInLine.length} in line.`
}

const nowServing = currentInLine => {
  if(currentInLine.length === 0) {
    return "There is nobody waiting to be served!";
  }
  return `Currently serving ${currentInLine.shift()}.`;
}


const currentLine = currentInLine => {
  if(currentInLine.length === 0) {
    return "The line is currently empty."
  }
  let message = "";
  for(let i = 0; i < currentInLine.length - 1; i++) {
    message += i+1 + ". "+ currentInLine[i] + ", "
  }
  return `The line is currently: ${message}${currentInLine.length}. ${currentInLine[currentInLine.length-1]}`
}
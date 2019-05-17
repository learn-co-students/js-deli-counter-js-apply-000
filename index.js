function takeANumber(currentLine, name) {
  if(!Array.isArray(currentLine)) return;
  currentLine.push(name);

  return `Welcome, ${name}. You are number ${currentLine.length} in line.`

}

function nowServing(currentLine) {
  let current;
  if(currentLine.length === 0){
    return "There is nobody waiting to be served!";
  }
  else{
     current = currentLine.shift()
  }

  return `Currently serving ${current}.`

}

function currentLine(Line) {
  if(typeof Line === 'string') return;
  if(Line.length === 0) {
    return "The line is currently empty."
  }
  let emptyString = "";

  for(let i = 0; i < Line.length; i++) {
    if(i === 0) {
      emptyString += `The line is currently: ${i + 1}. ${Line[i]},`
    } else if(i !== Line.length -1) {
      emptyString += ` ${i + 1}. ${Line[i]},`
    } else {
      emptyString += ` ${i + 1}. ${Line[i]}`
    }
  }

  return emptyString;

}

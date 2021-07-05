function takeANumber(currentLine, newPerson){
  currentLine.push(newPerson);
  return `Welcome, ${newPerson}. You are number ${currentLine.length} in line.`;
}

function nowServing(currentLine){
  if(currentLine.length === 0){
    return "There is nobody waiting to be served!";
  } else {
    return `Currently serving ${currentLine.shift()}.`
  }
}

function currentLine(currentLine){
  let arr = [];
  if(currentLine.length === 0){
    return "The line is currently empty.";
  } else {
    for(let i = 0; i < currentLine.length; i++){
      arr.push((i + 1) + "." + " " + currentLine[i]);
      if(currentLine[i] !== currentLine[currentLine.length - 1]){
        arr.push(", ")
      } 
    }
  }
  return `The line is currently: ${arr.join("")}`
}
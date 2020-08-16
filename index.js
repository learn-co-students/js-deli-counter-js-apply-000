function takeANumber(currentLine, newPerson){
  currentLine.push(newPerson);
  return `Welcome, ${newPerson}. You are number ${currentLine.length} in line.`;
}

function nowServing(currentLine){
  if(currentLine.length == 0){
    return "There is nobody waiting to be served!";
  }
  else{
    var nowServing = currentLine[0];
    currentLine.shift();
    return `Currently serving ${nowServing}.`;
  }
}

function currentLine(currentLine){
  if(currentLine.length == 0){
    return "The line is currently empty.";
  }
  else{
    let text = "The line is currently:"
    for (var i = 0; i < currentLine.length; i++) {
      text += ` ${i+1}. ${currentLine[i]},`
    }
    
    return text.slice(0,-1);
  }
}

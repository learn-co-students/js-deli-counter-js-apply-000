function takeANumber (currentLine, newPerson){
  currentLine.push(newPerson);
  return `Welcome, ${newPerson}. You are number ${currentLine.length} in line.`;
}

function nowServing (currentLine){
  if (currentLine.length === 0){
    return "There is nobody waiting to be served!";
  }

  let line = currentLine.shift();

  return "Currently serving " + line + ".";
}

function currentLine (line) {
  if (line.length === 0){
    return "The line is currently empty.";
  }
  var lineSentence = "The line is currently: "
  for ( var i = 0 ; i < line.length; i++){
    lineSentence = lineSentence + (i+1) + ". " + line[i] + (i === line.length - 1 ? "" : ", ");
  }
  return lineSentence;
}

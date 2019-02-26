function takeANumber(currLine, newName){
  currLine.push(newName);
  return `Welcome, ${newName}. You are number ${currLine.indexOf(newName) + 1} in line.`
}

function nowServing(currLine){
  if (currLine.length === 0){
    return 'There is nobody waiting to be served!';
  }
  return 'Currently serving ' + currLine.shift() + '.';
}

function currentLine(currLine){
  let lineStatus = 'The line is currently:';
  if (currLine.length === 0){
    return 'The line is currently empty.';
  }
  for (let i = 0; i <= currLine.length-1; i++){
    lineStatus += ` ${i + 1}. ${currLine[i]},`
  }
  return lineStatus.substring(0, lineStatus.length - 1);
}

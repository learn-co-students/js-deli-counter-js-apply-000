
function takeANumber(currentLine, newName) {
  currentLine.push(newName);
  return `Welcome, ${newName}. You are number ${currentLine.indexOf(newName) + 1} in line.`;
}

function nowServing(currentLine){
  let personServing;
  if (currentLine.length === 0) {
    return "There is nobody waiting to be served!";
  }
    personServing = currentLine[0];
    currentLine.shift();
    console.log(currentLine);
  return `Currently serving ${personServing}.`;

}

function currentLine(line){
  let output = 'The line is currently: ';
  if (line.length === 0){
    return "The line is currently empty.";
  }
  for (let i = 0; i < line.length; i++){
    output += `${i + 1}. ${line[i]}, `;
  }
  output = output.substring(0, output.length - 2);
  return output;
}
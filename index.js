function takeANumber(currentLine, newName) {



    let numInLine = currentLine.length + 1;

    let welcomeMessage = `Welcome, ${newName}. You are number ${numInLine} in line.`;

    currentLine = currentLine.push(newName);

    return welcomeMessage;



}

function nowServing (katzDeliLine) {
  if(katzDeliLine.length === 0) {
    return `There is nobody waiting to be served!`
  } else {

    return `Currently serving ${katzDeliLine.shift()}.`;
  }

}


function currentLine(line) {
  let newStr = `The line is currently: `

  if (line.length === 0) {
    return `The line is currently empty.`
  }

  for (let i = 0; i < line.length - 1; i++) {
    newStr = newStr + ( i + 1) + ". " + line[i] + ", ";
  }

  newStr = newStr + ( line.length ) + ". " + line[line.length - 1];

  return newStr;

}

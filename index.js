function takeANumber(currentLine,newName){
  currentLine.push(newName)
  return `Welcome, ${newName}. You are number ${currentLine.length} in line.`;
}
function nowServing(katzDeliLine){
  if (katzDeliLine.length == 0){
    return "There is nobody waiting to be served!"
  }
      let lineGuy = katzDeliLine[0];
      katzDeliLine.shift(lineGuy)
      return `Currently serving ${lineGuy}.`
}
function currentLine(line){
  if (line.length === 0){
    return "The line is currently empty.";
  } var string = `The line is currently:`
  for (let i = 0; i < line.length; i++){
    string += ` ${i+1}. ${line[i]}`
    if (i != line.length-1){
      string += `,`
    }
  }
      return string
}

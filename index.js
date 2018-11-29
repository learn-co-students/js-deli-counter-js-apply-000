function takeANumber (nowLine, newPerson) {
  nowLine.push(newPerson);
  const position = nowLine.length;
  return `Welcome, ${newPerson}. You are number ${position} in line.`
}

function nowServing (katzDeliLine) {
  if (katzDeliLine[0]) {
    return `Currently serving ${katzDeliLine.shift()}.`;
  } else {
    return "There is nobody waiting to be served!"
  }
}

function currentLine (nowLine) {
  if (nowLine[0]) {
    let newLine = nowLine.map((nowLine, index) =>{
      return `${index + 1}. ${nowLine}`;
    })
    return `The line is currently: ${newLine.join(", ")}`;
  } else {
    return "The line is currently empty."
  }
}

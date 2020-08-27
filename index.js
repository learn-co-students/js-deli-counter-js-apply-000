function takeANumber(lineOfPeople, newName) {
  lineOfPeople.push(newName)
  return `Welcome, ${newName}. You are number ${lineOfPeople.length} in line.`
}

function nowServing(lineOfPeople) {
  if(lineOfPeople.length > 0) {
    return `Currently serving ${lineOfPeople.shift()}.`
  } else {
    return `There is nobody waiting to be served!`
  }
}

function currentLine(lineOfPeople) {
  if(lineOfPeople.length === 0) {
    return `The line is currently empty.`
  }
  let deliLine = []
  for(let i = 0; i < lineOfPeople.length; i++) {
    let placeInLine = lineOfPeople.indexOf(lineOfPeople[i])+1
    deliLine.push(` ` + placeInLine + `. ` + lineOfPeople[i])
  }
  return `The line is currently:` + deliLine
}
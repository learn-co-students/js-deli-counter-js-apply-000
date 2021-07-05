var katzDeliLine = [];

function takeANumber(katzDeliLine, name) {
  //return name's position in line
  //"Welcome, Ada. You are number 1 in line."
  katzDeliLine.push(name);
  var nameIdx = katzDeliLine.indexOf(name);
  return `Welcome, ${name}. You are number ${nameIdx + 1} in line.`

}

function nowServing(katzDeliLine) {
  //return first person in line then remove that person from line
  //if line empty, return "There is nobody waiting to be served!"
  if (katzDeliLine.length === 0) {
    return `There is nobody waiting to be served!`
  } else {
    return `Currently serving ${katzDeliLine.shift()}.`
  }
}

function currentLine(katzDeliLine) {
  //returns currentLine with 'The line is currently: 1. Ada, 2. Grace'
  //If the line is empty, return "The line is currently empty"
  if (katzDeliLine.length === 0) {
    return `The line is currently empty.`;
  } else {
    var newCurrentLine = katzDeliLine.map(function(elem, idx) {
      return ` ${idx + 1}. ${elem}`
    })
    return `The line is currently:${newCurrentLine}`
  }
}

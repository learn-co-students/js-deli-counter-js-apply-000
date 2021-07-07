
function takeANumber(otherDeli, name) {
  otherDeli.push(`${name}`)
  otherDeli.length
  return(`Welcome, ${name}. You are number ${otherDeli.length} in line.`)
}





function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0){
    return 'There is nobody waiting to be served!'
  }
  return `Currently serving ${katzDeliLine.shift()}.`
}



function currentLine(line){
  if (line.length === 0){
  return "The line is currently empty."
  }

  var newName = []

  for (let i = 0; i < line.length; i++) {
  newName.push(`${i + 1}. ${line[i]}`)
  }
  return `The line is currently: ${newName.join(', ')}`
}




function takeANumber(deliLine, name){
  deliLine.push(name)
  return `Welcome, ${name}. You are number ${deliLine.length} in line.`
}

function nowServing(deliLine){
  if (deliLine.length === 0) {
    return 'There is nobody waiting to be served!'
  }
  return `Currently serving ${deliLine.shift()}.`

}
function currentLine(deliLine){
  if (deliLine.length === 0){
    return 'The line is currently empty.'
  }
  var result = 'The line is currently: '
  for (var i = 0; i < deliLine.length; i++) {
    result += `${i+1}. ${deliLine[i]}`
    if (i+1 !== deliLine.length) {
      result += ', '
    }
  }
  return result
}
var JoshsDeli = []

function currentLine(line) {
  if(!line.length){
    return "The line is currently empty."
  }
  var nameAndNumberList = []
  for (let i = 0, l = line.length; i < l; i++) {
    nameAndNumberList.push(`${i + 1}. ${line[i]}`)
  }
  return `The line is currently: ${nameAndNumberList.join(', ')}`
}
function takeANumber(line, name) {
  line.push(name)
  return `Welcome, ${name}. You are number ${line.length} in line.`
}
function nowServing (line) {
  if(!line.length){
    return "There is nobody waiting to be served!"
  }else{
    return `Currently serving ${line.shift()}.`
  }
  
}

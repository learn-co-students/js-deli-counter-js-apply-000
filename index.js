
function takeANumber(line, name) {
  line.push(name)
  return `Welcome, ${name}. You are number ${line.length} in line.`
}

function nowServing(line){
  if (line.length === 0) {
    return "There is nobody waiting to be served!"
  }else {
    return `Currently serving ${line.shift()}.`
  }
}

function currentLine(line){
  var new_line = []
  if (line.length > 0) {
    for (var i = 0; i < line.length; i++) {
    new_line.push(` ${i+1}. ${line[i]}`)
}
} else {
  return "The line is currently empty."
}
return `The line is currently:${new_line}`
}

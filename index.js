function takeANumber(line, name) {
  line.push(String(name))
  
  return `Welcome, ${name}. You are number ${line.length} in line.`
}

function nowServing(line) {
  if (line.length == 0) {
    return "There is nobody waiting to be served!"
  }
  
  return `Currently serving ${line.shift()}.`
}

function currentLine(line) {
  if (line.length == 0) {
    return "The line is currently empty."
  }
  
  var output = "The line is currently: "
  
  for (var i = 0; i < line.length - 1; i++) {
    output += `${i + 1}. ${line[i]}, `
  }
  output += `${line.length}. ${line[line.length - 1]}`
  
  return output
}

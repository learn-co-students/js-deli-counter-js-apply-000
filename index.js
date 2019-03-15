function takeANumber (line, name) {
  line.push(name)
  return `Welcome, ${name}. You are number ${line.length} in line.`
}
  
 function nowServing(line) {
  if (!line.length) {
    return "There is nobody waiting to be served!"
  }

 return `Currently serving ${line.shift()}.`
}

function currentLine(line) {

 const whosInLine = []
 
  
 if (!line.length) {
return "The line is currently empty."
 }
  
 for (let i = 0, l = line.length; i < l; i++) {
    whosInLine.push(`${i + 1}. ${line[i]}`)
  }
  return `The line is currently: ${whosInLine.join(', ')}`

  }
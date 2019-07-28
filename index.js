function takeANumber(line, name){
  var length = line.push(name)
  return `Welcome, ${name}. You are number ${length} in line.`
}

function nowServing(line){
  if(line.length === 0){
    return "There is nobody waiting to be served!"
  }
  var served = line[0]
  line.shift()
  return `Currently serving ${served}.`
}

function currentLine(line){
  var i = 0
  var current = ''
  if(line.length === 0){
    return "The line is currently empty."
  }
  while(i<line.length){
    if(i === line.length - 1 ){
      current = current +`${i+1}. ` + line[i]
      return`The line is currently: ${current}`
    }
    current = current + `${i+1}. ` + line[i] + `, `
    i++
  }
}
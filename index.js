function takeANumber(line, newPerson) {
  var position = line.length + 1
  
  line.push(newPerson)
  
  return `Welcome, ${newPerson}. You are number ${position} in line.`
}

function nowServing(line) {
  const nextPerson = line[0]
  
  line = line.shift()
  
  if (line === undefined) {
    return 'There is nobody waiting to be served!'
  } else {
    return `Currently serving ${nextPerson}.`
  }
}

function currentLine(line) {
  var result = 'The line is currently:'
  var i 
  if (line.length === 0) {
    return "The line is currently empty."
  } else {
    for(i=0; i < line.length; i++){
      if(i+1 === line.length){
        result = `${result} ${i+1}. ${line[i]}`
      } else {
        result = `${result} ${i+1}. ${line[i]},`
      }
    }
    
    return result
  }
}
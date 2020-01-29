function takeANumber(line, name){
  line.push(name)
  
  return `Welcome, ${name}. You are number ${line.length} in line.`
}

function nowServing(line){
  if(line.length === 0){
    return 'There is nobody waiting to be served!'
  }
  
    return `Currently serving ${line.shift()}.`
}

function currentLine(line){
  var message = `The line is currently: `
  
  for(var i = 0; i < line.length - 1; i++){
    message += `${i + 1}. ${line[i]}, `
  }
  
  message += `${line.length}. ${line[line.length-1]}`
  
  if(line.length === 0){
    return "The line is currently empty."
  }
  return message.trim()
}
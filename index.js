function takeANumber (line,name){
  line.push(name)
  return `Welcome, ${name}. You are number ${line.length} in line.`
}

function nowServing (line){
  if (line.length === 0){
    return "There is nobody waiting to be served!"
  }
  var customer = line.shift();
  return `Currently serving ${customer}.`
}

function currentLine (line){
  let lineStatement = `The line is currently:`
  if (line.length === 0){
    return "The line is currently empty."
  }
  for (let i = 0; i < line.length; i++){
    lineStatement += ` ${i+1}. ${line[i]},`
  }
  lineStatement = lineStatement.slice (0,lineStatement.length-1)
  return lineStatement
}
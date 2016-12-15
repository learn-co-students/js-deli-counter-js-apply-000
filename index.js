function takeANumber(line, name){
  line.push(name)
  return `Welcome, ${name}. You are number ${line.length} in line.`
}

function nowServing(line){
  if(line[0] == undefined){
    return "There is nobody waiting to be served!"
  }
  else{
    return `Currently serving ${line.shift()}.`
  }
}

function currentLine(line){
  if(line[0]){
    return "The line is currently empty."
  }
  else{
    var lineMessage = "The line is currently:"
    for(var i = 0; i<line.length; i++){
      lineMessage += ` ${i+1}. ${line[i]},`
    }
  }

  return lineMessage.substring(0,lineMessage.length-1)
}

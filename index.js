function takeANumber(line, name){
  line.push(name)
  return 'Welcome, ' + name + '. You are number ' + line.length + ' in line.'
}

function nowServing(line){
  if (line.length > 0){
    return 'Currently serving ' + line.shift() + '.'
  } 
  else return "There is nobody waiting to be served!"  
}

function currentLine(line){
  if (line.length > 0){
    var newLine = ""
    for (var a = 0; a < line.length; a++){
      newLine += a+1 + '. ' + line[a] 
      if (a != line.length-1){
        newLine += ', '
      }
      console.log(newLine)
      console.log(line)
    }
    return "The line is currently: " + newLine
  }
  else return "The line is currently empty."
}

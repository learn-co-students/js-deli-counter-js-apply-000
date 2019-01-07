var katzDeli = []

function takeANumber(current, name) {
  current.push(name)
  return `Welcome, ${name}. You are number ${current.length} in line.`
}

function nowServing(line){
  if(!line.length){    
    return "There is nobody waiting to be served!"
  }else{
    return "Currently serving " + line.shift() + "."
  }
}

function currentLine(current) {
  var line = []
  if (current.length === 0)
    return "The line is currently empty."
  else
  {
    for(var i = 0; i < current.length; i++)
      line.push(i+1 + ". " + current[i])
  }
  return "The line is currently: " + line.join(', ')
}
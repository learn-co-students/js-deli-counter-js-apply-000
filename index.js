var katzDeli = [];

function takeANumber(line, name){
  line.push(name)
  
  return `Welcome, ${name}. You are number ${line.length} in line.`
}

function nowServing(line){
  if(!line.length){
    return "There is nobody waiting to be served!"
  } else {
    return `Currently serving ${line.shift()}.`
  }
}

function currentLine(line){
  if(!line.length){
    return "The line is currently empty."
  }
  
  var result = "The line is currently: "
  for(var i = 0; i < line.length; i++){
    result += `${i+1}. ${line[i]}`
    if(i !== line.length-1){
      result += ', '
    }
  }
  return result
}
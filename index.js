function takeANumber(line, name){
  
  
  line.push(name)
  
  return `Welcome, ${name}. You are number ${line.length} in line.`
}

function nowServing(katzDeliLine){
  if (katzDeliLine.length === 0){
    return "There is nobody waiting to be served!"
  } else {
    let nam = katzDeliLine[0]
  katzDeliLine.shift()
  //ERROR: checks for array condition before checking for return String
  // instructions have the opposite order
  return "Currently serving " + nam +"."

 

  }
  
}

function currentLine(line){
  
  if (line.length === 0){
    return "The line is currently empty."
  } else {
  let str = "The line is currently: "
  
  for (let i = 0; i < line.length; i++){
    str = str + `${i+1}. ${line[i]}`
    if (line.length !== i + 1){
      str = str + ', '
    }
  }
  
  return str
  }
}
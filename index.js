function takeANumber(line, newCustomer){
  line.push(newCustomer)
  let s = `Welcome, ${newCustomer}. You are number ${line.length} in line.`
  return s
}

function nowServing(katzDeliLine){
  if(katzDeliLine.length === 0){
    return "There is nobody waiting to be served!"
  }
  else{
    let first = katzDeliLine[0]
    katzDeliLine.shift()
    return `Currently serving ${first}.`
  }
}

function currentLine(line){
  let start = "The line is currently: "
  if(line.length === 0){
    return "The line is currently empty."
  }
  else{
    for(let i = 0; i < line.length; i++){
      start = start + `${i + 1}. ${line[i]}`
      if(i < line.length - 1){
        start = start + ', '
      }
    }
  }
  return start
}


let katzDeliLine = [];

const takeANumber = (currentLine, name) => {
  currentLine.push(name)
  return `Welcome, ${name}. You are number ${currentLine.length} in line.`
}

const nowServing = (currentLine) => {
  if(currentLine.length === 0){
    return "There is nobody waiting to be served!"
  }else{
      return `Currently serving ${currentLine.shift()}.`
    }
  }

const currentLine = (currentLine) => {
  if(!currentLine.length){
  return `The line is currently empty.`
}else{
  let lineNameNum = [];

  for(let i = 0; i < currentLine.length; i++){
    lineNameNum.push(`${i+1}. ${currentLine[i]}`)
  }
  return `The line is currently: ${lineNameNum.join(', ')}`
}
}

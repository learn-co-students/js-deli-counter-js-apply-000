let katzDeli = [];

const takeANumber = (currentLine, name) => {
  currentLine.push(name)
//console.log(`Welcome, ${name}. You are number ${currentLine.length} in line.`)
return `Welcome, ${name}. You are number ${currentLine.length} in line.`
}

const nowServing = (currentLine) => {
  if(currentLine.length === 0){
    return "There is nobody waiting to be served!"
  }else{
      return `Currently serving ${currentLine.shift()}.`
      //currentLine.pop(eachName)
    }
  }

const currentLine = (line) => {

if(!line.length){
  return `The line is currently empty.`
}else{
  let lineNameNum = [];

  for(let i = 0; i < line.length; i++){
    lineNameNum.push(`${i+1}. ${line[i]}`)
  }
  return `The line is currently: ${lineNameNum.join(', ')}`
}
}

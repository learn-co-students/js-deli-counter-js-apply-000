//var katzDeliLine is an array

function takeANumber(katzDeliLine, name){
  //add name 
  katzDeliLine.push(name)
  
  //take a number 
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(katzDeliLine){
  //return first person and remove if line is not empty
  if(katzDeliLine.length !== 0){
    return `Currently serving ${katzDeliLine.shift()}.`
  }
  
  //if line is empty
  return `There is nobody waiting to be served!`
}

function currentLine(katzDeliLine){
  if(katzDeliLine.length !== 0){
    let lineCount = []
    for(var i = 0; i < katzDeliLine.length; i++){
      lineCount.push(i + 1 + '. ' + katzDeliLine[i]);
    }
    return `The line is currently: ${lineCount.join(', ')}`
  }
  return `The line is currently empty.`
}
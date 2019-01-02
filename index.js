
function takeANumber(queue, newCustomer){
  queue.push(newCustomer)
  return `Welcome, ${newCustomer}. You are number ${queue.length} in line.`
}

function nowServing(currentLine){
  if (!currentLine.length){
    return "There is nobody waiting to be served!"
  
  } else{
    return `Currently serving ${currentLine.shift()}.`
  }
}

function currentLine(line){
  
  if (!line.length){
    return "The line is currently empty."
  
  } else{
    var lineString = "The line is currently: "
  for (let i = 0; i < line.length; i++) { 
  
  if (i == line.length - 1){
    lineString += `${i + 1}. ${line[i]}`
  
  } else
  lineString += `${i + 1}. ${line[i]}, `
  }
    return lineString
  }
}

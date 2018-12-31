
function takeANumber(currentLine, newPerson){
  currentLine.push(newPerson)
  
  return `Welcome, ${newPerson}. You are number ${currentLine.length} in line.`
}

function nowServing(katzDeliLine){
  
  if(!katzDeliLine.length){
    return 'There is nobody waiting to be served!'
  } else {
    return `Currently serving ${katzDeliLine.shift()}.`
  }
  //if( nowServing = 0){
    //return ("There is nobody waiting to be served!")
  //}
}

function currentLine(line){
  //console.log(line)
  if(line.length === 0){
    return "The line is currently empty."
  }
  
  const numbersAndNames = []
  
  for (let i = 0; line.length > i ; i++ ) {

    numbersAndNames.push(`${i + 1}. ${line[i]}`)
  }
  return `The line is currently: ${numbersAndNames.join(", ")}`
}

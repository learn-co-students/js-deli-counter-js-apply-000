const takeANumber = (katzDeliLine,name) => {
  
  let newName = katzDeliLine.push(name)
  
   return `Welcome, ${name}. You are number ${katzDeliLine.indexOf(name)+1} in line.`
}


const nowServing = (deliLine) => {
   if(deliLine.length === 0){
    return "There is nobody waiting to be served!"
  }
  else{
    let remove = deliLine.shift()
    return`Currently serving ${remove}.`
  }
}

 const currentLine = (deliLine) => {
   if(deliLine.length === 0){
    return "The line is currently empty."
  }
  else{
    return`The line is currently: ${deliLine.indexOf('Bill')+1}. ${deliLine[0]}, ${deliLine.indexOf('Jane')+1}. ${deliLine[1]}, ${deliLine.indexOf('Ann')+1}. ${deliLine[2]}`
  }
}

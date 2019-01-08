function takeANumber(currentLine, newPerson) {
  currentLine.push(newPerson)
  return  `Welcome, ${newPerson}. You are number ${currentLine.length} in line.`
}

function nowServing(currentLine){
  if (!currentLine.length ) {
    return "There is nobody waiting to be served!"; 
 } 
 return `Currently serving ${currentLine.shift()}.`
}

function currentLine(line) {
 
 if (line.length === 0) {
    return "The line is currently empty."
  } else {
    var string = `The line is currently: `
    for(var i = 0; i < line.length; i++) {
    string += `${i+1}. ${line[i]}`
     if (i < line.length - 1){ // Name is not the last person in // line.
       string += ", "
     }
    }
      return string 
  }
  
}
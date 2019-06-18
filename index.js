const takeANumber = (currentLine, name) => {
    currentLine.push(name); 
    const message = `Welcome, ${name}. You are number ${currentLine.length} in line.`
     return message; 
}

const nowServing = currentLine => {
  if (currentLine.length === 0) {
    return "There is nobody waiting to be served!"; 
  } else {
    const firstPerson = currentLine.shift(); 
    return `Currently serving ${firstPerson}.`; 
  }
}

const currentLine = currentLine => {
  let currentStr = "The line is currently: "; 
  
  if (currentLine.length === 0) {
    return "The line is currently empty."
  } 
    
  for (let index = 0; index < currentLine.length; index++) {
    const name = currentLine[index];
      if (index !== currentLine.length - 1) {
          currentStr += `${index + 1}. ${name}, ` 
      } else {
          currentStr += `${index + 1}. ${name}`
      }
  }
  return currentStr; 
}
const takeANumber = (currentLine, newCustomer) => {
  currentLine[currentLine.length] = newCustomer
  return 'Welcome, ' + newCustomer + '. You are number ' + currentLine.length + " in line."
}

const nowServing = (currentLine) => {
  if (currentLine.length){
    let serving = currentLine[0]
    currentLine.shift()
    return "Currently serving " + serving + "."
  }
  else {
    return "There is nobody waiting to be served!"
  }
}

const currentLine = (currentLine) => {
  if (currentLine.length){
    let string = "The line is currently: "
    for (let i = 0; i < currentLine.length; i++)    {
      string += (i + 1) + ". " + currentLine[i] + ", "
    }
    //string = string.slice(0, -1) //removing ,
    return string.slice(0, -2)
  }
  else {
    return "The line is currently empty."
  }
}

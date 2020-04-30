function takeANumber(lineArr, name){
  let customerNumber = lineArr.length + 1
  let welcomeMessage = `Welcome, ${name}. You are number ${customerNumber} in line.`
  lineArr.push(name)
  return welcomeMessage
}

function nowServing (lineArr){
  if (lineArr.length === 0){
    return "There is nobody waiting to be served!"
  } else {
    let firstInLine = lineArr[0]
    lineArr.shift()
    return `Currently serving ${firstInLine}.`
  }
}

function currentLine(lineArr){
  let string  = "The line is currently"
  if (lineArr.length === 0){
    string += " empty."
  } else {
    string += `: `
    for (let i = 0; i < lineArr.length; i++){
      var name = lineArr[i]
      string += `${i+1}. ${name}`
      if (i < lineArr.length-1){
        string += ", "
      }
    } 
  }
  return string
}


function takeANumber(katzDeliLine, name){
  let customerNumber = katzDeliLine.length + 1
  let welcomeMessage = `Welcome, ${name}. You are number ${customerNumber} in line.`
  katzDeliLine.push(name)
  return welcomeMessage
}

function nowServing (katzDeliLine){
  if (katzDeliLine.length === 0){
    return "There is nobody waiting to be served!"
  } else {
    let firstInLine = katzDeliLine[0]
    katzDeliLine.shift()
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


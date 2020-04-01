function takeANumber(currentLine, newPersonName) {
  currentLine.push(newPersonName)
  let welcomeStr = "Welcome, " + newPersonName + ". You are number " + currentLine.length + " in line."
  
  return welcomeStr
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length) 
    return "Currently serving " + katzDeliLine.shift() + "."
  else
    return "There is nobody waiting to be served!"
}

function currentLine(katzDeliLine) {
  let lenArr = katzDeliLine.length
  var newStr = ""
  if (lenArr) {
    for (let i=0; i<lenArr; i++) {
      newStr += `${i+1}. ` + katzDeliLine[i] 
      if (i<lenArr-1)
        newStr += ", "
    }
    return "The line is currently: " + newStr
  }
  else
    return "The line is currently empty."
}
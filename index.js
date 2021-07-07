function takeANumber(lineArr,newName) {
  lineArr.push(newName)
  return ("Welcome, " + newName + ". You are number " + (lineArr.length) + " in line.")
}

function nowServing(currentNum) {
  if (currentNum.length == 0) {
    return "There is nobody waiting to be served!"
  }
  return "Currently serving " + currentNum.shift() + "."
}

function currentLine(lineArr) {
  if (lineArr.length === 0) {
    return "The line is currently empty."
  }
  var sentence = "The line is currently:"
  for (var i=0; i<lineArr.length; i++) {
    sentence+= " " + (i+1) + ". " + lineArr[i]
    if (i+1 !== lineArr.length) {
      sentence+= ","
    }
  }
  return sentence
}
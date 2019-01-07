
function takeANumber(DeliLine,nameParm) {
  var x = ""
  var lineNum = DeliLine.length + 1
  x = "Welcome, " + nameParm + ". You are number " + lineNum + " in line."
  DeliLine[DeliLine.length] = nameParm
  return x
}

function nowServing(DeliLine) {
  var x = ""
  if (DeliLine.length == 0) {
    x = "There is nobody waiting to be served!"
  } else {
    x = "Currently serving " + DeliLine[0] + "."
    DeliLine.splice(0, 1);
  }

  return x
}

function currentLine(DeliLine) {
  var text1 = "The line is currently: "
  var x = ""
  var lineNum = 1
  if (DeliLine.length == 0) {
    text1 = "The line is currently empty."
  }
  else {
    for (var i = 0;i < DeliLine.length;i++) {
       x += lineNum + ". " + DeliLine[i] + ", "
       lineNum++
    }
    text1 += x
    text1 = text1.substring(0,text1.length-2)

  }

  return text1
}

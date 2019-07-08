function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name)
  var x = katzDeliLine.length;
  return "Welcome, " + name +". You are number " + x + " in line."
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length > 0){
    var y = katzDeliLine.shift()
    return 'Currently serving ' + y + '.'
  } else {
    return "There is nobody waiting to be served!"
  }
}

function currentLine(katzDeliLine) {
  if (katzDeliLine.length > 0){
    var str1 = "The line is currently: " + "1. " + katzDeliLine[0]
    for (var i = 1; i < katzDeliLine.length; i++) {
      str1 = str1 + ', ' + (i+1) + ". " + katzDeliLine[i]
    }
    return str1
    } else {
      
    return "The line is currently empty."
}}
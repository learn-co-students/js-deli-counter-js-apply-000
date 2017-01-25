var katzDeliLine = [];

function takeANumber(katzDeliLine, name) {
    katzDeliLine.push(name)
    for (var i = 0; i < katzDeliLine.length; i++){
    return `Welcome, ${name}. You are number ` + katzDeliLine.length + ` in line.`
}
}


function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!"
  } else {
      return `Currently serving ${katzDeliLine.shift()}.`

  }
}


function currentLine(katzDeliLine){
  if (katzDeliLine.length === 0) {
    return "The line is currently empty."
  } else {
    var a = []
    for ( var i = 0; i < katzDeliLine.length; i++) {
      a.push(" " + (i + 1) + "." +  " " + katzDeliLine[i])
    }
        return `The line is currently:` + a
  }

}

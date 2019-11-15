function takeANumber (line, name){
  line.push(name)
  return "Welcome, " + name + ". You are number " + line.length + " in line."
}

function nowServing(l) {
  if (l.length === 0){
    return "There is nobody waiting to be served!" 
  } else {
    var name = l[0]
    l.splice(0,1)
    return "Currently serving " + name + "."
  }
}

function currentLine(deliLine){
  var q = []
  if (deliLine.length === 0){
    return "The line is currently empty."
  } else {
    for (var i = 0; i < deliLine.length; i++) {
      q.push(i+1 + ". " + deliLine[i] + ", ")
    }
    return "The line is currently: " + q 
  }
}
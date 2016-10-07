

function takeANumber(katzDeliLine,name){
  katzDeliLine.push(name)
  var num = katzDeliLine.length
  return "Welcome, " + name + ". You are number " + num + " in line."
}

function nowServing(deliLine){
  if (deliLine.length === 0)
    return "There is nobody waiting to be served!"
  else{
    var name = deliLine[0]
    deliLine.shift()
    return "Currently serving " + name + "."
  }
}

function currentLine(line){

  if (line.length === 0)
    return "The line is currently empty."
  else{
    var str = "The line is currently: "
    for (var i=0;i<line.length-1;i++){
      str += i+1 + ". " + line[i] + ", "
    }
    str += i+1 + ". " + line[i]
    return str
  }
}

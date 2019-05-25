function takeANumber(line, name){
  line.push(name)
  return "Welcome, " + name + ". You are number " + (line.length) + " in line."
}

function nowServing(katzDeliLine){
  if(katzDeliLine.length === 0) return "There is nobody waiting to be served!"
  var person = katzDeliLine[0]
  katzDeliLine.splice(0, 1)
  return "Currently serving " + person + "."
}
function currentLine(line){
  if(line.length === 0) return "The line is currently empty."
var result = "The line is currently: "
for(var i = 0;i< line.length; i++){
  result += (i+1) + ". " + line[i]
  if(i < line.length - 1) result += ", "
}

  return result
}

function takeANumber(line,name){
  line.push(name)
  return "Welcome, " + name + ". You are number " + (line.length) + " in line."
}

function nowServing(katzDeliLine){
  if (katzDeliLine.length === 0) {
  var serving = "There is nobody waiting to be served!"
  }
  else {
  var person = katzDeliLine[0]
  katzDeliLine.splice(0, 1)
  serving = "Currently serving " + person + "."
  }
  return serving 
}
function currentLine(line){
  if (line.length === 0) {
  var inline = "The line is currently empty."
  }
  else {
inline = "The line is currently: "
for(var i = 0;i< line.length; i++){
  inline += (i+1) + ". " + line[i]
  if(i < line.length - 1) inline += ", "
}
}
  return inline
}

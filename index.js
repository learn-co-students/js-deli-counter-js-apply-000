var katzDeliLine = [];

function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name)
  var queue = katzDeliLine.length
  return `Welcome, ${name}. You are number ${queue} in line.`
}

function nowServing(deliLine){
  
  if (deliLine.length === 0){
  return "There is nobody waiting to be served!"
}

else {
  var serving = deliLine[0]
  deliLine.shift()
  return "Currently serving " + serving + ".";
}
return deliLine
}

function currentLine(line){
  if (line.length === 0){
  return "The line is currently empty."
}
else { 
  var i = 1
  var lineNow = line.map(line => " " + i++ + ". " + line)
  return "The line is currently:" + lineNow
}
}
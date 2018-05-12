function takeANumber (katzDeliLine, name){
  var position = katzDeliLine.length+1
  katzDeliLine.push(name)
return "Welcome, " + name +". You are number "+ position +" in line."

}

function nowServing (deliLine){
var name;

if(deliLine.length == 0){
  return "There is nobody waiting to be served!"
}

name = deliLine.shift()
return "Currently serving "+ name + "."
}

function currentLine (katzDeliLine){
  if(katzDeliLine.length == 0){
    return "The line is currently empty."
  }

  var myString = `The line is currently: 1. ${katzDeliLine[0]}`

  for(let i = 1; i<katzDeliLine.length;i++){
  myString += `, ${i+1}. ${katzDeliLine[i]}`
}
return myString
}

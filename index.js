function takeANumber(katzDeliLine, name){

  katzDeliLine.push(name)

  var sent = "Welcome, " + name + ". You are number " + Number(katzDeliLine.indexOf(name)+1) + " in line."

return sent

}
function nowServing(list){
  if (list == ""){
    return "There is nobody waiting to be served!"
  }
else {
var sent = "Currently serving " + list[0] + "."
list.splice(0, 1)

  return sent
}

}

function currentLine(line){

if (line ==""){
  var sent = 'The line is currently empty.'
  return sent
}
else {
  var sent = "The line is currently: "
  for (var x=0; x < line.length; x++){
    sent+= x+1
    sent+= "."
    sent+= " "
    sent+=line[x]
    sent+= ", "
  }
sent = sent.slice(0,-1)
sent = sent.slice(0,-1)
  return sent
}

}

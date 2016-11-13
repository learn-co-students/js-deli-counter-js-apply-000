
var katzDeliLine=[]

function takeANumber(katzDeliLine,name) {
  if (katzDeliLine[0]==undefined) {
    var position=1
  }
  else {
  var position=katzDeliLine.length+1
}
  var welcome='Welcome, ' + name + '. You are number ' + position + ' in line.'

  katzDeliLine.push(name)
  return welcome
}

function nowServing(katzDeliLine) {

  var name=katzDeliLine[0]
  katzDeliLine.shift()
  if (katzDeliLine[0]==undefined) {
    return "There is nobody waiting to be served!"

  }
  else {


  return "Currently serving " + name + "."
}

}


function currentLine(katzDeliLine) {

var output="The line is currently: 1. " +katzDeliLine[0]

for (var i = 1; i < katzDeliLine.length; i++) {
  var linespot=i+1
  output= output + ", " + linespot + ". " + katzDeliLine[i]
}

  if (katzDeliLine[0]==undefined) {
    return "The line is currently empty."
  }
  else {
  return output
}
}

// Define global variable katzDeliLine that represents the line at the beginning of the day
// Also if we want to test using console.log
var katzDeliLine = [];

//This function takeANumber() adds new people to the katz Deli Line and gives them their place in line
function takeANumber(katzDeliLine, person){
  katzDeliLine.push(person)
  return `Welcome, ${person}. You are number ${katzDeliLine.length} in line.`
}

// This function nowServing() announces who, if anyone, is being served, and removes them from the line
function nowServing(katzDeliLine){
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!"
  }else {
    var firstPerson = katzDeliLine.shift()
    return `Currently serving ${firstPerson}.`
  }
}

//This function currentLine() returns the people in line, if any
function currentLine(katzDeliLine){
  if (katzDeliLine.length === 0) {
    return "The line is currently empty."
  }else {
    var lineList = []
    katzDeliLine.forEach(function(name,index){
       lineList.push(" " + (index+1) + ". " + name)
    })
  }
  return "The line is currently:" + lineList
}

//currentLine(katzDeliLine)
/*
function currentLine(katzDeliLine){
  if (katzDeliLine.length === 0) {
    return "The line is currently empty."
  }else {
    var lineList = []
    for (var i = 0; i < katzDeliLine.length; i++) {
      lineList.push(" "+ (i+1) + ". " + katzDeliLine[i])
    }
  }
  return "The line is currently:" + lineList
}
*/

var katzDeli = [];
var katzDeliLine = []
function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name)
  var index = katzDeliLine.indexOf(name)
  var pos = parseInt(index) + 1
  return `Welcome, ${name}. You are number ${pos} in line.`
}
function nowServing(katzDeliLine){
  
  if(katzDeliLine.length === 0){
    return `There is nobody waiting to be served!`
    } else{
    var shiftName = katzDeliLine[0];
    katzDeliLine.shift();
    return `Currently serving ${shiftName}.`;
    
  }
}
function currentLine(katzDeliLine){
  var line = katzDeliLine
  if (line.length === 0){
    return `The line is currently empty.`
  } else{
    var i = 0
    var str = "The line is currently: " 
    while(i+1<line.length){
      str = str + `${i+1}. ${katzDeliLine[i]}, `
      i++
    }
    while(i+1===line.length){
      str = str + `${i+1}. ${katzDeliLine[i]}`
    }
      return str
  }
}
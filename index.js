var katzDeliLine = [];

function takeANumber(katzDeliLine, Name){
  katzDeliLine.push(Name)
  return "Welcome, "+Name+"."+" You are number "+(katzDeliLine.length)+" in line."
}
function nowServing(katzDeliLine){
if (katzDeliLine.length>0) {
  return "Currently serving "+katzDeliLine.shift()+"."
} 
else {
  return "There is nobody waiting to be served!"}
}
var lineList = "The line is currently: "
function currentLine(line){
  if (line.length>0){
    let i = 0; while (i < line.length){
      lineList = lineList+(i+1)+". "+line[i]
       if (i < line.length-1){lineList = lineList+", "}
      i++
   }
    return lineList
  }
  else return "The line is currently empty."
}
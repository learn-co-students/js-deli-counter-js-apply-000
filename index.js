var katzDeliLine = [];
var i = 0 
function takeANumber(line,name){
  return "Welcome, " + name + ". You are number " + (line.push(name)) + " in line."
}

function nowServing(line){
  var value;
  
  if(line[0] === undefined){
    return "There is nobody waiting to be served!"
  }else{
    value = line[0]
    line.shift()
    return "Currently serving " + value + "."
  }
}

function currentLine(katzDeliLine){
   var strings = "The line is currently: "
   var i = 0
  if(katzDeliLine[0] === undefined){
    return "The line is currently empty."
  }else{
 do{
   if(i === (katzDeliLine.length - 1)){
    strings += (i + 1 ) + ". " + katzDeliLine[i]
    i++
   }else{
    strings += (i + 1 ) + ". " + katzDeliLine[i] + ", "
   i++
   }
   
 }while(i < katzDeliLine.length)
  return strings
  }
}
  
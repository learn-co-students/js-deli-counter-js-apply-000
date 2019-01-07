
var katzDeliLine = [];
function takeANumber(katzDeliLine, currentName){
  katzDeliLine.push(currentName);
  return(`Welcome, ${currentName}. You are number ${katzDeliLine.length} in line.`)
}

function nowServing(katzDeliLine){
  
 if (katzDeliLine.length === 0){
   return ('There is nobody waiting to be served!')
 }
 else {
   for (var i = 0; i < katzDeliLine.length; i++){
     var currentPerson = katzDeliLine.shift();
     return (`Currently serving ${currentPerson}.`)
  }
    
}
} 

function currentLine(katzDeliLine){
  if (katzDeliLine.length === 0){
   return ('The line is currently empty.')
 }
 else{
   for (var i = 0; i < katzDeliLine.length; i++){
     katzDeliLine.splice(i, 1,` ${i+1}. ${katzDeliLine[i]}`)
   }
   return (`The line is currently:${katzDeliLine}`)
 }
}
  

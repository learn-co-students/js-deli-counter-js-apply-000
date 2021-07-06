var katzDeliLine = []


function takeANumber(katzDeliLine, name){
  //add name to katzDeliLine
  katzDeliLine.push (name)
  return ("Welcome, " + name + ". You are number " + katzDeliLine.length + " in line.")
}

function nowServing(katzDeliLine){
  let i=0
  //increment line number
  while (i<katzDeliLine.length){
    i++
  }
  
  //set condition for empty line
  if (katzDeliLine.length === 0){
    return ("There is nobody waiting to be served!")
    //set condition for service
  } else {
    return ("Currently serving " + katzDeliLine.shift() + ".")
  }
}

//create new array for line list
 var lineList = []
 
 function currentLine(katzDeliLine){
   let i=0
   while (i<katzDeliLine.length){
     lineList.push(" " + [i+1] + ". " + katzDeliLine[i])
     i++
   }
   
   if (katzDeliLine.length === 0){
     return ("The line is currently empty.")
   } else {
     return ("The line is currently:" + lineList)
   }
 }
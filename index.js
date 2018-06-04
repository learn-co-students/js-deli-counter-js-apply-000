var katzDeli = []

/**************************takeANumber***************************/

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name)
  return "Welcome, " + name + ". You are number " + katzDeliLine.length + " in line." 
}

/**************************nowServing***************************/

function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!"
}
  else {
    var name = katzDeliLine [0];
    katzDeliLine.shift()
    return "Currently serving " + name + "." 
  }
}

/**************************nowServing***************************/

function currentLine(katzDeliLine) {
if (katzDeliLine.length === 0) {
  return "The line is currently empty."
}
 else {
   let line = []
   for ( let i = 0  ; i < katzDeliLine.length  ;  i++ ) {
     line.push (" " + ( i + 1) + ". " + katzDeliLine[i]  )
   }
   return "The line is currently:" + line;
 }
}









function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name)

  return "Welcome, " + name + ". You are number " + katzDeliLine.length + " in line."
}

function nowServing(katzDeliLine){

  //katzDeliLine.unshift("Steven")
  if (katzDeliLine.length > 1){
    var steven = "Currently serving " + katzDeliLine[0] + "."
    katzDeliLine.shift()
    return steven
  }

  if (katzDeliLine.length <= 1 ){
    return "There is nobody waiting to be served!"
  }
}

function currentLine(katzDeliLine){
  if (katzDeliLine.length === 0){
    return "The line is currently empty."
   }
   else if (katzDeliLine.length > 0 ){
     const line = []
     for (var i=0; i < katzDeliLine.length; i++ ){
       line[i] = " " + (i+1) + '. ' + katzDeliLine[i]
     }
     return "The line is currently:" + line
  }
}
/*function currentLine(katzDeliLine){
  var obj = katzDeliLine[key] = value
  return obj
}*/

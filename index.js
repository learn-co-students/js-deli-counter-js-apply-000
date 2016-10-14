var katzDeli=[]
var i = 0
var pos = 0

function takeANumber(katzDeliLine, name){
  //katzDeliLine is array, add name to array
    katzDeliLine.push(name)
    pos = katzDeliLine.indexOf(name)+1
    return "Welcome, " + name + ". You are number " + pos + " in line."
}

function nowServing(katzDeliLine){
  if (katzDeliLine.length>0){
    return "Currently serving " + katzDeliLine.shift() + "."
  }else{
    return "There is nobody waiting to be served!"
  }
}

function currentLine(katzDeliLine){
  i = 0
  var current=""
  if (katzDeliLine.length>0){
    current="The line is currently:"
    for(i=0; i<katzDeliLine.length; i++){
      pos = i+1
      current=current + " " + pos + ". " + katzDeliLine[i]
      if (i<(katzDeliLine.length-1)){
        current=current+","
      }
    }
    return current
  }else{
    return "The line is currently empty."
  }

}

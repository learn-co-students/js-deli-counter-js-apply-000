


function takeANumber(katzDeliLine, name){



  var katzDeliLine1=(katzDeliLine.length)+1

  katzDeliLine.push(name)
  return "Welcome, " + name + ". You are number " + katzDeliLine1 + " in line."
}
function nowServing(katzDeliLine){
  var b=katzDeliLine.slice()
  if (katzDeliLine.length===0){
    return "There is nobody waiting to be served!"
  }

  else{


    katzDeliLine.shift()
    return "Currently serving " + b[0] +"."


  }
}

function currentLine(line){
  var result="The line is currently:"
  if (line.length===0){
    return "The line is currently empty."
  }
  else{
    for(var i=0; i<line.length;i++){
      if (i===0){
      result+= " "+(i+1).toString() + ". "+line[i]
    }
    else{
      result+= ", "+(i+1).toString() + ". "+line[i]
    }
  }

}
return result;
}

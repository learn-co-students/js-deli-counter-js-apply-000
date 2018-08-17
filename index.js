function takeANumber (katzDeliLine, name) 
{
  katzDeliLine.push(name)
  return("Welcome, " + name + ". You are number " + (katzDeliLine.length) + " in line.")
  i++
}

function nowServing (katzDeliLine)
{
  if (katzDeliLine.length > 0)
  {var string = "Currently serving " + katzDeliLine[0] + "."
    katzDeliLine.shift()
    return string 
  }
  else {return ("There is nobody waiting to be served!")}
}

function currentLine(katzDeliLine){
  if(katzDeliLine.length > 0){
    var string = "The line is currently: " 
    for (var i = 0; i < katzDeliLine.length; i++){
      if (i === katzDeliLine.length -1){
       string += `${i+1}. ${katzDeliLine[i]}`  
    }
      else {
      string += `${i+1}. ${katzDeliLine[i]}, `
    }
  } 
    return string 
  } 
else{
return "The line is currently empty."}
}
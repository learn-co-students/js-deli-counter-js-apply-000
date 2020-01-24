function takeANumber(katzDeliLine,customerName){
  katzDeliLine.push(customerName)
  return "Welcome, " + customerName +". You are number " + (katzDeliLine.length) + " in line."
}

function nowServing(katzDeliLine){
  if(katzDeliLine.length < 1 ){
    return "There is nobody waiting to be served!"
  }else{
  let name = katzDeliLine[0]
  katzDeliLine.shift()
  return "Currently serving " + name + "."
  }
}

function currentLine(theLine){
  if(theLine.length === 0){
    return "The line is currently empty."
  }
  let sentence = "The line is currently: "
  for( let i = 0 ; i < theLine.length; i ++){
    let name = theLine[i]
    if(name !== theLine[theLine.length-1]){
    sentence += (i+1) + ". " + name + ", "
    }else{
      sentence +=(i+1)+ ". " + name
    }
  }
 return sentence
}
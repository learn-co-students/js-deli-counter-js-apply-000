function takeANumber(katzDeliLine,name){
  var final = ''
  var num
  katzDeliLine.push(name)
  for(var i=0;i<katzDeliLine.length;i++){
    if(katzDeliLine[i]===name){
      num = i+1
      return final = "Welcome, "+ katzDeliLine[i] + ". You are number " +num + " in line."
    }
  }
}
function nowServing(katzDeliLine){
  if(katzDeliLine.length<=0){
    return "There is nobody waiting to be served!"
  }
    return 'Currently serving ' + katzDeliLine.shift() + '.';
}
function currentLine(katzDeliLine){
  var finalStr
  var str = ''
  var num
  if(katzDeliLine.length<=0){
    finalStr = "The line is currently empty."
  }
  else{
    for(var a=0;a<katzDeliLine.length-1;a++){
      num = a+1
      str += num +'. '+katzDeliLine[a]+', '
      finalStr = 'The line is currently: ' +  str + katzDeliLine.length + '. '+katzDeliLine[katzDeliLine.length-1]
    }
  }
  return finalStr
}

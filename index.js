var katzDeli =[]
var katzDeliLine=[]


function takeANumber(katzDeliLine,name){
  katzDeliLine.push(name);
  var position = katzDeliLine.indexOf(name) +1

  return `Welcome, ${name}. You are number ${position} in line.`
}

function nowServing(katzDeliLine){
  if (katzDeliLine[0])
  return `Currently serving ${katzDeliLine.shift()}.`;
  else{ return "There is nobody waiting to be served!";
  }
}

function currentLine(katzDeliLine){
  var line =[]
  if (katzDeliLine[0]){
    for(var i=0;i<katzDeliLine.length;i++){
      line.push(` ${i+1}. ${katzDeliLine[i]}`)
    }
    return `The line is currently:${line}`
  }else {
    return "The line is currently empty."
  }
}

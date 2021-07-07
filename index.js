function takeANumber(line, name){
  line.push(name)
  let last=line.length
    return `Welcome, ${name}. You are number ${last} in line.`
  
}
function nowServing(katzDeliLine){
  if(katzDeliLine.length===0){
    return "There is nobody waiting to be served!"

  }
  else{
    
    return `Currently serving ${katzDeliLine.shift()}.`
  }
}
function currentLine(katzDeliLine){
  let strng='The line is currently:'
  if(katzDeliLine.length===0){
    return "The line is currently empty."
  }
  else{
    for(let i=0;i<katzDeliLine.length;i++){
      strng+=` ${i+1}. ${katzDeliLine[i]}`
      if(i+1<katzDeliLine.length){
        strng+=','
      }
    }
    return strng
  }
}
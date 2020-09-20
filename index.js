function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name)
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
 }  
 
function nowServing(katzDeliLine){
  if(katzDeliLine.length<=0){
    return "There is nobody waiting to be served!"
  }else{
    katzDeliLine.shift()
    return "Currently serving Steven."
  }
}
function currentLine(katzDeliLine){
  var string="The line is currently: "
  if(katzDeliLine.length>0){
    for(let x=0; x<katzDeliLine.length; x++){
      string+= x + 1 + ". " + katzDeliLine[x]+"," +" "
      
    }
    string=string.slice(0,-2)
    return string
    }else{
      return"The line is currently empty."
    
  }
}
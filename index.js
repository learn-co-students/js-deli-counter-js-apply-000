function takeANumber(deliLine, name){
  deliLine.push(name)
  var position=deliLine.length
  return `Welcome, ${name}. You are number ${position} in line.`
}
function nowServing(deliLine){
  var name=deliLine[0]
  deliLine.shift(name)
  if(deliLine.length===0){
    return "There is nobody waiting to be served!"
  }
  else{
    return `Currently serving ${name}.`
  }
}
function currentLine(deliLine){
  var string="The line is currently:"
  if(deliLine.length===0){
    return "The line is currently empty."
  }
  else{
    for(var i=0; i<deliLine.length; i++){
      var position=i+1
      var name=deliLine[i]
     
     string=string+" "+position+". "+deliLine[i]+","
     
    }
    string=string.substring(0, string.length-1)
    return string
  }
}
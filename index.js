var katzDeliLine = []
var katzDeli = []
function takeANumber(line,name){
  line.push(name)
  
  return "Welcome, " + name + ". You are number " + line.length + " in line." 
}

function nowServing(line){
  if(line.length<1){
    return "There is nobody waiting to be served!"
  }
  var str = "Currently serving " + line[0] + "."
  line.shift()
  return str
}

function currentLine(line){
  var empty = ["The line is currently: "]
  if(line.length<1){
    return "The line is currently empty."
  }
  for(var i = 0;i<line.length;i++){
      if(i == line.length - 1)
      {
        empty.push( i+1 + ". " + line[i] )  
      }
      else{
        empty.push( i+1 + ". " + line[i] +", " ) 
    }
  }
  return empty.join('')
}
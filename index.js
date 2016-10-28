function takeANumber(line,cust){
  line.push(cust)
  return ("Welcome, "+cust+". You are number "+line.length+" in line.")
}
function nowServing(line){
  if(line.length==0){
    return("There is nobody waiting to be served!")
  }
  else{return("Currently serving "+line.shift()+".")
}}

function currentLine(line){
  if(line.length==0){
    return("The line is currently empty.")
  }
  else{
    var x = "The line is currently:"
    for(var i=1;i<=line.length;i++){
      x = x+" "+i+". "+line[i-1]+",";
    }
    return x.slice(0,-1)
  }
}

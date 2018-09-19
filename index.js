var param

function takeANumber(param1,param2){
  var a
  a=param1.length
  
  param1[a]=param2
   
  
  return "Welcome, "+ param2+". You are number "+(a+1)+" in line."
}
function nowServing (param)
{
  var a
   
  a=""
  if (param.length>0) {
    a=param[0]
  }
  var i
  i=0
  while (i<param.length-1)
  {
 
  param[i]=param[i+1]
  i++
  }
  
  if (param.length>0) {
    param.length=param.length-1
  }
  if (a==="") {
    return "There is nobody waiting to be served!"
  }
  else return "Currently serving "+a +"."

}

function currentLine(param3){
var s
s="The line is currently: "
for (var i=0;i<param3.length;i++) 
  {
   s=s+(i+1)+". "+param3[i]
   if (i!=param3.length-1) {
    s=s+", "
  }
  }  
  
   if (param3.length >0) {
    return s
  }
  else
  {
  return "The line is currently empty."
  }
  
  
  
}
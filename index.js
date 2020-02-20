function takeANumber(a,b)
{
  a.push(b);
  return `Welcome, ${b}. You are number ${a.length} in line.`

}
function nowServing(a)
{
  var c=a[0]
  if(a.length>0){
  a.shift();
  return `Currently serving ${c}.`;
  }
  else if(a.length===0)
  {
    return "There is nobody waiting to be served!";
  }
}
function currentLine(a){
  var b=[];
  if(a.length>0){
  for(var i=0;i<a.length;i++)
  {
    if(i===0)
    b[i]=`${i+1}. ${a[i]}`;
    else
    b[i]=` ${i+1}. ${a[i]}`;
  }
  return `The line is currently: ${b}`
}
else{
  return "The line is currently empty.";
}
}

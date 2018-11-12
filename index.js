function takeANumber (lin, name)
{
  lin.push(name);
  return "Welcome, " + name + ". You are number " + lin.length + " in line.";
}
function nowServing(lin)
{
  if(lin.length === 0)
    return "There is nobody waiting to be served!";
  var name = lin[0];
  lin.shift();
  return "Currently serving " + name + ".";
}
function currentLine(lin)
{
  if(lin.length === 0)
    return "The line is currently empty.";
  var line = "The line is currently: 1. " + lin[0];
  for(var x = 1; x < lin.length; x++)
  {
    line+= ", " + (x+1) +". "+ lin[x];
  }
  return line;
}
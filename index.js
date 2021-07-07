var katzDeliLine = [];

function takeANumber(katzDeli, name)
{
  katzDeli.push(name);
  return("Welcome, " + name + ". You are number " + katzDeli.length + " in line.");
}

function nowServing(currentLine)
{
  var x = [];
  if(currentLine.length === 0)
  {
    x = "There is nobody waiting to be served!";
  }
  else
  {
    x = "Currently serving " + currentLine[0] + ".";
    currentLine.shift();
  }
  return x;
}

var katzDeliLine = [];

function currentLine(x)
{
  var line = [];
  if (x.length === 0)
  {
    return "The line is currently empty.";
  }
  else 
  {
   for (var i = 0; i < x.length; i++)
   {
     line += (i + 1) + ". " + x[i] + ", ";
   }
   line = line.slice(0, line.length - 2);
   return "The line is currently: " + line;
  }
}
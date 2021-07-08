var katzDeliLine = [];

function takeANumber(line, n)
{
  var index = 0;
  while(line[index] != n)
       {
         index++;
       }
  return "Welcome, " + n + ". You are number " + (index + 1) + " in line.";
}

function nowServing(katzDeliLine)
{
  if(katzDeliLine.length !== 0)
    {
     return katzDeliLine.shift();
    }
  else 
  {
    return "There is nobody waiting to be served!";
  }
}

function currentLine(katzDeliLine)
{
  var str = "";
  if(katzDeliLine.length === 0)
     return "The line is currently empty.";
  for(var i = 0; i < katzDeliLine.length; i++)
    {
      str += (i+1) ;
      str += ". ";
      str += katzDeliLine[i];
      str += ", ";
    }
  return "The line is currently: " + str;
}
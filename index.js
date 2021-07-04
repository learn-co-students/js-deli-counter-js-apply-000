var katzDeliLine = [];

function takeANumber(katzDeliLine, newClient)
{
  katzDeliLine.push(newClient);
  return "Welcome, " + newClient +". You are number " + (katzDeliLine.indexOf(newClient)+1) + " in line.";
}

function nowServing(katzDeliLine)
{
  if(katzDeliLine.length == 0)
  {
    return "There is nobody waiting to be served!";
  }
  else
  {
    var currentClient = katzDeliLine[0];
    katzDeliLine.shift();
    return "Currently serving " + currentClient +".";
  }
}

function currentLine(katzDeliLine)
{
  var currentLine = "The line is currently: ";
  if(katzDeliLine.length == 0)
  {
    return "The line is currently empty.";
  }
  else
  {
    for(var i = 0; i < katzDeliLine.length; i++)
    {
      if ( i == katzDeliLine.length-1)
      {
        currentLine = currentLine + (i+1) +". "+katzDeliLine[i];
      }
      else
      {
        currentLine = currentLine + (i+1) +". "+katzDeliLine[i] +", ";
      }
    }
  }
  return currentLine;
}

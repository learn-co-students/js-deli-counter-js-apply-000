
var katzDeliLine = [];
function takeANumber(aRay, sName)
{
  aRay.push(sName);
  return "Welcome, " + sName + ". You are number " + aRay.length + " in line.";
}

function currentLine(aRay)
{
  if(aRay.length != 0)
  {
    var tOut = "The line is currently: ";
    for(var i = 0; i < aRay.length; i++)
    {
      tOut += (i+1) + ". " + aRay[i];
      if (i != aRay.length - 1)
      {
        tOut += ", ";
      }
    }
    return tOut;
  }
  else
  {
    return "The line is currently empty.";
  }
}

function nowServing(aRay)
{
  if(aRay.length > 0)
  {
    return "Currently serving " + aRay.shift() + ".";
  }
  else {
    return "There is nobody waiting to be served!";
  }
}

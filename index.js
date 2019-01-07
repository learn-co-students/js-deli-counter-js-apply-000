var katzDeliLine = []

function takeANumber(katzDeliLine, name)
{
  if(katzDeliLine.length == 0)
  {
    katzDeliLine[0] = name;
    return "Welcome, "+name+"."+ " You are number 1 in line.";
  }else
  {
    katzDeliLine[katzDeliLine.length] = name;

    return "Welcome, "+name+"."+ " You are number "+ katzDeliLine.length +" in line.";
  }

}

function nowServing(katzDeliLine)
{
  if(katzDeliLine.length == 0)
  {
    return "There is nobody waiting to be served!";
  }else
  {
    var serving = "Currently serving"+" "+ katzDeliLine[0]+".";
    katzDeliLine.shift();
    return serving;
  }
}



function currentLine(katzDeliLine)
{
  if(katzDeliLine.length == 0)
  {
    return "The line is currently empty."

  }else
  {
    var theLine = "The line is currently: ";
    for(var i = 1; i <= katzDeliLine.length; i++)
    {
      if(i < katzDeliLine.length)
      {
        theLine += i +". "+ katzDeliLine[i-1]+", ";
      }else if(i == katzDeliLine.length)
      {
        theLine += i +". "+ katzDeliLine[i-1];

      }
    }
    return theLine;

  }

}

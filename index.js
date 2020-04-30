var katzDeliLine = [];

function takeANumber(katzDeliLine,name)
{
  katzDeliLine.push(name);
  return "Welcome, "+name.toString()+". You are number "+katzDeliLine.length+" in line.";
}

function nowServing(katzDeliLine)
{
  if (katzDeliLine.length===0)
  {
    return "There is nobody waiting to be served!";
  }
  else
  {
    return "Currently serving "+katzDeliLine.shift()+".";
  }
}

function currentLine(katzDeliLine)
{
  if (katzDeliLine.length===0)
  {
    return "The line is currently empty.";
  }
  
  else
  {
    var announcement = [];
    var i=0;
    
    do{
      announcement.push(" "+(i+1)+". "+katzDeliLine[i]);
      i++;
      }
    while(i<katzDeliLine.length);
    
    return "The line is currently:"+announcement.toString();
  }
}
function takeANumber(katzDeliLine, name)
{
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`;
}

function nowServing(katzDeliLine)
{
  var str = "";
  if(katzDeliLine[0]===null||katzDeliLine[0]===undefined||katzDeliLine[0]==="")
  {
    str = "There is nobody waiting to be served!";
  }
  else {
    str = "Currently serving " + katzDeliLine[0]+".";
  }
  katzDeliLine.splice(0, 1);
  return str;
}

function currentLine(katzDeliLine)
{ 
  if(!katzDeliLine[0])
  {
    var str = "The line is currently empty."
  }
  else {
    var str = "The line is currently: ";
      for(var i=0;i<katzDeliLine.length; i+=1)
      {
        var index = i+1;
         if(i===katzDeliLine.length-1)
          {str+=index +". "+katzDeliLine[i];}
         else
        {str+=index +". "+katzDeliLine[i]+", ";}
      }
  }
  return str;
}
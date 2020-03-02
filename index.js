
function takeANumber(katzDeliLine, cName)
{
  katzDeliLine.push(cName);
  var linePos = (katzDeliLine.length -1);
  var returner = ("Welcome," + " " + katzDeliLine[linePos] + "." + " " + "You are number " + (katzDeliLine.length) + " " + "in line." );
  return returner;
}

function nowServing(katzDeliLine)
{
  if(katzDeliLine.length !== 0)
  {
    var removed = katzDeliLine.splice(0,1);
    var returner = ("Currently serving " + removed +"." );
    return returner;
  }
  if(katzDeliLine.length == 0)
  {
    return "There is nobody waiting to be served!";
  }
  
}
  function currentLine(katzDeliLine)
  {
    var finalString = "";
    if(katzDeliLine.length === 0)
    {
      return "The line is currently empty.";
    }
    if(katzDeliLine.length !== 0)
    {   
    finalString = "The line is currently: ";
    for(var i = 0; i < katzDeliLine.length; i++)
    {
        if(i !== (katzDeliLine.length - 1))
        {
           finalString += ((i+1) +". " + katzDeliLine[i]+", ");
        }
        if(i === (katzDeliLine.length -1))
        {
            finalString += ((i+1) +". " + katzDeliLine[i]);
        }
       
    }
      return finalString;
    }
 
  }
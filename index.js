
function takeANumber(CLC, NCN) //currentlinecount, newcustomersname
{
  
  CLC.push(NCN);
  
  return 'Welcome, ' + NCN + '. You are number ' + CLC.length + ' in line.';
}

//--------------------------------------------------------------
/*
function nowServing(katzDeliLine) //katzdeliline is an array of names
{
 if (katzDeliLine.length > 0)
 {
    function returnWithin(katzDeliLine)
   {
      return 'Currently serving ' + katzDeliLine[0] + '.';
    }
    
    katzDeliLine.shift();
 else
 {
    return "There is nobody waiting to be served!";
 } 
 }

  
}
*/
  
  
  //============================================================
  
function nowServing(katzDeliLine) //katzdeliline is an array of names
{
  if (katzDeliLine.length > 0)
  {
    return 'Currently serving ' + katzDeliLine.shift() + '.';
  }
  else
   {
     return "There is nobody waiting to be served!";
   }
}

//--------------------------------------------------------------

function currentLine(katzDeliLine)
{
  if (katzDeliLine.length < 1) //if line/array is empty say that
   {
     return "The line is currently empty.";
   }
   else
   {
    var currentLine = 'The line is currently: '
    for (var x = 0; x < katzDeliLine.length; x++)
    {
      currentLine += `${x + 1}. ${katzDeliLine[x]}, `
    }
      return currentLine.slice(0, currentLine.length-2);
   }
}


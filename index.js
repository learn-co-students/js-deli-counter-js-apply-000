
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
  
  
  if (katzDeliLine.length > 0)
  {
    print('Currently serving ' + toString(katzDeliLine[0]) + '.'); //return who is up

    katzDeliLine.shift(); //remove initial name from line/array
    
    return 'Currently serving ' + katzDeliLine[0] + '.';
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
     return "There is nobody waiting to be served!";
   }
   else
   {
    for (var x = 0; x <= katzDeliLine.length; x++)
    {
      
    }
      return currentLine.toString();
   }
}
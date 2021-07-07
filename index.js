//===================================================================
//                          TAKE A NUMBER                           =
//===================================================================
function takeANumber(line,customerName)
{
  line.push(customerName)
  return "Welcome, " + customerName + ". You are number " + line.length + " in line.";
}//takeANumber() end
//===================================================================
//                           NOW SERVING                            =
//===================================================================
function nowServing(deliLine)
{
  if(deliLine[0])//excludes 0, "", null, etc.
  {
    var nowServing = deliLine.shift();
    return "Currently serving " + nowServing + ".";
    
  }
  else
  {
    return "There is nobody waiting to be served!"
  }
}//nowServing() end
//===================================================================
//                         CURRENT LINE                             =
//===================================================================
function currentLine(deliLine)
{
  var tempString = "The line is currently: ";
  var counter = 1;
  if(deliLine[0])//excludes 0, "", null, etc.
  {
    for(var x=0; x<deliLine.length;x++)
    {
      if(x == deliLine.length-1) //if x is the last spot in deliLine
      {
         tempString += counter + ". " + deliLine[x]; // no comma necessary here
      }
      else //case that x is NOT the last in the deliLine
      {
         tempString += counter + ". " + deliLine[x] + ", ";
      }
      counter++; // increment counter for next iteration
    }//for loop end
    
    return tempString;
  }
  else //if the deliLine is EMPTY
  {
    return "The line is currently empty.";
  }
   
}//currentLine() end
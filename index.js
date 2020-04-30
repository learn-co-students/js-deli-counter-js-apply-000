function takeANumber(lineNum, lineName)
{
  lineNum.push(lineName);
  
  return "Welcome, " + lineName + ". You are number " + lineNum.length + " in line."
}

function nowServing(lineNum)
{
  var first = lineNum.shift();
  
  var response = lineNum.length === 0 ? "There is nobody waiting to be served!" : "Currently serving " + first + ".";
  
  return response;
}

function currentLine(lineNum)
{
  var format = [];
  
  for(var i = 0; i < lineNum.length; i++)
  {
    format.push((i + 1) + ". " + lineNum[i]);
  }
  
  if(lineNum.length === 0)
  {
    return "The line is currently empty.";
  }
  else
  {
    var listed = "The line is currently: ";
    
    return listed + format.join(', ');
  }
}


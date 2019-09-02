var katzDeliLine = [];

function takeANumber(katzDeliLine, name)
{
  katzDeliLine.push(name)
  return "Welcome, " + name + ". You are number " + katzDeliLine.length + " in line."
}
 function nowServing(next)
  {
    var i = 0
    while (i < next.length)
    {
      i++;
    }
    
    if (next.length === 0)
  {
    return "There is nobody waiting to be served!"
  }
  else 
      return 'Currently serving ' + next.shift() + '.'

}
function currentLine(queue)
{
  var line = []
  if (queue.length === 0)
  {
    return "The line is currently empty."
  }
  
  else
  {
    var i = 0
    for (i=0; i < queue.length; i++)
    {
      line += (i+1) + ". " + queue[i] + ", "
    }
    
    line = line.slice(0, line.length-2)
    return "The line is currently: " + line
  }
}
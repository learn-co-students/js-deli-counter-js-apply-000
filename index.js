function takeANumber(katzDeliLine, name)
{
  katzDeliLine.push(name);
  return "Welcome, " + name + ". You are number " + katzDeliLine.length + " in line.";
}

function nowServing(katzDeliLine)
{
  if(katzDeliLine.length > 0)
  {
    var removed = katzDeliLine.splice(0, 1);
    return "Currently serving " + removed + ".";
  }
  else
  {
    return "There is nobody waiting to be served!";
  }
}

function currentLine(katzDeliLine)
{
  if(katzDeliLine.length > 0)
  {
    var state = [];
    for(var i = 0; i < katzDeliLine.length; i++)
    {
      state.push(" " + (i + 1) + ". " + katzDeliLine[i]);
    }
    return "The line is currently:" + state;
  }
  else {
    return "The line is currently empty."
  }
}
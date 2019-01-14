function takeANumber(katzDeliLine, name)
{
  katzDeliLine.push(name)
  return "Welcome, " + name + ". You are number " + katzDeliLine.length + " in line."
}

function nowServing(line)
{
  if (line.length===0)
  return "There is nobody waiting to be served!"
else
{
  var name = line[0]
  line.splice(0,1)
  return "Currently serving " + name + "."
}
}

function currentLine(line)
{
  var inline = []
  if (line.length===0)
  return "The line is currently empty."
else
{for (var i=0; i<line.length; i++)
  {
    inline += (i+1) + ". " + line[i] + ", "
  }
  inline=inline.slice(0, inline.length-2)
  return "The line is currently: " + inline
}
}
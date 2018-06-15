function takeANumber(line, name)
{
  line.push(name)
  return "Welcome, " + name + ". You are number " + line.length + " in line."
}

function nowServing(line)
{
  if (line.length > 0)
    return "Currently serving " + line.shift() + "."
  else
    return "There is nobody waiting to be served!"
}

function currentLine(line)
{
  var lineText = "The line is currently: "
  if (line.length > 0)
  {
    for (var i = 0; i < line.length; i++)
    {
      if (i > 0)
        lineText += ", "
      lineText += (i + 1) + ". " + line[i]
    }
  }
  else
  {
    lineText = "The line is currently empty."
  }
  return lineText
}
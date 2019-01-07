function takeANumber(line, person)
{
  line[line.length] = person;
  return "Welcome, " + person + ". You are number " + line.length + " in line.";
}

function nowServing(line)
{
  if(line.length == 0)
    return "There is nobody waiting to be served!";
  else
  {
    return "Currently serving " + line.shift() + ".";
  }
}

function currentLine(line)
{
  if(line.length == 0)
    return "The line is currently empty."
  else
  {
      var output = "The line is currently: "
      for(var i = 0; i < line.length; ++i)
      {
        output += (i + 1) + ". " + line[i];
        if(i < line.length - 1)
          output += ", ";
      }
      return output;
  }
}

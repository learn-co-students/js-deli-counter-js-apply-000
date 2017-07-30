function takeANumber(line, name)
{
  line.push(name)
  var index = (line.indexOf(name))+1;
  return "Welcome, " + line[line.length-1] + ". You are number " + index + " in line.";
}

function nowServing(line)
{
  var next = line[0]
  line.splice(0,1);
  if(line.length===0)
  {
     return "There is nobody waiting to be served!"
  }
  else
  {
    return "Currently serving " + next + ".";

  }

}
function currentLine(line)
{
  if(line.length===0)
  {
    return "The line is currently empty."
  }

  else {
    {
      var prompt = "The line is currently:";
      for(var i = 0; i<line.length; i++)
      {
        var number = i+1;
        if(i===line.length-1)
        {
          prompt += " " + number + ". " + line[i]
        }
        else
        {
          prompt += " " + number + ". "+ line[i] + ","
        }

      }
    }
  }
  return prompt
}

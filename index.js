function takeANumber(line, name)
{
  line.push(name)
  return "Welcome, "+name+". You are number "+line.length+" in line."
}

function nowServing(line)
{
  var currentlyServed = line.shift()
  if (typeof currentlyServed === 'undefined')
    return "There is nobody waiting to be served!"
  else
    return "Currently serving " + currentlyServed +"."
}

function currentLine(line)
{
  var i = 0
  var res = "The line is currently: "
  if(line.length===0)
    return "The line is currently empty."
  else
    for(i; i<line.length-1; i++)
    {
      res+=i+1+". "+line[i]+", "
    }
    res+=i+1+". "+line[i]
  return res
}
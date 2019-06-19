function takeANumber(curLine,name)
{
  curLine.push(name)
  return `Welcome, ${name}. You are number ${curLine.length} in line.`
}

function nowServing(curLine)
{
  if(curLine.length > 0)
  {
    return `Currently serving ${curLine.shift()}.`
    curline = curLine.shift()
  }else{
    return `There is nobody waiting to be served!`
  }
}

function currentLine(curLine)
{
  if(curLine.length > 0)
  {
    var theLine = "The line is currently:"

    for(let i = 0; i<curLine.length; i++)
    {
      theLine += ` ${i+1}. ${curLine[i]},`
    }
    theLine = theLine.slice(0,theLine.length-1)
    return theLine
  }else {
    return `The line is currently empty.`
  }
}

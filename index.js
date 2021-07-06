function takeANumber(line, name)
{
  line.push(name)
  
  console.log("Welcome, " + name + ". You are number " + line.length + " in line.");
  
  return "Welcome, " + name + ". You are number " + line.length + " in line."
  
}

function nowServing(line)
{
  if(!line.length)
  {
    return "There is nobody waiting to be served!"
  }
  else {
    return "Currently serving " + line.shift() + ".";
  }
  
}

function currentLine(line)
{
  if(!line.length)
  {
    return "The line is currently empty.";
  }
  
  var lineDataStructure = [];
  var i=0;
  
  for(i=0; i < line.length; i++)
  {
    //start at beginning, add 1 for output at index 0
    lineDataStructure.push(i+1 +". "+ line[i]);
  }
  
  var str = "The line is currently: " + lineDataStructure.join(', ');
  return str;
}
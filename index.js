function takeANumber(line, name) {
  line.push(name);
  return "Welcome, " + name + ". You are number " + line.length + " in line.";
}

function nowServing(line) {
  if (line.length === 0)
  {
    return "There is nobody waiting to be served!";
  }
  else
  {
    var personServed = line[0];
    line.shift();
    return "Currently serving " + personServed + ".";
  }
}

function currentLine(line) {
  if (line.length === 0) 
  {
    return "The line is currently empty.";
  }
  else
  {
    var lineNumbers = [];
    for (var i = 0; i < line.length; i++)
    {
      lineNumbers.push(" " + (parseInt(i)+1) + ". " + line[i]);
    }
    return "The line is currently:" + lineNumbers;
  }
}
function takeANumber(people, person)
{
  
  var position = people.length;
  people[position] = person;
  position = position + 1;
  var greeting = `Welcome, ${person}. You are number ${position} in line.`;
  return greeting;
}

function nowServing(people)
{
  if (people.length === 0)
  {
    return "There is nobody waiting to be served!";
  }
  else {
    var current = people[0];
    people.shift();
    return `Currently serving ${current}.`;
  }
}

function currentLine(line) {
  var lineStr;
  if (line.length !== 0)
  {
    var i;
    lineStr = "The line is currently: ";
    for (i=0;i<line.length;i++)
    {
      var pos= i+1
      lineStr = lineStr + pos + ". " + line[i] + ", "
    }
    lineStr = lineStr.substring(0, lineStr.length - 2);
  }
  else
  {
    lineStr = "The line is currently empty.";
  }
  return lineStr;
}
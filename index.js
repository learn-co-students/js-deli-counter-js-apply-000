var katzDeliLine = [];

function takeANumber(line, name)
{
  var length= line.length;
  length=length+1;
  line.push(name);
  return `Welcome, ${name}. You are number ${length} in line.`;
}

function nowServing(line)
{
  if (line.length == 0)
  {
    return "There is nobody waiting to be served!";
  }
  else 
  {
    var firstPerson=line.shift();
    return `Currently serving ${firstPerson}.`;
  }
}

function currentLine(line)
{
  if (line.length === 0)
  {
    return "The line is currently empty.";
  }
  var counter=0;
  var index=1;
  var myString="The line is currently: ";
  while (counter < line.length)
  {
    if (counter == line.length-1)
    {
      var tempString=index.toString();
      tempString=tempString+ ". ";
      myString=myString + tempString;
      var arrayIndex= line[counter];
      myString=myString + arrayIndex;
      return myString;
    }
    var tempString=index.toString();
    tempString=tempString+ ". ";
    myString=myString + tempString;
    index++;
    var arrayIndex= line[counter];
    arrayIndex=arrayIndex+", ";
    myString=myString + arrayIndex;
    counter++;
  }
}

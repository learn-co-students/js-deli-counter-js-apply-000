function takeANumber(katzDeliLine, personName)
{
  katzDeliLine.push(personName);
  return "Welcome, " + personName + ". You are number " + katzDeliLine.length + " in line.";
}

function nowServing(katzDeliLine)
{
  if(katzDeliLine.length === 0)
    return "There is nobody waiting to be served!";
  else
  {
    var firstPerson = katzDeliLine.shift();
    return `Currently serving ${firstPerson}.`;
  }
}

function currentLine(katzDeliLine)
{
  if(katzDeliLine.length === 0)
  {
    return "The line is currently empty."
  }
  else
  {
    var str = '';
    var i;
    for(i = 0; i<katzDeliLine.length;i++)
    {
      str += (i+1) + ". " + katzDeliLine[i];
      if(i !== katzDeliLine.length-1)
        str+= ', ';
    }
    // katzDeliLine.forEach(function(value, index)
    // {
    //   str += `${index+1}. ${value}`;
    //   if(index !== katzDeliLine.length-1)
    //   str += ", ";
    // });
    return "The line is currently: " + str;
  }
}
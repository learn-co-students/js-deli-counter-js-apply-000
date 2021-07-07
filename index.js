var katzDeliLine = [];
 
function takeANumber(katzDeliLine,name)
{
  var output = "";
  var linePosition = katzDeliLine.length + 1;
  
  katzDeliLine[linePosition - 1] = name;
  
  output = "Welcome, " + name + ". You are number " + linePosition + " in line.";
  
  return output;
}

function nowServing(katzDeliLine)
{
  var output = "";
  var position = 1;
  if(katzDeliLine.length > 0)
  {
    
    output = "Currently serving " + katzDeliLine[0] + ".";
    katzDeliLine.shift();
    /*while(katzDeliLine.length > position)
    {
      katzDeliLine[position - 1] = katzDeliLine[position];
      position++;
    }
    katzDeliLine[position - 1] = null;*/
    
  }
  else
  {
    output = "There is nobody waiting to be served!";
  }
  return output;
}

function currentLine(katzDeliLine)
{
  var position = 1;
  var output = "The line is currently";
  if (katzDeliLine.length > 0)
  {
    //while(position == 1){output = output + ": ";} lol way too complicated
    output = output + ": ";
    
    do
    {
      output = output + position + ". " + katzDeliLine[position - 1];
      if(katzDeliLine.length > position)
      {
        output = output + ", ";
      }
      position++;
    }while(katzDeliLine.length >= position);
    return output;
  }
  else
  {
    output = output + " empty.";
    return output;
  }
}

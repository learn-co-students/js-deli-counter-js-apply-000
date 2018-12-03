
var katzDeliLine= [];

function takeANumber(katzDeliLine, Name)
{
  katzDeliLine.push(Name);

 return "Welcome, " + Name + ". You are number " + katzDeliLine.length + " in line."
}

function nowServing(katzDeliLine)
{
  if(katzDeliLine.length>0)
  {
     return "Currently serving "+katzDeliLine.shift()+ ".";
  }
  else
  {
  return "There is nobody waiting to be served!";
}
}

function currentLine(katzDeliLine)
{
  if(katzDeliLine.length>0)
  
    {
      var line = "";
      for(var i=0;i<katzDeliLine.length-1; i++)
      {
       // 1. Bill
        var string = (i+1) + ". " + katzDeliLine[i] + ", ";
        line = line + string;
      }
      var laststring = (katzDeliLine.length) + ". " + katzDeliLine[katzDeliLine.length-1];
      //Remove last letter from line
      line = line + laststring;
    return "The line is currently: " + line ;
      
  }
  
  else
  {
  
return "The line is currently empty." ;
}

}
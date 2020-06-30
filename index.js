var katzDeliLine = [];

function takeANumber(katzDeliLine,name)
{

  katzDeliLine.push(name);
  let num =  katzDeliLine.length;
  return "Welcome, " + name + ". You are number " + (num++)+ " in line.";
}

function nowServing(katzDeliLine)
{
  if(katzDeliLine.length===0)
  {
     return "There is nobody waiting to be served!";
  }
  
  return "Currently serving " + katzDeliLine.shift() + ".";
}

function currentLine(katzDeliLine)
{
 let newArray = [];
 //let n = 2;
 let i = 1;
 //let index = 1;
 //let index2 = 1;
 let length = katzDeliLine.length;
 
 newArray[0]= "1. " + katzDeliLine[0];
 while(i<=length-1)
 {
    newArray[i]= " " + (i+1) + ". " + katzDeliLine[i];
    i++;
 }
  if(length!==0)
  {
      return "The line is currently: " + newArray;
  }
  else
  {
    return "The line is currently empty.";
  }
}

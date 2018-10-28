//1. add newCustomer

function takeANumber(katzDeli, newCustomer )
{
  katzDeli.push(newCustomer);
  return("Welcome, "+ newCustomer + ". You are number " + katzDeli.length + " in line.");
}

//2. 
function nowServing(katzDeliLine)
{
  if (katzDeliLine.length === 0)
  {
    return ('There is nobody waiting to be served!');
  }
  else 
  {
    var Customer = katzDeliLine.shift(); // remove first customer from array
    return ('Currently serving ' + Customer +'.');
  }
}

//3.
function currentLine(katzDeliLine)
{
  if ( katzDeliLine.length !==0 ) 
  {
    var NumberedLine = [];
    for ( var i=0; i< katzDeliLine; i++)
    {}
    return ('The line is currently: ' + katzDeliLine)
  }
  else
  {
    return ("The line is currently empty.");
  }
}
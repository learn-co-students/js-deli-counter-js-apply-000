function takeANumber(katzDeliLine,b)
{

katzDeliLine.push(b);

var msg=('Welcome, ' + b + '. You are number ' + ( katzDeliLine.length ) + ' in line.')
return msg;
}
//takeANumber(1, 'Ada')


function currentLine(katzDeliLine) {

if ((katzDeliLine.length) > 0)

   {
    var msg1='The line is currently: ';
    var output=[];
    
    for(var i = 0;i<(katzDeliLine.length);i++)
        {
          output.push(' '+(i+1)+'. ' + katzDeliLine[i]);
        }
        return 'The line is currently:'+ output;
    }
else
 
return 'The line is currently empty.';
}

function nowServing(katzDeliLine) {
  
  if(katzDeliLine.length>0)
  {
  var deleteperson=katzDeliLine[0];
  katzDeliLine.shift();
  return 'Currently serving ' + deleteperson +'.';
  }
  
  else
  {
  return 'There is nobody waiting to be served!'
  }
}
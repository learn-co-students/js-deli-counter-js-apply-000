
var katzDeliLine = [];

var katzdDeli = ['Ada', 'Grace', 'Kent']

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name)
  return 'Welcome, ' + name + '. You are number ' + katzDeliLine.length + ' in line.';
}

function nowServing(katzDeliLine) 
{
if (katzDeliLine.lenght == 0) 
   {
  return 'There is no one waiting to be served!'
   }
 
 else 
    {  
      return 'Currently serving' + name + '.' 
    }
}
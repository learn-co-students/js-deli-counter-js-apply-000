
var katzDeliLine = [];

var katzdDeli = ['Ada', 'Grace', 'Kent'];

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  return 'Welcome, ' + name + '. You are number ' + katzDeliLine.length + ' in line.';
}

function currentLine(katzDeliLine) {
  if (katzDeliLine.length === 0) 
  { return 'The line is currently empty.';
  } else{ for (var i = 0; i < katzDeliLine.length; i++)
   {katzDeliLine += (i + 1) + '.' + katzDeliLine[i] + ',';
  }
    katzDeliLine = katzDeliLine.slice(0, line.length-2);
    return 'The line is currently: ' +  katzDeliLine;
  } 
}

function nowServing(katzDeliLine) 
{ if (katzDeliLine.length === 0) 
   { return 'There is nobody waiting to be served!';
   }
  else 
  var name = katzDeliLine[0];
  katzDeliLine.splice(0,1);
 {  return 'Currently serving ' + name + '.'; 
  }
}





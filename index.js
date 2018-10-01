var katzDeliLine = [];

function takeANumber(katzDeliLine,name){

katzDeliLine.push(name)

var message= 'Welcome, ' + name + '.'+ ' You are number ' + katzDeliLine.length + ' in line.' 

return message
}


function nowServing(katzDeliLine){
  if (katzDeliLine.length>0)
 {return  'Currently serving ' + katzDeliLine.shift() +'.'
}else
 { return 'There is nobody waiting to be served!'
 }
}

function currentLine(katzDeliLine){
  if (katzDeliLine.length>0){
var string = 'The line is currently: '
for (var i=0; i < katzDeliLine.length; i++) {
var string += parseInt(i+1) += '. '+= katzDeliLine[i]+=', '
}
{return string}
    
  } else
  {return 'The line is currently empty.'
}
} 

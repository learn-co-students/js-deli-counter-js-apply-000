var katzDeli=[];

function takeANumber(katzDeliLine, newCust){
katzDeliLine.push(newCust);
return "Welcome, " + newCust+ '. You are number '+ katzDeliLine.length + ' in line.';

}

function nowServing(katzDeliLine){
  if(katzDeliLine.length>0){
    return 'Currently serving '+katzDeliLine.shift() +'.';
  }
  else{
    return "There is nobody waiting to be served!";
  }
}

function currentLine(katzDeliLine){
  var str='The line is currently: ';
  if(katzDeliLine.length>0){
  for(var i=0; i<katzDeliLine.length; i++){
    str+= String(i+1) + '. '+ katzDeliLine[i];
    if(i!==katzDeliLine.length-1){
      str+=', ';
    }
  }
  return str;
  }
  else{
    return "The line is currently empty.";
  }
}

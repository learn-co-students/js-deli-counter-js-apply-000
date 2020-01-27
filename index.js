deliLine=[];

function takeANumber(katzDeliLine,newName){
  katzDeliLine.push(newName);
  return ('Welcome, '+newName+'. You are number '+(katzDeliLine.length)+' in line.');
}
function nowServing(katzDeliLine){
  if(katzDeliLine.length===0){
    return 'There is nobody waiting to be served!'
  }
  else{
    return 'Currently serving '+katzDeliLine.shift()+'.';
  }
}
function currentLine(katzDeliLine){
  let lineOrder=[];
  if(katzDeliLine.length===0){
    return 'The line is currently empty.'
  }
  else{
    for(let x=0;x<katzDeliLine.length;x++){
      lineOrder.push(x+1+'. '+katzDeliLine[x]);
    }
  }
  return 'The line is currently: '+lineOrder.join(', ');
}
takeANumber(deliLine,'Ada');

function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name);
  return ('Welcome, ' + name + '. You are number ' + katzDeliLine.length + ' in line.');
}

function nowServing(katzDeliLine){
  if(katzDeliLine.length === 0){
    return 'There is nobody waiting to be served!';
  } else {
    return 'Currently serving ' + katzDeliLine.shift() + '.';
  }
}

function currentLine(katzDeliLine){
  var line = '';
  if(katzDeliLine.length === 0){
    line = 'The line is currently empty.';
  } else {
    for(var i = 0; i < katzDeliLine.length; i++){
      if(i === 0){
        line = 'The line is currently: 1. ' + katzDeliLine[0];
      } else {
        line += ', ' + (i+1) + '. ' + katzDeliLine[i];
      }
    }
  } return line;
}

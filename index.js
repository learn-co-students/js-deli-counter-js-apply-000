var katzDeli = [];

function takeANumber(katzDeliLine,name){
  katzDeliLine.push(name);
  return 'Welcome, ' + name + '.' + ' You are number ' + (katzDeliLine.indexOf(name) + 1) + ' in line.';
}


function nowServing(katzDeliLine){
  let firstInLine = '';
  if(katzDeliLine == false){
    return 'There is nobody waiting to be served!';
  }else{
    firstInLine += katzDeliLine.shift();
  }
  return 'Currently serving ' + firstInLine + '.';
}

function currentLine(katzDeliLine){
  let lineStatus = 'The line is currently: ';
  if(katzDeliLine == false){
    return 'The line is currently empty.';
  }else{
    for(let i = 0; i < katzDeliLine.length;i++){
      lineStatus += (i + 1) + '. ' + katzDeliLine[i] + ', ';
    }
  }
  return lineStatus.slice(0,-2);
}

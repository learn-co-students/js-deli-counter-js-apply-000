var katzDeliLine = [];

function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name);
  var output = `Welcome, ${name}. You are number ${katzDeliLine.indexOf(name)+1} in line.`;
  return output;
}


function nowServing (katzDeliLine){
  if(katzDeliLine.length === 0){
    return 'There is nobody waiting to be served!';
  }
  else{
    return ('Currently serving ' + katzDeliLine.shift() + '.');
  }
}

function currentLine (katzDeliLine){
  var line = [];
  if(katzDeliLine.length === 0){
    return 'The line is currently empty.';
  }
    for(var i = 0; i < katzDeliLine.length; i++){
      line.push(`${i+1}. ${katzDeliLine[i]}`);
      
  }
    katzDeliLine = line.join(', ' + '');
    return 'The line is currently: ' + katzDeliLine
  
}
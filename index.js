
function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name);
  return 'Welcome, ' + name + '. You are number ' + katzDeliLine.length + ' in line.';
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
      return 'The line is currently empty.';
    } else {
      for(var i = 0; i < katzDeliLine.length; i++){
       line += (i+1) + '. ' + katzDeliLine[i] + ', ';
    }
    return "The line is currently: " + line.slice(0, line.length - 2);
  }
}

var katzDeli = [];

function takeANumber(katzDeliLine, person){
  katzDeliLine.push(person);
  return 'Welcome, '+ person +'. You are number '+ katzDeliLine.length + ' in line.'
}


function nowServing(katzDeliLine){
  if(katzDeliLine.length === 0){
    return 'There is nobody waiting to be served!';
  }else{
    var firstPerson = katzDeliLine.shift();
    return 'Currently serving ' + firstPerson + '.';
  }
}

function currentLine(katzDeliLine){
  var theLine = []
  if(katzDeliLine.length === 0){
    return 'The line is currently empty.'
  }else{
    theLine = katzDeliLine.map(function(i){
      return katzDeliLine.indexOf(i) + 1 + '. ' + i
    });return 'The line is currently: ' + theLine.join(', ');
  }
}

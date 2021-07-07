var katzDeli = [];

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  var position = katzDeliLine.length;
  return 'Welcome, ' + name + '. You are number ' + position + ' in line.';
}

function nowServing(katzDeliLine) {
  if(katzDeliLine.length === 0){
    return 'There is nobody waiting to be served!';
  } else {
    var firstInLine = katzDeliLine[0];
    katzDeliLine.splice(0,1);
    return 'Currently serving ' + firstInLine + '.';
  }
}

function currentLine(katzDeliLine) {
  var currentLine = 'The line is currently: '
  if(katzDeliLine.length === 0){
    return 'The line is currently empty.';
  } else {
    for(var i = 0 ; i < katzDeliLine.length ; i++){
      var name = katzDeliLine[i];
      var position = i + 1;
      currentLine += position + '. ' + name + ', '
    }
  }
  return currentLine.slice(0, -2);
}

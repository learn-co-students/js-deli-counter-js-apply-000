var katzDeliLine = [];

function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name);
  var num = katzDeliLine.indexOf(name) + 1;
  return 'Welcome, ' + name + '. You are number ' + num + ' in line.';
}

function nowServing(katzDeliLine){
  if(katzDeliLine.length === 0){
    return 'There is nobody waiting to be served!';
  } else {
    var serving = katzDeliLine[0];
    katzDeliLine.shift();
    return 'Currently serving ' + serving + '.';
  }
}

function currentLine(katzDeliLine){
  var result = "The line is currently: ";

  if(katzDeliLine.length === 0){
    return 'The line is currently empty.';
  }

  for(var i = 0; i < katzDeliLine.length; i++){
    var place = i + 1;

    result += place + '. ' + katzDeliLine[i];

    if(i !== katzDeliLine.length - 1){
      result += ', ';
    }
  }

  return result;
}

var katzDeliLine = [];

function takeANumber(katzDeliLine, newName){
    katzDeliLine.push(newName);
    return 'Welcome, ' + newName + '.' + ' You are number ' +  katzDeliLine.length + ' in line.';
}

function nowServing(katzDeliLine){
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!";
  } else {
    var name = katzDeliLine[0];
    katzDeliLine.splice(0, 1);
    return "Currently serving " + name + '.';
  }
}


function currentLine(katzDeliLine){
  var newLine = [];
  if (katzDeliLine.length === 0){
    return "The line is currently empty.";
  } else {
    for (let i = 0; i < katzDeliLine.length; i++) {
      newLine += (i + 1) + '. ' + katzDeliLine[i] + ', ';
    }
  newLine = newLine.slice(0, newLine.length - 2);
  return "The line is currently: " + newLine;
  }
}
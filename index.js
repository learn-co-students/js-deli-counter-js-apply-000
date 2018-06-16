var katzDeliLine = [];

function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name);
  var position = katzDeliLine.length;
  return "Welcome, " + name + ". You are number " + position + " in line."
}

function nowServing(katzDeliLine){
  if (katzDeliLine.length === 0){
    return 'There is nobody waiting to be served!'
  } else {
    var first = katzDeliLine[0];
    katzDeliLine = katzDeliLine.shift();
    return 'Currently serving ' + first +'.';
  }
}

function currentLine(katzDeliLine){
  var string = 'The line is currently: ';
  if (katzDeliLine.length === 0){
    return 'The line is currently empty.'
  } else {
    for (var i = 0; i < katzDeliLine.length; i++){
      var person = katzDeliLine[i];
      var position = i + 1;
      if ( i === 0){
        string += position + '. ' + person
      } else {
        string += ', ' + position + '. ' + person
      }
    }
  }
  return string;
} 
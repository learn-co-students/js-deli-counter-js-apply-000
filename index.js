var katzDeliLine = [];

function takeANumber (katzDeliLine, person) {
  katzDeliLine.push(person);
  return "Welcome, "+ person +". You are number "+ katzDeliLine.length + " in line.";
}

function nowServing(katzDeliLine) {
    if (katzDeliLine.length === 0) {
       return 'There is nobody waiting to be served!'
    }
    for (var i = 0; i < katzDeliLine.length; i += 1) {
     var person = katzDeliLine.shift();
      return "Currently serving " + person + '.';
    }
}

function currentLine(katzDeliLine) {
  var message = "The line is currently: ";
  
  if (katzDeliLine.length === 0) {
    return  "The line is currently empty."
  }
  for (var i = 0; i < katzDeliLine.length; i += 1) {
    var num = i + 1;
    var name = katzDeliLine[i];
    if (i !== katzDeliLine.length - 1){ 
      message += num.toString() + ". " + name + ', ';
    } else {
      message += num.toString() + ". " + name;
    }
  }
  return message
}
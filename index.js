function takeANumber (katzDeliLine, name) {
  var newStr = '';
  katzDeliLine.push(name);
  
  newStr = "Welcome, " + name + ". You are number " + katzDeliLine.length + " in line."
  

  return newStr;
}

function nowServing(katzDeliLine) {

  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!"
  } else if (katzDeliLine.length > 0){
    return "Currently serving " + katzDeliLine.shift() + ".";
  }
}

//  should return the first person in line and then remove that individual from the line. If there is nobody in line, it should return "There is nobody waiting to be served!"

function currentLine(katzDeliLine) {

  if (katzDeliLine.length === 0) {
    return "The line is currently empty.";
  }
  
  var newStr = "The line is currently: ";

  for (var i = 0; i < katzDeliLine.length; i++) {
    var person = katzDeliLine[i];
    var sequence = i + 1;

    if (katzDeliLine.length > 0 && i !== katzDeliLine.length -1) {
      newStr += sequence + ". " + person + ", ";
    } else if (i === katzDeliLine.length -1) {
      newStr += sequence + ". " + person;
    }
  }
  
  return newStr;
}

// Build a function currentLine that accepts the current line of people and returns the current line as a string; for example, if 'katzDeliLine' is currently ["Ada", "Grace"], currentLine(katzDeliLine) would return "The line is currently: 1. Ada, 2. Grace". You don't have to use katzDeliLine as a variable or parameter name in your function though, it's just an example of a variable that might be passed to it. If there is nobody in line, it should return "The line is currently empty."

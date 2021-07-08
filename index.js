function takeANumber(katzDeliLine, personName) {
  katzDeliLine.push(personName);
  var str = "Welcome, " + katzDeliLine[katzDeliLine.length - 1];
  str += ". You are number " + katzDeliLine.length + " in line."

  return str;
}

function nowServing(katzDeliLine) {
  var result = "Currently serving ";
  var val = katzDeliLine.shift();

  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!";
  }
  return result + val + ".";
}

function currentLine(katzDeliLine) {
  var result = 'The line is currently: ';
  var arr = [];
  if (katzDeliLine.length === 0) {
    return "The line is currently empty.";
  } else {
    katzDeliLine.forEach(function(person, idx) {

      arr.push( idx+1 + '. ' + person);
    });
  }
  return result + arr.join(', ');
}

/*
3. Build a function `currentLine` that returns the current line.
For example, if `katzDeliLine` is currently `["Ada", "Grace"]`,
`currentLine(katzDeliLine)` would return
`"The line is currently: 1. Ada 2. Grace"`.
If there is nobody in line, it should return
`"The line is currently empty."`
*/

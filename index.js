var katzDeliLine = [];

function takeANumber (katzDeliLine, names) {
  var number = katzDeliLine.length + 1;
  katzDeliLine.push(names);
return "Welcome, " + names + ". You are number " + number + " in line."
}

function nowServing(katzDeliLine) {
  var first = katzDeliLine.shift();


if (katzDeliLine.length === 0 ) {
  return "There is nobody waiting to be served!";
}
else
return "Currently serving " + first +"."
}

function currentLine(katzDeliLine) {
  var line = [];
  for (var i = 0; i < katzDeliLine.length ; i++) {
    line.push(" " + [i+1] + ". " + katzDeliLine[i])
  }
  if (katzDeliLine.length === 0) {
    return "The line is currently empty."
  }else
    return "The line is currently:"+ line
}

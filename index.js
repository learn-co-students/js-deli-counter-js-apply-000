var katzDeliLine = [];

function takeANumber(katzDeliLine, name) {
katzDeliLine.push(name);
return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`;
}

function nowServing (katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!";
  } else {
  var firstInLine = katzDeliLine.shift();
 return "Currently serving "+firstInLine+".";
  }
}

var counter = [];

function currentLine(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "The line is currently empty.";
  } else {
    for (var i = 0; i < katzDeliLine.length; i++) {
      counter.push(" "+[i+1]+". "+ katzDeliLine[i]);
    }
     return "The line is currently:"+counter;
  }
}





var katzDeli = [];
var katzDeliLine = [];

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  return(`Welcome, ${name}. You are number ${katzDeliLine.length} in line.`)
};


function nowServing(katzDeliLine) {
if (katzDeliLine.length === 0) {
  return "There is nobody waiting to be served!";
} else {
  var name = katzDeliLine[0];
  katzDeliLine.shift();
  for (var i = 0; i < katzDeliLine.length + 1; i++)
  return`Currently serving ${name}.`;
  }
};

function currentLine(katzDeliLine) {
  var line = [];
  if (katzDeliLine.length === 0) {
   return "The line is currently empty.";
 } else {
   var i = 0;
    while (i < katzDeliLine.length) {
      line.push(`${i + 1}. ${katzDeliLine[i]}`)
      i++;
    }
  }
  return `The line is currently: ${line.join(', ')}`;
};

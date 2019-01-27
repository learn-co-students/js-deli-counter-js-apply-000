
function takeANumber (line, name){
  var length = line.length
  line [length] = name;
  return `Welcome, ${name}. You are number ${length + 1} in line.`
}

function nowServing (katzDeliLine) {
  if (katzDeliLine.length > 0){
  var serving = katzDeliLine[0];
  katzDeliLine = katzDeliLine.shift();
  return `Currently serving ${serving}.`;
}
else {
  return "There is nobody waiting to be served!"
}
}

function currentLine (line) {
  var count = line.length
  var i = 1;
if (count > 0){
  var lineString = "The line is currently:"
  while (count > 0){
    lineString += ` ${i}. ${line[i-1]}`
    if (i < line.length){
      lineString += ","
    }
    i++;
    count--;
  }
  return lineString;
}
else {
  return "The line is currently empty."
}
}

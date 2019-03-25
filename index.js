var katzDeliLine = [];
 function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(`${name}`);
  return(`Welcome, ${name}. You are number ${katzDeliLine.length} in line.`);
 }
 function nowServing(katzDeliLine) {
  let i = 0;
  while (i < katzDeliLine.length) {
    i++;
  }
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!";
  }
  else
  return (`Currently serving ${katzDeliLine.shift()}.`);
 }
 function currentLine(current) {
    var line = []
    if (current.length === 0) {
      return "The line is currently empty."
    } else {
      for(var i = 0; i < current.length; i++) {
        line += (i + 1) + ". " + current[i] + ", "
      }
      line = line.slice(0, line.length-2)
      return "The line is currently: " + line
    }
 }
function takeANumber(line, name) {
  line.push(name);
  var number = line.length;
  return `Welcome, ${name}. You are number ${number} in line.`;
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length <= 0){
    return 'There is nobody waiting to be served!'
} else {
    var name = katzDeliLine[0];
    katzDeliLine.shift();
    return `Currently serving ${name}.`;
  }
}

function currentLine(line) {
  if (line.length <= 0){
  return "The line is currently empty."
} else {
  var current = []
  for (var i in line){
  current.push(`${Number(i) + 1}. ${line[i]}`)
}
return `The line is currently: ` + current.join(', ')
  }
}

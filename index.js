function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(`${name}`);
  return (`Welcome, ${name}. You are number ${katzDeliLine.length} in line.`);
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!";
  } else {
    var name = katzDeliLine[0];
    katzDeliLine.splice(0,1);
    return (`Currently serving ${name}.`);
  }
}

function currentLine(line) {
  var movingLine = [];
  if (line > []) {
    for(var i = 0; i < line.length; i++) {
      movingLine.push(` ${i+1}. ${line[i]}`);
    }
    return "The line is currently:" + movingLine;
  } else {
    return "The line is currently empty.";
  }
}
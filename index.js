function takeANumber(katzDeliLine, name) {
katzDeliLine.push (name);
return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`;
}

function nowServing(katzDeliLine) {
if (!katzDeliLine.length) {
  return 'There is nobody waiting to be served!';
} else {
  return `Currently serving ${katzDeliLine.shift()}.`;
}
}


function currentLine(line) {
var placeOnLine = [];

  if (!line.length) {
    return 'The line is currently empty.';
  } else {
    for (var i = 0; i < line.length; i++) {
    placeOnLine.push (`${i + 1}. ${line[i]}`);
    console.log(placeOnLine)
  }
}
return `The line is currently: ${placeOnLine.join(', ')}`;
}

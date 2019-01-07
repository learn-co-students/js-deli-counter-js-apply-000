function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`;
};

function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return 'There is nobody waiting to be served!'
  }
  return `Currently serving ${katzDeliLine.shift()}.`;
};

function currentLine(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return 'The line is currently empty.';
  }
  var line = [];

  katzDeliLine.forEach(function(ele, i, ar){
    line.push(`${i + 1}. ${ele}`)
  })

  return 'The line is currently: ' + line.join(', ');
};

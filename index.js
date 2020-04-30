function takeANumber(katzDeli, name) {
  katzDeli.push(name);
  return `Welcome, ${name}. You are number ${katzDeli.length} in line.`
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length > 0) {
    var shifted = katzDeliLine.shift();
    return `Currently serving ${shifted}.`
  }

  else {
    return `There is nobody waiting to be served!`
  }
  }

function currentLine(line) {
  var number = 1;
  let lineString = `The line is currently: `;

  if(line.length == 0) {
    return "The line is currently empty."
  }

  while(line.length > 1) {
  lineString += `${number}. ${line.shift()}, `;
  number++
  }

  if(line.length == 1) {
    lineString += `${number}. ${line.shift()}`;
  }

return lineString

}

var katzDeli = [];

function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`;
}

function nowServing(katzDeliLine){
  var output;
  if (katzDeliLine.length === 0) output = 'There is nobody waiting to be served!';
  else output = `Currently serving ${katzDeliLine.shift()}.`;
  return output;
}

function currentLine(katzDeliLine){
  var output;
  if (katzDeliLine.length === 0) output = 'The line is currently empty.';
  else {
    output = 'The line is currently: ';
    for (var i = 0; i < katzDeliLine.length - 1; i++){
      output += `${i + 1}. ${katzDeliLine[i]}, `;
    }
    output += `${i + 1}. ${katzDeliLine[i]}`;
  }
  return output;
}

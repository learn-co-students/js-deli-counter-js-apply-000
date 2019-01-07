var katzDeli = [];
function takeANumber(katzDeli, newPerson) {
  katzDeli.push(newPerson);
  return ('Welcome, ' + newPerson + '. You are number ' + katzDeli.length + ' in line.');
}
function nowServing(line) {
  if (line.length === 0) {
    return ('There is nobody waiting to be served!');
  }else{
    return (`Currently serving ${line.shift()}.`);
  }
}
function currentLine(lineNow) {
  if (lineNow.length === 0) {
    return ('The line is currently empty.');
  } else {
    var lineNum = [];
    for (var i = 0; i < lineNow.length; i++) {
     lineNum.push(' ' + (i + 1) + '. ' + lineNow[i]);
    }
     return ('The line is currently:' + lineNum);
  }
}
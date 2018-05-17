var katzDeli = [];
function takeANumber(katzDeli, PersonName) {
  katzDeli.push(PersonName);
  return ("Welcome, " + PersonName + ". You are number " + katzDeli.length + " in line.");
}
function nowServing(katzDeli) {
  if (katzDeli.length === 0) {
    return ('There is nobody waiting to be served!');
  }else{
    return ('Currently serving ' + katzDeli.shift() + '.');
 }
}

function currentLine(line) {
  if (line.length === 0) {
    return ('The line is currently empty.');
  } else {
    var lineNow = [];
    for (var i=0; i < line.length; i++) {
      lineNow.push((i + 1) + '. ' + line[i]);
    }
    return ('The line is currently: ' + lineNow.join(', '));
 }
}
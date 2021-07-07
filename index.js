var katzDeli = [];

function takeANumber(katzDeli, name) {
  katzDeli.push(name);
  return "Welcome, " + name + ". You are number " + (katzDeli.indexOf(name) + 1) + " in line.";
 }

function nowServing(katzDeli) {
  if (katzDeli.length === 0) {
    return "There is nobody waiting to be served!";
  }
return (`Currently serving ${katzDeli.shift()}.`);
}
function currentLine(katzDeli) {
  if (katzDeli.length === 0) {
    return "The line is currently empty.";
  } 
  for (var i = 0; i < katzDeli.length; i++) {
    var line = [];
    var name1 = katzDeli[i];
    var name2 = katzDeli[i + 1];
    var name3 = katzDeli[i + 2];
    line.push(name1);
    line.push(name2);
    line.push(name3);
    if (katzDeli.length === 0) {
      return "The line is currently empty.";
    } else {
      return('The line is currently:' + " 1. " + line[0] + ", 2. " + line[1] + ", 3. " + line[2]);
    }
  }
}

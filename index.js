var katzDeli = [];
function takeANumber(katzDeli, name) {
  katzDeli.push(name);
  return "Welcome, " + name + ". You are number " + katzDeli.length + " in line.";
}
// console.log(takeANumber(katzDeli, "Ada"));
// console.log(takeANumber(katzDeli, ""));

function nowServing(katzDeli) {
  var remove = katzDeli.shift();
  // for (var i = 0; i < katzDeli.length; i++){
  if (katzDeli.length === 0) {
    return "There is nobody waiting to be served!";
  } else {
    return "Currently serving " + remove + ".";
  }
}

// console.log(nowServing(katzDeli));

var line = [];
function currentLine(katzDeli) {
  for (var i = 0; i < katzDeli.length; i++) {
    line.push(" " + [i + 1] + ". " + katzDeli[i]);
  } if (line.length === 0) {
    return "The line is currently empty."
  }
  return "The line is currently:" + line;
}

// console.log(currentLine(katzDeli));

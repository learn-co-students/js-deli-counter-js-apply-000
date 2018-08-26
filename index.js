var katzDeli = [];
var otherDeli = ["Steven", "Blake", "Avi"];

function takeANumber(katzDeli, name){
  katzDeli.push(name);
  return ("Welcome, " + name + ". You are number " + katzDeli.length + " in line.");
}

function nowServing(otherDeli){
  if (otherDeli.length === 0) return "There is nobody waiting to be served!";
  var cust = otherDeli.shift();
  return "Currently serving " + cust + ".";
}

function currentLine(katzDeli){
  var line = [];
  if (katzDeli.length === 0) return "The line is currently empty.";
  for (var i = 0; i < katzDeli.length; i++){
    line.push(" " + [i+1] + ". " + katzDeli[i]);
  }
  return "The line is currently:" + line;
}
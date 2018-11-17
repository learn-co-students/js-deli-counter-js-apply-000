var katzDeli = [];

function takeANumber(katzDeli, name) {
  katzDeli.push(`${name}`);
  return `Welcome, ${name}. You are number ${katzDeli.length} in line.`;
}

function nowServing(katzDeli) {
  katzDeli;
  if 
  (katzDeli.length === 0) {
    return "There is nobody waiting to be served!";
  }
  else {
    return (`Currently serving ${katzDeli.shift()}.`);
}
}

var katzDeliLine = [];

function currentLine(katzDeli) {
  var i = 0;
  while (i < katzDeli.length) {
    katzDeliLine.push(` `+[i+1]+`. `  + katzDeli[i]);
    i++;
  }
  if (katzDeli.length === 0) {
    return "The line is currently empty.";
  } else
  return(`The line is currently:` + katzDeliLine);
}
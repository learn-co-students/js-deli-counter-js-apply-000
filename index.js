function takeANumber(katzDeliLine, name){
  katzDeliLine.push(`${name}`);
  return(`Welcome, ${name}. You are number ${katzDeliLine.length} in line.`);
}

function nowServing(katzDeli) {
    let i = 0;
    while (i < katzDeli.length) {
      i++;
    }
  if (katzDeli.length === 0) {
    return "There is nobody waiting to be served!";
  }
 return (`Currently serving ${katzDeli.shift()}.`);
}

function currentLine(katzDeliLine) {
  var line = [];
  let i = 0;
  while (i < katzDeliLine.length) {
    line.push(` `+[i+1]+`. `  + katzDeliLine[i]);
    i++;
  }
  if (katzDeliLine.length === 0) {
    return "The line is currently empty.";
  } else
 return(`The line is currently:` + line);
}
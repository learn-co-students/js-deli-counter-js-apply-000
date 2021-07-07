
function takeANumber(linePeople, name) {
  if (linePeople.length > 0);
    linePeople.push(name);
    return ('Welcome, ' + name + '. You are number ' + linePeople.length + ' in line.')
}

function nowServing(katzDeli) {
  
  let i = 0;
  while (i < katzDeli.length) {
    i++;
  }
  if (katzDeli.length === 0) {
    return "There is nobody waiting to be served!";
  }
  else {
  return (`Currently serving ${katzDeli.shift()}.`);
  }	
}

function currentLine(katzDeli) {
  let line = [];
  
  let i = 0;
  while (i < katzDeli.length) {
    line.push(` `+[i+1]+`. `  + katzDeli[i])
    i++;
  }
  if (katzDeli.length === 0) {
    return "The line is currently empty.";
  } else
  return(`The line is currently:` + line);
}

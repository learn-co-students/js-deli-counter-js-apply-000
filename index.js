var myDeli = [];

function takeANumber(myDeli, custName) {
  myDeli.push(`${custName}`);
  return (`Welcome, ${custName}. You are number ${myDeli.length} in line.`);
}

function nowServing(myDeli) {
  let i = 0;
  while (i < myDeli.length) {
    i++;
  }
  if (myDeli.length === 0) {
    return "There is nobody waiting to be served!";
  }
  else
  return (`Currently serving ${myDeli.shift()}.`);
}

var theLine = [];

function currentLine(myDeli) {
  let i = 0;
  while (i < myDeli.length) {
    theLine.push(` `+[i+1]+`. `  + myDeli[i])
    i++;
  }
  if (myDeli.length === 0) {
    return "The line is currently empty.";
  } else
  return(`The line is currently:` + theLine);
}

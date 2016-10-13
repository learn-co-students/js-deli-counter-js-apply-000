const katzDeli = []

function takeANumber(katzDeli, name) {
  katzDeli.push(name)
  return `Welcome, ${name}. You are number ${katzDeli.length} in line.`
}

function nowServing(katzDeli) {
  if(katzDeli.length > 0) {
  let serving = `Currently serving ${katzDeli[0]}.`;
  katzDeli.shift();
  return serving
} else {
  return `There is nobody waiting to be served!`
}
}

function currentLine(katzDeli) {
  if(katzDeli.length > 0) {
    let n = 0, line = [];
    while (katzDeli.length > n) {
      line.push(` ${n + 1}. ${katzDeli[n++]}`);
    } return `The line is currently:${line}`;
  } else {
    return `The line is currently empty.`
  }
}

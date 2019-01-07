var katzDeli = [];

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`;
}

function nowServing(katzDeliLine) {
  let str = ``;
  if (katzDeliLine.length){
    str = `Currently serving ${katzDeliLine[0]}.`;
    katzDeliLine.shift();
  }
  else {
    str = `There is nobody waiting to be served!`;
  }
  return str;
}

function currentLine(katzDeliLine) {
  let str = ``;
  if (katzDeliLine.length) {
    str = `The line is currently: `
    for (let i = 0; i < katzDeliLine.length; i++) {
      if (i === katzDeliLine.length - 1) str += `${i + 1}. ${katzDeliLine[i]}`;
      else str += `${i + 1}. ${katzDeliLine[i]}, `;
    }
  }
  else {
    str = `The line is currently empty.`;
  }
  return str;
}
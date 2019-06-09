let katzDeli = []; 

function takeANumber (katzDeli, name) {
  katzDeli.push(name); 
  return `Welcome, ${name}. You are number ${katzDeli.indexOf(name) + 1} in line.`;
}

function currentLine (katzDeli) {
  if (katzDeli.length === 0) {
    return "The line is currently empty.";
  } else{
  let line = `1. ${katzDeli[0]}`;
  for (let i = 1; i < katzDeli.length; i++) {
    line = line + `, ${i + 1}. ${katzDeli[i]}`; 
  }
  return `The line is currently: ${line}`; 
}
}

function nowServing (katzDeli) {
  if (katzDeli.length === 0) {
    return "There is nobody waiting to be served!"; 
  } else {
  return `Currently serving ${katzDeli.shift()}.`; 
}
}
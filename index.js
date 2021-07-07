function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!";
  } else {
  let firstPerson = katzDeliLine.shift();
  return `Currently serving ${firstPerson}.`;
  }
}

function currentLine(katzDeliLine) {
let string = "The line is currently: "
let newLine = [];

  if (katzDeliLine.length === 0) {
    return "The line is currently empty.";
  }
  else {
    for (let i = 0; i < katzDeliLine.length; i++) {
      let person = katzDeliLine[i];
      person = `${i + 1}. ${person}`;
      newLine.push(person);
    }
    return string + String(newLine.join(', '));
  }
}

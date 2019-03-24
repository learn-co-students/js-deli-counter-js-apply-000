function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(katzDeliLine){
  if (!katzDeliLine.length){
    return "There is nobody waiting to be served!"
  } else {
    let firstPerson = katzDeliLine[0];
    katzDeliLine.shift();
    return `Currently serving ${firstPerson}.`;
  }
}

function currentLine(katzDeliLine){
  if (!katzDeliLine.length) {
    return "The line is currently empty."
  }
  let names = [];
  
  for (let i = 0; i < katzDeliLine.length; i++) {
    names.push(`${[i+1]}. ${katzDeliLine[i]}`)
  }
  
  return "The line is currently: " + names.join(", ");
}
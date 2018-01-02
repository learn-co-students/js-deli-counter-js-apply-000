
function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  let position = katzDeliLine.length;
  let result = `Welcome, ${name}. You are number ${position} in line.`; 
  return result; 
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length >= 1) {
    let firstPerson = katzDeliLine.shift();
    return `Currently serving ${firstPerson}.`;
  } else {
    return "There is nobody waiting to be served!";
  }
}

function currentLine(katzDeliLine) {
  let result = 'The line is currently: ';
  if (katzDeliLine.length >= 1) {
    for (let i = 0; i < katzDeliLine.length; i++) {
      let position = i + 1;
      let name = katzDeliLine[i]; 
      if (i !== katzDeliLine.length - 1) {
        result += `${position}. ${name}, `; 
      } else {
        result += `${position}. ${name}`;
      }
    }
  } else {
    result = "The line is currently empty.";
  }
  return result; 
}
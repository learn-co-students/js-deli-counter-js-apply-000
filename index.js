function takeANumber (currentLine, name) {
  currentLine.push(name);
  for (let i = currentLine.length-1; i >= 0 ; i--) {
     return `Welcome, ${name}. You are number ${i + 1} in line.`;
    }
}

function nowServing (deliLine) {
  if (deliLine.length === 0) {
    return 'There is nobody waiting to be served!'
  }
  let customer = deliLine.shift();
  return `Currently serving ${customer}.`;
}

function currentLine (deliLine) {
  if (deliLine.length === 0) {
    return "The line is currently empty.";
  }

  let result = 'The line is currently: ';

  for (let i = 0; i < deliLine.length; i++) {

    if ( i !== deliLine.length-1) {
      result += `${i + 1}. ${deliLine[i]}, `
    } else {
      result += `${i + 1}. ${deliLine[i]}`;
    }
  }
  return result
}

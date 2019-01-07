const takeANumber = (katzDeliLine, name) => {
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}

const nowServing = (katzDeliLine) => {
  var customer;
  if (katzDeliLine.length === 0){
    return "There is nobody waiting to be served!";
  }
  else {
    customer = katzDeliLine.shift();
  }
  return `Currently serving ${customer}.`
}

const currentLine = (katzDeliLine) => {
  var servingLine = [];
  if (katzDeliLine.length === 0){
    return "The line is currently empty."
  }

  for (var i = 0; i < katzDeliLine.length; i++){
    servingLine.push( `${i + 1}. ${katzDeliLine[i]}`);
  }

  return `The line is currently: ${servingLine.join(', ')}`
}

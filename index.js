function takeANumber (katzDeliLine, newCustomer){
  katzDeliLine.push(newCustomer);
  return `Welcome, ${newCustomer}. You are number ${katzDeliLine.length} in line.`;
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length == 0){
    return 'There is nobody waiting to be served!'
  } else {
    var current = katzDeliLine[0];
    katzDeliLine.shift();
    return `Currently serving ${current}.`;
  }
}

function currentLine(katzDeliLine) {
  if (katzDeliLine.length == 0){
    return 'The line is currently empty.'
  } else {
    var line = "The line is currently:";
    for (let i = 0; i < katzDeliLine.length; i++){
      line += (i===0?" ":", ")+ `${i+1}. ${katzDeliLine[i]}`;
    }
    return line;
  }
}

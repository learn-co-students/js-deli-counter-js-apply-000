function takeANumber (katzDeliLine, name) {
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`;
}

function nowServing (katzDeliLine) {
  return katzDeliLine.length > 0 ? `Currently serving ${katzDeliLine.shift()}.` :
                                   "There is nobody waiting to be served!"
}

function currentLine (katzDeliLine) {
  var str = "The line is currently:"
  if (katzDeliLine.length > 0) {
      for (var i = 0; i < katzDeliLine.length; i++) {
          str += ` ${i+1}. ${katzDeliLine[i]}`
          if (i !== katzDeliLine.length-1) {
            str += ',';
          }
      }
  } else {
    return "The line is currently empty."
  }
  return str;
}

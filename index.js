function takeANumber(line, newCustomer) {
  line.push(newCustomer);
  return `Welcome, ${newCustomer}. You are number ${line.length} in line.`
}

function nowServing(line) {
  if (line.length > 0) {
    var serving = [`Currently serving ${line.shift()}.`]
    return serving
  } else {
    return "There is nobody waiting to be served!"
  }
}

function currentLine(line) {
  var announcement = "The line is currently:";
  if (line.length > 0) {
    for (var i = 0; i < line.length; i++) {
      announcement += ` ${line.indexOf(line[i]) + 1}. ${line[i]},`;
    }
    return announcement.slice(0, announcement.length - 1);
  }  else {
    return "The line is currently empty.";
  }
}

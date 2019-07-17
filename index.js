function takeANumber(line, customer) {
  line.push(customer);
  var place = line.indexOf(customer)+1;
  return `Welcome, ${customer}. You are number ${place} in line.`;
}

function nowServing(line) {
  if (line.length === 0) {
    return "There is nobody waiting to be served!";
  } else {
    var current = line.shift();
    return `Currently serving ${current}.`
  }
}

function currentLine(line) {
  if (line.length === 0) {
    return "The line is currently empty.";
  } else {
    var result = "The line is currently: ";
    for (var i = 0; i < line.length; i++) {
      if (i === line.length -1) {
        result = result + `${i+1}. ${line[i]}`;
      } else {
        result = result + `${i+1}. ${line[i]}, `;
      }
    }
    return result;
  }
}

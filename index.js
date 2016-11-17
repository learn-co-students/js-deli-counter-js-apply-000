function takeANumber(line, newCustomer) {
  line.push(newCustomer);
  return `Welcome, ${newCustomer}. You are number ${line.indexOf(newCustomer)+1} in line.`;
}

function nowServing(line) {
  if (!line.length) {
    return "There is nobody waiting to be served!";
  } else {
      return `Currently serving ${line.shift()}.`
    }
  }

function currentLine(line) {
  if (!line.length) {
    return "The line is currently empty."
  } else {
      var answeString = "The line is currently: "
      for (var i = 0; i < line.length; i ++){
        answeString += i+1 + ". " + line[i] + ", ";
      }
      return answeString.slice(0,-2);
    }
  }

function takeANumber(line, customer) {
  var number = line.length + 1;
  line[line.length] = customer;
  return "Welcome, " + customer + ". You are number " + number + " in line.";
}

function nowServing(line) {
  if (line.length === 0) {
    return "There is nobody waiting to be served!"
  } else {
    var first = line[0];
    line.shift();
    return "Currently serving " + first + ".";
  }
}

function currentLine(line) {
  if (line.length > 0) {
    var number = 1;
    var result = "The line is currently: " + number + ". " + line[0];
    for (var i = 1; i < line.length; i++) {
      number ++;
      result += ", " + number + ". " + line[i];
    }
    return result;
  }
  return "The line is currently empty.";
}
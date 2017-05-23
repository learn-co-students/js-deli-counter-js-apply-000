var katzDeliLine = [];
function takeANumber(line,customerName) {
  line.push(customerName);
  return "Welcome, " + customerName + ". You are number " + (line.indexOf(customerName)+1) + " in line.";
}

function currentLine(line) {
  var currently = "The line is currently: ";
  for (var i =0; i < line.length; i++) {
  if (line[i] === line[line.length - 1]) {
          currently += (line.length) + ". " + line[i];
      }
    else {
      currently += i+1 + ". " + line[i] + ", ";
      }
  }
  if (line.length > 0) {
  return currently;
  } else {
  return "The line is currently empty.";
  }
}

function nowServing(line) {
  if (line.length > 0) {
  var serving = "Currently serving " + line[0] + ".";
  line.shift();
} else {
  return "There is nobody waiting to be served!"
}
  return serving;
}

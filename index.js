function takeANumber(line, customer) {
  line.push(customer);

  var greeting = "Welcome, " + customer + ". You are number " + line.length + " in line."

  return greeting;
}

function nowServing(line) {
  if (line.length > 0) {
    var next = line.shift();
    var serving = "Currently serving " + next + ".";
    return serving;
  } else {
    return "There is nobody waiting to be served!";
  }
}

function currentLine(line) {
  if (line.length === 0) {
    return "The line is currently empty.";
  } else {
    var currLine = "The line is currently: ";

    for (var i in line) {
      var pos = Number(i) + 1;
      currLine += pos + ". " + line[i] + ", ";
    }

    var final = currLine.substr(0, currLine.length-2);

    return final;
  }
}

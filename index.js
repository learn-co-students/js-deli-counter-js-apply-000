var katzDeli = [];

function takeANumber (currentLine = [], name) {
  currentLine.push(name);
  var x = currentLine.length;
  for (let i = 0; i <= x; i++) {
    if (x === 0) {
      return "There is nobody waiting to be served!";
    } else if (currentLine[i] === name){
      return `Welcome, ${name}. You are number ${i+1} in line.`;
    }
  }
}

function nowServing (currentLine = []) {
  var x = currentLine.length;
  for (let i = 0; i <= x; i++) {
    if (x == 0) {
      return 'There is nobody waiting to be served!';
    } else {
      let customer = currentLine.shift();
      return `Currently serving ${customer}.`;
    }
  }
}

function currentLine(line) {
  var x = line.length;
  var msg = "The line is currently: ";
  if (x === 0) {
    return "The line is currently empty.";
  } else if (x > 0) {
    line.forEach(function(value, index) {
      var pos = index + 1;
      if (pos !== x && x > 0) {
      msg += `${pos}. ${value}, `;
    } else {
      msg += `${pos}. ${value}`;
    }
    });
  }
    return msg;
}

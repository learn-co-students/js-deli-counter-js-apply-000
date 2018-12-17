function takeANumber(line, name) {
  // returns welcome message, position and updates line with new customer
  var position = line.length + 1;
  line.push(name);
  return `Welcome, ${name}. You are number ${position} in line.`;
}


function nowServing(line) {
  // returns current customer being served, removes them from line
  if (line.length < 1) {
    return "There is nobody waiting to be served!";
  } else {
    var currentCustomer = line[0];
    line.shift();
    return `Currently serving ${currentCustomer}.`;
  }
}


function currentLine(line){
  // returns current line
  if (line.length < 1) {
      return "The line is currently empty.";
    } else {
      var msg = `The line is currently: `;
      for (var i = 0; i < line.length; i++) {
       msg += `${i + 1}. ${line[i]}, `;
      }
      return msg.slice(0,-2)
    }
}


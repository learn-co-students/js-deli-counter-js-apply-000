 
function takeANumber(line, name) {
  if (Array.isArray(line)) {
    line.push(name);
  }
  var position = line.length;
  return `Welcome, ${name}. You are number ${position} in line.`
}

function nowServing(line) { 
  if (line.length === 0) {
    return "There is nobody waiting to be served!";
    } else {
      var currentCustomer = line.shift();
    }
  return `Currently serving ${currentCustomer}.`;
}

function currentLine(line) {
  var peopleInLine = []; 
  if (line.length === 0) {
    return "The line is currently empty."
  }
  for (var i = 0; i < line.length; i++) {
    var name = line[i];
    var positionPerson = (i + 1) + ". " + name;
    peopleInLine.push(positionPerson);
      
   }
  return "The line is currently: " + peopleInLine.join(', ');
}
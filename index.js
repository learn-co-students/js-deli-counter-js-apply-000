// function to show people their current place in line or announce that the line is empty

function currentLine(line){
  if(line.length === 0) {
    return "The line is currently empty.";
  }
  var peopleInLine = [];
// accept new people in line and assign them to numbers
  for (var i = 0; i < line.length; i++) {
    peopleInLine.push(`${i + 1}. ${line[i]}`)
  }
  // return the list of people in line
  return `The line is currently: ${peopleInLine.join(', ')}`
};
// Show the first person in line and remove them from the line.
function nowServing(line) {
  if(line.length === 0) {
    return "There is nobody waiting to be served!"
  }
    return `Currently serving ${line.shift()}.`
  };

// welcome people to deli. Add new customers to the line.
function takeANumber(line, name){
  line.push(name);

  return `Welcome, ${name}. You are number ${line.length} in line.`
};

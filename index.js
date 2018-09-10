function takeANumber (currentLine, name) {
  currentLine. push(name);

  return `Welcome, ${name}. You are number ${currentLine.length} in line.`;
}

function nowServing (currentLine) {
  //return string "..." if line length is 0
  if (currentLine.length === 0) {

    return "There is nobody waiting to be served!"
  }
  //removing first customer name of the line and then call his/her name
  var firstName = currentLine.shift();

  return `Currently serving ${firstName}.`
}

function currentLine (line) {
  if (line.length === 0) {

    return "The line is currently empty.";
  }
  var str = "The line is currently: ";
//loop through line to add customer's names and their current line to the str
  for (let i = 0; i < line.length; i++) {
    str = str + `${i + 1}. ${line[i]}, `;
  }
  //removing to last character in the str ", "
  return str.substring(0, str.length - 2);

}

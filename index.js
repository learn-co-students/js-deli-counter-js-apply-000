var katzDeliLine = [];

function takeANumber(line, person) {
  line.push(person);
  return `Welcome, ${person}. You are number ${line.length} in line.`
}

function nowServing(line) {
  if (line.length === 0)
    return "There is nobody waiting to be served!";
  else {
    var s = line.shift();
    return `Currently serving ${s}.`
  }
}

function currentLine(line) {
  if (line.length === 0)
    return "The line is currently empty.";
  else {
    var x = "";
    var i = 0;
    while (i < line.length-1) {
      x+=`${i+1}. ${line[i]}, `;
      i+=1;
    }
    x+=`${i+1}. ${line[i]}`;
    return `The line is currently: ${x}`;
    }
}

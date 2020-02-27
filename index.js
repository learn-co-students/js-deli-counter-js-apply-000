function takeANumber(line, person){
  line.push(person);
  return `Welcome, ${person}. You are number ${line.length} in line.`;
}

function nowServing (line){
  var current = line.shift();
  if (current){
    return `Currently serving ${current}.`;
  }else{
    return `There is nobody waiting to be served!`;
  }
}

function currentLine (line) {
  var isEmptyLine = line.length === 0;
  var formattedLine = line.map (function (person, index){
    return index+1 + ". " + person;
  });
  var message = isEmptyLine? " empty." : ": " + formattedLine.join(", ");
  return "The line is currently" + message;
}

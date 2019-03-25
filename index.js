function takeANumber(currentLine, newPerson){
  var str = '';
    var newPersonPosition = (currentLine.length + 1);
    str += ('Welcome, ' + newPerson + '. You are number ' + newPersonPosition + ' in line.')

  currentLine.push(newPerson)
  return str;
  return currentLine;
}

function nowServing(currentLine){
  if (currentLine.length < 1 || currentLine === undefined){
    return "There is nobody waiting to be served!"
  }
    var firstPerson = currentLine[0];
    var newLine = currentLine.shift()

    console.log(newLine);
  return ("Currently serving " + firstPerson + ".")
}

function currentLine(current){
  var str = "";
  if (current.length < 1 || current === undefined){
    return ("The line is currently empty.")
  }
  str += 'The line is currently: '
  for (var i = 0; i < current.length; i++){
    var person = current[i];
  if (i === (current.length - 1)){
    str += ((i + 1) + ". " + person)
  } else{
        str += ((i + 1) + ". " + person + ", ");
      }
  }
  return str;
}

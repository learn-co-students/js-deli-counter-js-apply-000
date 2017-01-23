
function takeANumber(deliLine, name) {
  deliLine.push(name);
  return "Welcome, " + name + '. You are number ' + deliLine.length + ' in line.';
}

function nowServing(deliLine) {

  if (deliLine.length > 0){
    var curr = deliLine.shift();
    console.log(deliLine);
    return 'Currently serving ' + curr + '.';
  } else {
    return 'There is nobody waiting to be served!';
  }
}
nowServing(["Steven", "Blake", "Avi"]);

function currentLine(deliLine) {
  if (deliLine.length > 0){
    var line = 'The line is currently: ';
    for (var i = 0; i < deliLine.length; i++) {
      var num = i + 1;
      line += num + '. ' + deliLine[i];
      if (i < deliLine.length - 1) {
        line += ', ';
      }
    }
    return line;
  } else {
    return 'The line is currently empty.'
  }
}

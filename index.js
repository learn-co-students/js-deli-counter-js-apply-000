function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  return 'Welcome, ' + name + '. You are number ' + katzDeliLine.length + ' in line.';
}


function nowServing(names) {
  if (names.length === 0) {
    return 'There is nobody waiting to be served!';
  } else {
      var name = names[0];
      names.splice(0, 1);
      return 'Currently serving ' + name + '.';
  }
}


function currentLine(names) {
    var line = [];
    
    if (names.length === 0) {
      return 'The line is currently empty.';
    } else {
        for (var i = 0; i < names.length; i++) {
          var name = names[i];
          line += (i + 1) + ". " + name + ', ';
        }
        line = line.slice(0, line.length-2);
        return 'The line is currently: ' + line;
    }
}
function takeANumber(deli,name){
    deli.push(name);
    return 'Welcome, ' + name + '. You are number ' + deli.length + ' in line.';
}

function nowServing(deli){
  if (deli.length === 0) {
    return 'There is nobody waiting to be served!';
  } else {
    var firstInLine = deli[0];
    deli.splice(0,1);
    return 'Currently serving ' + firstInLine + '.';
  }
}

function currentLine(deli){
  if (deli.length === 0) {
    return 'The line is currently empty.';
  } else {
    var lineUp = 'The line is currently:';
    for (var i = 0; i < deli.length; i++){
      lineUp += ' ' + (i + 1) + '. ' + deli[i]
      if (i !== deli.length - 1){
        lineUp += ',';
      }
    }
    return lineUp;
  }
}



function takeANumber(deli, name) {
  deli.push(name);
  return 'Welcome, ' + name + '. You are number ' + (deli.length) + ' in line.'
}

function currentLine(deli) {
  if (deli.length === 0) {
    var newStr = "The line is currently empty."
  }
  else {
    var newStr = "The line is currently: ";

    for (var i = 0; i < deli.length; i++) {
      if (i === deli.length-1) {
        newStr += (i+1) + '. ' + deli[i];
      }
      else {
        newStr += (i+1) + '. ' + deli[i] + ', ';
      }
    }
  }

  return newStr
}


function nowServing(deli1) {
  var deliLine = [];
  var name = deli1[0];
  if (deli1.length === 0) {
    return 'There is nobody waiting to be served!';
  }

  if (deli1.length ===1) {
    return "Currently serving " + name + '.'

  } else {
      for (var i = 1; i < deli1.length; i++) {
        deliLine.push(deli1[i]);
    }
  }

  deli1 = deliLine;
  return "Currently serving " + name + '.'
}

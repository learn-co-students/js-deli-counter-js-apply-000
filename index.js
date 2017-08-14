

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


function nowServing(deli) {
  var newDeli = [];
  var name = deli[0];
  if (deli.length === 0) {
    return 'There is nobody waiting to be served!';
  }

  if (deli.length ===1) {
    newDeli = [];
    deli = newDeli;
    return "Currently serving " + name + '.'
  } else {
      for (var i = 1; i < deli.length; i++) {
        var name1 = deli[i];
        newDeli.push(name1);
    }
  }

  deli = newDeli;
  return "Currently serving " + name + '.'
  // return "Currently serving " + name + '.'
}

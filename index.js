var array = [];


function takeANumber (array,name) {
  array.push(name);
  for (var i = 0; i < array.length; i++) {
    var position = array.length;
    return "Welcome, " + name + ". You are number " + position + " in line."
  }
}

function nowServing(array) {
  if (array.length >= 1) {
    return "Currently serving " + array.shift() + ".";
  } else {
    return "There is nobody waiting to be served!"
  }
}

function currentLine(array) {
  var newStr = 'The line is currently: ';
  if (array.length === 0) {
    return "The line is currently empty."
    } else {
      for (var i = 0; i < array.length; i++) {
        newStr += i+1 + '. ' + array[i] + ", "
      }
      return newStr.slice(0 , newStr.length - 2);
  }
}

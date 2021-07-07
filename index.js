function takeANumber(array, name) {
  array.push(name);
  return "Welcome, " + name + ". You are number " + array.length + " in line."
}


function nowServing(array) {
  if (array.length === 0) {
    return "There is nobody waiting to be served!";
  } else {
    return "Currently serving " + array.shift() + '.';
  }
}


function currentLine(array) {
  var string = "The line is currently: "
  if (array.length === 0) {
    return "The line is currently empty.";
  } else {
    for (var i = 0; i < array.length; i++) {
      var person = array[i];
      var number = i + 1;
      if (i < array.length - 1) {
        string += number + '. ' + person + ", ";
      } else if (i === array.length - 1) {
        string += number + '. ' + person;
      }
    }
  }
  
  return string;
}
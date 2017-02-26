var katzDeliLine = [];

function takeANumber(array, name) {
  array.push(name);
  var number = array.indexOf(name) + 1;
  return `Welcome, ${name}. You are number ${number} in line.`
}

function nowServing(array) {
  var serving = array[0]
  if (array.length === 0) {
    return "There is nobody waiting to be served!"
  } else {
    array.splice(0, 1);
    return `Currently serving ${serving}.`
  }
}

function currentLine(array) {
  var line = [];
  if (array.length === 0) {
    return "The line is currently empty.";
  } else {
    for (var i = 0; i < array.length; i++) {
      var person = `${i + 1}. ${array[i]}`;
      line.push(person);
    }
    return "The line is currently: " + line.join(", ")
  }
}

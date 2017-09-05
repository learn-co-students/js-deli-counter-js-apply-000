var katzDeli = [];

function takeANumber(katzDeli, name) {
  katzDeli.push(name);
  return `Welcome, ${name}. You are number ${katzDeli.indexOf(name) + 1} in line.`
}
function nowServing(array) {
  if (array[0] === undefined) {
    return "There is nobody waiting to be served!"
    } else {
    return `Currently serving ${array.shift()}.`;
    }
}
function currentLine(array) {
  if(array[0] === undefined) {
    return "The line is currently empty."
  } else {
    var position  = [];
    var count = 1;
    for (var i = 0; i < array.length; i++) {
      position.push(`${count}. ${array[i]}`);
      count++;
    }
    return "The line is currently: " + position.join(", ");
  }
}

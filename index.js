function takeANumber(array, name) {
  array.push(name);
  return `Welcome, ${name}. You are number ${array.length} in line.`;
}

function nowServing(array) {
  if (!array.length) {
    return "There is nobody waiting to be served!";
  } else {
    let person = array[0];
    array.shift();
    return `Currently serving ${person}.`;
  }
}

function currentLine(array) {
  if (!array.length) {
    return "The line is currently empty.";
  } else {
    let line_order = "";
    array.forEach((item, index) => line_order += `${index+1}. ${item}, `);
    return "The line is currently: " + line_order.slice(0,-2);
  }
}
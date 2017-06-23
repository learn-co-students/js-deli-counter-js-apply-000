var katzDeli = [];

function takeANumber(katzDeliLine, name) { // function should return the persons position in line
  var len = katzDeliLine.length;
  katzDeliLine.push(name);
  katzDeli = katzDeliLine;
  return `Welcome, ${name}. You are number ${katzDeli.length} in line.`;
}

function nowServing(katzDeliLine) { // should return the first person in line and then remove that individual from the line. If there is nobody in line, it should return "There is nobdoy waiting to be served!"
  if (katzDeliLine.length > 0) {
    var serving = katzDeliLine.shift();
    return `Currently serving ${serving}.`
  } else {
    return "There is nobody waiting to be served!"
  }
}

// function currentLine(katzDeliLine) {
//   var i = 0
//   var text = "The line is currently: "
//
//   if (katzDeliLine.length == 0) {
//     return "The line is currently empty."
//   } else {
//     for (; i < katzDeliLine.length; i++) {
//       text += `${i+1}. ${katzDeliLine[i]}, `;
//     }
//     return text.slice(0, (text.length - 2));
//   }
// }

function currentLine(katzDeliLine) {
  var i = 0
  var text = "The line is currently: "
  for (; i < katzDeliLine.length; i++) {
    text += `${i+1}. ${katzDeliLine[i]}, `;
  }

  if (katzDeliLine.length == 0) {
    return "The line is currently empty."
  }
  return text.slice(0, (text.length - 2));
}

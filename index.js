var katzDeli = [];


function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`;
}

function nowServing(katzDeliLine) {
  const klength = katzDeliLine.length;
  if (klength === 0) {
    return "There is nobody waiting to be served!";
  } else {
    console.log(katzDeliLine)
    var first = katzDeliLine.shift();
    return `Currently serving ${first}.`;
  }
}

function currentLine(katzDeliLine) {
  const klength = katzDeliLine.length;
  var line = [];
  if (klength === 0) {
    return "The line is currently empty.";
  } else if (klength > 1 ) {
      for (var i = 0; i < klength; i++) {
        var kname = katzDeliLine[i];
        line.push(`${i + 1}. ${kname}`);
      }
  }
  return `The line is currently: ${line.join(", ")}`;
}


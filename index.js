function takeANumber(katzDeliLine, person) {
  katzDeliLine.push(person);
  return `Welcome, ${person}. You are number ${katzDeliLine.length} in line.`;
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return 'There is nobody waiting to be served!';
  }
  var custServed = katzDeliLine.shift();
  return `Currently serving ${custServed}.`;
}


function currentLine(katzDeliLine) {
  function orderOfLine(index) {
    return `${index + 1}. ${katzDeliLine[index]}`;
  }

  if (katzDeliLine.length != 0) {

    var result = 'The line is currently: ';
    for (var i = 0; i < katzDeliLine.length; i += 1) {
      if (i === katzDeliLine.length - 1) {
        result += orderOfLine(i);
      } else {
        result += `${orderOfLine(i)}, `
      }
    }

    return result;
  } else {
  return 'The line is currently empty.';
  }
}

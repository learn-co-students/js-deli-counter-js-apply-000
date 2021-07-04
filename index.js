const takeANumber = (katzDeliLine, name) => {
  katzDeliLine.push(name);
  let customerNumber = katzDeliLine.indexOf(name) + 1;
  return `Welcome, ${name}. You are number ${customerNumber} in line.`;
}

const nowServing = katsDeliLine => {
  if (katsDeliLine.length > 0) {
    let name = katsDeliLine[0];
    katsDeliLine.shift();
    return `Currently serving ${name}.`;
    } else {
      return "There is nobody waiting to be served!";
    }
  }

const currentLine = arr => {
  if (arr.length > 0) {
    let positionAndName = [];
    for (let i = 0; i < arr.length; i++) {
      let position = i + 1;
      positionAndName.push(`${position}. ${arr[i]}`);
    }
  return `The line is currently: ${positionAndName.join(', ')}`;
  } else {
    return "The line is currently empty.";
  }
}
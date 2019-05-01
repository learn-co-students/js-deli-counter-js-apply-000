function takeANumber(theLine, customerName) {
  let placeInLine = theLine.push(customerName);
  return `Welcome, ${customerName}. You are number ${placeInLine} in line.`
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length == 0) {
    return 'There is nobody waiting to be served!';
  } else {
    let firstInLine = katzDeliLine.shift();
    return `Currently serving ${firstInLine}.`
  }
}

function currentLine(coolCatsInLine) {
  if (coolCatsInLine.length == 0) {
    return 'The line is currently empty.';
  } else {
    let catsStillInLine = 'The line is currently: ';
    let cat = '';
    for (cat of coolCatsInLine) {
      let placeInLine = coolCatsInLine.indexOf(cat) + 1;
      let catPosition = '';
      if (coolCatsInLine.length - 1 == coolCatsInLine.indexOf(cat)) {
        catPosition = `${placeInLine}. ${cat}`
      } else {
        catPosition = `${placeInLine}. ${cat}, `
      }
      catsStillInLine = catsStillInLine + `${catPosition}`;
    }
    return catsStillInLine
  }
}

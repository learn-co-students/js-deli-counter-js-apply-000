function takeANumber(currentLine, custName) {
  currentLine.push(custName);

  let nextInLine = [(`Welcome, ${custName}. You are number ${currentLine.length} in line.`)];

  return nextInLine;
}

function nowServing (currentLine) {

  if (!currentLine.length) {
		return "There is nobody waiting to be served!"
	} else {
		return 'Currently serving ' + currentLine.shift()+'.';
	}
}

function currentLine(currentLine) {
	let currPos = 0;

	do {
		currPos;
		if (currPos === 0 && currentLine == 0) {
			return "The line is currently empty.";
		} else {
			return "The line is currently: " + [currPos+1] + ". " + currentLine[currPos] + ", " + [currPos+2] + ". " + currentLine[currPos+1] + ", " + [currPos+3] + ". " + currentLine[currPos+2] + "";
		}
	} while (currPos > 0 && currPos < 100);
	currPos++
}

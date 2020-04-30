function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(`${name}`);
  return(`Welcome, ${name}. You are number ${katzDeliLine.length} in line.`)
}

function nowServing(katzDeliLine) {
	if (katzDeliLine[0] === undefined) {
		return "There is nobody waiting to be served!"
	} else {
		var firstInLine = katzDeliLine.shift()
		return `Currently serving ${firstInLine}.`
	}
 }

 function currentLine(line) {
    var lineNum = []
    if (line.length == 0) {
      return "The line is currently empty."
    }
    for (var i = 0; i < line.length; i++) {
      lineNum.push(` ${i+1}. ${line[i]}`)
  	}
    return `The line is currently:${lineNum}`
   }

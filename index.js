function takeANumber(deliLine, name) {
	deliLine.push(name)
	return `Welcome, ${name}. You are number ${deliLine.length} in line.`
}

function nowServing(deliLine) {
	if (deliLine.length === 0) {
		return "There is nobody waiting to be served!"
	}
	else {
	  var nextperson = deliLine[0]
	  deliLine.shift()
		return `Currently serving ${nextperson}.`
	}
}

function currentLine(deliLine) {
	if (deliLine.length === 0) {
		return "The line is currently empty."
	}
	else {
		var people = []
		while (deliLine.length > 0) {
			people.unshift(`${deliLine.length}. ${deliLine.pop()}`)
		}
		return `The line is currently: ${people.join(', ')}`
	}
}
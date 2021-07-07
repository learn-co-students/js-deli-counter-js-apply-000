

function takeANumber(katzDeliLine,customerName1){
	katzDeliLine.push(Ada)
	return `Welcome, ${Ada}. You are number ${katzDeliLine.length} in line.`
}

function takeANumber(katzDeliLine,Grace){
	katzDeliLine.push(Grace)
	return `Welcome, ${Grace}. You are number ${katzDeliLine.length} in line.`
}
function nowServing(katzDeliLine){
	if (katzDeliLine.length == 0){
		return "There is nobody waiting to be served!"
	}else{
		 return `Currently serving ${katzDeliLine.shift()}.`

	}
}

function currentLine(katzDeliLine){
	if (katzDeliLine.length == 0){
		return "The line is currently empty."
	}else{
		var peopleOnLine = []
		for (var i=0; i<katzDeliLine.length; i++){
			peopleOnLine.push(`${i+1}. ${katzDeliLine[i]}`)
		}
		return `The line is currently: ${peopleOnLine.join(', ')}`
	}
}
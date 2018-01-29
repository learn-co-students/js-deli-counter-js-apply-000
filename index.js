var katzDeliLine = []

function takeANumber(katzDeliLine, newCustomer){
  katzDeliLine.push(newCustomer)
return `Welcome, ${newCustomer}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(katzDeliLine){
	if (katzDeliLine.length > 0) {
    		var newCustomer = katzDeliLine.shift()
		return `Currently serving ${newCustomer}.`
	} else {
		return 'There is nobody waiting to be served!'
}
}

function currentLine(katzDeliLine){
	var sentence = 'The line is currently: '
	if (katzDeliLine.length > 0) {
		katzDeliLine.forEach(function(customer, i){
			sentence = sentence.concat(`${i + 1}. ${customer}, `)
		})
		sentence = sentence.slice(0, -2)
	} else {
		sentence = 'The line is currently empty.'
	}
	return sentence
}

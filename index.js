function takeANumber(katzDeliLine, newPerson) {
	katzDeliLine.push(newPerson);
	return `Welcome, ${newPerson}. You are number ${katzDeliLine.length} in line.`;
}
function nowServing(katzDeliLine) {
	if(katzDeliLine.length === 0) {
		return "There is nobody waiting to be served!";
	}
	var nextPerson = katzDeliLine.shift();
	return "Currently serving " + nextPerson + ".";
}
function currentLine(katzDeliLine) {
	var array = [];
	if(katzDeliLine.length === 0) {
	return	"The line is currently empty.";
	}
	for(var i = 0; i < katzDeliLine.length; i++) {
		var position = ` ${i+1}. ${katzDeliLine[i]}` ;
		array.push(position);
	}
	return `The line is currently:${array}`;
}

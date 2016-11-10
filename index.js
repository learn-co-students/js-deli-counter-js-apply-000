function takeANumber(katzDeli, name) {
	katzDeli.push(name)
	return("Welcome, " + name + ". You are number " + (katzDeli.length) + " in line.");
}

//Build a function nowServing. This function should return the first person in line
//and then remove that individual from the line. If there is nobody in line, it should
//return "There is nobody waiting to be served!"


function nowServing(deliLine) {
  if (deliLine.length === 0) {
    return('There is nobody waiting to be served!')
  } else {
    return('Currently serving ' + deliLine.shift() + '.');
	}
}

//const deliLine = ["Steven", "Blake", "Avi"]

var deli = [];

function currentLine(line) {
	var i = 0
	if (line.length === 0) {
		return('The line is currently empty.');
	} else {
		while (i < line.length) {
			deli.push(" " + (i + 1) + ". " + line[i])
			i++
		}
		return("The line is currently:" + deli);
	}
}

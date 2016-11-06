function takeANumber(katzDeli, name) {
	katzDeli.push(name)
	return("Welcome, " + name + ". You are number " + (katzDeli.length) + " in line.");
}


function nowServing(deliLine) {
  if (deliLine.length === 0) {
    return('There is nobody waiting to be served!')
  } else {
    return('Currently serving ' + deliLine[0] + '.');
    deliLine.shift();
    return deliLine;
  }
}

function currentLine(line) {
	if (line.length === 0) {
		return('The line is currently empty.');
	} else {
		for (var i = 0; i < line.length; i++) {
			var deli = (i + 1) + ". " + line[i];
				line.push(deli);
		}
		return("The line is currently: " + line);
	}
}

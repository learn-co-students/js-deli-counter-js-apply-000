var katzDeliLine = [];

function takeANumber(cb, name) {
	cb.push(name);

	for (var i = 0; i < cb.length; i ++) {
		var cbName = cb[i];
	}

	return (("Welcome, ") + cbName + (". You are number ") + (i) + " in line.");
}

function nowServing(cb) {
	var newArray = [];

	if (cb[0] !== undefined) {
		newArray.push("Currently serving " + cb[0] + ".");
	} else if (cb[0] === undefined) {
		newArray.push("There is nobody waiting to be served!");
	}

// console.log("Currently serving " + cb[0])
cb.shift(1);
return (newArray.join(" "))
}

function currentLine(cb) {
	var newArray = [];
	var newList = [];

	for (var i = 0; i < cb.length; i ++) {
		var name = cb[i];

		newList.push(" " + (i + 1) + ". " + name);

	}

	if (cb[0] !== undefined) {
		newArray.push("The line is currently:" + newList);
	} else if (cb[0] === undefined) {
		newArray.push("The line is currently empty.");
	}

	return (newArray.join(" "));
}

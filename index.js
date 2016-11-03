var katzDeliLine=[];

function takeANumber(katzDeliLine, newPerson){
	var index = parseInt(katzDeliLine.length,10);
	katzDeliLine.push(newPerson);
  	return "Welcome, " + newPerson + ". You are number " + (index+1) + " in line.";
}
console.log(katzDeliLine);

function nowServing(katzDeliLine) {
	if (!katzDeliLine.length) {
		return "There is nobody waiting to be served!";
	}
	else {
		return "Currently serving " +katzDeliLine.shift() + ".";
	}
		katzDeliLine.shift();
}


function currentLine(katzDeliLine) {
	if (katzDeliLine.length){
		var string = "The line is currently: "
		var arr = [];
			for (var i =0; i<katzDeliLine.length; i++) {
				var index = parseInt(i,10);
				arr.push((index+1+"."), (katzDeliLine[i]+","));
			}
		var line = string + arr.join(" ") ;
		return line.slice(0,-1);
	}
	else {
		return "The line is currently empty.";
	}
}

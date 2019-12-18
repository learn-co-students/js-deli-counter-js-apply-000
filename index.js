var katzDeliLine = [];

function takeANumber(katzDeliLine, String){
	katzDeliLine.push(String);
	return ("Welcome, " + String + ". You are number " + (katzDeliLine.length) + " in line.");
}

function nowServing(katzDeliLine){
  var first = katzDeliLine[0];
  
	if (katzDeliLine.length > 0){
	  katzDeliLine.shift();
		return ("Currently serving " + first + ".");
	
	} else {
		return ("There is nobody waiting to be served!");
	}
}

function currentLine(katzDeliLine){
	var i;
	var currentLine = [];


	if (katzDeliLine.length > 0){
		for (i = 0; i < katzDeliLine.length; i++){
			currentLine.push(" " + [i + 1] + ". " + katzDeliLine[i])
			}
		return "The line is currently:" + currentLine;
	} else {
		return ("The line is currently empty.");
	}	
}
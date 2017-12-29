function takeANumber(katzDeliLine, name){
var placeInLine = katzDeliLine.length + 1;
katzDeliLine.push(name)
return "Welcome, " + name + ". You are number " + placeInLine + " in line."
};

function nowServing(katzDeliLine){
	if(katzDeliLine.length === 0){
		return "There is nobody waiting to be served!"
	} else{
		var nextInLine = katzDeliLine[0];
		var next = katzDeliLine.slice(0, 1)
		katzDeliLine.shift()
		return "Currently serving " + next + "."
	}
}

function currentLine(katzDeliLine){
	if(katzDeliLine.length === 0){
		return "The line is currently empty."
	} else{
			var list2 = [];
			var katzDeliLine2 = [];
				for(var i = 0; i < katzDeliLine.length; i++){
					katzDeliLine2[i] = " " + [i + 1] + ". " + katzDeliLine[i]
					list2.push(katzDeliLine2[i])
				}
		return "The line is currently:" + katzDeliLine2
	}		
				
}
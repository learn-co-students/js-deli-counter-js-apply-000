
// #1 ----------
var katzDeliLine = [];
// console.log(katzDeliLine);
// console.log('----------');
function takeANumber(katzDeliLine,newPersonName){

	katzDeliLine.push(newPersonName);
	var index = katzDeliLine.length-1;
	var positionLine = index + 1;

	// console.log(katzDeliLine);
	return "Welcome, " + newPersonName + ". You are number " + positionLine + " in line."
}
// takeANumber(katzDeliLine,'Arthur');
// takeANumber(katzDeliLine,'Bob');

//# 2 ----------

function nowServing(array){
	if(array.length===0){
		return "There is nobody waiting to be served!"
	}else{
		return "Currently serving " + array.shift() + "." ;
	}
}
// nowServing(katzDeliLine);

// #3 ----------

function currentLine(array){
	var returnString = [];
	var arrayOfPositions = [];

	if(array.length===0){
		return "The line is currently empty.";
	}else{
		for(var i=0;i<array.length;i++){
			arrayOfPositions.push(i+1);
		}

		// console.log(obj);
		// console.log(arrayOfPositions);
		// console.log(array[0]);

		return "The line is currently: " + arrayOfPositions[0] + ". " + array[0] +", "+ arrayOfPositions[1] + ". " + array[1] +", "+arrayOfPositions[2]+". "+array[2];

	}
	// console.log(katzDeliLine);
}
currentLine(katzDeliLine);

// a copy of master branch

// Deli Counter Lab

var takeANumber = function(myArray,name) {
    myArray.push(name);
    return `Welcome, ${name}. You are number ${myArray.length} in line.`;
}

var currentLine = function(myArray){
    if(myArray.length===0){
		return "The line is currently empty.";
	}else{
		var size = myArray.length;
		for (var i = 0,namesLine=null; i < size; i++) {
        namesLine = namesLine + (i+1) + ". " + myArray[i]+", ";
		}
		return `The line is currently: ${namesLine.substring(0,namesLine.length-2)}`;
    }
}

var nowServing = function(myArray){
    //writeln("now serving:" +  myArray[0]);
	if(myArray.length===0){
		return "There is nobody waiting to be served!";
	}else{
		return `Currently serving ${myArray.shift()}.`;
	}
}
/*
var katzDeliLine = [];

console.log(takeANumber(katzDeliLine,"Ada"));
console.log(currentLine(katzDeliLine));
console.log(takeANumber(katzDeliLine,"Jen"));
console.log(currentLine(katzDeliLine));
console.log(nowServing(katzDeliLine));
console.log(takeANumber(katzDeliLine,"Bob"));
console.log(takeANumber(katzDeliLine,"Charles"));
console.log(nowServing(katzDeliLine));
console.log(takeANumber(katzDeliLine,"Billy"));
*/

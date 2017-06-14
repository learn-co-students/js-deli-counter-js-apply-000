var katzDeliLine = [];

function takeANumber(katzDeliLine, name){
    katzDeliLine.push(name);
    return  `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`;
}

function nowServing(katzDeliLine){
    if (katzDeliLine.length > 0){
	var report = `Currently serving ${katzDeliLine[0]}.`;
	katzDeliLine.shift();
	return report;
    } else { return "There is nobody waiting to be served!"; }
}

function currentLine(katzDeliLine){
    if (katzDeliLine.length === 0){ return "The line is currently empty."; }
    else {
    	return katzDeliLine.reduce(function(acc,val,index){
	    let placeName = `${index+1}. ${val}`;
	    if (index < katzDeliLine.length - 1){ return acc + placeName + ', '; }
	    else { return acc + placeName; }
	}, "The line is currently: ");
    }
}

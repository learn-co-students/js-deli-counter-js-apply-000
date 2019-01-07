var katzDeli=[];

function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name);
  return "Welcome, "+name+". You are number " +(katzDeliLine.indexOf(name)+ 1)+" in line."}
  
 function nowServing(katzDeliLine) {
	if (katzDeliLine.length === 0) {
		return 'There is nobody waiting to be served!';
	} else {
		return 'Currently serving ' + katzDeliLine.shift() + '.';
	}
}

function currentLine(line){
  if(line.length === 0) {
    return "The line is currently empty.";
  }
  var lineNamesandNumbers = [];
  
  for(var i=0; i<line.length; i++) {
    lineNamesandNumbers.push(i+1 + ". "+ line[i]);
  }
  return "The line is currently: " + lineNamesandNumbers.join(', ');
}
     
     

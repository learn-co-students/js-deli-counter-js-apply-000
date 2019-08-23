function takeANumber(katzDeliLine) {
 if (katzDeliLine.length === 0) {
 return "There is nobody waiting to be served!";
  }
else
  return (`Currently serving ${katzDeliLine.shift()}.`);
}
function currentLine(katzDeliLine){
 if (katzDeliLine.length === 0) {
    return "The line is currently empty.";
  }
 else { 
   var line = 'The line is currently: '; 
for (var i = 0; i < katzDeliLine.length; i++) {
 line = line + [i+1] + '. ' + katzDeliLine[i]; 
 if (i != katzDeliLine.length - 1) {
   line = line + ', '
 }
	}
	return (line);
 }}
	
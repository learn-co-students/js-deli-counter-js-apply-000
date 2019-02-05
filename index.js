var katzDeli = []
function takeNumber(katzDeli, otherDeli){
   	katzDeli.push(`${otherDeli}`);
   	return(`Welcome, ${otherDeli}. You are number ${katzDeli.length} in line.`);
}
function nowServing(katzDeli) {
  for( var i = 0; i < katzDeli.length; i++) {
    return (`Currently serving ${katzDeli.shift()}.`);
  }
}
 
function currentLine(katzDeli) {
var position = [];
  for (var i = 0; i < katzDeli.length; i++) {
    position.push([i+1]+ '-'+ katzDeli[i])
    return("The line is currently at " + position);
  }

}
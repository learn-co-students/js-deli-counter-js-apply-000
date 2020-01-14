function takeANumber(line, name) {
  line.push(name)
return `Welcome, ${name}. You are number ${line.length} in line.`
}
function nowServing(line) {
if (!line.length) {
return "There is nobody waiting to be served!"
}
return `Currently serving ${line.shift()}.`
}
function currentLine(line){
if (line.length === 0){
return "The line is currently empty.";
}
else{ var lineString = [];
for ( var L = 0; L<line.length ; L++){
lineString.push((L+1)+". "+line[L]);
}
return "The line is currently: "+ lineString.join(", ")
}
}
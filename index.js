function takeANumber(katzDeliLine, name) {
  //adds new name to end of the line
  katzDeliLine.push(name);

  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(katzDeliLine, name) {

  var name = katzDeliLine.shift();

if (katzDeliLine.length > 0) {
  return `Currently serving ${name}.`
} else {
  return `There is nobody waiting to be served!`
}
}


function currentLine(line){
   if (line.length === 0) {
     return 'The line is currently empty.';
   } else{
     let emptyArr = [];
   for (let i = 0; i < line.length; i++) {
     emptyArr.push(`${i + 1}. ${line[i]}`);
   }
   return 'The line is currently: ' + emptyArr.join(', ');
   }
 }

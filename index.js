function takeANumber(katzDeliLine,newPerson) {
katzDeliLine.push(newPerson);  
let numberInLine = (katzDeliLine.length);
return 'Welcome, ' + newPerson + '. You are number ' + numberInLine + ' in line.'
  
  
}


function nowServing(katzDeliLine) {
  
  if (katzDeliLine.length < 1) {return('There is nobody waiting to be served!');
   } 
let first = katzDeliLine.shift();
return ('Currently serving ' + first + '.');


}

var line = [];
 function currentLine(katzDeli) {
  for (let i = 0; i < katzDeli.length; i++) {
    line.push(` `+[i+1]+`. `  + katzDeli[i])
  }
  if (katzDeli.length === 0) {
    return "The line is currently empty.";
  } else
  return(`The line is currently:` + line);
}
var katzDeliLine = [];

 /****************** takeANumber **************************/

 
 function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name)
  return "Welcome, " + name + ". You are number " + katzDeliLine.length + " in line."
}

 /******************* nowServing *************************/

function nowServing(count) {
  if (count.length === 0) {
  return "There is nobody waiting to be served!"
}
  else {
    var name = count[0];
    count.shift();
    return "Currently serving " + name + ".";
  }
}

  /****************** currentLine ************************/


function currentLine(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "The line is currently empty."
  } 
  
  else {
    let line = [] 
    for( let i=0 ; i < katzDeliLine.length ; i++ ) {
      line.push(` ${i + 1}. ${katzDeliLine[i]}`) 
    }
    
     return("The line is currently:" + line);
  }
}


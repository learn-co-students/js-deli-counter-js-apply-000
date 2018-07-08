var katzDeli = [];
function takeANumber(katzDeli, person) {
  katzDeli.push(`${person}`);
  
  return `Welcome, ${person}. You are number ${katzDeli.length} in line.`
}

function nowServing(katzDeli) {
  var i = 0; 
  while (i < katzDeli.length) {
    i++
  } if (katzDeli.length === 0) {
    return ('There is nobody waiting to be served!')
  } else {
   var nextinLine = katzDeli[0];
   katzDeli.splice(0,1);
    return "Currently serving " + nextinLine + "."
    
  }
}

function currentLine(line) {
  if (line.length === 0) {
    return "The line is currently empty."
  } else {
    var lineArray = [];
    
    for (var i = 0; i < line.length; i++)
    lineArray.push(i+1 + ". " + line[i])
    return "The line is currently: " + lineArray.join(", ")
  }
}

var katzDeli = []; 

function takeANumber(katzDeli, name) {
  katzDeli.push(`${name}`);
  return(`Welcome, ${name}. You are number ${katzDeli.length} in line.`);
}

function nowServing(katzDeli) {
 var output
 if (katzDeli.length === 0) {
return "There is nobody waiting to be served!"
  }
  else {
  var whoever = katzDeli[0]
  katzDeli.shift()
 return `Currently serving ${whoever}.`
  }
}
  
  
  function currentLine(line) {
  if (line.length === 0) {
    return `The line is currently empty.`;
  } else {

    var output = [];
    for (var i = 0; i < line.length; i++) {
      output.push(` ${i+1}. ${line[i]}`);
    }
    return `The line is currently:` + output;
  }
  
  
}

  
  
  

  



var katzDeliLine = []; //beginning of the day.. empty Deli 


function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name);
  return ("Welcome, " + name + ". You are number " + katzDeliLine.length + " in line.");
}

function nowServing(katzDeliLine){ // serving line
  let i = 0;
  while (i < katzDeliLine){   
    
    i++;
    
  }
  if (katzDeliLine.length === 0){
    
    return "There is nobody waiting to be served!";
  }
  else {
    
    return ('Currently serving ' + katzDeliLine.shift() + ".");
  }
  
}

var badabadabingbing = []; // line number

function currentLine(katzDeliLine){  // position in line
  for (  let i = 0; 
  i < katzDeliLine.length; 
  i++  )
  {
    badabadabingbing.push(` `+[i+1]+`. `  + katzDeliLine[i])
  }
  if (katzDeliLine.length === 0) {
    return "The line is currently empty.";
  } else
  return(`The line is currently:` + badabadabingbing);
}


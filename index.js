var katzDeli = [];


function takeANumber(katzDeli,customerName){
  katzDeli.push(customerName);
  return "Welcome, " + customerName + ". You are number " + katzDeli.length + " in line.";
}


function nowServing(katzDeli){
  if(typeof katzDeli[0] === 'string'){
    var blankVariable = "Currently serving " + katzDeli[0] + ".";
    katzDeli.shift();
    return blankVariable;
  }
  else {
    return "There is nobody waiting to be served!";
  }
}

function currentLine(katzDeli){
  var emptyString = "The line is currently: ";
  if(typeof katzDeli[0] === 'string'){
     for(var i = 0; i < katzDeli.length; i++){
       emptyString = emptyString + (i+1) + '. '+ katzDeli[i] + ", ";
     }
    emptyString = emptyString.slice(0,-2);
    return emptyString;
  }
  else {
    return "The line is currently empty.";
  }
}

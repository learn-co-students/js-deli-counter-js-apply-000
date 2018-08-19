function takeANumber(katzDeliLine, newName){
  katzDeliLine.push(newName);
  return( `Welcome, ${newName}. You are number ${katzDeliLine.length} in line.`);
}

function nowServing(katzDeliLine) {
  if (katzDeliLine === 0) {
  return "There is nobody waiting to be served!";
} else {
  var deliLine2 = katzDeliLine[0];
  katzDeliLine.splice(0,1);
  return "Currently serving " + katzDeliLine[0];
}
}

function nowServing(katzDeliLine) {
  if(katzDeliLine.length > 0) {
    var serving = `Currently serving ${katzDeliLine[0]}.`;
    katzDeliLine.shift();
    return serving;}
    else{
    return "There is nobody waiting to be served!";
  } 
}


function currentLine(katzDeliLine){
 if(katzDeliLine.length === 0){
    return "The line is currently empty."
  }
  var word = 'The line is currently: ';
  for(var name = 0; name < 3; name++){
    word = word + (name + 1) + ". " + katzDeliLine[name] + ', '
  }
  return word.slice(0,-2)
  
}
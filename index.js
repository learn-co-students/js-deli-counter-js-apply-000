var katzDeliLine = [];
function takeANumber (katzDeliLine, name){
  katzDeliLine.push(name);
  var num = (katzDeliLine.indexOf(name)) + 1
  return `Welcome, ${name}. You are number ${num} in line.`
}

function nowServing(katzDeliLine){
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!"}
    else {
    var firstInLine = katzDeliLine.shift()
    return `Currently serving ${firstInLine}.`;
    }
  
}

function currentLine(katzDeliLine){
   if (katzDeliLine.length === 0) {
    return "The line is currently empty." 
   }
  else {
    var i = 0;
    var currNum = i + 1 ;
    var phrase = "The line is currently: ";
    while (i < katzDeliLine.length){
    phrase += currNum + ". " +  katzDeliLine[i] + ", ";
    i++; 
    currNum++; }
    return phrase.substr(0, phrase.length-2);

    }
}




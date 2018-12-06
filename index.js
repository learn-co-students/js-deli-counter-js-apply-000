//var katzDeliLine = [];
function takeANumber (katzDeliLine, name){
  katzDeliLine.push(name);
  var num = (katzDeliLine.indexOf(name)) + 1;
  return `Welcome, ${name}. You are number ${num} in line.`;
}
// alternative solutions:
// katzDeliLine[katzDeliLine.length] = name;
// katzDeliLine.splice(katzDeliLine.length,0,name);
// katzDeliLine = [...katzDeliLine,name]; ... this does not work in IDE. Chrome/FF/Safari

// var num = katzDeliLine.length;

function nowServing(katzDeliLine){
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!"}
    else {
    var firstInLine = katzDeliLine.shift()
    return `Currently serving ${firstInLine}.`;
    }
}

//alternative solutions:
// switch if & else. if(katzDeliLine > 0);
// var firstInLine = katzDeliLine.splice(0,1);

function currentLine(katzDeliLine){
   if (katzDeliLine.length === 0) {
    return "The line is currently empty." 
   }
  else {
    var i = 0;
    var currNum = i + 1 ;
    var phrase = "The line is currently: ";
    while (i < katzDeliLine.length){
    phrase += `${currNum}. ${katzDeliLine[i]}, `;
    i++; 
    currNum++; 
    }
    return phrase.substr(0, phrase.length-2);
    }
} 

/*alternative using a for loop:
function currentLine(katzDeliLine){
  if(katzDeliLine.length === 0){
    return "The line is currently empty."
  }
  else {
   var phrase = "The line is currently: 1. " + katzDeliLine[0];
   for(var i = 0; i < katzDeliLine.length-1; i++ & num++){
    var num = i + 2;
    phrase += `, ${num}. ${katzDeliLine[i+1]}`;
   }
   return phrase;
  }
  }
*/




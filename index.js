// Good morning! Get ready for the day katzDeli

var katzDeli = [];
var katzDeliLine = [];

function takeANumber(x, y){
  var katzDeliLineCLONE = x;
  var newCustName = y;
  var posInLine = katzDeliLineCLONE.length + 1;
  var welcomeMsg;
  var i = 0;

  katzDeliLineCLONE.push(newCustName);
  welcomeMsg = ("Welcome, "+ newCustName + ". " + "You are number "+ posInLine +" in line.");


  return welcomeMsg;
}

function nowServing(x){

  var katzDeliLineCLONE = x;
  var noCustInLineMsg = "There is nobody waiting to be served!";
  var firstPerson = katzDeliLineCLONE[0];
  var nowServing;

    if(katzDeliLineCLONE[0] != undefined){

      nowServing = ("Currently serving " + firstPerson + ".");
      katzDeliLineCLONE.shift();

      return nowServing;
  }else{
      return noCustInLineMsg;
}
}

function currentLine (x) {
  var katzDeliLineCLONE = [];
  var i = 0;
  var currentLineMsg = "The line is currently: ";
  var currentLineNoCustInLineMsg = "The line is currently empty.";
  var currentLineList = [];
  var check = x;
  var len;
  var stringCurrentList;

  katzDeliLineCLONE = x.slice();
  len = katzDeliLineCLONE.length;

  if (katzDeliLineCLONE[i] == undefined ){
    return currentLineNoCustInLineMsg;
  }else {

  while (i < len) {

    currentLineList.push((i+1) +"."+" " + katzDeliLineCLONE[i]);
    stringCurrentList = currentLineMsg + currentLineList.join(", ");
    i++;
  }
}
  return stringCurrentList;
}

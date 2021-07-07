function takeANumber(numberInline,customerName){
  numberInline.push(customerName)
  return "Welcome, " +  customerName + ". " + "You are number " + numberInline.length + " in line."
}
function  nowServing(numberInline){
  if(numberInline.length < 1){
    return "There is nobody waiting to be served!"
  }
  else{
    var first = numberInline[0];
    numberInline.shift();
    return "Currently serving "+ first +".";
  }
}
function currentLine(numberInline){
  var stringToReturn = "";
  var stringBuilt =  "The line is currently:";
  if(numberInline.length === 0){
    stringToReturn = "The line is currently empty."
  }
  else{
    for(var i = 0; i < numberInline.length; i++){
      stringBuilt += " " + (i+1) + ". " + numberInline[i]+",";
    }
    stringToReturn = stringBuilt.substring(0, stringBuilt.length - 1); 
  
  }
  return stringToReturn
  
}
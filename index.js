function takeANumber(katzDeliLine,name){

    var currentLine = katzDeliLine.push(name);
    var position = katzDeliLine.length;
    return('Welcome, '+name+". You are number "+position+" in line.")

}
//////////////////////////////////////////////////////////////////////////
function nowServing(array){
  if(array.length === 0){
    return "There is nobody waiting to be served!";
  }else{
    var serving = array.shift();
    return "Currently serving "+serving+".";
  }
}
//////////////////////////////////////////////////////////////////////////
function currentLine(array){
    var finalStr = "The line is currently: "
    if(array.length === 0){
      return "The line is currently empty.";
    }
    for (var i = 0; i < array.length; i++) {
      var person = array[i];
      finalStr+=((i+1)+". "+person);
      if(i !== (array.length-1)){
        finalStr+=", ";
      }
    }
    return finalStr;
}

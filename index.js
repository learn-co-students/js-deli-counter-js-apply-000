//greet
function takeANumber(theLine, person){
  var pos = theLine.push(person);
  var result = "Welcome, " +person +". You are number " +pos + " in line."
  return result;

}

//remind
function currentLine(theLine){
  var result = "The line is currently: ";
  var temp = "";
  var i =0;

  if(!theLine[i]){
    return "The line is currently empty.";
  }

  for (;theLine[i];i++){
    var j =i+1;
    if(i ==0 )
    {
      temp = j + ". " + theLine[i]
    }else{
      temp = temp+", " + j + ". " + theLine[i]
    }
  }

  return result+temp;

}

//inform
function nowServing(theLine){
  if(!theLine[0]){
    return "There is nobody waiting to be served!"
  }
  var result= "Currently serving "

  var person = theLine.shift();
  result = result + person +"."
  return result;

}

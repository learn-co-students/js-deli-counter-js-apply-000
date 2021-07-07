
function takeANumber(currentline, new_name){
  currentline.push(new_name);      // was  KatzDeliLine.push
  return("Welcome, " + new_name + ". You are number " + (currentline.length) + " in line.")     // dont need + b/c pushed new name, increased length. 
}


function nowServing(currentline){
  
  if(currentline.length === 0){
    return("There is nobody waiting to be served!")
  }else{
    var currentCustomer = currentline[0]
    currentline.shift();   // was KatzDeliLine.shift()
    return("Currently serving " + currentCustomer + ".")  // was currentline[0]
    //a way to do without holder variable ? Hmm... 
  }

}


function currentLine (currentline){
  var outputString = "";
  if (currentline.length === 0){
    outputString = "The line is currently empty.";
  } else {
    outputString = "The line is currently: ";
    for (var i = 0; i < currentline.length; i++){
      outputString += ( (i+1) + ". " + currentline[i] + ", ") 
    }
  }
  
  if(outputString != "The line is currently empty."){
    outputString = outputString.slice(0, -2)
  }
  
  return outputString
  
}

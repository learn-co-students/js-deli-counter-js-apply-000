function takeANumber(arr, name){
  arr.push(name);
  var position = arr.indexOf(name) + 1;
  return "Welcome, " + name + ". You are number " + position + " in line.";
}

function nowServing(arr){
  if (arr.length > 0) {
    var servingName = arr[0];
    arr.shift();
    return "Currently serving " + servingName + ".";
  } else {
    return "There is nobody waiting to be served!";
  }
}

function currentLine(arr){
  if(arr.length > 0){
    var text = "The line is currently: ";
    for(var i = 0; i < arr.length; i++){
      if(i === arr.length - 1){
        text = text.concat(i+1,". ",arr[i]);
      } else {
        text = text.concat(i+1,". ",arr[i],", ");
      }
      
    }
    
    return text;
  } else {
    return "The line is currently empty."  
    }
    
}
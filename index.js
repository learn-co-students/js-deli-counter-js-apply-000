function takeANumber(arr, name){
  arr.push(name);
  var index = arr.length;
  return "Welcome, " + name + ". You are number " + index + " in line."
}


function nowServing(arr){
  if(arr.length === 0){
    return "There is nobody waiting to be served!";
  } else {
    var servedName = arr.shift();
  }
  return "Currently serving " + servedName + "." 
}

function currentLine(arr){
  if(arr.length === 0){
    return "The line is currently empty."
  }else{
    var newArr = [];
    for(var i = 0; i < arr.length; i++){
      var ele = arr[i];
      var pushEle = (i + 1) + ". " + ele;
      newArr.push(pushEle);
    }
    return "The line is currently: " + newArr.join(", ");
  }
}

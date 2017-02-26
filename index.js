var takeANumber = function(katzDeliLine, name){
  var num = katzDeliLine.length + 1;
  katzDeliLine.push(name);
  return "Welcome, " + name + ". You are number " + num + " in line.";
}

var nowServing = function(arr){
  if(arr.length === 0){
    return "There is nobody waiting to be served!";
  }
  var string = "Currently serving " + arr[0] + ".";
  arr.shift();
  return string;
}

var currentLine = function(line){
  if(line.length === 0){
    return "The line is currently empty.";
  }
  var string = "The line is currently: ";
  for(var i = 0; i < line.length; i++){
    var num = i + 1;
    string += num + ". " + line[i];
    if(line.length - i > 1){
      string += ", ";
    }
  }
  return string;
}

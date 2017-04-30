var katzDeliLine = [];

function takeANumber(katzDeliLine, name){
  if(katzDeliLine.indexOf(name) === -1){
    katzDeliLine.push(name);
  }
  var message = "Welcome, " + name + "." + " You are number " + (katzDeliLine.indexOf(name) + 1) + " in line.";
  return message;
}

function currentLine(line){
  var newArray = [];

  if(line.indexOf(line[0]) !== -1){
    for(var i = 0; i < line.length; i++){
    newArray.push(" "+ (i + 1)+ "." + " " + line[i]);
    }
  }else{
    return ("The line is currently empty.");
  }

  return "The line is currently:" + newArray;
}

function nowServing(line){
  var newArray = [];
  if(line.indexOf(line[0]) !== -1){
    newArray.push("Currently serving " + line[0] + ".");
    line.shift();
    return newArray;
  }else{
    newArray.push("There is nobody waiting to be served!");
    return newArray;
  }

}

function takeANumber(katzDeli,newPerson){
  katzDeli.push(newPerson)
  return "Welcome, " + newPerson + ". You are number " + katzDeli.length + " in line."
}

function nowServing(katzDeli){
  if (katzDeli.length === 0){
    return "There is nobody waiting to be served!"
  }else{
    var response = "Currently serving " + katzDeli.shift() + "."
    return response;
  }
}

function currentLine(katzDeli){
  //The line is currently: 1. Ada 2. Grace".
  //If there is nobody in line, it should return "The line is currently empty."
  if (katzDeli.length === 0){
    return "The line is currently empty."
  }else{
    var response = 'The line is currently:'
    for (var i=0; i<katzDeli.length-1; i++){
      response += " " + Number(i+1) + ". " + katzDeli[i] + ","
    }
    response += " " + katzDeli.length + ". " + katzDeli[katzDeli.length-1]
    return response;
  }
}

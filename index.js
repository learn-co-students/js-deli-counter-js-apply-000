

function takeANumber(katzDeliLine, person){
  var nextPlease = katzDeliLine.length + 1;
  var response = "Welcome, " + person + ". You are number " + nextPlease + " in line.";
 katzDeliLine.push(person);
  return response;
}

function nowServing(katz) {
  if(katz.length === 0) {
    var noserve = "There is nobody waiting to be served!";
    return noserve;
  }
  else{
    var person = katz.shift();
    var response = "Currently serving " + person + ".";
    return response;
  }
}

function currentLine(deliLine) {
  if(deliLine.length === 0){
    var emptyLineResponse = "The line is currently empty.";
    return emptyLineResponse;
  }
  else{
    var line = [];
    deliLine.forEach(function(person, index){
      line.push((index + 1).toString() + ". " + person);
    });
    var response = "The line is currently: " + line.join(", ")
    return response
  }
}
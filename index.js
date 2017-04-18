var katzDeliLine = [];
//1.
function takeANumber(katzDeliLine,personName) {
  katzDeliLine.push(personName);
  return "Welcome, "+ personName + ". You are number " + katzDeliLine.length + " in line." ;
}
//2.
function nowServing(line){
  if (line.length === 0 ){
    return  "There is nobody waiting to be served!";
  }else{
    var person = line.shift();
    return "Currently serving " + person + ".";
  }
}

//3.
function currentLine(line){
  if (line.length === 0 ){
    return "The line is currently empty.";
  }else{
    var output = [];
    line.forEach(function(person, index){
      output.push((index + 1) + ". " + person);
    });
    return "The line is currently: " + output.join(", ");
  }
}


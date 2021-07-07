function takeANumber(currentLine, name){
  var temp = currentLine.length +1;
    var sentence = `Welcome, ${name}. You are number ${temp} in line.`;
    currentLine.push(name);
    return sentence;
}

function nowServing(katzDeliLine){
  if (katzDeliLine.length === 0){
    return "There is nobody waiting to be served!";
  }
  else {
    var temp = katzDeliLine[0];
    var sentence = `Currently serving ${katzDeliLine[0]}.`;
    katzDeliLine.shift();
    return sentence;
  }
}
function currentLine(currentLine){
    if (currentLine.length != 0){
      var sentence = "The line is currently: ";
      for (var i=0; i < currentLine.length; i++){
        var temp = i + 1;
        if (currentLine.length === 1 || i === currentLine.length -1){
          sentence = sentence + `${temp}. ${currentLine[i]}`
        }
        else{
          sentence = sentence + `${temp}. ${currentLine[i]}, `;
        }
      }
      return sentence;
    }
    else return "The line is currently empty."
  }

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  var count = katzDeliLine.length - 1;
  var number = katzDeliLine.length;
  return `Welcome, ${katzDeliLine[count]}. You are number ${number} in line.`;
}
function nowServing(katzDeliLine){
  if(katzDeliLine.length == 0) {
    return "There is nobody waiting to be served!";
  }
  else if (katzDeliLine.length != 0) {
    return `Currently serving ${katzDeliLine.shift()}.`;

  }
}
function currentLine(line) {
  if(line.length == 0) {
    return "The line is currently empty.";
  }
  else {
      var newString = [];
      for (var i = 0 ; i < line.length; i++){
        var number = i + 1;
        var newline = line[i];
        newString.push(` ${number}. ${newline}`);
      }

      return `The line is currently:${newString}`;
  }


}

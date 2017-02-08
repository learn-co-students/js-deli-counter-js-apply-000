
function takeANumber(katzDeliLine,name){
  var position = katzDeliLine.length+1;
  var str = `Welcome, ${name}. You are number ${position} in line.`

  katzDeliLine.push(name);
  return str;
}
function nowServing(katzDeliLine){
  var person = katzDeliLine[0];
  var str = `Currently serving ${person}.`

  if(katzDeliLine.length == 0){
      return "There is nobody waiting to be served!"

  } else {
    katzDeliLine.shift();
    return str;
  }
}

function currentLine(katzDeliLine){
  var str = "The line is currently: "; //initialize string

  if(katzDeliLine.length == 0){
    return "The line is currently empty."

  } else {
    for(var i = 0; i < katzDeliLine.length; i++){
      var position = i + 1;
      var name = katzDeliLine[i];
      str += `${position}. ${name}, `
    }
  str = str.substring(0, str.length - 2);
  return str;
  }
}

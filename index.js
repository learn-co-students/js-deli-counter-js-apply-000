var katzDeliLine = [];

function takeANumber(line, name){
  var spot = line.length + 1;
  line.push(name);
  return `Welcome, ${name}. You are number ${spot} in line.`;

}


// 2. Build a function `nowServing`. This function should accept the current line of people (`katzDeliLine`)
// and return the first person in line and then remove that individual from the line. If there is nobody in
// line, it should return "There is nobody waiting to be served!"

function nowServing(line){
  if (line.length == 0){
    return "There is nobody waiting to be served!";
  } else {
    var str = `Currently serving ${line[0]}.`;
    line.splice(0, 1);
  } return str;
}


// 3. Build a function `currentLine` that accepts the current line of people and returns the current line as
// a string; for example, if 'katzDeliLine' is currently `["Ada", "Grace"]`, `currentLine(katzDeliLine)`
// would return `"The line is currently: 1. Ada, 2. Grace"`.  You don't have to use `katzDeliLine` as a variable
// or parameter name in your function though, it's just an example of a variable that might be passed to it.
// If there is nobody in line, it should return `"The line is currently empty."`

function currentLine(line){
  if (line.length == 0){
    return "The line is currently empty.";
  } else {
    var str = "The line is currently: ";
    for (var i = 0; i < line.length; i++){
      str += `${i+1}. ${line[i]}`;
      if (i != line.length -1){
        str += ", ";
      }
    }
  } return str;
}

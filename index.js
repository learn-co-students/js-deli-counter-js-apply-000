var katzDeli = [];

function takeANumber(katzDeliLine,name){
  katzDeliLine.push(name);
  return "Welcome, " + name +". You are number " + katzDeliLine.length + " in line.";

}

function nowServing(line){
  if (line.length == 0) {
    return "There is nobody waiting to be served!"
  }
  else if (line.length > 0){
    var serving = line.shift();
  return "Currently serving " + serving + ".";

  }
}

function currentLine(line){
  if (line.length == 0) {
    return "The line is currently empty.";
  }
  else if (line.length > 0){
    var string = "The line is currently:"
    for (var i = 0; i < line.length; i++) {
      string = string + " " + (i+1) + ". " + line[i] + ",";
    }
    string = string.substr(0, string.length-1);
    return string;
  }
}

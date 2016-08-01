var katzDeli = [];

function takeANumber(katzDeliLine,name) {
  katzDeliLine.push(name);
  return "Welcome, " + name + ". You are number " + katzDeliLine.length + " in line.";
}

function nowServing(line) {
  if (line.length === 0) {
    return "There is nobody waiting to be served!";
  } else {
    var serving = line.shift();
    return "Currently serving " + serving + ".";
  }
}

function currentLine(line) {
  if (line.length === 0) {
    return "The line is currently empty.";
  } else {
    var arr = [];
    line.forEach(function(person,index) {
      arr.push((index+1) + ". " + person);
    });
    return "The line is currently: " + arr.join(", ");
  }
}

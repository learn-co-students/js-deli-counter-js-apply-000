var katzDeli = [];
var katzDeliLine = [];

function takeANumber(katzDeliLine, name) {

katzDeliLine.push(name)

var number = katzDeliLine.indexOf(name) + 1

return "Welcome, " + name + ". You are number " + 
number + " in line."
  
}

function nowServing(katzDeliLine) {

if (katzDeliLine.length < 1) 

{ return "There is nobody waiting to be served!"
  
} else {
  var person = katzDeliLine[0]
  katzDeliLine.shift()
  return "Currently serving " + person + "."
}

}


function currentLine(line) {
  var text = "The line is currently: "
  var i = 0;
  var num = i + 1
  if (line.length < 1) { return "The line is currently empty."
    
  } else {
    
  do {
      text += num + ". " + line[i] + ", ";
      i++; num++;
  }
  while (line.length > i);     }

  var len = text.length;
  var want = len - 2;
  var newtext = text.slice(0, want)
  return newtext
}
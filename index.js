var myDeli = [];

function currentLine(line){
  if(!line.length) {
    return "The line is currently empty.";
  }
  var NameandNum = [];
  
  for(var i=0; i<line.length; i++) {
    NameandNum.push(i+1 + ". "+ line[i]);
  }
  console.log("The line is currently: " + NameandNum);
  return "The line is currently: " + NameandNum.join(', ');
}

function nowServing(line) {
  if(!line.length) {
    console.log("There is nobody waiting to be served!");
    return "There is nobody waiting to be served!";
  } else {
    return "Currently serving " + line.shift() + ".";
  }
}

function takeANumber(line, name){
  line.push(name);
  
  console.log("Welcome, " + name + ". You are number " + line.length + " in line.");
  
  return "Welcome, " + name + ". You are number " + line.length + " in line.";
}
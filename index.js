var katzDeli = []

function takeANumber(line, name){
  line.push(name);

  console.log("Welcome, " + name + ". You are number " + line.length + " in line.");

}

function nowServing(line) {
  if(!line.length) {
    console.log("There is nobody waiting to be served!")

  } else {
    console.log("Currently serving " + line.shift());

  }
}

function currentLine(line){
  if(!line.length) {
    return "The line is currently empty.";
  }

var lineNamesandNumbers = [];

  for(i=0; i<line.length; i++) {
    lineNamesandNumbers.push(i+1 + ". "+ line[i]);
  }
  console.log("The line is currently: " + lineNamesandNumbers.join);

}

takeANumber(katzDeli, "Ada");
takeANumber(katzDeli, "Grace");
takeANumber(katzDeli, "Kent");
takeANumber(katzDeli, "Matz");
currentLine(katzDeli);
nowServing(katzDeli);

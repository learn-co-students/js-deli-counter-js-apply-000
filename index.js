//build a function that a new customer will use when entering the deli
function takeANumber (katzDeliLine, name){
  var position = katzDeliLine.length+1
  katzDeliLine.push(name)
  return ("Welcome, " +name+ ". You are number " +position+ " in line.")
}

//build a function that accepts the current number of people in line, and then remove the individual from line
function nowServing (deliLine){
  var name;
  if (deliLine.length == 0){
    return "There is nobody waiting to be served!"
  }
  var katzDeli = [];

  function currentLine(line){
    if(!line.length) {
      return "The line is currently empty.";
    }
    var lineNamesandNumbers = [];

    for(var i=0; i<line.length; i++) {
      lineNamesandNumbers.push(i+1 + ". "+ line[i]);
    }
    console.log("The line is currently: " + lineNamesandNumbers)
    return "The line is currently: " + lineNamesandNumbers.join(', ');
  }  return "Currently serving " + lineNamesandNumbers + "."
}

//build a function that accepts the current line of people and returns the current line as a string
function currentLine(katzDeliLine) {
  if (katzDeliLine.length==0) {
    return "The line is currently empty."  // early return
  }

  var result = "The line is currently:";
  for(var i=0; i<katzDeliLine.length; i++) {
    result += ` ${i+1}. ${katzDeliLine[i]}` + (i+1<katzDeliLine.length?",":"");
  }
  return result;

//build a function that accepts the current line of people and returns the current line as a string
var katzDeli = [];

function currentLine(line){
  if(!line.length) {
    return "The line is currently empty.";
  }
  var otherDeli = [];

  for(var i=0; i<line.length; i++) {
    otherDeli.push(i+1 + ". "+ line[i]);
  }
  console.log("The line is currently: " + otherDeli)
  return "The line is currently: " + otherDeli.join(', ');
}}

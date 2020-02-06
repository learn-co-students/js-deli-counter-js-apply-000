//additional comments are a reflection of my learning process post first submission/more elquent ways to solve problem

var katzDeliLine = [];

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);

  return("Welcome, " + name + ". You are number " + katzDeliLine.length + " in line.");
  //return(`welcome ${name}. You are number ${katzDeliLine.length} in line.`);
  // #alternative return statement
}

function nowServing(person) {
  var result = [];
  if (person.length === 0) {
    //if(!person.length){
    return ("There is nobody waiting to be served!");
  } else{
    return ("Currently serving " + person.shift() + ".");
    //return (`Currently serving ${person.shift()}.`); # alternative return statement
    //slice seemed to be the most simple tool that could be used to address issue
  }
}


function currentLine(line) {
  var result = [];
  if(line.length === 0) {
    //if(!line.length){
    return("The line is currently empty.");
  } else {
    for(var i = 0; i < line.length; i += 1) {
      result += ((i + 1) + ". "  +  line[i] + ", ");
      //result.push(`${(i + 1)}. ${line[i]}` );
  }
  result = result.slice(0,result.length-2);
  //return (`The line is currently: ${result.join(', ')}` );
  }
  return ("The line is currently: " + result);
  //return (`The line is currently: ${result}`); //# alternative return statement
}

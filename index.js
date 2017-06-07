var katzDeli = [];

function takeANumber(line, name){
  line.push(name);
  return `Welcome, ${name}. You are number ${line.length} in line.`;
};

function nowServing(line){
  if (line.length === 0){
    return "There is nobody waiting to be served!";
  } else {
    var beingServed;
    beingServed = line[0];
    line.shift();
    return `Currently serving ${beingServed}.`;
  }
};

function currentLine(line){
  if (line.length === 0){
    return "The line is currently empty."
  } else{
    var numberedLine = [];
    for (var i = 0; i < line.length; i++){
      numberedLine.push(` ${i + 1}. ${line[i]}`);
    }
  }
  return `The line is currently:${numberedLine}`
};

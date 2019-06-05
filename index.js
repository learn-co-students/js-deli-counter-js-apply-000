var deliLine = [];

function takeANumber(line, name) {
 line.push(name);
 
  return "Welcome, " + name + "." + " You are number " + line.length + " in line.";
}

function nowServing(line) {
  if (line.length === 0) {
    return "There is nobody waiting to be served!";
  } else {
    return "Currently serving " + line.shift() +".";
    }
}

function currentLine(line) {
  var nameAndNumber = [];
  if (line.length === 0) {
    return "The line is currently empty.";
  } else {
    for (var i = 0; i < line.length; i++) {
     nameAndNumber = nameAndNumber + (i+1) + ". " + line[i] + ", ";
    }
      nameAndNumber = nameAndNumber.slice(0, -2);
      return "The line is currently: " + nameAndNumber;
    }
  } 

 // for (var i = 0; i < line.length; i++){
  //  deliLine.push(line[i]);
 // }
 
   //do {
   // return "The line is currently: " + (i+1) + ". " + line[i] + ",";
   // i++;
   // }
   // while (i < line.length);
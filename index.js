var katzDeliLine = [];

function takeANumber(katzDeliLine, newName){
  katzDeliLine.push(newName);
  return "Welcome, " + newName + ". " + "You are number " + (katzDeliLine.indexOf(newName) + 1) + " in line.";
};

function nowServing(katzDeliLine){
  if (katzDeliLine[0] === undefined){
    return "There is nobody waiting to be served!";
  } else {
    return "Currently serving " + katzDeliLine.shift() + ".";
  }
};

function currentLine(katzDeliLine){
  if (katzDeliLine[0] === undefined){
    return "The line is currently empty.";
  } else {
    var line = "The line is currently: ";
    katzDeliLine.forEach(function(name, ind, array){
      line += (ind + 1) + ". " + name;
      if (ind < array.length - 1){
        line += ", "
      }
    });
    return line;
  }
};

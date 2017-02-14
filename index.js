function takeANumber(katzDeliLine, name) {
  var katzDeli =[];
  katzDeliLine.push(name);
  var actual = katzDeliLine.indexOf(name) + 1;
  return "Welcome, " + name + ". You are number " + actual + " in line.";
}

const deliLine = ["Steven", "Blake", "Avi"];

function nowServing(deliLine) {
 let i = 0;
 while (i <deliLine.length) {
   i++;
  }
  if (deliLine === undefined || deliLine.length === 0) {
    return "There is nobody waiting to be served!";
  } else return "Currently serving " + deliLine.shift() + ".";
}

function currentLine(line) {
 var lineList = [];
 for (var i = 0; i < line.length; i++) {
  lineList.push(" " + [i+1] + ". " + line[i]);
  } if (line === undefined || line.length === 0) {
      return "The line is currently empty.";
  } else return "The line is currently:" + lineList;
}

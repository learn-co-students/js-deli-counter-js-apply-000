var katzDeli = [];
var otherDeli = ["Steven", "Blake", "Avi"];

function takeANumber(katzDeliLine, name) {
    katzDeliLine.push(name);
    return "Welcome, " + name + ". You are number " + katzDeliLine.length + " in line."
}


function nowServing(deliLine) {
  if (deliLine.length === 0) {
    return "There is nobody waiting to be served!";
  } else {
    var customerToServe = deliLine.shift();
    return "Currently serving " + customerToServe +".";
  }
}

function currentLine(deliLine) {
    if (deliLine.length === 0) {
      return "The line is currently empty.";
    } else {
      var i = 0;
      var str = 'The line is currently: ';
      while (i < deliLine.length) {
      	if (i === deliLine.length - 1) {
        	str += i + 1 + ". " + deliLine[i];
        } else {
        	str += i + 1 + ". " + deliLine[i] + ', ';
        }
        i++;
      }
    }
    return str;
}

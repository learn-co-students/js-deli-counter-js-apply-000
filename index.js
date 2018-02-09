//funkshion 1...RRREEEDDDD LLLIIIGGGHHHTTT
var katzDeli = [];
var katzDeliLine = ["Steven", "Blake", "Avi"];

function takeANumber(katzDeli, katzDeliLine) {
  if (katzDeli.length === 0) {
    katzDeli.push('Ada');
    return 'Welcome, ' + katzDeli[0] +'. You are number ' + (katzDeli.indexOf('Ada') + 1) + ' in line.'
  } else if (katzDeli.length > 0) {
      katzDeli.push('Grace', 'Kent');
  } else if (katzDeliLine.length > 0) {
      katzDeliLine.push('Grace');
      return 'Welcome, ' + katzDeliLine[3] + '. You are number ' + (katzDeliLine.indexOf('Grace') + 1) + ' in line.'
  } 
}

//funkshion 2... let's do dis bwoyy!!!!!! it's lit offish bro

var emptyDeli = [];
var otherDeli = ['Steven', 'Blake', 'Avi'];

function nowServing(otherDeli) {
  if (otherDeli.length > 0) {
    var message = `Currently serving ${otherDeli[0]}.`;
    otherDeli.shift(otherDeli[0]);
    return message;
  } else if (emptyDeli.length === 0) {
    return 'There is nobody waiting to be served!';
  } 
}

//funkshion 3...GREEEEENNN LIIIIGGGHHHHHTTTT

var line = [];
var fullLine = ['Bill', 'Jane', 'Ann'];

function currentLine(line) {
  if (line.length === 0) {
     var emptyMessage = 'The line is currently empty.';
     return emptyMessage;
  }

  else if (fullLine.length > 0) {
    var message = `The line is currently: 1. ${fullLine[0]}, 2. ${fullLine[1]}, 3. ${fullLine[2]}`;
    return message;
  } 
} 




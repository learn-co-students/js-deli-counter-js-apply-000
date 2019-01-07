var katzDeli = [];
var katzDeliLine = [];
function takeANumber(katzDeliLine, name) {
  if (name != undefined && String(name) === name) {
    katzDeliLine.push(name);
    return 'Welcome, ' + name
          + '. You are number '
          + katzDeliLine.length
          + ' in line.';
  }
}
function nowServing(katzDeliLine) {
  if(katzDeliLine.length === 0) {
    return 'There is nobody waiting to be served!';
  }
  var currentCustomer = katzDeliLine.shift();
  return 'Currently serving ' + currentCustomer + '.';
}
function currentLine(katzDeliLine) {
  if (katzDeliLine.length === 0 ) {
    return "The line is currently empty.";
  } else {
    var line = '';
    for (var i = 0; i < katzDeliLine.length; i++) {
      line += '' + (i + 1) + '. ' + katzDeliLine[i] + ', ';
    }
    line = line.substring(0, line.length - 2);
    return 'The line is currently: ' + line;
  }
}
//takeANumber('Steven');
//takeANumber('Bill');
//takeANumber('Jane');
//takeANumber('Ann');
//nowServing();

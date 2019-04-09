
let katzDeliLine = [];

function takeANumber(katzDeliLine, customerName) {
  katzDeliLine.push(customerName);
  var lineLength = (katzDeliLine.length);
  var position = lineLength.toString();
  const welcomeMessage = ('Welcome, ' + customerName + '. You are number ' + position + ' in line.')
  return welcomeMessage;
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length > 0) {
    var announcement = 'Currently serving ' + katzDeliLine[0] + '.';
    katzDeliLine.shift();
    return announcement
  } else {
    return 'There is nobody waiting to be served!'
  }
}

function currentLine(katzDeliLine) {
  var lineAnnouncement = 'The line is currently: '
  var line = [];
  if (katzDeliLine.length > 0) {
    for(let i = 0; i < katzDeliLine.length; i++) {
      line[i] = `${i + 1}. ${katzDeliLine[i]}`  
    }
  lineAnnouncement += line.join(', ')
  return lineAnnouncement
  } else {
    return "The line is currently empty.";
  }
}


var takeANumber = function(katzDeliLine, name){
  katzDeliLine.push(name);
  return (`Welcome, ${name}. You are number ${katzDeliLine.length} in line.`);
}

function nowServing(katzDeliLine){
  if(katzDeliLine.length){
    return (`Currently serving ${katzDeliLine.shift()}.`);
  }
  else {
    return 'There is nobody waiting to be served!';
  }
}

function currentLine(katzDeliLine){
  if(katzDeliLine.length){
     var i;
     var lineAnnouncement = [];
     for (i = 0; i < katzDeliLine.length; i++) {
       lineAnnouncement[i] = (" " + (i + 1) + ". " + katzDeliLine[i]);
     }
     return (`The line is currently:${lineAnnouncement}`);
  }
  else {
    return 'The line is currently empty.';
  }
}


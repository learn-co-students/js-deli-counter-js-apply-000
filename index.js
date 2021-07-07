var katzDeliLine = [];

function takeANumber(katzDeliLine, name){
katzDeliLine.push(`${name}`);
return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.` 
}

function nowServing(katzDeliLine){
  var i = 0
  while (i < katzDeliLine.length) {
    i++;
  }
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!"
  }
  else
  return (`Currently serving ${katzDeliLine.shift()}.`)
}

function currentLine(queue){
  var queueNum = [];
  if (queue.length === 0){
    return "The line is currently empty."
  }
  for (var i = 0; i < queue.length; i++) {
    queueNum.push(` ${i+1}. ${queue[i]}`)
  }
  return "The line is currently:" + queueNum;
}